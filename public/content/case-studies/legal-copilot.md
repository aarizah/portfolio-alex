# Building an Enterprise Knowledge Assistant: Architecture Decisions and Hard-Won Lessons

## The Problem Worth Solving

Picture this: Your team's knowledge is scattered across dozens of PDFs buried in shared drives, wikis that haven't been updated in months, and PowerPoint presentations lost in endless email threads. **Employees waste 2-3 hours daily** searching for information that should be at their fingertips.

ChatGPT showed me a different future—asking questions in natural language and getting instant answers. But ChatGPT doesn't know *your* internal documentation, *your* processes, *your* proprietary knowledge. That's where RAG (Retrieval-Augmented Generation) comes in: the technique that lets AI models access and reason about your specific documents.

**EKA (Enterprise Knowledge Assistant)** is my take on building a production-grade RAG system. Not a 50-line script, but a real application with authentication, user data isolation, streaming responses, analytics, and a robust indexing pipeline. This article shares the architectural choices, trade-offs, and lessons learned from building RAG in production.

---

## The Big Picture: How It All Works

At its core, EKA follows a straightforward flow:

**1. Upload & Index**: User uploads a PDF → System extracts text, preserves structure → Breaks it into smart chunks → Converts to vector embeddings → Stores in database

**2. Query & Answer**: User asks a question → System converts question to vector → Finds similar chunks → Sends to GPT-4 with context → Streams answer back with source citations

Simple concept, complex execution. Here's where the interesting decisions happen.

---

## Decision #1: PDFs to Markdown (Yes, Really)

Most RAG systems treat PDFs as plain text blobs. All structure—titles, subtitles, hierarchies—gets lost. I took a different approach: **convert PDFs to structured Markdown**.

The system analyzes font sizes and styles to infer document structure. A bold, 18pt heading becomes `# Section Title`. A 14pt bold line becomes `## Subsection`. Regular text stays regular. I also inject invisible page markers so I always know which page content came from.

**Why bother with this complexity?**

When the AI retrieves a chunk, it doesn't just see random text—it sees "## System Configuration" with context that this is a subsection under "Installation Guide" from page 15. This hierarchical context dramatically improves answer quality. Also, this approach allows me to use a Markdown splitter as a chunking technique, which does a wonderful job of preserving information sources and fits perfectly into the RAG system. 

**The trade-off?** This works beautifully for 80% of corporate documents (manuals, technical docs, policies). It struggles with complex layouts, scanned PDFs, or documents with intricate tables. For those edge cases, you'd need OCR or more sophisticated tools. But in enterprise settings, I'd rather process 100 standard documents quickly than 10 complex ones slowly.

---

## Decision #2: Two-Step Chunking Strategy

Here's a problem every RAG builder faces: AI models have token limits. A 50-page document won't fit in the context window. You need to split it into "chunks."

**The naive approach**: Split every 500 tokens without considering structure.

**The result**: Chunks that cut sentences in half, paragraphs separated from their titles, information without context.

**My solution: Two-step chunking**

**Step 1**: Split by Markdown headers. This respects logical structure—an entire section stays together.

**Step 2**: If a section is too large (>2000 tokens), split it further with a 10-token overlap to preserve context between consecutive chunks.

Each chunk gets enriched metadata:
- Original filename and file type
- Actual page number
- Header hierarchy (h1, h2, h3)
- Position in document

When searching, the AI doesn't just retrieve text—it retrieves "page 15, Security > Authentication section." That context matters.

**Why 2000 tokens?** I tested multiple sizes:

- **256 tokens**: Super precise, but chunks lack context
- **512 tokens**: Good precision, medium context
- **2000 tokens**: Less precise, but complete context for complex questions

For a question like "How do I configure OAuth authentication?", 512-token chunks return 5 scattered fragments the AI must piece together. 2000-token chunks return 2-3 complete sections with full context—much better answers.

---

## Decision #3: VoyageAI Over OpenAI for Embeddings

Embeddings convert text into numerical vectors that capture semantic meaning. I chose VoyageAI's voyage-3 model over OpenAI.

**Quick comparison:**

| Model | Cost (per 1M tokens) | Performance | Optimized for RAG |
|-------|----------------------|-------------|-------------------|
| OpenAI small | $0.02 | 62.3% | No |
| VoyageAI voyage-3 | $0.06 | 66.7% | **Yes** |
| OpenAI large | $0.13 | 64.6% | No |


