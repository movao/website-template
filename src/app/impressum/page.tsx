import { siteConfig } from '@/config';

export default function Impressum() {
  const { contact } = siteConfig;

  return (
    <section className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-display font-heading">Impressum</h1>

          <h2 className="text-title font-heading mt-10">Angaben gemäß § 5 TMG</h2>
          <p className="text-body-lg text-foreground">
            {siteConfig.name}<br />
            {contact.address.street}<br />
            {contact.address.zip} {contact.address.city}
          </p>

          <h2 className="text-title font-heading mt-10">Kontakt</h2>
          <p className="text-body-lg text-foreground">
            Telefon: {contact.phone}<br />
            E-Mail: {contact.email}
          </p>

          <h2 className="text-title font-heading mt-10">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-body-lg text-foreground">
            {siteConfig.name}<br />
            {contact.address.street}<br />
            {contact.address.zip} {contact.address.city}
          </p>

          <h2 className="text-title font-heading mt-10">Haftungsausschluss</h2>

          <h3 className="text-xl font-heading mt-6">Haftung für Inhalte</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-heading mt-6">Haftung für Links</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-heading mt-6">Urheberrecht</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  );
}
