---
name: design-dials
description: Three adjustable dials that control layout boldness, motion intensity, and visual density. Values are set per project via the briefing prompt. Defines what each level means and which patterns are allowed or banned at each threshold.
---

# Design Dials

## Active Configuration

```
DESIGN_VARIANCE:  4    (1 = symmetric/safe,  10 = asymmetric/experimental)
MOTION_INTENSITY: 3    (1 = static,          10 = orchestrated/cinematic)
VISUAL_DENSITY:   4    (1 = art gallery/airy, 10 = cockpit/packed)
```

These are the defaults. The user may override them in their prompt — always respect explicit overrides. Use these values as global variables that drive the rules below.

---

## DESIGN_VARIANCE

Controls how conventional or experimental the layout is.

**Level 1–3 — Predictable:**
Centered compositions, symmetric 12-column grids, consistent paddings. Clean, safe, corporate. Flexbox `justify-center` is fine. Everything aligns on a visible grid.

**Level 4–7 — Offset:**
Introduce controlled asymmetry. Overlapping elements with negative margins (`-mt-8`). Varied image aspect ratios side by side (4:3 next to 16:9). Left-aligned headers over center-aligned content. Text blocks that don't fill the full width.

**Level 8–10 — Asymmetric:**
Masonry layouts. CSS Grid with fractional units (`grid-template-columns: 2fr 1fr 1fr`). Massive empty zones as design elements (`pl-[20vw]`). Deliberately broken grids. Strong visual tension.

**Mobile override:** At level 4 and above, any asymmetric layout applied at `md:` or wider must collapse to a strict single-column layout (`w-full px-4 py-8`) on viewports below 768px. No horizontal scrolling, no exceptions.

---

## MOTION_INTENSITY

Controls how much animation and movement the interface has.

**Level 1–3 — Static:**
No automatic animations. CSS `:hover` and `:active` state changes only. Color transitions, subtle opacity shifts. Nothing moves on its own.

**Level 4–7 — Fluid:**
Smooth transitions on interactive elements using specific properties (`transition-colors`, `transition-transform`, `transition-opacity`) with `duration-300` and custom easing (`cubic-bezier(0.16, 1, 0.3, 1)`). Staggered load-in animations using `animation-delay` cascades. Animate only `transform` and `opacity`. Use `will-change: transform` sparingly and only during active animation.

**Level 8–10 — Orchestrated:**
Scroll-triggered reveals and parallax effects. Staggered entrance sequences: `animation-delay: calc(var(--index) * 100ms)` for waterfall reveals. Page-load choreography where sections appear in deliberate sequence. Use Intersection Observer for scroll-based triggers — never `window.addEventListener('scroll')`.

---

## VISUAL_DENSITY

Controls how much content fits on a single screen.

**Level 1–3 — Art Gallery:**
Generous whitespace. Large section gaps. One idea per screen. Feels expensive, luxurious, unhurried. Padding is a design element, not wasted space.

**Level 4–7 — Standard:**
Normal spacing for websites and apps. Balanced content-to-space ratio. Neither sparse nor packed.

**Level 8–10 — Cockpit:**
Minimal padding. No card containers — use `border-t`, `divide-y`, or pure negative space to separate data. Everything compact and scannable. Use `font-mono` for all numbers and metrics. This mode is rarely used for agency websites but appropriate for dashboards and data-heavy interfaces.

---

## Threshold Rules

These rules resolve conflicts between Impeccable's general guidelines and specific layout decisions. The dial values determine which patterns are allowed.

### Centered Hero Sections
- **VARIANCE 1–5:** Centered hero layouts are allowed.
- **VARIANCE 6+:** Centered heroes are banned. Use split-screen (50/50), left-aligned content with right-aligned asset, or asymmetric whitespace compositions instead.

### Three Equal Card Columns
- **VARIANCE 1–4:** Three equal cards in a row are allowed.
- **VARIANCE 5–6:** Alternatives are preferred — use 2-column zig-zag, asymmetric grid, horizontal scroll, or masonry. Equal cards are acceptable only if there is a strong content reason.
- **VARIANCE 7+:** Three equal card columns are banned. Always use an alternative layout.

### Card Containers vs. Negative Space
- **DENSITY 1–7:** Card containers are allowed where elevation communicates visual hierarchy. When using cards, tint the shadow to the background hue.
- **DENSITY 8+:** Generic card containers are banned. Group content with `border-t`, `divide-y`, or negative space only. Data metrics should breathe without being boxed in.
