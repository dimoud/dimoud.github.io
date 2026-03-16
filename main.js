/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const LANG = {
  el: {
    nav_about:'Σχετικά', nav_projects:'Έργα', nav_software:'Λογισμικό',
    nav_experience:'Ομάδα', nav_contact:'Επικοινωνία',
    hero_tag:'// Μηχανολογικό Studio — Αθήνα, Ελλάδα',
    hero_title:'Μηχανολογικός Σχεδιασμός · 3D Printing · Διαχείριση Έργων',
    hero_desc:'Η <strong>Expertease Designs</strong> είναι στούντιο μηχανολογικού σχεδιασμού και 3D printing — από το concept έως την κατασκευή.',
    hero_cta_work:'Δείτε τα Έργα →', hero_cta_contact:'Επικοινωνήστε',
    stat_years:'Χρόνια Εμπειρίας', stat_projects:'Ολοκληρωμένα Έργα', stat_degrees:'Μεταπτυχιακοί Τίτλοι',
    viewer_hint:'σύρτε για περιστροφή',
    edu_strip:'Ιδρυτής — Δημήτριος Μουδιώτης · 5 Πανεπιστήμια σε 3 Χώρες',
    edu1_deg:'BEng', edu1_name:'Μηχανολόγος Μηχανικός',
    edu2_deg:'MSc', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc', edu3_name:'IFP School',
    edu4_deg:'MSc', edu4_name:'Διεθνές Πανεπιστήμιο Ελλάδος',
    edu5_deg:'MBA', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'Σχετικά',
    about_p1:'Η <strong>Expertease Designs</strong> είναι studio μηχανολογικού σχεδιασμού με επικεφαλής τον <strong>Δημήτριο Μουδιώτη</strong>, Μηχανολόγο Μηχανικό ΑΠΘ με 7 χρόνια εμπειρίας και 4 μεταπτυχιακούς τίτλους: MSc École Centrale Paris, MSc IFP School, MSc ΔΙΠαΕ, MBA ΗΠΑ.',
    about_quote:'«Η μηχανική είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που μπορείς να κρατήσεις στα χέρια σου.»',
    about_p2:'Αναλαμβάνουμε τον πλήρη κύκλο ζωής ενός προϊόντος — από τον αρχικό σχεδιασμό και το BOM, μέχρι την τρισδιάστατη εκτύπωση, την κατεργασία φύλλων μετάλλου και τη διαχείριση έργου.',
    about_p3:'Έδρα: <strong>Αθήνα, Ελλάδα</strong> — Αναλαμβάνουμε έργα σε Ελλάδα και εξωτερικό.',
    projects_heading:'Έργα',
    filter_all:'Όλα', filter_robotics:'Ρομποτική', filter_safety:'Ασφάλεια', filter_metal:'Μέταλλο',
    p1_badge:'Ναυαρχίδα', p1_cat:'Ρομποτική · Ηλεκτρονικά · Κατασκευή', p1_title:'Αρθρωτό Ρομπότ',
    p1_desc:'Τροχήλατο ρομπότ με 3 μπαταρίες μολύβδου, τροφοδοσία 36V, ηλιακό πάνελ, 4 κάμερες, αισθητήρες και ισχυρά LED. Laser cut χάλυβας, βιοδιασπάσιμη PLA, ξύλο. Αδιάβροχο, αντισκονικό, ανακυκλώσιμο.', p1_link:'Δείτε Έργο →',
    p2_cat:'Ασφάλεια · Εκπαίδευση Οδηγών', p2_title:'Simulator Ζώνης Ασφαλείας',
    p2_desc:'Νιώστε μια σύγκρουση στα 12km/h σε ελεγχόμενο περιβάλλον. Εκδόσεις μονής και διπλής θέσης — ελαφρύ, ανθεκτικό, συναρμολογείται σε μισή μέρα από έναν άνθρωπο.', p2_link:'Δείτε →',
    p3_cat:'Ασφάλεια · Εκπαιδευτικός Εξοπλισμός', p3_title:'Rollcar Simulator',
    p3_desc:'Προσομοιωτής ανατροπής οχήματος — τοποθετείτε αυτοκίνητο στην κορυφή και ο χρήστης κυλά μέσα σε αυτό. Εκδόσεις Ι & ΙΙ, έως 20rpm.', p3_link:'Δείτε →',
    p4_badge:'Sheet Metal', p4_cat:'Laser Cutting · Brake Press · Συγκόλληση', p4_title:'Εφαρμογές Φύλλων Μετάλλου',
    p4_desc:'Από διακοσμητικά τοίχου με LED μέχρι καλάθια καυσόξυλων και δομικά στοιχεία. Χάλυβας 1.5–5mm, βελτιστοποιημένος για ταχεία κατασκευή.', p4_link:'Δείτε →',
    p5_cat:'Δυναμική Φόρτιση · Δομικές Δοκιμές', p5_title:'Αρμονικός Διεγέρτης 1D',
    p5_desc:'Μονοδιευθυντική δόνηση 450kg σε κατασκευές, έως 20Hz. Αναποδογυρίστε τον και καλύπτει και τις τρεις κατευθύνσεις.', p5_link:'Δείτε →',
    sw_heading:'Λογισμικό', sw_label:'Ενεργό Προϊόν · easemanual.eu',
    sw_desc:'Ισχυρό λογισμικό που αυτοματοποιεί τη δημιουργία τεχνικής μελέτης για άδεια κυκλοφορίας οχημάτων ειδικής χρήσης — βάσει ΥΑ 80255/4693/19/2020. Φτιαγμένο από μηχανικούς για μηχανικούς.',
    sw_f1:'Τεχνικοί υπολογισμοί', sw_f2:'Διαγράμματα φόρτισης', sw_f3:'Σχέδια οχημάτων A3', sw_f4:'Αυτόματη μελέτη Word',
    sw_f5:'Άξονες & εφεδρανισμοί', sw_f6:'Ευστάθεια & πέδηση', sw_f7:'Συγκολλήσεις & ελατήρια', sw_f8:'Γερανοί & καλαθοφόρα',
    sw_cta1:'Δείτε το Προϊόν →', sw_cta2:'Τιμολόγηση',
    contact_label:'// Ας Δουλέψουμε Μαζί',
    contact_heading:'Έχετε ένα\nέργο στο νου;',
    contact_sub:'Από τον σχεδιασμό ενός εξαρτήματος έως τη διαχείριση ολόκληρου έργου — η Expertease είναι εδώ. Επικοινωνήστε μαζί μας.',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Αθήνα, Ελλάδα',
  },
  en: {
    nav_about:'About', nav_projects:'Work', nav_software:'Software',
    nav_experience:'Team', nav_contact:'Contact',
    hero_tag:'// Mechanical Design & 3D Printing Studio — Athens, GR',
    hero_title:'Mechanical Design · 3D Printing · Project Management',
    hero_desc:'<strong>Expertease Designs</strong> — machine design, sheet metal, rapid prototyping, BOM, and project management. Athens-based, working internationally.',
    hero_cta_work:'View Work →', hero_cta_contact:'Get in Touch',
    stat_years:'Years Experience', stat_projects:'Projects Delivered', stat_degrees:'Postgrad Degrees',
    viewer_hint:'drag to rotate',
    edu_strip:'Founder — Dimitrios Moudiotis · 5 Universities in 3 Countries',
    edu1_deg:'BEng', edu1_name:'Mechanical Engineering',
    edu2_deg:'MSc', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc', edu3_name:'IFP School',
    edu4_deg:'MSc', edu4_name:'Int\'l Hellenic University',
    edu5_deg:'MBA', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'About',
    about_p1:'<strong>Expertease Designs</strong> is an Athens-based mechanical engineering studio led by <strong>Dimitrios Moudiotis</strong> — Mechanical Engineer (AUTH), with 7 years of experience and four postgraduate degrees: MSc École Centrale Paris, MSc IFP School, MSc IHU, and MBA (USA).',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'We cover the full product lifecycle — from initial design and BOM to 3D printing, sheet metal fabrication, and project management.',
    about_p3:'Based in <strong>Athens, Greece</strong> — available for projects across Greece and internationally.',
    projects_heading:'Work',
    filter_all:'All', filter_robotics:'Robotics', filter_safety:'Safety', filter_metal:'Metal',
    p1_badge:'Featured', p1_cat:'Robotics · Electronics · Fabrication', p1_title:'Modular Robot',
    p1_desc:'Tracked robot with 3 lead-acid batteries, 36V supply, solar panel, 4 cameras, sensors, powerful LEDs. Laser-cut steel, biodegradable PLA, wood. Dustproof, waterproof, recyclable.', p1_link:'View Project →',
    p2_cat:'Safety · Driver Education', p2_title:'Seatbelt Convincer',
    p2_desc:'Experience a controlled 12km/h impact. Available in single and double-seat versions — lightweight, durable, assembled by one person in half a day.', p2_link:'View →',
    p3_cat:'Safety · Educational Equipment', p3_title:'Rollcar Simulator',
    p3_desc:'Vehicle rollover simulator — place a car on top and roll inside it. Versions I & II, up to 20rpm.', p3_link:'View →',
    p4_badge:'Sheet Metal', p4_cat:'Laser Cutting · Brake Press · Welding', p4_title:'Sheet Metal Applications',
    p4_desc:'From LED wall décor to log baskets and structural elements. 1.5–5mm steel, optimised design for fast fabrication.', p4_link:'View →',
    p5_cat:'Dynamic Loading · Structural Testing', p5_title:'1D Harmonic Exciter',
    p5_desc:'Applies 450kg uni-directional vibration to structures, up to 20Hz. Flip it and it covers all three axes.', p5_link:'View →',
    sw_heading:'Software', sw_label:'Active Product · easemanual.eu',
    sw_desc:'Powerful software automating the creation of technical studies for special-purpose vehicle licensing — per Greek regulation YA 80255/4693/19/2020. Built by engineers for engineers.',
    sw_f1:'Technical calculations', sw_f2:'Load diagrams', sw_f3:'A3 vehicle drawings', sw_f4:'Auto Word report',
    sw_f5:'Shafts & bearings', sw_f6:'Stability & braking', sw_f7:'Welds & springs', sw_f8:'Cranes & platforms',
    sw_cta1:'View Product →', sw_cta2:'Pricing',
    contact_label:'// Let\'s Work Together',
    contact_heading:'Got a project\nin mind?',
    contact_sub:'From designing a single component to managing an entire project — Expertease is here.',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Athens, Greece',
  }
};

