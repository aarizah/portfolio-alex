# SGR/MGA AI-Assisted Formulation System — From Territorial Chaos to Defensible Pre-Investment Projects

## The Problem Worth Solving

Many Colombian municipalities have clear public needs but lack the installed capacity to turn them into mature, presentable, and financeable pre-investment projects for the **Sistema General de Regalías (SGR)** and the **Metodología General Ajustada (MGA)**.

The bottleneck is not just writing documents. The real bottleneck combines:

- Low technical formulation capacity in small and medium municipalities
- Poor clarity about the SGR project cycle
- Unfamiliarity with MGA requirements
- Difficulty organizing supporting documents
- Lack of criteria to prioritize initiatives
- Projects that start with poorly formulated problems
- Budgets, schedules, and indicators without traceability
- Political expectations of securing resources without understanding viability
- Absence of sector allies when the project demands technical depth

**The system must help order that chaos — not disguise it.**

We are a small consultancy founded by software engineers. Our advantage is not being a traditional studies-and-designs firm. Our advantage is building a **disciplined, AI-assisted methodology** based on real sources, verifiable artifacts, quality control, and fast learning.

> **Guiding service phrase:** We structure SGR pre-investment projects, especially at profile phase, and accompany the technical route to request resources and prepare the next phase.

---

# Impact

## What Success Looks Like for Territorial Entities

| Stakeholder | Value |
|-------------|-------|
| Small/medium municipality | Turn reprioritized needs into ordered, defensible pre-investment structures |
| Planning / infrastructure secretariats | Detect gaps before presenting; avoid methodological weakness |
| Internal reviewers | Traceable artifacts instead of conversational-only outputs |
| Allied consultants | Ordered base to continue toward pre-feasibility or feasibility |
| The consultancy team | Repeatable internal factory — faster, more traceable, less improvisation |

## What We Explicitly Do NOT Promise (R1)

Never promise: approval, viability, prioritization, financing, resource disbursement, successful platform upload, or guaranteed resource acquisition.

If sectoral, legal, financial, environmental, or technical depth exceeds initial scope, the system marks it as a **gap** and recommends external validation.

---

## Regulations and Methodology as Product Requirements

| Domain | What the system must respect |
|--------|------------------------------|
| **SGR cycle** | Formulation, presentation, viability, registration, prioritization, approval, execution, monitoring, control, evaluation — not conflated with a draft or approved project |
| **MGA methodology** | Problem before solution; profile is not feasibility; product ≠ activity ≠ input; catalogs and value chain logic |
| **Sector & source** | Requirements change by phase, funding source, sector, call, typology, entity, and maturity level |
| **Sustainability** | Operation, maintenance, responsible parties, and post-investment costs from early formulation |
| **Traceability (R7)** | Every decision, assumption, requirement, support, gap, and recommendation traceable to source, file, or input |

---

## The Big Picture: How It All Works

At its core, the system follows an **artifact-first, evidence-before-automation** loop:

**1. Canon** → Normalize SGR/MGA rules in `knowledge/` (read-only during case execution)

**2. Intake** → Receive incomplete territorial information; triage eligibility and maturity

**3. Structure** → Build problem trees, objectives, alternatives, MGA logic, indicators, risks

**4. Verify** → Contrast SGR requirements, detect gaps, contradictions, and phase mixing

**5. Deliver** → Produce verifiable Markdown artifacts in `project/` with traceability logs

```
User input
  → sgr-mga-runner (orchestrator — invokes only via task)
  → 15 specialized subagents (steps 0–14)
  → read knowledge/ + prior project/ artifacts
  → write new project/ artifacts
  → human gates at critical decisions
```

**V1 is not a magic project generator.** V1 is a proven flow that can take a bounded case and produce useful artifacts without inventing information, without losing traceability, and without confusing the consultancy's scope.

---

## Non-Negotiable Rules (R1–R8)

- **R1 — No guarantees** — Never promise approval, viability, prioritization, or financing
- **R2 — No invention** — If information is missing, ask, mark empty, or stop
- **R3 — Canon first** — Skills work from `knowledge/`; incomplete canon → low confidence or block
- **R4 — Bounded scope** — Early structuring and pre-investment management; feasibility/studies need separate scope or allies
- **R5 — Clear responsibility** — Distinguish beneficiary entity, presenter, executor, formulator, reviewer, viability instance
- **R6 — Critical human review** — Sensitive normative, sectoral, or methodological closure requires human or external expert review
- **R7 — Traceability** — Every output traceable to source, file, or input
- **R8 — Controlled subagent context** — No dumping massive knowledge by convenience; context designed per task

---

## Architecture and Technology Stack

### High-Level Components (V1 — Local Prototype)

