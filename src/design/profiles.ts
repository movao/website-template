/* ============================================
   JARLEY DESIGN PROFILES

   12 Font-Pairings × 12 Farbwelten × 4 Layouts × 3 Spacings
   = 1.728 mögliche Kombinationen

   Jede Dimension ist unabhängig. Die Branche bestimmt
   nur welche Optionen ZULÄSSIG sind, nicht welche gewählt werden.
   ============================================ */

// ─── Font Pairings (12 finale Kombinationen) ────────────
// Alle Fonts lokal gehostet (Fontshare + Google Fonts), DSGVO-konform.
// Nur die aktiven Fonts werden per @font-face geladen.

export const fontPairings = {
  craft: {
    id: 'craft',
    label: 'Craft',
    heading: "'Zodiak', serif",
    headingWeight: '500',
    body: "'Lato', sans-serif",
    bodyWeight: '400',
    character: 'Handwerklich, detailreich, sorgfältig',
  },
  clarity: {
    id: 'clarity',
    label: 'Clarity',
    heading: "'Switzer', sans-serif",
    headingWeight: '600',
    body: "'DM Sans', sans-serif",
    bodyWeight: '400',
    character: 'Schlicht, zugänglich, freundlich',
  },
  refined: {
    id: 'refined',
    label: 'Refined',
    heading: "'Sentient', serif",
    headingWeight: '500',
    body: "'Lato', sans-serif",
    bodyWeight: '400',
    character: 'Fein, anspruchsvoll, kultiviert',
  },
  modern: {
    id: 'modern',
    label: 'Modern',
    heading: "'Satoshi', sans-serif",
    headingWeight: '700',
    body: "'Inter', sans-serif",
    bodyWeight: '400',
    character: 'Zeitgemäß, vielseitig, ausgewogen',
  },
  elegant: {
    id: 'elegant',
    label: 'Elegant',
    heading: "'Playfair Display', serif",
    headingWeight: '700',
    body: "'Lato', sans-serif",
    bodyWeight: '400',
    character: 'Klassisch, edel, luxuriös',
  },
  literary: {
    id: 'literary',
    label: 'Literary',
    heading: "'Lora', serif",
    headingWeight: '600',
    body: "'Source Serif 4', serif",
    bodyWeight: '400',
    character: 'Literarisch, warm, erzählerisch',
  },
  startup: {
    id: 'startup',
    label: 'Startup',
    heading: "'Raleway', sans-serif",
    headingWeight: '700',
    body: "'Lato', sans-serif",
    bodyWeight: '400',
    character: 'Elegant, leicht, startup-tauglich',
  },
  narrative: {
    id: 'narrative',
    label: 'Narrative',
    heading: "'Libre Baskerville', serif",
    headingWeight: '400',
    body: "'Lora', serif",
    bodyWeight: '400',
    character: 'Erzählerisch, buchähnlich, warm',
  },
  neutral: {
    id: 'neutral',
    label: 'Neutral',
    heading: "'Inter', sans-serif",
    headingWeight: '700',
    body: "'DM Sans', sans-serif",
    bodyWeight: '400',
    character: 'Neutral, tech-orientiert, UI-clean',
  },
  therapeutic: {
    id: 'therapeutic',
    label: 'Therapeutic',
    heading: "'Cormorant Garamond', serif",
    headingWeight: '600',
    body: "'Nunito Sans', sans-serif",
    bodyWeight: '400',
    character: 'Einfühlsam, vertrauensvoll, heilsam',
  },
  bold: {
    id: 'bold',
    label: 'Bold',
    heading: "'Montserrat', sans-serif",
    headingWeight: '700',
    body: "'DM Sans', sans-serif",
    bodyWeight: '400',
    character: 'Kräftig, selbstbewusst, präsent',
  },
  friendly: {
    id: 'friendly',
    label: 'Friendly',
    heading: "'Poppins', sans-serif",
    headingWeight: '600',
    body: "'Nunito', sans-serif",
    bodyWeight: '400',
    character: 'Rund, weich, einladend',
  },
} as const;

export type FontPairingId = keyof typeof fontPairings;

// ─── Farbwelten ─────────────────────────────────────────
// Jede Farbwelt definiert 12 semantische Tokens.

