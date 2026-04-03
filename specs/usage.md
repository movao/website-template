# Template Usage Guide

Referenz für Section-Varianten, Props und Konfiguration. Nutze dies als Werkzeugkatalog — nicht als Anleitung wie du designen sollst.

---

## Designprinzipien (Referenz)

Diese Prinzipien sind keine Vorschriften. Nutze sie als Prüfsteine für dein eigenes Konzept.

- **Weißraum** — Leerer Raum gibt Inhalten Bedeutung. Weniger kann stärker wirken.
- **Hierarchie** — Das Wichtigste ist das Größte. Headline > Subheading > Body > Meta.
- **Kontrast** — Abwechslung zwischen dichten und luftigen, farbigen und neutralen Sections.
- **Konsistenz** — Runde Ecken überall oder nirgends. Ring-Icons überall oder nirgends.
- **Zurückhaltung** — Effekte wirken weil der Rest ruhig ist.

### Section-Auswahl

Die Variante ergibt sich aus dem Zusammenspiel von Inhalt, Charakter und Position auf der Seite — nicht aus einer starren Regel. Orientierungshilfen:

**Hero** — Was ist der erste Eindruck?
- Bild soll Stimmung setzen → HeroImageOverlay
- Produkt/Leistung zeigen → HeroSplit
- Botschaft im Fokus → HeroCentered
- Statement, mutig, typografisch → HeroMinimal

**Features/Services** — Wie viel gibt es zu zeigen?
- Überblick über mehrere Punkte → FeaturesGrid
- Jeder Punkt verdient Aufmerksamkeit → FeaturesAlternating
- Ein Thema vertiefen → FeaturesHighlight
- Visuelles Produkt im Zentrum → FeaturesCentered

**Team** — Wie persönlich soll es wirken?
- Jede Person ausführlich vorstellen → TeamAlternating
- Professionell mit Bildern → TeamCards
- Übersicht, viele Personen → TeamGrid

**Testimonials** — Wie stark ist das Vertrauen?
- Ein überzeugendes Zitat reicht → TestimonialHighlight
- Breite an Stimmen zeigen → TestimonialsGrid

**Contact** — Wie niedrig soll die Hürde sein?
- Minimal, schnell → ContactSimple
- Persönlich mit allen Infos → ContactSplit
- Formell, strukturiert → ContactCentered

### Seitenrhythmus

- **Hintergründe alternieren** — `bg-background` und `section-alt` im Wechsel. Nicht strikt jede zweite, aber keine drei gleichen hintereinander.
- **Layoutrichtung wechseln** — nach einem Grid etwas Lineares, nach zentriertem Text etwas Linksbündiges.
- **Intensität variieren** — nach einer visuell intensiven Section (HeroImageOverlay, Parallax) eine ruhige Section (StatsGrid, ContactSimple).
- **CTA gezielt platzieren** — dort wo der Besucher überzeugt genug ist zu handeln. Nicht nach jeder Section.

### Vielfalt über Kundenwebsites

- **Farbwelt + Font = Charakter** — midnight + statement fühlt sich komplett anders an als terra + warmth. Allein diese Kombination schafft enorme Vielfalt.
- **Nicht jede Website mit HeroCentered starten** — bewusst verschiedene Hero-Varianten für verschiedene Kunden.
- **Refinements als Signature-Elemente** — eine Website bekommt Gradient-Text als visuelles Merkmal, eine andere eine Grain-Textur, eine dritte gar keinen Effekt. Ein Refinement das überall auftaucht ist kein Refinement mehr.
- **Branchenmatrix respektieren** — `profiles.ts` definiert welche Fonts und Farben zu welcher Branche passen. Diese Regeln sind bewusst gewählt.
- **Kundenreferenzen als Stimmungsvorlage** — wenn der Kunde Websites zeigt die ihm gefallen, den visuellen Charakter (nicht das Layout) als Orientierung nutzen.

### Qualität

