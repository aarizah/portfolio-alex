import { BrandHome } from "@/components/brand/BrandHome";
import { personalBrand } from "@/content/personal-brand";
import { SITE_URL, SOCIAL_LINKS } from '@/lib/site';

const approvedOffers = personalBrand.services.filter((service) => service.offerApproved);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalBrand.name,
  jobTitle: personalBrand.role,
  url: SITE_URL,
  email: `mailto:${personalBrand.email}`,
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  knowsAbout: ["AI product engineering", "Retrieval-augmented generation", "Full-stack product development", "AI evaluation"],
  ...(approvedOffers.length > 0
    ? {
        makesOffer: approvedOffers.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.outcome,
          },
        })),
      }
    : {}),
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
