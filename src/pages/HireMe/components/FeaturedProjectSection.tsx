import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  ProjectCard,
  ProjectHeader,
  ProjectMetaRow,
  Tag,
  ProjectTitle,
  ProjectDesc,
  ProjectBody,
  CaseFlow,
  CaseStep,
  CaseStepLabel,
  CaseStepTitle,
  CaseStepText,
  ProjectStats,
  Stat,
  StatVal,
  StatLabel,
} from "../styles";

export default function FeaturedProjectSection() {
  return (
    <SectionWrap id="hm-project">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>02 - Featured project</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>The work that speaks.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.15}>
          <ProjectCard>
            <ProjectHeader>
              <ProjectMetaRow>
                <Tag $accent>Case Study</Tag>
                <Tag>Expo</Tag>
                <Tag>React Native</Tag>
                <Tag>Node.js</Tag>
                <Tag>Supabase</Tag>
              </ProjectMetaRow>
              <ProjectTitle>
                Rental Platform
              </ProjectTitle>
              <ProjectDesc>
                Mobile rental platform with Expo/React Native frontend, Node.js
                backend, and Supabase for authentication and database. Built for
                role-based flows and scalable, real-world usage.
              </ProjectDesc>
            </ProjectHeader>
            <ProjectBody>
              <CaseFlow>
                <CaseStep>
                  <CaseStepLabel>Problem</CaseStepLabel>
                  <CaseStepTitle>
                    Multi-role complexity in one app
                  </CaseStepTitle>
                  <CaseStepText>
                    Managing tenant and landlord roles with real-time
                    interactions in a mobile app can quickly become hard to
                    scale.
                  </CaseStepText>
                </CaseStep>
                <CaseStep>
                  <CaseStepLabel>Solution</CaseStepLabel>
                  <CaseStepTitle>
                    Modern mobile stack & real-time features
                  </CaseStepTitle>
                  <CaseStepText>
                    Expo React Native app with a robust Node.js backend for
                    business logic. Includes live messaging, real-time
                    notifications, in-app document signing, live updates, and
                    secure document/image storage. Designed for seamless,
                    scalable, and engaging user experiences.
                  </CaseStepText>
                </CaseStep>
                <CaseStep>
                  <CaseStepLabel>Impact</CaseStepLabel>
                  <CaseStepTitle>Built for real-world usage</CaseStepTitle>
                  <CaseStepText>
                    A clean architecture that separates concerns and supports
                    future scaling and feature expansion.
                  </CaseStepText>
                </CaseStep>
              </CaseFlow>
              <ProjectStats>
                <Stat>
                  <StatVal>React Native</StatVal>
                  <StatLabel>native mobile UI</StatLabel>
                </Stat>
                <Stat>
                  <StatVal>Expo</StatVal>
                  <StatLabel>cross-platform</StatLabel>
                </Stat>
                <Stat>
                  <StatVal>Node.js</StatVal>
                  <StatLabel>backend business logic</StatLabel>
                </Stat>
                <Stat>
                  <StatVal>Supabase</StatVal>
                  <StatLabel>auth & database</StatLabel>
                </Stat>
                <Stat>
                  <StatVal>Google Cloud Run</StatVal>
                  <StatLabel>scalable cloud deployment</StatLabel>
                </Stat>
              </ProjectStats>
            </ProjectBody>
          </ProjectCard>
        </Reveal>
      </Container>
    </SectionWrap>
  );
}
