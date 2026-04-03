import ImageSlot from '@/components/ui/ImageSlot';
import Carousel from '@/components/ui/Carousel';
import { cn } from '@/lib/utils';

export interface Project {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  imageSrc?: string;
  href?: string;
}

export interface Props {
  projects: Project[];
  heading?: string;
  subheading?: string;
  columns?: 2 | 3 | 4;
  carousel?: boolean;
}

function ProjectCard({ project, i, isCarousel }: { project: Project; i: number; isCarousel?: boolean }) {
  const inner = (
    <>
      <ImageSlot
        src={project.imageSrc}
        position={`portfolio-${i + 1}`}
        label={project.title}
        briefing={`Projektbild: ${project.title}`}
        format="landscape"
        priority="must-have"
        category="photo-custom"
        className="w-full aspect-[4/3] overflow-hidden"
        gradientClass="bg-gradient-to-br from-primary/10 to-accent/5"
      />

      <div className="p-6">
        {project.category && (
          <span className="text-base text-primary font-medium">
            {project.category}
          </span>
        )}
        <h3 className="card-title mt-1">{project.title}</h3>
        {project.description && (
          <p className="card-description mt-2">{project.description}</p>
        )}
      </div>
    </>
  );

  const cardClass = cn(
    'rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
    isCarousel && 'min-w-[300px] max-w-[360px] shrink-0',
  );

  return project.href ? (
    <a key={project._id} href={project.href} className={cn(cardClass, 'group')} data-delay={String((i + 1) * 100)}>
      {inner}
    </a>
  ) : (
    <div key={project._id} className={cardClass} data-delay={String((i + 1) * 100)}>
      {inner}
    </div>
  );
}

export default function PortfolioGrid({
  projects = [],
  heading = 'Unsere Projekte',
  subheading = 'Ausgewählte Arbeiten',
  columns = 2,
  carousel = false,
}: Props) {
  return (
    <section id="portfolio" className="section bg-background">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        {carousel ? (
          <Carousel>
            {projects.map((project, i) => (
              <ProjectCard key={project._id} project={project} i={i} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className={cn(
            'grid gap-8',
            columns === 2 && 'md:grid-cols-2',
            columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
            columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
          )} data-animate="fade-up">
            {projects.map((project, i) => (
              <ProjectCard key={project._id} project={project} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
