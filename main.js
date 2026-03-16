/* ── TOKENS ─────────────────────────────────────────────────── */
:root {
  --bg:       #1c1f22;
  --bg2:      #23272b;
  --surface:  #2a2f35;
  --surface2: #32383f;
  --border:   #3d444d;
  --border2:  #4a5260;
  --text:     #d8dde3;
  --muted:    #7a8693;
  --faint:    #4a5260;

  /* Accent palette: steel blue + pale red + warm grey */
  --blue:     #5b8db8;
  --blue-lt:  #7eaed4;
  --blue-dim: rgba(91,141,184,0.12);
  --red:      #b85b5b;
  --red-lt:   #d47e7e;
  --red-dim:  rgba(184,91,91,0.10);
  --steel:    #8fa3b1;
  --white:    #edf0f3;

  --radius: 2px;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-display: 'Bebas Neue', sans-serif;
  --font-serif: 'DM Serif Display', serif;
  --font-body: 'Barlow', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
}
::selection { background: var(--blue-dim); color: var(--blue-lt); }

/* ── CURSOR ──────────────────────────────────────────────────── */
.cursor {
  width: 10px; height: 10px;
  background: var(--blue);
  border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%);
  transition: width .2s, height .2s, background .2s;
}
.cursor-ring {
  width: 32px; height: 32px;
  border: 1px solid rgba(91,141,184,.45);
  border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9998;
  transform: translate(-50%,-50%);
  transition: width .3s, height .3s;
}
.cursor.hover { width: 18px; height: 18px; background: var(--red); }
.cursor-ring.hover { width: 48px; height: 48px; border-color: rgba(184,91,91,.4); }

/* ── NAV ─────────────────────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 56px;
  background: rgba(28,31,34,.96);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 20px; letter-spacing: 4px;
  color: var(--blue-lt); text-decoration: none;
}
.nav-right { display: flex; align-items: center; gap: 36px; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color .25s;
  position: relative;
}
.nav-links a::after {
  content: ''; position: absolute;
  bottom: -3px; left: 0; right: 0; height: 1px;
  background: var(--blue); transform: scaleX(0);
  transition: transform .25s;
}
.nav-links a:hover { color: var(--blue-lt); }
.nav-links a:hover::after { transform: scaleX(1); }
.nav-links a.active { color: var(--blue-lt); }

/* lang toggle */
.lang-toggle {
  display: flex; gap: 2px;
  background: var(--surface); border: 1px solid var(--border);
  padding: 3px; border-radius: var(--radius);
}
.lang-btn {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; font-weight: 500;
  padding: 5px 9px; border: none; background: transparent;
  color: var(--muted); cursor: none;
  transition: color .2s, background .2s;
  border-radius: 1px;
}
.lang-btn.active { background: var(--blue); color: var(--bg); }

/* ── HERO ────────────────────────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  padding-top: 62px;
  position: relative; overflow: hidden;
}
.hero-left {
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 56px; position: relative; z-index: 2;
}
.hero-tag {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 3px; color: var(--blue);
  text-transform: uppercase; margin-bottom: 28px;
  opacity: 0; animation: fadeUp .7s .2s forwards;
}
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(60px, 8vw, 110px);
  line-height: .92; letter-spacing: 1px; color: var(--white);
  opacity: 0; animation: fadeUp .8s .35s forwards;
}
.hero-name span { color: var(--blue-lt); }
.hero-title {
  font-family: var(--font-serif); font-style: italic;
  font-size: clamp(15px, 1.8vw, 22px);
  color: var(--muted); margin-top: 18px;
  opacity: 0; animation: fadeUp .8s .5s forwards;
}
.hero-desc {
  font-size: 14px; line-height: 1.8;
  color: rgba(216,221,227,.65);
  margin-top: 28px; max-width: 420px;
  opacity: 0; animation: fadeUp .8s .65s forwards;
}
.hero-desc strong { color: var(--blue-lt); font-weight: 500; }
.hero-cta {
  display: flex; gap: 16px; margin-top: 44px;
  opacity: 0; animation: fadeUp .8s .8s forwards;
}
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 12px 28px;
  background: var(--blue); color: var(--bg);
  font-family: var(--font-mono); font-size: 11px;
  font-weight: 500; letter-spacing: 2px; text-transform: uppercase;
  text-decoration: none; border: 1px solid var(--blue);
  transition: transform .3s, box-shadow .3s, background .2s;
}
.btn-primary:hover {
  background: var(--blue-lt);
  transform: translate(-2px,-2px);
  box-shadow: 5px 5px 0 var(--red);
}
.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 12px 28px;
  border: 1px solid var(--border2); color: var(--muted);
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: 2px; text-transform: uppercase;
  text-decoration: none;
  transition: border-color .25s, color .25s, transform .3s;
}
.btn-outline:hover {
  border-color: var(--blue); color: var(--blue-lt);
  transform: translate(-2px,-2px);
}

/* hero right — 3D viewer */
.hero-right {
  position: relative; display: flex;
  align-items: center; justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 55% 45%, rgba(91,141,184,.07) 0%, transparent 65%);
}
#hero3d {
  width: 100%; height: 100%;
  min-height: 500px;
}
.viewer-hint {
  position: absolute; bottom: 24px; left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--faint);
  display: flex; align-items: center; gap: 8px;
  animation: pulse 2.5s ease-in-out infinite;
}
.viewer-hint::before, .viewer-hint::after {
  content: ''; display: block;
  width: 20px; height: 1px; background: var(--faint);
}
.viewer-controls {
  position: absolute; top: 24px; right: 24px;
  display: flex; flex-direction: column; gap: 6px;
}
.vctrl {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 1px; padding: 6px 12px;
  background: rgba(42,47,53,.85); border: 1px solid var(--border);
  color: var(--muted); cursor: none;
  transition: border-color .2s, color .2s;
}
.vctrl:hover, .vctrl.active {
  border-color: var(--blue); color: var(--blue-lt);
}

