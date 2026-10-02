import { forwardRef } from "react";
import type { CSSProperties } from "react";
import { Section, Inner, QuoteMark, Kicker, Heading, Body } from "../styles";
import { StatementVisual } from "./icons";
import type { SectionBg, StatementIcon } from "../data";

type StatementSectionProps = {
  id: string;
  inView: boolean;
  kicker: string;
  heading: string;
  body: string;
  bg: SectionBg;
  icon: StatementIcon;
  hue: number;
};

const StatementSection = forwardRef<HTMLElement, StatementSectionProps>(
  ({ id, inView, kicker, heading, body, bg, icon, hue }, ref) => (
    <Section
      ref={ref}
      $bg={bg}
      id={id}
      style={{ "--accent-hue": `${hue}deg` } as CSSProperties}
    >
      <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
      <Inner>
        <StatementVisual icon={icon} inView={inView} />
        <Kicker $inView={inView}>{kicker}</Kicker>
        <Heading $inView={inView}>{heading}</Heading>
        <Body $inView={inView}>{body}</Body>
      </Inner>
    </Section>
  ),
);

StatementSection.displayName = "StatementSection";

export default StatementSection;
