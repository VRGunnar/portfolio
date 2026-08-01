import { Link } from "react-router-dom";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useTranslation } from "react-i18next";
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
  RentalHistoryPhotoWrap,
  HouseGalleryLabel,
} from "./styles";
import HouseGallery from "./components/HouseGallery";
import {
  RENTER_CONTACT,
  RENTER_TAG_KEYS,
  HOUSEHOLD_GALLERY,
  HOUSEHOLD_STAT_KEYS,
  LIFESTYLE_CARDS,
  EMPLOYMENT_ROW_KEYS,
  LOOKING_FOR_CARDS,
  DOCUMENTS_READY_KEYS,
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
  const { t, i18n } = useTranslation();
  const nextThemeIcon = themeMode === "dark" ? "☀" : "☾";
  const nextThemeLabel = themeMode === "dark" ? "light" : "dark";

  const currentLang = i18n.resolvedLanguage?.startsWith("nl") ? "nl" : "en";
  const nextLang = currentLang === "en" ? "nl" : "en";

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
            <NavThemeBtn
              onClick={() => i18n.changeLanguage(nextLang)}
              aria-label={t("renterProfile.nav.toggleLanguage")}
            >
              {currentLang.toUpperCase()} → {nextLang.toUpperCase()}
            </NavThemeBtn>
            <NavThemeBtn onClick={onToggleTheme} aria-label="Toggle theme">
              {nextThemeIcon} {nextThemeLabel}
            </NavThemeBtn>
            <BtnPrimary
              href={`mailto:${RENTER_CONTACT.email}`}
              style={{ padding: "7px 16px", fontSize: "13px" }}
            >
              {t("renterProfile.nav.emailUs")}
            </BtnPrimary>
          </NavLinks>
        </HireNavInner>
      </HireNav>

      {/* Hero */}
      <HeroSection>
        <Container>
          <HeroLayout>
            <div>
              <HeroEyebrow>{t("renterProfile.hero.eyebrow")}</HeroEyebrow>
              <HeroH1>
                <em>{t("renterProfile.hero.titleAccent")}</em>{" "}
                {t("renterProfile.hero.titleRest")}
              </HeroH1>
              <HeroSub>{t("renterProfile.hero.subtitle")}</HeroSub>
              <HeroTagRow>
                {RENTER_TAG_KEYS.map((key) => (
                  <Tag key={key}>{t(key)}</Tag>
                ))}
              </HeroTagRow>
              <HeroCtas>
                <BtnPrimary href={`mailto:${RENTER_CONTACT.email}`}>
                  {t("renterProfile.hero.emailUs")}
                </BtnPrimary>
                <BtnOutline
                  href={RENTER_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("renterProfile.hero.linkedin")}
                </BtnOutline>
              </HeroCtas>
              <HeroStatus>
                <StatusDot />
                {t("renterProfile.hero.status")}
              </HeroStatus>
            </div>

            <div>
              <PhotoFrame>
                <PhotoLabel>{t("renterProfile.hero.photoLabel")}</PhotoLabel>
              </PhotoFrame>
              <PhotoCaption>{t("renterProfile.hero.photoCaption")}</PhotoCaption>
            </div>
          </HeroLayout>
        </Container>
      </HeroSection>

      {/* Meet the household */}
      <SectionWrap>
        <Container>
          <SectionLabel>{t("renterProfile.household.sectionLabel")}</SectionLabel>
          <GalleryGrid>
            {HOUSEHOLD_GALLERY.map((item) => (
              <div key={item.id}>
                <PhotoFrame $ratio="1 / 1" $filled>
                  <PhotoImg src={item.image} alt={t(item.captionKey)} />
                </PhotoFrame>
                <PhotoCaption>{t(item.captionKey)}</PhotoCaption>
              </div>
            ))}
          </GalleryGrid>
        </Container>
      </SectionWrap>

      {/* 01 About us */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.about.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.about.title")}</SectionH2>
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
              {t("renterProfile.about.body")}
            </HeroSub>
            <StatStrip>
              {HOUSEHOLD_STAT_KEYS.map((stat) => (
                <StatItem key={stat.valueKey}>
                  <StatValue>{t(stat.valueKey)}</StatValue>
                  <StatLabel>{t(stat.labelKey)}</StatLabel>
                </StatItem>
              ))}
            </StatStrip>
          </div>

          <HouseGalleryLabel>{t("renterProfile.about.galleryLabel")}</HouseGalleryLabel>
          <HouseGallery />
        </Container>
      </SectionWrap>

      {/* 02 Household & lifestyle */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.lifestyle.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.lifestyle.title")}</SectionH2>
          </SectionHeader>
          <InfoCardGrid>
            {LIFESTYLE_CARDS.map((card) => (
              <InfoCard key={card.id} $span={card.span}>
                <InfoCardIcon>{card.icon}</InfoCardIcon>
                <InfoCardTag>{t(card.tagKey)}</InfoCardTag>
                <InfoCardTitle>{t(card.titleKey)}</InfoCardTitle>
                <InfoCardBody>{t(card.bodyKey)}</InfoCardBody>
              </InfoCard>
            ))}
          </InfoCardGrid>
        </Container>
      </SectionWrap>

      {/* 03 Employment & financial snapshot */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.employment.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.employment.title")}</SectionH2>
          </SectionHeader>
          <HeroSub style={{ maxWidth: "680px", marginBottom: 0 }}>
            {t("renterProfile.employment.body")}
          </HeroSub>
          <EmploymentRow>
            {EMPLOYMENT_ROW_KEYS.map((row) => (
              <EmploymentItem key={row.labelKey}>
                <EmploymentLabel>{t(row.labelKey)}</EmploymentLabel>
                <EmploymentValue>{t(row.valueKey)}</EmploymentValue>
              </EmploymentItem>
            ))}
          </EmploymentRow>
        </Container>
      </SectionWrap>

      {/* 04 Rental history */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.rentalHistory.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.rentalHistory.title")}</SectionH2>
          </SectionHeader>
          <RentalHistoryLayout>
            <HeroSub style={{ flex: "1 1 380px", maxWidth: "560px" }}>
              {t("renterProfile.rentalHistory.body")}
            </HeroSub>
            <RentalHistoryPhotoWrap>
              <PhotoFrame $ratio="4 / 3" $filled>
                <PhotoImg
                  src="/renter-profile/house-front.jpg"
                  alt={t("renterProfile.rentalHistory.photoAlt")}
                />
              </PhotoFrame>
            </RentalHistoryPhotoWrap>
          </RentalHistoryLayout>
        </Container>
      </SectionWrap>

      {/* 05 What we're looking for */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.lookingFor.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.lookingFor.title")}</SectionH2>
          </SectionHeader>
          <InfoCardGrid>
            {LOOKING_FOR_CARDS.map((card) => (
              <InfoCard key={card.id} $accent $span={card.span}>
                <InfoCardIcon $accent>{card.icon}</InfoCardIcon>
                <InfoCardTag $accent>{t(card.tagKey)}</InfoCardTag>
                <InfoCardTitle>{t(card.titleKey)}</InfoCardTitle>
              </InfoCard>
            ))}
          </InfoCardGrid>
        </Container>
      </SectionWrap>

      {/* 06 Documents ready */}
      <SectionWrap>
        <Container>
          <SectionHeader>
            <SectionLabel>{t("renterProfile.documents.eyebrow")}</SectionLabel>
            <SectionH2>{t("renterProfile.documents.title")}</SectionH2>
          </SectionHeader>
          <HeroSub style={{ maxWidth: "680px" }}>
            {t("renterProfile.documents.body")}
          </HeroSub>
          <HeroTagRow style={{ marginBottom: 0 }}>
            {DOCUMENTS_READY_KEYS.map((key) => (
              <Tag key={key}>✓ {t(key)}</Tag>
            ))}
          </HeroTagRow>
        </Container>
      </SectionWrap>

      {/* Contact */}
      <ContactSection>
        <Container>
          <ContactSectionLabel>{t("renterProfile.contact.eyebrow")}</ContactSectionLabel>
          <ContactH2>{t("renterProfile.contact.title")}</ContactH2>
          <ContactSub>{t("renterProfile.contact.subtitle")}</ContactSub>
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
              {t("renterProfile.contact.linkedin")}
            </BtnOutline>
          </ContactLinks>
        </Container>
      </ContactSection>

      <HireFooter>
        <HireFooterInner>
          <span>{t("renterProfile.footer.slug")}</span>
          <span>{t("renterProfile.footer.route")}</span>
          <span>{t("renterProfile.footer.availability")}</span>
        </HireFooterInner>
      </HireFooter>
    </PageWrapper>
  );
}
