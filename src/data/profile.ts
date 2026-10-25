import type { Profile } from "./types";
export const profile: Profile = {
  name: "Aldo Marcelino",
  title: "Software Engineer / Full Stack",
  email: "aldo115marcelino@gmail.com",
  location: "Jakarta, Indonesia",
  summary:
    "I build web applications from interface to infrastructure, with a focus on maintainable code, considered user experiences, and real-world impact.",
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
      category: "Data & delivery",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker"],
    },
  ],
};
