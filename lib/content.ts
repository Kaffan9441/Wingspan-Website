/**
 * All Wingspan Innovations copy as structured data.
 * Sourced from the 2026 brand/content overhaul (aviation consultancy,
 * management & technical advisory positioning).
 */

export const brand = {
  name: "Wingspan Innovations",
  shortName: "Wingspan",
  tagline: "Bringing Aviation Innovation to Certified Reality.",
  since: 1985, // approximate based on "40+ years of experience"; client to confirm
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Wingspan Innovations · Aviation Consultancy & Advisory",
  headline: [
    { word: "BRINGING", scale: "sm" },
    { word: "AVIATION", scale: "xl" },
    { word: "INNOVATION", scale: "xl" },
    { word: "TO", scale: "xs" },
    { word: "CERTIFIED", scale: "xl" },
    { word: "REALITY", scale: "xl" },
  ] as const,
  subhead:
    "End-to-end aviation consultancy, from airline establishment and certification to fleet planning, airports, safety, and training, across Pakistan, the Middle East, Africa, and beyond.",
  cta: { label: "Schedule a Free Consultation", href: "/contact" },
} as const;

export const heritageAnchor = {
  body:
    "Wingspan Innovations is a leading aviation consultancy, management, and technical advisory firm established to support airlines, airports, aviation organizations, government institutions, defence establishments, and private investors in achieving operational excellence, regulatory compliance, and sustainable growth.",
  excerpt:
    "Founded by aviation professionals with decades of senior leadership experience in military and commercial aviation, we deliver comprehensive solutions throughout the aviation lifecycle, from concept development and certification to operational management, expansion, modernization, and long-term sustainability.",
} as const;

/**
 * Services — 8 core practices, in order of importance.
 * Copy from the 2026 "Our Core Services" content document.
 */
