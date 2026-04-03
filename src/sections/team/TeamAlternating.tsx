import ImageSlot from '@/components/ui/ImageSlot';
import { cn } from '@/lib/utils';
import type { TeamMember } from './TeamGrid';

export interface Props {
  members: TeamMember[];
  heading?: string;
  subheading?: string;
}

export default function TeamAlternating({
  members = [],
  heading = 'Unser Team',
  subheading = 'Die Menschen hinter unserem Unternehmen',
}: Props) {
  return (
    <section id="team" className="section bg-background">
      <div className="container-narrow">
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="space-y-24" data-animate="fade-up">
          {members.map((member, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={member._id}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={cn('order-1', isReversed ? 'lg:order-2' : 'lg:order-1')}>
                  <ImageSlot
                    src={member.image}
                    alt={member.name}
                    position={`team-alt-${i + 1}`}
                    label={`Teamfoto ${member.name}`}
                    briefing={`Porträtfoto von ${member.name}, ${member.role}`}
                    format="portrait"
                    priority="must-have"
                    category="photo-custom"
                    className="w-full aspect-[3/4] rounded-2xl overflow-hidden"
                    gradientClass="bg-gradient-to-br from-primary/5 to-primary/10"
                  />
                </div>

                <div className={cn('order-2', isReversed ? 'lg:order-1' : 'lg:order-2')}>
                  {member.role && (
                    <p className="text-primary font-medium text-base uppercase tracking-wide mb-2">
                      {member.role}
                    </p>
                  )}

                  <h3 className="text-title font-heading text-foreground">
                    {member.name}
                  </h3>

                  {member.bio && (
                    <p className="text-body-lg text-muted-foreground mt-4 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {(member.email || member.phone) && (
                    <div className="flex gap-6 mt-6 text-base text-muted-foreground">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                          {member.email}
                        </a>
                      )}
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                          {member.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
