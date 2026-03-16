/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const LANG = {
  el: {
    nav_about: 'Σχετικά', nav_projects: 'Έργα',
    nav_software: 'Λογισμικό', nav_experience: 'Σπουδές', nav_contact: 'Επικοινωνία',

    hero_tag:   '// Μηχανολόγος Μηχανικός — Παγκράτι, Αθήνα',
    hero_title: 'Μηχανολογικός Σχεδιασμός · 3D Printing · Διαχείριση Έργων',
    hero_desc:  'Ιδρυτής της <strong>Expertease</strong> — σχεδιασμός μηχανών, εφαρμογές φύλλων μετάλλου, ταχεία πρωτοτυποποίηση, BOM και διαχείριση έργων. Έδρα: Παγκράτι, Αθήνα.',
    hero_cta_work: 'Δείτε τα Έργα →', hero_cta_contact: 'Επικοινωνήστε',
    stat_years: 'Χρόνια Εμπειρίας', stat_projects: 'Ολοκληρωμένα Έργα', stat_degrees: 'Μεταπτυχιακοί Τίτλοι',
    viewer_hint: 'σύρτε για περιστροφή',

    about_heading: 'Σχετικά',
    about_p1: 'Είμαι ο <strong>Δημήτριος Μουδιώτης</strong>, Μηχανολόγος Μηχανικός αποφοίτου <strong>ΑΠΘ</strong> με τέσσερις μεταπτυχιακούς τίτλους: δύο MSc στη Γαλλία, ένα MSc Σχεδιασμού Προϊόντων στην Ελλάδα και MBA σε Ηγεσία & Διαχείριση Έργων στις ΗΠΑ.',
    about_quote: '«Η μηχανική δεν είναι μόνο τεχνική — είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που μπορείς να κρατήσεις στα χέρια σου.»',
    about_p2: 'Μέσω της <strong>Expertease</strong> προσφέρω μηχανολογικό σχεδιασμό, BOM, τρισδιάστατη εκτύπωση, κατεργασία φύλλων μετάλλου και διαχείριση έργων — καλύπτοντας τον πλήρη κύκλο ζωής ενός προϊόντος.',
    about_p3: 'Βάση: <strong>Παγκράτι, Αθήνα</strong> — Διαθέσιμος για έργα σε Ελλάδα και εξωτερικό.',

    projects_heading: 'Έργα',
    filter_all: 'Όλα', filter_robotics: 'Ρομποτική', filter_3dprint: '3D Printing',
    filter_metal: 'Φύλλα Μετάλλου', filter_safety: 'Ασφάλεια',

    p1_badge: 'Ναυαρχίδα', p1_cat: 'Ρομποτική · Ηλεκτρονικά · Κατασκευή',
    p1_title: 'Αρθρωτό Ρομπότ Ι',
    p1_desc: 'Τροχήλατο ρομπότ με 3 μπαταρίες μολύβδου, τροφοδοσία 36V, ηλιακό πάνελ, 4 κάμερες, αισθητήρες, ισχυρά LED. Laser cut χάλυβας, βιοδιασπάσιμη PLA, ξύλο. Αδιάβροχο & αντισκονικό.',
    p1_link: 'Δείτε Έργο →',
    p2_cat: 'Ρομποτική · Μηχανισμοί', p2_title: 'Αρθρωτό Ρομπότ ΙΙ',
    p2_desc: 'Omni-wheels και σερβο-κινούμενοι ρομποτικοί βραχίονες. Κινείται σε στενούς χώρους με ακρίβεια.', p2_link: 'Δείτε →',
    p3_cat: 'Ασφάλεια · Εκπαίδευση', p3_title: 'Διπλός Simulator Ζώνης',
    p3_desc: 'Νιώστε πώς είναι να χτυπάτε τοίχο στα 12km/h — για δύο επιβάτες ταυτόχρονα.', p3_link: 'Δείτε →',
    p4_cat: 'Ασφάλεια · Προσομοίωση', p4_title: 'Rollcar Simulator',
    p4_desc: 'Προσομοιωτής ανατροπής αυτοκινήτου. Αυτοκίνητο στην κορυφή, ο χρήστης κυλά μέσα σε αυτό. Εκδόσεις Ι & ΙΙ (έως 20rpm).', p4_link: 'Δείτε →',
    p5_cat: 'Δυναμική · Δομές', p5_title: '1D Αρμονικός Διεγέρτης',
    p5_desc: 'Δόνηση κατασκευής 450kg μονοδιευθυντικά, έως 20Hz. Αναποδογυρίστε τον για τις 3 διευθύνσεις.', p5_link: 'Δείτε →',
    p6_cat: 'Φύλλα Μετάλλου', p6_title: 'Εφαρμογές Φύλλων Μετάλλου',
    p6_desc: 'Laser cutting & brake press. Από διακοσμητικά τοίχου LED έως καλάθια καυσόξυλων από 1.5mm χάλυβα.', p6_link: 'Δείτε →',
    p7_badge: '3D Printing', p7_cat: 'Ταχεία Πρωτοτυποποίηση · Δημιουργικός Σχεδιασμός',
    p7_title: 'Σειρά 3D Printed Έργων',
    p7_desc: 'Jet turbine fan, αυτόματος τροφοδότης κατοικίδιων (Arduino), εργαλεία DIY, επέκταση μηχανισμών (reverse engineering), custom μοτοσυκλετιστικά αξεσουάρ — όλα fully 3D printed.',
    p7_link: 'Δείτε Σειρά →',
    p8_cat: '3D Print · Ακρίβεια', p8_title: 'Slingshot Τυφέκιο',
    p8_desc: 'Modular slingshot τυφέκιο με 3D-printed εξαρτήματα, σύστημα στόχου και οπτικό στόχαστρο.', p8_link: 'Δείτε →',
    p9_cat: 'FEA · Τεχνική Τεκμηρίωση', p9_title: 'FEA & 2D Τεχνικά Σχέδια',
    p9_desc: 'Ανάλυση FEA, gear & shaft assemblies με εκκεντρικές μάζες, βάσεις χαλύβδινων κατασκευών υπό βαριά περιστροφική φόρτιση.', p9_link: 'Δείτε →',

    sw_heading: 'Λογισμικό',
    sw_label: 'Ενεργό Προϊόν · easemanual.eu',
    sw_desc: 'Ισχυρό, φιλικό λογισμικό που αυτοματοποιεί τη δημιουργία τεχνικής μελέτης για έκδοση άδειας κυκλοφορίας οχημάτων ειδικής χρήσης — σύμφωνα με ΥΑ 80255/4693/19/2020. Φτιαγμένο από μηχανικούς για μηχανικούς.',
    sw_f1: 'Τεχνικοί υπολογισμοί', sw_f2: 'Διαγράμματα φόρτισης',
    sw_f3: 'Σχέδια οχημάτων A3', sw_f4: 'Αυτόματη μελέτη Word',
    sw_f5: 'Άξονες & εφεδρανισμοί', sw_f6: 'Ευστάθεια & πέδηση',
    sw_f7: 'Συγκολλήσεις & ελατήρια', sw_f8: 'Γερανοί & καλαθοφόρα',
    sw_cta1: 'Δείτε το Προϊόν →', sw_cta2: 'Τιμολόγηση',

    experience_heading: 'Σπουδές & Εμπειρία',
    exp1_role: 'Ιδρυτής & Μηχανολόγος Μηχανικός', exp1_company: 'Expertease — Παγκράτι, Αθήνα',
    exp1_b1: 'Μηχανολογικός σχεδιασμός μηχανών, εξαρτημάτων και βιομηχανικών κατασκευών',
    exp1_b2: 'Ταχεία πρωτοτυποποίηση με 3D printing (FDM, SLA, SLS)',
    exp1_b3: 'Εφαρμογές φύλλων μετάλλου — σχεδιασμός, DFM και τεχνική τεκμηρίωση',
    exp1_b4: 'Ανάπτυξη BOM, διαχείριση τεχνικών έργων και ανάπτυξη λογισμικού (easemanual.eu)',
    exp2_role: 'MBA — Ηγεσία & Διαχείριση Έργων', exp2_company: 'Αμερικανικό Πανεπιστήμιο, ΗΠΑ',
    exp2_b1: 'Εξειδίκευση σε στρατηγική ηγεσία, PM και επιχειρηματική ανάπτυξη',
    exp2_b2: 'PMP framework, Agile, MS Project και risk management',
    exp2_b3: 'Μελέτες σε διεθνές βιομηχανικό περιβάλλον',
    exp3_role: 'MSc — Σχεδιασμός Προϊόντων', exp3_company: 'Ελληνικό Πανεπιστήμιο',
    exp3_b1: 'Ανάπτυξη προϊόντων από τη σύλληψη έως την παραγωγή',
    exp3_b2: 'Ειδίκευση σε DFM, DFA και νέα προϊόντα',
    exp3_b3: 'Μηχανική, αισθητική σχεδιασμού, εργονομία',
    exp4_role: '2× MSc & Πτυχίο Μηχανολόγου Μηχανικού', exp4_company: 'Γαλλικά Πανεπιστήμια & ΑΠΘ, Θεσσαλονίκη',
    exp4_b1: 'Πτυχίο Μηχανολόγου Μηχανικού — Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ)',
    exp4_b2: 'Δύο MSc από γαλλικά πανεπιστήμια — μηχανική & βιομηχανικές εφαρμογές',

    contact_label: '// Ας Δουλέψουμε Μαζί',
    contact_heading: 'Έχετε ένα\nέργο στο νου;',
    contact_sub: 'Από τον σχεδιασμό ενός εξαρτήματος έως τη διαχείριση ενός ολόκληρου έργου — η Expertease είναι εδώ. Επικοινωνήστε μαζί μας.',
    footer_copy: '© 2026 Δημήτριος Μουδιώτης — Expertease',
    footer_loc: 'Παγκράτι, Αθήνα',
  },

  en: {
    nav_about: 'About', nav_projects: 'Work',
    nav_software: 'Software', nav_experience: 'Education', nav_contact: 'Contact',

    hero_tag:   '// Mechanical Engineer — Pagrati, Athens GR',
    hero_title: 'Mechanical Design · 3D Printing · Project Management',
    hero_desc:  'Founder of <strong>Expertease</strong> — machine design, sheet metal applications, rapid prototyping, BOM development, and project management. Based in Pagrati, Athens.',
    hero_cta_work: 'View Work →', hero_cta_contact: 'Get in Touch',
    stat_years: 'Years Experience', stat_projects: 'Projects Delivered', stat_degrees: 'Postgrad Degrees',
    viewer_hint: 'drag to rotate',

    about_heading: 'About',
    about_p1: 'I\'m <strong>Dimitrios Moudiotis</strong>, a Mechanical Engineer from <strong>AUTH</strong> with four postgraduate degrees: two MSc in France, one MSc in Product Design in Greece, and an MBA in Leadership & Project Management in the USA.',
    about_quote: '"Engineering is not just technical — it\'s the art of turning an idea into something you can hold in your hands."',
    about_p2: 'Through <strong>Expertease</strong> I deliver mechanical design, BOM development, 3D printing, sheet metal work, and project management — covering the full product lifecycle.',
    about_p3: 'Based in <strong>Pagrati, Athens</strong> — available for projects across Greece and internationally.',

    projects_heading: 'Work',
    filter_all: 'All', filter_robotics: 'Robotics', filter_3dprint: '3D Printing',
    filter_metal: 'Sheet Metal', filter_safety: 'Safety',

    p1_badge: 'Featured', p1_cat: 'Robotics · Electronics · Fabrication',
    p1_title: 'Modular Robot I',
    p1_desc: 'Tracked robot with 3 lead-acid batteries, 36V supply, solar panel, 4 cameras, sensors, powerful LEDs. Laser-cut steel, biodegradable PLA, wood. Dustproof & waterproof.',
    p1_link: 'View Project →',
    p2_cat: 'Robotics · Mechanisms', p2_title: 'Modular Robot II',
    p2_desc: 'Omni-wheels and large servo-driven robotic arms. Moves accurately in tight spaces.', p2_link: 'View →',
    p3_cat: 'Safety · Education', p3_title: 'Double Seatbelt Convincer',
    p3_desc: 'Feel what it\'s like to hit a wall at 12km/h — seats two passengers simultaneously.', p3_link: 'View →',
    p4_cat: 'Safety · Simulation', p4_title: 'Rollcar Simulator',
    p4_desc: 'Car rollover simulator. Place a car on top and roll inside it. Versions I & II (up to 20rpm).', p4_link: 'View →',
    p5_cat: 'Dynamics · Structures', p5_title: '1D Harmonic Exciter',
    p5_desc: 'Shake a structure with 450kg uni-directional loading, up to 20Hz. Flip it for all 3 axes.', p5_link: 'View →',
    p6_cat: 'Sheet Metal', p6_title: 'Sheet Metal Applications',
    p6_desc: 'Laser cutting & brake press. From LED wall décor to log baskets from 1.5mm steel.', p6_link: 'View →',
    p7_badge: '3D Printing', p7_cat: 'Rapid Prototyping · Creative Design',
    p7_title: '3D Printed Projects Series',
    p7_desc: 'Jet turbine fan, Arduino pet feeder, DIY tools, reverse-engineered extension parts, custom motorcycle accessories — all fully 3D printed.',
    p7_link: 'View Series →',
    p8_cat: '3D Print · Precision', p8_title: 'Slingshot Rifle',
    p8_desc: 'Modular slingshot rifle with 3D-printed parts, target system, and optical sight.', p8_link: 'View →',
    p9_cat: 'FEA · Technical Docs', p9_title: 'FEA & 2D Technical Drawings',
    p9_desc: 'FEA analysis, gear & shaft assemblies with eccentric masses, steel structures under heavy rotational loading.', p9_link: 'View →',

    sw_heading: 'Software',
    sw_label: 'Active Product · easemanual.eu',
    sw_desc: 'Powerful, user-friendly software automating the creation of technical studies for special-purpose vehicle licensing — per Greek regulation YA 80255/4693/19/2020. Built by engineers for engineers.',
    sw_f1: 'Technical calculations', sw_f2: 'Load diagrams',
    sw_f3: 'A3 vehicle drawings', sw_f4: 'Auto Word report',
    sw_f5: 'Shafts & bearings', sw_f6: 'Stability & braking',
    sw_f7: 'Welds & springs', sw_f8: 'Cranes & platforms',
    sw_cta1: 'View Product →', sw_cta2: 'Pricing',

    experience_heading: 'Education & Experience',
    exp1_role: 'Founder & Mechanical Engineer', exp1_company: 'Expertease — Pagrati, Athens',
    exp1_b1: 'Mechanical design of machines, components, and industrial structures',
    exp1_b2: 'Rapid prototyping via 3D printing (FDM, SLA, SLS)',
    exp1_b3: 'Sheet metal applications — design, DFM, and technical documentation',
    exp1_b4: 'BOM development, project management, and software product (easemanual.eu)',
    exp2_role: 'MBA — Leadership & Project Management', exp2_company: 'American University, USA',
    exp2_b1: 'Strategic leadership, PM, and business development',
    exp2_b2: 'PMP framework, Agile, MS Project, risk management',
    exp2_b3: 'Case studies in international industrial environments',
    exp3_role: 'MSc — Product Design', exp3_company: 'Greek University',
    exp3_b1: 'Product development from concept to production',
    exp3_b2: 'DFM, DFA, and new product development methodologies',
    exp3_b3: 'Engineering, design aesthetics, ergonomics',
    exp4_role: '2× MSc & BEng Mechanical Engineering', exp4_company: 'French Universities & AUTH, Thessaloniki',
    exp4_b1: 'BEng Mechanical Engineering — Aristotle University of Thessaloniki (AUTH)',
    exp4_b2: 'Two MSc from French universities — engineering & industrial applications',

    contact_label: '// Let\'s Work Together',
    contact_heading: 'Got a project\nin mind?',
    contact_sub: 'From designing a single component to managing an entire project — Expertease is here.',
    footer_copy: '© 2026 Dimitrios Moudiotis — Expertease',
    footer_loc: 'Pagrati, Athens',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE SWITCHER
═══════════════════════════════════════════════════════════════ */
function applyLang(lang) {
  const t = LANG[lang];
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    html ? el.innerHTML = val : el.textContent = val;
  };
  set('nav-about', t.nav_about); set('nav-projects', t.nav_projects);
  set('nav-software', t.nav_software); set('nav-experience', t.nav_experience); set('nav-contact', t.nav_contact);
  set('hero-tag', t.hero_tag); set('hero-title', t.hero_title);
  set('hero-desc', t.hero_desc, true);
  set('hero-cta-work', t.hero_cta_work); set('hero-cta-contact', t.hero_cta_contact);
  set('stat-years', t.stat_years); set('stat-projects', t.stat_projects); set('stat-degrees', t.stat_degrees);
  set('viewer-hint', t.viewer_hint);
  set('about-heading', t.about_heading);
  set('about-p1', t.about_p1, true); set('about-quote', t.about_quote);
  set('about-p2', t.about_p2, true); set('about-p3', t.about_p3, true);
  set('projects-heading', t.projects_heading);
  set('filter-all', t.filter_all); set('filter-robotics', t.filter_robotics);
  set('filter-3dprint', t.filter_3dprint); set('filter-metal', t.filter_metal); set('filter-safety', t.filter_safety);
  for (let i = 1; i <= 9; i++) {
    ['badge','cat','title','desc','link'].forEach(k => {
      if (t[`p${i}_${k}`]) set(`p${i}-${k}`, t[`p${i}_${k}`]);
    });
  }
  set('sw-heading', t.sw_heading); set('sw-label', t.sw_label);
  set('sw-desc', t.sw_desc);
  for (let i = 1; i <= 8; i++) set(`sw-f${i}`, t[`sw_f${i}`]);
  set('sw-cta1', t.sw_cta1); set('sw-cta2', t.sw_cta2);
  set('experience-heading', t.experience_heading);
  ['exp1','exp2','exp3','exp4'].forEach(e => {
    set(`${e}-role`, t[`${e}_role`]); set(`${e}-company`, t[`${e}_company`]);
    ['b1','b2','b3','b4'].forEach(b => { if (t[`${e}_${b}`]) set(`${e}-${b}`, t[`${e}_${b}`]); });
  });
  set('contact-label', t.contact_label); set('contact-heading', t.contact_heading);
  set('contact-sub', t.contact_sub);
  set('footer-copy', t.footer_copy); set('footer-loc', t.footer_loc);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS — INTERACTIVE 3D GEAR ASSEMBLY
═══════════════════════════════════════════════════════════════ */
let scene, camera, renderer, parts = [], explodeT = 0, exploding = false;
let isDragging = false, prevMouse = {x:0, y:0}, rotGroup;
let currentMode = 'rotate';

function buildGearProfile(teeth, outerR, innerR, toothH) {
  const shape = new THREE.Shape();
  const angleStep = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * angleStep - angleStep * 0.5;
    const a1 = i * angleStep - angleStep * 0.2;
    const a2 = i * angleStep + angleStep * 0.2;
    const a3 = i * angleStep + angleStep * 0.5;
    if (i === 0) shape.moveTo(Math.cos(a0)*innerR, Math.sin(a0)*innerR);
    else          shape.lineTo(Math.cos(a0)*innerR, Math.sin(a0)*innerR);
    shape.lineTo(Math.cos(a1)*(innerR+toothH), Math.sin(a1)*(innerR+toothH));
    shape.lineTo(Math.cos(a2)*(innerR+toothH), Math.sin(a2)*(innerR+toothH));
    shape.lineTo(Math.cos(a3)*innerR, Math.sin(a3)*innerR);
  }
  shape.closePath();
  // hole
  const hole = new THREE.Path();
  hole.absarc(0, 0, outerR * 0.18, 0, Math.PI*2, true);
  shape.holes.push(hole);
  return shape;
}

function initThree() {
  const canvas = document.getElementById('hero3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.parentElement.offsetWidth;
  const H = canvas.parentElement.offsetHeight || 600;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200);
  camera.position.set(0, 2, 14);
  camera.lookAt(0, 0, 0);

  // Lights
  scene.add(new THREE.AmbientLight(0x8fa3b1, 0.6));
  const dir = new THREE.DirectionalLight(0xd8dde3, 1.2);
  dir.position.set(6, 10, 8); dir.castShadow = true; scene.add(dir);
  const fill = new THREE.DirectionalLight(0x5b8db8, 0.4);
  fill.position.set(-8, -4, -6); scene.add(fill);
  const rim = new THREE.PointLight(0xb85b5b, 0.6, 30);
  rim.position.set(-4, 4, -4); scene.add(rim);

  rotGroup = new THREE.Group();
  scene.add(rotGroup);

  const matSteel = new THREE.MeshStandardMaterial({
    color: 0x3d444d, metalness: 0.85, roughness: 0.25
  });
  const matBlue = new THREE.MeshStandardMaterial({
    color: 0x2a4a6b, metalness: 0.9, roughness: 0.2
  });
  const matRed = new THREE.MeshStandardMaterial({
    color: 0x6b2a2a, metalness: 0.85, roughness: 0.3
  });
  const matShaft = new THREE.MeshStandardMaterial({
    color: 0x4a5260, metalness: 0.95, roughness: 0.15
  });

  const extSettings = { depth: 0.6, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3 };

  // Big gear
  const bigGearGeo = new THREE.ExtrudeGeometry(buildGearProfile(18, 3.2, 2.6, 0.45), extSettings);
  const bigGear = new THREE.Mesh(bigGearGeo, matSteel);
  bigGear.position.set(-1.2, 0, 0);
  bigGear.castShadow = true;
  rotGroup.add(bigGear);
  parts.push({ mesh: bigGear, origin: bigGear.position.clone(), explodeDir: new THREE.Vector3(-1.2, 0, 0.8), spinSpeed: 0.4 });

  // Small gear
  const smallGearGeo = new THREE.ExtrudeGeometry(buildGearProfile(11, 1.9, 1.5, 0.4), extSettings);
  const smallGear = new THREE.Mesh(smallGearGeo, matBlue);
  smallGear.position.set(2.4, 0, 0);
  smallGear.castShadow = true;
  rotGroup.add(smallGear);
  parts.push({ mesh: smallGear, origin: smallGear.position.clone(), explodeDir: new THREE.Vector3(1.4, 0.2, 0.6), spinSpeed: -0.65 });

  // Shaft 1
  const shaftGeo = new THREE.CylinderGeometry(0.22, 0.22, 3.2, 20);
  const shaft1 = new THREE.Mesh(shaftGeo, matShaft);
  shaft1.position.set(-1.2, 0, 0.3); shaft1.rotation.x = Math.PI / 2;
  rotGroup.add(shaft1);
  parts.push({ mesh: shaft1, origin: shaft1.position.clone(), explodeDir: new THREE.Vector3(-1.5, 0, -1.2), spinSpeed: 0 });

  // Shaft 2
  const shaft2 = new THREE.Mesh(shaftGeo.clone(), matShaft);
  shaft2.position.set(2.4, 0, 0.3); shaft2.rotation.x = Math.PI / 2;
  rotGroup.add(shaft2);
  parts.push({ mesh: shaft2, origin: shaft2.position.clone(), explodeDir: new THREE.Vector3(1.8, 0, -1.2), spinSpeed: 0 });

  // Housing plate
  const plateGeo = new THREE.BoxGeometry(7.8, 5.2, 0.25);
  const plate = new THREE.Mesh(plateGeo, matRed);
  plate.position.set(0.6, 0, -0.5);
  rotGroup.add(plate);
  parts.push({ mesh: plate, origin: plate.position.clone(), explodeDir: new THREE.Vector3(0, 0, -2.5), spinSpeed: 0 });

  // Bearing rings
  [[-1.2, 1.3], [2.4, 1.3], [-1.2, -1.3], [2.4, -1.3]].forEach(([x,y]) => {
    const ringGeo = new THREE.TorusGeometry(0.38, 0.1, 12, 28);
    const ring = new THREE.Mesh(ringGeo, matShaft);
    ring.position.set(x, y, 0.32);
    rotGroup.add(ring);
    parts.push({ mesh: ring, origin: ring.position.clone(), explodeDir: new THREE.Vector3(x*0.3, y*0.5, 1.5), spinSpeed: 0 });
  });

  // Grid floor
  const grid = new THREE.GridHelper(20, 20, 0x2a2f35, 0x2a2f35);
  grid.position.y = -4; scene.add(grid);

  // Drag rotation
  canvas.addEventListener('mousedown', e => { isDragging = true; prevMouse = {x: e.clientX, y: e.clientY}; });
  window.addEventListener('mouseup',   () => isDragging = false);
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    rotGroup.rotation.y += dx * 0.012;
    rotGroup.rotation.x += dy * 0.008;
    rotGroup.rotation.x = Math.max(-1.0, Math.min(1.0, rotGroup.rotation.x));
    prevMouse = {x: e.clientX, y: e.clientY};
  });
  // Touch
  canvas.addEventListener('touchstart', e => { isDragging = true; prevMouse = {x: e.touches[0].clientX, y: e.touches[0].clientY}; }, {passive:true});
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - prevMouse.x;
    const dy = e.touches[0].clientY - prevMouse.y;
    rotGroup.rotation.y += dx * 0.012;
    prevMouse = {x: e.touches[0].clientX, y: e.touches[0].clientY};
  }, {passive:true});

  window.addEventListener('resize', () => {
    const W2 = canvas.parentElement.offsetWidth;
    const H2 = canvas.parentElement.offsetHeight || 600;
    camera.aspect = W2 / H2; camera.updateProjectionMatrix();
    renderer.setSize(W2, H2);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = 0.016;

  if (currentMode === 'rotate' && !isDragging) {
    rotGroup.rotation.y += 0.004;
  }

  // Gear spinning
  parts.forEach(p => {
    if (p.spinSpeed !== 0) p.mesh.rotation.z += p.spinSpeed * dt;
  });

  // Explode / collapse
  if (exploding && explodeT < 1) {
    explodeT = Math.min(1, explodeT + dt * 0.7);
    parts.forEach(p => {
      p.mesh.position.lerpVectors(p.origin, new THREE.Vector3(
        p.origin.x + p.explodeDir.x * 2.5,
        p.origin.y + p.explodeDir.y * 2.5,
        p.origin.z + p.explodeDir.z * 2.5
      ), easeInOut(explodeT));
    });
  } else if (!exploding && explodeT > 0) {
    explodeT = Math.max(0, explodeT - dt * 0.9);
    parts.forEach(p => {
      p.mesh.position.lerpVectors(new THREE.Vector3(
        p.origin.x + p.explodeDir.x * 2.5,
        p.origin.y + p.explodeDir.y * 2.5,
        p.origin.z + p.explodeDir.z * 2.5
      ), p.origin, easeInOut(1 - explodeT));
    });
  }

  renderer.render(scene, camera);
}

function easeInOut(t) { return t < .5 ? 2*t*t : -1+(4-2*t)*t; }

function setMode(mode) {
  currentMode = mode;
  if (mode === 'explode') { exploding = true; }
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + mode);
  if (btn) btn.classList.add('active');
}

function resetModel() {
  exploding = false;
  rotGroup.rotation.set(0, 0, 0);
  document.querySelectorAll('.vctrl').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-rotate').classList.add('active');
  currentMode = 'rotate';
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
      document.querySelectorAll('.project-card').forEach(card => {
        const show = f === 'all' || card.dataset.cat === f;
        card.style.opacity = show ? '1' : '0.2';
        card.style.transform = show ? '' : 'scale(0.97)';
        card.style.transition = 'opacity .3s, transform .3s';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function loop() {
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.project-card,.skill-item,.vctrl').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEALS
═══════════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  // Skill bars
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        e.target.querySelectorAll('.skill-bar').forEach(b => b.style.width = b.dataset.width);
    });
  }, { threshold: 0.3 });
  const sg = document.getElementById('skillsGrid');
  if (sg) barObs.observe(sg);

  // Timeline
  const tlObs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i*140);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.timeline-item').forEach(el => tlObs.observe(el));

  // Active nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#'+cur;
      a.classList.toggle('active', active);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang') || 'el');
  initCursor();
  initScrollAnimations();
  initFilter();
  initThree();
});
