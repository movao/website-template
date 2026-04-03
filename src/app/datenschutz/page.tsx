import { siteConfig } from '@/config';
import { tracking, hasAnalytics, hasMarketing } from '@/config/tracking';

export default function Datenschutz() {
  const { contact } = siteConfig;

  return (
    <section className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-display font-heading">Datenschutzerklärung</h1>

          <h2 className="text-title font-heading mt-10">1. Verantwortliche Stelle</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-body-lg text-foreground">
            {siteConfig.name}<br />
            {contact.address.street}<br />
            {contact.address.zip} {contact.address.city}<br />
            E-Mail: {contact.email}<br />
            Telefon: {contact.phone}
          </p>

          <h2 className="text-title font-heading mt-10">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.
          </p>

          <h2 className="text-title font-heading mt-10">3. Cookies</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Wir setzen auf unserer Website Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mt-2">
            <strong className="text-foreground">Notwendige Cookies:</strong> Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Hierzu gehört die Speicherung Ihrer Cookie-Einstellungen.
          </p>

          {hasAnalytics() && (
            <p className="text-base text-muted-foreground leading-relaxed mt-2">
              <strong className="text-foreground">Analyse-Cookies:</strong> Mit Ihrer Zustimmung setzen wir Cookies ein, die es uns ermöglichen, die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern. Diese Cookies werden nur gesetzt, wenn Sie dem ausdrücklich zugestimmt haben. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
              {tracking.analytics.googleAnalytics && ' Wir verwenden Google Analytics 4 mit IP-Anonymisierung.'}
              {tracking.analytics.plausible && ' Wir verwenden Plausible Analytics, ein datenschutzfreundliches Analyse-Tool ohne Cookies.'}
              {tracking.analytics.umami && ' Wir verwenden Umami Analytics, ein datenschutzfreundliches Analyse-Tool.'}
            </p>
          )}

          {hasMarketing() && (
            <p className="text-base text-muted-foreground leading-relaxed mt-2">
              <strong className="text-foreground">Marketing-Cookies:</strong> Mit Ihrer Zustimmung setzen wir Cookies ein, die es ermöglichen, Ihnen auf anderen Plattformen relevante Werbung anzuzeigen. Diese Cookies werden nur gesetzt, wenn Sie dem ausdrücklich zugestimmt haben.
              {tracking.marketing.facebookPixel && ' Wir verwenden den Meta-Pixel (Facebook).'}
              {tracking.marketing.linkedinInsight && ' Wir verwenden den LinkedIn Insight Tag.'}
            </p>
          )}

          <h2 className="text-title font-heading mt-10">4. Kontaktformular</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>

          <h2 className="text-title font-heading mt-10">5. Hosting</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>

          <h2 className="text-title font-heading mt-10">6. Ihre Rechte</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
          </p>
          <ul className="text-base text-muted-foreground leading-relaxed space-y-1 mt-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>

          <h2 className="text-title font-heading mt-10">7. Beschwerderecht</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
          </p>

          <h2 className="text-title font-heading mt-10">8. Widerruf Ihrer Einwilligung</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Soweit die Verarbeitung Ihrer personenbezogenen Daten auf einer Einwilligung beruht, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung wird dadurch nicht berührt. Sie können Ihre Cookie-Einstellungen jederzeit über den Link „Cookie-Einstellungen" im Footer dieser Website anpassen.
          </p>
        </div>
      </div>
    </section>
  );
}
