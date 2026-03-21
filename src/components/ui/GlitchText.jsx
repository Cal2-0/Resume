// GlitchText.jsx — ported from Resume-main v3 (TypeScript → JavaScript)
import React, { useState } from "react";

export function GlitchText({ text, className, as: Component = "span" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      className={`relative inline-block cursor-default ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 ${isHovered ? "invisible" : ""}`}>{text}</span>

      {isHovered && (
        <span className="absolute inset-0 z-10 flex">
          <span
            className="absolute inset-0 block opacity-70"
            style={{
              color: "#0ff",
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              animation: "glitch1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite",
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 block z-20 text-white"
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 55%, 0 55%)",
              transform: "translate(-2px, 2px)",
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 block opacity-70"
            style={{
              color: "#f0f",
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              animation: "glitch2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse",
            }}
          >
            {text}
          </span>
        </span>
      )}
    </Component>
  );
}

export default GlitchText;