function applyLang(lang) {
  const t = LANG[lang];
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  const set = (id, val, html=false) => { const el=document.getElementById(id); if(!el)return; html?el.innerHTML=val:el.textContent=val; };
  set('nav-about',t.nav_about); set('nav-projects',t.nav_projects);
  set('nav-software',t.nav_software); set('nav-experience',t.nav_experience); set('nav-contact',t.nav_contact);
  set('hero-tag',t.hero_tag); set('hero-title',t.hero_title);
  set('hero-desc',t.hero_desc,true);
  set('hero-cta-work',t.hero_cta_work); set('hero-cta-contact',t.hero_cta_contact);
  set('stat-years',t.stat_years); set('stat-projects',t.stat_projects); set('stat-degrees',t.stat_degrees);
  set('viewer-hint',t.viewer_hint);
  set('edu-strip-title',t.edu_strip);
  set('edu1-deg',t.edu1_deg); set('edu1-name',t.edu1_name);
  set('edu2-deg',t.edu2_deg); set('edu2-name',t.edu2_name);
  set('edu3-deg',t.edu3_deg); set('edu3-name',t.edu3_name);
  set('edu4-deg',t.edu4_deg); set('edu4-name',t.edu4_name);
  set('edu5-deg',t.edu5_deg); set('edu5-name',t.edu5_name);
  set('about-heading',t.about_heading);
  set('about-p1',t.about_p1,true); set('about-quote',t.about_quote);
  set('about-p2',t.about_p2,true); set('about-p3',t.about_p3,true);
  set('projects-heading',t.projects_heading);
  set('filter-all',t.filter_all); set('filter-robotics',t.filter_robotics);
  set('filter-safety',t.filter_safety); set('filter-metal',t.filter_metal);
  ['p1','p2','p3','p4','p5'].forEach(p=>{
    ['badge','cat','title','desc','link'].forEach(k=>{ if(t[p+'_'+k]) set(p+'-'+k,t[p+'_'+k]); });
  });
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label);
  set('sw-desc',t.sw_desc);
  for(let i=1;i<=8;i++) set('sw-f'+i,t['sw_f'+i]);
  set('sw-cta1',t.sw_cta1); set('sw-cta2',t.sw_cta2);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading);
  set('contact-sub',t.contact_sub);
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc);
  // sync mobile nav text
  const mmap = {
    'mnav-about':t.nav_about,'mnav-projects':t.nav_projects,
    'mnav-software':t.nav_software,'mnav-experience':t.nav_experience,'mnav-contact':t.nav_contact
  };
  Object.entries(mmap).forEach(([id,val])=>{ const el=document.getElementById(id); if(el) el.textContent=val; });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR — mechanical crosshair with rotating ring
