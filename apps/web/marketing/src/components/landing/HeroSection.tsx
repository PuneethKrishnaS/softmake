import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Smartphone, Globe, Layers, Database, Layout, Zap } from 'lucide-react';
import displayMockups from '../../assets/DisplayMockups.png';

const capabilities = [
  { title: "Business Automation", icon: Cpu },
  { title: "Mobile App Development", icon: Smartphone },
  { title: "Web App Development", icon: Globe },
  { title: "SaaS Application", icon: Layers },
  { title: "Custom ERP", icon: Database },
  { title: "Website UI/UX", icon: Layout },
  { title: "Automation", icon: Zap }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <>
      {/* Subtle background details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 text-border/25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto pb-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6"
          >
            <Sparkles size={11} className="text-primary animate-pulse" />
            Empowering Digital Innovation
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-black text-4xl sm:text-5xl md:text-7xl lg:text-7xl tracking-tight leading-[1.05] text-foreground max-w-5xl"
          >
            Building Custom Software{" "}
            <span className="text-primary">
              That Helps Businesses Grow.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed"
          >
            We design, develop, and maintain modern software solutions tailored to your business goals from custom web portals and ERP/CRM platforms to automated systems and AI applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 border border-primary text-primary-foreground py-3 px-6 md:py-3.5 md:px-8 rounded-md font-bold shadow-lg transition-all text-xs md:text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight size={13} />
            </a>
            <a
              href="/services"
              className="bg-card border border-border text-foreground hover:bg-muted py-3 px-6 md:py-3.5 md:px-8 rounded-md font-bold transition-all text-xs md:text-sm uppercase tracking-wider shadow-sm"
            >
              View Services
            </a>
          </motion.div>

          {/* Capabilities Black & White Belt */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[1320px] mt-8 border-y border-border py-4 overflow-hidden relative"
          >
            {/* Minimalist Heading inside the Belt block */}
            <div className="text-[9px] md:text-[11px] font-bold text-muted-foreground/65 uppercase tracking-[0.25em] mb-4 text-center">
              Our Core Specialized Segments
            </div>

            {/* Infinite Horizontal Ticker */}
            <div className="relative w-full flex items-center overflow-hidden">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="flex items-center gap-12 whitespace-nowrap w-max px-6"
              >
                {/* Double the list to support seamless infinite loop */}
                {[...capabilities, ...capabilities].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <Icon size={16} className="text-muted-foreground/60 shrink-0" />
                      <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{item.title}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Centered Mockup */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full max-w-[1320px] px-4 relative group"
          >
            <img
              src={displayMockups}
              alt="Softmake.in custom system dashboards mockups"
              className="w-full h-auto"
              loading="eager"
            />
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}
