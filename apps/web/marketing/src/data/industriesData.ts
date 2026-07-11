export interface IndustryItem {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  solutions: { title: string; text: string }[];
  techStack: string[];
  benefits: string[];
}

export const industriesRegistry: Record<string, IndustryItem> = {
  "hospitality-industry": {
    slug: "hospitality-industry",
    category: "Consumer & Media",
    title: "Hospitality Industry",
    tagline: "Next-Gen Hotel Management Software & Hospitality Solutions.",
    desc: "We engineer unified hospitality management systems that streamline guest front-desk check-ins, automate room housekeeping schedules, and link direct POS channels.",
    solutions: [
      { title: "Property Management Systems (PMS)", text: "Real-time room occupancy boards, booking sync pipelines, and check-in workflows." },
      { title: "Housekeeping Automations", text: "Automated task assignments for cleaning staff based on real-time room checkout triggers." },
      { title: "POS Dining Integrations", text: "Link restaurant billing straight onto guest room bills, unifying client invoices." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Stripe POS"],
    benefits: ["Sub-second guest check-in times", "30% reduction in housekeeping lag", "Integrated accounting journals"]
  },
  "food-industry": {
    slug: "food-industry",
    category: "Consumer & Media",
    title: "Food Industry",
    tagline: "Custom ordering portals and kitchen management systems.",
    desc: "We build high-performance food delivery apps and kitchen display systems (KDS) designed to route orders fast and manage inventory levels.",
    solutions: [
      { title: "Kitchen Display Systems (KDS)", text: "Real-time visual order ticket queues for kitchen staff, showing preparation timelines." },
      { title: "Direct Client Ordering Portals", text: "High-speed mobile menus optimized for fast checkout conversion rates." },
      { title: "Recipe Stock Control", text: "Automated deductions from raw inventory counts whenever food plates are sold." }
    ],
    techStack: ["Next.js", "Express.js", "MongoDB", "Websockets", "Tailwind CSS"],
    benefits: ["Accelerated order fulfillment", "Accurate ingredient waste logs", "Commission-free client ordering"]
  },
  "media-industry": {
    slug: "media-industry",
    category: "Consumer & Media",
    title: "Media Industry",
    tagline: "Custom media streaming systems and asset management.",
    desc: "We develop digital asset management systems and streaming pipelines built to host, catalog, and secure high-definition video assets.",
    solutions: [
      { title: "Digital Asset Management (DAM)", text: "Metadata catalog indexing, search arrays, and access controls for media files." },
      { title: "Video Transcoding Pipes", text: "Automated serverless jobs encoding video files into multiple stream-friendly resolutions." },
      { title: "Rights & Licensing Ledgers", text: "Database registers tracking distribution licensing dates and client contracts." }
    ],
    techStack: ["AWS Elemental", "React", "Node.js", "PostgreSQL", "Cloudinary API"],
    benefits: ["Immediate search access to files", "Seamless multi-resolution streaming", "Strict copyright DRM compliance"]
  },

  "fintech-industry": {
    slug: "fintech-industry",
    category: "Commerce & Finance",
    title: "Fintech Industry",
    tagline: "Fintech Software Development Services & Secure Ledgers.",
    desc: "We code secure, compliant financial software solutions featuring transaction double-entry ledgers, fraud detection algorithms, and API connections.",
    solutions: [
      { title: "Double-Entry Ledger Cores", text: "Immutable balance tracking tables ensuring financial record integrity." },
      { title: "Risk & Fraud Scoring", text: "Real-time transaction profiling engines flagging high-risk activities immediately." },
      { title: "Bank Feed Connectors", text: "Secure integrations with open-banking APIs like Plaid and Razorpay." }
    ],
    techStack: ["Go/Golang", "PostgreSQL DB", "Redis Cache", "AES-256 Encryption", "Docker"],
    benefits: ["PCI-DSS aligned security", "Immutable audit trails", "Zero-error balance calculations"]
  },
  "retail-industry": {
    slug: "retail-industry",
    category: "Commerce & Finance",
    title: "Retail Industry",
    tagline: "Retail Software Solutions & Multi-Store Inventory.",
    desc: "We build custom POS terminal interfaces and real-time inventory tools connecting physical stores with digital management panels.",
    solutions: [
      { title: "Offline-First POS Interface", text: "Fast checkout terminals that continue processing transactions even during network offline events." },
      { title: "Gift Card & Loyalty Systems", text: "Unified customer account panels tracking loyalty points across retail locations." },
      { title: "Store Transfer Automations", text: "Automated shipping request routes when one retail store faces item stockouts." }
    ],
    techStack: ["React", "SQLite Local", "Node.js Middleware", "PostgreSQL", "Tailwind CSS"],
    benefits: ["Zero checkout downtime", "Synchronized loyalty metrics", "Optimized stock levels across stores"]
  },
  "ecommerce-industry": {
    slug: "ecommerce-industry",
    category: "Commerce & Finance",
    title: "E-commerce Industry",
    tagline: "E-commerce Software Development Company & Storefronts.",
    desc: "We develop multi-channel e-commerce storefronts designed to support high volume sales and handle real-time shopping cart transactions.",
    solutions: [
      { title: "Custom Headless Storefronts", text: "Sub-second loading product indices optimized for search engine crawl bots." },
      { title: "Cart Ingestion Channels", text: "High-performance API endpoints that process multi-item checkouts simultaneously." },
      { title: "Dynamic Discounts Engine", text: "Complex coupon engines adjusting product prices based on user categories." }
    ],
    techStack: ["Shopify Headless API", "React", "Node.js", "Redis Cache", "PostgreSQL"],
    benefits: ["Sub-second product displays", "High conversion checkout flows", "Multi-warehouse dispatch routes"]
  },

  "telecom-industry": {
    slug: "telecom-industry",
    category: "Tech & Communications",
    title: "Telecom Industry",
    tagline: "Telecommunication Industry networks and billing.",
    desc: "We engineer high-performance data processing pipelines to track service usage logs, generate customer bills, and map network nodes.",
    solutions: [
      { title: "CDR Processing Systems", text: "High-speed batch parsers loading millions of call data records (CDRs) daily." },
      { title: "Customer Billing Engines", text: "Automated invoice runs calculating package fees, mobile usage, and taxes." },
      { title: "Network Quality Dashboards", text: "Real-time telemetry screens mapping cellular tower signal drops." }
    ],
    techStack: ["Go/Golang", "Kafka Messaging", "ClickHouse DB", "React", "Docker"],
    benefits: ["Sub-second usage calculation", "Accurate subscriber billing runs", "Immediate network issue alerts"]
  },
  "it-industry": {
    slug: "it-industry",
    category: "Tech & Communications",
    title: "IT Industry",
    tagline: "Software for IT Management and Infrastructure.",
    desc: "We develop system monitoring applications, server dashboards, and customer helpdesks to automate IT department workloads.",
    solutions: [
      { title: "Server Monitoring Tools", text: "Telemetry agents writing CPU, memory, and database status reports continuously." },
      { title: "Automated Ticket Routers", text: "Algorithms classifying helpdesk emails and assigning them to qualified engineers." },
      { title: "API Gateway Logs Dashboard", text: "Central audit views capturing and indexing microservice traffic records." }
    ],
    techStack: ["React", "Prometheus APIs", "Elasticsearch", "Node.js", "Tailwind CSS"],
    benefits: ["99.9% database system uptime", "Immediate system error alerts", "Faster helpdesk resolution times"]
  },

  "health-industry": {
    slug: "health-industry",
    category: "Health Industry",
    title: "Health Industry",
    tagline: "Healthcare Software Development Company & EHR Suites.",
    desc: "We design and build secure HIPAA-compliant Electronic Health Record (EHR) systems and patient portals focused on medical data protection.",
    solutions: [
      { title: "Electronic Health Records (EHR)", text: "Secure, structured storage profiles for patient diagnostic histories and prescriptions." },
      { title: "Doctor Appointment Scheduler", text: "Fluid calendars allowing patients to book consultations, syncing doctor workloads." },
      { title: "Secure Patient Portals", text: "Safe dashboards where patients download lab results and upload medical history forms." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AES-255 Database Encryption", "AWS S3 HIPAA storage"],
    benefits: ["Strict HIPAA-compliant security", "Zero patient records loss", "Unified appointment calendars"]
  },

  "manufacturing-industry": {
    slug: "manufacturing-industry",
    category: "Industrial & Logistics",
    title: "Manufacturing Industry",
    tagline: "Manufacturing Software Solutions & Production Control.",
    desc: "We build manufacturing execution systems (MES) designed to monitor assembly lines, track raw materials, and optimize batch yields.",
    solutions: [
      { title: "Bill of Materials (BOM) Control", text: "Track exact component costs converting raw items into final assemblies." },
      { title: "Assembly Tracking Dashboards", text: "Watch production stages in real-time, highlighting assembly bottleneck nodes." },
      { title: "Quality Audit Logs", text: "Digital forms tracking unit inspection metrics before shipping occurs." }
    ],
    techStack: ["React", "Go/Golang", "PostgreSQL DB", "MQTT Broker", "Docker"],
    benefits: ["Accurate production costing", "Reduced assembly bottleneck lag", "Compliant product tracking records"]
  },
  "mining-industry": {
    slug: "mining-industry",
    category: "Industrial & Logistics",
    title: "Mining Industry",
    tagline: "Custom Mining Industry Software Solutions.",
    desc: "We engineer heavy-equipment tracking software and safety logging databases designed to operate durably in remote work conditions.",
    solutions: [
      { title: "Equipment Telemetry Logs", text: "Offline-capable database engines mapping fuel burn rates and engine temperatures." },
      { title: "Staff Shift Logs", text: "Digital safety logs recording underground team listings and check-ins." },
      { title: "Haulage Truck Tracking", text: "Real-time dispatch panels visualising truck movements across mine sites." }
    ],
    techStack: ["Kotlin SQLite", "Node.js Middleware", "PostgreSQL", "Docker", "Socket.io"],
    benefits: ["Zero lost fuel data records", "Accurate safety check-in logs", "Optimized truck routing speeds"]
  },
  "supply-chain": {
    slug: "supply-chain",
    category: "Industrial & Logistics",
    title: "Supply Chain",
    tagline: "Supply Chain Management Software Solutions.",
    desc: "We build custom freight tracking platforms and warehouse management systems to coordinate logistics from cargo ship to delivery truck.",
    solutions: [
      { title: "Warehouse Bin Map Controls", text: "Visual grids mapping item layouts across racks, optimizing pick routes." },
      { title: "Shipment Tracking Pipelines", text: "Expose real-time location checkpoints and expected delivery dates for freight." },
      { title: "Purchase Order Matching", text: "Automated matching verifying physical delivery bills with digital buy contracts." }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Redis Cache", "PostgreSQL DB"],
    benefits: ["Optimized warehouse picking", "Real-time freight locations visibility", "Eliminated manual paper bookkeeping"]
  }
};
