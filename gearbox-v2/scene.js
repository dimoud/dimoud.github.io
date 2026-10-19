/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / scene.js — ο πυρήνας απόδοσης του μειωτήρα, χωρίς DOM.
   Τρέχει ΚΑΤΑ ΠΡΟΤΙΜΗΣΗ μέσα σε Web Worker (OffscreenCanvas): η κατασκευή
   της γεωμετρίας, η μεταγλώττιση των shaders και κάθε καρέ γίνονται εκτός
   του κύριου νήματος, οπότε η σελίδα (κείμενα, χάραξη σχεδίου, κύλιση) δεν
   «κολλάει» ποτέ. Εναλλακτικά τρέχει στο κύριο νήμα (παλιοί φυλλομετρητές).
   Συμπεριφορά ΑΥΤΟΥΣΙΑ με την προηγούμενη hero.js: ίδιες ταχύτητες, χρόνοι,
   είσοδος με ολίσθηση, σύρσιμο, κλικ = ανάπτυξη, ανάπτυξη με την κύλιση.
═══════════════════════════════════════════════════════════════ */
import * as THREE from './three.js';
import { RoomEnvironment } from './room-env.js';

/* ── Ρυθμίσεις (ίδιες με πριν) ── */
const GEAR_OFFSET_X    = 1.0;
const GEAR_INTRO_DELAY = 0.15;
const GEAR_INTRO_DUR   = 0.55;
const GEAR_INTRO_DIST  = 5;
const GEAR_INTRO_FROM  = +1;
const MODEL_SCALE      = 0.66;
const SUN_SPEED        = 0.18;
const IDLE_FPS         = 30;
const BASE_RX = 0.32, BASE_RY = -(25 * Math.PI / 180);

const raf = (typeof requestAnimationFrame === 'function')
  ? cb => requestAnimationFrame(cb)
  : cb => setTimeout(() => cb(performance.now()), 16);
const tick = () => new Promise(r => setTimeout(r, 0));   // παραχώρηση ανάμεσα στα βήματα

function calcRightHalfX(W, H) { return Math.tan(19 * Math.PI / 180) * 20 * (W / H) * 0.5 - GEAR_OFFSET_X; }

/**
 * @param canvas  HTMLCanvasElement ή OffscreenCanvas
 * @param o       { width, height, dpr, mobile, reduced }
 * @param emit    (type, data) => void — ειδοποιήσεις προς τη σελίδα ('ready', 'mode')
 */
