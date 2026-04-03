import IconWrapper from '@/components/ui/IconWrapper';
import ImageSlot from '@/components/ui/ImageSlot';
import ScrollFeatures from '@/components/ui/ScrollFeatures';
import ParallaxFeatures from '@/components/ui/ParallaxFeatures';

export interface Highlight {
  icon: string;
  text: string;
  description?: string;
  imageSrc?: string;
}

export interface Props {
  heading?: string;
  description?: string;
  highlights?: Highlight[];
  imageSrc?: string;
  imageAlt?: string;
  layout?: 'default' | 'stacked' | 'sticky' | 'scroll' | 'parallax';
}

export default function FeaturesHighlight({
  heading = 'Unsere Leistungen',
  description: desc = 'Beschreibung des Angebots oder der Dienstleistung.',
  highlights = [],
  imageSrc,
  imageAlt,
  layout = 'default',
}: Props) {
  if (layout === 'parallax') {
    return (
      <section id="features-highlight" className="section bg-background overflow-hidden">
        <div className="container-narrow">
          {(heading || desc) && (
            <div className="section-header">
              {heading && <h2 className="section-heading">{heading}</h2>}
              {desc && <p className="section-subheading mx-auto">{desc}</p>}
            </div>
          )}
          <ParallaxFeatures features={highlights} />
        </div>
      </section>
    );
  }

  if (layout === 'scroll') {
    return (
      <section id="features-highlight" className="section bg-background">
        <div className="container-narrow">
          {(heading || desc) && (
            <div className="section-header">
              {heading && <h2 className="section-heading">{heading}</h2>}
              {desc && <p className="section-subheading mx-auto">{desc}</p>}
            </div>
          )}
          <ScrollFeatures features={highlights} />
        </div>
      </section>
    );
  }

  if (layout === 'sticky') {
    return (
      <section id="features-highlight" className="section bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:sticky lg:top-[40vh] lg:self-start">
              <h2 className="section-heading text-left">{heading}</h2>

              <p className="text-body-lg text-muted-foreground mt-4 max-w-lg">
                {desc}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-muted"
                >
                  <IconWrapper icon={item.icon} size={20} className="mb-4" />
                  <h3 className="card-title mb-2">{item.text}</h3>
                  {item.description && (
                    <p className="card-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'stacked') {
    return (
      <section id="features-highlight" className="section bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="section-heading text-left">{heading}</h2>

              <p className="text-body-lg text-muted-foreground mt-4 max-w-lg">
                {desc}
              </p>

              <div className="mt-10">
                <ImageSlot
                  src={imageSrc}
                  alt={imageAlt}
                  position="features-highlight"
                  label="Feature-Bild"
                  briefing="Bild das die Leistung oder das Produkt zeigt"
                  format="landscape"
                  priority="must-have"
                  category="photo-custom"
                  className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-muted"
                >
                  <IconWrapper icon={item.icon} size={20} className="mb-4" />
                  <h3 className="card-title mb-2">{item.text}</h3>
                  {item.description && (
                    <p className="card-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="features-highlight" className="section bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-none">
            <h2 className="section-heading text-left">{heading}</h2>

            <p className="text-body-lg text-muted-foreground mt-4 max-w-lg">
              {desc}
            </p>

            {highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mt-10">
                {highlights.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3">
                    <div className="shrink-0">
                      <IconWrapper icon={item.icon} size={20} />
                    </div>
                    <span className="text-base text-foreground font-medium sm:mt-3">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="order-1 lg:order-none">
            <ImageSlot
              src={imageSrc}
              alt={imageAlt}
              position="features-highlight"
              label="Feature-Bild"
              briefing="Bild das die Leistung oder das Produkt zeigt"
              format="landscape"
              priority="must-have"
              category="photo-custom"
              className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
