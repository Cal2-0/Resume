"use client";
import React, { useState, useEffect } from "react";
import { Cpu, Server, Shield, Database, Layout, Lock, Terminal, Activity, Focus, Hexagon, Code, ScanFace } from "lucide-react";

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.9, 1000);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
        ? Math.max(28, baseWidth * 0.06)
        : Math.max(36, baseWidth * 0.07);

  const skillSets = [
    [{ icon: Shield, label: "OffSec" }, { icon: Lock, label: "Crypto" }, { icon: Hexagon, label: "Nmap" }, { icon: Activity, label: "OuchMyBrain" }, { icon: ScanFace, label: "NeuroMetric" }, { icon: Shield, label: "VisionEX" }],
    [{ icon: Code, label: "Python/JS" }, { icon: Layout, label: "React/Next" }, { icon: Terminal, label: "Bash" }, { icon: Database, label: "SQL" }, { icon: Server, label: "Flask" }, { icon: Focus, label: "YOLOv8" }, { icon: Cpu, label: "TensorFlow" }, { icon: Layout, label: "Tailwind" }],
    [{ icon: Database, label: "IMS Enterprise" }, { icon: Layout, label: "Figma" }, { icon: Focus, label: "Computer Vision" }, { icon: Lock, label: "Cipher Hub" }, { icon: Terminal, label: "Git" }, { icon: Shield, label: "Linux" }, { icon: Code, label: "MassEd.ex" }, { icon: Activity, label: "VibeAlchemy" }, { icon: Server, label: "Render" }, { icon: Layout, label: "Chrome Extension" }]
  ];

  return (
    <section className="py-24 relative min-h-[60vh] w-full overflow-hidden flex flex-col items-center">
      <div className="relative flex flex-col items-center text-center z-10 w-full max-w-5xl mx-auto">
        <h2 className="my-6 text-3xl font-bold lg:text-5xl text-white">The Tech Stack</h2>
        <p className="mb-20 max-w-2xl text-zinc-400 lg:text-xl px-4">
          Core technologies, frameworks, and AI-driven tools that power &quot;MNC-Grade&quot; Systems.
        </p>

        <div
          className="relative flex justify-center w-full"
          style={{ height: baseWidth * 0.6 }}
        >
          {/* Inner Orbit (6) */}
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} items={skillSets[0]} iconSize={iconSize} />
          {/* Middle Orbit (8) */}
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} items={skillSets[1]} iconSize={iconSize} />
          {/* Outer Orbit (10) */}
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} items={skillSets[2]} iconSize={iconSize} />
        </div>
      </div>
    </section>
  );
}

function SemiCircleOrbit({ radius, centerX, centerY, items, iconSize }: any) {
  return (
    <div className="absolute" style={{ width: centerX * 2, height: centerY * 2 }}>
      {/* Semi-circle glow background */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div
          className="
            w-[100%] aspect-square rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_60%)]
            blur-3xl pointer-events-none -mb-[50%]
          "
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute bottom-0 w-[100%] h-[100%] rounded-full border border-cyan-500/10 pointer-events-none"
          style={{ zIndex: 0, clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
        />
      </div>

      {/* Orbit icons */}
      {items.map((item: any, index: number) => {
        const count = items.length;
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const IconCmp = item.icon;

        // Tooltip positioning
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-cyan-500 transition-all hover:scale-110 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
              style={{ width: iconSize, height: iconSize }}
            >
              <IconCmp size={iconSize * 0.5} strokeWidth={1.5} />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
                } hidden group-hover:block w-32 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 shadow-xl text-center z-50`}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
