export const theme = {
  colors: {
    soil: "#2C1F14",
    bark: "#4A3728",
    clay: "#8B5E3C",
    sand: "#C4A882",
    linen: "#EDE0CC",
    cream: "#F7F1E8",
    moss: "#6B7C5C",
    stone: "#9C9488",
    accent: "#C17D3C",
    accentWarm: "#D4956A",
  },
  fonts: {
    heading: "'Bricolage Grotesque', sans-serif",
    body: "'DM Sans', sans-serif",
  },
  navH: "64px",
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },
} as const;

export type Theme = typeof theme;
