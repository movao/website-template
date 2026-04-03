import { siteConfig } from '@/config';
import ImagePlaceholder from './ImagePlaceholder';
import { cn } from '@/lib/utils';

interface ImageSlotProps {
  src?: string;
  alt?: string;
  position: string;
  label: string;
  briefing?: string;
  format?: 'landscape' | 'portrait' | 'square';
  aspect?: string;
  priority?: 'must-have' | 'nice-to-have' | 'can-use-stock';
  category?: 'photo-custom' | 'photo-stock' | 'illustration';
  className?: string;
  gradientClass?: string;
}

export default function ImageSlot({
  src,
  alt,
  gradientClass = 'bg-gradient-to-br from-primary/20 to-accent/10',
  className,
  ...placeholderProps
}: ImageSlotProps) {
  const imageMode = (siteConfig.imageMode ?? 'none') as string;

  if (src) {
    return (
      <div className={cn(className)}>
        <img
          src={src}
          alt={alt ?? placeholderProps.label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  if (imageMode === 'placeholders') {
    return <ImagePlaceholder {...placeholderProps} className={className} />;
  }

  return <div className={cn(className, gradientClass)} />;
}
