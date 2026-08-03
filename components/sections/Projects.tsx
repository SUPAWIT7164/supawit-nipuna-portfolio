import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-padding section-muted border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="โปรเจกต์เด่น"
            description="งานที่เกี่ยวข้องกับ Smart Room, ระบบจองห้อง, Patient Portal, อาคารอัจฉริยะ และ Access Control"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.04}
              className={project.featured ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
