import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const PARTICLE_COUNT = 48;
const CONNECTION_DIST = 100;
const MOUSE_REPEL_DIST = 110;
const MOUSE_REPEL_STRENGTH = 0.018;
const BASE_SPEED = 0.17;

// Warm palette matching the site theme
const COLORS = [
  "rgba(193,125,60,", // accent
  "rgba(212,149,106,", // accentWarm
  "rgba(196,168,130,", // sand
  "rgba(107,124,92,", // moss
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
}

function make(w: number, h: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = BASE_SPEED * (0.5 + Math.random() * 0.8);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 1 + Math.random() * 1.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: 0.1 + Math.random() * 0.18,
  };
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let raf: number;
    let mouse = { x: -9999, y: -9999 };

    canvas.width = w;
    canvas.height = h;

    let particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      make(w, h),
    );

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles = Array.from({ length: PARTICLE_COUNT }, () => make(w, h));
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (1 - dist / MOUSE_REPEL_DIST) * MOUSE_REPEL_STRENGTH;
          p.vx += (dx / dist) * force * 10;
          p.vy += (dy / dist) * force * 10;
        }

        // Dampen back toward base speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > BASE_SPEED * 3) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        } else if (speed < BASE_SPEED * 0.5) {
          p.vx *= 1.02;
          p.vy *= 1.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.07;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139, 94, 60, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}
