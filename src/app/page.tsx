import { Navigation } from "../components/Navigation";
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { AISolutions } from '../components/AISolutions';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { SITE_URL, SOCIAL_LINKS } from '@/lib/site';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Ariza",
  jobTitle: "Full-Stack Developer — AI Product Engineering",
  url: SITE_URL,
  email: "mailto:arizah2020@gmail.com",
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  knowsAbout: ["LLM", "RAG", "Next.js", "Node.js", "FastAPI", "AWS"],
};

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


        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
