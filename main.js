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
    about_p4:'Πιστεύουμε ότι η μηχανική είναι δημιουργική πειθαρχία. Οι καλύτερες λύσεις είναι ακριβείς, κομψές και κατασκευάσιμες από την πρώτη μέρα.',
    val_1_title:'Ακρίβεια', val_1_text:'FEA, ανοχές, δοκιμές σε πραγματικές συνθήκες. Δεν προσεγγίζουμε ποτέ.',
    val_2_title:'Πλήρης Κύκλος', val_2_text:'Από σκίτσο σε συναρμολόγηση — σχεδιασμός, BOM, κατασκευή, παράδοση.',
    val_3_title:'Διεθνή Πρότυπα', val_3_text:'Εκπαιδευμένοι σε 3 χώρες. Διεθνή πρότυπα μηχανικής σε κάθε έργο.',
    val_4_title:'Σχέδιο για Κατ/σκευή', val_4_text:'DFM από την αρχή. Γρηγορότερη παραγωγή, λιγότερα απόβλητα, χαμηλότερο κόστος.',
    proc_label:'Πώς Δουλεύουμε',
    proc_1_title:'Briefing', proc_1_text:'Μελετάμε περιορισμούς, υλικά, περιβάλλον και χρονοδιάγραμμα πριν σχεδιάσουμε την πρώτη γραμμή.',
    proc_2_title:'Σχεδιασμός', proc_2_text:'Πλήρες 3D μοντέλο σε SolidWorks, FEA, BOM και τεχνικά σχέδια — κάθε παραδοτέο έτοιμο για παραγωγή.',
    proc_3_title:'Παράδοση', proc_3_text:'Εποπτεία κατασκευής, διαχείριση προμηθευτών και παράδοση δοκιμασμένης συναρμολόγησης.',
    projects_heading:'Έργα',
    sw_heading:'Λογισμικό', sw_label:'Ενεργό Προϊόν · easemanual.eu',
    sw_desc:'Ισχυρό λογισμικό που αυτοματοποιεί τη δημιουργία τεχνικής μελέτης για άδεια κυκλοφορίας οχημάτων ειδικής χρήσης — βάσει ΥΑ 80255/4693/19/2020. Φτιαγμένο από μηχανικούς για μηχανικούς.',
    sw_f1:'Τεχνικοί υπολογισμοί', sw_f2:'Διαγράμματα φόρτισης', sw_f3:'Σχέδια οχημάτων A3', sw_f4:'Αυτόματη μελέτη Word',
    sw_f5:'Άξονες & εφεδρανισμοί', sw_f6:'Ευστάθεια & πέδηση', sw_f7:'Συγκολλήσεις & ελατήρια', sw_f8:'Γερανοί & καλαθοφόρα',
    sw_cta1:'Δείτε το Προϊόν →', sw_cta2:'Τιμολόγηση',
    contact_label:'// Ας Δουλέψουμε Μαζί',
    contact_heading:'Έχετε ένα<br>έργο στο νου;',
    contact_sub:'Από τον σχεδιασμό ενός εξαρτήματος έως τη διαχείριση ολόκληρου έργου — η Expertease είναι εδώ.',
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
    edu4_deg:'MSc', edu4_name:'International Hellenic University',
    edu5_deg:'MBA', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'About',
    about_p1:'<strong>Expertease Designs</strong> is an Athens-based mechanical engineering studio led by <strong>Dimitrios Moudiotis</strong> — Mechanical Engineer (AUTH), with 7 years of experience and four postgraduate degrees: MSc École Centrale Paris, MSc IFP School, MSc IHU, and MBA (USA).',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'We cover the full product lifecycle — from initial design and BOM to 3D printing, sheet metal fabrication, and project management.',
    about_p3:'Based in <strong>Athens, Greece</strong> — available for projects across Greece and internationally.',
    about_p4:'We believe engineering is a creative discipline. The best solutions are precise, elegant, and manufacturable from day one — no excess complexity, no unnecessary iterations.',
    val_1_title:'Precision', val_1_text:'FEA-verified, tolerance-stacked, tested in real conditions. We don\'t approximate.',
    val_2_title:'Full Lifecycle', val_2_text:'From sketch to assembly — design, BOM, fabrication, and handover. We deliver, we don\'t hand off.',
    val_3_title:'Global Standards', val_3_text:'Educated across 3 countries. International engineering rigour applied to every local project.',
    val_4_title:'Built to Make', val_4_text:'DFM from day one. Designs optimised for fast fabrication, minimal waste, and real-world assembly.',
    proc_label:'How We Work',
    proc_1_title:'Brief', proc_1_text:'We study your constraints, material, environment, and timeline before drawing a single line.',
    proc_2_title:'Design', proc_2_text:'Full 3D model in SolidWorks, FEA validation, complete BOM, and technical drawings — every deliverable ready for production.',
    proc_3_title:'Deliver', proc_3_text:'We supervise fabrication, manage suppliers, and hand over a tested, production-ready assembly.',
    projects_heading:'Work',
    sw_heading:'Software', sw_label:'Active Product · easemanual.eu',
    sw_desc:'Powerful software automating the creation of technical studies for special-purpose vehicle licensing — per Greek regulation YA 80255/4693/19/2020. Built by engineers for engineers.',
    sw_f1:'Technical calculations', sw_f2:'Load diagrams', sw_f3:'A3 vehicle drawings', sw_f4:'Auto Word report',
    sw_f5:'Shafts & bearings', sw_f6:'Stability & braking', sw_f7:'Welds & springs', sw_f8:'Cranes & platforms',
    sw_cta1:'View Product →', sw_cta2:'Pricing',
    contact_label:'// Let\'s Work Together',
    contact_heading:'Got a project<br>in mind?',
    contact_sub:'From designing a single component to managing an entire project — Expertease is here.',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Athens, Greece',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE APPLY
