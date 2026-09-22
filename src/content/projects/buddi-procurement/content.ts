import type { CaseStudy } from "../types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";

export const buddiProcurement: CaseStudy = {
  meta: {
    slug: "buddi-procurement",
    title: "Buddi Procurement Intelligence — Multi-Source Purchasing Layer",
    tagline:
      "An internal AWS serverless platform that consolidates supplier orders, ingests invoices with human confirmation, and answers operational plus policy questions without replacing the tools that already work.",
    status: "Internal",
    ogImage: HERO_IMAGE,
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: why purchasing data is fragmented across supplier portals and phone deals, integrate-before-rebuild adapters, document intelligence with deterministic validation, hybrid tool-calling + RAG assistant, and scale-to-zero AWS.",
    },
  },
  sections: {
    hero: {
      tagline:
        "Buddi already buys across supplier platforms, calls, quotes, and invoices. This layer unifies that operational picture, automates the repetitive capture, and lets staff query both live orders and internal documentation.",
      status: "Internal",
      stack: ["Next.js", "FastAPI", "Aurora Serverless", "Bedrock", "Lambda", "SQS"],
      backgroundImage: HERO_IMAGE,
    },
    quickOverview: {
      role: "Full Stack · AI · Cloud Engineer",
      duration: "Jun 2025 – Jan 2026",
      status: "Internal",
      users: "Buddi Limited internal operations",
      country: "United Kingdom",
      domain: "Procurement / Operations Intelligence",
      cloud: "AWS serverless · scale-to-zero",
      tech: "FastAPI · Lambda · Aurora · Bedrock · pgvector · EventBridge",
    },
    videoDemo: {
      poster: HERO_IMAGE,
      chapters: [
        { time: 0, label: "Consolidated orders" },
        { time: 20, label: "Invoice drop + review" },
        { time: 45, label: "Manual phone purchase" },
        { time: 70, label: "Hybrid assistant" },
      ],
    },
    problem: {
      eyebrow: "Problem",
      headline:
        "Each supplier platform knows its slice of purchasing. Nobody has the whole operation in one place.",
      lead:
        "Buddi buys through multiple supplier portals, plus phone negotiations, quotes, invoices, and later commercial documents. The individual platforms can work well. They still cannot answer company-wide questions.",
      supportingParagraphs: [
        "Open orders, committed spend, delayed deliveries, last paid price for a SKU, and which deals happened by phone required hopping across systems — or retyping an invoice that already contained the data.",
        "Operational facts and internal procedure lived in different worlds. Staff could see a delayed order in one tool and still had to hunt the policy for incomplete shipments in another. The shipped product is a consolidation and intelligence layer — not a replacement ERP.",
      ],
      insightLabel: "Integrate before rebuild",
      insightHelper:
        "If a supplier portal already shows orders, products, statuses, and quantities, Buddi does not need a clone of that portal. It needs that information inside one defensible picture.",
      bridgeBefore: "See the fragmentation",
      bridgeAfter: "Then see the consolidation layer",
      illustration: HERO_IMAGE,
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline:
        "Four modules over systems Buddi already uses — not another purchasing portal.",
      subheadline:
        "Normalize every order into one model, ingest off-platform purchases from documents, answer questions with tools plus RAG, and run syncs and exports on a schedule even when nobody has the app open.",
      capabilitiesLabel: "What the platform does",
      cards: [
        {
          title: "Operational consolidation",
          description:
            "Adapters pull supplier A, B, and C into a unified order model — original status preserved, normalized status shared — so open spend and delays are visible in one view.",
        },
        {
          title: "Document intelligence",
          description:
            "Invoices, quotes, POs, and packing lists become structured fields after parse → extract → normalize → validate. The original PDF stays in S3 with the confirmed record.",
        },
        {
          title: "Human-in-the-loop persistence",
          description:
            "AI never writes blindly into the operational database. Extraction is reviewed, math is checked in code, then a person confirms before history is updated.",
        },
        {
          title: "Hybrid operations assistant",
          description:
            "Not RAG-only. A query router chooses structured tools, document retrieval, or both — so delayed orders and the incomplete-shipment procedure can land in one answer.",
        },
        {
          title: "Four integration levels",
          description:
            "API first, then CSV/XLSX/JSON exports, then documents, then manual entry. Capability of the supplier — not a single happy-path integration — drives the design.",
        },
        {
          title: "Automation that outlives the browser",
          description:
            "EventBridge schedules syncs and Monday exports. SQS fans out invoice batches. Short jobs run on Lambda; heavy reprocessing uses a Fargate task that starts, works, and stops.",
        },
      ],
    },
    featureWalkthrough: {
      items: [
        {
          id: "consolidate",
          label: "Consolidate",
          screenshot: HERO_IMAGE,
          explanation:
            "Staff see open orders, committed spend, and delays across suppliers — including phone deals that never existed on any vendor portal.",
        },
        {
          id: "ingest",
          label: "Ingest invoice",
          screenshot: HERO_IMAGE,
          explanation:
            "A phone purchase arrives as invoice.pdf. The employee drops the file; the system proposes vendor, SKU, qty, unit price, and total instead of retyping the document.",
        },
        {
          id: "confirm",
          label: "Confirm",
          screenshot: HERO_IMAGE,
          explanation:
            "Deterministic checks flag qty × price mismatches. A human corrects and confirms. Only then does the order join the consolidated history.",
        },
        {
          id: "ask",
          label: "Ask",
          screenshot: HERO_IMAGE,
          explanation:
            "“Which orders are late, and what procedure applies?” hits live data tools plus cited internal documents — or abstains when evidence is missing.",
        },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      headline: "How the purchasing layer is engineered.",
      subheadline:
        "Serverless AWS, supplier adapters, document workers, and a query router that treats structured data and RAG as different tools — not one chatbot over everything.",
      systemOverview: {
        title: "System Overview",
        description:
          "Employees hit a private Next.js app on CloudFront. API Gateway fronts FastAPI on Lambda. Aurora holds the unified order model; S3 holds originals; Bedrock powers extraction and the assistant; EventBridge and SQS keep work moving when the UI is closed.",
        nodes: [
          {
            id: "employees",
            label: "Employees",
            description: "Authenticated internal staff — purchasing, analysts, admins, read-only.",
            technologies: ["Cognito / SSO", "RBAC"],
          },
          {
            id: "web",
            label: "Web app",
            description: "Private SPA/static frontend for consolidated orders, review queues, and the assistant.",
            technologies: ["Next.js", "S3", "CloudFront"],
          },
          {
            id: "api",
            label: "API + FastAPI",
            description: "Familiar HTTP app inside Lambda via Lambda Web Adapter — no event-shape rewrite.",
            technologies: ["API Gateway", "Lambda", "FastAPI"],
          },
          {
            id: "data",
            label: "Aurora + S3",
            description: "Normalized orders, users, events in Postgres; binaries and exports in object storage.",
            technologies: ["Aurora Serverless v2", "pgvector", "S3"],
          },
          {
            id: "workers",
            label: "Async workers",
            description: "Invoice batches and long jobs leave the request path: SQS → Lambda or Fargate.",
            technologies: ["SQS", "Lambda", "ECS Fargate"],
          },
          {
            id: "ai",
            label: "AI service",
            description: "Internal interface over Bedrock for extraction, embeddings, routing, and generation.",
            technologies: ["Bedrock", "Tool calling", "RAG"],
          },
        ],
        tableColumns: { layer: "Layer", role: "Role", stack: "Stack" },
        technologies: [
          "Next.js",
          "FastAPI",
          "Lambda",
          "Aurora",
          "Bedrock",
          "SQS",
          "EventBridge",
          "Fargate",
        ],
      },
      c4Model: {
        title: "AWS Topology",
        description:
          "Interactive app, scheduled supplier sync, document workers, and Fargate for jobs that outlive the 15-minute Lambda ceiling.",
        src: "/projects/buddi-procurement/architecture.svg",
        alt: "Buddi Procurement Intelligence serverless AWS architecture",
      },
      security: {
        title: "Security & governance",
        description:
          "Private app, least privilege, and AI that cannot mutate purchasing reality without a person.",
        items: [
          {
            id: "authz",
            label: "AuthN + RBAC",
            description:
              "Knowing the address is not access. Cognito or corporate SSO, with purchasing / analyst / admin / read-only roles.",
            technologies: ["Cognito", "SSO", "IAM"],
          },
          {
            id: "secrets",
            label: "Secrets out of git",
            description:
              "Supplier tokens and credentials live in Secrets Manager — never hardcoded in the repo.",
            technologies: ["Secrets Manager"],
          },
          {
            id: "hitl",
            label: "Human confirmation",
            description:
              "Extracted invoice fields persist only after review. A 8.70 vs 8.10 misread must not poison price history.",
            technologies: ["Review queue", "Audit events"],
          },
          {
            id: "guardrails",
            label: "Assistant blast radius",
            description:
              "The assistant can query, summarize, and compare. It cannot delete orders, pay, buy, or push POs to suppliers.",
            technologies: ["Tool allowlist"],
          },
        ],
      },
      coreWorkflows: {
        title: "Core Workflows",
        description: "The loops that turn fragmented purchasing into a maintained system of record.",
        workflows: [
          {
            id: "sync",
            label: "Scheduled supplier sync",
            description: "",
            steps: [
              {
                id: "schedule",
                label: "EventBridge",
                description:
                  "Cadence follows how often statuses actually change — not a poll every minute.",
              },
              {
                id: "adapters",
                label: "Per-supplier adapters",
                description:
                  "API, file export, or skip. Failures log, retry, and keep prior data instead of wiping the consolidado.",
              },
              {
                id: "normalize",
                label: "Normalize + upsert",
                description:
                  "External IDs make syncs idempotent. PROCESSING and PREPARING both become IN_PREPARATION without dropping the original status.",
              },
            ],
          },
          {
            id: "invoice",
            label: "Phone purchase with invoice",
            description: "",
            steps: [
              {
                id: "drop",
                label: "Drop PDF",
                description: "Employee uploads invoice.pdf; object lands in S3, job on SQS.",
              },
              {
                id: "parse",
                label: "Parse then LLM",
                description:
                  "Text, tables, and metadata first. The model interprets only when it adds value.",
              },
              {
                id: "validate",
                label: "Deterministic checks",
                description:
                  "qty × unit price is code, not the model. Mismatches surface as warnings in review.",
              },
              {
                id: "confirm",
                label: "Human confirm",
                description:
                  "Confirmed fields, extractor version, and actor are stored next to the original file.",
              },
            ],
          },
          {
            id: "assistant",
            label: "Hybrid assistant",
            description: "",
            steps: [
              {
                id: "route",
                label: "Classify the question",
                description:
                  "Open orders → data tools. Incomplete-goods procedure → RAG. Delayed orders plus procedure → both.",
              },
              {
                id: "tools",
                label: "Controlled tools",
                description:
                  "get_open_orders, get_delayed_orders, get_supplier_spend — never arbitrary SQL from the model.",
              },
              {
                id: "cite",
                label: "Cite or abstain",
                description:
                  "Document answers carry source, section, and page. No evidence → refuse to invent policy.",
              },
            ],
          },
        ],
      },
      dataModel: {
        title: "Unified order model",
        description:
          "Identity (internal/external IDs, source, supplier), commercial lines, original plus normalized status, optional logistics, linked documents, and audit provenance for every write.",
        alt: "Unified consolidated order model for Buddi procurement",
      },
      deployment: {
        title: "Runtime",
        description:
          "Mostly serverless so compute is not billed for empty hours. Aurora can pause at 0 ACU for an internal app that tolerates a resume delay; minimum capacity can rise if daytime usage is constant. Short work on Lambda (up to 15 minutes); mass re-embed or historical import on Fargate tasks that exit when done.",
        hosting: "AWS · serverless · private",
        environments: [
          {
            label: "Interactive path",
            services: [
              { name: "Frontend", tech: "Next.js · S3 · CloudFront" },
              { name: "API", tech: "API Gateway · Lambda Web Adapter · FastAPI" },
              { name: "Database", tech: "Aurora PostgreSQL Serverless v2 · pgvector" },
              { name: "Files", tech: "S3" },
              { name: "AI", tech: "Bedrock behind an internal AI service" },
              { name: "Auth", tech: "Cognito or corporate SSO" },
            ],
          },
          {
            label: "Async & schedule",
            heading: "Work that must not block the UI",
            services: [
              { name: "Scheduler", tech: "EventBridge Scheduler" },
              { name: "Queue", tech: "SQS · Lambda batch workers" },
              { name: "Heavy jobs", tech: "ECS Fargate tasks" },
              { name: "Secrets", tech: "Secrets Manager" },
              { name: "Observability", tech: "CloudWatch" },
              { name: "Delivery", tech: "Docker · ECR · GitHub Actions · IaC" },
            ],
          },
        ],
      },
    },
    aiPipeline: {
      blocks: [
        {
          id: "store",
          label: "Store original",
          content:
            "The PDF is kept in S3 independently of extracted fields — metadata in Postgres points at the object key.",
        },
        {
          id: "type",
          label: "Identify type",
          content:
            "Invoice, quote, PO, packing list, or internal document — routing decides parse strategy.",
        },
        {
          id: "parse",
          label: "Traditional parse first",
          content:
            "Text, tables, and structure before any LLM call — lower cost, latency, and model lock-in.",
        },
        {
          id: "extract",
          label: "Schema extraction",
          content:
            "Bedrock fills a typed schema when interpretation is needed; numbers still face code-side checks.",
        },
        {
          id: "human",
          label: "Human review",
          content:
            "Staff confirm or correct. Confirmed data, extractor version, and actor become the audit trail.",
        },
        {
          id: "route",
          label: "Query router",
          content:
            "Questions hit data tools, RAG with citations, or both — retrieved docs are data, never system instructions.",
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
          id: "integrate-first",
          title: "Integrate before rebuild",
          why: "Supplier portals already expose orders, products, statuses, and quantities. Cloning them would burn the six-month window on features the company already has, which is the main product risk — not picking the wrong AWS service.",
          tradeoffs:
            "The platform is only as complete as the adapters and the off-platform capture path. Month 1 mapped the real APIs and exports.",
          alternatives: "Build an in-house purchasing ERP / clone of supplier UIs.",
          rejected:
            "If the vendor platform already does it, it is not built. The spine is consolidation, the leftover processes, automation, and a query layer over the whole operation.",
        },
        {
          id: "serverless",
          title: "Serverless / scale-to-zero instead of always-on EC2",
          why: "Internal usage has long idle stretches. Paying for a box that waits all night is optional. Lambda, EventBridge, SQS, and Fargate-on-demand map cost to real work.",
          tradeoffs:
            "Cold starts — especially if Aurora pauses at 0 ACU. First request after idle can be slower; minimum ACU can be raised if the workday is continuous.",
          alternatives: "EC2 24/7 or Kubernetes from day one.",
          rejected:
            "EC2 bills idle hours. Kubernetes adds cluster, networking, and ops cost without a user-scale problem that needs it.",
        },
        {
          id: "fastapi-lambda",
          title: "Keep FastAPI inside Lambda via Web Adapter",
          why: "The team can ship a normal HTTP app in Docker instead of rewriting every handler around Lambda’s event shape. AWS documents this pattern for HTTP frameworks in containers.",
          tradeoffs: "Adapter and container packaging to understand; not a pure Lambda-native design.",
          alternatives: "Mangum-style event adapters, API Gateway mapping templates, or a long-running container service.",
          rejected:
            "Abandoning FastAPI to “be serverless” would slow delivery without changing the product.",
        },
        {
          id: "parse-before-llm",
          title: "Traditional parsing before the language model",
          why: "Not every PDF needs a model. Extract text, tables, and metadata first; call Bedrock when interpretation actually helps. Math such as qty × price stays in code.",
          tradeoffs: "Two-stage pipeline and a review UI instead of “PDF in, row out.”",
          alternatives: "Send every document straight to an LLM and trust the JSON.",
          rejected:
            "A 8.70 vs 8.10 misread would contaminate price history. The model interprets; software validates; a human confirms.",
        },
        {
          id: "tools-not-sql",
          title: "Controlled tools instead of arbitrary SQL",
          why: "The assistant chooses get_delayed_orders() or get_supplier_spend() — the backend decides what those tools may return. That is testable, permissioned, and observable.",
          tradeoffs: "New operational questions may need a new tool instead of a freeform query.",
          alternatives: "Text-to-SQL with the schema in context, or RAG over a dump of every order.",
          rejected:
            "Unrestricted SQL from a model is a security and correctness hole. Semantic search is the wrong tool for “how many orders are open.”",
        },
        {
          id: "pgvector-first",
          title: "pgvector in Aurora before a specialist vector database",
          why: "V1 did not add a specialist vector database for a corpus that was still small. Operational data, metadata, and embeddings live in one Postgres ecosystem until retrieval scale actually hurts.",
          tradeoffs: "May outgrow pgvector if the corpus or latency profile demands it later.",
          alternatives: "Dedicated vector DB from day one.",
          rejected:
            "Another moving part before there is evidence it is needed. Swap when corpus size, features, or latency force the issue.",
        },
      ],
    },
    security: [
      {
        title: "Private application",
        description:
          "The hostname is not the access control. Authenticated users only; HTTPS; env isolation for dev/staging/prod.",
      },
      {
        title: "Least privilege IAM",
        description:
          "Each service gets the S3, secrets, and invoke permissions it needs — not a shared god role.",
      },
      {
        title: "Documents are data, not instructions",
        description:
          "Retrieved policies are never privileged system prompts. Prompt-injection text inside a PDF cannot authorize new tools.",
      },
      {
        title: "No-evidence abstention",
        description:
          "If return policy for supplier ABC is not in the corpus, the assistant says it does not know — it does not invent a plausible policy.",
      },
      {
        title: "Functional audit trail",
        description:
          "Invoice uploaded, extraction finished, price corrected, invoice confirmed — business events, not only CloudWatch lines.",
      },
    ],
    screenshots: {
      desktop: [HERO_IMAGE, HERO_IMAGE],
      tablet: [HERO_IMAGE],
      mobile: [HERO_IMAGE],
    },
    results: {
      eyebrow: "Impact",
      headline: "One operational picture. Less retyping. Answers that cite evidence.",
      subheadline:
        "The platform is in internal use. Staff work from one operational picture: invoice review instead of retyping, a Monday consolidado that writes itself, and supplier-spend questions that no longer require three portals.",
      impactStory: [
        {
          label: "Operational reality",
          body: "Purchasing was split across supplier A/B/C portals plus phone deals that never appeared in those systems. Documents already held the missing fields; people retyped them anyway.",
        },
        {
          label: "Engineered response",
          body: "Adapters, a unified order model, document intelligence with human confirmation, and a hybrid assistant that uses data tools and RAG. Scheduled syncs update the picture at 02:00 without anyone opening the app.",
        },
        {
          label: "In daily use",
          body: "An employee opens the internal app, sees open orders, delayed ops, and committed spend, filters by supplier, drops an invoice instead of digitizing it, and asks both “what is late?” and “what procedure applies?”",
        },
      ],
      supportingLabel: "What shipped",
      metrics: [
        {
          label: "Product modules",
          value: "4",
          description:
            "Consolidation, document intelligence, hybrid assistant, and the automation engine that runs without a browser session.",
        },
        {
          label: "Integration levels",
          value: "4",
          description:
            "API, structured export, documents, then manual — so a supplier without an API is not a blocker.",
        },
        {
          label: "V1 capabilities",
          value: "16",
          description:
            "From multi-source orders through human confirmation, hybrid Q&A, scheduled export, RBAC, and AWS production deploy.",
        },
        {
          label: "Invoice capture",
          value: "5m → 30s",
          description:
            "The operational shift the product was built around: retyping an invoice versus reviewing an extraction. These before/after figures are the value criterion, not a measured KPI report.",
        },
        {
          label: "Weekly consolidado",
          value: "2h → auto",
          description:
            "The Monday EventBridge job writes XLSX to S3 instead of a two-hour manual merge.",
        },
        {
          label: "Delivery window",
          value: "6 mo",
          description:
            "Shipped across six months: discovery and core, adapters, documents, RAG, operational assistant, then automation and production.",
        },
      ],
      proofChallenge: {
        challenge: "AI that duplicates what supplier portals already do",
        problem:
          "The dangerous failure is not a wrong Lambda timeout. It is shipping screens the vendor platform already provides, while phone purchases and cross-supplier questions stay unsolved.",
        decision:
          "Month-1 discovery mapped how Buddi actually buys. Every feature had to remove a current pain. If the supplier platform already did it, it was not built. Left out of the delivered version: ERP, accounting, full inventory, forecasting, autonomous buying, payments, CRM.",
        result:
          "The six-month delivery is a consolidation, document, data, AI, automation, and cloud layer in internal use — not a RAG demo and not a generic CRUD app.",
      },
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Design constraints",
          description: "Constraints the delivered product keeps.",
          items: [
            "Integrate before rebuild — the product risk is cloning working supplier tools.",
            "Human confirmation on extracted commercial numbers is cheaper than a polluted price history.",
            "The assistant is a router over tools and evidence, not a chatbot with a vector index glued on.",
          ],
        },
        {
          title: "Eval before “it seems to work”",
          description: "How production AI on this platform is judged.",
          items: [
            "Document parsing is scored on a labeled invoice set — vendor, number, currency, qty, price, total.",
            "RAG is scored on a golden Q&A set: retrieval, answer, citation, and correct abstention.",
            "End-to-end covers drop invoice → confirm → order appears → assistant can query it → export contains it.",
          ],
        },
        {
          title: "Cloud judgment",
          description: "What this architecture is for — and not for.",
          items: [
            "Scale-to-zero fits internal idle time; raise Aurora minimum ACU if the workday is always hot.",
            "Skip Kubernetes until there is a problem it uniquely solves.",
            "AWS is the managed set of Lambda, Aurora, Bedrock, SQS, EventBridge, Fargate — not a brand requirement in the abstract.",
          ],
        },
      ],
    },
    techStack: [
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "Aurora PostgreSQL" },
      { name: "pgvector" },
      { name: "Amazon Bedrock" },
      { name: "AWS Lambda" },
      { name: "Amazon SQS" },
      { name: "EventBridge" },
      { name: "ECS Fargate" },
      { name: "Amazon S3" },
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Want to walk through a procurement intelligence layer?",
      subheadline:
        "This is Buddi’s internal platform, built and in use. Reach out to discuss adapter design, document-intelligence eval, hybrid assistants, or serverless AWS for operational tools.",
      githubLabel: "Repository",
      demoLabel: "Live Demo",
      contactLabel: "Contact Me",
      contactHref: "/#contact",
    },
    relatedProjects: ["legal-copilot", "local-rag"],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies.",
    },
  },
};
