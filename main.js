/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const EXP_YEARS = new Date().getFullYear() - 2016;

const LANG = {
  el: {
    nav_about:'Σχετικά', nav_projects:'Έργα', nav_software:'Λογισμικό',
    nav_webdesign:'Web Design', nav_3dprint:'3D Print', nav_experience:'Ομάδα', nav_contact:'Επικοινωνία',
    hero_tag:'// Μηχανολογικό Studio — Πανελλαδικά',
    hero_title:'Μηχανολογικός Σχεδιασμός · 3D Printing · Laser Cut & Engrave · Web Design',
    hero_desc:'Βοηθάμε μια ιδέα να γίνει προϊόν που λειτουργεί, με μηχανολογικό σχεδιασμό, ανάλυση και κατασκευή, και όπου χρειάζεται, με την ιστοσελίδα που θα το παρουσιάσει.',
    hero_cta_work:'Δείτε τα Έργα →', hero_cta_contact:'Επικοινωνήστε',
    stat_years:'Χρόνια Εμπειρίας', stat_projects:'Παραδοθέντα Έργα', stat_degrees:'Μεταπτυχιακά',
    edu_strip:'Ιδρυτής — Δημήτριος Μουδιώτης · 5 Πανεπιστήμια, 3 Χώρες',
    edu1_deg:'Dipl.-Ing.', edu1_name:'Μηχανολόγος Μηχανικός',
    edu2_deg:'MSc General Engineering', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc Powertrain Engineering', edu3_name:'IFP School',
    edu4_deg:'MSc Strategic Product Design', edu4_name:'Διεθνές Πανεπιστήμιο Ελλάδος',
    edu5_deg:'MBA Leadership & Project Management', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'Σχετικά με Εμάς',
    about_quote:'«Η μηχανική είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που κρατάς στα χέρια σου.»',
    about_p2:'Σχεδιάζουμε και κατασκευάζουμε μηχανολογικές διατάξεις και εξοπλισμό, από την έρευνα και το CAD ως τον συντονισμό της κατασκευής και τον ποιοτικό έλεγχο. Μαζί με κάθε έργο παραδίδουμε τα σχέδια εξαρτημάτων και συναρμολόγησης, τη λίστα υλικών και τις οδηγίες.',
    about_p3:'Βάση: <strong><span class="accent-red">Αθήνα</span></strong> &amp; <strong><span class="accent-red">Θεσσαλονίκη</span></strong> · εξυπηρετούμε όλη την Ελλάδα και την Ευρωπαϊκή Ένωση.',
    about_p5:'Δεν χρειάζεται να είστε στην Αθήνα ή τη Θεσσαλονίκη για να συνεργαστούμε. Ο μηχανολογικός σχεδιασμός, το CAD, οι τεχνικές μελέτες και οι ιστοσελίδες γίνονται εξ αποστάσεως, και τα κομμάτια από 3D εκτύπωση και laser τα στέλνουμε σε όλη την Ελλάδα.',
    about_p4:'Διαλέγουμε υλικά και τρόπο κατασκευής και συναρμολόγησης ώστε το κόστος να μένει λογικό και να μη σπαταλιέται υλικό. Συντονίζουμε τους υπεργολάβους, επιβλέπουμε την κατασκευή και ελέγχουμε ότι το αποτέλεσμα τηρεί τα πρότυπα ποιότητας και ασφάλειας (ISO).',
    val_1_title:'Ακρίβεια', val_1_text:'Επαλήθευση με FEA, έλεγχος ανοχών και δοκιμές σε πραγματικές συνθήκες, πριν από την παράδοση.', val_1_text_mobile:'Επαλήθευση με FEA και έλεγχος ανοχών.',
    val_2_title:'Πλήρης Κύκλος', val_2_text:'Από το σκίτσο ως τη συναρμολόγηση: σχεδιασμός, λίστα υλικών, κατασκευή και παράδοση. Το έργο δεν περνά από χέρι σε χέρι.', val_2_text_mobile:'Σχεδιασμός, λίστα υλικών, κατασκευή, παράδοση, χωρίς ενδιάμεσους.',
    val_3_title:'Διεθνή Πρότυπα', val_3_text:'Σπουδές σε 3 χώρες. Όσα μάθαμε εκεί τα εφαρμόζουμε σε κάθε έργο εδώ.', val_3_text_mobile:'Σπουδές σε 3 χώρες, εφαρμογή σε κάθε έργο εδώ.',
    val_4_title:'Σχεδιασμός για Κατασκευή', val_4_text:'Σκεφτόμαστε την κατασκευή από την πρώτη μέρα, ώστε το κομμάτι να φτιάχνεται γρήγορα, με λίγη φύρα, και να συναρμολογείται χωρίς προβλήματα.', val_4_text_mobile:'Σκέψη για την κατασκευή από την πρώτη μέρα, με λίγη φύρα.',
    about_bullets:'<li>Πάνω από 10 χρόνια σε μηχανολογικό σχεδιασμό, 3D printing και κατασκευή</li><li>Πλήρης κύκλος: CAD → BOM → κατασκευή → ποιοτικός έλεγχος</li><li>FEA & σχεδιασμός για κατασκευή από την πρώτη μέρα</li>',
    about_bullets_mobile:'',
    proc_label:'Πώς Δουλεύουμε',
    proc_1_title:'Απαιτήσεις', proc_1_text:'Πριν πάρουμε οποιαδήποτε σχεδιαστική απόφαση, αφιερώνουμε χρόνο για να καταλάβουμε τις ανάγκες, τους περιορισμούς και τους στόχους σας.',
    proc_2_title:'Σχεδιασμός', proc_2_text:'3D μοντέλο σε SolidWorks, FEA, πλήρης λίστα υλικών και σχέδια εξαρτημάτων και συναρμολόγησης με οδηγίες, έτοιμα για παραγωγή.',
    proc_3_title:'Παράδοση', proc_3_text:'Συντονίζουμε τους υπεργολάβους, επιβλέπουμε την κατασκευή και ελέγχουμε ποιότητα και ασφάλεια. Ό,τι παραδίδουμε έχει δοκιμαστεί και είναι έτοιμο να λειτουργήσει.',
    principles_label:'Αρχές μας',
    prin_1_title:'Γνώση Κατασκευής', prin_1_text:'Σχεδιάζουμε ξέροντας πώς φτιάχνεται στην πράξη ένα εξάρτημα: κατεργασία, κοπή, συγκόλληση, εκτύπωση. Έτσι οι <span class="accent-red">περιορισμοί του συνεργείου</span> λαμβάνονται υπόψη πριν το σχέδιο φτάσει εκεί.', prin_1_text_mobile:'Σχεδιασμός με γνώση της κατασκευής. Οι περιορισμοί του συνεργείου μπαίνουν από την αρχή.',
    prin_2_title:'Σωστά Εξαρχής', prin_2_text:'Συνήθως το <span class="accent-red">μεγαλύτερο κόστος</span> δεν είναι τα υλικά αλλά τα λάθη στην κατασκευή. Γι’ αυτό σχεδιάζουμε με ανοχές που τηρούνται, εξαρτήματα που ταιριάζουν από την πρώτη φορά και προδιαγραφές που μπορεί να καλύψει ο κατασκευαστής.', prin_2_text_mobile:'Ανοχές που τηρούνται. Εξαρτήματα που ταιριάζουν από την πρώτη φορά.',
    prin_3_title:'Πλήρης Ανάληψη', prin_3_text:'Από τον σχεδιασμό, τους υπολογισμούς και τις προσομοιώσεις ως τον συντονισμό κατασκευής, την επικοινωνία με προμηθευτές, την επίβλεψη συναρμολόγησης και τον <span class="accent-red">τελικό έλεγχο</span>, την ευθύνη την έχει ένας μηχανικός.', prin_3_text_mobile:'Ένας μηχανικός, από τον σχεδιασμό ως τον τελικό έλεγχο.',
    prin_4_title:'Web Design', prin_4_text:'Φτιάχνουμε και <span class="accent-green">ιστοσελίδες από το μηδέν</span>, γραμμένες στο χέρι, χωρίς έτοιμα θέματα. <a href="webdesign.html" class="principle-cta" id="prin-4-cta-el">Δείτε τις Υπηρεσίες Web Design →</a>',
    wd_label:'Γραμμένες στο χέρι · Χωρίς έτοιμα θέματα',
    wd_title:'Κατασκευή Ιστοσελίδων',
    cad_label:'Μηχανολογικός Σχεδιασμός · Αρχεία STEP',
    cad_title:'Μηχανολογικό CAD Σχέδιο & 3D STEP Viewer',
    wd_desc:'Φτιάχνουμε ιστοσελίδες από το μηδέν, χωρίς έτοιμα θέματα και page builders. Κάθε σελίδα και κάθε κίνηση σχεδιάζεται για τη δική σας επιχείρηση.',
    wd_f1:'HTML & CSS στο χέρι', wd_f2:'Διαδραστική κίνηση',
    wd_f3:'WebGL / 3D στοιχεία', wd_f4:'Σχεδιασμός πρώτα για κινητό',
    wd_f5:'Δίγλωσσο (EN / EL)', wd_f6:'Δομή έτοιμη για SEO',
    wd_f7:'Φόρμα επικοινωνίας', wd_f8:'Χωρίς βαρύ CMS',
    wd_cta1:'Επικοινωνήστε →', wd_cta2:'Δείτε τα Έργα μας',
    wd_codebox_label:'// Γραμμένο στο χέρι',
    wd_codebox_body:'Έτσι μοιάζει ο κώδικας που γράφουμε: καθαρό HTML, CSS και JavaScript, χωρίς γεννήτριες κώδικα και εργαλεία εξαγωγής. Αυτόν ακριβώς τον κώδικα παραδίδουμε και σε εσάς.',
    wd_build_label:'// Πώς Γίνεται',
    wd_build_title:'Από Κώδικα<br>σε Εμπειρία',
    wd_build_caption:'Τα σωματίδια μαζεύονται σε σκελετό ιστοσελίδας, γίνονται ολόκληρη σελίδα και μετά διαλύονται, ξανά και ξανά.',
    wd_off_label:'// Τι Φτιάχνουμε',
    wd_off1_name:'Επαγγελματικές Ιστοσελίδες',
    wd_off1_text:'Για επαγγελματίες και επιχειρήσεις που θέλουν να ξεχωρίζουν και να φέρνουν πελάτες.',
    wd_off2_name:'Portfolio & Showcase',
    wd_off2_text:'Τα έργα σας σε γκαλερί, για να τα βλέπει ο πελάτης πριν σας πάρει τηλέφωνο.',
    wd_off3_name:'Landing Pages',
    wd_off3_text:'Μία σελίδα, ένας στόχος: λανσάρισμα, εκδήλωση ή καμπάνια.',
    wd_off4_name:'3D & Διαδραστικό',
    wd_off4_text:'Διαδραστικά 3D μοντέλα και κίνηση με την κύλιση, όπως στην αρχή του expertease.eu.',
    wd_why_label:'// Γιατί κώδικας στο χέρι;',
    wd_why_bad_head:'⬜ Template / Page Builder',
    wd_why_bad_1:'Μοιάζει με πολλές άλλες σελίδες, και οι πελάτες το καταλαβαίνουν',
    wd_why_bad_2:'Βαρύς κώδικας, αργή φόρτωση, χαμηλή βαθμολογία Core Web Vitals',
    wd_why_bad_3:'Εξάρτηση από την πλατφόρμα, με αυξήσεις τιμών και αλλαγές που δεν διαλέγετε',
    wd_why_bad_4:'Περιορισμένη κίνηση: με σύρε-και-άφησε δεν γίνεται WebGL',
    wd_why_bad_5:'Γενικές ρυθμίσεις για κινητό, που δεν ταιριάζουν πάντα στη σελίδα',
    wd_why_bad_6:'Τα πρόσθετα φέρνουν κενά ασφαλείας και συνεχή συντήρηση',
    wd_why_bad_7:'Πληρώνετε άδεια χρήσης, ο κώδικας δεν είναι δικός σας',
    wd_why_good_head:'▸ Expertease Custom Build',
    wd_why_good_1:'Σχεδιασμένο γύρω από τη δική σας ταυτότητα',
    wd_why_good_2:'Λιτός κώδικας που φορτώνει γρήγορα',
    wd_why_good_3:'Καμία δέσμευση σε πλατφόρμα· η φιλοξενία μπορεί να είναι και δωρεάν',
    wd_why_good_4:'Διαδραστικότητα: 3D, κίνηση με την κύλιση, σωματίδια',
    wd_why_good_5:'Ελεγμένο σε κινητό, tablet και υπολογιστή',
    wd_why_good_6:'Χωρίς πρόσθετα, μόνο ό,τι χρειάζεται η σελίδα',
    wd_why_good_7:'Τα αρχεία του κώδικα είναι δικά σας',
    wd_work_label:'// Οι Δουλειές μας',
    wd_work_title:'Ιστοσελίδες που Φτιάξαμε',
    wd_work_sub:'Όλες γράφτηκαν στο χέρι, η καθεμία με τον δικό της σχεδιασμό.',
    wd_proj_1_name:'Σταύρος Μάλλιαρης',
    wd_proj_1_role:'Τεχνικός Ασφαλείας · Μελέτες & Συμβουλευτική',
    wd_proj_1_desc:'Ιστοσελίδα για πιστοποιημένο τεχνικό ασφαλείας, στα ελληνικά και στα αγγλικά, με καθαρή τυπογραφία και τις υπηρεσίες οργανωμένες ώστε να βρίσκονται εύκολα.',
    wd_proj_1_link:'Δείτε την ιστοσελίδα',
    wd_proj_2_name:'Βάϊος Λιάπης',
    wd_proj_2_role:'Πολιτικός Μηχανικός · Αθήνα',
    wd_proj_2_desc:'Ιστοσελίδα και παρουσίαση έργων για πολιτικό μηχανικό, με καθαρή δομή υπηρεσιών και σχεδιασμό που δείχνει την εμπειρία του με μια ματιά.',
    wd_proj_2_link:'Δείτε την ιστοσελίδα',
    wd_proj_3_name:'Δημήτριος Μουδιώτης & Συνεργάτες',
    wd_proj_3_role:'Μηχανολόγος Μηχανικός · Αθήνα',
    wd_proj_3_desc:'Ιστοσελίδα τεχνικού γραφείου για μελέτες οχημάτων, άδειες ρυμουλκουμένων Ο1/Ο2, ενεργειακά πιστοποιητικά και τεχνικό ασφαλείας, στα ελληνικά και στα αγγλικά, με προσεγμένο SEO.',
    wd_proj_3_link:'Δείτε την ιστοσελίδα',
    wd_proj_4_name:'Τεχνικό Γραφείο Γκούβελης',
    wd_proj_4_role:'Μηχανολόγος Μηχανικός · Θεσσαλονίκη',
    wd_proj_4_desc:'Ιστοσελίδα τεχνικού γραφείου για μελέτες οχημάτων και εγκρίσεις τύπου, γραμμένη ώστε ο επισκέπτης να καταλαβαίνει γρήγορα τι προσφέρει το γραφείο και να επικοινωνεί.',
    wd_proj_4_link:'Δείτε την ιστοσελίδα',
    wd_proj_5_name:'Αντωνακάκης Κατασκευαστική',
    wd_proj_5_role:'Κατασκευές &amp; Ανακαινίσεις · Αττική',
    wd_proj_5_desc:'Ιστοσελίδα κατασκευαστικής εταιρείας στα ελληνικά και στα αγγλικά, με μεγάλη φωτογραφία στην αρχή, κάρτες υπηρεσιών, γκαλερί έργων και φόρμα επικοινωνίας.',
    wd_proj_5_link:'Δείτε την ιστοσελίδα',
    wd_proj_6_name:'Γεωργία Νάκου',
    wd_proj_6_role:'Δικηγόρος · Αθήνα &amp; Θεσσαλονίκη',
    wd_proj_6_desc:'Ιστοσελίδα δικηγόρου για ακίνητα, συμβάσεις, κληρονομικά και συντάξεις e-ΕΦΚΑ, σε σκούρο, κομψό ύφος με διακριτική κίνηση, στα ελληνικά και στα αγγλικά.',
    wd_proj_6_link:'Δείτε την ιστοσελίδα',
    wd_cta_label:'// Ας Φτιάξουμε Κάτι',
    wd_cta_title:'Έχετε μια ιστοσελίδα<br>στο μυαλό σας;',
    wd_cta_text:'Πείτε μας για την επιχείρησή σας και τι χρειάζεστε. Θα σχεδιάσουμε και θα φτιάξουμε μια ιστοσελίδα που σας εκφράζει, από το πρώτο σκίτσο ως τη δημοσίευση.',
    wd_cta_price_from:'Ξεκινάμε από',
    wd_cta_btn1:'Επικοινωνήστε →', wd_cta_btn2:'Δείτε τα Έργα μας',
    wd_cta_perk1:'✓ Δικός σας σχεδιασμός, χωρίς έτοιμα θέματα', wd_cta_perk2:'✓ Γρήγορο και φτιαγμένο για κινητό', wd_cta_perk3:'✓ Δωρεάν αναθεωρήσεις',
    projects_heading:'Έργα',
    sw_heading:'Λογισμικό', sw_label:'Ενεργό Προϊόν · easemanual.eu',
    sw_desc:'Λογισμικό <strong>αυτοματοποίησης</strong> τεχνικών μελετών για οχήματα <strong>ειδικής χρήσης</strong> και <strong>ειδικού σκοπού</strong>.',
    sw_f1:'Τεχνικοί υπολογισμοί', sw_f2:'Διαγράμματα φόρτισης', sw_f3:'Σχέδια A3', sw_f4:'Αυτόματη μελέτη Word',
    sw_f5:'Άξονες & εφεδρανισμοί', sw_f6:'Ευστάθεια & πέδηση', sw_f7:'Συγκολλήσεις & ελατήρια', sw_f8:'Γερανοί & καλαθοφόρα',
    sw_fi1:'Υπολογισμοί', sw_fi2:'Διαγράμματα', sw_fi3:'Τεχνική Μελέτη', sw_fi4:'Όλα σε Ένα Πρόγραμμα',
    sw_cta_triage:'⬇ Λήψη Εφαρμογής →', sw_cta4:'Πλήρης Οδηγός Χρήσης →',
    sw_badge:'Βάσει Νομοθεσίας  ΥΑ 80255/4693/19/2020',
    sw_cta1:'Δείτε το Προϊόν →', sw_cta2:'Τιμολόγηση', sw_cta3:'Λήψεις',
    sw_d_kicker2:'Πώς λειτουργεί',
    sw_wf1:'Εισαγωγή τεχνικών χαρακτηριστικών οχήματος', sw_wf2:'Εισαγωγή φορτίων στους άξονες και το πλαίσιο',
    sw_wf3:'Αυτόματη εκτέλεση υπολογισμών', sw_wf4:'Δημιουργία διαγραμμάτων τεμνουσών και ροπών κάμψης',
    sw_wf5:'Ανασκόπηση συνοπτικού πίνακα αποτελεσμάτων', sw_wf6:'Δημιουργία πλήρους τεχνικής μελέτης με ένα κλικ',
    sw_d_link:'Πλήρης οδηγός χρήσης →',
    sw_d_kicker4:'Τιμή',
    sw_pricing_lead:'Το Mechanical ExpertEase διατίθεται από <strong>80€ + ΦΠΑ / μήνα</strong>. Διαλέξτε το πακέτο που σας ταιριάζει ή ζητήστε προσφορά για τη δική σας περίπτωση.',
    sw_pricing_1:'<strong>Μηνιαία συνδρομή:</strong> 80€ + ΦΠΑ / μήνα',
    sw_pricing_2:'<strong>Ετήσιο πακέτο:</strong> 400€ + ΦΠΑ / έτος',
    sw_pricing_3:'<strong>Βιβλιοθήκη σχεδίων:</strong> 300€ + ΦΠΑ εφάπαξ',
    sw_pricing_4:'<strong>Υποστήριξη & ενημερώσεις:</strong> χρέωση κατά περίπτωση',
    swpb_kicker:'Τιμολόγηση',
    swpb_title:'Απλά πακέτα, με τις τιμές φανερές.',
    swpb_sub:'',
    swpb_triage_badge:'Δωρεάν',
    swpb_triage_name:'Triage Έκδοση',
    swpb_triage_price:'Δωρεάν',
    swpb_triage_desc:'Περιορισμένη πρόσβαση για να δείτε αν σας καλύπτει: δεδομένα εισόδου, υπολογισμοί και μορφή της μελέτης, χωρίς συνδρομή.',
    swpb_triage_features:'<li>Βασικές ενότητες υπολογισμών</li><li>Παράδειγμα ροής εργασίας οχήματος</li><li>Χωρίς εξαγωγή μελέτης</li>',
    swpb_triage_cta:'Δοκιμάστε Triage →',
    swpb_mo_name:'Μηνιαία',
    swpb_mo_period:'+ ΦΠΑ / μήνα',
    swpb_mo_desc:'Πλήρης πρόσβαση χωρίς δέσμευση. Μπορείτε να τη διακόψετε όποτε θέλετε.',
    swpb_mo_cta:'Εγγραφή →',
    swpb_yr_name:'Ετήσια',
    swpb_yr_period:'+ ΦΠΑ / έτος',
    swpb_yr_desc:'Πλήρης πρόσβαση για έναν χρόνο, με προτεραιότητα στην υποστήριξη. Κοστίζει λιγότερο από δώδεκα μηνιαίες συνδρομές.',
    swpb_yr_cta:'Ετήσια Εγγραφή →',
    swpb_seasonal_tag:'Εποχιακή Προσφορά',
    swpb_lib_name:'Βιβλιοθήκη Σχεδίων',
    swpb_lib_period:'+ ΦΠΑ εφάπαξ',
    swpb_lib_desc:'Μόνιμη πρόσβαση στη βιβλιοθήκη σχεδίων και προτύπων. Προστίθεται σε οποιοδήποτε πακέτο.',
    swpb_lib_cta:'Προσθήκη Βιβλιοθήκης →',
    swpb_feat_1:'Όλες οι ενότητες υπολογισμών', swpb_feat_2:'Σχέδια A3 & μελέτες Word', swpb_feat_3:'Πρόσβαση βιβλιοθήκης σχεδίων', swpb_feat_4:'Έτοιμο ΚΕΚ / ΙΕΚΕΜ',
    swpb_feat_yr_1:'Όλα του Μηνιαίου', swpb_feat_yr_2:'Προτεραιότητα υποστήριξης', swpb_feat_yr_3:'Όλες οι μελλοντικές ενημερώσεις', swpb_feat_yr_4:'Σταθερή τιμή για 12 μήνες',
    swpb_feat_lib_1:'Πλήρη πρότυπα σχεδίων', swpb_feat_lib_2:'Βιβλιοθήκη τυποποιημένων εξαρτημάτων', swpb_feat_lib_3:'Μόνιμη πρόσβαση',
    swpb_footnote:'Ειδικές τιμές για 2+ άδειες χρήσης· <a href="contact.html" id="swpb-footnote-link">επικοινωνήστε μαζί μας</a> για προσφορά.',
    sw_scr_k1:'Σχέδιο Α3', sw_scr_d1:'Το σχέδιο Α3 του οχήματος γίνεται αυτόματα, χωρίς να το σχεδιάσετε με το χέρι. Θέσεις αξόνων, διαστάσεις και τίτλος συμπληρώνονται από τα δεδομένα σας και εξάγονται απευθείας στη μελέτη Word.', sw_scr_cap1:'// Φύλλο Σχεδίου Α3 — Αυτόματο Σχέδιο',
    sw_scr_k2:'Ανάλυση Πλαισίου', sw_scr_d2:'Το φύλλο υπολογισμού πλαισίου χειρίζεται απλές και σύνθετες διατάξεις πλαισίου. Ροπές κάμψης, τέμνουσες και διαγράμματα υπολογίζονται και σχεδιάζονται αυτόματα, χωρίς εξωτερικό CAD.', sw_scr_cap2:'// Φύλλο Υπολογισμού Πλαισίου',
    sw_d_kicker3:'Δυνατότητες',
    sw_fc1_name:'Ανάλυση Οχήματος', sw_fc1_1:'Υποστήριξη έως 5 αξόνων', sw_fc1_2:'Έλεγχοι τάσεων αξόνων & ελαστικών', sw_fc1_3:'Αυτόματη τοποθέτηση φορτίων', sw_fc1_4:'Αυτόματη κατασκευή διαγράμματος ισορροπίας',
    sw_fc2_name:'Πλαίσιο & Κατασκευή', sw_fc2_1:'Απλοί & σύνθετοι τύποι πλαισίου', sw_fc2_2:'Υπολογισμοί ροπών κάμψης & τεμνουσών', sw_fc2_3:'Ανάλυση κοχλιωτών συνδέσεων', sw_fc2_4:'Υπολογισμοί συγκολλήσεων υπερκατασκευής',
    sw_fc3_name:'Ασφάλεια & Ευστάθεια', sw_fc3_1:'Έλεγχος συστήματος πέδησης', sw_fc3_2:'Ακτίνα στροφής & ευστάθεια', sw_fc3_3:'Έλεγχος ανατροπής γερανού', sw_fc3_4:'Υπολογισμοί ελατηριωτής ανάρτησης',
    sw_fc4_name:'Εξαγωγή & Αναφορές', sw_fc4_1:'Γρήγορη εξαγωγή PDF', sw_fc4_2:'Τεχνικά σχέδια A3', sw_fc4_3:'Αυτόματη δημιουργία μελέτης Word', sw_fc4_4:'Διαδικτυακές βιβλιοθήκες & πρότυπα',
    sw_d_kicker4:'Τύποι Οχημάτων',
    sw_vt1:'Γερανοφόρα', sw_vt2:'Καλαθοφόρα', sw_vt3:'Ανατρεπόμενα', sw_vt4:'Δεξαμενές',
    sw_vt5:'Πυροσβεστικά', sw_vt6:'Οδική Βοήθεια', sw_vt7:'Ανυψωτικά Πλατφόρμα', sw_vt8:'Πρόβολος',
    sw_d_kicker5:'Έλεγχοι Συμμόρφωσης',
    sw_ch1:'Άξονες', sw_ch2:'MNQ', sw_ch3:'Σχέδιο Α3', sw_ch4:'Πλαίσιο',
    sw_ch5:'Τεχνικό Υπόμνημα', sw_ch6:'Δεξαμενή Άλατος και Νερού', sw_ch7:'Αναρτήσεις', sw_ch8:'Ελατήρια',
    sw_ch9:'Διάτμηση', sw_ch10:'Σύνθετη Καταπόνηση Κοχλία', sw_ch11:'Συγκολλήσεις', sw_ch12:'Ελάχιστη Ακτίνα Στροφής',
    sw_ch13:'Πέδηση', sw_ch14:'Ευστάθεια σε Στροφή', sw_ch15:'Κυκλική Βάση Καλαθοφόρου/Γερανού', sw_ch16:'Αξονικά Φορτία', sw_ch17:'Εγκάρσια Φορτία',
    team_heading:'Ομάδα', team_page_heading:'Δημήτριος Μουδιώτης — Μηχανολόγος Μηχανικός, Αθήνα',
    proc_exp_text:'{yrs} χρόνια σε ρομποτική, εξοπλισμό ασφαλείας και ακριβή κατασκευή, με πέντε πτυχία από τρεις χώρες.', proc_exp_text_mobile:'{yrs} χρόνια σε ρομποτική, εξοπλισμό ασφαλείας και κατασκευή.',
    pillar_2_text:'Ειλικρινείς εκτιμήσεις, καθαρή επικοινωνία και ευθύνη από το πρώτο σκίτσο ως την παράδοση, χωρίς δυσάρεστες εκπλήξεις.', pillar_2_text_mobile:'Ειλικρινείς εκτιμήσεις και ευθύνη ως την παράδοση.',
    pillar_3_text:'Κλασική μηχανολογική βάση και διάθεση να βρίσκουμε πιο απλές λύσεις, με γεωμετρία που φτιάχνεται εύκολα και γνώση από διαφορετικά πεδία.', pillar_3_text_mobile:'Κλασική βάση, πιο απλές λύσεις.',
    founder_name:'Δημήτρης<br>Μουδιώτης',
    founder_label:'Ιδρυτής &amp; Επικεφαλής Μηχανικός',
    founder_bio:'Μηχανολόγος Μηχανικός (ΑΠΘ) με ' + EXP_YEARS + '+ χρόνια εμπειρίας σε ρομποτική, εξοπλισμό ασφαλείας, βιομηχανικά μηχανήματα και ακριβή κατασκευή. Σπούδασε σε πέντε πανεπιστήμια στην Ελλάδα, τη Γαλλία και τις ΗΠΑ.',
    fcs_years:'Χρόνια', fcs_projects:'Έργα', fcs_degrees:'Πτυχία', fcs_scholarships:'Υποτροφίες',
    founder_profile_btn:'Πλήρες Προφίλ →',
    founder_photo_accent:'Ιδρυτής',
    founder_mono_label:'Ιδρυτής &amp; Επικεφαλής Μηχανικός',
    founder_name_team:'Δημήτριος Μουδιώτης',
    founder_text:'Μηχανολόγος Μηχανικός (ΑΠΘ) με ' + EXP_YEARS + '+ χρόνια πρακτικής εμπειρίας σε ρομποτική, εξοπλισμό ασφαλείας, κατασκευή φύλλου μετάλλου και ακριβές 3D printing. Έχει πέντε πανεπιστημιακά πτυχία από την Ελλάδα, τη Γαλλία και τις ΗΠΑ, και συνδυάζει την τεχνική δουλειά με τη διαχείριση έργων και την ανάπτυξη προϊόντων.',
    edu_section_label:'Ακαδημαϊκό Υπόβαθρο',
    edu_section_heading:'5 Πανεπιστήμια &middot; 3 Χώρες',
    val_integrity_text:'Ειλικρινείς εκτιμήσεις και ευθύνη από το σκίτσο ως την παράδοση, χωρίς δυσάρεστες εκπλήξεις.',
    val_innovation_text:'Κλασική μηχανική και διάθεση για πιο απλές λύσεις, με γεωμετρία που φτιάχνεται εύκολα και γνώση από διαφορετικά πεδία.',
    ticker: ['3D Σχεδιασμός','3D Printing','Laser Cut & Engrave','Φύλλο Μετάλλου','Γρήγορη Πρωτοτυποποίηση','Λίστα Υλικών (BOM)','Διαχείριση Έργου','Ανάλυση FEA','από ιδέα σε πραγματικότητα','FDM · SLA · SLS'],
    pf_labels:['Ιδέα','CAD Σχεδιασμός','FEA & Προσομοίωση','Κατασκευή','Ποιοτικός Έλεγχος','Παράδοση'],
    pf_subs:['Απαιτήσεις & προδιαγραφές','3D μοντέλο · BOM · σχέδια','Τάσεις · κόπωση · κατασκευή','Κατεργασία · printing · συγκόλληση','Δοκιμές · επιθεώρηση · παραλαβή','Παράδοση & ανατροφοδότηση'],
    pf_loop:'Βρόχος συνεχούς βελτίωσης',
    pr_selfprint_badge:'// Για Makers &amp; Designers',
    pr_selfprint_title:'Θέλετε να Εκτυπώσετε Μόνοι σας;',
    pr_selfprint_sub:'Έχετε δικό σας 3D printer; Χρησιμοποιήστε τον δωρεάν υπολογιστή κόστους παρακάτω: ανεβάστε το αρχείο STL ή STEP και δείτε αμέσως εκτίμηση για το υλικό, τον χρόνο εκτύπωσης και το κόστος. Δεν χρειάζεται εγγραφή.',
    pr_selfprint_cta:'Δοκιμάστε τον Υπολογιστή',
    pr_est_drop_or:'ή', pr_est_browse:'Επιλογή Αρχείου',
    pr_est_lbl_material:'Υλικό', pr_est_lbl_infill:'Πλήρωση',
    pr_est_lbl_layer:'Ύψος Στρώματος', pr_est_lbl_strength:'Αντοχή / Τοιχώματα',
    pr_est_lbl_colour:'Χρώμα', pr_est_lbl_qty:'Ποσότητα',
    pr_est_single_colour:'Μονόχρωμο',
    pr_est_ams_toggle:'Πολύχρωμη εκτύπωση AMS (+2× υλικό)',
    pr_est_preview_empty:'Η 3D προεπισκόπηση εμφανίζεται εδώ',
    pr_est_viewer_hint:'σύρε για περιστροφή · κύλιση για ζουμ',
    pr_est_price_label:'Συνολική Εκτίμηση',
    pr_est_disclaimer:'Είναι μόνο εκτίμηση· την τελική τιμή την επιβεβαιώνουμε αφού ελέγξουμε το αρχείο.',
    pr_est_quote_link:'Ζητήστε ακριβή προσφορά',
    pr_est_mat:{'pla':'PLA — Τυπικό','pla+':'PLA+ — Ενισχυμένο','petg':'PETG — Ανθεκτικό','abs':'ABS — Θερμοανθεκτικό'},
    pr_est_infill:['15% — Σχέδιο','20% — Τυπικό','40% — Ισχυρό','100% — Συμπαγές'],
    pr_est_strength:['Ελαφρύ','Τυπικό','Ισχυρό','Πολύ Ισχυρό'],
    contact_label:'// Ας Δουλέψουμε Μαζί',
    contact_heading:'Έχετε κάποιο έργο στο μυαλό σας;',
    contact_sub:'Από ένα εξάρτημα ως ολόκληρο έργο, πείτε μας τι χρειάζεστε.',
    midcta_label:'// Έτοιμοι να Ξεκινήσουμε;',
    midcta_heading:'Έχετε κάποιο έργο στο μυαλό σας;',
    midcta_sub:'Από ένα εξάρτημα ως τη διαχείριση ολόκληρου έργου, ας μιλήσουμε για αυτό που χρειάζεστε.',
    midcta_btn:'Δωρεάν Πρώτη Συζήτηση',
    contact_label_static:'// Contact',
    contact_heading_static:'Ας Δουλέψουμε Μαζί',
    contact_sub_static:'',
    form_direct_label:'Στείλτε μας μήνυμα',
    form_lbl_name:'ΟΝΟΜΑ', form_lbl_email:'EMAIL',
    form_lbl_phone:'ΤΗΛΕΦΩΝΟ', form_lbl_subject:'ΘΕΜΑ', form_lbl_message:'ΜΗΝΥΜΑ',
    form_ph_name:'Το όνομά σας', form_ph_message:'Πείτε μας για το έργο σας...',
    form_opt_default:'Επιλέξτε υπηρεσία…',
    form_opt_1:'Μηχανολογικός Σχεδιασμός',
    form_opt_2:'3D Printing',
    form_opt_3:'Laser Cut & Engrave',
    form_opt_4:'3D Μοντέλα / CAD',
    form_opt_5:'Web Design',
    form_opt_6:'Λογισμικό',
    form_opt_7:'Γενική Ερώτηση',
    form_submit_label:'ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Αθήνα, Ελλάδα', footer_loc_bar:'Αθήνα, Ελλάδα',
    ec_ad_question:'Σας άρεσε το site;', ec_ad_cta:'Φτιάξτε το δικό σας', ec_label:'Σχεδιάστηκε από',
    pr_label:'Εξατομικευμένη Κατασκευή · Πανελλαδικά',
    pr_title:'Τρισδιάστατη Εκτύπωση <span class="pr-hero-slash">/ / /</span> Κοπή Laser <span class="pr-hero-slash">/ / /</span> Χάραξη&nbsp;Laser',
    pr_desc:'Από την ιδέα ως το έτοιμο εξάρτημα: 3D εκτύπωση κατά παραγγελία, αντίστροφη μηχανική, κοπή και χάραξη laser. Λειτουργικά πρωτότυπα, μεμονωμένα εξαρτήματα και διακοσμητικά, όλα στο δικό μας εργαστήριο.',
    pr_f1:'FDM 3D Printing', pr_f2:'Σχέδια κατά παραγγελία',
    pr_f3:'Αντίστροφη Μηχανική', pr_f4:'Laser Cutting',
    pr_f5:'Laser Engraving', pr_f6:'PLA · PETG · ABS',
    pr_f7:'Ξύλο · Ακρυλικό · Μέταλλο', pr_f8:'Πρωτότυπο Ίδιας Μέρας',
    pr_cta1:'Ζητήστε Προσφορά →', pr_cta2:'Δείτε όλα τα Έργα',
    pr_off_label:'// Τι Κάνουμε',
    pr_off1_name:'3D Printing κατά παραγγελία',
    pr_off1_text:'Εκτύπωση FDM σε PLA, PETG, ABS και ειδικά νήματα. Από λειτουργικά στηρίγματα και περιβλήματα ως διακοσμητικά αντικείμενα, με σχεδιασμό σε SolidWorks και εκτύπωση στις διαστάσεις που ζητάτε.',
    pr_off2_name:'Αντίστροφη Μηχανική',
    pr_off2_text:'Έσπασε ένα εξάρτημα ή δεν κυκλοφορεί πια; Το μετράμε, το σχεδιάζουμε και τυπώνουμε αντίγραφο, συχνά πιο γρήγορα και φθηνά από το να το ψάχνετε, και αν χρειάζεται, το βελτιώνουμε.',
    pr_off3_name:'Laser Cutting',
    pr_off3_text:'Ακριβείς κοπές σε ξύλο, ακρυλικό, χαρτόνι, δέρμα και λεπτά μέταλλα. Καθαρά άκρα, στενές ανοχές και γρήγορη παράδοση, για εξαρτήματα και διακοσμητικά πάνελ.',
    pr_off4_name:'Laser Engraving',
    pr_off4_text:'Μόνιμη χάραξη σε ξύλο, ανοδιωμένο αλουμίνιο, δέρμα, γυαλί και βαμμένα μέταλλα. Λογότυπα, σειριακοί αριθμοί, έργα τέχνης, εξατομικευμένα δώρα.',
    pr_work_label:'// Δουλειές μας',
    pr_work_title:'Εξαρτήματα που Φτιάξαμε',
    pr_work_sub:'Όλα σχεδιάστηκαν, τυπώθηκαν ή κόπηκαν στο εργαστήριό μας.',
    pr_proj_1_name:'Αυτόματος Τροφοδότης Γάτας',
    pr_proj_1_role:'3D Print · Σχεδιασμός Προϊόντος',
    pr_proj_1_desc:'Αυτόματος τροφοδότης γάτας, σχεδιασμένος από το μηδέν, με μηχανισμό διανομής σε προγραμματισμένες ώρες, εύχρηστη δεξαμενή και εύκολη συναρμολόγηση. Όλα τα εξαρτήματα σχεδιάστηκαν σε SolidWorks και τυπώθηκαν σε PLA.',
    pr_proj_1_link:'Επικοινωνήστε',
    pr_proj_2_name:'Επιτραπέζιος Ανεμιστήρας',
    pr_proj_2_role:'3D Print · Σχεδιασμός Προϊόντος · Αεροδυναμική',
    pr_proj_2_desc:'Επιτραπέζιος ανεμιστήρας με προσεγμένη γεωμετρία πτερυγίων και μικρό περίβλημα, σχεδιασμένος για ήσυχη λειτουργία και καλή ροή αέρα. Όλη η συναρμολόγηση είναι τυπωμένη.',
    pr_proj_2_link:'Επικοινωνήστε',
    pr_proj_3_name:'Μεταλλική Διακόσμηση Τοίχου',
    pr_proj_3_role:'Laser Cut · Εσωτερική Διακόσμηση · Φύλλο Μετάλλου',
    pr_proj_3_desc:'Μεταλλική διακόσμηση τοίχου, κομμένη με laser από φύλλο χάλυβα, με λεπτομερή σχέδια και ηλεκτροστατική βαφή. Ταιριάζει σε σπίτια και επαγγελματικούς χώρους, σε όποιο μέγεθος και μοτίβο θέλετε.',
    pr_proj_3_link:'Επικοινωνήστε',
    pr_proj_4_name:'Συσκευή Απώθησης Σκύλων',
    pr_proj_4_role:'3D Print · Περίβλημα Ηλεκτρονικών · Σχεδιασμός κατά παραγγελία',
    pr_proj_4_desc:'Μικρή συσκευή απώθησης σκύλων, με περίβλημα σχεδιασμένο γύρω από τα ηλεκτρονικά. Αδιάβροχο, με καλή εφαρμογή και κούμπωμα χωρίς βίδες.',
    pr_proj_4_link:'Επικοινωνήστε',
    pr_cta_label:'// Ας Φτιάξουμε Κάτι',
    pr_cta_title:'Έχετε κάποιο εξάρτημα<br>στο μυαλό σας;',
    pr_cta_text:'Στείλτε μας ένα σκίτσο, ένα σπασμένο εξάρτημα ή απλώς μια περιγραφή. Θα το σχεδιάσουμε, θα το τυπώσουμε ή θα το κόψουμε και θα σας παραδώσουμε το έτοιμο κομμάτι.',
    pr_cta_price_from:'Ξεκινάμε από',
    pr_cta_btn1:'Ζητήστε Προσφορά →',
    pr_cta_perk1:'✓ Ο σχεδιασμός περιλαμβάνεται', pr_cta_perk2:'✓ Γρήγορη παράδοση', pr_cta_perk3:'✓ Διαθέσιμη αντίστροφη μηχανική',
    hiw_h1_l1:'Από τα δεδομένα,', hiw_h1_l3:'στην τεχνική μελέτη', hiw_h1_l4:'σε έξι βήματα.',
    cap_all_label:'Όλα τα Εργαλεία',
    fcap_heading_l1:'Χαρακτηριστικά', fcap_heading_l2:'Υπολογισμών',
    contact_location:'Παγκράτι, Αθήνα',
  },
  en: {
    nav_about:'About', nav_projects:'Projects', nav_software:'Software',
    nav_webdesign:'Web Design', nav_3dprint:'3D Print', nav_experience:'Team', nav_contact:'Contact',
    hero_tag:'// Mechanical Design & 3D Printing Studio — Across Greece',
    hero_title:'Mechanical Design · 3D Printing · Laser Cut & Engrave · Web Design',
    hero_desc:'We help turn an idea into a product that works, through mechanical design, analysis and fabrication, and, where needed, the website that presents it.',
    hero_cta_work:'View Projects →', hero_cta_contact:'Get in Touch',
    stat_years:'Years Experience', stat_projects:'Projects Delivered', stat_degrees:'University Degrees',
    edu_strip:'Founder — Dimitrios Moudiotis · 5 Universities in 3 Countries',
    edu1_deg:'Dipl.-Ing.', edu1_name:'Mechanical Engineering',
    edu2_deg:'MSc General Engineering', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc Powertrain Engineering', edu3_name:'IFP School',
    edu4_deg:'MSc Strategic Product Design', edu4_name:'International Hellenic University',
    edu5_deg:'MBA Leadership & Project Management', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'About',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'We design and build mechanical devices, products and equipment, from research and CAD to fabrication coordination and quality control. Every project comes with its part and assembly drawings, bill of materials and instructions.',
    about_p3:'Based in <strong><span class="accent-red">Athens</span></strong> &amp; <strong><span class="accent-red">Thessaloniki</span></strong> · we work with clients across Greece and the EU.',
    about_p5:'You don\'t need to be in Athens or Thessaloniki to work with us. Mechanical design, CAD, technical studies and websites are done remotely, and 3D printed and laser-cut parts are shipped anywhere in Greece.',
    about_p4:'We choose materials, fabrication and assembly methods so that cost stays reasonable and material is not wasted. We coordinate subcontractors, supervise fabrication and check that the result meets ISO quality and safety standards.',
    val_1_title:'Precision', val_1_text:'Checked with FEA, tolerance stack-ups and tests in real conditions before delivery.', val_1_text_mobile:'FEA checks and tolerance stack-ups.',
    val_2_title:'Full Lifecycle', val_2_text:'From sketch to assembly: design, BOM, fabrication and handover. The project stays with us from start to finish.', val_2_text_mobile:'Design, BOM, fabrication and handover, with no middlemen.',
    val_3_title:'Global Standards', val_3_text:'Studied in 3 countries, and we bring what we learned there to every project here.', val_3_text_mobile:'Studied in 3 countries, applied to every project here.',
    val_4_title:'Built to Make', val_4_text:'We think about fabrication from day one, so the part is quick to make, wastes little material and assembles without trouble.', val_4_text_mobile:'Designed for fabrication from day one, with little waste.',
    about_bullets:'<li>10+ years in mechanical design, 3D printing and fabrication</li><li>Full cycle: CAD → BOM → fabrication → quality control</li><li>FEA simulation & Design for Manufacturability from day one</li>',
    about_bullets_mobile:'',
    proc_label:'How We Work',
    proc_1_title:'Brief', proc_1_text:'Before any design decision, we take the time to understand your needs, constraints and goals.',
    proc_2_title:'Design', proc_2_text:'A 3D model in SolidWorks, FEA, a complete BOM and part and assembly drawings with instructions, ready for production.',
    proc_3_title:'Deliver', proc_3_text:'We coordinate subcontractors, supervise fabrication and check quality and safety. What we hand over has been tested and is ready to run.',
    principles_label:'How We Work',
    prin_1_title:'Manufacturing Intelligence', prin_1_text:'We design knowing how parts are actually made: machined, bent, welded, printed. So the <span class="accent-red">limits of the shop floor</span> are taken into account before the drawing gets there.', prin_1_text_mobile:'Designed for how parts are actually made, with shop floor limits in mind from the start.',
    prin_2_title:'Right First Time', prin_2_text:'Usually the <span class="accent-red">bigger cost</span> is not materials but fabrication mistakes. So we design with tolerances that can be held, assemblies that fit first time and specifications the manufacturer can actually meet.', prin_2_text_mobile:'Tolerances that can be held. Assemblies that fit first time.',
    prin_3_title:'Full Ownership', prin_3_text:'From design, calculations, and simulations through manufacturing coordination, supplier communication, assembly oversight, and <span class="accent-red">final verification</span>, one engineer is responsible for all of it.', prin_3_text_mobile:'One engineer, from design and simulation to fabrication and final verification.',
    prin_4_title:'Web Design', prin_4_text:'We also build <span class="accent-green">websites from scratch</span>, hand-coded, without templates. <a href="webdesign.html" class="principle-cta" id="prin-4-cta-en">See our Web Design →</a>',
    wd_label:'Hand-coded · No Templates',
    wd_title:'Web Design',
    cad_label:'Mechanical Design · STEP Files',
    cad_title:'3D CAD Design & STEP Model Viewer',
    wd_desc:'We build websites from scratch, without templates or page builders. Every page and every interaction is designed for your business.',
    wd_f1:'Custom HTML & CSS', wd_f2:'Interactive motion',
    wd_f3:'WebGL / 3D elements', wd_f4:'Mobile-first layout',
    wd_f5:'Bilingual (EN / EL)', wd_f6:'SEO-ready structure',
    wd_f7:'Contact form', wd_f8:'No heavy CMS',
    wd_cta1:'Get in Touch →', wd_cta2:'View Our Projects',
    wd_codebox_label:'// Hand-coded',
    wd_codebox_body:'This is what the code we write looks like: plain HTML, CSS and JavaScript, without generators or export tools. It is exactly the code we hand over to you.',
    wd_build_label:'// How It Comes Together',
    wd_build_title:'From Code<br>to Experience',
    wd_build_caption:'Particles gather into a website wireframe, become a full page, then dissolve, over and over.',
    wd_off_label:'// What We Build',
    wd_off1_name:'Business Websites',
    wd_off1_text:'For professionals and businesses that want to stand out and bring in clients.',
    wd_off2_name:'Portfolio & Showcase',
    wd_off2_text:'Your projects in a gallery, so clients can see them before they call.',
    wd_off3_name:'Landing Pages',
    wd_off3_text:'One page, one goal: a launch, an event or a campaign.',
    wd_off4_name:'3D & Interactive',
    wd_off4_text:'Interactive 3D models and scroll-driven motion, like the top of expertease.eu.',
    wd_why_label:'// Why hand-coded?',
    wd_why_bad_head:'⬜ Template / Page Builder',
    wd_why_bad_1:'Looks like many other sites, and clients notice',
    wd_why_bad_2:'Heavy code, slow loading, low Core Web Vitals scores',
    wd_why_bad_3:'Tied to a platform, with price rises and changes you did not choose',
    wd_why_bad_4:'Limited motion: drag-and-drop cannot do real WebGL',
    wd_why_bad_5:'Generic mobile settings that do not always fit the page',
    wd_why_bad_6:'Plugins bring security gaps and constant maintenance',
    wd_why_bad_7:'You pay for a licence; the code is not yours',
    wd_why_good_head:'▸ Expertease Custom Build',
    wd_why_good_1:'Designed around your own brand',
    wd_why_good_2:'Lean code that loads fast',
    wd_why_good_3:'No platform lock-in; hosting can even be free',
    wd_why_good_4:'Interactivity: 3D, scroll-driven motion, particles',
    wd_why_good_5:'Checked on phone, tablet and desktop',
    wd_why_good_6:'No plugins, only what the site needs',
    wd_why_good_7:'The source files are yours',
    wd_work_label:'// Our Work',
    wd_work_title:'Sites We\'ve Built',
    wd_work_sub:'Every one is hand-coded, each with its own design.',
    wd_proj_1_name:'Stavros Malliaris',
    wd_proj_1_role:'Safety Engineer · Health &amp; Safety Consulting',
    wd_proj_1_desc:'Website for a certified safety engineer, in Greek and English, with clean typography and services laid out so they are easy to find.',
    wd_proj_1_link:'View Site',
    wd_proj_2_name:'Vaios Liapis',
    wd_proj_2_role:'Civil Engineer · Athens',
    wd_proj_2_desc:'Website and project portfolio for a civil engineer, with a clear service structure and a design that shows his experience at a glance.',
    wd_proj_2_link:'View Site',
    wd_proj_3_name:'Dimitrios Moudiotis & Associates',
    wd_proj_3_role:'Mechanical Engineer · Athens',
    wd_proj_3_desc:'Website for an engineering office handling vehicle studies, O1/O2 trailer licences, energy certificates and health &amp; safety, in Greek and English, with careful SEO.',
    wd_proj_3_link:'View Site',
    wd_proj_4_name:'Gkouvelis Technical Office',
    wd_proj_4_role:'Mechanical Engineer · Thessaloniki',
    wd_proj_4_desc:'Website for a technical office handling vehicle studies and type approvals, written so visitors quickly see what the office offers and get in touch.',
    wd_proj_4_link:'View Site',
    wd_proj_5_name:'Antonakakis Construction',
    wd_proj_5_role:'Construction &amp; Renovation · Attica',
    wd_proj_5_desc:'Website for a construction company, in Greek and English, with a large opening photo, service cards, a project gallery and a contact form.',
    wd_proj_5_link:'View Site',
    wd_proj_6_name:'Georgia Nakou',
    wd_proj_6_role:'Lawyer · Athens &amp; Thessaloniki',
    wd_proj_6_desc:'Website for a lawyer working on real estate, contracts, inheritance and e-EFKA pensions, in a dark, elegant style with subtle motion, in Greek and English.',
    wd_proj_6_link:'View Site',
    wd_cta_label:'// Let\'s Build Something',
    wd_cta_title:'Got a website<br>in mind?',
    wd_cta_text:'Tell us about your business and what you need. We will design and build a website that feels like yours, from the first sketch to launch.',
    wd_cta_price_from:'Starting from',
    wd_cta_btn1:'Get in Touch →', wd_cta_btn2:'See Our Projects',
    wd_cta_perk1:'✓ Your own design, no templates', wd_cta_perk2:'✓ Mobile-first & fast', wd_cta_perk3:'✓ Free revisions included',
    projects_heading:'Projects',
    sw_heading:'Software', sw_label:'Active Product · easemanual.eu',
    sw_desc:'Software <strong>automating</strong> technical studies for <strong>special-use and special-purpose</strong> vehicles.',
    sw_f1:'Technical calculations', sw_f2:'Load diagrams', sw_f3:'A3 vehicle drawings', sw_f4:'Automatic Word report',
    sw_f5:'Shafts & bearings', sw_f6:'Stability & braking', sw_f7:'Welds & springs', sw_f8:'Cranes & platforms',
    sw_fi1:'Calculations', sw_fi2:'Diagrams', sw_fi3:'Technical Study', sw_fi4:'All in One Program',
    sw_cta_triage:'⬇ Download App →', sw_cta4:'Full User Guide →',
    sw_badge:'Per Regulation  YA 80255/4693/19/2020',
    sw_cta1:'View Product →', sw_cta2:'Pricing', sw_cta3:'Downloads',
    sw_d_kicker2:'How it works',
    sw_wf1:'Enter vehicle technical specifications', sw_wf2:'Input loads affecting axles and frame',
    sw_wf3:'Calculations run automatically', sw_wf4:'Generate shear force & bending moment diagrams',
    sw_wf5:'Review the summary of results', sw_wf6:'Create the full technical study with one click',
    sw_d_link:'Full user guide →',
    sw_d_kicker4:'Pricing',
    sw_pricing_lead:'Mechanical ExpertEase is available from <strong>80€ + VAT / month</strong>. Choose the plan that suits you or ask for an offer for your case.',
    sw_pricing_1:'<strong>Monthly subscription:</strong> 80€ + VAT / month',
    sw_pricing_2:'<strong>Annual package:</strong> 400€ + VAT / year',
    sw_pricing_3:'<strong>Design library:</strong> 300€ + VAT one-time',
    sw_pricing_4:'<strong>Support & updates:</strong> priced case-by-case',
    swpb_kicker:'Pricing',
    swpb_title:'Simple plans, with clear prices.',
    swpb_sub:'',
    swpb_triage_badge:'Free',
    swpb_triage_name:'Triage Version',
    swpb_triage_price:'Free',
    swpb_triage_desc:'Limited access so you can see whether it suits you: inputs, calculations and the study layout, with no subscription.',
    swpb_triage_features:'<li>Core calculation modules</li><li>Sample vehicle workflow</li><li>No report export</li>',
    swpb_triage_cta:'Try Triage →',
    swpb_mo_name:'Monthly',
    swpb_mo_period:'+ VAT / mo',
    swpb_mo_desc:'Full access with no commitment. Cancel whenever you like.',
    swpb_mo_cta:'Get Started →',
    swpb_yr_name:'Annual',
    swpb_yr_period:'+ VAT / yr',
    swpb_yr_desc:'Full access for a year with priority support. Costs less than twelve monthly subscriptions.',
    swpb_yr_cta:'Get Annual →',
    swpb_seasonal_tag:'Seasonal Offer',
    swpb_lib_name:'Design Library',
    swpb_lib_period:'+ VAT one-time',
    swpb_lib_desc:'Permanent access to the drawing and template library. Can be added to any plan.',
    swpb_lib_cta:'Add Library →',
    swpb_feat_1:'All calculation modules', swpb_feat_2:'A3 drawings & Word reports', swpb_feat_3:'Design library access', swpb_feat_4:'KEK / IEKEM ready',
    swpb_feat_yr_1:'Everything in Monthly', swpb_feat_yr_2:'Priority support', swpb_feat_yr_3:'All future updates', swpb_feat_yr_4:'Fixed price for 12 months',
    swpb_feat_lib_1:'Full drawing templates', swpb_feat_lib_2:'Standard components library', swpb_feat_lib_3:'Lifetime access',
    swpb_footnote:'Special pricing for 2+ licences: <a href="contact.html" id="swpb-footnote-link">contact us</a> for a quote.',
    sw_scr_k1:'A3 Drawing', sw_scr_d1:'The A3 vehicle drawing is generated automatically, with no manual drafting. Axle positions, dimensions and title block are filled from your inputs and exported directly into the Word study.', sw_scr_cap1:'// A3 Drawing Sheet — Auto Drawing',
    sw_scr_k2:'Frame Analysis', sw_scr_d2:'The frame calculation sheet handles simple and complex chassis types. Bending moments, shear forces and moment diagrams are computed and drawn automatically, with no external CAD.', sw_scr_cap2:'// Frame Calculation Sheet',
    sw_d_kicker3:'Capabilities',
    sw_fc1_name:'Vehicle Analysis', sw_fc1_1:'Up to 5 axles support', sw_fc1_2:'Axle & tyre stress checks', sw_fc1_3:'Automatic load positioning', sw_fc1_4:'Free-body diagram generation',
    sw_fc2_name:'Frame & Structure', sw_fc2_1:'Simple & complex frame types', sw_fc2_2:'Bending moment & shear calcs', sw_fc2_3:'Bolted connection analysis', sw_fc2_4:'Superstructure weld calcs',
    sw_fc3_name:'Safety & Stability', sw_fc3_1:'Braking system verification', sw_fc3_2:'Turning radius & stability', sw_fc3_3:'Crane overturning checks', sw_fc3_4:'Spring suspension calcs',
    sw_fc4_name:'Output & Export', sw_fc4_1:'Quick PDF export', sw_fc4_2:'A3 technical drawings', sw_fc4_3:'Auto Word report generation', sw_fc4_4:'Online libraries & templates',
    sw_d_kicker4:'Vehicle Types',
    sw_vt1:'Crane Trucks', sw_vt2:'Aerial Work Platforms', sw_vt3:'Tippers', sw_vt4:'Tank Vehicles',
    sw_vt5:'Fire Trucks', sw_vt6:'Roadside Assistance', sw_vt7:'Lifting Platforms', sw_vt8:'Cantilever',
    sw_d_kicker5:'Compliance Checks',
    sw_ch1:'Axles', sw_ch2:'MNQ', sw_ch3:'A3 Drawing', sw_ch4:'Frame',
    sw_ch5:'Technical Note', sw_ch6:'Salt & Water Tank', sw_ch7:'Suspension', sw_ch8:'Springs',
    sw_ch9:'Shear', sw_ch10:'Combined Bolt Stress', sw_ch11:'Welds', sw_ch12:'Minimum Turning Radius',
    sw_ch13:'Braking', sw_ch14:'Cornering Stability', sw_ch15:'Circular Base Basket/Crane', sw_ch16:'Axial Loads', sw_ch17:'Transverse Loads',
    team_heading:'Team', team_page_heading:'Dimitrios Moudiotis — Mechanical Engineer, Athens',
    proc_exp_text:'{yrs} years across robotics, safety equipment and precision fabrication, with five degrees from three countries.', proc_exp_text_mobile:'{yrs} years in robotics, safety equipment and precision fabrication.',
    pillar_2_text:'Honest estimates, clear communication and accountability from the first sketch to delivery, with no unpleasant surprises.', pillar_2_text_mobile:'Honest estimates and accountability through to delivery.',
    pillar_3_text:'A classical engineering foundation and a wish to find simpler solutions, with geometry that is easy to make and knowledge from different fields.', pillar_3_text_mobile:'Classical foundation, simpler solutions.',
    founder_name:'Dimitrios<br>Moudiotis',
    founder_label:'Founder &amp; Lead Engineer',
    founder_bio:'Mechanical Engineer (AUTH) with ' + EXP_YEARS + '+ years of experience across robotics, safety equipment, industrial machinery, and precision fabrication. Studied at five universities in Greece, France, and the USA.',
    fcs_years:'Years', fcs_projects:'Projects', fcs_degrees:'Univ. Degrees', fcs_scholarships:'Scholarships',
    founder_profile_btn:'Full Profile →',
    founder_photo_accent:'Founder',
    founder_mono_label:'Founder &amp; Lead Engineer',
    founder_name_team:'Dimitrios Moudiotis',
    founder_text:'Mechanical Engineer (AUTH) with ' + EXP_YEARS + '+ years of hands-on experience across robotics, safety equipment, sheet metal fabrication, and precision 3D printing. Holds five university degrees from Greece, France and the USA, and combines hands-on engineering with project management and product development.',
    edu_section_label:'Academic Background',
    edu_section_heading:'5 Universities · 3 Countries',
    val_integrity_text:'Honest estimates and accountability from sketch to delivery, with no unpleasant surprises.',
    val_innovation_text:'Classical engineering and a wish for simpler solutions, with geometry that is easy to make and knowledge from different fields.',
    ticker: ['3D Design','3D Printing','Laser Cut & Engrave','Sheet Metal','Rapid Prototyping','Bill of Materials','Project Management','FEA Analysis','from vision to reality','FDM · SLA · SLS'],
    pf_labels:['Concept','CAD Design','FEA & Simulation','Fabrication','Quality Check','Customer'],
    pf_subs:['Requirements & brief','3D model · BOM · drawings','Stress · fatigue · manufacturing','Machining · printing · welding','Testing · inspection · sign-off','Delivery & feedback'],
    pf_loop:'Continuous improvement loop',
    pr_selfprint_badge:'// For Makers &amp; Designers',
    pr_selfprint_title:'Want to Print Your Own Parts?',
    pr_selfprint_sub:'Have your own 3D printer? Use the free cost calculator below: upload your STL or STEP file and see an instant estimate of material, print time and cost. No account needed.',
    pr_selfprint_cta:'Try the Calculator',
    pr_est_drop_or:'or', pr_est_browse:'Browse File',
    pr_est_lbl_material:'Material', pr_est_lbl_infill:'Infill',
    pr_est_lbl_layer:'Layer Height', pr_est_lbl_strength:'Strength / Walls',
    pr_est_lbl_colour:'Colour', pr_est_lbl_qty:'Quantity',
    pr_est_single_colour:'Single Colour',
    pr_est_ams_toggle:'AMS multicolour printing (+2× material)',
    pr_est_preview_empty:'3D preview appears here',
    pr_est_viewer_hint:'drag to rotate · scroll to zoom',
    pr_est_price_label:'Total Quote',
    pr_est_disclaimer:'This is an estimate only; we confirm the final price after checking the file.',
    pr_est_quote_link:'Get exact quote',
    pr_est_mat:{'pla':'PLA — Standard','pla+':'PLA+ — Enhanced','petg':'PETG — Tough','abs':'ABS — Heat-resistant'},
    pr_est_infill:['15% — Draft','20% — Standard','40% — Strong','100% — Solid'],
    pr_est_strength:['Light','Default','Strong','Very Strong'],
    contact_label:'// Let\'s Work Together',
    contact_heading:'Got a project in mind?',
    contact_sub:'From a single part to a whole project, tell us what you need.',
    midcta_label:'// Ready to Start?',
    midcta_heading:'Got a project in mind?',
    midcta_sub:'From a single part to managing a whole project, let’s talk about what you need.',
    midcta_btn:'Get a Free Consultation',
    contact_label_static:'// Contact',
    contact_heading_static:'Let\'s Work Together',
    contact_sub_static:'',
    form_direct_label:'Send us a message',
    form_lbl_name:'NAME', form_lbl_email:'EMAIL',
    form_lbl_phone:'PHONE', form_lbl_subject:'SUBJECT', form_lbl_message:'MESSAGE',
    form_ph_name:'Your name', form_ph_message:'Tell us about your project...',
    form_opt_default:'Select a service…',
    form_opt_1:'Mechanical Design',
    form_opt_2:'3D Printing',
    form_opt_3:'Laser Cut & Engrave',
    form_opt_4:'3D Models / CAD',
    form_opt_5:'Web Design',
    form_opt_6:'Software',
    form_opt_7:'General Enquiry',
    form_submit_label:'SEND MESSAGE',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Athens, Greece', footer_loc_bar:'Athens, Greece',
    ec_ad_question:'Like this site?', ec_ad_cta:'Let\'s build yours', ec_label:'Designed by',
    pr_label:'Custom Fabrication · Across Greece',
    pr_title:'3D Printing <span class="pr-hero-slash">/ / /</span> Laser Cut <span class="pr-hero-slash">/ / /</span> Laser&nbsp;Engrave',
    pr_desc:'From idea to finished part: custom 3D printing, reverse engineering, laser cutting and engraving. Functional prototypes, one-off parts and decorative pieces, all made in our own workshop.',
    pr_f1:'FDM 3D Printing', pr_f2:'Custom Designs',
    pr_f3:'Reverse Engineering', pr_f4:'Laser Cutting',
    pr_f5:'Laser Engraving', pr_f6:'PLA · PETG · ABS',
    pr_f7:'Wood · Acrylic · Metal', pr_f8:'Same-Day Prototyping',
    pr_cta1:'Get a Quote →', pr_cta2:'View All Projects',
    pr_off_label:'// What We Do',
    pr_off1_name:'Custom 3D Printing',
    pr_off1_text:'FDM printing in PLA, PETG, ABS and specialty filaments. From functional brackets and enclosures to decorative objects, designed in SolidWorks and printed to your specification.',
    pr_off2_name:'Reverse Engineering',
    pr_off2_text:'A part broke or is no longer made? We measure it, model it and print a replacement, often faster and cheaper than hunting for one, and improve it if needed.',
    pr_off3_name:'Laser Cutting',
    pr_off3_text:'Precision cuts on wood, acrylic, cardboard, leather, and thin metals. Clean edges, tight tolerances and quick turnaround, for parts, enclosures and decorative panels.',
    pr_off4_name:'Laser Engraving',
    pr_off4_text:'Permanent marking on wood, anodised aluminium, leather, glass, and coated metals. Logos, serial numbers, artwork and personalised gifts.',
    pr_work_label:'// Our Work',
    pr_work_title:'Parts We\'ve Made',
    pr_work_sub:'Everything here was designed, printed or cut in our own workshop.',
    pr_proj_1_name:'Automatic Cat Feeder',
    pr_proj_1_role:'3D Print · Product Design',
    pr_proj_1_desc:'Automatic cat feeder designed from scratch, with a timed dispensing mechanism, an easy-to-use hopper and easy-clean assembly. Every part modelled in SolidWorks and printed in PLA.',
    pr_proj_1_link:'Get in Touch',
    pr_proj_2_name:'Desk Fan',
    pr_proj_2_role:'3D Print · Product Design · Aerodynamics',
    pr_proj_2_desc:'Desk fan with carefully shaped blades and a compact housing, designed for quiet running and good airflow. The whole assembly is 3D printed, with room for the motor.',
    pr_proj_2_link:'Get in Touch',
    pr_proj_3_name:'Metal Wall Décor',
    pr_proj_3_role:'Laser Cut · Interior Design · Sheet Metal',
    pr_proj_3_desc:'Laser-cut steel wall décor with detailed patterns and a powder-coated finish. Suits homes and commercial spaces, in any size or motif you like.',
    pr_proj_3_link:'Get in Touch',
    pr_proj_4_name:'Dog Repellent Device',
    pr_proj_4_role:'3D Print · Electronics Enclosure · Custom Design',
    pr_proj_4_desc:'Compact ultrasonic dog repellent, with a housing designed around the electronics. Weatherproof, with a clean fit and a snap-close assembly, built from the client’s brief.',
    pr_proj_4_link:'Get in Touch',
    pr_cta_label:'// Let\'s Make Something',
    pr_cta_title:'Got a part<br>in mind?',
    pr_cta_text:'Send us a sketch, a broken part or just a description. We will design, print or cut it and hand you the finished piece.',
    pr_cta_price_from:'Starting from',
    pr_cta_btn1:'Get a Quote →',
    pr_cta_perk1:'✓ Custom design included', pr_cta_perk2:'✓ Fast turnaround', pr_cta_perk3:'✓ Reverse engineering available',
    hiw_h1_l1:'From data,', hiw_h1_l3:'to the technical study', hiw_h1_l4:'in six steps.',
    cap_all_label:'All Tools',
    fcap_heading_l1:'Calculation', fcap_heading_l2:'Capabilities',
    contact_location:'Pagrati, Athens',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE APPLY
═══════════════════════════════════════════════════════════════ */
let currentLang = 'el';

function applyLang(lang) {
  currentLang = lang;
  const t = LANG[lang];
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  const set = (id, val, html=false) => { const el=document.getElementById(id); if(!el)return; html?el.innerHTML=val:el.textContent=val; };
  const isMob = window.innerWidth <= 640;
  const noArrow = v => (typeof v === 'string' && isMob) ? v.replace(/ →$/, '') : v;
  set('nav-about',t.nav_about); set('nav-projects',t.nav_projects);
  set('nav-software',t.nav_software); set('nav-webdesign',t.nav_webdesign); set('nav-3dprint',t.nav_3dprint); set('nav-experience',t.nav_experience); set('nav-contact',t.nav_contact);
  set('hero-tag',t.hero_tag); set('hero-title',t.hero_title);
  set('hero-desc',t.hero_desc,true);
  set('hero-cta-work',noArrow(t.hero_cta_work)); set('hero-cta-contact',noArrow(t.hero_cta_contact));
  set('stat-years',t.stat_years); set('stat-projects',t.stat_projects); set('stat-degrees',t.stat_degrees);

  set('edu-strip-title',t.edu_strip);
  set('edu1-deg',t.edu1_deg); set('edu1-name',t.edu1_name);
  set('edu2-deg',t.edu2_deg); set('edu2-name',t.edu2_name);
  set('edu3-deg',t.edu3_deg); set('edu3-name',t.edu3_name);
  set('edu4-deg',t.edu4_deg); set('edu4-name',t.edu4_name);
  set('edu5-deg',t.edu5_deg); set('edu5-name',t.edu5_name);
  set('about-heading',t.about_heading);
  set('about-quote',t.about_quote);
  set('about-p2',t.about_p2,true); set('about-p3',t.about_p3,true);
  set('about-p5',t.about_p5,true);
  set('about-p4',t.about_p4);
  set('val-1-title',t.val_1_title); set('val-1-text', isMob && t.val_1_text_mobile ? t.val_1_text_mobile : t.val_1_text);
  set('val-2-title',t.val_2_title); set('val-2-text', isMob && t.val_2_text_mobile ? t.val_2_text_mobile : t.val_2_text);
  set('val-3-title',t.val_3_title); set('val-3-text', isMob && t.val_3_text_mobile ? t.val_3_text_mobile : t.val_3_text);
  set('val-4-title',t.val_4_title); set('val-4-text', isMob && t.val_4_text_mobile ? t.val_4_text_mobile : t.val_4_text);
  set('about-bullets', isMob && t.about_bullets_mobile !== undefined ? t.about_bullets_mobile : t.about_bullets, true);
  set('proc-label',t.proc_label);
  set('proc-1-title',t.proc_1_title); set('proc-1-text',t.proc_1_text);
  set('proc-2-title',t.proc_2_title); set('proc-2-text',t.proc_2_text);
  set('proc-3-title',t.proc_3_title); set('proc-3-text',t.proc_3_text);
  set('principles-label',t.principles_label);
  set('prin-1-title',t.prin_1_title); set('prin-1-text', isMob && t.prin_1_text_mobile ? t.prin_1_text_mobile : t.prin_1_text, !isMob);
  set('prin-2-title',t.prin_2_title); set('prin-2-text', isMob && t.prin_2_text_mobile ? t.prin_2_text_mobile : t.prin_2_text, !isMob);
  set('prin-3-title',t.prin_3_title); set('prin-3-text', isMob && t.prin_3_text_mobile ? t.prin_3_text_mobile : t.prin_3_text, !isMob);
  set('prin-4-title',t.prin_4_title); set('prin-4-text',t.prin_4_text,true);
  set('pillar-2-text', isMob && t.pillar_2_text_mobile ? t.pillar_2_text_mobile : t.pillar_2_text);
  set('pillar-3-text', isMob && t.pillar_3_text_mobile ? t.pillar_3_text_mobile : t.pillar_3_text);
  set('team-heading',t.team_heading); set('team-page-heading',t.team_page_heading);
  const procExpEl = document.getElementById('proc-exp-text');
  if(procExpEl) { const yrs = new Date().getFullYear() - 2016; const wordsEn=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve']; const wordsEl=['Μηδέν','Ένα','Δύο','Τρία','Τέσσερα','Πέντε','Έξι','Επτά','Οκτώ','Εννέα','Δέκα','Έντεκα','Δώδεκα']; const word = lang==='el' ? (wordsEl[yrs]||yrs) : (wordsEn[yrs]||yrs); const src = isMob ? (t.proc_exp_text_mobile||t.proc_exp_text) : t.proc_exp_text; procExpEl.textContent = (src||'').replace('{yrs}', word); }
  set('founder-name',t.founder_name,true);
  set('founder-label',t.founder_label,true); set('founder-bio',t.founder_bio);
  set('fcs-years',t.fcs_years); set('fcs-projects',t.fcs_projects);
  set('fcs-degrees',t.fcs_degrees); set('fcs-scholarships',t.fcs_scholarships);
  set('founder-profile-btn',noArrow(t.founder_profile_btn));
  // team.html specific
  set('founder-photo-accent',t.founder_photo_accent);
  set('founder-mono-label',t.founder_mono_label,true);
  set('founder-name-team',t.founder_name_team);
  set('founder-text',t.founder_text);
  set('edu-section-label',t.edu_section_label);
  set('edu-section-heading',t.edu_section_heading,true);
  set('val-integrity-text',t.val_integrity_text);
  set('val-innovation-text',t.val_innovation_text);
  // process flow (index.html + team.html) — translate all instances by position
  if(t.pf_labels){ document.querySelectorAll('.process-flow .pf-node').forEach((node,i)=>{ const lbl=node.querySelector('.pf-label'); if(lbl&&t.pf_labels[i]) lbl.textContent=t.pf_labels[i]; const sub=node.querySelector('.pf-sub'); if(sub&&t.pf_subs&&t.pf_subs[i]) sub.textContent=t.pf_subs[i]; }); }
  document.querySelectorAll('.pf-loop-label').forEach(el=>{ if(t.pf_loop) el.textContent=t.pf_loop; });
  // also update IDs for team.html
  if(t.pf_labels){ t.pf_labels.forEach((lbl,i)=>{ set('pf-label-'+(i+1),lbl); }); }
  if(t.pf_subs){   t.pf_subs.forEach((sub,i)=>{ set('pf-sub-'+(i+1),sub); }); }
  set('pf-loop-label',t.pf_loop);
  // ticker (index.html)
  const tickerEl = document.getElementById('tickerInner');
  if(tickerEl && t.ticker){ const items=t.ticker; let h=''; [0,1].forEach(()=>items.forEach(txt=>{ h+='<span class="ticker-item">'+txt+' <span>✦</span></span>'; })); tickerEl.innerHTML=h; }
  // 3dprint.html estimator
  set('pr-selfprint-badge',t.pr_selfprint_badge,true);
  set('pr-selfprint-title',t.pr_selfprint_title);
  set('pr-selfprint-sub',t.pr_selfprint_sub);
  set('pr-selfprint-cta',t.pr_selfprint_cta);
  set('pr-est-drop-or',t.pr_est_drop_or);
  set('pr-est-browse',t.pr_est_browse);
  set('pr-est-lbl-material',t.pr_est_lbl_material);
  set('pr-est-lbl-infill',t.pr_est_lbl_infill);
  set('pr-est-lbl-layer',t.pr_est_lbl_layer);
  set('pr-est-lbl-strength',t.pr_est_lbl_strength);
  set('pr-est-lbl-colour',t.pr_est_lbl_colour);
  set('pr-est-lbl-qty',t.pr_est_lbl_qty);
  set('pr-est-single-colour',t.pr_est_single_colour);
  set('pr-est-ams-toggle',t.pr_est_ams_toggle);
  set('pr-est-preview-empty',t.pr_est_preview_empty);
  set('pr-est-viewer-hint-text',t.pr_est_viewer_hint);
  set('pr-est-price-label',t.pr_est_price_label);
  set('pr-est-disclaimer',t.pr_est_disclaimer); set('pr-est-quote-link',t.pr_est_quote_link);
  // estimator material options
  const matSel = document.getElementById('prEstMaterial');
  if(matSel && t.pr_est_mat) { const vals=['pla','pla+','petg','abs']; vals.forEach(v=>{ const o=matSel.querySelector('option[value="'+v+'"]'); if(o) o.textContent=t.pr_est_mat[v]; }); }
  // infill buttons
  const infillMap = {'0.15':0,'0.20':1,'0.40':2,'1.00':3};
  document.querySelectorAll('.pr-est-infill-btn[data-infill]').forEach(b=>{ const idx=infillMap[b.dataset.infill]; if(t.pr_est_infill && t.pr_est_infill[idx]!==undefined) b.textContent=t.pr_est_infill[idx]; });
  // strength buttons
  const strengthMap = {'1.0':0,'1.1':1,'1.3':2,'1.5':3};
  document.querySelectorAll('.pr-est-strength-btn[data-strength]').forEach(b=>{ const idx=strengthMap[b.dataset.strength]; if(t.pr_est_strength && t.pr_est_strength[idx]!==undefined) b.textContent=t.pr_est_strength[idx]; });
  set('projects-heading',t.projects_heading);
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label);
  set('sw-desc',t.sw_desc,true);
  for(let i=1;i<=8;i++) set('sw-f'+i,t['sw_f'+i]);
  for(let i=1;i<=4;i++) set('sw-fi'+i,t['sw_fi'+i]);
  set('sw-cta-triage',t.sw_cta_triage); set('sw-cta4',t.sw_cta4); set('sw-badge',t.sw_badge);
  set('sw-cta1',noArrow(t.sw_cta1)); set('sw-cta2',noArrow(t.sw_cta2)); set('sw-cta3',noArrow(t.sw_cta3));
  set('sw-d-kicker2',t.sw_d_kicker2);
  for(let i=1;i<=6;i++) set('sw-wf'+i,t['sw_wf'+i]);
  set('sw-d-link',noArrow(t.sw_d_link));
  set('sw-d-kicker4',t.sw_d_kicker4);
  set('sw-pricing-lead',t.sw_pricing_lead,true);
  set('sw-pricing-1',t.sw_pricing_1,true); set('sw-pricing-2',t.sw_pricing_2,true);
  set('sw-pricing-3',t.sw_pricing_3,true); set('sw-pricing-4',t.sw_pricing_4,true);
  // pricing banner
  set('swpb-kicker',t.swpb_kicker); set('swpb-title',t.swpb_title); set('swpb-sub',t.swpb_sub,true);
  set('swpb-triage-badge',t.swpb_triage_badge); set('swpb-triage-name',t.swpb_triage_name);
  set('swpb-triage-price',t.swpb_triage_price); set('swpb-triage-desc',t.swpb_triage_desc);
  set('swpb-triage-features',t.swpb_triage_features,true); set('swpb-triage-cta',noArrow(t.swpb_triage_cta));
  set('swpb-mo-name',t.swpb_mo_name); set('swpb-mo-period',t.swpb_mo_period); set('swpb-mo-desc',t.swpb_mo_desc); set('swpb-mo-cta',noArrow(t.swpb_mo_cta));
  set('swpb-yr-name',t.swpb_yr_name); set('swpb-yr-period',t.swpb_yr_period); set('swpb-yr-desc',t.swpb_yr_desc); set('swpb-yr-cta',noArrow(t.swpb_yr_cta));
  set('swpb-seasonal-tag',t.swpb_seasonal_tag);
  set('swpb-lib-name',t.swpb_lib_name); set('swpb-lib-period',t.swpb_lib_period); set('swpb-lib-desc',t.swpb_lib_desc); set('swpb-lib-cta',noArrow(t.swpb_lib_cta));
  set('swpb-feat-1',t.swpb_feat_1); set('swpb-feat-2',t.swpb_feat_2); set('swpb-feat-3',t.swpb_feat_3); set('swpb-feat-4',t.swpb_feat_4);
  set('swpb-feat-yr-1',t.swpb_feat_yr_1); set('swpb-feat-yr-2',t.swpb_feat_yr_2); set('swpb-feat-yr-3',t.swpb_feat_yr_3); set('swpb-feat-yr-4',t.swpb_feat_yr_4);
  set('swpb-feat-lib-1',t.swpb_feat_lib_1); set('swpb-feat-lib-2',t.swpb_feat_lib_2); set('swpb-feat-lib-3',t.swpb_feat_lib_3);
  set('swpb-footnote',t.swpb_footnote,true);
  set('sw-scr-k1',t.sw_scr_k1); set('sw-scr-d1',t.sw_scr_d1); set('sw-scr-cap1',t.sw_scr_cap1);
  set('sw-scr-k2',t.sw_scr_k2); set('sw-scr-d2',t.sw_scr_d2); set('sw-scr-cap2',t.sw_scr_cap2);
  set('sw-d-kicker3',t.sw_d_kicker3);
  for(let c=1;c<=4;c++){ set('sw-fc'+c+'-name',t['sw_fc'+c+'_name']); for(let r=1;r<=4;r++) set('sw-fc'+c+'-'+r,t['sw_fc'+c+'_'+r]); }
  set('sw-d-kicker4',t.sw_d_kicker4);
  for(let i=1;i<=8;i++) set('sw-vt'+i,t['sw_vt'+i]);
  set('sw-d-kicker5',t.sw_d_kicker5);
  for(let i=1;i<=17;i++) set('sw-ch'+i,t['sw_ch'+i]);
  // webdesign.html
  set('wd-codebox-label',t.wd_codebox_label); set('wd-codebox-body',t.wd_codebox_body);
  set('wd-label',t.wd_label); set('wd-title',t.wd_title); set('wd-desc',t.wd_desc);
  set('cad-label',t.cad_label); set('cad-title',t.cad_title,true);
  for(let i=1;i<=8;i++) set('wd-f'+i,t['wd_f'+i]);
  set('wd-cta1',noArrow(t.wd_cta1)); set('wd-cta2',noArrow(t.wd_cta2));
  set('wd-off-label',t.wd_off_label);
  set('wd-off1-name',t.wd_off1_name); set('wd-off1-text',t.wd_off1_text);
  set('wd-off2-name',t.wd_off2_name); set('wd-off2-text',t.wd_off2_text);
  set('wd-off3-name',t.wd_off3_name); set('wd-off3-text',t.wd_off3_text);
  set('wd-off4-name',t.wd_off4_name); set('wd-off4-text',t.wd_off4_text);
  set('wd-why-label',t.wd_why_label);
  set('wd-why-bad-head',t.wd_why_bad_head); set('wd-why-good-head',t.wd_why_good_head);
  for(let i=1;i<=7;i++){ set('wd-why-bad-'+i,t['wd_why_bad_'+i]); set('wd-why-good-'+i,t['wd_why_good_'+i]); }
  set('wd-work-label',t.wd_work_label); set('wd-work-title',t.wd_work_title); set('wd-work-sub',t.wd_work_sub);
  set('wd-proj-1-name',t.wd_proj_1_name); set('wd-proj-1-role',t.wd_proj_1_role,true); set('wd-proj-1-desc',t.wd_proj_1_desc); set('wd-proj-1-link',t.wd_proj_1_link);
  set('wd-proj-2-name',t.wd_proj_2_name); set('wd-proj-2-role',t.wd_proj_2_role,true); set('wd-proj-2-desc',t.wd_proj_2_desc); set('wd-proj-2-link',t.wd_proj_2_link);
  set('wd-proj-3-name',t.wd_proj_3_name); set('wd-proj-3-role',t.wd_proj_3_role,true); set('wd-proj-3-desc',t.wd_proj_3_desc,true); set('wd-proj-3-link',t.wd_proj_3_link);
  set('wd-proj-4-name',t.wd_proj_4_name); set('wd-proj-4-role',t.wd_proj_4_role,true); set('wd-proj-4-desc',t.wd_proj_4_desc,true); set('wd-proj-4-link',t.wd_proj_4_link);
  set('wd-proj-5-name',t.wd_proj_5_name); set('wd-proj-5-role',t.wd_proj_5_role,true); set('wd-proj-5-desc',t.wd_proj_5_desc,true); set('wd-proj-5-link',t.wd_proj_5_link);
  set('wd-proj-6-name',t.wd_proj_6_name); set('wd-proj-6-role',t.wd_proj_6_role,true); set('wd-proj-6-desc',t.wd_proj_6_desc,true); set('wd-proj-6-link',t.wd_proj_6_link);
  set('wd-cta-label',t.wd_cta_label); set('wd-cta-title',t.wd_cta_title,true);
  set('wd-cta-text',t.wd_cta_text); set('wd-cta-price-from',t.wd_cta_price_from);
  set('wd-cta-btn1',noArrow(t.wd_cta_btn1)); set('wd-cta-btn2',noArrow(t.wd_cta_btn2));
  set('wd-cta-perk1',t.wd_cta_perk1); set('wd-cta-perk2',t.wd_cta_perk2); set('wd-cta-perk3',t.wd_cta_perk3);
  // 3dprint.html
  set('pr-label',t.pr_label); set('pr-title',t.pr_title,true); set('pr-desc',t.pr_desc,true);
  for(let i=1;i<=8;i++) set('pr-f'+i,t['pr_f'+i]);
  set('pr-cta1',noArrow(t.pr_cta1)); set('pr-cta2',noArrow(t.pr_cta2));
  set('pr-off-label',t.pr_off_label);
  set('pr-off1-name',t.pr_off1_name); set('pr-off1-text',t.pr_off1_text);
  set('pr-off2-name',t.pr_off2_name); set('pr-off2-text',t.pr_off2_text);
  set('pr-off3-name',t.pr_off3_name); set('pr-off3-text',t.pr_off3_text);
  set('pr-off4-name',t.pr_off4_name); set('pr-off4-text',t.pr_off4_text);
  set('pr-work-label',t.pr_work_label); set('pr-work-title',t.pr_work_title); set('pr-work-sub',t.pr_work_sub);
  set('pr-proj-1-name',t.pr_proj_1_name); set('pr-proj-1-role',t.pr_proj_1_role); set('pr-proj-1-desc',t.pr_proj_1_desc); set('pr-proj-1-link',t.pr_proj_1_link);
  set('pr-proj-2-name',t.pr_proj_2_name); set('pr-proj-2-role',t.pr_proj_2_role); set('pr-proj-2-desc',t.pr_proj_2_desc); set('pr-proj-2-link',t.pr_proj_2_link);
  set('pr-proj-3-name',t.pr_proj_3_name); set('pr-proj-3-role',t.pr_proj_3_role); set('pr-proj-3-desc',t.pr_proj_3_desc); set('pr-proj-3-link',t.pr_proj_3_link);
  set('pr-proj-4-name',t.pr_proj_4_name); set('pr-proj-4-role',t.pr_proj_4_role); set('pr-proj-4-desc',t.pr_proj_4_desc); set('pr-proj-4-link',t.pr_proj_4_link);
  set('pr-cta-label',t.pr_cta_label); set('pr-cta-title',t.pr_cta_title,true);
  set('pr-cta-text',t.pr_cta_text); set('pr-cta-price-from',t.pr_cta_price_from);
  set('pr-cta-btn1',noArrow(t.pr_cta_btn1));
  set('pr-cta-perk1',t.pr_cta_perk1); set('pr-cta-perk2',t.pr_cta_perk2); set('pr-cta-perk3',t.pr_cta_perk3);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading,true);
  set('contact-sub',t.contact_sub);
  set('midcta-label',t.midcta_label); set('midcta-heading',t.midcta_heading); set('midcta-sub',t.midcta_sub); set('midcta-btn',t.midcta_btn);
  set('contact-label-static',t.contact_label_static); set('contact-heading-static',t.contact_heading_static); set('contact-sub-static',t.contact_sub_static);
  set('form-direct-label',t.form_direct_label);
  set('form-lbl-name',t.form_lbl_name); set('form-lbl-email',t.form_lbl_email);
  set('form-lbl-phone',t.form_lbl_phone); set('form-lbl-subject',t.form_lbl_subject); set('form-lbl-message',t.form_lbl_message);
  set('form-submit-label',t.form_submit_label);
  const phName = document.getElementById('form-ph-name'); if(phName) phName.placeholder = t.form_ph_name;
  const phMsg = document.getElementById('form-ph-message'); if(phMsg) phMsg.placeholder = t.form_ph_message;
  const sel = document.getElementById('form-select-subject');
  if(sel){ const opts = ['form-opt-default','form-opt-1','form-opt-2','form-opt-3','form-opt-4','form-opt-5','form-opt-6','form-opt-7'];
    const keys = ['form_opt_default','form_opt_1','form_opt_2','form_opt_3','form_opt_4','form_opt_5','form_opt_6','form_opt_7'];
    opts.forEach((id,i)=>{ const o=document.getElementById(id); if(o) o.textContent=t[keys[i]]; }); }
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc); set('footer-loc-bar',t.footer_loc_bar);
  document.querySelectorAll('.ec-ad-question').forEach(el => el.textContent = t.ec_ad_question);
  document.querySelectorAll('.ec-label').forEach(el => el.textContent = t.ec_label);
  document.querySelectorAll('.ec-ad-cta').forEach(el => { const arrow = el.querySelector('.ec-ad-arrow'); if(arrow){ el.firstChild.textContent = '\n        ' + t.ec_ad_cta + '\n        '; } else { el.textContent = t.ec_ad_cta; } });
  const mmap = {'mnav-about':t.nav_about,'mnav-projects':t.nav_projects,'mnav-software':t.nav_software,'mnav-webdesign':t.nav_webdesign,'mnav-3dprint':t.nav_3dprint,'mnav-experience':t.nav_experience,'mnav-contact':t.nav_contact};
  Object.entries(mmap).forEach(([id,val])=>{ const el=document.getElementById(id); if(el) el.textContent=val; });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
  // software.html — How It Works heading + modules section
  set('hiw-h1-l1',t.hiw_h1_l1); set('hiw-h1-l3',t.hiw_h1_l3); set('hiw-h1-l4',t.hiw_h1_l4);
  set('cap-all-label',t.cap_all_label);
  set('fcap-heading-l1',t.fcap_heading_l1); set('fcap-heading-l2',t.fcap_heading_l2);
  if (typeof refreshModules === 'function') refreshModules();
  if (typeof refreshHIW === 'function') refreshHIW();
  document.querySelectorAll('.contact-location-text').forEach(el => { el.textContent = t.contact_location; });
  renderPortfolio();
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA
═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — 2-COLUMN DYNAMIC
═══════════════════════════════════════════════════════════════ */
let portLeft  = 0;
let portRight = 1;
let portTimer = null;
const colImgIdx    = { portColLeft: 0, portColRight: 0 };
const colImgTimers = { portColLeft: null, portColRight: null };

let thumbScrollTimer = null;
let thumbScrollPaused = false;
let thumbScrollResumeTimer = null;

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
    setTimeout(() => { img.src = project.images[colImgIdx[id]]; img.style.opacity = '1'; }, 500);
  }, 5200);
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
    if (link) { link.href = p.link; const mob = window.innerWidth <= 640; link.textContent = lang === 'el' ? (mob ? 'Επικοινωνήστε' : 'Επικοινωνήστε →') : (mob ? 'Get in Touch' : 'Get in Touch →'); }
    colEl.classList.remove('port-fade-out');
    startColImageCycle(colEl, p);
  }, 500);
}