═══════════════════════════════════════════════════════════════ */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
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
  set('about-p4',t.about_p4);
  set('val-1-title',t.val_1_title); set('val-1-text',t.val_1_text);
  set('val-2-title',t.val_2_title); set('val-2-text',t.val_2_text);
  set('val-3-title',t.val_3_title); set('val-3-text',t.val_3_text);
  set('val-4-title',t.val_4_title); set('val-4-text',t.val_4_text);
  set('proc-label',t.proc_label);
  set('proc-1-title',t.proc_1_title); set('proc-1-text',t.proc_1_text);
  set('proc-2-title',t.proc_2_title); set('proc-2-text',t.proc_2_text);
  set('proc-3-title',t.proc_3_title); set('proc-3-text',t.proc_3_text);
  set('projects-heading',t.projects_heading);
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label);
  set('sw-desc',t.sw_desc);
  for(let i=1;i<=8;i++) set('sw-f'+i,t['sw_f'+i]);
  set('sw-cta1',t.sw_cta1); set('sw-cta2',t.sw_cta2);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading,true);
  set('contact-sub',t.contact_sub);
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc);
  const mmap = {'mnav-about':t.nav_about,'mnav-projects':t.nav_projects,'mnav-software':t.nav_software,'mnav-experience':t.nav_experience,'mnav-contact':t.nav_contact};
  Object.entries(mmap).forEach(([id,val])=>{ const el=document.getElementById(id); if(el) el.textContent=val; });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
  renderPortfolio();
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA
═══════════════════════════════════════════════════════════════ */
const PORTFOLIO_DATA = [
  {
    catEn:'Robotics · Electronics · Fabrication', catEl:'Ρομποτική · Ηλεκτρονικά · Κατασκευή',
    titleEn:'Modular Robot', titleEl:'Αρθρωτό Ρομπότ',
    descEn:'Tracked robot with 3 lead-acid batteries, 36V supply, solar panel, 4 cameras, sensors, and powerful LEDs. Laser-cut steel, biodegradable PLA parts, wood panels. Dustproof, waterproof, recyclable.',
    descEl:'Τροχήλατο ρομπότ με 3 μπαταρίες μολύβδου, τροφοδοσία 36V, ηλιακό πάνελ, 4 κάμερες, αισθητήρες και ισχυρά LED. Laser cut χάλυβας, βιοδιασπάσιμη PLA. Αδιάβροχο, αντισκονικό.',
    badgeEn:'Featured', badgeEl:'Ναυαρχίδα',
    images:[
      'images/modular_robot/Untitled Project.png',
      'images/modular_robot/Untitled Project 2.png',
      'images/modular_robot/Untitled Project 3.png',
      'images/modular_robot/444.png',
      'images/modular_robot/Untitled Project 4.png',
      'images/modular_robot/Untitled Project 5.png',
      'images/tracked/Untitled Project 3.png',
      'images/tracked/Untitled Project 5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Seatbelt Convincer', titleEl:'Simulator Ζώνης Ασφαλείας',
    descEn:'Experience a controlled 12 km/h impact in a safe environment. Single and double-seat versions — lightweight steel frame, assembled by one person in half a day.',
    descEl:'Νιώστε μια σύγκρουση στα 12km/h σε ελεγχόμενο περιβάλλον. Εκδόσεις μονής και διπλής θέσης — ελαφρύ, συναρμολογείται σε μισή μέρα.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/double_seat_belt_convincer/1.png',
      'images/double_seat_belt_convincer/2.png',
      'images/double_seat_belt_convincer/3.png',
      'images/double_seat_belt_convincer/4.png',
      'images/double_seat_belt_convincer/5.png',
      'images/double_seat_belt_convincer/6.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Educational Equipment', catEl:'Ασφάλεια · Εκπαιδευτικός Εξοπλισμός',
    titleEn:'Rollcar Simulator', titleEl:'Rollcar Simulator',
    descEn:'Vehicle rollover simulator — place a car on top and roll inside it. Versions I & II, up to 20 rpm. Powerful tool for driver-safety training programmes.',
    descEl:'Προσομοιωτής ανατροπής οχήματος. Τοποθετείτε αυτοκίνητο στην κορυφή. Εκδόσεις Ι & ΙΙ, έως 20rpm. Ισχυρό εργαλείο εκπαίδευσης οδηγών.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/gear/Untitled Project.png',
      'images/gear/Untitled Project 2.png',
      'images/gear/Untitled Project 3.png',
      'images/gear/Untitled Project 4.png',
      'images/gear/Untitled Project 5.png',
      'images/gear/Untitled Project 6.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Laser Cutting · Brake Press · Welding', catEl:'Laser Cutting · Brake Press · Συγκόλληση',
    titleEn:'Sheet Metal Applications', titleEl:'Εφαρμογές Φύλλων Μετάλλου',
    descEn:'From LED wall décor to log baskets, anchor brackets, and structural steel bases. 1.5–5mm steel, optimised DFM for fast fabrication and minimal waste.',
    descEl:'Από διακοσμητικά τοίχου με LED μέχρι καλάθια καυσόξυλων, αγκύρια και χαλύβδινες βάσεις. Χάλυβας 1.5–5mm, βελτιστοποιημένο DFM.',
    badgeEn:'Sheet Metal', badgeEl:'Sheet Metal',
    images:[
      'images/sheetmetal/1.png',
      'images/sheetmetal/2.png',
      'images/sheetmetal/a1.png',
      'images/sheetmetal/a2.png',
      'images/log_basket/καροτσακι.png',
      'images/ancor/1.png',
      'images/steel_base/Untitled Project_left.png',
      'images/sheetmetal/3.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Dynamic Loading · Structural Testing', catEl:'Δυναμική Φόρτιση · Δομικές Δοκιμές',
    titleEn:'1D Harmonic Exciter', titleEl:'Αρμονικός Διεγέρτης 1D',
    descEn:'Applies 450 kg uni-directional vibration to structures at up to 20 Hz. Flip it over and it covers all three axes. Built for structural testing labs and research institutions.',
    descEl:'Μονοδιευθυντική δόνηση 450kg σε κατασκευές, έως 20Hz. Αναποδογυρίστε τον και καλύπτει και τις τρεις κατευθύνσεις.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/harmonic_exhiter/he_1.png',
      'images/harmonic_exhiter/1.png',
      'images/harmonic_exhiter/2.png',
      'images/harmonic_exhiter/3.png',
      'images/harmonic_exhiter/Untitled Project 6.png',
      'images/harmonic_exhiter/Untitled Project 7.png',
      'images/harmonic_exhiter/4.png',
      'images/harmonic_exhiter/5.png'
    ],
    link:'#contact'
  }
];

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — 2-COLUMN DYNAMIC
═══════════════════════════════════════════════════════════════ */
let portLeft  = 0;
let portRight = 1;
let portTimer = null;
const colImgIdx    = { portColLeft: 0, portColRight: 0 };
const colImgTimers = { portColLeft: null, portColRight: null };

function updatePortDots() {
  document.querySelectorAll('.port-dot').forEach((d, i) => {
    d.classList.toggle('active', i === portLeft || i === portRight);
  });
}

function startColImageCycle(colEl, project) {
  const id = colEl.id;
  clearInterval(colImgTimers[id]);
  colImgIdx[id] = 0;
  if (project.images.length <= 1) return;
  colImgTimers[id] = setInterval(() => {
    colImgIdx[id] = (colImgIdx[id] + 1) % project.images.length;
    const img = colEl.querySelector('.port-img');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => { img.src = project.images[colImgIdx[id]]; img.style.opacity = '1'; }, 320);
  }, 3200);
}

