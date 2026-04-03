import { cn } from '@/lib/utils';
import ImageSlot from '@/components/ui/ImageSlot';
import IconWrapper from '@/components/ui/IconWrapper';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  features: Feature[];
  heading?: string;
  subheading?: string;
}

export default function FeaturesAlternating({
  features = [],
  heading = 'Unsere Leistungen',
  subheading = 'Was uns auszeichnet',
}: Props) {
  return (
    <section id="features" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="space-y-24" data-animate="fade-up">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                data-delay={`${((i % 3) + 1) * 100}`}
              >
                <div className={cn('order-2 lg:order-none', isReversed && 'lg:order-2')}>
                  {feature.icon && (
                    <IconWrapper icon={feature.icon} className="mb-4" />
                  )}

                  <h3 className="text-xl font-heading text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-body-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className={cn('order-1 lg:order-none', isReversed && 'lg:order-1')}>
                  <ImageSlot
                    position={`feature-image-${i + 1}`}
                    label={`Bild: ${feature.title}`}
                    briefing={`Bild zur Leistung "${feature.title}"`}
                    format="landscape"
                    aspect="4/3"
                    priority="nice-to-have"
                    category="photo-custom"
                    className="aspect-[4/3] rounded-2xl overflow-hidden border border-border"
                    gradientClass="bg-gradient-to-br from-primary/5 to-primary/10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
