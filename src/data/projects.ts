import type { ImageMetadata } from "astro";

import eyeMap from "../assets/shots/eye-map.webp";
import eyeImage from "../assets/shots/eye-image.webp";
import eyenvSc1 from "../assets/shots/eyenv-sc1.webp";
import eyenvSc2 from "../assets/shots/eyenv-sc2.webp";
import phoenix1 from "../assets/shots/phoenix-1.webp";
import scriptarcher1 from "../assets/shots/scriptarcher-1.webp";
import patogh1 from "../assets/shots/patogh-1.webp";
import patogh2 from "../assets/shots/patogh-2.webp";
import patogh3 from "../assets/shots/patogh-3.webp";
import patogh4 from "../assets/shots/patogh-4.webp";
import scriptarcher2 from "../assets/shots/scriptarcher-2.webp";
import scriptarcher3 from "../assets/shots/scriptarcher-3.webp";
import scriptarcher4 from "../assets/shots/scriptarcher-4.webp";
import visicli1 from "../assets/shots/visicli-1.webp";
import visicli2 from "../assets/shots/visicli-2.webp";
import visicli3 from "../assets/shots/visicli-3.webp";
import visigui1 from "../assets/shots/visigui-1.webp";

export interface Screenshot {
  src: ImageMetadata;
  alt: string;
}

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
  /** Shown in the detail page header bar. */
  status: string;
  source: string;
  system: string;
  /** Optional screenshot gallery; projects without captures omit it. */
  screenshots: Screenshot[];
  showcaseTitle: string;
  showcaseDescription: string;
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
    status: "PUBLIC",
    source: "PYTHON",
    system: "MULTI-PROVIDER",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "The extraction map and Data Manager, showing how discovered sources are traced, normalised and validated.",
    screenshots: [
      { src: eyeMap, alt: "EYES // SCRAPER MASTER extraction map showing the full provider workflow" },
      { src: eyeImage, alt: "EYE Scrapper Master Data Manager interface with the structured data view" },
    ],
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
    status: "PUBLIC",
    source: "PYTHON",
    system: "NETWORK",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "Network vision dashboards showing traffic visualisation, interface discovery and the analysis panels.",
    screenshots: [
      { src: eyenvSc1, alt: "EYEnv network vision dashboard showing traffic visualisation and interface discovery" },
      { src: eyenvSc2, alt: "EYEnv dashboard view with the network analysis and reporting panels" },
    ],
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
    status: "PUBLIC",
    source: "PYTHON",
    system: "TOOLING",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "The Phoenix project interface, showing the tool-building and installation workflow.",
    screenshots: [
      { src: phoenix1, alt: "Phoenix project interface showing the tool-building and implementation workflow" },
    ],
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
    status: "PUBLIC",
    source: "PYTHON",
    system: "ACCOUNTING",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "PATOGH café accounting and POS interfaces covering the dashboard, sales entry, inventory management, and reporting views.",
    screenshots: [
      { src: patogh1, alt: "PATOGH cafe accounting dashboard showing sales, purchases and inventory at a glance" },
      { src: patogh2, alt: "PATOGH sales and transaction entry interface for recording cafe orders" },
      { src: patogh3, alt: "PATOGH inventory and product management with stock levels and pricing" },
      { src: patogh4, alt: "PATOGH reports and accounting summaries covering sales, purchases and expenses" },
    ],
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
    status: "PUBLIC",
    source: "PYTHON",
    system: "SECURITY",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "The ScriptArcher toolkit interface, showing the security and network utility modules.",
    screenshots: [
      { src: scriptarcher1, alt: "ScriptArcher terminal showing its network and security utility menu" },
      { src: scriptarcher2, alt: "ScriptArcher terminal showing its network scanning options" },
      { src: scriptarcher3, alt: "ScriptArcher terminal showing a DDoS module menu" },
      { src: scriptarcher4, alt: "ScriptArcher terminal showing wireless network inspection results" },
    ],
    priority: 4,
  },
  {
    slug: "visicli",
    name: "VisiCLI",
    tagline: "Gesture-Controlled Python Code Explorer",
    description:
      "A terminal-based code explorer that maps Python packages, files, classes, functions, and selected relationships into a navigable hierarchy controlled by hand gestures or keyboard input.",
    problem:
      "Understanding the structure of a Python codebase from a terminal can require jumping between files and tools, while importing a project just to inspect it can execute code with unintended side effects.",
    approach:
      "Parse Python source with a bounded, deterministic AST scan and present the resulting structure as terminal cards with hierarchical navigation, keyboard controls, and optional webcam-driven gestures.",
    architecture: [
      "PYTHON SOURCE",
      "BOUNDED AST SCAN",
      "PROJECT GRAPH",
      "EXPLORER CONTROLLER",
      "TERMINAL VIEW",
      "GESTURE / KEYBOARD INPUT",
    ],
    engineeringDecisions: [
      "Analyze source without importing or executing the inspected project",
      "Bound scans with directory exclusions and file, byte, and definition limits",
      "Separate project analysis, graph modeling, navigation, and terminal rendering",
      "Keep keyboard demo and camera-driven gesture input as distinct modes",
    ],
    technologies: ["Python", "AST", "OpenCV", "MediaPipe", "CLI"],
    evidence: [
      "Repository available",
      "Linux user-level installer",
      "Automated tests for analysis, navigation, and gesture handling",
      "3 interface screenshots",
    ],
    repository: "https://github.com/AdolfMacro/VisiCLI",
    status: "PUBLIC",
    source: "PYTHON",
    system: "CODE EXPLORER",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "VisiCLI's project map, terminal navigation, and visual interface for exploring Python code structure.",
    screenshots: [
      { src: visicli1, alt: "VisiCLI project explorer showing a navigable map of Python code structure" },
      { src: visicli2, alt: "VisiCLI terminal interface with project hierarchy and gesture input" },
      { src: visicli3, alt: "VisiCLI project visualization showing code elements as terminal cards" },
    ],
    priority: 6,
  },
  {
    slug: "visigui",
    name: "VisiGUI",
    tagline: "Gesture-Driven Python Project Explorer",
    description:
      "An interactive Python project explorer that combines static code analysis, hand-gesture controls, and a procedural 3D world in a single desktop application.",
    problem:
      "Understanding a Python codebase and navigating interactive visual environments can require separate tools, while importing inspected code may trigger unintended side effects.",
    approach:
      "Reuse VisiCLI's static analysis to build a ProjectGraph without importing target code, then route camera-driven gestures through a context-aware controller to the Qt explorer and a separate OpenGL world.",
    architecture: [
      "PYTHON SOURCE",
      "STATIC ANALYSIS",
      "PROJECT GRAPH",
      "CAMERA & GESTURE INPUT",
      "INTERACTION CONTROLLER",
      "QT EXPLORER + 3D WORLD",
    ],
    engineeringDecisions: [
      "Builds on VisiCLI's project-analysis concepts and ProjectGraph",
      "Inspects Python source without importing or executing the target project",
      "Routes gesture intent through a controller before application actions",
      "Keeps the project explorer and generative 3D world independent",
    ],
    technologies: ["Python", "PyQt6", "OpenGL", "MediaPipe", "OpenCV"],
    evidence: [
      "Repository available",
      "Static Python project analysis",
      "Gesture-controlled navigation",
      "Automated test suite",
      "Interactive OpenGL environment",
    ],
    repository: "https://github.com/AdolfMacro/VisiGUI",
    status: "PUBLIC",
    source: "PYTHON",
    system: "GUI + 3D WORLD",
    showcaseTitle: "INTERFACE",
    showcaseDescription:
      "VisiGUI's gesture-driven code explorer and procedural 3D world, combining structured Python project navigation with camera-based interaction.",
    screenshots: [
      {
        src: visigui1,
        alt: "VisiGUI graphical Python project explorer and interactive 3D world",
      },
    ],
    priority: 7,
  },
];

export const featuredProjects = projects
  .slice()
  .sort((a, b) => a.priority - b.priority);
