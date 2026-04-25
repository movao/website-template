import IconOrEmoji from './IconOrEmoji';
import { cn } from '@/lib/utils';

type IconStyle = 'filledBox' | 'ring' | 'naked';

interface IconWrapperProps {
  icon: string;
  size?: number;
  className?: string;
  style?: IconStyle;
}

export default function IconWrapper({
  icon,
  size = 24,
  className = '',
  style = 'ring',
}: IconWrapperProps) {
  if (style === 'filledBox') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-primary transition-colors',
        'group-hover:bg-primary group-hover:text-background',
        className
      )}>
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>
    );
  }

  if (style === 'ring') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary transition-colors',
        'group-hover:border-primary group-hover:bg-primary group-hover:text-background',
        className
      )}>
        <IconOrEmoji icon={icon} size={size} weight="regular" />
      </span>
    );
  }

  // naked
  return (
    <span className={cn(
      'inline-flex items-center justify-center text-primary transition-colors',
      'group-hover:text-accent',
      className
    )}>
      <IconOrEmoji icon={icon} size={size + 4} weight="regular" />
    </span>
  );
}
