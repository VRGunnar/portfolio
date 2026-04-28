import { CAPABILITIES } from "../data";
import Reveal from "../Reveal";
import {
  Container,
  SectionWrap,
  SectionHeader,
  SectionLabel,
  SectionH2,
  CapsGrid,
  CapCard,
  CapIcon,
  CapTitle,
  CapDesc,
} from "../styles";

export default function CapabilitiesSection() {
  return (
    <SectionWrap id="hm-capabilities">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>01 - What I actually do</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>I build systems, not just interfaces.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <CapsGrid>
            {CAPABILITIES.map((cap) => (
              <CapCard key={cap.title}>
                <CapIcon>{cap.icon}</CapIcon>
                <CapTitle>{cap.title}</CapTitle>
                <CapDesc>{cap.desc}</CapDesc>
              </CapCard>
            ))}
          </CapsGrid>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
