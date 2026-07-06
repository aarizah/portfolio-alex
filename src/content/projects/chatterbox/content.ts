import type { CaseStudy } from "../types";

export const chatterbox: CaseStudy = {
  meta: {
    slug: "chatterbox",
    title: "ChatterBox — Real-Time Team Chat",
    tagline: "Slack/Discord-style web app with authentication, channels, and real-time messaging.",
    status: "Live",
    ogImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
  },
  sections: {
    hero: {
      tagline: "Full-stack real-time chat — sub-100ms delivery, JWT auth, and channel-based messaging at scale.",
      status: "Live",
      stack: [
        "React",
        "Node.js",
        "MongoDB",
        "WebSockets"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aarizah/chatterApp"
    },
    quickOverview: {
      role: "Full Stack Engineer",
      duration: "6 weeks",
      status: "Live",
      users: "Demo / open source",
      country: "Colombia",
      domain: "Communication",
      cloud: "Self-hosted",
      tech: "React · Express · MongoDB · WS"
    },
    videoDemo: {
      poster: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
      chapters: [
        {
          time: 0,
          label: "Login"
        },
        {
          time: 15,
          label: "Channels"
        },
        {
          time: 35,
          label: "Messaging"
        },
        {
          time: 55,
          label: "Real-time"
        }
      ]
    },
    problem: {
      eyebrow: "Problem",
      headline: "Team communication tools are either bloated enterprise suites or lack real-time reliability in side projects.",
      lead: "Building a chat app from scratch forces mastery of auth, WebSockets, and data modeling — core full-stack skills.",
      supportingParagraphs: [],
      insightLabel: "The actual friction",
      insightHelper: "Side projects fail when real-time delivery and auth are treated as optional extras.",
      bridgeBefore: "Understand the pain",
      bridgeAfter: "Then see the product response",
      illustration: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline: "Real-time team chat built around auth, channels, and reliable delivery.",
      subheadline: "Users join channels, send messages, and see updates instantly while history stays persisted and searchable.",
      capabilitiesLabel: "Capabilities behind the journey",
      cards: [
        {
          title: "Authentication",
          description: "JWT + Argon2 password hashing with secure session flow."
        },
        {
          title: "Channels",
          description: "Public and private channels with membership management."
        },
        {
          title: "Real-time Messaging",
          description: "WebSocket delivery with <100ms latency."
        },
        {
          title: "Message History",
          description: "Paginated history with MongoDB indexing."
        },
        {
          title: "User Presence",
          description: "Online/offline status with heartbeat protocol."
        },
        {
          title: "File Sharing",
          description: "Inline media and file attachments in messages."
        }
      ]
    },
    featureWalkthrough: {
      items: [
        {
          id: "auth",
          label: "Auth",
          screenshot: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
          explanation: "Register/login with Argon2-hashed passwords and JWT token management."
        },
        {
          id: "channels",
          label: "Channels",
          screenshot: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
          explanation: "Create, join, and browse public and private channels."
        },
        {
          id: "chat",
          label: "Chat",
          screenshot: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
          explanation: "Real-time message stream with typing indicators and read receipts."
        },
        {
          id: "profile",
          label: "Profile",
          screenshot: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
          explanation: "User settings, avatar, and notification preferences."
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
          label: "React SPA",
          panel: {
            title: "React Frontend",
            why: "Component-driven UI with WebSocket hook for real-time updates.",
            bullets: [
              "React 18",
              "Custom WS hook",
              "Optimistic sends"
            ]
          }
        },
        {
          id: "api",
          label: "Express API",
          panel: {
            title: "Express + WS Server",
            why: "Unified HTTP and WebSocket server on single port.",
            bullets: [
              "REST endpoints",
              "WS upgrade",
              "Middleware chain"
            ]
          }
        },
        {
          id: "auth",
          label: "Auth Layer",
          panel: {
            title: "JWT + Argon2",
            why: "Stateless auth scales horizontally; Argon2 resists brute force.",
            bullets: [
              "Access tokens",
              "Refresh rotation",
              "RBAC hooks"
            ]
          }
        },
        {
          id: "db",
          label: "MongoDB",
          panel: {
            title: "MongoDB",
            why: "Flexible schema for messages, channels, and user metadata.",
            bullets: [
              "Indexed queries",
              "Aggregation",
              "TTL indexes"
            ]
          }
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
          id: "ws",
          title: "Native WebSockets",
          why: "Lowest latency for bidirectional messaging without Socket.io overhead.",
          tradeoffs: "Manual reconnection and heartbeat logic required.",
          alternatives: "Socket.io, SSE, polling.",
          rejected: "Socket.io adds bundle size; native WS sufficient for scope."
        },
        {
          id: "argon2",
          title: "Argon2 over bcrypt",
          why: "Memory-hard hashing resists GPU-based attacks better.",
          tradeoffs: "Higher CPU/memory per hash on server.",
          alternatives: "bcrypt, scrypt.",
          rejected: "bcrypt is fine but Argon2 is current best practice for new projects."
        },
        {
          id: "mongo",
          title: "MongoDB",
          why: "Message documents fit naturally; easy pagination with cursor-based queries.",
          tradeoffs: "Less strict schema than SQL.",
          alternatives: "PostgreSQL, Redis pub/sub.",
          rejected: "Postgres viable but Mongo's document model fits chat messages well."
        }
      ]
    },
    security: [
      {
        title: "Argon2 Hashing",
        description: "Passwords hashed with memory-hard Argon2id."
      },
      {
        title: "JWT Validation",
        description: "Token verification on every protected route and WS connection."
      },
      {
        title: "Input Sanitization",
        description: "XSS prevention on message content rendering."
      },
      {
        title: "Rate Limiting",
        description: "Per-IP throttling on auth and message endpoints."
      }
    ],
    screenshots: {
      desktop: [
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
      ],
      tablet: [
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
      ],
      mobile: [
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    results: {
      eyebrow: "Impact",
      impactStory: [
        {
          label: "Friction",
          body: "Teams need reliable real-time chat without enterprise bloat or fragile side projects."
        },
        {
          label: "Intervention",
          body: "Authenticated channels, WebSocket delivery, and persisted history in one stack."
        },
        {
          label: "Outcome",
          body: "<100ms delivery with 1000+ concurrent connections."
        }
      ],
      supportingLabel: "Supporting signals",
      metrics: [
        {
          label: "Delivery",
          value: "<100ms"
        },
        {
          label: "Uptime",
          value: "99.9%"
        },
        {
          label: "Concurrent",
          value: "1000+"
        },
        {
          label: "Open Source",
          value: "Live"
        }
      ],
      proofChallenge: {
        challenge: "Message ordering",
        problem: "Concurrent sends caused out-of-order display.",
        decision: "Server-side timestamps as source of truth; client sorts on receive.",
        result: "Consistent ordering across all clients."
      }
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Repeat",
          description: "What is worth carrying into the next product.",
          items: [
            "WebSocket architecture scaled cleanly to 1000+ connections.",
            "Optimistic UI made chat feel instant."
          ]
        },
        {
          title: "Refine",
          description: "What deserves another iteration.",
          items: [
            "Add end-to-end encryption for DMs.",
            "Implement message search with full-text index."
          ]
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "Real-time systems need explicit reconnection contracts.",
            "Auth must extend to WebSocket handshake, not just HTTP."
          ]
        }
      ]
    },
    techStack: [
      {
        name: "React"
      },
      {
        name: "TypeScript"
      },
      {
        name: "Node.js"
      },
      {
        name: "Express"
      },
      {
        name: "MongoDB"
      },
      {
        name: "WebSockets"
      },
      {
        name: "JWT"
      }
    ],
    cta: {
      eyebrow: "Next step",
      headline: "Want the implementation details?",
      subheadline: "Explore the repository, try the live flow, or reach out if you want to talk through the architecture behind it.",
      githubLabel: "Repository",
      demoLabel: "Live Demo",
      contactLabel: "Contact Me",
      github: "https://github.com/aarizah/chatterApp",
      contactHref: "/#contact"
    },
    relatedProjects: [
      "legal-copilot",
      "caloric-estimator"
    ],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies."
    }
  }
};
