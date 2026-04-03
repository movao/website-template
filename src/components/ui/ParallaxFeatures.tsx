'use client';

import { useEffect, useRef } from 'react';
import IconWrapper from './IconWrapper';

interface Feature {
  icon: string;
  text: string;
  description?: string;
  imageSrc?: string;
}

interface ParallaxFeaturesProps {
  features: Feature[];
  speed?: number;
}

export default function ParallaxFeatures({ features, speed = 0.15 }: ParallaxFeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const textEls = container.querySelectorAll<HTMLElement>('[data-parallax-text]');
    const imgEls = container.querySelectorAll<HTMLElement>('[data-parallax-img]');
    const imgInners = container.querySelectorAll<HTMLElement>('[data-parallax-img-inner]');

    const handleScroll = () => {
      const viewCenter = window.innerHeight / 2;

      textEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewCenter);
        const maxDistance = window.innerHeight * 0.6;
        const opacity = Math.max(0.1, 1 - distance / maxDistance);

        el.style.opacity = String(opacity);

        if (imgEls[i]) {
          imgEls[i].style.opacity = String(opacity);
        }
      });

      imgInners.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, features.length]);

  return (
    <>
      {/* Desktop: Parallax mit Fade */}
      <div ref={containerRef} className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col">
          {features.map((item, i) => (
            <div
              key={i}
              data-parallax-text
              className="min-h-[60vh] flex flex-col justify-center"
              style={{ opacity: 0.1 }}
            >
              {item.icon && (
                <IconWrapper icon={item.icon} size={20} className="mb-4" />
              )}
              <h3 className="card-title mb-2">{item.text}</h3>
              {item.description && (
                <p className="card-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {features.map((item, i) => (
            <div
              key={i}
              data-parallax-img
              className="min-h-[60vh] flex items-center"
              style={{ opacity: 0.1 }}
            >
              <div data-parallax-img-inner className="w-full will-change-transform">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.text}
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Kein Parallax, Bild + Text abwechselnd */}
      <div className="flex flex-col gap-12 lg:hidden">
        {features.map((item, i) => (
          <div key={i}>
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.text}
                className="w-full aspect-[4/3] object-cover rounded-2xl mb-6"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 mb-6" />
            )}
            {item.icon && (
              <IconWrapper icon={item.icon} size={20} className="mb-4" />
            )}
            <h3 className="card-title mb-2">{item.text}</h3>
            {item.description && (
              <p className="card-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
