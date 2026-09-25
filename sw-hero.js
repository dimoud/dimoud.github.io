/* sw-hero.js — «τρέχει» μια μελέτη μέσα στο παράθυρο του hero, σε βρόχο.
   Βήματα: 1 όχημα → 2 φορτία → 3 διαγράμματα → 4 έλεγχοι → 5 σύνταξη → 6 έτοιμη.
   Σταματά όταν το παράθυρο δεν φαίνεται· με reduced-motion δείχνει την τελική κατάσταση. */
(function () {
  'use strict';
  var app = document.getElementById('swhApp');
  if (!app) return;
  var sf = document.getElementById('swhSf');
  var STEPS = [[1, 300], [2, 1500], [3, 3000], [4, 4700], [5, 6600], [6, 8400]];
  var LOOP = 11500, timers = [], running = false;

  function all() { for (var i = 1; i <= 6; i++) app.classList.add('st' + i); if (sf) sf.textContent = '2.41'; }
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { all(); return; }

  function countSf() {
    if (!sf) return;
    var t0 = performance.now();
    (function f(t) {
      var k = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - k, 3);
      sf.textContent = (e * 2.41).toFixed(2);
      if (k < 1 && running) requestAnimationFrame(f);
    })(t0);
  }
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function cycle() {
    clear();
    app.classList.add('reset');
    for (var i = 1; i <= 6; i++) app.classList.remove('st' + i);
    if (sf) sf.textContent = '0.00';
    void app.offsetWidth;
    app.classList.remove('reset');
    STEPS.forEach(function (s) {
      timers.push(setTimeout(function () { app.classList.add('st' + s[0]); if (s[0] === 4) countSf(); }, s[1]));
    });
    timers.push(setTimeout(cycle, LOOP));
  }
  new IntersectionObserver(function (es) {
    var v = es[0].isIntersecting;
    if (v && !running) { running = true; cycle(); }
    else if (!v && running) { running = false; clear(); all(); }
  }, { threshold: 0.2 }).observe(app);
})();
