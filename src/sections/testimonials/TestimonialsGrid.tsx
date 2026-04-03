import { cn } from '@/lib/utils';
import Carousel from '@/components/ui/Carousel';

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[];
  heading?: string;
  subheading?: string;
  carousel?: boolean;
}

function TestimonialCard({ item, isCarousel }: { item: Testimonial; isCarousel?: boolean }) {
  return (
    <blockquote
      className={cn(
        'relative p-8 rounded-2xl bg-card border border-border',
        'hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
        isCarousel && 'min-w-[320px] max-w-[400px] shrink-0',
      )}
    >
      <span className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
        &ldquo;
      </span>

      {item.rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, si) => (
            <svg
              key={si}
              className={cn(
                'w-4 h-4',
                si < item.rating! ? 'text-amber-400' : 'text-border',
              )}
              fill="currentColor" viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      <p className="relative text-muted-foreground leading-relaxed italic">
        {item.quote}
      </p>

      <footer className="mt-6 pt-4 border-t border-border/50">
        <cite className="not-italic">
          <span className="font-medium text-foreground">{item.name}</span>
          {item.role && (
            <span className="block text-base text-muted-foreground mt-0.5">{item.role}</span>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}

export default function TestimonialsGrid({
  testimonials = [],
  heading = 'Das sagen unsere Kunden',
  subheading = 'Erfahrungen und Bewertungen',
  carousel = false,
}: TestimonialsGridProps) {
  return (
    <section id="testimonials" className="section bg-background">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {carousel ? (
          <Carousel>
            {testimonials.map((item) => (
              <TestimonialCard key={item._id} item={item} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="fade-up">
            {testimonials.map((item) => (
              <TestimonialCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
