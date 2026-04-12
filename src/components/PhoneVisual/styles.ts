import styled from "styled-components";
import { theme } from "../../theme";

export const PhoneWrap = styled.div`
  position: relative;
  width: 190px;
  margin: 0 auto;
`;

export const Phone = styled.div`
  width: 190px;
  height: 390px;
  background: ${theme.colors.soil};
  border-radius: 32px;
  padding: 11px;
  box-shadow:
    0 32px 64px rgba(44, 31, 20, 0.26),
    0 6px 16px rgba(44, 31, 20, 0.1);
`;

export const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(160deg, #2a1f16 0%, #1a1008 100%);
  border-radius: 23px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PhoneNotch = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 18px;
  background: ${theme.colors.soil};
  border-radius: 0 0 12px 12px;
  z-index: 2;
`;

export const PhoneUi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.8rem 0.9rem 0.9rem;
`;

export const PhoneAppIcon = styled.div`
  width: 44px;
  height: 44px;
  background: linear-gradient(
    135deg,
    ${theme.colors.accent} 0%,
    ${theme.colors.clay} 100%
  );
  border-radius: 12px;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const PhoneBar = styled.div<{ $width: number }>`
  height: 5px;
  width: ${({ $width }) => $width}px;
  background: rgba(196, 168, 130, 0.18);
  border-radius: 8px;
`;

export const PhoneCards = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 0.4rem;
`;

export const PhoneCard = styled.div<{ $highlight?: boolean }>`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: ${({ $highlight }) =>
    $highlight ? "rgba(193,125,60,0.2)" : "rgba(196,168,130,0.1)"};
  border: 1px solid rgba(196, 168, 130, 0.15);
`;

export const PhoneFloatBadge = styled.div`
  position: absolute;
  top: 44px;
  right: -52px;
  background: ${theme.colors.cream};
  border: 1px solid ${theme.colors.linen};
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
  font-size: 0.68rem;
  font-weight: 500;
  color: ${theme.colors.soil};
  box-shadow: 0 6px 20px rgba(44, 31, 20, 0.1);
  white-space: nowrap;
  z-index: 2;

  span {
    display: block;
    color: ${theme.colors.accent};
    font-size: 0.95rem;
    font-weight: 700;
    font-family: ${theme.fonts.heading};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    right: -34px;
  }
`;

export const PhoneFloatBadge2 = styled.div`
  position: absolute;
  bottom: 56px;
  left: -60px;
  background: ${theme.colors.soil};
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
  font-size: 0.68rem;
  font-weight: 400;
  color: ${theme.colors.sand};
  box-shadow: 0 6px 20px rgba(44, 31, 20, 0.2);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: ${theme.breakpoints.md}) {
    left: -28px;
  }
`;

export const DotGreen = styled.div`
  width: 6px;
  height: 6px;
  background: #7cb97a;
  border-radius: 50%;
  flex-shrink: 0;
`;
