"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(Boolean(project.featured));

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border bg-surface/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        project.featured
          ? "border-accent/30 ring-1 ring-accent/10 lg:col-span-2"
          : "border-border hover:border-accent/25",
      )}
    >
      <div
        className={cn(
          "grid",
          project.featured ? "lg:grid-cols-[1.05fr_0.95fr]" : "grid-cols-1",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            loading={project.featured ? "eager" : "lazy"}
            sizes={
              project.featured
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-60"
          />
          {project.featured ? (
            <div className="absolute left-4 top-4">
              <Badge tone="accent">Featured</Badge>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-wide text-accent">
            {project.tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-lg px-2 py-1 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent"
            aria-expanded={expanded}
          >
            {expanded ? "ซ่อนรายละเอียด" : "ดูรายละเอียด"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                expanded && "rotate-180",
              )}
            />
          </button>

          {expanded ? (
            <div className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-3">
              <DetailBlock title="Responsibilities" items={project.responsibilities} />
              <DetailBlock title="Challenges" items={project.challenges} />
              <DetailBlock title="Results" items={project.results} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-surface-muted/50 p-3">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-foreground-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
