"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Utility ---
// function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;  // Reduced from 100
const IMG_HEIGHT = 85; // Reduced from 140

function FlipCard({
  src,
  index,
  total,
  phase,
  target,
}: FlipCardProps) {
  return (
    <motion.div
      // Smoothly animate to the coordinates defined by the parent
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}

      // Initial style
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d", // Essential for the 3D hover effect
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180, scale: 2, zIndex: 50 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest mb-1">View</p>
            <p className="text-[10px] font-medium text-white break-words w-full px-1 truncate">Memoir</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Main Hero Component ---

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

const TOTAL_IMAGES = IMAGES.length;
const MAX_SCROLL = 5000; // Increased virtual scroll range to account for 34 items

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Container Size ---
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    // Initial set
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  // --- Virtual Scroll Logic ---
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0); // Keep track of scroll value without re-renders

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent default to stop browser overscroll/bounce
      e.preventDefault();

      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    // Touch support
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    // Attach listeners to container instead of window for portability
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
  // Happens between scroll 0 and 600
  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  // 2. Scroll Rotation (Shuffling): Starts after morph (e.g., > 600)
  // Rotates the bottom arc as user continues scrolling
  const scrollRotate = useTransform(virtualScroll, [600, MAX_SCROLL], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // --- Mouse Parallax ---
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;

      // Normalize -1 to 1
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      // Move +/- 100px
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // --- Intro Sequence ---
  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  // --- Random Scatter Positions ---
  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  // --- Render Loop (Manual Calculation for Morph) ---
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  // --- Content Opacity ---
  // Fade in content when arc is formed (morphValue > 0.8)
  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black overflow-hidden flex flex-col justify-center items-center py-40 border-t border-zinc-900 z-20">
      {/* Container */}
      <div className="flex w-full flex-col items-center justify-center [perspective:1000px] h-screen">

        {/* Intro Text (Fades out) */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold tracking-tight text-white md:text-6xl font-heading"
          >
            A Visual History.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Arc Active Content (Fades in) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 font-heading">
            Memoirs <span className="text-cyan-500">&</span> More
          </h2>
          <p className="text-sm md:text-lg text-zinc-400 max-w-xl leading-relaxed">
            A massive collection of everything built, hacked, and discovered. <br className="hidden md:block" />
            Scroll to orbit the gallery of pictures. Hover any card!
          </p>
        </motion.div>

        {/* Main Container */}
        <div className="relative flex items-center justify-center w-full h-[600px] mt-24">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            // 1. Intro Phases (Scatter -> Line)
            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 30; // Adjusted for 34 items length to fit
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              // 2. Circle Phase & Morph Logic

              // Responsive Calculations
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              // A. Calculate Circle Position
              const circleRadius = Math.min(minDimension * 0.35, 350);

              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // B. Calculate Bottom Arc Position
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25) - 100; // shifted arc up
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 120 : 160;
              const startAngle = -90 - (spreadAngle / 2);
              const step = spreadAngle / (TOTAL_IMAGES - 1);
              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.9;
              const boundedRotation = -scrollProgress * maxRotation;

              // Prevent images from scrolling completely out of bounds into the void
              // Keep them clustered at the end of the scroll
              let finalArcAngle = startAngle + (i * step) + boundedRotation;

              // Optional clamp to prevent them from slipping too far right/left
              // This creates the "stable" stop the user asked for.
              const maxVisibleAngle = 180; // Bound limit
              if (finalArcAngle < startAngle - maxVisibleAngle) {
                finalArcAngle = startAngle - maxVisibleAngle + (i * 2); // Stack them slightly
              }

              const arcRad = (finalArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: finalArcAngle + 90,
                scale: isMobile ? 1.4 : 2.5, // Even larger scale since it's the main attraction
              };

              // C. Interpolate (Morph)
              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
