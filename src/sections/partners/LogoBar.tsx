import Carousel from '@/components/ui/Carousel';
import { cn } from '@/lib/utils';

export interface Partner {
  name: string;
  logo?: string;
}

export interface Props {
  partners: Partner[];
  heading?: string;
  subheading?: string;
  carousel?: boolean;
}

function PartnerItem({ partner, isCarousel }: { partner: Partner; isCarousel?: boolean }) {
  return (
    <div
      className={cn(
        'group flex items-center justify-center px-8 py-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
        isCarousel && 'min-w-[180px] shrink-0',
      )}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <span className="text-body-lg font-heading text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function LogoBar({
  partners = [],
  heading = 'Unsere Partner',
  subheading = 'Vertraut von führenden Unternehmen',
  carousel = false,
}: Props) {
  return (
    <section id="partners" className="section bg-muted">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {carousel ? (
          <Carousel fadeFrom="muted">
            {partners.map((partner, i) => (
              <PartnerItem key={i} partner={partner} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-8" data-animate="fade-up">
            {partners.map((partner, i) => (
              <PartnerItem key={i} partner={partner} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
