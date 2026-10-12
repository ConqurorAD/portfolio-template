import type { PortfolioConfig } from "@/app/types";

// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH
//
// Everything on the site (copy, metadata, sitemap, OG images) is driven by this
// file. Items marked with "TODO(personal)" are intentionally left as neutral
// placeholders because a verified value has not been provided yet. Replace them
// with real links before going live — never ship invented handles or numbers.
// ---------------------------------------------------------------------------

const portfolio: PortfolioConfig = {
  // TODO(personal): replace with the real production domain before launch.
  // This drives metadataBase, canonical URLs, sitemap.xml and robots.txt.
  url: "https://example.com",

  profile: {
    name: "Aditya Verma",
    role: "Co-founder & Chief Product Officer",
    organisation: "Beckkon Systems Pvt. Ltd.",
    tagline: "Building ideas into real-world systems.",
    location: "Varanasi, India",
    availability:
      "Open to conversations with founders, operators, investors and collaborators.",
    image: "/about.png",
  },

  geo: {
    city: "Varanasi",
    country: "India",
    countryCode: "IN",
    timezone: "Asia/Kolkata",
  },

  images: {
    // TODO(personal): swap in an authentic portrait at this path when available.
    portrait: "/about.png",
    fallback: "/picofme.png",
  },

  seo: {
    title: "Aditya Verma — Co-founder & CPO at Beckkon Systems",
    titleTemplate: "%s | Aditya Verma",
    description:
      "Aditya Verma is an Engineering Physics student at IIT (BHU), Varanasi, and co-founder and Chief Product Officer of Beckkon Systems, an IIT (BHU)-incubated startup building connected technology for school safety and student tracking.",
    applicationName: "Aditya Verma",
    keywords: [
      "Aditya Verma",
      "Aditya Verma IIT BHU",
      "Aditya Verma Beckkon",
      "Beckkon Systems",
      "Engineering Physics IIT BHU",
      "student safety startup",
      "IoT founder",
      "LoRaWAN",
      "BLE",
      "embedded systems",
      "product management",
      "hardware startup India",
    ],
    googleVerification: process.env.GOOGLE_VERIFICATION,
    image: "/picofme.png",
  },

  analytics: {
    umamiId: process.env.UMAMI_ID,
  },

  contact: {
    // TODO(personal): replace with Aditya's verified email address.
    email: "hello@example.com",
  },

  // TODO(personal): replace the placeholder hrefs below with Aditya's real
  // profiles. They are kept deliberately generic so nothing is fabricated.
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "Linkedin",
      tooltip: "Professional profile",
    },
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: "Github",
      tooltip: "Code and experiments",
    },
    {
      name: "X",
      href: "https://x.com/",
      icon: "Twitter",
      tooltip: "Notes and updates",
    },
    {
      name: "Email",
      href: "mailto:hello@example.com",
      icon: "Mail",
      tooltip: "Start a conversation",
    },
    {
      name: "Beckkon",
      href: "https://beckkon.com",
      icon: "ExternalLink",
      tooltip: "Beckkon Systems website",
    },
  ],

  navigation: [
    { label: "Home", href: "/", icon: "Compass" },
    { label: "About", href: "/about", icon: "Users" },
    { label: "Beckkon", href: "/beckkon", icon: "CircuitBoard" },
    { label: "Projects", href: "/projects", icon: "Target" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],

  hero: {
    kicker: "Co-founder & CPO · Beckkon Systems",
    heading: [
      { text: "Building ideas into" },
      { text: "real-world systems.", accent: true },
    ],
    intro:
      "I'm Aditya Verma — an Engineering Physics student at IIT (BHU), Varanasi, and co-founder of Beckkon Systems, an IIT (BHU)-incubated startup building connected technology for school safety and student tracking.",
    primaryCta: { label: "Explore Beckkon", href: "/beckkon", icon: "ArrowRight" },
    secondaryCta: { label: "About Aditya", href: "/about", icon: "ArrowRight" },
    facts: [
      { label: "Studying", value: "Engineering Physics, IIT (BHU) Varanasi" },
      { label: "Building", value: "Beckkon Systems — connected school safety" },
      { label: "Working with", value: "IoT, BLE, LoRaWAN & embedded systems" },
    ],
  },

  home: {
    aboutKicker: "About",
    aboutTitle: "A builder working across hardware, software and business.",
    aboutBody: [
      "I study Engineering Physics at IIT (BHU), Varanasi, and spend most of my time building Beckkon Systems — a startup we founded to make schools safer and more connected.",
      "My work sits at the intersection of physical devices and the software that gives them meaning: designing products, defining how they fit together, and figuring out how they create real value for the people who use them.",
    ],
    aboutCta: { label: "More about Aditya", href: "/about", icon: "ArrowRight" },
    workKicker: "Selected work",
    workTitle: "Systems I'm building.",
    workDescription:
      "Beckkon Systems is the main thread through my work today. Below are the pieces I help design, build and run.",
    projectsCta: { label: "View all projects", href: "/projects", icon: "ArrowRight" },
    capabilitiesKicker: "Capabilities",
    capabilitiesTitle: "What I bring to a build.",
    capabilitiesDescription:
      "A focused set of skills shaped by hands-on work on a hardware-and-software startup.",
    journeyKicker: "Journey",
    journeyTitle: "Where I'm coming from.",
    ctaTitle: "Let's build something useful.",
    ctaBody:
      "I'm always glad to talk about products, connected hardware, startups and school safety. If any of that overlaps with what you're working on, reach out.",
  },

  aboutPage: {
    kicker: "Profile",
    heading: [
      { text: "Engineer by training," },
      { text: "product builder in practice.", accent: true },
    ],
    intro:
      "I'm Aditya Verma, an Engineering Physics student at the Indian Institute of Technology (BHU), Varanasi. Alongside my degree I'm a co-founder and the Chief Product Officer of Beckkon Systems, an IIT (BHU)-incubated startup building technology infrastructure for school safety and student tracking.",
    interestsTitle: "What I work on",
    interests: [
      "IoT, BLE and LoRaWAN connected devices",
      "Embedded systems and hardware prototyping",
      "Product strategy, requirements and roadmap",
      "Business analysis, partnerships and go-to-market",
      "Turning ambiguous problems into shipped products",
    ],
    focusTitle: "How I think about the work",
    focusBody:
      "The problems I enjoy most sit where a physical device, a network and a piece of software all have to agree. That usually means learning fast, prototyping early, talking to the people who will actually use the thing, and staying close to the field while the product is still in motion. I care less about looking impressive and more about whether the system holds up in the real world.",
  },

  beckkon: {
    kicker: "Case study",
    name: "Beckkon Systems",
    tagline: "Connected infrastructure for school safety and student tracking.",
    summary:
      "Beckkon Systems is an IIT (BHU)-incubated technology startup building a hardware-and-software system that helps schools know where their students are — from the bus stop to the classroom.",
    description: [
      "Beckkon is built around a simple idea: a student's journey to and from school should be visible and safe. The platform pairs a smart ID card carried by each student with the infrastructure around a campus, then turns that into clear information for the people responsible for them.",
      "As co-founder and Chief Product Officer, I work across the product — shaping what we build, how the hardware and software fit together, and how each piece earns its place in a real school environment. In an early-stage startup that means moving between product definition, prototyping, field conversations and operations.",
    ],
    roleTitle: "My role",
    roleBody:
      "As Co-founder and Chief Product Officer I lead product definition and strategy: translating school and parent needs into concrete requirements, deciding how the smart ID card, the campus infrastructure and the cloud platform work together, and keeping the roadmap grounded in what can actually be built and deployed. I also work on the business side — research, partnerships and go-to-market — because at this stage the product and the business are the same conversation.",
    linkLabel: "Visit beckkon.com",
    linkHref: "https://beckkon.com",
    stagesTitle: "How the system fits together",
    stagesDescription:
      "The platform connects a device a student carries to the software a school and parent use. Each layer has a clear job.",
    stages: [
      {
        step: "01",
        title: "Smart ID card",
        body: "A card each student carries that identifies them and acts as the on-person node of the system.",
      },
      {
        step: "02",
        title: "Campus & vehicle infrastructure",
        body: "Readers and gateways in buses and around campus detect the card and create a stream of presence events.",
      },
      {
        step: "03",
        title: "Connectivity layer",
        body: "The events travel over short-range and long-range wireless links — BLE and LoRaWAN — towards the cloud.",
      },
      {
        step: "04",
        title: "Cloud platform",
        body: "The backend turns raw events into attendance, boarding and movement data that other services can use.",
      },
      {
        step: "05",
        title: "Schools & parents",
        body: "Administrators monitor the fleet and campus while parents receive the notifications that matter to them.",
      },
    ],
    capabilitiesTitle: "What the platform is designed to do",
    capabilitiesDescription:
      "These are the capabilities the product is built around. They ship progressively and depend on how each school is set up.",
    products: [
      {
        title: "Live student tracking",
        body: "See where students are across the school journey in near real time.",
      },
      {
        title: "Bus monitoring",
        body: "Follow vehicles and the students on board along their routes.",
      },
      {
        title: "Automated attendance",
        body: "Record attendance from presence events instead of manual roll calls.",
      },
      {
        title: "Boarding & deboarding alerts",
        body: "Notify parents when a child boards or leaves a bus.",
      },
      {
        title: "Geofencing & safe zones",
        body: "Define boundaries and understand when a student is inside or outside them.",
      },
      {
        title: "Campus safety",
        body: "Give staff a clearer picture of who is on campus and when.",
      },
      {
        title: "SOS",
        body: "A way for a student to raise an alert when they need help.",
      },
      {
        title: "Admin & parent apps",
        body: "Purpose-built views for the two groups who rely on the system.",
      },
    ],
    note:
      "Beckkon Systems is an early-stage startup and capabilities are rolled out school by school. Nothing on this page should be read as a completed deployment or a commercial result.",
  },

  projectsPage: {
    kicker: "Selected work",
    heading: [
      { text: "Work that connects" },
      { text: "devices, software and people.", accent: true },
    ],
    description:
      "Most of my current work is part of Beckkon Systems. Rather than list unrelated side projects, this page focuses on the systems I'm actually building.",
    note:
      "Project pages are intentionally limited to work that exists today. As more of the platform ships and is documented, this page will grow.",
  },

  projects: [
    {
      id: "smart-id-card",
      title: "Smart ID Card",
      category: "Hardware & IoT",
      summary:
        "The on-person device at the heart of the Beckkon system — a student card that makes a child identifiable and visible to the surrounding infrastructure.",
      description:
        "The smart ID card is the layer everything else depends on. It has to be small, durable and simple enough to live in a school bag, while carrying the identity and presence signals the rest of the platform reads. Designing it means balancing radio range and power, form factor and cost, and how it behaves in the real, messy conditions of a school day.",
      role: "Product definition and hardware direction",
      focus: ["Embedded systems", "BLE", "LoRaWAN", "Prototyping"],
      status: "Core Beckkon product",
      links: [{ label: "Part of Beckkon Systems", href: "/beckkon" }],
      featured: true,
    },
    {
      id: "school-safety-platform",
      title: "School Safety & Tracking Platform",
      category: "Product & Software",
      summary:
        "The cloud platform and applications that turn presence events into tracking, attendance and notifications for schools and parents.",
      description:
        "Once devices are reporting, the platform is what makes that data useful. It turns a stream of presence events into attendance records, bus and campus monitoring, geofencing and parent notifications. I work on product definition here — deciding what administrators and parents actually need to see, and how the software should behave when the network or the hardware is imperfect.",
      role: "Product strategy, requirements and UX direction",
      focus: ["Product", "Requirements", "UX", "Roadmap"],
      status: "Core Beckkon product",
      links: [{ label: "Part of Beckkon Systems", href: "/beckkon" }],
      featured: true,
    },
    {
      id: "connectivity-layer",
      title: "Connectivity & Infrastructure Layer",
      category: "Infrastructure",
      summary:
        "The network of gateways and wireless links that connects cards in the field to the cloud platform behind Beckkon.",
      description:
        "For a tracking system to be trustworthy, the connection between a student's card and the cloud has to hold up across buses, buildings and distances. This layer combines BLE for short-range detection with LoRaWAN for longer-range, low-power communication, and defines how the resulting events make their way into the platform reliably.",
      role: "System architecture and product requirements",
      focus: ["LoRaWAN", "BLE", "Gateways", "Architecture"],
      status: "Core Beckkon system",
      links: [{ label: "Part of Beckkon Systems", href: "/beckkon" }],
      featured: true,
    },
  ],

  capabilities: {
    kicker: "Capabilities",
    heading: [{ text: "Capabilities shaped by", accent: false }, { text: "real product work.", accent: true }],
    description:
      "Everything here comes from building Beckkon — not a checklist of things I'd like to learn.",
    items: [
      {
        icon: "Cpu",
        title: "Hardware & IoT",
        body: "Connected-device and embedded work, from board-level decisions to how a device behaves in the field.",
        items: ["Embedded systems", "BLE", "LoRaWAN", "Sensors & prototyping"],
      },
      {
        icon: "Compass",
        title: "Product",
        body: "Turning ambiguous needs into a defined product with a clear roadmap that hardware and software can both build against.",
        items: ["Product strategy", "Requirements", "UX & flows", "Roadmap"],
      },
      {
        icon: "LineChart",
        title: "Business",
        body: "The commercial side of an early startup — research, partnerships and figuring out how a product reaches schools.",
        items: ["Market research", "Partnerships", "Business analysis", "Go-to-market"],
      },
      {
        icon: "Wrench",
        title: "Execution",
        body: "Getting things into the field and keeping them moving when resources are tight and the plan meets reality.",
        items: ["Prototyping", "Field work", "Coordination", "Operations"],
      },
    ],
  },

  journey: {
    kicker: "Journey",
    heading: [{ text: "A short, honest", accent: false }, { text: "timeline.", accent: true }],
    description:
      "Two threads run through everything so far: studying how physical systems work, and building one of my own.",
    items: [
      {
        period: "Present",
        title: "Co-founder & Chief Product Officer",
        org: "Beckkon Systems Pvt. Ltd. · IIT (BHU) incubated",
        description:
          "Leading product for a connected school-safety and student-tracking platform, working across hardware, software, business and field deployment.",
        current: true,
      },
      {
        period: "Ongoing",
        title: "Engineering Physics",
        org: "Indian Institute of Technology (BHU), Varanasi",
        description:
          "Studying the physics and engineering fundamentals that sit underneath the connected devices I work with.",
        current: true,
      },
    ],
  },

  contactPage: {
    kicker: "Contact",
    heading: [{ text: "Let's talk about", accent: false }, { text: "something worth building.", accent: true }],
    intro: [
      "The fastest way to reach me is email. I'm happy to talk about products, connected hardware, startups and school safety — or anything where hard problems meet real people.",
      "If you'd like to learn about the company, Beckkon Systems has its own home online.",
    ],
    emailTitle: "Email",
    emailBody:
      "Best for detailed conversations, introductions and anything product-related.",
    beckkonTitle: "Beckkon Systems",
    beckkonBody:
      "See what we're building for school safety and student tracking.",
    socialsTitle: "Elsewhere",
    locationTitle: "Based in",
  },

  footer: {
    description:
      "Aditya Verma — Engineering Physics student at IIT (BHU), Varanasi, and co-founder and Chief Product Officer at Beckkon Systems.",
    copyright: "Aditya Verma",
  },

  openGraph: {
    home: {
      role: "Co-founder & CPO, Beckkon Systems",
      description:
        "Engineering Physics at IIT (BHU) and connected technology for school safety.",
    },
    about: {
      subtitle: "About",
      description:
        "Engineering Physics at IIT (BHU), Varanasi, and building Beckkon Systems.",
    },
    beckkon: {
      subtitle: "Beckkon Systems",
      description:
        "Connected infrastructure for school safety and student tracking.",
    },
    projects: {
      subtitle: "Projects",
      description: "The systems I'm building at Beckkon Systems.",
    },
    contact: {
      subtitle: "Contact",
      description: "Get in touch about products, hardware and startups.",
    },
  },
};

export default portfolio;
