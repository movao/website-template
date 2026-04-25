import { siteConfig } from '@/config';

export default function Home() {
  return (
    <section className="section">
      <div className="container-narrow flex flex-col items-center text-center">
        <h1 className="text-display font-heading max-w-4xl">
          {siteConfig.name}
        </h1>

        {siteConfig.tagline && (
          <p className="text-hero-sub text-muted-foreground max-w-2xl mt-6">
            {siteConfig.tagline}
          </p>
        )}

        <p className="text-base text-muted-foreground mt-10 max-w-xl">
          Diese Startseite wird pro Kunde durch Claude Code generiert. Sections
          werden in <code>src/components/sections/</code> from scratch gebaut.
        </p>
      </div>
    </section>
  );
}
