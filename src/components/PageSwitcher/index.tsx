import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SwitcherWrap,
  SwitcherButton,
  SwitcherChevron,
  SwitcherDropdown,
  SwitcherItem,
  SwitcherItemText,
  SwitcherItemLabel,
  SwitcherItemCaption,
  SwitcherCheck,
} from "./styles";

const PAGES = [
  {
    path: "/",
    slug: "/",
    label: "About me",
    caption: "Who I am, what I stand for",
  },
  {
    path: "/for-clients",
    slug: "/for-clients",
    label: "For clients",
    caption: "Looking to build a product",
  },
  {
    path: "/hire-me",
    slug: "/hire-me",
    label: "For employers",
    caption: "Looking to hire me full-time",
  },
] as const;

export default function PageSwitcher() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const current = PAGES.find((p) => p.path === location.pathname) ?? PAGES[0];

  useEffect(() => {
    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <SwitcherWrap ref={wrapRef}>
      <SwitcherButton
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch page"
      >
        {current.slug}
        <SwitcherChevron $open={open}>▾</SwitcherChevron>
      </SwitcherButton>
      {open && (
        <SwitcherDropdown role="listbox">
          {PAGES.map((page) => (
            <SwitcherItem
              key={page.path}
              type="button"
              $active={page.path === current.path}
              role="option"
              aria-selected={page.path === current.path}
              onClick={() => {
                setOpen(false);
                if (page.path !== location.pathname) navigate(page.path);
              }}
            >
              <SwitcherItemText>
                <SwitcherItemLabel $active={page.path === current.path}>
                  {page.label}
                </SwitcherItemLabel>
                <SwitcherItemCaption>{page.caption}</SwitcherItemCaption>
              </SwitcherItemText>
              {page.path === current.path && <SwitcherCheck>✓</SwitcherCheck>}
            </SwitcherItem>
          ))}
        </SwitcherDropdown>
      )}
    </SwitcherWrap>
  );
}
