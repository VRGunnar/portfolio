import { MINDSET } from "../data";
import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  MindsetGrid,
  MindsetItem,
  MindsetNum,
  MindsetText,
} from "../styles";

export default function MindsetSection() {
  return (
    <SectionWrap id="hm-mindset">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>05 - How I work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>How I think.</SectionH2>
          </Reveal>
        </SectionHeader>
        <MindsetGrid>
          {MINDSET.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.07}>
              <MindsetItem>
                <MindsetNum>{item.num}</MindsetNum>
                <MindsetText>
                  <strong>{item.strong}</strong> {item.text}
                </MindsetText>
              </MindsetItem>
            </Reveal>
          ))}
        </MindsetGrid>
      </Container>
    </SectionWrap>
  );
}
