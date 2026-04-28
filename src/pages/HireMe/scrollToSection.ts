const HIRE_NAV_HEIGHT = 56;

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - HIRE_NAV_HEIGHT - 8;
  window.scrollTo({ top, behavior: "smooth" });
}
