import { projectOrganizations, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

const themeDot: Record<(typeof projectOrganizations)[number]["theme"], string> = {
  orange: "bg-orange-500",
  blue: "bg-sky-500",
  green: "bg-emerald-500",
};

export function Projects() {
  return (
    <section id="projects" className="section-padding section-muted border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="ผลงานตามมหาวิทยาลัย"
            description="Digital Twin / Smart Building ที่นครราชสีมา, ระบบจองห้องและ Digital Twin ที่สุรินทร์, และชุดจอ Smart Campus Kiosk ที่ PSRU"
          />
        </FadeIn>

        <div className="mt-12 space-y-14">
          {projectOrganizations.map((organization, orgIndex) => {
            const orgProjects = projects.filter(
              (project) => project.organizationId === organization.id,
            );

            return (
              <div key={organization.id}>
                <FadeIn delay={orgIndex * 0.05}>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn("h-2.5 w-2.5 rounded-full", themeDot[organization.theme])}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                        {organization.shortName}
                      </p>
                      <h3 className="mt-1 font-display text-xl tracking-tight text-foreground sm:text-2xl">
                        {organization.name}
                      </h3>
                    </div>
                  </div>
                </FadeIn>

                <div className="grid gap-6 lg:grid-cols-2">
                  {orgProjects.map((project, index) => (
                    <FadeIn
                      key={project.id}
                      delay={orgIndex * 0.05 + index * 0.04}
                      className={project.featured ? "lg:col-span-2" : undefined}
                    >
                      <ProjectCard project={project} organization={organization} />
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
