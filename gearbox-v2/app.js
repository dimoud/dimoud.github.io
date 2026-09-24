/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / app.js — Πλανητικός μειωτήρας, έκδοση 2
   Three.js r169 · PBR υλικά · σκιές · GTAO · ανάπτυξη κατά τον άξονα
   Η γεωμετρία ακολουθεί το models.js (v1): Ns 18 / Np 18 / Nr 54, m 0.18
   Η v1 (index.html + models.js) ΔΕΝ αγγίζεται.
═══════════════════════════════════════════════════════════════ */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { I18N, COMPONENTS } from './data.js';
import { assembly, comps, pickables, compMaterials, applyModelExplode, applyModelKinematics, RATIO } from './model.js';

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const QS = new URLSearchParams(location.search);
const EMBED = QS.has('embed');
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(pointer: coarse)').matches;
if (EMBED) document.documentElement.classList.add('embed');

/* ── Γλώσσα (ίδιο κλειδί localStorage με τον υπόλοιπο ιστότοπο) ── */
let LANG = 'el';
try { LANG = QS.get('lang') || localStorage.getItem('lang') || 'el'; } catch (e) { /* ιδιωτική περιήγηση */ }
if (!I18N[LANG]) LANG = 'el';
const T = k => (I18N[LANG] && I18N[LANG][k]) || k;
const DATA = Object.fromEntries(COMPONENTS.map((c, i) => [c.id, { ...c, idx: i + 1 }]));

/* ═══════════════ Renderer / σκηνή ═══════════════ */
const canvas = $('c');
const stage = $('app');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
const DPR = Math.min(window.devicePixelRatio || 1, COARSE ? 1.5 : 2);
renderer.setPixelRatio(DPR);
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = makeBackdrop();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
scene.environmentIntensity = 0.85;

const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 400);
const HOME = { pos: new THREE.Vector3(-17, 10.5, 33), target: new THREE.Vector3(0, -0.6, 0) };

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.rotateSpeed = 0.7;
controls.zoomSpeed = 0.8;
controls.minDistance = 9;
controls.maxDistance = 90;
controls.minPolarAngle = 0.12;
controls.maxPolarAngle = 1.62;
controls.autoRotateSpeed = 0.55;
controls.autoRotate = !REDUCED && !EMBED ? true : false;

/* ── Φωτισμός στούντιο: ψυχρό κύριο, θερμό περίγραμμα ── */
const key = new THREE.DirectionalLight(0xc4dcff, 2.3);
key.position.set(-11, 16, 12);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -18, right: 18, top: 14, bottom: -14, near: 1, far: 70 });
key.shadow.bias = -0.0003;
key.shadow.normalBias = 0.025;
key.shadow.radius = 5;
scene.add(key);
const rim = new THREE.DirectionalLight(0xffb27c, 1.9);
rim.position.set(14, 7, -14);
scene.add(rim);
const rim2 = new THREE.DirectionalLight(0xffd2a8, 0.7);
rim2.position.set(-6, 3, -16);
scene.add(rim2);
const fill = new THREE.DirectionalLight(0x6a94ff, 0.55);
fill.position.set(-4, -6, 10);
scene.add(fill);
scene.add(new THREE.HemisphereLight(0x9cc0ff, 0x08101f, 0.35));

