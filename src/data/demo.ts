/* ============================================
   DEMO-DATEN
   Werden verwendet wenn Sanity nicht verbunden ist.
   Ersetze diese durch echte Sanity-Abfragen wenn
   das CMS konfiguriert ist.
   ============================================ */

export const demoFeatures = [
  { title: 'Schnell & zuverlässig', description: 'Unsere Lösung wurde für Performance optimiert — spürbar bei jedem Klick.', icon: 'lightning' },
  { title: 'Sicher & DSGVO-konform', description: 'Alle Daten werden verschlüsselt und ausschließlich in Deutschland gespeichert.', icon: 'shield-check' },
  { title: 'Persönlicher Support', description: 'Bei Fragen erreichen Sie uns direkt — kein Callcenter, echte Ansprechpartner.', icon: 'chat-circle' },
  { title: 'Einfache Bedienung', description: 'Intuitive Oberfläche die ohne Schulung funktioniert. Sofort produktiv.', icon: 'cursor-click' },
  { title: 'Flexible Anpassung', description: 'Passt sich Ihren Anforderungen an — nicht umgekehrt.', icon: 'sliders' },
  { title: 'Transparente Preise', description: 'Keine versteckten Kosten. Sie zahlen nur was Sie nutzen.', icon: 'receipt' },
];

export const demoAbout = {
  heading: 'Seit 2010 an Ihrer Seite',
  text: 'Was als kleine Idee begann, ist heute ein Team aus 15 Experten die für eine Sache brennen: Ihnen den besten Service zu bieten. Wir glauben dass gute Arbeit auf Vertrauen, Transparenz und echtem Interesse am Kunden basiert.',
  highlights: [
    { label: 'Gegründet', value: '2010' },
    { label: 'Mitarbeiter', value: '15' },
    { label: 'Projekte', value: '500+' },
  ],
};


export const demoTeam = [
  {
    _id: '1',
    name: 'Dr. Anna Muster',
    role: 'Gründerin & Leitung',
    bio: 'Kurze Biografie die im CMS gepflegt wird.',
  },
  {
    _id: '2',
    name: 'Max Beispiel',
    role: 'Projektleitung',
    bio: 'Kurze Biografie die im CMS gepflegt wird.',
  },
  {
    _id: '3',
    name: 'Lisa Schmidt',
    role: 'Design',
    bio: 'Kurze Biografie die im CMS gepflegt wird.',
  },
];

export const demoBlogPosts = [
  {
    _id: '1',
    title: 'Erster Blogbeitrag',
    slug: { current: 'erster-blogbeitrag' },
    excerpt: 'Dies ist eine Vorschau des Blogbeitrags die auf der Übersichtsseite angezeigt wird.',
    publishedAt: '2025-01-15',
    author: 'Dr. Anna Muster',
  },
  {
    _id: '2',
    title: 'Zweiter Blogbeitrag',
    slug: { current: 'zweiter-blogbeitrag' },
    excerpt: 'Noch eine Vorschau. Blogposts werden komplett über Sanity verwaltet.',
    publishedAt: '2025-02-01',
    author: 'Dr. Anna Muster',
  },
];

export const demoOpeningHours = [
  { _id: '1', day: 'Montag',     dayOrder: 1, from: '08:00', to: '18:00', closed: false },
  { _id: '2', day: 'Dienstag',   dayOrder: 2, from: '08:00', to: '18:00', closed: false },
  { _id: '3', day: 'Mittwoch',   dayOrder: 3, from: '08:00', to: '18:00', closed: false },
  { _id: '4', day: 'Donnerstag', dayOrder: 4, from: '08:00', to: '18:00', closed: false },
  { _id: '5', day: 'Freitag',    dayOrder: 5, from: '08:00', to: '14:00', closed: false },
  { _id: '6', day: 'Samstag',    dayOrder: 6, from: '',      to: '',      closed: true },
  { _id: '7', day: 'Sonntag',    dayOrder: 7, from: '',      to: '',      closed: true },
];

export const demoFAQs = [
  {
    _id: '1',
    question: 'Wie kann ich einen Termin vereinbaren?',
    answer: 'Rufen Sie uns an oder nutzen Sie das Kontaktformular auf dieser Seite.',
  },
  {
    _id: '2',
    question: 'Wo finde ich Sie?',
    answer: 'Unsere Adresse und eine Anfahrtskarte finden Sie im Kontaktbereich.',
  },
  {
    _id: '3',
    question: 'Welche Leistungen bieten Sie an?',
    answer: 'Eine Übersicht unserer Leistungen finden Sie weiter oben auf dieser Seite.',
  },
];

