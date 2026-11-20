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
  name: "Your Name", // TODO: replace
  role: "Full-Stack Developer", // TODO: replace
  tagline: "I build fast, useful web products.", // TODO: replace
  location: "Delhi, India", // TODO: replace
  about: [
    "I'm a full-stack developer who loves turning ideas into polished, production-ready products. I care about clean code, great UX, and shipping fast.", // TODO: replace
    "When I'm not coding, you'll find me exploring open-source projects, reading about system design, or experimenting with new technologies.", // TODO: replace
  ],
  resumeUrl: "/resume.pdf", // TODO: replace with actual resume
  socials: {
    github: "https://github.com/yourname", // TODO: replace
    linkedin: "https://linkedin.com/in/yourname", // TODO: replace
    email: "you@example.com", // TODO: replace
    twitter: "", // TODO: replace or leave blank
  },
  skills: [
    { category: "Languages", items: ["TypeScript", "Python", "JavaScript", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "VS Code", "Linux"] },
  ] as SkillGroup[],
  projects: [
    {
      title: "Project Alpha", // TODO: replace
      description: "A full-stack SaaS app that helps teams track tasks in real time. Reduced onboarding time by 40% with an intuitive drag-and-drop interface.", // TODO: replace
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      image: "/projects/alpha.png", // TODO: add image or remove
      liveUrl: "https://example.com", // TODO: replace
      repoUrl: "https://github.com/yourname/alpha", // TODO: replace
      featured: true,
    },
    {
      title: "Project Beta", // TODO: replace
      description: "An open-source CLI tool that automates boilerplate generation for Node.js APIs. Used by 500+ developers on GitHub.", // TODO: replace
      tech: ["Node.js", "TypeScript", "Shell"],
      repoUrl: "https://github.com/yourname/beta", // TODO: replace
      featured: true,
    },
    {
      title: "Project Gamma", // TODO: replace
      description: "A data visualization dashboard for e-commerce analytics. Built with server-side rendering for sub-second load times.", // TODO: replace
      tech: ["React", "Python", "FastAPI", "Chart.js"],
      liveUrl: "https://example.com", // TODO: replace
      repoUrl: "https://github.com/yourname/gamma", // TODO: replace
      featured: false,
    },
    {
      title: "Project Delta", // TODO: replace
      description: "A mobile-first PWA for event discovery and RSVP management. Supports offline mode and push notifications.", // TODO: replace
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      liveUrl: "https://example.com", // TODO: replace
      featured: false,
    },
  ] as Project[],
  experience: [
    {
      role: "Software Engineer Intern", // TODO: replace
      org: "Acme Corp", // TODO: replace
      period: "May 2024 – Aug 2024", // TODO: replace
      points: [
        "Built a React dashboard that cut customer support tickets by 25%.", // TODO: replace
        "Improved API response times by 30% by optimising PostgreSQL queries.", // TODO: replace
        "Shipped 3 features end-to-end in a 2-week sprint cycle.", // TODO: replace
      ],
    },
    {
      role: "B.Tech Computer Science", // TODO: replace
      org: "University Name", // TODO: replace
      period: "2022 – 2026", // TODO: replace
      points: [
        "CGPA 8.5/10. Relevant coursework: DSA, OS, DBMS, Computer Networks.", // TODO: replace
        "Core team member of the college coding club; organised 3 hackathons.", // TODO: replace
      ],
    },
  ] as Experience[],
};
