import { notFound } from 'next/navigation';
import { sectionTypes } from '../layout';

// Interactive previews
import HeroPreview from './HeroPreview';
import FeaturesPreview from './FeaturesPreview';
import CtaPreview from './CtaPreview';
import TestimonialsPreview from './TestimonialsPreview';
import ContactPreview from './ContactPreview';
import TeamPreview from './TeamPreview';
import ProcessPreview from './ProcessPreview';
import StatsPreview from './StatsPreview';
import AboutPreview from './AboutPreview';
import BlogPreview from './BlogPreview';
import PortfolioPreview from './PortfolioPreview';
import PricingPreview from './PricingPreview';
import NewsletterPreview from './NewsletterPreview';
import JobsPreview from './JobsPreview';
import NavigationPreview from './NavigationPreview';
import FooterPreview from './FooterPreview';

// Demo data
import {
  demoFAQs,
  demoOpeningHours,
  demoPartners,
  demoGallery,
} from '@/data/demo';

// Section imports — rest
import FaqAccordion from '@/sections/faq/FaqAccordion';
import OpeningHoursTable from '@/sections/opening-hours/OpeningHoursTable';
import GalleryGrid from '@/sections/gallery/GalleryGrid';
import LogoBar from '@/sections/partners/LogoBar';
import MapEmbed from '@/sections/map/MapEmbed';

export function generateStaticParams() {
  return sectionTypes.map((type) => ({ type: type.slug }));
}

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

function SectionPreview({ type }: { type: string }) {
  switch (type) {
    case 'hero':
      return <HeroPreview />;

    case 'features':
      return <FeaturesPreview />;

    case 'about':
      return <AboutPreview />;

    case 'stats':
      return <StatsPreview />;

    case 'process':
      return <ProcessPreview />;

    case 'cta':
      return <CtaPreview />;

    case 'testimonials':
      return <TestimonialsPreview />;

    case 'team':
      return <TeamPreview />;

    case 'blog':
      return <BlogPreview />;

    case 'faq':
      return (
        <>
          <VariantLabel name="FaqAccordion" />
          <FaqAccordion faqs={demoFAQs} />
        </>
      );

    case 'contact':
      return <ContactPreview />;

    case 'opening-hours':
      return (
        <>
          <VariantLabel name="OpeningHoursTable" />
          <OpeningHoursTable hours={demoOpeningHours} />
        </>
      );

    case 'portfolio':
      return <PortfolioPreview />;

    case 'gallery':
      return (
        <>
          <VariantLabel name="GalleryGrid" />
          <GalleryGrid images={demoGallery} />
        </>
      );

    case 'partners':
      return (
        <>
          <VariantLabel name="LogoBar" />
          <LogoBar partners={demoPartners} />
        </>
      );

    case 'map':
      return (
        <>
          <VariantLabel name="MapEmbed" />
          <MapEmbed />
        </>
      );

    case 'pricing':
      return <PricingPreview />;

    case 'newsletter':
      return <NewsletterPreview />;

    case 'jobs':
      return <JobsPreview />;

    case 'navigation':
      return <NavigationPreview />;

    case 'footer':
      return <FooterPreview />;

    default:
      return notFound();
  }
}

export default async function PreviewTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const typeInfo = sectionTypes.find((t) => t.slug === type);
  if (!typeInfo) return notFound();

  return (
    <div>
      <div className="container-narrow pt-8 pb-4">
        <h1 className="text-title font-heading">{typeInfo.label}</h1>
      </div>
      <SectionPreview type={type} />
    </div>
  );
}
