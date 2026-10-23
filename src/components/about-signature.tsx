"use client";

import { useEffect, useRef, useState } from "react";
import { Mark } from "./icons";

export function AboutSignature() {
  const container = useRef<HTMLDivElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const playRequest = useRef(0);
  const [sound, setSound] = useState<"idle" | "loading" | "playing" | "error">(
    "idle",
  );

  async function playDo() {
    const player = audio.current;
    if (!player) return;
    const request = ++playRequest.current;
    setSound("loading");
    player.volume = 0.45;
    player.currentTime = 0;
    try {
      await player.play();
      if (request === playRequest.current) setSound("playing");
    } catch {
      if (request === playRequest.current) setSound("error");
    }
  }

  useEffect(() => {
    const player = audio.current;
    return () => {
      player?.pause();
    };
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.dataset.musicActive = "false";
    };
    const move = (event: PointerEvent) => {
      if (motion.matches || !pointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty(
          "--music-x",
          `${event.clientX - rect.left}px`,
        );
        element.style.setProperty("--music-y", `${event.clientY - rect.top}px`);
        element.dataset.musicActive = "true";
      });
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointercancel", reset);
    motion.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
    window.addEventListener("blur", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      element.removeEventListener("pointercancel", reset);
      motion.removeEventListener("change", reset);
      pointer.removeEventListener("change", reset);
      window.removeEventListener("blur", reset);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="about-heading about-signature" data-reveal ref={container}>
      <span className="section-kicker">04 / A LITTLE ABOUT ME</span>
      <div className="about-music-field" aria-hidden="true">
        <svg
          viewBox="0 0 380 620"
          preserveAspectRatio="xMidYMin meet"
          fill="none"
          focusable="false"
        >
          <g className="music-staff">
            <path d="M32 310h316M32 344h316M32 378h316M32 412h316M32 446h316" />
          </g>
          <g
            className="music-notes"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M132 430V215l174-39v215M132 255l174-39" />
            <ellipse
              cx="104"
              cy="433"
              rx="29"
              ry="21"
              transform="rotate(-18 104 433)"
            />
            <ellipse
              cx="278"
              cy="394"
              rx="29"
              ry="21"
              transform="rotate(-18 278 394)"
            />
          </g>
        </svg>
      </div>
      <button
        className="music-play-area"
        type="button"
        onClick={playDo}
        aria-label="Play Do (C4) on piano"
        aria-describedby="piano-sound-status"
        data-playing={sound === "playing"}
      >
        <span className="music-play-hint" id="piano-sound-status" role="status">
          <span className="music-equalizer" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {sound === "loading"
            ? "Loading piano…"
            : sound === "playing"
              ? "Do · C4"
              : sound === "error"
                ? "Try playing again"
                : "Click to hear do"}
        </span>
      </button>
      <a
        className="music-credit"
        href="/audio/ATTRIBUTION.txt"
        target="_blank"
        rel="noreferrer"
      >
        Sound credits ↗
      </a>
      <audio
        ref={audio}
        src="/audio/piano-do-c4.mp3"
        preload="none"
        onEnded={() => setSound("idle")}
        onError={() => setSound("error")}
      />
      <div className="monogram" aria-hidden="true">
        <span className="monogram-mark">
          <Mark />
        </span>
        <div className="monogram-orbit" />
        <small>AL + 1 (DO) / ALDO</small>
      </div>
    </div>
  );
}
