import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="section-padding border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="ประสบการณ์การทำงาน"
            description="รายละเอียดจากเรซูเม่ — บริษัท เอลซี คอร์ปอเรชัน จำกัด"
          />
        </FadeIn>

        <ol className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-accent before:via-border before:to-transparent sm:before:left-[15px]">
          {experiences.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <li className="relative grid gap-4 pl-10 sm:pl-12 lg:grid-cols-[240px_1fr]">
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-soft sm:h-8 sm:w-8">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>

                <div className="lg:pt-1">
                  <p className="inline-flex rounded-lg bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                    {item.startDate} — {item.endDate}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {item.company} · {item.location}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface/90 p-5 shadow-soft backdrop-blur-sm sm:p-7">
                  <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {item.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
