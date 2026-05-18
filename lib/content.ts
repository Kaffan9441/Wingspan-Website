/**
 * All Wingspan Innovations copy as structured data.
 * Sourced verbatim from https://wingspan.pk (Home / About / Services / Contact).
 * Restructured for the v1.0 plan; copy itself untouched.
 */

export const brand = {
  name: "Wingspan Innovations",
  shortName: "Wingspan",
  tagline: "Over 40 Years of Experience in the Aviation Industry",
  since: 1985, // approximate based on "40+ years of experience"; client to confirm
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Wingspan Innovations · Over 40 years in aviation",
  headline: [
    { word: "LET", scale: "sm" },
    { word: "US", scale: "xs" },
    { word: "PARTNER", scale: "xl" },
    { word: "WITH", scale: "xs" },
    { word: "YOUR", scale: "sm" },
    { word: "BUSINESS", scale: "xl" },
  ] as const,
  subhead: "Aviation, manufacturing, construction, and supply project management across Pakistan and the wider region.",
  cta: { label: "Schedule a Free Consultation", href: "/contact" },
} as const;

export const heritageAnchor = {
  body:
    "Wingspan Innovations is a leading consultancy project management services company recently established to revolutionize the aviation, manufacturing, construction, and supply sectors in Pakistan.",
  excerpt:
    "We deliver top-tier, tailored project management solutions across diverse industries, from complex aviation scenarios to intricate manufacturing and supply chain logistics.",
} as const;

/**
 * Services — 5 pillars, in order of importance.
 * Verbatim copy from wingspan.pk/services/.
 */
export const services = [
  {
    number: "01",
    slug: "aviation-infrastructure",
    name: "Aviation Infrastructure",
    headline: [
      { word: "AIRPORT", scale: "xl" },
      { word: "BY", scale: "xs" },
      { word: "DESIGN", scale: "xl" },
    ],
    short: "Unparalleled expertise in airport design, construction, and maintenance.",
    full:
      "Our Aviation Infrastructure & Construction division is dedicated to providing unparalleled expertise in airport design, construction, and maintenance. From runway and taxiway construction to airport lighting systems and approach lights, we ensure your aviation infrastructure meets the highest standards of safety and efficiency.",
    capabilities: [
      "Runway construction",
      "Airfield lighting systems",
      "Approach lighting systems",
      "Taxiway construction",
      "Reverse osmosis (RO) plant installation and maintenance",
    ],
    image: "/images/generated/service-infrastructure.jpg",
  },
  {
    number: "02",
    slug: "aviation-maintenance",
    name: "Aviation Maintenance",
    headline: [
      { word: "AIRWORTHINESS", scale: "xl" },
      { word: "AS", scale: "xs" },
      { word: "STANDARD", scale: "xl" },
    ],
    short: "Ensuring the airworthiness of aircraft and components.",
    full:
      "The Aviation Maintenance Management unit ensures the airworthiness of aircraft and components. Services include coordination for overhaul, inspections, defect rectification, compliance with airworthiness directives, and logistics management, maintaining a seamless flow of goods, services, and information throughout the supply chain.",
    capabilities: [
      "Overhaul coordination",
      "Inspections and defect rectification",
      "Airworthiness directive compliance",
      "Logistics and supply chain management",
      "Component reliability tracking",
    ],
    image: "/images/generated/service-maintenance.jpg",
  },
  {
    number: "03",
    slug: "airline-operations",
    name: "Airline Operations",
    headline: [
      { word: "OPERATIONS", scale: "xl" },
      { word: "AND", scale: "xs" },
      { word: "MANAGEMENT", scale: "xl" },
    ],
    short: "Operational and financial management, marketing, and customer service.",
    full:
      "Our Airline Management division oversees all aspects of airline operations, including operational and financial management, marketing, and customer service. We aim to set industry benchmarks in efficiency and customer satisfaction, ensuring smooth and successful airline operations.",
    capabilities: [
      "Operational management",
      "Financial management",
      "Marketing strategy",
      "Customer service operations",
      "Crew planning and scheduling",
    ],
    image: "/images/generated/service-operations.jpg",
  },
  {
    number: "04",
    slug: "aviation-software-ai",
    name: "Aviation Software & AI",
    headline: [
      { word: "SOFTWARE", scale: "xl" },
      { word: "AND", scale: "xs" },
      { word: "AI", scale: "xl" },
    ],
    short: "Interactive avionics, support systems, and AI-driven operational tools.",
    full:
      "Our Aviation Software Management segment develops and manages interactive avionics, aircraft support systems, and managerial software. Leveraging cutting-edge AI technology, we enhance operational efficiency and reduce maintenance challenges through informed decision-making processes.",
    capabilities: [
      "Interactive avionics development",
      "Aircraft support systems",
      "Managerial software platforms",
      "AI-driven predictive maintenance",
      "Decision-support tooling",
    ],
    image: "/images/generated/service-software.jpg",
  },
  {
    number: "05",
    slug: "airport-management",
    name: "Airport Management",
    headline: [
      { word: "DAILY", scale: "xs" },
      { word: "AIRPORT", scale: "xl" },
      { word: "OPERATIONS", scale: "xl" },
    ],
    short: "Day-to-day oversight of local and international airports.",
    full:
      "The Airport Management section oversees daily operations at both local and international airports, ensuring adherence to regulations, safety standards, and exceptional customer service. Our expertise includes facilities management, security management, air traffic control, customer service, financial management, regulatory compliance, emergency response planning, and environmental management.",
    capabilities: [
      "Facilities management",
      "Security management",
      "Air traffic control",
      "Regulatory compliance",
      "Emergency response planning",
      "Environmental management",
    ],
    image: "/images/generated/service-airport.jpg",
  },
] as const;

