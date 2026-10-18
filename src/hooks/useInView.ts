import { useEffect, useState, type RefObject } from "react";

interface Options {
  /** Deja de observar tras la primera aparición. */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element | null>,
  { once = true, threshold = 0.15, rootMargin = "0px 0px -8% 0px" }: Options = {},
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return inView;
}
