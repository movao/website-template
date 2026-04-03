import { cn } from '@/lib/utils';
import IconWrapper from '@/components/ui/IconWrapper';
import type { Step } from './ProcessSteps';

export interface Props {
  steps: Step[];
  heading?: string;
  subheading?: string;
}

export default function ProcessTimeline({
  steps = [],
  heading = 'Unser Prozess',
  subheading = 'So arbeiten wir zusammen',
}: Props) {
  return (
    <section id="process-timeline" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Mittellinie */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-0.5" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const isRight = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className="relative"
                  data-animate="fade-up"
                  data-delay={String((i + 1) * 100)}
                >
                  {/* Punkt auf der Linie */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 bg-background rounded-full">
                    <IconWrapper icon={step.icon || String(i + 1)} className="" />
                  </div>

                  {/* Content */}
                  <div className={cn(
                    'pl-20 lg:pl-0 lg:w-[calc(50%-40px)]',
                    isRight ? 'lg:ml-auto' : 'lg:mr-auto lg:text-right',
                  )}>
                    <h3 className="card-title mb-2">{step.title}</h3>
                    <p className="card-description">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
