import { LinkButton } from '@/components/ui/link-button';
import { cn } from '@/lib/utils';
import ParallaxImage from '@/components/ui/ParallaxImage';

interface HeroImageOverlayProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
  imageSrc?: string;
  parallax?: 'none' | 'subtle' | 'fixed';
  parallaxSpeed?: number;
  align?: 'left' | 'center';
  overlay?: 'dark' | 'gradient' | 'gradient-bottom' | 'none';
}

export default function HeroImageOverlay({
  heading,
  subheading,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  badge,
  imageSrc,
  parallax = 'none',
  parallaxSpeed = 0.15,
  align = 'left',
  overlay = 'dark',
}: HeroImageOverlayProps) {
  const isCenter = align === 'center';

  const overlayClass = {
    dark: 'overlay-bg',
    gradient: 'overlay-gradient',
    'gradient-bottom': 'overlay-gradient-bottom',
    none: '',
  }[overlay];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-16 md:py-0" id="hero">
      {imageSrc ? (
        parallax === 'subtle' ? (
          <ParallaxImage src={imageSrc} speed={parallaxSpeed} />
        ) : parallax === 'fixed' ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ) : (
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        )
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
      )}

      {overlayClass && <div className={cn('absolute inset-0', overlayClass)} />}

      <div className="container-narrow relative z-10">
        <div className={cn(isCenter || 'grid lg:grid-cols-2 gap-16')}>
          <div className={cn(isCenter && 'text-center')}>
            {badge && (
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border text-base overlay-badge mb-6 animate-in">
                {badge}
              </span>
            )}

            <h1 className={cn('text-display font-heading overlay-text animate-in', isCenter && 'max-w-3xl mx-auto')}>
              {heading}
            </h1>

            {subheading && (
              <p className={cn('text-hero-sub mt-6 overlay-text-muted animate-in animate-delay-1', isCenter ? 'max-w-xl mx-auto' : 'max-w-lg')}>
                {subheading}
              </p>
            )}

            <div className={cn('flex flex-col sm:flex-row gap-4 mt-10 animate-in animate-delay-2', isCenter && 'justify-center')}>
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
        </div>
      </div>
    </section>
  );
}
