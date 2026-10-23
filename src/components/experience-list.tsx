"use client";

import { useState } from "react";
import type { Experience } from "@/data/types";
import { ExperienceItem } from "./experience-item";

export function ExperienceList({ items }: { items: Experience[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="experience-list">
      {items.map((experience, index) => (
        <ExperienceItem
          key={experience.company}
          experience={experience}
          index={index}
          open={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? null : index))
          }
        />
      ))}
    </div>
  );
}
