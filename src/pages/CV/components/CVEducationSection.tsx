import { SectionWrap, Container } from "../../HireMe/styles";
import { CV_EDUCATION } from "../data";
import {
  SplitSection,
  SplitLabel,
  TimelineList,
  TimelineCard,
  TimelineTitle,
  TimelineSub,
  TimelineText,
} from "../styles";

export default function CVEducationSection() {
  return (
    <SectionWrap>
      <Container>
        <SplitSection>
          <SplitLabel>Education</SplitLabel>
          <TimelineList>
            {CV_EDUCATION.map((item) => (
              <TimelineCard key={item.title}>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSub>
                  {item.subtitle} | {item.locationDate}
                </TimelineSub>
                <TimelineText>{item.description}</TimelineText>
              </TimelineCard>
            ))}
          </TimelineList>
        </SplitSection>
      </Container>
    </SectionWrap>
  );
}
