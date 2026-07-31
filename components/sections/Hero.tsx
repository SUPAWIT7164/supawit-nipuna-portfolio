"use client";

import Image from "next/image";
import { ArrowDownRight, Download, FolderKanban, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/icons/BrandIcons";

const highlightSkills = ["Vue.js", "Node.js", "Laravel", "IoT", "SQL Server"];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/70 pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-grid opacity-60 dark:opacity-25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 right-[-12%] h-[460px] w-[460px] rounded-full bg-accent/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-24%] left-[-10%] h-[380px] w-[380px] rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-900/25"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge tone="accent">{profile.availability}</Badge>

            <p className="mt-6 text-sm font-medium tracking-[0.16em] uppercase text-foreground-muted">
              {profile.thaiName} · {profile.nickname}
            </p>

            <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              {profile.name}
            </h1>

            <p className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-accent sm:text-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {profile.title}
            </p>

            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
              {profile.headline}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-[1.05rem]">
              {profile.introduction}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlightSkills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={profile.resumeUrl} download aria-label="Download resume">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button href="#projects" variant="secondary">
                <FolderKanban className="h-4 w-4" />
                View Projects
              </Button>
              <Button
                href={profile.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
              <Button href="#contact" variant="ghost">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </div>

            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              ดูผลงานของผม
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[1.75rem] bg-accent/10 blur-xl"
          />
          <div className="photo-ring relative rounded-[1.5rem] p-[1px] shadow-elevated">
            <div className="overflow-hidden rounded-[1.45rem] border border-white/40 bg-surface dark:border-white/5">
              <div className="relative aspect-[4/5] bg-surface-muted">
                <Image
                  src={profile.photoUrl}
                  alt={`${profile.name} professional portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
