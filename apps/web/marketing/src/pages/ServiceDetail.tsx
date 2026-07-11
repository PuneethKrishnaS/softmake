import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Check, HelpCircle } from 'lucide-react';
import { servicesRegistry } from '../data/servicesData';
import { ContactForm } from '../components/landing';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesRegistry[slug] : undefined;

  if (!service) {
    return (
      <div className="max-w-[1440px] mx-auto py-24  text-center bg-background text-foreground flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
          Service Capability Not Found
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-md leading-relaxed">
          The requested service page does not exist or has been restructured. Explore our core capability indices.
        </p>
        <Link
          to="/services"
          className="mt-8 bg-primary hover:bg-primary/95 text-primary-foreground border border-primary font-bold py-3 px-6 rounded-md transition-all shadow-md text-xs md:text-sm uppercase tracking-wider inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          View All Services
        </Link>
      </div>
    );
  }

  const prefilledText = `Hi Softmake.in team, I'd like to inquire about your "${service.title}" capabilities. Specifically, we are looking to achieve:`;

  return (
    <div className="max-w-[1440px] mx-auto text-left bg-background text-foreground">
      
      {/* Back to Catalog navigation link */}
      <div className="mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={13} />
          Back to Service Catalog
        </Link>
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Service Details & Tech Stack */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Header Block */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={11} className="animate-pulse" />
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-sans">
              {service.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground/80 mt-4 leading-relaxed font-sans font-medium">
              {service.tagline}
            </p>
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed mt-4 font-sans">
              {service.desc}
            </p>
          </div>

          {/* Key Deliverables Solutions */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg md:text-xl font-bold font-sans mb-6">Core Solutions & Deliverables</h3>
            <div className="flex flex-col gap-6">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/10 border border-border/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm md:text-base font-bold font-sans">{deliv.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">{deliv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Outcomes */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg md:text-xl font-bold font-sans mb-4">Business Value & Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground font-medium font-sans">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Stack */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg md:text-xl font-bold font-sans mb-3">Deployment Stack</h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md bg-muted text-xs text-muted-foreground font-semibold font-mono border border-border/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Context-Aware Contact Scoping Form */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold font-sans">Request Service Roadmap</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Submit your specific requirements below to schedule a direct consultation for {service.title} with a systems architect.
            </p>
          </div>
          <ContactForm prefilledMessage={prefilledText} />
        </div>

      </div>
    </div>
  );
}
