import type { Experience } from "./types";
// Dates and present status reflect the supplied CV. Update when circumstances change.
export const experiences: Experience[] = [
  {
    company: "L’tria Tribe Benefits",
    role: "Full Stack Engineer",
    period: "Aug 2024 — Present",
    location: "Singapore · Remote",
    description:
      "Building production SaaS platforms with an international team.",
    highlights: [
      "Developed two SaaS platforms with Next.js, TypeScript, MongoDB, NestJS, and PostgreSQL.",
      "Designed backend services and authentication for multi-tenant applications.",
      "Built reusable components and contributed to API design and backend modularization.",
    ],
  },
  {
    company: "CIMB Niaga",
    role: "Frontend Engineer · Contract",
    period: "Dec 2023 — Nov 2024",
    location: "Jakarta, Indonesia",
    description:
      "Performance, accessibility, and consistency for the Personal Banking Portal.",
    highlights: [
      "Improved the reported Core Web Vitals performance score from approximately 60 to 95+.",
      "Increased unit test coverage from 0% to 90%+ using Jest and Testing Library.",
      "Refactored legacy UI and implemented reusable design system components.",
    ],
  },
  {
    company: "Eranyacloud",
    role: "Full Stack Engineer",
    period: "Dec 2022 — Jan 2024",
    location: "Jakarta, Indonesia",
    description:
      "Connecting product requirements with full-stack application delivery.",
    highlights: [
      "Designed a NestJS API Gateway to orchestrate more than three microservices.",
      "Integrated frontend applications with backend services using Axios and Redux-Saga.",
      "Collaborated on API contracts, documented application flows, and performed end-to-end validation.",
    ],
  },
];
