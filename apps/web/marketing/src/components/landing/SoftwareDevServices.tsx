import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Layers, Database, Layout, Cpu } from 'lucide-react';

const softwareServices = [
  {
    index: "01",
    title: "Mobile App Development",
    tagline: "React Native cross-platform apps.",
    desc: "Custom cross-platform iOS and Android mobile solutions built using React Native for native speed, offline synchronization, and secure hardware bindings.",
    points: [
      { label: "Cross-Platform Efficiency", text: "Write once, deploy to iOS and Android using React Native & Expo frameworks." },
      { label: "Offline Sync Databases", text: "SQLite local storage syncing automatically when internet connection recovers." },
      { label: "Hardware Integrations", text: "Direct access to local device cameras, Bluetooth beacons, biometric lockers, and GPS sensors." }
    ],
    techStack: ["React Native", "Expo", "SQLite", "App Store Connect"],
    icon: Smartphone
  },
  {
    index: "02",
    title: "Desktop Application Development",
    tagline: "Electron & Tauri native systems.",
    desc: "Lightweight native desktop systems engineered using Tauri and Electron, optimized for local filesystem access, background threads, and speed.",
    points: [
      { label: "Rust Core Execution", text: "Fast, low-memory performance compiled using Tauri and Rust bindings." },
      { label: "Local OS Bindings", text: "Custom tray widgets, global hotkeys, and automated background thread services." },
      { label: "Automatic OTA Updates", text: "Inbuilt updater channels keeping client applications securely patched." }
    ],
    techStack: ["Tauri", "Electron", "Rust", "C++ Bindings"],
    icon: Layout
  },
  {
    index: "03",
    title: "Web Development",
    tagline: "Next.js portals & web architectures.",
    desc: "Interactive enterprise web platforms, serverless portals, and SaaS dashboards styled with clean designs and high Lighthouse performance metrics.",
    points: [
      { label: "Modern Frameworks", text: "Single-page and server-side portals utilizing React, Next.js, and Vite compilers." },
      { label: "SEO Structured Schema", text: "Advanced static generation rendering metadata and schemas to rank search engines." },
      { label: "CDN Global Delivery", text: "Assets and images cached globally via Cloudflare edge servers to hit green scores." }
    ],
    techStack: ["Next.js", "React", "Vite", "Cloudflare", "Tailwind CSS"],
    icon: Globe
  },
  {
    index: "04",
    title: "Enterprise Software Integration",
    tagline: "SSO auth & pipeline database synchronization.",
    desc: "Unified data pipeline connections linking legacy applications, CRM/ERP backends, third-party APIs, and cloud services under single-sign-on protection.",
    points: [
      { label: "Unified Pipeline Sync", text: "Connecting legacy mainframes, ERP schemas, and modern web portals under REST/GraphQL." },
      { label: "Single Sign-On (SSO)", text: "Secure auth systems mapping SAML, OAuth2, and active directory listings." },
      { label: "Automated ETL Schedulers", text: "Real-time task schedulers fetching, validating, and writing system audit logs." }
    ],
    techStack: ["GraphQL", "REST APIs", "OAuth2", "PostgreSQL", "Node.js"],
    icon: Cpu
  },
  {
    index: "05",
    title: "Enterprise Software Solutions",
    tagline: "Automation modules & permission ledgers.",
    desc: "Modular core business automation platforms tailored to manage supply chain, employee access logs, reporting, and transaction ledgers.",
    points: [
      { label: "Business Automation", text: "Custom ledger billing, automated invoice generators, and inventory logs." },
      { label: "Telemetry & Logs", text: "Detailed dashboard modules checking server uptime and data flow rates." },
      { label: "Granular Permission Keys", text: "Role-based access controls for managers, staff, and auditing clients." }
    ],
    techStack: ["Admin Portals", "Role Auth", "Invoice Schedulers", "Redis"],
    icon: Layers
  },
  {
    index: "06",
    title: "ERP Implementation",
    tagline: "End-to-end consulting & migration.",
    desc: "End-to-end consulting, setup, custom schema migration, and active maintenance of enterprise planning portals scaled precisely to your staff workflow.",
    points: [
      { label: "Custom Flow Mapping", text: "Scoping corporate structures to build matching digital modules." },
      { label: "Relational Migration", text: "Safely transferring database schemas from legacy servers without downtime." },
      { label: "Active SLA Support", text: "24/7 technical monitoring and hotfix support agreements to prevent loss." }
    ],
    techStack: ["ERP Portal", "Migration ETL", "Active SLA", "Database Setup"],
    icon: Database
  }
];

export default function SoftwareDevServices() {
  const [activeSoftwareService, setActiveSoftwareService] = useState(softwareServices[0]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24 relative z-10 border-t border-border bg-background">

      {/* Header Block */}
      <div className="flex flex-col items-center text-center mb-20 max-w-7xl mx-auto">
        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Service Stack</span>
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
          Software Development Services
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mt-4 font-sans max-w-7xl">
          We deliver scalable, secure, and performance-driven software solutions engineered to modern business needs. From startups to enterprises, our expertise spans full-cycle development, system integration, and digital transformation to help organizations innovate and develop customized systems. We design and build software solutions that help businesses operate smarter and grow faster.
        </p>
      </div>

      {/* Dynamic Timeline Split Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-8">

        {/* Left Column: Timeline Navigation Track */}
        <div className="lg:col-span-5 relative text-left">
          {/* Timeline line tracker */}
          <div className="absolute top-2 bottom-2 left-[19px] w-[1px] bg-border" />

          <div className="flex flex-col gap-6 relative z-10">
            {softwareServices.map((item) => {
              const isActive = activeSoftwareService.index === item.index;
              return (
                <button
                  key={item.index}
                  onClick={() => setActiveSoftwareService(item)}
                  className="w-full text-left flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/40 group relative"
                >
                  {/* Timeline Node dot */}
                  <div className="relative mt-1 shrink-0 z-10">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-350 ${isActive
                      ? "bg-primary border-primary scale-[1.1] shadow-[0_0_10px_rgba(var(--primary),0.4)]"
                      : "bg-card border-border group-hover:border-muted-foreground"
                      }`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-sm md:text-base font-black uppercase tracking-wider ${isActive ? "text-foreground font-extrabold" : "text-muted-foreground"
                        }`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground/60 mt-1 leading-normal font-sans">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed View with Points and Consultation CTA */}
        <div className="lg:col-span-7 w-full min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSoftwareService.index}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 text-left"
            >
              {/* Details Header */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground tracking-tight mb-3 font-sans">
                  {activeSoftwareService.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed font-sans font-medium">
                  {activeSoftwareService.desc}
                </p>
              </div>

              {/* Key Points - Deliverables Bullet Points */}
              <div>
                <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 font-mono">Key Solutions & Deliverables</h4>
                <div className="flex flex-col gap-4">
                  {activeSoftwareService.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 pl-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                        <h5 className="text-sm md:text-base font-bold text-foreground font-sans">{pt.label}</h5>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5 font-sans font-medium">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer block: Tech Stack and Booking Action Button */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                {/* Technologies */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">Deployment Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {activeSoftwareService.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-muted text-[10px] md:text-xs text-muted-foreground font-semibold font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation Button */}
                <a
                  href="/contact"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground border border-primary font-bold py-2.5 px-4 md:py-3.5 md:px-6 rounded-md transition-all shadow-md text-xs md:text-sm uppercase tracking-wider text-center inline-flex items-center justify-center gap-2"
                >
                  Get Consultation
                  <ArrowRight size={13} />
                </a>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
