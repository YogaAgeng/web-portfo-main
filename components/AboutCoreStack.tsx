import { Cpu, Server, Bot, Database, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const coreStacks = [
  {
    id: "01",
    name: "Next.js & React",
    tagline: "MODERN FRONTEND ARCHITECTURE",
    description:
      "Building high-performance, server-rendered and statically generated web applications with React 19 and Next.js App Router. Focused on optimal layout shifts, type-safe data flows, and maintainable component hierarchies.",
    features: [
      "App Router & Server/Client components",
      "SSG / ISR for instantaneous page delivery",
      "TypeScript integration with strict schemas",
      "Tailwind CSS v4 tokenized styling",
    ],
    icon: Cpu,
    bgClass: "bg-white",
  },
  {
    id: "02",
    name: "Laravel & PHP",
    tagline: "ROBUST BACKEND SERVICES",
    description:
      "Engineering structured, secure backend architectures and RESTful microservices. Leveraging proven MVC design patterns, database migrations, authentication workflows, and enterprise-grade business logic.",
    features: [
      "RESTful API design and documentation",
      "Eloquent ORM & database relations",
      "Secure authentication & RBAC access control",
      "Queued mailers, tasks, and system events",
    ],
    icon: Server,
    bgClass: "bg-[#f9f9f9]",
  },
  {
    id: "03",
    name: "Node.js & Puppeteer",
    tagline: "AUTOMATION & DATA EXTRACTION",
    description:
      "Architecting automated data-mining pipelines and headless browser workflows. Specializing in high-volume crawling, anti-bot bypassing, asynchronous job queues, and normalized data ingestion.",
    features: [
      "Headless Puppeteer cluster management",
      "Anti-fingerprinting & stealth scraping",
      "Redis-backed task queues & caching",
      "Automated payload cleansing & JSON schema normalization",
    ],
    icon: Bot,
    bgClass: "bg-[#f9f9f9]",
  },
  {
    id: "04",
    name: "MySQL & SQLite",
    tagline: "RELATIONAL DATA ARCHITECTURE",
    description:
      "Designing resilient relational database schemas optimized for ACID compliance, fast indexing, transactional integrity, and analytical query performance across production workloads.",
    features: [
      "Normalized entity-relationship schemas (ERD)",
      "Indexed queries and transaction safety",
      "Point of Sale & inventory data modeling",
      "SQLite embedded solutions & scalable MySQL clusters",
    ],
    icon: Database,
    bgClass: "bg-white",
  },
];

export function AboutCoreStack() {
  return (
    <section id="about" className="w-full border-b border-neutral-300 bg-[#f4f4f4] py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          {/* Header section corresponding to RIVVA's 'Why Choose Us' */}
          <div className="mb-12 border-b border-neutral-300 pb-8">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#ea4c24] uppercase mb-3">
              <span>[ 02 ]</span>
              <span>ABOUT / CORE EXPERTISE</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-[#111111] uppercase leading-[0.95]">
                  Computer Science Graduate.
                  <br />
                  <span className="text-[#ea4c24]">Software Engineering Focus.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 text-sm sm:text-base text-[#555555] leading-relaxed">
                Dedicated to engineering dependable software systems. Combining academic
                rigor in computer science with real-world experience building fullstack
                applications, automated crawlers, and high-integrity databases.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Block Grid: Alternating solid white and #f9f9f9 with 1px neutral-300 gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-300 gap-px border border-neutral-300">
          {coreStacks.map((stack, index) => {
            const IconComponent = stack.icon;
            return (
              <ScrollReveal
                key={stack.id}
                delay={index * 0.08}
                className={`${stack.bgClass} p-8 sm:p-10 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#ea4c24]">
                      BLOCK {"//"} {stack.id}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-neutral-300 bg-white text-[#111111]">
                      <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="block text-[11px] font-bold tracking-[0.2em] text-[#666666] uppercase mb-1">
                    {stack.tagline}
                  </span>

                  <h3 className="display-font text-3xl sm:text-4xl text-[#111111] uppercase mb-4">
                    {stack.name}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-8">
                    {stack.description}
                  </p>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-[#111111] uppercase mb-3">
                    CORE CAPABILITIES:
                  </span>
                  <ul className="space-y-2 text-xs text-[#444444]">
                    {stack.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center bg-[#ea4c24] text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={2} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
