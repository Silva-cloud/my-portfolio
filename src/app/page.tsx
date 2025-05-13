import AboutMe from "./shared/components/aboutme/AboutMe";
import Footer from "./shared/components/footer/Footer";
import Hero from "./shared/components/hero/hero";
import Projects from "./shared/components/projects/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
      <div className="py-4 text-center  text-white ">
        © 2025 codez all right reserved
      </div>
    </div>
  );
}
