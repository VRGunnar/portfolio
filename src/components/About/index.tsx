import { Section, SectionLabel, SectionH2 } from "../shared/Section";
import {
  ValueGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDesc,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const VALUES = [
  {
    icon: "📱",
    titleKey: "about.values.crossPlatform.title",
    descKey: "about.values.crossPlatform.desc",
  },
  {
    icon: "⚡",
    titleKey: "about.values.fullStack.title",
    descKey: "about.values.fullStack.desc",
  },
  {
    icon: "🚀",
    titleKey: "about.values.launch.title",
    descKey: "about.values.launch.desc",
  },
];

function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about">
      <Section>
        <RevealSection>
          <SectionLabel>{t("about.label")}</SectionLabel>
        </RevealSection>
        <RevealSection>
          <SectionH2>{t("about.title")}</SectionH2>
        </RevealSection>
        <RevealSection>
          <ValueGrid>
            {VALUES.map((v) => (
              <ValueCard key={v.titleKey}>
                <ValueIcon>{v.icon}</ValueIcon>
                <ValueTitle>{t(v.titleKey)}</ValueTitle>
                <ValueDesc>{t(v.descKey)}</ValueDesc>
              </ValueCard>
            ))}
          </ValueGrid>
        </RevealSection>
      </Section>
    </div>
  );
}
