'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { tracking } from '@/config/tracking';
import { hasConsent, CONSENT_EVENT } from '@/lib/consent';

/**
 * Lädt Tracking-Scripts nur wenn der User Consent gegeben hat.
 * Reagiert auf Consent-Änderungen via Custom Event.
 *
 * Wird in layout.tsx eingebunden — kümmert sich automatisch
 * um alles was in tracking.ts konfiguriert ist.
 */
export default function TrackingScripts() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Initial Check
    setAnalytics(hasConsent('analytics'));
    setMarketing(hasConsent('marketing'));

    // Auf Consent-Änderungen reagieren
    const handleConsentChange = () => {
      setAnalytics(hasConsent('analytics'));
      setMarketing(hasConsent('marketing'));
    };

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  return (
    <>
      {/* ─── Google Analytics 4 ─────────────────────────── */}
      {analytics && tracking.analytics.googleAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${tracking.analytics.googleAnalytics}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${tracking.analytics.googleAnalytics}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}

      {/* ─── Plausible Analytics ────────────────────────── */}
      {analytics && tracking.analytics.plausible && (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={tracking.analytics.plausible}
          strategy="afterInteractive"
        />
      )}

      {/* ─── Umami Analytics ───────────────────────────── */}
      {analytics && tracking.analytics.umami && (
        <Script
          src="https://analytics.umami.is/script.js"
          data-website-id={tracking.analytics.umami}
          strategy="afterInteractive"
        />
      )}

      {/* ─── Meta/Facebook Pixel ───────────────────────── */}
      {marketing && tracking.marketing.facebookPixel && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${tracking.marketing.facebookPixel}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* ─── LinkedIn Insight Tag ──────────────────────── */}
      {marketing && tracking.marketing.linkedinInsight && (
        <Script id="li-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${tracking.marketing.linkedinInsight}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
      )}
    </>
  );
}
