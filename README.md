# Developer Portfolio

Production-ready personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- Hero, About, Skills, Experience, Projects, GitHub, Resume, and Contact sections
- Dark mode with system preference support
- Scroll reveal animations and smooth section navigation
- SEO metadata, Open Graph, sitemap, and robots
- Accessible focus states and reduced-motion support
- Netlify-ready configuration via `@netlify/plugin-nextjs`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Content

Update the data files:

- `data/profile.ts` — name, links, intro, navigation
- `data/skills.ts` — skill categories
- `data/experience.ts` — timeline roles
- `data/projects.ts` — featured projects
- `data/github.ts` — GitHub profile and repositories

Replace assets in `public/images` and `public/resume.pdf`.

Set your production URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

## Build

```bash
npm run build
npm start
```

## Deploy to Netlify

1. Push this repository to GitHub.
2. Create a new Netlify site from the repository.
3. Build command: `npm run build`
4. Publish directory is handled by `@netlify/plugin-nextjs` (`netlify.toml` included).
5. Add environment variable `NEXT_PUBLIC_SITE_URL` with your live domain.

## Project Structure

```text
app/           App Router pages and metadata
components/    UI, layout, motion, and section components
data/          Portfolio content
hooks/         Client hooks
lib/           Shared helpers and constants
styles/        Global design tokens and CSS
types/         TypeScript models
utils/         Formatting utilities
public/images  Profile, OG, and project visuals
```
