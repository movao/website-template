# Refinements — Verfeinerungen pro Kundenwebsite

Diese Datei dokumentiert Design-Anpassungen die Claude beim Bauen einer Kundenwebsite anwenden kann. Keine Template-Änderungen nötig — alles über className-Ergänzungen, CSS-Variablen oder zusätzliche Elemente in page.tsx.

---

## Typografie

### Größere Display-Schrift
`--text-display` in globals.css anpassen, z.B. `clamp(2.5rem, 5vw, 4.5rem)` statt default `clamp(2rem, 4vw, 3.5rem)`. Wirkt auf alle Heroes.

### Engeres Letter-Spacing für Headlines
`tracking-tight` oder `tracking-tighter` auf Hero-Headlines für einen kompakteren, modernen Look.

### Leichtere Body-Font
`--font-body-weight` auf `300` setzen für ein eleganteres, luftigeres Schriftbild.

### Dickere Body-Font
`--font-body-weight` auf `500` setzen für kräftigeres, besser lesbares Schriftbild. Kombiniert mit größerer Display-Schrift und `tracking-tight` für einen modernen Tech/SaaS-Look.

---

## Hero-Verfeinerungen

### Hero als Kachel (abgerundete Ecken, Seitenrand)
`rounded-2xl mx-4 overflow-hidden` auf die Hero-Section. Der Hero wird zur Karte mit sichtbarem Seitenrand. Referenz: heatfix.framer.website, stratex.framer.website

### Trust-Element über der Headline
Sterne-Bewertung oder Kundenzahl als eigenständiges Element vor der Headline platzieren, z.B. "4.9/5 von 200+ Bewertungen" mit Star-Icons.

### Hero-Varianten als CTA einsetzen
HeroCentered, HeroSplit, HeroImageOverlay und HeroMinimal können auch als CTA-Sections mitten auf der Seite eingesetzt werden. Einfach andere Texte, andere `id` und ggf. weniger Padding (`className="py-16"` statt default Section-Padding). Die Hero-Varianten bieten mehr visuelle Wirkung als die kompakten CTA-Komponenten (CtaBanner, CtaCentered) und eignen sich für Seiten die einen starken Abschluss-CTA brauchen.

### Floating-Karten zwischen Sections
Eine Karten-Leiste die mit `relative -mt-16 z-10` über die Section-Grenze ragt. Verbindet Hero mit der nächsten Section visuell. Referenz: blackrock.com

### Overlay-Farbe in Primär/Akzent
Statt dunklem Overlay eine eingefärbte Variante: `bg-primary/60` oder `bg-accent/40` für markenspezifische Stimmung.

### Video-Hintergrund
`<video autoPlay muted loop playsInline>` statt `<img>` im HeroImageOverlay. Gleiche Overlay-Logik, gleiche Text-Klassen.

### Scroll-Indikator
Animierter Pfeil oder Maus-Icon am unteren Rand des Heroes: `absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce`. Zeigt dem Besucher dass es weitergeht. Verschwindet beim Scrollen.

### Social Proof unter dem Hero
Avatare + Kundenzahl als Zeile unter den CTA-Buttons: `flex items-center gap-2` mit 3-4 überlappenden runden Bildern (`-ml-2 ring-2 ring-background`) und "500+ zufriedene Kunden".

### Partner-Logos unter dem Hero
Logo-Zeile direkt unter dem Hero: "Vertraut von" mit 4-6 kleinen Logos in `grayscale opacity-50`. Kann als Teil des Heroes oder als eigenständige schmale Section.

### Formular im Hero
E-Mail-Signup oder Suchfeld direkt im Hero statt CTA-Buttons: `<Input placeholder="Ihre E-Mail" />` mit `<Button>` daneben. Für SaaS, Newsletter, Buchungsseiten.

### App Store Buttons
Apple App Store / Google Play Badges statt normaler CTAs. Bilder als Links nebeneinander.

### Video-Play-Button im Hero
Großer Play-Button der ein Video-Modal öffnet. `w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center` mit Play-Dreieck. Bei Klick öffnet sich Fullscreen-Video.

### HeroCentered — Animierter Text (Wort-Rotation)
Ein Wort in der Headline wechselt automatisch: "Wir bauen [Websites / Apps / Shops]". Client Component mit `setInterval` und `transition-opacity`. Array von Wörtern die durchrotieren.

### HeroCentered — Gradient/Mesh Hintergrund
Statt solidem `bg-background` ein animierter Farbverlauf: `bg-gradient-to-br from-primary/5 via-background to-accent/5`. Oder CSS Mesh-Gradient für komplexere Verläufe.

### HeroCentered — Metriken-Zeile unter den CTAs
Drei Zahlenwerte in einer Zeile: "500+ Kunden · 15 Jahre · 98% Zufriedenheit". `flex gap-8 mt-10 text-muted-foreground` unter den Buttons.

### HeroSplit — Device-Mockup
Bild in einem Laptop/Phone-Rahmen darstellen: CSS-Border und Schatten die ein Gerät simulieren, oder ein Mockup-Bild als Rahmen mit dem eigentlichen Screenshot darin.

### HeroSplit — Floating UI-Elemente
Kleine Karten/Badges die über dem Bild schweben: `absolute` positionierte Elemente mit Schatten, z.B. eine Benachrichtigung, ein Stats-Badge, ein Chat-Bubble.

### HeroSplit — Bild-Carousel
Mehrere Bilder die automatisch wechseln statt eines statischen Bildes. Gleiche Logik wie TestimonialHighlight Carousel.

### HeroSplit — Umgekehrtes Layout
Bild links, Text rechts: `lg:order-none` entfernen und auf dem Text-Container `lg:order-2` setzen. Oder als Prop `reversed={true}`.

### HeroImageOverlay — Ken Burns Effekt
Langsamer Zoom auf dem Hintergrundbild: `@keyframes kenburns { from { transform: scale(1) } to { transform: scale(1.1) } }` mit `animation: kenburns 20s ease-in-out infinite alternate`.

### HeroImageOverlay — Mehrere Hintergrundbilder
Bilder die automatisch wechseln: Array von `imageSrc` statt einem einzelnen. Client Component mit Crossfade-Transition zwischen den Bildern.

### HeroImageOverlay — Vignette
Dunklere Ränder für mehr Tiefe: `box-shadow: inset 0 0 200px rgba(0,0,0,0.3)` auf dem Overlay oder ein radiales Gradient-Overlay.

### HeroImageOverlay — Text-Schatten
`text-shadow: 0 2px 20px rgba(0,0,0,0.3)` auf der Headline für bessere Lesbarkeit über unruhigen Bildern. Per Inline-Style.

### HeroMinimal — Akzent-Farbe auf einzelnem Wort
Ein Wort in der Headline in `text-primary`: `<span className="text-primary">Design</span> ist wie es funktioniert.`

### HeroMinimal — Dekorative Linie
Horizontale Linie unter der Headline: `<div className="w-20 h-1 bg-primary mt-6" />`. Einfacher visueller Akzent.

### HeroMinimal — Großer Hintergrund-Buchstabe
Ein einzelner Buchstabe/Zahl riesig im Hintergrund: `absolute text-[20rem] font-heading text-muted/20 -z-10 top-0 right-0`. Dekorativ, für mutigen Look.

### Animierter Gradient-Hintergrund
Langsam wechselnder Farbverlauf: `@keyframes gradient { 0% { background-position: 0% 50% } 100% { background-position: 100% 50% } }` mit `background-size: 200% 200%` und `animation: gradient 8s ease infinite`.

### Maus-Follow Parallax
Elemente die sich leicht mit der Mausposition bewegen: Client Component mit `onMouseMove` die `transform: translate(${x * 0.02}px, ${y * 0.02}px)` auf dekorative Elemente anwendet.

---

## Layout-Verfeinerungen

