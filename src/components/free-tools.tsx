import { Arrow } from "./icons";
import { developerToolsUrl, featuredTools } from "@/data/developer-tools";
import styles from "./free-tools.module.css";

export function FreeTools() {
  return (
    <section className={`${styles.section} section-shell section-scene`} id="tools" aria-labelledby="tools-title">
      <div className="section-heading" data-reveal>
        <div>
          <span className="section-kicker">02 / FREE TOOLS</span>
          <h2 id="tools-title">Small tasks.<br />Useful <em>tools.</em></h2>
        </div>
        <p>A few things I built to make everyday work easier.<br />Free to use, for everyone.</p>
      </div>
      <div className={styles.toolkit} data-reveal>
        <div className={styles.intro}>
          <span className={styles.badge}><span /> FREE TO USE</span>
          <h3>Al1 Tools<span className="lime">.</span></h3>
          <p>Free browser-based tools for developers and anyone who wants to simplify everyday tasks. Format data, compare text, write Markdown, and more—all in one place.</p>
          <a className={styles.cta} href={developerToolsUrl} target="_blank" rel="noopener noreferrer">
            Open the toolkit <Arrow diagonal />
          </a>
          <span className={styles.note}>No account needed. Just open and use.</span>
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
              <span className={styles.symbol} aria-hidden="true">{tool.symbol}</span>
              <div>
                <span className={styles.category}>{tool.category}</span>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </div>
              <Arrow diagonal className={styles.arrow} />
            </a>
          ))}
          <a className={styles.more} href={developerToolsUrl} target="_blank" rel="noopener noreferrer">
            Markdown, regex, timestamps, and more <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
