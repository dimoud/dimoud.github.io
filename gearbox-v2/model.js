/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / model.js — γεωμετρία, υλικά, ανάπτυξη και κινηματική
   του πλανητικού μειωτήρα. Κοινό για τη σελίδα προβολής (app.js)
   και για την αρχική σελίδα (hero.js). Χωρίς σκηνή, κάμερα ή DOM.
═══════════════════════════════════════════════════════════════ */
import * as THREE from 'three';

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ═══════════════ Γεωμετρικές παράμετροι ═══════════════ */
export const MOD = 0.18, NS = 18, NP = 18, NR = 54;
export const RP_S = NS * MOD / 2;                 // 1.62
export const OR = (NS + NP) * MOD / 2;            // 3.24  ακτίνα τροχιάς δορυφόρων
export const RP_R = NR * MOD / 2;                 // 4.86
export const ADD = MOD, DED = 1.25 * MOD;
export const PA = 20 * Math.PI / 180, INV_A = Math.tan(PA) - PA;
export const TANB = Math.tan(12 * Math.PI / 180);
export const Z0 = 0.02, Z1 = 0.78;                // πλάτος δοντιών ηλιακού/δορυφόρων
export const PLANET_A = [0, 2 * Math.PI / 3, 4 * Math.PI / 3];
export const BOLT_R = 6.3, BOLT_N = 8, OUT_R = 6.9;
export const RATIO = 1 + NR / NS;                 // 4

/* Τορνευμένη (ομόκεντρη) επιφάνεια: χάρτης τραχύτητας + χάρτης ανισοτροπίας εφαπτομενικά */
const SPUN = (() => {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); g.fillStyle = '#6a6a6a'; g.fillRect(0, 0, S, S);
  for (let r = 1; r < S * 0.72; r += 1) {
    const v = 118 + Math.round((Math.random() - 0.5) * 50 + Math.sin(r * 0.21) * 12);
    g.strokeStyle = `rgb(${v},${v},${v})`; g.lineWidth = 1.2;
    g.beginPath(); g.arc(S / 2, S / 2, r, 0, Math.PI * 2); g.stroke();
  }
  const rough = new THREE.CanvasTexture(c);
  const a = document.createElement('canvas'); a.width = a.height = 256;
  const ag = a.getContext('2d'), id = ag.createImageData(256, 256);
  for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
    const dx = x - 127.5, dy = (255 - y) - 127.5, l = Math.hypot(dx, dy) || 1;
    const o = (y * 256 + x) * 4;
    id.data[o] = Math.round((-dy / l * 0.5 + 0.5) * 255);
    id.data[o + 1] = Math.round((dx / l * 0.5 + 0.5) * 255);
    id.data[o + 2] = 255; id.data[o + 3] = 255;
  }
  ag.putImageData(id, 0, 0);
  const aniso = new THREE.CanvasTexture(a);
  return { rough, aniso };
})();
function spunFor(R) {
  const r = SPUN.rough.clone(), a = SPUN.aniso.clone();
  [r, a].forEach(t => { t.repeat.set(1 / (2 * R), 1 / (2 * R)); t.offset.set(0.5, 0.5); t.needsUpdate = true; });
  return { r, a };
}

/* ═══════════════ Υλικά (ένα αντίγραφο ανά εξάρτημα για επισήμανση) ═══════════════ */
const MATS = {
  alu: (R = 6.9) => { const s = spunFor(R); return new THREE.MeshPhysicalMaterial({ color: 0xcfd5dc, metalness: 1, roughness: 1, roughnessMap: s.r, anisotropy: 0.6, anisotropyMap: s.a }); },
  gear: () => new THREE.MeshPhysicalMaterial({ color: 0xa3aab2, metalness: 1, roughness: 0.27 }),
  ring: () => new THREE.MeshPhysicalMaterial({ color: 0x565d66, metalness: 1, roughness: 0.4 }),
  black: () => new THREE.MeshPhysicalMaterial({ color: 0x14171c, metalness: 0.15, roughness: 0.52, clearcoat: 0.35, clearcoatRoughness: 0.45 }),
  red: () => new THREE.MeshPhysicalMaterial({ color: 0xa4161f, metalness: 0.7, roughness: 0.34, clearcoat: 0.55, clearcoatRoughness: 0.22 }),
  oxide: () => new THREE.MeshPhysicalMaterial({ color: 0x2b2e33, metalness: 0.85, roughness: 0.36 }),
  zinc: () => new THREE.MeshPhysicalMaterial({ color: 0xbfc5cc, metalness: 1, roughness: 0.3 }),
  bright: () => new THREE.MeshPhysicalMaterial({ color: 0xcdd3d9, metalness: 1, roughness: 0.16 })
};
const matCache = {};
function mat(comp, kind, arg) {
  const k = comp + ':' + kind;
  if (!matCache[k]) { const m = MATS[kind](arg); m.userData.base = { opacity: 1 }; matCache[k] = m; }
  return matCache[k];
}