═══════════════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function lerp() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();

  function addHover(sel) {
    document.querySelectorAll(sel).forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    });
  }
  addHover('a, button, .project-card, .skill-item, .vctrl, .edu-card, .filter-btn');

  document.addEventListener('mousedown', () => {
    dot.classList.add('click'); ring.classList.add('click');
    setTimeout(() => { dot.classList.remove('click'); ring.classList.remove('click'); }, 320);
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity='1'; ring.style.opacity='1'; });
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS — PLANETARY GEAR BOX
   Planetary gear set: sun + 3 planets + ring gear + housing
═══════════════════════════════════════════════════════════════ */
let scene, camera, renderer, parts=[], clock;
let explodeT=0, exploding=false, isDragging=false;
let prevMouse={x:0,y:0}, rotGroup, floatT=0;
let currentMode='rotate';

/* External spur gear shape */
function makeGear(teeth, pitchR, toothH, hubR, spokes) {
  const s = new THREE.Shape();
  const step = (Math.PI*2) / teeth;
  for (let i=0; i<teeth; i++) {
    const a0=i*step-step*.42, a1=i*step-step*.16;
    const a2=i*step+step*.16, a3=i*step+step*.42;
    const p = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? s.moveTo(...p(a0,pitchR)) : s.lineTo(...p(a0,pitchR));
    s.lineTo(...p(a1, pitchR+toothH));
    s.lineTo(...p(a2, pitchR+toothH));
    s.lineTo(...p(a3, pitchR));
  }
  s.closePath();
  const hub = new THREE.Path();
  hub.absarc(0,0,hubR, 0, Math.PI*2, true);
  s.holes.push(hub);
  const n = spokes || Math.max(4, Math.floor(teeth/3));
  for (let i=0; i<n; i++) {
    const a=(i/n)*Math.PI*2, r=pitchR*.55, sr=pitchR*.13;
    const sh = new THREE.Path();
    sh.absarc(Math.cos(a)*r, Math.sin(a)*r, sr, 0, Math.PI*2, true);
    s.holes.push(sh);
  }
  return s;
}

