const profile = {
  name: "John Doe",
  role: "Frontend Developer",
  location: "Springfield, USA ",
  image: "/about.png",
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/johndoe", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/johndoe/", icon: "linkedin" },
  { name: "Facebook", url: "https://facebook.com/johndoe", icon: "facebook" },
  { name: "Instagram", url: "https://instagram.com/johndoe", icon: "instagram" },
];

const introduction = `
I’m John Doe, a frontend developer based in Springfield, USA. I specialize in
building modern web applications with React, Next.js, and TypeScript — from
marketing sites and community platforms to full e-commerce systems.

My work focuses on interfaces that are fast, responsive, and accessible. I care
about clear information hierarchy, sensible performance budgets, and code that
stays easy to maintain as a product grows.

I’m currently working as a frontend developer in Springfield, contributing to
production React and Next.js applications, and I enjoy turning complex product
ideas into interfaces that are simple to use and simple to extend.
`;

const workExperience = [
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
  },
] as const;

const studies = [
  {
    title: "BSc Computer Science",
    school: "State University",
    info: "Final year",
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
] as const;

const technicalSkills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "Figma", "Postman", "Linux"],
} as const;

export function getAboutData() {
  return {
    profile,
    socialLinks,
    introduction,
    workExperience,
    studies,
    technicalSkills,
  };
}
