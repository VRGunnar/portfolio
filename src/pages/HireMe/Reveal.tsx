import { type ReactNode, type RefObject } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(22px)",
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}