/* ── Δάπεδο: μόνο σκιά + απαλή λάμψη ── */
const FLOOR_Y = -7.35;
const floor = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), new THREE.ShadowMaterial({ opacity: 0.42 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR_Y; floor.receiveShadow = true;
scene.add(floor);
const glow = new THREE.Mesh(new THREE.PlaneGeometry(60, 34),
  new THREE.MeshBasicMaterial({ map: radialTex('rgba(70,130,255,0.30)', 'rgba(70,130,255,0)'), transparent: true, depthWrite: false, toneMapped: false }));
glow.rotation.x = -Math.PI / 2; glow.position.y = FLOOR_Y + 0.01;
scene.add(glow);

/* ═══════════════ Υφές ═══════════════ */
function makeBackdrop() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 1024;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(560, 380, 40, 512, 520, 820);
  gr.addColorStop(0, '#1d4c9c'); gr.addColorStop(0.38, '#0f2c63'); gr.addColorStop(0.75, '#071632'); gr.addColorStop(1, '#030914');
  g.fillStyle = gr; g.fillRect(0, 0, 1024, 1024);
  // λεπτό τεχνικό πλέγμα
  g.strokeStyle = 'rgba(140,180,255,0.035)'; g.lineWidth = 1;
  for (let i = 0; i <= 1024; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 1024); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(1024, i); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function radialTex(inner, outer) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/* ═══════════════ Μοντέλο ═══════════════ */
assembly.rotation.y = -Math.PI / 2;        // άξονας μηχανισμού = παγκόσμιος X, εμπρός όψη προς τα αριστερά
scene.add(assembly);

/* ═══════════════ Ανάπτυξη ═══════════════ */
const explode = { t: 0, target: 0, speed: 0.75, dragging: false, applied: -1 };
function applyExplode(t) {
  applyModelExplode(t);
  // κάμερα: απομακρύνεται όσο ανοίγει το σύνολο
  const f0 = 1 + 0.5 * easeIO(explode.applied < 0 ? t : explode.applied), f1 = 1 + 0.5 * easeIO(t);
  if (explode.applied >= 0 && !camTween) {
    const off = camera.position.clone().sub(controls.target).multiplyScalar(f1 / f0);
    camera.position.copy(controls.target).add(off);
  }
  explode.applied = t;
  // διεπαφή
  $('explode').value = Math.round(t * 1000);
  $('explode-val').textContent = String(Math.round(t * 100)).padStart(3, '0') + '%';
  $('explode').style.setProperty('--p', (t * 100) + '%');
  const ex = explode.target > 0.5;
  $('st-col').classList.toggle('active', t < 0.5); $('st-exp').classList.toggle('active', t >= 0.5);
  $('st-col').setAttribute('aria-selected', t < 0.5); $('st-exp').setAttribute('aria-selected', t >= 0.5);
  $('tb-explode').classList.toggle('on', ex);
  $('tb-explode-lbl').dataset.t = ex ? 'tbCollapse' : 'tbExplode';
  $('tb-explode-lbl').textContent = T($('tb-explode-lbl').dataset.t);
  $('tb-explode').setAttribute('aria-label', T($('tb-explode-lbl').dataset.t)); $('tb-explode').title = T($('tb-explode-lbl').dataset.t);
}

/* ═══════════════ Κινηματική (δακτύλιος σταθερός, είσοδος ηλιακός) ═══════════════ */
const kin = { run: !REDUCED, theta: 0, omega: 0, omegaTarget: 0.9 };
function applyKinematics() { applyModelKinematics(kin.theta); }

/* ═══════════════ Επιλογή / επισήμανση / τομή ═══════════════ */
const ui = { hover: null, selected: null, hideOthers: false, section: false };
const SECTION_SET = new Set(['housing', 'cover', 'ring']);
function refreshVisuals() {
  const anyGhost = !!ui.selected || ui.section;
  for (const id in comps) {
    const c = comps[id];
    let op = 1, vis = !c.hidden;
    if (ui.selected && ui.selected !== id) { if (ui.hideOthers) vis = false; else op = 0.09; }
    else if (ui.section && SECTION_SET.has(id) && ui.selected !== id) op = 0.16;
    c.w.visible = vis;
    compMaterials(id).forEach(m => {
      const tr = op < 1; m.transparent = tr; m.opacity = op; m.depthWrite = !tr;
      m.emissive.setHex(id === ui.selected ? 0x2f6fff : id === ui.hover ? 0x2a5fe0 : 0x000000);
      m.emissiveIntensity = id === ui.selected ? 0.14 : id === ui.hover ? 0.2 : 0;
      m.needsUpdate = true;
    });
    c.meshes.forEach(m => { m.castShadow = op > 0.5; });
    c.edges.forEach(e => { e.visible = vis && op < 1 && ui.section && SECTION_SET.has(id); });
  }
  if (post.gtao) post.gtaoTarget = anyGhost ? 0 : 1;
  $('section-badge').hidden = !ui.section;
  $('tb-section').classList.toggle('on', ui.section); $('tb-section').setAttribute('aria-pressed', ui.section);
  renderList(); renderCard();
}
function setHover(id) {
  if (ui.hover === id) return;
  const prev = ui.hover; ui.hover = id;
  [prev, id].forEach(k => { if (!k) return; compMaterials(k).forEach(m => {
    m.emissive.setHex(k === ui.selected ? 0x2f6fff : k === ui.hover ? 0x2a5fe0 : 0);
    m.emissiveIntensity = k === ui.selected ? 0.14 : k === ui.hover ? 0.2 : 0; }); });
  canvas.style.cursor = id ? 'pointer' : '';
  document.querySelectorAll('#comp-list li').forEach(li => li.classList.toggle('hover', li.dataset.id === id));
}
function select(id) {
  ui.selected = id && ui.selected === id ? null : id;
  if (!ui.selected) ui.hideOthers = false;
  refreshVisuals();
}

/* ── Λίστα εξαρτημάτων ── */
function swatch(id) { const m = compMaterials(id)[0]; return '#' + m.color.getHexString(); }
function renderList() {
  const ul = $('comp-list');
  const total = COMPONENTS.reduce((s, c) => s + c.pieces, 0);
  $('panel-count').textContent = `${COMPONENTS.length} · ${total} ${T('pieces')}`;
  $('tm-parts').textContent = `${COMPONENTS.length} / ${total}`;
  ul.innerHTML = '';
  COMPONENTS.forEach((c, i) => {
    const d = c[LANG], li = document.createElement('li');
    li.dataset.id = c.id;
    li.className = (ui.selected === c.id ? 'sel ' : '') + (comps[c.id].hidden ? 'off' : '');
    li.innerHTML = `<button class="li-main" type="button"><span class="li-idx">${String(i + 1).padStart(2, '0')}</span><span class="li-sw" style="background:${swatch(c.id)}"></span><span class="li-name">${d.name}</span><span class="li-qty">×${d.qty}</span></button><button class="li-eye" type="button" aria-label="${comps[c.id].hidden ? T('show') : T('hide')}" aria-pressed="${!comps[c.id].hidden}">${comps[c.id].hidden ? ICON_EYE_OFF : ICON_EYE}</button>`;
    li.querySelector('.li-main').onclick = () => select(c.id);
    li.querySelector('.li-main').onmouseenter = () => setHover(c.id);
    li.querySelector('.li-main').onmouseleave = () => setHover(null);
    li.querySelector('.li-eye').onclick = () => { comps[c.id].hidden = !comps[c.id].hidden; if (ui.selected === c.id) ui.selected = null; refreshVisuals(); };
    ul.appendChild(li);
  });
}
const ICON_EYE = '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const ICON_EYE_OFF = '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.8 9.8 0 0 0 5.4-1.6"/></svg>';

/* ── Κάρτα επιλεγμένου ── */
function renderCard() {
  const card = $('card');
  if (!ui.selected) { card.hidden = true; return; }
  const c = DATA[ui.selected], d = c[LANG];
  card.hidden = false;
  $('card-idx').textContent = `${T('pos')} ${String(c.idx).padStart(2, '0')} / ${COMPONENTS.length}`;
  $('card-name').textContent = d.name;
  $('card-qty').textContent = d.qty; $('card-mat').textContent = d.mat; $('card-spec').textContent = d.spec; $('card-role').textContent = d.role;
  $('card-hide').checked = ui.hideOthers;
}

/* ── Αιωρούμενη ετικέτα ── */
const tip = $('tip');
function showTip(id, x, y) {
  if (!id) { tip.hidden = true; return; }
  const d = DATA[id][LANG];
  $('tip-name').textContent = d.name; $('tip-mat').textContent = d.spec;
  tip.hidden = false;
  const w = tip.offsetWidth, h = tip.offsetHeight, W = stage.clientWidth;
  tip.style.transform = `translate(${Math.min(x + 18, W - w - 12)}px, ${Math.max(8, y - h - 14)}px)`;
}

/* ═══════════════ Δείκτης / raycast ═══════════════ */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
function pick(ev) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(pickables.filter(m => isShown(m)), false);
  // στην τομή/απομόνωση, προτίμησε αδιαφανή εξαρτήματα
  const solid = hits.find(h => !h.object.material.transparent);
  return (solid || hits[0])?.object.userData.comp || null;
}
function isShown(o) { while (o) { if (!o.visible) return false; o = o.parent; } return true; }
let down = null, pendingMove = null;
canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; stopAuto(); });
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  pendingMove = e;
});
canvas.addEventListener('pointerleave', () => { pendingMove = null; setHover(null); showTip(null); });
canvas.addEventListener('pointerup', e => {
  if (!down) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  if (moved < 6) { const id = pick(e); if (id) select(id); else if (ui.selected) select(null); }
  down = null;
});
canvas.addEventListener('dblclick', e => { const id = pick(e); if (id) { ui.selected = id; refreshVisuals(); focusOn(id); } });
canvas.addEventListener('wheel', stopAuto, { passive: true });
function processHover() {
  if (!pendingMove) return;
  const e = pendingMove; pendingMove = null;
  if (e.buttons) { showTip(null); return; }
  const id = pick(e); setHover(id);
  const r = stage.getBoundingClientRect(); showTip(id, e.clientX - r.left, e.clientY - r.top);
}