/* Internal ring gear shape (teeth point inward) */
function makeRingGear(teeth, outerR, toothRootR, toothH) {
  const s = new THREE.Shape();
  s.absarc(0, 0, outerR, 0, Math.PI*2, false);
  const step = (Math.PI*2) / teeth;
  const inner = new THREE.Path();
  for (let i=0; i<teeth; i++) {
    const a0=i*step-step*.38, a1=i*step-step*.14;
    const a2=i*step+step*.14, a3=i*step+step*.38;
    const p = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? inner.moveTo(...p(a0, toothRootR)) : inner.lineTo(...p(a0, toothRootR));
    inner.lineTo(...p(a1, toothRootR - toothH));
    inner.lineTo(...p(a2, toothRootR - toothH));
    inner.lineTo(...p(a3, toothRootR));
  }
  inner.closePath();
  s.holes.push(inner);
  return s;
}

function initThree() {
  const canvas = document.getElementById('hero3d');
  if (!canvas || typeof THREE === 'undefined') { console.warn('Three.js not ready'); return; }

  const parent = canvas.parentElement;
  const W = parent.clientWidth  || 640;
  const H = parent.clientHeight || 580;

  renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(38, W/H, 0.1, 300);
  camera.position.set(0, 2.5, 20);
  camera.lookAt(0, 0.5, 0);
  clock = new THREE.Clock();

  /* Lights — brighter for lighter theme */
  scene.add(new THREE.AmbientLight(0x9ab8d8, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(8, 14, 10); key.castShadow = true;
  key.shadow.mapSize.set(2048,2048);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x5090e8, 0.9);
  fill.position.set(-9, 4, -7);
  scene.add(fill);
  const rim = new THREE.PointLight(0xe04040, 1.0, 55);
  rim.position.set(-5, 9, -10);
  scene.add(rim);
  const bot = new THREE.PointLight(0x2880e0, 0.7, 45);
  bot.position.set(5, -9, 5);
  scene.add(bot);
  const top = new THREE.DirectionalLight(0xd0e8ff, 0.6);
  top.position.set(0, 20, 0);
  scene.add(top);

  rotGroup = new THREE.Group();
  rotGroup.rotation.x = 0.32;
  scene.add(rotGroup);

  /* Materials — brightened for lighter theme */
  const mSteel = new THREE.MeshStandardMaterial({color:0x6a7888, metalness:.93, roughness:.14});
  const mBlue  = new THREE.MeshStandardMaterial({color:0x2a50a0, metalness:.88, roughness:.16});
  const mBrass = new THREE.MeshStandardMaterial({color:0xd4a860, metalness:.96, roughness:.08});
  const mGold  = new THREE.MeshStandardMaterial({color:0xe8c070, metalness:.95, roughness:.07});
  const mShaft = new THREE.MeshStandardMaterial({color:0x7080a0, metalness:.96, roughness:.10});
  const mCase  = new THREE.MeshStandardMaterial({color:0x2e3f5e, metalness:.72, roughness:.32});
  const mRing  = new THREE.MeshStandardMaterial({color:0x3a4d70, metalness:.86, roughness:.18});

  const extH = {depth:.75, bevelEnabled:true, bevelThickness:.05, bevelSize:.04, bevelSegments:4};
  const extM = {depth:.58, bevelEnabled:true, bevelThickness:.04, bevelSize:.03, bevelSegments:3};
  const extR = {depth:.78, bevelEnabled:true, bevelThickness:.07, bevelSize:.06, bevelSegments:4};

  const OR = 2.8; // planet orbit radius
  const pAngles = [0, Math.PI*2/3, Math.PI*4/3];
  const pMats   = [mGold, mBrass, mSteel];

  /* SUN GEAR — 18 teeth, pitch radius 1.8 */
  const gSun = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeGear(18, 1.8, 0.46, 0.26, 6), extH),
    mBlue
  );
  gSun.castShadow = true;
  rotGroup.add(gSun);
  parts.push({mesh:gSun, o:gSun.position.clone(), d:new THREE.Vector3(0,0,0), spin:.50});

  /* 3 PLANET GEARS — 10 teeth, pitch radius 1.0 */
  pAngles.forEach((a, i) => {
    const pg = new THREE.Mesh(
      new THREE.ExtrudeGeometry(makeGear(10, 1.0, 0.40, 0.16, 3), extM),
      pMats[i]
    );
    pg.position.set(Math.cos(a)*OR, Math.sin(a)*OR, 0.09);
    pg.castShadow = true;
    rotGroup.add(pg);
    parts.push({
      mesh: pg,
      o: pg.position.clone(),
      d: new THREE.Vector3(Math.cos(a)*4.8, Math.sin(a)*4.8, 1.4 + i*0.7),
      spin: -.90
    });
  });

  /* RING GEAR — 38 internal teeth, inner root radius 3.78 */
  const gRing = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeRingGear(38, 4.28, 3.78, 0.46), extR),
    mRing
  );
  gRing.castShadow = true;
  rotGroup.add(gRing);
  parts.push({mesh:gRing, o:gRing.position.clone(), d:new THREE.Vector3(0,0,-5.0), spin:-.09});

  /* CARRIER PLATE */
  const cShape = new THREE.Shape();
  cShape.absarc(0, 0, 3.5, 0, Math.PI*2, false);
  const cHub = new THREE.Path();
  cHub.absarc(0, 0, 2.0, 0, Math.PI*2, true);
  cShape.holes.push(cHub);
  pAngles.forEach(a => {
    const ch = new THREE.Path();
    ch.absarc(Math.cos(a)*OR, Math.sin(a)*OR, 0.34, 0, Math.PI*2, true);
    cShape.holes.push(ch);
  });
  const gCarrier = new THREE.Mesh(
    new THREE.ExtrudeGeometry(cShape, {depth:.24, bevelEnabled:false}),
    mCase
  );
  gCarrier.position.set(0, 0, -0.56);
  rotGroup.add(gCarrier);
  parts.push({mesh:gCarrier, o:gCarrier.position.clone(), d:new THREE.Vector3(0,0,-2.8), spin:.167});

  /* BACK PLATE — ring flange */
  const bShape = new THREE.Shape();
  bShape.absarc(0, 0, 4.9, 0, Math.PI*2, false);
  const bRim = new THREE.Path();
  bRim.absarc(0, 0, 4.35, 0, Math.PI*2, true);
  bShape.holes.push(bRim);
  [0,1,2,3,4,5].forEach(i => {
    const a = (i/6)*Math.PI*2;
    const bh = new THREE.Path();
    bh.absarc(Math.cos(a)*4.62, Math.sin(a)*4.62, 0.20, 0, Math.PI*2, true);
    bShape.holes.push(bh);
  });
  const gBack = new THREE.Mesh(
    new THREE.ExtrudeGeometry(bShape, {depth:.36, bevelEnabled:false}),
    mCase
  );
  gBack.position.set(0, 0, -0.88);
  rotGroup.add(gBack);
  parts.push({mesh:gBack, o:gBack.position.clone(), d:new THREE.Vector3(0,0,-5.8), spin:0});

  /* FRONT COVER — ring with viewing window */
  const fShape = new THREE.Shape();
  fShape.absarc(0, 0, 4.9, 0, Math.PI*2, false);
  const fRim = new THREE.Path();
  fRim.absarc(0, 0, 3.9, 0, Math.PI*2, true);
  fShape.holes.push(fRim);
  [0,1,2,3,4,5].forEach(i => {
    const a = (i/6)*Math.PI*2;
    const bh = new THREE.Path();
    bh.absarc(Math.cos(a)*4.62, Math.sin(a)*4.62, 0.20, 0, Math.PI*2, true);
    fShape.holes.push(bh);
  });
  const gFront = new THREE.Mesh(
    new THREE.ExtrudeGeometry(fShape, {depth:.30, bevelEnabled:false}),
    mCase
  );
  gFront.position.set(0, 0, 0.87);
  rotGroup.add(gFront);
  parts.push({mesh:gFront, o:gFront.position.clone(), d:new THREE.Vector3(0,0,5.0), spin:0});

  /* 6 MOUNTING BOLTS */
  [0,1,2,3,4,5].forEach(i => {
    const a  = (i/6)*Math.PI*2;
    const bx = Math.cos(a)*4.62, by = Math.sin(a)*4.62;
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(.14,.14,2.15,8), mBrass);
    bolt.rotation.x = Math.PI/2;
    bolt.position.set(bx, by, 0.1);
    rotGroup.add(bolt);
    parts.push({mesh:bolt, o:bolt.position.clone(), d:new THREE.Vector3(bx*.1,by*.1,0), spin:0});
    const head = new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,.18,6), mBrass);
    head.rotation.x = Math.PI/2;
    head.position.set(bx, by, 1.02);
    rotGroup.add(head);
    parts.push({mesh:head, o:head.position.clone(), d:new THREE.Vector3(bx*.1,by*.1,1.5), spin:0});
  });

  /* SUN SHAFT */
  const sunShaft = new THREE.Mesh(new THREE.CylinderGeometry(.20,.20,5.2,16), mShaft);
  sunShaft.rotation.x = Math.PI/2;
  sunShaft.position.set(0, 0, 0.5);
  rotGroup.add(sunShaft);
  parts.push({mesh:sunShaft, o:sunShaft.position.clone(), d:new THREE.Vector3(0,0,0), spin:.50});

  /* PLANET SHAFTS */
  pAngles.forEach(a => {
    const psh = new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,2.2,12), mShaft);
    psh.rotation.x = Math.PI/2;
    psh.position.set(Math.cos(a)*OR, Math.sin(a)*OR, 0.09);
    rotGroup.add(psh);
    parts.push({mesh:psh, o:psh.position.clone(), d:new THREE.Vector3(Math.cos(a)*5.5,Math.sin(a)*5.5,1.5), spin:0});
  });

  /* BEARING RINGS on sun shaft */
  [-0.52, 0.98].forEach(z => {
    const br = new THREE.Mesh(new THREE.TorusGeometry(.34,.10,12,32), mBrass);
    br.position.set(0, 0, z);
    rotGroup.add(br);
    parts.push({mesh:br, o:br.position.clone(), d:new THREE.Vector3(0,0,z*3.2), spin:0});
  });

  /* OUTPUT FLANGE */
  const flange = new THREE.Mesh(new THREE.CylinderGeometry(.88,.88,.44,20), mSteel);
  flange.rotation.x = Math.PI/2;
  flange.position.set(0, 0, -1.55);
  rotGroup.add(flange);
  parts.push({mesh:flange, o:flange.position.clone(), d:new THREE.Vector3(0,0,-5.5), spin:.167});

  /* KEYWAY detail on output flange */
  const kw = new THREE.Mesh(new THREE.BoxGeometry(.14,.10,.46), mShaft);
  kw.position.set(.22, 0, -1.55);
  rotGroup.add(kw);
  parts.push({mesh:kw, o:kw.position.clone(), d:new THREE.Vector3(.6,0,-5.5), spin:0});

  /* INPUT SPROCKET ring */
  const spk = new THREE.Mesh(new THREE.TorusGeometry(1.25,.14,8,24), mSteel);
  spk.position.set(0, 0, 1.6);
  rotGroup.add(spk);
  parts.push({mesh:spk, o:spk.position.clone(), d:new THREE.Vector3(0,0,4.2), spin:.50});

  /* OUTER HOUSING RING — cylindrical shell */
  const hRing = new THREE.Mesh(new THREE.TorusGeometry(4.62,.28,16,48), mCase);
  rotGroup.add(hRing);
  parts.push({mesh:hRing, o:hRing.position.clone(), d:new THREE.Vector3(0,0,0), spin:0});

  /* Mouse / touch drag */
  canvas.addEventListener('mousedown', e => {
    isDragging = true; prevMouse = {x:e.clientX, y:e.clientY};
  });
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    rotGroup.rotation.y += (e.clientX - prevMouse.x) * .010;
    rotGroup.rotation.x += (e.clientY - prevMouse.y) * .007;
    rotGroup.rotation.x = Math.max(-.9, Math.min(.9, rotGroup.rotation.x));
    prevMouse = {x:e.clientX, y:e.clientY};
  });
  canvas.addEventListener('touchstart', e => {
    isDragging = true; prevMouse = {x:e.touches[0].clientX, y:e.touches[0].clientY};
  }, {passive:true});
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    rotGroup.rotation.y += (e.touches[0].clientX - prevMouse.x) * .010;
    prevMouse = {x:e.touches[0].clientX, y:e.touches[0].clientY};
  }, {passive:true});

  window.addEventListener('resize', () => {
    const W2 = parent.clientWidth||640, H2 = parent.clientHeight||580;
    camera.aspect = W2/H2; camera.updateProjectionMatrix(); renderer.setSize(W2, H2);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05);
  floatT += dt;

  if (!isDragging && currentMode === 'rotate') {
    rotGroup.rotation.y += .004;
    rotGroup.position.y = Math.sin(floatT*.52) * .20;
    rotGroup.position.x = Math.sin(floatT*.38) * .06;
  }

  parts.forEach(p => { if (p.spin !== 0) p.mesh.rotation.z += p.spin * dt; });

  if (exploding && explodeT < 1) {
    explodeT = Math.min(1, explodeT + dt*.55);
    applyExplode(explodeT);
  } else if (!exploding && explodeT > 0) {
    explodeT = Math.max(0, explodeT - dt*.80);
    applyExplode(explodeT);
  }

  renderer.render(scene, camera);
}

