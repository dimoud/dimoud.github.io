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
   CURSOR
═══════════════════════════════════════════════════════════════ */
function initCursor() {
  const dot=document.getElementById('cursor'), ring=document.getElementById('cursorRing');
  if(!dot)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  if(ring){(function lerpRing(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(lerpRing);})();}
  document.querySelectorAll('a,button,.portfolio-col,.vctrl,.edu-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{dot.classList.add('hover');if(ring)ring.classList.add('hover');});
    el.addEventListener('mouseleave',()=>{dot.classList.remove('hover');if(ring)ring.classList.remove('hover');});
  });
  document.addEventListener('mousedown',()=>{dot.classList.add('click');setTimeout(()=>dot.classList.remove('click'),200);});
  document.addEventListener('mouseleave',()=>{dot.style.opacity='0';if(ring)ring.style.opacity='0';});
  document.addEventListener('mouseenter',()=>{dot.style.opacity='1';if(ring)ring.style.opacity='1';});
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS — PLANETARY GEAR BOX (central shaft removed)
═══════════════════════════════════════════════════════════════ */
let scene,camera,renderer,parts=[],clock;
let explodeT=0,exploding=false,isDragging=false;
let prevMouse={x:0,y:0},rotGroup,floatT=0;
let currentMode='rotate';

function makeGear(teeth,pitchR,toothH,hubR,spokes){
  const s=new THREE.Shape(), step=(Math.PI*2)/teeth;
  for(let i=0;i<teeth;i++){
    const a0=i*step-step*.42,a1=i*step-step*.16,a2=i*step+step*.16,a3=i*step+step*.42;
    const p=(a,r)=>[Math.cos(a)*r,Math.sin(a)*r];
    i===0?s.moveTo(...p(a0,pitchR)):s.lineTo(...p(a0,pitchR));
    s.lineTo(...p(a1,pitchR+toothH));s.lineTo(...p(a2,pitchR+toothH));s.lineTo(...p(a3,pitchR));
  }
  s.closePath();
  const hub=new THREE.Path();hub.absarc(0,0,hubR,0,Math.PI*2,true);s.holes.push(hub);
  const n=spokes||Math.max(4,Math.floor(teeth/3));
  for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2,r=pitchR*.55,sr=pitchR*.13;const sh=new THREE.Path();sh.absarc(Math.cos(a)*r,Math.sin(a)*r,sr,0,Math.PI*2,true);s.holes.push(sh);}
  return s;
}

function makeRingGear(teeth,outerR,toothRootR,toothH){
  const s=new THREE.Shape();s.absarc(0,0,outerR,0,Math.PI*2,false);
  const step=(Math.PI*2)/teeth, inner=new THREE.Path();
  for(let i=0;i<teeth;i++){
    const a0=i*step-step*.38,a1=i*step-step*.14,a2=i*step+step*.14,a3=i*step+step*.38;
    const p=(a,r)=>[Math.cos(a)*r,Math.sin(a)*r];
    i===0?inner.moveTo(...p(a0,toothRootR)):inner.lineTo(...p(a0,toothRootR));
    inner.lineTo(...p(a1,toothRootR-toothH));inner.lineTo(...p(a2,toothRootR-toothH));inner.lineTo(...p(a3,toothRootR));
  }
  inner.closePath();s.holes.push(inner);return s;
}