- Jeder Text lesbar — Kontrast prüfen, besonders auf farbigen Hintergründen und Overlays
- Jede Section in der gewählten Farbwelt testen — helle UND dunkle Farbwelten
- Mobile muss eigenständig gut aussehen — nicht nur "funktionieren", sondern gut designt sein
- Kein Button unter 48px, kein Text unter 16px (außer Badges)
- Bilder mit sinnvollem `alt`-Text
- Seite als Ganzes betrachten — nicht nur einzelne Sections

---

## Komponenten-Wiederverwendung

### Features = Services
Es gibt keine separate Services-Komponente. Für Leistungen/Services dieselben Feature-Varianten nutzen:
- `FeaturesGrid` — Karten-Grid für 3-6 Leistungen
- `FeaturesHighlight` — Split-Layout für detaillierte Leistungsbeschreibung
- `FeaturesAlternating` — Abwechselnde Text/Bild-Reihen für ausführliche Darstellung
- `FeaturesCentered` — Bild mittig, Leistungen links und rechts

### FeaturesHighlight für Stats
FeaturesHighlight `default` Layout kann auch für Stats eingesetzt werden: Heading + Subline oder Bild links, 4 Stats als Highlights rechts (2×2 Grid). Die Highlights bekommen statt Icon + Text einfach Zahlenwert + Label. Gleiche Struktur, anderer Inhalt.

### Hero-Varianten als CTA
Hero-Komponenten können auch als CTA-Sections mitten auf der Seite eingesetzt werden. Andere Texte, andere `id`, ggf. weniger Padding. Eignen sich für starke Abschluss-CTAs mit mehr visueller Wirkung als CtaBanner/CtaCentered.

---

## Section-Varianten Übersicht

### Hero (4 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `HeroCentered` | Standard, universell einsetzbar |
| `HeroSplit` | Wenn ein Bild gezeigt werden soll |
| `HeroImageOverlay` | Wenn das Bild Atmosphäre setzen soll |
| `HeroMinimal` | Wenn Typografie allein wirken soll |

**Props auf allen Heroes:** `heading`, `subheading?`, `badge?`, `ctaText?`, `ctaHref?`, `secondaryCtaText?`, `secondaryCtaHref?`

**Zusätzliche Props HeroImageOverlay:** `imageSrc?`, `parallax? ('none'|'subtle'|'fixed')`, `parallaxSpeed?`, `align? ('left'|'center')`, `overlay? ('dark'|'gradient'|'gradient-bottom'|'none')`

### Features / Services (4 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `FeaturesGrid` | Mehrere gleichwertige Punkte in Karten |
| `FeaturesAlternating` | Ausführliche Darstellung mit Bildern |
| `FeaturesHighlight` | Ein Thema mit Details + Bild |
| `FeaturesCentered` | Bild im Fokus, Features drumherum |

**Props FeaturesGrid:** `features[]`, `heading?`, `subheading?`, `columns? (2|3|4)`, `carousel?`

**Props FeaturesHighlight:** `heading?`, `description?`, `highlights[]`, `imageSrc?`, `layout? ('default'|'stacked'|'sticky'|'scroll'|'parallax')`

**FeaturesHighlight Layouts im Detail:**
| Layout | Aufbau |
|--------|--------|
| `default` | Text + Icon-Grid links, großes Bild rechts |
| `stacked` | Heading + Subline + Bild links, Feature-Kacheln rechts |
| `sticky` | Sticky Heading links, Feature-Kacheln rechts (kein Bild) |
| `scroll` | Features links scrollen, Bild rechts bleibt sticky und wechselt |
| `parallax` | Features links, Bilder rechts gleiten schneller mit Fade-Effekt |

**Highlights-Interface:** `{ icon: string, text: string, description?: string, imageSrc?: string }` — `imageSrc` wird bei `scroll` und `parallax` Layouts für individuelle Bilder pro Highlight genutzt.

