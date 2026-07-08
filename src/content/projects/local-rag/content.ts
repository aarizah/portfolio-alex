import type { CaseStudy } from "../types";

const HERO_IMAGE = "/projects/local-rag/hero.png";

export const localRag: CaseStudy = {
  meta: {
    slug: "local-rag",
    title: "Local RAG Engine — Offline PDF Knowledge Copilot",
    tagline:
      "A local-first knowledge copilot for sensitive PDFs — cited answers from contracts, policies, and manuals without sending document content to cloud APIs.",
    status: "Research",
    ogImage: HERO_IMAGE,
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: who needs on-machine document Q&A, the business risk of cloud RAG on sensitive PDFs, product outcomes (citations, dedup, measurable pipeline), and how it complements the cloud Knowledge Copilot.",
    },
  },
  sections: {
    hero: {
      tagline:
        "For teams that cannot upload contracts and policy PDFs to a cloud LLM — natural-language Q&A with verifiable citations, entirely on the machine that holds the documents.",
      status: "Research",
      stack: ["FastAPI", "ChromaDB", "SQLite FTS5", "llama.cpp", "React", "Docling"],
      backgroundImage: HERO_IMAGE,
      github: "https://github.com/aarizah/RAG-Local-Desktop-APP",
    },
    quickOverview: {
      role: "AI Systems + Full Stack Engineer",
      duration: "3 months",
      status: "Research",
      users: "Open source · local workflows",
      country: "Colombia",
      domain: "Private Document Intelligence / RAG",
      cloud: "Local-first · on-machine",
      tech: "Hybrid RRF · Chroma · FTS5 · llama.cpp · pytest",
    },
    videoDemo: {
      src: "/projects/local-rag/demo.mp4",
      poster: HERO_IMAGE,
      chapters: [
        { time: 0, label: "Upload PDF" },
        { time: 20, label: "Index & library" },
        { time: 45, label: "Ask question" },
        { time: 70, label: "Cited answer" },
      ],
    },
    problem: {
      eyebrow: "Problem",
      headline:
        "Sensitive PDFs need cited answers — but cloud RAG sends your documents and questions to someone else's API.",
      lead:
        "Legal, compliance, and policy teams work from contracts, manuals, and regulatory PDFs that cannot be uploaded to OpenAI or similar services. Keyword search fails on paraphrased questions; vector-only RAG misses exact article numbers and defined terms.",
      supportingParagraphs: [
        "The product challenge is trust and speed: people need answers they can defend in an audit, from documents that legally or contractually cannot leave the building. Keyword search breaks on how people actually ask questions; a generic chatbot cannot cite the manual.",
        "I built this as the on-machine counterpart to my cloud Enterprise Knowledge Copilot — same document Q&A job, different constraint: privacy and data residency come first.",
      ],
      insightLabel: "The privacy gap",
      insightHelper:
        "Cloud convenience vs. on-machine control — many document workflows need the second without giving up citations.",
      bridgeBefore: "See the constraint",
      bridgeAfter: "Then see the local engine",
      illustration: HERO_IMAGE,
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline:
        "Turn sensitive PDF libraries into a searchable, cited knowledge layer — on the machine that already holds them.",
      subheadline:
        "Upload policy and contract PDFs, ask in natural language, and get answers tied to page-level evidence. Ingestion is duplicate-safe; every response shows which chunks supported it.",
      capabilitiesLabel: "What the product delivers",
      cards: [
        {
          title: "Auditable answers",
          description:
            "Every response includes citations to source chunks — document, section, and page — so compliance and legal teams can verify claims.",
        },
        {
          title: "Finds the right section",
          description:
            "Hybrid search combines meaning and exact terms, so paraphrased questions and precise references (article numbers, defined terms) both reach the right evidence.",
        },
        {
          title: "Safe to re-upload",
          description:
            "Content-hash deduplication stops the index from filling with duplicate PDFs — important when teams share the same manual across folders.",
        },
        {
          title: "Honest when unsure",
          description:
            "When the corpus does not contain an answer, the system says so instead of inventing policy — critical for HR, legal, and compliance workflows.",
        },
        {
          title: "Stays on your infrastructure",
          description:
            "PDFs, indexes, and inference run locally. No default path sends document content to a hosted LLM or embedding API.",
        },
        {
          title: "Built to improve over time",
          description:
            "Stage-level timings, golden-set evaluation, and automated tests make retrieval quality something you can regress — not guess after each change.",
        },
      ],
    },
    featureWalkthrough: {
      items: [
        {
          id: "upload",
          label: "Upload",
          screenshot: HERO_IMAGE,
          explanation:
            "Drop a PDF in the React UI. The backend hashes content, rejects duplicates with HTTP 409, and parses structure with Docling.",
        },
        {
          id: "index",
          label: "Index",
          screenshot: HERO_IMAGE,
          explanation:
            "Chunks embed locally into Chroma; headings and text land in SQLite FTS5. The document library shows indexed files with metadata.",
        },
        {
          id: "ask",
          label: "Ask",
          screenshot: HERO_IMAGE,
          explanation:
            "A natural-language question triggers hybrid retrieval — vector + lexical fusion with Spanish stopword filtering and heading boost.",
        },
        {
          id: "cite",
          label: "Cite",
          screenshot: HERO_IMAGE,
          explanation:
            "llama.cpp generates from selected chunks only. The UI shows the answer with document/chunk citations you can verify.",
        },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      headline: "How the local RAG engine is built.",
      subheadline:
        "Hexagonal service boundaries, dual stores, versioned API contracts, and instrumentation on every query path.",
      defaultTab: "c4",
      systemOverview: {
        title: "System Overview",
        description:
          "React UI talks to FastAPI. Ingestion writes to Chroma + FTS5. Queries flow through hybrid retrieval, reranking, and local generation — with citations mapped to chunk refs.",
        nodes: [
          {
            id: "ui",
            label: "React UI",
            description: "Upload, document library, query panel, citation display.",
            technologies: ["React", "Vite", "shadcn"],
          },
          {
            id: "api",
            label: "FastAPI",
            description: "Versioned /v1 endpoints, Pydantic contracts, static SPA serve.",
            technologies: ["FastAPI", "Python"],
          },
          {
            id: "ingest",
            label: "Ingestion",
            description: "Docling parse, chunk, hash dedup, dual-store write.",
            technologies: ["Docling"],
          },
          {
            id: "chroma",
            label: "ChromaDB",
            description: "Persistent vector store for semantic search.",
            technologies: ["Chroma"],
          },
          {
            id: "fts",
            label: "SQLite FTS5",
            description: "Lexical index for exact-term recall and headings.",
            technologies: ["SQLite"],
          },
          {
            id: "llm",
            label: "llama.cpp",
            description: "Local GGUF generation with citation context.",
            technologies: ["llama.cpp"],
          },
        ],
        tableColumns: { layer: "Layer", role: "Role", stack: "Stack" },
        technologies: ["FastAPI", "ChromaDB", "SQLite FTS5", "llama.cpp", "Docling", "React"],
      },
      c4Model: {
        title: "RAG Pipeline",
        description:
          "Ingestion path into dual stores; query path through hybrid RRF retrieval, rerank, and local generation with observability.",
        src: "/projects/local-rag/rag-pipeline.svg",
        alt: "Local RAG pipeline diagram with hybrid retrieval and on-machine generation",
      },
      security: {
        title: "Governance",
        description:
          "Local trust boundary — path safety, deduplication, and log hygiene instead of multi-tenant auth.",
        items: [
          {
            id: "local-only",
            label: "On-machine inference",
            description:
              "Document bytes and query context stay local. No cloud LLM or embedding API calls in the default path.",
            technologies: ["llama.cpp", "MiniLM"],
          },
          {
            id: "path-safety",
            label: "Path traversal guards",
            description:
              "Ingest paths resolved under s3_dir with resolve() checks — relative paths only.",
            technologies: ["Path validation"],
          },
          {
            id: "dedup",
            label: "Content-hash dedup",
            description:
              "SHA-256 document IDs; duplicate uploads return 409 Conflict with stable error codes.",
            technologies: ["DuplicateDocumentError"],
          },
          {
            id: "pii-logs",
            label: "PII-aware logging",
            description:
              "Query text redacted in structured logs; correlation IDs for debug without exposing full prompts.",
            technologies: ["structlog"],
          },
        ],
      },
      coreWorkflows: {
        title: "Core Workflows",
        description: "The two loops: ingest a PDF and answer a question.",
        workflows: [
          {
            id: "ingest",
            label: "Ingestion Flow",
            description: "",
            steps: [
              {
                id: "receive",
                label: "Receive PDF",
                description: "Upload via UI or POST /v1/ingest from local folder.",
              },
              {
                id: "parse",
                label: "Parse & chunk",
                description: "Docling structure extraction; chunk IDs with page and heading metadata.",
              },
              {
                id: "dedup",
                label: "Dedup & embed",
                description: "SHA-256 check against documents table; local embeddings batch.",
              },
              {
                id: "index",
                label: "Dual index",
                description: "Vectors to Chroma; text + headings to FTS5; metadata to SQLite.",
              },
            ],
          },
          {
            id: "query",
            label: "Query Flow",
            description: "",
            steps: [
              {
                id: "retrieve",
                label: "Hybrid retrieve",
                description: "Parallel Chroma + FTS5 → RRF fusion with heading boost.",
              },
              {
                id: "rerank",
                label: "Rerank & select",
                description: "Cross-encoder or score-based MMR → final_k chunks.",
              },
              {
                id: "generate",
                label: "Generate",
                description: "llama.cpp with truncated evidence context per chunk.",
              },
              {
                id: "respond",
                label: "Respond",
                description: "Answer + citations + retrieved_chunks + correlation_id + timings.",
              },
            ],
          },
        ],
      },
      dataModel: {
        title: "Storage Model",
        description:
          "document_id (content hash) links Chroma vectors, FTS5 rows, and SQLite documents table. Chunk UID = document_id:chunk_id.",
        alt: "Dual-store schema for Local RAG — Chroma vectors and SQLite FTS5 lexical index",
      },
      deployment: {
        title: "Runtime",
        description:
          "Local-first web application — FastAPI on localhost:8000, React dev server or built SPA served from FastAPI. Runtime data in gitignored core/data/ and core/s3/. Desktop packaging (Electron/Tauri) is a planned evolution, not the current deliverable.",
        hosting: "Localhost · on-machine",
        environments: [
          {
            label: "Development",
            services: [
              { name: "API", tech: "uvicorn · port 8000" },
              { name: "UI", tech: "Vite · port 5173" },
              { name: "Vector store", tech: "Chroma persistent" },
              { name: "Lexical store", tech: "SQLite FTS5" },
              { name: "LLM", tech: "llama.cpp GGUF" },
            ],
          },
          {
            label: "Packaging path",
            heading: "Planned",
            services: [
              { name: "Desktop shell", tech: "Electron / Tauri" },
              { name: "Bundled runtime", tech: "Single-install local app" },
              { name: "Model manager", tech: "Download + verify GGUF" },
            ],
          },
        ],
      },
    },
    aiPipeline: {
      blocks: [
        {
          id: "parse",
          label: "Docling parse",
          content:
            "PDF → structured text with headings and page markers. Chunks inherit section context for retrieval and citations.",
        },
        {
          id: "embed",
          label: "Local embeddings",
          content:
            "sentence-transformers MiniLM on-machine. No embedding API calls.",
        },
        {
          id: "semantic",
          label: "Vector search",
          content:
            "Chroma cosine similarity with optional semantic threshold filter.",
        },
        {
          id: "lexical",
          label: "Lexical search",
          content:
            "SQLite FTS5 with unicode61 tokenizer — body text and section headings.",
        },
        {
          id: "fuse",
          label: "RRF fusion",
          content:
            "Reciprocal Rank Fusion merges rankings; heading boost rewards section-title matches.",
        },
        {
          id: "generate",
          label: "Local LLM",
          content:
            "llama.cpp generates from final_k chunks only — citations mapped to chunk refs.",
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
          id: "hybrid-rrf",
          title: "Hybrid RRF instead of vector-only retrieval",
          why: "Regulatory and legal PDFs need exact-term recall alongside semantic paraphrase matching. RRF lets both channels reinforce without hand-tuned weights.",
          tradeoffs:
            "Two indexes to maintain and fusion parameters to tune (rrf_k, semantic threshold).",
          alternatives: "Vector-only pgvector/Chroma search or BM25-only lexical.",
          rejected:
            "Vector-only missed catalog codes and article references; lexical-only missed paraphrased policy questions.",
        },
        {
          id: "heading-boost",
          title: "Heading boost + FTS headings index",
          why: "Users often ask about named sections. Boosting chunks whose headings match query tokens and indexing headings in FTS5 improved precision on structured manuals.",
          tradeoffs: "Spanish stopword list must be maintained; boost factor is heuristic.",
          alternatives: "Body-text-only indexing or metadata filters without fusion boost.",
          rejected:
            "Section-aware questions under-ranked when only chunk body text was searchable.",
        },
        {
          id: "local-llm",
          title: "llama.cpp local generation",
          why: "Core value prop is privacy — document content cannot be sent to cloud inference APIs.",
          tradeoffs: "User supplies GGUF model; quality and speed depend on local hardware.",
          alternatives: "OpenAI, Anthropic, or local API proxy to cloud.",
          rejected:
            "Cloud APIs contradict the trust boundary this project exists to serve.",
        },
        {
          id: "hexagonal",
          title: "Hexagonal ports for stores and chunking",
          why: "Ingestion and retrieval rules need fast unit tests without loading Docling, Chroma, or GPU models on every run.",
          tradeoffs: "More modules than a single-script prototype.",
          alternatives: "Monolithic handlers or tightly coupled framework pipelines.",
          rejected:
            "Monolithic handlers made dedup, path safety, and batch atomicity impossible to test in isolation.",
        },
        {
          id: "golden-eval",
          title: "Golden-set eval harness",
          why: "Retrieval tuning needs regression signal. golden_set.jsonl + e2e_eval_runner.py make ranking changes measurable.",
          tradeoffs: "Golden questions must be curated as the corpus grows.",
          alternatives: "Manual spot checks only or production A/B without offline set.",
          rejected:
            "Subjective testing did not catch RRF regressions when fusion logic changed.",
        },
        {
          id: "complement-eka",
          title: "Separate repo from cloud Knowledge Copilot",
          why: "Different deployment model, stack, and evaluation focus. Keeping them separate avoids conflating privacy engineering with SaaS product features.",
          tradeoffs: "Two RAG case studies in portfolio — must position clearly as cloud vs local.",
          alternatives: "Single monorepo with feature flags or only cloud RAG in portfolio.",
          rejected:
            "Merging would blur the privacy story and hide the hybrid retrieval depth that EKA deferred to a later iteration.",
        },
      ],
    },
    security: [
      {
        title: "On-machine data boundary",
        description:
          "PDFs, embeddings, indexes, and generation context stay on local disk — no default cloud egress.",
      },
      {
        title: "Path traversal protection",
        description:
          "Ingest source paths must be relative to s3_dir and resolve inside the allowed directory.",
      },
      {
        title: "Deterministic deduplication",
        description:
          "Content-hash IDs prevent duplicate index pollution; API returns explicit 409 Conflict.",
      },
      {
        title: "Structured error contracts",
        description:
          "ErrorCode enum and ApiErrorV1 give clients predictable failure modes — not opaque 500s.",
      },
      {
        title: "Log redaction",
        description:
          "Query text passed through PII redaction before structured logging.",
      },
    ],
    screenshots: {
      desktop: [HERO_IMAGE, HERO_IMAGE],
      tablet: [HERO_IMAGE],
      mobile: [HERO_IMAGE],
    },
    results: {
      eyebrow: "Impact",
      headline: "Faster policy answers without trading away data control.",
      subheadline:
        "The outcome that matters: teams working from sensitive PDFs can ask questions in plain language, trust the citations, and keep documents on infrastructure they control.",
      impactStory: [
        {
          label: "Who it serves",
          body: "Legal, compliance, HR, and operations teams with contracts, manuals, and regulatory PDFs that cannot go to a cloud AI vendor.",
        },
        {
          label: "What changes",
          body: "An 80-page policy manual becomes queryable in minutes — with section-level citations — instead of manual search or risky upload to ChatGPT.",
        },
        {
          label: "Why it exists",
          body: "Pairs with the cloud Knowledge Copilot in the portfolio: same knowledge-worker problem, different constraint when data residency and auditability require an on-machine path.",
        },
      ],
      supportingLabel: "Supporting signals",
      metrics: [
        {
          label: "Illustrative lookup time",
          value: "Minutes, not hours",
          description:
            "Cited answer from a full policy manual without reading cover to cover — representative workflow after indexing.",
        },
        {
          label: "Data residency",
          value: "On-machine",
          description:
            "PDFs, indexes, and default inference stay on the user's machine — no document egress to a hosted LLM in the standard path.",
        },
        {
          label: "Search waste benchmark",
          value: "1.8 h/day",
          description:
            "McKinsey's estimate for time knowledge workers spend searching or gathering internal information — the job this product targets.",
        },
        {
          label: "Answer traceability",
          value: "Cited by default",
          description:
            "Responses include source chunks and references so reviewers can verify claims — not a black-box summary.",
        },
        {
          label: "Duplicate-safe ingestion",
          value: "Hash-based",
          description:
            "Same PDF uploaded twice does not pollute the library — explicit conflict instead of silent duplicates.",
        },
        {
          label: "Quality guardrails",
          value: "12+ tests",
          description:
            "Automated regression coverage for ingestion, contracts, retrieval, and golden-set evaluation.",
        },
      ],
      proofChallenge: {
        challenge: "Sensitive PDFs cannot use cloud RAG",
        problem:
          "Teams need cited answers from contracts and policy documents but cannot send content to external inference APIs.",
        decision:
          "Ship a full on-machine knowledge copilot: ingest, hybrid retrieval, citation-backed answers, and measurable quality — under a local trust boundary.",
        result:
          "A product-shaped local engine that complements the cloud Knowledge Copilot when privacy and residency are non-negotiable.",
      },
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Proven",
          description: "What held up in implementation and tuning.",
          items: [
            "Hybrid RRF beat vector-only on manuals with exact terminology and named sections.",
            "Heading boost and FTS heading index were cheap precision wins after the Jul 2026 retrieval pass.",
            "Hexagonal ports made ingestion dedup and path-safety tests fast without real PDF parsers.",
          ],
        },
        {
          title: "Evolving",
          description: "What the next iteration targets.",
          items: [
            "Desktop packaging with Electron or Tauri for single-install distribution.",
            "Larger golden set and retrieval profiles per document type.",
            "Multi-user ACL when moving beyond single-machine scope.",
          ],
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "RAG quality is mostly retrieval — citations and trust matter more than model branding.",
            "Cloud EKA and Local RAG are complementary when the trust boundary is explicit to buyers and hiring managers.",
            "Golden-set eval pays for itself the first time ranking logic changes.",
          ],
        },
      ],
    },
    techStack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "ChromaDB" },
      { name: "SQLite FTS5" },
      { name: "llama.cpp" },
      { name: "Docling" },
      { name: "React" },
      { name: "pytest" },
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Need on-machine document Q&A with citations?",
      subheadline:
        "Open the repo, run the local stack, or get in touch to discuss how this fits next to a cloud knowledge copilot in your organization.",
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
