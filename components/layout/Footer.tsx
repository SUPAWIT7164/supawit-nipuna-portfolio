import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/80 backdrop-blur-sm">
      <Container className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-tight text-foreground">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            {profile.thaiName} ({profile.nickname}) · {profile.title}
          </p>
        </div>
        <p className="text-sm text-foreground-muted">
          © {year} {profile.name}. Crafted with Next.js.
        </p>
      </Container>
    </footer>
  );
}
