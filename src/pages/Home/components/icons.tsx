import { IconWrap, DrawShape, IntroFlourish, SignatureFlourish } from "../styles";
import type { StatementIcon } from "../data";

type IconProps = {
  inView: boolean;
};

// One odd shape among a row of identical ones — the "nobody vs. anybody" mantra.
function NobodyIcon({ inView }: IconProps) {
  return (
    <svg viewBox="0 0 144 56" fill="none">
      <DrawShape
        $inView={inView}
        $delay={0}
        d="M9 28 A7 7 0 1 0 23 28 A7 7 0 1 0 9 28 Z"
      />
      <DrawShape
        $inView={inView}
        $delay={0.06}
        d="M37 28 A7 7 0 1 0 51 28 A7 7 0 1 0 37 28 Z"
      />
      <DrawShape $inView={inView} $delay={0.12} d="M72 15 L85 28 L72 41 L59 28 Z" />
      <DrawShape
        $inView={inView}
        $delay={0.18}
        d="M93 28 A7 7 0 1 0 107 28 A7 7 0 1 0 93 28 Z"
      />
      <DrawShape
        $inView={inView}
        $delay={0.24}
        d="M121 28 A7 7 0 1 0 135 28 A7 7 0 1 0 121 28 Z"
      />
    </svg>
  );
}

// A loop that comes back to where it started — "do good, receive good."
function ReciprocityIcon({ inView }: IconProps) {
  return (
    <svg viewBox="0 0 96 56" fill="none">
      <DrawShape
        $inView={inView}
        $delay={0}
        d="M63 22 A30 30 0 1 1 33 22"
      />
      <DrawShape $inView={inView} $delay={0.5} d="M33 22 L24 19 M33 22 L30 31" />
    </svg>
  );
}

// A line that dips, then climbs higher than where it began — resilience.
function PersistenceIcon({ inView }: IconProps) {
  return (
    <svg viewBox="0 0 160 64" fill="none">
      <DrawShape
        $inView={inView}
        $delay={0}
        d="M10 18 L42 38 L66 50 L98 22 L130 10 L152 6"
      />
      <DrawShape $inView={inView} $delay={0.55} d="M152 6 L141 9 M152 6 L148 16" />
    </svg>
  );
}

// A small self-made star — belief that doesn't depend on anyone else's light.
function BeliefIcon({ inView }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none">
      <DrawShape
        $inView={inView}
        $delay={0}
        d="M40 6 L47 33 L74 40 L47 47 L40 74 L33 47 L6 40 L33 33 Z"
      />
    </svg>
  );
}

// Two doors — the closing "pick a door" moment.
export function DoorsIcon({ inView }: IconProps) {
  return (
    <svg viewBox="0 0 140 90" fill="none">
      <DrawShape $inView={inView} $delay={0} d="M14 10 H60 V80 H14 Z" />
      <DrawShape $inView={inView} $delay={0.1} d="M54 43 V47" />
      <DrawShape $inView={inView} $delay={0.2} d="M80 10 H126 V80 H80 Z" />
      <DrawShape $inView={inView} $delay={0.3} d="M86 43 V47" />
    </svg>
  );
}

const ICON_MAP: Record<StatementIcon, (props: IconProps) => JSX.Element> = {
  nobody: NobodyIcon,
  reciprocity: ReciprocityIcon,
  persistence: PersistenceIcon,
  belief: BeliefIcon,
};

export function StatementVisual({
  icon,
  inView,
}: {
  icon: StatementIcon;
  inView: boolean;
}) {
  const Icon = ICON_MAP[icon];
  return (
    <IconWrap $inView={inView}>
      <Icon inView={inView} />
    </IconWrap>
  );
}

export function IntroSquiggle({ inView }: IconProps) {
  return (
    <IntroFlourish $inView={inView}>
      <svg viewBox="0 0 140 18" fill="none">
        <DrawShape
          $inView={inView}
          $delay={0.6}
          d="M4 12 C 24 -2, 40 22, 60 8 C 80 -4, 96 20, 116 9 C 124 6, 130 8, 136 6"
        />
      </svg>
    </IntroFlourish>
  );
}

// An abstract cursive scribble — a personal sign-off instead of plain text.
export function SignatureIcon({ inView }: IconProps) {
  return (
    <SignatureFlourish $inView={inView}>
      <svg viewBox="0 0 200 40" fill="none">
        <DrawShape
          $inView={inView}
          $delay={0.1}
          $length={520}
          d="M6 30 C 10 10, 22 6, 26 20 C 29 30, 18 34, 15 24 C 12 14, 26 6, 40 14 C 52 21, 46 32, 58 28 C 68 25, 66 12, 78 12 C 92 12, 92 30, 106 26 C 118 23, 116 8, 130 10 C 142 12, 138 28, 152 24 C 162 21, 164 14, 176 16 C 184 17, 188 20, 194 18"
        />
      </svg>
    </SignatureFlourish>
  );
}
