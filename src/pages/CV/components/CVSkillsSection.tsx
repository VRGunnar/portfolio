import { SectionWrap, Container } from "../../HireMe/styles";
import { CV_SKILLS } from "../data";
import {
  SplitSection,
  SplitLabel,
  SkillGroupGrid,
  SkillGroupCard,
  SkillGroupTitle,
  PillList,
  Pill,
} from "../styles";

export default function CVSkillsSection() {
  return (
    <SectionWrap>
      <Container>
        <SplitSection>
          <SplitLabel>Skills & Technologies</SplitLabel>
          <SkillGroupGrid>
            {Object.entries(CV_SKILLS).map(([category, items]) => (
              <SkillGroupCard key={category}>
                <SkillGroupTitle>{category}</SkillGroupTitle>
                <PillList>
                  {items.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </PillList>
              </SkillGroupCard>
            ))}
          </SkillGroupGrid>
        </SplitSection>
      </Container>
    </SectionWrap>
  );
}
