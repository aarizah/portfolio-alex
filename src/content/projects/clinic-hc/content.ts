import type { CaseStudy } from "../types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80";

export const clinicHc: CaseStudy = {
  meta: {
    slug: "clinic-hc",
    title: "AI Clinic Operations Copilot — Compliance-First Dental EHR",
    tagline:
      "A production-deployed platform that digitizes Colombian dental health records with append-only folios, certified signatures, FHIR interoperability, and AWS infrastructure.",
    status: "Production",
    ogImage: HERO_IMAGE,
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: regulatory stakes, append-only clinical records, FHIR RDA pipeline, production AWS deployment, and compliance-by-design engineering.",
    },
  },
  sections: {
    hero: {
      tagline:
        "Compliance-first dental EHR for Colombia — immutable clinical folios, certified digital signatures, FHIR RDA to MinSalud, and production-grade AWS infrastructure.",
      status: "Production",
      stack: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "AWS",
        "Docker",
        "FHIR",
      ],
      backgroundImage: HERO_IMAGE,
      github: "https://github.com/aarizah/AI-Clinic-Operations-Copilot",
    },
    quickOverview: {
      role: "Full Stack Engineer",
      duration: "Ongoing",
      status: "Production",
      users: "Dental clinic staff",
      country: "Colombia",
      domain: "Healthcare / Regulatory Compliance",
      cloud: "AWS — EC2 · RDS · S3 · ECR",
      tech: "Next.js · FastAPI · PostgreSQL · Celery · FHIR · Docker",
    },
    videoDemo: {
      src: "/projects/clinic-hc/demo.mp4",
      poster: "/projects/clinic-hc/thumbnail.png",
      chapters: [
        { time: 0, label: "Sign in" },
        { time: 6, label: "New patient" },
        { time: 15, label: "Consent & e-signature" },
        { time: 27, label: "Clinical record" },
        { time: 38, label: "Odontogram" },
        { time: 50, label: "Platform overview" },
      ],
    },
    problem: {
      eyebrow: "Problem",
      headline:
        "In Colombia, a dental health record is a legal document — not a CRUD form — and non-compliance can shut the clinic down.",
      lead:
        "Many dental practices still rely on paper records or systems that fail electronic health record, data protection, and national interoperability requirements.",
      supportingParagraphs: [
        "Fines can reach 2,000 SMLMV. Health authorities can suspend or close operations. The IHCE integration deadline via FHIR RDA (Resolution 1888/2025) has already passed for clinics still on paper or non-compliant software.",
        "The product challenge was not building another clinic admin panel. It was encoding Colombian law into software: append-only records, traceable corrections, certified signatures, immutable audit trails, official catalogs, and government interoperability.",
      ],
      insightLabel: "The compliance gap",
      insightHelper:
        "Regulatory risk is existential for clinic owners — not an IT nice-to-have.",
      bridgeBefore: "Understand the stakes",
      bridgeAfter: "Then see the compliance engine",
      illustration: HERO_IMAGE,
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline:
        "A compliance-first clinical operations loop — not a generic healthcare CRUD app.",
      subheadline:
        "The platform enforces Colombian health and data-protection law at every step: admit, consent, document, sign, interoperate, audit, retain, and deliver.",
      capabilitiesLabel: "Capabilities behind the journey",
      cards: [
        {
          title: "Append-only clinical folios",
          description:
            "Signed records are never modified. Corrections are new folios referencing the original — legally defensible and audit-ready.",
        },
        {
          title: "Certified digital signatures",
          description:
            "Treating professionals sign with Colombian CA tokens (PKCS#7/CAdES). Server verifies chain, revocation, and identity before closing a record.",
        },
        {
          title: "In-clinic informed consent",
          description:
            "Patients sign on tablet with staff witness. HMAC-sealed signatures with full audit trail — no paper, no lost authorizations.",
        },
        {
          title: "FHIR RDA interoperability",
          description:
            "Every signed visit generates a BundleAmbulatoryRDA and submits to MinSalud IHCE. VIDA acknowledgment stored as proof of acceptance.",
        },
        {
          title: "Regulatory catalogs",
          description:
            "CIE-10, CUPS, CUM, CIUO, ISO 3166, and DANE are first-class reference data — not free-text where the law requires a catalog.",
        },
        {
          title: "Immutable audit trail",
          description:
            "Every read, write, export, and correction on clinical data is logged with user, action, entity, before/after values, IP, and timestamp.",
        },
        {
          title: "Production AWS infrastructure",
          description:
            "Deployed on EC2 with RDS PostgreSQL, S3, ECR, IAM roles, Elastic IP, and HTTPS via Caddy + Let's Encrypt — shipped through GitHub Actions CI/CD.",
        },
      ],
    },
    featureWalkthrough: {
      items: [
        {
          id: "admit",
          label: "Admit",
          screenshot: HERO_IMAGE,
          explanation:
            "Receptionist registers the patient with a minimal admission master — ID, names, birth date, DANE location, contact — validated against official catalogs.",
        },
        {
          id: "consent",
          label: "Consent",
          screenshot: HERO_IMAGE,
          explanation:
            "Patient grants informed consent in-clinic on tablet. Staff acts as witness. No clinical folio can open without valid data-treatment consent.",
        },
        {
          id: "folio",
          label: "Folio",
          screenshot: HERO_IMAGE,
          explanation:
            "Dentist opens a draft folio: clinical sections, CUPS treatment plan, and FDI odontogram. Draft persisted as encrypted JSON until signed.",
        },
        {
          id: "interoperate",
          label: "Interoperate",
          screenshot: HERO_IMAGE,
          explanation:
            "On certified signature, the platform builds an RDA FHIR bundle, submits to IHCE, stores the VIDA, and logs the full audit trail.",
        },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      headline: "How the compliance engine is built — and shipped to production.",
      subheadline:
        "Stack, security, clinical workflows, data model, cloud infrastructure on AWS, and the CI/CD deployment pipeline.",
      systemOverview: {
        title: "System Overview",
        description:
          "Staff actions flow through Next.js, FastAPI, PostgreSQL, and Celery workers — with every sensitive operation audited and RDA submission decoupled via transactional outbox.",
        nodes: [
          {
            id: "browser",
            label: "Staff UI",
            description: "Clinical folios, odontogram, consent tablet, compliance dashboard.",
            technologies: ["Next.js", "React"],
          },
          {
            id: "api",
            label: "FastAPI",
            description: "RBAC, use cases, signature verification, OpenAPI contracts.",
            technologies: ["FastAPI", "Python"],
          },
          {
            id: "postgres",
            label: "PostgreSQL",
            description: "Clinical records, audit logs, catalogs, outbox events.",
            technologies: ["PostgreSQL", "pgcrypto"],
          },
          {
            id: "worker",
            label: "Celery",
            description: "RDA submission, retention classifier, outbox dispatch.",
            technologies: ["Celery", "Redis"],
          },
          {
            id: "s3",
            label: "Amazon S3",
            description: "Radiographs, consent images, and FHIR bundle archives in production.",
            technologies: ["S3"],
          },
          {
            id: "aws",
            label: "AWS Production",
            description: "EC2 hosts Docker Compose stack; RDS for PostgreSQL; ECR for images; IAM roles for S3 access.",
            technologies: ["EC2", "RDS", "ECR", "IAM"],
          },
          {
            id: "ihce",
            label: "MinSalud IHCE",
            description: "FHIR RDA submission and VIDA acknowledgment.",
            technologies: ["FHIR R4", "OAuth2"],
          },
        ],
        tableColumns: { layer: "Layer", role: "Role", stack: "Stack" },
        technologies: [
          "Next.js",
          "FastAPI",
          "PostgreSQL",
          "Celery",
          "Redis",
          "AWS",
          "S3",
          "FHIR",
        ],
      },
      c4Model: {
        title: "C4 Model",
        description:
          "Container diagram — how the staff UI, API, workers, storage, and government services connect.",
        src: "/projects/clinic-hc/c4.svg",
        alt: "C4 diagram for AI Clinic Operations Copilot",
      },
      security: {
        title: "Security",
        description:
          "Authentication, least-privilege RBAC, encryption, and immutable audit evidence.",
        items: [
          {
            id: "authentication",
            label: "Authentication",
            description:
              "JWT access tokens in httpOnly cookies; Argon2id passwords; MFA TOTP mandatory for professionals and admins.",
            technologies: ["JWT", "Argon2id", "TOTP"],
          },
          {
            id: "authorization",
            label: "Authorization",
            description:
              "RBAC with least privilege — admin, dentist, assistant, receptionist scoped to clinical purpose.",
            technologies: ["RBAC"],
          },
          {
            id: "encryption",
            label: "Encryption",
            description:
              "TLS 1.2+, AES-GCM column encryption for drafts and sensitive fields, rotatable keys.",
            technologies: ["TLS", "AES-GCM", "pgcrypto"],
          },
          {
            id: "audit",
            label: "Audit trail",
            description:
              "INSERT-only audit_logs at DB role level; @audited on mutations, @audited_read on sensitive reads.",
            technologies: ["structlog", "Sentry"],
          },
        ],
      },
      coreWorkflows: {
        title: "Core Workflows",
        description: "The clinical compliance loop from admission to government interoperability.",
        workflows: [
          {
            id: "clinical-visit",
            label: "Clinical Visit Lifecycle",
            description: "",
            steps: [
              {
                id: "admit",
                label: "Admit patient",
                description:
                  "Receptionist creates patient with DANE-validated admission master and legal representative when required.",
              },
              {
                id: "consent",
                label: "Capture consent",
                description:
                  "Patient signs data-treatment consent in-clinic on tablet; HMAC + witness metadata stored.",
              },
              {
                id: "draft",
                label: "Draft folio",
                description:
                  "Dentist opens encrypted draft folio with clinical sections, CUPS plan, and odontogram.",
              },
              {
                id: "sign",
                label: "Sign & freeze",
                description:
                  "CA token signs challenge; server verifies PKCS#7; document frozen as immutable signed record.",
              },
              {
                id: "rda",
                label: "Submit RDA",
                description:
                  "Outbox triggers Celery job; BundleAmbulatoryRDA sent to IHCE; VIDA stored on acceptance.",
              },
            ],
          },
          {
            id: "hc-delivery",
            label: "HC Delivery & Retention",
            description: "",
            steps: [
              {
                id: "export",
                label: "Export HC",
                description:
                  "Admin generates complete PDF in-clinic with SHA-256 hash; patient receives copy on physical media.",
              },
              {
                id: "retain",
                label: "Retention",
                description:
                  "Daily job classifies records: active archive (5y) → central archive (10y) → disposal eligibility.",
              },
              {
                id: "dispose",
                label: "Disposal",
                description:
                  "Signed disposal act generated; soft-delete with audit; notification to health authorities.",
              },
            ],
          },
        ],
      },
      dataModel: {
        title: "Data Model",
        description:
          "Organizations, patients, clinical histories, folios, consents, RDA documents, audit events, and retention records.",
        src: "/projects/clinic-hc/db-diagram.svg",
        alt: "Database diagram for AI Clinic Operations Copilot",
      },
      deployment: {
        title: "Cloud Infrastructure",
        description:
          "The platform was deployed using production-grade AWS infrastructure. Git push triggers GitHub Actions, which builds Docker images, pushes to Amazon ECR, and rolls out to EC2 where Docker Compose runs the full production stack behind Caddy with Let's Encrypt TLS.",
        hosting: "AWS · EC2 · RDS · S3 · ECR · GitHub Actions",
        pipelineTitle: "Deployment pipeline",
        pipeline: [
          { label: "Git Push" },
          { label: "GitHub Actions" },
          { label: "Docker Build" },
          { label: "Amazon ECR" },
          { label: "EC2" },
          { label: "Docker Compose" },
          { label: "Production" },
        ],
        environments: [
          {
            label: "Development",
            services: [
              { name: "Frontend", tech: "Next.js · Docker" },
              { name: "API", tech: "FastAPI · Uvicorn" },
              { name: "Workers", tech: "Celery · Redis" },
              { name: "Database", tech: "PostgreSQL 16 · Docker" },
              { name: "Files", tech: "MinIO (S3-compatible)" },
            ],
          },
          {
            label: "Production (AWS)",
            heading: "Infrastructure",
            services: [
              { name: "Compute", tech: "Amazon EC2" },
              { name: "Database", tech: "Amazon RDS PostgreSQL" },
              { name: "Object storage", tech: "Amazon S3" },
              { name: "Container registry", tech: "Amazon ECR" },
              { name: "Identity", tech: "IAM Roles" },
              { name: "Networking", tech: "Elastic IP" },
              { name: "TLS / reverse proxy", tech: "Caddy + Let's Encrypt" },
              { name: "CI/CD", tech: "GitHub Actions" },
            ],
          },
        ],
      },
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
          id: "append-only-folios",
          title: "Append-only folios instead of CRUD clinical records",
          why: "Colombian law requires signed clinical information to be immutable. Corrections must be additive and traceable with the original always visible.",
          tradeoffs:
            "More complex UX (original + correction shown together) and more storage, but legally defensible and audit-ready.",
          alternatives:
            "Standard UPDATE/DELETE with an edit-history table, or soft-delete with overwritten fields.",
          rejected:
            "Edit-history patterns do not satisfy legal immutability requirements. The original signed record must remain intact and visible forever.",
        },
        {
          id: "ca-token-signing",
          title: "Certified digital signature via client-side CA token",
          why: "Law 2015/2020 requires certified digital signatures from Colombian CAs. Private keys never leave the professional's token.",
          tradeoffs:
            "Requires browser extension and physical token — intentional friction. Simple e-signatures are legally insufficient.",
          alternatives: "Server-side HSM signing, simple electronic signature, or PDF upload of scanned signatures.",
          rejected:
            "Server-side signing would hold private keys against CA policy. Simple e-signatures fail the legal standard for clinical record closure.",
        },
        {
          id: "openapi-contracts",
          title: "OpenAPI as the single contract source of truth",
          why: "Dozens of endpoints with strict Pydantic schemas must stay synchronized between FastAPI and Next.js without runtime drift.",
          tradeoffs: "Contract regeneration step on schema changes, but failures surface at build time instead of in production.",
          alternatives: "Hand-written TypeScript types, tRPC, or GraphQL code generation.",
          rejected:
            "Hand-written types diverged quickly on a large API surface. OpenAPI from FastAPI gives automatic sync via openapi-typescript and Zod.",
        },
        {
          id: "transactional-outbox",
          title: "Transactional outbox for RDA submission",
          why: "Signing a clinical record must atomically persist the signed document AND reliably trigger IHCE submission even when MinSalud is temporarily unavailable.",
          tradeoffs:
            "Eventual consistency for RDA delivery (seconds to minutes), but no lost submissions on transient failures.",
          alternatives: "Direct HTTP call after sign, fire-and-forget async task, or manual RDA submission.",
          rejected:
            "Direct calls coupled the sign transaction to IHCE availability. Fire-and-forget lost RDAs on worker crashes.",
        },
        {
          id: "column-encryption",
          title: "Column-level encryption for sensitive clinical drafts",
          why: "Draft documents and consent signature material contain sensitive health data that must be encrypted at rest with rotatable keys.",
          tradeoffs:
            "Encryption applied selectively — not every column — to balance security with queryability for non-sensitive metadata.",
          alternatives: "Full-database encryption only, application-level encryption of all fields, or no encryption at column level.",
          rejected:
            "Full-database encryption alone does not protect against application-level leaks. Encrypting everything hurts query performance on folio numbers and timestamps.",
        },
        {
          id: "vertical-slices",
          title: "Vertical slice architecture over horizontal layers",
          why: "Clinical domains (patients, records, consents, RDA) need clear boundaries with tenant isolation enforceable per module.",
          tradeoffs: "More packages and import rules upfront, but prevents circular dependencies and scope creep.",
          alternatives: "Global services/, repositories/, and schemas/ folders with shared logic.",
          rejected:
            "Horizontal layers created circular imports and made it unclear where new clinical features belong. Lint rules now enforce feature boundaries.",
        },
        {
          id: "aws-ec2-compose",
          title: "AWS EC2 + Docker Compose for production (not ECS)",
          why: "A dedicated single-clinic deployment maps cleanly to one EC2 instance running the same Docker Compose topology used in development — simpler ops for a solo-maintained compliance platform.",
          tradeoffs:
            "Manual scaling and host patching responsibility on EC2; acceptable for a single-tenant clinic workload with predictable traffic.",
          alternatives: "ECS/Fargate, Kubernetes, or managed PaaS (Railway, Render).",
          rejected:
            "Orchestrator overhead was not justified for one clinic tenant. EC2 + ECR + Compose kept parity with local dev and reduced deployment surprise.",
        },
      ],
    },
    security: [
      {
        title: "JWT + MFA authentication",
        description:
          "Short-lived access tokens with httpOnly refresh cookies. MFA TOTP mandatory for professionals and administrators.",
      },
      {
        title: "Least-privilege RBAC",
        description:
          "Admin, dentist, assistant, and receptionist roles scoped strictly to their clinical or operational function.",
      },
      {
        title: "Immutable audit trail",
        description:
          "Every sensitive operation logged with user, action, entity, before/after values, IP, and timestamp. INSERT-only at DB level.",
      },
      {
        title: "Column-level encryption",
        description:
          "AES-GCM encryption for draft clinical documents and consent signature material with rotatable keys.",
      },
      {
        title: "IAM roles for S3 access",
        description:
          "Production EC2 uses IAM roles instead of static credentials — boto3 resolves permissions via instance metadata.",
      },
      {
        title: "HTTPS with Caddy",
        description:
          "Caddy reverse proxy on EC2 terminates TLS with Let's Encrypt certificates for production traffic.",
      },
    ],
    screenshots: {
      desktop: [HERO_IMAGE, HERO_IMAGE],
      tablet: [HERO_IMAGE],
      mobile: [HERO_IMAGE],
    },
    results: {
      eyebrow: "Impact",
      headline: "Operate legally or close — compliance targets are non-negotiable.",
      subheadline:
        "The platform is built around measurable compliance KPIs that determine whether a clinic can keep its license to operate.",
      impactStory: [
        {
          label: "Risk",
          body: "Paper records and non-compliant systems expose clinics to fines up to 2,000 SMLMV, suspension, and closure by health authorities.",
        },
        {
          label: "Intervention",
          body: "Law encoded into software: append-only folios, certified signatures, FHIR RDA automation, and immutable audit evidence.",
        },
        {
          label: "Outcome",
          body: "A real dental clinic operates on production AWS infrastructure with electronic health records that satisfy Colombian interoperability and data-protection requirements.",
        },
      ],
      supportingLabel: "Compliance & delivery KPIs",
      metrics: [
        {
          label: "Cloud deployment",
          value: "AWS",
          description:
            "Production on EC2, RDS PostgreSQL, S3, and ECR — my first end-to-end cloud deployment with GitHub Actions CI/CD.",
        },
        {
          label: "Certified signatures",
          value: "100%",
          description:
            "Target: every closed clinical record carries a valid certified digital signature from the treating professional.",
        },
        {
          label: "RDA / VIDA acceptance",
          value: "≥ 99%",
          description:
            "Target: signed visits with RDA submitted and VIDA received, allowing for transient MinSalud failures with retries.",
        },
        {
          label: "Consent before care",
          value: "100%",
          description:
            "Target: valid informed consent captured before any clinical folio can be opened.",
        },
        {
          label: "Audit trail coverage",
          value: "100%",
          description:
            "Target: every operation on clinical data has a corresponding immutable audit event.",
        },
        {
          label: "Retention compliance",
          value: "15 years",
          description:
            "Minimum retention: 5 years active archive + 10 years central archive before eligible disposal.",
        },
        {
          label: "Regulations covered",
          value: "6",
          description:
            "Law 2015, Law 1581, Res. 1995, Res. 839, Res. 866, and Res. 1888 encoded as product rules R1–R13.",
        },
      ],
      proofChallenge: {
        challenge: "Healthcare CRUD is not enough",
        problem:
          "Colombian law treats clinical records as immutable legal documents with interoperability, retention, and signature requirements.",
        decision:
          "Build a compliance engine with folio-based append-only records, government FHIR integration, and audit-by-default architecture.",
        result:
          "The platform reframes clinic software from an admin panel into a regulatory compliance system that happens to manage patients.",
      },
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Repeat",
          description: "What is worth carrying into the next regulated product.",
          items: [
            "Constitution-driven development (business rules + technical constitution) prevented shortcuts that would violate compliance.",
            "The folio model maps directly to how Colombian law thinks about clinical records — chronological, signable sheets.",
            "Transactional outbox decoupled sign operations from IHCE availability without losing RDA submissions.",
            "EC2 + ECR + Docker Compose on AWS gave production parity with local dev — same topology, automated via GitHub Actions.",
          ],
        },
        {
          title: "Refine",
          description: "What deserves another iteration.",
          items: [
            "Operational runbooks for backup, monitoring, and disaster recovery on RDS and EC2.",
            "Compliance dashboard polish — RDA/VIDA status semaphores and retention archive visibility for administrators.",
            "Playwright e2e coverage for the full sign → RDA → export flow in CI.",
          ],
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "In regulated domains, compliance is the product — not a checkbox added after the CRUD is done.",
            "Law shapes the data model: append-only, rectification-as-new-record, and retention stages are schema decisions, not preferences.",
            "Interoperability is a pipeline (FHIR profiling, OAuth2, retries, VIDA, clarifying notes) — not a single API endpoint.",
            "Shipping regulated healthcare software to AWS taught me that CI/CD and IAM matter as much as the domain model.",
          ],
        },
      ],
    },
    techStack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "Amazon EC2" },
      { name: "Amazon RDS" },
      { name: "Amazon S3" },
      { name: "Amazon ECR" },
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "FHIR" },
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Want the compliance architecture details?",
      subheadline:
        "Explore the repository or reach out if you want to talk through append-only clinical records, FHIR interoperability, or regulated full-stack design.",
      githubLabel: "Repository",
      demoLabel: "Live Demo",
      contactLabel: "Contact Me",
      contactHref: "/#contact",
    },
    relatedProjects: ["legal-copilot", "caloric-estimator"],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies.",
    },
  },
};