### CTA (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `CtaBanner` | Kompakter horizontaler CTA |
| `CtaCentered` | Zentrierter CTA mit mehr Platz |

**Props auf beiden:** `heading?`, `text?`, `buttonText?`, `buttonHref?`, `bg? ('primary'|'muted'|'dark')`

**Zusätzlich CtaCentered:** `secondaryButtonText?`, `secondaryButtonHref?`

### Testimonials (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `TestimonialsGrid` | Mehrere Kundenbewertungen in Karten |
| `TestimonialHighlight` | Ein großes hervorgehobenes Zitat |

**Props TestimonialHighlight:** `quote`, `name`, `role?`, `rating?`, `imageSrc?`, `heading?`, `subheading?`

### Contact (3 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `ContactSimple` | Kompaktes Inline-Formular oder Kontaktdaten in einer Zeile |
| `ContactSplit` | Formular + Kontaktinfos/Bild nebeneinander |
| `ContactCentered` | Zentriertes Formular mit mehr Feldern |

**Props ContactSimple:** `heading?`, `subheading?`, `mode? ('form'|'info')` — `info` zeigt Kontaktdaten (E-Mail, Telefon, Adresse) statt Formular

**Props ContactSplit:** `heading?`, `subheading?`, `layout? ('default'|'reversed')`, `imageSrc?`, `compact?`
- `default`: Formular links, Kontaktinfos rechts
- `reversed`: Heading + Kontaktinfos (2×2) links, Formular rechts
- `imageSrc`: Bild statt Kontaktinfos
- `compact`: Schmaler und zentriert

### About (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `AboutSplit` | Bild + Text + Highlights nebeneinander |
| `AboutCentered` | Zentrierter Text + Highlights-Zeile, kein Bild |

**Props AboutSplit:** `heading?`, `text?`, `image?`, `highlights[]`

**Props AboutCentered:** `heading?`, `text?`, `highlights[]`

**Werte/Mission/Vision:** FeaturesGrid mit 3 Spalten nutzen — Icon + Titel + Text pro Wert. Kein separates About-Variant nötig.

**Firmengeschichte:** ProcessTimeline nutzen — gleiche Struktur, anderer Inhalt.

**About mit Bilder-Carousel:** AboutCentered (linksbündig angepasst) gefolgt von `<Carousel>` mit Bildern direkt in `page.tsx`. Kein eigener Variant — Komposition aus bestehenden Teilen.

### Team (3 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `TeamGrid` | Runde Porträts, zentriert, persönlich/warm |
| `TeamCards` | Rechteckige Karten mit großem Bild, professionell/modern |
| `TeamAlternating` | Abwechselnd Bild/Text, ausführlich, für kleine Teams |

**Props TeamGrid/TeamCards:** `members[]`, `heading?`, `subheading?`, `columns? (2|3|4)`, `carousel?`

**Props TeamAlternating:** `members[]`, `heading?`, `subheading?`

**TeamMember Interface:** `_id`, `name`, `role`, `bio?`, `image?`, `email?`, `phone?`, `linkedin?`

### FAQ (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `FaqAccordion` | Häufige Fragen als Akkordeon |

**Kompositionen:** FAQ neben Bild (ContactSplit-Layout mit Accordion statt Formular), FAQ + ContactSimple `mode="info"` als Kombi, FAQ in FeaturesHighlight `sticky` (Heading links sticky, Fragen rechts scrollen), FAQ in Tabs nach Kategorie, FAQ als HeroSplit (Heading + Subline links, Accordion rechts).

### Stats (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `StatsGrid` | Zahlenwerte im Grid, eigenständige Section |
| `StatsHighlight` | Ein großer Stat mit Kontext-Text, narrativ |

**Props StatsGrid:** `stats[]`, `heading?`, `subheading?`

**Props StatsHighlight:** `stat`, `description?`, `heading?`, `subheading?`

**Stat Interface:** `{ value, label, prefix?, suffix? }`

