import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function Skills() {
  return (
    <section id="skills" className="section-padding section-muted border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Technical Skills"
            title="ทักษะทางเทคนิค"
            description="เครื่องมือและเทคโนโลยีที่ใช้พัฒนาระบบจริง ทั้ง Frontend, Backend และ IoT"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/90 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-elevated">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-sky-400 to-transparent opacity-80"
                />
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
