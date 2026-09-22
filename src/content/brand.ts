/**
 * Single source of truth for the personal-brand homepage.
 * Swap names, logos, quotes, and metrics here — UI already treats these as final.
 *
 * REPLACE markers: search this file for `REPLACE` to find assets/copy you own.
 */

export const brand = {
  name: "Alex Ariza",
  legalName: "Alex Ariza",
  productName: "Alex Ariza",
  role: "AI Product Studio",
  location: "Colombia · Remote-first (USA / EU overlap)",
  email: "arizah2020@gmail.com",
  availability: "Accepting 2 new build slots this quarter",
  replySla: "Replies within 24 hours",
  languages: ["English", "Spanish"],
  social: {
    github: "https://github.com/aarizah",
    linkedin: "https://linkedin.com/in/alex-ariza-herrera",
  },
} as const;

export const positioning = {
  audience:
    "Founders, operators, and professional-services firms who need AI in production — not a demo, not a hire, a shipped system.",
  notFor:
    "Teams looking for a staff engineer to join payroll, or companies that only want a chatbot prototype with no owner for production.",
  category: "Personal brand · AI product engineering studio",
  mechanism:
    "I do not sell 'AI'. I install a measured system: the interface, the retrieval or automation layer, the guardrails, and the latency/cost/accuracy dashboard — so the business can run it after I leave.",
  dreamOutcome:
    "A production AI capability that your team actually uses, with numbers you can defend in a board meeting.",
  timeDelay: "Typical build: 4–12 weeks from kickoff to production.",
  effort:
    "You bring the problem, access to docs/systems, and a decision-maker. I own architecture, build, and rollout.",
  likelihood:
    "Every engagement ships with evals, citations or audit trails where they matter, and a production checklist — not a notebook.",
} as const;

export const heroCopy = {
  headlineLine1: "I Build Software & AI Systems",
  headlineLine2: "from Idea to Production",
  primaryCta: "Explore Solutions",
} as const;

export const heroChips = [
  { label: "Scale Faster", color: "#e8b44a", className: "left-[6%] top-[58%] md:left-[11%] md:top-[60%]" },
  { label: "AI Automation", color: "#3ddc97", className: "right-[6%] top-[44%] md:right-[10%] md:top-[46%]" },
  { label: "Smart Analytics", color: "#a78bfa", className: "left-[52%] top-[72%] md:left-[58%] md:top-[74%]" },
] as const;

export const whatIBuild = {
  eyebrow: "WHAT I BUILD",
  title: "End-to-end systems, not isolated features.",
  description:
    "I design and build complete software products — from the interface your users see to the backend, infrastructure, integrations, and AI behind it.",
  proofLabel: "I built this",
  capabilities: [
    {
      id: "products",
      title: "Software Products",
      summary:
        "Full-stack applications and internal platforms built around real business workflows.",
      items: [
        "Web applications",
        "Internal tools & dashboards",
        "Authentication & permissions",
        "Complex business workflows",
        "Third-party integrations",
        "Data-driven interfaces",
      ],
      project: {
        slug: "clinic-hc",
        title: "Healthcare Platform",
        summary: "Clinical records, interoperability, signatures, AWS infrastructure.",
      },
    },
    {
      id: "cloud",
      title: "Backend & Cloud Systems",
      summary:
        "The infrastructure and backend architecture that make products reliable, secure, and production-ready.",
      items: [
        "APIs & backend services",
        "PostgreSQL & data modeling",
        "AWS infrastructure",
        "Cloud deployments",
        "System integrations",
        "Observability & security",
      ],
      project: {
        slug: "buddi-procurement",
        title: "Operations Platform",
        summary: "Backend workflows, integrations, data processing and automation.",
      },
    },
    {
      id: "ai",
      title: "AI-Powered Systems",
      summary: "AI integrated into real software — not standalone demos.",
      items: [
        "RAG & knowledge systems",
        "Document intelligence",
        "AI copilots",
        "Agentic workflows",
        "Hybrid search & retrieval",
        "Private & local AI",
      ],
      project: {
        slug: "local-rag",
        title: "Private Knowledge Copilot",
        summary: "Document ingestion, hybrid retrieval, citations, local LLM inference.",
      },
    },
  ],
  more: {
    eyebrow: "MORE SYSTEMS",
    title: "Other production problems. Same engineering.",
    projects: [
      {
        slug: "sgr-mga",
        title: "Pre-investment Engine",
        summary: "Turns messy municipal needs into defendable SGR/MGA artifacts — with gates that refuse invented data.",
      },
      {
        slug: "legal-copilot",
        title: "Enterprise Knowledge Copilot",
        summary: "Internal PDFs become cited, streaming answers. Production RAG, not a chatbot demo.",
      },
      {
        slug: "caloric-estimator",
        title: "Vision + Hardware Estimator",
        summary: "A scale plus computer vision that estimates calories from image and weight, not from a guess.",
      },
    ],
  },
} as const;

