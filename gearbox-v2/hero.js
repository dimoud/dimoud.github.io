/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / hero.js — ελεγκτής του μειωτήρα στην αρχική σελίδα (κύριο νήμα)

   Ροή στον υπολογιστή:
   1. Εμφανίζεται ΑΜΕΣΩΣ η εικόνα-αφίσα (poster.webp, ~110 KB) στην ακριβή θέση του
      μοντέλου και κάνει την είσοδο με ολίσθηση (CSS) — καμία αναμονή, κανένα βάρος.
   2. Μετά τη φόρτωση της σελίδας ξεκινά το 3D σε Web Worker (worker.js → scene.js,
      OffscreenCanvas): γεωμετρία, shaders και καρέ εκτός κύριου νήματος.
   3. Όταν είναι έτοιμο, το ζωντανό 3D (ίδιο ακριβώς πρώτο καρέ) αντικαθιστά την αφίσα.
   Χωρίς κάρτα γραφικών (απόδοση από τον επεξεργαστή) ή με πολύ αργή κάρτα, μένει η
   αφίσα και δεν αποδίδεται κανένα καρέ 3D.
   Στο κινητό (καμβάς σταθερός στο φόντο) δεν χρησιμοποιείται αφίσα.
   Ίδια global ονόματα: initThree, setScrollExplode, setMode, resetModel.
═══════════════════════════════════════════════════════════════ */
const IS_MOBILE = window.matchMedia('(max-width: 960px)').matches;
const REDUCED   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Θέση της αφίσας σε μονάδες του μοντέλου, ως προς το κέντρο του μειωτήρα
   (μετρημένη από απόδοση 3200×1800 με το scene.js — ταυτίζεται σε κάθε αναλογία οθόνης) */
const POSTER = { src: new URL('./poster.webp', import.meta.url).href,
  offX: -4.350488, offY: -4.706590, wU: 9.073402, hU: 9.119655 };
const INTRO_DIST = 5;            // μονάδες ολίσθησης εισόδου (ίδιο με scene.js)
/* Ελαφριά λειτουργία: 24 έτοιμα καρέ ανάπτυξης (gearbox-v2/seq/00–23.webp, ~1,5 MB, φορτώνονται
   ΜΟΝΟ όταν δεν υπάρχει κάρτα γραφικών). Καρέ 0–4: στροφή, 4–23: ανάπτυξη. */
const SEQ = { base: new URL('./seq/', import.meta.url).href, n: 24,
  offX: -8.574977, offY: -4.937858, wU: 15.787873, hU: 11.070013 };

let started = false;
let send = null;                 // (μήνυμα) → worker ή απευθείας κλήση στο κύριο νήμα
const pending = {};              // τελευταία τιμή ανά τύπο, πριν είναι έτοιμος ο μειωτήρας
const post = m => { if (send) send(m); else pending[m.type] = m; };

/* Ίδια προβολή με την κάμερα του scene.js (θέση 0,2.5,20 → στόχος 0,0.5,0, fov 38°):
   κέντρο του μειωτήρα στην οθόνη και εικονοστοιχεία ανά μονάδα */
function project(W, H) {
  const t = Math.tan(19 * Math.PI / 180);
  const X = t * 20 * (W / H) * 0.5 - 1.0;
  const fy = -2, fz = -20, fn = Math.hypot(fy, fz);
  const f = [0, fy / fn, fz / fn], u = [0, -f[2], f[1]];      // r = (1,0,0)
  const v = [X, -2.5, -20];
  const xc = v[0], yc = v[1] * u[1] + v[2] * u[2], zc = v[1] * f[1] + v[2] * f[2];
  const nx = xc / (zc * t * (W / H)), ny = yc / (zc * t);
  return { cx: (nx + 1) / 2 * W, cy: (1 - ny) / 2 * H, ppu: H / (2 * t * zc) };
}

