'use client';

import { useState, useEffect } from 'react';
import { hasTrackingScripts, hasAnalytics, hasMarketing } from '@/config/tracking';
import {
  getConsentPreferences,
  hasDecided,
  acceptAll,
  rejectAll,
  acceptNecessaryOnly,
  saveConsent,
} from '@/lib/consent';

/**
 * DSGVO Consent Manager.
 *
 * Ohne Tracking-Scripts: Einfacher Hinweis "nur technisch notwendige Cookies".
 * Mit Tracking-Scripts: Voller Banner mit Kategorien + Einstellungen.
 *
 * Wird auch vom Footer aus geöffnet via window.openConsentManager().
 */
export default function ConsentManager() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const needsFullConsent = hasTrackingScripts();

  useEffect(() => {
    // Banner zeigen wenn noch keine Entscheidung
    if (!hasDecided()) {
      setVisible(true);
    }

    // Bestehende Präferenzen laden
    const prefs = getConsentPreferences();
    if (prefs) {
      setAnalyticsChecked(prefs.analytics);
      setMarketingChecked(prefs.marketing);
    }

    // Globale Funktion für Footer-Link
    (window as unknown as Record<string, () => void>).openConsentManager = () => {
      const prefs = getConsentPreferences();
      if (prefs) {
        setAnalyticsChecked(prefs.analytics);
        setMarketingChecked(prefs.marketing);
      }
      setShowSettings(true);
      setVisible(true);
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryOnly();
    setVisible(false);
  };

  const handleSaveSettings = () => {
    saveConsent(analyticsChecked, marketingChecked);
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  // Einfacher Banner: nur technisch notwendige Cookies
  if (!needsFullConsent && !showSettings) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[70] bg-foreground text-background p-4 md:p-6">
        <div className="container-narrow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-base leading-relaxed">
            Diese Website nutzt nur technisch notwendige Cookies. Mehr dazu in unserer{' '}
            <a href="/datenschutz" className="underline hover:opacity-80">Datenschutzerklärung</a>.
          </p>
          <button
            onClick={handleAcceptNecessary}
            className="shrink-0 px-6 py-2.5 rounded-[var(--radius)] bg-primary text-background font-medium text-base hover:bg-primary/90 transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    );
  }

  // Einstellungen-Panel
  if (showSettings) {
    return (
      <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/60" onClick={() => { setShowSettings(false); if (hasDecided()) setVisible(false); }} />

        {/* Panel */}
        <div className="relative bg-background rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl">
          <div className="p-6 md:p-8">
            <h2 className="text-title font-heading text-foreground mb-2">Cookie-Einstellungen</h2>
            <p className="text-base text-muted-foreground mb-6">
              Wählen Sie, welche Cookies Sie zulassen möchten. Notwendige Cookies sind für den Betrieb der Website erforderlich.
            </p>

            {/* Kategorien */}
            <div className="space-y-4 mb-8">
              {/* Notwendig — immer an */}
              <label className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 w-4 h-4 rounded accent-primary"
                />
                <div>
                  <span className="text-base font-medium text-foreground">Notwendig</span>
                  <p className="text-base text-muted-foreground mt-0.5">
                    Erforderlich für den Betrieb der Website. Kann nicht deaktiviert werden.
                  </p>
                </div>
              </label>

              {/* Statistik */}
              {hasAnalytics() && (
                <label className="flex items-start gap-3 p-4 rounded-xl bg-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded accent-primary"
                  />
                  <div>
                    <span className="text-base font-medium text-foreground">Statistik</span>
                    <p className="text-base text-muted-foreground mt-0.5">
                      Helfen uns zu verstehen wie Besucher die Website nutzen. Alle Daten werden anonymisiert.
                    </p>
                  </div>
                </label>
              )}

              {/* Marketing */}
              {hasMarketing() && (
                <label className="flex items-start gap-3 p-4 rounded-xl bg-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded accent-primary"
                  />
                  <div>
                    <span className="text-base font-medium text-foreground">Marketing</span>
                    <p className="text-base text-muted-foreground mt-0.5">
                      Werden verwendet um Ihnen relevante Werbung auf anderen Plattformen anzuzeigen.
                    </p>
                  </div>
                </label>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSaveSettings}
                className="flex-1 px-6 py-3 rounded-[var(--radius)] bg-primary text-background font-medium text-base hover:bg-primary/90 transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 rounded-[var(--radius)] border border-border text-foreground font-medium text-base hover:bg-muted transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>

            <p className="text-base text-muted-foreground mt-4 text-center">
              <a href="/datenschutz" className="underline hover:text-primary transition-colors">Datenschutzerklärung</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Voller Banner mit Tracking-Scripts
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] bg-foreground text-background p-4 md:p-6">
      <div className="container-narrow">
        <p className="text-base leading-relaxed mb-4">
          Diese Website verwendet Cookies. Notwendige Cookies sind für den Betrieb der Website erforderlich.
          Zusätzlich möchten wir mit Ihrer Zustimmung Cookies für Analyse und Marketing einsetzen.
          Mehr dazu in unserer{' '}
          <a href="/datenschutz" className="underline hover:opacity-80">Datenschutzerklärung</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 rounded-[var(--radius)] bg-primary text-background font-medium text-base hover:bg-primary/90 transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 rounded-[var(--radius)] border border-background/30 text-background font-medium text-base hover:bg-background/10 transition-colors"
          >
            Alle ablehnen
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="px-6 py-2.5 rounded-[var(--radius)] text-background/70 font-medium text-base hover:text-background transition-colors"
          >
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}
