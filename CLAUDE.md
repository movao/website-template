# Website Template

Slim Template für Kundenwebsites. Claude baut pro Kunde alle Sections from scratch in `src/components/sections/`. Pro Kunde anpassen: `config.ts`, `config/design.ts`, `config/tracking.ts`, `app/page.tsx` (komplett neu schreiben mit den gebauten Sections).

## Skills (`.claude/skills/`)
- **`impeccable`** — Production-grade Frontend-Design (Paul Bakaus). Auto-loaded für Design-Tasks.
- **`tailwind-rules`** — Tailwind-Patterns + Performance-Guardrails. Auto-loaded für CSS/Layout.
- **`anti-slop`** — Verbotene AI-Tells (Phrasen, Namen, Glows, Defaults). Auto-loaded für Content/UI-Generation.

## Regeln

### Farben — nur Token-Klassen
Prefer `text-foreground`, `bg-primary`, `text-muted-foreground`, `bg-card`, `border-border` over hardcodierte Farben.
Nie: `text-white`, `bg-black`, `text-gray-*`, `bg-zinc-*`, Hex in Klassen.
Sekundäre Texte: `text-muted-foreground` (eigener Token, kein Opacity-Hack).

### Typografie — 8 Stufen
`text-display` → `text-title` → `text-logo` → `text-xl` → `text-hero-sub` → `text-subtitle` → `text-body-lg` → `text-base`
Body nie unter 16px. Kein `text-sm`/`text-xs` außer in Badges und Meta-Daten.

### Buttons & Inputs — min 48px Höhe
Prefer `LinkButton` für Links, `Button` für Formulare. Inputs: `border-border`.

### System-Klassen bevorzugen
`.section-heading`, `.section-subheading`, `.section-header`, `.card-title`, `.card-description`, `.badge-pill`, `.form-label`, `.section`, `.section-alt`, `.container-narrow`

### Template-Dateien nicht verändern
Sections, Komponenten, globals.css, profiles.ts bleiben unverändert. Eigenes CSS nur für Effekte die Utilities nicht können.

### Wenn etwas besser als Template-Feature wäre
Dem Entwickler melden — nicht selbst ins Template einbauen. Dokumentieren was fehlt und warum.