/* stats */
.hero-stats {
  position: absolute; bottom: 40px; left: 56px;
  display: flex; gap: 44px;
  opacity: 0; animation: fadeUp .8s 1s forwards;
}
.stat { display: flex; flex-direction: column; gap: 3px; }
.stat-num {
  font-family: var(--font-display); font-size: 38px;
  color: var(--white); line-height: 1;
}
.stat-num span { color: var(--blue-lt); }
.stat-label {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; text-transform: uppercase; color: var(--muted);
}

/* ── TICKER ──────────────────────────────────────────────────── */
.ticker {
  background: var(--surface); border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 10px 0; overflow: hidden;
}
.ticker-inner {
  display: flex; animation: ticker 24s linear infinite;
  white-space: nowrap;
}
.ticker-item {
  font-family: var(--font-mono); font-size: 10px;
  font-weight: 400; letter-spacing: 3px; text-transform: uppercase;
  color: var(--muted); padding: 0 36px; flex-shrink: 0;
}
.ticker-item span { color: var(--blue); margin-left: 8px; }

/* ── SECTION SHELL ───────────────────────────────────────────── */
section { padding: 100px 56px; }
.section-header {
  display: flex; align-items: baseline; gap: 20px; margin-bottom: 72px;
}
.section-num {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; color: var(--blue);
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 5.5vw, 72px);
  letter-spacing: 2px; color: var(--white); line-height: 1;
}
.section-line {
  flex: 1; height: 1px;
  background: linear-gradient(to right, var(--border), transparent);
  margin-left: 20px;
}

/* ── ABOUT ───────────────────────────────────────────────────── */
#about { background: var(--bg2); }
.about-grid {
  display: grid; grid-template-columns: 1.1fr 1fr; gap: 72px; align-items: start;
}
.about-text p {
  font-size: 15px; line-height: 1.9;
  color: rgba(216,221,227,.72); margin-bottom: 20px;
}
.about-text p strong { color: var(--white); font-weight: 500; }
.about-highlight {
  font-family: var(--font-serif); font-style: italic;
  font-size: 21px; line-height: 1.5; color: var(--white);
  border-left: 2px solid var(--blue);
  padding-left: 24px; margin: 36px 0;
}
.skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; }
.skill-item {
  background: var(--surface); padding: 16px 20px;
  border: 1px solid var(--border);
  transition: border-color .25s, transform .25s;
  position: relative; overflow: hidden;
}
.skill-item::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 0; background: var(--blue);
  transition: width .4s; opacity: .07;
}
.skill-item:hover::before { width: 100%; }
.skill-item:hover { border-color: var(--blue); transform: translateX(3px); }
.skill-name {
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: .5px; color: var(--text);
  display: block; margin-bottom: 8px;
}
.skill-bar-bg { height: 2px; background: var(--border); position: relative; }
.skill-bar {
  position: absolute; left: 0; top: 0; height: 100%;
  background: linear-gradient(to right, var(--blue), var(--blue-lt));
  width: 0; transition: width 1.4s cubic-bezier(.19,1,.22,1);
}

