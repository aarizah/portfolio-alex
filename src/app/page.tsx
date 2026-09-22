import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { LogoCloud } from "../components/brand/LogoCloud";
import { WhatIBuild } from "../components/brand/WhatIBuild";
import { HowWeWork } from "../components/brand/HowWeWork";
import { About } from "../components/About";
import { FAQ } from "../components/brand/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";
import { brand, offers, seo } from "@/content/brand";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: brand.name,
      jobTitle: brand.role,
      url: SITE_URL,
      email: `mailto:${brand.email}`,
      sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
      knowsLanguage: brand.languages,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#studio`,
      name: `${brand.name} — ${brand.role}`,
      url: SITE_URL,
      description: seo.description,
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: ["United States", "European Union", "Colombia"],
      email: brand.email,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engagements",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          description: offer.outcome,
        })),
      },
    },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Navigation />

      <main id="content">
        <section id="home">
          <Hero />
        </section>
        <LogoCloud />
        <WhatIBuild />
        <About />
        <HowWeWork />
        <Contact />
        <FAQ />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
