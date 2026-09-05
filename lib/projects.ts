export type ProjectItem = {
  slug: string;
  id: string;
  name: string;
  category: string;
  listStack: string;
  previewImage: string;
  status: string;
  period: string;
  overview: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  links: {
    live: string;
    github: string;
  };
  gallery: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "news-aggregator-dashboard",
    id: "01",
    name: "News Aggregator Dashboard",
    category: "WEB APPLICATION / REAL-TIME API",
    listStack: "REACT, REAL-TIME APIS, DATA VISUALIZATION",
    previewImage: "/projects/news-aggregator.jpg",
    status: "Live Production Concept",
    period: "2024",
    overview:
      "A real-time news aggregation and analytics dashboard that tracks breaking headlines, sentiment distribution, and publication trends across global sources.",
    longDescription:
      "Engineered with a high-throughput React interface consuming multiple news and financial wire APIs. Features automated content categorisation, sentiment trend visualization, real-time live tickers, and search filtering to empower analysts with synchronized news intelligence.",
    highlights: [
      "Real-time news stream processing with low-latency API integration",
      "Interactive data visualization for topic sentiment and publication volume",
      "Dynamic categorization and tag filtering across business, tech, and world news",
      "Responsive, clean data dashboard architecture with live breaking news alerts",
    ],
    techStack: ["React", "TypeScript", "Real-time APIs", "Tailwind CSS", "Data Analytics"],
    links: {
      live: "https://fekusadev-portfolio.vercel.app/",
      github: "https://github.com/YogaAgeng",
    },
    gallery: ["/projects/news-aggregator.jpg"],
  },
  {
    slug: "photography-booking-management",
    id: "02",
    name: "Photography Booking Management",
    category: "OPERATIONS PLATFORM / WEB APP",
    listStack: "DRAG-AND-DROP UI, WHATSAPP INTEGRATION",
    previewImage: "/projects/photobooking-1.png",
    status: "Commercial Client Solution",
    period: "2024",
    overview:
      "A booking management platform tailored for studio photography businesses, featuring drag-and-drop schedule coordination and automated WhatsApp notifications.",
    longDescription:
      "Centralizes client appointments, studio availability, photographer assignments, and deposit payment tracking. Designed to streamline client operations and eliminate double-booking friction during peak photoshoot sessions.",
    highlights: [
      "Interactive drag-and-drop timeline calendar for photoshoot scheduling",
      "Direct WhatsApp notification pipeline for booking confirmations and reminders",
      "Staff allocation, commission tracking, and client contract management",
      "Integrated invoice generation and payment status tracking",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp API", "DnD"],
    links: {
      live: "https://website-jasa-fotografer.vercel.app",
      github: "https://github.com/YogaAgeng",
    },
    gallery: [
      "/projects/photobooking-1.png",
      "/projects/photobooking-2.png",
      "/projects/photobooking-3.png",
    ],
  },
  {
    slug: "social-media-scraping-engine",
    id: "03",
    name: "Social Media Scraping Engine",
    category: "AUTOMATION / DATA MINING",
    listStack: "NODE.JS, PUPPETEER, REDIS, ANTI-BOT BYPASS",
    previewImage: "/projects/scrap-1.jpeg",
    status: "Distributed Automation Engine",
    period: "2024",
    overview:
      "An automated data-mining engine for high-volume content extraction and monitoring across target social media channels and news outlets.",
    longDescription:
      "Constructed to handle resilient web crawling at scale. Implements headless browser orchestrations with Puppeteer, stealth fingerprint spoofing to circumvent anti-bot barriers, Redis-backed asynchronous job queues, and automated JSON payload normalization.",
    highlights: [
      "Headless Puppeteer cluster with stealth evasion against sophisticated anti-bot systems",
      "Redis caching and prioritized job queues for asynchronous scraping tasks",
      "Automated captcha mitigation and proxy pool rotation",
      "Normalized payload generation feeding central data warehousing pipelines",
    ],
    techStack: ["Node.js", "Puppeteer", "Redis", "Job Queue", "Anti-Bot Bypass", "REST API"],
    links: {
      live: "https://fekusadev-portfolio.vercel.app/",
      github: "https://github.com/YogaAgeng",
    },
    gallery: [
      "/projects/scrap-1.jpeg",
      "/projects/scrap-2.jpeg",
      "/projects/scrap-3.jpeg",
    ],
  },
  {
    slug: "integrated-gym-management-system",
    id: "04",
    name: "Integrated Gym Management System",
    category: "BUSINESS MANAGEMENT / POS",
    listStack: "CODEIGNITER 4, SQLITE, POS",
    previewImage: "/projects/gym-1.png",
    status: "Enterprise Management System",
    period: "2024",
    overview:
      "A comprehensive gym operations system connecting cashier Point of Sale (POS), member subscriptions, inventory control, and financial reporting.",
    longDescription:
      "Developed to automate daily fitness center operations. Combines cash desk transactions, recurring member dues, automated expiration alerts, product retail inventory, and managerial reporting into a single robust web application.",
    highlights: [
      "Point of Sale (POS) system integrated with inventory depletion and transaction receipts",
      "Automated membership expiration tracking, check-in validation, and renewal management",
      "Relational SQLite schema optimized for ACID transactional integrity and fast queries",
      "Executive metrics dashboard for monthly recurring revenue and attendance analysis",
    ],
    techStack: ["CodeIgniter 4", "PHP", "SQLite", "POS", "Bootstrap / CSS", "Reporting"],
    links: {
      live: "https://gym-portfolio-blue.vercel.app/",
      github: "https://github.com/YogaAgeng",
    },
    gallery: ["/projects/gym-1.png", "/projects/gym-2.png"],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((project) => project.slug === slug);
}
