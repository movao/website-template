---
name: anti-slop
description: Forbidden patterns that immediately identify output as AI-generated. Bans visual tells (neon glows, custom cursors, default shadcn), content tells (Jane Doe, Acme, fake numbers), and AI copywriting clichés. Use when generating UI, content, copy, fake data, sample names, or visual styling. Especially critical for client-facing websites and content.
---

# Anti-Slop — Forbidden AI-Generated Patterns

These patterns are dead giveaways of AI-generated interfaces and content. Avoid them unless the user explicitly requests otherwise.

## Visual & CSS

**No neon/outer glows.** Do not use default `box-shadow` glows or auto-generated glow effects. Use inner borders or subtle tinted shadows instead.

**No oversaturated accents.** Keep accent color saturation below 80%. Desaturate accents so they blend elegantly with neutral bases instead of screaming for attention.

**No custom mouse cursors.** Custom cursors are outdated, hurt performance, and break accessibility. Use the default system cursor.

## Typography

**No serif fonts on dashboards or software UIs.** Dashboard and software interfaces require sans-serif exclusively. Serif is for editorial content, marketing pages, and brand-driven sites — not for tools.

## Content & Data — The "Jane Doe" Effect

**No generic placeholder names.** "John Doe", "Sarah Chan", "Jane Smith", "Alex Johnson" are banned. Invent creative, realistic-sounding names that feel like real people: varied cultural backgrounds, unusual first names, plausible combinations.

**No generic avatars.** Do not use standard SVG "egg" silhouettes or generic user icons as avatar placeholders. Use `https://i.pravatar.cc/` with varied seeds, or style distinctive initial-based avatars with varied background colors.

**No fake round numbers.** Avoid predictable data like `99.99%`, `50%`, `$1,000`, or phone numbers like `123-456-7890`. Use organic, messy numbers that feel real: `47.2%`, `$1,247`, `+1 (312) 847-1928`.

**No startup slop names.** "Acme", "Nexus", "SmartFlow", "SyncPro", "DataHub" are banned. Invent premium, contextual brand names that sound like they belong to real companies.

**No AI copywriting clichés.** These words and phrases are banned in all generated copy:

- "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer"
- "Delve", "Cutting-edge", "Revolutionize", "Empower", "Leverage"
- "Unlock your potential", "Take it to the next level", "In today's fast-paced world"

Write plain, specific language. Say what the thing actually does.

## External Resources

**No direct Unsplash links.** Unsplash URLs break frequently. Use `https://picsum.photos/seed/{descriptive_string}/800/600` for reliable, seedable placeholder images. For avatars, use `https://i.pravatar.cc/`.

**shadcn/ui: never in default state.** You may use shadcn/ui components, but never ship them with default styling. Customize border-radius, colors, shadows, and spacing to match the project aesthetic. Default shadcn looks like every other AI-generated app.

## Emojis

No emojis anywhere: not in code, not in markup, not in text content, not in headings, not in alt text. Replace with proper icons (from the project's icon library) or clean SVG primitives.
