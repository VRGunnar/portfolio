import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import ArchitectureSection from "./components/ArchitectureSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import CloudSection from "./components/CloudSection";
import ExperienceSection from "./components/ExperienceSection";
import FeaturedProjectSection from "./components/FeaturedProjectSection";
import HireMeContactAndFooter from "./components/HireMeContactAndFooter";
import HireMeHero from "./components/HireMeHero";
import HireMeNav from "./components/HireMeNav";
import HireMeSidebar from "./components/HireMeSidebar";
import MindsetSection from "./components/MindsetSection";
import ParticleBackground from "./components/ParticleBackground";
import StackSection from "./components/StackSection";
import WipSection from "./components/WipSection";
import { scrollToSection } from "./scrollToSection";
import {
  PageWrapper,
  ContentLayout,
  ContentMain,
  // Sticky CTA
  StickyCta,
} from "./styles";
import type { ThemeMode } from "../../theme";

type HireMeProps = {
  themeMode: ThemeMode;
  onToggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

export default function HireMe({ themeMode, onToggleTheme }: HireMeProps) {
  const [contactVisible, setContactVisible] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPastHero(entry.intersectionRatio < 0.5),
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <PageWrapper>
      <ParticleBackground />
      <HireMeNav
        onNavigate={scrollToSection}
        mobileNavOpen={mobileNavOpen}
        onHamburgerClick={() => setMobileNavOpen((o) => !o)}
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
      />
      <ContentLayout>
        <HireMeSidebar
          mobileOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          visible={pastHero}
        />
        <ContentMain>
          <div ref={heroRef}>
            <HireMeHero onNavigate={scrollToSection} />
          </div>
          <CapabilitiesSection />
          <FeaturedProjectSection />
          <ArchitectureSection />
          <CloudSection />
          <MindsetSection />
          <ExperienceSection />
          <StackSection />
          <WipSection />
          <HireMeContactAndFooter contactRef={contactRef} />
        </ContentMain>
      </ContentLayout>

      <StickyCta
        href="#hm-contact"
        $hidden={contactVisible}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hm-contact");
        }}
      >
        Let&apos;s talk -&gt;
      </StickyCta>
    </PageWrapper>
  );
}
