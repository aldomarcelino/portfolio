"use client";

import { useId } from "react";
import type { Experience } from "@/data/types";

export function ExperienceItem({
  experience,
  index,
  open,
  onToggle,
}: {
  experience: Experience;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <article className="experience-item" data-reveal data-expanded={open}>
      <h3 className="experience-heading">
        <button
          className="experience-trigger"
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
        >
          <span className="experience-index">0{index + 1}</span>
          <span className="experience-main">
            <span className="experience-period">{experience.period}</span>
            <strong>{experience.company}</strong>
            <span>{experience.role}</span>
          </span>
          <span className="expand-indicator" aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div
        className="experience-panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="experience-panel-inner">
          <div className="experience-detail">
            <span className="micro">{experience.location}</span>
            <p>{experience.description}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
