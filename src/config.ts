/* ============================================
   KUNDEN-KONFIGURATION
   Hier alles anpassen, was pro Kunde anders ist.
   ============================================ */

export const siteConfig = {
  // Grunddaten
  name: 'Firmenname',
  tagline: 'Kurze Beschreibung des Unternehmens',
  description: 'SEO-Beschreibung für Suchmaschinen (max. 160 Zeichen)',
  url: 'https://www.example.de',
  language: 'de',

  // Kontakt
  contact: {
    email: 'info@example.de',
    phone: '+49 123 456 789',
    address: {
      street: 'Musterstraße 1',
      zip: '12345',
      city: 'Musterstadt',
    },
  },

  // Standort (für Karte)
  location: {
    lat: 51.1657,
    lng: 10.4515,
    zoom: 15,
  },

  // Social Media (leer lassen wenn nicht vorhanden)
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },

  // Navigation – Abschnitte die auf der Seite erscheinen
  // id muss mit der Section-ID in index.astro übereinstimmen
  navigation: [
    { label: 'Start', href: '#hero' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#team' },
    { label: 'Öffnungszeiten', href: '#hours' },
    { label: 'Aktuelles', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#contact' },
  ],

  // Logo (URL oder null für typografische Navigation)
  logoUrl: null as string | null,

  // Bildmodus: 'none' | 'placeholders' | 'full'
  imageMode: 'none' as const,

  // Fonts & Design → siehe src/config/design.ts (Jarley Design Profiles)
};
