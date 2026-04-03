/* ============================================
   CONSENT UTILITIES

   Verwaltet Cookie-Consent-Einstellungen.
   Speichert Präferenzen in localStorage.
   ============================================ */

export interface ConsentPreferences {
  necessary: true; // immer true, nicht abwählbar
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
}

const STORAGE_KEY = 'consent-preferences';
const CONSENT_VERSION = 1;
const CONSENT_EVENT = 'consent-changed';

/** Liest gespeicherte Consent-Einstellungen */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const prefs = JSON.parse(stored) as ConsentPreferences;
    if (prefs.version !== CONSENT_VERSION) return null;

    return prefs;
  } catch {
    return null;
  }
}

/** Speichert Consent-Einstellungen */
export function saveConsent(analytics: boolean, marketing: boolean): void {
  const prefs: ConsentPreferences = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));

  // Event auslösen damit TrackingScripts reagieren kann
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: prefs }));
}

/** Akzeptiert alle Kategorien */
export function acceptAll(): void {
  saveConsent(true, true);
}

/** Lehnt alle optionalen Kategorien ab */
export function rejectAll(): void {
  saveConsent(false, false);
}

/** Akzeptiert nur notwendige (für einfachen Banner) */
export function acceptNecessaryOnly(): void {
  saveConsent(false, false);
}

/** Prüft ob Consent für eine Kategorie gegeben wurde */
export function hasConsent(category: 'analytics' | 'marketing'): boolean {
  const prefs = getConsentPreferences();
  if (!prefs) return false;
  return prefs[category];
}

/** Prüft ob der User bereits eine Entscheidung getroffen hat */
export function hasDecided(): boolean {
  return getConsentPreferences() !== null;
}

/** Löscht gespeicherte Einstellungen (für erneute Abfrage) */
export function resetConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  // Altes Format auch aufräumen
  localStorage.removeItem('cookies-accepted');
}

/** Event-Name für Consent-Änderungen */
export { CONSENT_EVENT };
