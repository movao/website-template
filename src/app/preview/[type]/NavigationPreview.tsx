'use client';

import Navigation from '@/components/Navigation';
import NavigationCentered from '@/components/NavigationCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function NavigationPreview() {
  return (
    <div className="space-y-16">
      {/* Standard */}
      <div>
        <VariantLabel name="Navigation (Standard)" />
        <div className="relative border border-border rounded-2xl overflow-hidden mx-8 mt-4">
          <div className="bg-background/80 backdrop-blur-lg border-b border-border">
            <Navigation />
          </div>
          <div className="h-64 flex items-center justify-center text-muted-foreground text-base">
            Seiteninhalt
          </div>
        </div>
      </div>

      {/* Centered */}
      <div>
        <VariantLabel name="NavigationCentered" />
        <div className="relative border border-border rounded-2xl overflow-hidden mx-8 mt-4">
          <div className="bg-background/80 backdrop-blur-lg border-b border-border">
            <NavigationCentered />
          </div>
          <div className="h-64 flex items-center justify-center text-muted-foreground text-base">
            Seiteninhalt
          </div>
        </div>
      </div>
    </div>
  );
}
