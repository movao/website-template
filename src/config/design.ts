/* ============================================
   DESIGN — Pro Kundenprojekt anpassen

   Claude setzt fonts (kuratiertes Pairing aus profiles.ts) und
   colors (freie Hex-Werte passend zur Marke) pro Kunde.
   Spacing, Radius etc. werden in globals.css als Tokens definiert
   und können dort pro Kunde überschrieben werden.
   ============================================ */

import { fontPairings } from '../design/profiles';

export const design = {
  /** Font-Pairing: craft | clarity | refined | modern | elegant | literary | startup | narrative | neutral | therapeutic | bold | friendly */
  fonts: fontPairings.modern,

  /** Farben — freie Hex-Werte pro Marke. Default neutral, Claude überschreibt pro Kunde. */
  colors: {
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
    isDark: false,
  },

  /** Spacing-Tokens als CSS-Werte — Claude justiert pro Kunde */
  spacing: {
    sectionPadding: '5rem',
    elementGap: '1.5rem',
    borderRadius: '0.5rem',
    containerMaxWidth: '1280px',
  },
};
