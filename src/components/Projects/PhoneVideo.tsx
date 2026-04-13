import { MiniPhone, MiniPhoneScreen, MiniPhoneNotch } from "./styles";

export default function PhoneVideo() {
  return (
    <MiniPhone $bg="#ECDFCC">
      <MiniPhoneScreen
        $gradient="linear-gradient(160deg,#2a1508,#3d2010)"
        style={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <MiniPhoneNotch />
        <iframe
          loading="lazy"
          title="Gumlet video player"
          src="https://play.gumlet.io/embed/69dd2a87e556529568cb976c?background=false&autoplay=true&loop=true&disable_player_controls=false"
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 24,
          }}
          referrerPolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
        />
      </MiniPhoneScreen>
    </MiniPhone>
  );
}
