import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ScrollReveal } from "./ScrollReveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full border-b border-neutral-300 bg-[#f4f4f4] py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          {/* Section Header */}
          <div className="mb-12 border-b border-neutral-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#ea4c24] uppercase block mb-2">
                [ 03 ] SELECTED PROJECTS
              </span>
              <h2 className="display-font text-5xl sm:text-6xl text-[#111111] uppercase leading-none">
                FEATURED WORK
              </h2>
            </div>
            <p className="text-sm text-[#666666] max-w-sm leading-relaxed">
              Production web applications, automated extraction engines, and operational platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Decluttered 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-neutral-300">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.08} className="flex flex-col border-b border-r border-neutral-300 bg-white">
              {/* Primary Visual Focus: Clean Image Container with Group Hover */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative group block w-full h-[380px] sm:h-[460px] overflow-hidden bg-neutral-200"
              >
                <Image
                  src={project.previewImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
              </Link>

              {/* Minimal Clean Bottom Bar: ONLY Project Name and simple rigid button */}
              <div className="p-5 sm:p-6 flex items-center justify-between gap-4 bg-white border-t border-neutral-200">
                <h3 className="display-font text-2xl sm:text-3xl text-[#111111] uppercase tracking-wide truncate">
                  {project.name}
                </h3>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 shrink-0 bg-[#111111] text-white px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase select-none"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
