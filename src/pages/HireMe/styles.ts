import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme";

// ── SHARED ─────────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
`;

const pageMaxWidth = "1120px";

export const PageWrapper = styled.div`
  background: ${theme.colors.cream};
  color: ${theme.colors.soil};
  font-family: ${theme.fonts.body};
  min-height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  max-width: ${pageMaxWidth};
  margin: 0 auto;
  padding: 0 1.35rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const SectionWrap = styled.section`
  padding: 4.5rem 0;
  border-top: 1px solid
    color-mix(in srgb, ${theme.colors.soil} 22%, transparent);

  &:first-of-type {
    border-top: none;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 3.5rem 0;
  }
`;

export const SectionLabel = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.moss};
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::after {
    content: "";
    display: block;
    width: 32px;
    height: 1px;
    background: ${theme.colors.moss};
    opacity: 0.7;
  }

  :root[data-theme="dark"] & {
    color: ${theme.colors.moss};

    &::after {
      opacity: 0.9;
    }
  }
`;

export const SectionH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.75rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${theme.colors.soil};
  margin-bottom: 0.5rem;
`;

export const SectionHeader = styled.div`
  margin-bottom: 2.35rem;
`;

// ── NAV ────────────────────────────────────────────────────────────────────

export const HireNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${theme.colors.cream};
  border-bottom: 1px solid
    color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const HireNavInner = styled.div`
  max-width: ${pageMaxWidth};
  margin: 0 auto;
  padding: 0 1.35rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const NavLogo = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  a {
    color: ${theme.colors.soil};
    text-decoration: none;
    transition: color 0.2s;

    span {
      color: ${theme.colors.accent};
    }

    &:hover {
      color: ${theme.colors.accent};
    }
  }
`;

export const NavSlug = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  color: ${theme.colors.stone};
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  border-radius: 4px;
  padding: 2px 8px;

  :root[data-theme="dark"] & {
    color: ${theme.colors.bark};
    border-color: color-mix(in srgb, ${theme.colors.soil} 34%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 84%,
      ${theme.colors.soil} 16%
    );
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const NavLink = styled.a`
  font-size: 13px;
  color: ${theme.colors.bark};
  text-decoration: none;
  transition: color 0.2s;
  font-family: ${theme.fonts.body};

  &:hover {
    color: ${theme.colors.soil};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavContactBtn = styled.a`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 30%, transparent);
  background: color-mix(
    in srgb,
    ${theme.colors.linen} 84%,
    ${theme.colors.cream}
  );
  color: ${theme.colors.soil};
  text-decoration: none;
  transition: all 0.2s;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 42%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 72%,
      ${theme.colors.soil} 28%
    );
  }

  &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.accent} 22%,
      ${theme.colors.cream}
    );
    color: ${theme.colors.soil};
    border-color: color-mix(in srgb, ${theme.colors.accent} 64%, transparent);
  }
`;

export const NavThemeBtn = styled.button`
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.bark};
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 28%, transparent);
  border-radius: 6px;
  background: color-mix(
    in srgb,
    ${theme.colors.linen} 84%,
    ${theme.colors.cream}
  );
  padding: 0.35rem 0.65rem;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s,
    background 0.2s;

  :root[data-theme="dark"] & {
    color: ${theme.colors.soil};
    border-color: color-mix(in srgb, ${theme.colors.soil} 42%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 72%,
      ${theme.colors.soil} 28%
    );
  }

  &:hover {
    color: ${theme.colors.soil};
    border-color: color-mix(in srgb, ${theme.colors.accent} 64%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.accent} 22%,
      ${theme.colors.cream}
    );
  }
`;

// ── HERO ───────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  padding: 4.8rem 0 3.4rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 3.7rem 0 2.6rem;
  }
`;

export const HeroEyebrow = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${theme.colors.moss};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  animation: ${fadeUp} 0.7s ease both;

  &::before {
    content: "";
    display: block;
    width: 28px;
    height: 1px;
    background: ${theme.colors.moss};
    opacity: 0.85;
  }
`;

export const HeroH1 = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${theme.colors.soil};
  margin-bottom: 1.4rem;
  animation: ${fadeUp} 0.7s 0.08s ease both;

  em {
    font-style: normal;
    color: ${theme.colors.accent};
  }
`;

export const HeroSub = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.bark};
  max-width: 640px;
  line-height: 1.7;
  margin-bottom: 2.2rem;
  font-weight: 300;
  animation: ${fadeUp} 0.7s 0.16s ease both;
`;

export const HeroTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.4rem;
  animation: ${fadeUp} 0.7s 0.22s ease both;
`;

