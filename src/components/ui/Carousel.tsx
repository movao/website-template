'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode;
  speed?: number;
  fadeFrom?: 'background' | 'muted';
}

/**
 * Auto-Scroll auf Desktop (pausiert bei Hover).
 * Nativer Touch-Scroll auf Mobile (overflow-x-auto).
 * Dupliziert Kinder nur für Desktop-Auto-Scroll.
 */
export default function Carousel({ children, speed = 30, fadeFrom = 'background' }: CarouselProps) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = desktopRef.current;
    if (!el) return;

    // Nur Auto-Scroll starten wenn kein Touch-Device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let position = 0;
    const contentWidth = el.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        position += speed / 60;
        if (position >= contentWidth) position = 0;
        el.style.transform = `translateX(-${position}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  const fadeLeft = cn(
    'absolute inset-y-0 left-0 w-6 md:w-24 z-10 pointer-events-none bg-gradient-to-r to-transparent',
    fadeFrom === 'muted' ? 'from-muted' : 'from-background',
  );
  const fadeRight = cn(
    'absolute inset-y-0 right-0 w-6 md:w-24 z-10 pointer-events-none bg-gradient-to-l to-transparent',
    fadeFrom === 'muted' ? 'from-muted' : 'from-background',
  );

  return (
    <>
      {/* Mobile: nativer horizontaler Scroll */}
      <div className="md:hidden relative">
        <div className={fadeLeft} />
        <div className={fadeRight} />
        <div className="flex gap-6 overflow-x-auto px-1 pb-2 cursor-grab active:cursor-grabbing">
          {children}
        </div>
      </div>

      {/* Desktop: Auto-Scroll mit duplizierten Kindern */}
      <div
        className="hidden md:block relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div className={fadeLeft} />
        <div className={fadeRight} />
        <div ref={desktopRef} className="flex gap-8 will-change-transform">
          {children}
          {children}
        </div>
      </div>
    </>
  );
}
