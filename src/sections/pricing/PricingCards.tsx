import { cn } from '@/lib/utils';
import IconOrEmoji from '@/components/ui/IconOrEmoji';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  ctaText?: string;
  ctaHref?: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Props {
  plans: PricingPlan[];
  heading?: string;
  subheading?: string;
}

export default function PricingCards({
  plans = [],
  heading = 'Unsere Pakete',
  subheading = 'Wählen Sie das passende Paket für Ihre Anforderungen',
}: Props) {
  return (
    <section id="pricing" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className={cn(
          'grid gap-8 items-stretch',
          plans.length === 2 && 'md:grid-cols-2 max-w-4xl mx-auto',
          plans.length >= 3 && 'md:grid-cols-2 lg:grid-cols-3',
        )}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                'relative flex flex-col p-8 rounded-2xl border transition-all duration-300',
                plan.highlighted
                  ? 'bg-primary text-background border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                  : 'bg-card border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5',
              )}
              data-animate="fade-up"
              data-delay={`${(i + 1) * 100}`}
            >
              {plan.badge && (
                <span className={cn(
                  'absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-base font-medium',
                  plan.highlighted
                    ? 'bg-background text-primary'
                    : 'bg-primary text-background',
                )}>
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={cn(
                  'text-xl font-heading mb-2',
                  plan.highlighted ? 'text-background' : 'text-foreground',
                )}>
                  {plan.name}
                </h3>
                {plan.description && (
                  <p className={cn(
                    'text-base',
                    plan.highlighted ? 'text-background/70' : 'text-muted-foreground',
                  )}>
                    {plan.description}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <span className={cn(
                  'text-display font-heading',
                  plan.highlighted ? 'text-background' : 'text-foreground',
                )}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={cn(
                    'text-base ml-1',
                    plan.highlighted ? 'text-background/70' : 'text-muted-foreground',
                  )}>
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <IconOrEmoji
                      icon={feature.included ? 'check' : 'x'}
                      size={18}
                      className={cn(
                        'mt-0.5 shrink-0',
                        feature.included
                          ? plan.highlighted ? 'text-background' : 'text-primary'
                          : plan.highlighted ? 'text-background/30' : 'text-muted-foreground/40',
                      )}
                    />
                    <span className={cn(
                      'text-base',
                      !feature.included && (plan.highlighted ? 'text-background/40 line-through' : 'text-muted-foreground/50 line-through'),
                      feature.included && (plan.highlighted ? 'text-background/90' : 'text-foreground'),
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref || '#contact'}
                className={cn(
                  'block text-center min-h-[48px] flex items-center justify-center rounded-[var(--radius)] font-medium text-base transition-colors',
                  plan.highlighted
                    ? 'bg-background text-primary hover:bg-background/90'
                    : 'btn-primary',
                )}
              >
                {plan.ctaText || 'Auswählen'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
