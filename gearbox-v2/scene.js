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
  const T = { start: Math.round(performance.now()) }, mark = k => { T[k] = Math.round(performance.now()); };
  const M = await import('./model.js');
  mark('model');
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

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'default' });
  renderer.setPixelRatio(1);                         // ανάλυση οθόνης 1:1 (με εξομάλυνση ακμών) — έως 36 % λιγότερα εικονοστοιχεία
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = false;

  /* ── Ελαφριά λειτουργία ──
     Χωρίς κάρτα γραφικών (απόδοση από τον επεξεργαστή: SwiftShader, Microsoft Basic Render
     Driver/WARP, llvmpipe) κάθε καρέ κοστίζει εκατοντάδες ms. Τότε αποδίδουμε ΕΝΑ καρέ
     (στην τελική θέση) και η είσοδος γίνεται με CSS — καμία συνεχής απόδοση. */
  const gl = renderer.getContext();
  let gpuName = '';
  try { const ext = gl.getExtension('WEBGL_debug_renderer_info'); gpuName = gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || ''; } catch (e) {}
  let lite = /swiftshader|basic render|llvmpipe|softpipe|software|warp/i.test(gpuName);
  let still = o.reduced || lite;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
  pmrem.dispose();
  scene.environmentIntensity = 0.75;
  addLights(scene);
  mark('env');
  await tick();

  const camera = new THREE.PerspectiveCamera(38, W / H, .1, 300);
  camera.position.set(0, 2.5, 20); camera.lookAt(0, .5, 0);
  /* Μετατόπιση φακού: ο μειωτήρας μένει στον άξονα της κάμερας και η ΕΙΚΟΝΑ μετακινείται
     στο δεξί μισό. Έτσι η μορφή του είναι ίδια σε κάθε αναλογία οθόνης (μόνο κλίμακα/θέση),
     ώστε η στατική εικόνα-αφίσα (poster.webp) να ταυτίζεται ακριβώς με το πρώτο καρέ. */
  const _v = new THREE.Vector3();
  function lensShift() {
    camera.aspect = W / H; camera.clearViewOffset(); camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    _v.set(rightHalfX, 0, 0).project(camera);
    const cx = (_v.x + 1) / 2 * W;
    camera.setViewOffset(W, H, W / 2 - cx, 0, W, H);
  }
  lensShift();

  const rotGroup = new THREE.Group();
  assembly.rotation.set(0, 0, 0);
  rotGroup.add(assembly);
  rotGroup.rotation.x = BASE_RX; rotGroup.rotation.y = BASE_RY;
  rotGroup.scale.setScalar(MODEL_SCALE);
  rotGroup.position.x = GEAR_INTRO_FROM * GEAR_INTRO_DIST;
  scene.add(rotGroup);
  assembly.traverse(m => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; } });
  mergeStatic(assembly);                            // λιγότερες κλήσεις σχεδίασης (βίδες, παξιμάδια, ρουλεμάν…)
  if (still || o.noIntro) { gearIntroT = 1; rotGroup.position.x = 0; }   // noIntro: η είσοδος έγινε ήδη από την εικόνα-αφίσα
  applyModelExplode(0);
  applyModelKinematics(0);

  /* Μεταγλώττιση shaders ΧΩΡΙΣ μπλοκάρισμα (KHR_parallel_shader_compile)
     και ένα «κρυφό» πρώτο καρέ για να ανέβουν γεωμετρίες/υφές στην κάρτα γραφικών */
  mark('build');
  try { await renderer.compileAsync(scene, camera); } catch (e) { renderer.compile(scene, camera); }
  mark('shaders');
  renderer.render(scene, camera);
  /* Μέτρηση πραγματικού κόστους καρέ: αν ένα καρέ θέλει > 50 ms, η κάρτα είναι πολύ αργή → αφίσα */
  { const t0 = performance.now(); renderer.render(scene, camera); gl.finish(); T.frameMs = Math.round(performance.now() - t0);
    if (T.frameMs > 50 && o.poster) { lite = still = true; } }
  await new Promise(r => raf(r));
  mark('firstFrame');
  T.calls = renderer.info.render.calls; T.triangles = renderer.info.render.triangles; T.programs = renderer.info.programs.length;

  function render() { renderer.render(scene, camera); }

  function frame(now) {
    if (!wantRun) { looping = false; return; }
    raf(frame);
    const gap = now - lastT;
    let dt = Math.min(gap / 1000, 0.25); lastT = now;
    /* Αργή κάρτα γραφικών: αν τα καρέ αργούν σταθερά (διάμεσος > 70 ms στα πρώτα 8 ή > 45 ms στα 40), ελαφριά λειτουργία */
    if (gearIntroT >= 1 && probe.length < 40) {
      probe.push(gap);
      const med = () => probe.slice().sort((a, b) => a - b)[probe.length >> 1];
      if ((probe.length === 8 && med() > 70) || (probe.length === 40 && med() > 45)) { goLite(); return; }
    }
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
      rotGroup.position.x = gearIntroOffset;
    } else if (!isDragging && currentMode === 'rotate') {
      rotGroup.rotation.y += .0007;
      rotGroup.position.y = Math.sin(floatT * .52) * .04;
      rotGroup.position.x = gearIntroOffset;
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

  const probe = [];
  let rzT = 0;
  function goLite() {
    lite = still = true; wantRun = false; looping = false;
    exploding = false; explodeT = 0; scrollExplodeActive = false; currentMode = 'rotate';
    rotGroup.rotation.set(BASE_RX, BASE_RY, 0); rotGroup.position.set(0, 0, 0);
    applyModelExplode(0); if (!o.poster) render();   // με αφίσα: η σελίδα ξαναδείχνει την αφίσα, κανένα καρέ
    emit('lite');
  }

  function startLoop() {
    if (still || looping || !wantRun) return;
    looping = true; lastT = performance.now(); raf(frame);
  }

  function setMode(mode) {
    currentMode = mode; if (mode === 'explode') exploding = true;
    emit('mode', mode);
  }
  function resetModel() {
    exploding = false; currentMode = 'rotate'; scrollExplodeActive = false; scrollExplodeT = 0;
    rotGroup.rotation.set(BASE_RX, BASE_RY, 0); rotGroup.position.set(0, 0, 0);
    emit('mode', 'rotate');
    if (still) render();
  }

  const api = {
    resize(w, h) {
      W = w || W; H = h || H;
      renderer.setSize(W, H, false);
      rightHalfX = calcRightHalfX(W, H);
      lensShift();
      if (lite) { clearTimeout(rzT); rzT = setTimeout(render, 200); }   // ένα καρέ μόνο αφού σταματήσει η αλλαγή μεγέθους
      else if (still || !looping) render();
    },
    dragging(on) { isDragging = !!on; },
    drag(dx, dy) {
      if (lite) return;
      rotGroup.rotation.y += dx * .010;
      rotGroup.rotation.x = Math.max(-.9, Math.min(.9, rotGroup.rotation.x + dy * .007));
      if (still) render();
    },
    click() {
      if (lite) return;
      if (scrollExplodeActive) return;
      if (explodeT < 0.01 && !exploding) setMode('explode'); else resetModel();
    },
    setMode, resetModel,
    setScrollExplode(t) {
      if (lite) return;
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
    /* Στατική πόζα (για την παραγωγή των καρέ της ελαφριάς λειτουργίας — tools/) */
    pose(rotY, eT) {
      rotGroup.rotation.set(BASE_RX, rotY, 0); rotGroup.position.set(0, 0, 0);
      applyModelKinematics(0); applyModelExplode(eT); render();
    },
    run(on) { if (lite) return; wantRun = !!on; if (wantRun) startLoop(); }
  };

  /* Έτοιμο: η είσοδος ξεκινά ΤΩΡΑ, ομαλά, χωρίς καθυστερήσεις στα πρώτα καρέ */
  introStart = performance.now();
  T.lite = lite; T.gpu = gpuName;
  if (still) render(); else startLoop();
  emit('ready', T);
  return api;
}

/* Συγχώνευση ακίνητων μεταξύ τους πλεγμάτων: ίδιος γονέας + ίδιο υλικό + χωρίς παιδιά
   → ένα πλέγμα. Η εμφάνιση και η κίνηση μένουν ίδιες· οι κλήσεις σχεδίασης μειώνονται. */
function mergeStatic(rootObj) {
  const groups = new Map();
  rootObj.traverse(m => {
    if (!m.isMesh || m.children.length || !m.parent) return;
    const k = m.parent.uuid + '|' + m.material.uuid;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(m);
  });
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    const parts = list.map(m => {
      m.updateMatrix();
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      g.applyMatrix4(m.matrix);
      return g;
    });
    const names = ['position', 'normal', 'uv'].filter(n => parts.every(g => g.attributes[n]));
    const merged = new THREE.BufferGeometry();
    for (const n of names) {
      const size = parts[0].attributes[n].itemSize;
      const arr = new Float32Array(parts.reduce((t, g) => t + g.attributes[n].count * size, 0));
      let off = 0;
      for (const g of parts) { arr.set(g.attributes[n].array, off); off += g.attributes[n].array.length; }
      merged.setAttribute(n, new THREE.BufferAttribute(arr, size));
    }
    merged.computeBoundingSphere();
    const first = list[0], parent = first.parent;
    const mesh = new THREE.Mesh(merged, first.material);
    mesh.userData = { ...first.userData };
    parent.add(mesh);
    list.forEach(m => { parent.remove(m); m.geometry.dispose(); });
    parts.forEach(g => g.dispose());
  }
}

function addLights(s) {
  const key = new THREE.DirectionalLight(0xc4dcff, 1.9); key.position.set(8, 14, 14); s.add(key);
  const rim = new THREE.DirectionalLight(0xffb27c, 1.7); rim.position.set(-12, 6, -12); s.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffd2a8, 0.6); rim2.position.set(10, 3, -14); s.add(rim2);
  const fill = new THREE.DirectionalLight(0x6a94ff, 0.7); fill.position.set(-8, -4, 10); s.add(fill);
  s.add(new THREE.HemisphereLight(0xa8c6ff, 0x0a1430, 0.45));
}