/* ═══════════════ Κάμερα: ομαλές μεταβάσεις ═══════════════ */
let camTween = null;
function tweenCam(pos, target, dur = 1.1) {
  camTween = { p0: camera.position.clone(), t0: controls.target.clone(), p1: pos.clone(), t1: target.clone(), s: performance.now(), d: dur * 1000 };
}
function homeFor() {
  const aspect = stage.clientWidth / Math.max(1, stage.clientHeight);
  const f = (aspect < 0.8 ? 1.75 : aspect < 1.2 ? 1.3 : 1) * (1 + 0.5 * easeIO(explode.t));
  const off = HOME.pos.clone().sub(HOME.target).multiplyScalar(f);
  return { pos: HOME.target.clone().add(off), target: HOME.target.clone() };
}
function resetView() { const h = homeFor(); tweenCam(h.pos, h.target, 1.2); }
function focusOn(id) {
  const box = new THREE.Box3().setFromObject(comps[id].w), c = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3()).length();
  const dir = camera.position.clone().sub(controls.target).normalize();
  tweenCam(c.clone().add(dir.multiplyScalar(clamp(size * 1.9, 10, 40))), c, 1.0);
}
function zoomBy(f) {
  stopAuto();
  const off = camera.position.clone().sub(controls.target);
  const d = clamp(off.length() * f, controls.minDistance, controls.maxDistance);
  tweenCam(controls.target.clone().add(off.setLength(d)), controls.target.clone(), 0.45);
}
function stopAuto() { if (controls.autoRotate) { controls.autoRotate = false; syncTools(); } }