| Layer | Selection | Role |
|-------|-----------|------|
| Orchestration | **OpenCode** | Native agents, skills, subagents, commands; granular permissions; parallelism via `task` |
| Primary agent | `sgr-mga-runner` | Lightweight coordinator — invokes subagents only; never reads canon or writes pipeline artifacts |
| Architect agent | `sgr-mga-architect` | Modifies skills/agents after human review; never executes cases |
| Subagents | 25 specialized agents | Read canon, reason, write artifacts; 4 internal parallel reviewers |
| Skills | `.agents/skills/*/SKILL.md` | Contracts: inputs, outputs, limits, stop criteria |
| Canon | `knowledge/` | SGR/MGA rules, checklists — **read-only** during case execution |
| Artifacts | `project/` | Dynamic case outputs — `00_input/` through `09_plan/` |
| Format | Markdown + Git | Human-readable, diffable, versioned |
| Models | Commercial APIs | Strong models for legal/methodological reasoning; economical models for low-risk extraction |

### Not Used in V1 (Evolution Hooks)

| Technology | Status | Trigger to adopt |
|------------|--------|------------------|
| **LangGraph** | Planned evolution | Pipeline exceeds 15 steps with complex branching; repeatable flow established |
| Vector DB / RAG | Future | `knowledge/` grows > 50 files and context becomes unmanageable |
| MCP | Future | Real bottleneck in external document lookup |
| Custom backend | Future | Multi-user scale beyond internal team |
| ML approval predictor | Low priority | Does not help draft; requires clean labeled data at scale |
| Fine-tuning | Deferred | Skills + context + prompts often sufficient; harder to update when norms change |

---

## AI Strategy Decision: Why OpenCode First, LangGraph Second

Four options were evaluated (`SGR_con_IA.md`):

### Option 1 — Traditional ML approval predictor
Predict approval probability from thousands of historical projects.

**Rejected (low priority):** Parameter selection, data cleaning from thousands of documents, retraining on government/policy/market changes. **Does not help draft** — only scores clean submissions.

### Option 2 — LangGraph agent flow
Deterministic + hybrid + agentic flows with optional RAG.

**Chosen as second step:** Granular control, scalable, helps draft proposals. **Downside:** slower initial setup; can hallucinate if the formulation flow is not yet clear.

### Option 3 — Pre-built agent platforms (Cursor, Claude Code, **OpenCode**)
Skills act as the deterministic flow that LangGraph would provide later.

**Chosen for V1 (short term):** Fast iteration, lower initial dev time, experiment with flows before building robust infrastructure. **OpenCode selected** because it is open-source, supports APIs/local models/OpenAI subscription, and implements independent-context agents/subagents with skill management comparable to Claude Code.

### Option 4 — Fine-tuning
Specialize base model on SGR historical documents.

**Deferred:** Requires large quality datasets, training cost, goes stale when norms change. Skills + context + prompts often achieve strong results with easier updates.

**Evolution path:** OpenCode V1 → establish repeatable 15-step pipeline with pilots → migrate orchestration to LangGraph when branching complexity and document volume justify it. The deterministic pipeline is documented explicitly enough to translate to a DAG.

---

## 15-Step Deterministic Pipeline (V1.2)

| Step | Skill | Output artifact |
|------|-------|-----------------|
| 0 | `sgr-preflight-triage` | `00_input/elegibilidad_sgr_preliminar.md` |
| 1 | `sgr-intake` | `01_intake/contexto_proyecto.md` |
| 2 | `problem-tree-builder` | `02_identificacion/arbol_problemas.md` |
| 3 | `objectives-alternatives-builder` | `02_identificacion/arbol_objetivos_y_alternativas.md` |
| 4 | `needs-study-builder` | `03_preparacion/estudio_necesidades.md` |
| 5 | `technical-location-reviewer` | `03_preparacion/analisis_tecnico.md` + `localizacion.md` |
| 6 | `value-chain-builder` | `03_preparacion/cadena_valor.md` |
| 7 | `mga-structure-assembler` | `03_preparacion/estructura_mga.md` (+ 4 parallel internal reviewers) |
| 8 | `risks-benefits-reviewer` | `03_preparacion/riesgos_beneficios.md` |
| 9 | `programming-reviewer` | `04_programacion/*.md` (4 artifacts) |
| 10 | `ex-ante-scope-reviewer` | `05_evaluacion/evaluacion_ex_ante_alcance.md` |
| 11 | `normative-check` | `07_sgr/matriz_requisitos.md` |
| 12 | `mga-web-route-reviewer` | `06_mga_web/ruta_operativa_no_automatizada_mga_web.md` |
| 13 | `gap-review` | `08_revision/reporte_hallazgos.md` |
| 14 | `plan-assembler` | `09_plan/plan_maduracion.md` |

