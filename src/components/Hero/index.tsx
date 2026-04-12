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
import PhoneVisual from "../PhoneVisual";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NAV_HEIGHT = 64;

function scrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top =
    target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroBgShape />
      <HeroLeft>
        <HeroEyebrow>Mobile &amp; Full Stack Engineer</HeroEyebrow>
        <HeroH1>
          Your app idea,
          <br />
          <em>beautifully</em> built.
        </HeroH1>
        <HeroSub>
          I design and engineer web & mobile applications that your customers actually
          love — end-to-end, from concept to the App Store.
        </HeroSub>
        <HeroActions>
          <BtnPrimary
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Start a project →
          </BtnPrimary>
          <BtnSecondary
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
          >
            See my work
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
