import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Tv, CreditCard, Radio, HeartPulse, Factory } from 'lucide-react';
import { industriesRegistry, IndustryItem } from '../data/industriesData';

// Map categories to decorative icons
const categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "Consumer & Media": Tv,
  "Commerce & Finance": CreditCard,
  "Tech & Communications": Radio,
  "Health Industry": HeartPulse,
  "Industrial & Logistics": Factory
};

export default function Industries() {
  const allIndustries = Object.values(industriesRegistry);

  // Group industries by category
  const categoriesMap = allIndustries.reduce((acc, ind) => {
    if (!acc[ind.category]) {
      acc[ind.category] = [];
    }
    acc[ind.category].push(ind);
    return acc;
  }, {} as Record<string, IndustryItem[]>);

  const categories = Object.keys(categoriesMap);

  return (
    <div className="max-w-[1440px] mx-auto text-left bg-background text-foreground ">
      
      {/* Header Block */}
      <div className="mb-16 max-w-2xl">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Industry Verticals</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-sans mt-3">
          Custom Vertical Software Engineered for Operations
        </h1>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
          Select your industry vertical sector below to explore Property Management Systems, Fintech ledger cores, automated assembly trackers, and custom inventory solutions.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((catName) => {
          const Icon = categoryIcons[catName] || Tv;
          const items = categoriesMap[catName];

          return (
            <div key={catName} className="border border-border rounded-lg p-6 bg-card text-card-foreground flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold font-sans tracking-tight leading-snug">{catName}</h2>
              </div>

              {/* Sub-industries links */}
              <div className="flex flex-col gap-3.5 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/industries/${item.slug}`}
                      className="text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary hover:translate-x-[2px] transition-all flex items-center gap-2 group"
                    >
                      <Sparkles size={11} className="text-primary/70 group-hover:text-primary transition-colors shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/60 mt-2">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider font-mono">
                    {items.length} Verticals Available
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="mt-16 border border-border rounded-lg p-8 bg-muted/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-bold font-sans">Need custom vertical development?</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
            We build secure, offline-capable databases and custom ERP solutions designed around your employee workflows.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-primary hover:bg-primary/95 text-primary-foreground border border-primary font-bold py-3 px-6 rounded-md transition-all shadow-md text-xs md:text-sm uppercase tracking-wider inline-flex items-center gap-2 shrink-0"
        >
          Book Scoping Audit
          <ArrowRight size={13} />
        </Link>
      </div>

    </div>
  );
}
