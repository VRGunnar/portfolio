export type SectionBg = "cream" | "linen" | "sand";

export type StatementIcon =
  | "nobody"
  | "reciprocity"
  | "persistence"
  | "belief";

export type Statement = {
  kicker: string;
  heading: string;
  body: string;
  bg: SectionBg;
  icon: StatementIcon;
  hue: number;
};

export const STATEMENTS: Statement[] = [
  {
    kicker: "01 — On fitting in",
    heading: "I'd rather be a nobody, than be just like anybody else.",
    body: "Copying the safe path is still someone else's path. I'd rather build something that's mine — smaller, slower, stranger — than blend into a version of success that was never mine to begin with.",
    bg: "linen",
    icon: "nobody",
    hue: -16,
  },
  {
    kicker: "02 — On how I treat people",
    heading: "Do good, receive good.",
    body: "I don't take every advantage I could technically get away with. Clients, teammates, strangers — I'd rather leave things a little better than I found them, and trust that it comes back around. It usually does.",
    bg: "sand",
    icon: "reciprocity",
    hue: 12,
  },
  {
    kicker: "03 — On quitting",
    heading: "Never give up.",
    body: "Every hard skill I have, I built by staying one more hour when it would've been easier to stop. That habit never switched off — it's just how I work now.",
    bg: "cream",
    icon: "persistence",
    hue: -8,
  },
  {
    kicker: "04 — On belief",
    heading: "You simply need to believe in yourself. Not everyone will believe in you.",
    body: "That's fine. Their belief was never the requirement — it was always mine. The moment I stopped waiting for permission, I started actually moving.",
    bg: "linen",
    icon: "belief",
    hue: 20,
  },
];
