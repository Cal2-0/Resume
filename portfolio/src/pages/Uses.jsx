import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Terminal, Shield, Code2, Layers, Gamepad2, Wrench, Monitor, HardDrive, Headphones, Sparkles } from 'lucide-react';
import '../styles/scenes/editorial.css';

export const Uses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Cpu,
      title: "PRIMARY WORKSTATION // HARDWARE",
      subtitle: "High-throughput machine built for AI inference, memory analysis & development.",
      items: [
        { name: "Processor (CPU)", val: "13th Gen Intel® Core™ i7-13700H (14 Cores / 20 Threads, up to 5.0 GHz)", note: "Handles heavy parallel indexing, compilation & emulation effortlessly." },
        { name: "Graphics (GPU)", val: "NVIDIA® GeForce RTX™ 4070 Laptop GPU (8GB GDDR6)", note: "Used for local LLM inference, computer vision pipelines & high-FPS gaming." },
        { name: "Memory (RAM)", val: "16 GB Dual-Channel DDR5 @ 5200 MHz", note: "High bandwidth memory for massive forensic memory dumps & multiple IDE instances." },
        { name: "Primary Storage", val: "High-Speed NVMe PCIe Gen 4 M.2 SSD", note: "Lightning-fast disk I/O for database queries & raw binary carving." },
        { name: "Secondary Display", val: "High Refresh Rate IPS Panel", note: "Calibrated for dark mode readability and fluid telemetry monitoring." },
      ]
    },
    {
      icon: Shield,
      title: "DIGITAL FORENSICS & SECURITY TOOLKIT",
      subtitle: "Software & suites used in incident response, binary carving & malware telemetry.",
      items: [
        { name: "Forensic Imaging", val: "FTK Imager & Falcon Forensic Imager", note: "Bit-stream raw disk imaging, hash verification (MD5/SHA-256) & write-blocking." },
        { name: "Memory & Artifact Analysis", val: "Volatility 3 & Autopsy", note: "RAM dump reconstruction, process tree hunting & deleted file recovery." },
        { name: "Packet & Protocol Analysis", val: "Wireshark & tcpdump", note: "Deep packet inspection, network telemetry decoding & suspicious beacon detection." },
        { name: "Offensive & Security OS", val: "Kali Linux / Parrot OS Subsystems", note: "Dedicated penetration testing, payload testing & vulnerability auditing environment." },
        { name: "Pipeline Security", val: "SecureCI (Custom Built CLI) & Trivy", note: "Static scanning of GitHub Actions CI/CD workflows for secret leaks & unpinned actions." }
      ]
    },
    {
      icon: Code2,
      title: "SOFTWARE & CODE ENVIRONMENT",
      subtitle: "The editors, terminals, and compilers where machine architecture takes shape.",
      items: [
        { name: "Primary Editor", val: "Cursor AI & VS Code", note: "AI-augmented pair programming combined with strict vim-inspired muscle memory." },
        { name: "Terminal Emulators", val: "Warp & Windows Terminal (PowerShell / WSL2)", note: "Block-based terminal navigation, custom prompt telemetry & zsh completion." },
        { name: "Color Palette / Theme", val: "Custom Bureau Noir / Tokyo Night / Vesper", note: "High-contrast dark themes to survive extended 3 AM development sessions." },
        { name: "Core Languages", val: "Python, JavaScript (ESNext), TypeScript, C/C++", note: "Python for AI/security tools; TypeScript/React for sleek interfaces." }
      ]
    },
    {
      icon: Layers,
      title: "BACKEND, DATABASE & DEVOPS",
      subtitle: "Infrastructure and cloud platforms powering deployed systems.",
      items: [
        { name: "Frameworks", val: "FastAPI, Flask, Express.js, React / Vite", note: "Asynchronous APIs and ultra-fast client single-page applications." },
        { name: "Databases & Storage", val: "PostgreSQL, Supabase, SQLAlchemy, Redis", note: "Relational data integrity with real-time replication & caching." },
        { name: "Cloud & Deployment", val: "Render, Vercel, Supabase, Docker", note: "Automated Git CI/CD deployments and containerized environments." }
      ]
    },
    {
      icon: Headphones,
      title: "PERIPHERALS & DAILY CARRY",
      subtitle: "Hardware companions for daily focus and physical productivity.",
      items: [
        { name: "Audio / Focus", val: "Active Noise Cancelling (ANC) Over-Ear Headphones", note: "Crucial for deep work immersion, synthwave soundtracks & Hans Zimmer scores." },
        { name: "Input Devices", val: "Mechanical Tactile Keyboard & High-DPI Precision Mouse", note: "Tactile key actuation for crisp feedback during rapid typing sessions." },
        { name: "Analog Sketchbook", val: "Grid/Dotted Notebook + Fine-tip Drafting Pen", note: "For drafting database schemas, system architecture flows & UI wireframes." }
      ]
    },
    {
      icon: Gamepad2,
      title: "ACTIVE GAMING PROTOCOLS",
      subtitle: "Games in active rotation when taking a break from architecture and research.",
      items: [
        { name: "Valorant", val: "Tactical 5v5 FPS", note: "Competitive shooter queuing with friends." },
        { name: "Fortnite", val: "Battle Royale", note: "High-paced survival chaos & event drops." },
        { name: "Minecraft", val: "Sandbox Construction", note: "Redstone mechanics, underground bases & endless sandbox creativity." },
        { name: "FIFA / EA FC", val: "Football Simulation", note: "Competitive football and tactical team management." }
      ]
    }
  ];

  return (
    <div className="blog-reader-scene" style={{ backgroundColor: '#070709', minHeight: '100vh', padding: '120px 20px 80px', color: '#E8D5B5' }}>
      <div className="bureau-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Navigation Bar */}
        <div className="reader-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/" className="reader-back-btn" style={{ color: 'var(--color-gold, #C5A880)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '1px' }}>
            <ArrowLeft size={16} />
            RETURN TO MAINFRAME
          </Link>
          <span style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '1px' }}>
            MANIFEST // SPECIFICATIONS
          </span>
        </div>

        {/* Header */}
        <header style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.3)', paddingBottom: '28px', marginBottom: '40px' }}>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8rem', color: 'var(--color-gold, #C5A880)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
            [ WORKSTATION INVENTORY & TOOLING ]
          </div>
          <h1 style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: '#FFF', margin: 0, letterSpacing: '1px', lineHeight: 1.15 }}>
            THE SETUP // USES
          </h1>
          <p style={{ fontFamily: 'var(--font-mono, monospace)', color: 'var(--color-silver, #8E8D8A)', fontSize: '0.88rem', margin: '8px 0 0 0', letterSpacing: '1.2px', lineHeight: 1.4, maxWidth: '720px' }}>
            AN ITEMIZED MANIFEST OF THE HARDWARE, SECURITY TOOLKITS, CODE ENVIRONMENTS, AND DAILY CARRY USED TO ARCHITECT SYSTEMS.
          </p>
        </header>

        {/* Categorized Sections Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {sections.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(15, 15, 20, 0.85)', 
                  border: '1px solid rgba(197, 168, 128, 0.2)', 
                  borderRadius: '8px', 
                  padding: '24px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Section Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', borderBottom: '1px solid rgba(197, 168, 128, 0.15)', paddingBottom: '14px' }}>
                  <IconComp size={22} color="var(--color-gold, #C5A880)" />
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.05rem', color: '#FFF', margin: 0, letterSpacing: '1px' }}>
                      {sec.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#8E8D8A', margin: '3px 0 0 0' }}>
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px', fontFamily: 'var(--font-mono)' }}>
                  {sec.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      style={{
                        background: 'rgba(20, 20, 26, 0.6)',
                        border: '1px solid rgba(197, 168, 128, 0.12)',
                        padding: '14px 16px',
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-gold, #C5A880)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.12)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{ color: 'var(--color-gold, #C5A880)', fontSize: '0.82rem', fontWeight: 'bold' }}>
                          {item.name}
                        </span>
                        <span style={{ color: '#FFF', fontSize: '0.84rem', fontWeight: 'bold' }}>
                          {item.val}
                        </span>
                      </div>
                      <div style={{ color: 'var(--color-silver, #8E8D8A)', fontSize: '0.76rem', lineHeight: 1.35, marginTop: '2px' }}>
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Uses;
