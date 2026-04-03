'use client';

import { useState } from 'react';
import { Toggle, Switch, ControlBar } from './PreviewControls';

import CtaBanner from '@/sections/cta/CtaBanner';
import CtaCentered from '@/sections/cta/CtaCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function CtaPreview() {
  const [bg, setBg] = useState<'primary' | 'muted' | 'dark'>('primary');
  const [secondaryCta, setSecondaryCta] = useState(true);

  const secText = secondaryCta ? 'Mehr erfahren' : undefined;
  const secHref = secondaryCta ? '#' : undefined;

  return (
    <>
      <ControlBar>
        <Toggle
          label="Hintergrund"
          options={[
            { label: 'Primär', value: 'primary' },
            { label: 'Muted', value: 'muted' },
            { label: 'Dunkel', value: 'dark' },
          ]}
          value={bg}
          onChange={(v) => setBg(v as 'primary' | 'muted' | 'dark')}
        />
        <Switch label="Sekundärer CTA" checked={secondaryCta} onChange={setSecondaryCta} />
      </ControlBar>

      <VariantLabel name="CtaBanner" />
      <CtaBanner
        heading="Bereit durchzustarten?"
        text="Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch."
        buttonText="Jetzt starten"
        buttonHref="#"
        bg={bg}
      />

      <VariantLabel name="CtaCentered" />
      <CtaCentered
        heading="Lassen Sie uns gemeinsam etwas Großartiges schaffen"
        text="Von der ersten Idee bis zum fertigen Produkt — wir begleiten Sie auf dem gesamten Weg."
        buttonText="Projekt starten"
        buttonHref="#"
        secondaryButtonText={secText}
        secondaryButtonHref={secHref}
        bg={bg}
      />
    </>
  );
}
