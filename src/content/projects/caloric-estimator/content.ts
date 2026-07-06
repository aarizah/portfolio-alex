import type { CaseStudy } from "../types";

const img =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

export const caloricEstimator: CaseStudy = {
  meta: {
    slug: "caloric-estimator",
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    tagline: "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    status: "Prototype",
    ogImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
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
      layersNavLabel: "System path",
      selectedLayerLabel: "Selected layer",
      securityPanelTitle: "Security lives inside the architecture",
      aiFlowPanelTitle: "AI flow details",
      layers: [
        {
          id: "embedded",
          label: "ESP32-S3",
          panel: {
            title: "ESP32-S3 Firmware",
            why: "Dual-core MCU with camera support and WiFi for API calls.",
            bullets: [
              "FreeRTOS tasks",
              "HX711 driver",
              "OV2640 capture"
            ]
          }
        },
        {
          id: "api",
          label: "Node.js API",
          panel: {
            title: "Express API",
            why: "Proxies vision requests, handles auth, and stores meal history.",
            bullets: [
              "OpenAI proxy",
              "Rate limiting",
              "TypeScript"
            ]
          }
        },
        {
          id: "vision",
          label: "Vision API",
          panel: {
            title: "OpenAI Vision",
            why: "Food identification without training a custom model.",
            bullets: [
              "GPT-4V",
              "Structured output",
              "Portion hints"
            ]
          }
        },
        {
          id: "fusion",
          label: "Fusion Engine",
          panel: {
            title: "Calorie Fusion",
            why: "Combines weight density tables with visual portion estimates.",
            bullets: [
              "Density lookup",
              "Confidence scoring",
              "Error bounds"
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
      github: "https://github.com/aarizah/FoodTracking",
      contactHref: "/#contact"
    },
    relatedProjects: [
      "legal-copilot",
      "chatterbox"
    ],
    relatedSection: {
      eyebrow: "Keep exploring",
      headline: "More case studies."
    }
  }
};
