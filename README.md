# Ei Portfolio (Next.js + TypeScript)

My personal portfolio website showcasing my projects, experience, and education. Built with Next.js (App Router) and TypeScript.

## Live Site
- Vercel: https://my-portfolio-liart-zeta-9mnpnr6usz.vercel.app/

## Tech Stack
- Next.js (App Router)
- React + TypeScript

## Key Sections
- Home / Hero
- Featured Projects + Projects page
- Experience
- Education
- Contact
- Resume PDF (served from `/public`)

## Project Structure
- `src/app` — routes and pages (App Router)
- `src/components` — UI components (layout + sections)
- `src/data` — content/data sources (projects, experience)
- `public` — static assets (including resume PDF)

## Run Locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build
```bash
npm run build
npm run start
```

# Deployment
Deployed on Vercel. Every push to main triggers an automatic redeploy.
