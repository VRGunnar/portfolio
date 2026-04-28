import { WIP_ITEMS } from "../data";
import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  WipList,
  WipItem,
  WipBadge,
  WipText,
} from "../styles";

export default function WipSection() {
  return (
    <SectionWrap id="hm-wip">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>08 - Currently working on</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>Current focus.</SectionH2>
          </Reveal>
        </SectionHeader>
        <WipList>
          {WIP_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <WipItem>
                <WipBadge>{item.badge}</WipBadge>
                <WipText>
                  <strong>{item.title}</strong> - {item.text}
                </WipText>
              </WipItem>
            </Reveal>
          ))}
        </WipList>
      </Container>
    </SectionWrap>
  );
}