export const proofStats = [
  { value: "5", label: "Shipped AI systems", hint: "Production or client-ready builds, not tutorials" },
  { value: "4–12 wks", label: "Typical time to live", hint: "From scoped kickoff to production" },
  { value: "Measured", label: "Latency, cost, accuracy", hint: "Dashboards from day one, not a promise later" },
  { value: "2 slots", label: "Open this quarter", hint: "Short pipeline. Named owner." },
] as const;

export const clientLogos = [
  {
    id: "valex-salud",
    name: "Valex Salud",
    sector: "Healthcare · orthodontics",
    logoSrc: "/brands/valexsalud_logo.jpg",
    scale: 1.05,
  },
  {
    id: "buddi-limited",
    name: "Buddi Limited",
    sector: "Product · operations",
    logoSrc: "/brands/buddi_limited.svg",
    scale: 1.1,
  },
  {
    id: "castol",
    name: "Castol SAS",
    sector: "Maintenance and services",
    logoSrc: "/brands/castol_sas_logo.png",
    scale: 1.08,
  },
  {
    id: "academia-naval",
    name: "Academia Naval de Estudios Estratégicos",
    sector: "Education · strategy",
    logoSrc: "/brands/academia_naval_logo.png",
    scale: 1.35,
  },
  {
    id: "tecautronica",
    name: "Tecautronica",
    sector: "Automation and electronics",
    logoSrc: "/brands/tecautronica_logo.png",
    scale: 1.85,
  },
] as const;

export const logoCloudCopy = {
  eyebrow: "Trusted by",
} as const;

export const howWeWork = {
  eyebrow: "WAYS TO WORK TOGETHER",
  title: "Ways to work together.",
  lede: "Flexible engagement depending on the scope.",
  steps: [
    { number: "01", title: "Define", line: "Scope & architecture" },
    { number: "02", title: "Build", line: "Product & integrations" },
    { number: "03", title: "Launch", line: "Deploy & iterate" },
  ],
} as const;

export const engagement = {
  models: [
    {
      id: "focused",
      name: "Focused Build",
      summary: "Short, defined technical scopes.",
      description: "Features, integrations, prototypes, or well-defined technical work.",
      price: "From $200 USD",
      featured: false,
    },
    {
      id: "product",
      name: "Product Build",
      summary: "End-to-end product development.",
      description: "Architecture, backend, frontend, cloud & AI — shipped to production.",
      price: "Starting at $1,000 USD",
      featured: true,
    },
    {
      id: "ongoing",
      name: "Ongoing Engineering",
      summary: "Continuous engineering support.",
      description: "Continuous development, iteration & technical ownership.",
      price: "From $2,000 USD / month",
      featured: false,
    },
  ],
  unsureTitle: "Not sure what fits?",
  unsureBody: "Tell me what you're building and I’ll recommend the right scope.",
  ctaLabel: "Start a Project",
} as const;

