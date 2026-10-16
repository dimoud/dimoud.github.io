/* ═══════════════════════════════════════════════════════════════════════════
   wd-xoro.js — χορογραφία της σελίδας Web Design (16/10/2026)
   Κάθε σκηνή (.wdx) παίζει ΜΙΑ φορά, όταν η κορυφή της περάσει τη γραμμή του 78 % του ύψους της οθόνης.
   Η ίδια η κίνηση ζει στο wd-xoro.css (CSS animations)· εδώ υπάρχουν μόνο:
     1. ο διακόπτης των σκηνών (IntersectionObserver) και η προφόρτωση των εικόνων τους,
     2. ο μετρητής της τιμής (ο τελικός αριθμός γράφεται πάντα ακριβής),
     3. ο κανόνας της διαδικασίας, δεμένος με την κύλιση ΜΟΝΟ σε υπολογιστή (ΜΗ-35), με αποθηκευμένη γεωμετρία.
   Χωρίς JS: οι κλάσεις wdx-js / wdx-fail της <head> αφήνουν το τελικό καρέ.
═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('wdx-ok');                                     /* το σενάριο ζει: δεν χρειάζεται το wdx-fail */
  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scenes = [].slice.call(document.querySelectorAll('.wdx'));
  var paused = function () { return root.classList.contains('motion-paused'); };

  /* ── 2. μετρητές: <span data-count="500" data-delay="1450"> ── */
  function count(el) {
    var end = parseInt(el.getAttribute('data-count'), 10), delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    var k = matchMedia('(max-width: 768px), (hover: none)').matches ? 0.78 : 1;
    var fin = function () { el.textContent = String(end); };
    if (REDUCED || paused() || !window.requestAnimationFrame) { fin(); return; }
    el.textContent = '0';
    var t0 = performance.now() + delay * k, D = 900 * k, done = false;
    (function tick(now) {
      var p = Math.max(0, Math.min(1, (now - t0) / D)), e = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(end * e));
      if (p < 1) requestAnimationFrame(tick); else { done = true; fin(); }
    })(performance.now());
    setTimeout(function () { if (!done) fin(); }, delay * k + D + 600);   /* ασφάλεια: η καρτέλα στο παρασκήνιο δεν δίνει καρέ */
  }

  function go(s) {
    if (s.classList.contains('wdx-go')) return;
    s.classList.add('wdx-go');
    [].forEach.call(s.querySelectorAll('[data-count]'), count);
  }

  /* αριθμοί ομάδων: --j (σημεία λίστας, ετικέτες) για κλιμάκωση μέσα στην ίδια ομάδα */
  [].forEach.call(document.querySelectorAll('.wdx .wdo-feats, .wdx .wd-proj-tags, .wdx .wd-cta-perks'), function (ul) {
    [].forEach.call(ul.children, function (li, j) { li.style.setProperty('--j', j); });
  });

  /* ── χωρίς IntersectionObserver ή με μειωμένη κίνηση: τελικό καρέ, χωρίς σενάριο ── */
  if (REDUCED || !('IntersectionObserver' in window)) {
    if (!REDUCED) root.classList.add('wdx-fail');
    scenes.forEach(function (s) { s.classList.add('wdx-go'); });
    setupRail(true);
    return;
  }

  /* ── 1. διακόπτης σκηνών ── */
  var hero = document.getElementById('wdx-hero');
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); if (!e.target.hasAttribute('data-wdx-manual')) go(e.target); } });
  }, { rootMargin: '0px 0px -22% 0px', threshold: 0 });
  scenes.forEach(function (s) {
    if (s === hero) return;
    io.observe(s);
  });
  /* πρώτη οθόνη: ξεκινά αμέσως, μόλις υπάρχει καρέ */
  if (hero) requestAnimationFrame(function () { requestAnimationFrame(function () { go(hero); }); });

  /* προφόρτωση: οι εικόνες κάθε σκηνής φορτώνονται και αποκωδικοποιούνται πριν φτάσει ο επισκέπτης,
     ώστε η είσοδος να μη «κολλήσει» περιμένοντας δεδομένα */
  var pre = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      pre.unobserve(e.target);
      [].forEach.call(e.target.querySelectorAll('img'), function (im) {
        im.loading = 'eager';
        if (im.decode) im.decode().catch(function () {});
      });
    });
  }, { rootMargin: '0px 0px 1400px 0px' });
  scenes.forEach(function (s) { pre.observe(s); });

  setupRail(false);

  /* ── 3. κανόνας της διαδικασίας ──
     Υπολογιστής (πλάτος ≥ 1101 px, ποντίκι): η πρόοδος της κύλισης ΕΙΝΑΙ ο μηχανισμός — ο κανόνας γεμίζει
     (μόνο scaleX), κάθε κόμβος ανάβει και η μικρή σκηνή του βήματος παίζει όταν τον φτάσει ο κανόνας.
     Κινητό/δισκίο: κάθε βήμα παίζει όταν μπει στο κάδρο, χωρίς καμία δέσμευση στην κύλιση. */
  function setupRail(still) {
    var track = document.querySelector('.wds-track');
    if (!track) return;
    var steps = [].slice.call(track.querySelectorAll('.wds-steps > li'));
    var fill = track.querySelector('.wds-rail-fill');
    var wide = matchMedia('(min-width: 1101px) and (hover: hover) and (pointer: fine)');
    var on = function (li) { li.classList.add('is-on'); go(li); };

    if (still) { steps.forEach(on); if (fill) fill.style.setProperty('--p', 1); return; }

    if (!wide.matches) {
      steps.forEach(function (li) { li.setAttribute('data-wdx-manual', ''); });
      var sio = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          sio.unobserve(e.target);
          var i = steps.indexOf(e.target);
          setTimeout(function () { on(e.target); }, (i % 2) * 140);   /* δύο στήλες: το δεξί βήμα μισό χτύπο μετά */
        });
      }, { rootMargin: '0px 0px -16% 0px', threshold: 0 });
      steps.forEach(function (li) { sio.observe(li); });
      return;
    }

    /* υπολογιστής: αποθηκευμένη γεωμετρία (καμία ανάγνωση διάταξης μέσα στο scroll) */
    steps.forEach(function (li) { li.setAttribute('data-wdx-manual', ''); });
    var top = 0, vh = innerHeight, raf = 0, last = -1;
    function measure() {
      vh = innerHeight;
      top = track.getBoundingClientRect().top + (window.pageYOffset || 0);
      update();
    }
    function update() {
      raf = 0;
      var y = window.pageYOffset || 0;
      /* p = 0 όταν η κορυφή του κανόνα περνά το 86 % της οθόνης· p = 1 στο 46 % → ~0,4 οθόνης κύλισης */
      var p = Math.max(0, Math.min(1, ((y + vh * 0.86) - top) / (vh * 0.40)));
      if (p === last) return;
      last = p;
      if (fill) fill.style.setProperty('--p', p.toFixed(4));
      steps.forEach(function (li, i) {
        var hit = p >= i / (steps.length - 1) - 0.001 && (y + vh * 0.86) > top;
        li.classList.toggle('is-on', hit);
        if (hit) go(li);
      });
    }
    var req = function () { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', measure);
    addEventListener('load', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    measure();
  }
})();
