import type { CaseStudy } from "../types";

const HERO_IMAGE = "/projects/sgr-mga/thumbnail.png";

export const sgrMga: CaseStudy = {
  meta: {
    slug: "sgr-mga",
    title: "SGR/MGA Formulation Engine — Territorial Pre-Investment AI",
    tagline:
      "An internal methodology engine that turns chaotic municipal needs into defendible SGR/MGA pre-investment artifacts — operating inside a real territorial consultancy, with governance that refuses invented data and promised approvals.",
    status: "Internal",
    ogImage: HERO_IMAGE,
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: why municipalities lose SGR access, artifact-first formulation (not document generation), 15-step pipeline with human gates, and an internal system already producing pilot deliverables.",
    },
  },
  sections: {
    hero: {
      tagline:
        "When Colombian municipalities have the need but not the formulation capacity, this engine orders territorial chaos into traceable SGR/MGA artifacts — canon-driven, phase-gated, and built to stop before it lies.",
      status: "Internal",
      stack: ["SGR · MGA", "Agent Pipeline", "Canon + Artifacts", "Git", "LLMs"],
      backgroundImage: HERO_IMAGE,
    },
    quickOverview: {
      role: "AI Systems + Full Stack Engineer",
      duration: "Ongoing",
      status: "Internal",
      users: "Territorial consultancy · municipal formulation",
      country: "Colombia",
      domain: "Public Investment / SGR · MGA",
      cloud: "Internal operations · Git-versioned",
      tech: "25 agents · 15-step pipeline · SGR/MGA canon",
    },
    videoDemo: {
      poster: HERO_IMAGE,
      chapters: [
        { time: 0, label: "Preflight triage" },
        { time: 25, label: "Problem & objectives" },
        { time: 50, label: "MGA structure" },
        { time: 80, label: "Gap review & plan" },
      ],
    },
    problem: {
      eyebrow: "Problem",
      headline:
        "Municipalities lose access to SGR resources not from lack of political will — but from formulation chaos they cannot fix alone.",
      lead:
        "Small and medium Colombian municipalities face a structural gap: clear public needs, intense pressure to secure regalías, and almost no installed capacity to structure defendible SGR/MGA pre-investment projects.",
      supportingParagraphs: [
        "The bottleneck is not typing documents faster. It is poorly formulated problems, budgets and indicators without traceability, phase confusion between Perfil and Prefactibilidad, and projects that look polished but fail methodological review.",
        "We are a software-engineering consultancy — not a traditional studies-and-designs firm. The product bet was building an internal formulation factory: disciplined SGR/MGA methodology, AI where it accelerates reasoning, real sources, verifiable artifacts, and a system that knows when to stop instead of inventing viability.",
      ],
      insightLabel: "The territorial gap",
      insightHelper:
        "Ordering chaos into defensible pre-investment structure — not disguising weak methodology with polished prose.",
      bridgeBefore: "See the stakes",
      bridgeAfter: "Then see the formulation engine",
      illustration: HERO_IMAGE,
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline:
        "A methodology engine for territorial pre-investment — not another municipal document generator.",
      subheadline:
        "SGR and MGA rules live as canon. Each case produces a versioned artifact trail in project/. A 15-step pipeline with human gates turns incomplete territorial inputs into deliverables a formulator can defend.",
      capabilitiesLabel: "What makes it work in practice",
      cards: [
        {
          title: "SGR/MGA canon layer",
          description:
            "Normalized rules, checklists, and methodology in knowledge/ — read-only during case execution so normative source never drifts mid-formulation.",
        },
        {
          title: "15-step formulation pipeline",
          description:
            "Preflight triage through maturation plan — each step declares inputs, outputs, stop criteria, and explicit phase gates for Perfil vs. Prefactibilidad.",
        },
        {
          title: "Skills as contracts",
          description:
            "Every step is a contract: what it reads, produces, must not do, and when it halts — not open-ended prompts that improvise methodology.",
        },
        {
          title: "Bounded agent context",
          description:
            "25 specialized agents with granular permissions. The runner orchestrates; subagents reason with only the context their contract allows.",
        },
        {
          title: "No-invention governance",
          description:
            "Every field tagged provisto, inferido, supuesto, vacio, or no_verificado_en_canon. Missing data stays visible — never fabricated into a false viability story.",
        },
        {
          title: "Artifact-first deliverables",
          description:
            "Markdown outputs with Resumen Para Siguiente Paso — sources, assumptions, gaps, and pending decisions. Reviewable by humans and allied consultants, not trapped in chat history.",
        },
      ],
    },
    featureWalkthrough: {
      items: [
        {
          id: "triage",
          label: "Triage",
          screenshot: HERO_IMAGE,
          explanation:
            "Before any structuring, the engine checks SGR eligibility, actor roles, funding source, and exclusions — stopping early when a case is out of scope instead of generating false confidence.",
        },
        {
          id: "structure",
          label: "Structure",
          screenshot: HERO_IMAGE,
          explanation:
            "Problem tree, objectives, alternatives, value chain, and MGA structure — with parallel internal reviewers at the structure step to catch causal and catalog errors before they reach a viability instance.",
        },
        {
          id: "verify",
          label: "Verify",
          screenshot: HERO_IMAGE,
          explanation:
            "Normative SGR matrix, ex-ante scope review, and phase-gate validation. Perfil requirements never mixed with Prefactibilidad — the most common failure mode in real territorial submissions.",
        },
        {
          id: "deliver",
          label: "Deliver",
          screenshot: HERO_IMAGE,
          explanation:
            "Gap report and maturation plan with full traceability — artifacts planning secretariats and allied consultants can continue from, not a chat transcript that disappears after the session.",
        },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      headline: "How the formulation engine is engineered.",
      subheadline:
        "Canon vs. artifacts, the 15-step agent pipeline, permission boundaries, and an internal runtime designed for auditable territorial work.",
      systemOverview: {
        title: "System Overview",
        description:
          "A lightweight runner coordinates 15 step agents that read canon and prior case artifacts, write verifiable Markdown outputs, and halt on critical gaps — with parallel internal reviewers at the MGA structure step where causal errors are most costly.",
        nodes: [
          {
            id: "user",
            label: "Formulador",
            description: "Provides case inputs and declares phase (Perfil / Prefactibilidad).",
            technologies: ["Human gate"],
          },
          {
            id: "runner",
            label: "sgr-mga-runner",
            description: "Orchestrator — invokes subagents via task, verifies artifacts, logs decisions.",
            technologies: ["OpenCode"],
          },
          {
            id: "subagents",
            label: "15 Step Agents",
            description: "Read canon, reason, write project/ artifacts per skill contract.",
            technologies: ["Skills", "Subagents"],
          },
          {
            id: "canon",
            label: "knowledge/",
            description: "SGR rules, MGA methodology, checklists — read-only during cases.",
            technologies: ["Markdown", "Git"],
          },
          {
            id: "artifacts",
            label: "project/",
            description: "00_input through 09_plan — dynamic case outputs with traceability.",
            technologies: ["Markdown", "Git"],
          },
          {
            id: "evolution",
            label: "LangGraph (planned)",
            description: "Declarative DAG orchestration when pipeline complexity and volume justify migration.",
            technologies: ["Future"],
          },
        ],
        tableColumns: { layer: "Layer", role: "Role", stack: "Stack" },
        technologies: ["OpenCode", "Skills", "Subagents", "Markdown", "Git", "LangGraph"],
      },
      c4Model: {
        title: "Formulation Pipeline",
        description:
          "Orchestration layers, 15-step deterministic flow across four phases, parallel reviewers at step 7, and mapped artifact outputs in project/.",
        src: "/projects/sgr-mga/agent-pipeline.svg",
        alt: "SGR/MGA 15-step formulation pipeline with orchestration layers and artifact outputs",
      },
      security: {
        title: "Governance",
        description:
          "No-invention rules, permission boundaries, and human gates — not traditional app security.",
        items: [
          {
            id: "no-invention",
            label: "No invention (R2)",
            description:
              "Missing data → vacio or supuesto with justification. Never fabricated costs, indicators, or requirements.",
            technologies: ["Field states"],
          },
          {
            id: "permissions",
            label: "Agent permissions",
            description:
              "Runner cannot edit knowledge/ or skills. Subagents cannot write to canon. Architect requires human ask before system changes.",
            technologies: ["OpenCode YAML"],
          },
          {
            id: "traceability",
            label: "Traceability (R7)",
            description:
              "Every artifact ends with Resumen Para Siguiente Paso — sources, assumptions, gaps, pending decisions.",
            technologies: ["Git", "Logs"],
          },
          {
            id: "gates",
            label: "Human gates",
            description:
              "Phase selection, critical findings, phase mixing, and pilot validation require explicit human decisions.",
            technologies: ["Pipeline stops"],
          },
        ],
      },
      coreWorkflows: {
        title: "Core Workflows",
        description: "The formulation loop from intake to maturation plan.",
        workflows: [
          {
            id: "pipeline",
            label: "15-Step Formulation Pipeline",
            description: "",
            steps: [
              {
                id: "phase",
                label: "Declare phase",
                description:
                  "User selects Perfil (Phase I) or Prefactibilidad (Phase II) before step 0.",
              },
              {
                id: "triage",
                label: "Steps 0–3",
                description:
                  "Preflight triage, intake, problem tree, objectives and alternatives.",
              },
              {
                id: "mga",
                label: "Steps 4–9",
                description:
                  "Needs study, technical review, value chain, MGA structure (parallel reviewers), risks, programming.",
              },
              {
                id: "sgr",
                label: "Steps 10–12",
                description:
                  "Ex-ante scope, SGR normative matrix, MGA Web operational route.",
              },
              {
                id: "close",
                label: "Steps 13–14",
                description:
                  "Gap review and maturation plan — pipeline stops on critical findings without human decision.",
              },
            ],
          },
          {
            id: "commands",
            label: "Support Commands",
            description: "",
            steps: [
              {
                id: "piloto",
                label: "sgr-piloto",
                description: "Execute the full pipeline on a bounded pilot case.",
              },
              {
                id: "gap",
                label: "sgr-gap-check",
                description: "Re-run gap review across all project/ artifacts.",
              },
              {
                id: "review",
                label: "sgr-review",
                description: "Assemble human review package with pending decisions and critical gaps.",
              },
            ],
          },
        ],
      },
      dataModel: {
        title: "Artifact Model",
        description:
          "project/ folder schema from 00_input (eligibility) through 09_plan (maturation) plus _logs for decisions and traceability.",
        alt: "Artifact folder schema for SGR/MGA formulation pipeline",
      },
      deployment: {
        title: "Runtime",
        description:
          "Operates as internal consultancy infrastructure — not a public SaaS demo. Git versions canon, skills, agents, and case artifacts. Bounded pilots produce real deliverables today; cloud platform and LangGraph orchestration are deliberate next steps when case volume and branching justify them.",
        hosting: "Internal · Git · Agent runtime",
        environments: [
          {
            label: "In operation",
            services: [
              { name: "Orchestration", tech: "Agent runtime (OpenCode)" },
              { name: "Agents", tech: "25 configured subagents" },
              { name: "Skills", tech: "15 pipeline contracts" },
              { name: "Canon", tech: "knowledge/ · Markdown" },
              { name: "Case artifacts", tech: "project/ · Markdown + Git" },
              { name: "Models", tech: "Commercial APIs" },
            ],
          },
          {
            label: "Scale path",
            heading: "When volume demands it",
            services: [
              { name: "Orchestration", tech: "LangGraph DAG" },
              { name: "Retrieval", tech: "Vector DB / RAG" },
              { name: "Integrations", tech: "MCP · external sources" },
              { name: "Platform", tech: "Custom backend + API" },
              { name: "Deployment", tech: "Cloud (TBD)" },
            ],
          },
        ],
      },
    },
    aiPipeline: {
      blocks: [
        {
          id: "canon",
          label: "Canon normalization",
          content:
            "SGR and MGA rules live in knowledge/ with source traceability before any automation runs.",
        },
        {
          id: "triage",
          label: "Preflight & intake",
          content:
            "Steps 0–1 validate eligibility, actors, territory, and problem publico before structuring begins.",
        },
        {
          id: "identify",
          label: "Problem & objectives",
          content:
            "Steps 2–3 build problem tree and objectives/alternatives — problem before solution, never obra-first.",
        },
        {
          id: "prepare",
          label: "MGA preparation",
          content:
            "Steps 4–8 cover needs study, technical review, value chain, MGA structure with parallel reviewers, and risks.",
        },
        {
          id: "program",
          label: "Programming & evaluation",
          content:
            "Steps 9–10 define indicators, financing sources, and ex-ante scope without inventing feasibility data.",
        },
        {
          id: "normative",
          label: "SGR normative check",
          content:
            "Steps 11–12 contrast requirements matrix and MGA Web operational route against canon.",
        },
        {
          id: "close",
          label: "Gap review & plan",
          content:
            "Steps 13–14 produce hallazgos report and maturation plan — or stop on critical gaps.",
        },
      ],
    },
    engineeringDecisions: {
      eyebrow: "Decisions",
      labels: {
        why: "Why this path",
        tradeoff: "Tradeoff",
        alternative: "Alternative",
        rejected: "Rejected because",
      },
      items: [
        {
          id: "opencode-first",
          title: "Agent runtime before custom orchestration",
          why: "The formulation flow had to be proven on real territorial cases before investing in owned infrastructure. A skill-based agent runtime let us iterate on methodology, permissions, and stop criteria while pilots were already producing artifacts.",
          tradeoffs:
            "Less control over internal architecture until migration; orchestration lives in configuration rather than owned code.",
          alternatives: "LangGraph from day one, Cursor/Claude Code, or a custom Python orchestrator.",
          rejected:
            "Building a DAG orchestrator upfront would have delayed learning what the 15-step flow actually needed from real municipality cases.",
        },
        {
          id: "langgraph-second",
          title: "LangGraph when repeatability is proven",
          why: "Once pilots validate the pipeline and document volume grows to thousands, a declarative DAG with deterministic + agentic nodes and optional RAG becomes the right scale path — the flow is already documented step by step.",
          tradeoffs: "Higher engineering cost; only justified after methodology is stable on real cases.",
          alternatives: "Stay on agent runtime indefinitely or jump to a custom backend with embedded agents.",
          rejected:
            "Migrating before repeatability would bake in the wrong abstractions. The current pipeline maps cleanly to a future LangGraph DAG.",
        },
        {
          id: "light-runner",
          title: "Light runner, heavy subagents",
          why: "sgr-mga-runner only invokes task and verifies artifacts. Subagents read canon, reason, and write. Prevents context inflation and keeps orchestration deterministic.",
          tradeoffs: "More agent configuration files and strict permission YAML maintenance.",
          alternatives: "Single omniscient agent that reads everything and writes everything.",
          rejected:
            "A monolithic agent would dump massive context, mix SGR and MGA rules, and lose stop-criteria discipline.",
        },
        {
          id: "skills-contracts",
          title: "Skills as contracts, not long prompts",
          why: "Each skill declares inputs, outputs, limits, and stop criteria — enabling validation, documentation, and future LangGraph node mapping.",
          tradeoffs: "More upfront contract design before seeing pilot results.",
          alternatives: "Ad-hoc prompts per step or one mega-prompt for the whole pipeline.",
          rejected:
            "Ad-hoc prompts diverged across pilots. Contracts enforce P7 and make the pipeline auditable.",
        },
        {
          id: "canon-artifact-split",
          title: "Strict canon / artifact separation",
          why: "knowledge/ is read-only during cases; project/ is the only dynamic write zone. Agents cannot corrupt normative source mid-formulation.",
          tradeoffs: "Canon updates require separate architect sessions, not inline during a case.",
          alternatives: "Single folder for everything or agents that update canon from case learnings.",
          rejected:
            "Writable canon during cases would break traceability and allow normative drift without human review.",
        },
        {
          id: "no-ml-predictor",
          title: "Defer ML approval predictor",
          why: "Predicting approval from historical projects does not help draft proposals, requires massive cleaned datasets, and retraining on policy changes.",
          tradeoffs: "No instant approval-score feature for clients.",
          alternatives: "Train classifier on approved vs. rejected projects as V1 centerpiece.",
          rejected:
            "Low drafting value, high data engineering cost, and misleading if presented as viability guarantee (violates R1).",
        },
      ],
    },
    security: [
      {
        title: "No guarantees (R1)",
        description:
          "The system never promises approval, viability, prioritization, financing, or successful platform upload.",
      },
      {
        title: "No invention (R2)",
        description:
          "Missing information is marked vacio or supuesto — never fabricated costs, indicators, or legal requirements.",
      },
      {
        title: "Runner permission boundaries",
        description:
          "sgr-mga-runner cannot read knowledge/ or edit skills — impossible to modify canon or system during a case.",
      },
      {
        title: "Phase-gate enforcement",
        description:
          "Perfil and Prefactibilidad requirements cannot be mixed; later-phase items marked requerido_en_fase_subsiguiente.",
      },
      {
        title: "Human gates at critical points",
        description:
          "Canon closure, architecture approval, pilot selection, and critical findings require explicit human decisions.",
      },
    ],
    screenshots: {
      desktop: [HERO_IMAGE, HERO_IMAGE],
      tablet: [HERO_IMAGE],
      mobile: [HERO_IMAGE],
    },
    results: {
      eyebrow: "Impact",
      headline: "Real territorial cases. Defendible artifacts. Honest gaps.",
      subheadline:
        "Success is measured by what planning teams and reviewers can use — ordered pre-investment structure, traceable assumptions, and early detection of methodological weakness before a project reaches a viability instance.",
      impactStory: [
        {
          label: "Territorial reality",
          body: "Municipalities with reprioritized needs and political pressure to secure regalías — but without the formulation capacity to structure a defendible SGR/MGA pre-investment case.",
        },
        {
          label: "Engineered response",
          body: "An internal formulation factory: canon-driven pipeline, 25 bounded agents, phase gates, and artifact-first deliverables that allied consultants can continue from.",
        },
        {
          label: "What changes",
          body: "Faster, more traceable formulation with explicit stop conditions — gaps surfaced before presentation, not masked by polished documents that fail review.",
        },
      ],
      supportingLabel: "System at a glance",
      metrics: [
        {
          label: "Formulation phases",
          value: "2",
          description:
            "Perfil (Phase I) and Prefactibilidad (Phase II) with strict gates — the most common real-world failure mode is mixing them.",
        },
        {
          label: "Pipeline steps",
          value: "15",
          description:
            "Deterministic steps 0–14 from preflight triage through maturation plan, each with explicit stop criteria.",
        },
        {
          label: "Configured agents",
          value: "25",
          description:
            "Step executors, parallel internal reviewers, auxiliaries, and external doc scout.",
        },
        {
          label: "Skill contracts",
          value: "15+",
          description:
            "Reusable skills declaring inputs, outputs, limits, and stop conditions.",
        },
        {
          label: "Case artifact folders",
          value: "10",
          description:
            "Structured project/ schema from 00_input through 09_plan plus _logs.",
        },
        {
          label: "Governance rules",
          value: "8",
          description:
            "Non-negotiable invariants (R1–R8): no guarantees, no invention, canon first, bounded scope, traceability.",
        },
      ],
      proofChallenge: {
        challenge: "Generic AI makes municipalities look ready when they are not",
        problem:
          "Document generators produce polished municipal profiles that fail SGR/MGA causal logic, catalog requirements, and phase discipline — wasting months before a viability review rejects them.",
        decision:
          "Build a canon-driven methodology engine with provenance states, phase gates, and mandatory gap reporting instead of open-ended generation.",
        result:
          "The system reframes AI from a writer into a formulation discipline — producing artifacts planning secretariats can audit and gaps reviewers can act on before resources are spent.",
      },
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Proven",
          description: "What held up on real territorial work.",
          items: [
            "Canon before automation — SGR/MGA rules normalized in knowledge/ before any skill scales.",
            "Profile is not feasibility — stopping phase mixing is more valuable than generating more pages.",
            "No invention builds trust: vacio and no_verificado_en_canon are signals, not failures.",
          ],
        },
        {
          title: "Evolving",
          description: "What the next iteration targets.",
          items: [
            "Migrate orchestration to LangGraph once pilot repeatability is established across sectors.",
            "Expand canon coverage for additional funding sources and sectoral depth.",
            "Add RAG when knowledge/ exceeds practical context windows without losing traceability.",
          ],
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "The pipeline is the product — 15 explicit steps beat one omniscient agent on regulated methodology.",
            "Skills substitute for orchestration nodes in early operation — the flow is the architecture.",
            "Defer ML approval predictors — drafting quality and gap honesty matter more than scoring submissions you cannot yet write.",
          ],
        },
      ],
    },
    techStack: [
      { name: "SGR / MGA Methodology" },
      { name: "Agent Skills" },
      { name: "Markdown + Git" },
      { name: "OpenCode" },
      { name: "LangGraph" },
      { name: "Commercial LLMs" },
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Want to see how territorial formulation can be engineered?",
      subheadline:
        "The implementation lives in a private repository used in active consultancy work. Reach out to walk through the pipeline design, governance model, or how artifact-first agents differ from document generators.",
      githubLabel: "Repository",
      demoLabel: "Live Demo",
      contactLabel: "Contact Me",
      contactHref: "/#contact",
    },
    relatedProjects: ["legal-copilot", "clinic-hc"],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies.",
    },
  },
};
