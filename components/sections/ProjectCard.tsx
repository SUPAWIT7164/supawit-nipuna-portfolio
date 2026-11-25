"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project, ProjectOrganization, ProjectScreen } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  organization?: ProjectOrganization;
}

const themeStyles: Record<
  ProjectOrganization["theme"],
  { ring: string; label: string }
> = {
  orange: {
    ring: "border-orange-400/40 ring-1 ring-orange-400/15",
    label: "text-orange-600 dark:text-orange-300",
  },
  blue: {
    ring: "border-sky-400/40 ring-1 ring-sky-400/15",
    label: "text-sky-600 dark:text-sky-300",
  },
  green: {
    ring: "border-emerald-400/40 ring-1 ring-emerald-400/15",
    label: "text-emerald-600 dark:text-emerald-300",
  },
};

export function ProjectCard({ project, organization }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(Boolean(project.featured));
  const screens = project.screens?.length
    ? project.screens
    : [{ label: project.title, image: project.image } satisfies ProjectScreen];
  const [activeScreen, setActiveScreen] = useState(0);
  const current = screens[activeScreen] ?? screens[0];
  const theme = organization ? themeStyles[organization.theme] : null;
  const hasGallery = screens.length > 1;

  function showPrevious() {
    setActiveScreen((index) => (index - 1 + screens.length) % screens.length);
  }

  function showNext() {
    setActiveScreen((index) => (index + 1) % screens.length);
  }

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border bg-surface/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        project.featured
          ? cn("lg:col-span-2", theme?.ring ?? "border-accent/30 ring-1 ring-accent/10")
          : "border-border hover:border-accent/25",
      )}
    >
      <div
        className={cn(
          "grid",
          project.featured ? "lg:grid-cols-[1.05fr_0.95fr]" : "grid-cols-1",
        )}
      >
        <div className="relative aspect-video overflow-hidden bg-[#0b1220]">
          <Image
            key={current.image}
            src={current.image}
            alt={`${project.title} — ${current.label}`}
            fill
            loading={project.featured ? "eager" : "lazy"}
            sizes={
              project.featured
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-contain object-center"
          />

          {project.featured ? (
            <div className="absolute left-4 top-4">
              <Badge tone="accent">Featured</Badge>
            </div>
          ) : null}

          {hasGallery ? (
            <>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="min-w-0 rounded-lg bg-foreground/70 px-3 py-2 text-white backdrop-blur-sm">
                  <p className="truncate text-sm font-semibold">{current.label}</p>
                  {current.route ? (
                    <p className="truncate font-mono text-xs text-white/80">{current.route}</p>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft transition hover:bg-white"
                    aria-label="Previous screen"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft transition hover:bg-white"
                    aria-label="Next screen"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          {organization ? (
            <p className={cn("text-xs font-semibold tracking-wide", theme?.label)}>
              {organization.name}
            </p>
          ) : null}
          <p
            className={cn(
              "text-sm font-semibold tracking-wide",
              organization ? "mt-1 text-foreground-muted" : "text-accent",
            )}
          >
            {project.tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {project.description}
          </p>

          {hasGallery ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {screens.map((screen, index) => (
                <button
                  key={screen.image}
                  type="button"
                  onClick={() => setActiveScreen(index)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition",
                    index === activeScreen
                      ? "bg-accent text-white ring-accent"
                      : "bg-surface-muted/90 text-foreground-muted ring-border/80 hover:text-foreground",
                  )}
                >
                  {screen.label}
                </button>
              ))}
            </div>
          ) : null}

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
