'use client';

import { useState } from 'react';
import { Toggle, Switch, ControlBar } from './PreviewControls';
import { demoTeam } from '@/data/demo';

import TeamGrid from '@/sections/team/TeamGrid';
import TeamCards from '@/sections/team/TeamCards';
import TeamAlternating from '@/sections/team/TeamAlternating';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function TeamPreview() {
  const [columns, setColumns] = useState<'2' | '3' | '4'>('3');
  const [carousel, setCarousel] = useState(false);

  return (
    <>
      <ControlBar>
        <Toggle
          label="Spalten"
          options={[
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
          ]}
          value={columns}
          onChange={(v) => setColumns(v as '2' | '3' | '4')}
        />
        <Switch label="Carousel" checked={carousel} onChange={setCarousel} />
      </ControlBar>

      <VariantLabel name="TeamGrid" />
      <TeamGrid members={demoTeam} columns={Number(columns) as 2 | 3 | 4} carousel={carousel} />

      <VariantLabel name="TeamCards" />
      <TeamCards members={demoTeam} columns={Number(columns) as 2 | 3 | 4} carousel={carousel} />

      <VariantLabel name="TeamAlternating" />
      <TeamAlternating members={demoTeam} />
    </>
  );
}
