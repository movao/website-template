import { LinkButton } from '@/components/ui/link-button';
import ImageSlot from '@/components/ui/ImageSlot';

interface HeroSplitProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSplit({
  heading,
  subheading,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  badge,
  imageSrc,
  imageAlt,
}: HeroSplitProps) {
  return (
    <section className="section" id="hero">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-none">
            {badge && (
              <span className="badge-pill mb-6 animate-in">
                {badge}
              </span>
            )}

            <h1 className="text-display font-heading animate-in">
              {heading}
            </h1>

            {subheading && (
              <p className="text-hero-sub text-muted-foreground max-w-lg mt-6 animate-in animate-delay-1">
                {subheading}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-in animate-delay-2">
              <LinkButton href={ctaHref} size="lg">
                {ctaText}
              </LinkButton>

              {secondaryCtaText && secondaryCtaHref && (
                <LinkButton href={secondaryCtaHref} variant="outline" size="lg">
                  {secondaryCtaText}
                </LinkButton>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-none animate-in animate-delay-2">
            <ImageSlot
              src={imageSrc}
              alt={imageAlt}
              position="hero-image"
              label="Hero-Bild"
              briefing="Hauptbild der Website"
              format="landscape"
              priority="must-have"
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
