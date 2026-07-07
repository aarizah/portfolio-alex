# Local RAG Knowledge Copilot — Privacy-First Document Intelligence

## The Problem Worth Solving

Teams working with contracts, policies, regulatory PDFs, and internal manuals often cannot send those documents to cloud LLM APIs — compliance, cost, air-gapped environments, or simply the need to know exactly where an answer came from.

Generic chatbots fail here. Keyword search fails on paraphrased questions. A **vector-only RAG** stack misses exact legal terms, article numbers, and catalog codes that lexical search catches.

**Local RAG Knowledge Copilot** is the offline counterpart to my cloud Enterprise Knowledge Assistant: a complete local-first pipeline that ingests PDFs, indexes them on-machine, retrieves evidence through hybrid search, and generates cited answers with **llama.cpp** — no document content leaves the machine.

> **Positioning:** Same domain as EKA (document Q&A with citations), opposite deployment model (local vs cloud). This project proves retrieval engineering depth — hybrid fusion, reranking, eval harness — not another chat wrapper.

---

# Impact

## What Success Looks Like

| Stakeholder | Value |
|-------------|-------|
| Legal / compliance teams | Query sensitive PDFs without cloud API exposure |
| Engineers | Measurable RAG pipeline with tests, metrics, and golden-set eval |
| Operators | Duplicate-safe ingestion, path-traversal guards, structured error codes |
| Future desktop users | Local web UI ready for Electron/Tauri packaging |

## What This Is Not

- Not a native desktop binary today — it is a **local-first web app** (FastAPI + React on localhost)
- Not multi-tenant SaaS — single-machine scope by design
- Not a replacement for EKA when teams need cloud auth, streaming at scale, and managed deployment

---

## The Big Picture: How It All Works

**1. Ingest** → Upload PDF or ingest from local folder → Docling parse → chunk with headings/pages → SHA-256 dedup → embed locally → write to Chroma + SQLite FTS5

**2. Query** → Embed question → parallel semantic + lexical search → RRF fusion with heading boost → rerank/MMR → llama.cpp generation → answer + chunk citations

**3. Observe** → Correlation ID per query, Prometheus stage timings, golden-set regression eval

```
Browser UI (React/Vite)
  → FastAPI /v1/*
  → IngestionService | RetrievalService | Reranker | LlamaCppGeneration
  → Chroma (vectors) + SQLite FTS5 (lexical) + local PDF store
```

---

## Architecture and Technology Stack

### Backend (`core/`)

| Layer | Selection | Role |
|-------|-----------|------|
| API | FastAPI + Pydantic v2 | Versioned `/v1` contracts, typed errors |
| Ingestion | Docling + custom chunker | Structure-aware PDF parsing |
| Embeddings | sentence-transformers MiniLM | On-machine embedding |
| Vector store | ChromaDB persistent | Semantic similarity search |
| Lexical store | SQLite FTS5 | Exact-term and keyword recall |
| Retrieval | RRF fusion + heading boost | Hybrid ranking (improved Jul 2026) |
| Rerank | Cross-encoder optional + MMR | Final context selection |
| Generation | llama.cpp (GGUF) | Local LLM — no OpenAI/Voyage calls |
| Observability | structlog + Prometheus | Stage timings, citation coverage |

### Frontend (`ui/`)

React 19 · TypeScript · Vite · Tailwind · shadcn/Radix · TanStack Query

### Quality

- 12+ automated tests (unit, integration, contract, e2e eval runner)
- `golden_set.jsonl` for regression-style evaluation
- `AUDITORIA_PRACTICAS_SENIOR_LOCAL_RAG.md` — hexagonal ports/adapters study guide
- `FLUJO_SISTEMA_LOCAL_RAG.md` — system flow and data model

### Local data (gitignored)

`core/data/` (Chroma + SQLite) and `core/s3/` (uploaded PDFs) are runtime artifacts — not committed.

---

## Retrieval Improvements (2026)

Recent work strengthened hybrid retrieval beyond naive vector search:

