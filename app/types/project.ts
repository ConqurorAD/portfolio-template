import { type Project } from "@/app/types";

const projects: Project[] = [
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
];

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
