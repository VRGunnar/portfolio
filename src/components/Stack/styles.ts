import styled from "styled-components";
import { theme } from "../../theme";

export const StackSection = styled.section`
  background: ${theme.colors.soil};
  padding: 5rem 3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1.5rem;
  }
`;

export const StackInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StackSectionLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.sand};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 1px;
    background: ${theme.colors.sand};
    opacity: 0.5;
  }
`;

export const StackH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${theme.colors.cream};
  margin-bottom: 1.2rem;
`;

export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.85rem;
  margin-top: 2.5rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StackItem = styled.div<{ $featured?: boolean }>`
  background: ${({ $featured }) =>
    $featured ? "rgba(193,125,60,0.12)" : "rgba(196,168,130,0.08)"};
  border: 1px solid
    ${({ $featured }) =>
      $featured ? "rgba(193,125,60,0.5)" : "rgba(196,168,130,0.15)"};
  border-radius: 4px;
  padding: 1.1rem 0.7rem;
  text-align: center;
  transition: all 0.25s;
  cursor: default;

  &:hover {
    background: rgba(193, 125, 60, 0.18);
    border-color: rgba(193, 125, 60, 0.4);
    transform: translateY(-3px);
  }
`;

export const StackItemIcon = styled.span`
  font-size: 1.3rem;
  margin-bottom: 0.45rem;
  display: block;
`;

export const StackItemName = styled.div<{ $featured?: boolean }>`
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $featured }) =>
    $featured ? theme.colors.accentWarm : theme.colors.sand};
`;
