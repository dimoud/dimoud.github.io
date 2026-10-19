/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / hero.js — ελεγκτής του μειωτήρα στην αρχική σελίδα (κύριο νήμα)
   Η ΑΠΟΔΟΣΗ γίνεται σε Web Worker (worker.js → scene.js) με OffscreenCanvas:
   κατασκευή γεωμετρίας, μεταγλώττιση shaders και καρέ δεν αγγίζουν το κύριο
   νήμα, οπότε η αρχική φόρτωση, η χάραξη του σχεδίου και η κύλιση μένουν ομαλές.
   Εδώ μένουν μόνο τα γεγονότα (ποντίκι, αφή, κύλιση, μέγεθος, ορατότητα).
   Αν ο φυλλομετρητής δεν υποστηρίζει WebGL σε worker, το scene.js τρέχει στο
   κύριο νήμα, αλλά ΜΟΝΟ αφού φορτώσει η σελίδα και ηρεμήσει (requestIdleCallback).
   Ίδια global ονόματα: initThree, setScrollExplode, setMode, resetModel.
═══════════════════════════════════════════════════════════════ */
const IS_MOBILE = window.matchMedia('(max-width: 960px)').matches;
const REDUCED   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let started = false, ready = false;
let send = null;                 // (μήνυμα) → worker ή απευθείας κλήση στο κύριο νήμα
const pending = {};              // τελευταία τιμή ανά τύπο, πριν είναι έτοιμος ο μειωτήρας
const post = m => { if (send) send(m); else pending[m.type] = m; };

function initThree() {
  if (started) return;
  let canvas = document.getElementById('hero3d');
  if (!canvas) return;
  started = true;
  const parent = canvas.parentElement;
  const size = () => ({ w: parent.clientWidth || 1280, h: parent.clientHeight || 700 });
  const { w, h } = size();
  const opts = { width: w, height: h, dpr: window.devicePixelRatio || 1, mobile: IS_MOBILE, reduced: REDUCED };

  const onReady = () => {
    ready = true;
    canvas.classList.add('is-ready');                  // ομαλή εμφάνιση (CSS)
    const ind = document.getElementById('model-indicator');
    if (ind) ind.textContent = 'PLANETARY GEARBOX';
  };
  const onMode = mode => {
    document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
    const b = document.getElementById('btn-' + mode); if (b) b.classList.add('active');
  };
  const flush = () => Object.values(pending).forEach(m => send(m));

  /* ── 1. Προτιμώμενη διαδρομή: Web Worker + OffscreenCanvas ── */
  const canWorker = 'transferControlToOffscreen' in HTMLCanvasElement.prototype && typeof Worker === 'function';
  if (canWorker) {
    let worker;
    try { worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' }); }
    catch (e) { worker = null; }
    if (worker) {
      const off = canvas.transferControlToOffscreen();
      worker.onmessage = e => {
        const { type, data } = e.data;
        if (type === 'ready') onReady();
        else if (type === 'mode') onMode(data);
        else if (type === 'fail') {                    // χωρίς WebGL στον worker → νέος καμβάς, κύριο νήμα
          worker.terminate(); send = null;
          const fresh = canvas.cloneNode(false); canvas.replaceWith(fresh); canvas = fresh;
          startMainThread();
        }
      };
      worker.onerror = () => worker.onmessage({ data: { type: 'fail' } });
      worker.postMessage({ type: 'init', canvas: off, opts }, [off]);
      send = m => worker.postMessage(m);
      flush();
      wire();
      return;
    }
  }
  startMainThread();
  wire();

  /* ── 2. Εναλλακτική: κύριο νήμα, μετά τη φόρτωση και σε στιγμή ηρεμίας ── */
  function startMainThread() {
    const go = async () => {
      const { createGearbox } = await import('./scene.js');
      const api = await createGearbox(canvas, opts, (t, d) => t === 'ready' ? onReady() : t === 'mode' && onMode(d));
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

  /* ── Γεγονότα σελίδας (ίδια λογική με πριν) ── */
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
      rz = requestAnimationFrame(() => { const s = size(); post({ type: 'resize', w: s.w, h: s.h }); });
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

/* Αν το main.js έχει ήδη τρέξει, ξεκίνα μόνο του */
if (document.readyState !== 'loading') setTimeout(initThree, 150);
