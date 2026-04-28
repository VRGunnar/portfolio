import { useEffect, useState } from "react";
import { scrollToSection } from "../scrollToSection";
import {
  SidebarWrap,
  SidebarTimeline,
  SidebarEntry,
  SidebarDot,
  SidebarLabel,
  SidebarSpacer,
  MobileMenuOverlay,
  MobileMenuDrawer,
  MobileNavItem,
  MobileNavDot,
} from "../styles";

const SECTIONS = [
  { id: "hm-capabilities", label: "What I do" },
  { id: "hm-project", label: "Featured project" },
  { id: "hm-architecture", label: "Architecture" },
  { id: "hm-cloud", label: "Cloud & distributed" },
  { id: "hm-mindset", label: "How I work" },
  { id: "hm-experience", label: "Experience" },
  { id: "hm-stack", label: "Tech stack" },
  { id: "hm-wip", label: "Currently working on" },
  { id: "hm-contact", label: "Let's talk" },
];

type HireMeSidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
  visible?: boolean;
};

export default function HireMeSidebar({
  mobileOpen,
  onClose,
  visible = false,
}: HireMeSidebarProps) {
  const [active, setActive] = useState<string>("hm-capabilities");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the topmost visible section
          const topmost = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
          setActive(topmost.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  // Activate last section when scrolled to page bottom
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollY + innerHeight >= pageHeight - 80) {
        setActive("hm-contact");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <>
      {/* Desktop sidebar */}
      <SidebarWrap $visible={visible}>
        <SidebarTimeline>
          {SECTIONS.map((s) => (
            <div key={s.id} style={{ display: "contents" }}>
              <SidebarEntry
                $active={active === s.id}
                onClick={() => navigate(s.id)}
              >
                <SidebarDot $active={active === s.id} />
                <SidebarLabel $active={active === s.id}>{s.label}</SidebarLabel>
              </SidebarEntry>
              <SidebarSpacer $active={active === s.id} />
            </div>
          ))}
        </SidebarTimeline>
      </SidebarWrap>

      {/* Mobile overlay */}
      {mobileOpen && <MobileMenuOverlay onClick={onClose} />}

      {/* Mobile drawer */}
      <MobileMenuDrawer $open={mobileOpen}>
        {SECTIONS.map((s) => (
          <MobileNavItem
            key={s.id}
            $active={active === s.id}
            onClick={() => navigate(s.id)}
          >
            <MobileNavDot $active={active === s.id} />
            {s.label}
          </MobileNavItem>
        ))}
      </MobileMenuDrawer>
    </>
  );
}