function buildPortThumbStrip() {
  const container = document.getElementById('portThumbStrip');
  if (!container) return;
  container.innerHTML = '';
  const lang = currentLang;
  const MIN_FOR_LOOP = 4;
  const shouldLoop = PORTFOLIO_DATA.length >= MIN_FOR_LOOP;

  function makeItem(p, i) {
    const item = document.createElement('button');
    item.className = 'port-thumb-item';
    item.dataset.idx = i;
    const title = lang === 'el' ? p.titleEl : p.titleEn;
    const num = String(i + 1).padStart(2, '0');
    item.innerHTML = `
      <div class="port-thumb-img-wrap">
        <img class="port-thumb-img" src="${p.images[0]}" alt="${title}" loading="lazy">
      </div>
      <div class="port-thumb-label">
        <span class="port-thumb-num">${num} &nbsp;</span>${title}
      </div>`;
    item.addEventListener('click', () => openProjectModal(i));
    return item;
  }

  clearInterval(thumbScrollTimer);

  if (shouldLoop) {
    const inner = document.createElement('div');
    inner.className = 'port-thumb-inner';
    // First set
    PORTFOLIO_DATA.forEach((p, i) => inner.appendChild(makeItem(p, i)));
    // Duplicate set for seamless loop
    PORTFOLIO_DATA.forEach((p, i) => inner.appendChild(makeItem(p, i)));
    container.appendChild(inner);
    startThumbAutoScroll(container);
  } else {
    PORTFOLIO_DATA.forEach((p, i) => container.appendChild(makeItem(p, i)));
  }

  container.addEventListener('mouseenter',  () => setThumbPaused(true));
  container.addEventListener('mouseleave',  () => setThumbPaused(false, 1200));
  container.addEventListener('touchstart',  () => setThumbPaused(true),        { passive: true });
  container.addEventListener('touchend',    () => setThumbPaused(false, 1800), { passive: true });
  container.addEventListener('touchcancel', () => setThumbPaused(false, 1800), { passive: true });
}

