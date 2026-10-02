import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import PageSwitcher from "../../components/PageSwitcher";
import { HireNav, HireNavInner, NavLogo, NavThemeBtn } from "../HireMe/styles";
import { PageWrapper, ProgressBar, ScrollTrack } from "./styles";
import ScrollRail from "./components/ScrollRail";
import IntroSection from "./components/IntroSection";
import StatementSection from "./components/StatementSection";
import ClosingSection from "./components/ClosingSection";
import DustParticles from "./components/DustParticles";
import { STATEMENTS } from "./data";
import type { ThemeMode } from "../../theme";

type HomeProps = {
  themeMode: ThemeMode;
  onToggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

const SECTION_COUNT = STATEMENTS.length + 2; // intro + statements + closing

export default function Home({ themeMode, onToggleTheme }: HomeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const nextThemeIcon = themeMode === "dark" ? "☀" : "☾";
  const nextThemeLabel = themeMode === "dark" ? "light" : "dark";

  const jumpTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sectionRefs.current.findIndex(
            (el) => el === entry.target,
          );
          if (idx !== -1) setActiveIndex(idx);
        });
      },
      { root: track, threshold: 0.55 },
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        jumpTo(Math.min(activeIndexRef.current + 1, SECTION_COUNT - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        jumpTo(Math.max(activeIndexRef.current - 1, 0));
      }
    };

    track.addEventListener("keydown", handleKey);
    return () => track.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (prefersReducedMotion) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        wrapper.style.setProperty("--home-mx", `${e.clientX}px`);
        wrapper.style.setProperty("--home-my", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Per-section parallax depth (--pz) + scroll-velocity blur, both driven by
  // one rAF-throttled scroll listener so layers move at different speeds and
  // fast scrolls blur briefly before sharpening back in.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (prefersReducedMotion) return;

    let raf = 0;
    let lastScrollTop = track.scrollTop;
    let blurResetTimeout = 0;

    const update = () => {
      const trackTop = track.getBoundingClientRect().top;
      const viewportHeight = track.clientHeight;

      sectionRefs.current.forEach((el) => {
        if (!el) return;
        const progress = (el.getBoundingClientRect().top - trackTop) / viewportHeight;
        el.style.setProperty("--pz", progress.toFixed(4));
      });

      const scrollTop = track.scrollTop;
      const delta = Math.abs(scrollTop - lastScrollTop);
      lastScrollTop = scrollTop;
      const blur = Math.min(delta * 0.12, 6);
      track.style.setProperty("--scroll-blur", `${blur}px`);

      window.clearTimeout(blurResetTimeout);
      blurResetTimeout = window.setTimeout(() => {
        track.style.setProperty("--scroll-blur", "0px");
      }, 120);

      raf = 0;
    };

    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(blurResetTimeout);
    };
  }, []);

  const registerSection = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <PageWrapper ref={wrapperRef}>
      {themeMode === "dark" && !prefersReducedMotion && <DustParticles />}
      <ProgressBar $progress={activeIndex / (SECTION_COUNT - 1)} />

      <HireNav>
        <HireNavInner>
          <NavLogo>
            <a href="/">
              gunnar<span>.</span>digital
            </a>
            <PageSwitcher />
          </NavLogo>
          <NavThemeBtn onClick={onToggleTheme} aria-label="Toggle theme">
            {nextThemeIcon} {nextThemeLabel}
          </NavThemeBtn>
        </HireNavInner>
      </HireNav>

      <ScrollRail
        count={SECTION_COUNT}
        activeIndex={activeIndex}
        onJump={jumpTo}
      />

      <ScrollTrack ref={trackRef} tabIndex={0}>
        <IntroSection
          ref={registerSection(0)}
          inView={activeIndex === 0}
          onScrollNext={() => jumpTo(1)}
        />
        {STATEMENTS.map((statement, i) => (
          <StatementSection
            key={statement.kicker}
            ref={registerSection(i + 1)}
            id={`home-statement-${i}`}
            inView={activeIndex === i + 1}
            kicker={statement.kicker}
            heading={statement.heading}
            body={statement.body}
            bg={statement.bg}
            icon={statement.icon}
            hue={statement.hue}
          />
        ))}
        <ClosingSection
          ref={registerSection(STATEMENTS.length + 1)}
          inView={activeIndex === STATEMENTS.length + 1}
        />
      </ScrollTrack>
    </PageWrapper>
  );
}
