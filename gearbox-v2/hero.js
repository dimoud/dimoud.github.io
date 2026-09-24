/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / hero.js — ο πλανητικός μειωτήρας v2 στην αρχική σελίδα
   Αντικαθιστά το models.js (v1) στο #hero3d. Κρατά ΑΥΤΟΥΣΙΑ τη συμπεριφορά
   της v1: είσοδος με ολίσθηση, αργή αυτόματη περιστροφή, σύρσιμο με το
   ποντίκι, κλικ = ανάπτυξη / επαναφορά, ανάπτυξη με την κύλιση
   (setScrollExplode από το main.js), ίδιες ταχύτητες και ίδιοι χρόνοι.
   Εκθέτει τα ίδια global ονόματα: initThree, setScrollExplode, setMode, resetModel.
═══════════════════════════════════════════════════════════════ */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { assembly, applyModelExplode, applyModelKinematics, setExplodeScale } from './model.js';

/* ── Ρυθμίσεις (ίδιες τιμές με τη v1 όπου υπάρχει αντιστοιχία) ── */
const GEAR_OFFSET_X    = 1.0;    // μετατόπιση προς τα αριστερά στον υπολογιστή
const GEAR_INTRO_DELAY = 0.15;   // s πριν ξεκινήσει η ολίσθηση
const GEAR_INTRO_DUR   = 0.55;   // s διάρκεια ολίσθησης
const GEAR_INTRO_DIST  = 5;      // μονάδες απόστασης ολίσθησης
const GEAR_INTRO_FROM  = -1;     // −1: μπαίνει από αριστερά προς τα δεξιά · +1: από δεξιά (όπως η v1)
const MODEL_SCALE      = 0.66;   // v2 Ø138 mm έναντι Ø120 της v1 → ίδιο οπτικό μέγεθος με 0.76 της v1
const SUN_SPEED        = 0.18;   // rad/s ηλιακού — ίδιο με τη v1
setExplodeScale(0.8);            // λίγο πιο μαζεμένη ανάπτυξη για να χωρά στο μισό της οθόνης

let scene, camera, renderer, clock, rotGroup;
let explodeT = 0, exploding = false, isDragging = false;
let prevMouse = { x: 0, y: 0 }, floatT = 0, theta = 0;
let currentMode = 'rotate';
let rightHalfX = 4.5;
let scrollExplodeActive = false, scrollExplodeT = 0, scrollTargetY = 0;
let animRunning = false, started = false;
let gearIntroT = 0, gearIntroElapsed = 0;
const BASE_RX = 0.32, BASE_RY = -(25 * Math.PI / 180);

function calcRightHalfX(W, H) { return Math.tan(19 * Math.PI / 180) * 20 * (W / H) * 0.5 - GEAR_OFFSET_X; }

/* ═══════════════ Εκκίνηση (καλείται από το main.js) ═══════════════ */
function initThree() {
  if (started) return;
  const canvas = document.getElementById('hero3d');
  if (!canvas) return;
  started = true; animRunning = true;
  const parent = canvas.parentElement, W = parent.clientWidth || 1280, H = parent.clientHeight || 700;
  const dragEl = document.getElementById('hero3d-drag') || canvas;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(W, H); renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;                // αυτοσκίαση των εξαρτημάτων (χωρίς δάπεδο)
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
  scene.environmentIntensity = 0.75;
  addLights(scene);

  camera = new THREE.PerspectiveCamera(38, W / H, .1, 300);
  camera.position.set(0, 2.5, 20); camera.lookAt(0, .5, 0);
  rightHalfX = calcRightHalfX(W, H);
  clock = new THREE.Clock();

  rotGroup = new THREE.Group();
  assembly.rotation.set(0, 0, 0);                   // άξονας μηχανισμού = τοπικό Z (όπως η v1)
  rotGroup.add(assembly);
  rotGroup.rotation.x = BASE_RX; rotGroup.rotation.y = BASE_RY;
  rotGroup.scale.setScalar(MODEL_SCALE);
  gearIntroT = 0; gearIntroElapsed = 0;
  rotGroup.position.x = rightHalfX + GEAR_INTRO_FROM * GEAR_INTRO_DIST;
  scene.add(rotGroup);
  applyModelExplode(0);
  applyModelKinematics(0);

  const ind = document.getElementById('model-indicator');
  if (ind) ind.textContent = 'PLANETARY GEARBOX';

  setupDrag(dragEl, parent);
  animate();

  /* Παύση όταν το hero βγει από την οθόνη (όχι στο κινητό, όπου ο καμβάς είναι σταθερός) */
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!animRunning) { animRunning = true; clock.getDelta(); animate(); }
      } else if (window.innerWidth > 960) animRunning = false;
    }, { threshold: 0 }).observe(heroSection);
  }
}

function addLights(s) {
  const key = new THREE.DirectionalLight(0xc4dcff, 1.9);
  key.position.set(8, 14, 14);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 60 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03; key.shadow.radius = 4;
  s.add(key);
  const rim = new THREE.DirectionalLight(0xffb27c, 1.7); rim.position.set(-12, 6, -12); s.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffd2a8, 0.6); rim2.position.set(10, 3, -14); s.add(rim2);
  const fill = new THREE.DirectionalLight(0x6a94ff, 0.7); fill.position.set(-8, -4, 10); s.add(fill);
  s.add(new THREE.HemisphereLight(0xa8c6ff, 0x0a1430, 0.45));
}

