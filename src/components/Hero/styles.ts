import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: ${theme.navH};
  min-height: 95vh;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-bottom: 0;
  }
`;

export const HeroBgShape = styled.div`
  position: absolute;
  right: -8%;
  top: 8%;
  width: 52%;
  height: 84%;
  background: linear-gradient(
    135deg,
    ${theme.colors.linen} 0%,
    ${theme.colors.sand} 60%,
    ${theme.colors.clay} 100%
  );
  border-radius: 60% 0 0 50%;
  opacity: 0.42;
  z-index: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 2rem 3.5rem 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 3rem 1.5rem 2rem;
    text-align: center;
    align-items: center;
  }
`;

export const HeroEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${theme.colors.moss};
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  animation: ${fadeUp} 0.8s ease both;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 1px;
    background: ${theme.colors.moss};
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const HeroH1 = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: ${theme.colors.soil};
  margin-bottom: 1.4rem;
  animation: ${fadeUp} 0.8s 0.1s ease both;

  em {
    font-style: normal;
    color: ${theme.colors.accent};
    display: block;
  }
`;

export const HeroSub = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${theme.colors.bark};
  max-width: 400px;
  line-height: 1.75;
  margin-bottom: 2.2rem;
  animation: ${fadeUp} 0.8s 0.2s ease both;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.8s 0.3s ease both;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const BtnPrimary = styled.a`
  background: ${theme.colors.soil};
  color: ${theme.colors.cream};
  padding: 0.75rem 1.8rem;
  border-radius: 2px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.25s;
  border: 1.5px solid ${theme.colors.soil};

  &:hover {
    background: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const BtnSecondary = styled.a`
  background: transparent;
  color: ${theme.colors.soil};
  padding: 0.75rem 1.8rem;
  border-radius: 2px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.25s;
  border: 1.5px solid ${theme.colors.sand};

  &:hover {
    border-color: ${theme.colors.clay};
    transform: translateY(-2px);
  }
`;

export const HeroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1.2s 0.3s ease both;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
    gap: 0;
  }
`;

// HeroLottieCard removed

export const HeroLottieViewport = styled.div`
  width: 100%;
  max-width: 900px;
  height: clamp(320px, 100vh, 650px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;

  canvas,
  svg {
    width: 100% !important;
    height: 100% !important;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 700px;
    height: clamp(200px, 56vh, 480px);
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100vw;
    max-width: 100vw;
    height: 80vw;
    max-height: 80vh;
    min-height: 0;
  }
`;
