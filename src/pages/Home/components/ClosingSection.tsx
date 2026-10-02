import { forwardRef } from "react";
import { BtnPrimary, BtnOutline } from "../../HireMe/styles";
import { CV_CONTACT } from "../../CV/data";
import { DoorsIcon, SignatureIcon } from "./icons";
import {
  Section,
  Inner,
  Kicker,
  ClosingHeading,
  ClosingSub,
  ClosingCtaRow,
  ClosingLinksRow,
  ClosingLink,
  ClosingFootnote,
  IconWrap,
} from "../styles";

type ClosingSectionProps = {
  inView: boolean;
};

const ClosingSection = forwardRef<HTMLElement, ClosingSectionProps>(
  ({ inView }, ref) => (
    <Section ref={ref} $bg="cream" id="home-closing">
      <Inner>
        <IconWrap $inView={inView}>
          <DoorsIcon inView={inView} />
        </IconWrap>
        <Kicker $inView={inView}>Where to next</Kicker>
        <ClosingHeading $inView={inView}>
          That&apos;s the person behind the profile.
        </ClosingHeading>
        <ClosingSub $inView={inView}>
          Curious what that looks like on the job? Pick a door.
        </ClosingSub>
        <ClosingCtaRow $inView={inView}>
          <BtnPrimary href="/for-clients">
            I need something built →
          </BtnPrimary>
          <BtnOutline href="/hire-me">I&apos;m hiring →</BtnOutline>
        </ClosingCtaRow>
        <ClosingLinksRow $inView={inView}>
          <ClosingLink href={`mailto:${CV_CONTACT.email}`}>
            {CV_CONTACT.email}
          </ClosingLink>
          <ClosingLink
            href={CV_CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ClosingLink>
          <ClosingLink
            href={CV_CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ClosingLink>
          <ClosingLink href="/cv">CV</ClosingLink>
        </ClosingLinksRow>
        <SignatureIcon inView={inView} />
        <ClosingFootnote>
          gunnar.digital · built with too much coffee
        </ClosingFootnote>
      </Inner>
    </Section>
  ),
);

ClosingSection.displayName = "ClosingSection";

export default ClosingSection;
