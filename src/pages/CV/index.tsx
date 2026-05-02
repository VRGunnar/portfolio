import { Link } from "react-router-dom";
import type { MouseEvent as ReactMouseEvent } from "react";
import {
  PageWrapper,
  Container,
  HireNav,
  HireNavInner,
  NavLogo,
  NavSlug,
  NavLinks,
  NavThemeBtn,
  BtnPrimary,
  HeroSection,
  HeroEyebrow,
  HeroH1,
  HeroSub,
  HeroTagRow,
  Tag,
  HeroCtas,
  BtnOutline,
  HeroStatus,
  StatusDot,
  HireFooter,
  HireFooterInner,
  ContactSection,
  ContactSectionLabel,
  ContactH2,
  ContactSub,
  ContactEmail,
  ContactLinks,
} from "../HireMe/styles";
import {
  CV_CONTACT,
  CV_KEY_TECH,
  CV_EXPERIENCE,
  SUMMER_BASH_PROJECTS,
} from "./data";
import type { ThemeMode } from "../../theme";
import CVExperienceSection from "./components/CVExperienceSection";
import CVSkillsSection from "./components/CVSkillsSection";
import CVEducationSection from "./components/CVEducationSection";
import CVLanguagesInfoSection from "./components/CVLanguagesInfoSection";

type CVPageProps = {
  themeMode: ThemeMode;
  onToggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

export default function CVPage({ themeMode, onToggleTheme }: CVPageProps) {
  const pdfSrc =
    themeMode === "dark" ? "/GVR-CV-Dark-2026.pdf" : "/GVR-CV-Light-2026.pdf";

  const nextThemeIcon = themeMode === "dark" ? "☀" : "☾";
  const nextThemeLabel = themeMode === "dark" ? "light" : "dark";

  return (
    <PageWrapper>
      {/* Nav */}
      <HireNav>
        <HireNavInner>
          <NavLogo>
            <Link to="/">
              gunnar<span>.</span>digital
            </Link>
            <NavSlug>/cv</NavSlug>
          </NavLogo>
          <NavLinks>
            <NavThemeBtn onClick={onToggleTheme} aria-label="Toggle theme">
              {nextThemeIcon} {nextThemeLabel}
            </NavThemeBtn>
            <BtnPrimary
              as="a"
              href={pdfSrc}
              download
              style={{ padding: "7px 16px", fontSize: "13px" }}
            >
              Download PDF
            </BtnPrimary>
          </NavLinks>
        </HireNavInner>
      </HireNav>

      {/* Hero / Header */}
      <HeroSection>
        <Container>
          <HeroEyebrow>Curriculum Vitae</HeroEyebrow>
          <HeroH1>
            Gunnar Van
            <br />
            <em>Remoortere</em>
          </HeroH1>
          <HeroSub>
            Full-stack developer with close to four years of hands-on experience
            building and refining web and mobile applications with clean,
            scalable code.
          </HeroSub>
          <HeroTagRow>
            {CV_KEY_TECH.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </HeroTagRow>
          <HeroCtas>
            <BtnPrimary href={`mailto:${CV_CONTACT.email}`}>
              {CV_CONTACT.email}
            </BtnPrimary>
            <BtnOutline
              href={CV_CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </BtnOutline>
            <BtnOutline
              href={CV_CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </BtnOutline>
            <BtnOutline href="/hire-me">Hire Me page</BtnOutline>
          </HeroCtas>
          <HeroStatus>
            <StatusDot />
            Available for full-time roles and freelance collaborations
          </HeroStatus>
        </Container>
      </HeroSection>

      <CVExperienceSection />
      <CVSkillsSection />
      <CVEducationSection />
      <CVLanguagesInfoSection />

      <ContactSection>
        <Container>
          <ContactSectionLabel>
            Let&apos;s build something scalable
          </ContactSectionLabel>
          <ContactH2>
            Looking for someone who can own features end-to-end and think in
            systems?
          </ContactH2>
          <ContactSub>
            Open to remote and hybrid opportunities where product quality and
            technical ownership matter.
          </ContactSub>
          <ContactEmail href={`mailto:${CV_CONTACT.email}`}>
            {CV_CONTACT.email}
          </ContactEmail>
          <ContactLinks>
            <BtnPrimary as="button" onClick={() => window.print()}>
              Download PDF
            </BtnPrimary>
            <BtnOutline
              href={CV_CONTACT.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </BtnOutline>
            <BtnOutline href={`tel:${CV_CONTACT.phone.replace(/\s+/g, "")}`}>
              {CV_CONTACT.phone}
            </BtnOutline>
          </ContactLinks>
        </Container>
      </ContactSection>

      <HireFooter>
        <HireFooterInner>
          <span>gunnar.digital/cv</span>
          <span>
            {CV_EXPERIENCE[0].location} | {CV_CONTACT.location}
          </span>
          <span>
            {SUMMER_BASH_PROJECTS.length}+ product and platform contributions
          </span>
        </HireFooterInner>
      </HireFooter>
    </PageWrapper>
  );
}
