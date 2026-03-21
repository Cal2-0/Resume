import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticDock from "./ui/MagneticDock";
import Button from "./ui/Button";

// Lazy load the shader to prevent blocking initial render
const Dithering = lazy(() => import("@paper-design/shaders-react").then(mod => ({ default: mod.Dithering })));

const collageImages = [
  "/assets/photos/portrait.jpg",
  "/assets/photos/place1.jpg",
  "/assets/photos/place2.jpg",
  "/assets/photos/team.jpg",
  "/assets/photos/campus.jpg",
];

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 overflow-hidden bg-black" id="hero">
      {/* Background Dithering - Orange/Amber theme */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#d4512a] opacity-10" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
          <Dithering
            colorBack="#00000000"
            colorFront="#d4512a" // Deep Orange/Amber
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.3 : 0.12}
            className="w-full h-full scale-110"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div
        className="w-full max-w-7xl pt-20 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-20">
          
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-8 leading-[0.9]" style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif", fontWeight: "300" }}>
            Hi, I'm <br />
            <span style={{ color: "#e8622a", fontStyle: "italic", fontWeight: "400" }}>Calvin.</span>
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-light">
            I craft elevated digital experiences that bridge the gap between technical precision and artistic vision.
            Interfaces that don't just work — they feel alive.
          </p>

          <div className="mb-12">
            <MagneticDock />
          </div>

          <a href="#projects">
            <Button
              id="watch-trailer"
              title="Let's Build Together"
              rightIcon={
                <svg
                  className="h-5 w-5 ml-2 mt-[2px] relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
              containerClass="bg-orange-600 text-white shadow-[0_4px_30px_rgba(212,81,42,0.4)] flex items-center justify-center hover:bg-orange-500"
            />
          </a>
        </div>

        {/* Right Side: Mosaic Collage */}
        <div className="flex-1 relative w-full aspect-square max-w-[500px] md:max-w-none z-10 hidden md:block">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-full w-full">
            {/* Main Center Image */}
            <motion.div
              animate={{ rotate: isHovered ? -2 : 0, scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="col-span-4 row-span-4 relative rounded-2xl overflow-hidden shadow-2xl z-20"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img src={collageImages[0]} alt="Calvin" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>

            {/* Collage Pieces */}
            <motion.div
              animate={{ y: isHovered ? -15 : 0, rotate: isHovered ? 5 : 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="col-start-5 col-span-2 row-start-1 row-span-3 relative rounded-2xl overflow-hidden shadow-xl z-10"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <img src={collageImages[1]} alt="Detail 1" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ x: isHovered ? 15 : 0, rotate: isHovered ? -5 : -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="col-start-5 col-span-2 row-start-4 row-span-3 relative rounded-2xl overflow-hidden shadow-xl z-20"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <img src={collageImages[2]} alt="Detail 2" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ y: isHovered ? 15 : 0, x: isHovered ? -10 : 0, rotate: isHovered ? -2 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="col-start-1 col-span-2 row-start-5 row-span-2 relative rounded-2xl overflow-hidden shadow-xl z-30"
              style={{ border: "1px solid rgba(255,255,255,0.05)", marginTop: "-40%" }}
            >
              <img src={collageImages[3]} alt="Detail 3" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="col-start-3 col-span-2 row-start-5 row-span-2 relative rounded-2xl overflow-hidden shadow-xl z-40"
              style={{ border: "1px solid rgba(255,255,255,0.05)", marginTop: "-20%", marginLeft: "-10%" }}
            >
              <img src={collageImages[4]} alt="Detail 4" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Subtle glow effect behind mosaic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#d4512a] blur-[120px] rounded-full z-[-1] pointer-events-none opacity-20" />
        </div>
      </div>

      <h1 className="absolute bottom-5 right-5 text-[6rem] md:text-[10rem] font-black pointer-events-none select-none overflow-hidden uppercase opacity-[0.03] text-white/50 tracking-tighter mix-blend-overlay">
        ENGINEERI<b>N</b>G
      </h1>
    </section>
  );
};

export default Hero;
