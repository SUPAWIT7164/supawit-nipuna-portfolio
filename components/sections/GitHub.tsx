import { ExternalLink, GitFork, Star } from "lucide-react";
import { getGitHubProfile } from "@/lib/github";
import { formatCount } from "@/utils/format";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { GitHubIcon } from "@/components/icons/BrandIcons";

export async function GitHub() {
  const githubProfile = await getGitHubProfile();

  return (
    <section id="github" className="section-padding border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="GitHub"
            title="ผลงานบน GitHub"
            description="โปรไฟล์และโปรเจกต์ล่าสุดที่ดึงมาจาก GitHub โดยตรง"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <aside className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/90 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-sky-400"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-accent">GitHub Profile</p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    @{githubProfile.username}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                  <GitHubIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {githubProfile.bio}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Repos", value: githubProfile.publicRepos },
                  { label: "Followers", value: githubProfile.followers },
                  { label: "Following", value: githubProfile.following },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-background px-3 py-3 text-center"
                  >
                    <dt className="text-xs text-foreground-muted">{stat.label}</dt>
                    <dd className="mt-1 font-display text-lg text-foreground">
                      {formatCount(stat.value)}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  Contribution style
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {githubProfile.contributionSummary}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  Technology badges
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {githubProfile.languages.map((language) => (
                    <Badge key={language} tone="accent">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                href={githubProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full sm:w-auto"
              >
                View GitHub Profile
                <ExternalLink className="h-4 w-4" />
              </Button>
            </aside>
          </FadeIn>

          <div className="grid gap-4">
            <FadeIn delay={0.05}>
              <h3 className="font-display text-xl text-foreground">Latest Projects</h3>
              <p className="mt-1 text-sm text-foreground-muted">
                รีโปล่าสุดจาก github.com/{githubProfile.username}
              </p>
            </FadeIn>

            {githubProfile.repos.length > 0 ? (
              githubProfile.repos.map((repo, index) => (
                <FadeIn key={repo.id} delay={0.06 + index * 0.04}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-border bg-surface/90 p-5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-elevated"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{repo.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                          {repo.description}
                        </p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-foreground-muted" />
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {formatCount(repo.stars)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {formatCount(repo.forks)}
                      </span>
                    </div>

                    {repo.topics.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {repo.topics.map((topic) => (
                          <Badge key={topic}>{topic}</Badge>
                        ))}
                      </div>
                    ) : null}
                  </a>
                </FadeIn>
              ))
            ) : (
              <FadeIn>
                <div className="rounded-2xl border border-border bg-background p-6 text-sm text-foreground-muted">
                  ยังดึงรีโปจาก GitHub ไม่ได้ในขณะนี้ ลองรีเฟรชอีกครั้ง หรือเปิดโปรไฟล์โดยตรง
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
