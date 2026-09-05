"use client";

import { Mail, Globe, GitBranch, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="w-full bg-[#ea4c24] text-white">
      {/* Top Divider */}
      <div className="border-b border-white/20">
        <div className="section-container flex flex-wrap items-center justify-between py-3 text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">
          <span>[ 05 ] CONTACT & ENGAGEMENT</span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
      </div>

      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.9] text-white mb-6">
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-[#111111]">RELIABLE.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md mb-8">
                Currently open for full-stack engineering positions, backend architecture
                contracts, web automation pipelines, and technical collaboration.
              </p>

              {/* Stacked divider */}
              <div className="flex flex-col gap-[3px] my-6">
                <div className="h-[1px] bg-white/30 w-full"></div>
                <div className="h-[2px] bg-white/60 w-full"></div>
                <div className="h-[1px] bg-white/30 w-full"></div>
              </div>

              {/* Contact list with rigid static icons */}
              <div className="space-y-4 text-xs font-bold tracking-wider uppercase text-white">
                {/* Email */}
                <a
                  href="mailto:yogafriend844@gmail.com"
                  className="flex items-center gap-3 border border-white/30 bg-black/10 p-3 select-none"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-white text-[#ea4c24]">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/70">EMAIL</span>
                    <span>yogafriend844@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/adie-ageng-prayogo-05c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/30 bg-black/10 p-3 select-none"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-white text-[#ea4c24]">
                    <Globe className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/70">LINKEDIN PROFILE</span>
                    <span>in/adieagengprayogo</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/YogaAgeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/30 bg-black/10 p-3 select-none"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-white text-[#ea4c24]">
                    <GitBranch className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/70">GITHUB REPOSITORY</span>
                    <span>github.com/YogaAgeng</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 border border-white/30 bg-black/10 p-3 select-none">
                  <div className="flex h-8 w-8 items-center justify-center bg-white text-[#ea4c24]">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/70">DOMICILE</span>
                    <span>LAMONGAN, INDONESIA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent border-b contact form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="border border-white/30 bg-black/10 p-8 sm:p-10">
                {/* <div className="flex items-center justify-between border-b border-white/30 pb-4 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
                  <span>DISPATCH A TRANSMISSION</span>
                  <span>SYSTEM READY</span>
                </div> */}

                {submitted ? (
                  <div className="border border-white/40 bg-white/10 p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-white mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="display-font text-3xl text-white uppercase mb-2">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="text-sm text-white/90 max-w-sm mx-auto">
                      Thank you for reaching out. Your communication has been dispatched and I will
                      respond promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ENTER YOUR FULL NAME"
                        className="w-full bg-transparent border-b border-white/60 py-3 text-white placeholder:text-white/60 text-sm font-medium focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                        EMAIL COORDINATE *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ENTER YOUR WORK EMAIL ADDRESS"
                        className="w-full bg-transparent border-b border-white/60 py-3 text-white placeholder:text-white/60 text-sm font-medium focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        placeholder="E.G., FULLSTACK WEB DEV / WEB SCRAPING / API"
                        className="w-full bg-transparent border-b border-white/60 py-3 text-white placeholder:text-white/60 text-sm font-medium focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                        PROJECT SPECIFICATION / MESSAGE *
                      </label>
                      <textarea
                        rows={1}
                        required
                        placeholder="BRIEFLY DESCRIBE YOUR REQUIREMENTS, TIMELINES, OR QUESTIONS"
                        className="w-full bg-transparent border-b border-white/60 py-3 text-white placeholder:text-white/50 text-sm font-medium focus:border-white focus:outline-none resize-none"
                      />
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 bg-white text-[#ea4c24] px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase select-none w-full sm:w-auto"
                      >
                        <span>SEND MESSAGE</span>
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/20 bg-black/15 py-6">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">
          <span>© {new Date().getFullYear()} ADIE AGENG PRAYOGO</span>
        </div>
      </div>
    </footer>
  );
}
