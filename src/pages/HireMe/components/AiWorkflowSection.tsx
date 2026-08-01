import { AI_WORKFLOW_STEPS } from "../data";
import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  ProjectCard,
  ProjectHeader,
  ProjectDesc,
  ProjectBody,
  AiFlowGrid,
  CaseStep,
  CaseStepLabel,
  CaseStepTitle,
  CaseStepText,
  Tag,
} from "../styles";

export default function AiWorkflowSection() {
  return (
    <SectionWrap id="hm-ai-workflow">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>06 - AI-augmented workflow</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>How I build with Claude.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <ProjectCard>
            <ProjectHeader>
              <ProjectDesc>
                On my side projects, Claude is part of the actual workflow,
                not just autocomplete. Here&apos;s the loop I run for every
                ticket, from idea to merged PR.
              </ProjectDesc>
            </ProjectHeader>
            <ProjectBody>
              <AiFlowGrid>
                {AI_WORKFLOW_STEPS.map((step) => (
                  <CaseStep key={step.label}>
                    <CaseStepLabel>{step.label}</CaseStepLabel>
                    <CaseStepTitle>{step.title}</CaseStepTitle>
                    <CaseStepText>{step.text}</CaseStepText>
                  </CaseStep>
                ))}
              </AiFlowGrid>
              <Tag $accent>↻ cycle repeats</Tag>
            </ProjectBody>
          </ProjectCard>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
