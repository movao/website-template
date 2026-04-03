'use client';

import { siteConfig } from '@/config';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import { useState } from 'react';

export interface MegaMenuItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

interface MobileMenuProps {
  isHome: boolean;
  onClose: () => void;
  ctaText?: string;
  ctaHref?: string;
  showPhone?: boolean;
  megaMenu?: Record<string, MegaMenuItem[]>;
}

export default function MobileMenu({
  isHome,
  onClose,
  ctaText = 'Kontakt',
  ctaHref,
  showPhone = false,
  megaMenu,
}: MobileMenuProps) {
  const [openSub, setOpenSub] = useState<string | null>(null);
  const resolvedCtaHref = ctaHref || (isHome ? '#contact' : '/#contact');
  const hasMega = (label: string) => megaMenu && megaMenu[label];

  return (
    <div
      className="md:hidden fixed inset-0 z-[60] bg-background overflow-y-auto"
      role="menu"
    >
      {/* Header mit X */}
      <div className="sticky top-0 flex items-center justify-between h-16 px-6 border-b border-border bg-background z-10">
        <a href="/" className="font-heading text-logo text-foreground" onClick={onClose}>
          {siteConfig.name}
        </a>
        <button
          onClick={onClose}
          className="p-2 text-muted-foreground hover:text-foreground"
          aria-label="Menü schließen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center gap-1 px-6 py-8">
        {siteConfig.navigation.map((item) => (
          <div key={item.label} className="w-full max-w-sm text-center">
            {hasMega(item.label) ? (
              <>
                <button
                  className="text-xl font-heading text-foreground hover:text-primary transition-colors py-2.5"
                  onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                >
                  {item.label}
                </button>
                {openSub === item.label && megaMenu?.[item.label] && (
                  <div className="flex flex-col items-center gap-1 pb-2">
                    {megaMenu[item.label].map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-2 text-body-lg text-muted-foreground hover:text-primary transition-colors py-1.5"
                        role="menuitem"
                        onClick={onClose}
                      >
                        {sub.icon && <IconOrEmoji icon={sub.icon} size={18} className="text-primary shrink-0" />}
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={isHome ? item.href : `/${item.href}`}
                className="block text-xl font-heading text-foreground hover:text-primary transition-colors py-2.5"
                role="menuitem"
                onClick={onClose}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* CTA + Phone */}
      <div className="px-6 pb-8 flex flex-col items-center gap-3">
        {showPhone && siteConfig.contact?.phone && (
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-body-lg text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
          >
            {siteConfig.contact.phone}
          </a>
        )}
        <a
          href={resolvedCtaHref}
          className="btn-primary w-full max-w-sm text-center block"
          role="menuitem"
          onClick={onClose}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