function applyExplode(t) {
  const e = t < .5 ? 2*t*t : -1 + (4-2*t)*t;
  parts.forEach(p => {
    p.mesh.position.x = p.o.x + p.d.x * 3.0 * e;
    p.mesh.position.y = p.o.y + p.d.y * 3.0 * e;
    p.mesh.position.z = p.o.z + p.d.z * 3.0 * e;
  });
}

function setMode(m) {
  currentMode = m;
  if (m === 'explode') exploding = true;
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  const b = document.getElementById('btn-'+m); if (b) b.classList.add('active');
}

function resetModel() {
  exploding = false; currentMode = 'rotate';
  rotGroup.rotation.set(.32, 0, 0); rotGroup.position.set(0,0,0);
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  const rb = document.getElementById('btn-rotate'); if (rb) rb.classList.add('active');
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO FILTER
═══════════════════════════════════════════════════════════════ */
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(c => {
        const show = f === 'all' || c.dataset.cat === f;
        c.style.opacity    = show ? '1' : '0.22';
        c.style.transform  = show ? '' : 'scale(.97)';
        c.style.transition = 'opacity .3s, transform .3s';
        c.style.pointerEvents = show ? '' : 'none';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════════ */
function initScroll() {
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar').forEach(b => b.style.width = b.dataset.width);
      }
    });
  }, {threshold:.25});
  const sg = document.getElementById('skillsGrid'); if (sg) barObs.observe(sg);

  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+cur));
  });
}

