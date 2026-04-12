import styled from "styled-components";
import { theme } from "../../theme";

export const SectionLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 1px;
    background: ${theme.colors.accent};
    opacity: 0.5;
  }
`;

export const SectionH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${theme.colors.soil};
  margin-bottom: 1.2rem;
  max-width: 680px;
`;

export const Section = styled.div`
  padding: 5.5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1.5rem;
  }
`;
