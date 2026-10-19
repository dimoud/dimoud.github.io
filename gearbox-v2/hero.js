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
    liteMode = true;
    canvas.classList.add('is-lite');
    if (poster) { poster.style.display = ''; canvas.classList.remove('is-ready'); }
  };
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
    let msx = 0, msy = 0, didDrag = false, isDragging = false, prev = { x: 0, y: 0 };
    dragEl.addEventListener('mousedown', e => {
      isDragging = true; didDrag = false; msx = e.clientX; msy = e.clientY; prev = { x: e.clientX, y: e.clientY };
      post({ type: 'dragging', on: true });
    });
    window.addEventListener('mouseup', () => { if (isDragging) { isDragging = false; post({ type: 'dragging', on: false }); } });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      if (Math.abs(e.clientX - msx) > 4 || Math.abs(e.clientY - msy) > 4) didDrag = true;
      post({ type: 'drag', dx: e.clientX - prev.x, dy: e.clientY - prev.y });
      prev = { x: e.clientX, y: e.clientY };
    }, { passive: true });
    dragEl.addEventListener('click', () => {
      if (didDrag) { didDrag = false; return; }
      post({ type: 'click' });
    });
    dragEl.addEventListener('touchstart', e => {
      isDragging = true; prev = { x: e.touches[0].clientX, y: e.touches[0].clientY }; post({ type: 'dragging', on: true });
    }, { passive: true });
    window.addEventListener('touchend', () => { if (isDragging) { isDragging = false; post({ type: 'dragging', on: false }); } });
    window.addEventListener('touchmove', e => {
      if (!isDragging) return;
      post({ type: 'drag', dx: e.touches[0].clientX - prev.x, dy: 0 });
      prev = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    let rz = 0;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(rz);
      rz = requestAnimationFrame(() => { const s = size(); placePoster(); post({ type: 'resize', w: s.w, h: s.h }); });
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
