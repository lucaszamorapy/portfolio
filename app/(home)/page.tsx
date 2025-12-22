import About from "../components/about";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Technologies />
    </div>
  );
}
