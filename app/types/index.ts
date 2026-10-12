import { IconName } from "@/app/lib/icons";

export interface HeadingLine {
  text: string;
  accent?: boolean;
}

export interface CtaItem {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export interface FactItem {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
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
}

export interface ProfileConfig {
  name: string;
  role: string;
  organisation: string;
  tagline: string;
  location: string;
  availability?: string;
  image?: string;
}

export interface ImagesConfig {
  portrait: string;
  fallback?: string;
}

export interface ContactConfig {
  email?: string;
}

export interface SeoConfig {
  title: string;
  titleTemplate: string;
  description: string;
  applicationName?: string;
  keywords?: string[];
  googleVerification?: string;
  image?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  focus: string[];
  status?: string;
  links?: ProjectLink[];
  featured: boolean;
}

export interface Capability {
  icon: IconName;
  title: string;
  body: string;
  items: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  current?: boolean;
}

export interface SystemStage {
  step: string;
  title: string;
  body: string;
}

export interface BeckkonProduct {
  title: string;
  body: string;
}

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
  navigation: NavItem[];

  hero: {
    kicker: string;
    heading: HeadingLine[];
    intro: string;
    primaryCta: CtaItem;
    secondaryCta: CtaItem;
    facts: FactItem[];
  };

  home: {
    aboutKicker: string;
    aboutTitle: string;
    aboutBody: string[];
    aboutCta: CtaItem;
    workKicker: string;
    workTitle: string;
    workDescription: string;
    projectsCta: CtaItem;
    capabilitiesKicker: string;
    capabilitiesTitle: string;
    capabilitiesDescription: string;
    journeyKicker: string;
    journeyTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };

  aboutPage: {
    kicker: string;
    heading: HeadingLine[];
    intro: string;
    interestsTitle: string;
    interests: string[];
    focusTitle: string;
    focusBody: string;
  };

  beckkon: {
    kicker: string;
    name: string;
    tagline: string;
    summary: string;
    description: string[];
    roleTitle: string;
    roleBody: string;
    linkLabel: string;
    linkHref: string;
    stagesTitle: string;
    stagesDescription: string;
    stages: SystemStage[];
    capabilitiesTitle: string;
    capabilitiesDescription: string;
    products: BeckkonProduct[];
    note: string;
  };

  projectsPage: {
    kicker: string;
    heading: HeadingLine[];
    description: string;
    note: string;
  };

  projects: Project[];

  capabilities: {
    kicker: string;
    heading: HeadingLine[];
    description: string;
    items: Capability[];
  };

  journey: {
    kicker: string;
    heading: HeadingLine[];
    description: string;
    items: TimelineItem[];
  };

  contactPage: {
    kicker: string;
    heading: HeadingLine[];
    intro: string[];
    emailTitle: string;
    emailBody: string;
    beckkonTitle: string;
    beckkonBody: string;
    socialsTitle: string;
    locationTitle: string;
  };

  footer: {
    description: string;
    copyright: string;
  };

  openGraph: {
    home: { role: string; description: string };
    about: { subtitle: string; description: string };
    beckkon: { subtitle: string; description: string };
    projects: { subtitle: string; description: string };
    contact: { subtitle: string; description: string };
  };
}

export type { IconName } from "@/app/lib/icons";
