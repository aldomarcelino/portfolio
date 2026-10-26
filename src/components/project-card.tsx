import type { Project } from "@/data/types";
import { Arrow } from "./icons";
import { ProjectGallery } from "./project-gallery";
import styles from "./project-card.module.css";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={styles.card} data-reveal>
      <ProjectGallery project={project} />
      <div className={styles.meta}>
        <span>0{index + 1} / {project.category}</span>
        <span className={styles.status} data-live={project.status === "Live product"}>
          <i aria-hidden="true" />{project.status}
        </span>
      </div>
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.outcome}>
        <strong>{project.outcome.value}</strong>
        <span>{project.outcome.label}</span>
      </div>
      <p className={styles.team}>{project.role}<span aria-hidden="true"> / </span>{project.team}</p>
      {project.stack.length > 0 ? (
        <ul className={styles.stack} aria-label={`${project.name} technologies`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      ) : null}
      <div className={styles.footer}>
        <details className={styles.notes}>
          <summary>Behind the project <span aria-hidden="true">+</span></summary>
          <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </details>
        {project.liveUrl ? (
          <a className={styles.liveLink} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit website <Arrow diagonal /><span className={styles.srOnly}> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
