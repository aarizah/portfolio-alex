export type BrandLogo = {
  name: string;
  image: string;
  href?: string;
  source: { label: string; href: string };
  context: string;
  permissionConfirmed: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  source: { label: string; href: string };
  context: string;
  permissionConfirmed: boolean;
};

export type HomeEvidence = {
  slug: string;
  image: string;
  evidenceType: "Documented implementation" | "Documented internal workflow";
  evidenceStatus: "Case study available";
  context: string;
  role: string;
  source: { label: string; href: string };
  artifacts: readonly { label: string; href: string }[];
  proofPoints: readonly string[];
};

export const personalBrand = {
  name: "Alex Ariza",
  role: "AI Product Engineer",
  email: "arizah2020@gmail.com",
  calendarUrl: "" as string,
  portrait: "/profile2.jpg",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "AI product engineering for knowledge-heavy teams",
    title: "Decide where AI earns its place. Validate it. Ship only when the evidence justifies it.",
    description:
      "I help product and operations leaders examine a high-friction workflow, test the smallest credible AI-enabled product, and invest in full-stack delivery only when the observed evidence supports it.",
    secondaryCta: "See selected results",
    capabilities: ["Product strategy", "Grounded AI systems", "Full-stack delivery", "Production readiness"],
  },
  idealClient: {
    eyebrow: "Where I create the most leverage",
    title: "For product and operations leaders responsible for document-heavy workflows.",
    description:
      "The strongest fit is a team where valuable work depends on searching, reviewing, classifying, drafting, or moving information across documents and systems—and where trust matters as much as speed.",
    problems: [
      "Critical knowledge is scattered across documents, tools, and subject-matter experts.",
      "A promising AI prototype exists, but trust, UX, cost, or reliability blocks adoption.",
      "A team needs one accountable partner across product, AI, backend, and deployment.",
    ],
    outcomes: [
      "A clear opportunity with measurable success criteria",
      "A grounded product experience built around the real workflow",
      "A maintainable path from validation to production",
    ],
    notAFit: [
      "You need a large agency staffing multiple parallel squads.",
      "The goal is to add AI without access to the real workflow, users, or representative inputs.",
      "You need a guaranteed business result before the problem and evidence are understood.",
    ],
  },
  services: [
    {
      number: "01",
      name: "AI Opportunity Sprint",
      fit: "When the opportunity is important, but the right product and scope are still unclear.",
      outcome:
        "Leave with a decision-ready opportunity brief: workflow, users, risks, success measures, solution direction, and a prioritized path forward.",
      deliverables: ["Workflow and pain-point map", "Use-case and risk assessment", "Success metrics", "Pilot recommendation"],
      boundaries: "One priority workflow and the decision required to move it forward, pause it, or reject it.",
      clientInputs: ["Access to the workflow owner", "Representative examples", "Known constraints and risks"],
      notIncluded: ["Production software", "A portfolio-wide AI roadmap", "Guaranteed ROI"],
      completionSignal: "Stakeholders have a documented go, change, or stop decision with a bounded next step.",
      commercials: { confirmed: false, duration: "", price: "" },
      offerApproved: false,
    },
    {
      number: "02",
      name: "Grounded AI Pilot",
      fit: "When you need to prove usefulness with real users and real information before committing to a larger build.",
      outcome:
        "Validate one valuable workflow with a working product experience, grounded outputs, evaluation criteria, and evidence for the next investment decision.",
      deliverables: ["Focused product experience", "Retrieval or AI workflow", "Evaluation baseline", "Pilot findings and next steps"],
      boundaries: "One testable workflow, a defined user group, and the minimum integrations needed to evaluate it credibly.",
      clientInputs: ["Representative, permitted data", "User and subject-matter access", "Feedback against agreed criteria"],
      notIncluded: ["Broad organizational rollout", "Unbounded integrations", "Production SLA or support"],
      completionSignal: "The pilot produces enough observed evidence to decide whether and how to productionize it.",
      commercials: { confirmed: false, duration: "", price: "" },
      offerApproved: false,
    },
    {
      number: "03",
      name: "Productionization & Optimization",
      fit: "When a prototype works, but it still needs the engineering discipline required for real operations.",
      outcome:
        "Turn the validated experience into a more reliable, observable, secure, and maintainable product that your team can operate with confidence.",
      deliverables: ["Architecture and reliability review", "Quality, latency, and cost instrumentation", "Deployment workflow", "Operational handoff"],
      boundaries: "A validated product path with explicitly agreed reliability, deployment, observability, and handoff priorities.",
      clientInputs: ["Existing code and architecture access", "Target environment and policies", "Named technical owner for handoff"],
      notIncluded: ["24/7 managed operations", "Unlimited feature development", "Compliance certification or legal advice"],
      completionSignal: "The agreed production-readiness gaps are addressed or documented with owners, evidence, and residual risks.",
      commercials: { confirmed: false, duration: "", price: "" },
      offerApproved: false,
    },
  ],
  homeEvidence: [
    {
      slug: "clinic-hc",
      image: "/projects/clinic-hc/thumbnail.png",
      evidenceType: "Documented implementation",
      evidenceStatus: "Case study available",
      context: "Compliance-sensitive dental health records for Colombian clinical operations.",
      role: "End-to-end product engineering across workflow, signed records, interoperability, and AWS delivery.",
      source: { label: "Clinic HC case study", href: "/projects/clinic-hc" },
      artifacts: [
        { label: "C4 diagram", href: "/projects/clinic-hc/c4.svg" },
        { label: "Database diagram", href: "/projects/clinic-hc/db-diagram.svg" },
      ],
      proofPoints: ["Append-only clinical record design", "FHIR/RDA interoperability pipeline", "AWS deployment documented in the case study"],
    },
    {
      slug: "sgr-mga",
      image: "/projects/sgr-mga/thumbnail.png",
      evidenceType: "Documented internal workflow",
      evidenceStatus: "Case study available",
      context: "Territorial consultancy workflows that turn municipal needs into governed SGR/MGA pre-investment artifacts.",
      role: "Methodology, agent workflow, information governance, and implementation inside the operating context.",
      source: { label: "SGR/MGA case study", href: "/projects/sgr-mga" },
      artifacts: [{ label: "Agent pipeline", href: "/projects/sgr-mga/agent-pipeline.svg" }],
      proofPoints: ["Explicit formulation phases", "Governance against invented data", "Versioned methodology workflow"],
    },
    {
      slug: "legal-copilot",
      image: "/projects/legal-copilot/thumbnail.png",
      evidenceType: "Documented implementation",
      evidenceStatus: "Case study available",
      context: "Internal teams searching and answering from document collections where citations and traceability matter.",
      role: "Full-stack RAG product implementation spanning ingestion, retrieval, cited answers, UX, and deployment architecture.",
      source: { label: "Knowledge Copilot case study", href: "/projects/legal-copilot" },
      artifacts: [
        { label: "C4 diagram", href: "/projects/legal-copilot/c4.svg" },
        { label: "Database diagram", href: "/projects/legal-copilot/db-diagram.svg" },
      ],
      proofPoints: ["Cited streaming answers", "Document ingestion and retrieval flow", "End-to-end product experience"],
    },
  ] as const satisfies readonly HomeEvidence[],
  process: [
    { step: "01", title: "Frame the decision", description: "Align on the workflow, user, stakes, constraints, and what evidence would justify moving forward." },
    { step: "02", title: "Design around trust", description: "Shape the experience, data flow, safeguards, and evaluation plan before complexity grows." },
    { step: "03", title: "Build the smallest credible system", description: "Ship an end-to-end slice that can be tested in the real context—not an isolated AI demo." },
    { step: "04", title: "Measure, decide, and harden", description: "Use observed quality, latency, cost, and user behavior to improve, productionize, or stop." },
  ],
  about: {
    eyebrow: "One partner across the product",
    title: "Strategy is only useful when it survives contact with the build.",
    paragraphs: [
      "I’m Alex Ariza, a full-stack engineer focused on AI products. My work sits between product thinking and implementation: translating an ambiguous business problem into a usable workflow, a grounded system, and a production path.",
      "That range matters because the hardest AI product problems rarely live inside the model alone. They live in the interface, the source data, the failure states, the evaluation method, and the way the system is operated after launch.",
    ],
    principles: ["Clarify the decision before writing code", "Design trust into the workflow", "Measure quality, latency, and cost", "Keep the system understandable to the team"],
    workingModel: {
      title: "Independent specialist, not a disguised agency",
      description:
        "I work as a hands-on product and engineering partner. That creates direct accountability and continuity, but it is not the right model for programs that need several parallel squads, 24/7 operations, or broad staff augmentation.",
    },
  },
  faq: [
    { question: "Do you only work on RAG or document-based products?", answer: "No. That is a strong area of experience, but the engagement starts with the workflow and desired outcome. If AI is not the right mechanism, the recommendation should say so." },
    { question: "Can you work with an existing product and engineering team?", answer: "Yes. An engagement can complement an internal team through product framing, architecture, a focused implementation, or production-readiness work. Ownership and handoff are made explicit before work begins." },
    { question: "Do you provide a fixed price or timeline?", answer: "Not on this page, because scope depends on the workflow, evidence required, integrations, data condition, and operational risk. After an initial conversation, the next step and its boundaries can be proposed clearly." },
    { question: "What do you need from us to start?", answer: "A real workflow, access to the people closest to it, representative non-sensitive examples where possible, and clarity about the decision the work needs to support." },
    { question: "What happens after I get in touch?", answer: "You’ll receive a reply to clarify fit and context. If there is a credible opportunity, the next conversation focuses on the workflow, stakes, constraints, and the smallest useful next step—without assuming a large project." },
    { question: "How do you handle sensitive documents and data?", answer: "Data access, permitted environments, retention, and disclosure boundaries must be agreed before representative information is used. The system should minimize access and data movement, but the exact privacy and security controls depend on your policies, risk profile, and applicable obligations." },
    { question: "Who owns the code and intellectual property?", answer: "Ownership, licenses, pre-existing tools, third-party services, and reusable components are made explicit in the engagement terms before work begins. The page does not promise a universal IP arrangement because the right structure depends on the project and jurisdiction." },
  ],
  contact: {
    eyebrow: "A practical first step",
    title: "Bring one workflow that feels slower, riskier, or more manual than it should.",
    description:
      "Tell me what people are trying to accomplish, where the friction lives, and what a meaningful improvement would change. I’ll reply to clarify fit and suggest the smallest credible next step.",
    emailSubject: "AI opportunity inquiry",
    emailBody:
      "Hi Alex,\n\nI’d like to discuss a knowledge-heavy or AI-enabled workflow.\n\nWorkflow:\n\nCurrent friction:\n\nDesired change:\n\nContext or constraints:\n\n",
    expectation: "No pitch deck required. A short description of the workflow is enough to start.",
  },
  social: {
    linkedin: "https://linkedin.com/in/alex-ariza-herrera",
    github: "https://github.com/aarizah",
  },
  // Leave these arrays empty until Alex provides real, publishable evidence.
  // Empty arrays intentionally hide their sections; never add fictional proof.
  brandLogos: [] as BrandLogo[],
  testimonials: [] as Testimonial[],
} as const;

export function getPrimaryContactHref() {
  if (personalBrand.calendarUrl) return personalBrand.calendarUrl;

  const subject = encodeURIComponent(personalBrand.contact.emailSubject);
  const body = encodeURIComponent(personalBrand.contact.emailBody);
  return `mailto:${personalBrand.email}?subject=${subject}&body=${body}`;
}

export function getPrimaryContactLabel() {
  return personalBrand.calendarUrl ? "Book a fit call" : `Email ${personalBrand.name}`;
}
