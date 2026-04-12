import styled from "styled-components";
import { theme } from "../../theme";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${theme.navH};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background: rgba(247, 241, 232, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(196, 168, 130, 0.25);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.a`
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  color: ${theme.colors.soil};
  text-decoration: none;

  span {
    color: ${theme.colors.accent};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.82rem;
  font-weight: 400;
  color: ${theme.colors.bark};
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const NavCta = styled(NavLink)`
  background: ${theme.colors.soil};
  color: ${theme.colors.cream} !important;
  padding: 0.45rem 1.1rem;
  border-radius: 2px;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.cream} !important;
  }
`;

export const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.soil};
  font-size: 1.4rem;
  padding: 0.25rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: fixed;
    top: ${theme.navH};
    left: 0;
    right: 0;
    background: rgba(247, 241, 232, 0.97);
    backdrop-filter: blur(14px);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    border-bottom: 1px solid rgba(196, 168, 130, 0.25);
    z-index: 99;
  }
`;

export const MobileLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.bark};
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(196, 168, 130, 0.2);
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }

  &:last-child {
    border-bottom: none;
    background: ${theme.colors.soil};
    color: ${theme.colors.cream};
    text-align: center;
    border-radius: 2px;
    padding: 0.6rem;
    margin-top: 0.5rem;
  }
`;
