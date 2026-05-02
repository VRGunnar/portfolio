import { SectionWrap, Container } from "../../HireMe/styles";
import { CV_ADDITIONAL_INFO, CV_LANGUAGES } from "../data";
import {
  SplitSection,
  SplitLabel,
  TwoCol,
  ListCard,
  ListTitle,
  LanguageRow,
  InfoRow,
} from "../styles";

export default function CVLanguagesInfoSection() {
  return (
    <SectionWrap>
      <Container>
        <SplitSection>
          <SplitLabel>Languages & Info</SplitLabel>
          <TwoCol>
            <ListCard>
              <ListTitle>Languages</ListTitle>
              {CV_LANGUAGES.map((language) => (
                <LanguageRow key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </LanguageRow>
              ))}
            </ListCard>

            <ListCard>
              <ListTitle>Additional Information</ListTitle>
              {CV_ADDITIONAL_INFO.map((info) => (
                <InfoRow key={info.label}>
                  <strong>{info.label}:</strong> {info.value}
                </InfoRow>
              ))}
            </ListCard>
          </TwoCol>
        </SplitSection>
      </Container>
    </SectionWrap>
  );
}
