import { EXPERIENCE } from "../data";
import Reveal from "../Reveal";
import {
  SectionWrap,
  Container,
  SectionHeader,
  SectionLabel,
  SectionH2,
  ProjectDesc,
  ExpList,
  ExpItem,
  ExpRole,
  ExpCompany,
  ExpBullets,
  ExpBullet,
  ExpDate,
} from "../styles";

export default function ExperienceSection() {
  return (
    <SectionWrap id="hm-experience">
      <Container>
        <SectionHeader>
          <Reveal>
            <SectionLabel>06 - Experience</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionH2>Experience.</SectionH2>
          </Reveal>
        </SectionHeader>
        <Reveal delay={0.12}>
          <ProjectDesc>
            I have worked on building and deploying full-stack applications,
            focusing on real-world functionality and scalability. I have taken
            full responsibility for features from initial design to production
            delivery.
          </ProjectDesc>
        </Reveal>
        <ExpList>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.role + i} delay={i * 0.1}>
              <ExpItem>
                <div>
                  <ExpRole>{exp.role}</ExpRole>
                  <ExpCompany>{exp.company}</ExpCompany>
                  <ExpBullets>
                    {exp.bullets.map((bullet) => (
                      <ExpBullet key={bullet}>{bullet}</ExpBullet>
                    ))}
                  </ExpBullets>
                </div>
                <ExpDate>{exp.date}</ExpDate>
              </ExpItem>
            </Reveal>
          ))}
        </ExpList>
      </Container>
    </SectionWrap>
  );
}
