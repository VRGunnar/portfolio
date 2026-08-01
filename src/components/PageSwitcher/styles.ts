import styled from "styled-components";
import { theme } from "../../theme";

export const SwitcherWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

export const SwitcherButton = styled.button<{ $open?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  color: ${theme.colors.stone};
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 22%, transparent);
  border-radius: 4px;
  padding: 2px 6px 2px 8px;
  background: transparent;
  cursor: pointer;
  transition:
    border-color 0.2s,
    color 0.2s,
    background 0.2s;

  &:hover,
  &:focus-visible {
    color: ${theme.colors.soil};
    border-color: color-mix(in srgb, ${theme.colors.accent} 55%, transparent);
  }

  :root[data-theme="dark"] & {
    color: ${theme.colors.bark};
    border-color: color-mix(in srgb, ${theme.colors.soil} 34%, transparent);
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 84%,
      ${theme.colors.soil} 16%
    );
  }
`;

export const SwitcherChevron = styled.span<{ $open?: boolean }>`
  font-size: 8px;
  line-height: 1;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
  opacity: 0.7;
`;

export const SwitcherDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 190px;
  background: ${theme.colors.linen};
  border: 1px solid color-mix(in srgb, ${theme.colors.soil} 20%, transparent);
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  padding: 4px;
  z-index: 1000;

  :root[data-theme="dark"] & {
    background: color-mix(
      in srgb,
      ${theme.colors.linen} 78%,
      ${theme.colors.soil} 22%
    );
    border-color: color-mix(in srgb, ${theme.colors.soil} 40%, transparent);
  }
`;

export const SwitcherItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 5px;
  padding: 7px 9px;
  background: ${(p) =>
    p.$active
      ? `color-mix(in srgb, ${theme.colors.accent} 14%, transparent)`
      : "transparent"};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: color-mix(in srgb, ${theme.colors.accent} 18%, transparent);
  }
`;

export const SwitcherItemText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const SwitcherItemLabel = styled.span<{ $active?: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: 12.5px;
  font-weight: ${(p) => (p.$active ? 600 : 500)};
  color: ${(p) => (p.$active ? theme.colors.soil : theme.colors.bark)};
`;

export const SwitcherItemCaption = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 10.5px;
  color: ${theme.colors.stone};
`;

export const SwitcherCheck = styled.span`
  flex-shrink: 0;
  color: ${theme.colors.accent};
  font-size: 11px;
`;
