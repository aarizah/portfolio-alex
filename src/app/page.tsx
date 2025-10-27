import Hero from "@/sections/hero";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Togle from "@/components/ui/togle";
import Prueba from "@/sections/prueba";

//NOTAS:
//1. Hay que agregar más interactividad al bajar por la página, como animaciones o efectos.
//2. Revisar el tema de la navegación, que no se vea el scroll horizontal al hacer scroll vertical.
//3 Misma fuente para todo el sitio. Incluyendo tamaño de títulos y subtítulos.

export default function Home() {
  return (
    <>
      <Hero />
      <Prueba/>
      <About />
      <Contact />
      <Togle />
    </>
  );
}