function initThree(){
  const canvas=document.getElementById('hero3d');
  if(!canvas||typeof THREE==='undefined'){console.warn('Three.js not ready');return;}
  const parent=canvas.parentElement, W=parent.clientWidth||640, H=parent.clientHeight||580;
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H);renderer.setClearColor(0x000000,0);
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(38,W/H,0.1,300);
  camera.position.set(0,2.5,20);camera.lookAt(0,0.5,0);
  clock=new THREE.Clock();

  /* Lights — blue-toned metallic */
  scene.add(new THREE.AmbientLight(0x506878,0.85));
  const key=new THREE.DirectionalLight(0xffffff,3.4);
  key.position.set(8,14,10);key.castShadow=true;key.shadow.mapSize.set(2048,2048);scene.add(key);
  const fill=new THREE.DirectionalLight(0x4080d0,1.1);fill.position.set(-9,4,-7);scene.add(fill);
  const rim=new THREE.PointLight(0x2060ff,1.8,55);rim.position.set(-5,9,-10);scene.add(rim);
  const bot=new THREE.PointLight(0x1040c0,0.9,45);bot.position.set(5,-9,5);scene.add(bot);
  const spec=new THREE.DirectionalLight(0xd0e8ff,0.9);spec.position.set(-2,-8,14);scene.add(spec);

  rotGroup=new THREE.Group();rotGroup.rotation.x=0.32;rotGroup.scale.set(0.7,0.7,0.7);scene.add(rotGroup);

  const mSteel =new THREE.MeshStandardMaterial({color:0x7c8c9a,metalness:.97,roughness:.09});
  const mBlue  =new THREE.MeshStandardMaterial({color:0x0d2a7c,metalness:.86,roughness:.24});
  const mBrass =new THREE.MeshStandardMaterial({color:0xbe9228,metalness:.97,roughness:.09});
  const mGold  =new THREE.MeshStandardMaterial({color:0xd4a820,metalness:.96,roughness:.07});
  const mShaft =new THREE.MeshStandardMaterial({color:0x4870b0,metalness:.98,roughness:.07});
  const mCase  =new THREE.MeshStandardMaterial({color:0x1c2028,metalness:.82,roughness:.28});
  const mRing  =new THREE.MeshStandardMaterial({color:0x091848,metalness:.89,roughness:.20});

  const extH={depth:.75,bevelEnabled:true,bevelThickness:.05,bevelSize:.04,bevelSegments:4};
  const extM={depth:.58,bevelEnabled:true,bevelThickness:.04,bevelSize:.03,bevelSegments:3};
  const extR={depth:.78,bevelEnabled:true,bevelThickness:.07,bevelSize:.06,bevelSegments:4};
  const OR=2.8, pAngles=[0,Math.PI*2/3,Math.PI*4/3], pMats=[mGold,mBrass,mSteel];

  /* SUN GEAR */
  const gSun=new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(18,1.8,0.46,0.26,6),extH),mBlue);
  gSun.castShadow=true;rotGroup.add(gSun);
  parts.push({mesh:gSun,o:gSun.position.clone(),d:new THREE.Vector3(0,0,0),spin:.50});

  /* 3 PLANET GEARS */
  pAngles.forEach((a,i)=>{
    const pg=new THREE.Mesh(new THREE.ExtrudeGeometry(makeGear(10,1.0,0.40,0.16,3),extM),pMats[i]);
    pg.position.set(Math.cos(a)*OR,Math.sin(a)*OR,0.09);pg.castShadow=true;rotGroup.add(pg);
    parts.push({mesh:pg,o:pg.position.clone(),d:new THREE.Vector3(Math.cos(a)*4.8,Math.sin(a)*4.8,1.4+i*0.7),spin:-.90});
  });

  /* RING GEAR */
  const gRing=new THREE.Mesh(new THREE.ExtrudeGeometry(makeRingGear(38,4.28,3.78,0.46),extR),mRing);
  gRing.castShadow=true;rotGroup.add(gRing);
  parts.push({mesh:gRing,o:gRing.position.clone(),d:new THREE.Vector3(0,0,-5.0),spin:-.09});

  /* CARRIER PLATE */
  const cShape=new THREE.Shape();cShape.absarc(0,0,3.5,0,Math.PI*2,false);
  const cHub=new THREE.Path();cHub.absarc(0,0,2.0,0,Math.PI*2,true);cShape.holes.push(cHub);
  pAngles.forEach(a=>{const ch=new THREE.Path();ch.absarc(Math.cos(a)*OR,Math.sin(a)*OR,0.34,0,Math.PI*2,true);cShape.holes.push(ch);});
  const gCarrier=new THREE.Mesh(new THREE.ExtrudeGeometry(cShape,{depth:.24,bevelEnabled:false}),mCase);
  gCarrier.position.set(0,0,-0.56);rotGroup.add(gCarrier);
  parts.push({mesh:gCarrier,o:gCarrier.position.clone(),d:new THREE.Vector3(0,0,-2.8),spin:.167});

  /* BACK PLATE */
  const bShape=new THREE.Shape();bShape.absarc(0,0,4.9,0,Math.PI*2,false);
  const bRim=new THREE.Path();bRim.absarc(0,0,4.35,0,Math.PI*2,true);bShape.holes.push(bRim);
  [0,1,2,3,4,5].forEach(i=>{const a=(i/6)*Math.PI*2;const bh=new THREE.Path();bh.absarc(Math.cos(a)*4.62,Math.sin(a)*4.62,0.20,0,Math.PI*2,true);bShape.holes.push(bh);});
  const gBack=new THREE.Mesh(new THREE.ExtrudeGeometry(bShape,{depth:.36,bevelEnabled:false}),mCase);
  gBack.position.set(0,0,-0.88);rotGroup.add(gBack);
  parts.push({mesh:gBack,o:gBack.position.clone(),d:new THREE.Vector3(0,0,-5.8),spin:0});

  /* FRONT COVER */
  const fShape=new THREE.Shape();fShape.absarc(0,0,4.9,0,Math.PI*2,false);
  const fRim=new THREE.Path();fRim.absarc(0,0,3.9,0,Math.PI*2,true);fShape.holes.push(fRim);
  [0,1,2,3,4,5].forEach(i=>{const a=(i/6)*Math.PI*2;const bh=new THREE.Path();bh.absarc(Math.cos(a)*4.62,Math.sin(a)*4.62,0.20,0,Math.PI*2,true);fShape.holes.push(bh);});
  const gFront=new THREE.Mesh(new THREE.ExtrudeGeometry(fShape,{depth:.30,bevelEnabled:false}),mCase);
  gFront.position.set(0,0,0.87);rotGroup.add(gFront);
  parts.push({mesh:gFront,o:gFront.position.clone(),d:new THREE.Vector3(0,0,5.0),spin:0});

  /* 6 MOUNTING BOLTS */
  [0,1,2,3,4,5].forEach(i=>{
    const a=(i/6)*Math.PI*2,bx=Math.cos(a)*4.62,by=Math.sin(a)*4.62;
    const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.14,.14,2.15,8),mBrass);
    bolt.rotation.x=Math.PI/2;bolt.position.set(bx,by,0.1);rotGroup.add(bolt);
    parts.push({mesh:bolt,o:bolt.position.clone(),d:new THREE.Vector3(bx*.1,by*.1,0),spin:0});
    const head=new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,.18,6),mBrass);
    head.rotation.x=Math.PI/2;head.position.set(bx,by,1.02);rotGroup.add(head);
    parts.push({mesh:head,o:head.position.clone(),d:new THREE.Vector3(bx*.1,by*.1,1.5),spin:0});
  });

  /* PLANET SHAFTS */
  pAngles.forEach(a=>{
    const psh=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,2.2,12),mShaft);
    psh.rotation.x=Math.PI/2;psh.position.set(Math.cos(a)*OR,Math.sin(a)*OR,0.09);rotGroup.add(psh);
    parts.push({mesh:psh,o:psh.position.clone(),d:new THREE.Vector3(Math.cos(a)*5.5,Math.sin(a)*5.5,1.5),spin:0});
  });

  /* BEARING RINGS */
  [-0.52,0.98].forEach(z=>{
    const br=new THREE.Mesh(new THREE.TorusGeometry(.34,.10,12,32),mBrass);
    br.position.set(0,0,z);rotGroup.add(br);
    parts.push({mesh:br,o:br.position.clone(),d:new THREE.Vector3(0,0,z*3.2),spin:0});
  });

  /* OUTPUT FLANGE */
  const flange=new THREE.Mesh(new THREE.CylinderGeometry(.88,.88,.44,20),mSteel);
  flange.rotation.x=Math.PI/2;flange.position.set(0,0,-1.55);rotGroup.add(flange);
  parts.push({mesh:flange,o:flange.position.clone(),d:new THREE.Vector3(0,0,-5.5),spin:.167});

  /* KEYWAY */
  const kw=new THREE.Mesh(new THREE.BoxGeometry(.14,.10,.46),mShaft);
  kw.position.set(.22,0,-1.55);rotGroup.add(kw);
  parts.push({mesh:kw,o:kw.position.clone(),d:new THREE.Vector3(.6,0,-5.5),spin:0});

  /* INPUT SPROCKET */
  const spk=new THREE.Mesh(new THREE.TorusGeometry(1.25,.14,8,24),mSteel);
  spk.position.set(0,0,1.6);rotGroup.add(spk);
  parts.push({mesh:spk,o:spk.position.clone(),d:new THREE.Vector3(0,0,4.2),spin:.50});

  /* OUTER HOUSING RING */
  const hRing=new THREE.Mesh(new THREE.TorusGeometry(4.62,.28,16,48),mCase);
  rotGroup.add(hRing);
  parts.push({mesh:hRing,o:hRing.position.clone(),d:new THREE.Vector3(0,0,0),spin:0});

  /* Drag to rotate */
  let msx=0,msy=0,didDrag=false;
  canvas.addEventListener('mousedown',e=>{isDragging=true;didDrag=false;msx=e.clientX;msy=e.clientY;prevMouse={x:e.clientX,y:e.clientY};});
  window.addEventListener('mouseup',()=>{isDragging=false;});
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    if(Math.abs(e.clientX-msx)>4||Math.abs(e.clientY-msy)>4)didDrag=true;
    rotGroup.rotation.y+=(e.clientX-prevMouse.x)*.010;
    rotGroup.rotation.x+=(e.clientY-prevMouse.y)*.007;
    rotGroup.rotation.x=Math.max(-.9,Math.min(.9,rotGroup.rotation.x));
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('click',()=>{if(didDrag)return;if(currentMode!=='explode')setMode('explode');else resetModel();});
  canvas.addEventListener('touchstart',e=>{isDragging=true;prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('touchend',()=>isDragging=false);
  window.addEventListener('touchmove',e=>{if(!isDragging)return;rotGroup.rotation.y+=(e.touches[0].clientX-prevMouse.x)*.010;prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('resize',()=>{const W2=parent.clientWidth||640,H2=parent.clientHeight||580;camera.aspect=W2/H2;camera.updateProjectionMatrix();renderer.setSize(W2,H2);});
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05);
  floatT+=dt;
  if(!isDragging&&currentMode==='rotate'){rotGroup.rotation.y+=.004;rotGroup.position.y=Math.sin(floatT*.52)*.04;rotGroup.position.x=0;}
  parts.forEach(p=>{if(p.spin!==0)p.mesh.rotation.z+=p.spin*dt;});
  if(exploding&&explodeT<1){explodeT=Math.min(1,explodeT+dt*.55);applyExplode(explodeT);}
  else if(!exploding&&explodeT>0){explodeT=Math.max(0,explodeT-dt*.80);applyExplode(explodeT);}
  renderer.render(scene,camera);
}

function applyExplode(t){
  const e=t<.5?2*t*t:-1+(4-2*t)*t;
  parts.forEach(p=>{p.mesh.position.x=p.o.x+p.d.x*3.0*e;p.mesh.position.y=p.o.y+p.d.y*3.0*e;p.mesh.position.z=p.o.z+p.d.z*3.0*e;});
}

function setMode(m){
  currentMode=m;if(m==='explode')exploding=true;
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const b=document.getElementById('btn-'+m);if(b)b.classList.add('active');
}

function resetModel(){
  exploding=false;currentMode='rotate';
  rotGroup.rotation.set(.32,0,0);rotGroup.position.set(0,0,0);
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate');if(rb)rb.classList.add('active');
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
    images:['images/modular_robot/Untitled Project.png','images/modular_robot/Untitled Project 2.png','images/modular_robot/Untitled Project 3.png','images/modular_robot/444.png','images/tracked/Untitled Project 3.png','images/tracked/Untitled Project 5.png'],
    link:'https://sites.google.com/view/expertease/portfolio'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Seatbelt Convincer', titleEl:'Simulator Ζώνης Ασφαλείας',
    descEn:'Experience a controlled 12 km/h impact in a safe environment. Single and double-seat versions — lightweight steel frame, assembled by one person in half a day.',
    descEl:'Νιώστε μια σύγκρουση στα 12km/h σε ελεγχόμενο περιβάλλον. Εκδόσεις μονής και διπλής θέσης — ελαφρύ, συναρμολογείται σε μισή μέρα.',
    badgeEn:'', badgeEl:'',
    images:['images/double_seat_belt_convincer/1.png','images/double_seat_belt_convincer/2.png','images/double_seat_belt_convincer/3.png','images/double_seat_belt_convincer/4.png','images/impactor/impactor.png','images/impactor/impactor 2.png'],
    link:'https://sites.google.com/view/expertease/portfolio'
  },
  {
    catEn:'Safety · Educational Equipment', catEl:'Ασφάλεια · Εκπαιδευτικός Εξοπλισμός',
    titleEn:'Rollcar Simulator', titleEl:'Rollcar Simulator',
    descEn:'Vehicle rollover simulator — place a car on top and roll inside it. Versions I & II, up to 20 rpm. Powerful tool for driver-safety training programmes.',
    descEl:'Προσομοιωτής ανατροπής οχήματος. Τοποθετείτε αυτοκίνητο στην κορυφή. Εκδόσεις Ι & ΙΙ, έως 20rpm. Ισχυρό εργαλείο εκπαίδευσης οδηγών.',
    badgeEn:'', badgeEl:'',
    images:['images/gear/Untitled Project.png','images/gear/Untitled Project 2.png','images/gear/Untitled Project 3.png','images/gear/Untitled Project 4.png','images/gear/Untitled Project 5.png','images/gear/Untitled Project 6.png'],
    link:'https://sites.google.com/view/expertease/portfolio'
  },
  {
    catEn:'Laser Cutting · Brake Press · Welding', catEl:'Laser Cutting · Brake Press · Συγκόλληση',
    titleEn:'Sheet Metal Applications', titleEl:'Εφαρμογές Φύλλων Μετάλλου',
    descEn:'From LED wall décor to log baskets and structural elements. 1.5–5mm steel, optimised DFM for fast fabrication and minimal waste.',
    descEl:'Από διακοσμητικά τοίχου με LED μέχρι καλάθια καυσόξυλων. Χάλυβας 1.5–5mm, βελτιστοποιημένο DFM για ταχεία κατασκευή.',
    badgeEn:'Sheet Metal', badgeEl:'Sheet Metal',
    images:['images/sheetmetal/1.png','images/sheetmetal/2.png','images/sheetmetal/a1.png','images/sheetmetal/a2.png','images/log_basket/καροτσακι.png','images/log_basket/καροτσακι 2.png'],
    link:'https://sites.google.com/view/expertease/portfolio'
  },
  {
    catEn:'Dynamic Loading · Structural Testing', catEl:'Δυναμική Φόρτιση · Δομικές Δοκιμές',
    titleEn:'1D Harmonic Exciter', titleEl:'Αρμονικός Διεγέρτης 1D',
    descEn:'Applies 450 kg uni-directional vibration to structures at up to 20 Hz. Flip it over and it covers all three axes. Built for structural testing labs and research institutions.',
    descEl:'Μονοδιευθυντική δόνηση 450kg σε κατασκευές, έως 20Hz. Αναποδογυρίστε τον και καλύπτει και τις τρεις κατευθύνσεις.',
    badgeEn:'', badgeEl:'',
    images:['images/harmonic_exhiter/he_1.png','images/harmonic_exhiter/1.png','images/harmonic_exhiter/2.png','images/harmonic_exhiter/3.png','images/harmonic_exhiter/Untitled Project 6.png','images/harmonic_exhiter/Untitled Project 7.png'],
    link:'https://sites.google.com/view/expertease/portfolio'
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
    if (link) { link.href = p.link; link.textContent = lang === 'el' ? 'Δείτε Έργο →' : 'View Project →'; }
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
  initCursor();
  initScroll();
  initPortfolio();
  initMobileNav();
  initContactForm();
  setTimeout(initThree, 120);
});
