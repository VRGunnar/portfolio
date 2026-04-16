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
import { useTranslation } from "react-i18next";

const STEPS = [
  {
    numKey: "process.steps.one.num",
    titleKey: "process.steps.one.title",
    descKey: "process.steps.one.desc",
  },
  {
    numKey: "process.steps.two.num",
    titleKey: "process.steps.two.title",
    descKey: "process.steps.two.desc",
  },
  {
    numKey: "process.steps.three.num",
    titleKey: "process.steps.three.title",
    descKey: "process.steps.three.desc",
  },
  {
    numKey: "process.steps.four.num",
    titleKey: "process.steps.four.title",
    descKey: "process.steps.four.desc",
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
  const { t } = useTranslation();

  return (
    <ProcessSection id="process">
      <ProcessInner>
        <Reveal>
          <SectionLabel>{t("process.label")}</SectionLabel>
        </Reveal>
        <Reveal>
          <SectionH2>{t("process.title")}</SectionH2>
        </Reveal>
        <Reveal>
          <ProcessSteps>
            {STEPS.map((step) => (
              <ProcessStep key={step.numKey}>
                <StepNum>{t(step.numKey)}</StepNum>
                <StepTitle>{t(step.titleKey)}</StepTitle>
                <StepDesc>{t(step.descKey)}</StepDesc>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </Reveal>
      </ProcessInner>
    </ProcessSection>
  );
}
