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
  phoneLocalPos: [0.0, 0.08, 0.02], // along the bone toward the fingers/palm
  phoneLocalEuler: [Math.PI / 2, 0, 0], // lay the screen flat in the palm

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
      model.traverse((o) => {
        if (o.isMesh) {
          o.frustumCulled = false;
          o.castShadow = false;
        }
        if (o.isBone) {
          if (clean(o.name) === headKey) headBone = o;
          if (clean(o.name) === neckKey) neckBone = o;
          if (clean(o.name) === handKey) handBone = o;
        }
      });
      if (!headBone) console.warn('[hero-avatar] head bone not found — head tracking off');
      model.position.set(cfg.walkFromX, 0, 0);
      model.rotation.y = cfg.walkFaceYaw;
      scene.add(model);

      phone = makePhone();
      phone.visible = false;
      if (handBone) {
        // parent to the hand so the phone is truly held; compensate the bone's
        // world scale so the phone keeps its real-world (metric) size.
        const _ws = new THREE.Vector3();
        handBone.updateWorldMatrix(true, false);
        handBone.getWorldScale(_ws);
        phone.scale.set(1 / _ws.x, 1 / _ws.y, 1 / _ws.z);
        phone.position.set(...cfg.phoneLocalPos);
        phone.rotation.set(...cfg.phoneLocalEuler);
        handBone.add(phone);
      } else {
        scene.add(phone);
      }

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
        emissive: 0x3a6ad0,
        emissiveIntensity: 0.6,
        roughness: 0.25,
      })
    );
    screen.position.z = 0.0046;
    g.add(body, screen);
    return g;
  }

  // phone is parented to the hand bone, so it follows automatically; just toggle it.
  function updatePhone() {
    if (!phone) return;
    phone.visible = currentName === cfg.phoneClip && !!handBone;
  }

  function startSequence() {
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
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      renderer.dispose();
      draco.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    },
  };
}
