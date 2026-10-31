import { Arrow } from "./icons";
import { developerToolsUrl, featuredTools } from "@/data/developer-tools";
import styles from "./free-tools.module.css";

export function FreeTools() {
  return (
    <section className={`${styles.section} section-shell section-scene`} id="tools" aria-labelledby="tools-title">
      <span className="section-kicker" data-reveal>02 / FREE TOOLS</span>
      <div className={styles.toolkit} data-reveal>
        <div className={styles.overview}>
          <div className={styles.heading}>
            <h2 id="tools-title">Small tasks.<br />Useful <em>tools.</em></h2>
            <p className={styles.description}>Tools I built to make everyday work easier. Free for everyone.</p>
          </div>
          <div className={styles.intro}>
            <h3>Ramupod<span>.</span></h3>
            <p>A little help for your daily development workflow. Format data, compare changes, and turn requests into code.</p>
            <a className={styles.cta} href={developerToolsUrl} target="_blank" rel="noopener noreferrer">
              Explore Ramupod <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className={styles.tools}>
          {featuredTools.map((tool) => (
            <a
              className={styles.tool}
              key={tool.slug}
              href={new URL(`tools/${tool.slug}`, developerToolsUrl).href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </div>
              <Arrow diagonal className={styles.arrow} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