function startThumbAutoScroll(container) {
  thumbScrollTimer = setInterval(() => {
    if (thumbScrollPaused) return;
    container.scrollLeft += 1;
    const inner = container.querySelector('.port-thumb-inner');
    if (inner && container.scrollLeft >= inner.scrollWidth / 2) {
      container.scrollLeft -= inner.scrollWidth / 2;
    }
  }, 16);
}

function setThumbPaused(val, resumeAfterMs) {
  thumbScrollPaused = val;
  clearTimeout(thumbScrollResumeTimer);
  if (val && resumeAfterMs) {
    thumbScrollResumeTimer = setTimeout(() => { thumbScrollPaused = false; }, resumeAfterMs);
  }
}

function initThumbNavButtons() {
  const strip = document.getElementById('portThumbStrip');
  const prev  = document.getElementById('portThumbPrev');
  const next  = document.getElementById('portThumbNext');
  if (!strip || !prev || !next) return;
  const scrollAmt = 304; // ~2 items (138px + 14px gap = 152px × 2)

  prev.addEventListener('click', () => {
    setThumbPaused(true, 2000);
    const inner = strip.querySelector('.port-thumb-inner');
    if (inner && strip.scrollLeft < scrollAmt + 50) {
      // Jump to equivalent position in second copy so we have room to scroll left
      strip.scrollLeft = inner.scrollWidth / 2 + strip.scrollLeft;
    }
    strip.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    setThumbPaused(true, 2000);
    strip.scrollBy({ left: scrollAmt, behavior: 'smooth' });
  });
}

