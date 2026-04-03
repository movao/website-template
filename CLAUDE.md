# Website Template

Dieses Repository ist ein **universelles Website-Template** das für Kundenwebsites geklont wird. Claude überschreibt `config.ts`, `config/design.ts`, `config/tracking.ts` und `page.tsx` individuell pro Kunde.

## Dokumentation

- **`specs/usage.md`** — Section-Varianten, Props, Design-System, Konfiguration. **Immer zuerst lesen.**
- **`specs/refinements.md`** — Ideenkatalog für visuelle Verfeinerungen pro Kundenwebsite. Lesen wenn die Basis steht und verfeinert wird.

## Design-System Regeln

### Farben
- **Keine hardcodierten Farben** — nur Token-Klassen (`text-foreground`, `bg-primary`, `text-muted-foreground`, etc.)
- `text-white`, `bg-black`, `text-gray-*`, `bg-zinc-*` etc. sind verboten
- Ausnahmen: `text-amber-400` für Sternebewertungen, `bg-black/60` in Overlay-Kontexten
- Sekundäre Texte: `text-muted-foreground` — kein Opacity-Hack (`text-foreground/60`)

### Typografie
- Body-Text nie unter 16px (`text-base`)
- 8-stufige Typoskala: `text-display`, `text-title`, `text-logo`, `text-xl`, `text-hero-sub`, `text-subtitle`, `text-body-lg`, `text-base`
- Keine `text-sm` oder `text-xs` außer in Badges und Meta-Daten (Blog-Datum etc.)
- Rollen-Zuweisung:
  - `text-display` → Hero h1, Stat-Zahlen
  - `text-title` → Section h2, CTA-Headlines
  - `text-logo` → Logo-Text (Nav, Footer)
  - `text-xl` → Testimonial-Quotes, Feature-Alt Titel, Pricing-Plan-Namen
  - `text-hero-sub` → Hero-Sublines
  - `text-subtitle` → Section-Subheadings, Card-Titel, CTA-Beschreibungen
  - `text-body-lg` → Lead-Absätze (About), Footer-Überschriften
  - `text-base` → Card-Beschreibungen, Nav/Footer-Links, Badges, Labels

### Buttons & Inputs
- Mindesthöhe 48px
- Buttons: `LinkButton` Komponente mit Variants (`default`, `outline`, `ghost`, `inverse`, `outline-inverse`)
- Inputs: `border-border` (nicht `border-input`)

### System-Klassen verwenden
- `.section-heading`, `.section-subheading`, `.section-header` für Section-Headings
- `.card-title`, `.card-description` für Karten-Inhalte
- `.badge-pill` für Badges
- `.form-label` für Formular-Labels
- `.btn-primary`, `.btn-secondary` für CSS-Buttons
- `.section`, `.section-alt`, `.container-narrow` für Layout

### Spacing
- 8px-Raster (8, 16, 24, 32, 40, 48, 64, 96px)
- Section-Heading → Subheading: 8px (mb-2)
- Heading-Block → Content: 40px (mb-10)
- Section-Padding: responsiv via clamp (48px Mobile → 96px Desktop)

## Wie eine Kundenwebsite gebaut wird

### 1. Template klonen
Neues Repository aus diesem Template erstellen.

### 2. config.ts anpassen
Firmendaten eintragen: Name, Kontakt, Adresse, Social Media, Navigation.

### 3. config/design.ts anpassen
Design-Profil wählen: Font-Pairing, Farbwelt, Spacing, Border-Radius, Icon-Stil. Alle Optionen stehen in `src/design/profiles.ts`.

**12 Font-Pairings:** craft, clarity, refined, modern, elegant, literary, startup, narrative, neutral, therapeutic, bold, friendly

### 4. page.tsx zusammenstellen
Sections in gewünschter Reihenfolge zusammenstellen. Varianten und Props basierend auf Branche, Zielgruppe und gewünschter Wirkung wählen. Siehe `specs/usage.md` für alle Optionen.

