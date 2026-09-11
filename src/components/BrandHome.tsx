import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Linkedin,
  Mail,
  MoveUpRight,
  Quote,
} from "lucide-react";
import { brandContent } from "@/lib/brand-content";
import { getCaseStudyPreviews } from "@/lib/case-studies";
import { SOCIAL_LINKS } from "@/lib/site";

const process = [
  ["Diagnose", "Clarify the business outcome, workflow, users, constraints, and evidence."],
  ["De-risk", "Test the assumptions that could make the product expensive, unreliable, or unnecessary."],
  ["Build", "Ship in visible milestones with direct access to the person doing the work."],
  ["Measure", "Track the product signals that matter: adoption, quality, latency, cost, or conversion."],
] as const;

export function BrandHome() {
  const cases = getCaseStudyPreviews().slice(0, 3);
  const emailHref = `mailto:${brandContent.identity.email}?subject=Project%20inquiry&body=Hi%20Alex%2C%0A%0ACompany%3A%20%0AProblem%20or%20opportunity%3A%20%0AWhat%20exists%20today%3A%20%0ATarget%20timeline%3A%20`;

  return (
    <div className="brand-site">
      <header className="brand-nav">
        <a href="#top" className="brand-signature" aria-label="Alex Ariza, home">
          Alex Ariza<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="brand-nav-cta" href={emailHref}>Start a conversation <MoveUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="brand-hero">
          <div className="brand-hero-copy">
            <p className="brand-kicker"><span /> Independent AI product partner</p>
            <h1>I turn complex workflows into <em>useful products.</em></h1>
            <p className="brand-lede">
              I help ambitious teams design and ship web products, AI copilots, and automation
              systems that create measurable business leverage, without adding avoidable complexity.
            </p>
            <div className="brand-actions">
              <a className="brand-button brand-button-primary" href={emailHref}>Tell me what you are building <ArrowRight size={18} /></a>
              <a className="brand-text-link" href="#work">Explore selected work <ChevronRight size={17} /></a>
            </div>
            <div className="brand-hero-notes">
              <span><CircleCheck size={16} /> Direct collaboration</span>
              <span><CircleCheck size={16} /> You own every deliverable</span>
              <span><CircleCheck size={16} /> Clear scope before kickoff</span>
            </div>
          </div>

          <div className="brand-portrait-wrap">
            <div className="brand-portrait-frame">
              <Image src="/profile2.jpg" alt="Alex Ariza, AI Product Engineer" fill priority sizes="(max-width: 900px) 90vw, 38vw" className="brand-portrait" />
            </div>
            <div className="brand-status-card">
              <span className="brand-status-dot" />
              <div><strong>Available for selected projects</strong><small>Remote · US / EU overlap</small></div>
            </div>
            <p className="brand-portrait-caption">Strategy · Product · Engineering</p>
          </div>
        </section>

        <section className="brand-logo-strip" aria-label="Selected client logo placeholders">
          <p>Selected teams and partners</p>
          <div>
            {brandContent.logos.map((logo) => (
              <span key={logo.name} title={logo.src ? logo.name : "Replace with a real client logo"}>
                {logo.src ? <Image src={logo.src} alt={logo.name} width={132} height={38} /> : logo.name}
              </span>
            ))}
          </div>
          <small>Placeholder logos · replace before publishing</small>
        </section>

        <section className="brand-tension">
          <p className="brand-section-index">01 / The opportunity</p>
          <div>
            <h2>AI is easy to demo.<br /><em>Useful is harder.</em></h2>
            <div className="brand-tension-copy">
              <p>Most teams do not need another disconnected prototype. They need a product that fits the real workflow, handles imperfect data, earns user trust, and makes economic sense.</p>
              <p>That is the gap I close: translating business context into a focused product, then engineering the full system required to make it dependable.</p>
            </div>
          </div>
        </section>

        <section id="services" className="brand-services">
          <div className="brand-section-heading">
            <p className="brand-section-index">02 / Ways to work together</p>
            <h2>Start with the level of certainty <em>you have today.</em></h2>
            <p>Three focused engagements, from validating the opportunity to owning the complete delivery.</p>
          </div>
          <div className="brand-service-list">
            {brandContent.services.map((service) => (
              <article key={service.number} className="brand-service">
                <span>{service.number}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="brand-service-outcome">
                  <small>Primary outcome</small>
                  <strong>{service.outcome}</strong>
                  <ul>{service.includes.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="brand-work">
          <div className="brand-section-heading brand-section-heading-light">
            <p className="brand-section-index">03 / Evidence over promises</p>
            <h2>Selected systems built around <em>real constraints.</em></h2>
            <p>Not a gallery of screens. Each case explains the problem, decisions, architecture, and evidence behind the result.</p>
          </div>
          <div className="brand-case-grid">
            {cases.map((item, index) => (
              <Link href={`/projects/${item.slug}`} className="brand-case" key={item.slug}>
                <div className="brand-case-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 800px) 94vw, 31vw" />
                  <span>{item.status}</span>
                </div>
                <p>Case study · 0{index + 1}</p>
                <h3>{item.title}</h3>
                <div className="brand-case-metrics">
                  {item.metrics.slice(0, 2).map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}
                </div>
                <span className="brand-case-link">Read the case study <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="brand-process">
          <div className="brand-process-intro">
            <p className="brand-section-index">04 / The working model</p>
            <h2>Clarity before code.<br /><em>Evidence before scale.</em></h2>
            <p>A senior, low-overhead process designed to keep decisions visible and momentum high.</p>
          </div>
          <ol>
            {process.map(([title, description], index) => (
              <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="brand-testimonials">
          <div className="brand-section-heading">
            <p className="brand-section-index">05 / Client perspective</p>
            <h2>Trust should come from <em>specific evidence.</em></h2>
          </div>
          <div className="brand-quote-grid">
            {brandContent.testimonials.map((testimonial) => (
              <figure key={testimonial.quote}>
                <Quote size={27} />
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption><strong>{testimonial.person}</strong><span>{testimonial.role}</span></figcaption>
                <small>Example testimonial · replace before publishing</small>
              </figure>
            ))}
          </div>
        </section>

        <section id="about" className="brand-about">
          <div className="brand-about-image"><Image src="/profile.png" alt="Alex Ariza" fill sizes="(max-width: 800px) 94vw, 43vw" /></div>
          <div className="brand-about-copy">
            <p className="brand-section-index">06 / Your product partner</p>
            <h2>The builder stays <em>in the room.</em></h2>
            <p className="brand-about-lede">I am Alex, a full-stack and AI product engineer who works across product thinking, interface design, systems architecture, and production delivery.</p>
            <p>You speak directly with the person making the decisions and writing the software. That removes handoff loss, shortens feedback loops, and keeps the technology connected to the outcome.</p>
            <div className="brand-about-facts">
              <span><strong>5</strong>Detailed case studies</span>
              <span><strong>E2E</strong>Product to production</span>
              <span><strong>Direct</strong>Senior collaboration</span>
            </div>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">View LinkedIn profile <Linkedin size={17} /></a>
          </div>
        </section>

        <section className="brand-faq">
          <div>
            <p className="brand-section-index">07 / Before we talk</p>
            <h2>Questions worth <em>answering early.</em></h2>
          </div>
          <div className="brand-faq-list">
            {brandContent.faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="brand-cta">
          <p className="brand-kicker"><span /> One focused conversation</p>
          <h2>Have a valuable problem<br />worth <em>solving properly?</em></h2>
          <p>Send me the problem, what exists today, and your target timeline. I will reply within two business days with honest next steps, even if I am not the right fit.</p>
          <a className="brand-button brand-button-inverse" href={emailHref}>Start the conversation <Mail size={18} /></a>
          <small>No sales funnel. No commitment. Just enough context to determine fit.</small>
        </section>
      </main>

      <footer className="brand-footer">
        <div><a href="#top" className="brand-signature">Alex Ariza<span>.</span></a><p>Independent AI product partner for teams building useful, dependable software.</p></div>
        <div><small>Contact</small><a href={`mailto:${brandContent.identity.email}`}>{brandContent.identity.email}</a><a href={SOCIAL_LINKS.linkedin}>LinkedIn</a></div>
        <div><small>Based in</small><p>{brandContent.identity.location}</p><p>© {new Date().getFullYear()} Alex Ariza</p></div>
      </footer>
    </div>
  );
}
