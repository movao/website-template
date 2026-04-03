import type { Stat } from './StatsGrid';

export interface Props {
  stat: Stat;
  description?: string;
  heading?: string;
  subheading?: string;
}

export default function StatsHighlight({
  stat,
  description,
  heading,
  subheading,
}: Props) {
  return (
    <section id="stats-highlight" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-4xl mx-auto" data-animate="fade-up">
          <div className="text-center lg:text-right">
            <div className="text-display font-heading text-primary">
              {stat.prefix && <span>{stat.prefix}</span>}
              {stat.value}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="text-subtitle text-muted-foreground mt-2">
              {stat.label}
            </div>
          </div>

          {description && (
            <div className="text-center lg:text-left">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