/* ═══════════════ Βοηθοί γεωμετρίας ═══════════════ */
function circlePath(x, y, r, cw = true) { const p = new THREE.Path(); p.absarc(x, y, r, 0, Math.PI * 2, cw); return p; }
function annulus(rOut, rIn, extra = []) {
  const s = new THREE.Shape(); s.absarc(0, 0, rOut, 0, Math.PI * 2, false);
  if (rIn > 0) s.holes.push(circlePath(0, 0, rIn));
  extra.forEach(h => s.holes.push(h));
  return s;
}
function boltHoles(r, n, rad, phase = 0) {
  const out = [];
  for (let i = 0; i < n; i++) { const a = phase + i / n * Math.PI * 2; out.push(circlePath(Math.cos(a) * r, Math.sin(a) * r, rad)); }
  return out;
}
/* Εξώθηση με ακριβή όρια z0..z1 και λοξοτμήσεις που δεν «φουσκώνουν» το περίγραμμα */
function slab(shape, z0, z1, { bevel = 0.03, segs = 2, curve = 96, steps = 1 } = {}) {
  const b = Math.min(bevel, (z1 - z0) * 0.3);
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: (z1 - z0) - 2 * b, steps, curveSegments: curve,
    bevelEnabled: b > 0, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: segs
  });
  g.translate(0, 0, z0 + b);
  return g;
}
function hexShape(R, holeR = 0) {
  const s = new THREE.Shape();
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; i ? s.lineTo(Math.cos(a) * R, Math.sin(a) * R) : s.moveTo(Math.cos(a) * R, Math.sin(a) * R); }
  s.closePath(); if (holeR) s.holes.push(circlePath(0, 0, holeR)); return s;
}
function cylZ(r, z0, z1, seg = 40) {
  const g = new THREE.CylinderGeometry(r, r, z1 - z0, seg, 1);
  g.rotateX(Math.PI / 2); g.translate(0, 0, (z0 + z1) / 2); return g;
}
/* Εξειλιγμένη κατατομή δοντιού (γωνία πίεσης 20°) */
function involuteInv(r, rb) { if (r <= rb) return 0; const a = Math.acos(rb / r); return Math.tan(a) - a; }
function gearOutline(N, rTip, rRoot, halfBacklash, phase) {
  const rp = N * MOD / 2, rb = rp * Math.cos(PA);
  const psi = Math.PI / (2 * N) - halfBacklash / rp;
  const th = r => psi + INV_A - involuteInv(Math.max(r, rb), rb);
  const step = Math.PI * 2 / N, F = 7, pts = [];
  const P = (a, r) => pts.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
  for (let k = 0; k < N; k++) {
    const c = phase + k * step;
    for (let i = 0; i <= F; i++) { const r = rRoot + (rTip - rRoot) * i / F; P(c - th(r), r); }
    for (let j = 1; j <= 2; j++) P(c - th(rTip) + 2 * th(rTip) * j / 3, rTip);
    for (let i = F; i >= 0; i--) { const r = rRoot + (rTip - rRoot) * i / F; P(c + th(r), r); }
    const a0 = c + th(rRoot), a1 = c + step - th(rRoot);
    for (let j = 1; j <= 3; j++) P(a0 + (a1 - a0) * j / 4, rRoot);
  }
  return pts;
}
/* Ελικοειδής συστροφή: περιστροφή κάθε κορυφής κατά k·(z−Z0), ομαλά μόνο στη στεφάνη δοντιών */
function twist(g, k, rIn = null, rOut = 1) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const s = rIn == null ? 1 : smooth(rIn, rOut, Math.hypot(x, y));
    const a = k * (z - Z0) * s, c = Math.cos(a), sn = Math.sin(a);
    p.setXY(i, x * c - y * sn, x * sn + y * c);
  }
  g.computeVertexNormals();
  return g;
}
function boreWithKey(r, kw, top) {
  const a = Math.asin(kw / 2 / r), p = new THREE.Path();
  p.moveTo(Math.cos(Math.PI / 2 + a) * r, Math.sin(Math.PI / 2 + a) * r);
  p.absarc(0, 0, r, Math.PI / 2 + a, Math.PI / 2 - a + Math.PI * 2, false);
  p.lineTo(kw / 2, top); p.lineTo(-kw / 2, top); p.closePath();
  return p;
}
function externalGear(N, holes, handK, rTwistIn) {
  const rp = N * MOD / 2;
  const s = new THREE.Shape(gearOutline(N, rp + ADD, rp - DED, 0.012, 0));
  holes.forEach(h => s.holes.push(h));
  const g = slab(s, Z0, Z1, { bevel: 0.022, segs: 1, curve: 24, steps: 7 });
  return twist(g, handK / rp, rTwistIn, rp - DED);
}

