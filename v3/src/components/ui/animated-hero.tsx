"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

function Hero() {
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

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <SmokeBackground className="absolute inset-0 z-0 opacity-[0.85]" smokeColor="#8A2BE2" />
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 rounded-full border border-cyan-400/20">
              <ShieldCheck className="w-4 h-4" /> Securing the Future
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-white">Bridging the gap safely</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-cyan-500">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-zinc-400 max-w-2xl text-center">
              I am a developer who bridges the gap between Offensive Security and User Experience.
              My work focuses on AI-driven diagnostics, enterprise logistics, and cryptographic puzzles.
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <Button size="lg" className="gap-4 border-zinc-700 text-zinc-300 hover:text-white" variant="outline" asChild>
              <a href="#projects">View Projects <Cpu className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" className="gap-4 bg-cyan-600 hover:bg-cyan-700 text-white" asChild>
              <a href="#contact">Hire Me <MoveRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