function initThree() {
  if (started) return;
  let canvas = document.getElementById('hero3d');
  if (!canvas) return;
  started = true;
  const parent = canvas.parentElement;
  const size = () => ({ w: parent.clientWidth || 1280, h: parent.clientHeight || 700 });
  const { w, h } = size();
  const usePoster = !IS_MOBILE;
  const opts = { width: w, height: h, dpr: window.devicePixelRatio || 1, mobile: IS_MOBILE, reduced: REDUCED,
                 noIntro: usePoster, poster: usePoster };

  /* ── Αφίσα ── */
  let poster = null;
  function placePoster() {
    if (!poster) return;
    const s = size(), p = project(s.w, s.h);
    poster.style.left = (p.cx + POSTER.offX * p.ppu) + 'px';
    poster.style.top = (p.cy + POSTER.offY * p.ppu) + 'px';
    poster.style.width = (POSTER.wU * p.ppu) + 'px';
    poster.style.height = (POSTER.hU * p.ppu) + 'px';
    poster.style.setProperty('--gb-dx', (INTRO_DIST * p.ppu) + 'px');
  }
  if (usePoster) {
    poster = new Image();
    poster.id = 'hero3d-poster'; poster.alt = ''; poster.setAttribute('aria-hidden', 'true');
    poster.decoding = 'async'; poster.src = POSTER.src;
    parent.insertBefore(poster, canvas);
    placePoster();
    const go = () => poster.classList.add('gb-in');
    (poster.decode ? poster.decode() : Promise.resolve()).then(go, go);
  }

  let liteMode = false;
  const goLite = () => {                               // χωρίς (ή με πολύ αργή) κάρτα γραφικών
    if (liteMode) return;
    liteMode = true;
    canvas.classList.add('is-lite');
    if (poster) { poster.style.display = ''; canvas.classList.remove('is-ready'); startSeq(); }
  };

  /* ── Ελαφριά λειτουργία: άνοιγμα/κλείσιμο με έτοιμα καρέ (καμία απόδοση 3D) ── */
  let seq = null;
  function placeSeq() {
    if (!seq) return;
    const s = size(), p = project(s.w, s.h), el = seq.el.style;
    el.left = (p.cx + SEQ.offX * p.ppu) + 'px'; el.top = (p.cy + SEQ.offY * p.ppu) + 'px';
    el.width = (SEQ.wU * p.ppu) + 'px'; el.height = (SEQ.hU * p.ppu) + 'px';
  }
  function startSeq() {
    const el = document.createElement('div');
    el.id = 'hero3d-seq'; el.setAttribute('aria-hidden', 'true');
    const imgs = [];
    for (let i = 0; i < SEQ.n; i++) {
      const im = new Image(); im.alt = ''; im.decoding = 'async';
      im.src = SEQ.base + String(i).padStart(2, '0') + '.webp';
      el.appendChild(im); imgs.push(im);
    }
    parent.insertBefore(el, canvas);
    seq = { el, imgs, shown: -1, p: 0, target: 0, scrollT: 0, clickOpen: false, raf: 0 };
    placeSeq();
    /* θέση t της κύλισης (ίδια λογική με το 3D) → αριθμός καρέ */
    const frameOf = t => t <= 0.15 ? t / 0.15 * 4 : 4 + (t - 0.15) / 0.85 * (SEQ.n - 5);
    const show = f => {
      const k = Math.max(0, Math.min(SEQ.n - 1, Math.round(f)));
      if (k === seq.shown) return;
      if (seq.shown >= 0) imgs[seq.shown].classList.remove('on');
      imgs[k].classList.add('on'); seq.shown = k;
    };
    let last = 0;
    const tick = now => {                              // ομαλή μετάβαση προς τον στόχο (άνοιγμα 1,8 s, κλείσιμο 2 s, με βάση τον χρόνο)
      const dt = Math.min((now - last) / 1000, 0.25); last = now;
      const d = seq.target - seq.p, step = dt / (seq.target > seq.p ? 1.8 : 2.0);
      if (Math.abs(d) <= step) { seq.p = seq.target; seq.raf = 0; }
      else { seq.p += Math.sign(d) * step; seq.raf = requestAnimationFrame(tick); }
      show(frameOf(seq.p));
    };
    const go = () => { if (!seq.raf) { last = performance.now(); seq.raf = requestAnimationFrame(tick); } };
    seq.handle = m => {
      if (m.type === 'scroll') {
        seq.scrollT = m.t;
        if (m.t >= 0.005) { seq.clickOpen = false; cancelAnimationFrame(seq.raf); seq.raf = 0; seq.p = seq.target = m.t; show(frameOf(m.t)); }
        else if (!seq.clickOpen) { seq.target = 0; go(); }
      } else if (m.type === 'click') {
        if (seq.scrollT >= 0.005) return;
        seq.clickOpen = !seq.clickOpen; seq.target = seq.clickOpen ? 1 : 0; go();
      } else if (m.type === 'reset') { seq.clickOpen = false; seq.target = 0; go(); }
    };
    send = seq.handle;
    /* Όταν φορτώσουν όλα τα καρέ, το καρέ 0 (ίδιο με την αφίσα) παίρνει τη θέση της */
    Promise.all(imgs.map(im => im.decode ? im.decode().catch(() => {}) : Promise.resolve())).then(() => {
      el.classList.add('ready'); show(frameOf(seq.p)); poster.style.display = 'none';
    });
  }
  const onReady = (t) => {
    window.__gearbox = t;                               // διάγνωση: χρόνοι φόρτωσης (ms) → __gearbox στην κονσόλα
    if (t && t.lite) {
      if (poster) { goLite(); return; }                // μένει η αφίσα — μηδενικό κόστος
      canvas.classList.add('is-lite', 'lite-intro');    // κινητό χωρίς κάρτα: ένα καρέ, είσοδος με CSS
    }
    if (poster) canvas.classList.add('from-poster');
    canvas.classList.add('is-ready');
    if (poster) setTimeout(() => { if (!liteMode) poster.style.display = 'none'; }, 450);
    const ind = document.getElementById('model-indicator');
    if (ind) ind.textContent = 'PLANETARY GEARBOX';
  };
  const onMode = mode => {
    document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
    const b = document.getElementById('btn-' + mode); if (b) b.classList.add('active');
  };
  const onMsg = (type, data) => {
    if (type === 'ready') onReady(data);
    else if (type === 'mode') onMode(data);
    else if (type === 'lite') goLite();
  };
  const flush = () => Object.values(pending).forEach(m => send(m));

  /* Με αφίσα, το 3D ξεκινά μετά τη φόρτωση της σελίδας (δεν ανταγωνίζεται τα υπόλοιπα)·
     χωρίς αφίσα (κινητό) ξεκινά αμέσως */
  const whenLoaded = fn => {
    if (!usePoster || document.readyState === 'complete') fn();
    else window.addEventListener('load', fn, { once: true });
  };

  /* ── 1. Προτιμώμενη διαδρομή: Web Worker + OffscreenCanvas ── */
  const canWorker = 'transferControlToOffscreen' in HTMLCanvasElement.prototype && typeof Worker === 'function';
  if (canWorker) {
    whenLoaded(() => {
      let worker;
      try { worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' }); }
      catch (e) { worker = null; }
      if (!worker) { startMainThread(); return; }
      const off = canvas.transferControlToOffscreen();
      worker.onmessage = e => {
        const { type, data } = e.data;
        if (type === 'fail') {                         // χωρίς WebGL στον worker → νέος καμβάς, κύριο νήμα
          worker.terminate(); send = null;
          const fresh = canvas.cloneNode(false); canvas.replaceWith(fresh); canvas = fresh;
          startMainThread();
        } else onMsg(type, data);
      };
      worker.onerror = () => worker.onmessage({ data: { type: 'fail' } });
      worker.postMessage({ type: 'init', canvas: off, opts }, [off]);
      send = m => worker.postMessage(m);
      flush();
    });
  } else startMainThread();
  wire();

  /* ── 2. Εναλλακτική: κύριο νήμα, μετά τη φόρτωση και σε στιγμή ηρεμίας ── */
  function startMainThread() {
    const go = async () => {
      const { createGearbox } = await import('./scene.js');
      const api = await createGearbox(canvas, opts, onMsg);
      send = m => {
        switch (m.type) {
          case 'resize': api.resize(m.w, m.h); break;
          case 'dragging': api.dragging(m.on); break;
          case 'drag': api.drag(m.dx, m.dy); break;
          case 'click': api.click(); break;
          case 'mode': api.setMode(m.mode); break;
          case 'reset': api.resetModel(); break;
          case 'scroll': api.setScrollExplode(m.t); break;
          case 'run': api.run(m.on); break;
        }
      };
      flush();
    };
    const idle = () => ('requestIdleCallback' in window) ? requestIdleCallback(go, { timeout: 1500 }) : setTimeout(go, 300);
    if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle, { once: true });
  }

  /* ── Γεγονότα σελίδας ── */
  function wire() {
    const dragEl = document.getElementById('hero3d-drag') || canvas;
    /* Μόνο κλικ = άνοιγμα / κλείσιμο. Η περιστροφή με το ποντίκι ή την αφή έχει καταργηθεί. */
    dragEl.addEventListener('click', () => post({ type: 'click' }));

    let rz = 0;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(rz);
      rz = requestAnimationFrame(() => { const s = size(); placePoster(); placeSeq(); post({ type: 'resize', w: s.w, h: s.h }); });
    });

    /* Παύση όταν η καρτέλα δεν φαίνεται ή όταν το hero βγει από την οθόνη (όχι στο κινητό: σταθερός καμβάς) */
    let inView = true;
    const update = () => post({ type: 'run', on: !document.hidden && (inView || window.innerWidth <= 960) });
    document.addEventListener('visibilitychange', update);
    const hero = document.getElementById('hero');
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(es => { inView = es[0].isIntersecting; update(); }, { threshold: 0 }).observe(hero);
    }
  }
}

/* ═══════════════ Δημόσιο API (ίδιο με πριν) ═══════════════ */
function setMode(mode) { post({ type: 'mode', mode }); }
function resetModel() { post({ type: 'reset' }); }
function setScrollExplode(t) { post({ type: 'scroll', t }); }

Object.assign(window, { initThree, setScrollExplode, setMode, resetModel });

/* Εκκίνηση αμέσως (η αφίσα εμφανίζεται χωρίς αναμονή)· το main.js το ξανακαλεί χωρίς επίδραση */
if (document.readyState !== 'loading') initThree();
else document.addEventListener('DOMContentLoaded', initThree, { once: true });
