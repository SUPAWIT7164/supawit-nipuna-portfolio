import { profile } from "@/data/profile";
import type { GitHubProfile, GitHubRepo } from "@/types";

const GITHUB_USERNAME = profile.github;
const REPOS_LIMIT = 6;

interface GitHubApiUser {
  login: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string | null;
}

interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
}

const fallbackProfile: Omit<GitHubProfile, "repos"> = {
  username: GITHUB_USERNAME,
  url: profile.githubUrl,
  bio: "Developer (ศุภวิชญ์ นิปุณะ / เฟิร์ส) — Vue.js, Node.js, Laravel, IoT, Smart Building, and production systems.",
  publicRepos: 0,
  followers: 0,
  following: 0,
  contributionSummary:
    "โฟกัสที่การส่งมอบฟีเจอร์ที่อ่านง่าย ดูแลต่อได้ และพร้อมใช้งานจริง ทั้งฝั่ง Frontend, Backend และการเชื่อมต่อระบบภายนอก",
  languages: ["JavaScript", "TypeScript", "PHP", "Vue", "HTML", "CSS"],
};

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "supawit-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function mapRepo(repo: GitHubApiRepo): GitHubRepo {
  return {
    id: String(repo.id),
    name: repo.name,
    description: repo.description?.trim() || "No description provided.",
    url: repo.html_url,
    language: repo.language ?? "Other",
    topics: repo.topics ?? [],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  };
}

function isDisplayableRepo(repo: GitHubApiRepo) {
  if (repo.fork || repo.archived) return false;
  if (!repo.name || repo.name === "-" || repo.name.startsWith(".")) return false;
  return true;
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`GitHub API error ${response.status}: ${url}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("GitHub API fetch failed:", error);
    return null;
  }
}

export async function getGitHubProfile(): Promise<GitHubProfile> {
  const [user, repos] = await Promise.all([
    fetchJson<GitHubApiUser>(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetchJson<GitHubApiRepo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`,
    ),
  ]);

  const latestRepos = (repos ?? [])
    .filter(isDisplayableRepo)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )
    .slice(0, REPOS_LIMIT)
    .map(mapRepo);

  const languages = Array.from(
    new Set(
      (repos ?? [])
        .filter(isDisplayableRepo)
        .map((repo) => repo.language)
        .filter((language): language is string => Boolean(language)),
    ),
  ).slice(0, 8);

  return {
    username: user?.login ?? fallbackProfile.username,
    url: user?.html_url ?? fallbackProfile.url,
    bio: user?.bio?.trim() || fallbackProfile.bio,
    publicRepos: user?.public_repos ?? fallbackProfile.publicRepos,
    followers: user?.followers ?? fallbackProfile.followers,
    following: user?.following ?? fallbackProfile.following,
    contributionSummary: fallbackProfile.contributionSummary,
    languages: languages.length > 0 ? languages : fallbackProfile.languages,
    repos: latestRepos,
  };
}
