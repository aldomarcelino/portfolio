"use client";

import { useEffect, useRef } from "react";

/** Pointer feedback stays outside React's render cycle and is idle on touch devices. */
export function HeroAtmosphere() {
  const field = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const hero = field.current?.closest<HTMLElement>(".hero");
    if (!hero) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      hero.dataset.pointerActive = "false";
      hero.style.removeProperty("--pointer-x");
      hero.style.removeProperty("--pointer-y");
      hero.style.removeProperty("--hero-shift-x");
      hero.style.removeProperty("--hero-shift-y");
    };
    const move = (event: PointerEvent) => {
      if (motion.matches || !finePointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        hero.dataset.pointerActive = "true";
        hero.style.setProperty("--reveal-x", `${x}px`);
        hero.style.setProperty("--reveal-y", `${y}px`);
        hero.style.setProperty("--pointer-x", `${x}px`);
        hero.style.setProperty("--pointer-y", `${y}px`);
        hero.style.setProperty(
          "--hero-shift-x",
          `${(x / rect.width - 0.5) * 14}px`,
        );
        hero.style.setProperty(
          "--hero-shift-y",
          `${(y / rect.height - 0.5) * 10}px`,
        );
      });
    };
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    hero.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
      hero.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      reset();
      hero.style.removeProperty("--reveal-x");
      hero.style.removeProperty("--reveal-y");
      delete hero.dataset.pointerActive;
    };
  }, []);
  return (
    <div className="hero-atmosphere" ref={field} aria-hidden="true">
      <div className="hero-dot-field" />
      <div className="hero-aura" />
      <div className="hero-horizon" />
      <div className="hero-secret-name">
        <svg
          viewBox="0 0 1200 640"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <text
            x="50"
            y="292"
            textLength="1100"
            lengthAdjust="spacingAndGlyphs"
            className="secret-first-name"
          >
            ALDO
          </text>
          <text
            x="50"
            y="562"
            textLength="1100"
            lengthAdjust="spacingAndGlyphs"
            className="secret-last-name"
          >
            MARCELINO
          </text>
        </svg>
      </div>
    </div>
  );
}
