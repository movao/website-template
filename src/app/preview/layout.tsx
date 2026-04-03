const sectionTypes = [
  { slug: 'hero', label: 'Hero' },
  { slug: 'features', label: 'Features / Services' },
  { slug: 'about', label: 'About' },
  { slug: 'stats', label: 'Stats' },
  { slug: 'process', label: 'Process' },
  { slug: 'cta', label: 'CTA' },
  { slug: 'testimonials', label: 'Testimonials' },
  { slug: 'team', label: 'Team' },
  { slug: 'blog', label: 'Blog' },
  { slug: 'faq', label: 'FAQ' },
  { slug: 'contact', label: 'Contact' },
  { slug: 'opening-hours', label: 'Öffnungszeiten' },
  { slug: 'portfolio', label: 'Portfolio' },
  { slug: 'gallery', label: 'Gallery' },
  { slug: 'partners', label: 'Partners' },
  { slug: 'map', label: 'Map' },
  { slug: 'pricing', label: 'Pricing' },
  { slug: 'newsletter', label: 'Newsletter' },
  { slug: 'jobs', label: 'Jobs' },
  { slug: 'navigation', label: 'Navigation' },
  { slug: 'footer', label: 'Footer' },
];

export { sectionTypes };

import DisableAnimations from './DisableAnimations';
import ThemeToggle from './ThemeToggle';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DisableAnimations />
      <nav className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-narrow flex items-center gap-2 py-3">
          <div className="flex items-center gap-1 overflow-x-auto flex-1 min-w-0">
            <a
              href="/preview"
              className="shrink-0 text-base font-medium text-foreground px-3 py-1.5 rounded-lg hover:bg-muted transition-colors"
            >
              Alle
            </a>
            <span className="text-border">|</span>
            {sectionTypes.map((type) => (
              <a
                key={type.slug}
                href={`/preview/${type.slug}`}
                className="shrink-0 text-base text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-muted hover:text-foreground transition-colors"
              >
                {type.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
      {children}
    </div>
  );
}
