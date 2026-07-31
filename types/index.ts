export interface Profile {
  name: string;
  firstName: string;
  thaiName: string;
  nickname: string;
  title: string;
  headline: string;
  introduction: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  address: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  resumeUrl: string;
  photoUrl: string;
  availability: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  responsibilities: string[];
  challenges: string[];
  results: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  stars: number;
  forks: number;
}

export interface GitHubProfile {
  username: string;
  url: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  contributionSummary: string;
  languages: string[];
  repos: GitHubRepo[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "map-pin" | "phone";
}
