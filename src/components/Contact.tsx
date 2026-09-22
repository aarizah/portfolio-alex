"use client";

import { brand, contactCopy } from "@/content/brand";
import { Card } from "./ui/card";
import { Mail, MapPin } from "lucide-react";
import { StartProjectButton } from "@/components/StartProjectModal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-16 md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            Contact
          </p>
          <h2 className="text-3xl text-white md:text-4xl">{contactCopy.heading}</h2>
          <p className="mt-4 text-lg leading-8 text-[#9a9a9a]">{contactCopy.subhead}</p>
          <StartProjectButton className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-6 text-[13px] font-medium text-black transition-transform hover:scale-[1.03]">
            {contactCopy.ctaLabel}
          </StartProjectButton>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Card className="border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/10 p-3">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-white">Email</h3>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-gray-300 underline-offset-4 hover:underline"
                >
                  {brand.email}
                </a>
                <p className="mt-1 text-xs text-gray-500">{brand.replySla}</p>
              </div>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/10 p-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-white">Location</h3>
                <p className="text-gray-300">{brand.location}</p>
                <p className="mt-1 text-xs text-gray-500">
                  Languages: {brand.languages.join(" · ")}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
