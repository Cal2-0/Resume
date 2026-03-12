"use client";

import React, { useState, useEffect, useRef } from "react";

const posts = [
  {
    id: 1,
    title: "MovieEX",
    subtitle: "AI Movie Recommender System",
    category: "Project",
    time: "2 weeks ago",
    likes: 7,
    icon: "🎬",
    accent: "#C84B11",
    excerpt:
      "One of my earliest full projects — an AI-based movie recommender. Worked with TMDB APIs, built a MySQL database, implemented user auth, and explored NLP basics like tokenization, lemmatization, and word embeddings. Flask + vanilla JS on the frontend.",
    tags: ["AI", "MachineLearning", "Flask", "APIs", "StudentProjects"],
  },
  {
    id: 2,
    title: "CalSteg",
    subtitle: "Encryption + Steganography",
    category: "Security",
    time: "2 days ago",
    likes: 6,
    icon: "🔐",
    accent: "#E85D04",
    excerpt:
      "Combined encryption with steganography — encrypt a message first, then embed it into an image. Even after extracting the hidden data, it stays encrypted without the right keys. Layered security, custom encryption logic, concept exploration.",
    tags: ["Cybersecurity", "Encryption", "Steganography", "SecurityConcepts"],
  },
  {
    id: 3,
    title: "Wild Goose Hunt",
    subtitle: "Long-form Puzzle Hunt",
    category: "Project",
    time: "1 month ago",
    likes: 13,
    icon: "🧩",
    accent: "#C84B11",
    excerpt:
      "A long-form online puzzle hunt inspired by Cicada 3301. Hidden ciphers, invisible keystrokes, Instagram steganography, Wikipedia trails, and custom encryption logic. Designed to reward patience, curiosity, and attention to detail.",
    tags: ["PuzzleHunt", "Cryptography", "Steganography", "LearningInPublic"],
  },
  {
    id: 4,
    title: "CalHive",
    subtitle: "Full-Stack Passion Project",
    category: "Build in Public",
    time: "1 month ago",
    likes: 4,
    icon: "🐝",
    accent: "#FF6B35",
    excerpt:
      "CalHive started as a task-planning passion project and taught me more than any tutorial. Deployed a full-stack app, fixed frontend/backend/state bugs, learned when to refactor vs move forward. Still iterating — building real things > polishing imaginary ones.",
    tags: ["BuildInPublic", "FullStackDevelopment", "DeveloperJourney"],
  },
  {
    id: 5,
    title: "CySecK Bootcamp",
    subtitle: "Cybersecurity Week · Mangaluru",
    category: "Event",
    time: "3 months ago",
    likes: 9,
    icon: "🛡️",
    accent: "#C84B11",
    excerpt:
      "A week-long cybersecurity bootcamp at Centre of Excellence for Cybersecurity Karnataka. Filled with learning, hands-on experience, and inspiring connections. Truly an unforgettable step in my cybersecurity journey.",
    tags: ["Cybersecurity", "Learning", "Community", "Karnataka"],
  },
  {
    id: 6,
    title: "MassEd.ex",
    subtitle: "24hr Hackathon · Innovex",
    category: "Hackathon",
    time: "3 months ago",
    likes: 42,
    icon: "⚡",
    accent: "#E85D04",
    excerpt:
      "Built a real-time crowd-safety system in 24 hours at Innovex (NITTE + NSS IT Wing). AI-powered people detection, density heatmaps, and smart event layout planning to prevent stampedes. Intense, bonding, unforgettable.",
    tags: ["Hackathon", "AI", "CrowdSafety", "24HrBuild"],
  },
  {
    id: 7,
    title: "Ethical Hacking Workshop",
    subtitle: "IISc Bangalore · Pravega",
    category: "Workshop",
    time: "3 months ago",
    likes: 23,
    icon: "💻",
    accent: "#C84B11",
    excerpt:
      "Two-day deep dive into Kali Linux, core cybersecurity concepts, phishing, and basic SQL injection — with Ethical Edufabrica at IISc. The phishing activity was hilariously insightful. A clear step forward in my cybersecurity journey.",
    tags: ["EthicalHacking", "KaliLinux", "SQLInjection", "IISc"],
  },
  {
    id: 8,
    title: "Runners-Up · Acethon",
    subtitle: "College Hackathon · ACE Association",
    category: "Achievement",
    time: "4 months ago",
    likes: 22,
    icon: "🏆",
    accent: "#FF6B35",
    excerpt:
      "Our team placed Runners-Up at Acethon! We built 'Ouch My Brain' — an AI and voice-enabled super study companion app designed to make learning smarter, more interactive, and personalized. Can't wait for the next one.",
    tags: ["Hackathon", "AI", "VoiceEnabled", "Achievement"],
  },
];

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const el = document.getElementById("scroll-container");
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return scrollY;
}