### Breiterer Container
`--container-max-width` in der Spacing-Config erhöhen, z.B. `1400px` statt `1280px` für ein weiteres Layout.

### Vollbreite Sections
Einzelne Sections aus dem Container brechen lassen mit `max-w-none px-0` für Fullwidth-Effekte (z.B. Galerie, Partner-Logos).

### Asymmetrisches Grid
Statt `lg:grid-cols-2` ein `lg:grid-cols-[2fr_1fr]` oder `lg:grid-cols-[1fr_2fr]` für ungleiche Spaltenaufteilung.

### Fullwidth Split-Sections (Bild bis zum Rand)
`container-narrow` durch `max-w-none px-0` ersetzen, Grid mit `lg:grid-cols-2` direkt auf Viewport-Breite. Text-Spalte bekommt eigenes Padding (`px-8 lg:px-16`), Bild-Spalte geht randlos. Referenz: wellnest.me

### Kachel-Section (farbiger Hintergrund + Bild)
`bg-primary rounded-2xl p-0 overflow-hidden` auf der Section. Text-Bereich mit Padding, Bild nur rechts abgerundet (`rounded-r-2xl rounded-l-none`). Erzeugt eine große Kachel mit Bild rechts und farbigem Hintergrund links. Text nutzt `overlay-text` Klassen für Lesbarkeit auf Primärfarbe.

---

## Features/Services-Verfeinerungen

### FeaturesGrid — Horizontale Karten
Icon links, Text rechts statt Icon oben, Text unten: `flex items-start gap-4` statt vertikaler Stapelung. Kompakter, besser für längere Beschreibungen.

### FeaturesGrid — Nummerierte Features
"01", "02", "03" statt Icons: `<span className="text-display font-heading text-primary/20">01</span>`. Editorialer, strukturierter Look.

### FeaturesGrid — Bento Grid (gemischte Größen)
Erste Karte doppelt breit (`col-span-2`) oder doppelt hoch (`row-span-2`). Erzeugt ein Bento-Box Layout mit visueller Hierarchie.

### FeaturesGrid — Farbiger Top-Border
`border-t-4 border-primary border-l-0 border-r-0 border-b-0 rounded-t-none` auf den Karten. Akzentuiert jede Karte mit Farbstreifen oben.

### FeaturesGrid — Karten mit Link/Pfeil
`→` oder Pfeil-Icon am Ende jeder Karte: `<ArrowRight className="w-4 h-4 text-primary mt-4" />`. Karte wird zum Link, `cursor-pointer hover:border-primary/30`.

### FeaturesGrid — Erweiterbare Details
Klick auf Karte zeigt mehr Text: Client Component mit `useState` die `max-h` und `overflow-hidden` togglet. "Mehr erfahren" Link der den Rest einblendet.

### FeaturesGrid — Icon-Zeile (nur Icons)
Nur Icons in einer Zeile ohne Beschreibung: `flex gap-8 justify-center` mit Tooltips bei Hover. Für schnelle visuelle Übersicht.

### FeaturesAlternating — Full-Bleed Bilder
Bilder die über den Container hinausragen: `max-w-none -mx-8 lg:-mx-16` auf dem Bild-Container. Erzeugt einen immersiven Effekt.

### FeaturesAlternating — Device-Frame
Bild in einem Laptop/Phone-Rahmen: CSS-Border und Schatten, oder Mockup-Bild als Rahmen mit Screenshot darin.

### FeaturesAlternating — Checkliste statt Absatz
Bullet Points mit Check-Icons statt Fließtext: `<ul>` mit `<Check className="w-4 h-4 text-primary shrink-0" />` vor jedem Punkt.

### FeaturesAlternating — CTA-Button pro Feature
"Mehr erfahren" Button unter jedem Feature-Block: `<LinkButton variant="ghost">` für subtilen CTA, oder `variant="outline"` für prominenten.

### FeaturesAlternating — Video statt Bild
`<video>` mit Play-Button Overlay statt `<img>`. Autoplay bei Sichtbarkeit via IntersectionObserver oder Klick-to-Play.

### FeaturesHighlight — Checkliste statt Icon-Grid
Vertikale Liste mit Check-Icons statt 2x2 Icon-Grid: `flex flex-col gap-3` mit `<Check />` + Text pro Punkt. Kompakter, besser scannbar.

### FeaturesHighlight — Tabs statt Layouts
Statt verschiedener Layout-Props: Tabs die zwischen Features wechseln. Jeder Tab zeigt ein anderes Bild + andere Beschreibung. Client Component mit `<Tabs>`.

### FeaturesHighlight — Akkordeon-Features
Klick auf Feature-Punkt öffnet Details + zeigt passendes Bild: `<Accordion>` links, Bild rechts wechselt basierend auf aktivem Akkordeon-Item.

### FeaturesCentered — Verbindungslinien
Linien/Pfeile die von den Features zum zentralen Bild zeigen: SVG oder CSS-Borders die eine visuelle Verbindung herstellen.

### FeaturesCentered — 3D-Effekt auf dem Bild
`perspective` + `rotate` auf dem zentralen Bild: `transform: perspective(1000px) rotateY(-5deg)` für einen 3D-Effekt. Hover hebt den Effekt auf.

### Feature mit "Coming Soon" Badge
Einzelne Features als "Bald verfügbar" markieren: `<span className="badge-pill text-accent">Coming Soon</span>` neben dem Titel. Karte in `opacity-60`.

---

## Karten-Verfeinerungen

### Features ohne Karten (zentriert, kein Border)
Card-Wrapper entfernen, Content zentrieren: `text-center` auf jedes Grid-Item, `border-transparent bg-transparent shadow-none` auf die Card-Komponente, Icon mit `mx-auto`. Ergibt ein cleanes Grid ohne Kacheln — nur Icon, Titel, Text zentriert.

### Bilder in Feature-Karten
Bild/Screenshot oben in der Karte, Titel darunter. `ImageSlot` oder `<img>` vor dem `card-title` einfügen. Bild mit `rounded-t-xl overflow-hidden aspect-[16/10]`, Karten-Padding nur unten (`p-0` auf Card, `p-6` auf den Text-Bereich). Gut für Produkt-Screenshots, App-Previews.

### Split-Header (Heading links, Subheading rechts)
Statt zentriertem `.section-header` ein Grid: `grid lg:grid-cols-2 gap-8 mb-10`. Heading in der linken Spalte, Subheading in der rechten. Erzeugt einen editoralen, modernen Look.

### Glassmorphism-Karten
`bg-card/80 backdrop-blur-lg` auf Karten für einen Glaseffekt. Funktioniert besonders auf dunklen Farbwelten.

### Karten ohne Border
`border-transparent shadow-md` statt `border-border` für schwebende Karten ohne sichtbaren Rand.

### Hover-Lift
`hover:-translate-y-1` auf Karten für einen subtilen Lift-Effekt beim Hovern.

---

## Farb-Verfeinerungen

### Gradient-Akzente
`bg-gradient-to-r from-primary to-accent` auf Buttons oder Headings für Farbverläufe statt Vollfarben.

### Eingefärbte Muted-Backgrounds
`section-alt` mit leicht eingefärbtem Hintergrund statt neutralem Grau, z.B. `bg-primary/5` für einen Hauch Markenfarbe.

### Farbige Borders
`border-primary/10` statt `border-border` auf Karten für subtile Markenfarbe im Rahmen.

---

## CTA-Verfeinerungen

### CTA mit Hintergrundbild
Wie HeroImageOverlay aber kompakter: `relative overflow-hidden` mit `<img>` und Overlay. Text in `overlay-text`. Für emotionale Abschluss-CTAs.

### CTA mit Gradient-Hintergrund
Statt solidem `bg-primary` ein Verlauf: `bg-gradient-to-r from-primary to-accent`. Text bleibt `text-background`.

