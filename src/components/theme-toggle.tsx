"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./theme-toggle.module.css";

export function ThemeToggle() {
  const [spinning, setSpinning] = useState(false);
  const locked = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const storage = (event: StorageEvent) => {
      if (event.key !== "portfolio-editorial-theme") return;
      if (event.newValue === "light" || event.newValue === "dark") {
        document.documentElement.dataset.theme = event.newValue;
      } else document.documentElement.dataset.theme = "light";
    };
    window.addEventListener("storage", storage);
    return () => {
      window.removeEventListener("storage", storage);
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  function toggle() {
    if (locked.current) return;
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    function applyTheme() {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("portfolio-editorial-theme", next);
      } catch {
        /* Keep the choice for this visit. */
      }
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }

    locked.current = true;
    setSpinning(true);
    timers.current = [
      window.setTimeout(applyTheme, 320),
      window.setTimeout(() => {
        setSpinning(false);
        locked.current = false;
        timers.current = [];
      }, 640),
    ];
  }

  return (
    <button
      className={`theme-toggle ${styles.button}`}
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
    >
      <span className={`${styles.icon} ${spinning ? styles.spinning : ""}`} aria-hidden="true">
        <svg
          className="theme-sun"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42" />
        </svg>
        <svg
          className="theme-moon"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M20.5 13.1A8.6 8.6 0 0 1 10.9 3.5a8.7 8.7 0 1 0 9.6 9.6Z" />
        </svg>
      </span>
    </button>
  );
}
