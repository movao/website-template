'use client';

import { useState } from 'react';
import { Switch, ControlBar } from './PreviewControls';
import { demoTestimonials } from '@/data/demo';

import TestimonialsGrid from '@/sections/testimonials/TestimonialsGrid';
import TestimonialHighlight from '@/sections/testimonials/TestimonialHighlight';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function TestimonialsPreview() {
  const [carousel, setCarousel] = useState(false);

  const highlightData = demoTestimonials.map((t) => ({
    ...t,
    imageSrc: '/images/placeholder-square.jpg',
  }));

  return (
    <>
      <ControlBar>
        <Switch label="Carousel" checked={carousel} onChange={setCarousel} />
      </ControlBar>

      <VariantLabel name="TestimonialsGrid" />
      <TestimonialsGrid
        testimonials={demoTestimonials}
        carousel={carousel}
      />

      <VariantLabel name="TestimonialHighlight" />
      <TestimonialHighlight
        testimonials={highlightData}
        carousel={carousel}
      />
    </>
  );
}
