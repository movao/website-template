---
name: tailwind-rules
description: Concrete Tailwind CSS implementation rules, bug fixes, and performance guardrails. Complements general design principles with specific class-level constraints. Use when writing or reviewing Tailwind classes, CSS, layouts, animations, forms, images, or responsive design.
---

# Tailwind Implementation Rules & Performance Guardrails

These rules apply to every project regardless of style, industry, or design dial settings.

## Viewport & Layout

**Viewport stability:** Never use `h-screen` for full-height sections. Always use `min-h-[100dvh]` — `h-screen` causes layout jumping on iOS Safari due to the dynamic toolbar.

**Grid over flex-math:** Never use `w-[calc(33%-1rem)]` or similar flexbox percentage calculations. Use CSS Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`. Grid handles gutters and column sizing without math.

**Container constraint:** Contain page layouts with `max-w-[1400px] mx-auto` or `max-w-7xl`. Content must never stretch edge-to-edge on wide screens.

## Typography

**Body text readability:** Default body text to `text-base leading-relaxed max-w-[65ch]`. The `65ch` cap prevents lines from becoming too long to scan comfortably.

## Responsive

**Standard breakpoints:** Use Tailwind's built-in breakpoints consistently: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Do not invent custom breakpoints unless there is a specific reason.

**Mobile collapse:** For asymmetric layouts above `md:`, fall back to a strict single-column layout on viewports below 768px. Use `w-full px-4 py-8` as the mobile baseline. Horizontal scrolling on mobile is never acceptable.

## Performance Guardrails

**Animation properties:** Never animate `top`, `left`, `width`, `height`, `padding`, or `margin`. Animate exclusively via `transform` and `opacity` — these are GPU-composited and do not trigger layout recalculation.

**GPU repaint prevention:** Apply grain, noise, or texture overlays exclusively to `fixed inset-0 z-50 pointer-events-none` pseudo-elements. Never apply them to scrolling containers — this causes continuous GPU repaints and kills mobile performance.

**Z-index discipline:** Never set arbitrary z-index values (`z-50`, `z-10`) without a systemic reason. Use z-index only for defined layer contexts and follow a semantic scale:

- Content: `z-0`
- Dropdown: `z-10`
- Sticky header: `z-20`
- Modal backdrop: `z-30`
- Modal: `z-40`
- Toast/notification: `z-50`
- Tooltip: `z-[60]`

**will-change:** Do not apply `will-change` preemptively. Use it only when animation is imminent (e.g., on `:hover` or when an `.animating` class is active). Remove it after the animation completes.

## Shadows & Materiality

**Glassmorphism implementation:** When glassmorphism is appropriate, go beyond plain `backdrop-blur`. Add a 1px inner border (`border-white/10`) and a subtle inner shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) to simulate physical edge refraction. Without these, glass effects look flat and fake.

**Tinted shadows:** When using shadows, tint them toward the background hue. Generic gray `shadow-md` or `shadow-lg` on colored backgrounds looks disconnected. Use custom shadow values with color: `shadow-[0_4px_12px_rgba(R,G,B,0.08)]` matching the section's palette.

## Forms

**Form field structure:** Label sits above the input. Optional helper text between label and input. Error text below the input. Use `gap-2` between elements within a form field group. This is the standard — do not experiment with inline labels or floating labels unless explicitly requested.

## type="button" on Non-Submit Buttons

Buttons inside a `<form>` default to `type="submit"` — clicking a toggle, accordion, or modal close button accidentally submits the form. Always add `type="button"` on buttons that are not meant to submit.

- BAD: `<button onClick={toggleMenu}>Menu</button>`
- GOOD: `<button type="button" onClick={toggleMenu}>Menu</button>`

## Transitions

Never use `transition-all` — it animates every property change (background, box-shadow, border, padding), causing unpredictable visual artifacts and unnecessary GPU work. Always specify what to animate:

- GOOD: `transition-colors duration-300`
- GOOD: `transition-transform duration-300`
- GOOD: `transition-opacity duration-300`
- BAD: `transition-all duration-300`

## Flex Children & Text Overflow

Flex items have `min-width: auto` by default — `truncate` will not work without `min-w-0` on the flex child. Add `shrink-0` on icons and images inside flex containers to prevent them from squishing.

- BAD: `<div class="flex"><span class="truncate">Long text</span></div>`
- GOOD: `<div class="flex"><span class="min-w-0 truncate">Long text</span></div>`
- BAD: `<div class="flex"><img .../><span>Text</span></div>`
- GOOD: `<div class="flex"><img class="shrink-0" .../><span>Text</span></div>`

## Images: Prevent Layout Shift

Responsive images need explicit `width` and `height` attributes or `aspect-ratio` to prevent Cumulative Layout Shift (Core Web Vital). Use `object-cover` in fixed containers to prevent distortion.

- BAD: `<img src="..." class="w-full" />`
- GOOD: `<img src="..." width="800" height="600" class="w-full object-cover" />`
- GOOD: `<div class="aspect-video"><img src="..." class="w-full h-full object-cover" /></div>`

## scroll-padding-top for Sticky Headers

When using anchor links with a sticky header, the header covers the target section. Fix on the html element, adjust value to header height:

- GOOD: `<html class="scroll-pt-20">`

## overscroll-contain on Modals

Without `overscroll-contain`, background content scrolls through when reaching the end of modal content (common mobile bug).

- GOOD: `<div class="overflow-y-auto overscroll-contain">Modal content</div>`

## backdrop-blur: Caution on Large Areas

`backdrop-blur` on small elements (navbar, tooltip) is performant. On full-screen overlays it causes heavy GPU load on mobile — frame drops, heat, battery drain. Prefer semi-transparent backgrounds without blur for full-screen overlays. If full-screen blur is needed: test on mobile devices for performance.

- Okay: `<nav class="backdrop-blur-md bg-white/80">` (navbars)
- Caution: `<div class="fixed inset-0 backdrop-blur-md bg-black/50">` (test on mobile first)
- Safe: `<div class="fixed inset-0 bg-black/80">` (full-screen overlays)

## text-wrap: balance on Headings

Prevents typographic orphans — single words alone on the last line of a heading.

- GOOD: `<h2 class="text-3xl text-balance">Heading text</h2>`

## sr-only on Icon-Only Buttons

Every button containing only an icon is invisible to screen readers without a text label.

- BAD: `<button><IconMenu /></button>`
- GOOD: `<button><IconMenu /><span class="sr-only">Open menu</span></button>`

## Optical Alignment

Mathematical centering is not optical centering. The human eye perceives visual weight differently from geometric coordinates. Apply 1–2px manual corrections in these cases:

- **Play icons in circles:** Shift the triangle ~1–2px toward the pointed end (usually right) to compensate for the heavy base
- **Icons next to text:** Icons often appear to sit too low on the text baseline — nudge up 1px with `-translate-y-px`
- **Button labels with trailing icons:** The icon side appears lighter — reduce padding on the icon side by 1–2px or use `pl-5 pr-4` instead of `px-5`

## prefers-reduced-motion

Scroll animations and larger transitions need a `motion-reduce:` counterpart. Required for WCAG compliance — users with vestibular disorders set this in their OS. Applies to scroll triggers and orchestrated animations, not simple hover states like `hover:scale-105`.

- GOOD: `<div class="animate-fade-in motion-reduce:animate-none">`
- GOOD: `<div class="transition-transform duration-500 motion-reduce:transition-none">`
