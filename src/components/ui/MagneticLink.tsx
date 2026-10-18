import { useRef, type AnchorHTMLAttributes } from "react";
import { useMagnetic } from "../../hooks/usePointerEffects";

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
}

export function MagneticLink({ variant = "primary", className = "", children, ...rest }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 0.25);

  return (
    <a ref={ref} className={`btn btn--${variant} ${className}`} {...rest}>
      <span className="btn__label">{children}</span>
    </a>
  );
}
