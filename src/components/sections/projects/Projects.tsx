import { useState } from "react";
import { useI18n } from "../../../i18n/context";
import { projects, type Project } from "../../../data/projects";
import { Reveal } from "../../ui/Reveal";
import { SectionHeading } from "../../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading index="05" eyebrow={t.projects.eyebrow} title={t.projects.title} id="projects-title">
          {t.projects.intro}
        </SectionHeading>

        <ul className="projects">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={(i % 3) * 100} variant="blur">
              <ProjectCard
                project={project}
                index={i}
                name={t.projects.items[project.id].name}
                cta={t.projects.viewProject}
                onOpen={() => setSelected(project)}
              />
            </Reveal>
          ))}
        </ul>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
