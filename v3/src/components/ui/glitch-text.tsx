"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function GlitchText({ text, className, as: Component = "span" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      className={cn("relative inline-block cursor-default", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={cn("relative z-10", isHovered && "invisible")}>{text}</span>
      
      {isHovered && (
        <span className="absolute inset-0 z-10 flex">
          <span
            className="absolute inset-0 text-[#0ff] block opacity-70 animate-glitch-1"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-white block z-20"
            style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 55%, 0 55%)", transform: "translate(-2px, 2px)" }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-[#f0f] block opacity-70 animate-glitch-2"
            style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
          >
            {text}
          </span>
        </span>
      )}

      <style jsx>{`
        @keyframes glitch-1 {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0) }
          20% { transform: translate(2px, -2px) }
          40% { transform: translate(2px, 2px) }
          60% { transform: translate(-2px, -2px) }
          80% { transform: translate(-2px, 2px) }
          100% { transform: translate(0) }
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse;
        }
      `}</style>
    </Component>
  );
}
