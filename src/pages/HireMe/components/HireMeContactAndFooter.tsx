import { type MutableRefObject } from "react";
import Reveal from "../Reveal";
import {
  ContactSection,
  Container,
  ContactSectionLabel,
  ContactH2,
  ContactSub,
  ContactLinks,
  BtnOutline,
  HireFooter,
  HireFooterInner,
} from "../styles";

type HireMeContactAndFooterProps = {
  contactRef: MutableRefObject<HTMLElement | null>;
};

export default function HireMeContactAndFooter({
  contactRef,
}: HireMeContactAndFooterProps) {
  return (
    <>
      <ContactSection
        id="hm-contact"
        ref={(el) => {
          contactRef.current = el;
        }}
      >
        <Container>
          <Reveal>
            <ContactSectionLabel>09 - Let&apos;s talk</ContactSectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactH2>Let&apos;s talk.</ContactH2>
          </Reveal>
          <Reveal delay={0.14}>
            <ContactSub>
              If you are looking for someone who can build and scale real
              systems, feel free to reach out.
              <br></br>
              I'm open to full-time roles, contracts, and serious conversations.
            </ContactSub>
          </Reveal>
          <Reveal delay={0.2}>
            <ContactLinks>
              <BtnOutline href="mailto:contact.gunnar.digital@gmail.com">
                Email
              </BtnOutline>
              <BtnOutline
                href="https://github.com/VRGunnar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </BtnOutline>
              <BtnOutline
                href="https://www.linkedin.com/in/gunnar-van-remoortere-ab1267171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </BtnOutline>
            </ContactLinks>
          </Reveal>
        </Container>
      </ContactSection>

      <HireFooter>
        <HireFooterInner>
          <span>gunnar.digital/hire-me</span>
          <span>built with intent - not a template</span>
        </HireFooterInner>
      </HireFooter>
    </>
  );
}
