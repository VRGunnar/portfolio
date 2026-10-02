import { forwardRef } from "react";
import {
  Section,
  Inner,
  IntroEyebrow,
  IntroHeading,
  IntroSub,
  ScrollCue,
} from "../styles";
import { IntroSquiggle } from "./icons";

type IntroSectionProps = {
  inView: boolean;
  onScrollNext: () => void;
};

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(
  ({ inView, onScrollNext }, ref) => (
    <Section ref={ref} $bg="cream" id="home-intro">
      <Inner>
        <IntroEyebrow $inView={inView}>
          gunnar.digital — off the clock
        </IntroEyebrow>
        <IntroHeading $inView={inView}>
          This isn&apos;t a pitch.
          <br />
          This is just me.
        </IntroHeading>
        <IntroSquiggle inView={inView} />
        <IntroSub $inView={inView}>
          No résumé below, no client logos. Just what actually drives the
          work — scroll if you&apos;re curious.
        </IntroSub>
      </Inner>
      <ScrollCue
        type="button"
        $inView={inView}
        onClick={onScrollNext}
        aria-label="Scroll to next section"
      >
        Scroll
        <span>↓</span>
      </ScrollCue>
    </Section>
  ),
);

IntroSection.displayName = "IntroSection";

export default IntroSection;
