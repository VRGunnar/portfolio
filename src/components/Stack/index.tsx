import {
  StackSection,
  StackInner,
  StackSectionLabel,
  StackH2,
  StackGrid,
  StackItem,
  StackItemIcon,
  StackItemName,
} from "./styles";
import {
  React,
  NodeJs,
  MongoDB,
  ExpressJsDark,
  GraphQL,
  GoogleCloud,
  Redis,
  PostgreSQL,
  Jest,
} from "developer-icons";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const STACK = [
  {
    icon: (
      <img
        src="/tech-logos/expo.svg"
        alt="Expo"
        style={{ width: 32, height: 32 }}
      />
    ),
    nameKey: "expo",
    featured: true,
  },
  { icon: <React size={32} />, nameKey: "reactNative", featured: true },
  { icon: <React size={32} />, nameKey: "react" },
  { icon: <NodeJs size={32} />, nameKey: "nodeJs" },
  { icon: <ExpressJsDark size={32} />, nameKey: "express" },
  { icon: <GraphQL size={32} />, nameKey: "graphQl" },
  {
    icon: (
      <img
        src="/tech-logos/sequelize.png"
        alt="Sequelize"
        style={{ width: 32, height: 32, objectFit: "contain" }}
      />
    ),
    nameKey: "sequelize",
  },
  { icon: <MongoDB size={32} />, nameKey: "mongoDb" },
  { icon: <PostgreSQL size={32} />, nameKey: "postgres" },
  {
    icon: (
      <img
        src="/tech-logos/typeORM.png"
        alt="TypeORM"
        style={{ width: 32, height: 32, objectFit: "contain" }}
      />
    ),
    nameKey: "typeOrm",
  },
  { icon: <GoogleCloud size={32} />, nameKey: "gcp" },
  { icon: <Redis size={32} />, nameKey: "redis" },
  { icon: <Jest size={32} />, nameKey: "jest" },
];

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function Stack() {
  const { t } = useTranslation();

  return (
    <StackSection id="stack">
      <StackInner>
        <Reveal>
          <StackSectionLabel>{t("stack.label")}</StackSectionLabel>
        </Reveal>
        <Reveal>
          <StackH2>{t("stack.title")}</StackH2>
        </Reveal>
        <Reveal>
          <StackGrid>
            {STACK.map((item) => (
              <StackItem key={item.nameKey} $featured={item.featured}>
                <StackItemIcon>{item.icon}</StackItemIcon>
                <StackItemName $featured={item.featured}>
                  {t(`stack.items.${item.nameKey}`)}
                </StackItemName>
              </StackItem>
            ))}
          </StackGrid>
        </Reveal>
      </StackInner>
    </StackSection>
  );
}
