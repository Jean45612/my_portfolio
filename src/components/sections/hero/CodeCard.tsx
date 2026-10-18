import { useEffect, useRef, useState } from "react";
import { useTilt } from "../../../hooks/usePointerEffects";
import { prefersReducedMotion } from "../../../lib/motion";

type Kind = "kw" | "var" | "prop" | "str" | "punct" | "type" | "comment" | "plain";
type Token = [text: string, kind: Kind];

// Tarjeta "viva": el perfil escrito como código TypeScript.
const TOKENS: Token[] = [
  ["// engineer.ts", "comment"],
  ["\n", "plain"],
  ["const ", "kw"],
  ["engineer", "var"],
  [": ", "punct"],
  ["Engineer", "type"],
  [" = {\n", "punct"],
  ["  name", "prop"],
  [": ", "punct"],
  ['"Jean Pierre Acosta"', "str"],
  [",\n", "punct"],
  ["  role", "prop"],
  [": ", "punct"],
  ['"Senior Frontend Engineer"', "str"],
  [",\n", "punct"],
  ["  stack", "prop"],
  [": [", "punct"],
  ['"Angular 17+"', "str"],
  [", ", "punct"],
  ['"TypeScript"', "str"],
  [", ", "punct"],
  ['"RxJS"', "str"],
  ["],\n", "punct"],
  ["  sectors", "prop"],
  [": [", "punct"],
  ['"Banking"', "str"],
  [", ", "punct"],
  ['"Fintech"', "str"],
  ["],\n", "punct"],
  ["  cares", "prop"],
  [": [", "punct"],
  ['"performance"', "str"],
  [", ", "punct"],
  ['"security"', "str"],
  [", ", "punct"],
  ['"DX"', "str"],
  ["],\n", "punct"],
  ["  based", "prop"],
  [": ", "punct"],
  ['"Lima, PE"', "str"],
  [",\n", "punct"],
  ["};", "punct"],
];

// Posición de inicio de cada token dentro del texto completo.
const OFFSETS: number[] = [];
let cursor = 0;
for (const [text] of TOKENS) {
  OFFSETS.push(cursor);
  cursor += text.length;
}
const TOTAL = cursor;

export function CodeCard({ start }: { start: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? TOTAL : 0));
  useTilt(ref, 6);

  useEffect(() => {
    if (!start || typed >= TOTAL) return;
    // Empieza tras la animación del nombre y escribe a ritmo "humano".
    const delay = typed === 0 ? 900 : 14 + Math.random() * 22;
    const id = window.setTimeout(() => setTyped((n) => n + 1), delay);
    return () => window.clearTimeout(id);
  }, [typed, start]);

  const visible = TOKENS.map(([text, kind], i) => {
    const start = OFFSETS[i] ?? 0;
    if (start >= typed) return null;
    const slice = text.slice(0, typed - start);
    return (
      <span key={i} className={`tok tok--${kind}`}>
        {slice}
      </span>
    );
  });

  return (
    <div className="code-card spotlight" ref={ref}>
      <div className="code-card__glare" aria-hidden="true" />
      <div className="code-card__bar" aria-hidden="true">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="code-card__file">engineer.ts</span>
      </div>
      <pre className="code-card__body" aria-label="engineer.ts">
        <code>
          {visible}
          <span className={`caret ${typed >= TOTAL ? "caret--idle" : ""}`} aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}
