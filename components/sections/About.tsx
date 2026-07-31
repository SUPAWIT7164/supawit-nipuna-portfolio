import { aboutSummary, education, profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="about" className="section-padding border-b border-border/70">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="เกี่ยวกับผม"
            description={`${profile.thaiName} (${profile.nickname}) — Developer ที่มุ่งสร้างระบบคุณภาพพร้อมใช้งานจริง`}
          />
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn delay={0.05}>
            <div className="space-y-5 rounded-2xl border border-border bg-surface/80 p-6 text-base leading-relaxed text-foreground-muted shadow-soft backdrop-blur-sm sm:p-8 sm:text-lg">
              {aboutSummary.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <aside className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-6 shadow-soft backdrop-blur-sm sm:p-8">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-sky-400"
                />
                <h3 className="font-display text-xl text-foreground">จุดโฟกัส</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    "พัฒนา Frontend / Backend ด้วย Vue.js, Node.js, PHP, Laravel",
                    "ระบบจองห้องประชุมและบริหารอาคารอัจฉริยะ",
                    "IoT, Face Recognition, Hikvision และ Home Assistant",
                    "SSO, Deploy Production บน Windows Server / IIS",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-accent-soft/40 p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-xl text-foreground">การศึกษา</h3>
                <div className="mt-4 space-y-4">
                  {education.map((item) => (
                    <div key={item.id}>
                      <p className="font-medium text-foreground">{item.school}</p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {item.degree} สาขา{item.field}
                      </p>
                      <p className="mt-1 text-sm text-accent">
                        {item.startDate} — {item.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
