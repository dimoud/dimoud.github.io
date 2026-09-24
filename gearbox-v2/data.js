/* ═══════════════════════════════════════════════════════════════
   gearbox-v2 / data.js — κείμενα διεπαφής και κατάλογος εξαρτημάτων
   (μόνο δεδομένα· καμία λογική)
   Κλίμακα μοντέλου: 1 μονάδα = 10 mm
═══════════════════════════════════════════════════════════════ */

export const I18N = {
  el: {
    brand: 'EXPERTEASE DESIGNS · ΜΗΧΑΝΟΛΟΓΙΚΗ ΑΠΕΙΚΟΝΙΣΗ',
    title: 'Πλανητικός μειωτήρας PG-4',
    sub: 'Μονοβάθμιος · ελικοειδής οδόντωση β = 12° · i = 4 : 1',
    nin: 'Είσοδος', nout: 'Έξοδος', ratio: 'Σχέση', parts: 'Εξαρτήματα',
    stAssembled: 'Συναρμολογημένο', stExploded: 'Ανεπτυγμένο',
    tbRotate: 'Περιστροφή', tbZoom: 'Μεγέθυνση', tbExplode: 'Ανάπτυξη', tbCollapse: 'Σύμπτυξη',
    tbSection: 'Τομή', tbComponents: 'Εξαρτήματα', tbRun: 'Λειτουργία', tbReset: 'Επαναφορά',
    panelTitle: 'Εξαρτήματα', pieces: 'τεμάχια',
    hint: 'Σύρετε: περιστροφή · Κύλιση: μεγέθυνση · Κλικ: επιλογή · Διπλό κλικ: εστίαση',
    lblQty: 'Ποσότητα', lblMaterial: 'Υλικό', lblSpec: 'Χαρακτηριστικά', lblRole: 'Λειτουργία',
    pos: 'Θέση', hideOthers: 'Απόκρυψη υπολοίπων', focus: 'Εστίαση',
    sectionOn: 'Τομή — κέλυφος, καπάκι και στεφάνη ημιδιαφανή',
    loading: 'Φόρτωση γεωμετρίας', explode: 'Ανάπτυξη',
    show: 'Εμφάνιση', hide: 'Απόκρυψη', fullscreen: 'Πλήρης οθόνη',
    canvasLabel: 'Διαδραστικό τρισδιάστατο μοντέλο πλανητικού μειωτήρα'
  },
  en: {
    brand: 'EXPERTEASE DESIGNS · ENGINEERING VIEWER',
    title: 'Planetary gearbox PG-4',
    sub: 'Single stage · helical teeth β = 12° · i = 4 : 1',
    nin: 'Input', nout: 'Output', ratio: 'Ratio', parts: 'Components',
    stAssembled: 'Collapsed', stExploded: 'Exploded',
    tbRotate: 'Rotate', tbZoom: 'Zoom', tbExplode: 'Explode', tbCollapse: 'Collapse',
    tbSection: 'Section', tbComponents: 'Components', tbRun: 'Run', tbReset: 'Reset view',
    panelTitle: 'Components', pieces: 'pieces',
    hint: 'Drag: rotate · Scroll: zoom · Click: select · Double-click: focus',
    lblQty: 'Quantity', lblMaterial: 'Material', lblSpec: 'Specification', lblRole: 'Function',
    pos: 'Item', hideOthers: 'Hide others', focus: 'Focus',
    sectionOn: 'Section — housing, cover and ring gear shown translucent',
    loading: 'Loading geometry', explode: 'Explode',
    show: 'Show', hide: 'Hide', fullscreen: 'Fullscreen',
    canvasLabel: 'Interactive 3D model of a planetary gearbox'
  }
};

/* Σειρά = σειρά λίστας (από εμπρός προς τα πίσω, όπως ένα BOM).
   pieces = φυσικά τεμάχια που περιέχει το εξάρτημα. */
