import { LinkButton } from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

export interface Props {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  bg?: 'primary' | 'muted' | 'dark';
}

export default function CtaBanner({
  heading = 'Bereit durchzustarten?',
  text = 'Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch.',
  buttonText = 'Jetzt starten',
  buttonHref = '#contact',
  bg = 'primary',
}: Props) {
  const isPrimary = bg === 'primary';
  const isDark = bg === 'dark';
  const isMuted = bg === 'muted';

  return (
    <section
      id="cta-banner"
      className={cn(
        'section',
        isPrimary && 'bg-primary',
        isDark && 'bg-foreground',
        isMuted && 'bg-muted',
      )}
    >
      <div className="container-narrow">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          data-animate="fade-up"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className={cn(
              'text-title font-heading font-bold mb-2',
              (isPrimary || isDark) ? 'text-background' : 'text-foreground',
            )}>
              {heading}
            </h2>
            <p className={cn(
              'text-subtitle',
              (isPrimary || isDark) ? 'text-background opacity-80' : 'text-muted-foreground',
            )}>
              {text}
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href={buttonHref}
              variant={(isPrimary || isDark) ? 'inverse' : 'default'}
              size="lg"
            >
              {buttonText}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