export const colorWorlds = {
  midnight: {
    id: 'midnight',
    label: 'Midnight',
    philosophy: 'Dunkler Hintergrund, helle Typografie, ein leuchtender Akzent',
    mood: 'Luxuriös, exklusiv, hochwertig',
    isDark: true,
    background: '#0a0a0f',
    foreground: '#f0ece4',
    mutedForeground: '#8a8578',
    primary: '#c8a85c',
    accent: '#e8c468',
    muted: '#1a1a24',
    card: '#12121c',
    border: '#2a2a38',
    input: '#1a1a24',
    ring: '#c8a85c',
    destructive: '#ef4444',
    success: '#22c55e',
  },
  cleanSlate: {
    id: 'cleanSlate',
    label: 'Clean Slate',
    philosophy: 'Heller, luftiger Look mit einer einzigen kräftigen Akzentfarbe',
    mood: 'Professionell, vertrauenswürdig, aufgeräumt',
    isDark: false,
    background: '#fafaf9',
    foreground: '#1a1a1a',
    mutedForeground: '#71717a',
    primary: '#2563eb',
    accent: '#1d4ed8',
    muted: '#f1f0ee',
    card: '#ffffff',
    border: '#e4e4e4',
    input: '#ffffff',
    ring: '#2563eb',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  terra: {
    id: 'terra',
    label: 'Terra',
    philosophy: 'Erdtöne, warm, natürlich, fast monochrom',
    mood: 'Geerdet, natürlich, vertrauensvoll, menschlich',
    isDark: false,
    background: '#f5f0e8',
    foreground: '#2d2a26',
    mutedForeground: '#8a8078',
    primary: '#8b6f4e',
    accent: '#c4956a',
    muted: '#e8e0d4',
    card: '#faf6ef',
    border: '#d4cabb',
    input: '#faf6ef',
    ring: '#8b6f4e',
    destructive: '#b91c1c',
    success: '#15803d',
  },
  forest: {
    id: 'forest',
    label: 'Forest',
    philosophy: 'Tiefes Grün als Leitfarbe, ruhig und seriös',
    mood: 'Beruhigend, professionell, Gesundheit/Natur',
    isDark: false,
    background: '#f8faf8',
    foreground: '#1a2e1a',
    mutedForeground: '#5a7a5a',
    primary: '#2d5a3d',
    accent: '#3d7a52',
    muted: '#e8efe8',
    card: '#ffffff',
    border: '#c8dcc8',
    input: '#ffffff',
    ring: '#2d5a3d',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  graphite: {
    id: 'graphite',
    label: 'Graphite',
    philosophy: 'Neutrales Dunkelgrau, minimalistisch, ein scharfer Akzent',
    mood: 'Industriell, modern, edgy, technisch',
    isDark: true,
    background: '#18181b',
    foreground: '#e4e4e7',
    mutedForeground: '#a1a1aa',
    primary: '#ef4444',
    accent: '#f87171',
    muted: '#27272a',
    card: '#212124',
    border: '#3f3f46',
    input: '#27272a',
    ring: '#ef4444',
    destructive: '#f87171',
    success: '#4ade80',
  },
  ivory: {
    id: 'ivory',
    label: 'Ivory',
    philosophy: 'Cremig, warm, dezent – Eleganz durch Zurückhaltung',
    mood: 'Hochwertig, ruhig, feminin, Luxus ohne Lautstärke',
    isDark: false,
    background: '#fefcf6',
    foreground: '#3d3830',
    mutedForeground: '#9a9488',
    primary: '#7c6a56',
    accent: '#a08868',
    muted: '#f3ede3',
    card: '#faf5ec',
    border: '#e0d6c8',
    input: '#faf5ec',
    ring: '#7c6a56',
    destructive: '#b91c1c',
    success: '#15803d',
  },
  ocean: {
    id: 'ocean',
    label: 'Ocean',
    philosophy: 'Tiefes Teal und Navy, maritim und vertrauenswürdig',
    mood: 'Maritim, vertrauensvoll, tiefgründig',
    isDark: false,
    background: '#f6fafa',
    foreground: '#0f2b2b',
    mutedForeground: '#5a8a8a',
    primary: '#0d6e6e',
    accent: '#14a3a3',
    muted: '#e6f2f2',
    card: '#ffffff',
    border: '#b8d8d8',
    input: '#ffffff',
    ring: '#0d6e6e',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  sunset: {
    id: 'sunset',
    label: 'Sunset',
    philosophy: 'Warme Orangetöne und Amber, energetisch und einladend',
    mood: 'Warm, energetisch, optimistisch',
    isDark: false,
    background: '#fffbf5',
    foreground: '#2d1f0e',
    mutedForeground: '#9a8a70',
    primary: '#c2660a',
    accent: '#e87c1a',
    muted: '#fef3e2',
    card: '#fffdf8',
    border: '#eed8b8',
    input: '#fffdf8',
    ring: '#c2660a',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  rose: {
    id: 'rose',
    label: 'Rosé',
    philosophy: 'Sanfte Rosatöne, feminin und elegant',
    mood: 'Feminin, sanft, einladend',
    isDark: false,
    background: '#fdf6f8',
    foreground: '#2d1a22',
    mutedForeground: '#9a7a88',
    primary: '#b4446c',
    accent: '#d4668a',
    muted: '#f8e8ee',
    card: '#fffafc',
    border: '#e8c8d4',
    input: '#fffafc',
    ring: '#b4446c',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  slate: {
    id: 'slate',
    label: 'Slate',
    philosophy: 'Kühle Grautöne, ultra-professionell und neutral',
    mood: 'Kühl, professionell, neutral',
    isDark: false,
    background: '#f8f9fb',
    foreground: '#1a1d24',
    mutedForeground: '#64748b',
    primary: '#475569',
    accent: '#64748b',
    muted: '#f1f3f5',
    card: '#ffffff',
    border: '#dde1e7',
    input: '#ffffff',
    ring: '#475569',
    destructive: '#dc2626',
    success: '#16a34a',
  },
  aubergine: {
    id: 'aubergine',
    label: 'Aubergine',
    philosophy: 'Tiefes Lila auf dunklem Grund, kreativ und luxuriös',
    mood: 'Kreativ, luxuriös, geheimnisvoll',
    isDark: true,
    background: '#110d18',
    foreground: '#ece6f4',
    mutedForeground: '#9a90aa',
    primary: '#a855f7',
    accent: '#c084fc',
    muted: '#1c1626',
    card: '#171020',
    border: '#2e2440',
    input: '#1c1626',
    ring: '#a855f7',
    destructive: '#ef4444',
    success: '#22c55e',
  },
  sand: {
    id: 'sand',
    label: 'Sand',
    philosophy: 'Wüstenwärme, zurückhaltend und ruhig',
    mood: 'Ruhig, warm, zurückhaltend',
    isDark: false,
    background: '#faf8f4',
    foreground: '#33302a',
    mutedForeground: '#8a8478',
    primary: '#9a8468',
    accent: '#b8a080',
    muted: '#f0ece4',
    card: '#fdfcf8',
    border: '#ddd6ca',
    input: '#fdfcf8',
    ring: '#9a8468',
    destructive: '#b91c1c',
    success: '#15803d',
  },
} as const;

export type ColorWorldId = keyof typeof colorWorlds;

// ─── Layout-Archetypen ──────────────────────────────────

export const layoutArchetypes = {
  immersive: {
    id: 'immersive',
    label: 'Immersive',
    symbol: 'α',
    character: 'Emotional, bildgetrieben, wenig Text',
    hero: 'Vollbild-Bild/Video mit Overlay-Text, Scroll-Indicator',
    navigation: 'Transparent über Hero, wird sticky beim Scrollen',
    sections: 'Großzügige Fullwidth-Sections, Bilder brechen aus dem Container',
    effects: ['spotlight', 'parallax', 'gradient-shift'],
  },
  editorial: {
    id: 'editorial',
    label: 'Editorial',
    symbol: 'β',
    character: 'Content-fokussiert, durchdacht, strukturiert',
    hero: 'Split-Screen (Text links, Bild rechts) oder asymmetrisches Grid',
    navigation: 'Klar, fest, sofort sichtbar',
    sections: 'Wechsel zwischen Text-Blocks und Bild-Blocks, Magazin-Feeling',
    effects: ['scroll-reveal', 'text-reveal', 'fade-stagger'],
  },
  cardBased: {
    id: 'cardBased',
    label: 'Card-Based',
    symbol: 'γ',
    character: 'Übersichtlich, scanbar, informationsdicht',
    hero: 'Headline + Subline + CTA, eher kompakt',
    navigation: 'Standard sticky, transparent oder solid',
    sections: 'Informationen in Cards/Bento-Grids organisiert',
    effects: ['card-tilt', 'hover-glow', 'border-animate'],
  },
  minimalStatement: {
    id: 'minimalStatement',
    label: 'Minimal Statement',
    symbol: 'δ',
    character: 'Reduziert, mutig, selbstbewusst',
    hero: 'Nur Typografie, kein Bild – großer Text, viel Weißraum',
    navigation: 'Minimal, evtl. nur Hamburger',
    sections: 'Abwechselnd Text und ein einzelnes großes Bild, viel Luft',
    effects: ['text-appear', 'gradient-bg', 'subtle-glow'],
  },
} as const;

export type LayoutArchetypeId = keyof typeof layoutArchetypes;

// ─── Spacing Presets ────────────────────────────────────

export const spacingPresets = {
  breathe: {
    id: 'breathe',
    label: 'Breathe (Luftig)',
    sectionPadding: '10rem',      // 160px
    elementGap: '4rem',           // 64px
    borderRadius: '1.5rem',       // 24px
    containerMaxWidth: '1200px',
    character: 'Ruhig, Premium, entspannt',
  },
  balanced: {
    id: 'balanced',
    label: 'Balanced (Ausgewogen)',
    sectionPadding: '6rem',       // 96px
    elementGap: '2.5rem',         // 40px
    borderRadius: '0.75rem',      // 12px
    containerMaxWidth: '1280px',
    character: 'Professionell, neutral, vielseitig',
  },
  dense: {
    id: 'dense',
    label: 'Dense (Kompakt)',
    sectionPadding: '4rem',       // 64px (Regel: mind. 64px)
    elementGap: '1.5rem',         // 24px
    borderRadius: '0.25rem',      // 4px
    containerMaxWidth: '1400px',
    character: 'Energetisch, informationsdicht, urban',
  },
} as const;

export type SpacingPresetId = keyof typeof spacingPresets;

// ─── Border Radius Presets ─────────────────────────────
// Unabhängig von Spacing — du kannst "breathe" Spacing mit "sharp" Radius kombinieren.

export const borderRadiusPresets = {
  sharp: {
    id: 'sharp',
    label: 'Sharp (Keine Rundung)',
    value: '0px',
    character: 'Kantig, architektonisch, editorial',
  },
  subtle: {
    id: 'subtle',
    label: 'Subtle (Leicht)',
    value: '0.25rem',  // 4px
    character: 'Dezent, professionell, clean',
  },
  soft: {
    id: 'soft',
    label: 'Soft (Weich)',
    value: '0.625rem', // 10px
    character: 'Freundlich, ausgewogen, modern',
  },
  round: {
    id: 'round',
    label: 'Round (Stark)',
    value: '1.25rem',  // 20px
    character: 'Verspielt, einladend, auffällig',
  },
} as const;

export type BorderRadiusPresetId = keyof typeof borderRadiusPresets;

// ─── Icon Styles ────────────────────────────────────────
// Bestimmt wie Icons in Sections gerendert werden.

export const iconStyles = {
  filledBox: {
    id: 'filledBox',
    label: 'Gefüllte Box',
    character: 'Icons in einer farbigen Box — kräftig, modern',
  },
  ring: {
    id: 'ring',
    label: 'Ring',
    character: 'Icons in einem Kreis mit farbigem Rand — elegant, dezent',
  },
  naked: {
    id: 'naked',
    label: 'Frei stehend',
    character: 'Icons ohne Container — minimalistisch, clean',
  },
} as const;

export type IconStyleId = keyof typeof iconStyles;

// ─── Branchen-Matrix ────────────────────────────────────
// 'yes' = empfohlen, 'maybe' = bedingt, nicht gelistet = nicht zulässig

type Allowance = 'yes' | 'maybe';

interface BranchRules {
  label: string;
  fonts: Partial<Record<FontPairingId, Allowance>>;
  colors: Partial<Record<ColorWorldId, Allowance>>;
  layouts: Partial<Record<LayoutArchetypeId, Allowance>>;
  spacings: Partial<Record<SpacingPresetId, Allowance>>;
}

export const branchMatrix: Record<string, BranchRules> = {
  gesundheit: {
    label: 'Gesundheit & Therapie',
    fonts:    { therapeutic: 'yes', refined: 'yes', clarity: 'yes', friendly: 'yes', craft: 'maybe' },
    colors:   { cleanSlate: 'yes', terra: 'yes', forest: 'yes', ivory: 'yes', ocean: 'yes', rose: 'maybe', sand: 'yes' },
    layouts:  { immersive: 'yes', editorial: 'yes', cardBased: 'yes', minimalStatement: 'maybe' },
    spacings: { breathe: 'yes', balanced: 'yes' },
  },
  immobilien: {
    label: 'Immobilien & Makler',
    fonts:    { elegant: 'yes', neutral: 'yes', modern: 'yes', startup: 'yes', narrative: 'maybe', refined: 'maybe' },
    colors:   { midnight: 'yes', cleanSlate: 'yes', terra: 'yes', graphite: 'yes', ivory: 'yes', forest: 'maybe', slate: 'yes', aubergine: 'maybe' },
    layouts:  { immersive: 'yes', editorial: 'yes', cardBased: 'yes', minimalStatement: 'yes' },
    spacings: { breathe: 'yes', balanced: 'yes', dense: 'maybe' },
  },
  handwerk: {
    label: 'Handwerk & Technik',
    fonts:    { bold: 'yes', craft: 'yes', clarity: 'yes', modern: 'maybe', neutral: 'maybe' },
    colors:   { cleanSlate: 'yes', terra: 'yes', graphite: 'yes', midnight: 'maybe', forest: 'maybe', sunset: 'yes', sand: 'maybe', slate: 'yes' },
    layouts:  { editorial: 'yes', cardBased: 'yes', immersive: 'maybe', minimalStatement: 'maybe' },
    spacings: { balanced: 'yes', dense: 'yes', breathe: 'maybe' },
  },
  gastronomie: {
    label: 'Gastronomie & Hospitality',
    fonts:    { craft: 'yes', elegant: 'yes', literary: 'yes', refined: 'maybe', narrative: 'maybe', friendly: 'maybe' },
    colors:   { midnight: 'yes', terra: 'yes', ivory: 'yes', cleanSlate: 'maybe', forest: 'maybe', sunset: 'yes', sand: 'yes', aubergine: 'maybe' },
    layouts:  { immersive: 'yes', editorial: 'yes', minimalStatement: 'yes', cardBased: 'maybe' },
    spacings: { breathe: 'yes', balanced: 'yes' },
  },
  recht: {
    label: 'Recht & Finanzen',
    fonts:    { neutral: 'yes', elegant: 'yes', refined: 'yes', narrative: 'maybe', modern: 'maybe' },
    colors:   { midnight: 'yes', cleanSlate: 'yes', graphite: 'yes', ivory: 'maybe', slate: 'yes', ocean: 'maybe', aubergine: 'maybe' },
    layouts:  { editorial: 'yes', cardBased: 'yes', minimalStatement: 'maybe', immersive: 'maybe' },
    spacings: { balanced: 'yes', breathe: 'maybe' },
  },
  kreativ: {
    label: 'Kreativ & Agentur',
    fonts:    { modern: 'yes', bold: 'yes', startup: 'yes', craft: 'yes', elegant: 'yes', literary: 'maybe', clarity: 'maybe', refined: 'maybe', neutral: 'maybe', narrative: 'maybe', friendly: 'maybe' },
    colors:   { midnight: 'yes', cleanSlate: 'yes', terra: 'yes', forest: 'yes', graphite: 'yes', ivory: 'yes', ocean: 'yes', sunset: 'yes', rose: 'yes', slate: 'yes', aubergine: 'yes', sand: 'yes' },
    layouts:  { immersive: 'yes', editorial: 'yes', cardBased: 'yes', minimalStatement: 'yes' },
    spacings: { breathe: 'yes', balanced: 'yes', dense: 'yes' },
  },
  beauty: {
    label: 'Beauty & Wellness',
    fonts:    { refined: 'yes', elegant: 'yes', therapeutic: 'yes', craft: 'maybe', friendly: 'maybe' },
    colors:   { terra: 'yes', forest: 'yes', ivory: 'yes', cleanSlate: 'maybe', rose: 'yes', sand: 'yes', aubergine: 'maybe' },
    layouts:  { immersive: 'yes', editorial: 'yes', minimalStatement: 'yes', cardBased: 'maybe' },
    spacings: { breathe: 'yes', balanced: 'yes' },
  },
};

// ─── Helpers ────────────────────────────────────────────

/** Prüft ob eine Option für eine Branche zulässig ist */
export function isAllowed(
  branch: string,
  dimension: 'fonts' | 'colors' | 'layouts' | 'spacings',
  optionId: string,
): boolean {
  const rules = branchMatrix[branch];
  if (!rules) return true; // Unbekannte Branche → alles erlaubt
  const allowed = (rules[dimension] as Record<string, Allowance>)[optionId];
  return allowed === 'yes' || allowed === 'maybe';
}

/** Gibt alle zulässigen Optionen für eine Dimension zurück */
export function getAllowedOptions<T extends Record<string, { id: string }>>(
  branch: string,
  dimension: 'fonts' | 'colors' | 'layouts' | 'spacings',
  allOptions: T,
): (T[keyof T])[] {
  return (Object.values(allOptions) as (T[keyof T])[]).filter((opt) =>
    isAllowed(branch, dimension, opt.id),
  );
}
