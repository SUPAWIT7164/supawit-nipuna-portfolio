"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navigation, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(
    () => ["hero", ...navigation.map((item) => item.href.replace("#", ""))],
    [],
  );
  const [activeId, setActiveId] = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-border/70 bg-background/75 shadow-soft backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href="#hero"
          className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent"
          onClick={() => handleNavClick("hero")}
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-xl border border-border/70 bg-surface/70 p-1 shadow-soft backdrop-blur-md lg:flex"
          aria-label="Primary"
        >
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(id)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm transition-all duration-200",
                  active
                    ? "bg-accent text-white shadow-soft"
                    : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(id)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base transition-colors",
                    active
                      ? "bg-accent-soft font-medium text-accent"
                      : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Button
              href="#contact"
              className="mt-2"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
