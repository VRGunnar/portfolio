import styled from "styled-components";
import { theme } from "../../theme";

export const FooterEl = styled.footer`
  background: ${theme.colors.soil};
  color: ${theme.colors.stone};
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 300;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterLogo = styled.a`
  color: ${theme.colors.sand};
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 0.9rem;

  span {
    color: ${theme.colors.accent};
  }
`;
