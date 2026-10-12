import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BellRing,
  Bus,
  Building2,
  ChevronRight,
  CircuitBoard,
  Compass,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Handshake,
  Instagram,
  Lightbulb,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Nfc,
  Radio,
  Rocket,
  Route,
  ShieldCheck,
  Signal,
  Target,
  Twitter,
  Users,
  Wifi,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { createElement, type SVGProps } from "react";

export const iconRegistry = {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BellRing,
  Bus,
  Building2,
  ChevronRight,
  CircuitBoard,
  Compass,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Handshake,
  Instagram,
  Lightbulb,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Nfc,
  Radio,
  Rocket,
  Route,
  ShieldCheck,
  Signal,
  Target,
  Twitter,
  Users,
  Wifi,
  Wrench,
  X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name as IconName] ?? CircuitBoard;
}

export function Icon({
  name,
  className,
  ...props
}: { name: string; className?: string } & SVGProps<SVGSVGElement>) {
  return createElement(getIcon(name), { className, ...props });
}