/* ═══════════════ Εργαλειοθήκη ═══════════════ */
function syncTools() {
  $('tb-rotate').classList.toggle('on', controls.autoRotate); $('tb-rotate').setAttribute('aria-pressed', controls.autoRotate);
  $('tb-run').classList.toggle('on', kin.run); $('tb-run').setAttribute('aria-pressed', kin.run);
  $('tb-comps').classList.toggle('on', !$('panel').hidden); $('tb-comps').setAttribute('aria-pressed', !$('panel').hidden);
}
function toggleExplode(to) { explode.dragging = false; explode.target = to != null ? to : (explode.target > 0.5 ? 0 : 1); applyExplode(explode.t); }
$('tb-rotate').onclick = () => { controls.autoRotate = !controls.autoRotate; syncTools(); };
$('tb-zin').onclick = () => zoomBy(0.78);
$('tb-zout').onclick = () => zoomBy(1.28);
$('tb-explode').onclick = () => toggleExplode();
$('st-col').onclick = () => toggleExplode(0);
$('st-exp').onclick = () => toggleExplode(1);
$('tb-section').onclick = () => { ui.section = !ui.section; refreshVisuals(); };
$('tb-comps').onclick = () => { $('panel').hidden = !$('panel').hidden; syncTools(); };
$('panel-close').onclick = () => { $('panel').hidden = true; syncTools(); };
$('tb-run').onclick = () => { kin.run = !kin.run; syncTools(); };
$('tb-reset').onclick = () => {
  ui.selected = null; ui.hideOthers = false; ui.section = false;
  for (const id in comps) comps[id].hidden = false;
  refreshVisuals(); toggleExplode(0); resetView();
};
$('card-close').onclick = () => select(null);
$('card-hide').onchange = e => { ui.hideOthers = e.target.checked; refreshVisuals(); };
$('card-focus').onclick = () => ui.selected && focusOn(ui.selected);
const slider = $('explode');
slider.addEventListener('input', () => { explode.dragging = true; explode.target = slider.value / 1000; });
slider.addEventListener('change', () => { explode.dragging = false; });
$('btn-fs').onclick = () => { const d = document; if (!d.fullscreenElement) stage.requestFullscreen?.(); else d.exitFullscreen?.(); };
document.querySelectorAll('.lang button').forEach(b => b.onclick = () => { LANG = b.dataset.lang; try { localStorage.setItem('lang', LANG); } catch (e) {} applyLang(); });
window.addEventListener('keydown', e => {
  if (e.target.closest('input, textarea')) return;
  const k = e.key.toLowerCase();
  if (k === 'e') toggleExplode();
  else if (k === 's') $('tb-section').click();
  else if (k === 'r') $('tb-reset').click();
  else if (k === 'c') $('tb-comps').click();
  else if (k === ' ') { e.preventDefault(); $('tb-run').click(); }
  else if (k === 'escape') select(null);
});

