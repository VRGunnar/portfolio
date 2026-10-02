import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme";
import type { SectionBg } from "./data";

const bgVar = (bg: SectionBg) => theme.colors[bg];

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
`;

const railPulse = keyframes`
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--rail-pulse-color, ${theme.colors.accent}) 55%, transparent); }
  100% { box-shadow: 0 0 0 9px transparent; }
`;

const drift = keyframes`
  0% { transform: translate(0, 0); opacity: 0; }
  12% { opacity: 0.55; }
  50% { transform: translate(6px, -70px); opacity: 0.3; }
  88% { opacity: 0.12; }
  100% { transform: translate(-5px, -150px); opacity: 0; }
`;

// ── LAYOUT ─────────────────────────────────────────────────────────────────

export const PageWrapper = styled.div`
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.cream};
  color: ${theme.colors.soil};
  font-family: ${theme.fonts.body};
  overflow: hidden;

  --home-mx: 50%;
  --home-my: 40%;
`;

export const ScrollTrack = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  outline: none;
  filter: blur(var(--scroll-blur, 0px));
  transition: filter 0.25s ease-out;
  will-change: filter;

  @media (prefers-reduced-motion: reduce) {
    scroll-snap-type: none;
    filter: none;
    transition: none;
  }
`;

export const DustLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
`;

export const DustMote = styled.span<{ $size: number }>`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  background: ${theme.colors.sand};
  filter: blur(0.5px);
  animation: ${drift} linear infinite;
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 800;
  background: color-mix(in srgb, ${theme.colors.soil} 10%, transparent);

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${(p) => Math.max(0, Math.min(1, p.$progress)) * 100}%;
    background: ${theme.colors.accent};
    transition: width 0.4s ease;
  }
