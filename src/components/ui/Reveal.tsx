import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type Variant = "up" | "fade" | "scale" | "left" | "right" | "blur";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  /** Retardo en milisegundos, útil para animaciones escalonadas. */
  delay?: number;
  className?: string;
}

/** Anima la entrada de su contenido la primera vez que aparece en pantalla. */
export function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
