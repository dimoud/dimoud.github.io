/* ═══════════════════════════════════════════════════════════════
   redesign.js — ανανέωση αρχικής σελίδας
   1. Δίγλωσσα κείμενα των νέων ενοτήτων: data-el / data-en
      (+ data-el-alt / data-en-alt, data-el-aria / data-en-aria).
      Ακολουθεί το <html lang> που αλλάζει το main.js.
   2. Hero: χαραγές στον κύκλο του σχεδίου, χρόνια εμπειρίας.
   3. «Πώς δουλεύουμε»: 6 σταθμοί με εικόνες, κύλιση 01 → 06,
      hover / κλικ / πλήκτρα ←→.
   Χωρίς εξαρτήσεις. Σέβεται το prefers-reduced-motion.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const curLang = () => (document.documentElement.lang === 'en' ? 'en' : 'el');

  /* ── 1. Γλώσσα ─────────────────────────────────────────────── */
  function applyLang() {
    const l = curLang();
    document.querySelectorAll('[data-el][data-en]').forEach(el => { el.innerHTML = el.dataset[l]; });
    document.querySelectorAll('[data-el-alt]').forEach(el => { el.alt = l === 'en' ? el.dataset.enAlt : el.dataset.elAlt; });
    document.querySelectorAll('[data-el-aria]').forEach(el => { el.setAttribute('aria-label', l === 'en' ? el.dataset.enAria : el.dataset.elAria); });
    const call = document.querySelector('.hero-cta-phone');
    if (call) call.setAttribute('aria-label', (l === 'en' ? 'Call: ' : 'Κλήση: ') + '210 756 1836');
    if (wf) wf.lang();
  }

  /* ── 2. Hero ───────────────────────────────────────────────── */
  const ticks = document.querySelector('.hero-bp-ticks');
  if (ticks) {
    let d = '';
    for (let i = 0; i < 72; i++) {
      const a = i / 72 * Math.PI * 2, r1 = 250, r2 = i % 6 ? 258 : 268;
      d += `M${(300 + Math.cos(a) * r1).toFixed(1)} ${(300 + Math.sin(a) * r1).toFixed(1)}L${(300 + Math.cos(a) * r2).toFixed(1)} ${(300 + Math.sin(a) * r2).toFixed(1)}`;
    }
    ticks.innerHTML = `<path d="${d}"/>`;
  }
  const yrs = new Date().getFullYear() - 2016;
  document.querySelectorAll('.hero-yrs').forEach(el => { el.textContent = yrs + '+'; });

  /* ── 3. Πώς δουλεύουμε ─────────────────────────────────────── */
  const STAGES = {
    el: [
      { t: 'Ιδέα', x: 'Πρώτα καταλαβαίνουμε το πρόβλημα. Καταγράφουμε φορτία, διαστάσεις, ποσότητες, κόστος-στόχο και ό,τι δεν μπορεί να αλλάξει στον χώρο σας.', d: ['Τεχνικές απαιτήσεις', 'Πρώτα σκίτσα', 'Αρχική εκτίμηση'] },
      { t: 'CAD Σχεδιασμός', x: 'Το εξάρτημα αποκτά ακριβή γεωμετρία: παραμετρικό 3D μοντέλο, συναρμολόγηση, λίστα υλικών και κατασκευαστικά σχέδια με ανοχές που μπορεί να τηρήσει ο κατασκευαστής.', d: ['3D μοντέλο (STEP)', 'Κατασκευαστικά σχέδια', 'BOM'] },
      { t: 'FEA & Προσομοίωση', x: 'Πριν κοπεί μέταλλο, ελέγχουμε τάσεις, παραμορφώσεις και κόπωση. Ρυθμίζουμε πάχη και ακτίνες ώστε το κομμάτι να αντέχει χωρίς περιττό βάρος και κόστος.', d: ['Χάρτης τάσεων', 'Συντελεστής ασφαλείας', 'Βελτιώσεις σχεδίου'] },
      { t: 'Κατασκευή', x: 'Κατεργασία CNC, κοπή laser, 3D printing ή συγκόλληση, ανάλογα με την ποσότητα και το κόστος. Ετοιμάζουμε τα αρχεία κατασκευής και συντονίζουμε τους κατασκευαστές.', d: ['Πρωτότυπο ή σειρά', 'Αρχεία DXF / G-code', 'Συντονισμός προμηθευτών'] },
      { t: 'Ποιοτικός Έλεγχος', x: 'Μετράμε ό,τι ορίζει το σχέδιο. Έλεγχος διαστάσεων, συναρμολόγησης και λειτουργίας, πριν το κομμάτι φύγει για εσάς.', d: ['Φύλλο μετρήσεων', 'Δοκιμή λειτουργίας', 'Παραλαβή'] },
      { t: 'Παράδοση', x: 'Παραδίδουμε με πλήρη τεκμηρίωση: σχέδια, οδηγίες συναρμολόγησης και λίστα υλικών. Μένουμε διαθέσιμοι για αλλαγές και για την επόμενη έκδοση.', d: ['Φάκελος έργου', 'Οδηγίες συναρμολόγησης', 'Υποστήριξη'] }
    ],
    en: [
      { t: 'Concept', x: 'First we understand the problem, writing down loads, dimensions, quantities, target cost and whatever cannot change on your side.', d: ['Technical requirements', 'First sketches', 'Initial estimate'] },
      { t: 'CAD Design', x: 'The part gets exact geometry: a parametric 3D model, the assembly, a bill of materials and manufacturing drawings with tolerances the shop can actually hold.', d: ['3D model (STEP)', 'Manufacturing drawings', 'BOM'] },
      { t: 'FEA & Simulation', x: 'Before any metal is cut we check stress, deflection and fatigue, then tune thicknesses and radii so the part carries the load without extra weight or cost.', d: ['Stress map', 'Safety factor', 'Design improvements'] },
      { t: 'Fabrication', x: 'CNC machining, laser cutting, 3D printing or welding, chosen by quantity and cost. We prepare the manufacturing files and coordinate the shops.', d: ['Prototype or batch', 'DXF / G-code files', 'Supplier coordination'] },
      { t: 'Quality Check', x: 'We measure what the drawing specifies: dimensions, fit and function are checked before the part leaves for you.', d: ['Inspection sheet', 'Function test', 'Sign-off'] },
      { t: 'Delivery', x: 'Delivered with full documentation: drawings, assembly instructions and bill of materials. We stay available for changes and the next revision.', d: ['Project file', 'Assembly instructions', 'Support'] }
    ]
  };

  const wf = (function () {
    const root = document.getElementById('wf');
    if (!root) return null;
    const tabs = Array.from(root.querySelectorAll('.wf-st'));
    const line = root.querySelector('.wf-line');
    const fill = root.querySelector('.wf-rail-fill');
    const rail = root.querySelector('.wf-rail');
    const leader = root.querySelector('.wf-leader');
    const detail = root.querySelector('.wf-detail');
    const N = tabs.length;
    let active = -1, locked = false, hoverIdx = -1, scrollIdx = 0, progress = 0;

    function render(i, force) {
      if (i === active && !force) return;
      active = i;
      const s = STAGES[curLang()][i];
      root.style.setProperty('--acc', tabs[i].style.getPropertyValue('--acc') || '#4f9dff');
      tabs.forEach((b, k) => {
        b.setAttribute('aria-selected', k === i ? 'true' : 'false');
        b.tabIndex = k === i ? 0 : -1;
        b.classList.toggle('is-on', k === i);
      });
      root.querySelector('.wf-big').textContent = String(i + 1).padStart(2, '0');
      root.querySelector('.wf-d-title').textContent = s.t;
      root.querySelector('.wf-d-text').textContent = s.x;
      root.querySelector('.wf-deliv-list').innerHTML = s.d.map(d => `<li>${d}</li>`).join('');
      root.querySelectorAll('.wf-meter i').forEach((m, k) => m.classList.toggle('on', k <= i));
      detail.setAttribute('aria-labelledby', tabs[i].id);
      detail.classList.remove('is-swap'); void detail.offsetWidth; detail.classList.add('is-swap');
      place();
    }

    /* Γραμμή στο ύψος των κουκκίδων + κάθετος δείκτης προς την περιγραφή */
    function place() {
      if (active < 0) return;
      const pr = root.getBoundingClientRect(), lr = line.getBoundingClientRect();
      const dot = tabs[0].querySelector('.wf-dot').getBoundingClientRect();
      rail.style.top = (dot.top + dot.height / 2 - lr.top - 1) + 'px';
      const ad = tabs[active].querySelector('.wf-dot').getBoundingClientRect();
      const dr = detail.getBoundingClientRect();
      const top = ad.bottom - pr.top + 2, bot = dr.top - pr.top;
      leader.style.transform = `translateX(${ad.left + ad.width / 2 - pr.left}px)`;
      leader.style.top = top + 'px';
      leader.style.height = Math.max(0, bot - top) + 'px';
    }

    function paint() {
      const shown = hoverIdx >= 0 ? hoverIdx : active;
      const manual = locked || hoverIdx >= 0;
      const p = manual ? shown / (N - 1) : Math.max(progress, shown / (N - 1));
      fill.style.transform = `scaleX(${Math.min(1, p).toFixed(4)})`;
      tabs.forEach((b, k) => b.classList.toggle('is-passed', k / (N - 1) <= p + 1e-3));
    }
    /* Κινητό: η σειρά των εικόνων κυλά μόνη της από δεξιά προς τα αριστερά
       όσο ο χρήστης κατεβαίνει. Αν σύρει ο ίδιος τη σειρά, η αυτόματη κίνηση
       σταματά για λίγα δευτερόλεπτα. */
    const mobile = matchMedia('(max-width: 760px)');
    let userPanUntil = 0;
    ['touchstart', 'pointerdown', 'wheel'].forEach(ev => line.addEventListener(ev, () => { userPanUntil = performance.now() + 4000; }, { passive: true }));
    function autoPan() {
      return; // καταργήθηκε: στο κινητό η λίστα είναι πλέον κάθετη
      if (!mobile.matches || performance.now() < userPanUntil) return;
      const max = line.scrollWidth - line.clientWidth;
      if (max <= 0) return;
      // ίδια πρόοδος με την ενεργή φάση: η εικόνα που ανάβει είναι και αυτή που φαίνεται
      line.scrollLeft = progress * max;
    }
    /* Κινητό: κάθετη λίστα — κάθε φάση δείχνει μόνιμα το κείμενο και τα παραδοτέα της */
    function fillMobile() {
      const L = STAGES[curLang()];
      tabs.forEach((b, i) => {
        let mb = b.querySelector('.wf-mb');
        if (!mb) { mb = document.createElement('span'); mb.className = 'wf-mb'; b.appendChild(mb); }
        mb.innerHTML = `<span class="wf-mx">${L[i].x}</span><span class="wf-md">${L[i].d.map(d => `<i>${d}</i>`).join('')}</span>`;
      });
    }
    fillMobile();
    function mobileScroll() {
      const vh = window.innerHeight, r = line.getBoundingClientRect(), mark = vh * 0.62;
      const p = Math.max(0, Math.min(1, (mark - r.top) / r.height));
      fill.style.transform = `scaleY(${p.toFixed(4)})`;
      let on = -1;
      tabs.forEach((b, k) => { const t = b.getBoundingClientRect().top; if (t < mark) on = k; b.classList.toggle('is-passed', t < mark); });
      tabs.forEach((b, k) => b.classList.toggle('is-on', k === on));
    }
    function choose() { render(hoverIdx >= 0 ? hoverIdx : (locked ? active : scrollIdx)); paint(); }

    let ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (mobile.matches) { mobileScroll(); return; }
        fill.style.transform = '';
        paint();   // στον υπολογιστή η εναλλαγή γίνεται με χρόνο, όχι με την κύλιση
      });
    }

    /* Υπολογιστής: οι φάσεις αλλάζουν μόνες τους, αργά (μία κάθε 4,5″), όσο η ενότητα
       φαίνεται. Hover ή κλικ σταματούν την εναλλαγή· συνεχίζει 12″ μετά το κλικ. */
    const STEP_MS = 4500, RESUME_MS = 12000;
    let visible = false, lockUntil = 0, timer = 0;
    function tick() {
      if (mobile.matches || !visible || hoverIdx >= 0) return;
      if (locked) { if (performance.now() < lockUntil) return; locked = false; }
      const n = (active + 1) % N;
      scrollIdx = n; progress = n / (N - 1);
      render(n); paint();
    }
    function startAuto() { if (!timer && !REDUCED) timer = setInterval(tick, STEP_MS); }
    function stopAuto() { clearInterval(timer); timer = 0; }
    new IntersectionObserver(es => es.forEach(e => {
      visible = e.isIntersecting;
      if (visible) { if (active === N - 1 && !locked) { scrollIdx = 0; progress = 0; render(0); paint(); } startAuto(); }
      else stopAuto();
    }), { threshold: 0.35 }).observe(line);

    const canHover = matchMedia('(hover: hover)').matches;
    tabs.forEach((b, i) => {
      b.addEventListener('mouseenter', () => { if (canHover) { hoverIdx = i; root.classList.add('is-hover'); choose(); } });
      b.addEventListener('click', () => {
        if (mobile.matches) return;   // στο κινητό το άγγιγμα δεν αλλάζει τίποτα
        locked = true; lockUntil = performance.now() + RESUME_MS; hoverIdx = -1; scrollIdx = i; progress = i / (N - 1); render(i); paint();
        if (!canHover) b.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
      });
      b.addEventListener('keydown', e => {
        const d = { ArrowRight: 1, ArrowLeft: -1, Home: -99, End: 99 }[e.key];
        if (!d) return;
        e.preventDefault();
        const n = Math.max(0, Math.min(N - 1, i + d));
        locked = true; lockUntil = performance.now() + RESUME_MS; scrollIdx = n; progress = n / (N - 1); render(n); paint(); tabs[n].focus();
      });
    });
    line.addEventListener('mouseleave', () => { hoverIdx = -1; root.classList.remove('is-hover'); choose(); });
    new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) locked = false; }), { threshold: 0 }).observe(root);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { place(); onScroll(); });
    window.addEventListener('load', place);

    render(0, true); onScroll();
    return {
      lang() {
        render(active < 0 ? 0 : active, true);
        fillMobile();
        const l = curLang();
        root.querySelectorAll('.wf-seo li').forEach((li, i) => { const s = STAGES[l][i]; li.textContent = `${String(i + 1).padStart(2, '0')} ${s.t} — ${s.x}`; });
      }
    };
  })();

  /* ── 4. Το studio σε διαστάσεις: γραμμές + μέτρηση αριθμών ── */
  const dims = document.getElementById('dims');
  if (dims) {
    const nums = Array.from(dims.querySelectorAll('.dim-num'));
    nums.forEach(n => { if (n.dataset.to === 'yrs') n.dataset.to = String(yrs); n.textContent = n.dataset.to; });
    const run = () => {
      dims.classList.add('is-in');
      if (REDUCED) return;
      const t0 = performance.now(), D = 1400;
      const tick = t => {
        const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3);
        nums.forEach(n => { n.textContent = Math.round(+n.dataset.to * e); });
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); run(); } }, { threshold: 0.35 });
    io.observe(dims);
  }

  /* ── 5. Αρχές στο κινητό: «φερμουάρ» — οι κάρτες έρχονται από τα πλάγια και
        ενώνονται στη μέση όσο κατεβαίνεις· ανοίγουν ξανά όταν ανεβαίνεις ── */
  const zipCards = Array.from(document.querySelectorAll('#process .values-section .value-card'));
  if (zipCards.length && !REDUCED) {
    const zipMq = matchMedia('(max-width: 960px)');
    let zt = false;
    const zip = () => {
      zt = false;
      if (!zipMq.matches) { zipCards.forEach(c => { c.style.translate = ''; c.style.opacity = ''; }); return; }
      const vh = window.innerHeight, mid = window.innerWidth / 2;
      zipCards.forEach((c, i) => {
        c.style.translate = '0 0';
        const r = c.getBoundingClientRect();
        const two = r.width < window.innerWidth * 0.7;
        const side = two ? (r.left + r.width / 2 < mid ? -1 : 1) : (i % 2 ? 1 : -1);
        const k = Math.max(0, Math.min(1, (vh * 0.98 - r.top) / (vh * 0.42)));
        const e = 1 - Math.pow(1 - k, 2);
        c.style.translate = `${(side * (1 - e) * 70).toFixed(2)}vw 0`;
        c.style.opacity = (0.15 + 0.85 * e).toFixed(3);
      });
    };
    const req = () => { if (!zt) { zt = true; requestAnimationFrame(zip); } };
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    zip();
  }

  new MutationObserver(applyLang).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  if (curLang() !== 'el') applyLang();
})();
