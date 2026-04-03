import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  position: string;
  label: string;
  briefing?: string;
  format?: 'landscape' | 'portrait' | 'square';
  aspect?: string;
  priority?: 'must-have' | 'nice-to-have' | 'can-use-stock';
  category?: 'photo-custom' | 'photo-stock' | 'illustration';
  className?: string;
}

const priorityLabels: Record<string, string> = {
  'must-have': 'Kundenfoto erforderlich',
  'nice-to-have': 'Kundenfoto empfohlen',
  'can-use-stock': 'Stockfoto möglich',
};

const categoryLabels: Record<string, string> = {
  'photo-custom': 'Eigenes Foto',
  'photo-stock': 'Stockfoto',
  'illustration': 'Illustration',
};

export default function ImagePlaceholder({
  position,
  label,
  briefing,
  format,
  aspect,
  priority,
  category,
  className,
}: ImagePlaceholderProps) {
  const priorityLabel = priority ? priorityLabels[priority] : undefined;
  const categoryLabel = category ? categoryLabels[category] : undefined;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 bg-muted border-2 border-dashed border-border rounded-[var(--radius)] p-6 text-center',
        className
      )}
      data-image-position={position}
    >
      <svg className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      <span className="text-base font-medium text-foreground">{label}</span>

      {briefing && (
        <span className="text-base text-muted-foreground">{briefing}</span>
      )}

      <div className="flex flex-wrap gap-2 justify-center">
        {format && (
          <span className="text-base px-2 py-0.5 bg-background rounded text-muted-foreground">{format}</span>
        )}
        {priorityLabel && (
          <span className="text-base px-2 py-0.5 bg-background rounded text-muted-foreground">{priorityLabel}</span>
        )}
        {categoryLabel && (
          <span className="text-base px-2 py-0.5 bg-background rounded text-muted-foreground">{categoryLabel}</span>
        )}
      </div>
    </div>
  );
}
