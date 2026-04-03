'use client';

import { useEffect, useRef, useState } from 'react';
import IconWrapper from './IconWrapper';

interface Feature {
  icon: string;
  text: string;
  description?: string;
  imageSrc?: string;
}

interface ScrollFeaturesProps {
  features: Feature[];
}

export default function ScrollFeatures({ features }: ScrollFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    featureRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [features.length]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div className="flex flex-col gap-24">
        {features.map((item, i) => (
          <div
            key={i}
            ref={(el) => { featureRefs.current[i] = el; }}
            className="transition-opacity duration-300"
            style={{ opacity: activeIndex === i ? 1 : 0.3 }}
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

      <div className="hidden lg:block">
        <div className="sticky top-[20vh]">
          {features.map((item, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: activeIndex === i ? 1 : 0, position: i === 0 ? 'relative' : 'absolute' }}
            >
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={item.text}
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
