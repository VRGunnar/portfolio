import {
  CtaSection,
  CtaBg,
  CtaSectionLabel,
  CtaH2,
  CtaSub,
  CtaEmail,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";

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

export default function CTA() {
  return (
    <CtaSection id="contact">
      <CtaBg />
      <Reveal>
        <CtaSectionLabel>Let's work together</CtaSectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <CtaH2>Have an app idea? Let's make it real.</CtaH2>
      </Reveal>
      <Reveal delay={0.2}>
        <CtaSub>
          Tell me about your project and I'll get back to you within 24 hours
          with thoughts and next steps.
        </CtaSub>
      </Reveal>
      <Reveal delay={0.3}>
        <CtaEmail href="mailto:contact.gunnar.digital@gmail.com">
          contact.gunnar.digital@gmail.com
        </CtaEmail>
      </Reveal>
    </CtaSection>
  );
}
