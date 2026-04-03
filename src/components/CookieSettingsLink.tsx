'use client';

import { hasTrackingScripts } from '@/config/tracking';

export default function CookieSettingsLink({ className = '' }: { className?: string }) {
  if (!hasTrackingScripts()) return null;

  return (
    <button
      onClick={() => {
        const fn = (window as unknown as Record<string, () => void>).openConsentManager;
        if (fn) fn();
      }}
      className={`hover:opacity-100 transition-opacity cursor-pointer ${className}`}
    >
      Cookie-Einstellungen
    </button>
  );
}
