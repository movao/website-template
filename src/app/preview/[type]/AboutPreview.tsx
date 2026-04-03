'use client';

import { demoAbout } from '@/data/demo';

import AboutSplit from '@/sections/about/AboutSplit';
import AboutCentered from '@/sections/about/AboutCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <>
      <VariantLabel name="AboutSplit" />
      <AboutSplit
        heading={demoAbout.heading}
        text={demoAbout.text}
        highlights={demoAbout.highlights}
        image="/images/placeholder-landscape.jpg"
      />

      <VariantLabel name="AboutCentered" />
      <AboutCentered
        heading={demoAbout.heading}
        text={demoAbout.text}
        highlights={demoAbout.highlights}
      />
    </>
  );
}
