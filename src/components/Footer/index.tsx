import { FooterEl, FooterLogo } from "./styles";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterEl>
      <FooterLogo href="#hero">
        gunnar<span>.</span>digital
      </FooterLogo>
      <span>{`© 2026 · ${t("footer.role")}`}</span>
      <span>{t("footer.builtWith")}</span>
    </FooterEl>
  );
}
