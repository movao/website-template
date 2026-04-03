'use client';

import { demoProcess } from '@/data/demo';

import ProcessSteps from '@/sections/process/ProcessSteps';
import ProcessTimeline from '@/sections/process/ProcessTimeline';
import ProcessList from '@/sections/process/ProcessList';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function ProcessPreview() {
  return (
    <>
      <VariantLabel name="ProcessSteps" />
      <ProcessSteps steps={demoProcess} />

      <VariantLabel name="ProcessTimeline" />
      <ProcessTimeline steps={demoProcess} />

      <VariantLabel name="ProcessList" />
      <ProcessList steps={demoProcess} />
    </>
  );
}
