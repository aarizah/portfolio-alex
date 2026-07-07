import type { CaseStudy } from "../types";

export const caloricEstimator: CaseStudy = {
  meta: {
    slug: "caloric-estimator",
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    tagline: "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    status: "Prototype",
    ogImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    recruiterShortcut: {
      label: "Recruiter shortcut",
      summary:
        "Two-minute read: accuracy problem, sensor fusion approach, embedded + cloud split, and prototype results.",
    },
  },
  sections: {
    hero: {
      tagline: "ESP32-powered food scale + vision API — ~10% error vs manual logging, sub-3 second inference.",
      status: "Prototype",
      stack: [
        "ESP32-S3",
        "C++",
        "OpenAI API",
        "Node.js"
      ],
      backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aarizah/FoodTracking"
    },
    quickOverview: {
      role: "Embedded + Full Stack Engineer",
      duration: "2 months",
      status: "Prototype",
      users: "Personal / demo",
      country: "Colombia",
      domain: "Health / IoT",
      cloud: "Node.js API",
      tech: "ESP32 · C++ · OpenAI · Express"
    },
    videoDemo: {
      poster: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      chapters: [
        {
          time: 0,
          label: "Place Food"
        },
        {
          time: 15,
          label: "Capture"
        },
        {
          time: 35,
          label: "Analysis"
        },
        {
          time: 55,
          label: "Result"
        }
      ]
    },
    problem: {
      eyebrow: "Problem",
      headline: "Manual calorie tracking is tedious and error-prone — users underestimate portions by 30–50% on average.",
      lead: "Existing apps rely on user input alone. Combining physical weight with computer vision closes the accuracy gap.",
      supportingParagraphs: [],
      insightLabel: "The actual friction",
      insightHelper: "Visual guesses alone cannot anchor portion size — weight data has to close the loop.",
      bridgeBefore: "Understand the pain",
      bridgeAfter: "Then see the product response",
      illustration: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    },
    solutionOverview: {
      eyebrow: "Solution",
      headline: "Fuse weight and vision instead of asking users to guess portions.",
      subheadline: "Place food on the scale, capture an image, and let the backend correlate mass with visual portion estimates.",
      capabilitiesLabel: "Capabilities behind the journey",
      cards: [
        {
          title: "Weight Sensor",
          description: "HX711 load cell with calibrated gram readings."
        },
        {
          title: "Camera Module",
          description: "OV2640 capture triggered on stable weight."
        },
        {
          title: "Vision API",
          description: "Food identification and portion estimation via OpenAI."
        },
        {
          title: "Fusion Logic",
          description: "Weight + visual data combined for calorie estimate."
        },
        {
          title: "Embedded UI",
          description: "OLED display with real-time feedback on device."
        },
        {
          title: "Cloud Sync",
          description: "Optional logging to Node.js backend for history."
        }
      ]
    },
    featureWalkthrough: {
      items: [
        {
          id: "scale",
          label: "Scale",
          screenshot: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          explanation: "Place food on the scale — auto-detects stable weight threshold."
        },
        {
          id: "capture",
          label: "Capture",
          screenshot: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          explanation: "Camera captures top-down image synchronized with weight reading."
        },
        {
          id: "analyze",
          label: "Analyze",
          screenshot: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          explanation: "Vision API identifies food items and estimates portion size."
        },
        {
          id: "result",
          label: "Result",
          screenshot: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          explanation: "Fused calorie estimate displayed on OLED and synced to app."
        }
      ]
    },
    architecture: {
      eyebrow: "Architecture",
      headline: "How the system is built.",
      subheadline: "Six views — stack, containers, security, runtime flow, data model, and where it runs.",
      systemOverview: {
        title: "System Overview",
        description: "ESP32 reads weight and captures an image; the cloud API runs vision inference and returns a calorie estimate.",
        nodes: [
          { id: "esp32", label: "ESP32-S3", description: "Load cell + camera capture; sends weight and image to API.", technologies: ["C++", "HX711", "OV2640"] },
          { id: "api", label: "Node.js API", description: "Receives payloads, proxies OpenAI Vision, normalizes response.", technologies: ["Node.js", "Express"] },
          { id: "vision", label: "Vision API", description: "Identifies food and portion hints.", technologies: ["OpenAI Vision"] },
          { id: "storage", label: "PostgreSQL", description: "Captures, estimates, calibration history.", technologies: ["PostgreSQL"] },
          { id: "display", label: "OLED / Web", description: "Shows calories and confidence to the user.", technologies: ["OLED"] }
        ],
        tableColumns: { layer: "Layer", role: "Role", stack: "Stack" },
        technologies: ["ESP32-S3", "C++", "Node.js", "OpenAI Vision", "PostgreSQL"]
      },
      c4Model: { title: "C4 Model", description: "Container diagram — embedded hardware, API, vision service, and storage.", src: "/projects/caloric-estimator/c4.svg", alt: "C4 diagram for AI Caloric Estimator" },
      security: {
        title: "Security",
        description: "Provider keys stay in the API; device traffic over HTTPS.",
        items: [
          { id: "authentication", label: "Device auth", description: "Server-issued credentials for trusted devices.", technologies: ["Device token"] },
          { id: "encryption", label: "Encryption", description: "HTTPS for device-to-cloud payloads.", technologies: ["HTTPS"] },
          { id: "secrets", label: "Secrets", description: "OpenAI keys in API env — never in firmware.", technologies: ["Server env"] },
          { id: "authorization", label: "Ownership", description: "Estimate history scoped to user or device.", technologies: ["Ownership checks"] }
        ]
      },
      coreWorkflows: {
        title: "Core Workflows",
        description: "From physical measurement to calorie estimate.",
        workflows: [{ id: "estimate", label: "Calorie Estimate", description: "", steps: [
          { id: "place", label: "Weigh", description: "Load cell reads stable weight in grams." },
          { id: "capture", label: "Capture", description: "Camera captures meal image; ESP32 sends weight + image to API." },
          { id: "analyze", label: "Analyze", description: "Vision model identifies food; API fuses with weight for calorie estimate." },
          { id: "result", label: "Display", description: "Estimate shown on OLED; history stored in PostgreSQL." }
        ] }]
      },
      dataModel: {
        title: "Data Model",
        description: "Devices, captures, food estimates, and calibration.",
        alt: "Database diagram for AI Caloric Estimator"
      },
      deployment: {
        title: "Deployment",
        description: "Firmware flashed to ESP32 via PlatformIO. API deployed to cloud; model calls stay server-side.",
        hosting: "ESP32 firmware · Cloud API · PostgreSQL",
        environments: [
          {
            label: "Device",
            services: [
              { name: "Firmware", tech: "ESP32-S3 · PlatformIO" },
              { name: "Sensors", tech: "HX711 · OV2640" },
              { name: "Display", tech: "OLED" }
            ]
          },
          {
            label: "Cloud",
            services: [
              { name: "API", tech: "Node.js · Container" },
              { name: "Vision", tech: "OpenAI API" },
              { name: "Database", tech: "PostgreSQL" }
            ]
          }
        ]
      }
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
          id: "esp32",
          title: "ESP32-S3 over Raspberry Pi",
          why: "Lower power, integrated camera interface, sufficient for prototype.",
          tradeoffs: "Limited compute; all heavy lifting offloaded to cloud.",
          alternatives: "Raspberry Pi, Jetson Nano.",
          rejected: "Overkill for weight + capture workflow; higher cost and power."
        },
        {
          id: "cloud-vision",
          title: "Cloud Vision API",
          why: "No training data or ML ops for food classification MVP.",
          tradeoffs: "Requires WiFi; latency ~2s per request.",
          alternatives: "On-device TFLite model.",
          rejected: "Custom model needs large labeled dataset; API faster to ship."
        }
      ]
    },
    security: [
      {
        title: "API Key Proxy",
        description: "OpenAI keys never exposed on embedded device."
      },
      {
        title: "HTTPS Only",
        description: "All device-to-cloud communication encrypted."
      },
      {
        title: "Rate Limiting",
        description: "Per-device request throttling on backend."
      }
    ],
    screenshots: {
      desktop: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      ],
      tablet: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      ],
      mobile: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    results: {
      eyebrow: "Impact",
      headline: "90% error reduction with ~10% final accuracy.",
      subheadline:
        "Fusing load-cell weight with vision-grounded estimates in under 3 seconds.",
      impactStory: [
        {
          label: "Friction",
          body: "Manual calorie logging underestimates portions and breaks down on everyday meals."
        },
        {
          label: "Intervention",
          body: "Fuse camera vision with load-cell weight for grounded portion estimates."
        },
        {
          label: "Outcome",
          body: "90% error reduction with ~10% final accuracy."
        }
      ],
      supportingLabel: "Supporting signals",
      metrics: [
        {
          label: "Error Reduction",
          value: "90%"
        },
        {
          label: "Accuracy",
          value: "~10%"
        },
        {
          label: "Processing",
          value: "<3 sec"
        },
        {
          label: "Hardware",
          value: "Shipped"
        }
      ],
      proofChallenge: {
        challenge: "Weight stability",
        problem: "Vibrations caused false readings during capture.",
        decision: "Debounce with 500ms stable-weight threshold.",
        result: "Reliable capture trigger in 95% of tests."
      }
    },
    lessonsLearned: {
      eyebrow: "Lessons",
      groups: [
        {
          title: "Repeat",
          description: "What is worth carrying into the next product.",
          items: [
            "Sensor fusion approach validated accuracy gains.",
            "FreeRTOS task separation kept firmware maintainable."
          ]
        },
        {
          title: "Refine",
          description: "What deserves another iteration.",
          items: [
            "On-device fallback for offline use.",
            "Custom fine-tuned food model for latency."
          ]
        },
        {
          title: "Transfer",
          description: "What changed my engineering judgment.",
          items: [
            "Physical sensors anchor vision estimates — neither alone is enough.",
            "Prototype hardware constraints shape API design."
          ]
        }
      ]
    },
    techStack: [
      {
        name: "ESP32-S3"
      },
      {
        name: "C++"
      },
      {
        name: "FreeRTOS"
      },
      {
        name: "OpenAI API"
      },
      {
        name: "Node.js"
      },
      {
        name: "Express"
      },
      {
        name: "TypeScript"
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
      "legal-copilot",
      "clinic-hc"
    ],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies."
    }
  }
};
