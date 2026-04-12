import { FooterEl, FooterLogo } from "./styles";

export default function Footer() {
  return (
    <FooterEl>
      <FooterLogo href="#hero">
        gunnar<span>.</span>digital
      </FooterLogo>
      <span>© 2026 · Full Stack &amp; Mobile Engineer</span>
      <span>Built with Vite &amp; React</span>
    </FooterEl>
  );
}