### Process (3 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `ProcessSteps` | Horizontal, kompakt, nummerierte Kreise mit verbindender Linie |
| `ProcessTimeline` | Vertikal, ausführlich, Mittellinie mit abwechselnd links/rechts |
| `ProcessList` | Minimal, editorial, nummerierte Liste mit Trennlinien |

**Props auf allen:** `steps[]`, `heading?`, `subheading?`

**Step Interface:** `{ title, description, icon? }`

### Blog (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `BlogGrid` | Karten mit Thumbnails im Grid |
| `BlogList` | Kompakte Liste ohne Bilder, editorial |

**Props BlogGrid:** `posts[]`, `heading?`, `subheading?`, `limit?`, `featured?`, `columns? (2|3|4)`, `carousel?`

**Props BlogList:** `posts[]`, `heading?`, `subheading?`, `limit?`

### Opening Hours (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `OpeningHoursTable` | Öffnungszeiten-Tabelle mit Heute-Markierung |

**Kompositionen:** Opening Hours neben Bild (HeroSplit-Layout), über Hintergrundbild (HeroImageOverlay), neben Karte (ContactSplit-Layout), zusammen mit Kontaktdaten, als Teil des Footers, als Card-Overlay auf einer Karte.

### Portfolio (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `PortfolioGrid` | Projektkarten mit Bild, Titel, Beschreibung, Kategorie |

**Props:** `projects[]`, `heading?`, `subheading?`, `columns? (2|3|4)`, `carousel?`

**Project Interface:** `{ _id, title, description?, category?, imageSrc?, href? }`

**PortfolioGrid = Usecases / Referenzen / Case Studies:** Gleiche Komponente für alles mit Bild + Titel + Beschreibung + Kategorie. Nicht nur für Portfolio — auch für Referenzprojekte, Case Studies, Anwendungsfälle.

### Gallery (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `GalleryGrid` | Bilder-Grid mit Hover-Effekt |

**Props:** `images[]`, `heading?`, `subheading?`, `columns? (2|3|4)`, `carousel?`

### Partners (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `LogoBar` | Partner-/Kundenlogos, auch für "Bekannt aus" Presse-Logos |

**Props:** `partners[]`, `heading?`, `subheading?`, `carousel?`

### Map (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `MapEmbed` | OpenStreetMap Standort-Karte |

**Kompositionen:** Map neben Kontaktformular (ContactSplit-Layout), Map als Fullwidth-Trenner zwischen Sections, Map mit Kontaktkarten-Overlay (`absolute` Card über der Karte mit Adresse + "Route planen" Link).

### Pricing (2 Varianten)
| Variante | Wann einsetzen |
|----------|---------------|
| `PricingCards` | Preispakete als Karten (2-3 Pakete), Highlight-Paket mit Badge |
| `ComparisonTable` | Feature-Matrix mit Check/X zum direkten Vergleich |

**Props PricingCards:** `plans[]` (name, price, period?, description?, features[], ctaText?, ctaHref?, highlighted?, badge?), `heading?`, `subheading?`

**Props ComparisonTable:** `plans[]` (name, price?, period?, highlighted?, ctaText?, ctaHref?), `rows[]` (feature, values[]), `heading?`, `subheading?`

### Newsletter (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `NewsletterSignup` | Standalone Newsletter-Anmeldung mit E-Mail-Feld |

**Props:** `heading?`, `subheading?`, `buttonText?`, `bg? ('background' | 'muted' | 'primary')`

### Jobs (1 Variante)
| Variante | Wann einsetzen |
|----------|---------------|
| `JobsList` | Offene Stellen mit Titel, Ort, Typ, Beschreibung + Bewerben-Button |

**Props:** `jobs[]` (title, location?, type?, description?, ctaHref?), `heading?`, `subheading?`, `ctaText?`

---

### Carousel-Empfehlung

Viele Sections haben eine `carousel`-Prop. Desktop: Auto-Scroll mit Hover-Pause. Mobile: nativer Touch-Scroll (Swipen).

