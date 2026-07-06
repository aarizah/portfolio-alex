"use client";

import Image from "next/image";
import type { ScreenshotsData } from "@/content/projects/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSection } from "../primitives/ProductSection";
import { ScaleReveal } from "../primitives/Reveal";

interface ScreenshotsSectionProps {
  data: ScreenshotsData;
}

export function ScreenshotsSection({ data }: ScreenshotsSectionProps) {
  const tabs = [
    { id: "desktop", label: "Desktop", images: data.desktop },
    { id: "tablet", label: "Tablet", images: data.tablet },
    { id: "mobile", label: "Mobile", images: data.mobile },
  ].filter((tab) => tab.images.length > 0);

  if (tabs.length === 0) return null;

  return (
    <ProductSection
      id="screenshots"
      variant="dark"
      eyebrow="Screens"
      headline="Responsive details, not resized screenshots."
      subheadline="Good product work survives different devices. This section checks that the interface still communicates clearly."
      align="center"
    >
      <Tabs defaultValue={tabs[0].id} className="w-full">
        <TabsList className="mx-auto mb-8 rounded-full border border-white/10 bg-white/[0.06] p-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-full px-5 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <div className="grid gap-6">
              {tab.images.map((src, i) => (
                <ScaleReveal key={`${tab.id}-${src}-${i}`}>
                  <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                    <Image
                      src={src}
                      alt={`${tab.label} screenshot ${i + 1}`}
                      width={1800}
                      height={1100}
                      sizes="(min-width: 1024px) 1100px, 100vw"
                      className="w-full rounded-[1.5rem] object-cover"
                    />
                  </div>
                </ScaleReveal>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </ProductSection>
  );
}

