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
  }
];
