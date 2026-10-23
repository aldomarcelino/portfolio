import type { Project } from "./types";
export const projects: Project[] = [
  {
    id: "netflix",
    name: "Netflix Clone",
    category: "Streaming platform",
    role: "Full-stack development",
    description:
      "A streaming experience, built across web, mobile, and a CMS. Connected through a microservices architecture.",
    stack: ["Next.js", "NestJS", "GraphQL", "PostgreSQL", "Docker"],
    preview: "streaming",
    details: [
      "Separated client, admin, and service layers through a microservices architecture.",
      "Implemented authentication and state management with Redux.",
      "Connected Apollo Client and Server through a GraphQL API.",
    ],
  },
  {
    id: "savvie",
    name: "Savvie",
    category: "Food rescue marketplace",
    role: "Full-stack development",
    description:
      "Connecting restaurants with customers to give surplus food a second chance. A mobile marketplace with a vendor CMS.",
    stack: ["React", "Expo", "Node.js", "Redux", "Xendit API"],
    preview: "marketplace",
    details: [
      "Developed a marketplace for restaurants to sell surplus food.",
      "Integrated payment processing and a real-time order flow.",
      "Built a CMS for vendor management and reporting.",
    ],
  },
];
