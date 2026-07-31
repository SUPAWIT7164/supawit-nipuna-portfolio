import { Download, FileText } from "lucide-react";
import { education, profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Resume() {
  const highlightSkills = skillCategories
    .flatMap((category) => category.skills)
    .slice(0, 14);

  return (
    <section id="resume" className="section-padding section-muted border-b border-border/70">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Resume"
              title="เรซูเม่"
              description="พรีวิวข้อมูลจาก Resume2026 — กดดาวน์โหลดไฟล์ PDF ฉบับเต็มได้เลย"
            />
            <Button href={profile.resumeUrl} download aria-label="Download resume PDF">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{profile.name}</p>
                <p className="text-sm text-foreground-muted">
                  {profile.title} · {profile.thaiName} ({profile.nickname})
                </p>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                  เกี่ยวกับฉัน
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {profile.introduction}
                </p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                  ประสบการณ์การทำงาน
                </h3>
                <div className="mt-4 space-y-5">
                  {experiences.map((item) => (
                    <div key={item.id}>
                      <p className="font-medium text-foreground">
                        {item.role} · {item.company}
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {item.startDate} — {item.endDate}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                        {item.summary}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.achievements.slice(0, 5).map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                  การศึกษา
                </h3>
                <div className="mt-4 space-y-3">
                  {education.map((item) => (
                    <div key={item.id}>
                      <p className="font-medium text-foreground">{item.school}</p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {item.degree} สาขา{item.field}
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {item.startDate} — {item.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                  ทักษะ
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {highlightSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                  ติดต่อ
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
                  <li>{profile.email}</li>
                  <li>{profile.phone}</li>
                  <li>{profile.location}</li>
                  <li>{profile.githubUrl}</li>
                  <li className="break-all">{profile.linkedinUrl}</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