function PostCard({ post, index }: { post: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -14;
    setTilt({ x, y });
  };

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        marginBottom: "80px",
        paddingLeft: isLeft ? "0" : "0",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : `translateX(${isLeft ? "-80px" : "80px"}) translateY(40px)`,
        transition: `opacity 0.8s cubic-bezier(0.23,1,0.32,1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.23,1,0.32,1) ${index * 0.1}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
        style={{
          width: "min(520px, 90vw)",
          perspective: "1000px",
          cursor: "default",
        }}
      >
        <div
          style={{
            transform: hovered
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.02)`
              : "rotateX(0deg) rotateY(0deg) scale(1)",
            transition: "transform 0.3s ease",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card */}
          <div
            style={{
              background: hovered
                ? "linear-gradient(145deg, #1a0a00 0%, #120500 50%, #0d0300 100%)"
                : "linear-gradient(145deg, #130600 0%, #0a0200 100%)",
              border: `1px solid ${hovered ? post.accent : "rgba(200,75,17,0.2)"}`,
              borderRadius: "16px",
              padding: "32px",
              boxShadow: hovered
                ? `0 32px 80px rgba(0,0,0,0.8), 0 0 40px ${post.accent}25, inset 0 1px 0 rgba(255,255,255,0.05)`
                : "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grain texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
                borderRadius: "16px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Accent blob */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "160px",
                height: "160px",
                background: `radial-gradient(circle, ${post.accent}18 0%, transparent 70%)`,
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
                transition: "opacity 0.3s",
                opacity: hovered ? 1 : 0.5,
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "3px",
                      color: post.accent,
                      fontFamily: "'Courier New', monospace",
                      marginBottom: "4px",
                      fontWeight: 600,
                    }}
                  >
                    {post.category.toUpperCase()} · {post.time.toUpperCase()}
                  </div>
                  <div style={{ fontSize: "28px" }}>{post.icon}</div>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: "'Courier New', monospace",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  👍 {post.likes}
                </div>
              </div>

              {/* Title */}
              <h2
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "'Georgia', serif",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.1,
                }}
              >
                {post.title}
              </h2>
              <div
                style={{
                  fontSize: "13px",
                  color: post.accent,
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  marginBottom: "20px",
                  opacity: 0.9,
                }}
              >
                {post.subtitle}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${post.accent}50, rgba(200,75,17,0.1), transparent)`,
                  marginBottom: "20px",
                }}
              />

              {/* Body */}
              <p
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {post.excerpt}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "3px 10px",
                      borderRadius: "3px",
                      background: `${post.accent}12`,
                      border: `1px solid ${post.accent}25`,
                      color: post.accent,
                      letterSpacing: "0.5px",
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 600,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalvinPosts3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <div
      id="scroll-container"
      style={{
        height: "100vh",
        overflowY: "auto",
        background: "#080200",
        fontFamily: "'Georgia', serif",
        scrollBehavior: "smooth",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #080200; }
        ::-webkit-scrollbar-thumb { background: #C84B11; border-radius: 2px; }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes dotFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}} />

      {/* Fixed background texture */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 10% 20%, rgba(200,75,17,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 80%, rgba(232,93,4,0.04) 0%, transparent 60%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(200,75,17,0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 40px 60px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#C84B11",
            fontFamily: "'Courier New', monospace",
            marginBottom: "24px",
            animation: "fadeDown 0.8s ease 0.2s both",
          }}
        >
          <span style={{ animation: "shimmer 2s ease infinite" }}>✦</span>
          DEVELOPER & BESPOKE DESIGNER
          <span style={{ animation: "shimmer 2s ease infinite 0.5s" }}>✦</span>
        </div>

        {/* Main title */}
        <div style={{ animation: "fadeDown 0.8s ease 0.4s both" }}>
          <h1
            style={{
              margin: "0 0 8px 0",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 900,
              color: "#ffffff",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 0.95,
              letterSpacing: "-2px",
            }}
          >
            Calvin&apos;s
          </h1>
          <h1
            style={{
              margin: "0 0 32px 0",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#C84B11",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 0.95,
              letterSpacing: "-2px",
            }}
          >
            Mission Log.
          </h1>
        </div>

        <p
          style={{
            maxWidth: "500px",
            fontSize: "16px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 48px 0",
            animation: "fadeDown 0.8s ease 0.6s both",
          }}
        >
          Projects built, workshops attended, puzzles crafted, and ideas shipped — one line at a time.
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            animation: "fadeDown 0.8s ease 0.8s both",
            borderTop: "1px solid rgba(200,75,17,0.2)",
            borderBottom: "1px solid rgba(200,75,17,0.2)",
            padding: "20px 0",
            marginBottom: "80px",
          }}
        >
          {[
            { label: "Posts", value: "8" },
            { label: "Projects", value: "4" },
            { label: "Hackathons", value: "2" },
            { label: "Workshops", value: "2" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 900,
                  color: "#C84B11",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "2px",
                  fontFamily: "'Courier New', monospace",
                  marginTop: "4px",
                }}
              >
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline line + posts */}
        <div style={{ position: "relative" }}>
          {/* Center spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(200,75,17,0.3) 10%, rgba(200,75,17,0.3) 90%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {posts.map((post, i) => (
            <div key={post.id} style={{ position: "relative" }}>
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40px",
                  transform: "translateX(-50%)",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: post.accent,
                  boxShadow: `0 0 16px ${post.accent}80`,
                  animation: `dotFloat ${2 + i * 0.3}s ease-in-out infinite`,
                  zIndex: 2,
                }}
              />
              <PostCard post={post} index={i} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 0 40px",
            borderTop: "1px solid rgba(200,75,17,0.15)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            ✦ CALVIN DSOUZA · SECOND-YEAR CYBERSECURITY EXPLORER ✦
          </div>
        </div>
      </div>
    </div>
  );
}
