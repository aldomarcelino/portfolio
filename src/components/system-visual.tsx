"use client";
import { useState } from "react";
const layers = [
  {
    name: "Interface",
    caption: "Considered experiences",
    code: "React / Next.js",
  },
  {
    name: "Application",
    caption: "Connected systems",
    code: "Node.js / NestJS",
  },
  {
    name: "Foundation",
    caption: "Built to last",
    code: "PostgreSQL / MongoDB",
  },
];
export function SystemVisual() {
  const [active, setActive] = useState(0);
  return (
    <div className="system-visual">
      <div className="visual-top">
        <span className="micro">A SYSTEM OF INTENT</span>
        <span className="system-status">
          <i />
          INTERACTIVE SYSTEM
        </span>
      </div>
      <div className={`system-art layer-${active}`} aria-hidden="true">
        <div className="system-depth">
          <div className="signal-halo" />
          <div className="signal-packet packet-one" />
          <div className="signal-packet packet-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="axis" />
          <div className="system-plane plane-one">
            <span>01</span>
            <b>INTERFACE</b>
            <i />
          </div>
          <div className="system-plane plane-two">
            <span>02</span>
            <b>APPLICATION</b>
            <i />
          </div>
          <div className="system-plane plane-three">
            <span>03</span>
            <b>FOUNDATION</b>
            <i />
          </div>
          <div className="core-point" />
        </div>
      </div>
      <div
        className="layer-tabs"
        role="tablist"
        aria-label="Explore application layers"
      >
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            id={`layer-tab-${i}`}
            role="tab"
            aria-selected={i === active}
            aria-controls="layer-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 2
                      : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                setActive(next);
                document.getElementById(`layer-tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{i + 1}</span>
            {layer.name}
          </button>
        ))}
      </div>
      <div
        className="visual-caption"
        id="layer-panel"
        role="tabpanel"
        aria-labelledby={`layer-tab-${active}`}
      >
        <span>{layers[active].caption}</span>
        <span>{layers[active].code}</span>
      </div>
    </div>
  );
}
