import { BrandHome } from "@/components/BrandHome";
import { SITE_URL, SOCIAL_LINKS } from '@/lib/site';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Alex Ariza",
      jobTitle: "Independent AI Product Partner",
      url: SITE_URL,
      email: "mailto:arizah2020@gmail.com",
      sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
      knowsAbout: ["LLM", "RAG", "Next.js", "Node.js", "FastAPI", "AWS", "PostgreSQL"],
    },
    {
      "@type": "ProfessionalService",
      name: "Alex Ariza — AI Product Partner",
      url: SITE_URL,
      email: "arizah2020@gmail.com",
      founder: { "@type": "Person", name: "Alex Ariza" },
      areaServed: ["United States", "European Union", "Colombia"],
      serviceType: [
        "AI product sprints",
        "End-to-end product development",
        "AI systems advisory",
      ],
    },
  ],
};

export default function App() {
  return (
    <>
      <BrandHome />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
