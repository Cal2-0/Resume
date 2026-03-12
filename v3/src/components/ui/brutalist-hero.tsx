"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Terminal, ArrowRight, Activity } from "lucide-react";

export function BrutalistHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      // Max rotation 5 degrees as requested
      const x = ((e.clientX / innerWidth) - 0.5) * 10;
      const y = ((e.clientY / innerHeight) - 0.5) * -10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#020205] text-[#f0f0f0] flex items-center justify-center pt-20"
      style={{
        perspective: '1200px'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .hacker-bg-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 204, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 204, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center center;
          transform: rotateX(70deg) translateY(-100px) translateZ(-300px);
          transform-origin: top center;
          pointer-events: none;
        }

        .hacker-radial {
          background: radial-gradient(circle at center, rgba(0, 255, 204, 0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .hacker-glass {
          background: rgba(10, 20, 20, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 255, 204, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
          transition: transform 0.1s ease-out, box-shadow 0.3s;
        }
        
        .hacker-glass:hover {
          box-shadow: 0 10px 30px rgba(0, 255, 204, 0.4);
        }

        .font-barlow { font-family: 'Barlow Condensed', sans-serif; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px #00ffcc;
        }

        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1));
          background-size: 100% 4px;
          pointer-events: none;
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .glitch-text {
          position: relative;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 red;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 4s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 blue;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 3.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0%, 95% { clip: rect(0,0,0,0); }
          96% { clip: rect(13px, 9999px, 94px, 0); }
          97% { clip: rect(86px, 9999px, 14px, 0); }
          98% { clip: rect(32px, 9999px, 83px, 0); }
          99% { clip: rect(11px, 9999px, 54px, 0); }
          100% { clip: rect(61px, 9999px, 21px, 0); }
        }
        @keyframes glitch-anim-2 {
          0%, 95% { clip: rect(0,0,0,0); }
          96% { clip: rect(65px, 9999px, 100px, 0); }
          97% { clip: rect(52px, 9999px, 74px, 0); }
          98% { clip: rect(79px, 9999px, 85px, 0); }
          99% { clip: rect(75px, 9999px, 5px, 0); }
          100% { clip: rect(67px, 9999px, 61px, 0); }
        }

        .float-particle {
          animation: floatUp 15s infinite linear;
        }

        @keyframes floatUp {
          0%   { transform: translateY(100vh) scale(0); opacity: 0; }
          10%  { opacity: 0.4; scale: 1; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-20vh) scale(0.5); opacity: 0; }
        }

        /* Initial Load Animations */
        .reveal-bg { animation: fadeIn 2s ease-out forwards; }
        .reveal-card-1 { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; opacity: 0; }
        .reveal-card-2 { animation: slideLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards; opacity: 0; }
        .reveal-card-3 { animation: slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards; opacity: 0; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideRight { from { opacity: 0; transform: translateZ(-300px) translateX(-100px); } to { opacity: 1; transform: translateZ(-150px) translateX(-20px) rotateY(15deg) rotateX(5deg); } }
        @keyframes slideLeft { from { opacity: 0; transform: translateZ(-100px) translateX(100px); } to { opacity: 1; transform: translateZ(50px) translateX(30px) rotateY(-15deg) rotateX(-5deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateZ(50px) translateY(100px); } to { opacity: 1; transform: translateZ(150px) translateY(20px) rotateY(20deg); } }
        
        /* Mobile override */
        @media (max-width: 1024px) {
          .reveal-card-1, .reveal-card-2, .reveal-card-3 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            position: relative !important;
            top: auto !important; left: auto !important; right: auto !important; bottom: auto !important;
            margin: 1rem auto;
          }
          .mobile-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}} />

      {/* Ambient Backgrounds */}
      <div className="absolute inset-0 z-0 noise-overlay reveal-bg"></div>
      <div className="absolute inset-0 z-0 hacker-bg-grid reveal-bg" style={{ transform: `rotateX(70deg) translateY(-100px) translateZ(-300px) rotateY(${mousePos.x * 0.1}deg)` }}></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full hacker-radial blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse slow reveal-bg"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full hacker-radial blur-3xl translate-x-1/2 translate-y-1/2 reveal-bg"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full hacker-radial blur-3xl -translate-x-1/2 -translate-y-1/2 reveal-bg"></div>

      {/* Scanlines overlays */}
      <div className="absolute inset-0 z-50 scanlines opacity-30 reveal-bg"></div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 reveal-bg">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00ffcc] opacity-40 float-particle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 15 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      {/* Hero Content Wrapper with Perspective Shift */}
      <div
        className="container mx-auto relative z-10 flex flex-col items-center justify-center w-full h-full transform-gpu transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
        }}
      >
        {/* Badge */}
        <div className="absolute top-0 md:-top-10 flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#00ffcc]/40 bg-[#00ffcc]/10 text-[#00ffcc] font-mono-code text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,204,0.3)] animate-pulse will-change-transform z-30" style={{ transform: 'translateZ(100px)' }}>
          <ShieldCheck className="w-3.5 h-3.5" /> Securing the Future
        </div>

        {/* 3D Floating Glass Cards */}
        {/* Card 1: Recon */}
        <div
          className="reveal-card-1 absolute top-1/4 left-4 xl:-left-12 flex flex-col w-64 p-4 rounded-xl hacker-glass will-change-transform z-20"
        >
          <div className="flex justify-between items-center border-b border-[#00ffcc]/20 pb-2 mb-3">
            <span className="font-mono-code text-[#00ffcc] text-xs font-bold">RECON.exe</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
          </div>
          <div className="font-mono-code text-[11px] leading-relaxed text-[#f0f0f0]">
            <p className="text-[#00ffcc] opacity-80">{'>'} init target mapping</p>
            <p className="animate-pulse">{'>'} scanning open ports...</p>
            <p className="opacity-60">{'>'} [80]  open  http</p>
            <p className="opacity-60">{'>'} [443] open  https</p>
            <p className="opacity-60">{'>'} [22]  filtered ssh</p>
          </div>
        </div>

        {/* Typography Core */}
        <div className="flex flex-col items-center z-20 mt-20 md:mt-0 mobile-stack" style={{ transform: 'translateZ(20px)' }}>
          <h1 className="font-barlow flex flex-col items-center leading-[0.85] select-none text-center">
            <span className="text-7xl md:text-[9rem] lg:text-[12rem] font-thin tracking-tighter text-[#f0f0f0]">BRIDGING</span>
            <span className="-mt-2 md:-mt-8 lg:-mt-12 text-7xl md:text-[9rem] lg:text-[12rem] font-extrabold tracking-tight text-outline">THE GAP</span>
            <span
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold italic text-[#00ffcc] tracking-wide mt-2 md:mt-4 glitch-text drop-shadow-[0_0_20px_rgba(0,255,204,0.4)]"
              data-text="SECURE."
            >
              SECURE.
            </span>
          </h1>
          <p className="mt-8 font-mono-code text-sm md:text-base text-[#a0a0a0] max-w-xl text-center leading-relaxed p-4 rounded-lg bg-black/20 backdrop-blur border border-white/5">
            I am Calvin Jude Dsouza, a developer focused on the intersection of Offensive Security and elegant User Experience.
          </p>
        </div>

        {/* Card 2: Threat Surface */}
        <div
          className="reveal-card-2 absolute top-1/3 right-4 xl:-right-24 flex flex-col w-72 p-5 rounded-xl hacker-glass will-change-transform z-30"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity className="text-[#00ffcc] w-5 h-5" />
            <h3 className="font-barlow text-xl tracking-widest uppercase text-[#f0f0f0]">Threat Surface</h3>
          </div>
          <div className="space-y-4 font-mono-code text-xs">
            <div>
              <div className="flex justify-between mb-1.5 text-[#a0a0a0]"><span>Vulnerability Score</span> <span className="text-[#00ffcc]">Low (1.2)</span></div>
              <div className="w-full bg-[#020205] border border-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#00ffcc] shadow-[0_0_10px_rgba(0,255,204,0.8)] h-full w-[15%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5 text-[#a0a0a0]"><span>Encryption Diff</span> <span className="text-[#f0f0f0]">Optimal</span></div>
              <div className="w-full bg-[#020205] border border-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#f0f0f0] h-full w-[85%]"></div></div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#00ffcc]/20 flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 shadow-[0_0_10px_rgba(0,255,204,0.2)]">Pentest</span>
              <span className="px-2 py-1 rounded bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 shadow-[0_0_10px_rgba(0,255,204,0.2)]">Zero-Day</span>
              <span className="px-2 py-1 rounded bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30 shadow-[0_0_10px_rgba(0,255,204,0.2)]">Crypto</span>
            </div>
          </div>
        </div>

        {/* Card 3: Connection Status */}
        <div
          className="reveal-card-3 absolute bottom-32 left-8 xl:left-4 flex flex-col w-56 p-4 rounded-xl hacker-glass will-change-transform z-40"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ffcc]"></span>
            </div>
            <span className="font-mono-code text-[12px] text-[#f0f0f0]">Connection Established</span>
          </div>
          <p className="font-mono-code text-[10px] text-[#0a7a6a] mt-1.5 ml-6">Latency: 12ms | Encrypted</p>
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col sm:flex-row gap-6 mt-16 z-50 mb-10 md:mb-0" style={{ transform: 'translateZ(80px)' }}>
          <a href="#projects" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#020205]/80 backdrop-blur-md border border-[#00ffcc]/40 text-[#00ffcc] font-mono-code font-bold uppercase tracking-wider overflow-hidden rounded hover:border-[#00ffcc] transition-colors shadow-[0_0_15px_rgba(0,255,204,0.1)]">
            {/* Scanline hover glitch */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-[linear-gradient(to_bottom,transparent,rgba(0,255,204,0.2),transparent)] bg-[length:100%_4px] group-hover:animate-pulse transition-all"></div>
            <Terminal className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View Projects</span>
          </a>

          <a href="#contact" className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#00ffcc] text-[#020205] border border-[#00ffcc] font-mono-code font-bold uppercase tracking-wider rounded hover:bg-[#00e6b8] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,204,0.6)] transition-all duration-300">
            <span>Contact Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}
