import NewsletterSignup from '@/sections/newsletter/NewsletterSignup';

function VariantLabel({ name }: { name: string }) {
  return (
    <div className="container-narrow py-4 border-b border-border">
      <p className="text-base font-medium text-muted-foreground">{name}</p>
    </div>
  );
}

export default function NewsletterPreview() {
  return (
    <div>
      <VariantLabel name="NewsletterSignup (muted)" />
      <NewsletterSignup />

      <VariantLabel name="NewsletterSignup (primary)" />
      <NewsletterSignup bg="primary" />

      <VariantLabel name="NewsletterSignup (background)" />
      <NewsletterSignup bg="background" />
    </div>
  );
}
