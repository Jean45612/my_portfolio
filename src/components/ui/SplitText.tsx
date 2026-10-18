import { Fragment, type CSSProperties } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  /** Retardo inicial (ms) y separación entre letras (ms). */
  delay?: number;
  stagger?: number;
}

/**
 * Divide el texto en letras que aparecen de forma escalonada.
 * Los lectores de pantalla leen el texto completo desde la copia oculta.
 */
export function SplitText({ text, className = "", delay = 0, stagger = 35 }: SplitTextProps) {
  let index = 0;

  return (
    <span className={`split ${className}`}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, w) => (
        <Fragment key={w}>
          {w > 0 && " "}
          <span className="split__word" aria-hidden="true">
          {[...word].map((char) => {
            const i = index++;
            return (
              <span className="split__char" key={i} style={{ "--d": `${delay + i * stagger}ms` } as CSSProperties}>
                {char}
              </span>
            );
          })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
