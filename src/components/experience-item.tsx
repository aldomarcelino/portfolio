"use client";

import { useId } from "react";
import type { Experience } from "@/data/types";
import { Arrow } from "./icons";
import styles from "./experience-item.module.css";

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
          <div className={`experience-detail ${styles.detail}`}>
            <span className="micro">{experience.location}</span>
            <p>{experience.description}</p>
            <h4 className={styles.label}>Key contributions</h4>
            <ul className={styles.contributions}>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className={styles.stackSection}>
              <h4 className={styles.label}>Tech stack</h4>
              <ul className={styles.stack} aria-label="Technologies used">
                {experience.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
            <div className={styles.quality}>
              <h4 className={styles.label}>Engineering quality</h4>
              <p>{experience.quality}</p>
            </div>
            <div className={styles.products}>
              <h4 className={styles.label}>Public products</h4>
              <div className={styles.links}>
                {experience.products.map((product) => (
                  <a
                    key={product.url}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                    <Arrow diagonal />
                    <span className={styles.srOnly}> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
