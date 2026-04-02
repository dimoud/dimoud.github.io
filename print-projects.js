/* ═══════════════════════════════════════════════════════════════
   3D PRINT / LASER CUT PROJECTS DATA
   Add, remove, or reorder projects here — the page renders
   them automatically. Each object supports:

     catEn / catEl      — category label (English / Greek)
     titleEn / titleEl  — project title
     descEn / descEl    — description paragraph
     tagEn  / tagEl     — comma-separated tags shown as pills
     urlLabel           — text shown in the browser bar (tech info)
     images             — array of image paths (first = thumbnail)
     rev                — set true to flip image/text order
═══════════════════════════════════════════════════════════════ */

const PRINT_PROJECTS = [
  {
    catEn: '3D Print · Custom Product Design',
    catEl: '3D Printing · Εξατομικευμένος Σχεδιασμός',
    titleEn: 'Automatic Cat Feeder',
    titleEl: 'Αυτόματος Τροφοδότης Γάτας',
    descEn: 'Fully custom-designed automated cat feeder — timed dispensing mechanism, ergonomic hopper, and easy-clean assembly. Every part modelled in SolidWorks and printed in PLA.',
    descEl: 'Πλήρως custom αυτόματος τροφοδότης γάτας — μηχανισμός χρονισμένης διανομής, εργονομικό χοάνι, εύκολο καθάρισμα. Σχεδιασμένο στο SolidWorks και εκτυπωμένο σε PLA.',
    tagEn: 'FDM / PLA,Custom Design,SolidWorks,Functional Part',
    tagEl: 'FDM / PLA,Εξατομικευμένος Σχεδιασμός,SolidWorks,Λειτουργικό Εξάρτημα',
    urlLabel: '3D Print · PLA · Custom Design',
    images: ['images/catfeeder/1.png', 'images/catfeeder/2.png', 'images/catfeeder/3.png', 'images/catfeeder/4.png', 'images/catfeeder/5.png'],
    rev: false
  },
  {
    catEn: '3D Print · Product Design · Aerodynamics',
    catEl: '3D Printing · Σχεδιασμός Προϊόντος · Αεροδυναμική',
    titleEn: 'Desk Fan',
    titleEl: 'Επιτραπέζιος Ανεμιστήρας',
    descEn: 'Custom desktop fan with optimised blade geometry and compact housing — designed for quiet operation and maximum airflow. Fully 3D-printed assembly, motor-ready enclosure.',
    descEl: 'Εξατομικευμένος επιτραπέζιος ανεμιστήρας με βελτιστοποιημένη γεωμετρία πτερύγων — σχεδιασμένος για αθόρυβη λειτουργία και μέγιστη ροή αέρα.',
    tagEn: 'FDM / PETG,Blade Geometry,Product Design,Assembly',
    tagEl: 'FDM / PETG,Γεωμετρία Πτερύγων,Σχεδιασμός Προϊόντος,Συναρμολόγηση',
    urlLabel: '3D Print · PETG · Optimised Blades',
    images: ['images/desk_fan/1.png', 'images/desk_fan/2.png', 'images/desk_fan/3.png', 'images/desk_fan/4.png', 'images/desk_fan/5.png', 'images/desk_fan/6.png', 'images/desk_fan/7.png', 'images/desk_fan/8.png'],
    rev: true
  },
  {
    catEn: '3D Print · Electronics Enclosure · Custom Design',
    catEl: '3D Printing · Κέλυφος Ηλεκτρονικών · Εξατομικευμένος Σχεδιασμός',
    titleEn: 'Dog Repellent Device',
    titleEl: 'Συσκευή Απώθησης Σκύλων',
    descEn: 'Compact ultrasonic dog repellent device — fully custom housing designed around the electronics. Weatherproof enclosure, clean fit, snap-close assembly. Reverse-engineered from client brief.',
    descEl: 'Συμπαγής υπερηχητική συσκευή απώθησης σκύλων — πλήρως εξατομικευμένο περίβλημα γύρω από τα ηλεκτρονικά. Αδιάβροχο, snap-close συναρμολόγηση.',
    tagEn: 'FDM / ABS,Electronics Housing,Weatherproof,Custom Brief',
    tagEl: 'FDM / ABS,Κέλυφος Ηλεκτρονικών,Αδιάβροχο,Εξατομικευμένο Brief',
    urlLabel: '3D Print · Custom Electronics Housing',
    images: ['images/dog_repellant/1.png', 'images/dog_repellant/2.png', 'images/dog_repellant/3.png', 'images/dog_repellant/4.png', 'images/dog_repellant/5.png', 'images/dog_repellant/6.png', 'images/dog_repellant/dog_repeller.png', 'images/dog_repellant/dog_repeller 2.png'],
    rev: true
  },
  {
    catEn: '3D Print · Reverse Engineering · Automotive',
    catEl: '3D Printing · Αντίστροφη Μηχανική · Αυτοκίνητο',
    titleEn: 'Car Keys Button Fix',
    titleEl: 'Επισκευή Κουμπιών Κλειδιού Αυτοκινήτου',
    descEn: 'Reverse-engineered replacement buttons for a worn car key fob — exact geometry reproduced from the original, printed in flexible TPU for tactile feedback and long-term durability.',
    descEl: 'Αντικατάσταση κουμπιών φθαρμένου κλειδιού αυτοκινήτου — ακριβής αναπαραγωγή γεωμετρίας, εκτυπωμένη σε εύκαμπτο TPU για απόκριση αφής και ανθεκτικότητα.',
    tagEn: 'FDM / TPU,Reverse Engineering,Automotive,Key Fob Repair',
    tagEl: 'FDM / TPU,Αντίστροφη Μηχανική,Αυτοκίνητο,Επισκευή Κλειδιού',
    urlLabel: '3D Print · TPU · Reverse Engineering',
    images: ['images/3d_prints/car_keys_button_fix.PNG', 'images/3d_prints/car_keys_button_fix_2.PNG'],
    rev: false
  },
  {
    catEn: '3D Print · Home Organisation · Wall Mount',
    catEl: '3D Printing · Οικιακή Οργάνωση · Επίτοιχη Βάση',
    titleEn: 'Custom Wall Mount Base',
    titleEl: 'Εξατομικευμένη Επίτοιχη Βάση',
    descEn: 'Custom wall-mount base for home or office — modular design for flexible attachment. Clean geometric profile, printed in PLA with countersunk mounting points for a flush wall finish.',
    descEl: 'Εξατομικευμένη επίτοιχη βάση για οικία ή γραφείο — αρθρωτός σχεδιασμός για ευέλικτη τοποθέτηση. Καθαρό γεωμετρικό προφίλ, εκτυπωμένο σε PLA.',
    tagEn: 'FDM / PLA,Wall Mount,Home Organisation,Custom Design',
    tagEl: 'FDM / PLA,Επίτοιχη Βάση,Οικιακή Οργάνωση,Εξατομικευμένος Σχεδιασμός',
    urlLabel: '3D Print · PLA · Wall Mount',
    images: ['images/3d_prints/custom_wall_mount_base_1.PNG', 'images/3d_prints/custom_wall_mount_base_2.PNG', 'images/3d_prints/custom_wall_mount_base_3.PNG'],
    rev: true
  },
  {
    catEn: '3D Print · Functional Part · Extension',
    catEl: '3D Printing · Λειτουργικό Εξάρτημα · Επέκταση',
    titleEn: 'Extension Part',
    titleEl: 'Εξάρτημα Επέκτασης',
    descEn: 'Printed extension part designed to add reach or clearance to an existing assembly — precise fit, drop-in replacement geometry, produced in PETG for strength and dimensional stability.',
    descEl: 'Εκτυπωμένο εξάρτημα επέκτασης για πρόσθετη εμβέλεια ή απόσταση σε υπάρχουσα συναρμολόγηση — ακριβής εφαρμογή, παραγόμενο σε PETG.',
    tagEn: 'FDM / PETG,Extension Part,Drop-in Fit,Custom Brief',
    tagEl: 'FDM / PETG,Εξάρτημα Επέκτασης,Άμεση Εφαρμογή,Εξατομικευμένο Brief',
    urlLabel: '3D Print · PETG · Extension Part',
    images: ['images/3d_prints/extension_part_1.PNG', 'images/3d_prints/extension_part_2.PNG', 'images/3d_prints/extension_part_3.PNG'],
    rev: false
  },
  {
    catEn: '3D Print · Hinge · Mechanical Hardware',
    catEl: '3D Printing · Μεντεσές · Μηχανικά Εξαρτήματα',
    titleEn: 'Wall Hinge',
    titleEl: 'Επίτοιχος Μεντεσές',
    descEn: 'Custom wall hinge — designed for smooth pivoting action with flush wall mounting. Printed in PETG for impact resistance; includes a standard wall hinge variant and a heavy-duty version.',
    descEl: 'Εξατομικευμένος επίτοιχος μεντεσές — σχεδιασμένος για ομαλή στρέψη με επίπεδη τοποθέτηση. Εκτυπωμένος σε PETG για αντοχή σε κρούση.',
    tagEn: 'FDM / PETG,Hinge,Wall Mount,Mechanical Hardware',
    tagEl: 'FDM / PETG,Μεντεσές,Επίτοιχη Τοποθέτηση,Μηχανικά Εξαρτήματα',
    urlLabel: '3D Print · PETG · Custom Hinge',
    images: ['images/3d_prints/hinge_1.PNG', 'images/3d_prints/hinge_2.PNG', 'images/3d_prints/wall_hinge_1.PNG', 'images/3d_prints/wall_hinge_2.PNG'],
    rev: true
  },
  {
    catEn: '3D Print · RC Car · Replacement Parts',
    catEl: '3D Printing · RC Αυτοκίνητο · Ανταλλακτικά',
    titleEn: 'RC Car Replacement Parts',
    titleEl: 'Ανταλλακτικά RC Αυτοκινήτου',
    descEn: 'Full set of custom replacement parts for an RC car — chassis components, brackets, and covers modelled from broken originals and printed in ABS for heat and impact resistance.',
    descEl: 'Πλήρες σετ εξατομικευμένων ανταλλακτικών για RC αυτοκίνητο — εξαρτήματα πλαισίου, στηρίγματα και καλύμματα μοντελοποιημένα από σπασμένα πρωτότυπα, εκτυπωμένα σε ABS.',
    tagEn: 'FDM / ABS,RC Car,Replacement Parts,Reverse Engineering',
    tagEl: 'FDM / ABS,RC Αυτοκίνητο,Ανταλλακτικά,Αντίστροφη Μηχανική',
    urlLabel: '3D Print · ABS · RC Car Parts',
    images: ['images/3d_prints/rc_car_part_1.PNG', 'images/3d_prints/rc_car_part_2.PNG', 'images/3d_prints/rc_car_part_3.PNG', 'images/3d_prints/rc_car_part_4.PNG', 'images/3d_prints/rc_car_part_5.PNG', 'images/3d_prints/rc_car_part_6.PNG', 'images/3d_prints/rc_car_part_7.PNG'],
    rev: false
  },
  {
    catEn: '3D Print · Home Organisation · Bathroom',
    catEl: '3D Printing · Οικιακή Οργάνωση · Μπάνιο',
    titleEn: 'Bathroom Shelf Organiser',
    titleEl: 'Οργανωτής Ραφιού Μπάνιου',
    descEn: 'Compact bathroom shelf organiser — designed to maximise counter space with divided compartments for toiletries. Smooth finish, water-resistant PETG, easy to clean.',
    descEl: 'Συμπαγής οργανωτής ραφιού μπάνιου — μεγιστοποίηση χώρου πάγκου με διαχωρισμένες θήκες. Λεία επιφάνεια, ανθεκτικό PETG, εύκολος καθαρισμός.',
    tagEn: 'FDM / PETG,Bathroom,Home Organisation,Shelf Organiser',
    tagEl: 'FDM / PETG,Μπάνιο,Οικιακή Οργάνωση,Οργανωτής Ραφιού',
    urlLabel: '3D Print · PETG · Bathroom Organiser',
    images: ['images/3d_prints/self_bathroum_organiser_1.PNG', 'images/3d_prints/self_bathroum_organiser_2.PNG'],
    rev: true
  },
  {
    catEn: '3D Print · Thread Tool · Custom Tooling',
    catEl: '3D Printing · Εργαλείο Σπειρώματος · Εξατομικευμένα Εργαλεία',
    titleEn: 'Thread Input Device',
    titleEl: 'Συσκευή Εισαγωγής Σπειρώματος',
    descEn: 'Custom thread input and guiding device — precise bore geometry for consistent thread feeding in production jigs. Available in two variants; also includes an extended extraction tool version.',
    descEl: 'Εξατομικευμένη συσκευή εισαγωγής και οδήγησης σπειρώματος — ακριβής γεωμετρία οπής για σταθερή τροφοδότηση σπειρώματος σε βιομηχανικές βάσεις.',
    tagEn: 'FDM / PLA,Thread Tool,Production Jig,Custom Tooling',
    tagEl: 'FDM / PLA,Εργαλείο Σπειρώματος,Βιομηχανική Βάση,Εξατομικευμένα Εργαλεία',
    urlLabel: '3D Print · PLA · Thread Tooling',
    images: ['images/3d_prints/thread_input_device_1.PNG', 'images/3d_prints/thread_input_device_2.PNG', 'images/3d_prints/EX_TOOL_THREAD_INPUT_1.PNG', 'images/3d_prints/EX_TOOL_THREAD_INPUT_2.PNG', 'images/3d_prints/EX_TOOL_THREAD_INPUT_3.PNG'],
    rev: false
  },
  {
    catEn: '3D Print · Bike Accessory · Custom Mount',
    catEl: '3D Printing · Αξεσουάρ Ποδηλάτου · Εξατομικευμένη Βάση',
    titleEn: 'Torch Grip for Bicycle',
    titleEl: 'Βάση Φακού για Ποδήλατο',
    descEn: 'Custom handlebar torch grip mount — secure clamping geometry sized to a specific torch diameter, printed in PETG for outdoor UV and weather resistance. No-slip ribbed inner surface.',
    descEl: 'Εξατομικευμένη βάση φακού για τιμόνι ποδηλάτου — ασφαλής σύσφιγξη προσαρμοσμένη στη διάμετρο φακού, εκτυπωμένη σε PETG για αντοχή σε UV και καιρικές συνθήκες.',
    tagEn: 'FDM / PETG,Bicycle,Torch Mount,Outdoor',
    tagEl: 'FDM / PETG,Ποδήλατο,Βάση Φακού,Εξωτερικός Χώρος',
    urlLabel: '3D Print · PETG · Bicycle Torch Mount',
    images: ['images/3d_prints/torch_grip_for_bicyle_1.PNG', 'images/3d_prints/torch_grip_for_bicyle_2.PNG'],
    rev: true
  },
  {
    catEn: '3D Print · Bathroom · Greek Aesthetic',
    catEl: '3D Printing · Μπάνιο · Ελληνική Αισθητική',
    titleEn: 'Toothbrush Wall Mount — Greek Aesthetic',
    titleEl: 'Επίτοιχη Βάση Οδοντόβουρτσας — Ελληνική Αισθητική',
    descEn: 'Wall-mounted toothbrush holder with Greek key meander pattern — functional bathroom organiser with a decorative twist. Printed in white PLA; designed for easy wall installation.',
    descEl: 'Επίτοιχη θήκη οδοντόβουρτσας με ελληνικό μαίανδρο — λειτουργικός οργανωτής μπάνιου με διακοσμητικό στοιχείο. Εκτυπωμένο σε λευκό PLA.',
    tagEn: 'FDM / PLA,Bathroom,Greek Pattern,Wall Mount,Decorative',
    tagEl: 'FDM / PLA,Μπάνιο,Ελληνικό Μοτίβο,Επίτοιχη Βάση,Διακοσμητικό',
    urlLabel: '3D Print · PLA · Greek Aesthetic',
    images: ['images/3d_prints/wall_mount_for_toothbrush_base_greek_aesthetic_1.PNG', 'images/3d_prints/wall_mount_for_toothbrush_base_greek_aesthetic_2.PNG', 'images/3d_prints/wall_mount_for_toothbrush_base_greek_aesthetic_3.PNG'],
    rev: false
  },
  {
    catEn: '3D Print · Bathroom · Shower Rod Fitting',
    catEl: '3D Printing · Μπάνιο · Βάση Κουρτίνας Ντους',
    titleEn: 'Spherical Wall Base for Shower Rod',
    titleEl: 'Σφαιρική Επίτοιχη Βάση για Κοντάρι Ντους',
    descEn: 'Custom spherical wall base for a shower curtain rod — ball-and-socket geometry for adjustable angle, printed in waterproof PETG. Clean aesthetic, secure wall fixing.',
    descEl: 'Εξατομικευμένη σφαιρική επίτοιχη βάση για κοντάρι κουρτίνας ντους — γεωμετρία ball-and-socket για ρυθμιζόμενη γωνία, εκτυπωμένη σε αδιάβροχο PETG.',
    tagEn: 'FDM / PETG,Bathroom,Shower Rod,Waterproof,Custom Fitting',
    tagEl: 'FDM / PETG,Μπάνιο,Κοντάρι Ντους,Αδιάβροχο,Εξατομικευμένη Βάση',
    urlLabel: '3D Print · PETG · Shower Rod Base',
    images: ['images/3d_prints/wall_sperical_base_for_douche_rod_1.PNG', 'images/3d_prints/wall_sperical_base_for_douche_rod_2.PNG', 'images/3d_prints/wall_sperical_base_for_douche_rod_3.PNG'],
    rev: true
  },
  {
    catEn: '3D Print · Functional Part · Cap & Base',
    catEl: '3D Printing · Λειτουργικό Εξάρτημα · Καπάκι & Βάση',
    titleEn: 'Cap & Base Assembly',
    titleEl: 'Συναρμολόγηση Καπακιού & Βάσης',
    descEn: 'Snap-fit cap and base assembly — custom enclosure components designed for a precise snap closure. Produced in PLA with tight dimensional tolerances for repeatable fit across multiple units.',
    descEl: 'Snap-fit καπάκι και βάση — εξατομικευμένα εξαρτήματα περιβλήματος με ακριβές κλείσιμο. Παραγόμενα σε PLA με στενές ανοχές για επαναλαμβανόμενη εφαρμογή.',
    tagEn: 'FDM / PLA,Snap Fit,Enclosure,Custom Part',
    tagEl: 'FDM / PLA,Snap Fit,Περίβλημα,Εξατομικευμένο Εξάρτημα',
    urlLabel: '3D Print · PLA · Snap-Fit Assembly',
    images: ['images/3d_prints/cap_part_1.PNG', 'images/3d_prints/Base_part.PNG'],
    rev: false
  },
  {
    catEn: 'Laser Cut · Sheet Metal · Structural Bracket',
    catEl: 'Laser Cut · Φύλλο Μετάλλου · Δομικό Στήριγμα',
    titleEn: 'Steel Extension Bracket',
    titleEl: 'Χαλύβδινος Βραχίονας Επέκτασης',
    descEn: 'Laser-cut and brake-pressed steel extension bracket — engineered to provide structural reach and offset for industrial and commercial mounting applications. Tight tolerances, durable finish.',
    descEl: 'Laser-cut και διαμορφωμένος χαλύβδινος βραχίονας επέκτασης — για δομική επέκταση και μετατόπιση σε βιομηχανικές και εμπορικές εφαρμογές. Στενές ανοχές, ανθεκτική επιφάνεια.',
    tagEn: 'Laser Cutting,Brake Press,Sheet Metal,Custom Bracket',
    tagEl: 'Laser Cutting,Brake Press,Φύλλο Μετάλλου,Εξατομικευμένο Στήριγμα',
    urlLabel: 'Laser Cut · Brake Press · Sheet Metal',
    images: ['images/extension/1.png', 'images/extension/2.png', 'images/extension/3.png', 'images/extension/4.png'],
    rev: false
  },
  {
    catEn: '3D Print · Laser Cut · Custom Fabrication Tools',
    catEl: '3D Printing · Laser Cut · Εξατομικευμένα Εργαλεία',
    titleEn: 'Custom Fabrication Tools',
    titleEl: 'Εξατομικευμένα Εργαλεία Κατασκευής',
    descEn: 'Purpose-built fabrication tools and jigs — trailer assembly tools, custom fixtures, and a Xiaomi Smart Band charger holder. Designed in-house and produced via 3D printing and laser cutting for fast, precise production.',
    descEl: 'Εξατομικευμένα εργαλεία κατασκευής — εργαλεία συναρμολόγησης τρέιλερ, ειδικές βάσεις και θήκη φόρτισης Xiaomi Smart Band. Σχεδιασμένα και κατασκευασμένα εσωτερικά.',
    tagEn: 'FDM / PLA,Laser Cutting,Jig & Fixture,Trailer Tool,Charger Holder',
    tagEl: 'FDM / PLA,Laser Cutting,Βάσεις & Εργαλεία,Εργαλείο Τρέιλερ,Θήκη Φόρτισης',
    urlLabel: '3D Print & Laser · Custom Tools & Jigs',
    images: [
      'images/tools/trailer_tool.png', 'images/tools/trailer_tool 2.png', 'images/tools/trailer_tool 3.png',
      'images/tools/xiami_smart_band_charger.png',
      'images/tools/1.png', 'images/tools/2.png', 'images/tools/3.png', 'images/tools/4.png',
      'images/tools/5.png', 'images/tools/6.png', 'images/tools/7.png', 'images/tools/8.png', 'images/tools/9.png',
      'images/tools/Untitled Project 2.png', 'images/tools/Untitled Project 3.png', 'images/tools/Untitled Project 4.png'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Jig & Fixture · Steel Rod Clamping',
    catEl: '3D Printing · Βάση & Εργαλείο · Σύσφιγξη Χαλύβδινων Ράβδων',
    titleEn: 'Steel Rod Clamp Base & Handle',
    titleEl: 'Βάση & Χερούλι Σύσφιγξης Χαλύβδινων Ράβδων',
    descEn: 'Custom clamping system for steel rods — a screw-tightened base that locks rods in place, paired with a matching ergonomic handle. Designed for repeatable positioning in production and workshop use.',
    descEl: 'Εξατομικευμένο σύστημα σύσφιγξης χαλύβδινων ράβδων — βάση με κοχλία για ακλόνητο κράτημα και ταιριαστό εργονομικό χερούλι. Σχεδιασμένο για επαναλαμβανόμενη τοποθέτηση σε εργαστήριο.',
    tagEn: 'FDM / PLA,Clamp,Steel Rod,Jig & Fixture,Workshop',
    tagEl: 'FDM / PLA,Σύσφιγξη,Χαλύβδινη Ράβδος,Βάση Εργαλείου,Εργαστήριο',
    urlLabel: '3D Print · PLA · Steel Rod Clamping System',
    images: [
      'images/3d_prints/BASE_FOR_STEEL_RODS_TIGHT_HOLD_WITH_SCREWS_1.PNG',
      'images/3d_prints/BASE_FOR_STEEL_RODS_TIGHT_HOLD_WITH_SCREWS_2.PNG',
      'images/3d_prints/BASE_FOR_STEEL_RODS_TIGHT_HOLD_WITH_SCREWS_3.PNG',
      'images/3d_prints/HANDLE_FOR_STEEL_RODS_TIGHT_FIX_SCREWS_1.PNG',
      'images/3d_prints/HANDLE_FOR_STEEL_RODS_TIGHT_FIX_SCREWS_2.PNG',
      'images/3d_prints/HANDLE_FOR_STEEL_RODS_TIGHT_FIX_SCREWS_3.PNG'
    ],
    rev: false
  },
  {
    catEn: '3D Print · Jig & Fixture · Bracket',
    catEl: '3D Printing · Βάση & Εργαλείο · Στήριγμα',
    titleEn: 'Tight-Fix Bracket',
    titleEl: 'Βραχίονας Σφικτής Εφαρμογής',
    descEn: 'Precision bracket designed to clamp and secure components with tight tolerances — clean geometry, screw-fastened, produced in PLA for workshop and light industrial use.',
    descEl: 'Ακριβής βραχίονας για σφικτή σύσφιγξη εξαρτημάτων — καθαρή γεωμετρία, βιδωτή στερέωση, εκτυπωμένος σε PLA για εργαστηριακή και ελαφρά βιομηχανική χρήση.',
    tagEn: 'FDM / PLA,Bracket,Clamp,Tight Tolerance,Custom Part',
    tagEl: 'FDM / PLA,Στήριγμα,Σύσφιγξη,Στενές Ανοχές,Εξατομικευμένο Εξάρτημα',
    urlLabel: '3D Print · PLA · Tight-Fix Bracket',
    images: [
      'images/3d_prints/BRACKET_TO_FIX_TIGHT_SOMETHING_1.PNG',
      'images/3d_prints/BRACKET_TO_FIX_TIGHT_SOMETHING_2.PNG'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Hand Tool · Magnetic Pointer',
    catEl: '3D Printing · Χειροκίνητο Εργαλείο · Μαγνητικός Δείκτης',
    titleEn: 'Magnetic Pointing Hand Tool',
    titleEl: 'Χειροκίνητο Εργαλείο με Ενσωματωμένους Μαγνήτες',
    descEn: 'Custom hand tool with embedded magnets for precise pointing and part alignment — ergonomic grip, press-fit magnet pockets, printed in PLA for workshop and assembly-line use.',
    descEl: 'Εξατομικευμένο χειροκίνητο εργαλείο με ενσωματωμένους μαγνήτες για ακριβή στόχευση και ευθυγράμμιση εξαρτημάτων — εργονομική λαβή, press-fit θήκες μαγνητών.',
    tagEn: 'FDM / PLA,Hand Tool,Magnets,Alignment,Workshop',
    tagEl: 'FDM / PLA,Χειροκίνητο Εργαλείο,Μαγνήτες,Ευθυγράμμιση,Εργαστήριο',
    urlLabel: '3D Print · PLA · Magnetic Hand Tool',
    images: [
      'images/3d_prints/HAND_TOOL_WITH_MAGNETS_INSERTED_FOR_POITING_1.PNG',
      'images/3d_prints/HAND_TOOL_WITH_MAGNETS_INSERTED_FOR_POITING_2.PNG',
      'images/3d_prints/HAND_TOOL_WITH_MAGNETS_INSERTED_FOR_POITING_3.PNG'
    ],
    rev: false
  },
  {
    catEn: '3D Print · Electronics Enclosure · Ventilation',
    catEl: '3D Printing · Κέλυφος Ηλεκτρονικών · Εξαερισμός',
    titleEn: 'Smoke Fan Housing',
    titleEl: 'Κέλυφος Ανεμιστήρα Καπνού',
    descEn: 'Custom enclosure for a smoke extraction fan — designed around the fan and motor geometry with integrated duct mounts. Printed in heat-resistant PETG for continuous operation near heat sources.',
    descEl: 'Εξατομικευμένο κέλυφος για ανεμιστήρα εξαγωγής καπνού — σχεδιασμένο γύρω από τη γεωμετρία ανεμιστήρα και κινητήρα με ενσωματωμένες βάσεις αγωγών. Εκτυπωμένο σε PETG.',
    tagEn: 'FDM / PETG,Fan Housing,Smoke Extraction,Electronics Enclosure',
    tagEl: 'FDM / PETG,Κέλυφος Ανεμιστήρα,Εξαγωγή Καπνού,Κέλυφος Ηλεκτρονικών',
    urlLabel: '3D Print · PETG · Smoke Fan Housing',
    images: [
      'images/3d_prints/HOUSING_FOR_SMOKE_FAN_1.PNG',
      'images/3d_prints/HOUSING_FOR_SMOKE_FAN_2.PNG',
      'images/3d_prints/HOUSING_FOR_SMOKE_FAN_3.PNG'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Handle · Modular Base',
    catEl: '3D Printing · Λαβή · Αρθρωτή Βάση',
    titleEn: 'Handle Main Base',
    titleEl: 'Κύρια Βάση Λαβής',
    descEn: 'Modular handle base system — clean ergonomic profile designed for attachment to various tools or fixtures. Printed in PLA with countersunk mounting points for a flush, professional finish.',
    descEl: 'Αρθρωτό σύστημα βάσης λαβής — καθαρό εργονομικό προφίλ για σύνδεση σε διάφορα εργαλεία ή βάσεις. Εκτυπωμένο σε PLA με χωνευτά σημεία στερέωσης.',
    tagEn: 'FDM / PLA,Handle,Modular,Custom Design,Workshop',
    tagEl: 'FDM / PLA,Λαβή,Αρθρωτό,Εξατομικευμένος Σχεδιασμός,Εργαστήριο',
    urlLabel: '3D Print · PLA · Modular Handle Base',
    images: [
      'images/3d_prints/Handle_main_base_1.PNG',
      'images/3d_prints/Handle_main_base_2.PNG',
      'images/3d_prints/Handle_main_base_3.PNG'
    ],
    rev: false
  },
  {
    catEn: '3D Print · Electronics Enclosure · Mechatronics',
    catEl: '3D Printing · Κέλυφος Ηλεκτρονικών · Μηχατρονική',
    titleEn: 'DC Motor Case with Belt Tensioner',
    titleEl: 'Κέλυφος DC Κινητήρα με Τεντωτήρα Ιμάντα',
    descEn: 'Sophisticated enclosure housing a DC motor controller, electronics, and integrated belt tensioner — all in one compact assembly. Designed for mechatronic systems requiring tight spatial integration.',
    descEl: 'Εξελιγμένο κέλυφος που στεγάζει ελεγκτή DC κινητήρα, ηλεκτρονικά και ενσωματωμένο τεντωτήρα ιμάντα — όλα σε μία συμπαγή συναρμολόγηση για μηχατρονικά συστήματα.',
    tagEn: 'FDM / PETG,DC Motor,Belt Tensioner,Electronics Housing,Mechatronics',
    tagEl: 'FDM / PETG,DC Κινητήρας,Τεντωτήρας Ιμάντα,Κέλυφος Ηλεκτρονικών,Μηχατρονική',
    urlLabel: '3D Print · PETG · DC Motor + Belt Tensioner Enclosure',
    images: [
      'images/3d_prints/SOPHISTICATED_MOTOR_DC_CASE_HOUSE_ELENTRONICS_AND_BELT_TENSIONER_1.PNG',
      'images/3d_prints/SOPHISTICATED_MOTOR_DC_CASE_HOUSE_ELENTRONICS_AND_BELT_TENSIONER_2.PNG',
      'images/3d_prints/SOPHISTICATED_MOTOR_DC_CASE_HOUSE_ELENTRONICS_AND_BELT_TENSIONER_3.PNG'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Custom Accessory · Slingshot',
    catEl: '3D Printing · Εξατομικευμένο Αξεσουάρ · Σφεντόνα',
    titleEn: 'Slingshot Rubber Band Holder',
    titleEl: 'Θήκη Λαστιχιών Σφεντόνας',
    descEn: 'Sophisticated rubber band holder for a slingshot — optimised geometry for consistent band tension and quick reload. Printed in PLA; available in multiple attachment configurations.',
    descEl: 'Εξελιγμένη θήκη λαστιχιών σφεντόνας — βελτιστοποιημένη γεωμετρία για σταθερή τάση και γρήγορη επαναφόρτωση. Εκτυπωμένη σε PLA, διαθέσιμη σε πολλές διαμορφώσεις.',
    tagEn: 'FDM / PLA,Slingshot,Rubber Band,Custom Accessory,Sport',
    tagEl: 'FDM / PLA,Σφεντόνα,Λαστιχάκι,Εξατομικευμένο Αξεσουάρ,Άθλημα',
    urlLabel: '3D Print · PLA · Slingshot Rubber Band Holder',
    images: [
      'images/3d_prints/SOPHISTICATED_SLIGNSHOT_RUBBER_BANDS_HOLDER_1.PNG',
      'images/3d_prints/SOPHISTICATED_SLIGNSHOT_RUBBER_BANDS_HOLDER_2.PNG',
      'images/3d_prints/SOPHISTICATED_SLIGNSHOT_RUBBER_BANDS_HOLDER_3.PNG',
      'images/3d_prints/SOPHISTICATED_SLIGNSHOT_RUBBER_BANDS_HOLDER_4.PNG'
    ],
    rev: false
  },
  {
    catEn: '3D Print · Firearm Accessory · Stock',
    catEl: '3D Printing · Αξεσουάρ Όπλου · Κοντάκι',
    titleEn: 'Custom Stock',
    titleEl: 'Εξατομικευμένο Κοντάκι',
    descEn: 'Custom-designed stock — ergonomic geometry optimised for balance and cheek weld. Printed in high-strength ABS for durability and dimensional stability under load.',
    descEl: 'Εξατομικευμένο κοντάκι — εργονομική γεωμετρία βελτιστοποιημένη για ισορροπία. Εκτυπωμένο σε υψηλής αντοχής ABS για ανθεκτικότητα και διαστατική σταθερότητα.',
    tagEn: 'FDM / ABS,Stock,Custom Design,High Strength',
    tagEl: 'FDM / ABS,Κοντάκι,Εξατομικευμένος Σχεδιασμός,Υψηλή Αντοχή',
    urlLabel: '3D Print · ABS · Custom Stock',
    images: [
      'images/3d_prints/STOCK_1.PNG',
      'images/3d_prints/STOCK_2.PNG'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Photography · Tripod Base',
    catEl: '3D Printing · Φωτογραφία · Βάση Τρίποδα',
    titleEn: 'Tripod Base',
    titleEl: 'Βάση Τρίποδα',
    descEn: 'Custom tripod base — stable three-point geometry with standard thread interface. Printed in PETG for rigidity and outdoor use; compatible with camera and sensor mounting systems.',
    descEl: 'Εξατομικευμένη βάση τρίποδα — σταθερή τριγωνική γεωμετρία με τυπική σπειρωτή σύνδεση. Εκτυπωμένη σε PETG για ακαμψία και εξωτερική χρήση.',
    tagEn: 'FDM / PETG,Tripod,Photography,Custom Mount',
    tagEl: 'FDM / PETG,Τρίποδας,Φωτογραφία,Εξατομικευμένη Βάση',
    urlLabel: '3D Print · PETG · Tripod Base',
    images: [
      'images/3d_prints/TRIPOD_BASE_!.PNG',
      'images/3d_prints/TRIPOD_BASE_2.PNG',
      'images/3d_prints/TRIPOD_BASE_3.PNG'
    ],
    rev: false
  },
  {
    catEn: '3D Print · Firearm Accessory · Bipod',
    catEl: '3D Printing · Αξεσουάρ Όπλου · Bipod',
    titleEn: 'Bipod',
    titleEl: 'Bipod',
    descEn: 'Custom bipod with folding leg geometry — lightweight, printed in ABS for strength-to-weight ratio. Designed for stable prone shooting position with adjustable leg spread.',
    descEl: 'Εξατομικευμένο bipod με αναδιπλούμενες πόδες — ελαφρύ, εκτυπωμένο σε ABS για βέλτιστο λόγο αντοχής/βάρους. Σχεδιασμένο για σταθερή θέση βολής.',
    tagEn: 'FDM / ABS,Bipod,Custom Design,High Strength,Shooting',
    tagEl: 'FDM / ABS,Bipod,Εξατομικευμένος Σχεδιασμός,Υψηλή Αντοχή,Βολή',
    urlLabel: '3D Print · ABS · Custom Bipod',
    images: [
      'images/3d_prints/bipod_pied.PNG',
      'images/3d_prints/bipod_pied2.PNG'
    ],
    rev: true
  },
  {
    catEn: '3D Print · Reverse Engineering · Automotive',
    catEl: '3D Printing · Αντίστροφη Μηχανική · Αυτοκίνητο',
    titleEn: 'Car Window Winder Handle',
    titleEl: 'Χερούλι Χειροκίνητου Παραθύρου Αυτοκινήτου',
    descEn: 'Reverse-engineered car window winder handle — measured, modelled, and printed as an exact OEM replacement for a discontinued part. Includes cut-section and exploded assembly views confirming internal geometry and fit.',
    descEl: 'Χερούλι χειροκίνητου παραθύρου αυτοκινήτου από αντίστροφη μηχανική — μετρήθηκε, μοντελοποιήθηκε και εκτυπώθηκε ως ακριβές αντίγραφο OEM εξαρτήματος. Τομές και εκρηκτική προβολή για επαλήθευση εσωτερικής γεωμετρίας.',
    tagEn: 'FDM / PLA,Reverse Engineering,Automotive,OEM Replacement',
    tagEl: 'FDM / PLA,Αντίστροφη Μηχανική,Αυτοκίνητο,Αντικατάσταση OEM',
    urlLabel: '3D Print · Reverse Engineering · Automotive Part',
    images: [
      'images/car_ww_handle/handle_car_ww_2.PNG',
      'images/car_ww_handle/handle_car_ww_3.PNG',
      'images/car_ww_handle/handle_car_ww_4.PNG',
      'images/car_ww_handle/handle_car_ww_cut_view_1.PNG',
      'images/car_ww_handle/hand;e_car_ww_cut_view.PNG',
      'images/car_ww_handle/handle_car_ww_explode.PNG'
    ],
    rev: false
  }
];
