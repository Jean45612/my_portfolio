import { useEffect, useRef } from "react";
import { useI18n } from "../../i18n/context";
import { experienceStack } from "../../data/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Escribe en --progress (0–1) cuánto de la línea de tiempo se ha recorrido. */
function useTimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const anchor = window.innerHeight * 0.6;
        const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
        el.style.setProperty("--progress", progress.toFixed(3));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}

export function Experience() {
  const { t } = useI18n();
  const timelineRef = useTimelineProgress();

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          id="experience-title"
        />

        <div className="timeline" ref={timelineRef}>
          <span className="timeline__track" aria-hidden="true">
            <span className="timeline__fill" />
          </span>
          <ol className="timeline__list">
          {t.experience.items.map((job) => (
            <Reveal as="li" key={job.id} className={`timeline__item ${job.current ? "is-current" : ""}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <article className="job card spotlight">
                <header className="job__header">
                  <div>
                    <h3 className="job__role">{job.role}</h3>
                    <p className="job__company">
                      {job.company}
                      {job.client && (
                        <span className="job__client">
                          {" "}
                          · {t.experience.client} <strong>{job.client}</strong>
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="job__period">
                    {job.current && <span className="pulse" aria-hidden="true" />}
                    {job.period}
                  </span>
                </header>
                <ul className="job__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Stack">
                  {(experienceStack[job.id] ?? []).map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
