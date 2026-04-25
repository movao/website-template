---
name: anti-slop
description: Forbidden patterns that immediately identify output as AI-generated. Bans visual tells (neon glows, custom cursors), content tells (Jane Doe, Acme, fake numbers), AI copywriting clichés, default Tailwind brand colors, and structural defaults that make every site look the same. Use when generating UI, content, copy, fake data, sample names, visual styling, or making structural section choices. Especially critical for client-facing websites.
---

# Anti-Slop — Forbidden AI-Generated Patterns

These patterns are dead giveaways of AI-generated interfaces and content. Avoid them unless the user explicitly requests otherwise.

## Visual & CSS

**No neon/outer glows.** Do not use default `box-shadow` glows or auto-generated glow effects. Use inner borders or subtle tinted shadows instead.

**Accent saturation: match the brand, not a default rule.** For dezente, professional brands (clinics, law, consulting) keep accent saturation moderate (50-75%) so it complements rather than dominates. For sport, kids, energy, fashion, music brands high saturation (80-100%) is correct and expected. Decide by brand character, not by a global cap.

**No custom mouse cursors.** Custom cursors are outdated, hurt performance, and break accessibility. Use the default system cursor.

## Tailwind Default Brand Colors — verboten als Markenfarbe

**Brand-Color darf NICHT eine Tailwind-Default-Palette sein.** Konkret verboten als Primary/Accent für die Marke:
- `bg-blue-500/600/700`, `text-indigo-*`, `bg-violet-*` (klassische SaaS-Defaults)
- Volle `slate-*`, `zinc-*`, `gray-*`, `neutral-*` als Brand-Color (das sind UI-Greys, keine Markenfarben)
- `bg-emerald-500`, `bg-rose-500`, `bg-amber-500` als 1:1-Standard-Akzent

**Stattdessen:** definiere eigene Hex-Werte als CSS-Tokens in der Design-Datei. Markenfarben sollen einen konkreten Charakter haben — gedeckt-warm, kühl-präzise, erdig, blass-elegant — nicht Tailwind-Default-aus-der-Box.

**Erlaubt:** Tailwind-Greys/Neutrals für UI-Chrome (Borders, Disabled-States, Hovers) — das ist Werkzeug, keine Markenaussage.

## Structural Defaults — bewusst variieren

Diese Patterns sind nicht falsch, aber wenn sie auf jeder Site auftauchen → generisch. Pro Section: nenne den naheliegendsten Default. Wähle ihn nicht „weil er der einfachste Weg ist" — wähle ihn nur wenn er für DIESE konkrete Marke spezifisch passt. Sonst wähle eine Alternative.

**Hero — Default vermeiden:** zentrierter h1 + Subline + zwei Buttons.
Alternativen: linksbündig mit asymmetrischem Bild, fullwidth-Bild mit Text-Overlay, Statement-only ohne Buttons, Split mit Bild rechts und Text links, Hero mit eingebettetem Formular, Hero mit Stats statt CTA-Buttons.

**Features — Default vermeiden:** 3-Spalten-Grid mit Icon oben, Titel mitte, Text unten.
Alternativen: alternierende Reihen Bild/Text vertikal gestapelt, vertikale Liste mit Trennlinien (editorial), asymmetrisches Bento mit verschiedenen Größen, ein Hero-Feature plus drei kleine, horizontaler Scroll, nummerierte Liste ohne Icons.

**Icons — Default vermeiden:** Lucide-Icon zentriert in gerundetem Quadrat mit Brand-Color-Background.
Alternativen: nackte Linien-Icons ohne Container, Icons mit Underline statt Box, Icons als großes Hintergrund-Watermark, Icon links neben Text statt oben drüber, statt Icon eine Nummerierung („01 / 02 / 03"), gar keine Icons sondern reine Typografie.

**Kontakt — Default vermeiden:** zentriertes vertikales Formular mit Name/E-Mail/Nachricht.
Alternativen: Split mit Adresse + Karte links und Formular rechts, große E-Mail-Adresse als Statement plus minimales Formular darunter, Kontakt als Karten-Set (Anrufen / Mailen / Vorbeikommen), Multi-Step, Inline-Felder horizontal angeordnet, Formular eingebettet in einen anderen Section-Typ (Hero / About).

**Footer — Default vermeiden:** vier Spalten Links + Copyright unten.
Alternativen: minimaler Footer (nur Logo + drei Links + Adresse), großer Footer mit Markenstatement und Bild, Footer als finaler CTA, Footer mit großer Typografie statt Linkliste, gar kein klassischer Footer sondern eine letzte Section.

**Regel:** wenn du den Default wählst, dann WEIL er für diese Marke spezifisch passt — und kannst das konkret begründen. Sonst variiere.

## Typography

**Serif fonts auf UI-Tools/Dashboards: nicht für UI-Labels.** Buttons, Form-Labels, Tooltips, Tabs, Tabellen-Header in Dashboards bleiben sans-serif. Serif darf für Editorial-Bereiche (Marketing-Pages, Blog-Posts, Brand-Headings) genutzt werden, auch innerhalb eines Tools.

## Content & Data — The "Jane Doe" Effect

**No generic placeholder names.** "John Doe", "Sarah Chan", "Jane Smith", "Alex Johnson" are banned. Invent creative, realistic-sounding names that feel like real people: varied cultural backgrounds, unusual first names, plausible combinations.

**No generic avatars.** Do not use standard SVG "egg" silhouettes or generic user icons as avatar placeholders. Use `https://i.pravatar.cc/` with varied seeds, or style distinctive initial-based avatars with varied background colors.

**Bei Statistiken & Demo-Daten: keine runden Fake-Zahlen.** `99.99%`, `50%`, `$1,000`, `123-456-7890` sind verbrannt. Nutze organisch wirkende Zahlen: `47.2%`, `1,247`, `+49 211 84 71 928`. **Ausnahme:** echte Preise (`49€/Monat`, `199€`) bleiben rund — das ist normal und wird nicht angefasst.

**No startup slop names.** "Acme", "Nexus", "SmartFlow", "SyncPro", "DataHub" are banned. Invent premium, contextual brand names that sound like they belong to real companies.

**No AI copywriting clichés.** These words and phrases are banned in all generated copy:

- "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer"
- "Delve", "Cutting-edge", "Revolutionize", "Empower", "Leverage"
- "Unlock your potential", "Take it to the next level", "In today's fast-paced world"

Write plain, specific language. Say what the thing actually does.

## External Resources

**No direct Unsplash links.** Unsplash URLs break frequently. Use `https://picsum.photos/seed/{descriptive_string}/800/600` for reliable, seedable placeholder images. For avatars, use `https://i.pravatar.cc/`.

**shadcn/ui — Tokens an die Marke anpassen.** Du darfst shadcn/ui-Komponenten nutzen. Aber: passe `--radius`, `--primary`, `--secondary`, Border-Style, Shadow-Stärke an die konkrete Marke an. Default-Shadcn-Tokens (rounded-md, slate-Farben, dezente Shadows) auf einer Kundenseite = sieht aus wie jede andere AI-Site.

## Emojis

No emojis anywhere: not in code, not in markup, not in text content, not in headings, not in alt text. Replace with proper icons (from the project's icon library) or clean SVG primitives.