/* ── PORTFOLIO ───────────────────────────────────────────────── */
#projects { background: var(--bg); }
.portfolio-filter {
  display: flex; gap: 8px; margin-bottom: 40px; flex-wrap: wrap;
}
.filter-btn {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; text-transform: uppercase;
  padding: 6px 14px; border: 1px solid var(--border);
  background: transparent; color: var(--muted); cursor: none;
  transition: all .2s;
}
.filter-btn:hover, .filter-btn.active {
  border-color: var(--blue); color: var(--blue-lt);
  background: var(--blue-dim);
}
.projects-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
}
.project-card {
  background: var(--surface); border: 1px solid var(--border);
  padding: 32px; position: relative; overflow: hidden;
  transition: transform .35s cubic-bezier(.19,1,.22,1), border-color .25s;
  cursor: none;
}
.project-card:hover { transform: translateY(-6px); border-color: var(--border2); }
.project-card.featured { grid-column: span 2; background: var(--bg2); }
.project-card.software { border-color: var(--blue); background: rgba(91,141,184,.04); }
.proj-badge {
  display: inline-block;
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; text-transform: uppercase;
  padding: 3px 10px; margin-bottom: 16px;
  border: 1px solid var(--blue-dim); color: var(--blue);
  background: var(--blue-dim);
}
.proj-badge.red { border-color: var(--red-dim); color: var(--red-lt); background: var(--red-dim); }
.project-category {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 3px; text-transform: uppercase;
  color: var(--blue); margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}
.project-category::before {
  content: ''; display: inline-block;
  width: 16px; height: 1px; background: var(--blue);
}
.project-title {
  font-family: var(--font-display); font-size: 28px;
  letter-spacing: 1px; color: var(--white); line-height: 1;
  margin-bottom: 12px;
}
.project-card.featured .project-title { font-size: 38px; }
.project-desc {
  font-size: 13px; line-height: 1.7;
  color: rgba(216,221,227,.5); margin-bottom: 24px;
}
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
.tag {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 1px; padding: 3px 10px;
  border: 1px solid var(--border); color: var(--faint);
}
.project-link {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--blue); text-decoration: none;
  display: inline-flex; align-items: center; gap: 6px;
  transition: gap .25s, color .2s;
}
.project-link:hover { gap: 12px; color: var(--blue-lt); }
.project-num {
  position: absolute; top: 24px; right: 28px;
  font-family: var(--font-display); font-size: 64px;
  color: rgba(255,255,255,.025); line-height: 1; pointer-events: none;
}

/* ── SOFTWARE FEATURE CARD ───────────────────────────────────── */
.software-card {
  background: var(--bg2);
  border: 1px solid var(--blue);
  padding: 48px 56px;
  margin-bottom: 2px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  align-items: center;
  position: relative; overflow: hidden;
}
.software-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, var(--blue), var(--red), transparent);
}
.sw-label {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 3px; text-transform: uppercase;
  color: var(--blue); margin-bottom: 16px;
  display: flex; align-items: center; gap: 10px;
}
.sw-label::before { content: ''; width: 20px; height: 1px; background: var(--blue); }
.sw-title {
  font-family: var(--font-display); font-size: 44px;
  letter-spacing: 1px; color: var(--white); line-height: 1;
  margin-bottom: 20px;
}
.sw-desc {
  font-size: 14px; line-height: 1.8;
  color: rgba(216,221,227,.65); margin-bottom: 32px;
}
.sw-features {
  list-style: none; display: grid;
  grid-template-columns: 1fr 1fr; gap: 10px;
}
.sw-features li {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: .5px; color: var(--muted);
  display: flex; align-items: center; gap: 8px;
}
.sw-features li::before {
  content: '▸'; color: var(--blue); font-size: 9px;
}
.sw-visual {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 3px; overflow: hidden;
  aspect-ratio: 16/10; display: flex;
  align-items: center; justify-content: center;
  position: relative;
}
.sw-mockup {
  width: 100%; height: 100%; padding: 20px;
  display: flex; flex-direction: column; gap: 12px;
}
.sw-row {
  height: 8px; background: var(--border);
  border-radius: 2px; opacity: .5;
}
.sw-row.accent { background: var(--blue); opacity: .3; width: 60%; }
.sw-row.short { width: 40%; }
.sw-table {
  flex: 1; border: 1px solid var(--border);
  display: grid; grid-template-rows: 24px 1fr;
  border-radius: 2px; overflow: hidden;
}
.sw-thead {
  background: var(--surface2);
  display: grid; grid-template-columns: repeat(4,1fr);
  border-bottom: 1px solid var(--border);
}
.sw-th {
  height: 100%; padding: 6px;
  background: var(--blue-dim);
  border-right: 1px solid var(--border);
}
.sw-tbody { display: flex; flex-direction: column; gap: 1px; padding: 4px; }
.sw-tr {
  height: 6px; background: var(--border); border-radius: 1px;
  opacity: .4;
}
.sw-tr:nth-child(odd) { opacity: .25; }

