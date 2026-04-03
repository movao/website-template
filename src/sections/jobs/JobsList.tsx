import IconOrEmoji from '@/components/ui/IconOrEmoji';

export interface Job {
  title: string;
  location?: string;
  type?: string;
  description?: string;
  ctaHref?: string;
}

export interface Props {
  jobs: Job[];
  heading?: string;
  subheading?: string;
  ctaText?: string;
}

export default function JobsList({
  jobs = [],
  heading = 'Offene Stellen',
  subheading = 'Werden Sie Teil unseres Teams',
  ctaText = 'Jetzt bewerben',
}: Props) {
  return (
    <section id="jobs" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border" data-animate="fade-up">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6"
              data-delay={`${(i + 1) * 100}`}
            >
              <div className="flex-1">
                <h3 className="card-title mb-1">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-base text-muted-foreground">
                  {job.location && (
                    <span className="flex items-center gap-1.5">
                      <IconOrEmoji icon="map-pin" size={16} className="text-primary shrink-0" />
                      {job.location}
                    </span>
                  )}
                  {job.type && (
                    <span className="flex items-center gap-1.5">
                      <IconOrEmoji icon="clock" size={16} className="text-primary shrink-0" />
                      {job.type}
                    </span>
                  )}
                </div>
                {job.description && (
                  <p className="card-description mt-2">{job.description}</p>
                )}
              </div>
              <a
                href={job.ctaHref || '#contact'}
                className="btn-primary shrink-0 text-center"
              >
                {ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
