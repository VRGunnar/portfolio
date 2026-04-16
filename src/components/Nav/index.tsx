import { useEffect, useRef, useState } from "react";
import {
  NavBar,
  Logo,
  NavLinks,
  NavLink,
  NavCta,
  MobileMenuBtn,
  MobileMenu,
  MobileLink,
  MobileLanguageWrap,
  LanguageSelectorWrap,
  LanguageSelectorButton,
  LanguageDropdown,
  LanguageDropdownItem,
  LanguageFlag,
  LanguageName,
  LanguageCheck,
} from "./styles";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "../../i18n";
import { FLAG_MAP } from "./flags";

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
  const { t, i18n } = useTranslation();
  const desktopLangSelectorRef = useRef<HTMLDivElement>(null);
  const mobileLangSelectorRef = useRef<HTMLDivElement>(null);

  const activeLang = SUPPORTED_LANGS.includes(
    i18n.language as (typeof SUPPORTED_LANGS)[number],
  )
    ? (i18n.language as (typeof SUPPORTED_LANGS)[number])
    : (i18n.resolvedLanguage as (typeof SUPPORTED_LANGS)[number]) || "en";

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const clickInsideDesktop =
        desktopLangSelectorRef.current?.contains(target) ?? false;
      const clickInsideMobile =
        mobileLangSelectorRef.current?.contains(target) ?? false;

      if (!clickInsideDesktop && !clickInsideMobile) {
        setLangDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLink = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
    setLangDropdownOpen(false);
  };
  const handleLangSelect = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
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
              {t("nav.about")}
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
              {t("nav.projects")}
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
              {t("nav.stack")}
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
              {t("nav.process")}
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
              {t("nav.cta")}
            </NavCta>
          </li>
          <li>
            <LanguageSelectorWrap ref={desktopLangSelectorRef}>
              <LanguageSelectorButton
                onClick={() => setLangDropdownOpen((o) => !o)}
                $open={langDropdownOpen}
                aria-label={t("nav.languageLabel")}
                aria-expanded={langDropdownOpen}
                aria-haspopup="listbox"
              >
                <span className="lang-leading-icon">
                  <svg
                    className="lang-globe"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    width="20"
                    height="20"
                    style={{ display: "block" }}
                  >
                    <circle cx="8" cy="8" r="6.5" />
                    <ellipse cx="8" cy="8" rx="2.8" ry="6.5" />
                    <line x1="1.5" y1="6" x2="14.5" y2="6" />
                    <line x1="1.5" y1="10" x2="14.5" y2="10" />
                  </svg>
                </span>
                <span className="lang-code">{activeLang.toUpperCase()}</span>
                <svg
                  className="lang-chevron"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                >
                  {langDropdownOpen ? (
                    <path d="M2.5 7.5 6 4l3.5 3.5" />
                  ) : (
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                  )}
                </svg>
              </LanguageSelectorButton>
              {langDropdownOpen && (
                <LanguageDropdown
                  role="listbox"
                  aria-label={t("nav.languageLabel")}
                >
                  {SUPPORTED_LANGS.map((lng) => (
                    <LanguageDropdownItem
                      key={lng}
                      $active={lng === activeLang}
                      onClick={() => handleLangSelect(lng)}
                      type="button"
                      role="option"
                      aria-selected={lng === activeLang}
                    >
                      <LanguageFlag>{FLAG_MAP[lng]}</LanguageFlag>
                      <LanguageName>
                        {t(`common.languages.${lng}`)}
                      </LanguageName>
                      {lng === activeLang && <LanguageCheck>✓</LanguageCheck>}
                    </LanguageDropdownItem>
                  ))}
                </LanguageDropdown>
              )}
            </LanguageSelectorWrap>
          </li>
        </NavLinks>

        <MobileMenuBtn
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </MobileMenuBtn>
      </NavBar>

      <MobileMenu $open={menuOpen}>
        <MobileLanguageWrap>
          <LanguageSelectorWrap ref={mobileLangSelectorRef} $mobile>
            <LanguageSelectorButton
              onClick={() => setLangDropdownOpen((o) => !o)}
              $open={langDropdownOpen}
              $mobile
              aria-label={t("nav.languageLabel")}
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="lang-leading-icon">
                <svg
                  className="lang-globe"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                >
                  <circle cx="8" cy="8" r="6.5" />
                  <ellipse cx="8" cy="8" rx="2.8" ry="6.5" />
                  <line x1="1.5" y1="6" x2="14.5" y2="6" />
                  <line x1="1.5" y1="10" x2="14.5" y2="10" />
                </svg>
              </span>
              <span className="lang-code">{activeLang.toUpperCase()}</span>
              <svg
                className="lang-chevron"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
              >
                {langDropdownOpen ? (
                  <path d="M2.5 7.5 6 4l3.5 3.5" />
                ) : (
                  <path d="M2.5 4.5 6 8l3.5-3.5" />
                )}
              </svg>
            </LanguageSelectorButton>
            {langDropdownOpen && (
              <LanguageDropdown
                role="listbox"
                aria-label={t("nav.languageLabel")}
                $mobile
              >
                {SUPPORTED_LANGS.map((lng) => (
                  <LanguageDropdownItem
                    key={lng}
                    $active={lng === activeLang}
                    onClick={() => handleLangSelect(lng)}
                    type="button"
                    role="option"
                    aria-selected={lng === activeLang}
                  >
                    <LanguageFlag>{FLAG_MAP[lng]}</LanguageFlag>
                    <LanguageName>{t(`common.languages.${lng}`)}</LanguageName>
                    {lng === activeLang && <LanguageCheck>✓</LanguageCheck>}
                  </LanguageDropdownItem>
                ))}
              </LanguageDropdown>
            )}
          </LanguageSelectorWrap>
        </MobileLanguageWrap>
        <MobileLink
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLink("about");
          }}
        >
          {t("nav.about")}
        </MobileLink>
        <MobileLink
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleLink("projects");
          }}
        >
          {t("nav.projects")}
        </MobileLink>
        <MobileLink
          href="#stack"
          onClick={(e) => {
            e.preventDefault();
            handleLink("stack");
          }}
        >
          {t("nav.stack")}
        </MobileLink>
        <MobileLink
          href="#process"
          onClick={(e) => {
            e.preventDefault();
            handleLink("process");
          }}
        >
          {t("nav.process")}
        </MobileLink>
        <MobileLink
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLink("contact");
          }}
        >
          {t("nav.cta")}
        </MobileLink>
      </MobileMenu>
    </>
  );
}
