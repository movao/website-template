import ImageSlot from '@/components/ui/ImageSlot';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import Carousel from '@/components/ui/Carousel';
import { cn } from '@/lib/utils';

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

export interface Props {
  members: TeamMember[];
  heading?: string;
  subheading?: string;
  columns?: 2 | 3 | 4;
  carousel?: boolean;
}

function MemberItem({ member, i, isCarousel }: { member: TeamMember; i: number; isCarousel?: boolean }) {
  return (
    <div className={cn('text-center group', isCarousel && 'min-w-[240px] shrink-0')} data-delay={`${((i % 3) + 1) * 100}`}>
      <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-card shadow-lg">
        <ImageSlot
          src={member.image}
          alt={member.name}
          position={`team-portrait-${i + 1}`}
          label={`Teamfoto ${member.name}`}
          briefing={`Porträtfoto von ${member.name}, ${member.role}`}
          format="square"
          priority="must-have"
          category="photo-custom"
          className="w-full h-full rounded-full overflow-hidden"
          gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
        />
      </div>

      <h3 className="card-title">{member.name}</h3>
      <p className="text-primary font-medium text-base mt-1">{member.role}</p>

      {member.bio && (
        <p className="text-muted-foreground mt-3 text-base leading-relaxed max-w-xs mx-auto">
          {member.bio}
        </p>
      )}

      {(member.email || member.phone || member.linkedin) && (
        <div className="flex gap-3 justify-center mt-4">
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <IconOrEmoji icon="envelope" size={18} />
            </a>
          )}
          {member.phone && (
            <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
              <IconOrEmoji icon="phone" size={18} />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors">
              <IconOrEmoji icon="users" size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function TeamGrid({
  members = [],
  heading = 'Unser Team',
  subheading = 'Die Menschen hinter unserem Unternehmen',
  columns = 3,
  carousel = false,
}: Props) {
  return (
    <section id="team" className="section-alt">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        <div className="section-header" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {carousel ? (
          <Carousel fadeFrom="muted">
            {members.map((member, i) => (
              <MemberItem key={member._id} member={member} i={i} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className={`grid sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : columns === 4 ? 'lg:grid-cols-4' : ''} gap-10`} data-animate="fade-up">
            {members.map((member, i) => (
              <MemberItem key={member._id} member={member} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