export async function createGearbox(canvas, o, emit) {
  /* Το μοντέλο φορτώνεται εδώ (όχι στην αρχή της σελίδας) — βαριά κατασκευή γεωμετρίας */
  const M = await import('./model.js');
  const { assembly, applyModelExplode, applyModelKinematics, setExplodeScale } = M;
  setExplodeScale(0.8);
  await tick();

  let W = o.width || 1280, H = o.height || 700;
  let explodeT = 0, exploding = false, isDragging = false;
  let floatT = 0, theta = 0, currentMode = 'rotate';
  let rightHalfX = calcRightHalfX(W, H);
  let scrollExplodeActive = false, scrollExplodeT = 0, scrollTargetY = 0;
  let wantRun = true, looping = false, frameAcc = 0;
  let gearIntroT = 0, introStart = 0, lastT = 0;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: o.dpr < 1.5, alpha: true, powerPreference: 'default' });
  renderer.setPixelRatio(Math.min(o.dpr || 1, o.mobile ? 1 : 1.25));
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = false;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
  pmrem.dispose();
  scene.environmentIntensity = 0.75;
  addLights(scene);
  await tick();

  const camera = new THREE.PerspectiveCamera(38, W / H, .1, 300);
  camera.position.set(0, 2.5, 20); camera.lookAt(0, .5, 0);

  const rotGroup = new THREE.Group();
  assembly.rotation.set(0, 0, 0);
  rotGroup.add(assembly);
  rotGroup.rotation.x = BASE_RX; rotGroup.rotation.y = BASE_RY;
  rotGroup.scale.setScalar(MODEL_SCALE);
  rotGroup.position.x = rightHalfX + GEAR_INTRO_FROM * GEAR_INTRO_DIST;
  scene.add(rotGroup);
  assembly.traverse(m => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; } });
  if (o.reduced) { gearIntroT = 1; rotGroup.position.x = rightHalfX; }
  applyModelExplode(0);
  applyModelKinematics(0);

  /* Μεταγλώττιση shaders ΧΩΡΙΣ μπλοκάρισμα (KHR_parallel_shader_compile)
     και ένα «κρυφό» πρώτο καρέ για να ανέβουν γεωμετρίες/υφές στην κάρτα γραφικών */
  try { await renderer.compileAsync(scene, camera); } catch (e) { renderer.compile(scene, camera); }
  renderer.render(scene, camera);
  await new Promise(r => raf(r));

  function render() { renderer.render(scene, camera); }

  function frame(now) {
    if (!wantRun) { looping = false; return; }
    raf(frame);
    let dt = Math.min((now - lastT) / 1000, 0.25); lastT = now;
    const idle = gearIntroT >= 1 && !isDragging && !exploding && explodeT === 0 && !scrollExplodeActive;
    if (idle) {
      frameAcc += dt;
      if (frameAcc < 1 / IDLE_FPS) return;
      dt = frameAcc; frameAcc = 0;
    } else frameAcc = 0;
    dt = Math.min(dt, .05);
    floatT += dt;

    if (gearIntroT < 1) {
      const el = (performance.now() - introStart) / 1000;
      const t = Math.max(0, (el - GEAR_INTRO_DELAY) / GEAR_INTRO_DUR);
      gearIntroT = Math.min(1, 1 - Math.pow(1 - Math.min(t, 1), 3));
    }
    const gearIntroOffset = (1 - gearIntroT) * GEAR_INTRO_DIST * GEAR_INTRO_FROM;

    if (scrollExplodeActive) {
      rotGroup.rotation.y += (scrollTargetY - rotGroup.rotation.y) * Math.min(1, dt * 14);
      rotGroup.position.y = 0;
      rotGroup.position.x = rightHalfX + gearIntroOffset;
    } else if (!isDragging && currentMode === 'rotate') {
      rotGroup.rotation.y += .0007;
      rotGroup.position.y = Math.sin(floatT * .52) * .04;
      rotGroup.position.x = rightHalfX + gearIntroOffset;
    }

    theta += SUN_SPEED * dt;
    applyModelKinematics(theta);

    if (scrollExplodeActive) {
      if (explodeT !== scrollExplodeT) { explodeT = scrollExplodeT; applyModelExplode(explodeT); }
    } else if (exploding && explodeT < 1) {
      explodeT = Math.min(1, explodeT + dt * .55); applyModelExplode(explodeT);
    } else if (!exploding && explodeT > 0) {
      let b;
      if (explodeT > 0.4) b = 1.4;
      else if (explodeT > 0.15) b = 0.45 + ((explodeT - 0.15) / 0.25) * 0.95;
      else b = 0.15;
      explodeT = Math.max(0, explodeT - dt * b * (0.10 + 0.90 * explodeT)); applyModelExplode(explodeT);
    }
    render();
  }

  function startLoop() {
    if (o.reduced || looping || !wantRun) return;
    looping = true; lastT = performance.now(); raf(frame);
  }

  function setMode(mode) {
    currentMode = mode; if (mode === 'explode') exploding = true;
    emit('mode', mode);
  }
  function resetModel() {
    exploding = false; currentMode = 'rotate'; scrollExplodeActive = false; scrollExplodeT = 0;
    rotGroup.rotation.set(BASE_RX, BASE_RY, 0); rotGroup.position.set(rightHalfX, 0, 0);
    emit('mode', 'rotate');
    if (o.reduced) render();
  }

  const api = {
    resize(w, h) {
      W = w || W; H = h || H;
      camera.aspect = W / H; camera.updateProjectionMatrix(); renderer.setSize(W, H, false);
      rightHalfX = calcRightHalfX(W, H);
      if (!scrollExplodeActive) rotGroup.position.x = rightHalfX;
      if (o.reduced || !looping) render();
    },
    dragging(on) { isDragging = !!on; },
    drag(dx, dy) {
      rotGroup.rotation.y += dx * .010;
      rotGroup.rotation.x = Math.max(-.9, Math.min(.9, rotGroup.rotation.x + dy * .007));
      if (o.reduced) render();
    },
    click() {
      if (scrollExplodeActive) return;
      if (explodeT < 0.01 && !exploding) setMode('explode'); else resetModel();
    },
    setMode, resetModel,
    setScrollExplode(t) {
      const SPIN_END = 0.15, TARGET_Y = -1.27;
      if (t < 0.005) { scrollExplodeActive = false; exploding = false; scrollExplodeT = 0; scrollTargetY = 0; return; }
      scrollExplodeActive = true;
      if (t <= SPIN_END) {
        const sp = t / SPIN_END;
        scrollTargetY = (sp < 0.5 ? 2 * sp * sp : -1 + (4 - 2 * sp) * sp) * TARGET_Y;
        scrollExplodeT = 0;
      } else {
        scrollTargetY = TARGET_Y;
        scrollExplodeT = Math.min(1, (t - SPIN_END) / (1 - SPIN_END));
      }
    },
    run(on) { wantRun = !!on; if (wantRun) startLoop(); }
  };

  /* Έτοιμο: η είσοδος ξεκινά ΤΩΡΑ, ομαλά, χωρίς καθυστερήσεις στα πρώτα καρέ */
  introStart = performance.now();
  if (o.reduced) render(); else startLoop();
  emit('ready');
  return api;
}

function addLights(s) {
  const key = new THREE.DirectionalLight(0xc4dcff, 1.9); key.position.set(8, 14, 14); s.add(key);
  const rim = new THREE.DirectionalLight(0xffb27c, 1.7); rim.position.set(-12, 6, -12); s.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffd2a8, 0.6); rim2.position.set(10, 3, -14); s.add(rim2);
  const fill = new THREE.DirectionalLight(0x6a94ff, 0.7); fill.position.set(-8, -4, 10); s.add(fill);
  s.add(new THREE.HemisphereLight(0xa8c6ff, 0x0a1430, 0.45));
}