function renderPortfolioCol(colEl, idx) {
  const p    = PORTFOLIO_DATA[idx];
  const lang = currentLang;
  colEl.classList.add('port-fade-out');
  setTimeout(() => {
    const img = colEl.querySelector('.port-img');
    if (img) { img.src = p.images[0]; img.alt = lang === 'el' ? p.titleEl : p.titleEn; img.style.opacity = '1'; }
    const badge = colEl.querySelector('.port-badge');
    if (badge) { const b = lang === 'el' ? p.badgeEl : p.badgeEn; badge.textContent = b; badge.style.display = b ? '' : 'none'; }
    const cat = colEl.querySelector('.port-cat');
    if (cat) cat.textContent = lang === 'el' ? p.catEl : p.catEn;
    const title = colEl.querySelector('.port-title');
    if (title) title.textContent = lang === 'el' ? p.titleEl : p.titleEn;
    const desc = colEl.querySelector('.port-desc');
    if (desc) desc.textContent = lang === 'el' ? p.descEl : p.descEn;
    const link = colEl.querySelector('.port-link');
    if (link) { link.href = p.link; link.textContent = lang === 'el' ? 'Επικοινωνήστε →' : 'Get in Touch →'; }
    colEl.classList.remove('port-fade-out');
    startColImageCycle(colEl, p);
  }, 280);
}

