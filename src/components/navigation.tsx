"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Arrow, Mark } from "./icons";
import { ThemeToggle } from "./theme-toggle";
const links = ["About", "Experience", "Projects", "Tools", "Contact"];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Aldo Marcelino home"
          onClick={() => setOpen(false)}
        >
          <Mark />
          <span>
            Aldo Marcelino<span className="lime">.</span>
          </span>
        </a>
        <div className="desktop-nav">
          {links.map((label) => (
            <a
              key={label}
              className={active === label.toLowerCase() ? "active" : ""}
              href={`#${label.toLowerCase()}`}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="nav-resume"
            aria-label="View résumé"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <span className="resume-label">
              Résumé <Arrow diagonal />
            </span>
            <span className="resume-hover-label" aria-hidden="true">
              View CV <Arrow diagonal />
            </span>
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </nav>
      {open ? (
        <div id="mobile-nav" className="mobile-nav">
          {links.map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <small>0{i + 1}</small>
              {label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
