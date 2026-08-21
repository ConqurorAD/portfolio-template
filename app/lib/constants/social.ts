import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/johndoe',
    icon: Github,
    tooltip: "Where I store my bugs...",
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/johndoe',
    icon: Linkedin,
    tooltip: "Professional me (I promise I'm fun)",
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/johndoe',
    icon: Facebook,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/johndoe',
    icon: Instagram,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Email',
    href: 'mailto:hello@johndoe.dev',
    icon: Mail,
    tooltip: "Let's build something cool together",
  },
] as const
