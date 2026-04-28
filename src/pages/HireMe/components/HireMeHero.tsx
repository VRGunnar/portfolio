import {
  HeroSection,
  Container,
  HeroEyebrow,
  HeroH1,
  HeroSub,
  HeroTagRow,
  Tag,
  HeroCtas,
  BtnPrimary,
  BtnOutline,
  HeroStatus,
  StatusDot,
} from "../styles";

type HireMeHeroProps = {
  onNavigate: (id: string) => void;
};

export default function HireMeHero({ onNavigate }: HireMeHeroProps) {
  return (
    <HeroSection>
      <Container>
        <HeroEyebrow>Available for hire</HeroEyebrow>
        <HeroH1>
          <em>Full-Stack developer</em> focused on scalable backend systems
          <br />
          and real-world applications
        </HeroH1>
        <HeroSub>
          I design and build cloud-native applications using Node.js, React
          Native, and modern cloud infrastructure. My work focuses on
          performance, scalability, and clean architecture - not just shipping
          features.
        </HeroSub>
        <HeroTagRow>
          <Tag $accent>Backend systems</Tag>
          <Tag>Node.js</Tag>
          <Tag>GraphQL</Tag>
          <Tag>Background processing</Tag>
          <Tag $accent>Mobile apps</Tag>
          <Tag $accent>Web apps</Tag>
          <Tag>React Native</Tag>
          <Tag>Expo</Tag>
          <Tag $accent>Cloud infrastructure</Tag>
          <Tag>Google Cloud</Tag>
          <Tag>Serverless patterns</Tag>
        </HeroTagRow>
        <HeroCtas>
          <BtnPrimary
            href="#project"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("hm-project");
            }}
          >
            View Projects
          </BtnPrimary>
          <BtnOutline
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("hm-contact");
            }}
          >
            Contact Me
          </BtnOutline>
          <BtnOutline href="/cv.pdf" download>
            Download CV
          </BtnOutline>
        </HeroCtas>
        <HeroStatus>
          <StatusDot />
          Systems-first engineering with performance, scalability, and clean
          architecture in focus
        </HeroStatus>
      </Container>
    </HeroSection>
  );
}