export const demoTestimonials = [
  {
    _id: '1',
    name: 'Maria S.',
    role: 'Kundin',
    quote: 'Hervorragender Service und sehr kompetente Beratung. Kann ich nur weiterempfehlen!',
    rating: 5,
  },
  {
    _id: '2',
    name: 'Thomas K.',
    role: 'Kunde',
    quote: 'Professionell, freundlich und immer erreichbar. Vielen Dank!',
    rating: 5,
  },
  {
    _id: '3',
    name: 'Sandra M.',
    role: 'Geschäftsführerin',
    quote: 'Die Zusammenarbeit war von Anfang an unkompliziert. Das Ergebnis hat unsere Erwartungen übertroffen.',
    rating: 5,
  },
  {
    _id: '4',
    name: 'Michael R.',
    role: 'Projektleiter',
    quote: 'Schnelle Umsetzung, klare Kommunikation und ein Ergebnis das sich sehen lassen kann.',
    rating: 4,
  },
  {
    _id: '5',
    name: 'Lisa W.',
    role: 'Inhaberin',
    quote: 'Endlich ein Partner der zuhört und versteht was wir brauchen. Absolute Empfehlung!',
    rating: 5,
  },
  {
    _id: '6',
    name: 'Stefan B.',
    role: 'Marketing-Leiter',
    quote: 'Top Qualität, faire Preise und ein Team das wirklich mitdenkt.',
    rating: 5,
  },
];


export const demoStats = [
  { _id: '1', value: '500', label: 'Zufriedene Kunden', suffix: '+' },
  { _id: '2', value: '15', label: 'Jahre Erfahrung', suffix: '' },
  { _id: '3', value: '98', label: 'Zufriedenheit', suffix: '%' },
  { _id: '4', value: '24', label: 'Erreichbarkeit', suffix: '/7' },
];

export const demoGallery = [
  { _id: '1', alt: 'Projekt 1', caption: 'Unser erstes Referenzprojekt' },
  { _id: '2', alt: 'Projekt 2', caption: 'Modernes Design-Konzept' },
  { _id: '3', alt: 'Projekt 3', caption: 'Individuelle Umsetzung' },
  { _id: '4', alt: 'Projekt 4', caption: 'Detail-Aufnahme' },
  { _id: '5', alt: 'Projekt 5', caption: 'Ergebnis nach Fertigstellung' },
  { _id: '6', alt: 'Projekt 6', caption: 'Kundenprojekt Highlight' },
];

export const demoPartners = [
  { _id: '1', name: 'Partner A' },
  { _id: '2', name: 'Partner B' },
  { _id: '3', name: 'Partner C' },
  { _id: '4', name: 'Partner D' },
  { _id: '5', name: 'Partner E' },
];

export const demoProjects = [
  { _id: '1', title: 'Website Redesign', description: 'Kompletter Relaunch der Unternehmenswebsite mit neuem Design-System.', category: 'Webdesign', imageSrc: '/images/placeholder-landscape.jpg' },
  { _id: '2', title: 'Brand Identity', description: 'Entwicklung einer neuen Markenidentität inkl. Logo, Farben und Typografie.', category: 'Branding', imageSrc: '/images/placeholder-hero.jpg' },
  { _id: '3', title: 'E-Commerce Shop', description: 'Online-Shop mit individueller Produktkonfiguration und Zahlungsabwicklung.', category: 'E-Commerce', imageSrc: '/images/placeholder-square.jpg' },
  { _id: '4', title: 'Mobile App', description: 'Native App für iOS und Android mit Push-Benachrichtigungen.', category: 'App', imageSrc: '/images/placeholder-landscape.jpg' },
];

