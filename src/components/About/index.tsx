import { Section, SectionLabel, SectionH2 } from "../shared/Section";
import {
  ValueGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDesc,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const VALUES = [
  {
    icon: "📱",
    title: "Cross-Platform Apps",
    desc: "One codebase, two stores. I build React Native + Expo apps that feel truly native on both iOS and Android — no compromises.",
  },
  {
    icon: "⚡",
    title: "Full Stack Backend",
    desc: "Your app needs a solid foundation. I build robust APIs and real-time backends with Node, Express, MongoDB, and GraphQL.",
  },
  {
    icon: "🚀",
    title: "From Idea to Launch",
    desc: "I handle the full journey — discovery, design, development, deployment, and App Store submission. You focus on your business.",
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
  return (
    <div id="about">
      <Section>
        <RevealSection>
          <SectionLabel>What I do</SectionLabel>
        </RevealSection>
        <RevealSection>
          <SectionH2>
            End-to-end mobile solutions for businesses that want to grow.
          </SectionH2>
        </RevealSection>
        <RevealSection>
          <ValueGrid>
            {VALUES.map((v) => (
              <ValueCard key={v.title}>
                <ValueIcon>{v.icon}</ValueIcon>
                <ValueTitle>{v.title}</ValueTitle>
                <ValueDesc>{v.desc}</ValueDesc>
              </ValueCard>
            ))}
          </ValueGrid>
        </RevealSection>
      </Section>
    </div>
  );
}