function setThumbActive(idx) {
  document.querySelectorAll('.port-thumb-item').forEach(el => {
    el.classList.toggle('active', Number(el.dataset.idx) === idx);
  });
}

function renderPortfolio() {
  const L = document.getElementById('portColLeft');
  const R = document.getElementById('portColRight');
  if (L) renderPortfolioCol(L, portLeft);
  if (R) renderPortfolioCol(R, portRight);
  updatePortDots();
  buildPortThumbStrip();
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
  }, 7000);
}

function nextProjectForColumn(colId) {
  const current = colId === 'portColLeft' ? portLeft : portRight;
  const other = colId === 'portColLeft' ? portRight : portLeft;
  let available = PORTFOLIO_DATA.map((_, i) => i).filter(i => i !== current && i !== other);
  if (available.length === 0) {
    available = PORTFOLIO_DATA.map((_, i) => i).filter(i => i !== current);
  }
  const next = available[Math.floor(Math.random() * available.length)];
  if (colId === 'portColLeft') portLeft = next;
  else portRight = next;
  renderPortfolio();
  resetPortTimer();
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
  document.addEventListener('mousemove', e => onMove(e.clientX), { passive: true });
  document.addEventListener('touchmove', e => { if (activeCol) onMove(e.touches[0].clientX); }, {passive:true});
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchend',  onUp, {passive:true});
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════════ */
let modalImgIdx = 0;
let modalProject = null;
let cflowIdx    = 0;
let cflowImages = [];
let cflowDragging = false;

function buildProjectModal() {
  if (document.getElementById('portModal')) return;
  const m = document.createElement('div');
  m.id = 'portModal';
  m.className = 'port-modal';
  m.innerHTML = `
    <div class="port-modal-backdrop"></div>
    <div class="port-modal-panel">
      <button class="port-modal-close" id="portModalClose" aria-label="Close">✕</button>
      <div class="port-modal-gallery">
        <button class="port-modal-nav port-modal-prev" id="portModalPrev">‹</button>
        <img class="port-modal-img" id="portModalImg" src="" alt="">
        <button class="port-modal-nav port-modal-next" id="portModalNext">›</button>
        <div class="port-modal-img-counter" id="portModalCounter"></div>
        <div class="cflow-stage" id="cflowStage"></div>
      </div>
      <div class="port-modal-dots-row" id="portModalDots"></div>
      <div class="port-modal-info">
        <div class="port-modal-cat"  id="portModalCat"></div>
        <h2  class="port-modal-title" id="portModalTitle"></h2>
        <p   class="port-modal-desc"  id="portModalDesc"></p>
      </div>
    </div>`;
  document.body.appendChild(m);

  document.getElementById('portModalClose').addEventListener('click', closeProjectModal);
  m.querySelector('.port-modal-backdrop').addEventListener('click', closeProjectModal);
  document.getElementById('portModalPrev').addEventListener('click', () => modalNav(-1));
  document.getElementById('portModalNext').addEventListener('click', () => modalNav(+1));
  document.addEventListener('keydown', e => {
    if (!m.classList.contains('open')) return;
    if (e.key === 'Escape')      closeProjectModal();
    if (e.key === 'ArrowLeft')  modalNav(-1);
    if (e.key === 'ArrowRight') modalNav(+1);
  });

  // Touch swipe — desktop: snap on release; mobile: live coverflow drag
  const gallery = m.querySelector('.port-modal-gallery');
  let touchStartX = 0;
  let touchActive = false;
  gallery.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchActive = true;
    const stage = document.getElementById('cflowStage');
    if (stage) stage.querySelectorAll('.cflow-card').forEach(c => c.classList.remove('cflow-snap'));
  }, { passive: true });
  gallery.addEventListener('touchmove', e => {
    if (!touchActive || window.innerWidth > 768) return;
    const dx = e.touches[0].clientX - touchStartX;
    const stage = document.getElementById('cflowStage');
    const w = stage ? stage.offsetWidth * 0.74 : 220;
    cflowRender(-(dx / w));
  }, { passive: true });
  gallery.addEventListener('touchend', e => {
    if (!touchActive) return;
    touchActive = false;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (window.innerWidth <= 768) {
      const stage = document.getElementById('cflowStage');
      const w = stage ? stage.offsetWidth * 0.74 : 220;
      const progress = -(dx / w);
      if (progress > 0.28 && cflowIdx < cflowImages.length - 1) modalNav(1);
      else if (progress < -0.28 && cflowIdx > 0) modalNav(-1);
      else cflowGoTo(cflowIdx);
    } else {
      if (Math.abs(dx) > 40) modalNav(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

  // Horizontal wheel / trackpad swipe
  let wheelCooldown = false;
  gallery.addEventListener('wheel', e => {
    if (wheelCooldown) return;
    const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 20) return;
    e.preventDefault();
    modalNav(delta > 0 ? 1 : -1);
    wheelCooldown = true;
    setTimeout(() => { wheelCooldown = false; }, 350);
  }, { passive: false });
}

/* ── MOBILE PEEK CAROUSEL (iOS Photos style) ─────────────────── */
function cflowCardTransform(offset, stageW) {
  const absOff = Math.abs(offset);
  const tx     = offset * (stageW * 0.74); // ~16% of adjacent card peeks at each side
  const scale  = Math.max(0.86, 1 - absOff * 0.08);
  const opacity = Math.max(0, 1 - absOff * 0.52);
  return { tx, scale, opacity };
}

function cflowRender(dragOffset) {
  const stage = document.getElementById('cflowStage');
  if (!stage) return;
  const stageW = stage.offsetWidth || 300;
  stage.querySelectorAll('.cflow-card').forEach((card, i) => {
    const offset = i - cflowIdx - (dragOffset || 0);
    const { tx, scale, opacity } = cflowCardTransform(offset, stageW);
    card.style.transform = `translateX(${tx.toFixed(1)}px) scale(${scale.toFixed(3)})`;
    card.style.opacity   = opacity.toFixed(3);
    card.style.zIndex    = Math.round(100 - Math.abs(offset) * 18);
  });
}

function buildCflowCards(images) {
  const stage = document.getElementById('cflowStage');
  if (!stage) return;
  stage.innerHTML = '';
  cflowImages = images;
  cflowIdx    = 0;
  images.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = 'cflow-card';
    const img = document.createElement('img');
    img.src = src; img.alt = '';
    card.appendChild(img);
    card.addEventListener('click', () => { if (Math.abs(i - cflowIdx) >= 0.5) cflowGoTo(i); });
    stage.appendChild(card);
  });
  cflowRender(0);
}