export const services = [
  {
    number: "01",
    slug: "airline-establishment-certification",
    name: "Airline Establishment & Certification",
    headline: [
      { word: "FROM", scale: "xs" },
      { word: "VISION", scale: "xl" },
      { word: "TO", scale: "xs" },
      { word: "CERTIFICATION", scale: "xl" },
    ],
    short:
      "Supporting investors, entrepreneurs, and aviation organizations through every stage of airline development.",
    full:
      "We support investors, entrepreneurs, and aviation organizations through every stage of airline development, from startup strategy, feasibility studies, and business planning to licensing, Air Operator Certificate (AOC) certification, and operational readiness. Our teams design the organizational structures, governance, manuals, and compliance frameworks a new operator needs to fly and keep flying.",
    capabilities: [
      "Airline startup strategy and feasibility studies",
      "Business planning and financial modelling",
      "Airline licensing and regulatory approvals",
      "Air Operator Certificate (AOC) certification support",
      "Operational readiness and transition programs",
      "Organizational structure and governance design",
      "Manuals, procedures, and compliance frameworks",
      "Route planning and network development",
    ],
    image: "/images/generated/atmosphere-runway-dawn.jpg",
  },
  {
    number: "02",
    slug: "aircraft-acquisition-fleet-planning",
    name: "Aircraft Acquisition & Fleet Planning",
    headline: [
      { word: "FLEET", scale: "xl" },
      { word: "BY", scale: "xs" },
      { word: "DESIGN", scale: "xl" },
    ],
    short:
      "Delivering strategic fleet solutions aligned with operational and commercial objectives.",
    full:
      "From aircraft selection and technical evaluation to lease negotiations, delivery acceptance, and induction management, we deliver fleet solutions aligned with operational and commercial objectives. We guide fleet modernization and expansion, optimize asset utilization and lifecycle economics, and advise on disposal and transition, ensuring every aircraft decision serves the business plan.",
    capabilities: [
      "Aircraft selection and technical evaluation",
      "Fleet modernization and expansion planning",
      "Aircraft lease and acquisition support",
      "Contract negotiations and technical due diligence",
      "Delivery, acceptance, and induction management",
      "Asset utilization and lifecycle planning",
      "Fleet economics and performance optimization",
      "Aircraft disposal and transition advisory",
    ],
    image: "/images/generated/atmosphere-karachi-twilight.jpg",
  },
  {
    number: "03",
    slug: "airline-operations-performance",
    name: "Airline Operations & Performance Management",
    headline: [
      { word: "OPERATIONS", scale: "xl" },
      { word: "THAT", scale: "xs" },
      { word: "PERFORM", scale: "xl" },
    ],
    short: "Enhancing operational efficiency, reliability, and profitability.",
    full:
      "Our operations practice strengthens flight operations, ground handling, crew management, and dispatch and operational control. We develop operations manuals and SOPs, build performance monitoring and KPI frameworks, and prepare carriers for crisis and contingency scenarios, enhancing efficiency, reliability, and profitability across the operation.",
    capabilities: [
      "Flight operations management",
      "Ground operations optimization",
      "Crew management systems",
      "Dispatch and operational control systems",
      "Operations manuals and SOP development",
      "Performance monitoring and KPI frameworks",
      "Operational efficiency enhancement",
      "Crisis and contingency planning",
    ],
    image: "/images/generated/service-operations.jpg",
  },
  {
    number: "04",
    slug: "aviation-safety-quality-compliance",
    name: "Aviation Safety, Quality & Regulatory Compliance",
    headline: [
      { word: "SAFETY", scale: "xl" },
      { word: "BEYOND", scale: "xs" },
      { word: "COMPLIANCE", scale: "xl" },
    ],
    short:
      "Building resilient organizations through proactive safety management and compliance assurance.",
    full:
      "We build resilient aviation organizations through Safety Management Systems, aviation risk management, and quality assurance programs. Our specialists conduct regulatory compliance audits, safety investigations, and root cause analyses, develop occurrence reporting systems and operational risk assessments, and cultivate the safety culture that keeps operations trustworthy.",
    capabilities: [
      "Safety Management Systems (SMS)",
      "Aviation risk management",
      "Quality Assurance Programs",
      "Regulatory compliance audits",
      "Safety investigations and root cause analysis",
      "Safety culture development",
      "Occurrence reporting systems",
      "Operational risk assessments",
    ],
    image: "/images/generated/service-airport.jpg",
  },
  {
    number: "05",
    slug: "aviation-it-ai",
    name: "Aviation IT & AI",
    headline: [
      { word: "FROM", scale: "xs" },
      { word: "DATA", scale: "xl" },
      { word: "TO", scale: "xs" },
      { word: "DECISION", scale: "xl" },
    ],
    short:
      "Advanced digital aviation solutions that enhance safety, efficiency, compliance, and performance.",
    full:
      "We provide a comprehensive suite of advanced digital aviation solutions designed to enhance safety, operational efficiency, regulatory compliance, and organizational performance across airlines, airports, and aviation service providers. Our solutions integrate intelligent technologies that support every stage of flight operations, from planning and dispatch to post-flight analysis and continuous safety improvement, accelerating digital transformation in an increasingly competitive global aviation environment.",
    capabilities: [
      "Operational management platform with real-time aircraft, crew, and maintenance visibility",
      "Flight operations tools for scheduling, dispatch, fleet management, and resource allocation",
      "Data-driven safety analytics and flight performance monitoring",
      "Fully digital cockpit: electronic manuals, charts, weather, and performance tools",
      "Real-time global flight tracking, fleet visibility, and historical flight analysis",
      "Integrated safety management: hazard reporting, risk assessment, investigations, and audits",
      "Digital learning platform for pilots, engineers, cabin crew, and dispatchers",
      "Secure portable flight information devices for a paperless cockpit",
      "Digital navigation and aeronautical information services",
    ],
    image: "/images/generated/service-software.jpg",
  },
  {
    number: "06",
    slug: "airport-development-management",
    name: "Airport Development & Management",
    headline: [
      { word: "MASTER", scale: "sm" },
      { word: "PLAN", scale: "xl" },
      { word: "TO", scale: "xs" },
      { word: "GATE", scale: "xl" },
    ],
    short:
      "Strategic and operational expertise for airport infrastructure and services.",
    full:
      "From airport master planning and infrastructure development advisory to Operational Readiness and Airport Transfer (ORAT), we prepare airports to open well and run better. We enhance passenger experience and facilitation, strengthen safety and security oversight, and build the governance, management systems, and stakeholder coordination modern airports demand.",
    capabilities: [
      "Airport master planning",
      "Infrastructure development advisory",
      "Operational Readiness and Airport Transfer (ORAT)",
      "Passenger experience and facilitation enhancement",
      "Airport safety and security oversight",
      "Operational efficiency improvement",
      "Airport governance and management systems",
      "Stakeholder coordination and integration",
    ],
    image: "/images/generated/service-infrastructure.jpg",
  },
  {
    number: "07",
    slug: "aviation-training-human-capital",
    name: "Aviation Training & Human Capital Development",
    headline: [
      { word: "READY", scale: "sm" },
      { word: "FOR", scale: "xs" },
      { word: "COMMAND", scale: "xl" },
    ],
    short: "Developing future-ready aviation professionals and leaders.",
    full:
      "We develop future-ready aviation professionals through executive leadership programs, flight operations and safety training, and competency-based training systems. From technical workforce development to human resource strategy and training academy establishment and accreditation, we build the organizational capability aviation growth depends on.",
    capabilities: [
      "Executive aviation leadership programs",
      "Flight operations and safety training",
      "Aviation management development",
      "Technical workforce training",
      "Competency-based training systems",
      "Human resource development strategies",
      "Organizational capability enhancement",
      "Training academy establishment and accreditation",
    ],
    image: "/images/generated/heritage-bw-engineer.jpg",
  },
  {
    number: "08",
    slug: "aviation-logistics-supply-chain",
    name: "Aviation Logistics & Supply Chain Management",
    headline: [
      { word: "RIGHT", scale: "sm" },
      { word: "PART,", scale: "xl" },
      { word: "ON", scale: "xs" },
      { word: "TIME", scale: "xl" },
    ],
    short:
      "Ensuring operational continuity through effective logistics and support systems.",
    full:
      "Our logistics practice keeps fleets flying: spares supportability analysis, aviation supply chain management, inventory optimization, and maintenance logistics planning. We provide procurement support, technical services management, and lifecycle support solutions, backed by logistics readiness assessments that ensure operational continuity.",
    capabilities: [
      "Spares supportability analysis",
      "Aviation supply chain management",
      "Inventory optimization",
      "Maintenance logistics planning",
      "Procurement support",
      "Technical services management",
      "Lifecycle support solutions",
      "Logistics readiness assessments",
    ],
    image: "/images/generated/service-maintenance.jpg",
  },
  {
    number: "09",
    slug: "defence-aerospace-strategic-advisory",
    name: "Defence, Aerospace & Strategic Advisory",
    headline: [
      { word: "DEFENCE", scale: "xl" },
      { word: "TO", scale: "xs" },
      { word: "DIPLOMACY", scale: "xl" },
    ],
    short:
      "Leveraging extensive experience in defence aviation, strategic planning, and international engagement.",
    full:
      "Drawing on decades of senior military aviation leadership, we advise on defence aviation, aerospace projects, and national aviation policy. Our work spans strategic planning and capability development, defence-industrial partnerships, government stakeholder engagement, and aviation diplomacy, supporting international cooperation at the highest levels.",
    capabilities: [
      "Defence aviation consultancy",
      "Aerospace project advisory",
      "National aviation policy support",
      "Strategic planning and capability development",
      "International aviation cooperation",
      "Defence-industrial partnerships",
      "Government stakeholder engagement",
      "Aviation diplomacy and strategic communications",
    ],
    image: "/images/generated/heritage-bw-hangar.jpg",
  },
] as const;