### CTA mit Muster/Textur
Subtiles Punktraster oder Grain-Textur über dem farbigen Hintergrund. `bg-primary` mit `::after` Pseudo-Element für die Textur.

### CTA als Kachel (nicht Fullwidth)
`rounded-2xl mx-auto max-w-4xl` statt voller Breite. CTA wird zur freistehenden Karte mit Abstand zu den Rändern.

### CTA mit Border statt Füllung
`bg-transparent border-2 border-primary` statt `bg-primary`. Text in `text-foreground`, Button in `variant="default"`. Luftiger, dezenter.

### CTA mit Icon/Illustration
Kleines Icon oder Illustration neben dem Text: `flex items-center gap-8` mit `<img>` oder SVG-Icon links, Text rechts.

### CTA mit Countdown
Countdown-Timer im CTA: "Angebot endet in 3T 12Std 45Min". Client Component mit `setInterval`. Für zeitlich begrenzte Aktionen.

### CTA mit Formular
E-Mail-Input + Button statt Link-Button: `<Input placeholder="Ihre E-Mail" />` neben `<Button>Jetzt anmelden</Button>`. Für Newsletter, Wartelisten.

### CTA mit Testimonial
Kleines Kundenzitat neben dem CTA: "Beste Entscheidung des Jahres — Maria S." als `text-background/80 italic` unter den Buttons.

### CTA mit Social Proof
Avatare + Zahl unter den Buttons: "Bereits 1.000+ Kunden" mit überlappenden runden Bildern.

### CTA Split (Zwei Optionen)
Zwei gleichwertige CTAs nebeneinander: `grid grid-cols-2 gap-8`. Linke Seite Option A, rechte Seite Option B. Für A/B-Entscheidungen ("Für Teams" / "Für Einzelpersonen").

### CtaBanner — Badge/Tag
"Limitiert" oder "Nur noch heute" Badge neben dem Heading: `<span className="badge-pill bg-accent text-background ml-3">Limitiert</span>`.

### CtaBanner — Schließbar
X-Button um den Banner zu schließen: Client Component mit `useState`. Banner verschwindet per `transition-opacity` und wird in localStorage gespeichert.

### CtaCentered — Trust-Badges unter Buttons
Logos oder Siegel unter den CTA-Buttons: "Verschlüsselt · DSGVO · 30 Tage Garantie" mit kleinen Icons.

### CtaCentered — Extra große Headline
`text-display` statt `text-title` auf dem Heading. Für maximale Wirkung am Seitenende.

### Button-Pulse Animation
`animate-pulse` oder custom `@keyframes pulse` auf dem primären CTA-Button. Subtiles Pulsieren zieht Aufmerksamkeit.

### Button-Gradient Shimmer
Glänzender Lichtstreifen der über den Button gleitet: `@keyframes shimmer` mit einem `linear-gradient` der sich per `translateX` bewegt. Wie ein Lichtreflex.

---

## Testimonial-Verfeinerungen

### Porträtbilder in Testimonial-Karten
Rundes Porträtbild vor dem Namen einfügen: `<img className="w-10 h-10 rounded-full object-cover" />` oder `ImageSlot` mit `className="w-10 h-10 rounded-full"` vor der `<cite>`.

### Sterne unter dem Zitat statt darüber
Sterne-Block (`flex gap-1`) nach dem `<p>` statt davor verschieben. Oder zusammen mit dem Namen in der `<footer>` platzieren.

### Größeres Quote-Zeichen im Hintergrund
`text-8xl` oder `text-9xl` statt `text-6xl` auf dem Anführungszeichen. Mit `top-6 left-6` statt `top-4 right-6` für eine linksbündige Positionierung im Hintergrund.

### Testimonials ohne Kacheln
`border-transparent bg-transparent shadow-none` auf die Karten. Content fließt ohne Rahmen — sauber, minimalistisch. Kann mit oder ohne Trennlinien (`border-b border-border`) zwischen den Zitaten kombiniert werden.

### Carousel mit zwei versetzten Reihen
Zwei `<Carousel>` Komponenten übereinander: die zweite mit `mt-4` und einer leicht anderen `speed` (z.B. 25 statt 30). Erzeugt einen versetzten Laufband-Effekt.

### Carousel randlos (Fullwidth)
`container-narrow` durch `px-0` ersetzen. Karten laufen über die volle Viewport-Breite. Edge-Fades bleiben bestehen.

### TestimonialsGrid — Spaltenanzahl
`md:grid-cols-2` oder `lg:grid-cols-4` statt default 3er-Grid. Mehr Spalten für viele kurze Zitate, weniger für lange Zitate.

### TestimonialsGrid — Masonry
`columns-2 lg:columns-3 gap-4` statt `grid` für unterschiedlich lange Zitate. Karten fließen natürlich ohne leere Plätze.

### TestimonialsGrid — Featured erstes Testimonial
Erste Karte über volle Breite: `col-span-2 lg:col-span-3` auf dem ersten `<blockquote>`, größeres Zitat, größeres Porträt.

### TestimonialsGrid — Farbiger Seitenrand
`border-l-4 border-primary border-t-0 border-r-0 border-b-0` statt gleichmäßiger Border. Akzentuiert jede Karte mit Markenfarbe.

### TestimonialsGrid — Firmenlogo
Kleines Logo unter dem Namen: `<img className="h-5 w-auto mt-2 opacity-60" />` in der `<footer>`. Zeigt die Firma des Kunden.

### TestimonialsGrid — Video-Testimonials
Play-Button Overlay auf der Karte: `absolute inset-0 flex items-center justify-center` mit Play-Icon. Bei Klick öffnet sich ein Modal mit dem Video.

### TestimonialHighlight — Hintergrundbild
Großes Bild hinter dem Zitat: `relative overflow-hidden` auf der Section, Bild als `absolute inset-0 object-cover`, Overlay mit `overlay-bg` für Lesbarkeit. Text in `overlay-text`.

### TestimonialHighlight — Split-Layout
Großes Porträtbild links, Zitat rechts: `grid lg:grid-cols-2 gap-16 items-center`. Bild in `aspect-[3/4] rounded-2xl`, Zitat rechts linksbündig.

### TestimonialHighlight — Farbiger Hintergrund
`bg-primary` oder `bg-muted` auf der Section. Text-Farben passen sich an: `text-background` auf Primary, `text-foreground` auf Muted.

### TestimonialHighlight — Firmenlogo
Logo unter Name/Rolle: `<img className="h-6 w-auto mt-3 mx-auto opacity-60" />`.

### Carousel — Drag-to-Scroll
`cursor-grab active:cursor-grabbing` auf dem Container. Client Component mit `onMouseDown/onMouseMove/onMouseUp` die `translateX` basierend auf Drag-Distanz berechnet.

### Carousel — Navigationspfeile
Links/Rechts Buttons: `absolute top-1/2 -translate-y-1/2` mit `left-4` / `right-4`. Bei Klick springt der Carousel um eine Karten-Breite. Pfeile in `bg-background/80 backdrop-blur-sm rounded-full w-10 h-10`.

### Carousel — Fortschrittsbalken statt Dots
Dünner Balken unter dem Carousel: `h-1 bg-muted rounded-full` mit `bg-primary` Füllung die sich mit dem aktiven Index bewegt. `width: ${(activeIndex / total) * 100}%`.

### Bewertung als Zahl
"4.9/5" neben einem einzelnen Stern statt 5 einzelner Sterne. Kompakter, besonders in kleinen Karten.

### Bewertungs-Quelle anzeigen
Kleines Logo von Google, Trustpilot, ProvenExpert neben den Sternen. `<img className="h-4 w-auto opacity-60 ml-2" />` nach dem Rating-Block.

### Gesamtbewertung (Aggregate)
"4.8 Durchschnitt aus 200+ Bewertungen" als Text über dem Testimonial-Block. Kann mit Trust-Logos kombiniert werden.

