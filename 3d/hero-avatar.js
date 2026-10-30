// hero-avatar.js — vanilla three.js portfolio hero
// Sequence: walk in from right -> wave hello -> idle loop (+ head tracks pointer),
// Contact gestures stay in the local review bake until hand contact is validated.
//
// Usage:
//   import { createHeroAvatar } from './hero-avatar.js';
//   const hero = createHeroAvatar(document.getElementById('hero'), {
//     modelUrl: './3d/Sofia-all-motion-review.glb',
//   });
//   // hero.dispose() to tear down.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const CFG = {
  // camera
  cameraFov: 32,
  minCameraAspect: 1.35, // Keep the face inside tall desktop viewports.
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
  maxYaw: THREE.MathUtils.degToRad(20), // keep curls clear of shoulders
  maxPitch: THREE.MathUtils.degToRad(12),
  yawSign: 1,
  pitchSign: 1,
  headFollow: 0.12, // smoothing (0..1 per frame)

  // phone prop (shown only during the texting clip), locked to a hand bone
  phoneHandBone: 'mixamorigRightHand',
  phoneClip: 'texting',
  // phone is parented to the hand bone, so these are LOCAL to that hand.
  // tune if it sits off: pos in metres [x,y,z], rot in radians [x,y,z].
  phoneLocalPos: [0.056083, 0.116355, -0.047918], // Sofia's corrected palm basis, metres
  phoneLocalEuler: [2.042405, 0.657608, 2.664219],

  // idle-breakers
  breakers: [], // Contact gestures remain in the separate review bake until hand contact passes.
  breakerEveryMin: 9, // seconds
  breakerEveryMax: 16,

  crossfade: 0.35,
  modelHeight: 1.7,
  modelYaw: -Math.PI / 2, // Sofia's authored front is +X, glTF is Y-up.
  maxFps: 30,
  minWidth: 881,
};

// These rigid accessories were auto-weighted partly to shoulders/arms. Keep their
// authored shape in motion, including matching hulls, without changing the source GLB.
export function prepareSofiaRig(asset) {
  const rigid = new Set(['hair', 'glasses', 'ComicOutline_hair', 'ComicOutline_glasses']);
  asset.traverse(o => {
    if (!o.isSkinnedMesh || !rigid.has(o.name)) return;
    const head = o.skeleton.bones.findIndex(b => b.name.replace(/[^a-z0-9]/gi, '').toLowerCase() === 'mixamorighead');
    if (head < 0) throw new Error('Sofia accessory has no head bone');
    const { skinIndex, skinWeight } = o.geometry.attributes;
    for (let i = 0; i < skinIndex.count; i++) {
      skinIndex.setXYZW(i, head, 0, 0, 0);
      skinWeight.setXYZW(i, 1, 0, 0, 0);
    }
    skinIndex.needsUpdate = skinWeight.needsUpdate = true;
  });
}