function cflowGoTo(idx) {
  const stage = document.getElementById('cflowStage');
  if (!stage) return;
  cflowIdx = Math.max(0, Math.min(cflowImages.length - 1, idx));
  stage.querySelectorAll('.cflow-card').forEach(c => c.classList.add('cflow-snap'));
  cflowRender(0);
  setTimeout(() => {
    const s = document.getElementById('cflowStage');
    if (s) s.querySelectorAll('.cflow-card').forEach(c => c.classList.remove('cflow-snap'));
  }, 460);
  modalImgIdx = cflowIdx;
  const counter = document.getElementById('portModalCounter');
  if (counter) counter.textContent = `${cflowIdx + 1} / ${cflowImages.length}`;
  document.querySelectorAll('.port-modal-dot').forEach((d, i) => d.classList.toggle('active', i === cflowIdx));
}

function openProjectModal(projectIdx) {
  modalProject = PORTFOLIO_DATA[projectIdx];
  modalImgIdx  = 0;
  const lang = currentLang;
  document.getElementById('portModalCat').textContent   = lang === 'el' ? modalProject.catEl   : modalProject.catEn;
  document.getElementById('portModalTitle').textContent = lang === 'el' ? modalProject.titleEl : modalProject.titleEn;
  document.getElementById('portModalDesc').textContent  = lang === 'el' ? modalProject.descEl  : modalProject.descEn;
  buildModalDots();
  if (window.innerWidth <= 768) buildCflowCards(modalProject.images);
  modalSetImage(0);
  setThumbActive(projectIdx);
  const m = document.getElementById('portModal');
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const m = document.getElementById('portModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

function buildModalDots() {
  const container = document.getElementById('portModalDots');
  if (!container || !modalProject) return;
  container.innerHTML = '';
  modalProject.images.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'port-modal-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Image ' + (i + 1));
    d.addEventListener('click', () => modalSetImage(i));
    container.appendChild(d);
  });
}

