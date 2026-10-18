import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { useI18n } from "../../../i18n/context";
import type { Project } from "../../../data/projects";
import { Icon } from "../../ui/Icon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Galería accesible sobre <dialog> nativo: foco atrapado, Escape y flechas. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const [shownId, setShownId] = useState(project?.id);

  // Reinicia la galería al abrir otro proyecto (patrón "ajustar estado al cambiar props").
  if (project?.id !== shownId) {
    setShownId(project?.id);
    setCurrent(0);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.classList.add("no-scroll");
    }
    if (!project && dialog.open) dialog.close();
  }, [project]);

  if (!project) return <dialog ref={dialogRef} className="modal" onClose={onClose} />;

  const { name, description } = t.projects.items[project.id];
  const total = project.images.length;
  const go = (step: number) => setCurrent((i) => (i + step + total) % total);

  const handleClose = () => {
    document.body.classList.remove("no-scroll");
    onClose();
  };

  // Clic en el backdrop (fuera del panel) cierra el modal.
  const onBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) dialogRef.current?.close();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (total < 2) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClose={handleClose}
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
    >
      <div className="modal__panel">
        <header className="modal__header">
          <div>
            <h3 id="modal-title" className="modal__title">
              {name}
            </h3>
            <ul className="chips">
              {project.stack.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={() => dialogRef.current?.close()}
            aria-label={t.a11y.close}
            autoFocus
          >
            <Icon name="close" />
          </button>
        </header>

        <p className="modal__desc">{description}</p>

        <div className="gallery">
          <div className="gallery__stage">
            <img
              key={current}
              className="gallery__img"
              src={project.images[current]}
              alt={`${name} — ${t.a11y.imageOf(current + 1, total)}`}
            />
            {total > 1 && (
              <>
                <button type="button" className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label={t.a11y.previousImage}>
                  <Icon name="chevronLeft" />
                </button>
                <button type="button" className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label={t.a11y.nextImage}>
                  <Icon name="chevronRight" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="gallery__thumbs">
              {project.images.map((src, i) => (
                <button
                  type="button"
                  key={src}
                  className={`gallery__thumb ${i === current ? "is-active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={t.a11y.imageOf(i + 1, total)}
                  aria-current={i === current}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
