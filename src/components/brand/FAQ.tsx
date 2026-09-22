"use client";

import { faqs } from "@/content/brand";
import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="relative w-full scroll-mt-24 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Objections"
          title="The questions a serious buyer asks before they transfer money."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-gray-400">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
