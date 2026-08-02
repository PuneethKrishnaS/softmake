import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DesktopMockup from '../screens/DesktopMockup';
import LaptopMockup from '../screens/LaptopMockup';
import TabletMockup from '../screens/TabletMockup';
import MobileMockup from '../screens/MobileMockup';

const servicesData = [
  {
    id: "web-apps",
    index: "01",
    label: "Web Applications",
    tagline: "High-performance React & Next.js portal architectures.",
    title: "Enterprise Web Applications Built for Production",
    desc: "We engineer single-page and multi-page web applications using React architectures, serverless computing, and custom API layers. We optimize for high concurrency, security, and instantaneous load times.",
    deliverables: [
      { title: "Custom Admin Portals", text: "Role-based dashboards with real-time logging, user telemetry, and telemetry analytics." },
      { title: "API Integration & Design", text: "Secure RESTful and GraphQL endpoints engineered with Node.js and PostgreSQL backend structures." },
      { title: "Offline-First Syncing", text: "Optimistic updates and background service worker data sync to survive transient networks." }
    ],
    techStack: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metric: "99+ Lighthouse Score",
    device: "macbook",
    screenBg: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: "web-design",
    index: "02",
    label: "Web Designing",
    tagline: "Bespoke vector layouts & interactive prototypes.",
    title: "Premium Website UI/UX Design & Brand Journeys",
    desc: "Our design team crafts bespoke, high-fidelity vector layouts focused on human engagement, accessibility, and high conversion rates. We design with strict Figma component standards.",
    deliverables: [
      { title: "Dynamic Component Library", text: "Bespoke UI kits built around your exact branding guidelines and color tokens." },
      { title: "User Journey Prototyping", text: "High-fidelity prototypes mapping complex user paths before writing any code." },
      { title: "Cinematic Micro-interactions", text: "Framer Motion and GSAP transitions designed to delight the eye on scroll." }
    ],
    techStack: ["Figma", "Adobe CC", "Framer Motion", "GSAP", "Vector Design", "Design Systems"],
    metric: "100% Custom Mockups",
    device: "ipad",
    screenBg: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "ecommerce",
    index: "03",
    label: "E-Commerce Websites",
    tagline: "Stripe-integrated catalogs & payment flows.",
    title: "Conversion-Focused Digital Storefronts",
    desc: "Launch high-performance, secure digital storefronts that simplify product management, checkout, and inventory tracking. We integrate automated order flow alerts.",
    deliverables: [
      { title: "Automated Checkout Pipelines", text: "Secure, optimized Stripe checkout tunnels to reduce cart abandonment rates." },
      { title: "CMS Catalog Controls", text: "Custom administrator portals to edit listings, track inventory levels, and export reports." },
      { title: "Search & Filtering Matrix", text: "Instant faceted query filters that help users find products in milliseconds." }
    ],
    techStack: ["Stripe API", "Next.js Commerce", "Shopify headless", "PostgreSQL", "Node.js", "Redis"],
    metric: "40% Increase in Checkout Speed",
    device: "monitor",
    screenBg: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "mobile-apps",
    index: "04",
    label: "Mobile App Development",
    tagline: "Native iOS & Android builds using React Native.",
    title: "High-Performance iOS & Android Mobile Systems",
    desc: "Develop native-feeling cross-platform mobile solutions featuring local database sync, push notification systems, and hardware integrations.",
    deliverables: [
      { title: "React Native Containers", text: "Single codebase compiling directly to native platform assets for speed." },
      { title: "Local SQLite DB Sync", text: "Fully offline-capable databases that auto-reconcile once connection recovers." },
      { title: "Push Notification Pipelines", text: "Rich interactive notifications to drive daily active usage." }
    ],
    techStack: ["React Native", "Expo", "SQLite", "App Store Connect", "Google Play console"],
    metric: "100% Offline Capability",
    device: "iphone",
    screenBg: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: "desktop-apps",
    index: "05",
    label: "Desktop Applications",
    tagline: "Electron & Tauri native systems.",
    title: "Robust Cross-Platform Desktop Software",
    desc: "Build secure desktop software for Windows, macOS, and Linux that operates offline, accesses system level APIs, and handles heavy local computing.",
    deliverables: [
      { title: "Tauri Lightweight Build", text: "Rust-backed system bindings with tiny compiled binary footprints." },
      { title: "System Integrations", text: "Direct hardware and filesystem bindings, custom tray menus, and hotkeys." },
      { title: "Automated Dev Releases", text: "Built-in s3 auto-update channels to roll out hotfixes instantly." }
    ],
    techStack: ["Tauri", "Electron", "Rust", "C++ bindings", "Windows API", "macOS Cocoa"],
    metric: "Tiny 10MB App Footprint",
    device: "monitor",
    screenBg: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: "seo",
    index: "06",
    label: "Search Engine Optimization",
    tagline: "Core Web Vitals & structured schema tagging.",
    title: "Data-Driven Visibility & Technical Audits",
    desc: "Optimize your system architecture, metadata, schema structures, and speed performance to guarantee high search rankings and organic user acquisition.",
    deliverables: [
      { title: "Schema Layout Tagging", text: "Inject json-ld structured schemas to get rich snippet cards in Google." },
      { title: "Core Web Vitals Tuning", text: "Minify styles, lazy load resources, and route files to hit green scores." },
      { title: "Sitemap Generators", text: "Automated XML generation reflecting new posts and page routes." }
    ],
    techStack: ["Google Search Console", "Lighthouse", "Schema.org", "PageSpeed APIs", "Next.js Metadata"],
    metric: "Top 3 Organic Search Positions",
    device: "macbook",
    screenBg: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "marketing",
    index: "07",
    label: "Social Media Marketing",
    tagline: "Targeted lead generation & conversion pixel setup.",
    title: "Performance Marketing & Brand Strategy",
    desc: "Scale your organic reach, design custom templates, set up conversion tracking, and manage ad platforms to acquire high-value enterprise leads.",
    deliverables: [
      { title: "Pixel Conversion Maps", text: "Inject tracking codes for Meta, LinkedIn, and Google to map checkouts." },
      { title: "Lead Magnet Architecture", text: "Develop engaging whitepapers and landing forms to capture raw emails." },
      { title: "Performance Audits", text: "Track customer acquisition costs (CAC) vs customer lifetime value (LTV)." }
    ],
    techStack: ["Meta Business Manager", "LinkedIn Ads", "Google Analytics 4", "GTM Tag Manager"],
    metric: "3.5x ROI on Digital Spend",
    device: "iphone",
    screenBg: "from-fuchsia-500/20 to-pink-500/20"
  }
];

