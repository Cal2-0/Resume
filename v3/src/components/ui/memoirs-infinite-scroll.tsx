"use client";
/* eslint-disable @next/next/no-img-element */

import {
  GridBody,
  DraggableContainer,
  GridItem,
} from "@/components/ui/infinite-drag-scroll";

const IMAGES = [
  "/images/pics/1000004107-01.jpeg",
  "/images/pics/1000055256-01.jpeg",
  "/images/pics/23323.jpeg",
  "/images/pics/565140877_18296399431281511_4081138574116327429_n.jpeg",
  "/images/pics/Calvin Dsouza - Class CR.JPG",
  "/images/pics/IMG_20240823_160940.jpg",
  "/images/pics/IMG_20240823_161605.jpg",
  "/images/pics/IMG_20240823_162852.jpg",
  "/images/pics/IMG_20240923_142951.jpg",
  "/images/pics/IMG_20250228_201719.jpg",
  "/images/pics/IMG_20250301_193951.jpg",
  "/images/pics/IMG_20250301_194225.jpg",
  "/images/pics/IMG_20250301_194747.jpg",
  "/images/pics/IMG_20250326_182130.jpg",
  "/images/pics/IMG_20250830_115313.jpg",
  "/images/pics/IMG_20250830_115706.jpg",
  "/images/pics/IMG_20250905_182713.jpg",
  "/images/pics/IMG_20250905_184237.jpg",
  "/images/pics/IMG_20250910_162512.jpg",
  "/images/pics/IMG_20251002_082837__01.jpg",
  "/images/pics/IMG_20251003_124839.jpg",
  "/images/pics/IMG_20251011_141832.jpg",
  "/images/pics/IMG_20251018_112704__01.jpg",
  "/images/pics/IMG_20251031_122107.jpg",
  "/images/pics/IMG_20251031_130317.jpg",
  "/images/pics/IMG_20251031_165117.jpg",
  "/images/pics/IMG_20251113_144707.jpg",
  "/images/pics/IMG_20251122_001000.jpg",
  "/images/pics/IMG_20251122_001007.jpg",
  "/images/pics/IMG_20260124_112921__01.jpg",
  "/images/pics/IMG_20260124_115046.jpg",
  "/images/pics/IMG_20260308_194542.jpg",
  "/images/pics/Screenshot_2025-10-11-12-21-54-50_1c337646f29875672b5a61192b9010f9.jpg",
  "/images/pics/WhatsApp Image 2026-03-10 at 5.33.26 PM.jpeg"
];

export default function MemoirInfiniteScroll() {
  return (
    <DraggableContainer variant="masonry">
      <GridBody>
        {IMAGES.map((src, index) => (
          <GridItem
            key={index}
            className="relative h-54 w-36 md:h-96 md:w-64"
          >
            <img
              src={src}
              alt={`memoir-${index}`}
              className="pointer-events-none absolute h-full w-full object-cover"
            />
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
}
