'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import MobileMenu from '@/components/MobileMenu';

interface NavigationCenteredProps {
  sticky?: boolean;
  transparent?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function NavigationCentered({
  sticky = true,
  transparent = false,
  ctaText = 'Kontakt',
  ctaHref,
}: NavigationCenteredProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const resolvedCtaHref = ctaHref || (isHome ? '#contact' : '/#contact');

  useEffect(() => {
    setIsHome(window.location.pathname === '/');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const isTransparent = transparent && !scrolled && !menuOpen;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-lg"
      >
        Zum Inhalt springen
      </a>

      <header
        className={cn(
          'inset-x-0 top-0 z-50 transition-all duration-300',
          sticky ? 'fixed' : 'relative',
          isTransparent
            ? 'bg-transparent border-b border-transparent'
            : 'bg-background/80 backdrop-blur-lg border-b border-border',
          scrolled && !isTransparent && 'shadow-sm',
        )}
      >
        {/* Desktop: Zwei Zeilen */}
        <div className="hidden md:block">
          <div className="container-narrow flex flex-col items-center py-3">
            {/* Logo zentriert */}
            <a href="/" className="hover:opacity-80 transition-opacity mb-3">
              {siteConfig.logoUrl ? (
                <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-8 md:h-10 w-auto object-contain" />
              ) : (
                <span className={cn(
                  'font-heading text-logo transition-colors duration-300',
                  isTransparent ? 'text-background' : 'text-foreground',
                )}>{siteConfig.name}</span>
              )}
            </a>

            {/* Links + CTA horizontal zentriert */}
            <nav className="flex items-center gap-8" aria-label="Hauptnavigation">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={isHome ? item.href : `/${item.href}`}
                  className={cn(
                    'text-base font-medium transition-colors',
                    isTransparent
                      ? 'text-background/80 hover:text-background'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a href={resolvedCtaHref} className={cn(
                isTransparent ? 'btn-secondary' : 'btn-primary',
              )}>
                {ctaText}
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile: Burger */}
        <div className="md:hidden">
          <nav className="container-narrow flex items-center justify-between h-16" aria-label="Hauptnavigation">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              {siteConfig.logoUrl ? (
                <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-8 w-auto object-contain" />
              ) : (
                <span className={cn(
                  'font-heading text-logo transition-colors duration-300',
                  isTransparent ? 'text-background' : 'text-foreground',
                )}>{siteConfig.name}</span>
              )}
            </a>

            <button
              onClick={toggleMenu}
              className={cn(
                'p-2',
                isTransparent ? 'text-background/80 hover:text-background' : 'text-muted-foreground hover:text-foreground',
              )}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-centered"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

        </div>
      </header>

      {menuOpen && (
        <MobileMenu
          isHome={isHome}
          onClose={closeMenu}
          ctaText={ctaText}
          ctaHref={ctaHref}
        />
      )}

      {sticky && <div className="h-16 md:h-[88px]" />}
    </>
  );
}
