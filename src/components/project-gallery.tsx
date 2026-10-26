"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Project } from "@/data/types";
import { Arrow } from "./icons";
import styles from "./project-card.module.css";

export function ProjectGallery({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
  const isVideo = selected === project.screenshots.length;
  const screen = project.screenshots[selected];

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [active]);

  function open(index: number) {
    setSelected(index);
    setActive(true);
    dialog.current?.showModal();
  }

  function choose(index: number) {
    setSelected(index);
    stage.current?.scrollTo({ top: 0 });
  }

  return (
    <>
      <div className={styles.media} data-mobile={project.cover.mobile || undefined} data-project={project.id}>
        <button className={styles.coverButton} onClick={() => open(project.demo.src ? project.screenshots.length : 0)} aria-label={`Explore ${project.name} ${project.demo.src ? "demo" : "screenshots"}`}>
          <div className={styles.browserBar} aria-hidden="true">
            <span className={styles.windowDots}><i /><i /><i /></span>
            <span>{project.liveUrl ? new URL(project.liveUrl).hostname : project.name.toLowerCase()}</span>
            <Arrow diagonal />
          </div>
          <div className={styles.coverImage}>
            {project.cover.mobile ? (
              <div className={styles.mobileCopy} aria-hidden="true"><span>FOOD WORTH SAVING.</span><strong>Good food.<br /><em>Another chance.</em></strong><span>A MOBILE EXPERIENCE</span></div>
            ) : null}
            <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 800px) 90vw, 44vw" />
            {project.cover.mobile ? <span className={styles.play} aria-hidden="true">▶</span> : null}
          </div>
          <span className={styles.coverHint}>{project.cover.mobile ? "Play the product walkthrough" : "Take a closer look"}<Arrow diagonal /></span>
        </button>
        <div className={styles.mediaToolbar}>
          <button onClick={() => open(0)} aria-label={`View ${project.name} screenshots`}>{project.screenshots[0]?.placeholder ? "Screens · soon" : `${project.screenshots.length} screens`}<Arrow diagonal /></button>
          <button onClick={() => open(project.screenshots.length)} aria-label={`${project.demo.src ? "Watch" : "Preview upcoming"} ${project.name} demo`}><span aria-hidden="true">▷</span>{project.demo.src ? "Watch demo" : "Demo · soon"}</button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClose={() => setActive(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
          }
        }}
        onKeyDown={(event) => {
          if (event.target instanceof HTMLVideoElement) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            const count = project.screenshots.length + 1;
            choose((selected + (event.key === "ArrowRight" ? 1 : count - 1)) % count);
          }
        }}
      >
        <div className={styles.dialogHeader}>
          <div><span className={styles.eyebrow}>{project.category}</span><h3 id={titleId}>{project.name}</h3></div>
          <button className={styles.close} onClick={() => dialog.current?.close()} aria-label={`Close ${project.name} gallery`}>×</button>
        </div>
        <div className={styles.galleryNav} aria-label="Project media">
          {project.screenshots.map((item, index) => <button key={item.src} aria-label={item.caption} aria-pressed={!isVideo && selected === index} onClick={() => choose(index)}>Screen {String(index + 1).padStart(2, "0")}</button>)}
          <button aria-pressed={isVideo} onClick={() => choose(project.screenshots.length)}>▷ Walkthrough{project.demo.src ? "" : " · soon"}</button>
        </div>
        <div ref={stage} className={styles.stage} data-video={isVideo || undefined}>
          {active ? isVideo ? project.demo.src ? (
            <video key={project.demo.src} className={styles.video} controls playsInline preload="metadata" poster={project.demo.poster} aria-label={`${project.name} product walkthrough`}>
              <source src={project.demo.src} type="video/mp4" />
              Your browser does not support video playback. <a href={project.demo.src}>Open the recording</a>.
            </video>
          ) : (
            <MediaPlaceholder project={project} video />
          ) : screen.placeholder ? (
            <MediaPlaceholder project={project} />
          ) : (
            <Image key={screen.src} className={styles.fullScreenshot} src={screen.src} alt={screen.caption} width={screen.width} height={screen.height} sizes="(max-width: 800px) 96vw, 1080px" />
          ) : null}
        </div>
        <div className={styles.caption} aria-live="polite"><span>{isVideo ? "Product walkthrough" : screen.caption}</span><span>{isVideo ? (project.demo.src ? "Recorded demo" : "Coming soon") : `${selected + 1} / ${project.screenshots.length}`}</span></div>
      </dialog>
    </>
  );
}

function MediaPlaceholder({ project, video = false }: { project: Project; video?: boolean }) {
  return (
    <div className={styles.placeholder}>
      <Image src={project.demo.poster} alt="" fill sizes="(max-width: 800px) 96vw, 1080px" />
      <div><span className={styles.placeholderIcon} aria-hidden="true">{video ? "▷" : "▧"}</span><span className={styles.eyebrow}>{project.name}</span><h4>{video ? "A walkthrough is on its way." : "More of the app, coming soon."}</h4><p>{video ? "Explore the screenshots for a closer look at the product." : "Watch the recorded demo to see the app in action."}</p><span className={styles.placeholderBadge}>Preview placeholder</span></div>
    </div>
  );
}
