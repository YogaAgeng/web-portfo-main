import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ea4c24] text-white py-16 sm:py-20 md:py-24">
      {/* 1. Massive Background Name Layer - Strictly constrained & behind the portrait */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="display-font text-[13vw] font-bold text-white/20 uppercase whitespace-nowrap leading-none tracking-tight">
          YOGA

        </span>
      </div>

      <div className="section-container relative z-10 mx-auto flex flex-col items-center justify-center text-center">
        {/* 2. Central Portrait Arch (Grayscale by default, color + scale on group-hover) */}
        <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] mx-auto rounded-t-full overflow-hidden group shadow-2xl border-t-2 border-x-2 border-white/40 bg-black">
          <Image
            src="/projects/profik.jpeg"
            alt="Adie Ageng Prayogo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* 3. Foreground Tagline and Rigid Buttons */}
        <div className="relative z-20 mt-8 max-w-2xl mx-auto space-y-6 px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-white/95 leading-relaxed max-w-xl mx-auto">
            Logic and automation brought together. Building reliable web applications and automated systems.
          </p>

          {/* Rigid Buttons: High contrast against orange, zero hover animations */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase select-none"
            >
              <span>CONTACT ME</span>
              <ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase select-none"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