export const offers = engagement.models.map((model) => ({
  id: model.id,
  name: model.name,
  outcome: model.description,
  price: model.price,
}));

export const services = [
  {
    title: "Internal copilots",
    promise: "Answers from your documents, with sources — used daily by ops, legal, or clinical teams.",
    proof: "Legal knowledge copilot and clinic operations workflows already in the work section.",
  },
  {
    title: "Document automation",
    promise: "Ingest, extract, validate. Contracts, records, and forms stop living in inboxes.",
    proof: "Pipelines designed around citations, audit trails, and human-in-the-loop gates.",
  },
  {
    title: "Regulated / high-stakes AI",
    promise: "When a wrong answer has legal or clinical cost, the architecture refuses to invent.",
    proof: "Dental EHR copilot with append-only folios and certified signatures.",
  },
  {
    title: "Product AI features",
    promise: "LLM features inside a real product: draft, search, classify, route — wired to your data.",
    proof: "Full-stack delivery: Next.js + APIs + cloud, not a disconnected notebook.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Diagnose the money problem",
    description:
      "We name the expensive workflow, the constraint (data, regulation, people), and the metric that would prove this was worth it.",
    deliverables: ["Problem brief", "Success metrics", "Data & access list", "Go / no-go"],
  },
  {
    number: "02",
    title: "Design the mechanism",
    description:
      "Architecture, UX of the AI step, and the guardrails. You see how it will work before we write production code.",
    deliverables: ["Architecture", "UX flow", "Eval plan", "Risk notes"],
  },
  {
    number: "03",
    title: "Build the thinnest production slice",
    description:
      "A real path in staging: retrieval or automation, interface, logging. Not a prototype that dies in a demo.",
    deliverables: ["Working slice", "Eval set v1", "Cost snapshot", "Weekly demos"],
  },
  {
    number: "04",
    title: "Ship and hand over",
    description:
      "Production rollout, operator docs, and a dashboard for latency, cost, and accuracy. Your team can run it.",
    deliverables: ["Production deploy", "Runbook", "Metrics", "Knowledge transfer"],
  },
] as const;

export const whoItsFor = {
  yes: [
    "You have a workflow that already costs time, errors, or compliance risk.",
    "A decision-maker can join the kickoff and unblock data access.",
    "You want to own the system (code, cloud, process) — not rent a black box forever.",
    "You care about metrics: if we cannot measure it, we should not build it.",
  ],
  no: [
    "You want a chatbot on the website 'because competitors have one'.",
    "You need a full-time employee or staff-aug developer on your payroll.",
    "There is no data, no process owner, and no willingness to change the workflow.",
    "The goal is a pitch deck, not a system in production.",
  ],
} as const;

export const testimonials = [
  {
    quote:
      "We did not need another AI workshop. We needed the clinical record to stop being a liability. The system shipped with the constraints we actually have — signatures, folios, audit — not a demo that ignored them.",
    name: "Dr. Camila Restrepo",
    role: "Operations lead",
    company: "Clínica HC",
    example: true,
    note: "EXAMPLE testimonial. REPLACE with a real quote + permission.",
  },
  {
    quote:
      "Municipal formulation is messy on purpose. The engine refused to invent approvals. That is the only reason we could put it in front of the team.",
    name: "Andrés Molina",
    role: "Director of formulation",
    company: "Vértice Territorial",
    example: true,
    note: "EXAMPLE testimonial. REPLACE.",
  },
  {
    quote:
      "Internal counsel will not use a tool that cannot show the clause. Citations were not a nice-to-have — they were the product.",
    name: "Laura Chen",
    role: "Head of legal ops",
    company: "Helios Legal",
    example: true,
    note: "EXAMPLE testimonial. REPLACE.",
  },
] as const;

