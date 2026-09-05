import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, Check, Calendar, Layers } from "lucide-react";
import type { ProjectItem } from "@/lib/projects";
import { ScrollReveal } from "./ScrollReveal";

type ProjectDetailViewProps = {
  project: ProjectItem;
};

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111111]">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-300 bg-[#f4f4f4]">
        <div className="section-container flex h-16 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase select-none"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <span className="display-font text-xl tracking-wider text-[#111111] uppercase hidden sm:inline">
            ADIE AGENG PRAYOGO {"//"} CASE STUDY
          </span>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#ea4c24] text-white px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase select-none"
          >
            GET IN TOUCH
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-container py-12 md:py-20">
        <ScrollReveal>
          {/* Metadata breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-300 pb-4 mb-8 text-xs font-bold tracking-[0.2em] text-[#666666] uppercase">
            <div className="flex items-center gap-3">
              <span className="text-[#ea4c24]">[ {project.id} ]</span>
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-4 text-[#111111]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#ea4c24]" strokeWidth={1.5} />
                {project.period}
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-[#ea4c24]" strokeWidth={1.5} />
                {project.status}
              </span>
            </div>
          </div>

          {/* Title and Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-neutral-300 pb-12 mb-12">
            <div className="lg:col-span-7">
              <h1 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] uppercase leading-[0.9] mb-6">
                {project.name}
              </h1>
              <div className="inline-block bg-[#111111] text-white px-3.5 py-1.5 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {project.listStack}
              </div>
              <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
                {project.overview}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#ea4c24] text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase select-none"
                  >
                    <span>VISIT LIVE PLATFORM</span>
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#111111] text-white px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase select-none"
                  >
                    <span>SOURCE CODE</span>
                    <GitBranch className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>

            {/* Right column: Highlights and Tech Stack */}
            <div className="lg:col-span-5 border border-neutral-300 bg-white p-6 sm:p-8">
              <div className="border-b border-neutral-200 pb-3 mb-5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#ea4c24]">
                SYSTEM HIGHLIGHTS
              </div>
              <ul className="space-y-3 text-xs text-[#333333] mb-8">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center bg-[#ea4c24] text-white mt-0.5">
                      <Check className="h-2.5 w-2.5" strokeWidth={2} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-200 pt-5">
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] mb-3">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#f4f4f4] border border-neutral-300 px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#111111] uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Deep Dive Description */}
        <ScrollReveal delay={0.1}>
          <div className="border border-neutral-300 bg-white p-8 sm:p-12 mb-16">
            <div className="text-[11px] font-bold tracking-[0.25em] text-[#ea4c24] uppercase mb-3">
              ARCHITECTURAL OVERVIEW
            </div>
            <h2 className="display-font text-3xl sm:text-4xl uppercase text-[#111111] mb-6">
              Engineering Strategy & Problem Solving
            </h2>
            <p className="text-base text-[#444444] leading-relaxed max-w-4xl">
              {project.longDescription}
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Gallery */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#ea4c24] uppercase">
            <span>[ GALLERY ]</span>
            <span>SYSTEM INTERFACES & WORKFLOWS</span>
          </div>

          {project.gallery.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="border border-neutral-300 bg-white p-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-200 bg-[#e8e8e8]">
                  <Image
                    src={img}
                    alt={`${project.name} Screenshot ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-contain bg-[#111111]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.2em] text-[#666666] uppercase px-1">
                  <span>FIGURE {idx + 1} {"//"} {project.name}</span>
                  <span className="text-[#ea4c24]">HIGH RESOLUTION CAPTURE</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 text-center border-t border-neutral-300 pt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 bg-[#111111] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase select-none"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            <span>RETURN TO ALL PROJECTS</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
