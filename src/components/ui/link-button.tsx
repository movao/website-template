import { cn } from '@/lib/utils';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'inverse' | 'outline-inverse';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function LinkButton({
  href,
  children,
  variant = 'default',
  size = 'default',
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center font-medium text-base transition-colors rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring/50 min-h-[48px]',
        variant === 'default' && 'bg-primary text-background hover:bg-accent',
        variant === 'outline' && 'border-2 border-primary text-primary hover:bg-muted',
        variant === 'ghost' && 'text-muted-foreground hover:text-foreground',
        variant === 'inverse' && 'bg-background text-primary hover:bg-background/90',
        variant === 'outline-inverse' && 'border-2 border-background/50 text-background hover:border-background hover:bg-background/10',
        size === 'sm' && 'px-6 py-3',
        size === 'default' && 'px-8 py-3',
        size === 'lg' && 'px-10 py-4 text-body-lg',
        className,
      )}
    >
      {children}
    </a>
  );
}
