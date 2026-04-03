'use client';

import { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  speed?: number;
}

/**
 * Parallax-Bild das sich beim Scrollen langsamer bewegt als der Content.
 *
 * Das Bild ist 30% höher als der Container (nicht gezoomt),
 * zentriert positioniert und wird per translateY verschoben.
 * overflow-hidden auf dem Parent clippt den Überschuss.
 * So machen es GSAP, Locomotive Scroll und Framer Motion.
 */
export default function ParallaxImage({ src, speed = 0.3 }: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const section = img.closest('section');
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const offset = rect.top * speed;
      img.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt=""
      className="absolute inset-x-0 w-full object-cover will-change-transform"
      style={{ top: '-15%', height: '130%' }}
      loading="eager"
    />
  );
}
