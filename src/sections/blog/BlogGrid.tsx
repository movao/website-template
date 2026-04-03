import ImageSlot from '@/components/ui/ImageSlot';
import Carousel from '@/components/ui/Carousel';
import { cn } from '@/lib/utils';

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  author?: string;
}

export interface Props {
  posts: BlogPost[];
  heading?: string;
  subheading?: string;
  limit?: number;
  featured?: boolean;
  columns?: 2 | 3 | 4;
  carousel?: boolean;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function PostCard({ post, i, isFeatured, isCarousel }: { post: BlogPost; i: number; isFeatured?: boolean; isCarousel?: boolean }) {
  return (
    <article
      key={post._id}
      data-delay={`${((i % 3) + 1) * 100}`}
      className={cn(
        'group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
        isFeatured && 'md:col-span-2 lg:col-span-3',
        isCarousel && 'min-w-[300px] max-w-[360px] shrink-0',
      )}
    >
      <ImageSlot
        position={`blog-thumbnail-${i + 1}`}
        label={`Beitragsbild: ${post.title}`}
        briefing={`Titelbild für Blogbeitrag "${post.title}"`}
        format="landscape"
        priority="nice-to-have"
        category="photo-stock"
        className="aspect-[16/10] overflow-hidden"
        gradientClass="bg-gradient-to-br from-primary/10 to-primary/15"
      />

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.author && (
            <>
              <span>&middot;</span>
              <span>{post.author}</span>
            </>
          )}
        </div>

        <h3 className="card-title group-hover:text-primary transition-colors">
          <a href={`/blog/${post.slug.current}`}>
            {post.title}
          </a>
        </h3>

        {post.excerpt && (
          <p className="mt-2 text-muted-foreground text-base leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <a
          href={`/blog/${post.slug.current}`}
          className="inline-flex items-center mt-4 text-base font-medium text-primary hover:text-accent"
        >
          Weiterlesen
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function BlogGrid({
  posts = [],
  heading = 'Aktuelles',
  subheading = 'Neuigkeiten und Wissenswertes',
  limit = 3,
  featured = false,
  columns = 3,
  carousel = false,
}: Props) {
  const displayPosts = posts.slice(0, limit);

  return (
    <section id="blog" className="section bg-background">
      <div className={cn(carousel ? 'px-4 sm:px-6 lg:px-8' : 'container-narrow')}>
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        {carousel ? (
          <Carousel>
            {displayPosts.map((post, i) => (
              <PostCard key={post._id} post={post} i={i} isCarousel />
            ))}
          </Carousel>
        ) : (
          <div className={cn(
            'grid gap-8',
            columns === 2 && 'md:grid-cols-2',
            columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
            columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
          )} data-animate="fade-up">
            {displayPosts.map((post, i) => (
              <PostCard key={post._id} post={post} i={i} isFeatured={featured && i === 0} />
            ))}
          </div>
        )}

        {posts.length > limit && (
          <div className="text-center mt-12">
            <a href="/blog" className="btn-secondary">
              Alle Beiträge ansehen
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
