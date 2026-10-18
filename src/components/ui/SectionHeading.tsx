import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  id: string;
  children?: ReactNode;
}

export function SectionHeading({ index, eyebrow, title, id, children }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <Reveal variant="fade">
        <p className="eyebrow">
          <span className="eyebrow__index">{index}</span>
          <span className="eyebrow__line" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={160}>
          <p className="section-heading__intro">{children}</p>
        </Reveal>
      )}
    </header>
  );
}
