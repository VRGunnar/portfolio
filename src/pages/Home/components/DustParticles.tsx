import { useMemo } from "react";
import { DustLayer, DustMote } from "../styles";

const PARTICLE_COUNT = 18;

export default function DustParticles() {
  const motes = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: Math.random() * 100,
        top: 55 + Math.random() * 45,
        size: 2 + Math.random() * 2.5,
        duration: 16 + Math.random() * 14,
        delay: -Math.random() * 24,
      })),
    [],
  );

  return (
    <DustLayer aria-hidden="true">
      {motes.map((m, i) => (
        <DustMote
          key={i}
          $size={m.size}
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </DustLayer>
  );
}
