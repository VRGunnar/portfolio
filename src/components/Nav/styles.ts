import styled from "styled-components";
import { theme } from "../../theme";

export const LanguageSelectorWrap = styled.div<{ $mobile?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  ${({ $mobile }) =>
    $mobile &&
    `
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    `}
`;

export const LanguageSelectorButton = styled.button<{
  $open?: boolean;
  $mobile?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  height: 2.5rem;
  background: rgba(247, 241, 232, 0.9);
  border: 1px solid rgba(74, 55, 40, 0.24);
  border-radius: 14px;
  padding: 0 0.95rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(74, 55, 40, 0.94);
  cursor: pointer;
  box-shadow: ${({ $open }) =>
    $open ? "0 8px 22px rgba(44, 31, 20, 0.1)" : "none"};
  transition:
    box-shadow 0.2s,
    border-color 0.2s,
    background 0.2s;
  outline: none;
  ${({ $mobile }) =>
    $mobile &&
    `
      width: 100%;
    `}

  .lang-leading-icon {
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.accent};
    flex-shrink: 0;
  }

  .lang-code {
    letter-spacing: 0.035em;
    line-height: 1;
  }

  .lang-chevron {
    margin-left: auto;
    color: rgba(74, 55, 40, 0.62);
    flex-shrink: 0;
  }

  &:hover,
  &:focus {
    border-color: rgba(74, 55, 40, 0.38);
  }

  &:focus-visible {
    border-color: ${theme.colors.accent};
    box-shadow:
      0 0 0 3px rgba(193, 125, 60, 0.2),
      0 8px 22px rgba(44, 31, 20, 0.12);
  }
`;

export const LanguageDropdown = styled.div<{ $mobile?: boolean }>`
  position: ${({ $mobile }) => ($mobile ? "static" : "absolute")};
  top: ${({ $mobile }) => ($mobile ? "auto" : "calc(100% + 0.5rem)")};
  left: ${({ $mobile }) => ($mobile ? "auto" : "50%")};
  transform: ${({ $mobile }) => ($mobile ? "none" : "translateX(-50%)")};
  min-width: 100%;
  width: max-content;
  margin-top: ${({ $mobile }) => ($mobile ? "0.5rem" : "0")};
  background: #ece5da;
  border: 1px solid rgba(74, 55, 40, 0.2);
  border-radius: 4px;
  box-shadow: 0 12px 28px rgba(27, 22, 16, 0.18);
  padding: 0;
  overflow: hidden;
  z-index: 1000;
`;

export const LanguageDropdownItem = styled.button<{ $active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  border: none;
  padding: 0.9rem 1rem;
  font-size: 1.05rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: #4a3728;
  background: ${({ $active }) => ($active ? "#ddd3c4" : "#ece5da")};
  cursor: pointer;
  border-bottom: 1px solid rgba(74, 55, 40, 0.12);
  position: relative;
  transition: background 0.16s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #e2d8c9;
  }

  &:focus-visible {
    outline: 2px solid rgba(193, 125, 60, 0.5);
    outline-offset: -2px;
  }
`;

export const LanguageFlag = styled.span`
  font-size: 1.15em;
  margin-right: 0.8rem;
  line-height: 1;
`;

export const LanguageName = styled.span`
  flex: 1;
  line-height: 1.15;
`;

export const LanguageCheck = styled.span`
  color: #bb7b3a;
  font-size: 1.2em;
  margin-left: 0.5rem;
  font-weight: 700;
`;
export const LanguageSelectorFab = styled.div`
  position: fixed;
  bottom: 2.2rem;
  right: 2.2rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 1.1rem;
    right: 1.1rem;
  }
`;

export const LanguageDropdownFlag = styled.button<{ $active?: boolean }>`
  font-size: 1.45rem;
  background: ${({ $active }) =>
    $active ? theme.colors.cream : "transparent"};
  border: ${({ $active }) =>
    $active
      ? `2px solid ${theme.colors.accent}`
      : "1.5px solid rgba(196, 168, 130, 0.18)"};
  border-radius: 50%;
  padding: 0.18rem 0.5rem;
  margin: 0.1rem 0.2rem;
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 8px rgba(196,168,130,0.07)" : "none"};
  outline: none;
  cursor: pointer;
  transition:
    background 0.18s,
    box-shadow 0.18s,
    border 0.18s;
  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.cream};
  }
`;

export const LanguageDropdownList = styled.ul`
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.cream};
  border: 1.5px solid rgba(196, 168, 130, 0.18);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(196, 168, 130, 0.1);
  padding: 0.2rem 0.3rem;
  margin: 0;
  z-index: 1000;
  min-width: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const LanguageSelect = styled.select<{ $custom?: boolean }>`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${theme.colors.bark};
  border: none;
  background: transparent;
  padding: 0.18rem 0.5rem 0.18rem 0.5rem;
  cursor: pointer;
  appearance: none;
  outline: none;
  min-width: 2.5rem;
  border-radius: 50%;
  text-align: center;
  ${(props) =>
    props.$custom &&
    `
      background: rgba(247, 241, 232, 0.9);
      border: 1.5px solid rgba(196, 168, 130, 0.55);
      box-shadow: 0 2px 8px rgba(196,168,130,0.07);
      transition: border-color 0.2s, border-radius 0.25s;
      &:hover {
        border-color: ${theme.colors.accent};
        border-radius: 14px;
      }
      &:focus {
        border-color: ${theme.colors.accent};
      }
    `}

  option {
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const NavCta = styled(NavLink)`
  background: ${theme.colors.soil};
  color: ${theme.colors.cream} !important;
  padding: 0.45rem 1.1rem;
  border-radius: 2px;
  transition:
    background 0.2s,
    color 0.2s,
    border-radius 0.25s;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.cream} !important;
    border-radius: 18px;
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

export const MobileLanguageWrap = styled.div`
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(196, 168, 130, 0.2);
  display: flex;
  justify-content: center;
`;
