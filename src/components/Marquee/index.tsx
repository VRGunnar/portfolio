import {
  MarqueeSection,
  MarqueeTrack,
  MarqueeItem,
  MarqueeDot,
} from "./styles";

const ITEMS = [
  "React Native",
  "Expo",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "GraphQL",
  "Sequelize",
  "GCP",
  "iOS & Android",
];

export default function Marquee() {
  // Duplicate for seamless loop
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <MarqueeSection aria-hidden="true">
      <MarqueeTrack>
        {allItems.map((item, i) => (
          <MarqueeItem key={i}>
            {item} <MarqueeDot />
          </MarqueeItem>
        ))}
      </MarqueeTrack>
    </MarqueeSection>
  );
}