export const Tag = styled.span<{ $accent?: boolean }>`
  display: inline-block;
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid
    ${(p) =>
      p.$accent
        ? theme.colors.clay
        : `color-mix(in srgb, ${theme.colors.soil} 24%, transparent)`};
  color: ${(p) => (p.$accent ? theme.colors.accent : theme.colors.bark)};
  background: ${(p) =>
    p.$accent
      ? `color-mix(in srgb, ${theme.colors.accent} 18%, ${theme.colors.cream})`
      : theme.colors.linen};
  white-space: nowrap;

  :root[data-theme="dark"] & {
    border-color: ${(p) =>
      p.$accent
        ? `color-mix(in srgb, ${theme.colors.accent} 62%, transparent)`
        : `color-mix(in srgb, ${theme.colors.soil} 30%, transparent)`};
    color: ${(p) => (p.$accent ? theme.colors.soil : theme.colors.soil)};
    background: ${(p) =>
      p.$accent
        ? `color-mix(in srgb, ${theme.colors.accent} 22%, ${theme.colors.linen})`
        : `color-mix(in srgb, ${theme.colors.linen} 82%, ${theme.colors.soil} 18%)`};
  }
`;

export const HeroCtas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: ${fadeUp} 0.7s 0.28s ease both;
`;

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 600;
  padding: 11px 22px;
  border-radius: 6px;
  background: ${theme.colors.accent};
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.clay};
  }
`;

export const BtnOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 600;
  padding: 11px 22px;
  border-radius: 6px;
  background: color-mix(
    in srgb,
    ${theme.colors.linen} 82%,
    ${theme.colors.cream}
  );
  color: ${theme.colors.soil};
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 32%, transparent);
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 44%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 70%,
      ${theme.colors.soil} 30%
    );
  }

  &:hover {
    border-color: color-mix(in srgb, ${theme.colors.accent} 68%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.accent} 22%,
      ${theme.colors.cream}
    );
    color: ${theme.colors.soil};
  }
`;

export const HeroStatus = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: ${theme.fonts.heading};
  font-size: 12.5px;
  color: ${theme.colors.bark};
  animation: ${fadeUp} 0.7s 0.34s ease both;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.colors.moss};
  flex-shrink: 0;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// ── CAPABILITIES ───────────────────────────────────────────────────────────

export const CapsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1px;
  background: rgba(74, 55, 40, 0.1);
  border: 1px solid rgba(74, 55, 40, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const CapCard = styled.div`
  background: ${theme.colors.linen};
  padding: 1.75rem 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.sand};
  }
`;

export const CapIcon = styled.div`
  font-family: "DM Mono", "Menlo", "Monaco", monospace;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${theme.colors.accent};
  margin-bottom: 0.9rem;
  display: inline-block;
`;

export const CapTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.soil};
  margin-bottom: 0.5rem;
`;

export const CapDesc = styled.p`
  font-size: 13px;
  color: ${theme.colors.bark};
  line-height: 1.6;
`;

// ── PROJECT ────────────────────────────────────────────────────────────────

export const ProjectCard = styled.div`
  background: ${theme.colors.linen};
  border: 1px solid rgba(74, 55, 40, 0.12);
  border-radius: 10px;
  overflow: hidden;
`;

export const ProjectHeader = styled.div`
  padding: 2rem 2rem 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem 1.5rem 0;
  }
`;

export const ProjectMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.soil};
  margin-bottom: 0.75rem;
`;

export const ProjectDesc = styled.p`
  font-size: 0.93rem;
  color: ${theme.colors.bark};
  line-height: 1.7;
  margin-top: 1rem;
  margin-bottom: 1.75rem;
  font-weight: 300;
`;

export const ProjectBody = styled.div`
  padding: 0 2rem 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1.5rem 1.5rem;
  }
`;

export const CaseFlow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(74, 55, 40, 0.1);
  border: 1px solid rgba(74, 55, 40, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1.75rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const CaseStep = styled.div`
  background: ${theme.colors.cream};
  padding: 1.25rem 1.1rem;
`;

export const CaseStepLabel = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${theme.colors.stone};
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

export const CaseStepTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.soil};
  margin-bottom: 0.4rem;
`;

export const CaseStepText = styled.p`
  font-size: 13px;
  color: ${theme.colors.bark};
  line-height: 1.55;
`;

export const ProjectStats = styled.div`
  display: flex;
  gap: 1.35rem;
  flex-wrap: wrap;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StatVal = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.span`
  font-size: 11px;
  color: ${theme.colors.stone};
  font-family: ${theme.fonts.heading};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

// ── ARCHITECTURE ───────────────────────────────────────────────────────────

export const ArchDiagram = styled.div`
  background: ${theme.colors.linen};
  border: 1px solid rgba(74, 55, 40, 0.12);
  border-radius: 10px;
  padding: 2rem;
`;

