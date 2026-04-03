import { cn } from '@/lib/utils';
import IconOrEmoji from '@/components/ui/IconOrEmoji';

export interface ComparisonPlan {
  name: string;
  price?: string;
  period?: string;
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export interface ComparisonRow {
  feature: string;
  values: (boolean | string)[];
}

export interface Props {
  plans: ComparisonPlan[];
  rows: ComparisonRow[];
  heading?: string;
  subheading?: string;
}

export default function ComparisonTable({
  plans = [],
  rows = [],
  heading = 'Pakete vergleichen',
  subheading = 'Finden Sie das passende Angebot',
}: Props) {
  return (
    <section id="comparison" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="overflow-x-auto" data-animate="fade-up">
          <table className="w-full min-w-[600px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="text-left py-4 pr-4 w-1/3" />
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className={cn(
                      'py-6 px-4 text-center rounded-t-2xl',
                      plan.highlighted ? 'bg-primary text-background' : 'bg-muted',
                    )}
                  >
                    <span className="text-xl font-heading block mb-1">
                      {plan.name}
                    </span>
                    {plan.price && (
                      <span className={cn(
                        'text-title font-heading block',
                        plan.highlighted ? 'text-background' : 'text-foreground',
                      )}>
                        {plan.price}
                        {plan.period && (
                          <span className={cn(
                            'text-base font-normal ml-1',
                            plan.highlighted ? 'text-background/70' : 'text-muted-foreground',
                          )}>
                            / {plan.period}
                          </span>
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-4 pr-4 text-base text-foreground font-medium">
                    {row.feature}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={cn(
                        'py-4 px-4 text-center',
                        plans[j]?.highlighted ? 'bg-primary/5' : '',
                      )}
                    >
                      {typeof val === 'boolean' ? (
                        val ? (
                          <IconOrEmoji icon="check-circle" size={20} className="text-primary mx-auto" />
                        ) : (
                          <IconOrEmoji icon="minus" size={20} className="text-muted-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-base text-foreground">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* Footer CTAs */}
            <tfoot>
              <tr>
                <td className="py-6" />
                {plans.map((plan, i) => (
                  <td key={i} className={cn('py-6 px-4 text-center', plans[i]?.highlighted ? 'bg-primary/5 rounded-b-2xl' : '')}>
                    <a
                      href={plan.ctaHref || '#contact'}
                      className={cn(
                        'inline-block min-h-[48px] px-8 py-3 rounded-[var(--radius)] font-medium text-base transition-colors',
                        plan.highlighted
                          ? 'bg-primary text-background hover:bg-primary/90'
                          : 'btn-secondary',
                      )}
                    >
                      {plan.ctaText || 'Auswählen'}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
