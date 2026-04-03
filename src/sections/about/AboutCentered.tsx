import type { Highlight } from './AboutSplit';

export interface Props {
  heading?: string;
  text?: string;
  highlights?: Highlight[];
}

export default function AboutCentered({
  heading = 'Über uns',
  text = 'Erfahren Sie mehr über unser Unternehmen und unsere Werte.',
  highlights = [],
}: Props) {
  return (
    <section id="about" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
            {text}
          </p>
        </div>

        {highlights.length > 0 && (
          <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-8 sm:gap-12 sm:divide-x divide-border mt-12 max-w-3xl mx-auto" data-animate="fade-up">
            {highlights.map((highlight, i) => (
              <div key={i} className="text-center px-6">
                <div className="text-title font-heading font-bold text-primary">
                  {highlight.value}
                </div>
                <div className="text-base text-muted-foreground mt-1">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
