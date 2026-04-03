import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import ImageSlot from '@/components/ui/ImageSlot';

interface ContactSplitProps {
  heading?: string;
  subheading?: string;
  layout?: 'default' | 'reversed';
  imageSrc?: string;
  compact?: boolean;
}

export default function ContactSplit({
  heading = 'Kontakt aufnehmen',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
  layout = 'default',
  imageSrc,
  compact = false,
}: ContactSplitProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';
  const { contact } = siteConfig;
  const isReversed = layout === 'reversed';

  const form = (
    <div data-animate="fade-up" className={isReversed ? 'order-2 lg:order-none' : ''}>
      {!compact && (!isReversed || imageSrc) && (
        <>
          <h2 className="section-heading text-left">{heading}</h2>
          <p className="text-subtitle text-muted-foreground mt-2 mb-8">{subheading}</p>
        </>
      )}

      <form action={formEndpoint} method="POST" className="flex flex-col gap-4">
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="contact-split-gotcha">Dieses Feld nicht ausfüllen</label>
          <input type="text" id="contact-split-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-split-name" className="form-label">Name *</label>
            <Input type="text" id="contact-split-name" name="name" required placeholder="Ihr Name" />
          </div>
          <div>
            <label htmlFor="contact-split-email" className="form-label">E-Mail *</label>
            <Input type="email" id="contact-split-email" name="email" required placeholder="ihre@email.de" />
          </div>
        </div>

        <div>
          <label htmlFor="contact-split-phone" className="form-label">Telefon</label>
          <Input type="tel" id="contact-split-phone" name="phone" placeholder="Ihre Telefonnummer" />
        </div>

        <div>
          <label htmlFor="contact-split-message" className="form-label">Nachricht *</label>
          <Textarea id="contact-split-message" name="message" required placeholder="Wie können wir Ihnen helfen?" />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required
                 className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
          <span className="text-base text-muted-foreground">
            Ich stimme der Verarbeitung meiner Daten gemäß der
            <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
          </span>
        </label>

        <Button type="submit" size="lg" className="w-full sm:w-auto sm:min-w-[280px]">
          Nachricht senden
        </Button>
      </form>
    </div>
  );

  const info = imageSrc ? (
    <div data-animate="fade-up" data-delay="200" className="order-1 lg:order-none">
      <ImageSlot
        src={imageSrc}
        position="contact-image"
        label="Kontakt-Bild"
        briefing="Bild für den Kontaktbereich"
        format="portrait"
        priority="nice-to-have"
        category="photo-custom"
        className="w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden"
      />
    </div>
  ) : (
    <div data-animate="fade-up" data-delay="200" className="flex items-center justify-center">
      <div>
        {isReversed && (
          <div className="mb-8">
            <h2 className="section-heading text-left">{heading}</h2>
            <p className="text-subtitle text-muted-foreground mt-2">{subheading}</p>
          </div>
        )}

        <div className={isReversed ? 'grid sm:grid-cols-2 gap-6' : 'flex flex-col gap-8'}>
          <div className="flex items-start gap-4">
            <IconOrEmoji icon="envelope" size={28} className="text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-body-lg font-heading font-semibold text-foreground mb-1">E-Mail</h3>
              <a href={`mailto:${contact.email}`} className="text-base text-muted-foreground hover:text-primary transition-colors">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconOrEmoji icon="phone" size={28} className="text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-body-lg font-heading font-semibold text-foreground mb-1">Telefon</h3>
              <a href={`tel:${contact.phone}`} className="text-base text-muted-foreground hover:text-primary transition-colors">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconOrEmoji icon="map-pin" size={28} className="text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-body-lg font-heading font-semibold text-foreground mb-1">Adresse</h3>
              <p className="text-base text-muted-foreground">
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconOrEmoji icon="clock" size={28} className="text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-body-lg font-heading font-semibold text-foreground mb-1">Erreichbarkeit</h3>
              <p className="text-base text-muted-foreground">
                Mo – Fr: 08:00 – 18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        {compact && (
          <div className="section-header" data-animate="fade-up">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subheading mx-auto">{subheading}</p>
          </div>
        )}
        <div className={compact ? 'max-w-4xl mx-auto' : ''}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {isReversed ? <>{info}{form}</> : <>{form}{info}</>}
          </div>
        </div>
      </div>
    </section>
  );
}
