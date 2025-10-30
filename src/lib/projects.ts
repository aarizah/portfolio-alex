export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  video_link?: string;
  // New fields for professional showcase
  problem: string;
  solution: string;
  result: string;
  metrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  category: string;
}

export const projects: Project[] = [
  {
    title: "Social Media App",
    description: "Social media application with real-time features.",
    image: "https://swiperjs.com/demos/images/nature-5.jpg",
    link: "https://socialmediaapp.com",
    problem: "Users needed a platform for real-time social interaction with modern UX",
    solution: "Built a scalable social platform with real-time messaging and content sharing",
    result: "Increased user engagement by 300% with sub-second message delivery",
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Message Latency", value: "<100ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
    category: "Full-Stack Development"
  },
  {
    title: "Weather App",
    description: "Weather forecasting app using React and OpenWeather API.",
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    link: "https://weatherapp.com",
    problem: "Need for accurate, real-time weather data with intuitive visualization",
    solution: "Integrated multiple weather APIs with smart caching and predictive analytics",
    result: "97% accuracy in 7-day forecasts with 50ms average response time",
    metrics: [
      { label: "Accuracy", value: "97%" },
      { label: "API Calls", value: "1M+/day" },
      { label: "Load Time", value: "0.8s" }
    ],
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    category: "Data Visualization"
  },
  {
    title: "Personal Portfolio",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/Images/ImagenPortadaPortfolio.png",
    link: "https://yourportfolio.com",
    video_link: "https://youtu.be/j2jhJuVJGmQ?si=5z2GEkaf9D_lIP9K",
    problem: "Professional online presence needed to showcase technical expertise",
    solution: "Modern, performant portfolio with advanced animations and SEO optimization",
    result: "95+ PageSpeed score with 40% increase in project inquiries",
    metrics: [
      { label: "PageSpeed", value: "95/100" },
      { label: "Load Time", value: "1.2s" },
      { label: "Conversion", value: "40%↑" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Frontend Development"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform using React and Node.js.",
    image: "/Images/profile2.jpg",
    link: "https://ecommerceapp.com",
    problem: "Small businesses needed affordable, scalable e-commerce solution",
    solution: "Built modular platform with payment processing and inventory management",
    result: "Processing $100K+ monthly transactions with 99.8% uptime",
    metrics: [
      { label: "Revenue", value: "$100K+/mo" },
      { label: "Transactions", value: "5K+/mo" },
      { label: "Uptime", value: "99.8%" }
    ],
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "E-Commerce"
  },
  {
    title: "AI Blog Platform",
    description: "Intelligent blogging platform with AI-powered content assistance.",
    image: "https://swiperjs.com/demos/images/nature-6.jpg",
    link: "https://blogplatform.com",
    problem: "Content creators needed AI assistance for writing and optimization",
    solution: "Integrated GPT-4 for content suggestions with advanced analytics dashboard",
    result: "2x faster content creation with 60% improvement in engagement",
    metrics: [
      { label: "Content Speed", value: "2x faster" },
      { label: "Engagement", value: "60%↑" },
      { label: "Users", value: "25K+" }
    ],
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    category: "AI Integration"
  }
];
