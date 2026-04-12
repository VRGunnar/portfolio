import styled from "styled-components";
import { theme } from "../../theme";

export const ProjectsSection = styled.section`
  padding: 5.5rem 0;
  background: ${theme.colors.cream};
  overflow: hidden;
`;

export const ProjectsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

export const ProjectsHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const ProjectsFilter = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const FilterBtn = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? theme.colors.soil : "transparent")};
  border: 1.5px solid
    ${({ $active }) => ($active ? theme.colors.soil : theme.colors.sand)};
  color: ${({ $active }) => ($active ? theme.colors.cream : theme.colors.bark)};
  padding: 0.38rem 0.9rem;
  border-radius: 2px;
  font-family: ${theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${theme.colors.soil};
    border-color: ${theme.colors.soil};
    color: ${theme.colors.cream};
  }
`;

export const ProjectFeatured = styled.div<{ $hidden?: boolean }>`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  border: 1.5px solid rgba(196, 168, 130, 0.35);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5px;
  background: ${theme.colors.linen};
  transition:
    box-shadow 0.3s,
    opacity 0.3s,
    transform 0.3s;
  opacity: ${({ $hidden }) => ($hidden ? 0.25 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "auto")};
  transform: ${({ $hidden }) => ($hidden ? "scale(0.97)" : "scale(1)")};

  &:hover {
    box-shadow: 0 16px 48px rgba(44, 31, 20, 0.1);
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectFeaturedVisual = styled.div<{ $bg: string }>`
  position: relative;
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $bg }) => $bg};

  @media (max-width: ${theme.breakpoints.lg}) {
    min-height: 260px;
  }
`;

export const ProjectScreenWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2.5rem 2rem;
`;

export const MiniPhone = styled.div<{ $bg: string; $back?: boolean }>`
  width: 120px;
  height: 244px;
  border-radius: 22px;
  padding: 7px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  background: ${({ $bg }) => $bg};
  position: ${({ $back }) => ($back ? "absolute" : "relative")};
  z-index: ${({ $back }) => ($back ? 1 : 2)};
  transform: ${({ $back }) =>
    $back ? "rotate(-10deg) translate(-44px, 18px)" : "none"};
  opacity: ${({ $back }) => ($back ? 0.5 : 1)};
`;

export const MiniPhoneScreen = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  flex-direction: column;
  padding: 0.9rem 0.6rem 0.6rem;
  gap: 0.45rem;
  position: relative;
`;

export const MiniPhoneNotch = styled.div`
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 34px;
  height: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 7px 7px;
  z-index: 2;
`;

export const ProjTagBadge = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.3rem 0.65rem;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`;

export const ProjectFeaturedInfo = styled.div`
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }
`;

export const ProjectCategory = styled.p`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    display: block;
    width: 14px;
    height: 1px;
    background: ${theme.colors.accent};
  }
`;

export const ProjectTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.soil};
  margin-bottom: 0.85rem;
  line-height: 1.15;
`;

export const ProjectDesc = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.bark};
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  background: rgba(196, 168, 130, 0.2);
  border: 1px solid rgba(196, 168, 130, 0.35);
  color: ${theme.colors.bark};
  padding: 0.25rem 0.7rem;
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const ProjectMeta = styled.div`
  display: flex;
  gap: 1.8rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(196, 168, 130, 0.3);
  flex-wrap: wrap;
`;

export const MetaLabel = styled.p`
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  margin-bottom: 0.15rem;
`;

export const MetaValue = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.soil};
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.83rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  text-decoration: none;
  margin-top: 1.2rem;
  transition: gap 0.2s;

  &:hover {
    gap: 0.75rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  background: rgba(196, 168, 130, 0.25);
  border: 1.5px solid rgba(196, 168, 130, 0.25);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1.5px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div<{ $hidden?: boolean }>`
  background: ${theme.colors.cream};
  overflow: hidden;
  transition:
    background 0.3s,
    opacity 0.3s,
    transform 0.3s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: ${({ $hidden }) => ($hidden ? 0.25 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "auto")};
  transform: ${({ $hidden }) => ($hidden ? "scale(0.97)" : "scale(1)")};

  &:hover {
    background: ${theme.colors.linen};
  }
`;

export const ProjectCardVisual = styled.div<{ $bg: string }>`
  height: 160px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $bg }) => $bg};
`;

export const CardGlow = styled.div<{ $glow: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $glow }) => $glow};
  opacity: 0.3;
`;

export const TinyPhone = styled.div<{ $bg: string }>`
  width: 64px;
  height: 130px;
  border-radius: 13px;
  padding: 5px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  position: relative;
  z-index: 2;
  background: ${({ $bg }) => $bg};
`;

export const TinyPhoneScreen = styled.div<{ $gradient: string }>`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  flex-direction: column;
  padding: 0.55rem 0.4rem;
  gap: 4px;
`;

export const ProjectCardBody = styled.div`
  padding: 1.3rem 1.4rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${ProjectCategory} {
    margin-bottom: 0.5rem;
  }

  ${ProjectTitle} {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  ${ProjectDesc} {
    font-size: 0.83rem;
    margin-bottom: 1rem;
    flex: 1;
  }

  ${ProjectTags} {
    margin-bottom: 0;
  }
`;
