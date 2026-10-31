"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./contact-headline.module.css";

const original = ["HAVE SOMETHING", "IN MIND?"] as const;
const next = ["LET’S BUILD", "SOMETHING GREAT."] as const;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const duration = 450;

export function ContactHeadline({ email }: { email: string }) {
  const [display, setDisplay] = useState<readonly string[]>(original);
  const [alternate, setAlternate] = useState(false);
  const frame = useRef(0);
  const hovered = useRef(false);
  const focused = useRef(false);
  const active = useRef(false);

  function scramble(showNext: boolean) {
    if (active.current === showNext) return;
    active.current = showNext;
    cancelAnimationFrame(frame.current);
    const target = showNext ? next : original;
    setAlternate(showNext);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    // Each letter settles at its own moment, rather than moving in a wave.
    const settleAt = target.map((line) =>
      Array.from(line, () => 0.2 + Math.random() * 0.8),
    );
    const start = performance.now();
    let lastUpdate = -Infinity;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= duration) {
        setDisplay(target);
        frame.current = 0;
        return;
      }
      if (now - lastUpdate >= 35) {
        const progress = elapsed / duration;
        setDisplay(target.map((line, lineIndex) =>
          Array.from(line, (character, index) =>
            character === " " || progress >= settleAt[lineIndex][index]
              ? character
              : alphabet[Math.floor(Math.random() * alphabet.length)],
          ).join(""),
        ));
        lastUpdate = now;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopMotion = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(frame.current);
      setDisplay(active.current ? next : original);
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      cancelAnimationFrame(frame.current);
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return (
    <h2 className={styles.heading}>
      <a
        className={styles.link}
        href={`mailto:${email}`}
        aria-label="Have something in mind? Let’s build something great. Email Aldo Marcelino."
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          hovered.current = true;
          scramble(true);
        }}
        onPointerLeave={() => {
          hovered.current = false;
          scramble(focused.current);
        }}
        onPointerCancel={() => {
          hovered.current = false;
          scramble(focused.current);
        }}
        onFocus={(event) => {
          focused.current = event.currentTarget.matches(":focus-visible");
          if (focused.current) scramble(true);
        }}
        onBlur={() => {
          focused.current = false;
          scramble(hovered.current);
        }}
      >
        {original.map((line, index) => (
          <span className={styles.line} aria-hidden="true" key={line}>
            <span className={styles.reserve}>{line}</span>
            <span className={`${styles.reserve} ${styles.smaller}`}>{next[index]}</span>
            <span className={`${styles.display} ${alternate ? styles.smaller : ""}`}>
              {display[index]}
            </span>
          </span>
        ))}
      </a>
    </h2>
  );
}
