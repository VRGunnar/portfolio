import { SectionLabel, SectionH2 } from "../shared/Section";
import {
  ProcessSection,
  ProcessInner,
  ProcessSteps,
  ProcessStep,
  StepNum,
  StepTitle,
  StepDesc,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We talk through your idea, goals, and timeline. I ask the right questions to scope the project clearly.",
  },
  {
    num: "02",
    title: "Proposal & Plan",
    desc: "You get a detailed proposal with milestones, timeline, and a fixed or retainer-based price — no surprises.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "I build in short sprints with regular previews. You stay in the loop without drowning in technical details.",
  },
  {
    num: "04",
    title: "Ship & Support",
    desc: "App Store submission, deployment, and post-launch support so your product keeps running smoothly.",
  },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function Process() {
  return (
    <ProcessSection id="process">
      <ProcessInner>
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
        </Reveal>
        <Reveal>
          <SectionH2>A clear path from conversation to launch.</SectionH2>
        </Reveal>
        <Reveal>
          <ProcessSteps>
            {STEPS.map((step) => (
              <ProcessStep key={step.num}>
                <StepNum>{step.num}</StepNum>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </Reveal>
      </ProcessInner>
    </ProcessSection>
  );
}
