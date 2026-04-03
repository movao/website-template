import { cn } from '@/lib/utils';

export interface Props {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  bg?: 'background' | 'muted' | 'primary';
}

const bgClasses = {
  background: 'bg-background',
  muted: 'section-alt',
  primary: 'bg-primary',
};

export default function NewsletterSignup({
  heading = 'Newsletter abonnieren',
  subheading = 'Erhalten Sie regelmäßig Neuigkeiten und exklusive Angebote direkt in Ihr Postfach.',
  buttonText = 'Anmelden',
  bg = 'muted',
}: Props) {
  const isPrimary = bg === 'primary';
  const formEndpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || '#';

  return (
    <section className={cn('section', bgClasses[bg])}>
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center" data-animate="fade-up">
          <h2 className={cn(
            'text-title font-heading font-bold mb-2',
            isPrimary ? 'text-background' : 'text-foreground',
          )}>
            {heading}
          </h2>
          <p className={cn(
            'text-subtitle mb-8',
            isPrimary ? 'text-background/80' : 'text-muted-foreground',
          )}>
            {subheading}
          </p>

          <form action={formEndpoint} method="POST" className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Ihre E-Mail-Adresse"
              className={cn(
                'flex-1 min-h-[48px] px-4 py-3 rounded-[var(--radius)] text-base focus:outline-none focus:ring-2 focus:ring-primary',
                isPrimary
                  ? 'bg-background/10 border border-background/20 text-background placeholder:text-background/50'
                  : 'bg-background border border-border text-foreground placeholder:text-muted-foreground',
              )}
            />
            <button
              type="submit"
              className={cn(
                'min-h-[48px] px-8 rounded-[var(--radius)] font-medium text-base transition-colors shrink-0',
                isPrimary
                  ? 'bg-background text-primary hover:bg-background/90'
                  : 'bg-primary text-background hover:bg-primary/90',
              )}
            >
              {buttonText}
            </button>
          </form>

          <p className={cn(
            'text-base mt-4',
            isPrimary ? 'text-background/50' : 'text-muted-foreground/70',
          )}>
            Kein Spam. Jederzeit abmeldbar.
          </p>
        </div>
      </div>
    </section>
  );
}
