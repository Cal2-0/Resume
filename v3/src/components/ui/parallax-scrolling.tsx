'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { motion } from "framer-motion";
import { MoveRight, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Framer Motion Text Logic
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["secure", "elegant", "advanced", "powerful", "intelligent"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // GSAP Single Layer Parallax Logic
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = parallaxRef.current;

    if (container) {
      const bgImage = container.querySelector('.hd-parallax-bg');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      // Simple, elegant 50% slow-scroll translation on the massive background image
      tl.to(bgImage, {
        yPercent: 50,
        ease: "none"
      });
    }

    const lenis = new Lenis();
    let rAFId: number;
    function raf(time: number) {
      lenis.raf(time);
      rAFId = requestAnimationFrame(raf);
    }
    rAFId = requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (container) {
        gsap.killTweensOf(container);
      }
      cancelAnimationFrame(rAFId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center pt-20" ref={parallaxRef}>

      {/* Massive HD Parallax Background */}
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        alt="HD Cyber Texture"
        className="hd-parallax-bg absolute top-[-50%] left-0 w-full h-[200%] object-cover object-center opacity-30 z-0 pointer-events-none"
      />

      {/* Dark fade gradient at the bottom to transition smoothly into the experience section */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Hero Content Layer */}
      <div className="container mx-auto relative z-20 px-6">
        <div className="flex gap-8 py-20 items-center justify-center flex-col">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button variant="secondary" size="sm" className="gap-4 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <ShieldCheck className="w-4 h-4" /> Securing the Future
            </Button>
          </motion.div>

          <div className="flex gap-4 flex-col text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter font-heading text-white drop-shadow-2xl">
              <span>Bridging the gap</span><br />
              <span className="relative flex w-full justify-center overflow-hiddentext-center pt-1 text-cyan-500 h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? "-150%" : "150%",
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-zinc-300 max-w-2xl mx-auto mt-6"
            >
              I am Calvin Jude Dsouza, a developer focused on the intersection of Offensive Security and elegant User Experience. My work spans AI-driven diagnostics, enterprise logistics, and cryptographic systems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" className="gap-4 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors" variant="outline" asChild>
              <a href="#projects">View Projects <Cpu className="w-4 h-4" /></a>
            </Button>

            {/* Direct Link to the Magnetic Dock Contact Section */}
            <Button size="lg" className="gap-4 bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all" asChild>
              <a href="#contact">Contact Details <MoveRight className="w-4 h-4" /></a>
            </Button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
