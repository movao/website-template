import IconWrapper from '@/components/ui/IconWrapper';
import { Card, CardContent } from '@/components/ui/card';
import Carousel from '@/components/ui/Carousel';
import { cn } from '@/lib/utils';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  features: Feature[];
  heading?: string;
  subheading?: string;
  columns?: 2 | 3 | 4;
  carousel?: boolean;
}

function FeatureCard({ feature, i, isCarousel }: { feature: Feature; i: number; isCarousel?: boolean }) {
  return (
    <Card
      key={i}
      className={cn(
        'group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
        isCarousel && 'min-w-[300px] max-w-[360px] shrink-0',
      )}
      data-delay={`${((i % 3) + 1) * 100}`}
    >
      <CardContent className="p-0">
        {feature.icon && (
          <IconWrapper icon={feature.icon} className="mb-4" />
        )}

        <h3 className="card-title mb-2">
          {feature.title}
        </h3>

        <p className="card-description">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function FeaturesGrid({
  features = [],
  heading = 'Unsere Leistungen',
  subheading = 'Was uns auszeichnet',
  columns = 3,
  carousel = false,
}: Props) {
  return (
    <section id="features" className="section bg-background">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        {carousel ? (
          <Carousel>
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} i={i} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className={cn(
            'grid md:grid-cols-2 gap-8',
            columns === 3 && 'lg:grid-cols-3',
            columns === 4 && 'lg:grid-cols-4',
          )}>
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
