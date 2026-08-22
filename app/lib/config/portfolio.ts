import type { PortfolioConfig } from "@/app/types";

const portfolio: PortfolioConfig = {
  url: "https://www.example.com",

  profile: {
    name: "John Doe",
    role: "Frontend Developer",
    tagline: "Building fast, thoughtful digital experiences.",
    image: "/about.png",
    availability: "Open for frontend and product work",
    location: "Springfield, USA",
  },

  geo: {
    city: "Springfield",
    country: "United States",
    countryCode: "US",
    timezone: "America/Chicago",
    flag: "🇺🇸",
    coordinates: {
      lat: 39.7817,
      lng: -89.6501,
    },
  },

  images: {
    hero: "/heroimage.png",
    about: "/about.png",
    contact: "/imagecp.png",
    seoFallback: "/picofme.png",
  },

  seo: {
    title: "John Doe | Frontend Developer in Springfield, USA",
    titleTemplate: "%s | John Doe",
    description:
      "John Doe is a frontend developer in Springfield, USA, building fast, accessible web applications with React, Next.js, and TypeScript. Explore his portfolio of projects, skills, and experience.",
    applicationName: "John Doe Portfolio",
    keywords: [
      "John Doe",
      "frontend developer",
      "frontend developer Springfield",
      "frontend developer USA",
      "React developer",
      "Next.js developer",
      "TypeScript developer",
      "frontend engineer",
      "web developer USA",
      "React.js developer USA",
      "Next.js developer USA",
    ],
    sameAs: [
      "https://github.com/johndoe",
      "https://www.linkedin.com/in/johndoe/",
      "https://facebook.com/johndoe",
      "https://instagram.com/johndoe",
    ],
    googleVerification: process.env.GOOGLE_VERIFICATION,
    image: "/picofme.png",
  },

  analytics: {
    umamiId: process.env.UMAMI_ID,
  },

  contact: {
    email: "hello@johndoe.dev",
    phone: "+1-555-0100",
    showPhone: true,
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/johndoe",
      icon: "Github",
      tooltip: "Where I store my bugs... ",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/johndoe/",
      icon: "Linkedin",
      tooltip: "Professional me (I promise I'm fun) ",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/johndoe",
      icon: "Facebook",
      tooltip: "Daily dose of nostalgia & drama ",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/johndoe",
      icon: "Instagram",
      tooltip: "Reels, vibes & fake perfection ",
    },
    {
      name: "Email",
      href: "mailto:hello@johndoe.dev",
      icon: "Mail",
      tooltip: "Let's build something cool together ",
    },
  ],

  hero: {
    kicker: "John Doe · Frontend Developer",
    heading: [
      { text: "Building fast," },
      { text: "thoughtful digital" },
      { text: "experiences.", gradient: true },
    ],
    primaryCta: { label: "View projects", href: "/projects", icon: "ArrowRight" },
    secondaryCta: { label: "About John", href: "/about", icon: "ChevronRight" },
  },

  heroStats: [
    { value: "4", label: "Projects in portfolio" },
    { value: "React · Next.js", label: "Core stack" },
    { value: "Springfield, USA", label: "Based in" },
  ],

  principles: [
    {
      icon: "Layers3",
      title: "Make it make sense",
      body: "Good interfaces shouldn't need explaining. If it feels obvious, the job is probably done.",
    },
    {
      icon: "Code2",
      title: "Pretty, but functional",
      body: "Because a beautiful interface that breaks the moment someone touches it is just expensive decoration.",
    },
    {
      icon: "Wand2",
      title: "Just enough magic",
      body: "Thoughtful motion, tiny details, and interactions that make people think, “okay, that’s nice.”",
    },
  ],

  home: {
    principlesKicker: "Rules I Made Up",
    principlesTitle: "How I Do Things",
    principlesDescription:
      "A clear, practical approach to frontend work, product structure, and motion.",
    workKicker: "Things I Made",
    workTitle: "What I’ve Been Cooking",
    workDescription:
      "A selection of React and Next.js projects focused on thoughtful design and solid frontend experiences.",
    aboutCta: { label: "Learn more about John", href: "/about", icon: "ArrowRight" },
    projectsCta: { label: "View all projects", href: "/projects", icon: "ArrowRight" },
  },

  status: {
    label: "Currently building",
    note: "Probably overthinking a button",
  },

  navigation: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "User" },
    { label: "Work", href: "/projects", icon: "Briefcase" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],

  footer: {
    description:
      "A personal portfolio for John Doe, a frontend developer from Springfield, USA, focused on React, Next.js, TypeScript, and modern web applications.",
    nav: [
      { label: "John’s homepage", href: "/" },
      { label: "About John", href: "/about" },
      { label: "Selected projects", href: "/projects" },
      { label: "Contact John", href: "/contact" },
    ],
    shareTitle: "John Doe | Frontend Developer",
    copyright: "John Doe",
  },

  projects: [
    {
      id: "1",
      title: "Wordly",
      description:
        "A modern slang dictionary built for discovering and understanding internet slang.",
      longDescription:
        "Wordly is a community-driven dictionary where users can explore, search, and discover trending slang, meanings, examples, and popular terms through a fast and interactive interface.",
      role: "Frontend design and development",
      image: "/projects/slang.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "https://example.com/wordly-demo",
      githubUrl: null,
      featured: true,
    },
    {
      id: "2",
      title: "Community Hub",
      description:
        "A community website built to organize events, identity, and updates.",
      longDescription:
        "Designed and developed a website for a local community with event discovery, club profiles, and reusable content sections for future growth.",
      role: "Design and frontend development",
      image: "/projects/projectone.png",
      tags: ["React"],
      liveUrl: "https://example.com/community-hub-demo",
      githubUrl: "https://github.com/johndoe/community-hub",
      featured: false,
    },
    {
      id: "3",
      title: "Secure Document Signing Platform",
      description:
        "A secure signature workflow with verification and audit trails.",
      longDescription:
        "A digital signature platform that enables secure document signing with verification steps, signing flows, and audit-friendly history.",
      role: "Frontend ",
      image: "/projects/projecttwo.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com/signflow-demo",
      githubUrl: "https://github.com/johndoe/signflow",
      featured: false,
    },
    {
      id: "4",
      title: "CityPulse",
      description:
        "A civic issue reporting platform designed to help citizens report, track, and engage with local community problems.",
      longDescription:
        "CityPulse is a location-aware civic platform that makes it easier for citizens to report local issues, track their progress, and stay informed about problems in their community through an interactive and user-friendly interface.",
      role: "Frontend design and development",
      image: "/projects/civiceye.png",
      tags: ["React", "TypeScript", "Maps", "Geolocation"],
      liveUrl: "https://example.com/citypulse-demo",
      githubUrl: "https://github.com/johndoe/citypulse-frontend",
      featured: true,
    },
  ],

  projectsPage: {
    kicker: "Selected work",
    heading: [
      { text: "Selected projects," },
      { text: "built to solve" },
      { text: "real problems.", gradient: true },
    ],
    description:
      "A selection of React and Next.js projects spanning e-commerce, community platforms, and modern web applications.",
    indexCard: {
      title: "Work index",
      countLabel: "Selected projects",
      focusLabel: "Primary focus",
      focusValue: "Frontend",
      toolsLabel: "Main tools",
      toolsValue: "React · Next.js",
      footer: "From product interfaces to practical web applications.",
    },
    moreText:
      "More experiments, prototypes, and older work live on GitHub.",
    moreCtaLabel: "Explore more on GitHub",
  },

  aboutPage: {
    profileBadge: "Profile",
    introductionTitle: "Introduction",
    experienceTitle: "Work Experience",
    educationTitle: "Education",
    skillsTitle: "Technical Skills",
  },

  contactPage: {
    kicker: "Let’s connect",
    heading: [
      { text: "Let’s build" },
      { text: "something useful", gradient: true },
    ],
    intro:
      "If you need a frontend developer for React, Next.js, or TypeScript work, send me a message.\nI’m open to freelance work, collaborations, and thoughtful product builds.",
    imageBadge: "You’re Still Here?",
    emailCardTitle: "Drop me a line",
    emailCardText:
      "The fastest way to reach me. I check email throughout the day and usually reply within a few hours.",
    responseTime: "Response time: faster than her replies",
    basedInBody: "Working remotely from the beautiful city of lakes.",
    timezoneBody: "UTC-6. Usually online from 9 AM to 6 PM.",
    takeActionTitle: "Take action",
    takeActionText: "Choose the next step that works best for you.",
    actions: [
      {
        title: "View GitHub",
        body: "Explore repositories and recent code.",
        href: "https://github.com/johndoe",
        icon: "Github",
      },
      {
        title: "Connect on LinkedIn",
        body: "View my professional profile and experience.",
        href: "https://www.linkedin.com/in/johndoe/",
        icon: "Linkedin",
      },
      {
        title: "Follow on Instagram",
        body: "See updates and moments beyond work.",
        href: "https://instagram.com/johndoe",
        icon: "Instagram",
      },
    ],
  },

  openGraph: {
    home: {
      role: "Frontend Developer",
      description:
        "React, Next.js, TypeScript, and modern web applications from Springfield, USA.",
    },
    about: {
      subtitle: "About John",
      description:
        "Frontend developer background, experience, and technical skills.",
    },
    projects: {
      subtitle: "Projects",
      description: "Selected React and Next.js work with product context.",
    },
    contact: {
      subtitle: "Contact",
      description:
        "Available for frontend work, collaborations, and freelance projects.",
    },
  },

  sections: {
    about: true,
    projects: true,
    contact: true,
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showPrinciples: true,
    showAvailability: true,
    showHeroStats: true,
    projectLabels: {
      live: "Live demo",
      source: "Source",
    },
  },

  introduction: `
I’m John Doe, a frontend developer based in Springfield, USA. I specialize in
building modern web applications with React, Next.js, and TypeScript — from
marketing sites and community platforms to full e-commerce systems.

My work focuses on interfaces that are fast, responsive, and accessible. I care
about clear information hierarchy, sensible performance budgets, and code that
stays easy to maintain as a product grows.

I’m currently working as a frontend developer in Springfield, contributing to
production React and Next.js applications, and I enjoy turning complex product
ideas into interfaces that are simple to use and simple to extend.
`,

  workExperience: [
    {
      title: "Frontend Intern",
      company: "Acme Corp",
      period: "2026 — May 24, 2026",
      description:
        "Contributed to real-world React applications while developing practical experience in reusable UI, responsive design, and team workflows.",
    },
    {
      title: "Frontend Developer",
      company: "Acme Corp",
      period: "May 24, 2026 — Present",
      description:
        "Building and maintaining production-ready frontend experiences with React, reusable UI systems, and performance-focused improvements.",
      current: true,
    },
  ],

  education: [
    {
      title: "BSc Computer Science",
      school: "State University",
      info: "Final year",
      current: true,
    },
    {
      title: "High School Diploma",
      school: "Springfield High School",
      info: "GPA: 3.26",
    },
    {
      title: "Middle School",
      school: "Riverside Secondary School",
      info: "GPA: 3.90",
    },
  ],

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "Figma", "Postman", "Linux"],
  },
};

export default portfolio;
