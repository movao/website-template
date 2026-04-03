'use client';

import { useState } from 'react';
import { colorWorlds } from '@/design/profiles';
import { cn } from '@/lib/utils';

const themes = {
  cleanSlate: colorWorlds.cleanSlate,
  midnight: colorWorlds.midnight,
} as const;

type ThemeKey = keyof typeof themes;

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
}

function applyTheme(colors: (typeof themes)[ThemeKey]) {
  const root = document.documentElement;
  const tokens: Record<string, string> = {
    background: colors.background,
    foreground: colors.foreground,
    'muted-foreground': colors.mutedForeground,
    primary: colors.primary,
    accent: colors.accent,
    muted: colors.muted,
    card: colors.card,
    border: colors.border,
    input: colors.input,
    ring: colors.ring,
    destructive: colors.destructive,
    success: colors.success,
  };

  Object.entries(tokens).forEach(([key, hex]) => {
    root.style.setProperty(`--color-${key}`, hex);
    root.style.setProperty(`--color-${key}-rgb`, hexToRgb(hex));
  });
}

export default function ThemeToggle() {
  const [active, setActive] = useState<ThemeKey>('cleanSlate');

  const toggle = (key: ThemeKey) => {
    setActive(key);
    applyTheme(themes[key]);
    document.documentElement.setAttribute('data-theme-dark', String(themes[key].isDark));
  };

  return (
    <div className="flex items-center gap-1 ml-auto shrink-0">
      <button
        onClick={() => toggle('cleanSlate')}
        className={cn(
          'w-6 h-6 rounded-full border-2 transition-all',
          active === 'cleanSlate'
            ? 'border-foreground scale-110'
            : 'border-transparent opacity-60 hover:opacity-100'
        )}
        style={{ backgroundColor: '#fafaf9' }}
        title="Clean Slate (hell)"
      />
      <button
        onClick={() => toggle('midnight')}
        className={cn(
          'w-6 h-6 rounded-full border-2 transition-all',
          active === 'midnight'
            ? 'border-foreground scale-110'
            : 'border-transparent opacity-60 hover:opacity-100'
        )}
        style={{ backgroundColor: '#0a0a0f' }}
        title="Midnight (dunkel)"
      />
    </div>
  );
}
