export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillGroup = { category: string; items: string[] };

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const content = {
  name: "Yug Bharti",
  role: "Backend Engineer",
  tagline: "I engineer high-concurrency backends, AI systems, and real-time platforms — built to scale.",
  location: "Delhi, India",
  about: [
    "I'm a backend engineer who obsesses over distributed systems, correctness under load, and clean API design. I love taking hard concurrency and reliability problems — the kind that break naive implementations — and solving them at the database and architecture level.",
    "When I'm not building, I'm reading about system design, contributing to open source, or exploring how AI agents can be composed into real products.",
  ],
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Yugbharti",
    linkedin: "https://www.linkedin.com/in/yug-bharti-3b0b242a1/",
    email: "yugbharti3@gmail.com",
    twitter: "",
  },
  skills: [
    { category: "Languages", items: ["TypeScript", "Python", "JavaScript", "SQL"] },
    { category: "Backend", items: ["Node.js", "Express", "Fastify", "FastAPI", "Socket.IO", "BullMQ"] },
    { category: "Data & Infra", items: ["PostgreSQL", "Redis", "Prisma", "Docker", "Turbo"] },
    { category: "AI & Frontend", items: ["LangGraph", "LangChain", "Gemini", "React", "Next.js", "Tailwind CSS"] },
  ] as SkillGroup[],
  projects: [
    {
      title: "RailGrid",
      description: "High-concurrency, zero-double-booking rail reservation engine inspired by IRCTC's Tatkal scale. Uses PostgreSQL btree_gist exclusion constraints, SKIP LOCKED seat selection, and a cryptographic idempotency engine to guarantee mathematical correctness even under thousands of simultaneous booking requests.",
      tech: ["TypeScript", "Fastify", "PostgreSQL", "Redis", "BullMQ", "Next.js", "Turbo"],
      repoUrl: "https://github.com/Yugbharti/RailGrid",
      featured: true,
    },
    {
      title: "Neural Arbiter",
      description: "Multi-agent AI debate system where Google Gemini and Groq Llama 3 argue opposite sides of any topic while a third LLM judges every exchange — scoring credibility, detecting logical fallacies, and streaming a live verdict. Built for the Protex Hackathon.",
      tech: ["Python", "FastAPI", "LangGraph", "Gemini", "Groq", "React", "WebSockets"],
      repoUrl: "https://github.com/Yugbharti/Neural-Arbiter",
      featured: true,
    },
    {
      title: "unAlone",
      description: "Location-based social platform for finding nearby people planning to hang out. Features JWT auth, OTP phone verification, geolocation-driven hangout posts, a request & match system, and real-time chat powered by Socket.IO and Redis pub/sub.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Socket.IO", "Prisma", "Next.js", "Twilio"],
      repoUrl: "https://github.com/Yugbharti/unalone",
      featured: true,
    },
    {
      title: "Finora AI",
      description: "AI-powered personal finance SaaS — tracks spending, forecasts budgets, and surfaces actionable insights using LLM-driven analysis. Built with a focus on clean API design and fast, reliable data pipelines.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Gemini API", "Next.js"],
      repoUrl: "https://github.com/Yugbharti/Finora-AI",
      featured: false,
    },
    {
      title: "Cliento AI",
      description: "AI-native CRM and client management platform. Automates follow-ups, summarises client interactions using LLMs, and surfaces priority actions so teams can focus on closing rather than tracking.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "LangChain", "React"],
      repoUrl: "https://github.com/Yugbharti/cliento-ai",
      featured: false,
    },
  ] as Project[],
  experience: [] as Experience[],
};
