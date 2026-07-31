import {
  About,
  Contact,
  Experience,
  GitHub,
  Hero,
  Projects,
  Resume,
  Skills,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHub />
      <Resume />
      <Contact />
    </>
  );
}