/* ═══════════════ Συναρμολόγηση ═══════════════ */
const assembly = new THREE.Group();
const root = new THREE.Group();            // μετατοπίζεται για να μένει κεντραρισμένη η ανάπτυξη
assembly.add(root);
const sunSpin = new THREE.Group(), shaftSpin = new THREE.Group(), carrierRot = new THREE.Group();

const comps = {};                          // id → { wrapper, dz, layer, meshes[], edges[] }
const pickables = [];
function comp(id, parent, dz, layer) {
  const w = new THREE.Group(); w.name = id; parent.add(w);
  comps[id] = { id, w, dz, layer, meshes: [], edges: [], hidden: false };
  return w;
}
function add(id, geo, material, parent, { edges = false } = {}) {
  const m = new THREE.Mesh(geo, material);
  m.castShadow = true; m.receiveShadow = true; m.userData.comp = id;
  (parent || comps[id].w).add(m);
  comps[id].meshes.push(m); pickables.push(m);
  if (edges) {
    const e = new THREE.LineSegments(edges, EDGE_MAT);
    e.visible = false; e.raycast = () => {}; m.add(e); comps[id].edges.push(e);
  }
  return m;
}

/* Περιγράμματα για τη λειτουργία τομής: μόνο οι πραγματικές ακμές του σχήματος
   (όχι οι διαγώνιοι της τριγωνοποίησης) στις δύο όψεις + λίγες αξονικές γραμμές */
const EDGE_MAT = new THREE.LineBasicMaterial({ color: 0x9cc9ff, transparent: true, opacity: 0.6, depthWrite: false });
function outline(shape, z0, z1, { curve = 96, k = 0 } = {}) {
  const { shape: outer, holes } = shape.extractPoints(curve);
  const loops = [outer, ...holes], v = [];
  const rot = (p, z) => { const a = k * (z - Z0), c = Math.cos(a), s = Math.sin(a); return [p.x * c - p.y * s, p.x * s + p.y * c, z]; };
  loops.forEach(L => [z0, z1].forEach(z => {
    for (let i = 0; i < L.length; i++) { const a = L[i], b = L[(i + 1) % L.length]; v.push(...rot(a, z), ...rot(b, z)); }
  }));
  // αξονικές ακμές στο εξωτερικό περίγραμμα (8 ισαπέχουσες)
  for (let j = 0; j < 8; j++) { const p = outer[Math.floor(j / 8 * outer.length)]; v.push(...rot(p, z0), ...rot(p, z1)); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); return g;
}