`;

// ── SECTION ────────────────────────────────────────────────────────────────

export const Section = styled.section<{ $bg: SectionBg }>`
  position: relative;
  height: 100%;
  min-height: 100%;
  flex-shrink: 0;
  scroll-margin-top: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem;
  overflow: hidden;
  background:
    radial-gradient(
      640px circle at var(--home-mx) var(--home-my),
      color-mix(in srgb, ${theme.colors.accent} 13%, transparent),
      transparent 68%
    ),
    ${(p) => bgVar(p.$bg)};

  :root[data-theme="light"] & {
    background:
      radial-gradient(
        560px circle at var(--home-mx) var(--home-my),
        color-mix(in srgb, ${theme.colors.clay} 32%, transparent),
        transparent 70%
      ),
      ${(p) => bgVar(p.$bg)};
  }

  @media (prefers-reduced-motion: reduce) {
    background: ${(p) => bgVar(p.$bg)};
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  width: 100%;
  text-align: center;
`;

export const IconWrap = styled.div<{ $inView: boolean }>`
  position: relative;
  z-index: 2;
  height: 52px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transform: translateY(calc(var(--pz, 0) * 60px));
  filter: hue-rotate(var(--accent-hue, 0deg));
  transition: opacity 0.4s ease;

  svg {
    height: 100%;
    width: auto;
    overflow: visible;
  }

  :root[data-theme="light"] & {
    color: ${theme.colors.clay};
  }
`;

export const DrawShape = styled.path<{
  $inView: boolean;
  $delay?: number;
  $length?: number;
}>`
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: ${(p) => p.$length ?? 420};
  stroke-dashoffset: ${(p) => (p.$inView ? 0 : (p.$length ?? 420))};
  transition: stroke-dashoffset 1.1s ${(p) => p.$delay ?? 0}s
    cubic-bezier(0.4, 0, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.4s ease;
    stroke-dashoffset: 0;
    opacity: ${(p) => (p.$inView ? 1 : 0)};
  }
`;

export const QuoteMark = styled.span`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(calc(var(--pz, 0) * 18px));
  font-family: ${theme.fonts.heading};
  font-size: clamp(8rem, 20vw, 15rem);
  line-height: 1;
  color: ${theme.colors.accent};
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
  z-index: 1;
  filter: hue-rotate(var(--accent-hue, 0deg));
`;

// ── SHARED TEXT ────────────────────────────────────────────────────────────

export const Kicker = styled.p<{ $inView: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transform: translateY(calc(var(--pz, 0) * 34px));
  filter: hue-rotate(var(--accent-hue, 0deg));
  transition: opacity 0.6s ease;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 26px;
    height: 1px;
    background: ${theme.colors.accent};
    opacity: 0.7;
  }

  :root[data-theme="light"] & {
    color: ${theme.colors.clay};

    &::before,
    &::after {
      background: ${theme.colors.clay};
    }
  }
`;

export const Heading = styled.h2<{ $inView: boolean }>`
  font-family: ${theme.fonts.heading};
  font-weight: 800;
  font-size: clamp(2.1rem, 6.4vw, 4.6rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${theme.colors.soil};
  margin-bottom: 1.4rem;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transform: translateY(calc(var(--pz, 0) * 34px));
  transition: opacity 0.7s 0.08s ease;
`;

export const Body = styled.p<{ $inView: boolean }>`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 1.75;
  color: ${theme.colors.bark};
  max-width: 620px;
  margin: 0 auto;
  font-weight: 300;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transform: translateY(calc(var(--pz, 0) * 34px));
  transition: opacity 0.7s 0.18s ease;
`;

// ── INTRO ──────────────────────────────────────────────────────────────────

export const IntroEyebrow = styled(Kicker)`
  color: ${theme.colors.moss};

  &::before,
  &::after {
    background: ${theme.colors.moss};
  }

  :root[data-theme="light"] & {
    color: color-mix(in srgb, ${theme.colors.moss} 65%, ${theme.colors.soil} 35%);

    &::before,
    &::after {
      background: color-mix(
        in srgb,
        ${theme.colors.moss} 65%,
        ${theme.colors.soil} 35%
      );
    }
  }
`;

export const IntroHeading = styled(Heading)`
  font-size: clamp(2.3rem, 7.5vw, 5.2rem);
`;

export const IntroSub = styled(Body)`
  max-width: 520px;
`;

export const IntroFlourish = styled.div<{ $inView: boolean }>`
  height: 18px;
  width: 140px;
  margin: -0.6rem auto 1.6rem;
  color: ${theme.colors.moss};

  svg {
    height: 100%;
    width: 100%;
    overflow: visible;
  }

  :root[data-theme="light"] & {
    color: color-mix(in srgb, ${theme.colors.moss} 65%, ${theme.colors.soil} 35%);
  }
`;

export const ScrollCue = styled.button<{ $inView: boolean }>`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transition: opacity 0.8s 0.5s ease;

  span {
    display: inline-block;
    font-size: 15px;
    animation: ${bounce} 1.6s ease-in-out infinite;
  }

  :root[data-theme="light"] & {
    color: ${theme.colors.bark};
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`;

// ── CLOSING ────────────────────────────────────────────────────────────────

export const ClosingHeading = styled(Heading)`
  font-size: clamp(1.9rem, 5vw, 3rem);
`;

export const ClosingSub = styled(Body)``;

export const ClosingCtaRow = styled.div<{ $inView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: center;
  margin: 2rem 0 1.5rem;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transform: translateY(${(p) => (p.$inView ? "0" : "18px")});
  transition:
    opacity 0.7s 0.26s ease,
    transform 0.7s 0.26s ease;
`;

export const ClosingLinksRow = styled.div<{ $inView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1.35rem;
  justify-content: center;
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transition: opacity 0.7s 0.34s ease;
`;

export const ClosingLink = styled.a`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.bark};
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s,
    background 0.2s;

  &:hover {
    color: ${theme.colors.soil};
    border-color: ${theme.colors.clay};
    background: color-mix(in srgb, ${theme.colors.clay} 24%, transparent);
  }
`;

export const SignatureFlourish = styled.div<{ $inView: boolean }>`
  height: 40px;
  width: 200px;
  margin: 3rem auto 0.9rem;
  color: ${theme.colors.clay};
  opacity: ${(p) => (p.$inView ? 1 : 0)};
  transition: opacity 0.5s 0.3s ease;

  svg {
    height: 100%;
    width: 100%;
    overflow: visible;
  }
`;

export const ClosingFootnote = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 11.5px;
  color: ${theme.colors.stone};
  letter-spacing: 0.02em;

  :root[data-theme="light"] & {
    color: ${theme.colors.bark};
  }
`;

// ── SCROLL RAIL ────────────────────────────────────────────────────────────

export const RailWrap = styled.nav`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 550;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 8px;
  border-radius: 100px;
  background: color-mix(in srgb, ${theme.colors.linen} 55%, transparent);
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 14%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const RailDotBtn = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${(p) => (p.$active ? "10px" : "7px")};
  height: ${(p) => (p.$active ? "10px" : "7px")};
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  border: 1.5px solid
    ${(p) =>
      p.$active
        ? theme.colors.accent
        : `color-mix(in srgb, ${theme.colors.soil} 40%, transparent)`};
  background: ${(p) => (p.$active ? theme.colors.accent : "transparent")};
  transition:
    width 0.25s ease,
    height 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.2s ease-out;
  animation: ${(p) =>
    p.$active ? css`${railPulse} 1.8s ease-out infinite` : "none"};

  &:hover {
    border-color: ${(p) =>
      p.$active
        ? theme.colors.accent
        : `color-mix(in srgb, ${theme.colors.soil} 70%, transparent)`};
    background: ${(p) =>
      p.$active
        ? theme.colors.accent
        : `color-mix(in srgb, ${theme.colors.soil} 25%, transparent)`};
  }

  :root[data-theme="light"] & {
    --rail-pulse-color: ${theme.colors.clay};
    border-color: ${(p) =>
      p.$active
        ? theme.colors.clay
        : `color-mix(in srgb, ${theme.colors.soil} 40%, transparent)`};
    background: ${(p) => (p.$active ? theme.colors.clay : "transparent")};

    &:hover {
      border-color: ${(p) =>
        p.$active
          ? theme.colors.clay
          : `color-mix(in srgb, ${theme.colors.soil} 70%, transparent)`};
      background: ${(p) =>
        p.$active
          ? theme.colors.clay
          : `color-mix(in srgb, ${theme.colors.soil} 25%, transparent)`};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
