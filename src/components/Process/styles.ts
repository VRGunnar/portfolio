import styled from "styled-components";
import { theme } from "../../theme";

export const ProcessSection = styled.section`
  padding: 5.5rem 3rem;
  background: ${theme.colors.linen};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1.5rem;
  }
`;

export const ProcessInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 27px;
    left: calc(12.5% + 1rem);
    right: calc(12.5% + 1rem);
    height: 1px;
    background: linear-gradient(
      to right,
      ${theme.colors.sand},
      ${theme.colors.clay},
      ${theme.colors.sand}
    );
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    &::before {
      display: none;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessStep = styled.div`
  padding: 0 1.2rem;
  text-align: center;

  &:hover .step-num-inner {
    background: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    color: ${theme.colors.cream};
    transform: scale(1.1);
  }
`;

export const StepNum = styled.div`
  width: 52px;
  height: 52px;
  background: ${theme.colors.cream};
  border: 2px solid ${theme.colors.sand};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin: 0 auto 1.3rem;
  position: relative;
  z-index: 1;
  transition: all 0.25s;
`;

export const StepTitle = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 700;
  color: ${theme.colors.soil};
  margin-bottom: 0.45rem;
`;

export const StepDesc = styled.p`
  font-size: 0.83rem;
  color: ${theme.colors.bark};
  line-height: 1.65;
  font-weight: 300;
`;
