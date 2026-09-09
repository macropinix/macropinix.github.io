export interface Service {
  title: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    title: "Web Scraping & Data Extraction",
    description:
      "When data is scattered across providers with inconsistent formats and anti-bot measures, standard tooling fails. Build resilient extraction pipelines with normalization, deduplication, and validation for any source.",
    capabilities: [
      "Multi-provider extraction",
      "Data normalization",
      "Deduplication & validation",
      "Resilient scraping architectures",
    ],
  },
  {
    title: "Python Automation",
    description:
      "When workflows require manual, repetitive intervention, error rates compound and time costs grow. Engineer automated Python systems that are reliable, testable, and maintainable.",
    capabilities: [
      "Workflow automation",
      "Script development",
      "Process orchestration",
      "Maintenance tooling",
    ],
  },
  {
    title: "Linux & Network Automation",
    description:
      "When infrastructure is opaque, operations fail silently. Build tooling for Linux and network environments that makes interfaces, traffic, and system state observable.",
    capabilities: [
      "Network tooling",
      "System automation",
      "Traffic analysis",
      "Environment mapping",
    ],
  },
  {
    title: "Custom Python Tools",
    description:
      "When existing tools cannot solve the specific problem at hand, generic solutions break. Engineer custom Python utilities with CLI interfaces and tight integration.",
    capabilities: [
      "Bespoke tool development",
      "CLI interfaces",
      "Data processing",
      "Integration pipelines",
    ],
  },
];
