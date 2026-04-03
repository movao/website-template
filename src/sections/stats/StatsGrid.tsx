export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Props {
  stats: Stat[];
  heading?: string;
  subheading?: string;
}

export default function StatsGrid({
  stats = [],
  heading = 'In Zahlen',
  subheading = 'Das haben wir bisher erreicht',
}: Props) {
  return (
    <section id="stats" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6"
              data-animate="fade-up"
              data-delay={i * 100}
            >
              <div className="text-display font-heading text-primary mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