export const ArchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 36px 1fr 36px 1fr 36px 1fr;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const ArchNode = styled.div<{ $highlight?: boolean }>`
  background: ${(p) =>
    p.$highlight ? `rgba(193, 125, 60, 0.08)` : theme.colors.cream};
  border: 1px solid
    ${(p) => (p.$highlight ? theme.colors.clay : "rgba(74, 55, 40, 0.15)")};
  border-radius: 6px;
  padding: 1rem 0.85rem;
  text-align: center;
`;

export const ArchNodeIcon = styled.div`
  font-family: "DM Mono", "Menlo", "Monaco", monospace;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #a97a2c;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

export const ArchNodeTitle = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.soil};
  margin-bottom: 3px;
`;

export const ArchNodeSub = styled.div`
  font-size: 11px;
  color: ${theme.colors.stone};
  font-family: ${theme.fonts.heading};
`;

export const ArchArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.stone};
  font-size: 16px;
  font-weight: 300;

  @media (max-width: ${theme.breakpoints.md}) {
    transform: rotate(90deg);
  }
`;

export const ArchLegend = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(74, 55, 40, 0.1);
  flex-wrap: wrap;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  color: ${theme.colors.stone};
  font-family: ${theme.fonts.heading};
`;

export const LegendDot = styled.div<{ $color: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  flex-shrink: 0;
`;

// ── MINDSET ────────────────────────────────────────────────────────────────

export const MindsetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  align-items: stretch;
`;

export const MindsetItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: ${theme.colors.linen};
  border: 1px solid rgba(74, 55, 40, 0.1);
  border-radius: 6px;
  transition: border-color 0.2s;
  min-height: 180px;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: ${theme.colors.clay};
  }
`;

export const MindsetNum = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  font-weight: 600;
  color: ${theme.colors.accent};
  min-width: 24px;
  padding-top: 2px;
`;

export const MindsetText = styled.p`
  font-size: 14px;
  color: ${theme.colors.bark};
  line-height: 1.65;

  strong {
    color: ${theme.colors.soil};
    font-weight: 600;
  }
`;

// ── EXPERIENCE ─────────────────────────────────────────────────────────────

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: start;
  padding: 1.35rem 0;
  border-bottom: 1px solid rgba(74, 55, 40, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ExpRole = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.soil};
  margin-bottom: 0.25rem;
`;

export const ExpCompany = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 12.5px;
  color: ${theme.colors.accent};
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

export const ExpBullets = styled.ul`
  list-style: none;
`;

export const ExpBullet = styled.li`
  font-size: 14px;
  color: ${theme.colors.bark};
  padding: 3px 0 3px 1.1rem;
  position: relative;
  line-height: 1.55;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${theme.colors.stone};
  }
`;

export const ExpDate = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  color: ${theme.colors.stone};
  white-space: nowrap;
  padding-top: 3px;
  font-weight: 500;
  letter-spacing: 0.04em;

  @media (max-width: ${theme.breakpoints.sm}) {
    order: -1;
  }
`;

// ── STACK ──────────────────────────────────────────────────────────────────

export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
`;

export const StackGroup = styled.div`
  background: ${theme.colors.linen};
  border: 1px solid rgba(74, 55, 40, 0.1);
  border-radius: 6px;
  padding: 1.25rem;
`;

export const StackGroupLabel = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.8rem;
`;

export const StackItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const StackItem = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 5px;
  background: ${theme.colors.cream};
  border: 1px solid rgba(74, 55, 40, 0.12);
  color: ${theme.colors.bark};
`;

// ── WIP ────────────────────────────────────────────────────────────────────

export const WipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const WipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: ${theme.colors.linen};
  border: 1px solid rgba(74, 55, 40, 0.1);
  border-radius: 6px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.colors.clay};
  }
`;

export const WipBadge = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 3px 9px;
  border-radius: 5px;
  background: rgba(193, 125, 60, 0.08);
  color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.clay};
  white-space: nowrap;
  text-transform: uppercase;
`;

export const WipText = styled.p`
  font-size: 14px;
  color: ${theme.colors.bark};
  line-height: 1.55;

  strong {
    color: ${theme.colors.soil};
    font-weight: 600;
  }
`;

// ── CONTACT ────────────────────────────────────────────────────────────────

export const ContactSection = styled.section`
  padding: 4.8rem 0;
  text-align: center;
  border-top: 1px solid
    color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 60% 70% at 50% 50%,
      rgba(193, 125, 60, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const ContactSectionLabel = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.moss};
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  &::after {
    content: "";
    display: block;
    width: 32px;
    height: 1px;
    background: ${theme.colors.moss};
    opacity: 0.7;
  }

  :root[data-theme="dark"] & {
    color: ${theme.colors.moss};

    &::after {
      opacity: 0.9;
    }
  }
`;

export const ContactH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.75rem, 3.2vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: ${theme.colors.soil};
  margin: 0 auto 0.75rem;
  max-width: 520px;
`;

