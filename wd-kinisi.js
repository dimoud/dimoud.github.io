/* ═══════════════════════════════════════════════════════════════
   wd-kinisi.js — κίνηση πρώτης οθόνης της Web Design (14/10/2026)
   Αντικαθιστά το wd-animation.js (σωματίδια σε ατέρμονο βρόχο, κλείδωμα κύλισης).

   Αφήγηση (μία φορά, όταν η σκηνή μπει στο κάδρο):
     0,15–1,3 s  στήσιμο: το σχέδιο (wireframe) χαράσσεται
     1,2–2,0 s   δράση: γεμίζει με το πραγματικό στιγμιότυπο του έργου
     2,7–3,7 s   κορύφωση: η σελίδα στενεύει από 1440 σε 390 px και γίνεται κινητό
     3,7–4,2 s   λύση: ✓ πράσινο, μετά εμφανίζονται καρτέλες και «Ξανά»
   Οι τιμές 1440/390 px είναι τα πραγματικά πλάτη των στιγμιοτύπων.
   Κινούνται μόνο transform, opacity, stroke-dashoffset και x1/x2 μιας γραμμής.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var fig = document.getElementById('wdk');
  var root = document.documentElement;
  if (!fig || !fig.animate) { root.classList.add('wdk-on'); return; }

  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s) { return fig.querySelector(s); };
  var desk = $('.wdk-desk'), wires = $('.wdk-wires'), wireEls = fig.querySelectorAll('.wdk-wire');
  var phone = $('.wdk-phone'), dim = $('.wdk-dim'), badge = $('.wdk-badge');
  var line = $('.wdk-dimline'), t1 = $('.wdk-t1'), t2 = $('.wdk-t2'), val = $('.wdk-dimval');
  var deskImg = $('.wdk-desk-img'), phoneImg = $('.wdk-phone-img'), url = fig.querySelector('[data-wdk-url]');
  /* 14/10/2026: χωρίς επιλογή από τον επισκέπτη· τα έργα εναλλάσσονται μόνα τους */
  var WORKS = [
    { k: 'malliaris', url: 'malliarisandpartners.gr' },
    { k: 'liapis', url: 'vaiosliapis.gr' },
    { k: 'nakou', url: 'expertease.eu/nakou' },
    { k: 'moudiotis', url: 'moudiotis.gr' }
  ];
  var cur = 0, HOLD = 2600, CYCLE = 4300 + HOLD, next = 0, visible = false;

  /* Γεωμετρία (μονάδες viewBox) */
  var D0 = [40, 600], D1 = [245, 395];          // άκρα γραμμής διάστασης: υπολογιστής → κινητό
  var PX0 = 1440, PX1 = 390;                    // πλάτη οθόνης των στιγμιοτύπων
  var S = 150 / 560;                            // κλίμακα πλαισίου υπολογιστή → πλαίσιο κινητού
  var C0 = [320, 235], C1 = [320, 219.5];       // κέντρα πλαισίων

  /* Ελατήριο για το κινητό (ζ = 0,75, κάρτα): δειγματοληψία σε linear() */
  function springEasing(zeta, n) {
    var w = 2 * Math.PI / 0.55, wd = w * Math.sqrt(1 - zeta * zeta), pts = [];
    for (var i = 0; i <= n; i++) {
      var t = i / n * 1.0, x = 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + zeta * w / wd * Math.sin(wd * t));
      pts.push(x.toFixed(4));
    }
    pts[n] = '1';
    return 'linear(' + pts.join(',') + ')';
  }
  var SPRING = (window.CSS && CSS.supports && CSS.supports('animation-timing-function', 'linear(0, 1)'))
    ? springEasing(0.75, 40) : 'cubic-bezier(.34,1.3,.64,1)';
  var OUT = 'cubic-bezier(.2,.7,.2,1)', INOUT = 'cubic-bezier(.65,0,.35,1)';
  function inOut(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }   // = INOUT

  var anims = [], raf = 0, running = false;
  function A(el, kf, o) { var a = el.animate(kf, Object.assign({ fill: 'both' }, o)); anims.push(a); return a; }
  function setDim(k) {
    var x1 = D0[0] + (D1[0] - D0[0]) * k, x2 = D0[1] + (D1[1] - D0[1]) * k;
    line.setAttribute('x1', x1.toFixed(2)); line.setAttribute('x2', x2.toFixed(2));
    t1.setAttribute('x1', x1.toFixed(2)); t1.setAttribute('x2', x1.toFixed(2));
    t2.setAttribute('x1', x2.toFixed(2)); t2.setAttribute('x2', x2.toFixed(2));
    val.textContent = Math.round(PX0 + (PX1 - PX0) * k) + ' px';
  }
  function finalFrame() {
    anims.forEach(function (a) { a.cancel(); }); anims = [];
    cancelAnimationFrame(raf); running = false;
    setDim(1); dim.classList.add('wdk-ok');
    root.classList.add('wdk-on');
  }

  function run() {
    anims.forEach(function (a) { a.cancel(); }); anims = [];
    cancelAnimationFrame(raf); running = true;
    dim.classList.remove('wdk-ok'); setDim(0);
    var tr = 'translate(' + (C1[0] - C0[0]) + 'px,' + (C1[1] - C0[1]) + 'px) scale(' + S + ')';
    [desk, phone].forEach(function (g) { g.style.transformBox = 'view-box'; });
    desk.style.transformOrigin = C0[0] + 'px ' + C0[1] + 'px';
    phone.style.transformOrigin = C1[0] + 'px ' + C1[1] + 'px';

    /* 1. στήσιμο: το σχέδιο χαράσσεται */
    A(wires, [{ opacity: 1 }, { opacity: 1, offset: .55 }, { opacity: .18 }], { duration: 2000 });
    A(wires, [{ opacity: .18 }, { opacity: 0 }], { delay: 2700, duration: 500, fill: 'forwards' });
    wireEls.forEach(function (w, i) {
      A(w, [{ strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDasharray: 1, strokeDashoffset: 0 }],
        { delay: 150 + i * 90, duration: 520, easing: OUT });
    });
    /* 2. δράση: πραγματικό στιγμιότυπο */
    A(desk, [{ opacity: 0, transform: 'none' }, { opacity: 1, transform: 'none' }], { delay: 1200, duration: 800, easing: OUT });
    /* 3. κορύφωση: 1440 → 390 px */
    A(desk, [{ opacity: 1, transform: 'none' }, { opacity: 1, offset: .45 }, { opacity: 0, transform: tr, offset: .85 }, { opacity: 0, transform: tr }],
      { delay: 2700, duration: 1000, easing: INOUT, fill: 'forwards' });
    A(phone, [{ opacity: 0, transform: 'scale(1.35)' }, { opacity: 1, transform: 'none' }],
      { delay: 3150, duration: 700, easing: SPRING });
    A(dim, [{ opacity: 0 }, { opacity: 1 }], { delay: 1000, duration: 500, easing: OUT });
    /* 4. λύση */
    A(badge, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { delay: 3750, duration: 450, easing: OUT });

    root.classList.add('wdk-on');
    var t0 = performance.now();
    (function tick(now) {
      var k = Math.max(0, Math.min(1, (now - t0 - 2700) / 1000));
      setDim(inOut(k));
      if (k >= 1) { dim.classList.add('wdk-ok'); running = false; return; }
      raf = requestAnimationFrame(tick);
    })(t0);
  }

  function show(n) {
    var w = WORKS[n];
    deskImg.setAttribute('href', 'images/site/wd-work-' + w.k + '.webp');
    phoneImg.setAttribute('href', 'images/site/wd-work-' + w.k + '-m.webp');
    if (url) url.textContent = w.url;
    var nx = WORKS[(n + 1) % WORKS.length];            /* προφόρτωση του επόμενου */
    [nx.k, nx.k + '-m'].forEach(function (f) { var im = new Image(); im.src = 'images/site/wd-work-' + f + '.webp'; });
  }
  /* Επόμενο έργο μόνο όταν η σκηνή φαίνεται, η καρτέλα είναι ενεργή και δεν έχει πατηθεί «Παύση κίνησης» */
  function loop() {
    clearTimeout(next);
    next = setTimeout(function () {
      if (!visible || document.hidden || root.classList.contains('motion-paused')) { loop(); return; }
      cur = (cur + 1) % WORKS.length; show(cur); run(); loop();
    }, CYCLE);
  }
  show(0);

  if (REDUCED || !('IntersectionObserver' in window)) { finalFrame(); return; }

  /* Αρχική κατάσταση πριν μπει στο κάδρο: μηδέν χρόνου της κίνησης */
  run(); anims.forEach(function (a) { a.pause(); a.currentTime = 0; }); cancelAnimationFrame(raf); setDim(0);
  var started = false;
  function start() { if (started) return; started = true; io.disconnect(); run(); loop(); }
  var io = new IntersectionObserver(function (es) {
    if (!es[0].isIntersecting) return;
    if (document.hidden) { document.addEventListener('visibilitychange', function w() { if (!document.hidden) { document.removeEventListener('visibilitychange', w); if (visible) start(); } }); return; }   /* ΜΗ-47: η ταινία δεν παίζει σε κρυμμένη καρτέλα */
    start();
  }, { threshold: 0.35 });
  io.observe(fig);
  new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.2 }).observe(fig);
})();
