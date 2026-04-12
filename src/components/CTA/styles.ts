import styled from "styled-components";
import { theme } from "../../theme";

export const CtaSection = styled.section`
  padding: 7rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 5rem 1.5rem;
  }
`;

export const CtaBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 60% 70% at 50% 50%,
    rgba(193, 125, 60, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const CtaSectionLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const CtaH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${theme.colors.soil};
  max-width: 560px;
  margin: 0.8rem auto 1.2rem;
`;

export const CtaSub = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.bark};
  font-weight: 300;
  max-width: 400px;
  margin: 0 auto 2.2rem;
  line-height: 1.75;
`;

export const CtaEmail = styled.a`
  font-family: ${theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${theme.colors.soil};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.accent};
  padding-bottom: 2px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`;