/* Σχέδιο ανάπτυξης: dz = αξονική μετατόπιση (μονάδες), layer = σειρά αποσυναρμολόγησης */
function build() {
  /* ── Κέλυφος (πίσω) ── */
  comp('housing', root, -4.4, 2);
  const hm = mat('housing', 'black');
  { const a = annulus(OUT_R, 1.3, boltHoles(BOLT_R, BOLT_N, 0.28)); add('housing', slab(a, -0.9, -0.3, { bevel: 0.05 }), hm, null, { edges: outline(a, -0.9, -0.3) }); }
  { const a = annulus(OUT_R, 5.62, boltHoles(BOLT_R, BOLT_N, 0.28)); add('housing', slab(a, -0.34, 0.95, { bevel: 0.05 }), hm, null, { edges: outline(a, -0.34, 0.95) }); }
  add('housing', slab(annulus(1.95, 1.3), -1.2, -0.86, { bevel: 0.04 }), hm);
  for (let i = 0; i < 12; i++) {             // νευρώσεις χυτού
    const rib = new THREE.BoxGeometry(3.7, 0.26, 0.3);
    rib.translate(2.0 + 1.85, 0, -1.02); rib.rotateZ(i / 12 * Math.PI * 2 + Math.PI / 12);
    add('housing', rib, hm);
  }

  /* ── Στεφάνη ── */
  comp('ring', root, 0, 99);
  const rs = annulus(5.6, 0);
  rs.holes.push(new THREE.Path(gearOutline(NR, RP_R + DED, RP_R - ADD, -0.012, Math.PI / NR)));
  const rg = slab(rs, 0, 0.8, { bevel: 0.022, segs: 1, curve: 160, steps: 7 });
  add('ring', twist(rg, -TANB / RP_R), mat('ring', 'ring'), null, { edges: outline(rs, 0, 0.8, { curve: 160, k: -TANB / RP_R }) });

  /* ── Εμπρόσθιο καπάκι ── */
  comp('cover', root, 8.6, 1);
  const cm = mat('cover', 'alu', OUT_R);
  { const a = annulus(OUT_R, 4.1, boltHoles(BOLT_R, BOLT_N, 0.28)); add('cover', slab(a, 0.95, 1.3, { bevel: 0.035 }), cm, null, { edges: outline(a, 0.95, 1.3) }); }
  { const a = annulus(4.55, 4.1); add('cover', slab(a, 1.28, 1.44, { bevel: 0.03 }), cm, null, { edges: outline(a, 1.28, 1.44) }); }

  /* ── Κοχλίες + ροδέλες / περικόχλια + ροδέλες ── */
  comp('bolts', root, 12.2, 0);
  comp('nuts', root, -9.4, 0);
  const ox = mat('bolts', 'oxide'), zn = mat('bolts', 'zinc'), oxN = mat('nuts', 'oxide'), znN = mat('nuts', 'zinc');
  for (let i = 0; i < BOLT_N; i++) {
    const a = i / BOLT_N * Math.PI * 2, x = Math.cos(a) * BOLT_R, y = Math.sin(a) * BOLT_R;
    const shank = cylZ(0.25, -1.4, 1.36, 20); shank.translate(x, y, 0); add('bolts', shank, ox);
    const head = slab(hexShape(0.46), 1.36, 1.69, { bevel: 0.035, curve: 8 }); head.rotateZ(a); head.translate(x, y, 0); add('bolts', head, ox);
    const w1 = slab(annulus(0.5, 0.27), 1.3, 1.36, { bevel: 0.01, curve: 24 }); w1.translate(x, y, 0); add('bolts', w1, zn);
    const nut = slab(hexShape(0.46, 0.25), -1.26, -0.96, { bevel: 0.035, curve: 16 }); nut.rotateZ(a); nut.translate(x, y, 0); add('nuts', nut, oxN);
    const w2 = slab(annulus(0.5, 0.27), -0.96, -0.9, { bevel: 0.01, curve: 24 }); w2.translate(x, y, 0); add('nuts', w2, znN);
  }

  /* ── Ρουλεμάν 6000 ── */
  comp('bearing', root, -2.2, 3);
  const bm = mat('bearing', 'bright');
  const race = (r0, r1, z0, z1) => new THREE.LatheGeometry([
    new THREE.Vector2(r0 + .02, z0), new THREE.Vector2(r1 - .02, z0), new THREE.Vector2(r1, z0 + .02),
    new THREE.Vector2(r1, z1 - .02), new THREE.Vector2(r1 - .02, z1), new THREE.Vector2(r0 + .02, z1),
    new THREE.Vector2(r0, z1 - .02), new THREE.Vector2(r0, z0 + .02), new THREE.Vector2(r0 + .02, z0)], 64).rotateX(Math.PI / 2);
  add('bearing', race(1.0, 1.3, -1.2, -0.4), bm);
  add('bearing', race(0.5, 0.72, -1.2, -0.4), bm);
  const ballG = new THREE.SphereGeometry(0.15, 20, 14);
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2, g = ballG.clone(); g.translate(Math.cos(a) * 0.86, Math.sin(a) * 0.86, -0.8); add('bearing', g, bm); }
  const cage = new THREE.TorusGeometry(0.86, 0.035, 8, 64); cage.translate(0, 0, -0.62); add('bearing', cage, mat('bearing', 'oxide'));

  /* ── Ηλιακός + άξονας εισόδου ── */
  const sunW = comp('sun', root, 1.2, 6); sunW.add(sunSpin);
  const sunHoles = [boreWithKey(0.5, 0.3, 0.64)];
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; sunHoles.push(circlePath(Math.cos(a) * 0.93, Math.sin(a) * 0.93, 0.17)); }
  add('sun', externalGear(NS, sunHoles, +TANB, 1.14), mat('sun', 'gear'), sunSpin);

  const shW = comp('shaft', root, -8.0, 1); shW.add(shaftSpin);
  const sm = mat('shaft', 'gear');
  const shaftProfile = [[0, -3.2], [0.44, -3.2], [0.5, -3.14], [0.5, 0.74], [0.45, 0.8], [0, 0.8]].map(([r, z]) => new THREE.Vector2(r, z));
  add('shaft', new THREE.LatheGeometry(shaftProfile, 48).rotateX(Math.PI / 2), sm, shaftSpin);
  const key1 = new THREE.BoxGeometry(0.3, 0.28, 1.1); key1.translate(0, 0.5, -2.45); add('shaft', key1, mat('shaft', 'oxide'), shaftSpin);
  const key2 = new THREE.BoxGeometry(0.3, 0.26, 0.7); key2.translate(0, 0.52, 0.4); add('shaft', key2, mat('shaft', 'oxide'), shaftSpin);

  /* ── Φορέας δορυφόρων (περιστρεφόμενο υποσύνολο) ── */
  root.add(carrierRot);
  const redF = mat('carrierF', 'red'), redR = mat('carrierR', 'red');
  const pinHoles = () => PLANET_A.map(a => circlePath(Math.cos(a) * OR, Math.sin(a) * OR, 0.28));
  const windows = () => [0, 1, 2].map(i => {             // παράθυρα ελάφρυνσης ανάμεσα στους άξονες
    const c = Math.PI / 3 + i * 2 * Math.PI / 3, w = 0.42, p = new THREE.Path();
    p.absarc(0, 0, 2.75, c - w, c + w, false); p.absarc(0, 0, 1.55, c + w, c - w, true); p.closePath(); return p;
  });
  comp('carrierF', carrierRot, 5.2, 3);
  {  // λεπτός δακτύλιος αξόνων + 3 ακτίνες προς κεντρικό κολάρο (φαίνονται τα γρανάζια)
    const s = annulus(3.8, 2.68, pinHoles());
    add('carrierF', slab(s, 0.84, 1.08, { bevel: 0.03 }), redF);
    add('carrierF', slab(annulus(1.4, 0.9, boltHoles(1.15, 6, 0.1, Math.PI / 6)), 0.84, 1.08, { bevel: 0.03 }), redF);
    [Math.PI / 3, Math.PI, 5 * Math.PI / 3].forEach(a => {
      const sp = new THREE.Shape(); const w = 0.26;
      sp.moveTo(1.3, -w); sp.lineTo(2.78, -w * 1.25); sp.lineTo(2.78, w * 1.25); sp.lineTo(1.3, w); sp.closePath();
      const g = slab(sp, 0.86, 1.06, { bevel: 0.025, curve: 4 }); g.rotateZ(a); add('carrierF', g, redF);
    });
  }
  comp('carrierR', carrierRot, -1.4, 4);
  add('carrierR', slab(annulus(3.95, 1.0, [...pinHoles(), ...windows()]), -0.26, -0.04, { bevel: 0.03 }), redR);

  comp('pins', carrierRot, 3.7, 4);
  const pm = mat('pins', 'bright'), cl = mat('pins', 'oxide');
  PLANET_A.forEach(a => {
    const x = Math.cos(a) * OR, y = Math.sin(a) * OR;
    const g = cylZ(0.27, -0.34, 1.16, 24); g.translate(x, y, 0); add('pins', g, pm);
    [-0.3, 1.12].forEach(z => { const t = new THREE.TorusGeometry(0.3, 0.035, 8, 32, Math.PI * 1.75); t.translate(x, y, z); add('pins', t, cl); });
  });

  const plW = comp('planets', carrierRot, 2.4, 5);
  const planetGeo = (() => {
    const holes = [circlePath(0, 0, 0.3)];
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; holes.push(circlePath(Math.cos(a) * 0.8, Math.sin(a) * 0.8, 0.18)); }
    return externalGear(NP, holes, -TANB, 1.03);
  })();
  const plM = mat('planets', 'gear');
  PLANET_A.forEach(a => {
    const pivot = new THREE.Group(); pivot.position.set(Math.cos(a) * OR, Math.sin(a) * OR, 0);
    const spin = new THREE.Group(); spin.userData.planet = true; pivot.add(spin); plW.add(pivot);
    add('planets', planetGeo, plM, spin);
  });

  comp('hub', carrierRot, 6.6, 2);
  const hmA = mat('hub', 'alu', 1.4);
  add('hub', slab(annulus(1.4, 0.5, boltHoles(1.15, 6, 0.1, Math.PI / 6)), 1.08, 1.3, { bevel: 0.03 }), hmA);
  const hubBody = new THREE.Shape(); hubBody.absarc(0, 0, 0.92, 0, Math.PI * 2, false); hubBody.holes.push(boreWithKey(0.5, 0.3, 0.66));
  add('hub', slab(hubBody, 1.3, 2.0, { bevel: 0.04 }), hmA);
}
build();