**Phase gate:** Before step 0, user declares **Perfil (Phase I)** or **Prefactibilidad (Phase II)**. Requirements from later phases must not appear as critical in the current phase.

**Field states in every artifact:** `provisto`, `inferido`, `supuesto`, `vacio`, `no_aplica`, `no_verificado_en_canon`

---

## Decision #1: OpenCode Over LangGraph for V1

**Why:** The formulation flow was still being discovered. OpenCode allows rapid iteration on skills, subagents, and permissions without building custom orchestration infrastructure.

**Trade-off:** Less control over internal architecture; limited scalability vs. owned solution.

**LangGraph when:** Flow is repeatable, pilot-validated, and document volume (thousands) requires RAG + declarative DAG orchestration.

---

## Decision #2: Light Runner, Heavy Subagents

**Why:** `sgr-mga-runner` only invokes `task`, verifies artifacts with `glob`/`read`, and logs decisions. It never reads `knowledge/` or writes pipeline artifacts. Prevents context inflation and keeps orchestration deterministic.

**Trade-off:** More agent configuration files; clearer separation of concerns.

---

## Decision #3: Skills as Contracts, Not Long Prompts

Each skill declares: what it reads, what it produces, what it must not do, when it stops, and what it leaves for the next skill.

**Why:** Aligns with P7 (Skills Are Contracts) and makes future LangGraph node migration straightforward.

---

## Decision #4: Canon / Artifact Separation

`knowledge/` is read-only during case execution. `project/` is the only dynamic write zone.

**Why:** Prevents agents from corrupting normative source during formulation; mirrors compliance patterns from regulated domains.

---

## Decision #5: Artifact-First, Not Chat-First

Every important phase produces verifiable files with mandatory `Resumen Para Siguiente Paso` section: sources used, assumptions, gaps, pending decisions.

**Why:** Municipal projects need auditable deliverables, not only conversational answers.

---

## Construction Principles (P1–P10)

- **P1 Evidence before architecture** — No skill until source justifies it
- **P2 Canon before automation** — Normalize rules in `knowledge/` first
- **P3 Preserve detail unless duplicated** — Do not summarize away validations and exceptions
- **P4 Context is designed, not dumped** — Subagents receive only necessary context
- **P5 Critical gates, not endless pauses** — Human review only at critical decisions
- **P6 Methodology and law are separate but connected** — SGR rules ≠ MGA structure
- **P9 Artifact-first** — Files, not just chat responses
- **P10 Human review at critical points** — AI prepares; humans decide on canon, architecture, and pilot validation

---

## Current Status

**Local prototype in active evolution.**

Implemented:
- Constitution (`mission.md`, `technical_stack.md`)
- Canon structure in `knowledge/`
- 15 skills with contracts
- 25 agent configurations with permission matrix
- Deterministic 15-step pipeline (`sgr-mga-flow` V1.2)
- Commands: `sgr-piloto`, `sgr-review`, `sgr-gap-check`
- Artifact folder schema `00_input/` → `09_plan/`

**Not in production:** No cloud deployment, no multi-user backend, no LangGraph migration yet.

**Portfolio diagram:** `public/projects/sgr-mga/agent-pipeline.svg` — 15-step pipeline, runner/canon/artifact layers, step 7 parallel reviewers.

**V1 success criteria:**
- Normalize minimum SGR canon
- Normalize real MGA knowledge without losing key detail
- Define artifact contracts
- Decide initial skills/subagent architecture
- Execute a bounded pilot producing useful artifacts
- Detect gaps and risks without masking them
- Demonstrate the system knows when to stop

---

## Lessons Learned

1. **Do not automate before canon exists** — Rules must live in `knowledge/` with source, application condition, and operational use
2. **Profile is not feasibility** — The system must stop projects from skipping methodological maturity
3. **OpenCode buys learning speed** — Skills-as-flow lets you pilot before committing to LangGraph engineering
4. **No invention is a system invariant** — Empty fields and `no_verificado_en_canon` are features, not bugs
5. **The pipeline is the product** — 15 explicit steps with stop criteria beat one omniscient agent

---

## The Bottom Line

Building an "AI project writer" for Colombian public investment sounds like document generation. The reality is a **methodology engine**:

- Rules are canon, not prompts
- Outputs are legal-methodological artifacts, not chat replies
- Every field has a provenance state
- The orchestrator coordinates; subagents reason with bounded context
- The system must know when to stop and ask a human

**SGR/MGA AI-Assisted Formulation** tackles this with OpenCode for V1 iteration, a 15-step deterministic pipeline, and a clear evolution path to LangGraph when the flow is proven and scale demands it.

---

*Sources: mission.md, technical_stack.md, SGR_con_IA.md. Last updated: July 2026.*
