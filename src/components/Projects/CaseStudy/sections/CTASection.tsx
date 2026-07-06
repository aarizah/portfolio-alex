"use client";

import Link from "next/link";
import { ExternalLink, Github, Mail } from "lucide-react";
import type { CTAData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";

interface CTASectionProps {
  data: CTAData;
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <ProductSection
      id="explore"
      variant="fullscreen"
      align="center"
      className="bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.22),transparent_34%),#000]"
    >
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.045] p-7 shadow-[0_28px_100px_rgba(37,99,235,0.10)] backdrop-blur md:p-10">
        <p className="cs-eyebrow mb-6">{data.eyebrow}</p>
        <h2 className="cs-headline-large text-balance text-white">{data.headline}</h2>
        <p className="cs-subheadline mx-auto mt-5 max-w-2xl">{data.subheadline}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Github className="size-4" />
              {data.githubLabel}
            </a>
          )}
          {data.demo && (
            <a
              href={data.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <ExternalLink className="size-4" />
              {data.demoLabel}
            </a>
          )}
          <Link
            href={data.contactHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.09]"
          >
            <Mail className="size-4" />
            {data.contactLabel}
          </Link>
        </div>
      </div>
    </ProductSection>
  );
}