### Verifiziert-Badge
Kleines Häkchen-Icon neben dem Namen: `<Check className="w-4 h-4 text-primary inline ml-1" />` nach dem `<span>` mit dem Namen.

---

## Animations-Verfeinerungen

### Stagger-Delays erhöhen
`data-delay` Werte auf Karten erhöhen (200ms, 400ms, 600ms statt 100ms, 200ms, 300ms) für dramatischere Einblend-Effekte.

### Slide-In statt Fade-Up
Eigene `data-animate="slide-left"` oder `slide-right` Varianten in globals.css für horizontale Einblend-Effekte.

### Parallax auf einzelne Spalten/Elemente
`ParallaxImage` Komponente ist bereits vorhanden (`src/components/ui/ParallaxImage.tsx`). Gleiche Scroll-Listener-Logik kann auf beliebige Elemente angewendet werden — z.B. eine Bild-Spalte die leicht schneller scrollt als die Text-Spalte daneben. Dafür einen `useRef` + Scroll-Listener mit `translateY(rect.top * speed)` auf das Element anwenden. Siehe `ParallaxFeatures.tsx` als Referenz.

### Scroll-Triggered Counter
Zahlen in StatsGrid animiert hochzählen lassen per Intersection Observer + Client Component.

---

## Navigation-Verfeinerungen

### Varianten
- **Navigation** (Standard) — Logo links, Links + CTA rechts
- **NavigationCentered** — Logo zentriert oben, Links + CTA horizontal darunter

### Props (beide Varianten)
| Prop | Default | Beschreibung |
|------|---------|-------------|
| `sticky` | `true` | Sticky an/aus |
| `transparent` | `false` | Durchsichtig oben, fadet beim Scrollen ein. Für immersive Layouts mit Fullscreen-Hero. |
| `ctaText` | `"Kontakt"` | Button-Text |
| `ctaHref` | `#contact` | Button-Ziel |
| `ctaVariant` | `"default"` | Button-Stil: default (gefüllt), outline, ghost |
| `borderBottom` | `true` | Untere Border an/aus |
| `hideOnScroll` | `false` | Versteckt sich beim Runterscrollen, erscheint beim Hochscrollen |
| `compactOnScroll` | `false` | Höhe schrumpft beim Scrollen (h-20 → h-16) |
| `logoSize` | `"default"` | Logo-Größe: sm, default, lg |
| `showPhone` | `false` | Telefonnummer neben CTA anzeigen |
| `navAlignment` | `"right"` | Links rechtsbündig (default) oder zentriert |

### TopBar (Announcement-Bar)
`<TopBar>` Komponente über der Navigation. Props: `text`, `href` (optional), `linkText` (optional).
```tsx
<TopBar text="🎉 Jetzt 20% Rabatt" href="/angebot" linkText="Mehr erfahren" />
<Navigation />
```
Refinement: `dismissable`-Prop mit Schließen-Button (X).

### Weitere Refinement-Ideen

#### Hamburger-Menu auch auf Desktop
Navigation auf Burger reduzieren für minimale Layouts (minimalStatement Archetyp).

#### Mobile Menu Fullscreen
Statt Dropdown-Panel ein Fullscreen-Overlay mit zentrierter Navigation. Links in `text-display` Größe für maximale Wirkung.

#### Scroll-Fortschrittsbalken
Dünner farbiger Balken am oberen Viewport-Rand der den Scroll-Fortschritt zeigt. Client Component mit Scroll-Listener.

#### Back-to-Top Button
Schwebender Button unten rechts der ab einer bestimmten Scroll-Position erscheint. Mit Pfeil-Icon, opacity-Transition.

#### TopBar dismissable
`dismissable`-Prop auf TopBar: Schließen-Button rechts, Zustand in sessionStorage damit die Bar nach Schließen nicht wiederkommt.

---

## Section-Verfeinerungen

### Section-Trenner (Wellen, schräge Kanten)
SVG-Shape zwischen Sections einfügen: `<svg className="w-full h-16" viewBox="0 0 1200 120">` mit einer Wellen- oder Winkel-Form. Füllung in `fill-background` oder `fill-muted` passend zur nächsten Section.

### Nummerierte Section-Headings
"01", "02" etc. vor dem Section-Heading: `<span className="text-primary text-body-lg font-heading block mb-2">01</span>` über der `.section-heading`. Erzeugt einen strukturierten, editorialen Look.

### Social Proof Bar
Kompakte Zeile mit Text + Logos: "Vertraut von 500+ Unternehmen" gefolgt von kleinen Logos. `flex items-center gap-6` mit `grayscale opacity-50` auf den Logos. Kann zwischen Hero und erste Section platziert werden.

### Hintergrund-Glow (Farbige Blur-Kreise)
Dekorative Farbkreise hinter Content: `absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10`. Mehrere mit verschiedenen Positionen und Farben (`bg-accent/10`) für Tiefe. Section braucht `relative overflow-hidden`.

### Hintergrund-Muster (Dot-Grids, Texturen)
Subtiles Punkt-Raster hinter Sections: `background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px); background-size: 24px 24px;` als Inline-Style oder eigene CSS-Klasse auf der Section.

### Gradient-Text auf Headlines
Farbverlauf auf Headings: `bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent` auf dem `<h1>` oder `<h2>`. Funktioniert mit allen Farbwelten weil es die Token-Farben nutzt.

### Gallery Lightbox
Bilder in GalleryGrid klickbar machen: Client Component die bei Klick ein Overlay mit dem vergrößerten Bild zeigt. `fixed inset-0 z-50 bg-black/80 flex items-center justify-center` mit `<img className="max-w-[90vw] max-h-[90vh] object-contain">`.

### Contact Split (Karte + Formular nebeneinander)
MapEmbed und ContactSimple in einem `grid lg:grid-cols-2` kombinieren statt als getrennte Sections. Karte links, Formular rechts. In `page.tsx` als eigene Section zusammenstellen.

---

## Footer-Verfeinerungen

### Varianten
- **Footer** (Standard) — 4-Spalten: Logo+Tagline+Social, Navigation, Kontakt, Legal-Leiste
- **FooterMinimal** — Eine Zeile: Logo | Legal-Links | Copyright
- **FooterExtended** — 6-Spalten mit Newsletter-Feld, Navigation, Kontakt, Social Icons
- **FooterCentered** — Alles zentriert gestapelt: Logo → Tagline → Links → Social → Copyright

### Props (alle Varianten)
| Prop | Verfügbar in | Default | Beschreibung |
|------|-------------|---------|-------------|
| `bg` | alle | `'foreground'` | Hintergrund: `'foreground'` (dunkel), `'primary'` (Markenfarbe), `'muted'` (hell) |
| `showSocial` | alle | `true` | Social Icons an/aus |
| `showContact` | Footer, FooterExtended | `true` | Kontakt-Spalte an/aus |
| `showNewsletter` | FooterExtended | `true` | Newsletter-Feld an/aus |
| `newsletterText` | FooterExtended | `'Bleiben Sie...'` | Text über dem Newsletter-Input |
| `showTagline` | FooterCentered | `true` | Tagline unter Logo an/aus |

### Refinement-Ideen

#### Footer mit Bild/Pattern
Hintergrundbild oder subtiles Pattern im Footer. `bg-cover bg-center` mit Overlay.

#### Newsletter mit Bestätigung
FooterExtended Newsletter-Feld mit Erfolgs-/Fehlermeldung nach Absenden. Client Component mit State.

#### Social Icons größer
Social Icons von 20px auf 24px oder 28px. Oder als gefüllte Varianten (`weight="fill"` statt `"regular"`).

---

## Blog-Verfeinerungen

### Featured Post (erster Beitrag größer)
Erster Beitrag im BlogGrid über volle Breite: `col-span-2 lg:col-span-3` auf dem ersten `<article>`, Bild im Querformat, größerer Titel (`text-xl` statt `text-subtitle`).

