import {
  DotGreen,
  Phone,
  PhoneAppIcon,
  PhoneBar,
  PhoneCard,
  PhoneCards,
  PhoneFloatBadge,
  PhoneFloatBadge2,
  PhoneNotch,
  PhoneScreen,
  PhoneUi,
  PhoneWrap,
} from "./styles";

export default function PhoneVisual() {
  return (
    <PhoneWrap>
      <PhoneFloatBadge>
        App Store Rating<span>⭐ 4.9</span>
      </PhoneFloatBadge>
      <Phone>
        <PhoneScreen>
          <PhoneNotch />
          <PhoneUi>
            <PhoneAppIcon>📱</PhoneAppIcon>
            <PhoneBar $width={108} />
            <PhoneBar $width={80} />
            <PhoneBar $width={128} />
            <PhoneCards>
              <PhoneCard />
              <PhoneCard $highlight />
              <PhoneCard />
            </PhoneCards>
            <PhoneBar $width={80} style={{ marginTop: "0.3rem" }} />
          </PhoneUi>
        </PhoneScreen>
      </Phone>
      <PhoneFloatBadge2>
        <DotGreen />
        React Native · Expo
      </PhoneFloatBadge2>
    </PhoneWrap>
  );
}
