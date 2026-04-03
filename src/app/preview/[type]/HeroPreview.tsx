'use client';

import { useState } from 'react';
import { Switch, Toggle, ControlBar } from './PreviewControls';

import HeroCentered from '@/sections/hero/HeroCentered';
import HeroSplit from '@/sections/hero/HeroSplit';
import HeroImageOverlay from '@/sections/hero/HeroImageOverlay';
import HeroMinimal from '@/sections/hero/HeroMinimal';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function HeroPreview() {
  const [badge, setBadge] = useState(true);
  const [subheading, setSubheading] = useState(true);
  const [secondaryCta, setSecondaryCta] = useState(true);
  const [parallax, setParallax] = useState<'none' | 'subtle' | 'fixed'>('none');
  const [align, setAlign] = useState<'left' | 'center'>('left');
  const [overlay, setOverlay] = useState<'dark' | 'gradient' | 'gradient-bottom' | 'none'>('dark');

  const badgeText = badge ? 'Jetzt verfügbar' : undefined;
  const subText = subheading ? 'Strategie, Design und Entwicklung aus einer Hand. Für Unternehmen die mehr wollen als eine Website.' : undefined;
  const subTextAlt = subheading ? 'Online-Terminbuchung, digitale Patientenakte und eine Website die Vertrauen schafft.' : undefined;
  const subTextOverlay = subheading ? 'Architektur und Innendesign für anspruchsvolle Kunden.' : undefined;
  const secCtaText = secondaryCta ? 'Mehr erfahren' : undefined;
  const secCtaHref = secondaryCta ? '#' : undefined;

  return (
    <>
      <ControlBar>
        <Switch label="Badge" checked={badge} onChange={setBadge} />
        <Switch label="Subheading" checked={subheading} onChange={setSubheading} />
        <Switch label="Sekundärer CTA" checked={secondaryCta} onChange={setSecondaryCta} />
        <Toggle
          label="Parallax"
          options={[
            { label: 'Aus', value: 'none' },
            { label: 'Subtil', value: 'subtle' },
            { label: 'Fixiert', value: 'fixed' },
          ]}
          value={parallax}
          onChange={(v) => setParallax(v as 'none' | 'subtle' | 'fixed')}
        />
        <Toggle
          label="Ausrichtung"
          options={[
            { label: 'Links', value: 'left' },
            { label: 'Mitte', value: 'center' },
          ]}
          value={align}
          onChange={(v) => setAlign(v as 'left' | 'center')}
        />
        <Toggle
          label="Overlay"
          options={[
            { label: 'Dunkel', value: 'dark' },
            { label: 'Verlauf L', value: 'gradient' },
            { label: 'Verlauf U', value: 'gradient-bottom' },
            { label: 'Ohne', value: 'none' },
          ]}
          value={overlay}
          onChange={(v) => setOverlay(v as 'dark' | 'gradient' | 'gradient-bottom' | 'none')}
        />
      </ControlBar>

      <VariantLabel name="HeroCentered" />
      <HeroCentered
        heading="Wir bauen digitale Produkte die begeistern"
        subheading={subText}
        badge={badgeText}
        ctaText="Projekt starten"
        ctaHref="#"
        secondaryCtaText={secCtaText}
        secondaryCtaHref={secCtaHref}
      />

      <VariantLabel name="HeroSplit" />
      <HeroSplit
        heading="Ihre Praxis. Digital gedacht."
        subheading={subTextAlt}
        badge={badgeText}
        ctaText="Beratung anfragen"
        ctaHref="#"
        secondaryCtaText={secCtaText}
        secondaryCtaHref={secCtaHref}
        imageSrc="/images/placeholder-landscape.jpg"
        imageAlt="Placeholder"
      />

      <VariantLabel name="HeroImageOverlay" />
      <HeroImageOverlay
        heading="Räume die inspirieren"
        subheading={subTextOverlay}
        badge={badgeText}
        ctaText="Projekt besprechen"
        ctaHref="#"
        secondaryCtaText={secCtaText}
        secondaryCtaHref={secCtaHref}
        imageSrc="/images/placeholder-hero.jpg"
        parallax={parallax}
        align={align}
        overlay={overlay}
      />

      <VariantLabel name="HeroMinimal" />
      <HeroMinimal
        heading="Design ist nicht wie es aussieht. Design ist wie es funktioniert."
        badge={badgeText}
        ctaText="Projekt anfragen"
        ctaHref="#"
      />
    </>
  );
}
