import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactCenteredProps {
  heading?: string;
  subheading?: string;
}

export default function ContactCentered({
  heading = 'Schreiben Sie uns',
  subheading = 'Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden',
}: ContactCenteredProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <form action={formEndpoint} method="POST" className="flex flex-col gap-4">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-centered-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-centered-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-centered-name" className="form-label">Name *</label>
                <Input type="text" id="contact-centered-name" name="name" required placeholder="Ihr Name" />
              </div>
              <div>
                <label htmlFor="contact-centered-email" className="form-label">E-Mail *</label>
                <Input type="email" id="contact-centered-email" name="email" required placeholder="ihre@email.de" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-centered-phone" className="form-label">Telefon</label>
                <Input type="tel" id="contact-centered-phone" name="phone" placeholder="Ihre Telefonnummer" />
              </div>
              <div>
                <label htmlFor="contact-centered-subject" className="form-label">Betreff</label>
                <Input type="text" id="contact-centered-subject" name="subject" placeholder="Worum geht es?" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-centered-message" className="form-label">Nachricht *</label>
              <Textarea id="contact-centered-message" name="message" required placeholder="Ihre Nachricht an uns..." />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required
                     className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
              <span className="text-base text-muted-foreground">
                Ich stimme der Verarbeitung meiner Daten gemäß der
                <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
              </span>
            </label>

            <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-center sm:min-w-[440px]">
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
