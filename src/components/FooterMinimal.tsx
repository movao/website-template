import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import CookieSettingsLink from '@/components/CookieSettingsLink';
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';

interface FooterMinimalProps {
  bg?: 'foreground' | 'primary' | 'muted';
  showSocial?: boolean;
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

export default function FooterMinimal({
  bg = 'foreground',
  showSocial = true,
}: FooterMinimalProps) {
  const currentYear = new Date().getFullYear();
  const { social } = siteConfig;
  const muted = mutedOpacity[bg];
  const textColor = bg === 'muted' ? 'text-foreground' : 'text-background';

  return (
    <footer className={bgClasses[bg]}>
      <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className={cn('font-heading text-logo', textColor)}>
          {siteConfig.name}
        </a>

        <div className="flex items-center gap-6">
          {showSocial && (
            <div className="flex items-center gap-3">
              {social.instagram && (
                <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener"
                   className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Instagram">
                  <InstagramLogo size={18} weight="regular" />
                </a>
              )}
              {social.facebook && (
                <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener"
                   className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Facebook">
                  <FacebookLogo size={18} weight="regular" />
                </a>
              )}
              {social.linkedin && (
                <a href={`https://linkedin.com/company/${social.linkedin}`} target="_blank" rel="noopener"
                   className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="LinkedIn">
                  <LinkedinLogo size={18} weight="regular" />
                </a>
              )}
            </div>
          )}

          <div className={cn('flex items-center gap-6 text-base', muted)}>
            <a href="/impressum" className="hover:opacity-100 transition-opacity">Impressum</a>
            <a href="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</a>
            <CookieSettingsLink className={muted} />
          </div>
        </div>

        <p className={cn('text-base', muted)}>
          &copy; {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