function renderPortfolio() {
  const L = document.getElementById('portColLeft');
  const R = document.getElementById('portColRight');
  if (L) renderPortfolioCol(L, portLeft);
  if (R) renderPortfolioCol(R, portRight);
  updatePortDots();
}

function swapPortCols() {
  const tmp = portLeft; portLeft = portRight; portRight = tmp;
  renderPortfolio();
  resetPortTimer();
}

function resetPortTimer() { clearInterval(portTimer); setTimeout(startPortTimer, 400); }

function startPortTimer() {
  portTimer = setInterval(() => {
    const available = PORTFOLIO_DATA.map((_,i) => i).filter(i => i !== portLeft && i !== portRight);
    const newIdx = available[Math.floor(Math.random() * available.length)];
    if (Math.random() < 0.5) {
      portLeft = newIdx;
      const el = document.getElementById('portColLeft');
      if (el) renderPortfolioCol(el, portLeft);
    } else {
      portRight = newIdx;
      const el = document.getElementById('portColRight');
      if (el) renderPortfolioCol(el, portRight);
    }
    updatePortDots();
  }, 5000);
}

function initPortDots() {
  const container = document.getElementById('portDots');
  if (!container) return;
  container.innerHTML = '';
  PORTFOLIO_DATA.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'port-dot';
    d.dataset.idx = i;
    d.setAttribute('aria-label', 'Project ' + (i + 1));
    d.addEventListener('click', () => {
      if (portLeft === i || portRight === i) return;
      portLeft = i;
      const el = document.getElementById('portColLeft');
      if (el) renderPortfolioCol(el, portLeft);
      updatePortDots();
      resetPortTimer();
    });
    container.appendChild(d);
  });
}

