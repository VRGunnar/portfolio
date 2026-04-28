import { STACK_GROUPS } from "../data";
import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  StackGrid,
  StackGroup,
  StackGroupLabel,
  StackItems,
  StackItem,
} from "../styles";

export default function StackSection() {
  return (
    <SectionWrap id="hm-stack">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>07 - Tech stack</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>Clean and strategic.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <StackGrid>
            {STACK_GROUPS.map((group) => (
              <StackGroup key={group.label}>
                <StackGroupLabel>{group.label}</StackGroupLabel>
                <StackItems>
                  {group.items.map((item) => (
                    <StackItem key={item}>{item}</StackItem>
                  ))}
                </StackItems>
              </StackGroup>
            ))}
          </StackGrid>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
