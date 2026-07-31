import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-accent" aria-hidden />
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-accent">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
