import JobsList from '@/sections/jobs/JobsList';
import { demoJobs } from '@/data/demo';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function JobsPreview() {
  return (
    <div>
      <VariantLabel name="JobsList" />
      <JobsList jobs={demoJobs} />
    </div>
  );
}