### Lesezeit-Anzeige
Geschätzte Lesezeit neben dem Datum: `<span>5 Min. Lesezeit</span>` in der Meta-Zeile. Berechnung: Wortanzahl / 200.

### Autoren-Avatar
Kleines rundes Bild neben dem Autorennamen: `<img className="w-6 h-6 rounded-full" />` vor `<span>{post.author}</span>` in der Meta-Zeile.

### Kategorie-Tags
Farbige Badges über dem Titel: `<span className="badge-pill mb-3">{category}</span>`. Kann klickbar sein für Filterung.

---

## Pricing-Verfeinerungen

### Monatlich/Jährlich Toggle
Client Component mit Switch der zwischen zwei Preissets wechselt. Jährlich zeigt reduzierten Preis mit durchgestrichenem Originalpreis.

### "Beliebteste Wahl" Hervorhebung
`ring-2 ring-primary scale-105` auf der mittleren Preiskarte. Badge oben: `<span className="badge-pill bg-primary text-background">Beliebteste Wahl</span>`.

### Feature-Vergleichstabelle
Tabelle mit Checkmarks statt Feature-Listen. `<table>` mit `text-center` und Check/X Icons pro Feature und Plan.

---

## Process-Verfeinerungen

### Horizontale Timeline
Statt vertikaler Karten eine horizontale Linie mit Punkten und Beschreibungen darunter. `flex` statt `grid`, verbindende Linie via `border-t` zwischen den Punkten.

### Verbindende animierte Linie
Die Linie zwischen den Prozess-Schritten füllt sich beim Scrollen mit Farbe. Client Component mit Scroll-Listener der die `width` eines `bg-primary` Elements basierend auf Scroll-Position berechnet.

---

## Team-Verfeinerungen

### Social-Links bei Hover
Icons für LinkedIn, E-Mail etc. die beim Hover über das Porträt eingeblendet werden: `opacity-0 group-hover:opacity-100 transition-opacity` auf einem Overlay über dem Bild.

### Größere Team-Fotos
`w-56 h-56` statt `w-40 h-40` für präsentere Porträts. Oder quadratische Karten statt runde Bilder: `rounded-2xl aspect-square` statt `rounded-full`.

### 2er-Raster statt 3er
`lg:grid-cols-2` statt `lg:grid-cols-3` für weniger Teammitglieder. Karten werden breiter, Fotos größer.

### Flachere Bilder bei TeamCards
`aspect-[3/4]` → `aspect-[4/3]` oder `aspect-square` auf dem ImageSlot. Weniger Bildhöhe, kompaktere Karten.

### TeamCards ohne Kacheln
`border-transparent bg-transparent shadow-none rounded-none` auf den Cards. Bilder und Text fließen ohne Rahmen. Kann mit `px-0` für randlose Darstellung kombiniert werden.

### TeamCards — Info-Kachel über Bildkante
Text-Bereich als separate Karte die halb über das Bild ragt: `relative -mt-8 mx-4 bg-card rounded-2xl p-6 shadow-lg z-10`. Bild ohne unteren Radius (`rounded-t-2xl rounded-b-none`). Erzeugt einen schwebenden Karten-Effekt.

### TeamCards — Horizontale Karten (Bild links, Text rechts)
`flex flex-row` statt vertikaler Stapelung auf jeder Card. Bild mit `w-1/3 aspect-square object-cover`, Text rechts mit `flex-1 p-6`. Kompakter, gut für 2-Spalten Grid mit vielen Teammitgliedern.

### TeamGrid — Bio bei Hover
Bio standardmäßig versteckt, erscheint als Overlay beim Hover über das Porträt: `absolute inset-0 bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center` auf einem Overlay-Div über dem Bild.

### Team — Abteilungs-Gruppierung
Teammitglieder nach Abteilung gruppiert: Tabs (`<Tabs>`) mit je einem Grid pro Tab. Oder Abschnitts-Headings zwischen den Gruppen.

### TeamGrid — Farbiger Ring nach Rolle
`ring-primary` / `ring-accent` / `ring-success` statt `ring-card` auf dem Porträt-Ring. Farbe abhängig von Abteilung oder Rolle für visuelle Unterscheidung.

### Team — Einzelnes Highlight-Mitglied
Ein Teammitglied groß im Split-Layout: Bild links, Name + Rolle + ausführliche Bio rechts. Für Geschäftsführer oder Gründer. Gleiche Struktur wie AboutSplit.

### TeamCards randlos (Fullwidth)
`container-narrow` durch `px-0` ersetzen. Karten gehen bis zum Viewport-Rand. Bilder ohne Rundung (`rounded-none`).

---

## Stats-Verfeinerungen

### Animierte Counter
Zahlen zählen beim Einblenden von 0 zum Zielwert hoch. Client Component mit IntersectionObserver + `setInterval`. Dauer ~2 Sekunden.

### Stats in farbigen Kacheln
Jeder Stat in einer eigenen `bg-muted rounded-2xl p-8` Kachel. Oder abwechselnd `bg-primary` mit `text-background`.

### Stats mit Icons
Icon über oder neben der Zahl: `<IconWrapper>` mit dem passenden Icon pro Stat.

### Stats als Fortschrittsbalken
Horizontale Balken statt großer Zahlen: `<div className="h-2 bg-muted rounded-full"><div className="h-full bg-primary rounded-full" style={{width: '85%'}} />`. Prozentuale Darstellung.

### Stats in einer Zeile mit Trennern
Statt Grid alle Stats in einer `flex justify-center divide-x divide-border` Zeile. Kompakter, gut als Trenner zwischen Sections.

### Stats mit Trend-Indikator
Pfeil hoch/runter + Prozentwert neben der Zahl: `<span className="text-success text-base ml-2">↑ 23%</span>`. Zeigt Veränderung/Wachstum.

### Stats mit Kreisdiagramm
Donut-Ring statt Zahl: SVG `<circle>` mit `stroke-dasharray` für den Fortschritt. Prozentwert in der Mitte. Gut für Completion-Rates, Zufriedenheit.

### Stats auf farbigem Hintergrund
`bg-primary` auf der Section, Zahlen und Labels in `text-background`. Gleiche Technik wie CTA-Sections. Visueller Akzent zwischen hellen Sections.

### Stats mit dekorativer Hintergrund-Zahl
Riesige transparente Zahl hinter jedem Stat: `absolute text-[10rem] font-heading text-muted/10 -z-10 top-0 left-1/2 -translate-x-1/2`. Dezenter visueller Effekt.

### Stats vertikal gestapelt
Untereinander statt nebeneinander: `flex flex-col divide-y divide-border max-w-md mx-auto`. Jeder Stat als Zeile mit Zahl links und Label rechts. Kompakt, editorial.

### Stats als Marquee
Zahlen laufen horizontal durch wie ein Börsenticker: `<Carousel>` Komponente mit Stats als Items. `speed={20}` für langsames Durchlaufen.

---

## Process-Verfeinerungen

### Horizontale Timeline
Statt vertikaler Karten eine horizontale Linie: `flex` statt `grid`, verbindende Linie via `border-t-2 border-border`. Nummern/Icons auf der Linie, Beschreibung darunter.

### Klickbare Steps
Klick auf einen Step öffnet Details: Client Component mit `useState` für aktiven Step. Inaktive Steps zeigen nur Nummer + Titel.

### Verbindende Pfeile
SVG-Pfeile zwischen den Steps statt einfacher Linie: `→` Icons oder custom SVG zwischen den Karten.

### Process als Tabs
Jeder Step als Tab: `<Tabs>` mit Step-Nummer + Titel als TabsTrigger, Details als TabsContent. Kompakt, alles auf einer Höhe.

### ProcessSteps — Abwechselnd versetzt (Zickzack)
`odd:mt-16` oder `even:mt-16` auf den Grid-Items. Steps springen abwechselnd nach oben und unten. Verbindende Linie passt sich an. Visuell dynamischer als die lineare Variante.

