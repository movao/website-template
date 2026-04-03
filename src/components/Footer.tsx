import { siteConfig } from '@/config';
import CookieSettingsLink from '@/components/CookieSettingsLink';
import { cn } from '@/lib/utils';
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';

interface FooterProps {
  bg?: 'foreground' | 'primary' | 'muted';
  showSocial?: boolean;
  showContact?: boolean;
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

export default function Footer({
  bg = 'foreground',
  showSocial = true,
  showContact = true,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { contact, social, navigation } = siteConfig;
  const muted = mutedOpacity[bg];
  const textColor = bg === 'muted' ? 'text-foreground' : 'text-background';

  return (
    <footer className={bgClasses[bg]}>
      <div className="container-narrow py-16">
        <div className={cn('grid sm:grid-cols-2 gap-10', showContact ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
          <div className={showContact ? 'lg:col-span-2' : ''}>
            <a href="/" className={cn('font-heading text-logo', textColor)}>
              {siteConfig.name}
            </a>
            <p className={cn('mt-3 text-base leading-relaxed max-w-md', muted)}>
              {siteConfig.tagline}
            </p>

            {showSocial && (
              <div className="flex gap-4 mt-6">
                {social.instagram && (
                  <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener"
                     className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Instagram">
                    <InstagramLogo size={20} weight="regular" />
                  </a>
                )}
                {social.facebook && (
                  <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener"
                     className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="Facebook">
                    <FacebookLogo size={20} weight="regular" />
                  </a>
                )}
                {social.linkedin && (
                  <a href={`https://linkedin.com/company/${social.linkedin}`} target="_blank" rel="noopener"
                     className={cn(muted, 'hover:opacity-100 transition-opacity')} aria-label="LinkedIn">
                    <LinkedinLogo size={20} weight="regular" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h4 className={cn('text-body-lg font-medium mb-4', textColor)}>Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={`/${item.href}`} className={cn('text-base hover:opacity-100 transition-opacity', muted)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {showContact && (
            <div>
              <h4 className={cn('text-body-lg font-medium mb-4', textColor)}>Kontakt</h4>
              <ul className={cn('space-y-2 text-base', muted)}>
                <li>
                  {contact.address.street}<br />
                  {contact.address.zip} {contact.address.city}
                </li>
                <li>
                  <a href={`tel:${contact.phone}`} className="hover:opacity-100 transition-opacity">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:opacity-100 transition-opacity">
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={cn('border-t', borderClass[bg])}>
        <div className={cn('container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-base', muted)}>
          <p>&copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.</p>
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
