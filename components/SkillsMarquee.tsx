"use client";

const skillsText =
  "React.js • Laravel • Node.js • Go • Puppeteer • Penetration Testing • MLOps • Three.js • ";

export function SkillsMarquee() {
  return (
    <div className="overflow-hidden py-8">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <p className="display-font text-[clamp(1.75rem,5vw,4.5rem)] leading-none text-muted">
          {skillsText.repeat(3)}
        </p>
        <p
          aria-hidden
          className="display-font text-[clamp(1.75rem,5vw,4.5rem)] leading-none text-muted"
        >
          {skillsText.repeat(3)}
        </p>
      </div>
    </div>
  );
}
