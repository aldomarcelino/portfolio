import type { Project } from "./types";

// Stable paths let screenshots and recordings be replaced independently.
export const projects: Project[] = [
  {
    id: "cadira",
    name: "Cadira",
    category: "Exam preparation SaaS",
    role: "Product development",
    team: "Team of 3",
    status: "Live product",
    description:
      "Helping aspiring recruits prepare with practice tests, timed exam simulations, and a clearer picture of their progress.",
    outcome: { value: "11", label: "paying users in the first month" },
    stack: ["React", "Vite", "Firebase", "Midtrans"],
    cover: { src: "/projects/cadira/cover.webp", alt: "Cadira exam preparation website and student dashboard" },
    screenshots: [
      { src: "/projects/cadira/screen-1.webp", caption: "A first look at Cadira", width: 1600, height: 9289 },
      { src: "/projects/cadira/screen-2.webp", caption: "Student dashboard & progress", width: 1600, height: 2473 },
      { src: "/projects/cadira/screen-3.webp", caption: "Physical preparation & timed practice", width: 1600, height: 1063 },
      { src: "/projects/cadira/screen-4.webp", caption: "Inside an exam simulation", width: 1600, height: 907 },
    ],
    demo: { poster: "/projects/cadira/cover.webp" },
    details: [
      "Built with two teammates, bringing a subscription-based preparation product from development to launch.",
      "The product brings practice, exam simulations, and progress tracking into one learning experience.",
      "Reached 11 paying users during its first month after launch.",
    ],
    liveUrl: "https://cadira.id/",
  },
  {
    id: "reign-models",
    name: "Reign Models",
    category: "Model discovery & booking",
    role: "Client project",
    team: "Team of 2",
    status: "Live product",
    description:
      "A Bali-based model platform that brings talent discovery and booking inquiries into a visual, straightforward experience.",
    outcome: { value: "25+", label: "models represented on the platform" },
    stack: ["Next.js", "NestJS"],
    cover: { src: "/projects/reign-models/hero.webp", alt: "Reign Models homepage with an orange and blue editorial model portrait" },
    screenshots: [
      { src: "/projects/reign-models/hero.webp", caption: "An introduction to Reign", width: 1600, height: 1000 },
      { src: "/projects/reign-models/screen-3.webp", caption: "Discover the female roster", width: 1600, height: 1000 },
      { src: "/projects/reign-models/screen-4.webp", caption: "Discover the male roster", width: 1600, height: 1000 },
      { src: "/projects/reign-models/screen-2.webp", caption: "From discovery to a booking inquiry", width: 1600, height: 1000 },
    ],
    demo: { poster: "/projects/reign-models/hero.webp" },
    details: [
      "Delivered for a client in collaboration with one fellow developer.",
      "Built a platform for exploring a roster of more than 25 models and submitting booking inquiries.",
      "Connected a Next.js frontend with a NestJS backend.",
    ],
    liveUrl: "https://reignmodels.com/",
  },
  {
    id: "rumah-bisnis-mandiri",
    name: "Rumah Bisnis Mandiri",
    category: "Local business platform",
    role: "Client project",
    team: "Campus-led community initiative",
    status: "Archived",
    description:
      "Giving local small businesses a place to present their products, built for a campus-led initiative supporting the surrounding community.",
    outcome: { value: "Community", label: "used by local businesses before closure" },
    stack: [],
    cover: { src: "/projects/rumah-bisnis-mandiri/cover.webp", alt: "Rumah Bisnis Mandiri storefront showcasing local small-business products" },
    screenshots: [
      { src: "/projects/rumah-bisnis-mandiri/screen-1.webp", caption: "A storefront for local businesses", width: 1600, height: 3888 },
      { src: "/projects/rumah-bisnis-mandiri/screen-2.webp", caption: "Explore the product catalogue", width: 1600, height: 5054 },
      { src: "/projects/rumah-bisnis-mandiri/screen-3.webp", caption: "Product details & seller information", width: 1600, height: 1746 },
      { src: "/projects/rumah-bisnis-mandiri/screen-4.webp", caption: "Access for business owners", width: 1600, height: 902 },
      { src: "/projects/rumah-bisnis-mandiri/screen-5.webp", caption: "Managing the product catalogue", width: 1600, height: 2011 },
      { src: "/projects/rumah-bisnis-mandiri/screen-6.webp", caption: "Adding a local product", width: 1600, height: 2159 },
      { src: "/projects/rumah-bisnis-mandiri/screen-7.webp", caption: "Managing local business owners", width: 1600, height: 1982 },
    ],
    demo: { poster: "/projects/rumah-bisnis-mandiri/cover.webp" },
    details: [
      "Developed at the request of a campus team running a local small-business support programme.",
      "Provided product discovery, seller information, and tools for managing local product listings.",
      "Previously used by the community. The service is now closed; the code remains runnable locally.",
    ],
  },
  {
    id: "savvie",
    name: "Savvie",
    category: "Food rescue mobile app",
    role: "Collaborative project",
    team: "Built with friends",
    status: "Prototype",
    description:
      "Giving good food another chance. A mobile marketplace for discovering discounted surplus food and helping sellers reduce waste.",
    outcome: { value: "Less waste", label: "a working mobile prototype, ready to demo" },
    stack: ["React", "Expo", "Node.js", "Redux", "Xendit API"],
    cover: { src: "/projects/savvie/cover.webp", alt: "Frame from the Savvie demo showing nearby discounted meals", mobile: true },
    screenshots: [
      { src: "/projects/savvie/screen-1.webp", caption: "Mobile app screenshots", width: 720, height: 1560, placeholder: true },
    ],
    demo: { src: "/projects/savvie/demo.mp4", poster: "/projects/savvie/cover.webp" },
    details: [
      "Built with friends as a food rescue marketplace connecting sellers with people looking for lower-priced meals.",
      "The app focuses on surplus food and products approaching their expiry date.",
      "Not yet published. A local build and a recorded product walkthrough are available.",
    ],
  },
];