### Process mit Bildern
Bild pro Step neben der Beschreibung: Ähnlich FeaturesAlternating aber mit Nummern statt Icons.

---

## FAQ-Verfeinerungen

### Suchfeld über den FAQs
`<Input placeholder="Frage suchen..." />` über dem Akkordeon. Client Component die FAQs nach Eingabe filtert.

### FAQ-Kategorien
FAQs gruppiert nach Kategorie mit Tabs oder Abschnitts-Headings. `<Tabs>` Komponente mit je einem `<TabsContent>` pro Kategorie.

### Icon vor der Frage
Kleines Icon (z.B. `chat-circle`) vor jedem AccordionTrigger für visuellen Ankerpunkt.

### Nummerierte Fragen
"01", "02" etc. statt Akkordeon-Pfeil: `<span className="text-primary font-heading mr-4">01</span>` vor dem Frage-Text im AccordionTrigger. Editorialer Look.

### Farbiger Seitenrand auf aktivem Item
`border-l-4 border-primary` auf dem aktiven AccordionItem statt Standard-Border. Hebt die offene Frage visuell hervor.

### Alle Antworten sichtbar (kein Akkordeon)
Fragen und Antworten als einfache Liste ohne Klapp-Mechanik: `<div>` statt `<Accordion>`. Frage als `card-title`, Antwort als `card-description` darunter. `divide-y divide-border` als Trenner.

### CTA am Ende der FAQ
"Frage nicht beantwortet?" mit Kontakt-Button nach dem letzten FAQ-Item: `<div className="text-center mt-12"><p className="text-muted-foreground mb-4">...</p><LinkButton href="#contact">Kontakt aufnehmen</LinkButton></div>`.

### FAQ in zwei Spalten
Fragen auf zwei Spalten verteilt: `grid md:grid-cols-2 gap-6` statt einspaltigem Akkordeon. Jede Spalte bekommt die Hälfte der FAQs.

---

## Opening Hours-Verfeinerungen

### Hinweis-Text pro Tag
Zusätzliche Info neben den Zeiten: "Mittwochs nur mit Termin", "Freitags verkürzt". Als `text-muted-foreground italic` hinter den Uhrzeiten.

### "Nächste Öffnung" Countdown
Wenn aktuell geschlossen: "Öffnet wieder in 3 Std 20 Min" als `text-primary font-medium` unter der Tabelle. Client Component mit `setInterval`.

### Visueller Zeitstrahl
Balken pro Tag statt Uhrzeit-Text: horizontale Bars die die Öffnungszeit visuell darstellen. `<div className="h-3 bg-primary rounded-full" style={{width: '60%'}}>` proportional zur Öffnungsdauer.

### Opening Hours mit Icons
Kleines Icon pro Tag: Sonne für Werktage, Mond für Wochenende, Stern für Feiertage. `<IconOrEmoji>` vor dem Tagesnamen.

---

## Gallery-Verfeinerungen

### Masonry-Layout
Statt gleichmäßigem Grid ein Pinterest-artiges Layout: `columns-2 lg:columns-3 gap-4` statt `grid`. Bilder mit unterschiedlichen Höhen fließen natürlich.

### Filter nach Kategorie
Buttons über der Galerie die nach Kategorie filtern. Client Component mit `useState` für aktive Kategorie, `filter()` auf den Bildern.

### Hover-Overlay mit Titel
Dunkles Overlay mit Titel beim Hover über ein Galerie-Bild: `absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4`.

### Gallery Carousel
Bilder laufen horizontal durch statt Grid. Nutzt `<Carousel>` Komponente. Gut für wenige große Bilder.

### Verschiedene Aspect Ratios
Bilder im Grid mit verschiedenen Seitenverhältnissen: erstes Bild `col-span-2 aspect-[16/9]`, Rest `aspect-square`. Für visuell interessantere Layouts.

### Gallery Fullwidth
`container-narrow` durch `px-0` ersetzen. Bilder gehen bis zum Viewport-Rand. `gap-2` statt `gap-6` für engeres Raster.

---

## Portfolio-Verfeinerungen

### Portfolio als reine Bilder (Gallery-Stil)
Titel und Beschreibung entfernen, nur Bilder im Grid. Info erscheint bei Hover: `absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity` mit Titel + Kategorie als Overlay-Text. Wie Gallery aber mit Projekt-Kontext.

### Farbfläche statt Bild
Statt `imageSrc` eine farbige Kachel: `bg-primary` oder `bg-muted` mit Titel und Text darauf. Gut für Projekte ohne Bilder oder als abstraktes Design-Element.

### Portfolio Masonry
`columns-2 lg:columns-3 gap-4` statt Grid. Karten mit unterschiedlichen Höhen (je nach Beschreibungslänge) fließen natürlich.

### Portfolio Fullwidth
`container-narrow` durch `px-0` ersetzen. Karten gehen bis zum Viewport-Rand.

---

## Übergreifende Grid-Verfeinerungen (Blog, Portfolio, Gallery)

Die folgenden Refinements gelten für alle Grid-basierten Sections (BlogGrid, PortfolioGrid, GalleryGrid):

### Masonry statt Grid
`columns-2 lg:columns-3 gap-4` statt `grid`. Items mit unterschiedlichen Höhen fließen natürlich. Gilt für Blog, Portfolio und Gallery.

### Filter nach Kategorie
Buttons über dem Grid: Client Component mit `useState` für aktive Kategorie, `filter()` auf den Items. Gilt für Blog (Tags), Portfolio (Kategorien), Gallery (Alben).

### Hover-Effekt Bild-Zoom
`group-hover:scale-105 transition-transform duration-500` auf dem Bild-Element. Gilt für alle drei.

### Fullwidth/Randlos
`container-narrow` durch `px-0` ersetzen, `gap-2` für enges Raster. Gilt für alle drei.

### Ohne Kacheln
`border-transparent bg-transparent shadow-none rounded-none` auf den Cards. Content ohne Rahmen. Gilt für Blog und Portfolio.

---

## Blog-Verfeinerungen

### Featured Post (erster Beitrag größer)
Erster Beitrag im BlogGrid über volle Breite: `col-span-2 lg:col-span-3` auf dem ersten `<article>`, Bild im Querformat, größerer Titel.

### Sidebar-Layout
Hauptinhalt links (2/3), Sidebar rechts (1/3) mit Kategorien, beliebten Beiträgen, Newsletter-Signup. `grid lg:grid-cols-[2fr_1fr] gap-12`.

### Tags als Filter
Klickbare Kategorie-Tags über dem Grid: Client Component die Posts nach Klick filtert. `flex flex-wrap gap-2` mit `badge-pill` Buttons.

### Lesezeit-Anzeige
Geschätzte Lesezeit neben dem Datum: Wortanzahl / 200. `<span className="text-muted-foreground">5 Min. Lesezeit</span>`.

### Autoren-Avatar
Rundes Bild neben Autorennamen: `<img className="w-6 h-6 rounded-full inline mr-2" />`.

### Blog ohne Bilder
Reine Text-Liste statt Karten: Datum + Titel + Excerpt ohne Thumbnail. Kompakt, editorial.

### Blog-Karte mit Bild-Overlay
Karte mit Vollbild-Thumbnail: `relative overflow-hidden` auf der Karte, Bild als `absolute inset-0 object-cover`, `overlay-gradient-bottom` darüber, Text mit `absolute bottom-0 p-6 overlay-text`. Titel und Teaser liegen auf dem Bild. Visuell stark, gut für Featured Posts.

### Blog — Featured + Grid Layout
Layout-Komposition in `page.tsx`: Featured Post als große Karte links (oder oben über volle Breite), restliche Posts als 2×2 Grid oder Liste rechts daneben. `grid lg:grid-cols-[2fr_1fr] gap-8` mit Featured links und gestapelter Liste rechts.

