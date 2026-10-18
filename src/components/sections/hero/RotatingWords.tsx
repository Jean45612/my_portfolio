import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../../lib/motion";

export function RotatingWords({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words, interval]);

  return (
    <span className="rotating">
      <span className="sr-only">{words.join(", ")}</span>
      <span className="rotating__word text-gradient" key={`${words[0]}-${index}`} aria-hidden="true">
        {words[index % words.length]}
      </span>
    </span>
  );
}