export function createHeroAvatar(container, opts = {}) {
  const cfg = { ...CFG, ...opts };
  const modelUrl = opts.modelUrl || './3d/Sofia-all-motion-review.glb';
  const motionUrl = opts.motionUrl || './3d/Sofia-portfolio-motion.glb';

  // ---- renderer ----
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

  // Neutral face light preserves skin/iris color; cyan stays on the silhouette.
  const hemi = new THREE.HemisphereLight(0xf0f4ff, 0x615450, 1.1);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff0e2, 2.4);
  key.position.set(2.5, 3, 3);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x22d3ee, 0.55);
  rim.position.set(-3, 2, -2.5);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xe0eaff, 0.9);
  fill.position.set(-2, 1, 3);
  scene.add(fill);

  // ---- state ----
  const clock = new THREE.Clock(false);
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
  let tunerPanel = null;
  let raf = 0;
  let lastFrame = 0;
  let renderedFrames = 0;
  let inView = false;
  let contextLost = false;
  const desktop = matchMedia(`(min-width: ${cfg.minWidth}px)`);
  const baseHead = new THREE.Quaternion();
  const baseNeck = new THREE.Quaternion();
  const handScale = new THREE.Vector3(1, 1, 1);

  // metric pos -> local bone units (divide out the bone's tiny world scale)
  function setPhonePose(pos, euler) {
    if (!phone) return;
    phone.position.set(pos[0] / handScale.x, pos[1] / handScale.y, pos[2] / handScale.z);
    phone.rotation.set(euler[0], euler[1], euler[2]);
  }

  // ---- load ----
  const loader = new GLTFLoader();
  const ready = Promise.allSettled([loader.loadAsync(modelUrl), loader.loadAsync(motionUrl)]).then((results) => {
      if (disposed || results.some(r => r.status === 'rejected')) {
        results.forEach(r => { if (r.status === 'fulfilled') release(r.value.scene); });
        if (!disposed) throw results.find(r => r.status === 'rejected').reason;
        return;
      }
      const [gltf, motion] = results.map(r => r.value);
      const asset = gltf.scene;
      model = asset; // Release the asset even if setup fails before creating its group.
      prepareSofiaRig(asset);
      asset.rotation.y = cfg.modelYaw;
      asset.updateMatrixWorld(true);
      const bounds = new THREE.Box3().setFromObject(asset);
      const height = bounds.max.y - bounds.min.y;
      if (!Number.isFinite(height) || height <= 0) throw new Error('Invalid Sofia bounds');
      asset.scale.setScalar(cfg.modelHeight / height);
      asset.position.y = -bounds.min.y * asset.scale.y;
      model = new THREE.Group();
      model.add(asset);
      const clean = (s) => s.replace(/[^a-z0-9]/gi, '').toLowerCase();
      const headKey = clean(cfg.headBone);
      const neckKey = clean(cfg.neckBone);
      const handKey = clean(cfg.phoneHandBone);
      model.traverse((o) => {
        if (o.isMesh) {
          o.frustumCulled = false;
          o.castShadow = false;
          const materials = Array.isArray(o.material) ? o.material : [o.material];
          materials.forEach(material => {
            if (material.name === 'Sofia_Comic_Outline') {
              material.side = THREE.FrontSide;
              material.toneMapped = false;
            }
          });
        }
        if (o.isBone) {
          if (clean(o.name) === headKey) headBone = o;
          if (clean(o.name) === neckKey) neckBone = o;
          if (clean(o.name) === handKey) handBone = o;
        }
      });
      if (!headBone) console.warn('[hero-avatar] head bone not found — head tracking off');
      if (headBone) baseHead.copy(headBone.quaternion);
      if (neckBone) baseNeck.copy(neckBone.quaternion);
      model.position.set(cfg.walkFromX, 0, 0);
      model.rotation.y = cfg.walkFaceYaw;
      scene.add(model);

      if (motion.animations.some(clip => clip.name === cfg.phoneClip)) {
        phone = makePhone();
        phone.visible = false;
      }
      if (phone && handBone) {
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
      for (const clip of motion.animations) {
        // Already baked in Sofia's rest space, with only vertical pelvis motion.
        actions[clip.name] = mixer.clipAction(clip);
      }
      startSequence();
      updateActivity();
  }).catch(error => {
    phase = 'error';
    throw error;
  });

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
    const panel = tunerPanel = document.createElement('div');
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
    if (!actions.walk || !actions.wave) {
      model.position.x = cfg.walkToX;
      model.rotation.y = cfg.faceYaw;
      gotoIdle();
      return;
    }
    phase = 'walking';
    walkT = 0;
    current = play('walk', { loop: true, fade: 0 });

    // 2) when arrived -> wave (handled in update). 3) wave finished -> idle.
  }

  function play(name, { loop = true, fade = cfg.crossfade } = {}) {
    const next = actions[name];
    if (!next) {
      console.warn('[hero-avatar] missing clip', name);
      return null;
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
    if (!actions.wave) return gotoIdle();
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
    if (!r.width || !r.height) return;
    pointer.x = THREE.MathUtils.clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    pointer.y = THREE.MathUtils.clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
  }
  function onPointerLeave() {
    pointer.set(0, 0);
  }
  window.addEventListener('pointermove', onPointerMove);
  container.addEventListener('pointerleave', onPointerLeave);

  // ---- head tracking (applied AFTER mixer.update so it overlays the clip) ----
  const _q = new THREE.Quaternion();
  const _world = new THREE.Quaternion();
  const _axis = new THREE.Vector3();
  const headCur = { yaw: 0, pitch: 0 };
  function lookOffset(bone, share) {
    bone.updateWorldMatrix(true, false);
    bone.getWorldQuaternion(_world).invert();
    _axis.set(0, 1, 0).applyQuaternion(_world);
    _q.setFromAxisAngle(_axis, headCur.yaw * share);
    bone.quaternion.multiply(_q);
    _axis.set(1, 0, 0).applyQuaternion(_world);
    _q.setFromAxisAngle(_axis, headCur.pitch * share);
    bone.quaternion.multiply(_q);
  }
  function applyHeadTracking() {
    if (!headBone) return;
    const tgtYaw = cfg.yawSign * pointer.x * cfg.maxYaw;
    const tgtPitch = cfg.pitchSign * pointer.y * cfg.maxPitch;
    headCur.yaw += (tgtYaw - headCur.yaw) * cfg.headFollow;
    headCur.pitch += (tgtPitch - headCur.pitch) * cfg.headFollow;

    // Move the head chain together; splitting neck/head shears Sofia's facial weights.
    lookOffset(neckBone || headBone, 1);
  }

  // ---- loop ----
  function animate(now) {
    raf = 0;
    if (!isActive()) return;
    raf = requestAnimationFrame(animate);
    if (now - lastFrame < 1000 / cfg.maxFps - 0.5) return;
    lastFrame = now;
    const dt = Math.min(clock.getDelta(), 0.1);
    if (headBone) headBone.quaternion.copy(baseHead);
    if (neckBone) neckBone.quaternion.copy(baseNeck);
    if (mixer) mixer.update(dt);
    if (headBone) baseHead.copy(headBone.quaternion);
    if (neckBone) baseNeck.copy(neckBone.quaternion);

    // entrance translation (walk right -> left)
    if (phase === 'walking' && model) {
      walkT += dt;
      const t = Math.min(walkT / cfg.walkSeconds, 1);
      model.position.x = THREE.MathUtils.lerp(cfg.walkFromX, cfg.walkToX, t);
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
    if (phase === 'idle' && cfg.breakers.length) {
      breakerTimer += dt;
      if (breakerTimer >= nextBreakerAt) playBreaker();
    }

    // head look — only once settled (idle/breaker), not while walking in
    if (phase === 'idle' || phase === 'breaker' || phase === 'waving') applyHeadTracking();

    updatePhone();
    if (controls) controls.update();

    renderer.render(scene, camera);
    renderedFrames++;
  }

  function isActive() {
    return !disposed && !!model && !document.hidden && inView && desktop.matches && !contextLost;
  }
  function updateActivity() {
    if (isActive()) {
      if (!raf) {
        clock.start();
        lastFrame = 0;
        raf = requestAnimationFrame(animate);
      }
    } else {
      cancelAnimationFrame(raf);
      raf = 0;
      clock.stop();
    }
  }
  const io = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    updateActivity();
  });
  io.observe(container);
  document.addEventListener('visibilitychange', updateActivity);
  desktop.addEventListener('change', updateActivity);
  function onContextLost(event) {
    event.preventDefault();
    contextLost = true;
    updateActivity();
  }
  function onContextRestored() {
    contextLost = false;
    updateActivity();
  }
  renderer.domElement.addEventListener('webglcontextlost', onContextLost);
  renderer.domElement.addEventListener('webglcontextrestored', onContextRestored);

  // ---- resize ----
  function resize() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.z = cfg.cameraPos[2] * Math.max(1, cfg.minCameraAspect / camera.aspect);
    camera.lookAt(...cfg.lookAt);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  function rand(a, b) {
    return a + Math.random() * (b - a);
  }

  function release(root) {
    const geometries = new Set(), materials = new Set(), textures = new Set();
    root.traverse(o => {
      if (o.geometry) geometries.add(o.geometry);
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => materials.add(m));
      if (o.skeleton) o.skeleton.dispose();
    });
    materials.forEach(m => {
      Object.values(m).forEach(v => { if (v?.isTexture) textures.add(v); });
      m.dispose();
    });
    textures.forEach(t => { t.dispose(); t.source?.data?.close?.(); });
    geometries.forEach(g => g.dispose());
  }

  // ---- public ----
  return {
    ready,
    play: (name, loop = true) => {
      if (!model || !actions[name]) return null;
      model.position.x = cfg.walkToX;
      model.rotation.y = cfg.faceYaw;
      phase = 'preview';
      return play(name, { loop, fade: 0 });
    },
    get diagnostics() {
      return { phase, currentName, paused: !isActive(), renderedFrames,
        clips: Object.keys(actions), calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries,
        textures: renderer.info.memory.textures, pixelRatio: renderer.getPixelRatio(),
        outline: model?.getObjectByProperty('isMesh', true) ? (() => {
          let material;
          model.traverse(o => { if (o.material?.name === 'Sofia_Comic_Outline') material = o.material; });
          return material && { unlit: material.isMeshBasicMaterial, side: material.side, toneMapped: material.toneMapped };
        })() : null };
    },
    get phase() {
      return phase;
    },
    dispose() {
      disposed = true;
      updateActivity();
      if (controls) controls.dispose();
      tunerPanel?.remove();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', updateActivity);
      desktop.removeEventListener('change', updateActivity);
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', onContextRestored);
      if (mixer) { mixer.stopAllAction(); mixer.uncacheRoot(model); }
      if (model) release(model);
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    },
  };
}
