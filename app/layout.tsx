import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adie Ageng Prayogo | Full Stack Web Developer",
  description:
    "Personal Developer Portfolio for Adie Ageng Prayogo - Full Stack Web Developer. Logic and automation brought together.",
  keywords: [
    "Adie Ageng Prayogo",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Node.js",
    "Puppeteer",
    "Web Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#f4f4f4]">
      <body
        className={`${bebas.variable} ${manrope.variable} bg-[#f4f4f4] text-[#111111] font-sans antialiased selection:bg-[#ea4c24] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
