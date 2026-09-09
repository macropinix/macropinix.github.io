export interface Service {
  title: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    title: "Web Scraping & Data Extraction",
    description:
      "Extract structured data from difficult sources. Build resilient extraction pipelines that handle anti-bot measures, pagination, and inconsistent formats.",
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
      "Automate repetitive workflows and technical processes. Turn manual operations into reliable, maintainable Python systems.",
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
      "Build tooling for Linux environments and network operations. From interface discovery to traffic analysis and system monitoring.",
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
      "Design and build custom utilities for specific technical problems. When off-the-shelf tools fall short, engineer the right solution.",
    capabilities: [
      "Bespoke tool development",
      "CLI interfaces",
      "Data processing",
      "Integration pipelines",
    ],
  },
];
