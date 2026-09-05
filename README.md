# Portofolio Pribadi - Adie Ageng Prayogo

Website portofolio interaktif dan modern yang dibangun dengan arsitektur **Next.js App Router**, **React 19**, **Tailwind CSS v4**, dan **Framer Motion**.

---

## 🛠️ Identifikasi Seluruh Teknologi yang Digunakan

Berikut adalah rincian lengkap seluruh teknologi, dependensi, arsitektur, dan perkakas (tools) yang digunakan dalam proyek ini:

### 1. Core Framework & Runtime
- **[Next.js](https://nextjs.org/) (v16.1.6)**:
  - Menggunakan **App Router** (`app/` directory).
  - Mendukung kombinasi **Server Components** dan **Client Components** (`"use client"`).
  - Dynamic Routing (`app/projects/[slug]`) dengan **Static Site Generation (SSG)** melalui `generateStaticParams`.
  - Dynamic SEO Metadata menggunakan fungsi `generateMetadata`.
  - Output build dikonfigurasi sebagai `standalone` (`output: "standalone"` di `next.config.ts`) untuk efisiensi container Docker.
- **[React](https://react.dev/) (v19.2.3)**:
  - Library UI generasi terbaru (React 19) dengan React DOM v19.2.3.
- **[Node.js](https://nodejs.org/)**:
  - Runtime environment versi 20 (`node:20-alpine` pada container Docker, `@types/node` v20).
- **[TypeScript](https://www.typescriptlang.org/) (v5.x)**:
  - Bahasa pemrograman berbasis tipe statis untuk menjamin keamanan tipe (*type safety*), autocompletion, dan struktur data proyek yang konsisten (`tsconfig.json`).

### 2. Styling & Desain UI
- **[Tailwind CSS](https://tailwindcss.com/) (v4.x)**:
  - Utility-first CSS framework versi 4 modern (`@import "tailwindcss";`).
  - `@theme inline` untuk konfigurasi token tema: variabel warna kustom (`--background`, `--foreground`, `--muted`, `--accent`, `--surface`) dan token font.
- **[PostCSS](https://postcss.org/) & `@tailwindcss/postcss` (v4.x)**:
  - Tool pemroses CSS yang mengintegrasikan Tailwind v4 ke pipeline build Next.js.
- **Tipografi Google Fonts (`next/font/google`)**:
  - **Bebas Neue**: Digunakan sebagai display font untuk headline dan judul berkarakter tegas.
  - **Manrope**: Digunakan sebagai sans-serif body font untuk keterbacaan teks yang optimal.
  - Dimuat secara otomatis dengan *zero-layout-shift* dan optimalisasi font bawaan Next.js.

### 3. Animasi & Interaktivitas
- **[Framer Motion](https://motion.dev/) (v12.34.5)**:
  - Digunakan untuk transisi animasi scroll (`whileInView`, `viewport`, `initial`, `animate`).
  - Animasi fisika pegas (*spring physics*) dengan `useMotionValue` dan `useSpring` pada kursor kustom dan preview proyek mengambang (*floating thumbnail preview*).
  - Animasi transisi exit/enter dengan `AnimatePresence`.
  - Animasi looping halus (*continuous motion*) dan efek drop-shadow dinamis.
- **Custom Mouse Cursor**:
  - Kursor interaktif dengan deteksi perangkat halus (`pointer: fine`) via `matchMedia`.
- **CSS Keyframes Animation**:
  - Animasi continuous running marquee untuk teks keahlian (*skills track*).

### 4. Containerization & DevOps
- **[Docker](https://www.docker.com/)**:
  - **Multi-Stage Build** pada `Dockerfile` (`node:20-alpine`):
    - **Stage 1 (base)**: Konfigurasi direktori kerja.
    - **Stage 2 (deps)**: Instalasi dependensi dengan `npm ci`.
    - **Stage 3 (builder)**: Kompilasi dan build produksi Next.js.
    - **Stage 4 (runner)**: Image runtime produksi yang ramping dan aman menggunakan user non-root (`nextjs`).
  - Port default: `3000`.
- **`.dockerignore`**:
  - Mengabaikan `.next`, `node_modules`, `.git`, dan file cache agar image berukuran minimal.

### 5. Linting & Kualitas Kode
- **[ESLint](https://eslint.org/) (v9.x)**:
  - Linter JavaScript/TypeScript dengan format konfigurasi modern *Flat Config* (`eslint.config.mjs`).
  - **`eslint-config-next` (v16.1.6)**: Preset linting resmi Next.js yang memastikan *best practice* performa, aksesibilitas, dan aturan React Hook.

---

## 📂 Struktur Direktori Proyek

```plaintext
web-portfo-main/
├── app/
│   ├── favicon.ico              # Favicon website
│   ├── globals.css              # Setup Tailwind v4, tema warna, dan utilitas global
│   ├── layout.tsx               # Root layout, konfigurasi Google Fonts & metadata
│   ├── page.tsx                 # Halaman utama (Hero, Projects, Skills, About/Contact)
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Halaman dinamis detail proyek (SSG + Dynamic Metadata)
├── components/
│   ├── AnimatedReveal.tsx       # Komponen wrapper animasi scroll reveal (Framer Motion)
│   ├── CustomCursor.tsx         # Kursor kustom berbasis mouse tracker & spring physics
│   ├── ProjectDetailView.tsx    # Tampilan komprehensif detail & galeri proyek
│   ├── ProjectsList.tsx         # Daftar proyek dengan interaksi hover floating preview
│   └── SkillsMarquee.tsx        # Teks berjalan animasi continuous marquee
├── lib/
│   └── projects.ts              # Data source & model TypeScript (slug, tech stack, galeri)
├── public/
│   └── projects/                # Asset gambar, tangkapan layar, dan visual proyek
├── Dockerfile                   # Konfigurasi container Docker multi-stage
├── .dockerignore                # File yang dikecualikan dari build Docker
├── eslint.config.mjs            # Konfigurasi ESLint Flat Config
├── next.config.ts               # Konfigurasi Next.js (output standalone)
├── package.json                 # Daftar dependensi & script proyek
├── postcss.config.mjs           # Konfigurasi PostCSS Tailwind
└── tsconfig.json                # Konfigurasi compiler TypeScript
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Menjalankan secara Lokal

```bash
# Instalasi dependensi
npm install

# Jalankan server pengembangan
npm run dev

# Akses via browser
# Buka http://localhost:3000
```

### 2. Membangun untuk Produksi

```bash
# Build produksi
npm run build

# Menjalankan build produksi
npm run start
```

### 3. Menjalankan Menggunakan Docker

```bash
# Build image Docker
docker build -t web-portfolio .

# Jalankan container
docker run -p 3000:3000 web-portfolio
```
