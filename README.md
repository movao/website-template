# Website Template

Next.js 16 + Tailwind CSS 4 + Sanity CMS Template mit konfigurierbarem Design-System.

## Setup

```bash
npm install
npm run dev
```

## Design-System

- **Profiles:** `src/design/profiles.ts` — Fonts, Farben, Layouts, Spacings, Radius, Icon-Styles
- **Theme:** `src/design/apply-theme.ts` — Generiert CSS Custom Properties
- **Config:** `src/config/design.ts` — Aktives Profil
- **Fonts:** Lokal in `public/fonts/` (DSGVO-konform)

## Sections

Slim Template ohne vorgefertigte Sections. Claude Code baut pro Kunde alle Sections from scratch in `src/components/sections/`. Siehe `CLAUDE.md` für die Regeln.
