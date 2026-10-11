/* ═══════════════════════════════════════════════════════════════
   PROJECTS DATA
   Add, remove, or reorder projects here.
   Each project object supports:
     catEn / catEl   — category label (English / Greek)
     titleEn / titleEl — project title
     descEn / descEl — description paragraph
     badgeEn / badgeEl — optional badge text (leave '' to hide)
     images          — array of image paths (first image = thumbnail)
     link            — CTA link (usually '#contact')
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
      'images/modular_robot/444.webp',
      'images/modular_robot/Untitled Project 4.png',
      'images/modular_robot/Untitled Project 5.png',
      'images/modular_robot/Untitled Project 6.png',
      'images/modular_robot/Untitled Project 7.png',
      'images/modular_robot/adsas.webp',
      'images/modular_robot/saas.webp',
      'images/modular_robot/dwd.webp',
      'images/modular_robot/44104.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Robotics · Electronics · Fabrication', catEl:'Ρομποτική · Ηλεκτρονικά · Κατασκευή',
    titleEn:'Modular Robot II', titleEl:'Αρθρωτό Ρομπότ ΙΙ',
    descEn:'Second-generation modular robot — updated chassis design, improved structural rigidity, and refined mechanical layout based on field experience.',
    descEl:'Δεύτερης γενιάς αρθρωτό ρομπότ — ανανεωμένο πλαίσιο, βελτιωμένη δομική ακαμψία και εκλεπτυσμένη μηχανολογική διάταξη.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/modular_robot_2/17.webp',
      'images/modular_robot_2/18.png',
      'images/modular_robot_2/19.webp',
      'images/modular_robot_2/20.webp',
      'images/modular_robot_2/21.webp',
      'images/modular_robot_2/22.webp',
      'images/modular_robot_2/23.webp',
      'images/modular_robot_2/24.png',
      'images/modular_robot_2/25.webp',
      'images/modular_robot_2/26.webp',
      'images/modular_robot_2/27.webp',
      'images/modular_robot_2/28.webp',
      'images/modular_robot_2/29.webp',
      'images/modular_robot_2/30.webp',
      'images/modular_robot_2/31.webp',
      'images/modular_robot_2/32.webp',
      'images/modular_robot_2/33.webp',
      'images/modular_robot_2/34.webp',
      'images/modular_robot_2/35.png',
      'images/modular_robot_2/36.webp',
      'images/modular_robot_2/37.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Robotics · Tracked Platform', catEl:'Ρομποτική · Τροχήλατη Πλατφόρμα',
    titleEn:'Tracked Platform', titleEl:'Τροχήλατη Πλατφόρμα',
    descEn:'Heavy-duty tracked chassis — steel construction, modular design for field robotics, remote inspection, and outdoor deployment in harsh environments.',
    descEl:'Βαρύ τροχήλατο πλαίσιο — χαλύβδινη κατασκευή, αρθρωτός σχεδιασμός για ρομποτική πεδίου και εξωτερικές συνθήκες.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/tracked/Untitled Project 3.png',
      'images/tracked/Untitled Project 4.png',
      'images/tracked/Untitled Project 5.png',
      'images/tracked/Untitled Project 6.png',
      'images/tracked/Untitled Project 7.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Seatbelt Convincer — Double Seat', titleEl:'Simulator Ζώνης Ασφαλείας — Διπλή Θέση',
    descEn:'Experience a controlled 12 km/h impact in a safe environment. Double-seat version — lightweight steel frame, assembled by one person in half a day.',
    descEl:'Νιώστε μια σύγκρουση στα 12km/h σε ελεγχόμενο περιβάλλον. Έκδοση διπλής θέσης — ελαφρύ, συναρμολογείται σε μισή μέρα.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/double_seat_belt_convincer/1.png',
      'images/double_seat_belt_convincer/2.png',
      'images/double_seat_belt_convincer/3.png',
      'images/double_seat_belt_convincer/4.webp',
      'images/double_seat_belt_convincer/5.png',
      'images/double_seat_belt_convincer/6.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Seatbelt Convincer — Single Seat', titleEl:'Simulator Ζώνης Ασφαλείας — Μονή Θέση',
    descEn:'Compact single-seat seatbelt convincer — same controlled 12 km/h impact experience in a smaller, more portable frame. Ideal for events with limited space.',
    descEl:'Συμπαγής μονής θέσης simulator ζώνης — ίδια εμπειρία σύγκρουσης 12km/h σε μικρότερο, φορητό πλαίσιο. Ιδανικό για εκδηλώσεις με περιορισμένο χώρο.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/seat_bel_convincer_single_seat/1.png',
      'images/seat_bel_convincer_single_seat/2.png',
      'images/seat_bel_convincer_single_seat/3.png',
      'images/seat_bel_convincer_single_seat/4.png',
      'images/seat_bel_convincer_single_seat/5.png',
      'images/seat_bel_convincer_single_seat/6.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Rollcar Simulator', titleEl:'Rollcar Simulator',
    descEn:'Vehicle rollover simulator — place a car on top and roll inside it. Versions I & II, up to 20 rpm. Powerful tool for driver-safety training programmes.',
    descEl:'Προσομοιωτής ανατροπής οχήματος. Τοποθετείτε αυτοκίνητο στην κορυφή. Εκδόσεις Ι & ΙΙ, έως 20rpm. Ισχυρό εργαλείο εκπαίδευσης οδηγών.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/roll_car_simulator/1.webp',
      'images/roll_car_simulator/2.webp',
      'images/roll_car_simulator/3.webp',
      'images/roll_car_simulator/4.webp',
      'images/roll_car_simulator/5.webp',
      'images/roll_car_simulator/6.webp',
      'images/roll_car_simulator/7.webp',
      'images/roll_car_simulator/8.webp',
      'images/roll_car_simulator/9.webp',
      'images/roll_car_simulator/10.webp',
      'images/roll_car_simulator/2.JPG',
      'images/roll_car_simulator/Καταγραφή.JPG'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Rollcar Simulator — Initial Version', titleEl:'Rollcar Simulator — Αρχική Έκδοση',
    descEn:'First prototype of the rollcar vehicle rollover simulator — the foundation for the refined production versions.',
    descEl:'Πρώτο πρωτότυπο του rollcar simulator ανατροπής οχήματος — η βάση για τις εκλεπτυσμένες εκδόσεις παραγωγής.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/roll_car_init/1.webp',
      'images/roll_car_init/2.webp',
      'images/roll_car_init/3.webp',
      'images/roll_car_init/2.JPG',
      'images/roll_car_init/Καταγραφή.JPG'
    ],
    link:'#contact'
  },
  {
    catEn:'Mechanical Engineering · Gear Systems', catEl:'Μηχανολογία · Συστήματα Γραναζιών',
    titleEn:'Gear Assembly', titleEl:'Συναρμολόγηση Γραναζιών',
    descEn:'Custom gear assembly design — precision-machined components, compound gear trains for high-torque, low-speed applications.',
    descEl:'Σχεδιασμός γραναζωτής συναρμολόγησης — εξαρτήματα ακριβείας, σύνθετοι γραναζωτοί μηχανισμοί για εφαρμογές υψηλής ροπής.',
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
    catEn:'Impact Testing · Mechanical Engineering', catEl:'Δοκιμές Κρούσης · Μηχανολογία',
    titleEn:'Impactor', titleEl:'Κρουστήρας',
    descEn:'Precision impact testing device for controlled collision simulations and structural testing under repeatable, measurable impact loads.',
    descEl:'Συσκευή ελεγχόμενης κρούσης για επαναλαμβανόμενες δοκιμές σύγκρουσης και δομικές δοκιμές υπό μετρήσιμη φόρτιση.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/impactor/impactor.webp',
      'images/impactor/impactor 2.png',
      'images/impactor/impactor 3.png',
      'images/impactor/impactor 4.png',
      'images/impactor/impactor 5.png'
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
      'images/harmonic_exhiter/he_1.webp',
      'images/harmonic_exhiter/1.webp',
      'images/harmonic_exhiter/2.webp',
      'images/harmonic_exhiter/3.webp',
      'images/harmonic_exhiter/4.webp',
      'images/harmonic_exhiter/5.webp',
      'images/harmonic_exhiter/6.webp',
      'images/harmonic_exhiter/7.webp',
      'images/harmonic_exhiter/8.webp',
      'images/harmonic_exhiter/9.webp',
      'images/harmonic_exhiter/10.webp',
      'images/harmonic_exhiter/11.webp',
      'images/harmonic_exhiter/12.webp',
      'images/harmonic_exhiter/Untitled Project 6.png',
      'images/harmonic_exhiter/Untitled Project 7.png',
      'images/harmonic_exhiter/Untitled Project 8.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Dynamic Loading · Structural Testing', catEl:'Δυναμική Φόρτιση · Δομικές Δοκιμές',
    titleEn:'Harmonic Exciter II', titleEl:'Αρμονικός Διεγέρτης ΙΙ',
    descEn:'Second-generation harmonic exciter — refined design for improved vibration accuracy and expanded frequency range in structural testing applications.',
    descEl:'Δεύτερης γενιάς αρμονικός διεγέρτης — βελτιωμένος σχεδιασμός για μεγαλύτερη ακρίβεια δόνησης και ευρύτερο εύρος συχνοτήτων.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/harmonic_exciter_2/he1.webp',
      'images/harmonic_exciter_2/he1 2.png',
      'images/harmonic_exciter_2/he1 3.png',
      'images/harmonic_exciter_2/he1 4.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Dynamic Loading · Gear Systems', catEl:'Δυναμική Φόρτιση · Συστήματα Γραναζιών',
    titleEn:'Gear Harmonic Exciter II', titleEl:'Γραναζωτός Αρμονικός Διεγέρτης ΙΙ',
    descEn:'Gear-driven harmonic exciter — second version combining precision gear transmission with controlled harmonic vibration output for structural and fatigue testing.',
    descEl:'Γραναζωτός αρμονικός διεγέρτης — δεύτερη έκδοση που συνδυάζει ακριβή γραναζωτή μετάδοση με ελεγχόμενη αρμονική δόνηση για δομικές δοκιμές.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/gear_harmonic_exciter_2/heg2.webp',
      'images/gear_harmonic_exciter_2/heg2 2.png',
      'images/gear_harmonic_exciter_2/heg2 3.png',
      'images/gear_harmonic_exciter_2/heg2 4.png',
      'images/gear_harmonic_exciter_2/heg2 5.png',
      'images/gear_harmonic_exciter_2/heg2 6.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Laser Cutting · Brake Press · Welding', catEl:'Laser Cutting · Brake Press · Συγκόλληση',
    titleEn:'Sheet Metal Applications', titleEl:'Εφαρμογές Φύλλων Μετάλλου',
    descEn:'Custom sheet metal work — LED wall décor, structural panels, and formed parts. 1.5–5mm steel, optimised for fast fabrication and minimal waste.',
    descEl:'Εφαρμογές από φύλλα μετάλλου — διακοσμητικά LED, δομικά πάνελ και διαμορφωμένα εξαρτήματα. Χάλυβας 1.5–5mm, βελτιστοποιημένο σχεδιασμό.',
    badgeEn:'Sheet Metal', badgeEl:'Sheet Metal',
    images:[
      'images/sheetmetal/1.webp',
      'images/sheetmetal/2.webp',
      'images/sheetmetal/3.png',
      'images/sheetmetal/4.png',
      'images/sheetmetal/5.png',
      'images/sheetmetal/6.webp',
      'images/sheetmetal/7.png',
      'images/sheetmetal/8.png',
      'images/sheetmetal/9.png',
      'images/sheetmetal/10.png',
      'images/sheetmetal/a1.webp',
      'images/sheetmetal/a2.png',
      'images/sheetmetal/a3.png',
      'images/sheetmetal/a4.png',
      'images/sheetmetal/a5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Interior Design', catEl:'Φύλλα Μετάλλου · Εσωτερική Διακόσμηση',
    titleEn:'Metal Wall Décor', titleEl:'Μεταλλική Διακόσμηση Τοίχου',
    descEn:'Custom laser-cut metal wall décor — intricate patterns cut from steel sheet, powder-coated finish. Suitable for residential and commercial interiors.',
    descEl:'Εξατομικευμένη laser-cut μεταλλική διακόσμηση τοίχου — περίπλοκα σχέδια από φύλλο χάλυβα, βαφή σκόνης. Για οικιακούς και εμπορικούς χώρους.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/wall_decor/1.webp',
      'images/wall_decor/2.webp',
      'images/wall_decor/3.webp',
      'images/wall_decor/4.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Consumer Product', catEl:'Φύλλα Μετάλλου · Προϊόν',
    titleEn:'Log Basket', titleEl:'Καλάθι Καυσόξυλων',
    descEn:'Welded steel log basket — 3mm mild steel, powder-coated finish. Designed for easy fabrication with minimal material waste.',
    descEl:'Χαλύβδινο καλάθι καυσόξυλων από χάλυβα 3mm, βαφή σκόνης. Σχεδιασμένο για γρήγορη κατασκευή με ελάχιστα απόβλητα υλικού.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/log_basket/καροτσακι.webp',
      'images/log_basket/καροτσακι 2.png',
      'images/log_basket/καροτσακι 3.png',
      'images/log_basket/καροτσακι 4.png',
      'images/log_basket/καροτσακι 5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Consumer Product', catEl:'Φύλλα Μετάλλου · Προϊόν',
    titleEn:'Log Holder', titleEl:'Βάση Καυσόξυλων',
    descEn:'Steel log holder — welded mild steel construction for indoor fireside storage. Clean geometric design, durable finish.',
    descEl:'Χαλύβδινη βάση καυσόξυλων — συγκολλημένη κατασκευή για αποθήκευση δίπλα σε τζάκι. Καθαρός γεωμετρικός σχεδιασμός, ανθεκτική επιφάνεια.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/log/1.png',
      'images/log/2.png',
      'images/log/3.png',
      'images/log/4.png',
      'images/log/Untitled Project.png',
      'images/log/Untitled Project 2.png',
      'images/log/Untitled Project 3.png',
      'images/log/Untitled Project 4.png',
      'images/log/Untitled Project 5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Structural Connection', catEl:'Φύλλα Μετάλλου · Δομική Σύνδεση',
    titleEn:'Anchor Bracket', titleEl:'Αγκύρωμα',
    descEn:'Custom steel anchor brackets for structural attachment applications — laser-cut, brake-pressed, and welded to spec. Multiple variants for different load cases.',
    descEl:'Εξατομικευμένα χαλύβδινα αγκύρια για δομικές εφαρμογές — laser cut, διαμόρφωση και συγκόλληση. Πολλαπλές παραλλαγές για διαφορετικές φορτίσεις.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/ancor/1.png',
      'images/ancor/2.webp',
      'images/ancor/3.webp',
      'images/ancor/4.webp',
      'images/ancor/5.webp',
      'images/ancor/Untitled Project.png',
      'images/ancor/Untitled Project 2.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Structural Steel · Industrial Fabrication', catEl:'Δομικός Χάλυβας · Βιομηχανική Κατασκευή',
    titleEn:'Steel Base', titleEl:'Χαλύβδινη Βάση',
    descEn:'Heavy structural steel base — welded mild steel, precision-cut mounting points. Designed for industrial machinery, equipment anchoring, and heavy-load applications.',
    descEl:'Βαριά δομική χαλύβδινη βάση — συγκολλημένος χάλυβας, ακριβή σημεία στήριξης. Για βιομηχανικές μηχανές, αγκύρωση εξοπλισμού και εφαρμογές βαριάς φόρτισης.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/steel_base/Untitled Project_left.png',
      'images/steel_base/Untitled Project 2_left.png',
      'images/steel_base/base__right.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Motorcycle · Custom Parts', catEl:'Μοτοσυκλέτα · Εξατομικευμένα Εξαρτήματα',
    titleEn:'Motorcycle Parts', titleEl:'Εξαρτήματα Μοτοσυκλέτας',
    descEn:'Custom-designed and fabricated motorcycle parts — structural brackets, guards, and bespoke components machined and welded to spec.',
    descEl:'Εξατομικευμένα εξαρτήματα μοτοσυκλέτας — δομικά στηρίγματα, προστατευτικά και ειδικά κατασκευασμένα τεμάχια.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/moto_parts/1.webp',
      'images/moto_parts/2.webp',
      'images/moto_parts/3.webp',
      'images/moto_parts/4.png',
      'images/moto_parts/5.png',
      'images/moto_parts/6.webp',
      'images/moto_parts/7.webp',
      'images/moto_parts/8.webp',
      'images/moto_parts/9.png',
      'images/moto_parts/10.webp',
      'images/moto_parts/11.webp',
      'images/moto_parts/12.webp',
      'images/moto_parts/13.png',
      'images/moto_parts/14.webp',
      'images/moto_parts/15.png',
      'images/moto_parts/16.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Product Design · Consumer Electronics', catEl:'Σχεδιασμός Προϊόντος · Καταναλωτικά Ηλεκτρονικά',
    titleEn:'Desk Fan', titleEl:'Επιτραπέζιος Ανεμιστήρας',
    descEn:'Custom-designed desktop fan — optimised blade geometry, compact housing, and quiet operation for personal workspace cooling.',
    descEl:'Εξατομικευμένος επιτραπέζιος ανεμιστήρας — βελτιστοποιημένη γεωμετρία πτερύγων, συμπαγές περίβλημα και αθόρυβη λειτουργία.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/desk_fan/1.webp',
      'images/desk_fan/2.png',
      'images/desk_fan/3.png',
      'images/desk_fan/4.png',
      'images/desk_fan/5.png',
      'images/desk_fan/6.webp',
      'images/desk_fan/7.png',
      'images/desk_fan/8.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Product Design · Pet Care', catEl:'Σχεδιασμός Προϊόντος · Φροντίδα Κατοικίδιων',
    titleEn:'Automatic Cat Feeder', titleEl:'Αυτόματος Τροφοδότης Γάτας',
    descEn:'Automated cat feeder — timed dispensing mechanism, reliable feeding schedule, and easy-to-clean hopper design.',
    descEl:'Αυτόματος τροφοδότης γάτας — μηχανισμός χρονισμένης διανομής, αξιόπιστο πρόγραμμα σίτισης και εύκολα καθαριζόμενη δεξαμενή.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/catfeeder/1.webp',
      'images/catfeeder/2.webp',
      'images/catfeeder/3.webp',
      'images/catfeeder/4.webp',
      'images/catfeeder/5.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Product Design · Animal Control', catEl:'Σχεδιασμός Προϊόντος · Έλεγχος Ζώων',
    titleEn:'Dog Repellent Device', titleEl:'Συσκευή Απώθησης Σκύλων',
    descEn:'Compact dog repellent device — emits ultrasonic or deterrent signals to safely keep dogs away from protected areas without harm.',
    descEl:'Συμπαγής συσκευή απώθησης σκύλων — εκπέμπει υπερηχητικά ή αποτρεπτικά σήματα για την ασφαλή απομάκρυνση σκύλων.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/dog_repellant/1.png',
      'images/dog_repellant/2.png',
      'images/dog_repellant/3.png',
      'images/dog_repellant/4.png',
      'images/dog_repellant/5.png',
      'images/dog_repellant/6.png',
      'images/dog_repellant/dog_repeller.webp',
      'images/dog_repellant/dog_repeller 2.png',
      'images/dog_repellant/dog_repeller 3.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Utility Product', catEl:'Φύλλα Μετάλλου · Πρακτικό Προϊόν',
    titleEn:'Extension Bracket', titleEl:'Βραχίονας Επέκτασης',
    descEn:'Steel extension bracket — laser-cut and formed to provide structural reach or offset for mounting applications in industrial and commercial settings.',
    descEl:'Χαλύβδινος βραχίονας επέκτασης — laser cut και διαμορφωμένος για δομική επέκταση ή μετατόπιση σε βιομηχανικές και εμπορικές εφαρμογές.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/extension/1.webp',
      'images/extension/2.webp',
      'images/extension/3.webp',
      'images/extension/4.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Sport · Mechanical Design', catEl:'Άθλημα · Μηχανολογικός Σχεδιασμός',
    titleEn:'Slingshot Rifle', titleEl:'Σφενδόνα Τυφέκιο',
    descEn:'Precision-engineered slingshot rifle — custom frame geometry, adjustable draw mechanism, and ergonomic stock for sport and target shooting.',
    descEl:'Ακριβείας μηχανολογική σφενδόνα τυφέκιο — εξατομικευμένη γεωμετρία πλαισίου, ρυθμιζόμενος μηχανισμός τάνυσης και εργονομικό κοντάκι.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/slingshot_rifle/1.webp',
      'images/slingshot_rifle/Assem1.webp',
      'images/slingshot_rifle/Assem2.webp',
      'images/slingshot_rifle/Assem3.webp',
      'images/slingshot_rifle/Assem4.webp',
      'images/slingshot_rifle/Assem5.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Fabrication · Custom Tools', catEl:'Κατασκευή · Εξατομικευμένα Εργαλεία',
    titleEn:'Custom Tools', titleEl:'Εξατομικευμένα Εργαλεία',
    descEn:'Purpose-built fabrication tools — trailer tools, custom jigs, and specialised fixtures designed and built in-house for efficient production.',
    descEl:'Εξατομικευμένα εργαλεία κατασκευής — εργαλεία τρέιλερ, ειδικές βάσεις και εξαρτήματα σχεδιασμένα και κατασκευασμένα εσωτερικά.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/tools/1.png',
      'images/tools/2.png',
      'images/tools/3.png',
      'images/tools/4.webp',
      'images/tools/5.webp',
      'images/tools/6.webp',
      'images/tools/7.webp',
      'images/tools/8.webp',
      'images/tools/9.png',
      'images/tools/Untitled Project 2.png',
      'images/tools/Untitled Project 3.png',
      'images/tools/Untitled Project 4.png',
      'images/tools/trailer_tool.png',
      'images/tools/trailer_tool 2.png',
      'images/tools/trailer_tool 3.png',
      'images/tools/xiami_smart_band_charger.webp'
    ],
    link:'#contact'
  },
  {
    catEn:'Technical Documentation · Engineering Drawings', catEl:'Τεχνική Τεκμηρίωση · Μηχανολογικά Σχέδια',
    titleEn:'Assembly Instructions & Drawings', titleEl:'Οδηγίες Συναρμολόγησης & Σχέδια',
    descEn:'Technical assembly instruction drawings — clear, step-by-step visual guides for complex mechanical assemblies, compliant with engineering drawing standards.',
    descEl:'Τεχνικά σχέδια οδηγιών συναρμολόγησης — σαφείς, βήμα-βήμα οπτικοί οδηγοί για σύνθετες μηχανολογικές συναρμολογήσεις.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/assembly_instuctions_drawings/1.jpg',
      'images/assembly_instuctions_drawings/2.jpg',
      'images/assembly_instuctions_drawings/3.jpg',
      'images/assembly_instuctions_drawings/4.jpg',
      'images/assembly_instuctions_drawings/5.jpg',
      'images/assembly_instuctions_drawings/6.jpg',
      'images/assembly_instuctions_drawings/7.jpg',
      'images/assembly_instuctions_drawings/8.jpg'
    ],
    link:'#contact'
  }
];
