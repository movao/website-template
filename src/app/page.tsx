import { siteConfig } from '@/config';
import {
  demoFeatures,
  demoAbout,
  demoStats,
  demoTeam,
  demoTestimonials,
  demoBlogPosts,
  demoFAQs,
  demoOpeningHours,
  demoProcess,
  demoPartners,
  demoGallery,
} from '@/data/demo';

import HeroCentered from '@/sections/hero/HeroCentered';
import FeaturesGrid from '@/sections/features/FeaturesGrid';
import AboutSplit from '@/sections/about/AboutSplit';
import StatsGrid from '@/sections/stats/StatsGrid';
import ProcessSteps from '@/sections/process/ProcessSteps';
import TestimonialsGrid from '@/sections/testimonials/TestimonialsGrid';
import TeamGrid from '@/sections/team/TeamGrid';
import BlogGrid from '@/sections/blog/BlogGrid';
import FaqAccordion from '@/sections/faq/FaqAccordion';
import OpeningHoursTable from '@/sections/opening-hours/OpeningHoursTable';
import ContactSimple from '@/sections/contact/ContactSimple';
import CtaBanner from '@/sections/cta/CtaBanner';
import LogoBar from '@/sections/partners/LogoBar';
import MapEmbed from '@/sections/map/MapEmbed';
import GalleryGrid from '@/sections/gallery/GalleryGrid';

export default function Home() {
  return (
    <>
      <HeroCentered
        heading={siteConfig.name}
        subheading={siteConfig.tagline}
        ctaText="Kontakt aufnehmen"
        ctaHref="#contact"
        secondaryCtaText="Mehr erfahren"
        secondaryCtaHref="#about"
      />

      <FeaturesGrid features={demoFeatures} />

      <AboutSplit
        heading={demoAbout.heading}
        text={demoAbout.text}
        highlights={demoAbout.highlights}
      />

      <StatsGrid stats={demoStats} />

      <ProcessSteps steps={demoProcess} />

      <CtaBanner />

      <TestimonialsGrid testimonials={demoTestimonials} />

      <TeamGrid members={demoTeam} />

      <BlogGrid posts={demoBlogPosts} />

      <GalleryGrid images={demoGallery} />

      <LogoBar partners={demoPartners} />

      <FaqAccordion faqs={demoFAQs} />

      <OpeningHoursTable hours={demoOpeningHours} />

      <ContactSimple />

      <MapEmbed
        lat={siteConfig.location.lat}
        lng={siteConfig.location.lng}
        zoom={siteConfig.location.zoom}
      />
    </>
  );
}
