import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import CookieSettingsLink from '@/components/CookieSettingsLink';
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';

interface FooterCenteredProps {
  bg?: 'foreground' | 'primary' | 'muted';
  showSocial?: boolean;
  showTagline?: boolean;
}

const bgClasses = {
  foreground: 'bg-foreground text-background',
  primary: 'bg-primary text-background',
  muted: 'bg-muted text-foreground',
};

const mutedOpacity = {
  foreground: 'opacity-70',
  primary: 'opacity-80',
  muted: 'text-muted-foreground',
};

const borderClass = {
  foreground: 'border-background/20',
  primary: 'border-background/20',
  muted: 'border-border',
};

export default function FooterCentered({
  bg = 'foreground',
  showSocial = true,
  showTagline = true,
}: FooterCenteredProps) {
  const currentYear = new Date().getFullYear();
  const { social, navigation } = siteConfig;
  const muted = mutedOpacity[bg];
  const textColor = bg === 'muted' ? 'text-foreground' : 'text-background';

  return (
    <footer className={bgClasses[bg]}>
      <div className="container-narrow py-16 flex flex-col items-center text-center">
        {/* Logo */}
        <a href="/" className={cn('font-heading text-logo', textColor)}>
          {siteConfig.name}
        </a>

        {/* Tagline */}
        {showTagline && (
          <p className={cn('mt-3 text-base max-w-md', muted)}>
            {siteConfig.tagline}
          </p>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`/${item.href}`}
              className={cn('text-base hover:opacity-100 transition-opacity', muted)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        {showSocial && (
          <div className="flex gap-5 mt-8">
            {social.instagram && (
              <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener"
                 className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Instagram">
                <InstagramLogo size={22} weight="regular" />
              </a>
            )}
            {social.facebook && (
              <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener"
                 className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Facebook">
                <FacebookLogo size={22} weight="regular" />
              </a>
            )}
            {social.linkedin && (
              <a href={`https://linkedin.com/company/${social.linkedin}`} target="_blank" rel="noopener"
                 className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="LinkedIn">
                <LinkedinLogo size={22} weight="regular" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Untere Leiste */}
      <div className={cn('border-t', borderClass[bg])}>
        <div className={cn('container-narrow py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-base', muted)}>
          <p>&copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.</p>
          <span className="hidden sm:inline">·</span>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:opacity-100 transition-opacity">Impressum</a>
            <a href="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</a>
            <CookieSettingsLink className={muted} />
          </div>
        </div>
      </div>
    </footer>
  );
}
