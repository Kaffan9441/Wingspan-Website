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
 * Services — 10 core practices, in order of importance.
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
    slug: "aircraft-tires-supply",
    name: "Aircraft Tires & Supply",
    headline: [
      { word: "PERFORMANCE", scale: "lg" },
      { word: "AT", scale: "xs" },
      { word: "EVERY", scale: "sm" },
      { word: "TOUCHDOWN", scale: "xl" },
    ],
    short:
      "Reliable aircraft tire solutions sourced for commercial, regional, business, and specialized aviation operations.",
    full:
      "Wingspan Innovations supplies high-quality aircraft tires selected to meet demanding takeoff, landing, taxi, and operational requirements. From scheduled tire replacements to complete fleet requirements, we provide responsive sourcing, dependable supply, and aviation-focused support to help operators reduce ground time, maintain operational readiness, and keep every aircraft moving safely.",
    capabilities: [
      "Commercial, regional, business, and specialized aircraft tires",
      "Responsive sourcing for scheduled tire replacements",
      "Complete fleet tire requirements",
      "Takeoff, landing, and taxi performance-rated selection",
      "Dependable supply and aviation-focused support",
      "Reduced ground time and maintained operational readiness",
    ],
    cta: { label: "Request a Quote", href: "/contact" },
    image: "/images/generated/service-tires.jpg",
  },
  {
    number: "07",
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
    number: "08",
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
    number: "09",
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
    number: "10",
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
  {
    number: "11",
    slug: "counter-uas-uav-navigation",
    name: "AI-Enabled Counter-UAS, UAV & Navigation Systems",
    headline: [
      { word: "INTELLIGENCE", scale: "lg" },
      { word: "ACROSS", scale: "xs" },
      { word: "EVERY", scale: "sm" },
      { word: "MISSION", scale: "xl" },
    ],
    short:
      "Integrated Counter-UAS, autonomous UAV, advanced avionics and resilient navigation for aviation, airports, critical infrastructure and security operations.",
    full:
      "Wingspan Innovations delivers integrated Counter-UAS, autonomous UAV, advanced avionics and resilient navigation solutions for aviation, airports, critical infrastructure, security and specialized operations. Our platform-neutral approach combines Artificial Intelligence, robotics, intelligent sensors, edge computing, digital twins and cybersecurity within one secure, human-controlled operational environment.",
    sections: [
      {
        heading: "AI-Enabled Counter-UAS",
        tagline: "Detect. Identify. Respond.",
        intro:
          "Integrated airspace-protection solutions combine RF detection, radar, acoustic, LiDAR, electro-optical and thermal sensors with AI-powered classification and multi-object tracking.",
        bullets: [
          "Drone detection, identification and direction finding",
          "Multi-sensor fusion and false-alert reduction",
          "Predictive trajectory and behavioural analysis",
          "Geofence, loitering and restricted-zone monitoring",
          "Real-time risk scoring and incident management",
          "Unified command-and-control integration",
        ],
      },
      {
        heading: "Autonomous UAV Systems",
        tagline: "Autonomy Built Around the Operation.",
        intro:
          "AI-enabled UAV technologies support inspection, mapping, surveillance, logistics, emergency response and environmental monitoring.",
        bullets: [
          "Automated mission and route planning",
          "Intelligent autopilots and adaptive flight control",
          "Computer vision and object recognition",
          "Detect-and-avoid and obstacle navigation",
          "Automated takeoff, landing and contingency management",
          "Multi-UAV coordination and fleet supervision",
        ],
      },
      {
        heading: "UAV Components & Payloads",
        tagline: "Every Component. Connected by Intelligence.",
        intro:
          "Our portfolio supports fixed-wing, rotary-wing, hybrid and autonomous platforms.",
        bullets: [
          "AI flight computers and edge processors",
          "Secure communications and encrypted data links",
          "EO/IR, multispectral, hyperspectral, radar and LiDAR payloads",
          "Flight-control, propulsion and smart battery systems",
          "Intelligent gimbals and stabilization equipment",
          "Ground-control stations, redundant avionics and safety modules",
        ],
      },
      {
        heading: "Advanced & Resilient Navigation",
        tagline: "Precision Beyond a Single Signal.",
        intro:
          "High-integrity navigation technologies maintain accurate positioning when satellite signals are degraded, unavailable or unreliable.",
        bullets: [
          "Inertial Navigation Systems and IMUs",
          "Fiber-Optic Gyroscopes and MEMS technologies",
          "Multi-frequency, multi-constellation GNSS",
          "Controlled-Reception-Pattern Antennas",
          "GNSS integrity and interference monitoring",
          "AI sensor fusion using cameras, radar, LiDAR and inertial data",
          "Visual, terrain-relative, indoor, surface and underwater navigation",
        ],
      },
      {
        heading: "Edge AI, Digital Twins & Predictive Maintenance",
        tagline: "From Live Data to Operational Action.",
        intro:
          "Edge AI enables real-time onboard processing, low-latency decisions and continued operation with limited connectivity. Digital twins and predictive analytics support virtual testing, health monitoring and fleet optimization.",
        bullets: [
          "Virtual testing and mission simulation",
          "Sensor-coverage and route validation",
          "Equipment-health monitoring",
          "Battery and propulsion forecasting",
          "Automated fault detection",
          "Maintenance and fleet optimization",
        ],
      },
      {
        heading: "Unified AI Command Platform",
        tagline: "Every Sensor. Every Platform. One View.",
        intro:
          "A secure cloud, on-premises or hybrid dashboard can unify airspace activity, UAV missions, navigation health, equipment status, maintenance alerts, geospatial intelligence and AI-generated recommendations. All solutions are structured around explainable AI, cybersecurity, regulatory compliance, human oversight and traceable operational decisions.",
        bullets: [],
      },
    ],
    closing: "Advanced technology. Trusted intelligence. Operational confidence.",
    cta: {
      label: "Discuss your AI, UAV and navigation requirements",
      href: "/contact",
    },
    image: "/images/generated/service-counter-uas.jpg",
  },
  {
    number: "12",
    slug: "aviation-fuel-infrastructure-epc",
    name: "Aviation Fuel Infrastructure & EPC",
    headline: [
      { word: "FROM", scale: "xs" },
      { word: "STORAGE", scale: "xl" },
      { word: "TO", scale: "xs" },
      { word: "FLIGHT", scale: "xl" },
    ],
    short:
      "Integrated engineering, infrastructure and technical solutions for aviation fuel systems, petroleum facilities and mission-critical assets.",
    full:
      "Wingspan Innovations provides end-to-end consultancy, engineering coordination, project management and lifecycle support for aviation fuel and associated infrastructure, combining proven engineering practices with digital monitoring, safety, compliance and operational readiness.",
    sections: [
      {
        heading: "Aviation Fuel & POL Infrastructure",
        tagline: "",
        intro: "",
        bullets: [
          "Jet A-1, AVGAS and specialized aviation fuel storage systems",
          "POL bulk storage tanks and fuel farms",
          "Fuel terminals, pump stations and hydrant/refuelling systems",
          "Cross-country and terminal pipeline networks",
          "Tank and pipeline rehabilitation and modernization",
          "Fuel-system inspection, integrity assessment and maintenance",
        ],
      },
      {
        heading: "Engineering & EPC Support",
        tagline: "",
        intro: "",
        bullets: [
          "Feasibility, design and engineering coordination",
          "Tank fabrication, erection and pipeline installation",
          "Civil, structural, mechanical and electrical works",
          "Roads, utility networks, retaining structures and water systems",
          "Testing, commissioning and operational readiness",
          "EPC project management and technical procurement",
        ],
      },
      {
        heading: "Inspection, Quality & Asset Integrity",
        tagline: "",
        intro: "",
        bullets: [
          "Non-Destructive Testing (NDT) coordination",
          "Tank and pipeline condition assessment",
          "Welding, coating and corrosion-control programs",
          "QA/QC and technical inspection",
          "Preventive and predictive maintenance",
          "Lifecycle and asset-integrity management",
        ],
      },
      {
        heading: "Engineering Materials & Systems",
        tagline: "",
        intro: "",
        bullets: [
          "Pipes, valves, fittings and associated equipment",
          "Pumps and petroleum-handling systems",
          "Industrial coatings and specialty materials",
          "Mechanical and electrical equipment",
          "Inspection and testing systems",
          "Generator and critical-power solutions",
        ],
      },
      {
        heading: "Smart Infrastructure",
        tagline: "",
        intro:
          "Wingspan integrates IIoT sensors, AI analytics and digital asset monitoring into conventional fuel infrastructure, providing real-time visibility of tank levels, equipment condition, energy consumption, maintenance requirements and operational performance through centralized management dashboards.",
        bullets: [],
      },
      {
        heading: "Built to International Standards",
        tagline: "",
        intro:
          "Projects are developed around applicable API, ASTM, ASME, NFPA, ISO and aviation regulatory requirements, supported by qualified engineering, inspection and specialist project partners.",
        bullets: [],
      },
    ],
    closing:
      "From fuel farm to flight line, Wingspan Innovations connects engineering, technology and operations to deliver infrastructure built for safety, reliability and long-term performance.",
    cta: {
      label: "Discuss your fuel infrastructure project",
      href: "/contact",
    },
    image: "/images/generated/service-fuel-infrastructure.jpg",
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

/**
 * Canada remote office — North American presence.
 * Toronto chosen as Canada's largest aviation hub (Toronto Pearson / YYZ)
 * and the country's financial capital.
 * To relocate the office, update `city`, `region`, and `coordinates`
 * (also mirrored as a marker/arc in components/sections/GlobalReach.tsx).
 */
export const canadaOffice = {
  eyebrow: "Now in Canada",
  city: "Toronto",
  region: "Ontario, Canada",
  established: "2026",
  coordinates: [43.6532, -79.3832] as [number, number],
  headline: "A North American gateway,\nin Canada's busiest aviation market.",
  body: [
    "Wingspan Innovations now operates a remote office in Toronto, Canada's largest aviation hub and financial capital, anchored by Toronto Pearson International (YYZ), one of North America's busiest gateways.",
    "Our Canadian team extends the firm's reach across North America, bridging time zones between Karachi, the Gulf, and the Americas so clients receive responsive, continuous support wherever they operate.",
  ],
  highlights: [
    ["Major Hub Access", "At the doorstep of Toronto Pearson (YYZ) and Canada's core aviation network"],
    ["North American Reach", "Advisory and program support for operators across Canada and the US"],
    ["Time-Zone Bridge", "Continuous coverage spanning Karachi, the Gulf, and the Americas"],
    ["Remote-First", "A distributed team drawing on senior aviation talent across the region"],
  ],
  image: "/images/generated/canada-toronto-office.png",
  imageAlt:
    "Toronto skyline at twilight over Lake Ontario, representing Wingspan Innovations' Canadian remote office.",
  cta: { label: "Connect with our Canada team", href: "/contact" },
} as const;

export const contact = {
  email: "contact@wingspaninnovations.com",
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
