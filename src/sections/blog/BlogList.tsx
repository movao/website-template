import type { BlogPost } from './BlogGrid';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export interface Props {
  posts: BlogPost[];
  heading?: string;
  subheading?: string;
  limit?: number;
}

export default function BlogList({
  posts = [],
  heading = 'Aktuelles',
  subheading = 'Neuigkeiten und Wissenswertes',
  limit = 6,
}: Props) {
  const displayPosts = posts.slice(0, limit);

  return (
    <section id="blog" className="section bg-background">
      <div className="container-narrow">
        {(heading || subheading) && (
          <div className="section-header" data-animate="fade-up">
            {heading && <h2 className="section-heading">{heading}</h2>}
            {subheading && <p className="section-subheading mx-auto">{subheading}</p>}
          </div>
        )}

        <div className="max-w-3xl mx-auto divide-y divide-border" data-animate="fade-up">
          {displayPosts.map((post) => (
            <article key={post._id} className="py-6 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8">
                <h3 className="text-body-lg font-heading text-foreground group-hover:text-primary transition-colors">
                  <a href={`/blog/${post.slug.current}`}>
                    {post.title}
                  </a>
                </h3>
                <time dateTime={post.publishedAt} className="text-sm text-muted-foreground shrink-0">
                  {formatDate(post.publishedAt)}
                </time>
              </div>

              {post.excerpt && (
                <p className="text-base text-muted-foreground mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </article>
          ))}
        </div>

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