export const faqs = [
  {
    q: "Are you a freelancer, an agency, or a product?",
    a: "A personal brand with a studio operating model. You work with me — not a bait-and-switch bench. I bring a tight stack (Next.js, Node/FastAPI, managed cloud) and ship a system your team can keep.",
  },
  {
    q: "Do I own the code?",
    a: "Yes. Build & Ship includes handover: repositories, cloud, runbooks. Retainers are optional after that, not a hostage situation.",
  },
  {
    q: "What if we only need advice?",
    a: "Start with the Opportunity Sprint. You leave with a written go/no-go. Many clients stop there — that is a successful engagement.",
  },
  {
    q: "Can you work in regulated environments?",
    a: "Yes. Healthcare records, public-investment methodology, and legal knowledge are already in the work. I design for audit trails and 'the model must not invent' as first-class constraints.",
  },
  {
    q: "Do you replace my internal team?",
    a: "No. I am the person who installs the first production slice and transfers it. Your engineers or operators should be able to run it afterwards.",
  },
  {
    q: "English or Spanish?",
    a: "Both. Delivery and documentation can be in either. The public site is in English because most buyers evaluate in English; working sessions follow your language.",
  },
  {
    q: "Where are you based? Time zones?",
    a: "Colombia, remote-first, with overlap for USA and EU mornings/afternoons. Travel is possible when the engagement needs it.",
  },
  {
    q: "What does a working session include?",
    a: "30–45 minutes: the workflow that hurts, the constraint, and whether a Sprint or a Build is the honest next step. No pitch deck. If it is not a fit, I will say so.",
  },
] as const;

export const guarantee = {
  title: "Risk reversal",
  body: "If the Opportunity Sprint does not give you a decision you can act on, you do not pay the remainder. If a Build & Ship milestone is missed because of my delivery — not blocked access on your side — we extend at no extra labor until that milestone is met.",
  note: "REPLACE with the guarantee you are actually willing to honor.",
} as const;

export const aboutCopy = {
  eyebrow: "FOUNDER",
  heading: "A personal studio, not a staffing firm.",
  body: "I work directly with founders and teams to build production-ready software systems — combining product thinking, backend architecture, cloud infrastructure, and AI where it creates real leverage.",
  facts: ["Personal studio", "Product · Backend · Cloud · AI"],
  principles: [
    {
      title: "Direct collaboration",
      line: "No layers, no handoffs, no bench.",
    },
    {
      title: "Production-first",
      line: "Security, observability, and maintainability built in.",
    },
    {
      title: "End-to-end scope",
      line: "From workflow to backend to deployment.",
    },
  ],
  ctaLabel: "Start a Project",
} as const;

export const contactCopy = {
  heading: "Tell me what you're building.",
  subhead:
    "The workflow, the constraint, and what done looks like. I’ll recommend a Focused Build, a Product Build, or Ongoing Engineering — or tell you if I’m not the right person.",
  ctaLabel: "Start a Project",
  formTitle: "Start a Project",
  formLede: "A few details. I’ll reply within 24 hours.",
  submitLabel: "Send Project Details",
  budgets: ["Under $5k", "$5k–$15k", "$15k–$40k", "$40k+", "Not sure yet"],
  timelines: ["ASAP", "2–4 weeks", "1–3 months", "3+ months", "Flexible"],
} as const;

export const navLeft = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#build" },
  { label: "About", href: "/#about" },
] as const;

export const navRight = [
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

export const navCta = { label: "Start a Project" } as const;

export const navItems = [
  { label: "Work", href: "/#build" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const seo = {
  title: "Alex Ariza — Production AI systems for real businesses",
  description:
    "Personal brand and AI product studio. I install copilots, RAG, and document automation into production — with latency, cost, and accuracy measured from day one.",
  keywords: [
    "AI product engineer",
    "RAG consultant",
    "production LLM systems",
    "document automation",
    "Alex Ariza",
  ],
} as const;
