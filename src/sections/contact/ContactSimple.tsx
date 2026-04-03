import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config';
import IconOrEmoji from '@/components/ui/IconOrEmoji';

interface ContactSimpleProps {
  heading?: string;
  subheading?: string;
  mode?: 'form' | 'info';
}

export default function ContactSimple({
  heading = 'Kontakt',
  subheading = 'Schreiben Sie uns kurz — wir melden uns umgehend',
  mode = 'form',
}: ContactSimpleProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';
  const { contact } = siteConfig;

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {mode === 'form' ? (
          <div className="max-w-4xl mx-auto" data-animate="fade-up">
            <form action={formEndpoint} method="POST">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-simple-gotcha">Dieses Feld nicht ausfüllen</label>
                <input type="text" id="contact-simple-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                  <label htmlFor="contact-simple-name" className="form-label">Name *</label>
                  <Input type="text" id="contact-simple-name" name="name" required placeholder="Ihr Name" />
                </div>

                <div className="flex-1 w-full">
                  <label htmlFor="contact-simple-email" className="form-label">E-Mail *</label>
                  <Input type="email" id="contact-simple-email" name="email" required placeholder="ihre@email.de" />
                </div>

                <div className="flex-[2] w-full">
                  <label htmlFor="contact-simple-message" className="form-label">Nachricht *</label>
                  <Textarea id="contact-simple-message" name="message" rows={1} required placeholder="Ihre Nachricht..." className="min-h-[48px]" />
                </div>

                <div className="w-full lg:w-auto">
                  <Button type="submit" className="w-full lg:w-auto">
                    Senden
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required
                         className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
                  <span className="text-base text-muted-foreground">
                    Ich stimme der Verarbeitung meiner Daten gemäß der
                    <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
                  </span>
                </label>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center max-w-4xl mx-auto" data-animate="fade-up">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-base text-muted-foreground hover:text-primary transition-colors">
              <IconOrEmoji icon="envelope" size={24} className="text-primary shrink-0" />
              {contact.email}
            </a>

            <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-base text-muted-foreground hover:text-primary transition-colors">
              <IconOrEmoji icon="phone" size={24} className="text-primary shrink-0" />
              {contact.phone}
            </a>

            <span className="flex items-center gap-3 text-base text-muted-foreground">
              <IconOrEmoji icon="map-pin" size={24} className="text-primary shrink-0" />
              {contact.address.street}, {contact.address.zip} {contact.address.city}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
