"use client";

import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import styles from "./system-visual.module.css";
import { Mark } from "./icons";

const layers = [
  { name: "Interface", caption: "Where people meet the product.", description: "Thoughtful interfaces. Responsive experiences.", stack: ["React", "Next.js", "Vue"], symbol: "</>", detail: "DESIGN → EXPERIENCE" },
  { name: "Application", caption: "The logic behind the experience.", description: "APIs, services, and the connections between them.", stack: ["Node.js", "NestJS", "Go"], symbol: "{ }", detail: "REQUEST → RESPONSE" },
  { name: "Database", caption: "A foundation for every interaction.", description: "Structured data. Reliable persistence.", stack: ["PostgreSQL", "MongoDB", "MySQL"], symbol: "DB", detail: "STORE → CONNECT → RETRIEVE" },
];
function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getMotionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerPreference = () => false;

export function SystemVisual() {
  const [active, setActive] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [shuffleTarget, setShuffleTarget] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = useSyncExternalStore(subscribeToMotion, getMotionPreference, getServerPreference);

  useEffect(() => {
    if (hovered || focused || reduced || shuffleTarget !== null) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setOutgoing(active);
      setShuffleTarget((active + 1) % layers.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [active, hovered, focused, reduced, shuffleTarget]);

  useEffect(() => {
    if (shuffleTarget === null) return;
    const advance = window.setTimeout(() => setActive(shuffleTarget), reduced ? 0 : 400);
    const settle = window.setTimeout(() => {
      setOutgoing(null);
      setShuffleTarget(null);
    }, reduced ? 0 : 1000);
    return () => {
      window.clearTimeout(advance);
      window.clearTimeout(settle);
    };
  }, [shuffleTarget, reduced]);

  function select(index: number) {
    if (index === active || shuffleTarget !== null) return;
    setOutgoing(active);
    setShuffleTarget(index);
  }

  return (
    <div className={styles.visual} role="region" aria-label="My technology stack"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={styles.header}><span>A system of intent.</span><span className={styles.status}>My toolkit</span></div>
      <div className={styles.deck}>
        {layers.map((layer, index) => {
          const position = (index - active + layers.length) % layers.length;
          return (
            <article key={layer.name} className={`${styles.card} ${outgoing === index ? styles.outgoing : ""}`}
              style={{ "--position": position } as CSSProperties} data-front={position === 0 || outgoing === index} aria-hidden={position !== 0}>
              <div className={styles.ticketBody}>
                <div className={styles.cardTop}>
                  <span className={styles.brand}><Mark /><span>ALDO<br />MARCELINO</span></span>
                  <span className={styles.passLabel}>THE STACK<br /><b>FULL ACCESS</b></span>
                </div>
                <div className={styles.ticketArt} aria-hidden="true">
                  <span className={styles.number}>0{index + 1}</span>
                  <span className={styles.artArrow}>↗</span>
                </div>
                <div className={styles.cardCopy}>
                  <h3>{layer.name}</h3>
                  <p>{layer.description}</p>
                </div>
                <ul className={styles.stack} aria-label={`${layer.name} technologies`}>
                  {layer.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <div className={styles.stub}>
                <div className={styles.stubCopy}><span>{layer.detail}</span><b>AL1 — 00{index + 1}</b></div>
                <span className={styles.barcode} aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
      <div className={styles.controls}>
        <div className={styles.selectors} role="group" aria-label="Choose a stack layer">
          {layers.map((layer, index) => (
            <button key={layer.name} type="button" aria-pressed={index === active} onClick={() => select(index)}>{layer.name}</button>
          ))}
        </div>
      </div>
      <p className={styles.caption}>{layers[active].caption}</p>
    </div>
  );
}
