import type { Metadata } from 'next';
import { siteConfig } from '../config';
import { design } from '../config/design';
import { generateThemeCSS } from '../design/apply-theme';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsentManager from '../components/ConsentManager';
import TrackingScripts from '../components/TrackingScripts';
import ScrollReveal from '../components/ScrollReveal';
import { isDarkTheme } from '../design/apply-theme';
import './globals.css';

const themeCSS = generateThemeCSS(design);

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    locale: 'de_DE',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} data-theme-dark={String(isDarkTheme(design))} data-card-style={design.cardStyle || 'subtle'}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
        {/* Fonts werden dynamisch über generateThemeCSS geladen — nur aktive Fonts */}
      </head>

      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />

        <main className="flex-1" id="main-content">
          {children}
        </main>

        <Footer />
        <ConsentManager />
        <TrackingScripts />
        <ScrollReveal />
      </body>
    </html>
  );
}
