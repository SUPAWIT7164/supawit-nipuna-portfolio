import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium tracking-wide",
        tone === "neutral" &&
          "bg-surface-muted/90 text-foreground-muted ring-1 ring-inset ring-border/80",
        tone === "accent" &&
          "bg-accent-soft text-accent ring-1 ring-inset ring-accent/20",
        className,
      )}
    >
      {children}
    </span>
  );
}
