import styled from "styled-components";
import { theme } from "../../theme";

const cardBorder = `color-mix(in srgb, ${theme.colors.soil} 24%, transparent)`;
const cardBorderHover = `color-mix(in srgb, ${theme.colors.accent} 54%, transparent)`;

const cardHover = `
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${cardBorderHover};
    box-shadow: 0 8px 22px rgba(44, 31, 20, 0.08);
  }

  :root[data-theme='dark'] &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
  }
`;

export const SplitSection = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: minmax(180px, 260px) 1fr;
    align-items: start;
  }
`;

export const SplitLabel = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.moss};
  margin-top: 0.25rem;

  :root[data-theme="dark"] & {
    color: ${theme.colors.moss};
  }
`;

export const ContentStack = styled.div`
  display: grid;
  gap: 2rem;
`;

export const IntroCopy = styled.p`
  font-size: 0.98rem;
  color: ${theme.colors.bark};
  line-height: 1.7;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.soil} 86%, ${theme.colors.bark});
  }
`;

export const JobCard = styled.article`
  border: 1px solid ${cardBorder};
  border-radius: 10px;
  background: ${theme.colors.linen};
  padding: 1.1rem;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 36%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 78%,
      ${theme.colors.soil} 22%
    );
  }

  ${cardHover}

  &:hover {
    background: ${theme.colors.cream};
  }

  :root[data-theme="dark"] &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.soil} 38%
    );
  }
`;

export const JobTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.soil};
  letter-spacing: -0.01em;
  margin-bottom: 0.4rem;
`;

export const JobMeta = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.82rem;
  color: ${theme.colors.accent};
  letter-spacing: 0.02em;
  margin-bottom: 0.65rem;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.accent} 88%, ${theme.colors.soil});
  }
`;

export const JobSummary = styled.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${theme.colors.bark};
`;

export const ProjectGrid = styled.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProjectCard = styled.article`
  border-radius: 10px;
  border: 1px solid ${cardBorder};
  background: ${theme.colors.cream};
  padding: 1rem;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 36%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.soil} 38%
    );
  }

  ${cardHover}

  &:hover {
    background: ${theme.colors.linen};
  }

  :root[data-theme="dark"] &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 80%,
      ${theme.colors.soil} 20%
    );
  }
`;

export const ProjectTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 0.96rem;
  font-weight: 700;
  color: ${theme.colors.soil};
  margin-bottom: 0.45rem;
`;

export const ProjectDesc = styled.p`
  font-size: 0.84rem;
  line-height: 1.55;
  color: ${theme.colors.bark};
  margin-bottom: 0.7rem;
`;

export const SkillGroupGrid = styled.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SkillGroupCard = styled.article`
  border-radius: 10px;
  border: 1px solid ${cardBorder};
  background: ${theme.colors.linen};
  padding: 1rem;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 36%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 78%,
      ${theme.colors.soil} 22%
    );
  }

  ${cardHover}

  &:hover {
    background: ${theme.colors.cream};
  }

  :root[data-theme="dark"] &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.soil} 38%
    );
  }
`;

export const SkillGroupTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 0.88rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.6rem;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.accent} 88%, ${theme.colors.soil});
  }
`;

export const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Pill = styled.span`
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  background: color-mix(
    in srgb,
    ${theme.colors.cream} 92%,
    ${theme.colors.accent} 8%
  );
  padding: 0.22rem 0.56rem;
  font-family: ${theme.fonts.heading};
  font-size: 0.79rem;
  color: ${theme.colors.bark};

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.accent} 70%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.accent} 38%
    );
    color: ${theme.colors.soil};
  }
`;

export const TimelineList = styled.div`
  display: grid;
  gap: 0.85rem;
`;

export const TimelineCard = styled.article`
  border-radius: 10px;
  border: 1px solid ${cardBorder};
  background: ${theme.colors.linen};
  padding: 1rem;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 36%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 78%,
      ${theme.colors.soil} 22%
    );
  }

  ${cardHover}

  &:hover {
    background: ${theme.colors.cream};
  }

  :root[data-theme="dark"] &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.soil} 38%
    );
  }
`;

export const TimelineTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  color: ${theme.colors.soil};
  margin-bottom: 0.2rem;
`;

export const TimelineSub = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.83rem;
  color: ${theme.colors.accent};
  margin-bottom: 0.55rem;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.accent} 88%, ${theme.colors.soil});
  }
`;

export const TimelineText = styled.p`
  font-size: 0.89rem;
  line-height: 1.6;
  color: ${theme.colors.bark};
`;

export const TwoCol = styled.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ListCard = styled.article`
  border-radius: 10px;
  border: 1px solid ${cardBorder};
  background: ${theme.colors.linen};
  padding: 1rem;

  :root[data-theme="dark"] & {
    border-color: color-mix(in srgb, ${theme.colors.soil} 36%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 78%,
      ${theme.colors.soil} 22%
    );
  }

  ${cardHover}

  &:hover {
    background: ${theme.colors.cream};
  }

  :root[data-theme="dark"] &:hover {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 62%,
      ${theme.colors.soil} 38%
    );
  }
`;

export const ListTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.65rem;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.accent} 88%, ${theme.colors.soil});
  }
`;

export const LanguageRow = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  padding: 0.3rem 0;
  font-size: 0.88rem;
  color: ${theme.colors.bark};

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.soil} 88%, ${theme.colors.bark});
  }

  strong {
    color: ${theme.colors.soil};
    font-weight: 600;
  }
`;

export const InfoRow = styled.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: ${theme.colors.bark};
  padding: 0.22rem 0;

  :root[data-theme="dark"] & {
    color: color-mix(in srgb, ${theme.colors.soil} 88%, ${theme.colors.bark});
  }

  strong {
    color: ${theme.colors.soil};
    font-weight: 600;
  }
`;
