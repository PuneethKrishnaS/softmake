const valuePropositions = [
  {
    index: "01",
    title: "Bespoke Development (No Templates)",
    desc: "We engineer systems from the ground up to fit your corporate operations. You get pure custom architecture designed around your employee tasks and customer workflows."
  },
  {
    index: "02",
    title: "Vetted Senior Engineering Team",
    desc: "Our projects are designed, written, and deployed by experienced full-stack developers. We implement secure coding patterns, robust databases, and zero technical debt."
  },
  {
    index: "03",
    title: "SLA-Backed Performance & Uptime",
    desc: "We optimize all modules for rapid delivery speeds (95+ Lighthouse scores) and build auto-scaling, cloud-native deployments that guarantee high traffic availability."
  },
  {
    index: "04",
    title: "Complete Process Transparency",
    desc: "Follow along with real-time progress via dedicated Slack channels, bi-weekly staging demonstration releases, and complete access to system logs."
  },
  {
    index: "05",
    title: "Ongoing Support & Security Audits",
    desc: "We provide active post-launch monitoring, routine SQL/NoSQL database backups, security updates, and scaling patches to keep your software running."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24 relative z-10 border-t border-border bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Column: Title & Key Stats */}
        <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
          <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Why Partner With Us</span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight mb-8">
            Why Choose Softmake.in?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-10 font-sans font-medium">
            We design and build customized software platforms engineered to align with your exact operational workflows. Our transparent process guarantees speed, reliability, and security at scale.
          </p>
        </div>

        {/* Right Column: Key Value Proposition Stack */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          {valuePropositions.map((prop) => (
            <div key={prop.index} className="border-b border-border pb-8 last:border-0 last:pb-0 text-left">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-2 font-sans">
                  {prop.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans font-medium">
                  {prop.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
