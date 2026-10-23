export type SocialLink = { label: string; url: string };
export type SkillGroup = { category: string; items: string[] };
export type Profile = {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  resume: string;
  socials: SocialLink[];
  skills: SkillGroup[];
};
export type Project = {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  details: string[];
  preview: "streaming" | "marketplace";
  liveUrl?: string;
  sourceUrl?: string;
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};
