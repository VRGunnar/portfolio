import { Link } from "react-router-dom";
import type { MouseEvent as ReactMouseEvent } from "react";
import {
  HireNav,
  HireNavInner,
  NavLogo,
  NavSlug,
  NavLinks,
  NavContactBtn,
  NavThemeBtn,
  MobileMenuBtn,
} from "../styles";
import type { ThemeMode } from "../../../theme";

type HireMeNavProps = {
  onNavigate: (id: string) => void;
  mobileNavOpen: boolean;
  onHamburgerClick: () => void;
  themeMode: ThemeMode;
  onToggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

export default function HireMeNav({
  onNavigate,
  mobileNavOpen,
  onHamburgerClick,
  themeMode,
  onToggleTheme,
}: HireMeNavProps) {
  const nextThemeLabel = themeMode === "dark" ? "light" : "dark";
  const nextThemeIcon = themeMode === "dark" ? "☀" : "☾";

  return (
    <HireNav>
      <HireNavInner>
        <NavLogo>
          <Link to="/">
            gunnar<span>.</span>digital
          </Link>
          <NavSlug>/hire-me</NavSlug>
        </NavLogo>
        <NavLinks>
          <NavThemeBtn onClick={onToggleTheme} aria-label="Toggle theme">
            {nextThemeIcon} {nextThemeLabel}
          </NavThemeBtn>
          <MobileMenuBtn
            $open={mobileNavOpen}
            onClick={onHamburgerClick}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </MobileMenuBtn>
          <NavContactBtn
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("hm-contact");
            }}
          >
            Let&apos;s talk
          </NavContactBtn>
        </NavLinks>
      </HireNavInner>
    </HireNav>
  );
}
