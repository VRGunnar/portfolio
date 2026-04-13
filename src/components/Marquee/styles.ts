import styled from "styled-components";
import { theme } from "../../theme";

export const MarqueeSection = styled.div`
  border-top: 1px solid rgba(196, 168, 130, 0.3);
  border-bottom: 1px solid rgba(196, 168, 130, 0.3);
  background: ${theme.colors.linen};
  overflow: hidden;
  padding: 0.85rem 0;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  gap: 3.5rem;
  white-space: nowrap;
  width: max-content;
  animation: marquee 22s linear infinite;

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const MarqueeItem = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.stone};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const MarqueeDot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  background: ${theme.colors.accent};
  border-radius: 50%;
`;
