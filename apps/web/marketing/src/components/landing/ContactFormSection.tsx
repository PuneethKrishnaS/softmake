import ContactForm from './ContactForm';

export default function ContactFormSection() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24 relative z-10 border-t border-border bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Column: Info & Details */}
        <div className="lg:col-span-5 text-left">
          <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Get In Touch</span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight mb-6">
            Ready to Build Your System?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-10 font-sans font-medium">
            Tell us about your custom system challenges or software engineering requirements, and our team will get back to you with a roadmap within 24 hours.
          </p>

          {/* Direct Contact info */}
          <div className="flex flex-col gap-6 pt-8 border-t border-border">
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono mb-1">Direct Channels</h4>
              <a href="mailto:info@softmake.in" className="text-sm md:text-base font-bold text-foreground hover:text-primary transition-colors font-sans">
                info@softmake.in
              </a>
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono mb-1">Office Headquarters</h4>
              <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed font-medium">
                Davanagere, Karnataka
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Reusable Contact Form Component */}
        <div className="lg:col-span-7 w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
