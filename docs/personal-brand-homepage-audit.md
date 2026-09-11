# Personal Brand Homepage: Strategy, Audit, and Asset Plan

## Strategic Shift

The homepage is no longer a portfolio organized around technologies. Its job is to position Alex Ariza as an independent AI product partner, make the right buyer feel understood, reduce perceived delivery risk, and start qualified commercial conversations.

The website does not claim that every visitor needs AI. It demonstrates judgment by treating AI as one possible lever inside a complete product and business workflow.

## Objective Iteration 1: Business Fundamentals

The page must:

- Identify a valuable buyer: ambitious teams with a concrete product or operational problem.
- Lead with the outcome, not Alex's biography or stack.
- Explain what can be bought in language a decision-maker can understand.
- Create one primary conversion: a qualified project conversation.
- Preserve detailed case studies as evidence rather than making the homepage itself a technical archive.
- Avoid fabricated guarantees, outcomes, client relationships, or testimonials.

Success questions:

- Can a founder or operator understand the value within ten seconds?
- Can they identify which engagement fits their current level of certainty?
- Do they know what happens after contacting Alex?
- Is there enough evidence to justify a conversation?

## Objective Iteration 2: Trust and Decision-Making

Every major section answers an objection:

| Buyer question | Page response |
| --- | --- |
| Is this relevant to my problem? | Outcome-led hero and opportunity section |
| What exactly can I buy? | Three engagement models with deliverables |
| Can Alex execute? | Real case studies with links to technical depth |
| Will the process be chaotic? | Diagnose, de-risk, build, and measure framework |
| Is this another anonymous agency? | Founder-led about section and direct collaboration promise |
| What risk do I take? | Scope before kickoff, client ownership, milestone delivery, and FAQ |
| What should I do now? | Pre-filled, low-friction project inquiry |

Trust standards:

- Real proof is specific, attributable, and verifiable.
- Placeholder proof is visibly labeled until replaced.
- Metrics must identify targets, estimates, illustrative models, or observed results.
- Process claims describe controllable behavior, not promised business outcomes.
- Contact expectations are concrete and realistic.

## Objective Iteration 3: Premium Brand and Offer Strength

The final concept uses an editorial technical-advisory visual language: warm paper, dark ink, restrained orange, oversized typographic contrast, strong rules, and photography. This replaces the common developer-portfolio combination of black backgrounds, neon gradients, glass cards, and technology lists.

Applied value equation:

- Increase desired outcome: useful products and measurable business leverage.
- Increase perceived likelihood: detailed evidence, clear method, direct senior execution, and ownership.
- Reduce time delay: focused sprint, visible milestones, and explicit response expectation.
- Reduce effort and sacrifice: complete delivery, existing-team collaboration, documentation, and handoff.

Premium does not mean vague luxury language. It means selectivity, clarity, confidence, restraint, excellent evidence, and low-friction decision-making.

## Audit Iteration 1: Previous Homepage

### Findings

- Positioning was primarily "Full-Stack + AI Engineer," which also reads as candidate positioning.
- The hero explained capabilities and tools before defining the buyer and commercial problem.
- Projects and skills dominated the information hierarchy.
- Six solution cards described possible outputs but did not package an engagement.
- Trust relied heavily on self-description; there was no logo bar or testimonial framework.
- The conversion path was email-first but did not qualify fit strongly.
- The dark gradient and glass-card system was competent but visually interchangeable with AI developer portfolios.
- Existing case studies, direct communication, ownership, and clear scoping were strong reusable foundations.

### Corrections

- Reframed Alex as an independent AI product partner.
- Rewrote the hero around useful products and business leverage.
- Replaced technology categories with three commercial engagement models.
- Moved case studies into a proof-led section.
- Added buyer-objection architecture, logo framework, testimonial framework, and qualification language.

## Audit Iteration 2: Desktop and Structure

### Findings

- The new page had one clear `h1`, a consistent heading hierarchy, named links, and meaningful image alternatives.
- No horizontal overflow occurred at a 1440 px viewport.
- The page now answered relevance, offer, proof, process, authority, objections, and action in sequence.
- Metadata was updated, but the structured data still used the previous positioning.

### Corrections

- Updated `Person` and `ProfessionalService` structured data to AI product partner positioning.
- Aligned service schema with the three visible engagements.
- Kept real case-study routes and existing evidence intact.

## Audit Iteration 3: Mobile and Interaction

### Findings

- No horizontal overflow occurred at a 390 px viewport.
- Desktop navigation collapsed correctly and primary content remained available.
- Some mobile links and FAQ summaries had touch areas below the recommended 44 px target.
- Placeholder social proof was correctly exposed rather than presented as real client evidence.

### Corrections

- Increased mobile navigation CTA, secondary hero link, and FAQ summary targets to at least 44 px.
- Preserved explicit placeholder warnings for logos and testimonials.
- Added reduced-motion behavior and retained responsive image sizing.

## Active and Reusable Assets

| Asset | Current use | Status |
| --- | --- | --- |
| `public/profile2.jpg` | Hero portrait | Active; replace only if a stronger brand portrait is available |
| `public/profile.png` | Founder/about portrait | Active; replace with a complementary editorial image if available |
| `src/content/projects/*` | Detailed case-study content | Active and linked from homepage |
| `public/projects/*` | Case-study imagery and diagrams | Active |
| `src/lib/case-studies.ts` | Case-study preview source | Active |
| LinkedIn profile | Authority and external verification | Active |
| Email inquiry | Primary conversion mechanism | Active |
| GitHub profile | Technical verification | Preserved in site data and case studies, intentionally removed from hero |
| `public/Alex_CV.pdf` | Resume | Retained, not promoted on commercial homepage |

## Materials Alex Must Prepare

### Required Before Publishing

1. Three to five client or partner logos with written permission to display them. Prefer SVG or transparent PNG, monochrome-compatible.
2. Two real testimonials. Each needs exact quote, full name, role, company, and permission; headshot or LinkedIn URL is optional but valuable.
3. Confirmation that “available for selected projects” is currently accurate.
4. Confirmation that “reply within two business days” is operationally sustainable.
5. Review of all case-study metrics. Label each one as observed result, client-reported result, target, benchmark, or illustrative model.

### High-Value Next Assets

1. A professional horizontal or three-quarter portrait with negative space and consistent color treatment.
2. One short founder video explaining who Alex helps, how he thinks, and a representative client problem.
3. A one-page engagement brief for each service with fit, process, timeline, deliverables, exclusions, and starting investment.
4. One verified business-impact case containing baseline, intervention, observed result, time period, and client attribution.
5. A scheduling link only if availability rules and qualification questions are configured; email remains more honest until then.

## Replacement Map

All temporary commercial proof is centralized in `src/lib/brand-content.ts`:

- `logos`: add each file path to the existing `src` field and replace its `name`; the component will switch from placeholder text to the image automatically.
- `testimonials`: replace both example quotes and attribution.
- `services`: refine names, outcomes, and inclusions when pricing and scope are finalized.
- `faqs`: update commercial policies without changing layout code.
- `identity`: update availability, location, and email details.

Homepage layout and narrative are in `src/components/BrandHome.tsx`. Brand styling is in the “Personal brand homepage” section of `src/app/globals.css`.

## Publication Gate

Do not remove placeholder warnings until every displayed logo and quote is real and approved. Before deployment, verify mobile and desktop rendering, every case-study link, email prefill, metadata preview, metrics language, contrast, keyboard navigation, analytics, and legal/privacy requirements for any future form or scheduler.
