export interface ServiceItem {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables: { title: string; text: string }[];
  techStack: string[];
  benefits: string[];
}

export const servicesRegistry: Record<string, ServiceItem> = {
  // Web Development
  "web-application-development": {
    slug: "web-application-development",
    category: "Web Development",
    title: "Web Application Development",
    tagline: "High-performance bespoke web applications designed to scale.",
    desc: "We design and develop custom web applications configured specifically to support complex workflows and deliver responsive, desktop-grade user interfaces.",
    deliverables: [
      { title: "Bespoke SaaS Platforms", text: "Multi-tenant platforms configured with modular access controls and subscription billing integrations." },
      { title: "Enterprise Web Portals", text: "Secure external portals for vendor management, client collaboration, and internal operations." },
      { title: "Cloud API Architectures", text: "High-performance backend services engineered using REST and GraphQL API standards." }
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    benefits: ["Zero technical debt", "Auto-scaling server setup", "95+ Lighthouse performance scores"]
  },
  "progressive-web-apps-development": {
    slug: "progressive-web-apps-development",
    category: "Web Development",
    title: "Progressive Web Apps (PWA) Development",
    tagline: "Combine the reach of the web with the feel of native apps.",
    desc: "We engineer Progressive Web Applications that run offline, send push notifications, and install directly onto mobile homescreens without app store middle steps.",
    deliverables: [
      { title: "Offline Data Synchronization", text: "Service worker setups that synchronize local changes once network connectivity is restored." },
      { title: "Push Notification Pipelines", text: "Engage users with immediate web push alerts configured via Firebase Cloud Messaging." },
      { title: "App Shell Caching", text: "Instant page load times leveraging local caching strategies for core visual elements." }
    ],
    techStack: ["Next.js", "Workbox", "PWA Manifests", "IndexedDB", "Web Push APIs"],
    benefits: ["No App Store fees", "Ultra-lightweight downloads", "Cross-platform consistency"]
  },
  "ecommerce-web-development": {
    slug: "ecommerce-web-development",
    category: "Web Development",
    title: "E-Commerce Web Development",
    tagline: "High-converting online storefronts optimized for transaction throughput.",
    desc: "We build secure, custom e-commerce applications engineered to handle thousands of concurrent checkouts, complete with real-time inventory hooks.",
    deliverables: [
      { title: "Custom Storefront Frontends", text: "Rapid checkout flows designed for conversions, optimized for mobile screens." },
      { title: "Payment Gateway Hubs", text: "Safe integrations with Stripe, Razorpay, and PayPal supporting secure global payments." },
      { title: "Inventory Management Hooks", text: "Instant stock levels sync across multiple sales channels and shipping warehouses." }
    ],
    techStack: ["Shopify headless API", "React", "Node.js", "Redis", "Stripe API"],
    benefits: ["Sub-second checkout times", "Robust PCI-DSS compliance", "Seamless multi-currency support"]
  },
  "web-designing": {
    slug: "web-designing",
    category: "Web Development",
    title: "Web Designing",
    tagline: "Aesthetics-focused user experience design for premium brands.",
    desc: "We build custom Figma user interface blueprints and style guides designed to highlight product value and engage corporate visitors.",
    deliverables: [
      { title: "Figma UI/UX Mockups", text: "Pixel-perfect mockups covering light/dark themes and responsive viewpoints." },
      { title: "Interactive Prototypes", text: "Clickable flows to validate user journeys before writing a single line of code." },
      { title: "Custom Branding Assets", text: "Curated typography systems, color tokens, custom icons, and vector brand elements." }
    ],
    techStack: ["Figma", "Adobe Illustrator", "CSS Grid", "Framer Motion", "Tailwind CSS"],
    benefits: ["Unique brand identity", "Intuitive user navigation", "Optimized conversion funnels"]
  },

  // Mobile App Development
  "native-app-development": {
    slug: "native-app-development",
    category: "Mobile App Development",
    title: "Native App Development",
    tagline: "Uncompromised performance leveraging direct hardware access.",
    desc: "We develop dedicated Kotlin and Swift codebases to unlock maximum phone performance, low-level sensor access, and optimal screen responsiveness.",
    deliverables: [
      { title: "iOS Native App Suites", text: "SwiftUI apps designed strictly in line with Apple Human Interface Guidelines." },
      { title: "Android Jetpack Apps", text: "Kotlin apps built leveraging Jetpack Compose for fluid rendering and memory efficiency." },
      { title: "Sensor & Bluetooth Integrations", text: "Low-level API bindings for GPS tracking, BLE beacons, and biometric sensors." }
    ],
    techStack: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose", "CoreData/Room"],
    benefits: ["Zero abstraction lag", "Full device hardware access", "Smooth offline-first storage"]
  },
  "android-app-development": {
    slug: "android-app-development",
    category: "Mobile App Development",
    title: "Android App Development",
    tagline: "Targeting the largest global mobile operating system segment.",
    desc: "We engineer robust Android applications scaled to run efficiently on diverse hardware profiles, ensuring wide compatibility.",
    deliverables: [
      { title: "Custom Android Applications", text: "Bespoke business apps built with Kotlin, optimized for Google Play guidelines." },
      { title: "Background Service Tasks", text: "Efficient sync engines that update database records without draining user batteries." },
      { title: "WearOS & TV Support", text: "Extended layouts customized for Android smartwatches, media players, and tablets." }
    ],
    techStack: ["Kotlin", "Android SDK", "Retrofit", "Dagger Hilt", "Jetpack Compose"],
    benefits: ["Wide device model support", "Google Play Store deployment", "Offline SQLite storage capabilities"]
  },
  "ios-app-development": {
    slug: "ios-app-development",
    category: "Mobile App Development",
    title: "iOS App Development",
    tagline: "Premium apps designed for the Apple hardware ecosystem.",
    desc: "We design and code high-performance iOS apps optimized specifically for iPhone and iPad devices with strict data security standards.",
    deliverables: [
      { title: "Swift iPhone & iPad Apps", text: "Clean SwiftUI implementations designed to utilize Apple's modern graphics pipelines." },
      { title: "Apple Pay & StoreKit Integrations", text: "Secure in-app purchases and Apple Pay setup for subscription modules." },
      { title: "Biometric ID Security", text: "Secure authentication workflows using Apple FaceID and TouchID APIs." }
    ],
    techStack: ["Swift", "SwiftUI", "Combine", "CoreML", "StoreKit"],
    benefits: ["High-paying user engagement", "Strict App Store compliance", "Biometric hardware protection"]
  },
  "flutter-app-development": {
    slug: "flutter-app-development",
    category: "Mobile App Development",
    title: "Flutter App Development",
    tagline: "Cross-platform mobile applications from a single source codebase.",
    desc: "We write cross-platform mobile apps using Google's Flutter toolkit, delivering native-speed compiles for iOS and Android.",
    deliverables: [
      { title: "Single-Codebase Deployments", text: "Shared Dart codebases running perfectly on both iOS and Android stores." },
      { title: "Custom Cupertino & Material UI", text: "Adaptive UI widgets that blend into the host operating system style guidelines." },
      { title: "State Management Pipelines", text: "Robust data flow setups leveraging Bloc and Provider libraries." }
    ],
    techStack: ["Dart", "Flutter SDK", "Bloc State Engine", "Firebase", "SQLite API"],
    benefits: ["50% reduction in development costs", "Faster time-to-market release", "Identical layout rendering"]
  },

  // ERP Software Implementation
  "sap-implementation": {
    slug: "sap-implementation",
    category: "ERP Software Implementation",
    title: "SAP Implementation",
    tagline: "Standardize your corporate workflows with SAP setups.",
    desc: "We assist enterprise groups in migrating, configuring, and deploying SAP modules to streamline manufacturing, accounting, and sales operations.",
    deliverables: [
      { title: "SAP Module Setup", text: "Implementation of SAP MM, FICO, SD, and PP configurations customized to business rules." },
      { title: "Database Migration to HANA", text: "Secure transfers of legacy transactional databases over to high-speed SAP HANA setups." },
      { title: "Role-Based Security Trees", text: "Custom authorization trees ensuring staff access only their respective ledger entries." }
    ],
    techStack: ["SAP S/4HANA", "ABAP Code", "SAP FIORI", "HANA Studio", "SAP PI/PO"],
    benefits: ["Unified corporate visibility", "Optimized capital expenditures", "Compliant accounting structures"]
  },
  "microsoft-365-implementation": {
    slug: "microsoft-365-implementation",
    category: "ERP Software Implementation",
    title: "Microsoft 365 Implementation",
    tagline: "Configure a highly collaborative digital workspace.",
    desc: "We setup Microsoft 365 tenants, configure secure Active Directory controls, and build automated SharePoint document workflows.",
    deliverables: [
      { title: "Microsoft 365 Tenant Setup", text: "Domain configurations, DNS setup, exchange servers, and customized user licensing." },
      { title: "SharePoint Portals & Hubs", text: "Document repositories with automated version controls and file approval steps." },
      { title: "Power Automate Operations", text: "Automated alert sequences triggered by email files or database actions." }
    ],
    techStack: ["Microsoft 365", "SharePoint Online", "Power Automate", "Azure AD", "MS Teams"],
    benefits: ["Zero lost office documents", "Secure single sign-on access", "Automated staff workflows"]
  },
  "zoho-implementation": {
    slug: "zoho-implementation",
    category: "ERP Software Implementation",
    title: "Zoho Implementation",
    tagline: "Customizing Zoho business suites for sales and support.",
    desc: "We configure, adapt, and deploy Zoho business modules, establishing automated lead scoring, pipelines, and email marketing triggers.",
    deliverables: [
      { title: "Zoho CRM Custom Setup", text: "Sales pipelines, deal stages, and custom tracking views for sales agents." },
      { title: "Zoho Books Ledger Setup", text: "Automated tax rule calculators, dynamic invoicing, and account reconciliations." },
      { title: "Zoho Creator Portals", text: "Low-code internal apps designed to handle field surveys and support tickets." }
    ],
    techStack: ["Zoho CRM", "Zoho Creator", "Deluge Script", "Zoho Books", "Zoho Desk"],
    benefits: ["Automated customer tracking", "Reduced sales cycle durations", "Integrated business bookkeeping"]
  },

  // ERP Software Integration
  "sap-integration": {
    slug: "sap-integration",
    category: "ERP Software Integration",
    title: "SAP Integration Services",
    tagline: "Bridge the gap between SAP databases and external apps.",
    desc: "We build secure data sync middleware to connect SAP cores with e-commerce portals, custom mobile apps, and third-party logistics APIs.",
    deliverables: [
      { title: "SAP RFC & BAPI Connectors", text: "Custom API endpoints exposed securely using SAP Standard BAPI pipelines." },
      { title: "Inventory Synchronization Tools", text: "Real-time stock level transfers from SAP warehouses to frontend storefronts." },
      { title: "External Orders Ingestion", text: "Automated ingestion pipelines translating website carts into SAP Sales Orders." }
    ],
    techStack: ["SAP PI/PO", "SAP Gateway", "RFC Protocols", "Node.js Middleware", "REST Webhooks"],
    benefits: ["Automated order intake", "Eliminated inventory discrepancies", "Secure encrypted data transfers"]
  },
  "microsoft-365-integration": {
    slug: "microsoft-365-integration",
    category: "ERP Software Integration",
    title: "Microsoft 365 Integration",
    tagline: "Connect Microsoft services with your custom software.",
    desc: "We write integrations connecting Outlook, MS Teams, and OneDrive storage with your proprietary internal web tools and software applications.",
    deliverables: [
      { title: "Microsoft Graph API Bridges", text: "Custom tools that read Outlook calendars, send emails, and create teams meetings." },
      { title: "OneDrive Storage Adapters", text: "Automated uploading of customer documents straight into secure OneDrive folders." },
      { title: "Teams Alert Webhooks", text: "Immediate chat updates pushed to MS Teams groups upon system errors or new sales." }
    ],
    techStack: ["Microsoft Graph API", "Azure App Registrations", "OAuth 2.0 Auth", "TypeScript", "Node.js"],
    benefits: ["Unified messaging logs", "Automated system file archiving", "Reduced context-switching for staff"]
  },
  "zoho-integration": {
    slug: "zoho-integration",
    category: "ERP Software Integration",
    title: "Zoho Integration Services",
    tagline: "Unify Zoho data with external databases and applications.",
    desc: "We write Deluge scripts and connect webhook pipelines to link Zoho CRM with custom-built client dashboards and accounting portals.",
    deliverables: [
      { title: "Zoho CRM Webhook Systems", text: "Instant data exports triggered whenever client records are updated." },
      { title: "External SQL Sync Engines", text: "Background tasks keeping local databases synchronized with Zoho CRM records." },
      { title: "Custom API Connectors", text: "REST API bridges matching Zoho Books ledgers with custom checkout screens." }
    ],
    techStack: ["Deluge Scripting", "Zoho APIs", "OAuth 2.0", "Node.js Middleware", "Webhooks"],
    benefits: ["Zero manual data entry", "Real-time lead distribution", "Integrated ledger synchronization"]
  },
  "whatsapp-business-api": {
    slug: "whatsapp-business-api",
    category: "ERP Software Integration",
    title: "WhatsApp Business API Integration",
    tagline: "Automated chat notifications and messaging channels.",
    desc: "We configure the Meta WhatsApp Business API to dispatch automated invoice alerts, support status updates, and interactive chat flows.",
    deliverables: [
      { title: "Transactional Text Dispatchers", text: "Instant notifications sent to customer devices for orders, bills, and alerts." },
      { title: "Interactive Chatbot Menus", text: "Automated support trees resolved via text options, reducing agent workloads." },
      { title: "Incoming Messages Webhooks", text: "Bridges routing customer queries straight to customer support dashboards." }
    ],
    techStack: ["Meta Developer API", "Node.js Middleware", "Webhooks", "JSON payloads", "Express.js"],
    benefits: ["98% customer read rates", "Instant transactional alerts", "Automated customer support resolution"]
  },
  "hardware-integration": {
    slug: "hardware-integration",
    category: "ERP Software Integration",
    title: "Hardware Integration Services",
    tagline: "Connect custom software directly to physical equipment.",
    desc: "We write interface drivers and database bridges to link custom ERP software with biometric scanners, weighing scales, and printer hardware.",
    deliverables: [
      { title: "Biometric Attendance Bridges", text: "Sync devices reporting employee punch-in logs straight into payroll modules." },
      { title: "Serial Port weighing Bridges", text: "Capture weighbridge measurement signals and save them to freight records." },
      { title: "Thermal Print Automations", text: "Trigger printing of receipts and shipping barcode labels automatically." }
    ],
    techStack: ["C++ Drivers", "Node Serialport", "Zebra Programming Language (ZPL)", "TCP/IP Socket API", "Node.js"],
    benefits: ["Eliminated billing errors", "Real-time hardware monitoring", "Automated shipping label printing"]
  },

  // ERP Software Solution
  "saas-development": {
    slug: "saas-development",
    category: "ERP Software Solution",
    title: "SaaS Development Services",
    tagline: "Engineering cloud products optimized for scale.",
    desc: "We design, code, and launch custom Software-as-a-Service applications with secure multi-tenant architectures, subscription billing, and robust databases.",
    deliverables: [
      { title: "Multi-Tenant Data Pipelines", text: "Isolated databases ensuring client records never leak across tenants." },
      { title: "Subscription Billing Engines", text: "Integrate Stripe billing modules to handle monthly tiers and coupon deals." },
      { title: "Client Tenant Dashboards", text: "Intuitive self-service dashboards where clients manage users and configure options." }
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe Billing API"],
    benefits: ["Recurring revenue business models", "Zero infrastructure management", "Flexible pricing plan systems"]
  },
  "crm-development": {
    slug: "crm-development",
    category: "ERP Software Solution",
    title: "Custom CRM Development",
    tagline: "Manage your client relationships without template limits.",
    desc: "We build bespoke Client Relationship Management systems structured around your exact customer acquisition and sales pipelines.",
    deliverables: [
      { title: "Custom Deal Pipelines", text: "Drag-and-drop boards visualising customer conversions across sales stages." },
      { title: "Task Assignment Systems", text: "Automated prompts reminding sales agents to follow-up on cold inquiries." },
      { title: "Integrated Communications Logs", text: "Keep call notes, email exchanges, and document files recorded in one view." }
    ],
    techStack: ["React", "Node.js", "Redis Session Store", "PostgreSQL", "Tailwind CSS"],
    benefits: ["Custom deal stages", "No per-user license fees", "Complete customer context security"]
  },
  "custom-erp-software": {
    slug: "custom-erp-software",
    category: "ERP Software Solution",
    title: "Custom ERP Software Development",
    tagline: "A unified system to manage your entire business operations.",
    desc: "We build custom Enterprise Resource Planning software connecting supply chains, warehouses, human resources, and accounting modules in one place.",
    deliverables: [
      { title: "Unified Operations Database", text: "A single secure database source eliminating data fragmentation across departments." },
      { title: "Manufacturing Order Tracks", text: "Watch inventory stock convert to assemblies, tracking unit costs in real-time." },
      { title: "Accounting Ledgers System", text: "Automated journals recording inventory sales directly into accounting charts." }
    ],
    techStack: ["React", "Go/Golang", "PostgreSQL DB", "Docker", "AWS Deployments"],
    benefits: ["Eliminated data silos", "Accurate asset valuations", "No software recurring license costs"]
  },
  "hr-management-software": {
    slug: "hr-management-software",
    category: "ERP Software Solution",
    title: "HR Management Software (HRMS)",
    tagline: "Automate workforce scheduling, onboarding, and tracking.",
    desc: "We engineer custom Human Resource Management systems featuring self-service portals, leave trackers, and performance reviews.",
    deliverables: [
      { title: "Staff Self-Service Portals", text: "Allow employees to submit leave requests, view payslips, and log hours." },
      { title: "Leave Approval Engines", text: "Multi-level leave approval hierarchies notifying managers via system emails." },
      { title: "Employee Files Storage", text: "Secure, encrypted document repositories for contracts, IDs, and compliance forms." }
    ],
    techStack: ["React", "Node.js", "AES-256 Encryption", "PostgreSQL", "AWS S3 storage"],
    benefits: ["Automated payroll preparatives", "Paperless document filing", "Secure user role hierarchies"]
  },
  "inventory-management-software": {
    slug: "inventory-management-software",
    category: "ERP Software Solution",
    title: "Inventory Management Software",
    tagline: "Track inventory quantities, orders, and logistics.",
    desc: "We build custom inventory applications configured to prevent stockouts, monitor warehouse bins, and track item serial numbers.",
    deliverables: [
      { title: "Multi-Warehouse Tracking", text: "Monitor item counts across multiple storage buildings and retail shelves." },
      { title: "Reorder Trigger Alerts", text: "Automated alerts dispatched when item stock values drop below set thresholds." },
      { title: "Barcode Scanner Integrations", text: "Instantly adjust system stock logs by scanning item barcode stickers." }
    ],
    techStack: ["React", "Node.js", "Redis Cache", "PostgreSQL", "Socket.io"],
    benefits: ["Minimised stock shortages", "Optimized warehouse layouts", "Accurate COGS tracking metrics"]
  },
  "payroll-billing-software": {
    slug: "payroll-billing-software",
    category: "ERP Software Solution",
    title: "Payroll & Billing Software",
    tagline: "Automate salary payouts and customer invoicing.",
    desc: "We develop customized financial billing modules featuring tax calculators, bulk payroll generation, and invoicing pipelines.",
    deliverables: [
      { title: "Bulk Payroll Engines", text: "Generate monthly staff salaries factoring in overtime logs and tax rules." },
      { title: "Invoice Automation Engines", text: "Send recurring client bills and capture online payment reports automatically." },
      { title: "Tax Report Generators", text: "Instant summaries of collected sales taxes, simplifying compliance audits." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "PDFKit", "Stripe API Integration"],
    benefits: ["Accurate wage distributions", "Faster client invoice payouts", "Auditable audit history logs"]
  },

  // ZOHO
  "zoho-products": {
    slug: "zoho-products",
    category: "ZOHO",
    title: "Zoho Products Customization",
    tagline: "Get the most out of Zoho's diverse business apps.",
    desc: "We customize Zoho CRM, Zoho Books, Zoho Recruit, and Zoho Projects to map onto your workflow templates using specialized Deluge script logic.",
    deliverables: [
      { title: "Zoho CRM Customizations", text: "Bespoke fields, stage layouts, custom blueprints, and automation rules." },
      { title: "Zoho Books Ledger Syncs", text: "Configuration of accounting chart formats, tax modules, and client portals." },
      { title: "Deluge Script Automations", text: "Custom functions synchronizing database fields whenever events fire." }
    ],
    techStack: ["Deluge Scripting", "Zoho CRM Client", "Zoho Books API", "OAuth 2.0 Webhooks"],
    benefits: ["Fully integrated Zoho databases", "Automated email notifications", "Unified sales activity logs"]
  },
  "zoho-one": {
    slug: "zoho-one",
    category: "ZOHO",
    title: "Zoho One Setup & Deployment",
    tagline: "Deploy Zoho's complete operating system for your business.",
    desc: "We configure, license, and deploy the entire Zoho One suite, establishing data syncs and access rules for your staff.",
    deliverables: [
      { title: "Zoho One Tenant Deployment", text: "Complete setups covering email domains, user access rules, and security profiles." },
      { title: "Unified User Directory Setup", text: "Configure centralized staff logins across Zoho CRM, Books, Projects, and Mail." },
      { title: "Multi-App Flow Setups", text: "Connect workflows so new leads automatically spawn Project tracking tasks." }
    ],
    techStack: ["Zoho One Admin Panel", "Deluge Scripting", "Zoho Creator APIs", "OAuth 2.0 Hubs"],
    benefits: ["No fragmented data repositories", "Reduced software licensing overheads", "Streamlined client database updates"]
  },

  // Digital Marketing
  "seo-services": {
    slug: "seo-services",
    category: "Digital Marketing",
    title: "SEO Services",
    tagline: "Rank higher on search engines and attract organic clicks.",
    desc: "We audit, optimize, and manage search engine optimization campaigns, boosting keywords rankings and domain authority ratings.",
    deliverables: [
      { title: "Technical Site Audits", text: "Find and resolve layout issues, crawl problems, slow speeds, and redirect chains." },
      { title: "On-Page SEO Copywriting", text: "Write high-quality article titles, meta tags, and content bodies optimized for search terms." },
      { title: "Keyword Search Mapping", text: "Identify high-value keywords to target based on local search intent metrics." }
    ],
    techStack: ["Google Search Console", "Google Analytics 4", "Semrush Tools", "HTML5 Markup", "Lighthouse Audit"],
    benefits: ["Long-term organic visitors", "Boosted domain search trust", "Lower acquisition costs over ads"]
  },
  "search-engine-marketing-services": {
    slug: "search-engine-marketing-services",
    category: "Digital Marketing",
    title: "Search Engine Marketing (SEM)",
    tagline: "Target high-intent buyers with paid search ads.",
    desc: "We build, monitor, and optimize Google Ads and Bing Ads campaigns, driving paid search clicks at lower cost-per-click values.",
    deliverables: [
      { title: "Google Ads Campaigns", text: "Setup search ads campaigns, write copy, and configure keyword match rules." },
      { title: "Landing Page Optimizations", text: "Design high-converting landing pages matching paid keywords to boost conversions." },
      { title: "A/B Conversion Testing", text: "Continually test ad copy variations to find the lowest cost-per-lead setups." }
    ],
    techStack: ["Google Ads Manager", "Google Analytics 4", "Tag Manager Hook", "A/B Testing Pages"],
    benefits: ["Immediate website visitor gains", "Trackable cost-per-lead metrics", "Targeted customer demographic focus"]
  },
  "social-media-optimization": {
    slug: "social-media-optimization",
    category: "Digital Marketing",
    title: "Social Media Optimization (SMO)",
    tagline: "Improve your organic visibility across social channels.",
    desc: "We optimize corporate social profiles, design templates, and manage content calendars to increase engagement on LinkedIn and Twitter.",
    deliverables: [
      { title: "Social Profile Audits", text: "Standardize profile bios, links, banners, and descriptions across networks." },
      { title: "Content Post Calendars", text: "Plan, write, and schedule weekly posts designed to establish brand trust." },
      { title: "Graphic Design Templates", text: "Custom layouts and slide assets matching corporate color standards." }
    ],
    techStack: ["Buffer / Hootsuite", "Figma Design", "Canva Pro", "LinkedIn Analytics", "Twitter Console"],
    benefits: ["Increased brand search recall", "Stronger professional connections", "Highly active business community boards"]
  },
  "social-media-marketing-agency": {
    slug: "social-media-marketing-agency",
    category: "Digital Marketing",
    title: "Social Media Marketing Agency",
    tagline: "Paid social advertising to scale customer acquisitions.",
    desc: "We create, test, and manage paid ad campaigns on Meta Ads (Facebook & Instagram) and LinkedIn Ads, targeting specific business buyer profiles.",
    deliverables: [
      { title: "Meta Ads Campaigns Setup", text: "Configure pixel tracking codes, design assets, and target custom buyer profiles." },
      { title: "LinkedIn Lead Generation Ads", text: "Run in-feed sponsored messages targeting managers and decision makers." },
      { title: "Retargeting Ad Funnels", text: "Remind previous website visitors about your software products, boosting conversions." }
    ],
    techStack: ["Meta Ads Manager", "LinkedIn Campaign Manager", "Meta Pixel API", "Google Tag Manager"],
    benefits: ["Scale website cart signups", "Target exact job title profiles", "Lower conversion costs through retargeting"]
  },

  // Desktop Development
  "desktop-development-tauri-electron": {
    slug: "desktop-development-tauri-electron",
    category: "Desktop Development",
    title: "Desktop Application Development",
    tagline: "Cross-platform desktop apps built using Tauri and Electron.",
    desc: "We engineer lightweight, cross-platform desktop applications that run directly on Windows, macOS, and Linux operating systems.",
    deliverables: [
      { title: "Lightweight Tauri Apps", text: "Write high-performance desktop apps using Rust cores and web interfaces." },
      { title: "Offline Storage Systems", text: "Local database configurations saving files securely without requiring cloud connections." },
      { title: "Operating System Integrations", text: "Read local files, show system tray icons, and display native notification banners." }
    ],
    techStack: ["Rust", "Tauri SDK", "Electron", "React", "SQLite DB"],
    benefits: ["Small app package file sizes", "Native operating system speeds", "Single source codebase for Windows & Mac"]
  }
};
