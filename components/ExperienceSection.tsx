import { Briefcase, Code, GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "BINUS UNIVERSITY @Malang",
    role: "COMPUTER SCIENCE",
    period: "2021 — 2026",
    location: "Malang, Indonesia",
    badge: "EDUCATION",
    description:
      "Completed a comprehensive undergraduate program focusing on core computer science principles, system architecture, and software engineering methodologies.",
    responsibilities: [
      "Specialized in Software Engineering, building a strong foundation in MVC architecture, event-driven systems, and microservices.",
      "Applied Agile (Scrum) methodologies and RESTful API design principles throughout academic projects.",
      "Demonstrated proficiency across multiple paradigms including JavaScript, PHP, Python, Java, Go, and C/C++.",
    ],
    tech: [
      "COMPUTER SCIENCE",
      "SOFTWARE ENGINEERING",
      "AGILE (SCRUM)",
      "SYSTEM ARCHITECTURE",
    ],
    icon: GraduationCap,
  },
  {
    company: "SMK Telkom Darul 'Ulum Peterongan",
    role: "Software Engineering",
    period: "2018 — 2021",
    location: "Jombang, Indonesia",
    badge: "EDUCATION",
    description:
      "Built foundational programming logic and web development skills. Completed a vocational internship program (Prakerin) focused on creating company profile websites and learning core web technologies.",
    responsibilities: [
      "Gained hands-on experience in basic web development technologies including HTML, CSS, and JavaScript.",
      "Successfully completed a professional internship at Pegasus Academy Malang, building real-world web assets.",
      "Developed algorithmic thinking and foundational software engineering concepts.",
    ],
    tech: [
      "VOCATIONAL EDUCATION",
      "HTML/CSS",
      "JAVASCRIPT BASICS",
      "ALGORITHMS",
    ],
    icon: GraduationCap,
  },
  {
    company: "PT Fekusadev Inovasi Digital",
    role: "STAFF PROGRAMMER",
    period: "Nov 2025 — Apr 2026",
    location: "Malang, Indonesia",
    badge: "FULL-TIME",
    description:
      "Responsible for developing core full-stack features, building web scrapers with Puppeteer for automated data mining, and optimizing API endpoints. Managed distributed Redis queues and resilient database pipelines.",
    responsibilities: [
      "Engineered automated crawling architectures bypassing bot protection protocols",
      "Designed and delivered fullstack dashboard interfaces for client operations",
      "Optimized SQL queries and Redis caching layers for high throughput",
      "Maintained containerized Docker environments for reproducible deployments",
    ],
    tech: ["Next.js", "Node.js", "Puppeteer", "Redis", "Laravel", "MySQL", "Linux"],
    icon: Briefcase,
  },
  {
    company: "PT Citra Gema Indonesia",
    role: "Fullstack Developer Intern",
    period: "Feb 2024 — Feb 2025",
    location: "Bali, Indonesia",
    badge: "INTERNSHIP",
    description:
      "Focused on comprehensive WordPress development. Bridged responsive front-end interfaces with back-end databases, and engineered custom WordPress themes and plugins tailored to specific business requirements",
    responsibilities: [
      "Wrote clean, efficient PHP code to build and customize WordPress plugins and core functionalities",
      "Designed and integrated responsive front-end layouts within custom WordPress themes.",
      "Managed database integrations and troubleshooting within the WordPress architecture.",
    ],
    tech: ["Wordpress", "Shopify", "Elementor", "Yoast SEO", "WooCommerce", "MySQL"],
    icon: Code,
  },
  {
    company: "Pegasus Academy",
    role: "Intern",
    period: "2019",
    location: "Malang, Indonesia",
    badge: "INTERNSHIP",
    description:
      "Assisted technical instructors in training modules, evaluated student programming assignments, and helped troubleshoot algorithmic and frontend bugs in web applications.",
    responsibilities: [
      "Mentored junior learners on web development fundamentals and DOM manipulation",
      "Conducted code reviews for class project deliverables",
      "Created technical documentation and code snippet guides",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Git", "Problem Solving"],
    icon: GraduationCap,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="section-container">
        {/* Top stacked horizontal divider lines (1px / 1px / 2px / 1px in white/20 and white/40) */}
        <div className="stacked-dividers-dark mb-12">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-heavy"></div>
          <div className="line-3"></div>
        </div>

        {/* 5-Col Header / 7-Col List Structure with items-start for Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 items-start relative">
          {/* Left Column (Sticky Sidebar) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative z-10">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#ea4c24] uppercase mb-4">
              <span>[ 04 ]</span>
              <span>CAREER & WORK HISTORY</span>
            </div>

            <h2 className="display-font text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
              PROVEN
              <br />
              ENGINEERING
              <br />
              <span className="text-[#ea4c24]">EXPERIENCE.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-md">
              Demonstrated success across production development, software automation,
              and technical operations in engineering teams.
            </p>

            {/* Stacked divider */}
            <div className="stacked-dividers-dark my-8">
              <div className="line-1"></div>
              <div className="line-heavy"></div>
              <div className="line-2"></div>
            </div>

            {/* Stat block in dark card */}
            <div className="border border-neutral-800 bg-[#161616] p-6 space-y-4">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#ea4c24] uppercase">
                PRACTICE PRINCIPLES
              </div>
              <div className="text-xs text-neutral-300 space-y-2">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-[#ea4c24] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>Focus on maintainability and scalable backend pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-[#ea4c24] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>Rigid, deterministic web automations and anti-bot systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-[#ea4c24] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>Strict schema validation, type safety, and clean APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling Content) */}
          <div className="lg:col-span-7 flex flex-col gap-y-12">
            {experiences.map((exp, index) => {
              const IconComp = exp.icon;
              return (
                <div key={exp.company}>
                  <div className="border border-neutral-800 bg-[#161616] p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center bg-[#222222] border border-neutral-700 text-[#ea4c24]">
                          <IconComp className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                            ORGANIZATION
                          </span>
                          <span className="text-base font-bold text-white tracking-wide">
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      <span className="bg-[#ea4c24] px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Role and Period */}
                    <div className="mb-4">
                      <h3 className="display-font text-3xl sm:text-4xl text-white uppercase leading-tight mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#ea4c24]" strokeWidth={1.5} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#ea4c24]" strokeWidth={1.5} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Responsibilities list */}
                    <div className="border-t border-neutral-800 pt-5 mb-6">
                      <span className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3">
                        KEY DELIVERABLES:
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 bg-[#ea4c24] mt-1.5 shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack tags */}
                    <div className="flex flex-wrap gap-2 border-t border-neutral-800 pt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-[#222222] border border-neutral-700 px-2.5 py-1 text-[10px] font-bold tracking-wider text-neutral-300 uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stacked divider between experience items */}
                  {index < experiences.length - 1 && (
                    <div className="stacked-dividers-dark my-8">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-heavy"></div>
                      <div className="line-3"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stacked divider */}
        <div className="stacked-dividers-dark mt-16">
          <div className="line-1"></div>
          <div className="line-heavy"></div>
          <div className="line-2"></div>
        </div>
      </div>
    </section>
  );
}
