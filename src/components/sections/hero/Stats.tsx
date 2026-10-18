import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { useCountUp } from "../../../hooks/useCountUp";
import type { Dictionary } from "../../../i18n/es";

type StatItem = Dictionary["hero"]["stats"][number];

function Stat({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.value ?? 0, active);
  const display = stat.value === null ? stat.display : `${count}${stat.suffix}`;

  return (
    <li className="stat">
      <span className="stat__value text-gradient">{display}</span>
      <span className="stat__label">{stat.label}</span>
    </li>
  );
}

export function Stats({ stats }: { stats: StatItem[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { threshold: 0.4 });

  return (
    <ul className="stats" ref={ref}>
      {stats.map((stat) => (
        <Stat key={stat.label} stat={stat} active={inView} />
      ))}
    </ul>
  );
}
