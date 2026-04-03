/* ============================================
   THEME APPLICATION
   Liest das aktive Design-Profil und generiert
   CSS Custom Properties für :root
   ============================================ */

import type { FontPairingId, ColorWorldId, SpacingPresetId, BorderRadiusPresetId } from './profiles';
import { fontPairings, colorWorlds, spacingPresets, borderRadiusPresets } from './profiles';
import { extractFontName, generateFontFaceCSS } from './font-registry';

interface DesignConfig {
  fonts: (typeof fontPairings)[FontPairingId];
  colors: (typeof colorWorlds)[ColorWorldId];
  spacing: (typeof spacingPresets)[SpacingPresetId];
  borderRadius?: (typeof borderRadiusPresets)[BorderRadiusPresetId];
}

/** Hex zu space-separated RGB konvertieren (für Tailwind Opacity-Modifier) */
function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
}

/** Generiert CSS Custom Properties als String für ein <style> Tag */
export function generateThemeCSS(config: DesignConfig): string {
  const { fonts, colors, spacing } = config;

  // Alle Farb-Tokens als Hex UND als RGB (für Tailwind /opacity Syntax)
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

  // Nur die aktiven Fonts laden
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
  --radius: ${config.borderRadius?.value ?? spacing.borderRadius};
  --container-max-width: ${spacing.containerMaxWidth};
}`;
}

/** Hilfsfunktion: Ist das aktuelle Theme dunkel? */
export function isDarkTheme(config: DesignConfig): boolean {
  return config.colors.isDark;
}
