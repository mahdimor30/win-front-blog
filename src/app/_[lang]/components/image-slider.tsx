"use client";
import "react-slideshow-image/dist/styles.css";

import Image from "next/image";
import { Fade } from "react-slideshow-image";

import { type components } from "@/api/strapi";

import { getStrapiMedia } from "../utils/api-helpers";

type SlideShowProps = components["schemas"]["SharedSliderComponent"];

export default function Slideshow({ files }: SlideShowProps) {
  return (
    <div className="slide-container">
      <Fade arrows={true} duration={3000} pauseOnHover={true}>
        {files?.map((fadeImage, index) => {
          const imageUrl = getStrapiMedia(fadeImage?.url ?? null);
          return (
            <div key={fadeImage.id ?? index} className="relative h-96 w-full">
              {imageUrl && (
                <Image
                  className="rounded-lg object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  priority={index === 0}
                  alt={fadeImage.caption ?? "Slide image"}
                  src={imageUrl}
                />
              )}
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
