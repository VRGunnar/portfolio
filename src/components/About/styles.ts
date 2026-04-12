import styled from "styled-components";
import { theme } from "../../theme";

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  background: rgba(196, 168, 130, 0.25);
  border: 1.5px solid rgba(196, 168, 130, 0.25);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  background: ${theme.colors.cream};
  padding: 2rem 1.8rem;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.linen};
  }
`;

export const ValueIcon = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
`;

export const ValueTitle = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 700;
  color: ${theme.colors.soil};
  margin-bottom: 0.5rem;
`;

export const ValueDesc = styled.p`
  font-size: 0.88rem;
  color: ${theme.colors.bark};
  line-height: 1.7;
  font-weight: 300;
`;
