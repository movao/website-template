/* ============================================
   FONT PAIRINGS

   12 kuratierte Font-Pairings, alle lokal gehostet (DSGVO-konform).
   Nur die aktiven Fonts werden per @font-face geladen (siehe font-registry.ts).

   Farben, Spacing, Radius, Icon-Stil entscheidet Claude pro Kunde
   in src/config/design.ts — kein vorgefertigtes Profil-System mehr.
   ============================================ */

export const fontPairings = {
  craft:       { id: 'craft',       label: 'Craft',       heading: "'Zodiak', serif",            headingWeight: '500', body: "'Lato', sans-serif",            bodyWeight: '400', character: 'Handwerklich, detailreich, sorgfältig' },
  clarity:     { id: 'clarity',     label: 'Clarity',     heading: "'Switzer', sans-serif",      headingWeight: '600', body: "'DM Sans', sans-serif",         bodyWeight: '400', character: 'Schlicht, zugänglich, freundlich' },
  refined:     { id: 'refined',     label: 'Refined',     heading: "'Sentient', serif",          headingWeight: '500', body: "'Lato', sans-serif",            bodyWeight: '400', character: 'Fein, anspruchsvoll, kultiviert' },
  modern:      { id: 'modern',      label: 'Modern',      heading: "'Satoshi', sans-serif",      headingWeight: '700', body: "'Inter', sans-serif",           bodyWeight: '400', character: 'Zeitgemäß, vielseitig, ausgewogen' },
  elegant:     { id: 'elegant',     label: 'Elegant',     heading: "'Playfair Display', serif",  headingWeight: '700', body: "'Lato', sans-serif",            bodyWeight: '400', character: 'Klassisch, edel, luxuriös' },
  literary:    { id: 'literary',    label: 'Literary',    heading: "'Lora', serif",              headingWeight: '600', body: "'Source Serif 4', serif",       bodyWeight: '400', character: 'Literarisch, warm, erzählerisch' },
  startup:     { id: 'startup',     label: 'Startup',     heading: "'Raleway', sans-serif",      headingWeight: '700', body: "'Lato', sans-serif",            bodyWeight: '400', character: 'Elegant, leicht, startup-tauglich' },
  narrative:   { id: 'narrative',   label: 'Narrative',   heading: "'Libre Baskerville', serif", headingWeight: '400', body: "'Lora', serif",                 bodyWeight: '400', character: 'Erzählerisch, buchähnlich, warm' },
  neutral:     { id: 'neutral',     label: 'Neutral',     heading: "'Inter', sans-serif",        headingWeight: '700', body: "'DM Sans', sans-serif",         bodyWeight: '400', character: 'Neutral, tech-orientiert, UI-clean' },
  therapeutic: { id: 'therapeutic', label: 'Therapeutic', heading: "'Cormorant Garamond', serif",headingWeight: '600', body: "'Nunito Sans', sans-serif",     bodyWeight: '400', character: 'Einfühlsam, vertrauensvoll, heilsam' },
  bold:        { id: 'bold',        label: 'Bold',        heading: "'Montserrat', sans-serif",   headingWeight: '700', body: "'DM Sans', sans-serif",         bodyWeight: '400', character: 'Kräftig, selbstbewusst, präsent' },
  friendly:    { id: 'friendly',    label: 'Friendly',    heading: "'Poppins', sans-serif",      headingWeight: '600', body: "'Nunito', sans-serif",          bodyWeight: '400', character: 'Rund, weich, einladend' },
} as const;

export type FontPairingId = keyof typeof fontPairings;
export type FontPairing = (typeof fontPairings)[FontPairingId];
