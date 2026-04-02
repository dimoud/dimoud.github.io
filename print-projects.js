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
    catEn: 'Laser Cut · Interior Design · Sheet Metal',
    catEl: 'Laser Cut · Εσωτερική Διακόσμηση · Φύλλο Μετάλλου',
    titleEn: 'Metal Wall Décor',
    titleEl: 'Μεταλλική Διακόσμηση Τοίχου',
    descEn: 'Custom laser-cut steel wall décor — intricate patterns cut from sheet steel, powder-coated finish. Suitable for residential and commercial interiors. Custom sizes and motifs available.',
    descEl: 'Εξατομικευμένη laser-cut μεταλλική διακόσμηση — περίπλοκα σχέδια σε φύλλο χάλυβα με βαφή σκόνης. Για οικιακά και εμπορικά εσωτερικά.',
    tagEn: 'Laser Cutting,Steel Sheet,Powder Coat,Custom Pattern',
    tagEl: 'Laser Cutting,Φύλλο Χάλυβα,Βαφή Σκόνης,Εξατομικευμένο Σχέδιο',
    urlLabel: 'Laser Cut · Steel Sheet · Powder Coat',
    images: ['images/wall_decor/1.png', 'images/wall_decor/2.png', 'images/wall_decor/3.png', 'images/wall_decor/4.png'],
    rev: false
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
