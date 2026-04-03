/* ============================================
   FONT REGISTRY

   Zentrales Verzeichnis aller verfügbaren Fonts.
   Jeder Font hat seine WOFF2-Dateien lokal in /public/fonts/.

   apply-theme.ts generiert @font-face nur für die
   aktiven Fonts — nicht für alle.

   17 Fonts für 12 Pairings.
   ============================================ */

export interface FontFace {
  weight: number;
  file: string;
  style?: 'normal' | 'italic';
}

export interface FontEntry {
  family: string;
  fallback: string;
  source: 'fontshare' | 'google';
  faces: FontFace[];
}

export const fontRegistry: Record<string, FontEntry> = {
  // ─── Fontshare ────────────────────────────────────────

  'Zodiak': {
    family: 'Zodiak',
    fallback: 'serif',
    source: 'fontshare',
    faces: [
      { weight: 300, file: '/fonts/zodiak/Zodiak-Light.woff2' },
      { weight: 400, file: '/fonts/zodiak/Zodiak-Regular.woff2' },
      { weight: 700, file: '/fonts/zodiak/Zodiak-Bold.woff2' },
    ],
  },
  'Switzer': {
    family: 'Switzer',
    fallback: 'sans-serif',
    source: 'fontshare',
    faces: [
      { weight: 400, file: '/fonts/switzer/Switzer-Regular.woff2' },
      { weight: 500, file: '/fonts/switzer/Switzer-Medium.woff2' },
      { weight: 600, file: '/fonts/switzer/Switzer-Semibold.woff2' },
      { weight: 700, file: '/fonts/switzer/Switzer-Bold.woff2' },
    ],
  },
  'Sentient': {
    family: 'Sentient',
    fallback: 'serif',
    source: 'fontshare',
    faces: [
      { weight: 400, file: '/fonts/sentient/Sentient-Regular.woff2' },
      { weight: 500, file: '/fonts/sentient/Sentient-Medium.woff2' },
      { weight: 700, file: '/fonts/sentient/Sentient-Bold.woff2' },
    ],
  },
  'Satoshi': {
    family: 'Satoshi',
    fallback: 'sans-serif',
    source: 'fontshare',
    faces: [
      { weight: 400, file: '/fonts/satoshi/Satoshi-Regular.woff2' },
      { weight: 500, file: '/fonts/satoshi/Satoshi-Medium.woff2' },
    ],
  },

  // ─── Google Fonts (lokal gehostet, DSGVO-konform) ─────

  'Playfair Display': {
    family: 'Playfair Display',
    fallback: 'serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/playfair-display/PlayfairDisplay-Regular.woff2' },
      { weight: 500, file: '/fonts/playfair-display/PlayfairDisplay-Medium.woff2' },
      { weight: 700, file: '/fonts/playfair-display/PlayfairDisplay-Bold.woff2' },
    ],
  },
  'Lora': {
    family: 'Lora',
    fallback: 'serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/lora/Lora-Regular.woff2' },
      { weight: 500, file: '/fonts/lora/Lora-Medium.woff2' },
      { weight: 600, file: '/fonts/lora/Lora-SemiBold.woff2' },
      { weight: 700, file: '/fonts/lora/Lora-Bold.woff2' },
    ],
  },
  'Libre Baskerville': {
    family: 'Libre Baskerville',
    fallback: 'serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/libre-baskerville/LibreBaskerville-Regular.woff2' },
      { weight: 700, file: '/fonts/libre-baskerville/LibreBaskerville-Bold.woff2' },
    ],
  },
  'Cormorant Garamond': {
    family: 'Cormorant Garamond',
    fallback: 'serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/cormorant-garamond/CormorantGaramond-Regular.woff2' },
      { weight: 500, file: '/fonts/cormorant-garamond/CormorantGaramond-Medium.woff2' },
      { weight: 600, file: '/fonts/cormorant-garamond/CormorantGaramond-SemiBold.woff2' },
      { weight: 700, file: '/fonts/cormorant-garamond/CormorantGaramond-Bold.woff2' },
    ],
  },
  'Source Serif 4': {
    family: 'Source Serif 4',
    fallback: 'serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/source-serif-4/SourceSerif4-Regular.woff2' },
      { weight: 600, file: '/fonts/source-serif-4/SourceSerif4-SemiBold.woff2' },
      { weight: 700, file: '/fonts/source-serif-4/SourceSerif4-Bold.woff2' },
    ],
  },
  'Inter': {
    family: 'Inter',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/inter/Inter-Regular.woff2' },
      { weight: 500, file: '/fonts/inter/Inter-Medium.woff2' },
      { weight: 600, file: '/fonts/inter/Inter-SemiBold.woff2' },
      { weight: 700, file: '/fonts/inter/Inter-Bold.woff2' },
    ],
  },
  'DM Sans': {
    family: 'DM Sans',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/dm-sans/DMSans-Regular.woff2' },
      { weight: 500, file: '/fonts/dm-sans/DMSans-Medium.woff2' },
      { weight: 700, file: '/fonts/dm-sans/DMSans-Bold.woff2' },
    ],
  },
  'Lato': {
    family: 'Lato',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 300, file: '/fonts/lato/Lato-Light.woff2' },
      { weight: 400, file: '/fonts/lato/Lato-Regular.woff2' },
      { weight: 700, file: '/fonts/lato/Lato-Bold.woff2' },
    ],
  },
  'Raleway': {
    family: 'Raleway',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/raleway/Raleway-Regular.woff2' },
      { weight: 500, file: '/fonts/raleway/Raleway-Medium.woff2' },
      { weight: 600, file: '/fonts/raleway/Raleway-SemiBold.woff2' },
      { weight: 700, file: '/fonts/raleway/Raleway-Bold.woff2' },
    ],
  },
  'Montserrat': {
    family: 'Montserrat',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/montserrat/Montserrat-Regular.woff2' },
      { weight: 500, file: '/fonts/montserrat/Montserrat-Medium.woff2' },
      { weight: 600, file: '/fonts/montserrat/Montserrat-SemiBold.woff2' },
      { weight: 700, file: '/fonts/montserrat/Montserrat-Bold.woff2' },
    ],
  },
  'Poppins': {
    family: 'Poppins',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/poppins/Poppins-Regular.woff2' },
      { weight: 500, file: '/fonts/poppins/Poppins-Medium.woff2' },
      { weight: 600, file: '/fonts/poppins/Poppins-SemiBold.woff2' },
      { weight: 700, file: '/fonts/poppins/Poppins-Bold.woff2' },
    ],
  },
  'Nunito': {
    family: 'Nunito',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/nunito/Nunito-Regular.woff2' },
      { weight: 500, file: '/fonts/nunito/Nunito-Medium.woff2' },
      { weight: 600, file: '/fonts/nunito/Nunito-SemiBold.woff2' },
      { weight: 700, file: '/fonts/nunito/Nunito-Bold.woff2' },
    ],
  },
  'Nunito Sans': {
    family: 'Nunito Sans',
    fallback: 'sans-serif',
    source: 'google',
    faces: [
      { weight: 400, file: '/fonts/nunito-sans/NunitoSans-Regular.woff2' },
      { weight: 500, file: '/fonts/nunito-sans/NunitoSans-Medium.woff2' },
      { weight: 600, file: '/fonts/nunito-sans/NunitoSans-SemiBold.woff2' },
      { weight: 700, file: '/fonts/nunito-sans/NunitoSans-Bold.woff2' },
    ],
  },
};

/**
 * Extrahiert den Font-Familiennamen aus einem CSS font-family String.
 * "'Satoshi', sans-serif" → "Satoshi"
 */
export function extractFontName(cssFontFamily: string): string {
  return cssFontFamily.split(',')[0].trim().replace(/'/g, '');
}

/**
 * Generiert @font-face CSS für die angegebenen Font-Familien.
 * Lädt nur die Fonts die tatsächlich gebraucht werden.
 */
export function generateFontFaceCSS(fontFamilies: string[]): string {
  const uniqueFamilies = [...new Set(fontFamilies)];

  return uniqueFamilies
    .map((name) => {
      const entry = fontRegistry[name];
      if (!entry) return `/* Font "${name}" nicht in Registry gefunden */`;

      return entry.faces
        .map((face) => `@font-face {
  font-family: '${entry.family}';
  src: url('${face.file}') format('woff2');
  font-weight: ${face.weight};
  font-style: ${face.style || 'normal'};
  font-display: swap;
}`)
        .join('\n\n');
    })
    .join('\n\n');
}
