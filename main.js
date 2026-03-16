// ── Language Data ──────────────────────────────────────────────
const LANG = {
  el: {
    nav_about:      'Σχετικά',
    nav_projects:   'Υπηρεσίες',
    nav_experience: 'Σπουδές & Εμπειρία',
    nav_contact:    'Επικοινωνία',

    hero_tag:   '// Μηχανολόγος Μηχανικός — Παγκράτι, Αθήνα',
    hero_title: 'Μηχανολογικός Σχεδιασμός · 3D Printing · Διαχείριση Έργων',
    hero_desc:  'Ιδρυτής της <strong>Expertease</strong> — παρέχω ολοκληρωμένες μηχανολογικές λύσεις: σχεδιασμός μηχανών, εφαρμογές φύλλων μετάλλου, ταχεία πρωτοτυποποίηση, BOM και διαχείριση έργων.',
    hero_cta_work:    'Δείτε τις Υπηρεσίες →',
    hero_cta_contact: 'Επικοινωνήστε',
    stat_years:    'Χρόνια Εμπειρίας',
    stat_projects: 'Ολοκληρωμένα Έργα',
    stat_degrees:  'Μεταπτυχιακοί Τίτλοι',

    about_heading: 'Σχετικά',
    about_p1: 'Είμαι ο <strong>Δημήτριος Μουδιώτης</strong>, Μηχανολόγος Μηχανικός με πτυχίο από το <strong>ΑΠΘ</strong> και τέσσερις μεταπτυχιακούς τίτλους: δύο MSc στη Γαλλία, ένα MSc στον Σχεδιασμό Προϊόντων στην Ελλάδα και MBA σε Ηγεσία & Διαχείριση Έργων στις ΗΠΑ.',
    about_quote: '«Η μηχανική δεν είναι μόνο τεχνική — είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που μπορείς να κρατήσεις στα χέρια σου.»',
    about_p2: 'Μέσω της <strong>Expertease</strong> προσφέρω υπηρεσίες μηχανολογικού σχεδιασμού, ανάπτυξης BOM, τρισδιάστατης εκτύπωσης, κατεργασίας φύλλων μετάλλου και διαχείρισης έργων — καλύπτοντας ολόκληρο τον κύκλο ζωής ενός προϊόντος.',
    about_p3: 'Βάση: <strong>Παγκράτι, Αθήνα</strong> — Διαθέσιμος για έργα σε Ελλάδα και εξωτερικό.',

    projects_heading: 'Υπηρεσίες',
    proj1_cat:   'Μηχανολογικός Σχεδιασμός',
    proj1_title: 'Σχεδιασμός Μηχανών & Κατασκευών',
    proj1_desc:  'Πλήρης μηχανολογικός σχεδιασμός μηχανών, βιομηχανικών κατασκευών και εξαρτημάτων. Από το αρχικό concept έως τα έτοιμα τεχνικά σχέδια παραγωγής — με SolidWorks και CATIA.',
    proj1_link:  'Μάθετε Περισσότερα →',
    proj2_cat:   'Ταχεία Πρωτοτυποποίηση · 3D Printing',
    proj2_title: 'Rapid Prototyping & Τρισδιάστατη Εκτύπωση',
    proj2_desc:  'Ταχεία υλοποίηση ιδεών μέσω FDM, SLA και SLS τεχνολογιών. Από ένα αρχείο CAD στα χέρια σας σε ελάχιστο χρόνο — ιδανικό για δοκιμές, παρουσιάσεις και μικρές σειρές.',
    proj2_link:  'Μάθετε Περισσότερα →',
    proj3_cat:   'Κατεργασία Μετάλλου',
    proj3_title: 'Εφαρμογές Φύλλων Μετάλλου',
    proj3_desc:  'Σχεδιασμός και τεχνική τεκμηρίωση για κοπή, διαμόρφωση και συγκόλληση φύλλων μετάλλου. Βελτιστοποίηση για κατασκευασιμότητα (DFM) και μείωση αποβλήτων υλικού.',
    proj3_link:  'Μάθετε Περισσότερα →',
    proj4_cat:   'Τεκμηρίωση & BOM',
    proj4_title: 'Bill of Materials & Τεχνική Τεκμηρίωση',
    proj4_desc:  'Ανάπτυξη πλήρους BOM, τεχνικών σχεδίων, οδηγιών συναρμολόγησης και φακέλων προϊόντος. Δομημένη τεκμηρίωση που υποστηρίζει παραγωγή, προμήθειες και πιστοποίηση.',
    proj4_link:  'Μάθετε Περισσότερα →',
    proj5_cat:   'Διαχείριση Έργων',
    proj5_title: 'Project Management & Ηγεσία Έργων',
    proj5_desc:  'Διαχείριση μηχανολογικών έργων από την έναρξη έως την παράδοση. Εφαρμογή μεθοδολογιών PM, συντονισμός ομάδων, έλεγχος κόστους και χρονοδιαγράμματος — υποστηριζόμενη από MBA εξειδίκευση σε Leadership & Project Management.',
    proj5_link:  'Μάθετε Περισσότερα →',

    experience_heading: 'Σπουδές & Εμπειρία',
    exp1_role:    'Ιδρυτής & Μηχανολόγος Μηχανικός',
    exp1_company: 'Expertease — Παγκράτι, Αθήνα',
    exp1_b1: 'Μηχανολογικός σχεδιασμός μηχανών, εξαρτημάτων και βιομηχανικών κατασκευών',
    exp1_b2: 'Ταχεία πρωτοτυποποίηση με τρισδιάστατη εκτύπωση (FDM, SLA, SLS)',
    exp1_b3: 'Εφαρμογές φύλλων μετάλλου — σχεδιασμός, DFM και τεχνική τεκμηρίωση',
    exp1_b4: 'Ανάπτυξη BOM και διαχείριση τεχνικών έργων',

    exp2_role:    'MBA — Ηγεσία & Διαχείριση Έργων',
    exp2_company: 'Αμερικανικό Πανεπιστήμιο, ΗΠΑ',
    exp2_b1: 'Εξειδίκευση σε στρατηγική ηγεσία, PM και επιχειρηματική ανάπτυξη',
    exp2_b2: 'Εφαρμογή PMP framework, Agile, MS Project και risk management',
    exp2_b3: 'Μελέτες περιπτώσεων σε διεθνές βιομηχανικό και τεχνολογικό περιβάλλον',

    exp3_role:    'MSc — Σχεδιασμός Προϊόντων',
    exp3_company: 'Ελληνικό Πανεπιστήμιο',
    exp3_b1: 'Ανάπτυξη προϊόντων από τη σύλληψη έως την παραγωγή',
    exp3_b2: 'Ειδίκευση σε DFM, DFA και μεθοδολογίες ανάπτυξης νέων προϊόντων',
    exp3_b3: 'Διεπιστημονική προσέγγιση: μηχανική, αισθητική σχεδιασμού, εργονομία',

    exp4_role:    '2× MSc & Πτυχίο Μηχανολόγου Μηχανικού',
    exp4_company: 'Γαλλικά Πανεπιστήμια & ΑΠΘ, Θεσσαλονίκη',
    exp4_b1: 'Πτυχίο Μηχανολόγου Μηχανικού — Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ)',
    exp4_b2: 'Δύο MSc από γαλλικά πανεπιστήμια — εξειδίκευση σε μηχανική & βιομηχανικές εφαρμογές',

    contact_label:   '// Ας Δουλέψουμε Μαζί',
    contact_heading: 'Έχετε ένα\nέργο στο νου;',
    contact_sub:     'Από τον σχεδιασμό ενός εξαρτήματος έως τη διαχείριση ενός ολόκληρου έργου — η Expertease είναι εδώ. Επικοινωνήστε μαζί μας.',

    footer_copy: '© 2026 Δημήτριος Μουδιώτης — Expertease',
  },

  en: {
    nav_about:      'About',
    nav_projects:   'Services',
    nav_experience: 'Education & Experience',
    nav_contact:    'Contact',

    hero_tag:   '// Mechanical Engineer — Pagrati, Athens GR',
    hero_title: 'Mechanical Design · 3D Printing · Project Management',
    hero_desc:  'Founder of <strong>Expertease</strong> — delivering end-to-end mechanical engineering solutions: machine design, sheet metal applications, rapid prototyping, bill of materials, and project management.',
    hero_cta_work:    'View Services →',
    hero_cta_contact: 'Get in Touch',
    stat_years:    'Years Experience',
    stat_projects: 'Projects Delivered',
    stat_degrees:  'Postgraduate Degrees',

    about_heading: 'About',
    about_p1: 'I\'m <strong>Dimitrios Moudiotis</strong>, a Mechanical Engineer with a degree from <strong>AUTH</strong> (Aristotle University of Thessaloniki) and four postgraduate degrees: two MSc in France, one MSc in Product Design in Greece, and an MBA in Leadership & Project Management in the USA.',
    about_quote: '"Engineering is not just technical — it\'s the art of turning an idea into something you can hold in your hands."',
    about_p2: 'Through <strong>Expertease</strong> I deliver mechanical design, BOM development, 3D printing, sheet metal work, and project management — covering the full product lifecycle from concept to production.',
    about_p3: 'Based in <strong>Pagrati, Athens</strong> — available for projects across Greece and internationally.',

    projects_heading: 'Services',
    proj1_cat:   'Mechanical Design',
    proj1_title: 'Machine & Component Design',
    proj1_desc:  'Full mechanical design of machines, industrial structures, and components. From initial concept to production-ready technical drawings — using SolidWorks and CATIA.',
    proj1_link:  'Learn More →',
    proj2_cat:   'Rapid Prototyping · 3D Printing',
    proj2_title: 'Rapid Prototyping & 3D Printing',
    proj2_desc:  'Fast realization of ideas via FDM, SLA, and SLS technologies. From a CAD file to a physical part in minimal time — ideal for testing, presentations, and small production runs.',
    proj2_link:  'Learn More →',
    proj3_cat:   'Metal Fabrication',
    proj3_title: 'Sheet Metal Applications',
    proj3_desc:  'Design and technical documentation for sheet metal cutting, forming, and welding. Optimized for manufacturability (DFM) and material waste reduction.',
    proj3_link:  'Learn More →',
    proj4_cat:   'Documentation & BOM',
    proj4_title: 'Bill of Materials & Technical Documentation',
    proj4_desc:  'Full BOM development, technical drawings, assembly instructions, and product dossiers. Structured documentation supporting production, procurement, and certification.',
    proj4_link:  'Learn More →',
    proj5_cat:   'Project Management',
    proj5_title: 'Project Management & Engineering Leadership',
    proj5_desc:  'Managing mechanical engineering projects from kickoff to delivery. PM methodologies, team coordination, cost and schedule control — backed by an MBA in Leadership & Project Management.',
    proj5_link:  'Learn More →',

    experience_heading: 'Education & Experience',
    exp1_role:    'Founder & Mechanical Engineer',
    exp1_company: 'Expertease — Pagrati, Athens',
    exp1_b1: 'Mechanical design of machines, components, and industrial structures',
    exp1_b2: 'Rapid prototyping via 3D printing (FDM, SLA, SLS)',
    exp1_b3: 'Sheet metal applications — design, DFM, and technical documentation',
    exp1_b4: 'BOM development and technical project management',

    exp2_role:    'MBA — Leadership & Project Management',
    exp2_company: 'American University, USA',
    exp2_b1: 'Specialization in strategic leadership, PM and business development',
    exp2_b2: 'PMP framework, Agile, MS Project, and risk management',
    exp2_b3: 'Case studies in international industrial and technology environments',

    exp3_role:    'MSc — Product Design',
    exp3_company: 'Greek University',
    exp3_b1: 'Product development from concept to production',
    exp3_b2: 'Specialization in DFM, DFA, and new product development methodologies',
    exp3_b3: 'Interdisciplinary approach: engineering, design aesthetics, ergonomics',

    exp4_role:    '2× MSc & BEng Mechanical Engineering',
    exp4_company: 'French Universities & AUTH, Thessaloniki',
    exp4_b1: 'BEng Mechanical Engineering — Aristotle University of Thessaloniki (AUTH)',
    exp4_b2: 'Two MSc degrees from French universities — engineering & industrial applications',

    contact_label:   '// Let\'s Work Together',
    contact_heading: 'Got a project\nin mind?',
    contact_sub:     'From designing a single component to managing an entire project — Expertease is here. Get in touch to discuss your needs.',

    footer_copy: '© 2026 Dimitrios Moudiotis — Expertease',
  }
};

