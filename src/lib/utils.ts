import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge muss unsere Custom-Typoskala kennen.
 * Ohne diese Konfiguration behandelt twMerge text-body-lg (Größe)
 * und text-primary (Farbe) als gleiche Kategorie und entfernt eine davon.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display',
        'text-title',
        'text-logo',
        'text-xl',
        'text-hero-sub',
        'text-subtitle',
        'text-body-lg',
        'text-base',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