export const specializedServices = [
  "Reverse Osmosis (RO) Plant Installation & Maintenance",
  "Laterite",
  "Garment-on-Hanger Beams",
  "Pilot Selection",
  "Pilots Training",
  "Technicians Training",
] as const;

export const philosophy = {
  quote:
    "Our goal is to become the most trusted global partner, known for our expertise, reliability, and adaptability, transforming the way projects are managed and contributing to a more advanced and efficient industrial landscape.",
  attribution: "Wingspan Innovations · Our Mission",
} as const;

export const about = {
  intro:
    "Wingspan Innovations is a leading consultancy project management services company recently established to revolutionize the aviation, manufacturing, construction, and supply sectors in Pakistan.",
  body: [
    "Our unwavering commitment to excellence drives us to deliver top-tier, tailored project management solutions across these diverse industries. Whether managing complex aviation scenarios, intricate manufacturing processes, or coordinating supply chain logistics, our seasoned team ensures seamless execution from inception to completion.",
    "With a reputation for excellence and a track record leading to success, we are the partner of choice for manufacturers, construction firms, and supply chain stakeholders aiming to elevate their projects to new heights of efficiency and success.",
    "Our comprehensive service offerings include meticulous airport management, expert aviation infrastructure and construction, efficient airline operation and management, rigorous aviation maintenance management, and innovative aviation software and AI management. By integrating cutting-edge technology and maintaining the highest standards of safety, customer service, and operational efficiency, Wingspan Innovations is poised to be a trailblazer in the industry.",
  ],
  mission: {
    eyebrow: "Our Mission",
    body: "Our goal is to become the most trusted global partner, known for our expertise, reliability, and adaptability, transforming the way projects are managed and contributing to a more advanced and efficient industrial landscape.",
  },
  vision: {
    eyebrow: "Our Vision",
    body: "The vision of Wingspan Innovations is to establish itself as the preeminent leader in project management, fundamentally transforming the aviation, manufacturing, construction, and supply sectors through unparalleled innovation and a rigorous commitment to excellence. We strive to set new industry benchmarks by providing bespoke solutions that drive efficiency and success, underpinned by the integration of advanced technologies such as artificial intelligence and interactive avionics. Our aspiration is to be recognized globally as the most trusted and esteemed partner, distinguished by our profound expertise, unwavering reliability, and exceptional adaptability.",
  },
} as const;

export const contact = {
  phone: ["+92-321-128-5511", "+92-21-35840214", "+92-345-0085511"],
  email: "hello@wingspan.pk",
  address: {
    line1: "111/2, Street 25",
    line2: "Main Khayaban-e-Roomi",
    line3: "DHA Phase-8, Karachi",
    country: "Pakistan",
  },
  hours: [
    { label: "Mon – Sat", value: "09:30 – 18:30" },
    { label: "Sunday", value: "08:00 – 11:30" },
    { label: "Holidays", value: "08:00 – 15:00" },
  ],
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;

/**
 * Scrapbook tiles for the Heritage section.
 * Image paths are placeholders pointing to Gemini-generated assets (Layer 2 prompts).
 * Each tile carries: image path, alt, rotation (deg), size (sm | md | lg), optional caption.
 */
/**
 * Heritage scrapbook — 7 deliberately curated tiles in a magazine-spread composition.
 *   Row 1: engineer (5) + blueprint (4) + label (3) = 12
 *   Row 2: turbofan centerpiece (12 full-width)
 *   Row 3: note (4) + tower (4) + hangar (4) = 12
 */
export const scrapbook = [
  {
    type: "image",
    src: "/images/generated/heritage-bw-engineer.jpg",
    alt: "Black-and-white documentary photo of a maintenance engineer at work.",
    rotation: -1.5,
    size: "lg",
  },
  {
    type: "blueprint",
    src: "/images/generated/heritage-cockpit-blueprint.jpg",
    alt: "Vintage technical line drawing of a B747-200 cockpit cross-section on aged paper.",
    rotation: 2,
    size: "md",
    tape: "top-left",
  },
  {
    type: "label",
    src: "/images/generated/heritage-label-jinnah-1998.jpg",
    alt: "Archival paper label: JINNAH AIRPORT · 1998",
    rotation: -2,
    size: "sm",
  },
  {
    type: "blueprint",
    src: "/images/generated/heritage-turbofan-cutaway.jpg",
    alt: "Exploded-view drawing of a TF39-GE-1 turbofan engine, dated 1967.",
    rotation: -0.5,
    size: "xl",
    tape: "bottom-right",
  },
  {
    type: "note",
    src: "/images/generated/heritage-note-karachi-1992.jpg",
    alt: "Handwritten cobalt-blue engineering note from Karachi, March 1992.",
    rotation: -2,
    size: "md",
  },
  {
    type: "image",
    src: "/images/generated/heritage-bw-tower.jpg",
    alt: "Silhouetted control tower operator at a console at night.",
    rotation: 0.5,
    size: "md",
  },
  {
    type: "image",
    src: "/images/generated/heritage-bw-hangar.jpg",
    alt: "Empty hangar interior with light beams through the high windows.",
    rotation: 1.5,
    size: "md",
  },
] as const;

export type ScrapbookTile = (typeof scrapbook)[number];
