// Keep commercial copy and replaceable proof in one place so the page can evolve
// without touching its layout.
interface BrandLogo {
  name: string;
  src: string | null;
}

export const brandContent = {
  identity: {
    name: "Alex Ariza",
    role: "AI Product Engineer",
    location: "Colombia · Working with US and European teams",
    email: "arizah2020@gmail.com",
  },
  logos: [
    { name: "CLIENT 01", src: null },
    { name: "CLIENT 02", src: null },
    { name: "CLIENT 03", src: null },
    { name: "CLIENT 04", src: null },
    { name: "CLIENT 05", src: null },
  ] satisfies readonly BrandLogo[],
  services: [
    {
      number: "01",
      name: "AI product sprint",
      description:
        "Turn a high-value workflow into a working, testable AI product before committing to a large build.",
      outcome: "A validated product direction in 2-4 weeks",
      includes: ["Opportunity and data assessment", "Clickable or functional prototype", "Technical roadmap and investment range"],
    },
    {
      number: "02",
      name: "End-to-end product build",
      description:
        "Design and ship the complete product: interface, backend, data layer, AI capabilities, deployment, and observability.",
      outcome: "A production-ready product your team owns",
      includes: ["Product and technical architecture", "Milestone-based implementation", "Deployment, documentation, and handoff"],
    },
    {
      number: "03",
      name: "AI systems advisory",
      description:
        "Get senior technical direction when your team needs to evaluate an approach, unblock delivery, or improve an existing system.",
      outcome: "Faster decisions with less technical risk",
      includes: ["Architecture and vendor review", "RAG quality, cost, and latency audit", "Prioritized recommendations for your team"],
    },
  ],
  testimonials: [
    {
      quote: "Alex translated a complex operational problem into a clear product and kept every technical decision tied to the business outcome.",
      person: "Client name",
      role: "Role · Company",
    },
    {
      quote: "We always knew what was being built, why it mattered, and what would happen next. The final system was practical, not just impressive.",
      person: "Client name",
      role: "Role · Company",
    },
  ],
  faqs: [
    {
      question: "What kind of companies are the best fit?",
      answer: "Teams with a valuable workflow or product opportunity, access to the people and data involved, and a decision-maker committed to shipping. Early-stage companies and established businesses are both a fit when the problem is concrete.",
    },
    {
      question: "Do you only build AI products?",
      answer: "No. I build the complete web product and use AI only when it creates real leverage. If a deterministic workflow is safer, cheaper, or easier to maintain, that is what I will recommend.",
    },
    {
      question: "How are scope and pricing defined?",
      answer: "We begin with the problem, desired outcome, constraints, and available evidence. You then receive a written scope with deliverables, milestones, exclusions, timeline, and investment before work starts.",
    },
    {
      question: "Who owns the product and infrastructure?",
      answer: "You do. Repositories, domains, cloud accounts, documentation, and deliverables remain in your control. I avoid unnecessary lock-in and make the handoff part of the work.",
    },
    {
      question: "Can you work with an existing team?",
      answer: "Yes. I can own a defined product stream, work alongside your developers and domain experts, or advise the team on architecture, delivery, and AI quality.",
    },
  ],
} as const;
