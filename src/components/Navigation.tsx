'use client';

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import MobileMenu from '@/components/MobileMenu';
import type { MegaMenuItem } from '@/components/MobileMenu';

export interface NavigationProps {
  sticky?: boolean;
  transparent?: boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: 'default' | 'outline' | 'ghost';
  borderBottom?: boolean;
  hideOnScroll?: boolean;
  compactOnScroll?: boolean;
  logoSize?: 'sm' | 'default' | 'lg';
  showPhone?: boolean;
  navAlignment?: 'right' | 'center';
  megaMenu?: Record<string, MegaMenuItem[]>;
}

export default function Navigation({
  sticky = true,
  transparent = false,
  ctaText = 'Kontakt',
  ctaHref,
  ctaVariant = 'default',
  borderBottom = true,
  hideOnScroll = false,
  compactOnScroll = false,
  logoSize = 'default',
  showPhone = false,
  navAlignment = 'right',
  megaMenu,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const resolvedCtaHref = ctaHref || (isHome ? '#contact' : '/#contact');

  useEffect(() => {
    setIsHome(window.location.pathname === '/');

    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (hideOnScroll) {
        setHidden(y > lastY && y > 80);
      }
      lastY = y;
      setOpenMega(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnScroll]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleMegaEnter = (label: string) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setOpenMega(label);
  };
  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setOpenMega(null), 150);
  };

  const isTransparent = transparent && !scrolled && !menuOpen;
  const isCompact = compactOnScroll && scrolled;

  const logoSizeClass = {
    sm: 'h-6 md:h-7',
    default: 'h-8 md:h-10',
    lg: 'h-10 md:h-12',
  }[logoSize];

  const ctaBtnClass = {
    default: isTransparent ? 'btn-secondary' : 'btn-primary',
    outline: 'btn-secondary',
    ghost: cn(
      'text-base font-medium transition-colors',
      isTransparent ? 'text-background/80 hover:text-background' : 'text-muted-foreground hover:text-primary',
    ),
  }[ctaVariant];

  const linkClass = cn(
    'text-base font-medium transition-colors',
    isTransparent
      ? 'text-background/80 hover:text-background'
      : 'text-muted-foreground hover:text-primary',
  );

  const hasMega = (label: string) => megaMenu && megaMenu[label];

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
          hidden && '-translate-y-full',
          isTransparent
            ? 'bg-transparent'
            : 'bg-background/80 backdrop-blur-lg',
          borderBottom && !isTransparent && 'border-b border-border',
          isTransparent && 'border-b border-transparent',
          scrolled && !isTransparent && 'shadow-sm',
        )}
      >
        <nav
          className={cn(
            'container-narrow flex items-center h-16 md:h-20 transition-all duration-300',
            isCompact && 'md:h-16',
            navAlignment === 'center' ? 'justify-center' : 'justify-between',
          )}
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <a href="/" className={cn(
            'flex items-center gap-2 hover:opacity-80 transition-opacity',
            navAlignment === 'center' && 'absolute left-4 md:left-8',
          )}>
            {siteConfig.logoUrl ? (
              <img src={siteConfig.logoUrl} alt={siteConfig.name} className={cn(logoSizeClass, 'w-auto object-contain')} />
            ) : (
              <span className={cn(
                'font-heading text-logo transition-colors duration-300',
                isTransparent ? 'text-background' : 'text-foreground',
              )}>{siteConfig.name}</span>
            )}
          </a>

          {/* Desktop Links */}
          <ul className={cn(
            'hidden md:flex items-center gap-8',
            navAlignment === 'center' && 'mx-auto',
          )}>
            {siteConfig.navigation.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasMega(item.label) && handleMegaEnter(item.label)}
                onMouseLeave={() => hasMega(item.label) && handleMegaLeave()}
              >
                {hasMega(item.label) ? (
                  <button className={cn(linkClass, 'flex items-center gap-1')}>
                    {item.label}
                    <svg className={cn('w-3.5 h-3.5 transition-transform', openMega === item.label && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <a href={isHome ? item.href : `/${item.href}`} className={linkClass}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right: Phone + CTA */}
          <div className={cn(
            'hidden md:flex items-center gap-4',
            navAlignment === 'center' && 'absolute right-4 md:right-8',
          )}>
            {showPhone && siteConfig.contact?.phone && (
              <a href={`tel:${siteConfig.contact.phone}`} className={linkClass}>
                {siteConfig.contact.phone}
              </a>
            )}
            <a href={resolvedCtaHref} className={cn('hidden md:inline-flex', ctaBtnClass)}>
              {ctaText}
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={toggleMenu}
            className={cn(
              'md:hidden p-2',
              isTransparent ? 'text-background/80 hover:text-background' : 'text-muted-foreground hover:text-foreground',
            )}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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

        {/* Desktop Mega Menu Panel */}
        {openMega && megaMenu?.[openMega] && (
          <div
            className="hidden md:block absolute left-0 right-0 z-50 bg-background border-b border-border shadow-lg"
            onMouseEnter={() => handleMegaEnter(openMega)}
            onMouseLeave={handleMegaLeave}
          >
            <div className="container-narrow py-8">
              <div className={cn(
                'grid gap-4',
                megaMenu[openMega].length <= 3 ? 'grid-cols-3' :
                megaMenu[openMega].length <= 4 ? 'grid-cols-4' : 'grid-cols-3 lg:grid-cols-4',
              )}>
                {megaMenu[openMega].map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
                    onClick={() => setOpenMega(null)}
                  >
                    {sub.icon && (
                      <IconOrEmoji icon={sub.icon} size={24} className="text-primary mt-0.5 shrink-0" />
                    )}
                    <div>
                      <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {sub.label}
                      </span>
                      {sub.description && (
                        <p className="text-base text-muted-foreground mt-0.5">{sub.description}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </header>

      {menuOpen && (
        <MobileMenu
          isHome={isHome}
          onClose={closeMenu}
          ctaText={ctaText}
          ctaHref={ctaHref}
          showPhone={showPhone}
          megaMenu={megaMenu}
        />
      )}

      {sticky && <div className={cn('h-16 md:h-20', isCompact && 'md:h-16')} />}
    </>
  );
}
