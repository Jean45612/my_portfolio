import { useI18n } from "../../i18n/context";
import { marqueeTech } from "../../data/profile";
import { cssVars } from "../../lib/style";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""}`} aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();
  const half = Math.ceil(marqueeTech.length / 2);

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading index="03" eyebrow={t.skills.eyebrow} title={t.skills.title} id="skills-title" />
      </div>

      <div className="marquees">
        <Marquee items={marqueeTech.slice(0, half)} />
        <Marquee items={marqueeTech.slice(half)} reverse />
      </div>

      <div className="container">
        <div className="bento">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.name} delay={(i % 3) * 90} className={`bento__cell card spotlight bento__cell--${i}`}>
              <h3 className="bento__title">
                <span className="bento__num">{String(i + 1).padStart(2, "0")}</span>
                {group.name}
              </h3>
              <ul className="chips">
                {group.items.map((item, j) => (
                  <li className="chip chip--pop" key={item} style={cssVars({ "--i": j })}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
