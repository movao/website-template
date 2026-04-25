/* ============================================
   THEME APPLICATION
   Liest die Design-Konfiguration und generiert
   CSS Custom Properties für :root
   ============================================ */

import type { FontPairing } from './profiles';
import { extractFontName, generateFontFaceCSS } from './font-registry';

interface DesignColors {
  background: string;
  foreground: string;
  mutedForeground: string;
  primary: string;
  accent: string;
  muted: string;
  card: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  success: string;
  isDark: boolean;
}

interface DesignSpacing {
  sectionPadding: string;
  elementGap: string;
  borderRadius: string;
  containerMaxWidth: string;
}

interface DesignConfig {
  fonts: FontPairing;
  colors: DesignColors;
  spacing: DesignSpacing;
}

/** Hex zu space-separated RGB konvertieren (für Tailwind Opacity-Modifier) */
function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
}

/** Generiert CSS Custom Properties als String für ein <style> Tag */
export function generateThemeCSS(config: DesignConfig): string {
  const { fonts, colors, spacing } = config;

  const colorTokens = {
    background: colors.background,
    foreground: colors.foreground,
    'muted-foreground': colors.mutedForeground,
    primary: colors.primary,
    accent: colors.accent,
    muted: colors.muted,
    card: colors.card,
    border: colors.border,
    input: colors.input,
    ring: colors.ring,
    destructive: colors.destructive,
    success: colors.success,
  };

  const colorCSS = Object.entries(colorTokens)
    .map(([key, hex]) => `  --color-${key}: ${hex};\n  --color-${key}-rgb: ${hexToRgb(hex)};`)
    .join('\n');

  const headingFont = extractFontName(fonts.heading);
  const bodyFont = extractFontName(fonts.body);
  const fontFaceCSS = generateFontFaceCSS([headingFont, bodyFont]);

  return `/* @font-face — nur aktive Fonts */
${fontFaceCSS}

:root {
  /* Farben (Hex + RGB für Tailwind Opacity-Modifier) */
${colorCSS}

  /* Typografie */
  --font-heading: ${fonts.heading};
  --font-heading-weight: ${fonts.headingWeight};
  --font-body: ${fonts.body};
  --font-body-weight: ${fonts.bodyWeight};

  /* Spacing & Form */
  --spacing-section: ${spacing.sectionPadding};
  --spacing-gap: ${spacing.elementGap};
  --radius: ${spacing.borderRadius};
  --container-max-width: ${spacing.containerMaxWidth};
}`;
}

/** Hilfsfunktion: Ist das aktuelle Theme dunkel? */
export function isDarkTheme(config: DesignConfig): boolean {
  return config.colors.isDark;
}
