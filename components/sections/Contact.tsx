import { Mail, MapPin, Phone } from "lucide-react";
import { contactLinks } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

const icons = {
  mail: Mail,
  phone: Phone,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  "map-pin": MapPin,
} as const;

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="ติดต่อผม"
            description="เปิดรับโอกาสด้าน Developer / Full-Stack ในทีมที่สร้างระบบจริง"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = icons[link.icon];
            const external = link.href.startsWith("http");

            return (
              <FadeIn key={link.id} delay={0.04 + index * 0.03}>
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface/90 p-5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-elevated"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground-muted">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-medium text-foreground">
                      {link.value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
