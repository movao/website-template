'use client';

import { useState } from 'react';
import { Switch, Toggle, ControlBar } from './PreviewControls';
import { demoFeatures, demoHighlights } from '@/data/demo';

import FeaturesGrid from '@/sections/features/FeaturesGrid';
import FeaturesAlternating from '@/sections/features/FeaturesAlternating';
import FeaturesHighlight from '@/sections/features/FeaturesHighlight';
import FeaturesCentered from '@/sections/features/FeaturesCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function FeaturesPreview() {
  const [heading, setHeading] = useState(true);
  const [columns, setColumns] = useState<'2' | '3' | '4'>('3');
  const [highlightLayout, setHighlightLayout] = useState<'default' | 'stacked' | 'sticky' | 'scroll' | 'parallax'>('default');

  const headingText = heading ? 'Unsere Leistungen' : undefined;
  const subheadingText = heading ? 'Was uns auszeichnet' : undefined;

  return (
    <>
      <ControlBar>
        <Switch label="Heading" checked={heading} onChange={setHeading} />
        <Toggle
          label="Spalten (Grid)"
          options={[
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
          ]}
          value={columns}
          onChange={(v) => setColumns(v as '2' | '3' | '4')}
        />
        <Toggle
          label="Highlight"
          options={[
            { label: 'Standard', value: 'default' },
            { label: 'Gestapelt', value: 'stacked' },
            { label: 'Sticky', value: 'sticky' },
            { label: 'Scroll', value: 'scroll' },
            { label: 'Parallax', value: 'parallax' },
          ]}
          value={highlightLayout}
          onChange={(v) => setHighlightLayout(v as 'default' | 'stacked' | 'sticky' | 'scroll' | 'parallax')}
        />
      </ControlBar>

      <VariantLabel name="FeaturesGrid" />
      <FeaturesGrid
        features={demoFeatures}
        heading={headingText}
        subheading={subheadingText}
        columns={Number(columns) as 2 | 3 | 4}
      />

      <VariantLabel name="FeaturesAlternating" />
      <FeaturesAlternating
        features={demoFeatures.slice(0, 3)}
        heading={headingText}
        subheading={subheadingText}
      />

      <VariantLabel name="FeaturesHighlight" />
      <FeaturesHighlight
        heading="Alles aus einer Hand"
        description="Wir bieten Ihnen ein Rundum-Sorglos-Paket. Von der Beratung über die Umsetzung bis zur langfristigen Betreuung — alles aus einer Hand."
        highlights={demoHighlights}
        imageSrc={highlightLayout === 'stacked' ? '/images/placeholder-landscape.jpg' : '/images/placeholder-portrait.jpg'}
        layout={highlightLayout}
      />

      <VariantLabel name="FeaturesCentered" />
      <FeaturesCentered
        features={demoFeatures.slice(0, 4)}
        imageSrc="/images/placeholder-portrait.jpg"
      />
    </>
  );
}
