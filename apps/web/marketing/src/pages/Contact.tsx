import { Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../components/landing';

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto text-left bg-background text-foreground">
      
      {/* Header Block */}
      <div className="mb-16 max-w-2xl">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Let's Connect</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-sans mt-3">
          Let's engineer your next digital platform together
        </h1>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
          Have an idea or custom software specification you'd like to implement? Drop us a message, and our engineering team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Premium Contact Details Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Email Card */}
          <div className="border border-border rounded-lg p-6 bg-muted/10 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">Direct Channels</h4>
              <a href="mailto:info@softmake.in" className="text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-2">
                info@softmake.in
              </a>
              <span className="text-[11px] text-muted-foreground/80 block mt-1">Send us your detailed RFPs or project briefs.</span>
            </div>
          </div>

          {/* Location Card */}
          <div className="border border-border rounded-lg p-6 bg-muted/10 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">Headquarters</h4>
              <p className="text-sm font-semibold text-foreground mt-2 leading-relaxed">
                Davanagere, Karnataka, India
              </p>
              <span className="text-[11px] text-muted-foreground/80 block mt-1">Our central development hub and engineering office.</span>
            </div>
          </div>

          {/* Support Hours Card */}
          <div className="border border-border rounded-lg p-6 bg-muted/10 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono">Office Hours</h4>
              <p className="text-sm font-semibold text-foreground mt-2 leading-relaxed">
                Monday — Friday, 9:00 AM — 6:00 PM (IST)
              </p>
              <span className="text-[11px] text-muted-foreground/80 block mt-1">Available for scoping audits and project design syncs.</span>
            </div>
          </div>

          {/* Map placeholder or quick brand info */}
          <div className="border border-border rounded-lg p-6 bg-card text-card-foreground mt-2 flex flex-col gap-4">
            <h4 className="text-[9px] font-bold text-primary uppercase tracking-widest font-mono">Softmake.in Standards</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">
              Every custom application is built under NDA, features a lifetime structural durability code warranty, and runs on fully-scalable serverless architecture optimized for high loads.
            </p>
          </div>

        </div>

        {/* Right Column: Reusable Contact Scoping Form Component */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
