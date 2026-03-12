'use client'
import { ArrowRight, Sparkles } from "lucide-react"
import { useState, Suspense, lazy } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import MagneticDock from "@/components/ui/magnetic-dock"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

const collageImages = [
  '/images/pics2/Calvin Dsouza - Class CR.JPG',
  '/images/pics2/IMG_20260124_115046.jpg',
  '/images/pics2/IMG_20251031_130317.jpg',
  '/images/pics2/IMG_20250905_182713.jpg',
  '/images/pics2/23323.jpeg',
]

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center p-4 md:p-8 bg-black overflow-hidden">
      {/* Background Dithering - Orange/Amber theme */}
      <Suspense fallback={<div className="absolute inset-0 bg-orange-950/20" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen overflow-hidden">
          <Dithering
            colorBack="#00000000"
            colorFront="#EC4E02" // Deep Orange/Amber
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.3 : 0.12}
            className="size-full scale-110"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div
        className="w-full max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            Developer & Bespoke Designer
          </motion.div>

          {/* Headline - "Hi I'm Calvin" */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
            Hi, I&apos;m <br />
            <span className="text-orange-500 italic">Calvin.</span>
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-2xl max-w-xl mb-8 leading-relaxed font-light">
            I craft elevated digital experiences that bridge the gap between technical precision and artistic vision.
            Interfaces that don&apos;t just work — they feel alive.
          </p>

          <div className="mb-12">
            <MagneticDock className="!py-0 !items-start md:!items-start" />
          </div>

          {/* Button */}
          <button className="group relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-orange-500 px-12 text-lg font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 active:scale-95 hover:ring-8 hover:ring-orange-500/20 shadow-[0_0_30px_rgba(236,78,2,0.3)]">
            <span className="relative z-10">Let&apos;s Build Together</span>
            <ArrowRight className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Side: Mosaic Collage */}
        <div className="flex-1 relative w-full aspect-square max-w-[500px] md:max-w-none">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-full w-full">
            {/* Main Center Image */}
            <motion.div
              animate={{ rotate: isHovered ? -2 : 0, scale: isHovered ? 1.05 : 1 }}
              className="col-span-4 row-span-4 relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image src={collageImages[0]} alt="Calvin" fill className="object-cover" />
            </motion.div>

            {/* Collage Pieces */}
            <motion.div
              animate={{ y: isHovered ? -15 : 0, rotate: isHovered ? 5 : 2 }}
              className="col-start-5 col-span-2 row-start-1 row-span-3 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <Image src={collageImages[1]} alt="Calvin Detail" fill className="object-cover" />
            </motion.div>

            <motion.div
              animate={{ x: isHovered ? 15 : 0, rotate: isHovered ? -5 : -3 }}
              className="col-start-5 col-span-2 row-start-4 row-span-3 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <Image src={collageImages[2]} alt="Calvin Work" fill className="object-cover" />
            </motion.div>

            <motion.div
              animate={{ y: isHovered ? 15 : 0, x: isHovered ? -10 : 0 }}
              className="col-start-1 col-span-2 row-start-5 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <Image src={collageImages[3]} alt="Calvin Project" fill className="object-cover" />
            </motion.div>

            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 3 : 0 }}
              className="col-start-3 col-span-2 row-start-5 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <Image src={collageImages[4]} alt="Calvin Context" fill className="object-cover" />
            </motion.div>
          </div>

          {/* Subtle glow effects */}
          <div className="absolute -inset-10 bg-orange-500/10 blur-[100px] rounded-full z-[-1] pointer-events-none opacity-50" />
        </div>

      </div>
    </section>
  )
}
