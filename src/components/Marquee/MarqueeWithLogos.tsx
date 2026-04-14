import { MarqueeSection, MarqueeTrack, MarqueeItem } from "./styles";
import {
  React as ReactIcon,
  NodeJs,
  MongoDB,
  ExpressJsDark,
  GraphQL,
  GoogleCloud,
  Redis,
  PostgreSQL,
  Jest,
} from "developer-icons";

const LOGOS: Record<string, JSX.Element> = {
  "React Native": <ReactIcon size={20} />, // fallback to React icon
  Expo: (
    <img
      src="/tech-logos/expo.svg"
      alt="Expo"
      style={{ width: 20, height: 20 }}
    />
  ),
  MongoDB: <MongoDB size={20} />,
  Express: <ExpressJsDark size={20} />,
  React: <ReactIcon size={20} />,
  "Node.js": <NodeJs size={20} />,
  GraphQL: <GraphQL size={20} />,
  Sequelize: (
    <img
      src="/tech-logos/sequelize.png"
      alt="Sequelize"
      style={{ width: 20, height: 20, objectFit: "contain" }}
    />
  ),
  GCP: <GoogleCloud size={20} />,
  "iOS & Android": (
    <img
      src="/tech-logos/expo.svg"
      alt="iOS & Android"
      style={{ width: 20, height: 20, opacity: 0.7 }}
    />
  ),
  Postgres: <PostgreSQL size={20} />,
  TypeORM: (
    <img
      src="/tech-logos/typeORM.png"
      alt="TypeORM"
      style={{ width: 20, height: 20, objectFit: "contain" }}
    />
  ),
  Redis: <Redis size={20} />,
  Jest: <Jest size={20} />,
};

const ITEMS = [
  "React Native",
  "Expo",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "GraphQL",
  "Sequelize",
  "Postgres",
  "TypeORM",
  "GCP",
  "Redis",
  "Jest",
  "iOS & Android",
];

export default function Marquee() {
  // Duplicate for seamless loop
  return (
    <MarqueeSection aria-hidden="true">
      <MarqueeTrack>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <MarqueeItem key={i}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {LOGOS[item as keyof typeof LOGOS]}
              <span>{item}</span>
            </span>
          </MarqueeItem>
        ))}
      </MarqueeTrack>
    </MarqueeSection>
  );
}
