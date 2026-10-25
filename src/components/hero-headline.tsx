"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { headlines } from "@/data/headlines";

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getMotionPreference = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerPreference = () => false;

export function HeroHeadline() {
  const [active, setActive] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeToMotion,
    getMotionPreference,
    getServerPreference,
  );
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      if (document.hidden || !container.current) return;
      const rect = container.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      setActive((current) => (current + 1) % headlines.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <div className="hero-headline entrance delay-one" ref={container}>
      <h1
        className="rotating-headline"
        aria-label="Aldo Marcelino, Full Stack Software Engineer. Complex problems. Thoughtful products."
      >
        {headlines.map((headline, index) => (
          <span
            key={headline.lead}
            className={`headline-slide ${active === index ? "is-active" : ""}`}
            aria-hidden="true"
          >
            <span className="headline-line">{headline.lead}</span>
            <span className="headline-line">
              {headline.ending} <em>{headline.accent}</em>
            </span>
          </span>
        ))}
      </h1>

    </div>
  );
}
