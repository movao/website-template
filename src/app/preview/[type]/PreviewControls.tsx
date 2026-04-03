'use client';

import { cn } from '@/lib/utils';

interface ToggleOption {
  label: string;
  value: string;
}

interface ToggleProps {
  label: string;
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

export function Toggle({ label, options, value, onChange }: ToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground">{label}:</span>
      <div className="flex gap-1">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              'px-3 py-1.5 text-base rounded-lg transition-colors',
              value === opt.value
                ? 'bg-primary text-background'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2"
    >
      <span className={cn(
        'w-10 h-6 rounded-full transition-colors relative shrink-0',
        checked ? 'bg-primary' : 'bg-muted'
      )}>
        <span className={cn(
          'absolute top-1 w-4 h-4 rounded-full bg-background transition-transform',
          checked ? 'left-5' : 'left-1'
        )} />
      </span>
      <span className="text-base text-muted-foreground">{label}</span>
    </button>
  );
}

export function ControlBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-narrow py-4 overflow-x-auto border-b border-border">
      <div className="flex items-center gap-4 min-w-max">
        {children}
      </div>
    </div>
  );
}
