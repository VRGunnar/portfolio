export type ThemeMode = "light" | "dark";

export const themePalettes = {
  light: {
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
  dark: {
    soil: "#F0E8D8",
    bark: "#A89880",
    clay: "#8B6B3D",
    sand: "#232018",
    linen: "#1A1712",
    cream: "#0F0D0B",
    moss: "#7AB87A",
    stone: "#6B5E4E",
    accent: "#C8A96E",
    accentWarm: "#8B6B3D",
  },
} as const;

export const theme = {
  colors: {
    soil: "var(--color-soil)",
    bark: "var(--color-bark)",
    clay: "var(--color-clay)",
    sand: "var(--color-sand)",
    linen: "var(--color-linen)",
    cream: "var(--color-cream)",
    moss: "var(--color-moss)",
    stone: "var(--color-stone)",
    accent: "var(--color-accent)",
    accentWarm: "var(--color-accent-warm)",
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
