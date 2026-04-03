'use client';

import { useState } from 'react';
import { Toggle, Switch, ControlBar } from './PreviewControls';

import ContactSimple from '@/sections/contact/ContactSimple';
import ContactSplit from '@/sections/contact/ContactSplit';
import ContactCentered from '@/sections/contact/ContactCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function ContactPreview() {
  const [splitLayout, setSplitLayout] = useState<'default' | 'reversed'>('default');
  const [withImage, setWithImage] = useState(false);
  const [compact, setCompact] = useState(false);

  return (
    <>
      <ControlBar>
        <Toggle
          label="Split Layout"
          options={[
            { label: 'Standard', value: 'default' },
            { label: 'Umgekehrt', value: 'reversed' },
          ]}
          value={splitLayout}
          onChange={(v) => setSplitLayout(v as 'default' | 'reversed')}
        />
        <Switch label="Mit Bild" checked={withImage} onChange={setWithImage} />
        <Switch label="Kompakt" checked={compact} onChange={setCompact} />
      </ControlBar>

      <VariantLabel name="ContactSimple" />
      <ContactSimple />

      <VariantLabel name="ContactSplit" />
      <ContactSplit
        layout={splitLayout}
        imageSrc={withImage ? '/images/placeholder-landscape.jpg' : undefined}
        compact={compact}
      />

      <VariantLabel name="ContactCentered" />
      <ContactCentered />
    </>
  );
}