/* ── Βοηθητικές γραμμές συναρμολόγησης (διακεκομμένες) ── */
const guideMat = new THREE.LineDashedMaterial({ color: 0x8cc0ff, dashSize: 0.22, gapSize: 0.16, transparent: true, opacity: 0, depthWrite: false });
function lineSet(n, parent) {
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 6), 3));
  const l = new THREE.LineSegments(g, guideMat); l.frustumCulled = false; l.raycast = () => {}; parent.add(l); return l;
}
const boltGuides = lineSet(BOLT_N + 1, root);
const pinGuides = lineSet(3, carrierRot);

/* ═══════════════ Ανάπτυξη ═══════════════ */
export const ZMIN = -11.2, ZMAX = 13.9;    // ακραία z στην πλήρη ανάπτυξη (κλίμακα 1)
export const MID = (ZMIN + ZMAX) / 2;
let SCALE = 1;
/** Κλίμακα αποστάσεων ανάπτυξης (1 = σελίδα προβολής, <1 = πιο μαζεμένη) */
export function setExplodeScale(s) { SCALE = s; }
function partProgress(c, t) {
  if (c.layer >= 99) return 0;
  const s = c.layer * 0.075;
  return easeIO(clamp((t - s) / 0.5, 0, 1));
}
export function applyModelExplode(t) {
  for (const id in comps) { const c = comps[id]; c.w.position.z = c.dz * SCALE * partProgress(c, t); }
  root.position.z = -MID * SCALE * easeIO(t);
  const zb = comps.bolts.w.position.z, zn = comps.nuts.w.position.z;
  const pa = boltGuides.geometry.attributes.position;
  for (let i = 0; i < BOLT_N; i++) {
    const a = i / BOLT_N * Math.PI * 2, x = Math.cos(a) * BOLT_R, y = Math.sin(a) * BOLT_R;
    pa.setXYZ(i * 2, x, y, -1.26 + zn); pa.setXYZ(i * 2 + 1, x, y, -1.4 + zb);
  }
  pa.setXYZ(BOLT_N * 2, 0, 0, -3.4 + comps.shaft.w.position.z);
  pa.setXYZ(BOLT_N * 2 + 1, 0, 0, 2.3 + comps.hub.w.position.z);
  pa.needsUpdate = true; boltGuides.computeLineDistances();
  const pp = pinGuides.geometry.attributes.position, zf = comps.carrierF.w.position.z, zr = comps.carrierR.w.position.z;
  PLANET_A.forEach((a, i) => { const x = Math.cos(a) * OR, y = Math.sin(a) * OR; pp.setXYZ(i * 2, x, y, -0.26 + zr); pp.setXYZ(i * 2 + 1, x, y, 1.08 + zf); });
  pp.needsUpdate = true; pinGuides.computeLineDistances();
  guideMat.opacity = 0.6 * smooth(0.04, 0.3, t);
  boltGuides.visible = pinGuides.visible = t > 0.02;
}

/* ═══════════════ Κινηματική (στεφάνη σταθερή, είσοδος ο ηλιακός) ═══════════════ */
export function applyModelKinematics(th) {
  sunSpin.rotation.z = th;
  shaftSpin.rotation.z = th;
  const thC = th * NS / (NS + NR);                         // φορέας: θ/4
  carrierRot.rotation.z = thC;
  const thP = -(th - thC) * NS / NP;                       // δορυφόρος ως προς τον φορέα
  comps.planets.w.children.forEach(pv => { pv.children[0].rotation.z = Math.PI / NP + thP; });
}
export function compMaterials(id) { return [...new Set(comps[id].meshes.map(m => m.material))]; }
export { assembly, root, comps, pickables, guideMat };
