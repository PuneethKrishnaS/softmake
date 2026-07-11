import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techCategories = [
  {
    id: "frontend",
    label: "Front End",
    techs: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" }
    ]
  },
  {
    id: "backend",
    label: "Back End",
    techs: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "NestJS", logo: "https://cdn.simpleicons.org/nestjs/E0234E" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Go", logo: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688" }
    ]
  },
  {
    id: "apps",
    label: "Apps Development",
    techs: [
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Swift", logo: "https://cdn.simpleicons.org/swift/F05138" },
      { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "iOS", logo: "https://cdn.simpleicons.org/apple/000000" }
    ]
  },
  {
    id: "enterprise",
    label: "Enterprise Solutions",
    techs: [
      { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
      { name: "SAP", logo: "https://cdn.simpleicons.org/sap/008FD3" },
      { name: "Odoo", logo: "https://cdn.simpleicons.org/odoo/714B67" },
      { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC" }
    ]
  },
  {
    id: "database",
    label: "Database",
    techs: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "SQLite", logo: "https://cdn.simpleicons.org/sqlite/003B57" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ]
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    techs: [
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" }
    ]
  },
  {
    id: "payment",
    label: "Payment",
    techs: [
      { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/008CFF" },
      { name: "PayPal", logo: "https://cdn.simpleicons.org/paypal/003087" },
      { name: "Apple Pay", logo: "https://cdn.simpleicons.org/applepay/000000" },
      { name: "Google Pay", logo: "https://cdn.simpleicons.org/googlepay/000000" }
    ]
  },
  {
    id: "uiux",
    label: "UI/UX",
    techs: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Sketch", logo: "https://cdn.simpleicons.org/sketch/F7B500" },
      { name: "Adobe XD", logo: "https://cdn.simpleicons.org/adobexd/FF61F6" },
      { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF" }
    ]
  },
  {
    id: "analytics",
    label: "Analytics",
    techs: [
      { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
      { name: "Mixpanel", logo: "https://cdn.simpleicons.org/mixpanel/7856FF" },
      { name: "Sentry", logo: "https://cdn.simpleicons.org/sentry/362D59" },
      { name: "PostHog", logo: "https://cdn.simpleicons.org/posthog/000000" }
    ]
  }
];

export default function TechStackShowcase() {
  const [activeTechCategory, setActiveTechCategory] = useState(techCategories[0]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24 relative z-10 border-t border-border bg-background">

      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Tech Stack</span>
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
          Platforms & Technologies We Use
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mt-4 font-sans max-w-3xl">
          We utilize industry-leading developer tools, modern cloud environments, and high-performance databases to build premium custom software solutions scaled for durability.
        </p>
      </div>

      {/* 9-Column Connected Category Navigation Bar */}
      <div className="w-full border border-border rounded-lg overflow-hidden bg-muted/10 grid grid-cols-3 md:grid-cols-9 divide-x divide-y md:divide-y-0 divide-border mb-12 relative">
        {techCategories.map((cat) => {
          const isActive = activeTechCategory.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTechCategory(cat)}
              className="relative py-4 px-2 text-center transition-all duration-300 flex flex-col items-center justify-center gap-1 min-h-[70px] hover:bg-muted/40"
            >
              <span className={`text-[11px] md:text-sm font-sans tracking-wide uppercase transition-all duration-300 ${isActive ? "text-foreground font-extrabold" : "text-muted-foreground font-semibold"
                }`}>
                {cat.label}
              </span>

              {/* Sliding underline for active category */}
              {isActive && (
                <motion.div
                  layoutId="techUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Logo Grid Details */}
      <div className="w-full bg-muted/10 border border-border/60 p-6 sm:p-8 rounded-lg min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTechCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-6"
          >
            {activeTechCategory.techs.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center text-center p-2"
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-10 h-10 object-contain dark:brightness-90 dark:contrast-125"
                  loading="lazy"
                />
                <span className="text-xs md:text-sm font-bold text-muted-foreground mt-2 font-mono">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
