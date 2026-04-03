# Website Template

Universelles Template für Kundenwebsites. Pro Kunde anpassen: `config.ts`, `config/design.ts`, `config/tracking.ts`, `app/page.tsx`.

## Dokumentation
- **`specs/usage.md`** — Section-Varianten, Props, Design-System
- **`specs/refinements.md`** — Gestaltungsmöglichkeiten und Ideen

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
