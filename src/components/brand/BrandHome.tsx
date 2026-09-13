import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Check, Github, Linkedin, Mail, MoveRight } from "lucide-react";
import { getCaseStudyPreviews } from "@/lib/case-studies";
import { getPrimaryContactHref, getPrimaryContactLabel, personalBrand } from "@/content/personal-brand";
import { BrandNavigation } from "./BrandNavigation";

function SectionIntro({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="brand-eyebrow">{eyebrow}</p>
      <h2 id={id} className="brand-section-title mt-5">{title}</h2>
      {description ? <p className="brand-lead mt-6">{description}</p> : null}
    </div>
  );
}

function OptionalProof() {
  const publishableLogos = personalBrand.brandLogos.filter(
    (logo) =>
      logo.permissionConfirmed &&
      logo.source.label.trim() &&
      logo.source.href.trim() &&
      logo.context.trim(),
  );
  const publishableTestimonials = personalBrand.testimonials.filter(
    (testimonial) =>
      testimonial.permissionConfirmed &&
      testimonial.source.label.trim() &&
      testimonial.source.href.trim() &&
      testimonial.context.trim(),
  );

  if (publishableLogos.length === 0 && publishableTestimonials.length === 0) return null;

  return (
    <section aria-labelledby="proof-heading" className="brand-section border-y border-white/10 bg-white/[0.025]">
      <div className="brand-container">
        <h2 id="proof-heading" className="brand-eyebrow">Trusted by teams doing consequential work</h2>
        {publishableLogos.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {publishableLogos.map((logo) => (
              <li key={logo.name} className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${logo.name}`} className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
                    <Image src={logo.image} alt={logo.name} width={160} height={64} className="max-h-12 w-auto object-contain opacity-80 grayscale" />
                  </a>
                ) : (
                  <Image src={logo.image} alt={logo.name} width={160} height={64} className="max-h-12 w-auto object-contain opacity-80 grayscale" />
                )}
                <p className="mt-3 text-xs leading-5 text-[#8f929b]">{logo.context}</p>
                <a href={logo.source.href} target="_blank" rel="noopener noreferrer" className="mt-2 text-xs text-[#b9d2ff] underline underline-offset-4">Source: {logo.source.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
        {publishableTestimonials.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {publishableTestimonials.map((testimonial) => (
              <figure key={`${testimonial.name}-${testimonial.quote}`} className="brand-panel p-7">
                <blockquote className="text-lg leading-8 text-white">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-[#a8aab2]">{testimonial.name} · {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ""}</figcaption>
                <p className="mt-2 text-xs leading-5 text-[#7f828b]">{testimonial.context}</p>
                <a href={testimonial.source.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs text-[#b9d2ff] underline underline-offset-4">Source: {testimonial.source.label}</a>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

type Service = (typeof personalBrand.services)[number];
type Evidence = (typeof personalBrand.homeEvidence)[number];

function ServiceScope({ service }: { service: Service }) {
  return (
    <div>
      <p className="leading-7 text-[#d7d8dc]">{service.outcome}</p>
      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="brand-label">Included</p>
          <ul className="mt-3 space-y-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-[#aeb0b7]">
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#8fb8ff]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="brand-label">Client inputs</p>
          <ul className="mt-3 space-y-2">
            {service.clientInputs.map((item) => <li key={item} className="text-sm leading-6 text-[#aeb0b7]">{item}</li>)}
          </ul>
        </div>
        <div>
          <p className="brand-label">Boundary</p>
          <p className="mt-3 text-sm leading-6 text-[#aeb0b7]">{service.boundaries}</p>
        </div>
        <div>
          <p className="brand-label">Not included</p>
          <ul className="mt-3 space-y-2">
            {service.notIncluded.map((item) => <li key={item} className="text-sm leading-6 text-[#888b94]">{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function EvidenceDetails({ evidence }: { evidence: Evidence }) {
  return (
    <div>
      <p className="brand-label text-[#8fb8ff]">Context</p>
      <p className="mt-2 text-sm leading-6 text-[#c3c5ca]">{evidence.context}</p>
      <p className="brand-label mt-6">My role</p>
      <p className="mt-2 text-sm leading-6 text-[#aeb0b7]">{evidence.role}</p>
      <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
        {evidence.proofPoints.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-6 text-[#b7b9c0]">
            <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#8fb8ff]" />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="brand-label">Source and artifacts</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href={evidence.source.href} className="inline-flex items-center gap-1.5 text-[#b9d2ff] underline underline-offset-4">
            {evidence.source.label}<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
          {evidence.artifacts.map((artifact) => (
            <a key={artifact.href} href={artifact.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#aeb0b7] underline underline-offset-4">
              {artifact.label}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BrandHome() {
  const caseStudies = getCaseStudyPreviews();
  const selectedResults = personalBrand.homeEvidence
    .map((evidence) => ({ evidence, project: caseStudies.find((project) => project.slug === evidence.slug) }))
    .filter(
      (result): result is typeof result & { project: NonNullable<typeof result.project> } =>
        Boolean(result.project),
    );
  const contactHref = getPrimaryContactHref();
  const contactIsCalendar = Boolean(personalBrand.calendarUrl);
  const contactLabel = getPrimaryContactLabel();

  return (
    <div id="top" className="brand-home min-h-screen bg-[#0a0b0d] text-[#f4f2ec]">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <BrandNavigation />

      <main id="main-content">
        <section className="brand-hero relative overflow-hidden border-b border-white/10 pt-24 sm:pt-28">
          <div aria-hidden="true" className="brand-orbit brand-orbit-one" />
          <div aria-hidden="true" className="brand-orbit brand-orbit-two" />
          <div className="brand-container relative z-10 grid items-center gap-10 pb-12 sm:gap-14 sm:pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.38fr)]">
            <div className="max-w-4xl">
              <p className="brand-eyebrow">{personalBrand.hero.eyebrow}</p>
              <h1 className="brand-hero-title mt-7">{personalBrand.hero.title}</h1>
              <p className="brand-hero-copy mt-8">{personalBrand.hero.description}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={contactHref} className="brand-button">
                  {contactLabel}<ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a href="#results" className="brand-button brand-button-secondary">
                  {personalBrand.hero.secondaryCta}<MoveRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside aria-label="Capabilities" className="brand-note self-end lg:mb-8">
              <p className="brand-label text-[#8fb8ff]">Capabilities</p>
              <ul className="mt-5 space-y-4">
                {personalBrand.hero.capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#d0d1d6]"><span aria-hidden="true" className="h-px w-6 bg-[#8fb8ff]" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <OptionalProof />

        <section id="fit" aria-labelledby="fit-heading" className="brand-section scroll-mt-24">
          <div className="brand-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="brand-eyebrow">{personalBrand.idealClient.eyebrow}</p>
              <h2 id="fit-heading" className="brand-section-title mt-5">{personalBrand.idealClient.title}</h2>
              <p className="brand-lead mt-6">{personalBrand.idealClient.description}</p>
            </div>
            <div className="grid gap-5">
              <div className="brand-panel p-6 sm:p-8">
                <p className="brand-kicker">You may recognize</p>
                <ul className="mt-6 space-y-5">
                  {personalBrand.idealClient.problems.map((problem) => (
                    <li key={problem} className="flex gap-4 text-base leading-7 text-[#d3d4d8]"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb35c]" />{problem}</li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {personalBrand.idealClient.outcomes.map((outcome) => <p key={outcome} className="bg-[#101216] p-5 text-sm leading-6 text-[#b9bbc2]">{outcome}</p>)}
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="brand-label text-[#ffb35c]">Probably not a fit when</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {personalBrand.idealClient.notAFit.map((item) => (
                    <li key={item} className="text-sm leading-6 text-[#989aa3]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading" className="brand-section scroll-mt-24 border-y border-white/10 bg-[#0d0f13]">
          <div className="brand-container">
            <SectionIntro id="services-heading" eyebrow="Three ways to work together" title="Choose the next decision—not a vague transformation program." description="Each engagement is scoped around the evidence your team needs next. Price and timing are proposed only after the workflow, integrations, data condition, and operational risk are understood." />
            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {personalBrand.services.map((service) => (
                <article key={service.name} className="grid gap-8 py-10 lg:grid-cols-[0.11fr_0.42fr_0.8fr] lg:gap-12 lg:py-14">
                  <p className="font-mono text-sm text-[#8fb8ff]">{service.number}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">{service.name}</h3>
                    <p className="mt-4 leading-7 text-[#aeb0b7]">{service.fit}</p>
                    <p className="brand-label mt-7 text-[#ffb35c]">Completion signal</p>
                    <p className="mt-2 text-sm leading-6 text-[#c3c5ca]">{service.completionSignal}</p>
                    {service.commercials.confirmed && (service.commercials.duration || service.commercials.price) ? (
                      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                        {service.commercials.duration ? <div><dt className="brand-label">Duration</dt><dd className="mt-2 text-sm text-white">{service.commercials.duration}</dd></div> : null}
                        {service.commercials.price ? <div><dt className="brand-label">Price</dt><dd className="mt-2 text-sm text-white">{service.commercials.price}</dd></div> : null}
                      </dl>
                    ) : null}
                  </div>
                  <div className="hidden lg:block"><ServiceScope service={service} /></div>
                  <details className="brand-faq group border-t border-white/10 pt-4 lg:hidden">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#d7e5ff] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
                      Scope and requirements<span aria-hidden="true" className="text-xl font-light transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                    </summary>
                    <div className="pb-2 pt-5"><ServiceScope service={service} /></div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" aria-labelledby="results-heading" className="brand-section scroll-mt-24">
          <div className="brand-container">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionIntro id="results-heading" eyebrow="Selected work" title="Technical proof of work, with context and inspectable artifacts." description="These are documented implementations—not client endorsements. Each example links to its case study and available project artifacts so you can inspect the reasoning in context." />
              <p className="max-w-sm text-sm leading-6 text-[#888b94]">Commercial proof still requires approved client references, testimonials, or independently verifiable outcomes. Those are intentionally not implied here.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {selectedResults.map(({ project, evidence }) => (
                <article key={project.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101216]">
                  <Link href={evidence.source.href} aria-label={`${project.title}: read the case study`} className="relative block aspect-[16/10] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8fb8ff] lg:aspect-[4/3]">
                    <Image src={evidence.image} alt="" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover opacity-80 grayscale-[0.15] transition duration-500 group-hover:scale-[1.02] group-hover:opacity-95 motion-reduce:transition-none" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">{evidence.evidenceStatus}</span>
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-7 tracking-[-0.02em] text-white">{project.title}</h3>
                    <p className="brand-label mt-3 text-[#8fb8ff]">{evidence.evidenceType}</p>
                    <div className="mt-5 hidden lg:block"><EvidenceDetails evidence={evidence} /></div>
                    <details className="brand-faq group mt-5 border-t border-white/10 pt-3 lg:hidden">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#d7e5ff] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">
                        Context, role and artifacts<span aria-hidden="true" className="text-xl font-light transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                      </summary>
                      <div className="pb-2 pt-4"><EvidenceDetails evidence={evidence} /></div>
                    </details>
                    <Link href={evidence.source.href} aria-label={`${project.title}: read the full case study`} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#b9d2ff] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">Read the case study<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" aria-labelledby="process-heading" className="brand-section scroll-mt-24 border-y border-white/10 bg-[#0d0f13]">
          <div className="brand-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <SectionIntro id="process-heading" eyebrow="A legible process" title="Reduce uncertainty before increasing investment." description="The work moves from decision framing to evidence, then to production discipline. The point is not to force every engagement through the same ceremony." />
            <ol className="divide-y divide-white/10 border-t border-white/10">
              {personalBrand.process.map((phase) => (
                <li key={phase.step} className="grid grid-cols-[2.5rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_0.55fr_1fr] sm:gap-6"><span className="font-mono text-xs text-[#8fb8ff]">{phase.step}</span><h3 className="text-lg font-semibold text-white">{phase.title}</h3><p className="col-start-2 text-sm leading-6 text-[#aeb0b7] sm:col-start-auto">{phase.description}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="brand-section scroll-mt-24">
          <div className="brand-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#14161a]"><Image src={personalBrand.portrait} alt="Alex Ariza" fill sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover object-top grayscale-[0.1]" /></div>
              <p className="mt-4 text-xs leading-5 text-[#777a84]">Alex Ariza · Colombia · Remote collaboration</p>
            </div>
            <div>
              <p className="brand-eyebrow">{personalBrand.about.eyebrow}</p>
              <h2 id="about-heading" className="brand-section-title mt-5">{personalBrand.about.title}</h2>
              <div className="mt-7 space-y-5">{personalBrand.about.paragraphs.map((paragraph) => <p key={paragraph} className="brand-lead">{paragraph}</p>)}</div>
              <ul className="mt-9 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">{personalBrand.about.principles.map((principle) => <li key={principle} className="flex gap-3 text-sm leading-6 text-[#c5c7cd]"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb35c]" />{principle}</li>)}</ul>
              <div className="brand-panel mt-8 p-6">
                <p className="brand-label text-[#ffb35c]">Working model</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{personalBrand.about.workingModel.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#aeb0b7]">{personalBrand.about.workingModel.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className="brand-section scroll-mt-24 border-y border-white/10 bg-[#0d0f13]">
          <div className="brand-container grid gap-12 lg:grid-cols-[0.58fr_1fr] lg:gap-24">
            <SectionIntro id="faq-heading" eyebrow="Before we talk" title="Questions worth answering early." />
            <div className="divide-y divide-white/10 border-y border-white/10">
              {personalBrand.faq.map((item) => (
                <details key={item.question} className="brand-faq group py-6">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb8ff]">{item.question}<span aria-hidden="true" className="text-xl font-light text-[#8fb8ff] transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span></summary>
                  <p className="max-w-2xl pb-2 pr-8 pt-4 text-sm leading-7 text-[#aeb0b7]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="brand-section scroll-mt-24">
          <div className="brand-container">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111419] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div aria-hidden="true" className="absolute -right-32 -top-40 h-96 w-96 rounded-full border border-[#8fb8ff]/20" />
              <div className="relative max-w-4xl">
                <p className="brand-eyebrow">{personalBrand.contact.eyebrow}</p>
                <h2 id="contact-heading" className="brand-section-title mt-5">{personalBrand.contact.title}</h2>
                <p className="brand-lead mt-6 max-w-3xl">{personalBrand.contact.description}</p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href={contactHref} target={contactIsCalendar ? "_blank" : undefined} rel={contactIsCalendar ? "noopener noreferrer" : undefined} className="brand-button">
                    {contactIsCalendar ? <CalendarDays aria-hidden="true" className="h-4 w-4" /> : <Mail aria-hidden="true" className="h-4 w-4" />}
                    {contactLabel}
                  </a>
                  <p className="max-w-md text-sm leading-6 text-[#8f929b]">{personalBrand.contact.expectation}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="brand-container flex flex-col gap-6 text-sm text-[#888b94] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {personalBrand.name}. AI product engineering.</p>
          <div className="flex items-center gap-2">
            <a href={personalBrand.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Alex Ariza on LinkedIn" className="brand-icon-link"><Linkedin aria-hidden="true" className="h-4 w-4" /></a>
            <a href={personalBrand.social.github} target="_blank" rel="noopener noreferrer" aria-label="Alex Ariza on GitHub" className="brand-icon-link"><Github aria-hidden="true" className="h-4 w-4" /></a>
            <a href={`mailto:${personalBrand.email}`} aria-label={`Email ${personalBrand.name}`} className="brand-icon-link"><Mail aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