function modalSetImage(idx) {
  if (!modalProject) return;
  modalImgIdx = (idx + modalProject.images.length) % modalProject.images.length;
  if (window.innerWidth <= 768) { cflowGoTo(modalImgIdx); return; }
  const img = document.getElementById('portModalImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = modalProject.images[modalImgIdx];
    img.alt = '';
    img.style.opacity = '1';
  }, 180);
  document.getElementById('portModalCounter').textContent = `${modalImgIdx + 1} / ${modalProject.images.length}`;
  document.querySelectorAll('.port-modal-dot').forEach((d, i) => d.classList.toggle('active', i === modalImgIdx));
  const prev = document.getElementById('portModalPrev');
  const next = document.getElementById('portModalNext');
  if (prev) prev.disabled = modalImgIdx === 0;
  if (next) next.disabled = modalImgIdx === modalProject.images.length - 1;
}

function modalNav(dir) {
  if (!modalProject) return;
  const newIdx = modalImgIdx + dir;
  if (newIdx < 0 || newIdx >= modalProject.images.length) return;
  modalSetImage(newIdx);
}

function addPortImageClickHandlers() {
  ['portColLeft', 'portColRight'].forEach(colId => {
    const colEl = document.getElementById(colId);
    if (!colEl) return;
    const imgWrap = colEl.querySelector('.port-image-wrap');
    if (!imgWrap) return;

    imgWrap.addEventListener('click', () => {
      const idx = colId === 'portColLeft' ? portLeft : portRight;
      openProjectModal(idx);
    });

    colEl.querySelectorAll('a, button, .project-link').forEach(el => {
      el.addEventListener('mouseenter', () => colEl.classList.add('port-hover'));
      el.addEventListener('mouseleave', () => colEl.classList.remove('port-hover'));
    });
  });
}

