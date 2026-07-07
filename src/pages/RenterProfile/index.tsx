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
  SectionWrap,
  SectionLabel,
  SectionH2,
  SectionHeader,
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
  HeroLayout,
  PhotoFrame,
  PhotoImg,
  PhotoLabel,
  PhotoCaption,
  GalleryGrid,
  StatStrip,
  StatItem,
  StatValue,
  StatLabel,
  InfoCardGrid,
  InfoCard,
  InfoCardIcon,
  InfoCardTag,
  InfoCardTitle,
  InfoCardBody,
  EmploymentRow,
  EmploymentItem,
  EmploymentLabel,
  EmploymentValue,
  RentalHistoryLayout,
  HouseGalleryLabel,
} from "./styles";
import HouseGallery from "./components/HouseGallery";
import {
  RENTER_CONTACT,
  RENTER_TAGS,
  HOUSEHOLD_GALLERY,
  HOUSEHOLD_STATS,
  LIFESTYLE_CARDS,
  EMPLOYMENT_ROWS,
  LOOKING_FOR_CARDS,
  DOCUMENTS_READY,
} from "./data";
import type { ThemeMode } from "../../theme";

type RenterProfilePageProps = {
  themeMode: ThemeMode;
  onToggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

export default function RenterProfilePage({
  themeMode,
  onToggleTheme,
}: RenterProfilePageProps) {
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
            <NavSlug>/renter-profile</NavSlug>
          </NavLogo>
          <NavLinks>
            <NavThemeBtn onClick={onToggleTheme} aria-label="Toggle theme">
              {nextThemeIcon} {nextThemeLabel}
            </NavThemeBtn>
            <BtnPrimary
              href={`mailto:${RENTER_CONTACT.email}`}
              style={{ padding: "7px 16px", fontSize: "13px" }}
            >
              Email us
            </BtnPrimary>
          </NavLinks>
        </HireNavInner>
      </HireNav>

      {/* Hero */}
      <HeroSection>
        <Container>
          <HeroLayout>
            <div>
              <HeroEyebrow>Available from September 2026</HeroEyebrow>
              <HeroH1>
                <em>Software engineer</em> relocating to Amsterdam with his
                girlfriend &amp; dog
              </HeroH1>
              <HeroSub>
                Gunnar Van Remoortere — moving from Bratislava, Slovakia with
                my girlfriend of five years and our small Maltipoo. Looking
                for a long-term home from September / October 2026.
              </HeroSub>
              <HeroTagRow>
                {RENTER_TAGS.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </HeroTagRow>
              <HeroCtas>
                <BtnPrimary href={`mailto:${RENTER_CONTACT.email}`}>
                  Email us
                </BtnPrimary>
                <BtnOutline
                  href={RENTER_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </BtnOutline>
              </HeroCtas>
              <HeroStatus>
                <StatusDot />
                Full application packet — ID, contract, payslips, references
                — ready on request
              </HeroStatus>
            </div>

            <div>
              <PhotoFrame>
                <PhotoLabel>photo — you, girlfriend &amp; dog</PhotoLabel>
              </PhotoFrame>
              <PhotoCaption>
                Gunnar, my girlfriend &amp; our Maltipoo
              </PhotoCaption>
            </div>
          </HeroLayout>
        </Container>
      </HeroSection>

      {/* Meet the household */}
      <SectionWrap>
        <Container>
          <SectionLabel>Meet the household</SectionLabel>
          <GalleryGrid>
            {HOUSEHOLD_GALLERY.map((item) => (
              <div key={item.label}>
                <PhotoFrame $ratio="1 / 1" $filled>
                  <PhotoImg src={item.image} alt={item.caption} />
                </PhotoFrame>
                <PhotoCaption>{item.caption}</PhotoCaption>
              </div>
            ))}
          </GalleryGrid>
        </Container>
      </SectionWrap>

      {/* 01 About us */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>01 — About us</SectionLabel>
            <SectionH2>A bit about who we are.</SectionH2>
          </SectionHeader>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <HeroSub style={{ flex: "1 1 400px", maxWidth: "600px" }}>
              Hi, I&apos;m Gunnar. I&apos;m a software engineer working
              full-time as a freelancer for a Belgian company (Summer Bash,
              Antwerp), currently based in Bratislava, Slovakia. Together
              with my girlfriend — together five years now — we&apos;re
              looking to relocate to the Amsterdam area. We currently own
              our own house near Bratislava, so we know how to take care of
              a home and treat it as our own. In our free time I work on
              personal software projects and stay active at the gym;
              she&apos;s just as happy pottering around the house or
              exploring somewhere new. We&apos;re looking for a place we can
              properly settle into and call home, not just a stopover.
            </HeroSub>
            <StatStrip>
              {HOUSEHOLD_STATS.map((stat) => (
                <StatItem key={stat.label}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatStrip>
          </div>

          <HouseGalleryLabel>Our current home, near Bratislava</HouseGalleryLabel>
          <HouseGallery />
        </Container>
      </SectionWrap>

      {/* 02 Household & lifestyle */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>02 — Household &amp; lifestyle</SectionLabel>
            <SectionH2>Who&apos;s moving in, and how we live.</SectionH2>
          </SectionHeader>
          <InfoCardGrid>
            {LIFESTYLE_CARDS.map((card) => (
              <InfoCard key={card.tag} $span={card.span}>
                <InfoCardIcon>{card.icon}</InfoCardIcon>
                <InfoCardTag>{card.tag}</InfoCardTag>
                <InfoCardTitle>{card.title}</InfoCardTitle>
                <InfoCardBody>{card.body}</InfoCardBody>
              </InfoCard>
            ))}
          </InfoCardGrid>
        </Container>
      </SectionWrap>

      {/* 03 Employment & financial snapshot */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>03 — Employment &amp; financial snapshot</SectionLabel>
            <SectionH2>Stable income, ready documentation.</SectionH2>
          </SectionHeader>
          <HeroSub style={{ maxWidth: "680px", marginBottom: 0 }}>
            I work full-time as a freelance software engineer for a Belgian
            company. My income comfortably exceeds the standard 2x monthly
            rent requirement, and I can provide a financial snapshot, recent
            payslips, and bank statements immediately on request.
          </HeroSub>
          <EmploymentRow>
            {EMPLOYMENT_ROWS.map((row) => (
              <EmploymentItem key={row.label}>
                <EmploymentLabel>{row.label}</EmploymentLabel>
                <EmploymentValue>{row.value}</EmploymentValue>
              </EmploymentItem>
            ))}
          </EmploymentRow>
        </Container>
      </SectionWrap>

      {/* 04 Rental history */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>04 — Rental history</SectionLabel>
            <SectionH2>A known quantity, not a risk.</SectionH2>
          </SectionHeader>
          <RentalHistoryLayout>
            <HeroSub style={{ flex: "1 1 380px", maxWidth: "560px" }}>
              We&apos;ve rented before — twice in Bratislava&apos;s Nivy area,
              from 2022 to 2024 — before deciding to buy a house. We&apos;re
              moving now for a change of scenery and to be closer to family
              again. References from both previous landlords are available
              on request.
            </HeroSub>
            <div style={{ flex: "0 0 auto" }}>
              <PhotoFrame $ratio="4 / 3" style={{ width: "200px" }}>
                <PhotoLabel>photo — current home</PhotoLabel>
              </PhotoFrame>
            </div>
          </RentalHistoryLayout>
        </Container>
      </SectionWrap>

      {/* 05 What we're looking for */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>05 — What we&apos;re looking for</SectionLabel>
            <SectionH2>So you can self-select in seconds.</SectionH2>
          </SectionHeader>
          <InfoCardGrid>
            {LOOKING_FOR_CARDS.map((card) => (
              <InfoCard key={card.tag} $accent $span={card.span}>
                <InfoCardIcon $accent>{card.icon}</InfoCardIcon>
                <InfoCardTag $accent>{card.tag}</InfoCardTag>
                <InfoCardTitle>{card.title}</InfoCardTitle>
              </InfoCard>
            ))}
          </InfoCardGrid>
        </Container>
      </SectionWrap>

      {/* 06 Documents ready */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>06 — Documents ready</SectionLabel>
            <SectionH2>Fast to work with.</SectionH2>
          </SectionHeader>
          <HeroSub style={{ maxWidth: "680px" }}>
            Our full application packet is ready and can be sent by email as
            soon as we&apos;re in touch. For privacy, documents are shared
            per application rather than posted here.
          </HeroSub>
          <HeroTagRow style={{ marginBottom: 0 }}>
            {DOCUMENTS_READY.map((doc) => (
              <Tag key={doc}>✓ {doc}</Tag>
            ))}
          </HeroTagRow>
        </Container>
      </SectionWrap>

      {/* Contact */}
      <ContactSection>
        <Container>
          <ContactSectionLabel>07 — Get in touch</ContactSectionLabel>
          <ContactH2>Let&apos;s talk.</ContactH2>
          <ContactSub>
            Happy to answer questions, send documents, or arrange a viewing
            whenever suits.
          </ContactSub>
          <ContactEmail href={`mailto:${RENTER_CONTACT.email}`}>
            {RENTER_CONTACT.email}
          </ContactEmail>
          <ContactLinks>
            <BtnOutline href={`tel:${RENTER_CONTACT.phoneHref}`}>
              {RENTER_CONTACT.phone}
            </BtnOutline>
            <BtnOutline
              href={RENTER_CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </BtnOutline>
          </ContactLinks>
        </Container>
      </ContactSection>

      <HireFooter>
        <HireFooterInner>
          <span>gunnar.digital/renter-profile</span>
          <span>Bratislava, Slovakia → Amsterdam area, NL</span>
          <span>Available from September 2026</span>
        </HireFooterInner>
      </HireFooter>
    </PageWrapper>
  );
}