1. **Reciprocal Rank Fusion (RRF)** — merges Chroma and FTS5 rankings; chunks appearing in both channels score higher
2. **Spanish stopword filtering** — cleaner query tokens for Colombian/Spanish document corpora
3. **Heading boost** — chunks whose section headings match query tokens get a fusion score lift
4. **Headings in lexical index** — section titles searchable via FTS5, not just body text
5. **Semantic threshold** — configurable floor to drop weak vector matches before fusion

---

## Engineering Decisions

### Decision #1: Hybrid retrieval instead of vector-only

**Why:** Legal and policy PDFs contain exact phrases, article numbers, and defined terms that pure embedding search misses.

**Trade-off:** Two stores to maintain (Chroma + FTS5) and fusion logic to tune.

**Rejected:** Vector-only — simpler but weaker on exact-match queries common in regulatory documents.

### Decision #2: Local llama.cpp instead of cloud APIs

**Why:** Privacy and zero per-token cost for document content. Aligns with air-gapped and compliance use cases.

**Trade-off:** User must download GGUF model; generation quality depends on local hardware.

**Rejected:** OpenAI/Anthropic APIs — contradicts the core value proposition of keeping content on-machine.

### Decision #3: Hexagonal ports and adapters

**Why:** `ChunkingPort`, `VectorStorePort`, `EmbeddingPort` let tests use fakes without Docling, Chroma, or GPU.

**Trade-off:** More files than a single-script RAG demo.

**Rejected:** Monolithic handlers — faster to start, impossible to test ingestion rules in isolation.

### Decision #4: Content-hash document IDs + 409 on duplicate

**Why:** Re-uploading the same PDF must not pollute the index or create duplicate chunks.

**Trade-off:** Same content under different filenames is correctly rejected (by design).

### Decision #5: Golden-set eval harness

**Why:** Retrieval changes need measurable regression signal, not subjective "feels better" checks.

**Trade-off:** Golden set must be curated and maintained as corpus grows.

---

## Relationship to Enterprise Knowledge Copilot (EKA)

| Dimension | EKA (legal-copilot) | Local RAG |
|-----------|---------------------|-----------|
| Deployment | Cloud · Vercel demo | Localhost · on-machine |
| LLM | OpenAI | llama.cpp GGUF |
| Embeddings | VoyageAI API | sentence-transformers local |
| Vector DB | PostgreSQL pgvector | ChromaDB |
| Auth | JWT multi-user | Single-machine (no auth layer) |
| Retrieval | Vector similarity | Hybrid RRF + rerank |
| Streaming | SSE | Request/response |
| Strength | Production product UX | Retrieval engineering + privacy |

EKA's lessons learned explicitly listed hybrid search and reranking as future work — Local RAG is where that engineering landed.

---

## API Surface (`/v1`)

| Endpoint | Purpose |
|----------|---------|
| `POST /v1/upload` | Multipart PDF upload + ingest |
| `POST /v1/ingest` | Batch ingest from local `s3/` folder |
| `POST /v1/query` | Question → answer + citations + chunks |
| `GET /v1/documents` | Indexed document library |
| `GET /metrics` | Prometheus metrics |

---

## Current Status

**Research / open source (MIT).** Complete local-first RAG for PDF knowledge bases with UI, tests, docs, and eval harness.

**Delivered:** Modular pipeline, hybrid retrieval, citation traceability, observability, React UI, gitignored runtime data.

**Future:** Desktop packaging (Electron/Tauri), multi-user ACL, larger golden sets, additional file formats.

**Portfolio assets:** `public/projects/local-rag/thumbnail.png`, `demo.mp4`, `rag-pipeline.svg`

---

*Sources: README.md, FLUJO_SISTEMA_LOCAL_RAG.md, AUDITORIA_PRACTICAS_SENIOR_LOCAL_RAG.md, retrieval.py. Repo: https://github.com/aarizah/RAG-Local-Desktop-APP. Last updated: July 2026.*