// ── State ──────────────────────────────────────────────────────
let currentLang = 'el';

// ── Apply language to DOM ──────────────────────────────────────
function applyLang(lang) {
  const t = LANG[lang];
  currentLang = lang;
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';

  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = val;
    else el.textContent = val;
  };

  set('nav-about',      t.nav_about);
  set('nav-projects',   t.nav_projects);
  set('nav-experience', t.nav_experience);
  set('nav-contact',    t.nav_contact);

  set('hero-tag',         t.hero_tag);
  set('hero-title',       t.hero_title);
  set('hero-desc',        t.hero_desc, true);
  set('hero-cta-work',    t.hero_cta_work);
  set('hero-cta-contact', t.hero_cta_contact);
  set('stat-years',       t.stat_years);
  set('stat-projects',    t.stat_projects);
  set('stat-degrees',     t.stat_degrees);

  set('about-heading', t.about_heading);
  set('about-p1',  t.about_p1,  true);
  set('about-quote', t.about_quote);
  set('about-p2',  t.about_p2,  true);
  set('about-p3',  t.about_p3,  true);

  set('projects-heading', t.projects_heading);
  ['proj1','proj2','proj3','proj4','proj5'].forEach(p => {
    set(`${p}-cat`,   t[`${p}_cat`]);
    set(`${p}-title`, t[`${p}_title`]);
    set(`${p}-desc`,  t[`${p}_desc`]);
    set(`${p}-link`,  t[`${p}_link`]);
  });

  set('experience-heading', t.experience_heading);
  set('exp1-role', t.exp1_role); set('exp1-company', t.exp1_company);
  set('exp1-b1', t.exp1_b1); set('exp1-b2', t.exp1_b2); set('exp1-b3', t.exp1_b3); set('exp1-b4', t.exp1_b4);
  set('exp2-role', t.exp2_role); set('exp2-company', t.exp2_company);
  set('exp2-b1', t.exp2_b1); set('exp2-b2', t.exp2_b2); set('exp2-b3', t.exp2_b3);
  set('exp3-role', t.exp3_role); set('exp3-company', t.exp3_company);
  set('exp3-b1', t.exp3_b1); set('exp3-b2', t.exp3_b2); set('exp3-b3', t.exp3_b3);
  set('exp4-role', t.exp4_role); set('exp4-company', t.exp4_company);
  set('exp4-b1', t.exp4_b1); set('exp4-b2', t.exp4_b2);

  set('contact-label',   t.contact_label);
  set('contact-heading', t.contact_heading);
  set('contact-sub',     t.contact_sub);
  set('footer-copy',     t.footer_copy);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

// ── Custom Cursor ──────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  })();

  document.querySelectorAll('a, button, .project-card, .skill-item, .lang-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });
}

// ── Skill Bars ─────────────────────────────────────────────────
function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.querySelectorAll('.skill-bar').forEach(b => b.style.width = b.dataset.width);
    });
  }, { threshold: 0.3 });
  const grid = document.getElementById('skillsGrid');
  if (grid) observer.observe(grid);
}

// ── Timeline Reveal ────────────────────────────────────────────
function initTimeline() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting)
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

// ── Active Nav ─────────────────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : ''; });
  });
}

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(localStorage.getItem('lang') || 'el');
  initCursor();
  initSkillBars();
  initTimeline();
  initActiveNav();
});
