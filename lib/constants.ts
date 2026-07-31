export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://supawit-nipuna-portfolio.netlify.app";

export const SITE_NAME = "Supawit Nipuna";

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  github: "github",
  resume: "resume",
  contact: "contact",
} as const;
