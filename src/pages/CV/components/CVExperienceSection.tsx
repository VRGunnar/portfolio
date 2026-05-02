import { SectionWrap, Container } from "../../HireMe/styles";
import { CV_EXPERIENCE, SUMMER_BASH_PROJECTS } from "../data";
import {
  SplitSection,
  SplitLabel,
  ContentStack,
  IntroCopy,
  JobCard,
  JobTitle,
  JobMeta,
  JobSummary,
  ProjectGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDesc,
  PillList,
  Pill,
} from "../styles";

export default function CVExperienceSection() {
  return (
    <SectionWrap>
      <Container>
        <SplitSection>
          <SplitLabel>Work Experience</SplitLabel>
          <ContentStack>
            {CV_EXPERIENCE.map((job) => (
              <JobCard key={job.company + job.role}>
                <JobTitle>{job.company}</JobTitle>
                <JobMeta>
                  {job.role} | {job.location} | {job.date}
                </JobMeta>
                <JobSummary>{job.summary}</JobSummary>
              </JobCard>
            ))}

            <IntroCopy>
              Key project contributions for Summer Bash focused on automation,
              booking infrastructure, and traveller-facing product delivery.
            </IntroCopy>

            <ProjectGrid>
              {SUMMER_BASH_PROJECTS.map((project) => (
                <ProjectCard key={project.title}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <PillList>
                    {project.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </PillList>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </ContentStack>
        </SplitSection>
      </Container>
    </SectionWrap>
  );
}
