import type { Experience } from "./types";
// Role details and dates reflect the supplied work history.
export const experiences: Experience[] = [
  {
    company: "L’tria Tribe Benefits",
    role: "Full-Stack Engineer · Full-time",
    period: "6 Jan 2025 — Present",
    location: "Singapore · Remote",
    description:
      "Building and maintaining two employee benefits products, Tribe Benefits and NOVA by Tribe, for employers and their teams in Singapore.",
    highlights: [
      "Build Nexus HR Admin, a B2B administration portal for client HR teams to manage employee benefits.",
      "Develop user interfaces and backend services for flexible benefits, wellness, and rewards experiences.",
      "Integrate payment gateways, Amazon S3 storage, and Postmark transactional email into product workflows.",
      "Manage deployments on Vercel and deliver features across both products while working remotely with the Singapore team.",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "MongoDB", "PostgreSQL", "Amazon S3", "Vercel", "Postmark"],
    quality:
      "Guide performance, accessibility, and SEO improvements with Lighthouse and PageSpeed Insights, with quality reviews for Nexus HR Admin. Maintain unit test coverage above 93% across both products.",
    products: [
      { name: "Tribe Benefits", url: "https://www.tribebenefits.com/" },
      { name: "NOVA by Tribe", url: "https://www.novabytribe.com/" },
    ],
  },
  {
    company: "CIMB Niaga",
    role: "Front-End Engineer · Contract",
    period: "4 Dec 2023 — 31 Dec 2024",
    location: "Jakarta, Indonesia",
    description:
      "Developed frontend experiences across three banking products, including CIMB Niaga’s public API portal for businesses integrating banking services into their platforms.",
    highlights: [
      "Developed the Back Office for portal administration and the Customer Portal where business clients manage their services.",
      "Managed application state, API data fetching, and caching for banking and API integration journeys.",
      "Developed reusable interface components to keep experiences consistent across all three products.",
    ],
    stack: ["Next.js", "Jotai", "Zustand", "TanStack Query", "SWR", "MUI Material", "shadcn/ui"],
    quality:
      "Optimized the public API portal for speed and search visibility with PageSpeed Insights. Used Lighthouse for accessibility and web best practices, backed by high unit test coverage across all three products.",
    products: [
      { name: "CIMB Niaga API Portal", url: "https://api.cimbniaga.co.id/" },
    ],
  },
  {
    company: "Eranyacloud",
    role: "Front-End Engineer · Full-time",
    period: "5 Jan 2023 — 30 Nov 2023",
    location: "Jakarta, Indonesia",
    description:
      "Developed frontend applications for two products at an Indonesian cloud services provider, supporting its cloud infrastructure and enterprise services business.",
    highlights: [
      "Developed the Compute Console, giving registered customers an interface to access and manage cloud compute services.",
      "Managed application state with Redux Toolkit and coordinated asynchronous API workflows with Redux Saga.",
      "Worked with product and backend teams to translate requirements into interfaces connected to cloud service APIs.",
    ],
    stack: ["Next.js", "Nuxt", "Redux Toolkit", "Redux Saga"],
    quality:
      "Focused on responsive, accessible Compute Console interactions through Lighthouse audits, and public-site performance and SEO with PageSpeed Insights. Maintained comprehensive unit test coverage as both products evolved.",
    products: [
      { name: "Eranyacloud", url: "https://eranyacloud.com/en/" },
    ],
  },
  {
    company: "Ekuid",
    role: "Full-Stack Engineer · Part-time",
    period: "12 Dec 2022 — 30 Jun 2026",
    location: "Jakarta, Indonesia",
    description:
      "Contributed to EKUID, a securities crowdfunding platform connecting businesses and investors, and Wukong, an event ticketing platform.",
    highlights: [
      "Built Back Office tools for managing crowdfunding projects and events, with analytics dashboards for monitoring revenue and activity.",
      "Developed web applications and backend services across crowdfunding and ticketing products.",
      "Integrated Xendit and Nicepay payment gateways to support payment workflows across the products.",
      "Worked with AWS services to support application infrastructure and delivery.",
    ],
    stack: ["Next.js", "NestJS", "GraphQL", "Go", "PostgreSQL", "Xendit", "Nicepay", "AWS"],
    quality:
      "Reviewed public pages with PageSpeed Insights for loading performance and SEO, alongside Lighthouse audits for accessibility and web best practices across Back Office interfaces. Supported EKUID and Wukong with thoroughly unit-tested code.",
    products: [
      { name: "EKUID", url: "https://eku.id/" },
      { name: "Wukong", url: "https://wukong.co.id/" },
    ],
  },
];
