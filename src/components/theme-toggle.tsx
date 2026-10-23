"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const storage = (event: StorageEvent) => {
      if (event.key !== "portfolio-theme") return;
      if (event.newValue === "light" || event.newValue === "dark") {
        document.documentElement.dataset.theme = event.newValue;
      } else document.documentElement.dataset.theme = "dark";
    };
    window.addEventListener("storage", storage);
    return () => {
      window.removeEventListener("storage", storage);
    };
  }, []);

  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Keep the choice for this visit. */
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
    >
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
    </button>
  );
}
