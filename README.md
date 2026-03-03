# Lee Lee's Lashes

Premium lash extensions website built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)

## Features

- **Splash Intro** — Dominant logo reveal, dismisses on first user motion (mouse, scroll, touch, key), session-persisted
- **Hero Section** — Blush gradient with soft image overlay, dual CTAs
- **Authority Section** — Studio showcase images + trust feature grid
- **Signature Sets** — Pricing cards for Classic, Hybrid, and Volume lash sets
- **Testimonials** — Client reviews with star ratings and rose accent details
- **Final CTA** — Full blush background with booking call-to-action
- **Responsive Navbar** — Fixed header with mobile menu, logo via `next/image`
- **Footer** — Social links, service links, brand info

## Brand Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#F7F1EE` | Page background |
| Blush | `#E8CFC8` | Section backgrounds, accents |
| Rose | `#C97E74` | Primary buttons, accent lines |
| Brown | `#8A5A52` | Headings, primary text |
| Gold | `#C8A46A` | Minimal icon/text accents |
| Charcoal | `#2B2B2B` | Footer, body text |
| White | `#FFFFFF` | Cards, backgrounds |

## Typography

- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- No script fonts in code — reserved for logo only

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** `next/image` with priority loading
- **Fonts:** `next/font/google` (Playfair Display, Inter)
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, nav/footer
│   ├── page.tsx            # Homepage assembly
│   └── globals.css         # Tailwind base + brand styles
├── components/
│   ├── SplashIntro.tsx     # Logo splash screen (client)
│   ├── Navbar.tsx          # Fixed responsive navigation (client)
│   ├── Hero.tsx            # Hero section with gradient
│   ├── Authority.tsx       # Trust features + studio images
│   ├── SignatureSets.tsx   # Lash service pricing cards
│   ├── Testimonials.tsx    # Client reviews
│   ├── FinalCTA.tsx        # Booking call-to-action
│   ├── Footer.tsx          # Site footer
│   ├── Button.tsx          # Reusable button/link component
│   └── SectionHeading.tsx  # Reusable section title
└── hooks/
    └── usePrefersReducedMotion.ts
public/
├── brand/                  # Logo
├── hero/                   # Hero background images
├── studio/                 # Studio/application photos
├── gallery/                # Detail shots
└── products/               # Product images
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Framework preset is auto-detected as **Next.js**
4. No environment variables required
5. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFeeTheDeveloper%2Flee_lees_lashes-site)

## License

Private project — all rights reserved.