export const ContactSub = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.bark};
  font-weight: 300;
  margin: 0 auto 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const ContactEmail = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.heading};
  font-size: clamp(1rem, 2.8vw, 1.35rem);
  font-weight: 600;
  color: ${theme.colors.accent};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.clay};
  padding-bottom: 3px;
  margin-bottom: 2.2rem;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.soil};
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

// ── STICKY CTA ─────────────────────────────────────────────────────────────

export const StickyCta = styled.a<{ $hidden: boolean }>`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  background: ${theme.colors.accent};
  color: #fff;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  border-radius: 100px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition:
    background 0.2s,
    transform 0.2s,
    opacity 0.3s;
  opacity: ${(p) => (p.$hidden ? 0 : 1)};
  pointer-events: ${(p) => (p.$hidden ? "none" : "auto")};

  &:hover {
    background: ${theme.colors.clay};
    transform: translateY(-2px);
  }
`;

// ── FOOTER ─────────────────────────────────────────────────────────────────

export const HireFooter = styled.footer`
  border-top: 1px solid
    color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  padding: 1.3rem 0;
`;

export const HireFooterInner = styled.div`
  max-width: ${pageMaxWidth};
  margin: 0 auto;
  padding: 0 1.35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: ${theme.fonts.heading};
  font-size: 12.5px;
  color: ${theme.colors.stone};

  :root[data-theme="dark"] & {
    color: ${theme.colors.bark};
  }
`;

// ── LAYOUT ─────────────────────────────────────────────────────────────────

export const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
`;

export const ContentMain = styled.main`
  flex: 1;
  min-width: 0;
`;

// ── SIDEBAR ────────────────────────────────────────────────────────────────

export const SidebarWrap = styled.aside<{ $visible?: boolean }>`
  width: ${({ $visible }) => ($visible ? "196px" : "0")};
  flex-shrink: 0;
  position: sticky;
  top: 56px;
  height: calc(100vh - 56px);
  overflow: hidden;
  padding: ${({ $visible }) =>
    $visible ? "2.5rem 1rem 2.5rem 1.75rem" : "2.5rem 0"};
  border-right: ${({ $visible }) =>
    $visible ? "1px solid rgba(74, 55, 40, 0.08)" : "none"};
  display: flex;
  flex-direction: column;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    width 0.4s ease,
    padding 0.4s ease,
    opacity 0.3s ease;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

export const SidebarTimeline = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    left: 3.5px;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: rgba(74, 55, 40, 0.12);
  }
`;

export const SidebarSpacer = styled.div<{ $active?: boolean }>`
  flex: ${(p) => (p.$active ? 1 : 0)};
  min-height: ${(p) => (p.$active ? "1.5rem" : "0")};
  transition:
    flex 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    min-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SidebarEntry = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.3rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  position: relative;
`;

export const SidebarDot = styled.span<{ $active?: boolean }>`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => (p.$active ? theme.colors.accent : theme.colors.cream)};
  border: 1.5px solid
    ${(p) => (p.$active ? theme.colors.accent : "rgba(74, 55, 40, 0.28)")};
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
`;

export const SidebarLabel = styled.span<{ $active?: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: ${(p) => (p.$active ? theme.colors.soil : theme.colors.stone)};
  font-weight: ${(p) => (p.$active ? "500" : "400")};
  transition: color 0.25s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${SidebarEntry}:hover & {
    color: ${theme.colors.soil};
  }
`;

// ── MOBILE MENU ────────────────────────────────────────────────────────────

export const MobileMenuBtn = styled.button<{ $open?: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: ${theme.colors.soil};
    border-radius: 1px;
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
    transform-origin: center;
  }

  ${(p) =>
    p.$open &&
    css`
      span:nth-child(1) {
        transform: translateY(6.75px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-6.75px) rotate(-45deg);
      }
    `}

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(44, 31, 20, 0.35);
  z-index: 199;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const MobileMenuDrawer = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: ${theme.colors.cream};
  z-index: 200;
  padding: 5rem 2rem 2rem;
  transform: ${(p) => (p.$open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  box-shadow: ${(p) =>
    p.$open ? "4px 0 32px rgba(44, 31, 20, 0.12)" : "none"};
`;

export const MobileNavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.8rem 0;
  border: none;
  border-bottom: 1px solid rgba(74, 55, 40, 0.07);
  background: none;
  cursor: pointer;
  text-align: left;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: ${(p) => (p.$active ? theme.colors.accent : theme.colors.bark)};
  font-weight: ${(p) => (p.$active ? "500" : "400")};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${theme.colors.soil};
  }
`;

export const MobileNavDot = styled.span<{ $active?: boolean }>`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(p) =>
    p.$active ? theme.colors.accent : "rgba(74, 55, 40, 0.25)"};
  transition: background 0.2s;
`;
