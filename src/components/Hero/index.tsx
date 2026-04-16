import {
  HeroSection,
  HeroBgShape,
  HeroLeft,
  HeroEyebrow,
  HeroH1,
  HeroSub,
  HeroActions,
  BtnPrimary,
  BtnSecondary,
  HeroRight,
  HeroLottieViewport,
} from "./styles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "react-i18next";

const NAV_HEIGHT = 64;

function scrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top =
    target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="hero">
      <HeroBgShape />
      <HeroLeft>
        <HeroEyebrow>{t("hero.eyebrow")}</HeroEyebrow>
        <HeroH1>
          {t("hero.titleLine1")}
          <br />
          <em>{t("hero.titleEmphasis")}</em> {t("hero.titleLine2")}
        </HeroH1>
        <HeroSub>{t("hero.subtitle")}</HeroSub>
        <HeroActions>
          <BtnPrimary
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            {t("hero.primaryCta")}
          </BtnPrimary>
          <BtnSecondary
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
          >
            {t("hero.secondaryCta")}
          </BtnSecondary>
        </HeroActions>
      </HeroLeft>

      <HeroRight>
        {/* <PhoneVisual /> */}
        <HeroLottieViewport>
          <DotLottieReact
            src="/lottie/mobile-app-showcase.lottie"
            loop
            autoplay
            speed={0.5}
          />
        </HeroLottieViewport>
      </HeroRight>
    </HeroSection>
  );
}
