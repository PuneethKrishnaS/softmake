import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Clock, User, HelpCircle, List, Link2, ChevronLeft, ChevronRight, Mail, Check } from 'lucide-react';
import { blogsRegistry } from '../data/blogsData';
import MarkdownRenderer, { cleanHeaderId } from '../components/MarkdownRenderer';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogsRegistry[slug] : undefined;

  // Track scroll reading progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  
  // Newsletter subscription simulation
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  // Extract all h2 and h3 headings from markdown text for the Table of Contents
  const headings = blog
    ? blog.content
        .split('\n')
        .filter(line => line.startsWith('## ') || line.startsWith('### '))
        .map(line => {
          const isSub = line.startsWith('### ');
          const text = line.replace(/^#{2,3}\s+/, '').trim();
          return {
            text,
            id: cleanHeaderId(text),
            level: isSub ? 3 : 2
          };
        })
    : [];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blog?.content]);

  if (!blog) {
    return (
      <div className="max-w-[1440px] mx-auto py-24 text-center bg-background text-foreground flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
          Blog Post Not Found
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-md leading-relaxed">
          The requested article does not exist or has been archived. Explore our digital publishing indexes.
        </p>
        <Link
          to="/blogs"
          className="mt-8 bg-primary hover:bg-primary/95 text-primary-foreground border border-primary font-bold py-3 px-6 rounded-md transition-all shadow-md text-xs md:text-sm uppercase tracking-wider inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          View All Articles
        </Link>
      </div>
    );
  }

  // Get Next/Previous preview cards data
  const blogList = Object.values(blogsRegistry);
  const currentIndex = blogList.findIndex(b => b.slug === blog.slug);
  const prevPost = currentIndex > 0 ? blogList[currentIndex - 1] : null;
  const nextPost = currentIndex < blogList.length - 1 ? blogList[currentIndex + 1] : null;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setEmailSubscribed(true);
      setEmailValue('');
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto text-left bg-background text-foreground relative">
      
      {/* Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-[100] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Side Social Share Bar (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-4 fixed left-8 top-1/3 z-40 bg-card border border-border p-2 rounded-full shadow-lg">
        <button
          type="button"
          onClick={handleCopyLink}
          title="Copy Article Link"
          className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all cursor-pointer relative"
        >
          <Link2 size={16} />
          {copiedLink && (
            <span className="absolute left-12 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap shadow font-sans">
              Link Copied!
            </span>
          )}
        </button>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X (Twitter)"
          className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </a>
      </div>

      {/* Back to catalog navigation */}
      <div className="mb-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={13} />
          Back to Insights Catalog
        </Link>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left/Main Column: Article content */}
        <div className="lg:col-span-8">
          {/* Article Header */}
          <div className="mb-10 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={11} className="animate-pulse" />
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-sans">
              {blog.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground/80 mt-4 leading-relaxed font-sans font-medium">
              {blog.tagline}
            </p>
            
            {/* Meta Info Row */}
            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-muted-foreground font-sans font-medium">
              <div className="flex items-center gap-2">
                <User size={14} className="text-primary" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span>{blog.date} • {blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Render MDX parsed content dynamically */}
          <article className="prose max-w-none">
            <MarkdownRenderer content={blog.content} />
          </article>

          {/* Interactive Newsletter Subscription Box */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="border border-border rounded-lg bg-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold font-sans">Join the Softmake.in technical log</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-sm font-medium">
                    Weekly engineering principles regarding SaaS multi-tenancy, ERP migrations, and secure API gateways.
                  </p>
                </div>
              </div>

              {!emailSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2 shrink-0">
                  <input
                    type="email"
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full md:w-48 bg-muted text-foreground border border-border px-3 py-1.5 rounded-md text-xs font-medium focus:outline-none focus:border-primary/80 font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-4 py-1.5 rounded-md transition-all text-xs uppercase tracking-wider shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs font-bold text-primary font-sans">
                  <Check size={14} />
                  <span>Subscribed! Check your inbox.</span>
                </div>
              )}
            </div>
          </div>

          {/* Next / Previous Article Preview Cards */}
          <div className="border-t border-border mt-12 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPost ? (
              <Link 
                to={`/blogs/${prevPost.slug}`}
                className="border border-border rounded-lg p-5 bg-card hover:bg-muted/10 hover:shadow-sm transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono flex items-center gap-1">
                    <ChevronLeft size={12} /> Previous Post
                  </span>
                  <h4 className="text-sm font-bold font-sans mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </div>
                <span className="text-[10px] text-muted-foreground mt-4 block font-medium">
                  {prevPost.date}
                </span>
              </Link>
            ) : (
              <div className="border border-border/40 rounded-lg p-5 bg-card/40 opacity-40 select-none text-left">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  First Article
                </span>
                <p className="text-xs text-muted-foreground mt-2">You are reading our oldest publication.</p>
              </div>
            )}

            {nextPost ? (
              <Link 
                to={`/blogs/${nextPost.slug}`}
                className="border border-border rounded-lg p-5 bg-card hover:bg-muted/10 hover:shadow-sm transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono flex items-center justify-end gap-1 text-right">
                    Next Post <ChevronRight size={12} />
                  </span>
                  <h4 className="text-sm font-bold font-sans mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </div>
                <span className="text-[10px] text-muted-foreground mt-4 block font-medium">
                  {nextPost.date}
                </span>
              </Link>
            ) : (
              <div className="border border-border/40 rounded-lg p-5 bg-card/40 opacity-40 select-none text-left">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  Latest Article
                </span>
                <p className="text-xs text-muted-foreground mt-2">You are reading our latest publication.</p>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Sticky Table of Contents (Outline) */}
        {headings.length > 0 && (
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 border-l border-border/80 pl-6 py-2">
            <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">
              <List size={12} className="text-primary" />
              <span>On this page</span>
            </div>
            
            <nav className="flex flex-col gap-2.5">
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveId(heading.id);
                    }}
                    className={`text-xs md:text-sm font-sans transition-all duration-200 block text-left ${
                      heading.level === 3 ? 'pl-4' : 'pl-0'
                    } ${
                      isActive
                        ? 'text-primary font-bold translate-x-[2px]'
                        : 'text-muted-foreground hover:text-foreground font-medium'
                    }`}
                  >
                    {heading.text}
                  </a>
                );
              })}
            </nav>
          </div>
        )}

      </div>

    </div>
  );
}
