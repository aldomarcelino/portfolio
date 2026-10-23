import type { Project } from "@/data/types";
import { Arrow } from "./icons";
function Preview({ kind }: { kind: Project["preview"] }) {
  return (
    <div className={`project-preview ${kind}`} aria-hidden="true">
      {kind === "streaming" ? (
        <div className="stream-window">
          <div className="preview-nav">
            <b className="stream-brand">
              N<span> / </span>STREAM
            </b>
            <span>Discover &nbsp; Series &nbsp; Films</span>
            <i>AM</i>
          </div>
          <div className="stream-content">
            <span className="micro">THE ART OF EXPLORATION</span>
            <strong>
              Beyond
              <br />
              <em>the ordinary.</em>
            </strong>
            <div className="mock-play">▶ &nbsp; Explore the collection</div>
          </div>
          <div className="film-row">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="landscape">
            <div className="sun" />
            <div className="mountain mountain-back" />
            <div className="mountain mountain-front" />
          </div>
        </div>
      ) : (
        <div className="savvie-scene">
          <div className="savvie-note">
            <span className="micro">
              LESS WASTE.
              <br />
              MORE POSSIBILITY.
            </span>
            <div className="citrus">
              <i />
              <i />
              <i />
            </div>
            <span>
              Good food.
              <br />
              <em>Another chance.</em>
            </span>
          </div>
          <div className="phone">
            <div className="phone-bar" />
            <div className="phone-head">
              <b>
                savvie<span>↗</span>
              </b>
              <span>Jakarta ▾</span>
            </div>
            <p>
              A little rescue.
              <br />
              <strong>A lot of good.</strong>
            </p>
            <div className="food-illustration">
              <span>🥐</span>
              <i>Rescue a surprise bag</i>
            </div>
            <div className="food-info">
              <b>The neighbourhood bakery</b>
              <span>Fresh bakes · Surprise bag</span>
              <strong>Good food, saved.</strong>
            </div>
            <div className="phone-bottom">
              ⌂ <span>♡</span> ☰
            </div>
          </div>
        </div>
      )}
      <span className="concept-label">
        CONCEPT PREVIEW · NOT A PRODUCT SCREENSHOT
      </span>
    </div>
  );
}
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card" data-reveal>
      <Preview kind={project.preview} />
      <div className="project-meta">
        <span className="micro">
          0{index + 1} / {project.category}
        </span>
        <span className="project-role">{project.role}</span>
      </div>
      <div className="project-title">
        <h3>{project.name}</h3>
        <span className="project-symbol" aria-hidden="true">
          <Arrow diagonal />
        </span>
      </div>
      <p>{project.description}</p>
      <div className="tags">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <details className="project-details">
        <summary>
          Engineering notes <span>+</span>
        </summary>
        <ul>
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live project <Arrow diagonal />
          </a>
        ) : null}
        {project.sourceUrl ? (
          <a href={project.sourceUrl} target="_blank" rel="noreferrer">
            Source code <Arrow diagonal />
          </a>
        ) : null}
      </details>
    </article>
  );
}
