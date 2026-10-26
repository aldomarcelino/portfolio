import type { Profile } from "./types";
export const profile: Profile = {
  name: "Aldo Marcelino",
  title: "Software Engineer / Full Stack",
  email: "aldomarcelinolubis@gmail.com",
  location: "Jakarta, Indonesia",
  summary:
    "I build web applications across frontend and backend, from SaaS platforms to products built with small teams. I focus on clear interfaces, reliable services, and maintainable code.",
  resume: "/Aldo-Marcelino-CV.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/aldomarcelino" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aldo-marcelino-791bb5211",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Vue", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "Go", "GraphQL", "REST APIs"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      category: "Cloud & delivery",
      items: ["AWS", "GCP", "BytePlus", "Vercel", "Docker"],
    },
  ],
};