| Section | `carousel={true}` empfohlen? |
|---------|------------------------------|
| LogoBar (Partners) | **Fast immer** — Logos laufen professionell durch |
| TestimonialsGrid | **Bei 4+ Testimonials** — verhindert endloses Scrollen |
| TeamGrid / TeamCards | **Bei 5+ Mitgliedern** — kompakter |
| PortfolioGrid | **Bei 6+ Projekten** — Showcase-Charakter |
| GalleryGrid | **Optional** — abhängig von Bildanzahl |
| BlogGrid | **Selten** — Grid mit Übersicht ist meist besser |
| FeaturesGrid | **Selten** — Features sollen auf einen Blick sichtbar sein |

---

## Design-System

### Typoskala
| Klasse | Größe | Line-Height | Verwendung |
|--------|-------|-------------|-----------|
| `text-display` | 52px | 1.10 (57px) | Hero-Headlines (h1), Stat-Zahlenwerte |
| `text-title` | 32px | 1.20 (38px) | Section-Headings (h2), CTA-Headlines |
| `text-logo` | 28px | 1.40 (39px) | Logo-Text (Navigation, Footer) |
| `text-xl` | 22px | 1.50 (33px) | Testimonial-Quotes, Feature-Alt Titel, Pricing-Plan-Namen |
| `text-hero-sub` | 23px | 1.35 (31px) | Hero-Sublines |
| `text-subtitle` | 20px | 1.20 (24px) | Section-Subheadings, Card-Titel, CTA-Beschreibungen |
| `text-body-lg` | 17px | 1.50 (26px) | Lead-Absätze (About), Footer-Überschriften |
| `text-base` | 16px | 1.50 (24px) | Card-Beschreibungen, Nav/Footer-Links, Badges, Labels |

**Prinzip:** 8 Stufen, jede mit einer klaren Rolle. Je größer die Schrift, desto enger die Zeilenhöhe. Keine Stufe wird für zwei Zwecke mit unterschiedlichem visuellen Gewicht verwendet.

### Spacing-System
| Größe | Tailwind | Zweck |
|-------|----------|-------|
| 8px | `mb-2` / `gap-2` | Eng verbunden: Titel → Subline, Titel → Beschreibung |
| 16px | `mb-4` / `gap-4` | Innerhalb einer Gruppe: Icon → Titel, Label → Input |
| 24px | `mt-6` / `gap-6` | Standard-Abstand: Heading → Subline, Badge → Heading |
| 32px | `gap-8` | Zwischen Items: Grid-Karten, Card-Gaps |
| 40px | `mb-10` | Zwischen Gruppen: Section-Header → Content, Subline → Buttons |
| 48px | `gap-12` | Zwischen Blöcken: Split-Spalten, Highlights nach Text |
| 64px | `gap-16` | Zwischen Major-Blöcken: Split mit Bild |
| 96px | `space-y-24` | Große Trennung: Alternating Rows |

**Prinzip:** Nähe = Zusammengehörigkeit (Gestalt). Eng verbundene Elemente (8px) gehören visuell zusammen. Getrennte Blöcke (48-96px) sind eigenständige Einheiten.

### System-Klassen
| Klasse | Zweck |
|--------|-------|
| `.section-heading` | Section-Überschrift (text-title, font-heading) |
| `.section-subheading` | Section-Subline (text-subtitle, muted-foreground) |
| `.section-header` | Wrapper für Heading-Block (text-center, mb-10) |
| `.card-title` | Karten-Titel (text-subtitle, font-heading) |
| `.card-description` | Karten-Beschreibung (text-base, muted-foreground) |
| `.badge-pill` | Pill-Badge (border, bg-muted, muted-foreground) |
| `.form-label` | Formular-Label (text-base, font-medium) |
| `.btn-primary` | Primärer Button (bg-primary, 48px min-h) |
| `.btn-secondary` | Sekundärer Button (border-primary, 48px min-h) |
| `.section` | Section-Wrapper (Padding aus Spacing-Preset) |
| `.section-alt` | Section mit Muted-Hintergrund |
| `.container-narrow` | Container (max-width, responsive Padding) |