### Blog — HeroSplit als Featured Post
HeroSplit mit Blog-Daten: Bild links, Titel + Teaser + Datum + "Weiterlesen" Button rechts. Claude nutzt HeroSplit direkt mit Blog-Inhalten statt einer eigenen Blog-Variante.

### Horizontale Blog-Karten
Bild links, Text rechts: `flex flex-row` auf der Karte. Bild mit `w-1/3 aspect-square object-cover`, Text mit `flex-1 p-6`. Kompakter als vertikale Karten.

### Bild-Zoom bei Hover
`group-hover:scale-105 transition-transform duration-500` auf dem Thumbnail-Bild. Subtiler Zoom-Effekt beim Hovern über die Karte.

### "Mehr laden" Button
Statt Pagination ein Button unter dem Grid: Client Component mit `useState` die `limit` erhöht. `<Button variant="outline">Mehr Beiträge laden</Button>`.

### Datum als dekoratives Element
Tag und Monat groß links, Titel rechts daneben: `grid grid-cols-[80px_1fr] gap-4`. Tag als `text-title font-heading text-primary`, Monat als `text-base text-muted-foreground uppercase`. Editorial, magazinartig.

### Newsletter-Signup zwischen Posts
CTA-Banner nach dem 3. Post im Grid einfügen: `col-span-full` auf dem CTA-Element. E-Mail-Input + Button. Unterbricht den Grid-Flow für Aufmerksamkeit.

### Kategorie-Farbakzent
Farbiger Top-Border pro Kategorie: `border-t-4` mit verschiedenen Farben (`border-primary`, `border-accent`, `border-success`). Visuell unterscheidbar welche Kategorie ein Post hat.

---

## Opening Hours-Verfeinerungen

### Kompakte Inline-Darstellung
Statt Tabelle eine Zeile: "Mo–Fr: 08:00–18:00 · Sa: geschlossen · So: geschlossen". Gut für Footer oder Sidebar.

### "Jetzt geöffnet" Hervorhebung
Grüner Badge neben dem aktuellen Tag: `<span className="text-success font-medium">Jetzt geöffnet</span>` wenn aktuelle Uhrzeit im Zeitfenster.

### Mit Feiertagen/Sonderzeiten
Zusätzliche Zeilen für Feiertage oder Betriebsferien: `border-t-2 border-primary/20 mt-4 pt-4` als Trenner.

### Opening Hours als Kachel
Tabelle in `bg-muted rounded-2xl p-8`. Kann in eine Sidebar oder neben das Kontaktformular gesetzt werden.

---

## Partners/LogoBar-Verfeinerungen

### Farbige Logos statt Grayscale
`grayscale` Klasse entfernen. Logos permanent in Farbe für mehr visuelle Präsenz.

### Logos mit Beschreibung
Kurzer Text unter jedem Logo: Partnername + Kurztext. `text-center mt-2 text-base text-muted-foreground`.

### Logos verlinkt
Jedes Logo als `<a href>` zum Partner. `hover:scale-105 transition-transform` für subtilen Hover-Effekt.

### Logos in verschiedenen Größen
Wichtige Partner größer (`h-12`), kleinere Partner standard (`h-8`). Visuelle Hierarchie.

### LogoBar Carousel
Logos laufen horizontal durch. Ist als `carousel` Prop eingebaut. Gut bei vielen Partnern.

### Logos in zwei versetzten Reihen
Zwei `<Carousel>` übereinander: `mt-4` auf dem zweiten, leicht andere `speed`. Versetzter Laufband-Effekt. Gleiche Technik wie bei Testimonials.

### Logos auf dunklem Hintergrund
`bg-foreground` statt `bg-muted` auf der Section. Logos in `invert` oder ohne `grayscale` damit sie auf Dunkel sichtbar sind. Karten mit `bg-card` oder `border-background/10`.

### "Bekannt aus" / Presse-Logos
Heading ändern auf "Bekannt aus" oder "In den Medien". Logos von Zeitungen/Magazinen statt Partnerfirmen. Gleiche Komponente, anderer Kontext.

### Logos mit Tooltip
Partnername erscheint bei Hover als Tooltip: `title={partner.name}` auf dem Container oder ein custom Tooltip mit `absolute` Positionierung.

---

## Map-Verfeinerungen

### Dark-Mode Karte
OpenStreetMap mit dunklem Tile-Layer: `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png`. Passt zu dunklen Farbwelten.

### Multiple Standorte
Mehrere Marker auf einer Karte. Array von Koordinaten statt einzelnem lat/lng. Dropdown oder Liste zum Wechseln zwischen Standorten.

### Custom Marker
Eigener Marker statt Standard-Pin: SVG-Icon oder Logo als Marker. Via Leaflet oder als CSS-Overlay über dem iframe.

### Overlay mit Wegbeschreibung
Karte mit einer schwebenden Card: `absolute bottom-4 left-4 bg-card rounded-2xl p-6 shadow-lg max-w-sm z-10`. Card zeigt Adresse + "Route planen" Button der zu Google Maps verlinkt.

### Karte als Fullwidth-Hintergrund
Map über volle Breite ohne Container: `max-w-none px-0 h-[400px]`. Kann als Trenner zwischen Sections oder am Seitenende stehen.

---

## About-Verfeinerungen

### Timeline/Geschichte
Vertikale Timeline mit Jahreszahlen und Meilensteinen. Mittellinie via `border-l-2 border-primary`, Punkte als `w-4 h-4 rounded-full bg-primary absolute`, Inhalte abwechselnd links/rechts.

### Mission-Vision-Values Blöcke
Drei gleichwertige Karten nebeneinander: Mission, Vision, Werte. Jede mit Icon, Titel und Text. Kann FeaturesGrid mit 3 Spalten nutzen.

### Tags/Badges für Schwerpunkte
Pill-Badges unter der Bio: `flex flex-wrap gap-2 mt-6` mit `<span className="badge-pill">Schwerpunkt</span>` pro Tag. Für Therapeuten, Berater, Spezialisten.

### About Split mit Video
`<video>` statt `<img>` im AboutSplit. Autoplay/Loop oder Play-Button Overlay. Für Unternehmensvideos, Praxisrundgänge.

### About mit Zahlenwerten im Fließtext
Wichtige Zahlen inline hervorgehoben: `<span className="text-primary font-heading font-bold">15+</span> Jahre Erfahrung` im Fließtext statt separater Stats-Section.

### Gründer-Zitat
Großes Zitat vom Inhaber unter dem About-Text: `<blockquote className="text-xl font-heading italic text-foreground mt-8">` mit Name und Rolle darunter. Kann `TestimonialHighlight` Komponente nutzen.

### Auszeichnungen/Zertifikate
Logo-Zeile unter dem About-Text: `flex gap-8 items-center mt-8` mit kleinen Logos (`h-8 grayscale opacity-60`). Für ISO, Google Partner, Auszeichnungen.

### "Seit [Jahr]" Badge
Großer Jahreszahl-Badge neben der Headline: `<span className="text-display font-heading text-primary/20">2010</span>` als dekoratives Element. Oder als `badge-pill` über der Headline.

### About mit Hintergrundbild
Fullwidth Bild mit Overlay und Text drüber: gleiche Technik wie HeroImageOverlay mit Overlay-Klassen. Für emotionale About-Sections mit Teamfoto im Hintergrund.

### Erweiterbarer Text
Erster Absatz sichtbar, Rest ausgeblendet: `max-h-[120px] overflow-hidden` mit "Mehr erfahren" Button der `max-h-none` setzt. Client Component mit `useState`.

### Unterschrift/Signatur
Handschriftliches Element unter dem Text: `<img src="/images/signature.png" className="h-12 w-auto mt-6 opacity-70" />`. Persönliche Note für Inhaber/Gründer-Seiten.

---

## Formular-Verfeinerungen

