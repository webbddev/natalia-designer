"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useTranslations } from "next-intl";

// Styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-photo-album/styles.css";
import "react-photo-album/rows.css";

type GalleryProps = {
  gallery: {
    images: {
      src: any;
      original: any;
      width: number;
      height: number;
      alt?: string;
    }[];
  };
};

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  const imageSrc: string | StaticImageData =
    typeof photo === "string"
      ? photo
      : (photo?.src as string | StaticImageData) ||
        (typeof photo === "object" && "default" in photo
          ? (photo.default as string | StaticImageData)
          : "");

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={imageSrc}
        alt={alt}
        title={title}
        sizes={sizes}
        style={{
          objectFit: "cover", // This prevents stretching
        }}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

// Helper function to extract string URL from various image source types
const getImageUrl = (imageSource: any): string => {
  if (typeof imageSource === "string") {
    return imageSource;
  }

  if (imageSource && typeof imageSource === "object") {
    // Handle StaticImageData objects
    if (imageSource.src) {
      return imageSource.src;
    }
    // Handle default exports
    if (imageSource.default) {
      return typeof imageSource.default === "string"
        ? imageSource.default
        : imageSource.default.src;
    }
  }

  return "";
};

const ProjectGallery = ({ gallery }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);

  // Use translations
  const t = useTranslations("gallery");

  const { images } = gallery;

  const photos = images.map(({ src, original, width, height }, index) => ({
    key:
      typeof original === "string"
        ? original
        : original?.src || `photo-${index}`,
    src,
    original,
    width,
    height,
  }));

  const handleImageClick = ({ index }: { index: number }) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for lightbox with properly extracted URLs
  const lightboxSlides = images.map(({ original, alt }) => ({
    src: getImageUrl(original),
    alt: alt || "",
  }));

  return (
    <section className="pt-0 pb-4 lg:py-12">
      <div className="container mx-auto pl-0">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-12 font-bold"
        >
          {t("title")}
        </motion.h2>
      </div>

      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-8 lg:mb-12"
      >
        <RowsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          onClick={handleImageClick}
        />

        <Lightbox
          open={lightboxOpen}
          slides={lightboxSlides}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          }}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          plugins={[Slideshow, Thumbnails, Zoom]}
          render={{
            slide: ({ slide }) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  padding: "5px",
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    maxHeight: "min(2546px, 100%)",
                    maxWidth: "min(840px, 100%)",
                    transform: "translateZ(0px)",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ),
          }}
        />
      </motion.div>
    </section>
  );
};

export default ProjectGallery;
