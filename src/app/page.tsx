import Hero from "@/sections/hero";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Togle from "@/components/ui/togle";
import Projects from "@/sections/projects";
import Prueba from "@/sections/prueba";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Prueba/>
      <Contact />
      <Togle />
    </>
  );
}
