import ImageSlot from '@/components/ui/ImageSlot';
import type { Step } from './ProcessSteps';

export interface Props {
  steps: Step[];
  heading?: string;
  subheading?: string;
  imageSrc?: string;
}

export default function ProcessList({
  steps = [],
  heading = 'Unser Prozess',
  subheading = 'So arbeiten wir zusammen',
  imageSrc,
}: Props) {
  const list = (
    <div className="divide-y divide-border">
      {steps.map((step, i) => (
        <div
          key={i}
          className="grid grid-cols-[60px_1fr] gap-4 py-6"
          data-delay={String((i + 1) * 100)}
        >
          <span className="text-title font-heading text-muted-foreground">
            {String(i + 1).padStart(2, '0')}.
          </span>
          <div>
            <h3 className="card-title mb-2">{step.title}</h3>
            <p className="card-description">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (imageSrc) {
    return (
      <section id="process-list" className="section bg-background">
        <div className="container-narrow">
          <div className="section-header" data-animate="fade-up">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subheading mx-auto">{subheading}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-animate="fade-up">
            <div className="order-2 lg:order-none">
              {list}
            </div>
            <div className="order-1 lg:order-none">
              <ImageSlot
                src={imageSrc}
                position="process-image"
                label="Prozess-Bild"
                briefing="Bild das den Arbeitsprozess zeigt"
                format="portrait"
                priority="nice-to-have"
                category="photo-custom"
                className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process-list" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-3xl mx-auto" data-animate="fade-up">
          {list}
        </div>
      </div>
    </section>
  );
}
