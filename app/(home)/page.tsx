import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}
