/**
 * config.js — Professional Landing Page Configuration
 * ════════════════════════════════════════════════════════════════════════════
 *
 *   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR EACH NEW CLIENT.
 *
 *   Steps to create a new site:
 *     1. Duplicate the entire _template/ folder
 *     2. Rename the folder to the client's project name
 *     3. Fill in all values in THIS file
 *     4. Drop client images into the folder (see ASSETS section below)
 *     5. Done — the website generates itself from this data
 *
 * ════════════════════════════════════════════════════════════════════════════
 *
 *   EDITING RULES:
 *     1. Keep the single-quote strings:  'your text here'
 *     2. Use  &amp;   instead of  &   inside any HTML strings
 *     3. Use  &mdash; instead of  —   inside any HTML strings
 *     4. In about.leadEl and about.leadEn, write {years} where you want the
 *        auto-calculated years-of-experience number to appear
 *     5. Keep commas after every item in arrays and objects
 *     6. Icons use Font Awesome classes — find icons at fontawesome.com/icons
 *        (use the class name without "fa-solid", e.g. 'fa-phone', 'fa-star')
 *
 * ════════════════════════════════════════════════════════════════════════════
 */

/* LOAD ORDER CRITICAL — no defer, no async. Must load before site-init.js */

window.SITE_CONFIG = {

    // ── META ──────────────────────────────────────────────────────────────
    // Browser tab title and search-engine description in both languages.
    meta: {
        titleEl:       'Ονοματεπώνυμο | Τίτλος Αθήνα',
        titleEn:       'Full Name | Title Athens',
        descriptionEl: 'Σύντομη περιγραφή των υπηρεσιών για μηχανές αναζήτησης.',
        descriptionEn: 'Short description of services for search engines.',
        lang:          'el',    // default language on first load: 'el' or 'en'
    },


    // ── PROFILE ───────────────────────────────────────────────────────────
    // The professional's identity. All text here must be in UPPERCASE for the
    // hero section — site-init.js converts to natural case where needed.
    profile: {
        firstNameEl:  'ΟΝΟΜΑ',               // e.g. 'ΒΑΪΟΣ'
        firstNameEn:  'FIRSTNAME',           // e.g. 'VAIOS'
        lastNameEl:   'ΕΠΩΝΥΜΟ',             // e.g. 'ΛΙΑΠΗΣ'
        lastNameEn:   'LASTNAME',            // e.g. 'LIAPIS'
        initials:      'ΟΕ',                    // 2–3 chars — logo fallback text
        displayNameEl: 'Όνομα Επώνυμο',        // natural-case name (contact section, footer)
        displayNameEn: 'Firstname Lastname',
        professionEl: 'Τίτλος Επαγγέλματος', // e.g. 'Πολιτικός Μηχανικός'
        professionEn: 'Job Title',           // e.g. 'Civil Engineer'
        fullTitleEl:  'Πλήρης Τίτλος',       // e.g. 'Διπλωματούχος Πολιτικός Μηχανικός ΑΠΘ'
        fullTitleEn:  'Full Professional Title', // e.g. 'Graduate Civil Engineer AUTH'
        universityEl: 'ΑΠΘ',                // degree abbreviation, shown in hero crosshair
        universityEn: 'AUTH',
        locationEl:   'Αθήνα — Αττική',     // shown in the About dimension bar
        locationEn:   'Athens — Attica',
        areaEl:       'Αθήνα &amp; Όλη η Αττική', // shown in contact section
        areaEn:       'Athens &amp; All of Attica',
        expStartYear: 2015,                  // auto-calculates years of experience
    },


    // ── ASSETS ────────────────────────────────────────────────────────────
    // File names relative to the project folder.
    // Supported formats: jpg, jpeg, png, webp.
    // Fallback placeholder images are used automatically if files are missing.
    assets: {
        logo:       'logo.jpg',              // circular logo in nav & footer
        photo:      'photo.jpg',             // professional headshot
        heroSlides: [                        // 1–3 background images for the hero
            'cover_1.jpg',
            'cover_2.jpg',
        ],
    },


    // ── CONTACT ───────────────────────────────────────────────────────────
    contact: {
        phone:    '69X XXX XXXX',            // display format: '694 867 5267'
        phoneTel: 'tel:69XXXXXXXXX',         // tel: link format: 'tel:6948675267'
        email:    'client@example.com',
    },


    // ── THEME ─────────────────────────────────────────────────────────────
    // Accent color overrides the gold (#c9a86c) used throughout the design.
    // Try: '#c9a86c' (gold), '#2a6dd9' (blue), '#c04b2e' (terracotta)
    theme: {
        accent:      '#c9a86c',             // primary accent color
        accentLight: '#e8c98a',             // lighter variant for gradients
    },


    // ── MARQUEE ───────────────────────────────────────────────────────────
    // Scrolling text strip below the hero. 4–8 items recommended.
    marquee: [
        { el: 'Υπηρεσία 1',    en: 'Service 1' },
        { el: 'Υπηρεσία 2',    en: 'Service 2' },
        { el: 'Υπηρεσία 3',    en: 'Service 3' },
        { el: 'Υπηρεσία 4',    en: 'Service 4' },
        { el: 'Υπηρεσία 5',    en: 'Service 5' },
        { el: 'Επαγγελματικός Τίτλος', en: 'Professional Title' },
    ],


    // ── ABOUT ─────────────────────────────────────────────────────────────
    about: {
        // HTML allowed. Use &amp; for & and {years} for auto-calculated experience.
        headingEl: 'Εμπειρία &amp; <em>Εξειδίκευση</em>',
        headingEn: 'Experience &amp; <em>Expertise</em>',
        leadEl:    'Σύντομη περιγραφή του επαγγελματία, με {years}+ χρόνια εμπειρία στον κλάδο και εξειδίκευση στο αντικείμενό του.',
        leadEn:    'Short bio of the professional, with {years}+ years of experience in the field and specialization in their domain.',

        // Exactly 3 feature highlights shown below the bio
        features: [
            {
                icon:    'fa-clock',
                labelEl: 'Χαρακτηριστικό 1',
                labelEn: 'Feature 1',
                textEl:  'Σύντομη περιγραφή του πρώτου χαρακτηριστικού.',
                textEn:  'Short description of the first feature.',
            },
            {
                icon:    'fa-handshake',
                labelEl: 'Χαρακτηριστικό 2',
                labelEn: 'Feature 2',
                textEl:  'Σύντομη περιγραφή του δεύτερου χαρακτηριστικού.',
                textEn:  'Short description of the second feature.',
            },
            {
                icon:    'fa-star',
                labelEl: 'Χαρακτηριστικό 3',
                labelEn: 'Feature 3',
                textEl:  'Σύντομη περιγραφή του τρίτου χαρακτηριστικού.',
                textEn:  'Short description of the third feature.',
            },
        ],
    },


    // ── SERVICES ──────────────────────────────────────────────────────────
    // Add as many services as needed. Numbers are generated automatically.
    // Icons: find at fontawesome.com/icons (free, solid style)
    services: [
        {
            icon:    'fa-star',
            titleEl: 'Υπηρεσία 1',
            titleEn: 'Service 1',
            textEl:  'Περιγραφή της πρώτης υπηρεσίας. Τι αναλαμβάνετε και πώς ωφελεί τον πελάτη.',
            textEn:  'Description of the first service. What you handle and how it benefits the client.',
        },
        {
            icon:    'fa-check-circle',
            titleEl: 'Υπηρεσία 2',
            titleEn: 'Service 2',
            textEl:  'Περιγραφή της δεύτερης υπηρεσίας.',
            textEn:  'Description of the second service.',
        },
        {
            icon:    'fa-file-alt',
            titleEl: 'Υπηρεσία 3',
            titleEn: 'Service 3',
            textEl:  'Περιγραφή της τρίτης υπηρεσίας.',
            textEn:  'Description of the third service.',
        },
        {
            icon:    'fa-users',
            titleEl: 'Υπηρεσία 4',
            titleEn: 'Service 4',
            textEl:  'Περιγραφή της τέταρτης υπηρεσίας.',
            textEn:  'Description of the fourth service.',
        },
        {
            icon:    'fa-chart-line',
            titleEl: 'Υπηρεσία 5',
            titleEn: 'Service 5',
            textEl:  'Περιγραφή της πέμπτης υπηρεσίας.',
            textEn:  'Description of the fifth service.',
        },
        {
            icon:    'fa-shield-halved',
            titleEl: 'Υπηρεσία 6',
            titleEn: 'Service 6',
            textEl:  'Περιγραφή της έκτης υπηρεσίας.',
            textEn:  'Description of the sixth service.',
        },
    ],


    // ── PROJECTS ──────────────────────────────────────────────────────────
    // Portfolio items. Use 4 or 6 for best grid layout.
    // image: filename relative to project folder
    projects: [
        {
            image:   'cover_1.jpg',
            catEl:   'Κατηγορία 1',
            catEn:   'Category 1',
            titleEl: 'Τίτλος Έργου 1',
            titleEn: 'Project Title 1',
            descEl:  'Σύντομη περιγραφή του έργου.',
            descEn:  'Short description of the project.',
        },
        {
            image:   'cover_2.jpg',
            catEl:   'Κατηγορία 2',
            catEn:   'Category 2',
            titleEl: 'Τίτλος Έργου 2',
            titleEn: 'Project Title 2',
            descEl:  'Σύντομη περιγραφή του έργου.',
            descEn:  'Short description of the project.',
        },
        {
            image:   'cover_1.jpg',
            catEl:   'Κατηγορία 3',
            catEn:   'Category 3',
            titleEl: 'Τίτλος Έργου 3',
            titleEn: 'Project Title 3',
            descEl:  'Σύντομη περιγραφή του έργου.',
            descEn:  'Short description of the project.',
        },
        {
            image:   'cover_2.jpg',
            catEl:   'Κατηγορία 4',
            catEn:   'Category 4',
            titleEl: 'Τίτλος Έργου 4',
            titleEn: 'Project Title 4',
            descEl:  'Σύντομη περιγραφή του έργου.',
            descEn:  'Short description of the project.',
        },
    ],


    // ── CONTACT FORM DROPDOWN ─────────────────────────────────────────────
    // Options shown in the "Subject" select field of the contact form.
    formOptions: [
        { el: 'Υπηρεσία 1',   en: 'Service 1' },
        { el: 'Υπηρεσία 2',   en: 'Service 2' },
        { el: 'Υπηρεσία 3',   en: 'Service 3' },
        { el: 'Άλλο',         en: 'Other' },
    ],
};
