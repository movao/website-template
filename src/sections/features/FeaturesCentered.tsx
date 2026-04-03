import IconWrapper from '@/components/ui/IconWrapper';
import ImageSlot from '@/components/ui/ImageSlot';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  features: Feature[];
  heading?: string;
  subheading?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FeaturesCentered({
  features = [],
  heading,
  subheading,
  imageSrc,
  imageAlt,
}: Props) {
  const half = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, half);
  const rightFeatures = features.slice(half);

  return (
    <section id="features-centered" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="section-header">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-12 order-2 lg:order-none">
            {leftFeatures.map((feature, i) => (
              <div key={i}>
                {feature.icon && (
                  <IconWrapper icon={feature.icon} size={20} className="mb-4" />
                )}
                <h3 className="card-title mb-2">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-none">
            <ImageSlot
              src={imageSrc}
              alt={imageAlt}
              position="features-centered"
              label="Feature-Bild"
              briefing="Zentrales Bild das das Produkt oder die Dienstleistung zeigt"
              format="portrait"
              priority="must-have"
              category="photo-custom"
              className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden"
            />
          </div>

          <div className="flex flex-col gap-12 order-3 lg:order-none">
            {rightFeatures.map((feature, i) => (
              <div key={i}>
                {feature.icon && (
                  <IconWrapper icon={feature.icon} size={20} className="mb-4" />
                )}
                <h3 className="card-title mb-2">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