function initPortDrag() {
  const leftEl  = document.getElementById('portColLeft');
  const rightEl = document.getElementById('portColRight');
  if (!leftEl || !rightEl) return;
  let activeCol = null, startX = 0, currentDx = 0, hasDragged = false;

  const onDown = (col, clientX) => {
    activeCol = col; startX = clientX; currentDx = 0; hasDragged = false;
    col.style.transition = 'transform .1s ease, opacity .28s ease';
  };
  const onMove = (clientX) => {
    if (!activeCol) return;
    currentDx = clientX - startX;
    if (Math.abs(currentDx) > 6) hasDragged = true;
    if (hasDragged) activeCol.style.transform = `translateX(${currentDx * 0.22}px)`;
  };
  const onUp = () => {
    if (!activeCol) return;
    activeCol.style.transition = 'transform .35s cubic-bezier(.19,1,.22,1), opacity .28s ease';
    activeCol.style.transform = '';
    const isLeft = activeCol.id === 'portColLeft';
    if (hasDragged) {
      if (isLeft  && currentDx >  90) swapPortCols();
      if (!isLeft && currentDx < -90) swapPortCols();
    }
    activeCol = null; hasDragged = false; currentDx = 0;
  };

  [leftEl, rightEl].forEach(col => {
    col.addEventListener('mousedown',  e => { if (e.button === 0) onDown(col, e.clientX); });
    col.addEventListener('touchstart', e => onDown(col, e.touches[0].clientX), {passive:true});
  });
  document.addEventListener('mousemove', e => onMove(e.clientX));
  document.addEventListener('touchmove', e => { if (activeCol) onMove(e.touches[0].clientX); }, {passive:true});
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchend',  onUp, {passive:true});
}

function initPortfolio() {
  initPortDots();
  renderPortfolio();
  initPortDrag();
  setTimeout(startPortTimer, 1200);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL
═══════════════════════════════════════════════════════════════ */
function initScroll() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAV
═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const btn=document.getElementById('navHamburger'), drawer=document.getElementById('navMobile');
  if(!btn||!drawer)return;
  btn.addEventListener('click',()=>{btn.classList.toggle('open');drawer.classList.toggle('open');});
}
function closeMobileNav() {
  const btn=document.getElementById('navHamburger'),drawer=document.getElementById('navMobile');
  if(btn)btn.classList.remove('open');if(drawer)drawer.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form=document.getElementById('contactForm'),success=document.getElementById('formSuccess');
  if(!form)return;
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('.form-submit');btn.textContent='Sending…';btn.disabled=true;
    try{
      const res=await fetch(form.action,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
      if(res.ok){form.style.display='none';if(success)success.style.display='flex';}
      else{btn.textContent='Error — try again';btn.disabled=false;}
    }catch(_){btn.textContent='Error — try again';btn.disabled=false;}
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang') || 'en');
  initScroll();
  initPortfolio();
  initMobileNav();
  initContactForm();
  setTimeout(initThree, 120);
});