/* ── EXPERIENCE / EDUCATION ──────────────────────────────────── */
#experience { background: var(--bg2); }
.timeline { position: relative; padding-left: 36px; }
.timeline::before {
  content: ''; position: absolute; left: 0; top: 8px; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--blue), var(--red), transparent);
}
.timeline-item {
  position: relative; padding-bottom: 52px;
  opacity: 0; transform: translateY(16px);
  transition: opacity .5s, transform .5s;
}
.timeline-item.visible { opacity: 1; transform: none; }
.timeline-item::before {
  content: ''; position: absolute;
  left: -40px; top: 7px;
  width: 8px; height: 8px;
  background: var(--blue); border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(91,141,184,.18);
}
.timeline-period {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; color: var(--blue); margin-bottom: 6px;
}
.timeline-role {
  font-family: var(--font-display); font-size: 26px;
  letter-spacing: 1px; color: var(--white); margin-bottom: 3px;
}
.timeline-company {
  font-family: var(--font-serif); font-style: italic;
  font-size: 16px; color: var(--muted); margin-bottom: 16px;
}
.timeline-desc { font-size: 13px; line-height: 1.8; color: rgba(216,221,227,.6); max-width: 580px; }
.timeline-desc ul { list-style: none; }
.timeline-desc li { padding: 3px 0 3px 14px; position: relative; }
.timeline-desc li::before {
  content: '→'; position: absolute; left: 0;
  color: var(--blue); font-size: 11px;
}

/* ── CONTACT ─────────────────────────────────────────────────── */
#contact {
  background: var(--bg); text-align: center;
  padding: 120px 56px; position: relative; overflow: hidden;
}
.contact-glow {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse, rgba(91,141,184,.06) 0%, transparent 70%);
  pointer-events: none;
}
.contact-label {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 4px; text-transform: uppercase;
  color: var(--blue); margin-bottom: 20px;
}
.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(52px, 7.5vw, 92px);
  letter-spacing: 2px; color: var(--white);
  line-height: .95; margin-bottom: 28px;
}
.contact-sub {
  font-size: 15px; color: var(--muted); line-height: 1.7;
  max-width: 480px; margin: 0 auto 48px;
}
.contact-email {
  font-family: var(--font-serif); font-style: italic;
  font-size: clamp(18px, 2.2vw, 26px);
  color: var(--blue-lt); text-decoration: none;
  border-bottom: 1px solid rgba(91,141,184,.3);
  padding-bottom: 3px; transition: border-color .25s, color .25s;
}
.contact-email:hover { border-color: var(--blue-lt); color: var(--white); }
.social-links {
  display: flex; justify-content: center; gap: 28px; margin-top: 48px;
}
.social-link {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color .25s;
  display: flex; align-items: center; gap: 7px;
}
.social-link:hover { color: var(--blue-lt); }

/* ── FOOTER ──────────────────────────────────────────────────── */
footer {
  background: var(--bg2);
  padding: 28px 56px;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid var(--border);
}
.footer-logo {
  font-family: var(--font-display); font-size: 16px;
  letter-spacing: 3px; color: var(--blue-lt);
}
.footer-text {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 2px; color: var(--muted); text-transform: uppercase;
}

/* ── ANIMATIONS ──────────────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes pulse {
  0%,100% { opacity: .4; } 50% { opacity: .9; }
}

/* ── RESPONSIVE ──────────────────────────────────────────────── */
@media (max-width: 960px) {
  nav { padding: 18px 20px; }
  .nav-links { display: none; }
  #hero { grid-template-columns: 1fr; }
  .hero-left { padding: 80px 20px 60px; }
  .hero-right { display: none; }
  .hero-stats { left: 20px; bottom: 32px; gap: 28px; }
  section { padding: 72px 20px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .projects-grid { grid-template-columns: 1fr; }
  .project-card.featured { grid-column: span 1; }
  .software-card { grid-template-columns: 1fr; gap: 32px; padding: 28px; }
  footer { flex-direction: column; gap: 12px; text-align: center; }
}
