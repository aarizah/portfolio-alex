import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/Projects/CaseStudy/CaseStudyPage";
import { getCaseStudy, getAllSlugs } from "@/lib/case-studies";

const SITE_URL = "https://alexariza.dev";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Not Found | Alex Ariza" };
  }

  const { meta } = caseStudy;
  const title = `${meta.title} | Alex Ariza`;
  const url = `${SITE_URL}/projects/${meta.slug}`;

  return {
    title,
    description: meta.tagline,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: meta.tagline,
      url,
      type: "article",
      images: [{ url: meta.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.tagline,
      images: [meta.ogImage],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}