### Overlay-System
Für Sections mit dunklem Bild-Overlay (z.B. HeroImageOverlay):
- `.overlay-bg` — Dunkler Overlay-Hintergrund
- `.overlay-text` — Heller Text auf Overlay
- `.overlay-text-muted` — Gedämpfter heller Text auf Overlay
- `.overlay-badge` — Badge auf Overlay

Gesteuert über `data-theme-dark` auf `<html>`. Wechselt automatisch zwischen hellen/dunklen Farbwelten.

### Icon-System
`IconWrapper` rendert Icons im konfigurierten Stil (ring/filledBox/naked). Verfügbare Icons aus `@phosphor-icons/react`:
lightning, shield-check, chat-circle, cursor-click, sliders, receipt, star, lightbulb, code, handshake, heart, arrow-right, check, x, phone, envelope, map-pin, clock, users, gear, house, stethoscope, rocket, trophy, target, chart-line, shopping-cart, palette, wrench, leaf

### Button-Varianten (LinkButton)
| Variant | Verwendung |
|---------|-----------|
| `default` | Primärer CTA (bg-primary) |
| `outline` | Sekundärer CTA (border-primary) |
| `ghost` | Dezenter Link-Button |
| `inverse` | Button auf farbigem Hintergrund (bg-background) |
| `outline-inverse` | Outline-Button auf farbigem Hintergrund |

---

## Konfiguration pro Kunde

### config/design.ts — Design-Profil
Claude überschreibt diese Datei pro Kunde. Steuert das gesamte visuelle Erscheinungsbild:

```typescript
export const design = {
  fonts: fontPairings.modern,           // Font-Pairing (craft|clarity|refined|modern|elegant|literary|startup|narrative|neutral|therapeutic|bold|friendly)
  colors: colorWorlds.cleanSlate,       // Farbwelt (12 Optionen)
  spacing: spacingPresets.balanced,     // Spacing (breathe/balanced/dense)
  borderRadius: borderRadiusPresets.soft, // Radius (sharp/subtle/soft/round)
  iconStyle: iconStyles.ring,           // Icon-Stil (filledBox/ring/naked)
  layout: 'immersive',                  // Layout-Archetyp
};
```

Alle Optionen sind in `src/design/profiles.ts` definiert.

### Font-Pairings (12 Optionen)

Alle Fonts lokal gehostet (Fontshare + Google Fonts), DSGVO-konform. Nur die aktiven 2 Fonts werden per @font-face geladen.

| Pairing | Heading | Body | Charakter | Geeignet für |
|---------|---------|------|-----------|-------------|
| `craft` | Zodiak (500) | Lato | Handwerklich, sorgfältig | Handwerk, Manufaktur, Gastronomie |
| `clarity` | Switzer (600) | DM Sans | Schlicht, freundlich | Dienstleister, Beratung, Praxen |
| `refined` | Sentient (500) | Lato | Fein, anspruchsvoll | Beauty, Wellness, gehobene Gastronomie |
| `modern` | Satoshi (700) | Inter | Zeitgemäß, vielseitig | Agenturen, Startups, Tech (Default) |
| `elegant` | Playfair Display (700) | Lato | Klassisch, edel | Immobilien, Luxus, Juweliere |
| `literary` | Lora (600) | Source Serif 4 | Literarisch, warm | Verlage, Autoren, Kultur |
| `startup` | Raleway (700) | Lato | Elegant, leicht | Startups, SaaS, moderne Unternehmen |
| `narrative` | Libre Baskerville (400) | Lora | Erzählerisch, buchähnlich | Stiftungen, NGOs, Magazine |
| `neutral` | Inter (700) | DM Sans | Neutral, UI-clean | Tech, SaaS, Dashboard-lastige Seiten |
| `therapeutic` | Cormorant Garamond (600) | Nunito Sans | Einfühlsam, heilsam | Therapie, Coaching, Gesundheit |
| `bold` | Montserrat (700) | DM Sans | Kräftig, selbstbewusst | Fitness, Sport, Event, Marketing |
| `friendly` | Poppins (600) | Nunito | Rund, weich, einladend | Kinderärzte, Bildung, Vereine |