/* ═══════════════ Σύρσιμο / κλικ (ίδια λογική με τη v1) ═══════════════ */
function setupDrag(dragEl, parent) {
  let msx = 0, msy = 0, didDrag = false;
  dragEl.addEventListener('mousedown', e => { isDragging = true; didDrag = false; msx = e.clientX; msy = e.clientY; prevMouse = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    if (Math.abs(e.clientX - msx) > 4 || Math.abs(e.clientY - msy) > 4) didDrag = true;
    rotGroup.rotation.y += (e.clientX - prevMouse.x) * .010;
    rotGroup.rotation.x += (e.clientY - prevMouse.y) * .007;
    rotGroup.rotation.x = Math.max(-.9, Math.min(.9, rotGroup.rotation.x));
    prevMouse = { x: e.clientX, y: e.clientY };
  }, { passive: true });
  dragEl.addEventListener('click', () => {
    if (didDrag) { didDrag = false; return; }
    if (scrollExplodeActive) return;
    if (explodeT < 0.01 && !exploding) setMode('explode'); else resetModel();
  });
  dragEl.addEventListener('touchstart', e => { isDragging = true; prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, { passive: true });
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', e => { if (!isDragging) return; rotGroup.rotation.y += (e.touches[0].clientX - prevMouse.x) * .010; prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }, { passive: true });
  window.addEventListener('resize', () => {
    const W2 = parent.clientWidth || 1280, H2 = parent.clientHeight || 700;
    camera.aspect = W2 / H2; camera.updateProjectionMatrix(); renderer.setSize(W2, H2);
    rightHalfX = calcRightHalfX(W2, H2);
    if (rotGroup && !scrollExplodeActive) rotGroup.position.x = rightHalfX;
  });
}

/* ═══════════════ Βρόχος (ίδιοι ρυθμοί με τη v1) ═══════════════ */
function animate() {
  if (!animRunning) return;
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05);
  floatT += dt;

  if (gearIntroT < 1) {
    gearIntroElapsed += dt;
    const t = Math.max(0, (gearIntroElapsed - GEAR_INTRO_DELAY) / GEAR_INTRO_DUR);
    gearIntroT = Math.min(1, 1 - Math.pow(1 - Math.min(t, 1), 3));   // ease-out cubic
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

  /* Κινηματική: ο ηλιακός γυρίζει συνεχώς, φορέας και δορυφόροι ακολουθούν σωστά */
  theta += SUN_SPEED * dt;
  applyModelKinematics(theta);

  if (scrollExplodeActive) {
    if (explodeT !== scrollExplodeT) { explodeT = scrollExplodeT; applyModelExplode(explodeT); }
  } else if (exploding && explodeT < 1) {
    explodeT = Math.min(1, explodeT + dt * .55); applyModelExplode(explodeT);
  } else if (!exploding && explodeT > 0) {
    /* Κλιμακωτή συναρμολόγηση όπως η v1: γρήγορα όταν απέχουν, πολύ αργά στο τελικό κάθισμα */
    let assembleBase;
    if (explodeT > 0.4) assembleBase = 1.4;
    else if (explodeT > 0.15) assembleBase = 0.45 + ((explodeT - 0.15) / 0.25) * 0.95;
    else assembleBase = 0.15;
    const assembleSpeed = assembleBase * (0.10 + 0.90 * explodeT);
    explodeT = Math.max(0, explodeT - dt * assembleSpeed); applyModelExplode(explodeT);
  }

  renderer.render(scene, camera);
}

/* ═══════════════ Δημόσιο API (ίδιο με τη v1) ═══════════════ */
function setMode(mode) {
  currentMode = mode; if (mode === 'explode') exploding = true;
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  const b = document.getElementById('btn-' + mode); if (b) b.classList.add('active');
}
function resetModel() {
  exploding = false; currentMode = 'rotate'; scrollExplodeActive = false; scrollExplodeT = 0;
  if (rotGroup) { rotGroup.rotation.set(BASE_RX, BASE_RY, 0); rotGroup.position.set(rightHalfX, 0, 0); }
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  const rb = document.getElementById('btn-rotate'); if (rb) rb.classList.add('active');
}
function setScrollExplode(t) {
  const SPIN_END = 0.15;   /* πρώτο 15 % της κύλισης = στροφή */
  const TARGET_Y = -1.27;  /* ~−73° πριν ανοίξει */
  if (t < 0.005) {
    scrollExplodeActive = false; exploding = false;
    scrollExplodeT = 0; scrollTargetY = 0;
    return;
  }
  scrollExplodeActive = true;
  if (t <= SPIN_END) {
    const sp = t / SPIN_END;
    const ease = sp < 0.5 ? 2 * sp * sp : -1 + (4 - 2 * sp) * sp;
    scrollTargetY = ease * TARGET_Y;
    scrollExplodeT = 0;
  } else {
    scrollTargetY = TARGET_Y;
    scrollExplodeT = Math.min(1, (t - SPIN_END) / (1 - SPIN_END));
  }
}

Object.assign(window, { initThree, setScrollExplode, setMode, resetModel });

/* Αν το main.js έχει ήδη τρέξει (π.χ. αργό δίκτυο στο CDN), ξεκίνα μόνο του */
if (document.readyState !== 'loading') setTimeout(initThree, 150);
