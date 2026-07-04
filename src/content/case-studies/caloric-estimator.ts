import type { CaseStudy } from "./types";

const img =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

export const caloricEstimator: CaseStudy = {
  meta: {
    slug: "caloric-estimator",
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    tagline:
      "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    status: "Prototype",
    ogImage: img,
  },
  sections: {
    hero: {
      tagline:
        "ESP32-powered food scale + vision API — ~10% error vs manual logging, sub-3 second inference.",
      status: "Prototype",
      stack: ["ESP32-S3", "C++", "OpenAI API", "Node.js"],
      backgroundImage: img,
      github: "https://github.com/aarizah/FoodTracking",
    },
    quickOverview: {
      role: "Embedded + Full Stack Engineer",
      duration: "2 months",
      status: "Prototype",
      users: "Personal / demo",
      country: "Colombia",
      domain: "Health / IoT",
      cloud: "Node.js API",
      tech: "ESP32 · C++ · OpenAI · Express",
    },
    videoDemo: {
      poster: img,
      chapters: [
        { time: 0, label: "Place Food" },
        { time: 15, label: "Capture" },
        { time: 35, label: "Analysis" },
        { time: 55, label: "Result" },
      ],
    },
    problem: {
      paragraphs: [
        "Manual calorie tracking is tedious and error-prone — users underestimate portions by 30–50% on average.",
        "Existing apps rely on user input alone. Combining physical weight with computer vision closes the accuracy gap.",
      ],
      illustration: img,
    },
    solutionOverview: {
      cards: [
        { title: "Weight Sensor", description: "HX711 load cell with calibrated gram readings." },
        { title: "Camera Module", description: "OV2640 capture triggered on stable weight." },
        { title: "Vision API", description: "Food identification and portion estimation via OpenAI." },
        { title: "Fusion Logic", description: "Weight + visual data combined for calorie estimate." },
        { title: "Embedded UI", description: "OLED display with real-time feedback on device." },
        { title: "Cloud Sync", description: "Optional logging to Node.js backend for history." },
      ],
    },
    featureWalkthrough: {
      items: [
        { id: "scale", label: "Scale", screenshot: img, explanation: "Place food on the scale — auto-detects stable weight threshold." },
        { id: "capture", label: "Capture", screenshot: img, explanation: "Camera captures top-down image synchronized with weight reading." },
        { id: "analyze", label: "Analyze", screenshot: img, explanation: "Vision API identifies food items and estimates portion size." },
        { id: "result", label: "Result", screenshot: img, explanation: "Fused calorie estimate displayed on OLED and synced to app." },
      ],
    },
    architecture: {
      layers: [
        {
          id: "embedded",
          label: "ESP32-S3",
          panel: {
            title: "ESP32-S3 Firmware",
            why: "Dual-core MCU with camera support and WiFi for API calls.",
            bullets: ["FreeRTOS tasks", "HX711 driver", "OV2640 capture"],
          },
        },
        {
          id: "api",
          label: "Node.js API",
          panel: {
            title: "Express API",
            why: "Proxies vision requests, handles auth, and stores meal history.",
            bullets: ["OpenAI proxy", "Rate limiting", "TypeScript"],
          },
        },
        {
          id: "vision",
          label: "Vision API",
          panel: {
            title: "OpenAI Vision",
            why: "Food identification without training a custom model.",
            bullets: ["GPT-4V", "Structured output", "Portion hints"],
          },
        },
        {
          id: "fusion",
          label: "Fusion Engine",
          panel: {
            title: "Calorie Fusion",
            why: "Combines weight density tables with visual portion estimates.",
            bullets: ["Density lookup", "Confidence scoring", "Error bounds"],
          },
        },
      ],
    },
    engineeringDecisions: [
      {
        id: "esp32",
        title: "ESP32-S3 over Raspberry Pi",
        why: "Lower power, integrated camera interface, sufficient for prototype.",
        tradeoffs: "Limited compute; all heavy lifting offloaded to cloud.",
        alternatives: "Raspberry Pi, Jetson Nano.",
        rejected: "Overkill for weight + capture workflow; higher cost and power.",
      },
      {
        id: "cloud-vision",
        title: "Cloud Vision API",
        why: "No training data or ML ops for food classification MVP.",
        tradeoffs: "Requires WiFi; latency ~2s per request.",
        alternatives: "On-device TFLite model.",
        rejected: "Custom model needs large labeled dataset; API faster to ship.",
      },
    ],
    security: [
      { title: "API Key Proxy", description: "OpenAI keys never exposed on embedded device." },
      { title: "HTTPS Only", description: "All device-to-cloud communication encrypted." },
      { title: "Rate Limiting", description: "Per-device request throttling on backend." },
    ],
    screenshots: {
      desktop: [img],
      tablet: [img],
      mobile: [img],
    },
    challenges: [
      {
        challenge: "Weight stability",
        problem: "Vibrations caused false readings during capture.",
        decision: "Debounce with 500ms stable-weight threshold.",
        result: "Reliable capture trigger in 95% of tests.",
      },
      {
        challenge: "Mixed dishes",
        problem: "Single-food assumption broke on composite meals.",
        decision: "Multi-item detection with per-item calorie sum.",
        result: "Improved accuracy on complex plates.",
      },
    ],
    results: [
      { label: "Error Reduction", value: "90%" },
      { label: "Accuracy", value: "~10%" },
      { label: "Processing", value: "<3 sec" },
      { label: "Hardware", value: "Shipped" },
    ],
    lessonsLearned: {
      wentWell: ["Sensor fusion approach validated accuracy gains.", "FreeRTOS task separation kept firmware maintainable."],
      wouldImprove: ["On-device fallback for offline use.", "Custom fine-tuned food model for latency."],
      learned: ["Physical sensors anchor vision estimates — neither alone is enough.", "Prototype hardware constraints shape API design."],
    },
    techStack: [
      { name: "ESP32-S3" },
      { name: "C++" },
      { name: "FreeRTOS" },
      { name: "OpenAI API" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "TypeScript" },
    ],
    cta: {
      github: "https://github.com/aarizah/FoodTracking",
      contactHref: "/#contact",
    },
    relatedProjects: ["legal-copilot", "chatterbox"],
  },
};
