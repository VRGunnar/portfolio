import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme, ThemeMode } from "./theme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HireMe from "./pages/HireMe";

const THEME_STORAGE_KEY = "portfolio-theme-mode";

type ThemeToggleMouseEvent = ReactMouseEvent<HTMLButtonElement>;

type ViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (updateCallback: () => void) => ViewTransition;
};

function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function PortfolioLayout({
  themeMode,
  onToggleTheme,
}: {
  themeMode: ThemeMode;
  onToggleTheme: (event?: ThemeToggleMouseEvent) => void;
}) {
  return (
    <>
      <Nav themeMode={themeMode} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Process />
        <About />
        <Projects />
        <Stack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);

  const toggleTheme = (event?: ThemeToggleMouseEvent) => {
    const doc = document as DocumentWithViewTransition;
    const canAnimate =
      typeof window !== "undefined" &&
      !!doc.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate) {
      setThemeMode((current) => (current === "light" ? "dark" : "light"));
      return;
    }

    const buttonRect = event?.currentTarget?.getBoundingClientRect();
    const originX =
      buttonRect?.left !== undefined
        ? buttonRect.left + buttonRect.width / 2
        : window.innerWidth / 2;
    const originY =
      buttonRect?.top !== undefined
        ? buttonRect.top + buttonRect.height / 2
        : window.innerHeight / 2;

    const maxX = Math.max(originX, window.innerWidth - originX);
    const maxY = Math.max(originY, window.innerHeight - originY);
    const revealRadius = Math.hypot(maxX, maxY);

    document.documentElement.style.setProperty(
      "--theme-transition-x",
      `${originX}px`,
    );
    document.documentElement.style.setProperty(
      "--theme-transition-y",
      `${originY}px`,
    );
    document.documentElement.style.setProperty(
      "--theme-transition-radius",
      `${revealRadius}px`,
    );

    const transition = doc.startViewTransition?.(() => {
      setThemeMode((current) => (current === "light" ? "dark" : "light"));
    });

    if (!transition) return;

    transition.ready
      .then(() => {
        document.documentElement.classList.add("theme-transition-active");
      })
      .catch(() => {
        document.documentElement.classList.remove("theme-transition-active");
      });

    transition.finished.finally(() => {
      document.documentElement.classList.remove("theme-transition-active");
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    document.documentElement.style.colorScheme = themeMode;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <PortfolioLayout
              themeMode={themeMode}
              onToggleTheme={toggleTheme}
            />
          }
        />
        <Route
          path="/hire-me"
          element={<HireMe themeMode={themeMode} onToggleTheme={toggleTheme} />}
        />
      </Routes>
    </ThemeProvider>
  );
}
