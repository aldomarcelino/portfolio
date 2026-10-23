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
  const [playing, setPlaying] = useState(true);
  const reduced = useSyncExternalStore(
    subscribeToMotion,
    getMotionPreference,
    getServerPreference,
  );
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing || reduced) return;
    const timer = window.setInterval(() => {
      if (document.hidden || !container.current) return;
      const rect = container.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      setActive((current) => (current + 1) % headlines.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [playing, reduced]);

  return (
    <div className="hero-headline entrance delay-one" ref={container}>
      <h1
        className="rotating-headline"
        aria-label="Complex problems. Thoughtful products."
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
      <div
        className="headline-controls"
        role="group"
        aria-label="Hero headlines"
      >
        <span className="headline-counter" aria-hidden="true">
          0{active + 1} <span>/ 0{headlines.length}</span>
        </span>
        <div className="headline-selectors">
          {headlines.map((headline, index) => (
            <button
              key={headline.lead}
              type="button"
              aria-label={`Show headline: ${headline.lead} ${headline.ending} ${headline.accent}`}
              aria-pressed={active === index}
              onClick={() => {
                setActive(index);
                setPlaying(false);
              }}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          className="headline-playback"
          type="button"
          disabled={reduced}
          aria-label={
            reduced
              ? "Automatic headlines disabled for reduced motion"
              : playing
                ? "Pause headline animation"
                : "Play headline animation"
          }
          onClick={() => setPlaying(!playing)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            {playing && !reduced ? (
              <path d="M4 3h2v10H4zm6 0h2v10h-2z" />
            ) : (
              <path d="m5 3 8 5-8 5z" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
