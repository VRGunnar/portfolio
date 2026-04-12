import { useState } from "react";
import {
  NavBar,
  Logo,
  NavLinks,
  NavLink,
  NavCta,
  MobileMenuBtn,
  MobileMenu,
  MobileLink,
} from "./styles";

const NAV_HEIGHT = 64;

function scrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top =
    target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <NavBar>
        <Logo
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLink("hero");
          }}
        >
          gunnar<span>.</span>digital
        </Logo>

        <NavLinks>
          <li>
            <NavLink
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleLink("about");
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleLink("projects");
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#stack"
              onClick={(e) => {
                e.preventDefault();
                handleLink("stack");
              }}
            >
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                handleLink("process");
              }}
            >
              Process
            </NavLink>
          </li>
          <li>
            <NavCta
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLink("contact");
              }}
            >
              Let's build
            </NavCta>
          </li>
        </NavLinks>

        <MobileMenuBtn
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </MobileMenuBtn>
      </NavBar>

      <MobileMenu $open={menuOpen}>
        <MobileLink
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLink("about");
          }}
        >
          About
        </MobileLink>
        <MobileLink
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleLink("projects");
          }}
        >
          Projects
        </MobileLink>
        <MobileLink
          href="#stack"
          onClick={(e) => {
            e.preventDefault();
            handleLink("stack");
          }}
        >
          Stack
        </MobileLink>
        <MobileLink
          href="#process"
          onClick={(e) => {
            e.preventDefault();
            handleLink("process");
          }}
        >
          Process
        </MobileLink>
        <MobileLink
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLink("contact");
          }}
        >
          Let's build
        </MobileLink>
      </MobileMenu>
    </>
  );
}
