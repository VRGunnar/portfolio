import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HouseGalleryViewport,
  HouseGalleryTrack,
  HouseThumbBtn,
  HouseThumbImg,
  HouseThumbMore,
  SeeAllBtn,
  LightboxOverlay,
  LightboxImg,
  LightboxClose,
  LightboxNav,
  LightboxCounter,
  LightboxCaption,
} from "../styles";
import { HOUSE_PHOTOS } from "../data";

const GAP_PX = 12;
const SECONDS_PER_PHOTO = 3.5;

function columnsForWidth(width: number) {
  if (width < 480) return 2;
  if (width < 768) return 3;
  return 4;
}

export default function HouseGallery() {
  const { t } = useTranslation();
  const [columns, setColumns] = useState(4);
  const [tileWidth, setTileWidth] = useState(220);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const hiddenCount = Math.max(HOUSE_PHOTOS.length - columns, 0);

  useEffect(() => {
    const recalc = () => {
      const width = window.innerWidth;
      const cols = columnsForWidth(width);
      setColumns(cols);
      const viewportWidth = viewportRef.current?.clientWidth ?? width;
      setTileWidth((viewportWidth - GAP_PX * (cols - 1)) / cols);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % HOUSE_PHOTOS.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + HOUSE_PHOTOS.length) % HOUSE_PHOTOS.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex]);

  const displayPhotos = [...HOUSE_PHOTOS, ...HOUSE_PHOTOS];

  return (
    <>
      <HouseGalleryViewport ref={viewportRef} onMouseEnter={() => setHasScrolled(true)}>
        <HouseGalleryTrack $duration={HOUSE_PHOTOS.length * SECONDS_PER_PHOTO}>
          {displayPhotos.map((photo, i) => {
            const photoIndex = i % HOUSE_PHOTOS.length;
            const caption = t(photo.captionKey);
            const isMoreTile = !hasScrolled && i === columns - 1 && hiddenCount > 0;
            return (
              <HouseThumbBtn
                key={i}
                $width={tileWidth}
                onClick={() => setOpenIndex(photoIndex)}
                aria-label={t("renterProfile.houseGallery.openPhotoAria", { caption })}
              >
                <HouseThumbImg src={photo.src} alt={caption} loading="lazy" />
                {isMoreTile && (
                  <HouseThumbMore>
                    {t("renterProfile.houseGallery.moreOverlay", { count: hiddenCount })}
                  </HouseThumbMore>
                )}
              </HouseThumbBtn>
            );
          })}
        </HouseGalleryTrack>
      </HouseGalleryViewport>

      <SeeAllBtn onClick={() => setOpenIndex(0)}>
        {t("renterProfile.houseGallery.seeAll", { count: HOUSE_PHOTOS.length })}
      </SeeAllBtn>

      {openIndex !== null && (
        <LightboxOverlay onClick={() => setOpenIndex(null)}>
          <LightboxCaption>{t(HOUSE_PHOTOS[openIndex].captionKey)}</LightboxCaption>
          <LightboxClose
            onClick={() => setOpenIndex(null)}
            aria-label={t("renterProfile.houseGallery.closeAria")}
          >
            ✕
          </LightboxClose>
          <LightboxNav
            $side="left"
            aria-label={t("renterProfile.houseGallery.prevPhotoAria")}
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(
                (i) => (i === null ? i : (i - 1 + HOUSE_PHOTOS.length) % HOUSE_PHOTOS.length),
              );
            }}
          >
            ‹
          </LightboxNav>
          <LightboxImg
            src={HOUSE_PHOTOS[openIndex].src}
            alt={t(HOUSE_PHOTOS[openIndex].captionKey)}
            onClick={(e) => e.stopPropagation()}
          />
          <LightboxNav
            $side="right"
            aria-label={t("renterProfile.houseGallery.nextPhotoAria")}
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i + 1) % HOUSE_PHOTOS.length));
            }}
          >
            ›
          </LightboxNav>
          <LightboxCounter>
            {openIndex + 1} / {HOUSE_PHOTOS.length}
          </LightboxCounter>
        </LightboxOverlay>
      )}
    </>
  );
}
