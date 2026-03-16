/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const LANG = {
  el: {
    nav_about:'Σχετικά', nav_projects:'Έργα', nav_software:'Λογισμικό',
    nav_experience:'Σπουδές', nav_contact:'Επικοινωνία',
    hero_tag:'// Μηχανολόγος Μηχανικός — Παγκράτι, Αθήνα',
    hero_title:'Μηχανολογικός Σχεδιασμός · 3D Printing · Διαχείριση Έργων',
    hero_desc:'Ιδρυτής της <strong>Expertease</strong> — σχεδιασμός μηχανών και κατασκευών, rapid prototyping, φύλλα μετάλλου, BOM και διαχείριση έργων, από την Αθήνα.',
    hero_cta_work:'Δείτε τα Έργα →', hero_cta_contact:'Επικοινωνήστε',
    stat_years:'Χρόνια Εμπειρίας', stat_projects:'Ολοκληρωμένα Έργα', stat_degrees:'Μεταπτυχιακοί Τίτλοι',
    viewer_hint:'σύρτε για περιστροφή',
    edu_strip:'Ακαδημαϊκό Υπόβαθρο — 5 Πανεπιστήμια σε 3 Χώρες',
    edu1_deg:'BEng', edu1_name:'Μηχανολόγος Μηχανικός',
    edu2_deg:'MSc', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc', edu3_name:'IFP School',
    edu4_deg:'MSc', edu4_name:'Διεθνές Πανεπιστήμιο Ελλάδος',
    edu5_deg:'MBA', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'Σχετικά',
    about_p1:'Είμαι ο <strong>Δημήτριος Μουδιώτης</strong>, Μηχανολόγος Μηχανικός αποφοίτου <strong>ΑΠΘ</strong>, με 7 χρόνια εμπειρίας και τέσσερις μεταπτυχιακούς τίτλους: δύο MSc στη Γαλλία (École Centrale Paris & IFP School), MSc Σχεδιασμού Προϊόντων στο ΔΙΠαΕ και MBA Ηγεσίας & Project Management στις ΗΠΑ.',
    about_quote:'«Η μηχανική είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που μπορείς να κρατήσεις στα χέρια σου.»',
    about_p2:'Μέσω της <strong>Expertease</strong> αναλαμβάνω τον πλήρη κύκλο ζωής ενός προϊόντος — από τον αρχικό σχεδιασμό και το BOM, μέχρι την τρισδιάστατη εκτύπωση, την κατεργασία φύλλων μετάλλου και τη διαχείριση έργου.',
    about_p3:'Έδρα: <strong>Παγκράτι, Αθήνα</strong> — Αναλαμβάνω έργα σε Ελλάδα και εξωτερικό.',
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
    footer_copy:'© 2026 Δημήτριος Μουδιώτης — Expertease', footer_loc:'Παγκράτι, Αθήνα',
  },
  en: {
    nav_about:'About', nav_projects:'Work', nav_software:'Software',
    nav_experience:'Education', nav_contact:'Contact',
    hero_tag:'// Mechanical Engineer — Pagrati, Athens GR',
    hero_title:'Mechanical Design · 3D Printing · Project Management',
    hero_desc:'Founder of <strong>Expertease</strong> — machine design, sheet metal, rapid prototyping, BOM, and project management. Based in Pagrati, Athens.',
    hero_cta_work:'View Work →', hero_cta_contact:'Get in Touch',
    stat_years:'Years Experience', stat_projects:'Projects Delivered', stat_degrees:'Postgrad Degrees',
    viewer_hint:'drag to rotate',
    edu_strip:'Academic Background — 5 Universities in 3 Countries',
    edu1_deg:'BEng', edu1_name:'Mechanical Engineering',
    edu2_deg:'MSc', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc', edu3_name:'IFP School',
    edu4_deg:'MSc', edu4_name:'Int\'l Hellenic University',
    edu5_deg:'MBA', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'About',
    about_p1:'I\'m <strong>Dimitrios Moudiotis</strong>, a Mechanical Engineer from <strong>AUTH</strong> with 7 years of experience and four postgraduate degrees: two MSc in France (École Centrale Paris & IFP School), an MSc in Product Design from IHU, and an MBA in Leadership & Project Management from the USA.',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'Through <strong>Expertease</strong> I cover the full product lifecycle — from initial design and BOM to 3D printing, sheet metal fabrication, and project management.',
    about_p3:'Based in <strong>Pagrati, Athens</strong> — available for projects across Greece and internationally.',
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
    footer_copy:'© 2026 Dimitrios Moudiotis — Expertease', footer_loc:'Pagrati, Athens',
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
    ['badge','cat','title','desc','link'].forEach(k=>{ if(t[`${p}_${k}`]) set(`${p}-${k}`,t[`${p}_${k}`]); });
  });
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label); set('sw-desc',t.sw_desc,false);
  set('sw-desc',t.sw_desc);
  for(let i=1;i<=8;i++) set(`sw-f${i}`,t[`sw_f${i}`]);
  set('sw-cta1',t.sw_cta1); set('sw-cta2',t.sw_cta2);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading);
  set('contact-sub',t.contact_sub);
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR — direct position, lagging ring via RAF
═══════════════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my;

  // Move dot instantly
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Ring follows with lerp
  (function lerp() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();

  // Hover states
  function addHover(sel) {
    document.querySelectorAll(sel).forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    });
  }
  addHover('a, button, .project-card, .skill-item, .vctrl, .edu-card, .filter-btn');

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => { dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity='1'; ring.style.opacity='1'; });
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS — COMPLEX FLOATING GEAR MACHINE
═══════════════════════════════════════════════════════════════ */
let scene, camera, renderer, parts=[], clock;
let explodeT=0, exploding=false, isDragging=false;
let prevMouse={x:0,y:0}, rotGroup, floatT=0;
let currentMode='rotate';

