import Footer from '@/components/Footer';
import FooterMinimal from '@/components/FooterMinimal';
import FooterExtended from '@/components/FooterExtended';
import FooterCentered from '@/components/FooterCentered';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function FooterPreview() {
  return (
    <div className="space-y-16">
      <div>
        <VariantLabel name="Footer (Standard)" />
        <Footer />
      </div>

      <div>
        <VariantLabel name="FooterMinimal" />
        <FooterMinimal />
      </div>

      <div>
        <VariantLabel name="FooterExtended" />
        <FooterExtended />
      </div>

      <div>
        <VariantLabel name="FooterCentered" />
        <FooterCentered />
      </div>
    </div>
  );
}
