"use client";
import { useEffect } from "react";
export function Enhancements() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("awaiting-reveal");
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight)
        el.classList.add("awaiting-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      els.forEach((el) => el.classList.remove("awaiting-reveal"));
    };
  }, []);
  return null;
}
