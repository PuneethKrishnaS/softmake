export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export const staticSeoRegistry: Record<string, PageMeta> = {
  "/": {
    title: "Softmake IT Solutions | Premium Software Engineering & IT Consulting",
    description: "Softmake.in engineers premium, scalable, and secure custom software systems, business applications, and ERP integrations. Custom code built to scale your organization.",
    keywords: "Software engineering, custom software, ERP integration, SaaS development, React developers, Node.js consulting, IT consulting India"
  },
  "/services": {
    title: "Our Engineering Capabilities | Softmake IT Solutions",
    description: "Explore our software engineering capabilities spanning web apps, native iOS/Android, enterprise integrations, custom CRMs, and custom ERP deployments.",
    keywords: "Custom web development, mobile app development, Zoho CRM integration, Tauri development, SAP consultancy, WhatsApp Business API integration"
  },
  "/industries": {
    title: "Tailored Software Solutions By Industry | Softmake IT Solutions",
    description: "Review our technology deployment matrices customized for Fintech, Hospitality, Mining, Logistics, Healthcare, and Retail industries.",
    keywords: "Fintech solutions, supply chain software, digital asset management, hospitality apps, manufacturing ERP software"
  },
  "/blogs": {
    title: "Softmake Engineering Log & Corporate Insights",
    description: "In-depth engineering guides, principles of SaaS multi-tenancy, ERP migrations, and secure API gateways published weekly by our technical team.",
    keywords: "Software engineering blog, API security guides, multi-tenant databases, ERP integration matrices, web design logs"
  },
  "/contact": {
    title: "Schedule a Consultation | Softmake IT Solutions",
    description: "Get in touch with the Softmake team for custom software architectures, project estimation audits, and system integrations.",
    keywords: "Book consultation, software quote, hire developers, outsource IT development"
  },
  "/privacy": {
    title: "Privacy Policy | Softmake IT Solutions",
    description: "Our policies regarding user privacy, data collection, and processing protocols in custom application architectures.",
    keywords: "Privacy policy, data compliance, GDPR, user data protection"
  },
  "/terms": {
    title: "Terms of Service | Softmake IT Solutions",
    description: "Standard terms and conditions governing Softmake project engagements, licensing, and software support agreements.",
    keywords: "Terms of service, engineering contracts, support terms"
  }
};
