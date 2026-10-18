import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/motion";

const DURATION = 1500;
const EXIT = 700;
const SESSION_KEY = "intro-seen";

function shouldShowIntro(): boolean {
  try {
    return !prefersReducedMotion() && !sessionStorage.getItem(SESSION_KEY);
  } catch {
    return false;
  }
}

/** Cortina de bienvenida (una vez por sesión). Llama a onDone al terminar. */
export function Intro({ onDone }: { onDone: () => void }) {
  const [show] = useState(shouldShowIntro);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(!show);

  useEffect(() => {
    if (!show) {
      onDone();
      return;
    }
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignorado
    }
    const leave = window.setTimeout(() => {
      setLeaving(true);
      onDone();
    }, DURATION);
    const remove = window.setTimeout(() => setGone(true), DURATION + EXIT);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(remove);
    };
  }, [show, onDone]);

  if (gone) return null;

  return (
    <div className={`intro ${leaving ? "intro--leave" : ""}`} aria-hidden="true">
      <p className="intro__text">
        <span className="intro__bracket">&lt;</span>
        <span className="intro__word">Hola mundo</span>
        <span className="intro__bracket"> /&gt;</span>
      </p>
      <span className="intro__bar" />
    </div>
  );
}
