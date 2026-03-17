/* ═══════════════════════════════════════════════════════════════
   wd-animation.js
   "Particle → Wireframe → Website → Dissolve" build animation
   for webdesign.html
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const canvas = document.getElementById('wdAnimCanvas');
  if (!canvas) return;

  const ctx   = canvas.getContext('2d');
  let W, H, raf, frame = 0;

  /* ── PALETTE ─────────────────────────────────────────────── */
  const C = {
    navy:   [8,  15,  30],
    navyMid:[15, 29,  56],
    blue:   [37, 99,  235],
    lt:     [96, 165, 250],
    white:  [255,255, 255],
    amber:  [251,191,  36],
  };
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;

  /* ── PHASE ENGINE ────────────────────────────────────────── */
  const PHASES = ['chaos', 'assemble', 'wireframe', 'render', 'hold', 'dissolve'];
  const DUR    = { chaos:170, assemble:140, wireframe:65, render:85, hold:180, dissolve:120 };
  let pIdx = 0, pFrame = 0;

  const phase = () => PHASES[pIdx];
  const prog  = () => Math.min(1, pFrame / DUR[phase()]);
  const tick  = () => { if (++pFrame >= DUR[phase()]) { pIdx = (pIdx+1) % PHASES.length; pFrame = 0; } };

  const easeOut  = t => 1 - (1-t)**3;
  const easeIn   = t => t**3;
  const easeInOut= t => t < .5 ? 4*t**3 : 1 - (-2*t+2)**3/2;
  const lerp     = (a, b, t) => a + (b - a) * t;
  const clamp    = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  /* ── WIREFRAME LAYOUT (normalised 0-1) ──────────────────── */
  function getLayout() {
    const sm = W < 560;
    const p  = sm ? 0.04 : 0.055;
    const T  = 0.035;   // top offset
    const MR = 0.60;    // mid-right column start

    return [
      // ── nav bar
      { x:p,    y:T,          w:1-2*p,      h:0.050, t:'nav',    tag:'<nav>' },
      // ── hero left panel
      { x:p,    y:T+0.068,    w:MR-p-0.025, h:0.235, t:'hero',   tag:'<section>' },
      // hero title lines
      { x:p+.02,y:T+0.082,    w:0.290,      h:0.023, t:'line',   tag:null },
      { x:p+.02,y:T+0.113,    w:0.240,      h:0.023, t:'line',   tag:null },
      { x:p+.02,y:T+0.150,    w:0.175,      h:0.014, t:'line',   tag:null },
      // hero buttons
      { x:p+.02,y:T+0.173,    w:0.095,      h:0.024, t:'btn',    tag:null },
      { x:p+.13,y:T+0.173,    w:0.080,      h:0.024, t:'btn',    tag:null },
      // ── hero right panel (3D canvas area)
      { x:MR,   y:T+0.068,    w:1-p-MR,     h:0.235, t:'canvas', tag:'<canvas>' },
      // canvas inner decorative dot grid (just a visual rect)
      { x:MR+.01,y:T+0.085,   w:1-p-MR-.02, h:0.200, t:'inner',  tag:null },
      // ── card row
      ...[0,1,2].map(i => {
        const cw = (1-2*p-2*.022)/3;
        return { x:p+i*(cw+.022), y:T+0.325, w:cw, h:0.165, t:'card', tag:'<div>' };
      }),
      // card inner text lines
      ...[0,1,2].flatMap(i => {
        const cw = (1-2*p-2*.022)/3;
        const cx = p+i*(cw+.022);
        return [
          { x:cx+.015, y:T+0.352, w:cw*.55, h:0.013, t:'line', tag:null },
          { x:cx+.015, y:T+0.373, w:cw*.75, h:0.011, t:'line', tag:null },
          { x:cx+.015, y:T+0.390, w:cw*.65, h:0.011, t:'line', tag:null },
        ];
      }),
      // ── footer
      { x:p,    y:T+0.512,    w:1-2*p,      h:0.044, t:'footer', tag:'<footer>' },
    ];
  }

  /* ── TARGET POINT GENERATION ────────────────────────────── */
  function makeTargets(layout) {
    const pts = [];

    layout.forEach(r => {
      const rx = r.x*W, ry = r.y*H, rw = r.w*W, rh = r.h*H;

      if (r.t === 'line' || r.t === 'btn' || r.t === 'inner') {
        // fill with a dense grid
        const cols = Math.max(2, Math.round(rw / 8));
        const rows = Math.max(1, Math.round(rh / 8));
        for (let c = 0; c < cols; c++)
          for (let ro = 0; ro < rows; ro++)
            pts.push({ x: rx + (c+.5)*rw/cols, y: ry + (ro+.5)*rh/rows, r });
        return;
      }

      // perimeter trace
      const perim = 2*(rw+rh);
      const n     = Math.max(10, Math.round(perim / 7));
      for (let i = 0; i < n; i++) {
        const t = (i / n) * perim;
        let px, py;
        if      (t < rw)            { px = rx + t;             py = ry; }
        else if (t < rw+rh)         { px = rx + rw;            py = ry + (t-rw); }
        else if (t < 2*rw+rh)       { px = rx + rw-(t-rw-rh); py = ry + rh; }
        else                         { px = rx;                 py = ry + rh-(t-2*rw-rh); }
        pts.push({ x: px, y: py, r });
      }

      // sparse interior
      const area = rw * rh;
      const ni   = Math.round(area / 3800);
      for (let i = 0; i < ni; i++)
        pts.push({ x: rx + Math.random()*rw, y: ry + Math.random()*rh, r });
    });

    return pts;
  }

  /* ── PARTICLES ───────────────────────────────────────────── */
  const N = 480;
  let pts = [];

  function initParticles() {
    const layout  = getLayout();
    const targets = makeTargets(layout);

    pts = Array.from({ length: N }, (_, i) => {
      const tgt   = targets[i % targets.length];
      const kind  = Math.random();
      const isBrt = kind > 0.65;
      const isGld = kind > 0.94;

      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random()-.5) * 1.4,
        vy: (Math.random()-.5) * 1.4,
        tx: tgt.x,
        ty: tgt.y,
        rect: tgt.r,
        sz: isGld ? 2.2 : isBrt ? 1.8 : 0.9 + Math.random()*0.8,
        col: isGld ? C.amber : isBrt ? C.lt : C.blue,
        a:  0.45 + Math.random() * 0.45,
        φ:  Math.random() * Math.PI * 2,
        speed: 0.7 + Math.random() * 0.6,
      };
    });
  }

  /* ── CORNER MARKERS ─────────────────────────────────────── */
  function drawCornerMark(x, y, size, alpha) {
    const s = size;
    ctx.strokeStyle = rgba(C.lt, alpha);
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    // top-left
    ctx.moveTo(x - s, y); ctx.lineTo(x - s, y - s); ctx.lineTo(x, y - s);
    ctx.stroke();
  }

  /* ── SCANLINE EFFECT ─────────────────────────────────────── */
  function drawScanline(alpha) {
    const lineY = ((frame * 2.8) % (H + 40)) - 20;
    const grad  = ctx.createLinearGradient(0, lineY - 12, 0, lineY + 12);
    grad.addColorStop(0,   rgba(C.lt, 0));
    grad.addColorStop(0.5, rgba(C.lt, alpha));
    grad.addColorStop(1,   rgba(C.lt, 0));
    ctx.fillStyle = grad;
    ctx.fillRect(0, lineY - 12, W, 24);
  }

  /* ── WIREFRAME DRAW ─────────────────────────────────────── */
  function drawWireframe(ph, pr) {
    const layout = getLayout();

    let wireA = 0, fillA = 0, labelA = 0, scanA = 0, cornerA = 0;

    if (ph === 'assemble')  { wireA = easeOut(pr) * 0.35; }
    if (ph === 'wireframe') { wireA = 0.35 + easeOut(pr) * 0.60; cornerA = easeOut(pr); }
    if (ph === 'render')    { wireA = 0.95; fillA = easeOut(pr) * 0.22; scanA = easeOut(clamp(pr*1.4,0,1)) * 0.55; labelA = easeOut(clamp((pr-0.4)/0.6,0,1)); cornerA = 1; }
    if (ph === 'hold')      { wireA = 0.95; fillA = 0.22; labelA = 1; cornerA = 1; }
    if (ph === 'dissolve')  { wireA = (1-pr) * 0.95; fillA = (1-pr) * 0.22; labelA = (1-pr); cornerA = (1-pr); }

    // scan line during render
    if (scanA > 0) drawScanline(scanA * 0.25);

    layout.forEach(r => {
      const rx = r.x*W, ry = r.y*H, rw = r.w*W, rh = r.h*H;
      const isStructural = (r.t !== 'line' && r.t !== 'btn' && r.t !== 'inner');

      // ── fill ──────────────────────────────────────────────
      if (fillA > 0) {
        let fa = fillA;
        if (r.t === 'hero' || r.t === 'canvas') fa *= 0.6;
        if (r.t === 'nav'  || r.t === 'footer') fa *= 0.5;
        if (r.t === 'card') fa *= 0.7;
        if (r.t === 'line' || r.t === 'btn')    fa *= 1.1;
        if (r.t === 'inner') fa *= 0.15;
        const fillCol = (r.t === 'btn') ? C.blue : (r.t === 'inner') ? C.lt : C.lt;
        ctx.fillStyle = rgba(fillCol, clamp(fa, 0, 0.9));
        ctx.fillRect(rx, ry, rw, rh);
      }

      // ── stroke ────────────────────────────────────────────
      if (wireA > 0 && isStructural) {
        ctx.save();
        ctx.strokeStyle = rgba(C.lt, wireA * 0.75);
        ctx.lineWidth   = 1.2;

        if (ph === 'wireframe') {
          // animated drawing: dash offset creates "tracing" effect
          const dashLen = 2*(rw+rh);
          ctx.setLineDash([dashLen * easeOut(pr), dashLen]);
          ctx.lineDashOffset = 0;
        } else {
          // pulsing dash in hold
          if (ph === 'hold') {
            const pulse = (Math.sin(frame * 0.045) + 1) / 2;
            ctx.shadowBlur  = 4 + pulse * 6;
            ctx.shadowColor = rgba(C.lt, 0.55);
          }
          ctx.setLineDash([]);
        }

        ctx.strokeRect(rx, ry, rw, rh);
        ctx.restore();
      }

      // ── corner marks ──────────────────────────────────────
      if (cornerA > 0 && isStructural && r.t !== 'footer') {
        const s = 6;
        ctx.save();
        ctx.strokeStyle = rgba(C.amber, cornerA * 0.9);
        ctx.lineWidth = 1.5;
        // four corners
        [[rx,ry],[rx+rw,ry],[rx,ry+rh],[rx+rw,ry+rh]].forEach(([cx,cy], ci) => {
          const sx = (ci%2 === 0) ? 1 : -1;
          const sy = (ci < 2)     ? 1 : -1;
          ctx.beginPath();
          ctx.moveTo(cx + sx*s, cy);
          ctx.lineTo(cx, cy);
          ctx.lineTo(cx, cy + sy*s);
          ctx.stroke();
        });
        ctx.restore();
      }

      // ── tag labels ────────────────────────────────────────
      if (labelA > 0 && r.tag && isStructural) {
        const fs = clamp(Math.round(rh * 0.22), 7, 10);
        ctx.font      = `${fs}px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = rgba(C.lt, labelA * 0.55);
        ctx.fillText(r.tag, rx + 5, ry + fs + 3);
      }
    });
  }

  /* ── CONNECTION LINES during assembly ───────────────────── */
  function drawConnections(pr) {
    if (pr < 0.3) return;
    const alpha  = easeOut((pr - 0.3) / 0.7) * 0.12;
    const thresh = 28;

    ctx.strokeStyle = rgba(C.lt, alpha);
    ctx.lineWidth   = 0.5;
    ctx.beginPath();

    // Only check subset to keep perf OK
    const step = Math.max(1, Math.floor(N / 120));
    for (let i = 0; i < N; i += step) {
      const a = pts[i];
      for (let j = i + step; j < N; j += step) {
        const b   = pts[j];
        const dx  = a.x - b.x;
        const dy  = a.y - b.y;
        const d2  = dx*dx + dy*dy;
        if (d2 < thresh*thresh) {
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
      }
    }
    ctx.stroke();
  }

  /* ── MAIN DRAW LOOP ─────────────────────────────────────── */
  const PHASE_LABELS = {
    chaos:     '· · · UNINITIALIZED',
    assemble:  '⟶   ASSEMBLING …',
    wireframe: '⬡   WIREFRAME',
    render:    '▓   RENDERING …',
    hold:      '✓   COMPLETE',
    dissolve:  '⟳   CLEARING …',
  };

  function draw() {
    raf = requestAnimationFrame(draw);
    frame++;
    tick();

    const ph = phase();
    const pr = prog();

    /* trail strength:
       chaos/dissolve → very transparent (long trails = motion blur)
       assemble       → medium trails   (you can see particles stream)
       assembled      → nearly opaque   (particles sit still) */
    const trailA = (ph === 'chaos' || ph === 'dissolve') ? 0.18
                 : ph === 'assemble'                     ? 0.22
                 : 0.60;

    ctx.fillStyle = rgba(C.navy, trailA);
    ctx.fillRect(0, 0, W, H);

    /* ── particle update ────────────────────────────────── */
    pts.forEach(p => {
      if (ph === 'chaos') {
        p.x += p.vx * p.speed;
        p.y += p.vy * p.speed;
        // wrap
        if (p.x < -2)  p.x = W+2;
        if (p.x > W+2) p.x = -2;
        if (p.y < -2)  p.y = H+2;
        if (p.y > H+2) p.y = -2;

      } else if (ph === 'assemble') {
        const k = 0.052 + 0.038 * pr;
        p.x += (p.tx - p.x) * k;
        p.y += (p.ty - p.y) * k;

      } else if (ph === 'wireframe' || ph === 'render') {
        p.x += (p.tx - p.x) * 0.14;
        p.y += (p.ty - p.y) * 0.14;

      } else if (ph === 'hold') {
        // micro wobble at rest
        const wobble = 0.35;
        p.x += (p.tx - p.x) * 0.12 + Math.sin(frame*.055 + p.φ) * wobble;
        p.y += (p.ty - p.y) * 0.12 + Math.cos(frame*.043 + p.φ) * wobble;

      } else if (ph === 'dissolve') {
        // radial explosion
        const cx = p.tx, cy = p.ty;
        const dx = cx - W/2, dy = cy - H/2;
        const d  = Math.sqrt(dx*dx + dy*dy) || 1;
        const force = easeIn(pr) * 6;
        p.vx += (dx/d) * force * 0.12;
        p.vy += (dy/d) * force * 0.12;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x  += p.vx;
        p.y  += p.vy;
      }

      /* ── draw particle ────────────────────────────────── */
      let alpha = p.a;
      let glow  = 0;

      if (ph === 'dissolve') alpha *= clamp(1 - pr * 1.1, 0, 1);
      if (ph === 'assemble') glow  = 3 * easeOut(pr);
      if (ph === 'hold') {
        const pulse = (Math.sin(frame * 0.048 + p.φ) + 1) / 2;
        glow  = pulse * 7;
        alpha = p.a * (0.65 + 0.35 * pulse);
      }
      if (ph === 'wireframe') {
        glow  = easeOut(pr) * 4;
      }

      if (glow > 0.5) {
        ctx.shadowBlur  = glow;
        ctx.shadowColor = rgba(p.col, 0.8);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
      ctx.fillStyle = rgba(p.col, alpha);
      ctx.fill();

      if (glow > 0.5) ctx.shadowBlur = 0;
    });

    /* ── connection lines during assembly ───────────────── */
    if (ph === 'assemble') drawConnections(pr);

    /* ── wireframe overlay ──────────────────────────────── */
    if (ph !== 'chaos') drawWireframe(ph, pr);

    /* ── phase label & dots ─────────────────────────────── */
    const labelEl = document.getElementById('wdPhaseLabel');
    if (labelEl) labelEl.textContent = PHASE_LABELS[ph] || '';

    // update dots every 6 frames to avoid excessive DOM writes
    if (frame % 6 === 0) {
      document.querySelectorAll('.wd-build-phase-dot').forEach(dot => {
        dot.classList.toggle('active', dot.dataset.ph === ph);
      });
    }
  }

  /* ── RESIZE ─────────────────────────────────────────────── */
  function resize() {
    const wrap = canvas.parentElement;          // .wd-hero-canvas-wrap
    W = canvas.width = wrap.clientWidth || 700;

    // Phase bar is ~36px — subtract it to get drawing area height.
    // Use the wrapper's rendered height when available (flex stretches it
    // to match the left column). Fall back to a viewport-based estimate.
    const wrapH = wrap.clientHeight;
    const phaseBarH = 36;
    let drawH = wrapH - phaseBarH;
    if (drawH < 300) {
      // Not yet laid out — estimate from viewport
      drawH = Math.min(window.innerHeight - 160, Math.round(W * 0.78));
    }
    H = canvas.height = Math.max(drawH, 340);
    initParticles();
  }

  /* ── INIT ───────────────────────────────────────────────── */
  function init() {
    // Small rAF delay so grid/flex layout settles before first resize read
    requestAnimationFrame(() => {
      resize();

      if (window.ResizeObserver) {
        new ResizeObserver(resize).observe(canvas.parentElement);
      } else {
        window.addEventListener('resize', resize);
      }

      // Only animate when on screen
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { if (!raf) draw(); }
        else { cancelAnimationFrame(raf); raf = null; }
      }, { threshold: 0.05 });
      io.observe(canvas);
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();