### 5. config/tracking.ts anpassen
Tracking-IDs eintragen wenn der Kunde Analytics/Marketing nutzt. Alle Felder leer = einfacher Cookie-Hinweis. Ein Feld gefüllt = voller Consent-Manager mit Kategorien. Scripts werden NUR bei User-Consent geladen.

### 6. Impressum & Datenschutz anpassen
Template-Seiten unter `/impressum` und `/datenschutz` existieren mit siteConfig-Daten. Inhalte pro Kunde prüfen und ggf. anpassen. Datenschutz-Seite passt sich automatisch an tracking.ts an.

### 7. Verfeinern
Visuelle Details anpassen: Animationen, Abstände, Farbnuancen. Siehe `specs/refinements.md` für Ideen.

### 8. Bilder einsetzen
`ImageSlot` Komponente akzeptiert `src` Prop für echte Bilder. Ohne `src` zeigt ImageSlot automatisch einen Gradient-Platzhalter.

## Was Claude NICHT tun soll

- **Template-Dateien nicht verändern** — Sections, Komponenten, globals.css, profiles.ts bleiben unverändert
- **Keine Workarounds** — wenn etwas nicht funktioniert, Ursache finden statt Symptom behandeln
- **Keine Inline-Overrides auf System-Klassen** — nicht `.card-title` mit zusätzlichen Farb-Klassen überschreiben
- **Tailwind-Utilities bevorzugen** — eigenes CSS nur für Animationen oder Effekte die mit Utilities nicht machbar sind
- **Features/Services nicht doppeln** — FeaturesGrid etc. für beides nutzen

## Wann Claude Bescheid geben soll

- Wenn beim Verfeinern auffällt dass etwas **besser als Template-Feature** (Variante oder Prop) funktionieren würde statt als einmalige Anpassung — dem Entwickler melden, nicht selbst ins Template einbauen
- Wenn ein Design-Token fehlt oder nicht zur Farbwelt passt
- Wenn eine Section mit einer bestimmten Farbwelt nicht gut aussieht

## Dateistruktur

