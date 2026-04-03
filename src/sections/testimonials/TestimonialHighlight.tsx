'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ImageSlot from '@/components/ui/ImageSlot';

interface Testimonial {
  _id?: string;
  quote: string;
  name: string;
  role?: string;
  rating?: number;
  imageSrc?: string;
}

interface TestimonialHighlightProps {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
  carousel?: boolean;
  interval?: number;
}

export default function TestimonialHighlight({
  testimonials = [],
  heading,
  subheading,
  carousel = false,
  interval = 5000,
}: TestimonialHighlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carousel || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [carousel, testimonials.length, interval]);

  const item = testimonials[activeIndex];
  if (!item) return null;

  return (
    <section id="testimonial-highlight" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="max-w-3xl mx-auto text-center" data-animate="fade-up">
          <span className="text-6xl text-primary/20 font-serif leading-none select-none">
            &ldquo;
          </span>

          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={t._id || i}
                className="transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  position: i === 0 ? 'relative' : 'absolute',
                  inset: i === 0 ? undefined : 0,
                }}
              >
                {t.rating && (
                  <div className="flex gap-1 justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg
                        key={si}
                        className={cn(
                          'w-5 h-5',
                          si < t.rating! ? 'text-amber-400' : 'text-border',
                        )}
                        fill="currentColor" viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                <blockquote className="text-xl font-heading text-foreground leading-relaxed italic mb-8">
                  {t.quote}
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  {t.imageSrc && (
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-card shadow-lg">
                      <ImageSlot
                        src={t.imageSrc}
                        alt={t.name}
                        position="testimonial-portrait"
                        label={`Foto ${t.name}`}
                        format="square"
                        priority="nice-to-have"
                        category="photo-custom"
                        className="w-full h-full"
                        gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
                      />
                    </div>
                  )}
                  <cite className="not-italic">
                    <span className="font-medium text-foreground">{t.name}</span>
                    {t.role && (
                      <span className="block text-base text-muted-foreground mt-0.5">{t.role}</span>
                    )}
                  </cite>
                </div>
              </div>
            ))}
          </div>

          {carousel && testimonials.length > 1 && (
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    i === activeIndex ? 'bg-primary' : 'bg-border',
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