function makeGear(teeth, innerR, toothH, hubR, spokes) {
  const s = new THREE.Shape();
  const step = (Math.PI*2)/teeth;
  for(let i=0;i<teeth;i++){
    const a0=i*step-step*.42, a1=i*step-step*.16;
    const a2=i*step+step*.16, a3=i*step+step*.42;
    const p = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? s.moveTo(...p(a0,innerR)) : s.lineTo(...p(a0,innerR));
    s.lineTo(...p(a1,innerR+toothH));
    s.lineTo(...p(a2,innerR+toothH));
    s.lineTo(...p(a3,innerR));
  }
  s.closePath();
  // Hub hole
  const hub=new THREE.Path(); hub.absarc(0,0,hubR,0,Math.PI*2,true); s.holes.push(hub);
  // Spoke holes
  const n = spokes||Math.max(4,Math.floor(teeth/3));
  for(let i=0;i<n;i++){
    const a=(i/n)*Math.PI*2, r=innerR*.55, sr=innerR*.13;
    const sh=new THREE.Path(); sh.absarc(Math.cos(a)*r,Math.sin(a)*r,sr,0,Math.PI*2,true);
    s.holes.push(sh);
  }
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
  renderer.setClearColor(0x000000, 0);   // fully transparent — hero bg shows through
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();           // no background, no fog

  camera = new THREE.PerspectiveCamera(40, W/H, 0.1, 300);
  camera.position.set(0, 1.5, 18);
  camera.lookAt(0, 0.5, 0);
  clock = new THREE.Clock();

  /* Lights */
  scene.add(new THREE.AmbientLight(0xb0c8e8, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.5);
  key.position.set(8, 14, 10); key.castShadow=true;
  key.shadow.mapSize.set(2048,2048);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x4a80d0, 0.55);
  fill.position.set(-10, 3, -7); scene.add(fill);
  const rim  = new THREE.PointLight(0xc83030, 0.9, 40);
  rim.position.set(-4, 7, -8); scene.add(rim);
  const bot  = new THREE.PointLight(0x1a60c0, 0.45, 35);
  bot.position.set(5, -7, 5); scene.add(bot);

  rotGroup = new THREE.Group();
  rotGroup.rotation.x = 0.22;   // slight tilt so we see the top face
  scene.add(rotGroup);

  /* Materials */
  const mSteel = new THREE.MeshStandardMaterial({color:0x4a5568,metalness:.93,roughness:.16});
  const mBlue  = new THREE.MeshStandardMaterial({color:0x1a3a72,metalness:.9, roughness:.14});
  const mRed   = new THREE.MeshStandardMaterial({color:0x7a1818,metalness:.88,roughness:.2});
  const mBrass = new THREE.MeshStandardMaterial({color:0x8a7038,metalness:.96,roughness:.09});
  const mShaft = new THREE.MeshStandardMaterial({color:0x58606e,metalness:.97,roughness:.09});
  const mCase  = new THREE.MeshStandardMaterial({color:0x262e3e,metalness:.72,roughness:.32});

  const ext  = {depth:.72,bevelEnabled:true,bevelThickness:.05,bevelSize:.04,bevelSegments:4};
  const extS = {depth:.38,bevelEnabled:true,bevelThickness:.03,bevelSize:.03,bevelSegments:3};

  /* ── GEARS ── */
  // G1: big drive gear 20t
  const g1 = new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(20,2.9,.52,.36,6),ext), mSteel);
  g1.position.set(-1.6,0,0); g1.castShadow=true; rotGroup.add(g1);
  parts.push({mesh:g1, o:g1.position.clone(), d:new THREE.Vector3(-2.8,0,1.4), spin:.32});

  // G2: medium driven gear 13t
  const g2 = new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(13,1.85,.48,.28,5),ext), mBlue);
  g2.position.set(2.7,0,0); g2.castShadow=true; rotGroup.add(g2);
  parts.push({mesh:g2, o:g2.position.clone(), d:new THREE.Vector3(2.4,.4,.9), spin:-.49});

  // G3: small top gear 9t
  const g3 = new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(9,1.15,.42,.22,4),extS), mBrass);
  g3.position.set(2.7,3.2,.18); g3.castShadow=true; rotGroup.add(g3);
  parts.push({mesh:g3, o:g3.position.clone(), d:new THREE.Vector3(1.8,3.4,1.8), spin:.78});

  // G4: idler gear 11t
  const g4 = new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(11,1.48,.44,.24,4),extS), mRed);
  g4.position.set(.48,2.35,.12); g4.castShadow=true; rotGroup.add(g4);
  parts.push({mesh:g4, o:g4.position.clone(), d:new THREE.Vector3(.2,3.0,-1.4), spin:-.63});

  // G5: tiny output pinion 7t
  const g5 = new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(7,.78,.38,.16,3),extS), mBrass);
  g5.position.set(-1.6,2.9,.12); g5.castShadow=true; rotGroup.add(g5);
  parts.push({mesh:g5, o:g5.position.clone(), d:new THREE.Vector3(-1.8,3.8,-1.2), spin:.54});

  /* ── SHAFTS ── */
  [[-.1.6,0,3.5,mShaft],[2.7,0,3.2,mShaft],[2.7,3.2,2.8,mShaft],[-1.6,2.9,2.6,mShaft]].forEach(([x,y,l,m])=>{
    const sh = new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,l,20), m);
    sh.rotation.x=Math.PI/2; sh.position.set(x,y,.36); rotGroup.add(sh);
    parts.push({mesh:sh, o:sh.position.clone(), d:new THREE.Vector3(x*.2,y*.1,-2.5), spin:0});
  });

  /* ── HOUSING BACK PLATE ── */
  const hShape = new THREE.Shape();
  hShape.moveTo(-4.8,-2.6); hShape.lineTo(4.8,-2.6); hShape.lineTo(4.8,5.5); hShape.lineTo(-4.8,5.5); hShape.closePath();
  [[−1.6,0,3.3],[2.7,0,2.3],[2.7,3.2,1.7],[.48,2.35,2.0],[-1.6,2.9,1.6]].forEach(([x,y,r])=>{
    const h=new THREE.Path(); h.absarc(x,y,r,0,Math.PI*2,true); hShape.holes.push(h);
  });
  [[-4.2,-2.1],[4.2,-2.1],[4.2,5.0],[-4.2,5.0]].forEach(([x,y])=>{
    const b=new THREE.Path(); b.absarc(x,y,.24,0,Math.PI*2,true); hShape.holes.push(b);
  });
  const bp = new THREE.Mesh(new THREE.ExtrudeGeometry(hShape,{depth:.28,bevelEnabled:false}),mCase);
  bp.position.set(0,0,-.7); rotGroup.add(bp);
  parts.push({mesh:bp, o:bp.position.clone(), d:new THREE.Vector3(0,0,-3.8), spin:0});

  /* ── FRONT COVER ── */
  const fShape = new THREE.Shape();
  fShape.moveTo(-4.8,-2.6); fShape.lineTo(4.8,-2.6); fShape.lineTo(4.8,5.5); fShape.lineTo(-4.8,5.5); fShape.closePath();
  [[−1.6,0,2.7],[2.7,0,1.65],[2.7,3.2,1.3],[.48,2.35,1.55],[-1.6,2.9,1.3]].forEach(([x,y,r])=>{
    const h=new THREE.Path(); h.absarc(x,y,r,0,Math.PI*2,true); fShape.holes.push(h);
  });
  [[-4.2,-2.1],[4.2,-2.1],[4.2,5.0],[-4.2,5.0]].forEach(([x,y])=>{
    const b=new THREE.Path(); b.absarc(x,y,.24,0,Math.PI*2,true); fShape.holes.push(b);
  });
  const fp = new THREE.Mesh(new THREE.ExtrudeGeometry(fShape,{depth:.22,bevelEnabled:false}),mCase);
  fp.position.set(0,0,1.06); rotGroup.add(fp);
  parts.push({mesh:fp, o:fp.position.clone(), d:new THREE.Vector3(0,0,3.5), spin:0});

  /* ── BOLTS ── */
  [[-4.2,-2.1],[4.2,-2.1],[4.2,5.0],[-4.2,5.0]].forEach(([x,y])=>{
    const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,2.3,12),mBrass);
    bolt.rotation.x=Math.PI/2; bolt.position.set(x,y,.18); rotGroup.add(bolt);
    parts.push({mesh:bolt, o:bolt.position.clone(), d:new THREE.Vector3(x*.35,y*.28,0), spin:0});
    // bolt head
    const head=new THREE.Mesh(new THREE.CylinderGeometry(.28,.28,.14,6),mBrass);
    head.rotation.x=Math.PI/2; head.position.set(x,y,1.22); rotGroup.add(head);
    parts.push({mesh:head, o:head.position.clone(), d:new THREE.Vector3(x*.35,y*.28,1.5), spin:0});
  });

  /* ── BEARING RINGS ── */
  [[−1.6,0],[2.7,0],[2.7,3.2],[-1.6,2.9]].forEach(([x,y])=>{
    [-1.4,1.3].forEach(z=>{
      const r=new THREE.Mesh(new THREE.TorusGeometry(.36,.1,12,30),mBrass);
      r.position.set(x,y,z); rotGroup.add(r);
      parts.push({mesh:r, o:r.position.clone(), d:new THREE.Vector3(x*.2,y*.12,z*1.9), spin:0});
    });
  });

  /* ── OUTPUT FLANGE ── */
  const fl=new THREE.Mesh(new THREE.CylinderGeometry(.88,.88,.38,20),mSteel);
  fl.rotation.x=Math.PI/2; fl.position.set(-1.6,0,-1.3); rotGroup.add(fl);
  parts.push({mesh:fl, o:fl.position.clone(), d:new THREE.Vector3(-1.6,0,-3.2), spin:.32});

  /* ── CHAIN/BELT LINK between g2 and g3 ── */
  const lkGeo=new THREE.TorusGeometry(.22,.07,8,20);
  for(let i=0;i<6;i++){
    const t=i/6, a=t*Math.PI*.6+Math.PI*.7;
    const lk=new THREE.Mesh(lkGeo,mShaft);
    lk.position.set(2.4+Math.cos(a)*.3, 1.6+Math.sin(a)*1.5, .36);
    lk.rotation.z=a; rotGroup.add(lk);
    parts.push({mesh:lk, o:lk.position.clone(), d:new THREE.Vector3(3.5,1.5*t,1), spin:0});
  }

  /* Mouse / touch drag */
  canvas.addEventListener('mousedown',  e=>{isDragging=true; prevMouse={x:e.clientX,y:e.clientY};});
  window.addEventListener('mouseup',    ()=>isDragging=false);
  window.addEventListener('mousemove',  e=>{
    if(!isDragging) return;
    rotGroup.rotation.y += (e.clientX-prevMouse.x)*.010;
    rotGroup.rotation.x += (e.clientY-prevMouse.y)*.007;
    rotGroup.rotation.x = Math.max(-.9,Math.min(.9,rotGroup.rotation.x));
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('touchstart', e=>{isDragging=true; prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('touchend',   ()=>isDragging=false);
  window.addEventListener('touchmove',  e=>{
    if(!isDragging) return;
    rotGroup.rotation.y+=(e.touches[0].clientX-prevMouse.x)*.010;
    prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};
  },{passive:true});

  window.addEventListener('resize',()=>{
    const W2=parent.clientWidth||640, H2=parent.clientHeight||580;
    camera.aspect=W2/H2; camera.updateProjectionMatrix(); renderer.setSize(W2,H2);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05);
  floatT += dt;

  // Auto-rotate + float
  if (!isDragging && currentMode==='rotate') {
    rotGroup.rotation.y += .003;
    rotGroup.position.y = Math.sin(floatT*.55)*.22;
    rotGroup.position.x = Math.sin(floatT*.38)*.07;
  }

  // Spin gears
  parts.forEach(p=>{ if(p.spin!==0) p.mesh.rotation.z += p.spin*dt; });

  // Explode/collapse
  if (exploding && explodeT<1) { explodeT=Math.min(1,explodeT+dt*.6); applyExplode(explodeT); }
  else if (!exploding && explodeT>0) { explodeT=Math.max(0,explodeT-dt*.85); applyExplode(explodeT); }

  renderer.render(scene, camera);
}

function applyExplode(t) {
  const e=t<.5?2*t*t:-1+(4-2*t)*t;
  parts.forEach(p=>{
    p.mesh.position.x=p.o.x+p.d.x*3.0*e;
    p.mesh.position.y=p.o.y+p.d.y*3.0*e;
    p.mesh.position.z=p.o.z+p.d.z*3.0*e;
  });
}

function setMode(m) {
  currentMode=m;
  if(m==='explode') exploding=true;
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const b=document.getElementById('btn-'+m); if(b) b.classList.add('active');
}
function resetModel() {
  exploding=false; currentMode='rotate';
  rotGroup.rotation.set(.22,0,0); rotGroup.position.set(0,0,0);
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate'); if(rb) rb.classList.add('active');
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO FILTER
═══════════════════════════════════════════════════════════════ */
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(c=>{
        const show=f==='all'||c.dataset.cat===f;
        c.style.opacity=show?'1':'0.22';
        c.style.transform=show?'':'scale(.97)';
        c.style.transition='opacity .3s,transform .3s';
        c.style.pointerEvents=show?'':'none';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════════ */
function initScroll() {
  const barObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.skill-bar').forEach(b=>b.style.width=b.dataset.width); });
  },{threshold:.25});
  const sg=document.getElementById('skillsGrid'); if(sg) barObs.observe(sg);

  const sections=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll',()=>{
    let cur='';
    sections.forEach(s=>{ if(window.scrollY>=s.offsetTop-140) cur=s.id; });
    links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang')||'el');
  initCursor();
  initScroll();
  initFilter();
  // Delay Three.js slightly so DOM + fonts settle
  setTimeout(initThree, 120);
});