import { useCallback, useState } from "react";
import { useI18n } from "./i18n/context";
import { useSpotlight } from "./hooks/usePointerEffects";
import { Intro } from "./components/layout/Intro";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/layout/BackToTop";
import { Hero } from "./components/sections/hero/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/projects/Projects";
import { Contact } from "./components/sections/contact/Contact";

export default function App() {
  const { t } = useI18n();
  const [ready, setReady] = useState(false);
  const onIntroDone = useCallback(() => setReady(true), []);
  useSpotlight();

  return (
    <div className={`app ${ready ? "is-ready" : ""}`}>
      <Intro onDone={onIntroDone} />
      <a href="#main" className="skip-link">
        {t.a11y.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <Hero ready={ready} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
