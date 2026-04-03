'use client';

import { demoStats } from '@/data/demo';

import StatsGrid from '@/sections/stats/StatsGrid';
import StatsHighlight from '@/sections/stats/StatsHighlight';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function StatsPreview() {
  return (
    <>
      <VariantLabel name="StatsGrid" />
      <StatsGrid stats={demoStats} />

      <VariantLabel name="StatsHighlight" />
      <StatsHighlight
        stat={{ value: '500', label: 'Zufriedene Kunden', suffix: '+' }}
        description="Seit über 15 Jahren vertrauen uns Unternehmen aus ganz Deutschland. Unsere Kundenbindung liegt bei 98% — weil wir nicht nur liefern, sondern langfristig begleiten."
      />
    </>
  );
}
