import { createGlobalStyle } from "styled-components";
import { themePalettes } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --theme-transition-x: 50vw;
    --theme-transition-y: 50vh;
    --theme-transition-radius: 0px;
  }

  :root,
  :root[data-theme='light'] {
    --color-soil: ${themePalettes.light.soil};
    --color-bark: ${themePalettes.light.bark};
    --color-clay: ${themePalettes.light.clay};
    --color-sand: ${themePalettes.light.sand};
    --color-linen: ${themePalettes.light.linen};
    --color-cream: ${themePalettes.light.cream};
    --color-moss: ${themePalettes.light.moss};
    --color-stone: ${themePalettes.light.stone};
    --color-accent: ${themePalettes.light.accent};
    --color-accent-warm: ${themePalettes.light.accentWarm};
  }

  :root[data-theme='dark'] {
    --color-soil: ${themePalettes.dark.soil};
    --color-bark: ${themePalettes.dark.bark};
    --color-clay: ${themePalettes.dark.clay};
    --color-sand: ${themePalettes.dark.sand};
    --color-linen: ${themePalettes.dark.linen};
    --color-cream: ${themePalettes.dark.cream};
    --color-moss: ${themePalettes.dark.moss};
    --color-stone: ${themePalettes.dark.stone};
    --color-accent: ${themePalettes.dark.accent};
    --color-accent-warm: ${themePalettes.dark.accentWarm};
  }

  [id] {
    scroll-margin-top: calc(${({ theme }) => theme.navH} + 8px);
  }

  body {
    background: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.soil};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.5;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes themeCircleReveal {
    from {
      clip-path: circle(0 at var(--theme-transition-x) var(--theme-transition-y));
    }
    to {
      clip-path: circle(var(--theme-transition-radius) at var(--theme-transition-x) var(--theme-transition-y));
    }
  }

  :root.theme-transition-active::view-transition-old(root) {
    animation: none;
  }

  :root.theme-transition-active::view-transition-new(root) {
    animation: themeCircleReveal 620ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    :root.theme-transition-active::view-transition-old(root),
    :root.theme-transition-active::view-transition-new(root) {
      animation: none;
    }
  }
`;
