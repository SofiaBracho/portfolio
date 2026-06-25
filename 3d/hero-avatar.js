// hero-avatar.js — vanilla three.js portfolio hero
// Sequence: walk in from left -> wave hello -> idle loop (+ head tracks pointer),
// with occasional idle-breakers (thinking / texting).
//
// Usage:
//   import { createHeroAvatar } from './hero-avatar.js';
//   const hero = createHeroAvatar(document.getElementById('hero'), {
//     modelUrl: './avatar_web.glb',
//   });
//   // hero.dispose() to tear down.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const CFG = {
  // camera
  cameraFov: 32,
  cameraPos: [0, 1.12, 2.6], // x,y,z (metres). Avatar ~1.7m, feet at y=0.
  lookAt: [0, 1.12, 0], // raised so the head is not cropped

  // entrance — walks in from far RIGHT, settles right of centre, then turns to camera
  walkFromX: 3.2, // start well off-screen right
  walkToX: 0.7, // arrival x (right of centre, clear of the hero copy)
  walkSeconds: 3.4, // time to cross
  walkFaceYaw: -Math.PI / 2, // body faces screen-left while walking (movement dir)
  faceYaw: 0, // final body facing (0 = toward camera)
  turnSeconds: 0.55, // turn-to-camera duration on arrival

  // head tracking (tune signs if head turns the wrong way)
  // NB: three.js strips the ':' from glTF bone names -> 'mixamorigHead'
  headBone: 'mixamorigHead',
  neckBone: 'mixamorigNeck',
  maxYaw: THREE.MathUtils.degToRad(38), // left/right
  maxPitch: THREE.MathUtils.degToRad(24), // up/down
  yawSign: 1,
  pitchSign: 1,
  headFollow: 0.12, // smoothing (0..1 per frame)
  neckShare: 0.45, // fraction of look distributed to neck

  // phone prop (shown only during the texting clip), locked to a hand bone
  phoneHandBone: 'mixamorigRightHand',
  phoneClip: 'texting',
  // phone is parented to the hand bone, so these are LOCAL to that hand.
  // tune if it sits off: pos in metres [x,y,z], rot in radians [x,y,z].
  phoneLocalPos: [0.030, 0.116, 0.068], // tuned in-hand (metric)
  phoneLocalEuler: [0.848, 0.318, -1.572], // tuned in-hand

  // idle-breakers
  breakers: ['thinking', 'texting'],
  breakerEveryMin: 9, // seconds
  breakerEveryMax: 16,

  crossfade: 0.35,
};

