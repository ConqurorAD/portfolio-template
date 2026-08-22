import {
  ArrowRight,
  Atom,
  Briefcase,
  ChevronRight,
  Code2,
  Database,
  Facebook,
  FileCode,
  Frame,
  GitBranch,
  Github,
  GraduationCap,
  Home,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Server,
  Terminal,
  Triangle,
  Twitter,
  User,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { createElement, type SVGProps } from "react";

export const iconRegistry = {
  ArrowRight,
  Atom,
  Briefcase,
  ChevronRight,
  Code2,
  Database,
  Facebook,
  FileCode,
  Frame,
  GitBranch,
  Github,
  GraduationCap,
  Home,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Server,
  Terminal,
  Triangle,
  Twitter,
  User,
  Wand2,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name as IconName] ?? Code2;
}

export function Icon({
  name,
  className,
  ...props
}: { name: string; className?: string } & SVGProps<SVGSVGElement>) {
  return createElement(getIcon(name), { className, ...props });
}


