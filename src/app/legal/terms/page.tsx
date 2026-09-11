import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_TITLE}`,
  description: "Terms for using alexariza.dev.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-gray-400 text-sm">Last updated: September 2026</p>
        <div className="space-y-4 text-gray-300 leading-7 [&_h2]:text-lg [&_h2]:text-white [&_h2]:pt-4">
          <p>
            These terms govern the use of this website. Work delivered through client engagements is
            governed by individual written agreements, which take precedence over these terms.
          </p>
          <h2>Use of this site</h2>
          <p>
            The content on this site describes past and personal projects. Case studies and metrics are
            described honestly; where a figure is illustrative or a target, it is labeled as such.
          </p>
          <h2>Project engagements</h2>
          <p>
            Every engagement starts with a defined scope and written deliverables. Payment terms and
            schedule are documented in the individual proposal. Support and changes after delivery are
            handled per the agreement for each project.
          </p>
          <h2>Liability</h2>
          <p>
            This website is provided as-is. Nothing here constitutes professional or legal advice.
          </p>
          <h2>Contact</h2>
          <p>
            Questions: <a className="text-blue-400 hover:underline" href="mailto:arizah2020@gmail.com">arizah2020@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