export function createHeroAvatar(container, opts = {}) {
  const cfg = { ...CFG, ...opts };
  const modelUrl = opts.modelUrl || './avatar_web.glb';

  // ---- renderer ----
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';

  // ---- scene / camera ----
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(cfg.cameraFov, 1, 0.1, 100);
  camera.position.set(...cfg.cameraPos);
  camera.lookAt(...cfg.lookAt);

  // ---- lights (themed: warm yellow key, cyan rim, to match the site palette) ----
  const hemi = new THREE.HemisphereLight(0x9fd2ff, 0x2a2410, 0.9); // cyan sky, warm ground
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffd24a, 2.2); // electric-yellow key (front-right)
  key.position.set(2.5, 3, 3);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x22d3ee, 1.6); // cyan rim (back-left)
  rim.position.set(-3, 2, -2.5);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0x6fa8ff, 0.5); // soft blue fill (front-left)
  fill.position.set(-2, 1, 3);
  scene.add(fill);

  // ---- state ----
  const clock = new THREE.Clock();
  let mixer = null;
  let actions = {};
  let current = null; // current AnimationAction
  let model = null;
  let headBone = null;
  let neckBone = null;
  let handBone = null;
  let phone = null;
  let currentName = null;
  let phase = 'loading'; // loading -> walking -> turning -> waving -> idle
  let walkT = 0;
  let turnT = 0;
  let breakerTimer = 0;
  let nextBreakerAt = rand(cfg.breakerEveryMin, cfg.breakerEveryMax);
  const pointer = new THREE.Vector2(0, 0); // -1..1
  let disposed = false;
  let phoneTuning = false;
  let controls = null;
  const handScale = new THREE.Vector3(1, 1, 1);

  // metric pos -> local bone units (divide out the bone's tiny world scale)
  function setPhonePose(pos, euler) {
    if (!phone) return;
    phone.position.set(pos[0] / handScale.x, pos[1] / handScale.y, pos[2] / handScale.z);
    phone.rotation.set(euler[0], euler[1], euler[2]);
  }

  // ---- load ----
  const draco = new DRACOLoader();
  draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  loader.load(
    modelUrl,
    (gltf) => {
      if (disposed) return;
      model = gltf.scene;
      const clean = (s) => s.replace(/[^a-z0-9]/gi, '').toLowerCase();
      const headKey = clean(cfg.headBone);
      const neckKey = clean(cfg.neckBone);
      const handKey = clean(cfg.phoneHandBone);
      const bones = {}; // cleaned-name -> bone, for robust fallback resolution
      model.traverse((o) => {
        if (o.isMesh) {
          o.frustumCulled = false;
          o.castShadow = false;
        }
        if (o.isBone) {
          bones[clean(o.name)] = o;
          if (clean(o.name) === headKey) headBone = o;
          if (clean(o.name) === neckKey) neckBone = o;
          if (clean(o.name) === handKey) handBone = o;
        }
      });
      // hand bone fallback chain so the phone always rides a real hand bone
      // (configured right hand -> left hand -> any bone whose name contains "hand").
      if (!handBone) {
        handBone = bones[clean('mixamorigLeftHand')] ||
          Object.keys(bones).find((k) => /hand/.test(k)) && bones[Object.keys(bones).find((k) => /hand/.test(k))] ||
          null;
        if (handBone) console.warn('[hero-avatar] right-hand bone missing — using fallback hand bone for phone');
      }
      if (!headBone) console.warn('[hero-avatar] head bone not found — head tracking off');
      model.position.set(cfg.walkFromX, 0, 0);
      model.rotation.y = cfg.walkFaceYaw;
      scene.add(model);

      phone = makePhone();
      phone.visible = false;
      if (handBone) {
        // parent to the hand so the phone is truly held and rides every hand
        // transform of the clip; compensate the bone's world scale so the phone
        // keeps its real-world (metric) size AND so the local offset behaves in
        // metres (bone scale is tiny on Mixamo rigs).
        handBone.updateWorldMatrix(true, false);
        handBone.getWorldScale(handScale);
        phone.scale.set(1 / handScale.x, 1 / handScale.y, 1 / handScale.z);
        setPhonePose(cfg.phoneLocalPos, cfg.phoneLocalEuler);
        handBone.add(phone);
      }
      // no hand bone -> leave the phone unparented and hidden (updatePhone gates
      // visibility on a real hand bone) so it never floats detached at the origin.

      setupPhoneTuner();

      mixer = new THREE.AnimationMixer(model);
      for (const clip of gltf.animations) {
        // strip baked root motion (hips/root position) so the clip plays in place;
        // world translation is driven by code. Prevents drift + loop "teleport".
        clip.tracks = clip.tracks.filter((t) => !/(hips|root|armature)\.position$/i.test(t.name));
        actions[clip.name] = mixer.clipAction(clip);
      }
      startSequence();
    },
    undefined,
    (err) => console.error('[hero-avatar] load failed:', err)
  );

  function makePhone() {
    const g = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.072, 0.146, 0.0085),
      new THREE.MeshStandardMaterial({ color: 0x14151a, roughness: 0.45, metalness: 0.6 })
    );
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.062, 0.132),
      new THREE.MeshStandardMaterial({
        color: 0x0a0a0f,
        emissive: 0x4f86ff,
        emissiveIntensity: 1.15, // brighter so the held phone clearly reads during texting
        roughness: 0.25,
      })
    );
    screen.position.z = 0.0046;
    g.add(body, screen);
    return g;
  }

  // Live tuner: open the page with ?phonetune to drag the phone into place.
  // Forces the texting clip + phone visible, shows 6 sliders, prints CFG values.
  function setupPhoneTuner() {
    if (!phone || !/[?&]phonetune\b/.test(location.search)) return;
    phoneTuning = true;
    phone.visible = true;
    const panel = document.createElement('div');
    panel.style.cssText =
      'position:fixed;top:12px;left:12px;z-index:99999;background:#0b0e16ee;color:#cfe;' +
      'font:12px/1.5 monospace;padding:12px 14px;border:1px solid #22d3ee;border-radius:8px;width:230px';
    const rows = [
      ['posX', cfg.phoneLocalPos[0], -0.3, 0.3, 0.002],
      ['posY', cfg.phoneLocalPos[1], -0.3, 0.3, 0.002],
      ['posZ', cfg.phoneLocalPos[2], -0.3, 0.3, 0.002],
      ['rotX', cfg.phoneLocalEuler[0], -Math.PI, Math.PI, 0.01],
      ['rotY', cfg.phoneLocalEuler[1], -Math.PI, Math.PI, 0.01],
      ['rotZ', cfg.phoneLocalEuler[2], -Math.PI, Math.PI, 0.01],
    ];
    const out = document.createElement('pre');
    out.style.cssText = 'margin:8px 0 0;white-space:pre-wrap;color:#ffce1f';
    const vals = {};
    function apply() {
      setPhonePose([vals.posX, vals.posY, vals.posZ], [vals.rotX, vals.rotY, vals.rotZ]);
      out.textContent =
        'phoneLocalPos: [' + [vals.posX, vals.posY, vals.posZ].map((v) => v.toFixed(3)).join(', ') + '],\n' +
        'phoneLocalEuler: [' + [vals.rotX, vals.rotY, vals.rotZ].map((v) => v.toFixed(3)).join(', ') + '],';
    }
    rows.forEach(([name, init, min, max, step]) => {
      vals[name] = init;
      const wrap = document.createElement('label');
      wrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin:2px 0';
      const tag = document.createElement('span');
      tag.textContent = name;
      tag.style.width = '34px';
      const inp = document.createElement('input');
      inp.type = 'range';
      inp.min = min; inp.max = max; inp.step = step; inp.value = init;
      inp.style.flex = '1';
      inp.addEventListener('input', () => { vals[name] = parseFloat(inp.value); apply(); });
      wrap.append(tag, inp);
      panel.appendChild(wrap);
    });
    panel.appendChild(out);

    // orbit camera so you can inspect the hold from any angle; prints CFG cam values
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(...cfg.lookAt);
    controls.enableDamping = true;
    controls.update();
    const camOut = document.createElement('pre');
    camOut.style.cssText = 'margin:8px 0 0;white-space:pre-wrap;color:#22d3ee';
    function camReport() {
      const p = camera.position, t = controls.target;
      camOut.textContent =
        'cameraPos: [' + [p.x, p.y, p.z].map((v) => v.toFixed(3)).join(', ') + '],\n' +
        'lookAt: [' + [t.x, t.y, t.z].map((v) => v.toFixed(3)).join(', ') + '],';
    }
    controls.addEventListener('change', camReport);
    camReport();
    panel.appendChild(camOut);

    document.body.appendChild(panel);
    apply();
  }

  // phone is parented to the hand bone, so it follows automatically; just toggle it.
  function updatePhone() {
    if (!phone || phoneTuning) return;
    phone.visible = currentName === cfg.phoneClip && !!handBone;
  }

  function startSequence() {
    if (phoneTuning) {
      // hold a FROZEN texting pose so the hand is dead still while you place the phone
      model.position.set(cfg.walkToX, 0, 0);
      model.rotation.y = cfg.faceYaw;
      phase = 'frozen';
      const a = play(cfg.phoneClip, { loop: false, fade: 0 });
      if (a) {
        a.time = a.getClip().duration * 0.5; // mid-text pose
        a.paused = true;
      }
      mixer.update(0); // apply the frozen pose once
      return;
    }
    // 1) walk in
    phase = 'walking';
    walkT = 0;
    current = play('walk', { loop: true, fade: 0 });

    // 2) when arrived -> wave (handled in update). 3) wave finished -> idle.
  }

  function play(name, { loop = true, fade = cfg.crossfade } = {}) {
    const next = actions[name];
    if (!next) {
      console.warn('[hero-avatar] missing clip', name);
      return current;
    }
    next.reset();
    next.enabled = true;
    next.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    next.clampWhenFinished = !loop;
    next.fadeIn(fade);
    next.play();
    if (current && current !== next) current.crossFadeTo(next, fade, false);
    current = next;
    currentName = name;
    return next;
  }

  function startTurning() {
    phase = 'turning';
    turnT = 0;
    play('idle', { loop: true }); // settle out of the walk while turning
  }

  function gotoWave() {
    phase = 'waving';
    const wave = play('wave', { loop: false });
    const onFinished = (e) => {
      if (e.action !== wave) return;
      mixer.removeEventListener('finished', onFinished);
      gotoIdle();
    };
    mixer.addEventListener('finished', onFinished);
  }

  function gotoIdle() {
    phase = 'idle';
    breakerTimer = 0;
    nextBreakerAt = rand(cfg.breakerEveryMin, cfg.breakerEveryMax);
    play('idle', { loop: true });
  }

  function playBreaker() {
    const name = cfg.breakers[(Math.random() * cfg.breakers.length) | 0];
    if (!actions[name]) return gotoIdle();
    phase = 'breaker';
    const brk = play(name, { loop: false });
    const onFinished = (e) => {
      if (e.action !== brk) return;
      mixer.removeEventListener('finished', onFinished);
      gotoIdle();
    };
    mixer.addEventListener('finished', onFinished);
  }

  // ---- pointer ----
  function onPointerMove(e) {
    const r = container.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
  }
  function onPointerLeave() {
    pointer.set(0, 0);
  }
  window.addEventListener('pointermove', onPointerMove);
  container.addEventListener('pointerleave', onPointerLeave);

  // ---- head tracking (applied AFTER mixer.update so it overlays the clip) ----
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const headCur = { yaw: 0, pitch: 0 };
  function applyHeadTracking() {
    if (!headBone) return;
    const tgtYaw = cfg.yawSign * pointer.x * cfg.maxYaw;
    const tgtPitch = cfg.pitchSign * pointer.y * cfg.maxPitch;
    headCur.yaw += (tgtYaw - headCur.yaw) * cfg.headFollow;
    headCur.pitch += (tgtPitch - headCur.pitch) * cfg.headFollow;

    const neckShare = neckBone ? cfg.neckShare : 0;
    if (neckBone) {
      _e.set(headCur.pitch * neckShare, headCur.yaw * neckShare, 0, 'XYZ');
      _q.setFromEuler(_e);
      neckBone.quaternion.multiply(_q);
    }
    _e.set(headCur.pitch * (1 - neckShare), headCur.yaw * (1 - neckShare), 0, 'XYZ');
    _q.setFromEuler(_e);
    headBone.quaternion.multiply(_q);
  }

  // ---- loop ----
  function animate() {
    if (disposed) return;
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    if (mixer) mixer.update(dt);

    // entrance translation (walk right -> left)
    if (phase === 'walking' && model) {
      walkT += dt;
      const t = Math.min(walkT / cfg.walkSeconds, 1);
      const e = t * t * (3 - 2 * t); // smoothstep
      model.position.x = THREE.MathUtils.lerp(cfg.walkFromX, cfg.walkToX, e);
      if (t >= 1) startTurning();
    }

    // turn to face camera on arrival
    if (phase === 'turning' && model) {
      turnT += dt;
      const t = Math.min(turnT / cfg.turnSeconds, 1);
      const e = t * t * (3 - 2 * t);
      model.rotation.y = THREE.MathUtils.lerp(cfg.walkFaceYaw, cfg.faceYaw, e);
      if (t >= 1) {
        model.rotation.y = cfg.faceYaw;
        gotoWave();
      }
    }

    // idle-breakers
    if (phase === 'idle') {
      breakerTimer += dt;
      if (breakerTimer >= nextBreakerAt) playBreaker();
    }

    // head look — only once settled (idle/breaker), not while walking in
    if (phase === 'idle' || phase === 'breaker' || phase === 'waving') applyHeadTracking();

    updatePhone();
    if (controls) controls.update();

    renderer.render(scene, camera);
  }
  animate();

  // ---- resize ----
  function resize() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  function rand(a, b) {
    return a + Math.random() * (b - a);
  }

  // ---- public ----
  return {
    play: (name, loop = true) => play(name, { loop }),
    get phase() {
      return phase;
    },
    dispose() {
      disposed = true;
      if (controls) controls.dispose();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      renderer.dispose();
      draco.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    },
  };
}