### Floating Labels
Labels die im Input sitzen und beim Fokus nach oben gleiten: `peer` + `peer-focus:-translate-y-6 peer-focus:text-xs` auf dem Label, Input mit `placeholder=" "`. Moderner Look.

### Inline Validierung
Fehlermeldungen direkt unter dem Feld: `<span className="text-destructive text-base mt-1">` mit `aria-invalid` Attribut auf dem Input.

### ContactSplit — Kontaktinfos in farbiger Kachel
Rechte Spalte in `bg-primary rounded-2xl p-8` einwickeln. Text mit `overlay-text` Klassen (`text-background`, `text-background opacity-80`). Icons in `text-background`. Erzeugt visuellen Kontrast zwischen Formular und Kontaktdaten.

### ContactSplit — Reihenfolge tauschen
Formular rechts, Kontaktinfos links: `lg:order-2` auf dem Formular-Container. Auf Mobile bleibt die normale Reihenfolge.

### ContactSplit — Fullwidth bis zum Rand
`container-narrow` durch `max-w-none px-0` ersetzen. Bild/Karte geht randlos, Formular-Seite bekommt eigenes Padding (`px-8 lg:px-16`). Gleiche Technik wie FeaturesHighlight fullwidth.

### ContactSplit — Karte statt Bild
MapEmbed als rechte Seite statt ImageSlot: `<iframe>` mit OpenStreetMap direkt in die rechte Spalte. `className="w-full h-full min-h-[400px] rounded-2xl"` auf dem iframe.

### Contact — Fullwidth Karte mit Kontaktkarten-Overlay
MapEmbed über volle Breite als eigene Section. Kontaktinfo-Card als `absolute` Element darüber positioniert: `absolute top-8 left-8 bg-card rounded-2xl p-8 shadow-lg z-10 max-w-sm`. Karte zeigt den Standort, Card zeigt Adresse/Telefon/E-Mail.

---

## Sonstige Verfeinerungen

### Sticky CTA-Bar am unteren Rand
Feste Leiste am unteren Viewport-Rand mit CTA-Button: `fixed bottom-0 inset-x-0 bg-background border-t border-border py-3 z-50`. Erscheint nach einer bestimmten Scroll-Position.

### 404 Seite mit Illustration
Custom 404 mit großem Bild/Illustration, Heading "Seite nicht gefunden", Subline und Button zurück zur Startseite. Statt der Next.js Default-404.

### Dark-Mode Toggle für Besucher
Client Component die zwischen heller und dunkler Farbwelt wechselt. Speichert Präferenz in localStorage. Mond/Sonne Icon in der Navigation.

---

## Visuelle Effekte

### Grain/Noise Textur
Subtile Körnung über Sections für analogen, hochwertigen Look: `background-image: url('/textures/grain.png'); opacity: 0.05; mix-blend-mode: overlay;` als Pseudo-Element auf der Section.

### Duotone-Bilder
Bilder in zwei Farben der Marke filtern: `mix-blend-mode: multiply` auf dem Bild, `bg-primary` auf dem Container. Oder CSS-Filter: `filter: grayscale(1) sepia(1) hue-rotate(Xdeg)`.

### Bild-Masken (Blob/Kreis-Formen)
Bilder in organische Formen schneiden statt Rechteck: `clip-path: circle(45%)` oder `clip-path: polygon(...)` für Blob-Formen. Oder SVG `clipPath` für komplexere Masken.

### Text-Highlight (Marker-Effekt)
Einzelne Wörter in Headlines farbig hinterlegen: `<mark className="bg-primary/20 px-1 rounded">Wort</mark>`. Oder mit Gradient: `bg-gradient-to-b from-transparent from-60% to-primary/20 to-60%` für Unterstreichungs-Effekt.

### Drop Caps (Initialen)
Erster Buchstabe eines Textblocks vergrößert: `first-letter:text-5xl first-letter:font-heading first-letter:float-left first-letter:mr-3 first-letter:text-primary`. Für editorialen, magazinartigen Look.

### Uppercase Headlines mit Spacing
`uppercase tracking-[0.2em]` auf Headlines für einen luxuriösen, weiträumigen Look. Kombiniert mit leichterem Font-Weight (`font-normal`).

### Dekorative Unterstreichungen
Farbige, gewellte oder dicke Unterstreichungen unter Headlines: `border-b-4 border-primary pb-2` oder `decoration-primary decoration-wavy underline underline-offset-8`.

---

## Content-Muster

### Vergleichstabelle (Wir vs. Andere)
Zweispaltige Tabelle: links eigene Vorteile mit Check-Icons, rechts Wettbewerber mit X-Icons. `grid grid-cols-2` mit grünem/rotem Farbakzent.

### Before/After Bild-Slider
Zwei Bilder übereinander mit einem ziehbaren Trennbalken. Client Component mit `onMouseMove` / `onTouchMove` der die `clip-path: inset()` des oberen Bildes steuert.

### Video-Embed Section
Vollbreiter oder container-breiter Video-Player: `<iframe>` für YouTube/Vimeo oder `<video>` für selbst-gehostete Videos. Mit Play-Button Overlay und Thumbnail bevor das Video geladen wird.

### Newsletter-Signup
Kompakte Zeile mit E-Mail-Input und Button: `flex gap-4` mit `<Input>` und `<Button>`. Kann als eigenständige Section oder als Element im Footer eingebettet werden.

### Awards/Zertifizierungen
Logos oder Badges in einer Zeile: ähnlich LogoBar aber mit Beschriftung darunter ("ISO 9001", "Google Partner", etc.). `flex gap-8 items-center justify-center`.

### Statistiken mit Fortschrittsbalken
Statt großer Zahlenwerte horizontale Balken die den Prozentsatz visualisieren: `<div className="h-2 bg-muted rounded-full"><div className="h-full bg-primary rounded-full" style={{width: '85%'}} />`. Kann mit animiertem Scroll-Trigger kombiniert werden.

### Countdown-Timer
Zählt zu einem bestimmten Datum runter: Tage, Stunden, Minuten, Sekunden. Client Component mit `setInterval`. Für Event-Seiten, Launches, Aktionen.

### Portfolio/Case-Study Karten
Karten mit großem Bild, Projekt-Titel, Kunde und Kategorie-Tag. Ähnlich BlogGrid aber ohne Datum/Autor. Kann auf eine Detailseite verlinken.

### Multi-Step Formular
Formular über mehrere Schritte verteilt: Client Component mit `step` State. Fortschrittsbalken oben, Zurück/Weiter Buttons. Für umfangreiche Anfragen (Konfigurator, Buchung).

### Job-Listings / Karriere
Offene Stellen als Liste oder Karten: Titel, Standort, Beschäftigungsart, kurze Beschreibung. Kann mit Akkordeon kombiniert werden (Klick öffnet Details).

---

## Bild-Optimierung

### next/image statt img
Für Kundenwebsites `next/image` mit `width`, `height` und `placeholder="blur"` statt rohem `<img>`. Automatische WebP-Konvertierung, Lazy Loading, Responsive Sizes.

### Blur-Placeholder beim Laden
`placeholder="blur" blurDataURL="..."` auf next/image. Zeigt eine unscharfe Version des Bildes während es lädt. Kann mit einem Tool wie `plaiceholder` generiert werden.

---

## Hinweise für Claude

- Alle Verfeinerungen nutzen bestehende Design-Tokens — keine hardcodierten Farben
- Verfeinerungen werden in page.tsx oder per className-Prop angewendet, nicht im Template selbst
- Mehrere Verfeinerungen können kombiniert werden
- Im Zweifel: weniger ist mehr. Nicht jede Seite braucht jede Verfeinerung
- Visuelle Effekte (Grain, Glow, Gradient-Text) sparsam einsetzen — ein Effekt pro Seite reicht
- Performance beachten: next/image bevorzugen, Animationen nur wo nötig, Client Components minimal halten
