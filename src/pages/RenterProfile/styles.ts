import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const cardBorder = `color-mix(in srgb, ${theme.colors.soil} 24%, transparent)`;
const cardBorderDark = `color-mix(in srgb, ${theme.colors.soil} 36%, transparent)`;
const cardBorderAccent = `color-mix(in srgb, ${theme.colors.accent} 45%, transparent)`;
const cardBorderAccentDark = `color-mix(in srgb, ${theme.colors.accent} 60%, transparent)`;
const cardBg = `color-mix(in srgb, ${theme.colors.linen} 78%, ${theme.colors.soil} 22%)`;

// ── HERO LAYOUT ──────────────────────────────────────────────────────────

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

// ── PHOTO PLACEHOLDERS ───────────────────────────────────────────────────

export const PhotoFrame = styled.div<{ $ratio?: string; $filled?: boolean }>`
  position: relative;
  aspect-ratio: ${(p) => p.$ratio ?? "4 / 5"};
  border: 1px ${(p) => (p.$filled ? "solid" : "dashed")} ${cardBorder};
  border-radius: 14px;
  background: ${theme.colors.linen};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  :root[data-theme="dark"] & {
    border-color: ${cardBorderDark};
    background: ${cardBg};
  }
`;

export const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const PhotoLabel = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  text-align: center;
  padding: 0 14px;
`;

export const PhotoCaption = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 11.5px;
  color: ${theme.colors.stone};
  text-align: center;
  margin-top: 0.6rem;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// ── STAT STRIP ───────────────────────────────────────────────────────────

export const StatStrip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0 0 240px;
  background: ${theme.colors.linen};
  border: 1px solid ${cardBorder};
  border-radius: 10px;
  padding: 1.25rem;

  :root[data-theme="dark"] & {
    border-color: ${cardBorderDark};
    background: ${cardBg};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex: 1 1 100%;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StatValue = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.soil};
`;

export const StatLabel = styled.span`
  font-size: 11.5px;
  color: ${theme.colors.stone};
`;

// ── INFO / LOOKING-FOR CARDS ─────────────────────────────────────────────

export const InfoCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div<{ $accent?: boolean; $span?: boolean }>`
  background: ${theme.colors.linen};
  border: 1px solid ${(p) => (p.$accent ? cardBorderAccent : cardBorder)};
  border-radius: 10px;
  padding: 1.35rem;
  grid-column: ${(p) => (p.$span ? "span 2" : "auto")};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-column: auto;
  }

  :root[data-theme="dark"] & {
    border-color: ${(p) => (p.$accent ? cardBorderAccentDark : cardBorderDark)};
    background: ${cardBg};
  }
`;

export const InfoCardIcon = styled.div<{ $accent?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.85rem;
  background: ${(p) =>
    p.$accent
      ? `color-mix(in srgb, ${theme.colors.accent} 18%, transparent)`
      : `color-mix(in srgb, ${theme.colors.soil} 8%, transparent)`};
  border: 1px solid ${(p) => (p.$accent ? cardBorderAccent : cardBorder)};
  color: ${(p) => (p.$accent ? theme.colors.accent : theme.colors.bark)};
`;

export const InfoCardTag = styled.div<{ $accent?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${(p) => (p.$accent ? theme.colors.accent : theme.colors.stone)};
  margin-bottom: 0.5rem;

  &::before {
    content: "[";
  }

  &::after {
    content: "]";
  }
`;

export const InfoCardTitle = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.soil};
  margin-bottom: 0.35rem;
`;

export const InfoCardBody = styled.p`
  font-size: 0.87rem;
  line-height: 1.55;
  color: ${theme.colors.bark};
`;

// ── EMPLOYMENT ───────────────────────────────────────────────────────────

export const EmploymentRow = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${cardBorder};
`;

export const EmploymentItem = styled.div`
  flex: 1 1 200px;
`;

export const EmploymentLabel = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  margin-bottom: 0.4rem;
`;

export const EmploymentValue = styled.div`
  font-size: 0.92rem;
  color: ${theme.colors.soil};
`;

// ── RENTAL HISTORY ───────────────────────────────────────────────────────

export const RentalHistoryLayout = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

// ── HOUSE GALLERY ────────────────────────────────────────────────────────

export const HouseGalleryLabel = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  margin: 2.5rem 0 1rem;
`;

const scrollLoop = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const HouseGalleryTrack = styled.div<{ $duration: number }>`
  display: flex;
  gap: 0.75rem;
  width: max-content;
  animation: ${scrollLoop} ${(p) => p.$duration}s linear infinite;
  animation-play-state: paused;
`;

export const HouseGalleryViewport = styled.div`
  overflow: hidden;

  &:hover ${HouseGalleryTrack} {
    animation-play-state: running;
  }
`;

export const HouseThumbBtn = styled.button<{ $width: number }>`
  position: relative;
  flex: 0 0 ${(p) => p.$width}px;
  width: ${(p) => p.$width}px;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${cardBorder};
  padding: 0;
  cursor: pointer;
  background: ${theme.colors.linen};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${cardBorderAccent};
  }

  :root[data-theme="dark"] & {
    border-color: ${cardBorderDark};
  }
`;

export const HouseThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const HouseThumbMore = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(20, 18, 14, 0.62);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 600;
`;

export const SeeAllBtn = styled.button`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 0.6rem;
    text-decoration: underline;
  }
`;

// ── LIGHTBOX ─────────────────────────────────────────────────────────────

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(10, 8, 6, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const LightboxImg = styled.img`
  max-width: 100%;
  max-height: 82vh;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  object-fit: contain;
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const LightboxNav = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$side === "left" ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

export const LightboxCounter = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.75);
`;

export const LightboxCaption = styled.div`
  position: absolute;
  top: 1.35rem;
  left: 1.5rem;
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
`;
