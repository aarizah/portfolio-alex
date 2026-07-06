import type { CaseStudy } from "../types";

export const legalCopilot: CaseStudy = {
  meta: {
    slug: "legal-copilot",
    title: "AI Internal Knowledge Copilot - Enterprise RAG System",
    tagline: "A production-grade RAG assistant that turns internal PDFs into cited, streaming answers.",
    status: "Production",
    ogImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: product problem, business impact, architecture, decisions, and lessons.",
    },
  },
  sections: {
    hero: {
      tagline: "Enterprise RAG that turns scattered PDFs, wikis, and internal documentation into grounded answers with source citations.",
      status: "Production",
      stack: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "VoyageAI",
        "OpenAI"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant",
      demo: "https://eka-ten.vercel.app/home"
    },
    quickOverview: {
      role: "Full Stack + AI Engineer",
      duration: "4 weeks",
      status: "Production",
      users: "Knowledge workers",
      country: "Colombia",
      domain: "Enterprise Knowledge / Legal Ops",
      cloud: "Docker-ready",
      tech: "Next.js - FastAPI - PostgreSQL - pgvector - VoyageAI - OpenAI"
    },
    videoDemo: {
      src: "/projects/legal-copilot/demo.mp4",
      poster: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      chapters: [
        {
          time: 0,
          label: "Upload & Index"
        },
        {
          time: 20,
          label: "Ask a question"
        },
        {
          time: 45,
          label: "Retrieve context"
        },
        {
          time: 75,
          label: "Stream cited answer"
        }
      ]
    },
    problem: {
      eyebrow: "Problem",
      headline: "Internal knowledge is valuable, but most teams still lose it across PDFs, wikis, drives, and threads.",
      lead: "Knowledge workers need answers from internal documentation, but the information is scattered across PDFs, shared drives, stale wikis, presentations, and long email chains.",
      supportingParagraphs: [
        "Generic chatbots are not enough because they do not know the organization's proprietary documents. Teams need answers grounded in their own corpus, with citations they can verify.",
        "The product challenge was not just adding an LLM. It was building a trustworthy retrieval layer: ingestion, chunking, embeddings, access boundaries, streaming UX, and a no-answer path when confidence is too low."
      ],
      insightLabel: "The user problem",
      insightHelper: "One mental model for the user problem — not scattered symptoms across tools.",
      bridgeBefore: "Understand the pain",
      bridgeAfter: "Then see the product response",
      illustration: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline: "The solution is a guided knowledge retrieval loop, not a chatbot wrapper.",
      subheadline: "The product turns static documents into a searchable knowledge layer: upload, structure, index, retrieve, and answer with citations.",
      capabilitiesLabel: "Capabilities behind the journey",
      cards: [
        {
          title: "Structured PDF ingestion",
          description: "PDFs are converted into Markdown-like structure so headings, hierarchy, and page context survive retrieval."
        },
        {
          title: "Two-step chunking",
          description: "Content is split first by document structure, then by token limits with overlap so chunks keep semantic context."
        },
        {
          title: "Vector retrieval",
          description: "Queries and chunks are embedded, stored in PostgreSQL with pgvector, and retrieved with metadata-aware similarity search."
        },
        {
          title: "Grounded generation",
          description: "The LLM receives retrieved context and a citation contract, producing answers mapped back to source chunks and pages."
        },
        {
          title: "Streaming experience",
          description: "Server-Sent Events show answers token by token, reducing perceived wait time and making the product feel responsive."
        },
        {
          title: "No-answer guardrail",
          description: "When retrieval confidence is not enough, the system should refuse instead of inventing internal knowledge."
        }
      ]
    },
    featureWalkthrough: {
      items: [
        {
          id: "upload",
          label: "Upload",
          screenshot: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          explanation: "A user uploads a PDF. The backend extracts text, preserves hierarchy, and attaches page-level metadata."
        },
        {
          id: "index",
          label: "Index",
          screenshot: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          explanation: "The system chunks the document, generates embeddings, and stores vectors plus metadata in PostgreSQL with pgvector."
        },
        {
          id: "ask",
          label: "Ask",
          screenshot: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          explanation: "The user asks a natural-language question. The query is embedded and matched against the most relevant chunks."
        },
        {
          id: "answer",
          label: "Answer",
          screenshot: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          explanation: "The answer streams back with source citations, so the user can verify where the information came from."
        }
      ]
    },
    architecture: {
      eyebrow: "Architecture",
      layersNavLabel: "System path",
      selectedLayerLabel: "Selected layer",
      securityPanelTitle: "Security lives inside the architecture",
      aiFlowPanelTitle: "AI flow details",
      layers: [
        {
          id: "frontend",
          label: "Next.js UI",
          panel: {
            title: "Next.js frontend",
            why: "The frontend focuses on upload, question flow, streaming responses, and citation visibility without exposing retrieval complexity to the user.",
            bullets: [
              "Upload and chat UX",
              "Streaming answer surface",
              "Citation-first response display"
            ]
          }
        },
        {
          id: "api",
          label: "FastAPI backend",
          panel: {
            title: "FastAPI application layer",
            why: "Domain modules keep auth, documents, chat, analytics, and users separated while dependency injection wires use cases cleanly.",
            bullets: [
              "Domain-driven modules",
              "Dependency injection",
              "Protected API endpoints"
            ]
          }
        },
        {
          id: "services",
          label: "Service layer",
          panel: {
            title: "Router to service to repository",
            why: "Clean Architecture keeps business logic out of routes and persistence details out of use cases, making the system easier to test and evolve.",
            bullets: [
              "Router -> Service",
              "Service -> Repository",
              "Repository -> Database"
            ]
          }
        },
        {
          id: "retrieval",
          label: "RAG pipeline",
          panel: {
            title: "Retrieval and generation pipeline",
            why: "Document structure, chunk metadata, embeddings, similarity search, and prompts work together to produce grounded answers.",
            bullets: [
              "Markdown-aware chunks",
              "Metadata filters",
              "Cited LLM responses"
            ]
          }
        },
        {
          id: "data",
          label: "PostgreSQL + pgvector",
          panel: {
            title: "One operational database",
            why: "PostgreSQL stores users, document metadata, analytics events, and vector embeddings, avoiding the operational cost of a separate vector database for MVP scale.",
            bullets: [
              "Relational data",
              "Vector embeddings",
              "Analytics events"
            ]
          }
        },
        {
          id: "deployment",
          label: "Docker Compose",
          panel: {
            title: "Local-first deployment path",
            why: "Docker Compose keeps onboarding simple and makes the stack reproducible while the product is still evolving.",
            bullets: [
              "Fast onboarding",
              "Reproducible services",
              "Environment-based secrets"
            ]
          }
        }
      ]
    },
    aiPipeline: {
      blocks: [
        {
          id: "extract",
          label: "PDF to Markdown",
          content: "Preserve headings, hierarchy, and page markers so retrieval returns useful context instead of anonymous text fragments."
        },
        {
          id: "chunk",
          label: "Two-step chunking",
          content: "Split by Markdown structure first; only split by token windows when sections are too large."
        },
        {
          id: "embed",
          label: "VoyageAI embeddings",
          content: "Use a retrieval-optimized embedding model to improve semantic search quality for document questions."
        },
        {
          id: "retrieve",
          label: "pgvector retrieval",
          content: "Run similarity search with metadata context, returning top chunks for grounded answer generation."
        },
        {
          id: "generate",
          label: "OpenAI LLM",
          content: "Generate an answer using retrieved context, citation rules, and a no-answer guardrail when confidence is insufficient."
        }
      ]
    },
    engineeringDecisions: {
      eyebrow: "Decisions",
      labels: {
        why: "Why this path",
        tradeoff: "Tradeoff",
        alternative: "Alternative",
        rejected: "Rejected because"
      },
      items: [
        {
          id: "pdf-to-markdown",
          title: "Convert PDFs to structured Markdown",
          why: "Plain text extraction loses headings, sections, and page context. Markdown-like structure gives chunks useful hierarchy before they ever reach the LLM.",
          tradeoffs: "This adds conversion complexity and does not solve scanned PDFs or complex tables perfectly.",
          alternatives: "Plain text extraction, OCR-first pipelines, or manual document formatting.",
          rejected: "Plain text made retrieval weaker because chunks lost their surrounding section meaning; OCR-first would add latency and cost for documents that are already text-based."
        },
        {
          id: "two-step-chunking",
          title: "Use two-step chunking instead of naive token splits",
          why: "A 50-page document cannot be sent whole, but splitting every fixed number of tokens breaks paragraphs away from titles and context.",
          tradeoffs: "Larger chunks can be less precise, while smaller chunks can lose the answer's surrounding explanation.",
          alternatives: "Fixed 256-token chunks, fixed 512-token chunks, or full-section retrieval only.",
          rejected: "Fixed chunks were easier to implement but produced fragmented context. Header-aware chunks with overlap produced more complete answers."
        },
        {
          id: "voyageai-embeddings",
          title: "Choose VoyageAI for embeddings",
          why: "The source material prioritizes retrieval quality, and VoyageAI's retrieval-optimized model was a better fit than a generic embedding default.",
          tradeoffs: "VoyageAI costs more than OpenAI small embeddings, but the cost remains tiny at document scale.",
          alternatives: "OpenAI small embeddings, OpenAI large embeddings, or a local embedding model.",
          rejected: "The cheaper option was acceptable, but the project optimized for answer quality and retrieval confidence first."
        },
        {
          id: "postgres-pgvector",
          title: "Use PostgreSQL + pgvector instead of Pinecone",
          why: "For an MVP and most internal-document workloads, one database can handle auth, metadata, vectors, and analytics without another vendor or service boundary.",
          tradeoffs: "A dedicated vector DB may scale further at extreme vector counts, but adds operational complexity early.",
          alternatives: "Pinecone, Weaviate, Qdrant, or another specialized vector database.",
          rejected: "The product did not need 100M-vector scale on day one. pgvector kept the architecture simpler and cheaper."
        },
        {
          id: "sse-streaming",
          title: "Stream answers with Server-Sent Events",
          why: "Users should see progress immediately instead of staring at a spinner while the model generates the full answer.",
          tradeoffs: "Streaming introduces more client/server state and error handling than a single request-response call.",
          alternatives: "WebSockets, polling, or waiting for a full response before rendering.",
          rejected: "WebSockets were unnecessary for one-way LLM output; SSE gives the ChatGPT-like experience with simpler infrastructure."
        },
        {
          id: "clean-architecture",
          title: "Keep Clean Architecture boundaries",
          why: "The system needs to change models, optimize database queries, and evolve modules without rewriting the product flow.",
          tradeoffs: "More structure upfront than a quick script, but much easier to debug and extend.",
          alternatives: "Single service file, route-heavy logic, or a prototype script architecture.",
          rejected: "A route-heavy implementation would be faster for a demo but fragile once auth, analytics, retrieval, and document lifecycle logic grow."
        }
      ]
    },
    security: [
      {
        title: "JWT authentication",
        description: "Protected endpoints require token-based access before documents or chats can be reached."
      },
      {
        title: "Argon2 password hashing",
        description: "Passwords are hashed with a modern memory-hard algorithm instead of weak defaults."
      },
      {
        title: "User-owned documents",
        description: "Document access is validated at user level so private corpora do not leak across accounts."
      },
      {
        title: "Input validation",
        description: "Uploaded files and API inputs are validated before entering ingestion or retrieval workflows."
      },
      {
        title: "Environment secrets",
        description: "API keys and deployment settings are separated from public metadata and runtime code."
      }
    ],
    screenshots: {
      desktop: [
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      ],
      tablet: [
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      ],
      mobile: [
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    results: {
      eyebrow: "Impact",
      impactStory: [
        {
          label: "Friction",
          body: "Knowledge workers lose hours searching scattered PDFs, wikis, and internal docs."
        },
        {
          label: "Intervention",
          body: "The product turns documents into a searchable knowledge layer with cited answers."
        },
        {
          label: "Outcome",
          body: "9,360 hours/year — Potential productive time recovered in a 100-worker scenario with a conservative 20% reduction in search time."
        }
      ],
      supportingLabel: "Supporting signals",
      metrics: [
        {
          label: "Illustrative yearly value",
          value: "9,360 hours/year",
          description: "Potential productive time recovered in a 100-worker scenario with a conservative 20% reduction in search time."
        },
        {
          label: "Search benchmark",
          value: "1.8 h/day",
          description: "McKinsey's estimate for daily time knowledge workers spend searching or gathering internal information."
        },
        {
          label: "Employee signal",
          value: "62%",
          description: "Microsoft Work Trend Index respondents who say they spend too much time searching for information."
        },
        {
          label: "Manual indexing example",
          value: "~30 sec",
          description: "Approximate processing time for indexing a 100-page manual in the source scenario."
        },
        {
          label: "Typical query cost",
          value: "$0.0003",
          description: "Estimated cost per typical query in the source scenario, with top chunks retrieved for answer generation."
        },
        {
          label: "Monthly AI cost scenario",
          value: "~$9",
          description: "Estimated monthly AI cost at 1,000 queries per day, based on the source scenario."
        }
      ],
      proofChallenge: {
        challenge: "Information retrieval bottleneck",
        problem: "Knowledge workers spend significant time searching internal information instead of acting on it.",
        decision: "Transform documents into a natural-language retrieval layer with grounded citations.",
        result: "The product reframes static documentation as an answerable knowledge system instead of another place to search manually."
      }
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Repeat",
          description: "What is worth carrying into the next product.",
          items: [
            "Preserving document structure before embedding made retrieval more useful than plain text extraction.",
            "pgvector kept the product operationally simple while still supporting semantic search.",
            "Streaming responses made the assistant feel responsive before the full answer was complete."
          ]
        },
        {
          title: "Refine",
          description: "What deserves another iteration.",
          items: [
            "Add reranking to improve top-K retrieval precision on ambiguous questions.",
            "Support scanned PDFs, tables, and images with OCR or multimodal ingestion.",
            "Add hybrid search that combines semantic retrieval with keyword matching."
          ]
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "RAG quality depends more on ingestion, chunking, metadata, and retrieval than on the model name alone.",
            "Citations must be designed as a product trust feature, not added as an afterthought.",
            "Clean boundaries matter when debugging hallucinated answers, retrieval failures, or model swaps."
          ]
        }
      ]
    },
    techStack: [
      {
        name: "TypeScript"
      },
      {
        name: "Next.js"
      },
      {
        name: "FastAPI"
      },
      {
        name: "PostgreSQL"
      },
      {
        name: "pgvector"
      },
      {
        name: "VoyageAI"
      },
      {
        name: "OpenAI"
      },
      {
        name: "Docker Compose"
      }
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Want the implementation details?",
      subheadline: "Explore the repository, try the live flow, or reach out if you want to talk through the architecture behind it.",
      githubLabel: "Repository",
      demoLabel: "Live Demo",
      contactLabel: "Contact Me",
      contactHref: "/#contact"
    },
    relatedProjects: [
      "caloric-estimator",
      "chatterbox"
    ],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies."
    }
  }
};