/* ═══════════════════════════════════════════════════════════════
   IMAGE CAROUSEL
═══════════════════════════════════════════════════════════════ */
function initCarousel() {
  document.querySelectorAll('.card-gallery').forEach(gallery => {
    const track  = gallery.querySelector('.gallery-track');
    const slides = gallery.querySelectorAll('.gallery-slide');
    const dotsEl = gallery.querySelector('.gallery-dots');
    const prevBtn= gallery.querySelector('.gallery-prev');
    const nextBtn= gallery.querySelector('.gallery-next');
    if (!track) return;

    const count = slides.length;
    if (count <= 1) { gallery.classList.add('gallery-single'); return; }

    // Build dot indicators
    if (dotsEl) {
      for (let i=0; i<count; i++) {
        const d = document.createElement('button');
        d.className = 'gallery-dot' + (i===0?' active':'');
        d.setAttribute('aria-label','Slide '+(i+1));
        dotsEl.appendChild(d);
      }
    }

    let current = 0;
    function goTo(n) {
      current = ((n % count) + count) % count;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      if (dotsEl) dotsEl.querySelectorAll('.gallery-dot').forEach((d,i) => d.classList.toggle('active', i===current));
    }

    if (prevBtn) prevBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current-1); });
    if (nextBtn) nextBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current+1); });
    if (dotsEl)  dotsEl.addEventListener('click', e => {
      const dots = [...dotsEl.querySelectorAll('.gallery-dot')];
      const idx = dots.indexOf(e.target);
      if (idx >= 0) { e.stopPropagation(); goTo(idx); }
    });

    // Touch swipe
    let startX = 0;
    gallery.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
    gallery.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    }, {passive:true});
  });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAV
═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const btn    = document.getElementById('navHamburger');
  const drawer = document.getElementById('navMobile');
  if (!btn || !drawer) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    drawer.classList.toggle('open');
  });
}
function closeMobileNav() {
  const btn    = document.getElementById('navHamburger');
  const drawer = document.getElementById('navMobile');
  if (btn)    btn.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang') || 'en');
  initCursor();
  initScroll();
  initFilter();
  initCarousel();
  initMobileNav();
  setTimeout(initThree, 120);
});