export const specializedServices = [
  "Airline Startup, Certification & Regulatory Advisory",
  "Aircraft Acquisition, Leasing & Fleet Modernization",
  "Aviation Safety Investigation & Risk Management",
  "Airport Operational Readiness and Transfer (ORAT)",
  "Aviation Digital Transformation & Technology Integration",
  "Aviation Project Management & Program Delivery",
  "Spares Supportability & Aviation Logistics Solutions",
  "Defence & Aerospace Consultancy",
  "Aviation Academies & Training Institutions Development",
  "MRO Planning, Development & Optimization",
  "Unmanned Aircraft Systems (UAS) & Drone Operations",
  "Aviation Policy, Governance & Strategic Planning",
  "Aviation Infrastructure & Airport Development",
  "Crisis Management, Emergency Response & Business Continuity Planning",
  "International Aviation Partnerships & Investment Facilitation",
] as const;

export const buyAircraft = {
  eyebrow: "Buy Your Own Aircraft",
  headline: "It's cheaper to fly than to drive.",
  subline: "When you factor in time, convenience, and rising fuel costs.",
  promise:
    "You Buy, We Propel: Excellence in Maintenance and Operations Guaranteed!",
  cta: { label: "Talk to us about ownership", href: "/contact" },
} as const;

export const philosophy = {
  quote:
    "To deliver world-class aviation consultancy, management, and technical solutions that empower organizations to achieve operational excellence, regulatory compliance, business sustainability, and long-term growth.",
  attribution: "Wingspan Innovations · Our Mission",
} as const;

