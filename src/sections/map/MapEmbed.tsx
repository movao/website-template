export interface Props {
  heading?: string;
  subheading?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

export default function MapEmbed({
  heading = 'Standort',
  subheading = 'Hier finden Sie uns',
  lat = 51.1657,
  lng = 10.4515,
  zoom = 15,
}: Props) {
  const offset = 360 / Math.pow(2, zoom + 1);
  const bbox = `${lng - offset}%2C${lat - offset}%2C${lng + offset}%2C${lat + offset}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section id="map" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div
          className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
          data-animate="fade-up"
          data-delay="100"
        >
          <iframe
            title="OpenStreetMap Standort"
            src={mapSrc}
            width="100%"
            className="w-full h-[250px] sm:h-[400px]"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(1.05)' }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
