'use client';

/**
 * Deaktiviert Scroll-Reveal Animationen in der Preview.
 * CSS-Regel statt JavaScript — funktioniert auch bei React-Re-Renders.
 */
export default function DisableAnimations() {
  return (
    <style>{`
      [data-animate] {
        opacity: 1 !important;
        transform: none !important;
      }
    `}</style>
  );
}
