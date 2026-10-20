/* ═══════════════════════════════════════════════════════════════
   arxiki-kinisi.js — ενιαίο σύστημα κίνησης της αρχικής (14/10/2026)
   Αντικαθιστά στην αρχική το eng-animations.js (δείκτες κύλισης, χάρακας 48 m,
   νεκρός κώδικας caliper/crosshair) και ενοποιεί τις τέσσερις παλιές εμφανίσεις.
   Ο μειωτήρας (gearbox-v2/hero.js, initHeroExplode) δεν αγγίζεται.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var root = document.documentElement;
  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  window.__hk = true;
  function done() { root.classList.add('hk-on'); }
  if (!hasIO) { root.classList.remove('hk-js'); return; }

  /* ── 1. Κοινή εμφάνιση ─────────────────────────────────────────
     Ομάδες: τα παιδιά του ίδιου γονέα κλιμακώνονται με --hk-i (70 ms). */
  var SEL = [
    '.reveal-up', '[data-reveal]', '[data-reveal-r]',
    '#services .svc-card', '#process .values-section .value-card',
    '#what-we-build .wd-offer-card', '.dims-head', '.midpage-cta-inner > *'
  ].join(',');
  var items = Array.prototype.slice.call(document.querySelectorAll(SEL));
  /* τα παλιά συστήματα δεν κρύβουν πια τίποτα */
  document.querySelectorAll('.rv-on').forEach(function (g) { g.classList.remove('rv-on', 'rv-in'); });
  items.forEach(function (el) {
    el.classList.add('hk-r');
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return items.indexOf(c) >= 0; });
    el.style.setProperty('--hk-i', Math.min(sibs.indexOf(el), 6));
  });
  if (REDUCED) { items.forEach(function (el) { el.classList.add('hk-in'); }); }
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('hk-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── 2. Hero: το σχέδιο του μειωτήρα χαράσσεται μία φορά ───────
     Συνεχείς γραμμές: stroke-dashoffset 1 → 0 (pathLength = 1).
     Διακεκομμένες και κείμενα: εμφάνιση στη θέση τους. */
  var bp = document.querySelector('.hero-bp');
  if (bp) {
    var k = 0, f = 0;
    bp.querySelectorAll('circle, path').forEach(function (el) {
      if (el.closest('.hero-bp-ticks')) return;
      var o = el.getAttribute('opacity') || '1';
      if (el.getAttribute('stroke-dasharray')) {
        el.classList.add('hk-fade'); el.style.setProperty('--hk-o', o); el.style.setProperty('--hk-i', f++);
      } else {
        el.setAttribute('pathLength', '1'); el.classList.add('hk-draw'); el.style.setProperty('--hk-i', k++);
      }
    });
    bp.querySelectorAll('text').forEach(function (el) {
      el.classList.add('hk-fade'); el.style.setProperty('--hk-o', el.getAttribute('opacity') || '1'); el.style.setProperty('--hk-i', f++);
    });
    if (REDUCED) bp.classList.add('hk-go');
    else requestAnimationFrame(function () { requestAnimationFrame(function () { bp.classList.add('hk-go'); }); });
  }

  /* ── 3. Διαστάσεις: ο δρομέας μετρά όλο τον χάρακα μία φορά ───── */
  var ruler = document.querySelector('.dims-ruler'), cursor = document.querySelector('.dims-cursor');
  function sizeRuler() { if (ruler && cursor) cursor.style.setProperty('--hk-w', ruler.clientWidth + 'px'); }
  sizeRuler(); window.addEventListener('resize', sizeRuler);

  /* ── 4. Γραμμές μέτρησης ενοτήτων (data-sec-meas): χαράσσονται μία φορά ── */
  var meas = document.querySelectorAll('[data-sec-meas]');
  var mio = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ready'); mio.unobserve(e.target); } });
  }, { threshold: 0.3 });
  meas.forEach(function (m) { REDUCED ? m.classList.add('ready') : mio.observe(m); });

  /* ── 5. Ό,τι συνεχές μένει (ticker, υπογραφή) σταματά εκτός οθόνης ── */
  var off = new IntersectionObserver(function (es) {
    es.forEach(function (e) { e.target.classList.toggle('hk-off', !e.isIntersecting); });
  }, { threshold: 0 });
  document.querySelectorAll('.ticker, .expertease-credit').forEach(function (el) { el.classList.add('hk-off'); off.observe(el); });

  /* ── 6. Γραμμή ανάγνωσης στην κορυφή: transform, ένα rAF ανά καρέ ── */
  var bar = document.getElementById('progress'), ticking = false, max = 1;
  function measure() { max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); }
  function paint() { ticking = false; if (bar) bar.style.transform = 'scaleX(' + Math.min(1, window.scrollY / max).toFixed(4) + ')'; }
  measure(); paint();
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
  window.addEventListener('resize', function () { measure(); paint(); });
  window.addEventListener('load', function () { measure(); paint(); });

  /* ── 7. «Σχετικά»: κάρτες αξιών — είσοδος, γραμμή χρώματος, σχεδίαση και κίνηση εικονιδίου (CSS §10) ── */
  var vg = document.querySelector('#about .values-grid');
  if (vg) {
    vg.querySelectorAll('.value-item').forEach(function (it, i) {
      it.style.setProperty('--vi', i);
      it.querySelectorAll('.value-icon circle, .value-icon line, .value-icon path, .value-icon polyline, .value-icon polygon, .value-icon rect, .value-icon ellipse')
        .forEach(function (s) { s.setAttribute('pathLength', '1'); s.classList.add('vi-s'); });
    });
    if (REDUCED) vg.classList.add('vi-go');
    else {
      var vio = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { vg.classList.add('vi-go'); vio.disconnect(); }
      }, { threshold: 0.3 });
      vio.observe(vg);
    }
  }

  done();
})();
