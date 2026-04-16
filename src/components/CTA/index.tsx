import {
  CtaSection,
  CtaBg,
  CtaSectionLabel,
  CtaH2,
  CtaSub,
  CtaEmail,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <CtaSection id="contact">
      <CtaBg />
      <Reveal>
        <CtaSectionLabel>{t("cta.label")}</CtaSectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <CtaH2>{t("cta.title")}</CtaH2>
      </Reveal>
      <Reveal delay={0.2}>
        <CtaSub>{t("cta.subtitle")}</CtaSub>
      </Reveal>
      <Reveal delay={0.3}>
        <CtaEmail href="mailto:contact.gunnar.digital@gmail.com">
          contact.gunnar.digital@gmail.com
        </CtaEmail>
      </Reveal>
    </CtaSection>
  );
}