export default function WhatWeServe() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="max-w-[1440px] mx-auto py-12 relative z-10 border-t border-border bg-background">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">What We Serve</span>
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
          Comprehensive Digital Services.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
          Choose a specialized service capability below to view our key deliverables, technology stack, and simulated mockups.
        </p>
      </div>

      {/* Connected Grid Navigation */}
      <div className="w-full border border-border rounded-lg overflow-hidden bg-muted/10 grid grid-cols-2 md:grid-cols-7 divide-x divide-y md:divide-y-0 divide-border mb-16 relative">
        {servicesData.map((item) => {
          const isActive = activeService.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveService(item)}
              className="relative py-6 px-4 text-center transition-all duration-300 flex flex-col items-center justify-center gap-1 min-h-[90px] hover:bg-muted/40"
            >
              <span className={`font-mono text-[11px] md:text-xs font-bold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                {item.index}
              </span>
              <span className={`text-[12px] md:text-sm font-sans tracking-wide uppercase transition-all duration-300 ${isActive ? "text-foreground font-extrabold" : "text-muted-foreground font-semibold"
                }`}>
                {item.label}
              </span>

              {/* Underline for Active Tab */}
              {isActive && (
                <motion.div
                  layoutId="connectedUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Detailed Service Content Presentation */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-muted/10 border border-border/40 rounded-lg w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-6 md:p-8"
          >
            {/* Left Side: Rich Details */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground tracking-tight mb-2 font-sans">
                  {activeService.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground/80 leading-relaxed font-sans">
                  {activeService.desc}
                </p>
              </div>

              {/* Core Deliverables Grid */}
              <div>
                <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 font-mono">Core Deliverables</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeService.deliverables.map((deliv, index) => (
                    <div key={index} className="flex flex-col gap-1.5 border-l border-border pl-3">
                      <h5 className="text-sm md:text-base font-bold text-foreground font-sans">{deliv.title}</h5>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans">{deliv.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies List */}
              <div>
                <h4 className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 font-mono">Technologies We Use</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-muted text-[10px] md:text-xs text-muted-foreground font-semibold font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Device Mockup Showcase */}
            <div className="lg:col-span-6 flex items-center justify-center relative w-full min-h-[340px]">
              <div className="w-full flex items-center justify-center relative z-10">
                {(() => {
                  switch (activeService.device) {
                    case 'iphone':
                      return (
                        <div className="w-full max-w-[200px] hover:scale-[1.02] transition-transform duration-500">
                          <MobileMockup />
                        </div>
                      );
                    case 'ipad':
                      return (
                        <div className="w-full max-w-[380px] hover:scale-[1.02] transition-transform duration-500">
                          <TabletMockup />
                        </div>
                      );
                    case 'macbook':
                      return (
                        <div className="w-full max-w-[500px] hover:scale-[1.02] transition-transform duration-500">
                          <LaptopMockup />
                        </div>
                      );
                    case 'monitor':
                    default:
                      return (
                        <div className="w-full max-w-[520px] hover:scale-[1.02] transition-transform duration-500">
                          <DesktopMockup />
                        </div>
                      );
                  }
                })()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
