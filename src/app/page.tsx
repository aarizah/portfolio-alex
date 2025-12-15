import { Navigation } from "../components/Navigation";
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { AISolutions } from '../components/AISolutions';
import { Process } from '../components/Process';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Projects />
        
        <section id="skills">
          <Skills />
        </section>
        
        <About />
        
        <AISolutions />
        
        <Process />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
