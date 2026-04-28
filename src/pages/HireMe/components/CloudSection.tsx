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
  CaseFlow,
  CaseStep,
  CaseStepLabel,
  CaseStepText,
} from "../styles";

export default function CloudSection() {
  return (
    <SectionWrap id="hm-cloud">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>04 - Cloud and distributed systems</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>Cloud and serverless positioning.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <ProjectCard>
            <ProjectHeader>
              <ProjectDesc>
                I have hands-on experience deploying and managing applications
                in cloud environments using Google Cloud.
              </ProjectDesc>
            </ProjectHeader>
            <ProjectBody>
              <CaseFlow>
                <CaseStep>
                  <CaseStepLabel>My work includes</CaseStepLabel>
                  <CaseStepText>
                    Stateless backend services, background job processing,
                    API-based architectures, scalable deployments, and pub/sub
                    communication.
                  </CaseStepText>
                </CaseStep>
                <CaseStep>
                  <CaseStepLabel>Results</CaseStepLabel>
                  <CaseStepText>
                    Reliable, scalable deployments and event-driven integrations
                    powering real-world products.
                  </CaseStepText>
                </CaseStep>
                <CaseStep>
                  <CaseStepLabel>AWS transferability</CaseStepLabel>
                  <CaseStepText>
                    These patterns translate directly to AWS serverless
                    architectures (Lambda, API Gateway, event-driven systems),
                    which I am actively expanding into.
                  </CaseStepText>
                </CaseStep>
              </CaseFlow>
            </ProjectBody>
          </ProjectCard>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
