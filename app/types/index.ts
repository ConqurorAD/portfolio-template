import { IconName } from "@/app/lib/icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  image: string;
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconName;
  tooltip?: string;
}

export interface GeoConfig {
  city: string;
  country: string;
  countryCode?: string;
  timezone?: string;
  flag?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ProfileConfig {
  name: string;
  role: string;
  tagline?: string;
  image: string;
  availability?: string;
  location: string;
}

export interface ContactConfig {
  email: string;
  phone?: string;
  showPhone?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Principle {
  icon: IconName;
  title: string;
  body: string;
}

export interface StatusConfig {
  label: string;
  note?: string;
}

export interface EducationItem {
  title: string;
  school: string;
  info?: string;
  current?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface CtaItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SeoConfig {
  title: string;
  titleTemplate: string;
  description: string;
  applicationName?: string;
  keywords?: string[];
  sameAs?: string[];
  googleVerification?: string;
  image?: string;
}

export interface OpenGraphCopy {
  role?: string;
  subtitle?: string;
  description: string;
}

export interface HeadingLine {
  text: string;
  gradient?: boolean;
}

export interface SectionsConfig {
  about: boolean;
  projects: boolean;
  contact: boolean;
  showExperience: boolean;
  showEducation: boolean;
  showSkills: boolean;
  showPrinciples: boolean;
  showAvailability: boolean;
  showHeroStats: boolean;
  projectLabels: {
    live: string;
    source: string;
  };
}

export interface ImagesConfig {
  hero: string;
  about: string;
  contact: string;
  seoFallback: string;
}

export interface ProjectsPageConfig {
  kicker: string;
  heading: HeadingLine[];
  description: string;
  indexCard: {
    title: string;
    countLabel: string;
    focusLabel: string;
    focusValue: string;
    toolsLabel: string;
    toolsValue: string;
    footer: string;
  };
  moreText: string;
  moreCtaLabel: string;
}

export interface AboutPageConfig {
  profileBadge: string;
  introductionTitle: string;
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
}

export interface ContactAction {
  key?: "github" | "linkedin" | "instagram" | string;
  title: string;
  body: string;
  href: string;
  icon: IconName;
}

export type { IconName } from "@/app/lib/icons";

export interface PortfolioConfig {
  url: string;
  profile: ProfileConfig;
  geo: GeoConfig;
  images: ImagesConfig;
  seo: SeoConfig;
  analytics?: {
    umamiId?: string;
  };
  contact: ContactConfig;
  socials: SocialLink[];
  hero: {
    kicker: string;
    heading: HeadingLine[];
    primaryCta: CtaItem;
    secondaryCta: CtaItem;
  };
  heroStats: HeroStat[];
  principles: Principle[];
  home: {
    principlesKicker: string;
    principlesTitle: string;
    principlesDescription: string;
    workKicker: string;
    workTitle: string;
    workDescription: string;
    aboutCta: CtaItem;
    projectsCta: CtaItem;
  };
  status: StatusConfig;
  navigation: NavItem[];
  footer: {
    description: string;
    nav: FooterLink[];
    shareTitle: string;
    copyright: string;
  };
  projects: Project[];
  projectsPage: ProjectsPageConfig;
  aboutPage: AboutPageConfig;
  contactPage: {
    kicker: string;
    heading: HeadingLine[];
    intro: string;
    imageBadge: string;
    emailCardTitle: string;
    emailCardText: string;
    responseTime: string;
    basedInBody: string;
    timezoneBody: string;
    takeActionTitle: string;
    takeActionText: string;
    actions: ContactAction[];
  };
  openGraph: {
    home: OpenGraphCopy;
    about: OpenGraphCopy;
    projects: OpenGraphCopy;
    contact: OpenGraphCopy;
  };
  sections: SectionsConfig;
  introduction: string;
  workExperience: Experience[];
  education: EducationItem[];
  skills: Record<string, string[]>;
}
