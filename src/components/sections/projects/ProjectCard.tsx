import { useRef } from "react";
import { useTilt } from "../../../hooks/usePointerEffects";
import type { Project } from "../../../data/projects";

interface ProjectCardProps {
  project: Project;
  name: string;
  cta: string;
  index: number;
  onOpen: () => void;
}

export function ProjectCard({ project, name, cta, index, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useTilt(ref, 5);

  return (
    <button type="button" className="project spotlight" ref={ref} onClick={onOpen} aria-haspopup="dialog">
      <span className="project__media">
        <img src={project.images[0]} alt="" loading="lazy" decoding="async" />
      </span>
      <span className="project__glare" aria-hidden="true" />
      <span className="project__info">
        <span className="project__index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project__name">{name}</span>
        <span className="project__stack">{project.stack.join(" · ")}</span>
        <span className="project__cta">
          {cta}
          <span aria-hidden="true">↗</span>
        </span>
      </span>
    </button>
  );
}
