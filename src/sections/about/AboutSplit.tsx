import ImageSlot from '@/components/ui/ImageSlot';

export interface Highlight {
  label: string;
  value: string;
}

export interface Props {
  heading?: string;
  text?: string;
  image?: string;
  highlights?: Highlight[];
}

export default function AboutSplit({
  heading = 'Über uns',
  text = 'Erfahren Sie mehr über unser Unternehmen und unsere Werte.',
  image,
  highlights = [],
}: Props) {
  return (
    <section id="about" className="section bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-animate="fade-up">
            <ImageSlot
              src={image}
              position="about-split"
              label="Über uns"
              briefing="Bild das das Unternehmen oder das Team darstellt"
              format="landscape"
              priority="must-have"
              category="photo-custom"
              className="w-full rounded-2xl overflow-hidden aspect-[4/3]"
            />
          </div>

          <div data-animate="fade-up" data-delay="200">
            <h2 className="section-heading text-left">{heading}</h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">{text}</p>

            {highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-card border border-border
                               hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                               transition-all duration-300"
                    data-animate="fade-up"
                    data-delay={String(300 + i * 100)}
                  >
                    <div className="text-xl font-heading font-bold text-primary mb-1">
                      {highlight.value}
                    </div>
                    <div className="text-base text-muted-foreground">
                      {highlight.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
