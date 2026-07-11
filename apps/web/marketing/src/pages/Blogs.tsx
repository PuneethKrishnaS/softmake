import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, User } from 'lucide-react';
import { blogsRegistry } from '../data/blogsData';

export default function Blogs() {
  const posts = Object.values(blogsRegistry);

  return (
    <div className="max-w-[1440px] mx-auto text-left bg-background text-foreground px-6">
      
      {/* Header Block */}
      <div className="mb-16 max-w-2xl">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Softmake.in Publications</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-sans mt-3">
          Insights on Cloud Architecture & System Migrations
        </h1>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
          Stay informed on corporate multi-tenant database isolation, zero-downtime database transformations, and advanced system performance audits.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border border-border rounded-lg p-6 bg-card text-card-foreground flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              {/* Category eyebrow */}
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                <Sparkles size={10} className="animate-pulse" />
                {post.category}
              </span>

              {/* Title & description */}
              <h2 className="text-xl font-bold font-sans tracking-tight leading-snug hover:text-primary transition-colors">
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed font-sans font-medium">
                {post.tagline}
              </p>
            </div>

            {/* Bottom Meta & Action Row */}
            <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
              <div className="flex flex-col gap-1 text-[11px] text-muted-foreground/80 font-sans font-medium">
                <span className="flex items-center gap-1"><User size={12} className="text-primary/70" />{post.author}</span>
                <span className="flex items-center gap-1"><Clock size={12} className="text-primary/70" />{post.date} • {post.readTime}</span>
              </div>
              
              <Link
                to={`/blogs/${post.slug}`}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 uppercase tracking-wider font-mono shrink-0"
              >
                Read Article
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