export const about = {
  intro:
    "Wingspan Innovations is a leading aviation consultancy, management, and technical advisory firm established to support airlines, airports, aviation organizations, government institutions, defence establishments, and private investors in achieving operational excellence, regulatory compliance, and sustainable growth.",
  body: [
    "Founded by aviation professionals with decades of senior leadership experience in military and commercial aviation, Wingspan Innovations delivers comprehensive solutions throughout the aviation lifecycle, from concept development and certification to operational management, expansion, modernization, and long-term sustainability.",
    "Our expertise spans airline establishment, regulatory approvals, aircraft acquisition, operational readiness, aviation safety, airport planning, human capital development, logistics support, aviation technology, and strategic business transformation.",
    "Combining global best practices with practical operational experience, we provide innovative, cost-effective, and results-oriented solutions tailored to the unique requirements of every client.",
  ],
  mission: {
    eyebrow: "Our Mission",
    body: "To deliver world-class aviation consultancy, management, and technical solutions that empower organizations to achieve operational excellence, regulatory compliance, business sustainability, and long-term growth.",
  },
  vision: {
    eyebrow: "Our Vision",
    body: "To be the region's most trusted aviation consultancy and management organization, recognized for professional excellence, innovation, integrity, and transformative aviation solutions.",
  },
} as const;

export const whyChoose = {
  eyebrow: "Why Choose Wingspan Innovations",
  items: [
    "Led by senior aviation professionals with decades of command, operational, and management experience",
    "Unique expertise spanning military aviation, commercial airlines, airport operations, and aviation regulation",
    "End-to-end airline establishment and certification capabilities",
    "Proven experience in aviation safety, quality assurance, and operational excellence",
    "Strategic expertise in aircraft acquisition, fleet planning, and logistics support",
    "Strong stakeholder engagement across government, regulatory, defence, and private sectors",
    "Practical, implementation-focused solutions rather than theoretical recommendations",
    "Unwavering commitment to professionalism, integrity, safety, and client success",
  ],
} as const;

export const message = {
  eyebrow: "Message",
  paragraphs: [
    "The aviation industry is undergoing unprecedented transformation, creating both significant opportunities and complex challenges for airlines, airports, investors, and aviation stakeholders.",
    "Wingspan Innovations was established to bridge the gap between strategic vision and operational execution. Drawing upon decades of leadership experience in aviation operations, airline management, safety oversight, training, logistics, international cooperation, and organizational transformation, we help our clients navigate complexity and achieve sustainable success.",
    "Our philosophy is simple: we do not merely provide advice. We work alongside our clients as trusted partners, delivering practical solutions, measurable outcomes, and long-term value.",
  ],
  closing:
    "At Wingspan Innovations, excellence, integrity, innovation, and safety remain at the heart of everything we do.",
} as const;

export const contact = {
  email: "info@wingspaninnovations.com",
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
