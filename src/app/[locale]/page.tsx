import AboutMe from "@/components/shared/aboutme/AboutMe";
import Hero from "@/components/shared/hero/hero";
import Projects from "@/components/shared/projects/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
