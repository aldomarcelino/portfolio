import { StructuredData } from "@/components/structured-data";
import { AboutSignature } from "@/components/about-signature";
import { HeroHeadline } from "@/components/hero-headline";
import { ExperienceList } from "@/components/experience-list";
import { Navigation } from "@/components/navigation";
import { Enhancements } from "@/components/enhancements";
import { SystemVisual } from "@/components/system-visual";
import { ProjectCard } from "@/components/project-card";
import { FreeTools } from "@/components/free-tools";
import { Arrow, Mark } from "@/components/icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import "./section-scenes.css";
import "./responsive.css";
const approach = [
  {
    title: "Start with the problem.",
    label: "01 / PRODUCT THINKING",
    description:
      "Understand the people, the constraints, and the outcome. Then turn the right questions into useful software.",
    art: "product",
  },
  {
    title: "Connect the whole picture.",
    label: "02 / FULL-STACK DEVELOPMENT",
    description:
      "Bring interfaces, APIs, and data together. Make decisions with the entire product in view.",
    art: "stack",
  },
  {
    title: "Build for what comes next.",
    label: "03 / MAINTAINABLE SOFTWARE",
    description:
      "Clear boundaries, reusable components, and tested behavior. Code that a team can confidently build on.",
    art: "maintain",
  },
];
export default function Home() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <HeroHeadline />
              <p className="hero-lead entrance delay-two">
                I’m Aldo Marcelino, a full-stack software engineer turning
                complex problems into software that feels simple.
              </p>
              <p className="hero-description entrance delay-two">
                {profile.summary}
              </p>
              <div className="hero-actions entrance delay-three">
                <a className="button button-primary" href="#projects">
                  Explore my work <Arrow diagonal />
                </a>
                <a
                  className="text-link"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <Arrow diagonal />
                </a>
              </div>
              <div className="hero-location entrance delay-three">
                <span className="location-symbol">⊕</span> {profile.location}
                <span className="small-divider" />
                Built with intent.
              </div>
            </div>
            <div className="hero-visual entrance delay-three">
              <SystemVisual />
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#projects" className="scroll-cue">
              <span>↓</span> SCROLL TO EXPLORE
            </a>
            <span>
              FRONTEND PRECISION <b>×</b> BACKEND THINKING
            </span>
            <span className="micro">PORTFOLIO — 2026</span>
          </div>
        </section>
        <section
          className="work-section section-shell section-scene"
          id="projects"
        >
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">01 / SELECTED WORK</span>
              <h2>
                Ideas into <em>interfaces.</em>
                <br />
                And everything behind them.
              </h2>
            </div>
            <p>
              Independent products, client collaborations,
              <br className="desktop-break" /> and ideas brought to life with a
              team.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <p className="work-footnote">
            <span className="tiny-cross">+</span> From paying customers to
            community projects. Built with people, for people.
          </p>
        </section>
        <FreeTools />
        <section
          className="approach-section section-shell section-scene"
          id="approach"
        >
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">03 / THE WAY I WORK</span>
              <h2>
                Good software starts
                <br />
                with <em>good thinking.</em>
              </h2>
            </div>
            <p>
              Thoughtful decisions at every layer.
              <br />
              From the first question to the last detail.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map((a, index) => (
              <article className="approach-card" data-reveal key={a.title}>
                <div className="approach-card-heading">
                  <span className="approach-step">0{index + 1}</span>
                  <span className="approach-category">
                    {a.label.split(" / ")[1]}
                  </span>
                </div>
                <div className={`approach-art ${a.art}`} aria-hidden="true">
                  {a.art === "product" ? (
                    <>
                      <i />
                      <i />
                      <i />
                      <span>THE RIGHT PROBLEM</span>
                    </>
                  ) : a.art === "stack" ? (
                    <>
                      <i>UI</i>
                      <b>↔</b>
                      <i>API</i>
                      <b>↔</b>
                      <i>DB</i>
                    </>
                  ) : (
                    <>
                      <div>
                        <span>function</span> buildWithIntent() {"{"}
                      </div>
                      <div>
                        &nbsp; return <b>somethingBetter</b>;
                      </div>
                      <div>{"}"}</div>
                    </>
                  )}
                </div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="experience-section section-shell section-scene"
          id="experience"
        >
          <div className="experience-intro" data-reveal>
            <span className="section-kicker">04 / EXPERIENCE</span>
            <h2>
              Real teams.
              <br />
              Real <em>challenges.</em>
            </h2>
            <p>
              Building web applications for teams, businesses, and the people
              they serve.
            </p>
            <a
              href={profile.resume}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              The full story in my résumé <Arrow diagonal />
            </a>
          </div>
          <ExperienceList items={experiences} />
        </section>
        <section
          className="about-section section-shell section-scene"
          id="about"
        >
          <AboutSignature />
          <div className="about-copy" data-reveal>
            <h2>
              An engineer’s curiosity.
              <br />A <em>product mindset.</em>
            </h2>
            <p className="about-lead">
              I care about how things work.
              <br />
              And how they feel to use.
            </p>
            <p>
              I’m a full-stack software engineer based in Jakarta, with experience
              building SaaS platforms, business applications, and cloud service
              interfaces. My work connects user interfaces, backend services, and
              the integrations that keep products running.
            </p>
            <p>
              Alongside my professional work, I build products with small teams
              and collaborate on client and community projects. I enjoy
              understanding what people need, working through the details, and
              turning an idea into something useful.
            </p>
            <div className="skill-groups">
              {profile.skills.map((g) => (
                <div key={g.category}>
                  <h3>{g.category}</h3>
                  <p>{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
            <div className="education-line">
              Bachelor of Informatics Engineering{" "}
              <span>Universitas Dian Nuswantoro · 2023</span>
            </div>
          </div>
        </section>
        <section
          className="contact-section section-shell section-scene"
          id="contact"
        >
          <div className="contact-top" data-reveal>
            <span className="section-kicker">06 / WHAT’S NEXT?</span>
            <span className="micro">
              GOOD THINGS START WITH A CONVERSATION.
            </span>
          </div>
          <div className="contact-main" data-reveal>
            <h2>
              Have something
              <br />
              in <em>mind?</em>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label="Email Aldo Marcelino"
            >
              <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
            <div className="social-links">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  className="text-link"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                  <Arrow diagonal />
                </a>
              ))}
              <a className="text-link" href={profile.resume} download>
                Résumé <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a href="#home" className="footer-brand">
          <Mark /> Aldo Marcelino
        </a>
        <span>Thoughtfully designed. Carefully engineered.</span>
        <a href="#home">Back to top ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
      <Enhancements />
    </>
  );
}