VoyageAI costs 3x more than OpenAI small but delivers better performance and is specifically optimized for retrieval tasks. For a 50-page document (~40k tokens), embedding costs just **$0.0024**. Worth it for better quality.

---

## Decision #4: PostgreSQL + pgvector (Not Pinecone)

For vector storage, I use PostgreSQL with the pgvector extension instead of dedicated vector databases like Pinecone or Weaviate.

**Why?**

| Factor | pgvector | Pinecone | Weaviate |
|--------|----------|----------|----------|
| Cost | Included in Postgres | $70/month | $25/month+ |
| Latency | <50ms | ~100ms | ~80ms |
| Complexity | One database | DB + Vector DB | DB + Vector DB |
| Scalability | <10M vectors | 100M+ vectors | 100M+ vectors |

For most enterprises with under 1 million documents, **pgvector is plenty** and eliminates operational complexity. One PostgreSQL instance handles everything:
- User authentication
- Document metadata
- Vector embeddings
- Analytics events

**The trade-off?** If you scale to 50M+ documents, you'd eventually migrate to a specialized vector database. But that's a problem 90% of companies will never face. Start simple.

---

## Decision #5: Streaming Responses with Server-Sent Events

Instead of making users wait 10 seconds staring at a loading spinner, I stream responses token-by-token (like ChatGPT).

The user sees the answer appear in real-time. I use Server-Sent Events (SSE) instead of WebSockets because it's simpler—just HTTP, auto-reconnects on disconnect, and works great with modern browsers.

**Impact**: Users perceive 60% lower latency. The technical wait time hasn't changed, but the psychological experience is dramatically better.

---

## The Architecture Philosophy

The project follows **Clean Architecture** with clear separation:

**Router** → **Service** → **Repository** → **Database**

Each module (auth, documents, chat, analytics) is independent. This separation provides:

1. **Testability**: Mock the repository without touching the database
2. **Maintainability**: Swapping from PostgreSQL to MongoDB only requires changing the repository layer
3. **Scalability**: Each module can become a microservice if needed
4. **Clarity**: Data flow is predictable and traceable

When I wanted to experiment with a different AI model, I changed one service file. When I optimized database queries, I touched only repository files. Clean separation saved countless hours of refactoring.

---

## Real-World Numbers

**Indexing a 100-page manual:**
- Processing time: ~30 seconds
- Embeddings cost: **$0.02**
- Storage: ~1 MB

**Typical query:**
- Latency: 1.5-2 seconds
- Cost: **$0.0003**
- Top-5 chunks retrieved

**At scale (1000 queries/day):**
- Monthly AI costs: **~$9**
- Database size with 500 documents: **~500 MB**

---

## What Worked Well

**1. Markdown Structure Preservation**: ~20% improvement in answer quality versus plain text extraction

**2. pgvector**: Sub-50ms query latency for 100k chunks, no need for expensive vector database

**3. Two-Step Chunking**: Balances precision and context beautifully

**4. Docker Compose**: New developers onboarded in under 5 minutes

**5. Streaming Responses**: Users love seeing answers appear in real-time

---

## The Road Ahead

**Next 2 months:**
- Add reranking to improve top-K retrieval accuracy
- Implement rate limiting (10 queries/minute per user)
- Build multi-tenant organizations

**Next 6 months:**
- Hybrid search combining semantic + keyword search
- Document versioning with smart re-indexing
- Support for images and tables (multimodal RAG)

**Next year:**
- Fine-tune embeddings for specific enterprise domains
- Build knowledge graphs showing document relationships
- Real-time indexing (seconds, not minutes)

---

## The Bottom Line

Building a "chatbot for your documents" sounds simple. The reality is messier:

- PDFs are nightmares (fonts, layouts, tables)
- Chunk size dramatically affects quality
- Embedding choices matter
- Retrieval needs filtering, ranking, and optimization
- Streaming, error handling, and monitoring are table stakes

**EKA tackles these with pragmatic architecture choices:**
- Clean structure for maintainability
- Markdown extraction for better context
- Two-step chunking for balance
- pgvector for operational simplicity
- Streaming for modern UX

**The result?** A production RAG system handling thousands of documents, hundreds of users, answering questions in under 2 seconds with precise source citations.

If you're building your own RAG system, I hope this saves you the 3 months of experimentation it took me to figure out what actually works. **Architecture matters**. Details matter. And clean code matters even more when you're debugging why the AI is hallucinating pages that don't exist.

---

*Last updated: January 2026*
