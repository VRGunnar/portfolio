import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { RailWrap, RailDotBtn } from "../styles";

const MAGNET_RADIUS = 34;
const MAGNET_STRENGTH = 0.45;

function useMagnetic(ref: RefObject<HTMLButtonElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < MAGNET_RADIUS) {
        const pull = (1 - dist / MAGNET_RADIUS) * MAGNET_STRENGTH;
        el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
      } else {
        el.style.transform = "";
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [ref]);
}

function RailDot({
  active,
  index,
  onJump,
}: {
  active: boolean;
  index: number;
  onJump: (index: number) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useMagnetic(ref);

  return (
    <RailDotBtn
      ref={ref}
      type="button"
      $active={active}
      aria-label={`Go to section ${index + 1}`}
      aria-current={active}
      onClick={() => onJump(index)}
    />
  );
}

type ScrollRailProps = {
  count: number;
  activeIndex: number;
  onJump: (index: number) => void;
};

export default function ScrollRail({
  count,
  activeIndex,
  onJump,
}: ScrollRailProps) {
  return (
    <RailWrap aria-label="Section navigation">
      {Array.from({ length: count }).map((_, i) => (
        <RailDot key={i} active={i === activeIndex} index={i} onJump={onJump} />
      ))}
    </RailWrap>
  );
}
