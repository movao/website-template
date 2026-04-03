/* ============================================
   TRACKING-KONFIGURATION — Pro Kunde anpassen

   Claude setzt hier die Tracking-IDs wenn der
   Kunde Analytics oder Marketing-Tools nutzt.

   Alle Felder leer = kein Tracking = einfacher
   Cookie-Hinweis ohne Kategorien.

   Sobald ein Feld gesetzt = voller Consent-Manager
   mit Kategorien (Statistik, Marketing).
   ============================================ */

export const tracking = {
  analytics: {
    /** Google Analytics 4 Measurement ID, z.B. 'G-XXXXXXXXXX' */
    googleAnalytics: '',

    /** Plausible Analytics Domain, z.B. 'example.com' */
    plausible: '',

    /** Umami Website ID */
    umami: '',
  },

  marketing: {
    /** Meta/Facebook Pixel ID */
    facebookPixel: '',

    /** LinkedIn Insight Tag Partner ID */
    linkedinInsight: '',
  },
};

/** Prüft ob irgendwelche Tracking-Scripts konfiguriert sind */
export function hasTrackingScripts(): boolean {
  return Object.values(tracking.analytics).some(Boolean) ||
         Object.values(tracking.marketing).some(Boolean);
}

/** Prüft ob Analytics-Scripts konfiguriert sind */
export function hasAnalytics(): boolean {
  return Object.values(tracking.analytics).some(Boolean);
}

/** Prüft ob Marketing-Scripts konfiguriert sind */
export function hasMarketing(): boolean {
  return Object.values(tracking.marketing).some(Boolean);
}
