import {
  Lightning,
  ShieldCheck,
  ChatCircle,
  CursorClick,
  Sliders,
  Receipt,
  Star,
  Lightbulb,
  Code,
  Handshake,
  Heart,
  ArrowRight,
  Check,
  X,
  Phone,
  Envelope,
  MapPin,
  Clock,
  Users,
  Gear,
  House,
  Stethoscope,
  Rocket,
  Trophy,
  Target,
  ChartLine,
  ShoppingCart,
  Palette,
  Wrench,
  Leaf,
} from '@phosphor-icons/react/dist/ssr';
import type { ComponentType, SVGAttributes } from 'react';

type PhosphorProps = SVGAttributes<SVGSVGElement> & {
  size?: number | string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
};

const iconMap: Record<string, ComponentType<PhosphorProps>> = {
  lightning: Lightning,
  'shield-check': ShieldCheck,
  'chat-circle': ChatCircle,
  'cursor-click': CursorClick,
  sliders: Sliders,
  receipt: Receipt,
  star: Star,
  lightbulb: Lightbulb,
  code: Code,
  handshake: Handshake,
  heart: Heart,
  'arrow-right': ArrowRight,
  check: Check,
  x: X,
  phone: Phone,
  envelope: Envelope,
  'map-pin': MapPin,
  clock: Clock,
  users: Users,
  gear: Gear,
  house: House,
  stethoscope: Stethoscope,
  rocket: Rocket,
  trophy: Trophy,
  target: Target,
  'chart-line': ChartLine,
  'shopping-cart': ShoppingCart,
  palette: Palette,
  wrench: Wrench,
  leaf: Leaf,
};

const isPhosphorName = (icon: string) => /^[a-z][a-z0-9-]*$/.test(icon);

interface IconOrEmojiProps {
  icon: string;
  size?: number;
  weight?: 'regular' | 'bold' | 'fill' | 'light' | 'thin' | 'duotone';
  className?: string;
}

export default function IconOrEmoji({
  icon,
  size = 24,
  weight = 'regular',
  className = '',
}: IconOrEmojiProps) {
  if (isPhosphorName(icon)) {
    const Icon = iconMap[icon];
    if (Icon) {
      return <Icon size={size} weight={weight} className={className} />;
    }
    return <span className={`inline-block ${className}`} style={{ width: size, height: size }} />;
  }

  return <span className={className}>{icon}</span>;
}
