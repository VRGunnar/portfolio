import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  ArchDiagram,
  ArchGrid,
  ArchNode,
  ArchNodeIcon,
  ArchNodeTitle,
  ArchNodeSub,
  ArchArrow,
  ArchLegend,
  LegendItem,
  LegendDot,
} from "../styles";

export default function ArchitectureSection() {
  return (
    <SectionWrap id="hm-architecture">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>03 - Architecture mindset</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>How I approach system design.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <ArchDiagram>
            <ArchGrid>
              <ArchNode $highlight>
                <ArchNodeIcon>[scale]</ArchNodeIcon>
                <ArchNodeTitle>Scalable</ArchNodeTitle>
                <ArchNodeSub>Designed to handle growth and load</ArchNodeSub>
              </ArchNode>
              <ArchArrow>-&gt;</ArchArrow>
              <ArchNode>
                <ArchNodeIcon>[maintain]</ArchNodeIcon>
                <ArchNodeTitle>Maintainable</ArchNodeTitle>
                <ArchNodeSub>
                  Clear structure and separation of concerns
                </ArchNodeSub>
              </ArchNode>
              <ArchArrow>-&gt;</ArchArrow>
              <ArchNode>
                <ArchNodeIcon>[efficient]</ArchNodeIcon>
                <ArchNodeTitle>Efficient</ArchNodeTitle>
                <ArchNodeSub>Background processing where needed</ArchNodeSub>
              </ArchNode>
              <ArchArrow>-&gt;</ArchArrow>
              <ArchNode $highlight>
                <ArchNodeIcon>[cloud]</ArchNodeIcon>
                <ArchNodeTitle>Cloud-ready</ArchNodeTitle>
                <ArchNodeSub>
                  Built with distributed systems in mind
                </ArchNodeSub>
              </ArchNode>
            </ArchGrid>
            <ArchLegend>
              <LegendItem>
                <LegendDot $color="#C17D3C" />
                architecture priorities
              </LegendItem>
              <LegendItem>
                <LegendDot $color="#9C9488" />
                system quality attributes
              </LegendItem>
              <LegendItem>
                <span style={{ fontSize: 11, color: "#9C9488" }}>-&gt;</span>
                design progression
              </LegendItem>
            </ArchLegend>
          </ArchDiagram>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
