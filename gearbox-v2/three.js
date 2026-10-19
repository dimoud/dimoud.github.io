/* Ενιαίο σημείο εισαγωγής του three.js (r169, ελαχιστοποιημένη έκδοση) για τον μειωτήρα.
   Λειτουργεί και μέσα σε Web Worker, όπου δεν ισχύει το importmap της σελίδας.
   Η σελίδα προβολής (gearbox-v2/index.html) δείχνει στο ΙΔΙΟ URL, ώστε να υπάρχει ένα μόνο αντίγραφο. */
export * from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.min.js';
