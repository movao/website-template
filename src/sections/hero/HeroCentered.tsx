import { LinkButton } from '@/components/ui/link-button';

interface HeroCenteredProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export default function HeroCentered({
  heading,
  subheading,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  badge,
}: HeroCenteredProps) {
  return (
    <section className="section" id="hero">
      <div className="container-narrow flex flex-col items-center text-center">
        {badge && (
          <span className="badge-pill mb-6 animate-in">
            {badge}
          </span>
        )}

        <h1 className="text-display font-heading max-w-4xl animate-in">
          {heading}
        </h1>

        {subheading && (
          <p className="text-hero-sub text-muted-foreground max-w-2xl mt-6 animate-in animate-delay-1">
            {subheading}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-in animate-delay-2">
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
    </section>
  );
}
