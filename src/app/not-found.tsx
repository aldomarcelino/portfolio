import Link from "next/link";
import { Arrow, Mark } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={styles.header}>
        <Link className="wordmark" href="/" aria-label="Aldo Marcelino home">
          <Mark />
          <span>Aldo Marcelino<span className="lime">.</span></span>
        </Link>
        <ThemeToggle />
      </header>

      <main id="main" className={styles.main}>
        <div className={styles.art} aria-hidden="true">
          <span className={styles.guide}>A SMALL DETOUR</span>
          <span className={styles.number}>4<span className={styles.zero}>0</span>4</span>
          <span className={styles.caption}><span /> OFF THE MAP, STILL CONNECTED.</span>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>404 / PAGE NOT FOUND</p>
          <h1>A little <em>off course.</em></h1>
          <p className={styles.description}>
            This page may have moved, or the link took a wrong turn.
            Let’s get you back to something worth exploring.
          </p>
          <div className={styles.actions}>
            <Link className={styles.home} href="/">Back to home <Arrow /></Link>
            <Link className={styles.projects} href="/#projects">Explore my work <Arrow diagonal /></Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>ALDO MARCELINO / PORTFOLIO</span>
        <span>Good things are a click away.</span>
      </footer>
    </div>
  );
}