**Auswahlprinzip:** Der Charakter der MARKE bestimmt das Pairing — nicht die Branche. Eine moderne Arztpraxis kann `neutral` nutzen, ein traditioneller Handwerksbetrieb `elegant`. Die Spalte "Geeignet für" sind Beispiele, keine Regeln. Jedes Pairing kann für jede Branche funktionieren wenn es zum Markencharakter passt. Variiere bewusst — nicht jede Praxis braucht `therapeutic`, nicht jede Agentur braucht `modern`. Im Zweifel `modern` als Ausgangspunkt.

### config.ts — Website-Daten
Claude überschreibt diese Datei pro Kunde mit den Firmendaten:

- `name` — Firmenname
- `tagline` — Kurzbeschreibung
- `description` — SEO-Beschreibung
- `url` — Website-URL
- `language` — Sprache (default: 'de')
- `contact` — E-Mail, Telefon, Adresse
- `location` — Koordinaten für Karte
- `social` — Instagram, Facebook, LinkedIn
- `navigation` — Array mit Menüpunkten
- `logoUrl` — Logo oder null (fällt auf Firmenname zurück)
- `imageMode` — 'none' | 'placeholders' | 'full'

### config/tracking.ts — Tracking & DSGVO
Claude setzt hier Tracking-IDs wenn der Kunde Analytics oder Marketing nutzt:

```typescript
export const tracking = {
  analytics: {
    googleAnalytics: '',   // GA4 ID, z.B. 'G-XXXXXXXXXX'
    plausible: '',         // Domain
    umami: '',             // Website ID
  },
  marketing: {
    facebookPixel: '',     // Meta Pixel ID
    linkedinInsight: '',   // LinkedIn Partner ID
  },
};
```

**Automatisches Verhalten:**
- Alle Felder leer → Einfacher Cookie-Banner ("nur technisch notwendige Cookies" + "Verstanden")
- Ein Feld gefüllt → Voller Consent-Manager mit Kategorien (Akzeptieren / Ablehnen / Einstellungen)
- Scripts werden NUR geladen wenn der User Consent gibt
- Footer zeigt "Cookie-Einstellungen" Link nur wenn Tracking aktiv
- Datenschutz-Seite zeigt dynamisch nur die relevanten Tool-Abschnitte

**Legal Pages:**
- `/impressum` — Template mit siteConfig-Daten, Claude passt Inhalte pro Kunde an
- `/datenschutz` — Template, passt sich automatisch an tracking.ts an

**Dateien im System:**
- `src/config/tracking.ts` — Einzige Stelle die Claude/User bearbeitet
- `src/lib/consent.ts` — Consent-Logik (nicht anfassen)
- `src/components/ConsentManager.tsx` — Banner + Einstellungen (nicht anfassen)
- `src/components/TrackingScripts.tsx` — Bedingte Script-Einbindung (nicht anfassen)

### page.tsx — Seitenaufbau
Claude erstellt die Seite indem es Sections in `page.tsx` zusammenstellt:

```tsx
<HeroCentered heading="..." subheading="..." />
<FeaturesGrid features={[...]} columns={3} />
<CtaBanner bg="primary" />
<TestimonialsGrid testimonials={[...]} />
<ContactSimple />
```

Die Reihenfolge der Sections bestimmt den Seitenaufbau. Claude wählt Varianten und Props basierend auf Branche, Zielgruppe und gewünschter Wirkung.
