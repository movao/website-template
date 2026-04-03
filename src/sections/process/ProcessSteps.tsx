import IconWrapper from '@/components/ui/IconWrapper';

export interface Step {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  steps: Step[];
  heading?: string;
  subheading?: string;
}

export default function ProcessSteps({
  steps = [],
  heading = 'Unser Prozess',
  subheading = 'So arbeiten wir zusammen',
}: Props) {
  return (
    <section id="process-steps" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center"
              data-animate="fade-up"
              data-delay={String((i + 1) * 100)}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-border" />
              )}

              <div className="relative z-10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <IconWrapper icon={step.icon || String(i + 1)} className="" />
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border
                              hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                              transition-all duration-300 w-full">
                <h3 className="card-title mb-2">
                  {step.title}
                </h3>
                <p className="card-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