function applyLang() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = T(el.dataset.t); });
  document.querySelectorAll('[data-t-aria]').forEach(el => { el.setAttribute('aria-label', T(el.dataset.tAria)); el.title = T(el.dataset.tAria); });
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
  canvas.setAttribute('aria-label', T('canvasLabel'));
  document.title = `${T('title')} — 3D | Expertease Designs`;
  renderList(); renderCard();
}

/* ═══════════════ Μετα-επεξεργασία (GTAO) — μόνο σε επιτραπέζιους ═══════════════ */
const post = { composer: null, gtao: null, gtaoTarget: 1 };
async function setupPost() {
  if (COARSE || QS.has('lq')) return;
  try {
    const [{ EffectComposer }, { RenderPass }, { GTAOPass }, { OutputPass }] = await Promise.all([
      import('three/addons/postprocessing/EffectComposer.js'),
      import('three/addons/postprocessing/RenderPass.js'),
      import('three/addons/postprocessing/GTAOPass.js'),
      import('three/addons/postprocessing/OutputPass.js')]);
    const w = stage.clientWidth, h = stage.clientHeight;
    const rt = new THREE.WebGLRenderTarget(w * DPR, h * DPR, { type: THREE.HalfFloatType, samples: 4 });
    const composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(DPR); composer.setSize(w, h);
    composer.addPass(new RenderPass(scene, camera));
    const gtao = new GTAOPass(scene, camera, w, h);
    gtao.output = GTAOPass.OUTPUT.Default;
    gtao.blendIntensity = 0.9;
    gtao.updateGtaoMaterial({ radius: 0.55, distanceExponent: 1.4, thickness: 1.2, scale: 1.1, samples: 16 });
    gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 16 });
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
    post.composer = composer; post.gtao = gtao;
  } catch (err) { console.warn('[gearbox-v2] GTAO off:', err); }
}

