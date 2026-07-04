import type { CaseStudy } from "./types";

const img =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

export const legalCopilot: CaseStudy = {
  meta: {
    slug: "legal-copilot",
    title: "AI Internal Knowledge Copilot — RAG Pipeline",
    tagline:
      "Citation-grounded answers from legal and internal documents with a RAG pipeline tuned for relevance.",
    status: "Production",
    ogImage: img,
  },
  sections: {
    hero: {
      tagline:
        "Enterprise RAG that turns scattered PDFs into cited, streaming answers — shipped in 3 weeks.",
      status: "Production",
      stack: ["Next.js", "NestJS", "PostgreSQL", "LangChain", "OpenAI"],
      backgroundImage: img,
      github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant",
      demo: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant#demo",
    },
    quickOverview: {
      role: "Full Stack + AI Engineer",
      duration: "3 weeks",
      status: "Production",
      users: "Internal teams",
      country: "Colombia",
      domain: "Legal / Enterprise",
      cloud: "AWS-ready",
      tech: "Next.js · NestJS · PostgreSQL · LangChain",
    },
    videoDemo: {
      poster: img,
      chapters: [
        { time: 0, label: "Upload & Index" },
        { time: 20, label: "Query" },
        { time: 45, label: "Citations" },
        { time: 75, label: "Streaming" },
      ],
    },
    problem: {
      paragraphs: [
        "Enterprise knowledge lives in dozens of PDFs, outdated wikis, and email threads. Employees spend hours searching for answers that should be instant.",
        "Generic LLMs cannot access proprietary documentation. Teams need grounded, cited responses from their own corpus — not hallucinated guesses.",
      ],
      illustration: img,
    },
    solutionOverview: {
      cards: [
        { title: "PDF Ingestion", description: "Structured Markdown conversion preserving hierarchy and page markers." },
        { title: "Smart Chunking", description: "Two-step strategy: Markdown split + semantic overlap for context." },
        { title: "Vector Retrieval", description: "Embedding search with relevance tuning and metadata filters." },
        { title: "Streaming Answers", description: "GPT-4 responses with inline source citations." },
        { title: "User Isolation", description: "Per-tenant document boundaries and access control." },
        { title: "Analytics", description: "Query logging, retrieval quality metrics, and usage dashboards." },
      ],
    },
    featureWalkthrough: {
      items: [
        {
          id: "upload",
          label: "Upload",
          screenshot: img,
          explanation: "Drag-and-drop PDF upload with automatic structure extraction and indexing pipeline kickoff.",
        },
        {
          id: "query",
          label: "Query",
          screenshot: img,
          explanation: "Natural language questions with streaming responses and real-time token display.",
        },
        {
          id: "citations",
          label: "Citations",
          screenshot: img,
          explanation: "Every answer links to exact source chunks with page references for verification.",
        },
        {
          id: "admin",
          label: "Admin",
          screenshot: img,
          explanation: "Document management, re-indexing controls, and retrieval quality monitoring.",
        },
      ],
    },
    architecture: {
      layers: [
        {
          id: "frontend",
          label: "Next.js Frontend",
          panel: {
            title: "Next.js Frontend",
            why: "Server components for fast initial load; client islands for streaming chat UI.",
            bullets: ["App Router", "Streaming SSE", "Optimistic UI"],
          },
        },
        {
          id: "api",
          label: "NestJS API",
          panel: {
            title: "NestJS API",
            why: "Modular backend with clear separation: auth, ingestion, retrieval, generation.",
            bullets: ["REST + SSE", "JWT guards", "DTO validation"],
          },
        },
        {
          id: "rag",
          label: "RAG Services",
          panel: {
            title: "RAG Pipeline",
            why: "Dedicated services for chunking, embedding, and retrieval orchestration.",
            bullets: ["LangChain", "OpenAI embeddings", "pgvector"],
          },
        },
        {
          id: "db",
          label: "PostgreSQL",
          panel: {
            title: "PostgreSQL + Prisma",
            why: "ACID transactions for document metadata; vector extension for similarity search.",
            bullets: ["Prisma ORM", "pgvector indexes", "Migrations"],
          },
        },
      ],
    },
    aiPipeline: {
      blocks: [
        { id: "embed", label: "Embedding Model", content: "text-embedding-3-small for document chunks and queries with normalized vectors." },
        { id: "retrieve", label: "Retriever", content: "Top-k similarity search with metadata filters and score thresholding." },
        { id: "rerank", label: "Reranker", content: "Cross-encoder reranking to improve precision on ambiguous queries." },
        { id: "llm", label: "LLM", content: "GPT-4 with structured prompt including retrieved context and citation format." },
        { id: "prompt", label: "Prompt", content: "System prompt enforcing grounded answers, citation format, and no-answer fallback." },
        { id: "citations", label: "Citations", content: "Inline [source:N] markers mapped to chunk metadata and page numbers." },
        { id: "no-answer", label: "No Answer", content: "Explicit refusal when retrieval confidence is below threshold." },
      ],
    },
    engineeringDecisions: [
      {
        id: "pdf-md",
        title: "PDF → Markdown",
        why: "Preserves document hierarchy for better chunking and citation context.",
        tradeoffs: "Complexity in conversion; fails on scanned PDFs.",
        alternatives: "Plain text extraction, OCR pipelines.",
        rejected: "Plain text loses structure; OCR adds latency and cost for 80% of docs.",
      },
      {
        id: "pgvector",
        title: "PostgreSQL + pgvector",
        why: "Single database for relational data and vectors — simpler ops.",
        tradeoffs: "Less specialized than dedicated vector DBs at extreme scale.",
        alternatives: "Pinecone, Weaviate, Qdrant.",
        rejected: "Added infrastructure for MVP scope; pgvector sufficient for corpus size.",
      },
      {
        id: "streaming",
        title: "SSE Streaming",
        why: "Perceived latency drops dramatically with token-by-token delivery.",
        tradeoffs: "More complex error handling than request/response.",
        alternatives: "WebSockets, polling.",
        rejected: "SSE is simpler for unidirectional LLM output.",
      },
    ],
    security: [
      { title: "JWT Auth", description: "Token-based authentication with refresh rotation." },
      { title: "Tenant Isolation", description: "Documents scoped per organization; no cross-tenant leakage." },
      { title: "Input Validation", description: "DTO validation on all API endpoints via class-validator." },
      { title: "Audit Logs", description: "Query and document access logging for compliance." },
    ],
    screenshots: {
      desktop: [img, img],
      tablet: [img],
      mobile: [img],
    },
    challenges: [
      {
        challenge: "Chunk quality",
        problem: "Naive splitting broke semantic context across sections.",
        decision: "Two-step: Markdown-aware split + overlap windows.",
        result: "95% retrieval relevance in internal evals.",
      },
      {
        challenge: "Citation accuracy",
        problem: "LLM cited wrong pages or invented sources.",
        decision: "Structured citation format with chunk ID enforcement.",
        result: "Verifiable sources on every grounded answer.",
      },
    ],
    results: [
      { label: "MVP Delivery", value: "3 weeks" },
      { label: "Retrieval Quality", value: "95%" },
      { label: "Response Time", value: "80% faster" },
      { label: "Stack", value: "Production-ready" },
    ],
    lessonsLearned: {
      wentWell: [
        "Markdown conversion dramatically improved chunk quality.",
        "Streaming UX made the product feel production-grade early.",
      ],
      wouldImprove: [
        "Add OCR pipeline for scanned document edge cases.",
        "Implement A/B testing on chunk size parameters.",
      ],
      learned: [
        "RAG quality is 80% ingestion, 20% prompting.",
        "Citation format must be enforced at the prompt level.",
      ],
    },
    techStack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "LangChain" },
      { name: "OpenAI" },
    ],
    cta: {
      github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant",
      demo: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant#demo",
      contactHref: "/#contact",
    },
    relatedProjects: ["caloric-estimator", "chatterbox"],
  },
};
