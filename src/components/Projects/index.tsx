import { useState } from "react";
import { SectionLabel, SectionH2 } from "../shared/Section";
import {
  ProjectsSection,
  ProjectsInner,
  ProjectsHeader,
  ProjectsFilter,
  FilterBtn,
  ProjectFeatured,
  ProjectFeaturedVisual,
  ProjectScreenWrap,
  ProjTagBadge,
  ProjectFeaturedInfo,
  ProjectCategory,
  ProjectTitle,
  ProjectDesc,
  DisclaimerText,
  ProjectTags,
  Tag,
  ProjectMeta,
  MetaLabel,
  MetaValue,
} from "./styles";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import PhoneVideo from "./PhoneVideo";
import { useTranslation } from "react-i18next";

type Category = "all" | "mobile" | "fullstack";

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

// const MINI_BARS = {
//   full: { width: "100%" },
//   half: { width: "60%" },
//   threeQ: { width: "78%" },
// };

// const BAR_STYLE = (color: string) => ({
//   height: "4px",
//   borderRadius: "8px",
//   marginBottom: "3px",
//   background: color,
// });

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const { t } = useTranslation();

  const isHidden = (cat: string) => active !== "all" && active !== cat;

  return (
    <ProjectsSection id="projects">
      <ProjectsInner>
        <Reveal>
          <ProjectsHeader>
            <div>
              <SectionLabel>{t("projects.label")}</SectionLabel>
              <SectionH2>
                {t("projects.titleLine1")}
                <br />
                {t("projects.titleLine2")}
              </SectionH2>
            </div>
            <ProjectsFilter>
              {(["all", "mobile", "fullstack"] as Category[]).map((cat) => (
                <FilterBtn
                  key={cat}
                  $active={active === cat}
                  onClick={() => setActive(cat)}
                >
                  {t(`projects.filters.${cat}`)}
                </FilterBtn>
              ))}
            </ProjectsFilter>
          </ProjectsHeader>
        </Reveal>

        {/* Featured Project */}
        <ProjectFeatured $hidden={isHidden("mobile")}>
          <ProjectFeaturedVisual $bg="linear-gradient(135deg,#1a1008 0%,#3b2510 40%,#6b3a1f 100%)">
            <ProjectScreenWrap>
              {/* <MiniPhone $bg="#1c1008" $back>
                <MiniPhoneScreen $gradient="linear-gradient(160deg,#2a1508,#3d2010)">
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      background: "rgba(193,125,60,0.3)",
                      borderRadius: "4px",
                      marginTop: "14px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "65%",
                      background: "rgba(193,125,60,0.2)",
                      borderRadius: "4px",
                    }}
                  />
                </MiniPhoneScreen>
              </MiniPhone> */}
              <PhoneVideo />
              {/* <MiniPhone $bg="#0e0806"> */}
              {/* <MiniPhoneScreen $gradient="linear-gradient(160deg,#1a0e06,#2c1a0a)">
                  <MiniPhoneNotch />
                  <div style={{ marginTop: "18px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#c17d3c,#8b5e3c)",
                        marginBottom: "5px",
                      }}
                    />
                    <div style={BAR_STYLE("rgba(255,255,255,0.15)")} />
                    <div
                      style={{
                        ...BAR_STYLE("rgba(255,255,255,0.1)"),
                        marginBottom: "7px",
                      }}
                    />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "46px",
                          background: "rgba(193,125,60,0.25)",
                          borderRadius: "6px",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "46px",
                          background: "rgba(255,255,255,0.07)",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        ...BAR_STYLE("rgba(193,125,60,0.2)"),
                        ...MINI_BARS.threeQ,
                        marginTop: "5px",
                      }}
                    />
                  </div>
                </MiniPhoneScreen>
              </MiniPhone> */}
            </ProjectScreenWrap>
            <ProjTagBadge>{t("projects.featuredBadge")}</ProjTagBadge>
          </ProjectFeaturedVisual>
          <ProjectFeaturedInfo>
            <ProjectCategory>{t("projects.featuredCategory")}</ProjectCategory>
            <ProjectTitle>{t("projects.featuredTitle")}</ProjectTitle>
            <ProjectDesc>{t("projects.featuredDesc")}</ProjectDesc>
            <DisclaimerText>{t("projects.featuredDisclaimer")}</DisclaimerText>
            <ProjectTags>
              {[
                "reactNative",
                "expo",
                "mongoDb",
                "nodeJs",
                "express",
                "supabase",
              ].map((tagKey) => (
                <Tag key={tagKey}>{t(`projects.tags.${tagKey}`)}</Tag>
              ))}
            </ProjectTags>
            <ProjectMeta>
              <div>
                <MetaLabel>{t("projects.meta.platformLabel")}</MetaLabel>
                <MetaValue>{t("projects.meta.platformValue")}</MetaValue>
              </div>
              {/* <div>
                <MetaLabel>Timeline</MetaLabel>
                <MetaValue>14 weeks</MetaValue>
              </div> */}
              <div>
                <MetaLabel>{t("projects.meta.statusLabel")}</MetaLabel>
                <MetaValue>{t("projects.meta.statusValue")}</MetaValue>
              </div>
            </ProjectMeta>
            {/* <ProjectLink href="#">View case study →</ProjectLink> */}
          </ProjectFeaturedInfo>
        </ProjectFeatured>

        {/* Project grid */}
        {/* <ProjectsGrid> */}
        {/* GrowTrack */}
        {/* <ProjectCard $hidden={isHidden("mobile")}>
            <ProjectCardVisual $bg="linear-gradient(135deg,#0f1a12 0%,#1e3a26 50%,#2f5c3c 100%)">
              <CardGlow $glow="radial-gradient(circle at 50% 50%,rgba(60,180,100,0.3),transparent 70%)" />
              <TinyPhone $bg="#0c1a10">
                <TinyPhoneScreen $gradient="linear-gradient(160deg,#112215,#1e3828)">
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      background: "rgba(100,200,120,0.25)",
                      marginTop: "6px",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "55%",
                      background: "rgba(100,200,120,0.15)",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      height: "32px",
                      width: "100%",
                      background: "rgba(100,200,120,0.12)",
                      borderRadius: "5px",
                      marginTop: "3px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "5px",
                      marginTop: "3px",
                    }}
                  />
                </TinyPhoneScreen>
              </TinyPhone>
            </ProjectCardVisual>
            <ProjectCardBody>
              <ProjectCategory>Mobile App</ProjectCategory>
              <ProjectTitle>GrowTrack — Plant Care Scheduler</ProjectTitle>
              <ProjectDesc>
                A smart plant care app with push reminders, growth journals, and
                AI-powered plant identification via the device camera.
              </ProjectDesc>
              <ProjectTags>
                {["React Native", "Expo", "Express"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ProjectTags>
            </ProjectCardBody>
          </ProjectCard> */}

        {/* Fieldr */}
        {/* <ProjectCard $hidden={isHidden("fullstack")}>
            <ProjectCardVisual $bg="linear-gradient(135deg,#1a1410 0%,#332418 50%,#5c3e28 100%)">
              <CardGlow $glow="radial-gradient(circle at 50% 50%,rgba(193,125,60,0.35),transparent 70%)" />
              <TinyPhone $bg="#1a0e06">
                <TinyPhoneScreen $gradient="linear-gradient(160deg,#1e1208,#322014)">
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      background: "rgba(193,125,60,0.3)",
                      marginTop: "6px",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "55%",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{ display: "flex", gap: "3px", marginTop: "4px" }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "26px",
                        background: "rgba(193,125,60,0.2)",
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        height: "26px",
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      height: "3px",
                      width: "78%",
                      background: "rgba(193,125,60,0.15)",
                      borderRadius: "5px",
                      marginTop: "4px",
                    }}
                  />
                </TinyPhoneScreen>
              </TinyPhone>
            </ProjectCardVisual>
            <ProjectCardBody>
              <ProjectCategory>Full Stack · Web + Mobile</ProjectCategory>
              <ProjectTitle>Fieldr — Field Service Management</ProjectTitle>
              <ProjectDesc>
                A web dashboard + mobile app for small service businesses to
                manage jobs, technicians, scheduling, and invoicing on the go.
              </ProjectDesc>
              <ProjectTags>
                {["React", "React Native", "Sequelize", "GQL"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ProjectTags>
            </ProjectCardBody>
          </ProjectCard> */}

        {/* Wavelog */}
        {/* <ProjectCard $hidden={isHidden("mobile")}>
            <ProjectCardVisual $bg="linear-gradient(135deg,#0f1518 0%,#1c2d35 50%,#2e4a56 100%)">
              <CardGlow $glow="radial-gradient(circle at 50% 50%,rgba(80,160,200,0.3),transparent 70%)" />
              <TinyPhone $bg="#0c1418">
                <TinyPhoneScreen $gradient="linear-gradient(160deg,#101c24,#1a2e3a)">
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      background: "rgba(80,160,200,0.25)",
                      marginTop: "6px",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "55%",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      height: "36px",
                      width: "100%",
                      background: "rgba(80,160,200,0.12)",
                      borderRadius: "5px",
                      marginTop: "4px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "78%",
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: "5px",
                      marginTop: "3px",
                    }}
                  />
                </TinyPhoneScreen>
              </TinyPhone>
            </ProjectCardVisual>
            <ProjectCardBody>
              <ProjectCategory>Mobile App</ProjectCategory>
              <ProjectTitle>Wavelog — Surf Session Tracker</ProjectTitle>
              <ProjectDesc>
                Log surf sessions, track conditions via open weather APIs, and
                share clips with a tight-knit surf community. Fully
                offline-capable.
              </ProjectDesc>
              <ProjectTags>
                {["Expo", "React Native", "MongoDB"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ProjectTags>
            </ProjectCardBody>
          </ProjectCard> */}
        {/* </ProjectsGrid> */}
      </ProjectsInner>
    </ProjectsSection>
  );
}
