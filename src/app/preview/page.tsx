import { sectionTypes } from './layout';

export default function PreviewIndex() {
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="section-header">
          <h1 className="section-heading">Section Preview</h1>
          <p className="section-subheading mx-auto">
            Alle Section-Typen und ihre Varianten
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionTypes.map((type) => (
            <a
              key={type.slug}
              href={`/preview/${type.slug}`}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h2 className="card-title group-hover:text-primary transition-colors">
                {type.label}
              </h2>
              <p className="card-description">
                /preview/{type.slug}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