function initPortfolio() {
  initPortDots();
  renderPortfolio();
  initPortDrag();
  addPortImageClickHandlers();
  initThumbNavButtons();
  setTimeout(startPortTimer, 3200);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  els.forEach(el => io.observe(el));
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
  }, { passive: true });
}

function initHeroExplode() {
  const hero     = document.getElementById('hero');
  const heroLeft = hero ? hero.querySelector('.hero-left') : null;
  const canvas   = document.getElementById('hero3d');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const heroH = hero.offsetHeight;
    const st    = window.scrollY;
    const isMob = window.innerWidth <= 960;

    if (isMob) {
      /* Drive explode/assemble directly from scroll position in both directions —
         fully assembled only at top (st=0), fully exploded at 65% of hero height */
      const progress = Math.max(0, Math.min(1, st / (heroH * 0.65)));
      if (typeof setScrollExplode === 'function') setScrollExplode(progress);

      /* Canvas: full opacity inside hero, subtle outside */
      if (canvas) {
        canvas.style.opacity = st < heroH ? '0.38' : '0.10';   /* έξω από το hero σχεδόν αόρατο */
      }

      /* Hero text stays visible so text and explosion are seen together */
      if (heroLeft) {
        heroLeft.style.opacity = '1';
      }
    } else {
      /* Desktop: original behaviour — explode only within hero */
      const progress = Math.max(0, Math.min(1, st / (heroH * 0.55)));
      if (typeof setScrollExplode === 'function') setScrollExplode(progress);
      if (heroLeft) {
        const fade = Math.max(0, 1 - Math.max(0, progress - 0.25) / 0.5);
        heroLeft.style.opacity = fade;
      }
    }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAV
═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const btn=document.getElementById('navHamburger'), drawer=document.getElementById('navMobile');
  if(!btn||!drawer)return;
  btn.addEventListener('click',()=>{btn.classList.toggle('open');drawer.classList.toggle('open');});
  window.addEventListener('scroll',()=>{ if(drawer.classList.contains('open')) closeMobileNav(); },{passive:true});
}
function closeMobileNav() {
  const btn=document.getElementById('navHamburger'),drawer=document.getElementById('navMobile');
  if(btn)btn.classList.remove('open');if(drawer)drawer.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════════
   PROCESS FLOW ANIMATION — activate only when section is visible
═══════════════════════════════════════════════════════════════ */
function initProcessAnimations() {
  const proc = document.getElementById('process');
  if (!proc) return;
  new IntersectionObserver(entries => {
    proc.classList.toggle('anim-active', entries[0].isIntersecting);
  }, { threshold: 0.05 }).observe(proc);
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang') || 'el');
  initScroll();
  initHeroExplode();
  initPortfolio();
  buildProjectModal();
  initMobileNav();
  initScrollReveal();
  initProcessAnimations();
  if (typeof initThree === 'function') setTimeout(initThree, 120);
});
