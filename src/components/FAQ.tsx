"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'How do we start?',
    a: 'Start by telling me what you need to solve: the problem, what you have today, and any target date. If it looks like a good fit, we align on a scope and deliverables before any kickoff. No commitment until the scope is clear for both sides.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Every project is scoped individually — pricing depends on scope and complexity. Once the scope is defined, you get a clear proposal: what is included, what is not, and what the delivery looks like. No surprises mid-project.',
  },
  {
    q: 'Do you build regular websites, or only AI products?',
    a: 'Both. AI integration is my specialty, but I build full-stack applications end-to-end: websites and web apps, backend systems and APIs, and database work. The right answer for your problem might not involve AI at all — and I will tell you when that is the case.',
  },
  {
    q: 'Who handles hosting, domains, and maintenance?',
    a: 'I deploy on managed platforms (Vercel, AWS, similar) with CI/CD. You own everything: domain, repositories, and cloud accounts stay in your name. Ongoing support and optimization are available after the initial delivery.',
  },
  {
    q: 'How do we know it is working?',
    a: 'The same way I build everything: with measurable targets. Depending on the project, that means latency, cost, accuracy, conversion, or uptime — defined during scoping so both sides can check progress against the agreed numbers.',
  },
  {
    q: 'What about communication and time zones?',
    a: 'I am based in Colombia, remote-first, with working hours aligned to the US and Europe. You talk directly with me — the person who builds it — through the channel your team already uses.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="max-w-3xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The questions most people ask before starting — answered straight.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-blue-300 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-7">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
