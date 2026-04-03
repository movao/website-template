import { LinkButton } from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

export interface Props {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  bg?: 'primary' | 'muted' | 'dark';
}

export default function CtaCentered({
  heading = 'Bereit durchzustarten?',
  text = 'Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch.',
  buttonText = 'Jetzt starten',
  buttonHref = '#contact',
  secondaryButtonText,
  secondaryButtonHref,
  bg = 'primary',
}: Props) {
  const isPrimary = bg === 'primary';
  const isDark = bg === 'dark';
  const isMuted = bg === 'muted';
  const isInverted = isPrimary || isDark;

  return (
    <section
      id="cta-centered"
      className={cn(
        'section',
        isPrimary && 'bg-primary',
        isDark && 'bg-foreground',
        isMuted && 'bg-muted',
      )}
    >
      <div className="container-narrow text-center" data-animate="fade-up">
        <h2 className={cn(
          'text-title font-heading font-bold max-w-3xl mx-auto mb-4',
          isInverted ? 'text-background' : 'text-foreground',
        )}>
          {heading}
        </h2>

        {text && (
          <p className={cn(
            'text-subtitle max-w-2xl mx-auto mb-10',
            isInverted ? 'text-background opacity-80' : 'text-muted-foreground',
          )}>
            {text}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton
            href={buttonHref}
            variant={isInverted ? 'inverse' : 'default'}
            size="lg"
          >
            {buttonText}
          </LinkButton>

          {secondaryButtonText && secondaryButtonHref && (
            <LinkButton
              href={secondaryButtonHref}
              variant={isInverted ? 'outline-inverse' : 'outline'}
              size="lg"
            >
              {secondaryButtonText}
            </LinkButton>
          )}
        </div>
      </div>
    </section>
  );
}