```
src/
├── app/
│   ├── layout.tsx              ← Root-Layout (Theme, Navigation, Footer, ConsentManager)
│   ├── page.tsx                ← Homepage (Sections zusammenstellen)
│   ├── globals.css             ← Design-System CSS (8-stufige Typoskala)
│   ├── impressum/page.tsx      ← Impressum (Template mit siteConfig-Daten)
│   ├── datenschutz/page.tsx    ← Datenschutz (dynamisch basierend auf tracking.ts)
│   └── preview/                ← Preview-System (nur Entwicklung)
├── components/
│   ├── Navigation.tsx          ← Standard-Nav (Props: sticky, transparent, megaMenu, etc.)
│   ├── NavigationCentered.tsx  ← Zentrierte Nav-Variante
│   ├── MobileMenu.tsx          ← Fullscreen Mobile-Menü (von beiden Navs genutzt)
│   ├── TopBar.tsx              ← Announcement-Bar über der Nav
│   ├── Footer.tsx              ← Standard-Footer (Props: bg, showSocial, showContact)
│   ├── FooterMinimal.tsx       ← Einzeilig: Logo | Links | Copyright
│   ├── FooterExtended.tsx      ← Mit Newsletter, mehrere Spalten
│   ├── FooterCentered.tsx      ← Alles zentriert gestapelt
│   ├── ConsentManager.tsx      ← DSGVO Consent-Banner (automatisch einfach/voll)
│   ├── TrackingScripts.tsx     ← Bedingte Script-Einbindung (nur bei Consent)
│   ├── CookieSettingsLink.tsx  ← Footer-Link für Cookie-Einstellungen
│   ├── ScrollReveal.tsx        ← Scroll-Animationen
│   └── ui/                     ← Wiederverwendbare UI-Komponenten
│       ├── link-button.tsx     ← LinkButton (<a> als Button)
│       ├── IconWrapper.tsx     ← Icon mit Stil (ring/filledBox/naked)
│       ├── ImageSlot.tsx       ← Bild mit Fallback
│       ├── Carousel.tsx        ← Auto-Scroll Desktop / Touch-Scroll Mobile
│       ├── ParallaxImage.tsx   ← Parallax-Bild
│       └── ...
├── sections/                   ← Alle Section-Varianten (37 total)
│   ├── hero/                   ← Centered, Split, ImageOverlay, Minimal
│   ├── features/               ← Grid, Alternating, Centered, Highlight
│   ├── cta/                    ← Banner, Centered
│   ├── testimonials/           ← Grid, Highlight
│   ├── contact/                ← Simple, Split, Centered
│   ├── about/                  ← Split, Centered
│   ├── team/                   ← Grid, Cards, Alternating
│   ├── faq/                    ← Accordion
│   ├── stats/                  ← Grid, Highlight
│   ├── process/                ← Steps, Timeline, List
│   ├── blog/                   ← Grid, List
│   ├── pricing/                ← Cards, ComparisonTable
│   ├── newsletter/             ← Signup
│   ├── jobs/                   ← List
│   ├── gallery/                ← Grid
│   ├── partners/               ← LogoBar
│   ├── opening-hours/          ← Table
│   └── map/                    ← Embed (OpenStreetMap, DSGVO-konform)
├── config.ts                   ← Website-Daten (pro Kunde anpassen)
├── config/
│   ├── design.ts               ← Design-Profil (pro Kunde anpassen)
│   └── tracking.ts             ← Tracking-IDs (pro Kunde anpassen, leer = kein Tracking)
├── design/
│   ├── profiles.ts             ← Alle Design-Optionen (nicht ändern)
│   ├── apply-theme.ts          ← Theme-CSS + Font-Loading Generator (nicht ändern)
│   └── font-registry.ts        ← Font-Dateipfade (nicht ändern)
├── data/demo.ts                ← Demo-Daten (Fallback ohne CMS)
└── lib/
    ├── utils.ts                ← cn() Helper mit tailwind-merge
    ├── consent.ts              ← Consent-Logik (nicht ändern)
    ├── sanity.ts               ← Sanity CMS Client
    └── jsonld.ts               ← SEO Schema.org Markup
```

## Overlay-System

Für Sections mit dunklem Bild-Overlay (z.B. HeroImageOverlay) gibt es CSS-Klassen die automatisch zwischen hellen und dunklen Farbwelten wechseln: `.overlay-bg`, `.overlay-text`, `.overlay-text-muted`, `.overlay-badge`. Gesteuert über `data-theme-dark` auf `<html>`.

## Font-System

17 Fonts lokal gehostet (Fontshare + Google Fonts), DSGVO-konform. `apply-theme.ts` generiert `@font-face` nur für die 2 aktiven Fonts des gewählten Pairings. Alle anderen Font-Dateien existieren in `/public/fonts/` aber werden nicht geladen.

## DSGVO/Consent-System

- `config/tracking.ts` — Einzige Stelle für Tracking-IDs
- Alle Felder leer → einfacher "Verstanden"-Banner
- Ein Feld gefüllt → voller Consent-Manager mit Kategorien
- Scripts werden nur bei User-Consent geladen
- Footer "Cookie-Einstellungen" Link erscheint nur bei aktivem Tracking
- Datenschutz-Seite passt sich dynamisch an konfigurierte Tools an

## Preview-System

Unter `/preview` können alle Section-Varianten mit interaktiven Toggles getestet werden. Theme-Toggle (cleanSlate/midnight) rechts in der Preview-Navigation. Nur für Entwicklung — wird nicht auf Kundenwebsites deployed.
