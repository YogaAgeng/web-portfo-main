import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-[#ea4c24] text-white">
      <div className="section-container flex h-16 items-center justify-between">
        {/* Brand identifier */}
        <Link
          href="/"
          className="display-font text-2xl tracking-wider text-white uppercase"
        >
          ADIE AGENG PRAYOGO
        </Link>

        {/* Rigid Navigation Menu - Solid white text, zero hover transition */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-xs font-bold tracking-[0.2em] text-white uppercase"
          >
            ABOUT
          </Link>
          <Link
            href="#projects"
            className="text-xs font-bold tracking-[0.2em] text-white uppercase"
          >
            PROJECTS
          </Link>
          <Link
            href="#experience"
            className="text-xs font-bold tracking-[0.2em] text-white uppercase"
          >
            EXPERIENCE
          </Link>
          <Link
            href="#contact"
            className="text-xs font-bold tracking-[0.2em] text-white uppercase"
          >
            CONTACT
          </Link>
        </nav>

        {/* Rigid High-Contrast CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 text-xs font-bold tracking-[0.18em] uppercase select-none"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </header>
  );
}
