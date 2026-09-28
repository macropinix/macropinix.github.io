export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  architecture: string[];
  engineeringDecisions: string[];
  technologies: string[];
  evidence: string[];
  repository: string;
  priority: number;
}

export const projects: Project[] = [
  {
    slug: "eye",
    name: "EYE",
    tagline: "Data Discovery System",
    description:
      "A multi-provider data extraction system that discovers, extracts, normalizes, and validates structured data from diverse sources.",
    problem:
      "Data is scattered across providers with inconsistent formats, access methods, and structures. Manual extraction does not scale and is error-prone.",
    approach:
      "Build a unified extraction layer that abstracts provider differences, enforces data normalization, and validates output before persistence.",
    architecture: [
      "QUERY",
      "PROVIDERS",
      "DISCOVERY",
      "EXTRACTION",
      "NORMALIZATION",
      "VALIDATION",
      "DATABASE",
    ],
    engineeringDecisions: [
      "Provider abstraction layer for extensibility",
      "Built-in deduplication and validation",
      "Structured normalization pipeline",
      "Multi-source parallel extraction",
    ],
    technologies: ["Python", "Multi-provider", "Extraction", "Validation"],
    evidence: ["Repository available", "Modular architecture", "Tested extraction flows"],
    repository: "https://github.com/AdolfMacro/EYE-scrapper-master",
    priority: 1,
  },
  {
    slug: "eyenv",
    name: "EYEnv",
    tagline: "Network Visibility & Analysis",
    description:
      "A network analysis toolkit for interface discovery, traffic inspection, and structured environment mapping.",
    problem:
      "Network environments are opaque. Understanding interfaces, traffic patterns, and connected systems requires specialized tooling.",
    approach:
      "Provide passive and active discovery methods, packet capture, and structured reporting to make network state observable.",
    architecture: [
      "INTERFACE DISCOVERY",
      "CIDR DETECTION",
      "PACKET CAPTURE",
      "ARP DISCOVERY",
      "PASSIVE DISCOVERY",
      "TRAFFIC CLASSIFICATION",
      "STRUCTURED MODELS",
      "ANALYSIS",
      "REPORTING",
    ],
    engineeringDecisions: [
      "Passive and active discovery modes",
      "Structured data models for analysis",
      "Modular capture and classification",
      "Dashboard-ready output formats",
    ],
    technologies: ["Python", "Scapy", "Networking", "Analysis"],
    evidence: ["Repository available", "Network tooling", "Analysis pipelines"],
    repository: "https://github.com/AdolfMacro/EYEnv",
    priority: 2,
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    tagline: "Complete Tool-Building",
    description:
      "A demonstration of end-to-end tool building: from problem definition through implementation, documentation, and distribution.",
    problem:
      "Tools need to be reliable, documented, installable, and usable. Building something that works is not enough; it must be usable.",
    approach:
      "Demonstrate the full lifecycle: problem analysis, implementation, usability testing, packaging, and documentation.",
    architecture: [
      "PROBLEM",
      "IMPLEMENTATION",
      "USABILITY",
      "INSTALLATION",
      "DOCUMENTATION",
      "EVIDENCE",
    ],
    engineeringDecisions: [
      "CLI-first interface design",
      "Packaged for easy installation",
      "Documented with usage examples",
      "Tested against real workflows",
    ],
    technologies: ["Python", "CLI", "Tooling", "Packaging"],
    evidence: ["Repository available", "Installation guide", "Usage examples"],
    repository: "https://github.com/AdolfMacro/phoenix",
    priority: 3,
  },
  {
    slug: "patogh",
    name: "PATOGH",
    tagline: "Café Accounting & POS System",
    description:
      "A desktop café management and accounting system covering sales, purchases, inventory, expenses, cash flow, and reporting — with remote monitoring over IRC.",
    problem:
      "Small cafés run on paper notebooks and memory. Sales, stock, and purchases are untracked, costs are invisible, and the owner cannot see the day's activity without being physically present at the counter.",
    approach:
      "Build a complete operational system around a normalized SQLite schema, expose it through a PyQt6 desktop interface, and push important events to a remote IRC channel so activity is observable from anywhere.",
    architecture: [
      "GUI ENTRY",
      "AUTH & USERS",
      "SERVICE LAYER",
      "SQLITE SCHEMA",
      "REPORTS ENGINE",
      "BACKUP & SEARCH",
      "IRC EVENT BUS",
      "REMOTE CHANNEL",
    ],
    engineeringDecisions: [
      "Normalized 11-table SQLite schema separating cost and selling price",
      "Thread-safe IRC client with a queued sender thread and SSL support",
      "Every mutation emits a structured event to the remote monitoring channel",
      "Built-in database backup and full-text search across records",
    ],
    technologies: ["Python", "PyQt6", "SQLite", "IRC", "Desktop"],
    evidence: [
      "Repository available",
      "5,387 lines of Python",
      "Trilingual documentation",
      "GPL-3.0 licensed",
      "4 interface screenshots",
    ],
    repository: "https://github.com/AdolfMacro/patogh-cafe-accounting-system",
    priority: 5,
  },
  {
    slug: "scriptarcher",
    name: "ScriptArcher",
    tagline: "Python Security & Pentesting Toolkit",
    description:
      "An open-source Python security and pentesting toolkit providing network discovery, scanning, and packet-level utilities.",
    problem:
      "Security testing and network reconnaissance often require multiple specialized tools with inconsistent interfaces and limited automation.",
    approach:
      "Consolidate common security and networking utilities into a single Python toolkit with modular capabilities for discovery, scanning, spoofing, and analysis.",
    architecture: [
      "IPv6 DISCOVERY",
      "MASS MAILER",
      "SCAN",
      "DDoS",
      "DEAUTH",
      "MAC SPOOF",
      "ARP SPOOF",
      "DBM ANALYZER",
      "SUBDOMAIN SCAN",
    ],
    engineeringDecisions: [
      "Scapy-based packet crafting",
      "Nmap integration for scanning",
      "Modular attack and discovery modules",
      "CLI-driven workflow",
    ],
    technologies: ["Python", "Scapy", "Nmap", "Networking", "Security"],
    evidence: ["Repository available", "Open source", "Multiple security utilities"],
    repository: "https://github.com/AdolfMacro/ScriptArcher",
    priority: 4,
  },
];

export const featuredProjects = projects
  .slice()
  .sort((a, b) => a.priority - b.priority);
