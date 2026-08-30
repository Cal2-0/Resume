"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Code, Cpu, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Customizing cardData for "Technical Arsenal"
const cardData = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Orchestrating complex LLM pipelines, RAG architectures, and multimodal generations using OpenAI, OpenRouter, ElevenLabs, and localized inference models for dynamic structured outputs.",
    color: "rgba(6, 182, 212, 0.8)", // Cyan
    icon: <Brain className="w-12 h-12 text-cyan-400 mb-6" />
  },
  {
    id: 2,
    title: "Full-Stack Web Engineering",
    description: "Architecting high-performance web applications utilizing Next.js, React, TailwindCSS, Python, and Flask. Focusing on extremely premium user experiences and robust, scalable backends.",
    color: "rgba(249, 115, 22, 0.8)", // Orange
    icon: <Code className="w-12 h-12 text-orange-400 mb-6" />
  },
  {
    id: 3,
    title: "Systems & Cloud Infrastructure",
    description: "Designing modular, highly available architectures capable of rapid document processing, asynchronous data pipelines, and distributed analytics processing for enterprise-grade applications.",
    color: "rgba(168, 85, 247, 0.8)", // Purple
    icon: <Cpu className="w-12 h-12 text-purple-400 mb-6" />
  },
  {
    id: 4,
    title: "Offensive Security & Diagnostics",
    description: "Bridging the gap between UI and deep systems. Conducting intricate system security diagnostics, network intelligence, and applying cryptographic principles into robust environments.",
    color: "rgba(239, 68, 68, 0.8)", // Red
    icon: <Shield className="w-12 h-12 text-red-400 mb-6" />
  },
  {
    id: 5,
    title: "Rapid Deployment & Prototyping",
    description: "Turning complex abstract concepts into massive, production-ready MVPs within hours under hackathon conditions. Maximizing velocity without sacrificing architectural integrity.",
    color: "rgba(34, 197, 94, 0.8)", // Green
    icon: <Zap className="w-12 h-12 text-green-400 mb-6" />
  }
];

interface CardProps {
  id: number;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, index, totalCards, color, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top"
    });

    // Create scroll trigger for stacking effect
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0
      }}
    >
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '800px',
          height: '500px',
          borderRadius: '24px',
          isolation: 'isolate',
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: 'top'
        }}
        className="card-content"
      >
        {/* Electric Border Effect */}
        <div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '27px',
            padding: '3px',
            background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${color} 60deg,
                            ${color.replace('0.8', '0.6')} 120deg,
                            transparent 180deg,
                            ${color.replace('0.8', '0.4')} 240deg,
                            transparent 360deg
                        )`,
            zIndex: -1
          }}
        />

        {/* Main Card Content */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '3rem',
          borderRadius: '24px',
          background: `
                        linear-gradient(145deg, 
                            rgba(255, 255, 255, 0.08), 
                            rgba(255, 255, 255, 0.02)
                        )
                    `,
          backdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        0 2px 8px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                    `,
          overflow: 'hidden'
        }}>

          <div className="relative z-10 flex flex-col items-center">
            {icon}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* Enhanced Glass reflection overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
            pointerEvents: 'none',
            borderRadius: '24px 24px 0 0'
          }} />

          {/* Glass shine effect */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            borderRadius: '1px',
            pointerEvents: 'none'
          }} />

          {/* Side glass reflection */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
            borderRadius: '24px 0 0 24px',
            pointerEvents: 'none'
          }} />

          {/* Frosted glass texture */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 1px, transparent 2px),
                            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.03) 1px, transparent 2px)
                        `,
            backgroundSize: '30px 30px, 25px 25px, 35px 35px',
            pointerEvents: 'none',
            borderRadius: '24px',
            opacity: 0.8
          }} />
        </div>
      </div>
    </div>
  );
};

export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="bg-black relative overflow-hidden" id="expertise">
      {/* Header Section for Technical Arsenal */}
      <section style={{
        height: '40vh',
        width: '100%',
        display: 'grid',
        placeContent: 'center',
        position: 'relative',
        color: '#ffffff'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
                        linear-gradient(to right, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                    `,
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 100%)'
        }} />
        <h1 className="text-4xl md:text-8xl font-bold text-center leading-tight z-10 font-heading">
          My Technical <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Arsenal
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl mt-6 text-center max-w-2xl mx-auto z-10 font-light">
          Scroll down to explore the technologies, patterns, and methodologies that power my work.
        </p>
      </section>

      {/* GSAP Sticky Cards Section */}
      <section style={{
        color: '#ffffff',
        width: '100%'
      }}>
        {cardData.map((card, index) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              index={index}
              totalCards={cardData.length}
              color={card.color}
              icon={card.icon}
            />
          );
        })}
      </section>
    </div>
  );
};
