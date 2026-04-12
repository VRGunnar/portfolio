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

const STACK = [
  {
    icon: (
      <img
        src="/tech-logos/expo.svg"
        alt="Expo"
        style={{ width: 32, height: 32 }}
      />
    ),
    name: "Expo",
    featured: true,
  },
  { icon: <React size={32} />, name: "React Native", featured: true },
  { icon: <React size={32} />, name: "React" },
  { icon: <NodeJs size={32} />, name: "Node.js" },
  { icon: <ExpressJsDark size={32} />, name: "Express" },
  { icon: <GraphQL size={32} />, name: "GraphQL" },
  {
    icon: (
      <img
        src="/tech-logos/sequelize.png"
        alt="Sequelize"
        style={{ width: 32, height: 32, objectFit: "contain" }}
      />
    ),
    name: "Sequelize",
  },
  { icon: <MongoDB size={32} />, name: "MongoDB" },
  { icon: <PostgreSQL size={32} />, name: "Postgres" },
  {
    icon: (
      <img
        src="/tech-logos/typeORM.png"
        alt="TypeORM"
        style={{ width: 32, height: 32, objectFit: "contain" }}
      />
    ),
    name: "TypeORM",
  },
  { icon: <GoogleCloud size={32} />, name: "GCP" },
  { icon: <Redis size={32} />, name: "Redis" },
  { icon: <Jest size={32} />, name: "Jest" },
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
  return (
    <StackSection id="stack">
      <StackInner>
        <Reveal>
          <StackSectionLabel>Tech stack</StackSectionLabel>
        </Reveal>
        <Reveal>
          <StackH2>Built with tools that scale.</StackH2>
        </Reveal>
        <Reveal>
          <StackGrid>
            {STACK.map((item) => (
              <StackItem key={item.name} $featured={item.featured}>
                <StackItemIcon>{item.icon}</StackItemIcon>
                <StackItemName $featured={item.featured}>
                  {item.name}
                </StackItemName>
              </StackItem>
            ))}
          </StackGrid>
        </Reveal>
      </StackInner>
    </StackSection>
  );
}
