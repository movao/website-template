import { LinkButton } from '@/components/ui/link-button';

interface HeroMinimalProps {
  heading: string;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function HeroMinimal({
  heading,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  badge,
}: HeroMinimalProps) {
  return (
    <section className="min-h-[70vh] flex items-center" id="hero">
      <div className="container-narrow">
        {badge && (
          <span className="badge-pill mb-6 animate-in">
            {badge}
          </span>
        )}

        <h1 className="text-display font-heading max-w-5xl leading-tight animate-in">
          {heading}
        </h1>

        <div className="mt-10 animate-in animate-delay-1">
          <LinkButton href={ctaHref} size="lg">
            {ctaText}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