export const demoHighlights = [
  { icon: 'shield-check', text: 'Rundum-Sorglos-Paket', description: 'Von der Beratung bis zur Umsetzung kümmern wir uns um alles.', imageSrc: '/images/placeholder-landscape.jpg' },
  { icon: 'lightning', text: 'Schnelle Umsetzung', description: 'Ihr Projekt ist in wenigen Wochen live — ohne Kompromisse bei der Qualität.', imageSrc: '/images/placeholder-hero.jpg' },
  { icon: 'clock', text: 'Flexible Termine', description: 'Wir richten uns nach Ihrem Zeitplan, nicht umgekehrt.', imageSrc: '/images/placeholder-square.jpg' },
  { icon: 'map-pin', text: 'Vor Ort & Remote', description: 'Persönlich bei Ihnen oder digital — wir sind flexibel.', imageSrc: '/images/placeholder-portrait.jpg' },
];

export const demoProcess = [
  { _id: '1', title: 'Erstgespräch', description: 'Wir lernen Sie und Ihre Anforderungen kennen.', icon: 'chat-circle' },
  { _id: '2', title: 'Konzeption', description: 'Gemeinsam entwickeln wir die passende Strategie.', icon: 'lightbulb' },
  { _id: '3', title: 'Umsetzung', description: 'Wir setzen das Projekt professionell um.', icon: 'code' },
  { _id: '4', title: 'Betreuung', description: 'Auch nach Abschluss stehen wir Ihnen zur Seite.', icon: 'handshake' },
];

export const demoPricingPlans = [
  {
    name: 'Starter',
    price: '49€',
    period: 'Monat',
    description: 'Perfekt für den Einstieg',
    features: [
      { text: 'Bis zu 5 Projekte', included: true },
      { text: 'E-Mail Support', included: true },
      { text: 'Basis-Analysen', included: true },
      { text: 'Individuelle Anpassungen', included: false },
      { text: 'Prioritäts-Support', included: false },
    ],
    ctaText: 'Jetzt starten',
  },
  {
    name: 'Professional',
    price: '99€',
    period: 'Monat',
    description: 'Für wachsende Unternehmen',
    highlighted: true,
    badge: 'Beliebt',
    features: [
      { text: 'Unbegrenzte Projekte', included: true },
      { text: 'Prioritäts-Support', included: true },
      { text: 'Erweiterte Analysen', included: true },
      { text: 'Individuelle Anpassungen', included: true },
      { text: 'API-Zugang', included: false },
    ],
    ctaText: 'Jetzt starten',
  },
  {
    name: 'Enterprise',
    price: '249€',
    period: 'Monat',
    description: 'Für große Teams',
    features: [
      { text: 'Unbegrenzte Projekte', included: true },
      { text: 'Dedizierter Ansprechpartner', included: true },
      { text: 'Erweiterte Analysen', included: true },
      { text: 'Individuelle Anpassungen', included: true },
      { text: 'API-Zugang', included: true },
    ],
    ctaText: 'Kontakt aufnehmen',
  },
];

export const demoComparisonPlans = [
  { name: 'Starter', price: '49€', period: 'Monat' },
  { name: 'Professional', price: '99€', period: 'Monat', highlighted: true },
  { name: 'Enterprise', price: '249€', period: 'Monat' },
];

export const demoComparisonRows = [
  { feature: 'Projekte', values: ['5', 'Unbegrenzt', 'Unbegrenzt'] },
  { feature: 'Speicherplatz', values: ['10 GB', '50 GB', '500 GB'] },
  { feature: 'E-Mail Support', values: [true, true, true] },
  { feature: 'Prioritäts-Support', values: [false, true, true] },
  { feature: 'Individuelle Anpassungen', values: [false, true, true] },
  { feature: 'API-Zugang', values: [false, false, true] },
  { feature: 'Dedizierter Ansprechpartner', values: [false, false, true] },
  { feature: 'SLA-Garantie', values: [false, false, true] },
];

export const demoJobs = [
  {
    title: 'Frontend-Entwickler (m/w/d)',
    location: 'Remote / Wuppertal',
    type: 'Vollzeit',
    description: 'Du entwickelst moderne Webanwendungen mit React und Next.js.',
  },
  {
    title: 'UX/UI Designer (m/w/d)',
    location: 'Wuppertal',
    type: 'Vollzeit',
    description: 'Du gestaltest intuitive Interfaces und entwickelst Design-Systeme.',
  },
  {
    title: 'Projektmanager (m/w/d)',
    location: 'Remote',
    type: 'Teilzeit',
    description: 'Du koordinierst Kundenprojekte und sorgst für reibungslose Abläufe.',
  },
];
