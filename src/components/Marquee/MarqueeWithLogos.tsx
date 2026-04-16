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
import { useTranslation } from "react-i18next";

type MarqueeItemKey =
  | "reactNative"
  | "expo"
  | "mongoDb"
  | "express"
  | "react"
  | "nodeJs"
  | "graphQl"
  | "sequelize"
  | "postgres"
  | "typeOrm"
  | "gcp"
  | "redis"
  | "jest"
  | "iosAndroid";

const LOGOS: Record<MarqueeItemKey, JSX.Element> = {
  reactNative: <ReactIcon size={20} />,
  expo: (
    <img
      src="/tech-logos/expo.svg"
      alt="Expo"
      style={{ width: 20, height: 20 }}
    />
  ),
  mongoDb: <MongoDB size={20} />,
  express: <ExpressJsDark size={20} />,
  react: <ReactIcon size={20} />,
  nodeJs: <NodeJs size={20} />,
  graphQl: <GraphQL size={20} />,
  sequelize: (
    <img
      src="/tech-logos/sequelize.png"
      alt="Sequelize"
      style={{ width: 20, height: 20, objectFit: "contain" }}
    />
  ),
  gcp: <GoogleCloud size={20} />,
  iosAndroid: (
    <img
      src="/tech-logos/expo.svg"
      alt="iOS & Android"
      style={{ width: 20, height: 20, opacity: 0.7 }}
    />
  ),
  postgres: <PostgreSQL size={20} />,
  typeOrm: (
    <img
      src="/tech-logos/typeORM.png"
      alt="TypeORM"
      style={{ width: 20, height: 20, objectFit: "contain" }}
    />
  ),
  redis: <Redis size={20} />,
  jest: <Jest size={20} />,
};

const ITEMS: MarqueeItemKey[] = [
  "reactNative",
  "expo",
  "mongoDb",
  "express",
  "react",
  "nodeJs",
  "graphQl",
  "sequelize",
  "postgres",
  "typeOrm",
  "gcp",
  "redis",
  "jest",
  "iosAndroid",
];

export default function Marquee() {
  const { t } = useTranslation();

  // Duplicate for seamless loop
  return (
    <MarqueeSection aria-hidden="true">
      <MarqueeTrack>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <MarqueeItem key={i}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {LOGOS[item]}
              <span>{t(`marquee.items.${item}`)}</span>
            </span>
          </MarqueeItem>
        ))}
      </MarqueeTrack>
    </MarqueeSection>
  );
}
