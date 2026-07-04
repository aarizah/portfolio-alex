import type { CaseStudy } from "./types";

const img =
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80";

export const chatterbox: CaseStudy = {
  meta: {
    slug: "chatterbox",
    title: "ChatterBox — Real-Time Team Chat",
    tagline:
      "Slack/Discord-style web app with authentication, channels, and real-time messaging.",
    status: "Live",
    ogImage: img,
  },
  sections: {
    hero: {
      tagline:
        "Full-stack real-time chat — sub-100ms delivery, JWT auth, and channel-based messaging at scale.",
      status: "Live",
      stack: ["React", "Node.js", "MongoDB", "WebSockets"],
      backgroundImage: img,
      github: "https://github.com/aarizah/chatterApp",
    },
    quickOverview: {
      role: "Full Stack Engineer",
      duration: "6 weeks",
      status: "Live",
      users: "Demo / open source",
      country: "Colombia",
      domain: "Communication",
      cloud: "Self-hosted",
      tech: "React · Express · MongoDB · WS",
    },
    videoDemo: {
      poster: img,
      chapters: [
        { time: 0, label: "Login" },
        { time: 15, label: "Channels" },
        { time: 35, label: "Messaging" },
        { time: 55, label: "Real-time" },
      ],
    },
    problem: {
      paragraphs: [
        "Team communication tools are either bloated enterprise suites or lack real-time reliability in side projects.",
        "Building a chat app from scratch forces mastery of auth, WebSockets, and data modeling — core full-stack skills.",
      ],
      illustration: img,
    },
    solutionOverview: {
      cards: [
        { title: "Authentication", description: "JWT + Argon2 password hashing with secure session flow." },
        { title: "Channels", description: "Public and private channels with membership management." },
        { title: "Real-time Messaging", description: "WebSocket delivery with <100ms latency." },
        { title: "Message History", description: "Paginated history with MongoDB indexing." },
        { title: "User Presence", description: "Online/offline status with heartbeat protocol." },
        { title: "File Sharing", description: "Inline media and file attachments in messages." },
      ],
    },
    featureWalkthrough: {
      items: [
        { id: "auth", label: "Auth", screenshot: img, explanation: "Register/login with Argon2-hashed passwords and JWT token management." },
        { id: "channels", label: "Channels", screenshot: img, explanation: "Create, join, and browse public and private channels." },
        { id: "chat", label: "Chat", screenshot: img, explanation: "Real-time message stream with typing indicators and read receipts." },
        { id: "profile", label: "Profile", screenshot: img, explanation: "User settings, avatar, and notification preferences." },
      ],
    },
    architecture: {
      layers: [
        {
          id: "frontend",
          label: "React SPA",
          panel: {
            title: "React Frontend",
            why: "Component-driven UI with WebSocket hook for real-time updates.",
            bullets: ["React 18", "Custom WS hook", "Optimistic sends"],
          },
        },
        {
          id: "api",
          label: "Express API",
          panel: {
            title: "Express + WS Server",
            why: "Unified HTTP and WebSocket server on single port.",
            bullets: ["REST endpoints", "WS upgrade", "Middleware chain"],
          },
        },
        {
          id: "auth",
          label: "Auth Layer",
          panel: {
            title: "JWT + Argon2",
            why: "Stateless auth scales horizontally; Argon2 resists brute force.",
            bullets: ["Access tokens", "Refresh rotation", "RBAC hooks"],
          },
        },
        {
          id: "db",
          label: "MongoDB",
          panel: {
            title: "MongoDB",
            why: "Flexible schema for messages, channels, and user metadata.",
            bullets: ["Indexed queries", "Aggregation", "TTL indexes"],
          },
        },
      ],
    },
    engineeringDecisions: [
      {
        id: "ws",
        title: "Native WebSockets",
        why: "Lowest latency for bidirectional messaging without Socket.io overhead.",
        tradeoffs: "Manual reconnection and heartbeat logic required.",
        alternatives: "Socket.io, SSE, polling.",
        rejected: "Socket.io adds bundle size; native WS sufficient for scope.",
      },
      {
        id: "argon2",
        title: "Argon2 over bcrypt",
        why: "Memory-hard hashing resists GPU-based attacks better.",
        tradeoffs: "Higher CPU/memory per hash on server.",
        alternatives: "bcrypt, scrypt.",
        rejected: "bcrypt is fine but Argon2 is current best practice for new projects.",
      },
      {
        id: "mongo",
        title: "MongoDB",
        why: "Message documents fit naturally; easy pagination with cursor-based queries.",
        tradeoffs: "Less strict schema than SQL.",
        alternatives: "PostgreSQL, Redis pub/sub.",
        rejected: "Postgres viable but Mongo's document model fits chat messages well.",
      },
    ],
    security: [
      { title: "Argon2 Hashing", description: "Passwords hashed with memory-hard Argon2id." },
      { title: "JWT Validation", description: "Token verification on every protected route and WS connection." },
      { title: "Input Sanitization", description: "XSS prevention on message content rendering." },
      { title: "Rate Limiting", description: "Per-IP throttling on auth and message endpoints." },
    ],
    screenshots: {
      desktop: [img, img],
      tablet: [img],
      mobile: [img],
    },
    challenges: [
      {
        challenge: "Message ordering",
        problem: "Concurrent sends caused out-of-order display.",
        decision: "Server-side timestamps as source of truth; client sorts on receive.",
        result: "Consistent ordering across all clients.",
      },
      {
        challenge: "Reconnection",
        problem: "Dropped connections lost messages during reconnect window.",
        decision: "Client-side message queue with replay on reconnect.",
        result: "Zero message loss in normal network conditions.",
      },
    ],
    results: [
      { label: "Delivery", value: "<100ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Concurrent", value: "1000+" },
      { label: "Open Source", value: "Live" },
    ],
    lessonsLearned: {
      wentWell: ["WebSocket architecture scaled cleanly to 1000+ connections.", "Optimistic UI made chat feel instant."],
      wouldImprove: ["Add end-to-end encryption for DMs.", "Implement message search with full-text index."],
      learned: ["Real-time systems need explicit reconnection contracts.", "Auth must extend to WebSocket handshake, not just HTTP."],
    },
    techStack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "WebSockets" },
      { name: "JWT" },
    ],
    cta: {
      github: "https://github.com/aarizah/chatterApp",
      contactHref: "/#contact",
    },
    relatedProjects: ["legal-copilot", "caloric-estimator"],
  },
};