/* ═══════════════ Βρόχος ═══════════════ */
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  post.composer?.setSize(w, h);
}
window.addEventListener('resize', resize);

const triadAxes = [['x', new THREE.Vector3(1, 0, 0)], ['y', new THREE.Vector3(0, 1, 0)], ['z', new THREE.Vector3(0, 0, 1)]];
const qInv = new THREE.Quaternion(), tmp = new THREE.Vector3();
function updateTriad() {
  qInv.copy(camera.quaternion).invert();
  // Άξονες του μηχανισμού: X = άξονας περιστροφής (τοπικό Z)
  triadAxes.forEach(([n, v]) => {
    tmp.copy(v).applyQuaternion(assembly.quaternion).applyQuaternion(qInv);
    const el = $('tri-' + n), lb = $('tl-' + n);
    el.setAttribute('x2', (tmp.x * 20).toFixed(1)); el.setAttribute('y2', (-tmp.y * 20).toFixed(1));
    lb.setAttribute('x', (tmp.x * 25).toFixed(1)); lb.setAttribute('y', (-tmp.y * 25 + 3).toFixed(1));
  });
}

const clock = new THREE.Clock();
let frames = 0, firstFrame = true;
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.05);
  // ανάπτυξη
  if (explode.t !== explode.target) {
    const k = explode.dragging ? 14 : 0;
    if (k) explode.t += (explode.target - explode.t) * Math.min(1, dt * k);
    else explode.t += Math.sign(explode.target - explode.t) * Math.min(Math.abs(explode.target - explode.t), dt * explode.speed);
    if (Math.abs(explode.t - explode.target) < 1e-4) explode.t = explode.target;
    applyExplode(explode.t);
  }
  // κινηματική
  kin.omega += ((kin.run ? kin.omegaTarget : 0) - kin.omega) * Math.min(1, dt * 2.5);
  if (Math.abs(kin.omega) > 1e-4) { kin.theta += kin.omega * dt; applyKinematics(); }
  const rpmIn = 1500 * (kin.omega / kin.omegaTarget);
  if (frames % 6 === 0) {
    $('tm-in').textContent = `${Math.round(rpmIn)} min⁻¹`;
    $('tm-out').textContent = `${Math.round(rpmIn / RATIO)} min⁻¹`;
  }
  // κάμερα
  if (camTween) {
    const u = clamp((performance.now() - camTween.s) / camTween.d, 0, 1), e = easeIO(u);
    camera.position.lerpVectors(camTween.p0, camTween.p1, e);
    controls.target.lerpVectors(camTween.t0, camTween.t1, e);
    if (u >= 1) camTween = null;
  }
  controls.update();
  processHover();
  updateTriad();
  if (post.gtao) {
    post.gtao.blendIntensity += (post.gtaoTarget * 0.9 - post.gtao.blendIntensity) * Math.min(1, dt * 6);
    post.gtao.enabled = post.gtao.blendIntensity > 0.02;
  }
  if (post.composer) post.composer.render(dt); else renderer.render(scene, camera);
  frames++;
  if (firstFrame) { firstFrame = false; requestAnimationFrame(() => $('loader').classList.add('done')); }
}

/* ═══════════════ Εκκίνηση ═══════════════ */
applyLang();
resize();
const t0 = parseFloat(QS.get('explode'));
if (!isNaN(t0)) { explode.t = explode.target = clamp(t0, 0, 1); }
else if (!REDUCED) { explode.t = 0.55; explode.target = 0; explode.speed = 0.42; setTimeout(() => { explode.speed = 0.75; }, 2600); }
const h0 = homeFor(); camera.position.copy(h0.pos); controls.target.copy(h0.target);
applyExplode(explode.t);
applyKinematics();
refreshVisuals();
syncTools();
setupPost().finally(() => { resize(); loop(); });

/* Για δοκιμές/ενσωμάτωση */
window.gearboxV2 = { comps, explode, ui, select, toggleExplode, kin, controls, camera, refreshVisuals, applyExplode };
