import PricingCards from '@/sections/pricing/PricingCards';
import ComparisonTable from '@/sections/pricing/ComparisonTable';
import { demoPricingPlans, demoComparisonPlans, demoComparisonRows } from '@/data/demo';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function PricingPreview() {
  return (
    <div>
      <VariantLabel name="PricingCards" />
      <PricingCards plans={demoPricingPlans} />

      <VariantLabel name="ComparisonTable" />
      <ComparisonTable plans={demoComparisonPlans} rows={demoComparisonRows} />
    </div>
  );
}