export const COMPONENTS = [
  { id: 'bolts', pieces: 16,
    el: { name: 'Κοχλίες M5×28 με ροδέλες', qty: '8 + 8', mat: 'Χάλυβας 10.9, μαύρη οξείδωση · ροδέλες DIN 125 επιψευδαργυρωμένες', spec: 'ISO 4017 · ροπή σύσφιξης 8.5 Nm', role: 'Σφίγγουν καπάκι και κέλυφος πάνω στη στεφάνη.' },
    en: { name: 'Hex bolts M5×28 with washers', qty: '8 + 8', mat: 'Steel 10.9, black oxide · DIN 125 washers, zinc plated', spec: 'ISO 4017 · tightening torque 8.5 Nm', role: 'Clamp the cover and housing onto the ring gear.' } },
  { id: 'cover', pieces: 1,
    el: { name: 'Εμπρόσθιο καπάκι', qty: '1', mat: 'Αλουμίνιο 6082-T6, τορνευμένη όψη', spec: 'Ø138 × 3.5 mm · 8 οπές Ø5.5', role: 'Κλείνει το κέλυφος και συγκρατεί αξονικά τη στεφάνη.' },
    en: { name: 'Front cover', qty: '1', mat: 'Aluminium 6082-T6, face-turned', spec: 'Ø138 × 3.5 mm · 8 × Ø5.5 holes', role: 'Closes the housing and axially retains the ring gear.' } },
  { id: 'hub', pieces: 1,
    el: { name: 'Πλήμνη εξόδου', qty: '1', mat: 'Αλουμίνιο 7075-T6', spec: 'Φλάντζα Ø28 · 6 οπές M2 · οπή Ø10 H7 με σφηνόδρομο', role: 'Παραλαμβάνει τη ροπή από τον φορέα — έξοδος με i = 4 : 1.' },
    en: { name: 'Output hub', qty: '1', mat: 'Aluminium 7075-T6', spec: 'Ø28 flange · 6 × M2 · Ø10 H7 keyed bore', role: 'Takes torque off the carrier — output at i = 4 : 1.' } },
  { id: 'carrierF', pieces: 1,
    el: { name: 'Φορέας δορυφόρων — εμπρός πλάκα', qty: '1', mat: 'Αλουμίνιο 7075-T6, κόκκινη σκληρή ανοδίωση', spec: 'Ø76 × 2.4 mm · δακτύλιος με 3 ακτίνες · οπές αξόνων στις 120°', role: 'Κρατά τους δορυφόρους σε ίση απόσταση και περιστρέφεται με το ¼ της εισόδου.' },
    en: { name: 'Planet carrier — front plate', qty: '1', mat: 'Aluminium 7075-T6, red hard anodised', spec: 'Ø76 × 2.4 mm · ring with 3 spokes · pin bores at 120°', role: 'Holds the planets equally spaced; turns at ¼ of input speed.' } },
  { id: 'pins', pieces: 9,
    el: { name: 'Άξονες δορυφόρων με ασφάλειες', qty: '3 + 6', mat: '100Cr6 βαμμένος & λειασμένος · ασφάλειες DIN 471', spec: 'Ø5.4 h6 × 15 mm', role: 'Φέρουν τους δορυφόρους μέσα στις δύο πλάκες του φορέα.' },
    en: { name: 'Planet pins with circlips', qty: '3 + 6', mat: '100Cr6 hardened & ground · DIN 471 circlips', spec: 'Ø5.4 h6 × 15 mm', role: 'Carry the planets between the two carrier plates.' } },
  { id: 'planets', pieces: 3,
    el: { name: 'Δορυφόροι', qty: '3', mat: '18CrNiMo7-6, ενανθράκωση & λείανση', spec: 'z = 18 · mₜ = 1.8 · β = 12° αριστερή έλικα', role: 'Κυλίονται ανάμεσα στον ηλιακό και τη στεφάνη.' },
    en: { name: 'Planet gears', qty: '3', mat: '18CrNiMo7-6, case hardened & ground', spec: 'z = 18 · mₜ = 1.8 · β = 12° left hand', role: 'Roll between the sun gear and the ring gear.' } },
  { id: 'sun', pieces: 1,
    el: { name: 'Ηλιακός τροχός', qty: '1', mat: '18CrNiMo7-6, ενανθράκωση & λείανση', spec: 'z = 18 · mₜ = 1.8 · β = 12° δεξιά έλικα', role: 'Είσοδος κίνησης· παίρνει ροπή από τον άξονα μέσω σφήνας.' },
    en: { name: 'Sun gear', qty: '1', mat: '18CrNiMo7-6, case hardened & ground', spec: 'z = 18 · mₜ = 1.8 · β = 12° right hand', role: 'Input member; driven by the shaft through a key.' } },
  { id: 'ring', pieces: 1,
    el: { name: 'Στεφάνη (εσωτερική οδόντωση)', qty: '1', mat: '42CrMo4, νιτρίωση', spec: 'z = 54 · mₜ = 1.8 · Ø112 × 8 mm', role: 'Σταθερή· παραλαμβάνει την αντίδραση της ροπής.' },
    en: { name: 'Ring gear (internal)', qty: '1', mat: '42CrMo4, nitrided', spec: 'z = 54 · mₜ = 1.8 · Ø112 × 8 mm', role: 'Stationary; reacts the gearbox torque.' } },
  { id: 'carrierR', pieces: 1,
    el: { name: 'Φορέας δορυφόρων — πίσω πλάκα', qty: '1', mat: 'Αλουμίνιο 7075-T6, κόκκινη σκληρή ανοδίωση', spec: 'Ø79 × 2.2 mm', role: 'Στηρίζει το πίσω άκρο των αξόνων των δορυφόρων.' },
    en: { name: 'Planet carrier — rear plate', qty: '1', mat: 'Aluminium 7075-T6, red hard anodised', spec: 'Ø79 × 2.2 mm', role: 'Supports the rear end of the planet pins.' } },
  { id: 'bearing', pieces: 1,
    el: { name: 'Ένσφαιρος τριβέας 6000', qty: '1', mat: '100Cr6', spec: '10 × 26 × 8 mm · 9 σφαίρες', role: 'Στηρίζει τον άξονα εισόδου μέσα στο κέλυφος.' },
    en: { name: 'Deep-groove ball bearing 6000', qty: '1', mat: '100Cr6', spec: '10 × 26 × 8 mm · 9 balls', role: 'Supports the input shaft in the housing.' } },
  { id: 'housing', pieces: 1,
    el: { name: 'Κέλυφος', qty: '1', mat: 'Χυτό αλουμίνιο EN AC-42100, μαύρη ηλεκτροστατική βαφή', spec: 'Ø138 × 21.5 mm · 12 νευρώσεις', role: 'Φέρει τη στεφάνη και το ρουλεμάν· σημείο στήριξης του μειωτήρα.' },
    en: { name: 'Housing', qty: '1', mat: 'Cast aluminium EN AC-42100, black powder coat', spec: 'Ø138 × 21.5 mm · 12 ribs', role: 'Carries the ring gear and bearing; mounting interface.' } },
  { id: 'nuts', pieces: 16,
    el: { name: 'Περικόχλια M5 με ροδέλες', qty: '8 + 8', mat: 'Χάλυβας κλάσης 10, μαύρη οξείδωση', spec: 'ISO 4032', role: 'Ασφαλίζουν τους κοχλίες στην πίσω πλευρά.' },
    en: { name: 'Hex nuts M5 with washers', qty: '8 + 8', mat: 'Steel class 10, black oxide', spec: 'ISO 4032', role: 'Secure the bolts at the rear face.' } },
  { id: 'shaft', pieces: 2,
    el: { name: 'Άξονας εισόδου με σφήνα', qty: '1 + 1', mat: 'C45 βαμμένος & επαναφορά · σφήνα DIN 6885 A 3×3', spec: 'Ø10 h6 × 40 mm', role: 'Μεταφέρει την κίνηση του κινητήρα στον ηλιακό τροχό.' },
    en: { name: 'Input shaft with key', qty: '1 + 1', mat: 'C45 quenched & tempered · DIN 6885 A 3×3 key', spec: 'Ø10 h6 × 40 mm', role: 'Brings motor input to the sun gear.' } }
];
