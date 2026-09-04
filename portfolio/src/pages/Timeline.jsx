import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Award, Terminal, Code2, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import '../styles/scenes/gallery.css';

const TIMELINE_DATA = [
  {
    year: "2026",
    date: "JUN 2026 – PRESENT",
    category: "DEPLOYMENT",
    icon: Shield,
    title: "TEAM LEAD, CYBERSECURITY INTERN",
    org: "Indian Army Cyber Group (AITG), New Delhi",
    badge: "SELECTIVE (400+ APPLICANTS)",
    desc: "Selected from 400+ candidates across India. Leading an engineering unit developing AI-driven forensic intelligence and on-chain transaction graph analytics (AXON) tracking illicit cryptocurrency flows. Managing evidence chain-of-custody workflows and digital forensics (FTK Imager, Autopsy, Volatility).",
  },
  {
    year: "2026",
    date: "AUG 2026",
    category: "HONOUR",
    icon: Award,
    title: "BEST PERFORMER 🏆",
    org: "GitHub Copilot Dev Days",
    badge: "1ST PLACE RECOGNITION",
    desc: "Awarded Best Performer for accelerated system architecture, agentic orchestration, and high-velocity shipping using developer intelligence primitives.",
  },
  {
    year: "2026",
    date: "AUG 2026",
    category: "HONOUR",
    icon: Terminal,
    title: "ADVANCED ETHICAL HACKING INTENSIVE",
    org: "Indian Institute of Science (IISc), Bangalore",
    badge: "RESEARCH WORKSHOP",
    desc: "2-day deep-dive cybersecurity residency focusing on memory corruption, binary exploitation, and kernel-level network anomaly containment.",
  },
  {
    year: "2026",
    date: "2026 – PRESENT",
    category: "LEADERSHIP",
    icon: Users,
    title: "PROGRAM COMMITTEE HEAD",
    org: "Computer Society of India (CSI), NMAMIT",
    badge: "DEPARTMENT LEAD",
    desc: "Head of program planning and cross-team execution for national-level collegiate technical events, hackathons, and administrative logistics.",
  },
  {
    year: "2026",
    date: "2026 – PRESENT",
    category: "LEADERSHIP",
    icon: Terminal,
    title: "EVENT COORDINATOR",
    org: "PROTON, NMAMIT Cybersecurity Department",
    badge: "CORE COMMITTEE",
    desc: "Coordinating technical cybersecurity programs, CTF challenge deployments, and hands-on offensive security workshops for 200+ students.",
  },
  {
    year: "2026",
    date: "MAR 2026",
    category: "HACKATHON",
    icon: Code2,
    title: "BUILT VAIDIKA (AI CLINICAL TRIAGE)",
    org: "Protothon 2K26 (24-Hour Sprint)",
    badge: "SHIPPED IN 24H",
    desc: "Engineered an end-to-end multilingual offline patient triage pipeline prioritizing critical emergency arrivals using contextual heuristic extraction.",
  },
  {
    year: "2026",
    date: "2026",
    category: "CTF",
    icon: Shield,
    title: "4TH PLACE NATIONAL FINISH",
    org: "Hackfest 2026 National CTF",
    badge: "TOP 5 NATIONWIDE",
    desc: "Placed 4th nationally competing against veteran collegiate cybersecurity squads across reverse engineering, forensic packet dissection, and web exploitation.",
  },
  {
    year: "2025",
    date: "NOV 2025",
    category: "HACKATHON",
    icon: Award,
    title: "SPECIAL COMMENDATION FROM JUDGES",
    org: "Innovex Hackathon (NITTE)",
    badge: "JUDGES' COMMENDATION",
    desc: "Built MassEd.ex in 24 hours under zero sleep: a real-time crowd-density safety and anomaly detection engine fusing YOLOv8 computer vision with Scapy raw packet sniffing.",
  },
  {
    year: "2025",
    date: "OCT 2025",
    category: "CTF",
    icon: Shield,
    title: "7TH PLACE / 200+ TEAMS",
    org: "Code Intrusion National CTF",
    badge: "TOP 4% NATIONWIDE",
    desc: "Ranked 7th out of 200+ participating teams solving complex memory forensics, reverse engineering, and cryptographic challenges.",
  },
  {
    year: "2025",
    date: "AUG 2025",
    category: "HACKATHON",
    icon: Award,
    title: "RUNNERS-UP (2ND PLACE)",
    org: "ACEathon 2025",
    badge: "🥈 2ND PLACE PODIUM",
    desc: "Co-created OuchMyBrain.io: an AI-driven learning suite transforming unstructured study notes into interactive flashcards, OCR transcripts, and synthesized podcast audio.",
  },
  {
    year: "2025",
    date: "SEP–NOV 2025",
    category: "CTF",
    icon: Shield,
    title: "TOP-15 NATIONAL CTF FINISHES",
    org: "Enyugma CTF (14th/200+) & CYSECK NITK CTF (14th/60+)",
    badge: "DOUBLE TOP-15",
    desc: "Consistently placed in top decile across national collegiate security tournaments, specializing in wireless forensics and on-chain transaction tracing.",
  },
  {
    year: "2024",
    date: "2024 – 2028",
    category: "EDUCATION",
    icon: GraduationCap,
    title: "B.TECH COMPUTER SCIENCE (CYBERSECURITY)",
    org: "NMAM Institute of Technology (Nitte)",
    badge: "CGPA: 9.21 / 10",
    desc: "Class of 2028. Elected Class Representative for 70+ students. Maintaining a 9.21 CGPA while leading cybersecurity teams, publishing research, and competing nationwide.",
  }
];

const CATEGORIES = ['ALL', 'DEPLOYMENT', 'HACKATHON', 'CTF', 'LEADERSHIP', 'EDUCATION'];

const Timeline = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = selectedFilter === 'ALL' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.category === selectedFilter);

  return (
    <div className="gallery-scene" style={{ minHeight: '100vh', background: 'var(--color-bg-dark)', padding: '100px 20px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Navigation & Header */}
        <Link 
          to="/" 
          className="reader-back-btn" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--color-gold)', 
            textDecoration: 'none', 
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={16} />
          RETURN TO MAINFRAME
        </Link>

        <div style={{ borderBottom: '1px solid var(--color-rule)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '2px' }}>
            CLASSIFIED DOSSIER // CHRONOLOGICAL SERVICE RECORD
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', color: 'var(--color-white)', margin: '8px 0 10px 0', lineHeight: 1 }}>
            OPERATIONAL TIMELINE
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-silver)', fontSize: '1rem', margin: 0, maxWidth: '650px', lineHeight: 1.5 }}>
            Verifiable career milestones, competitive podiums, national CTF finishes, and military research deployments.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '32px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              style={{
                background: selectedFilter === cat ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedFilter === cat ? '#070709' : 'var(--color-silver)',
                border: `1px solid ${selectedFilter === cat ? 'var(--color-gold)' : 'var(--color-rule)'}`,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                padding: '6px 14px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontWeight: selectedFilter === cat ? 'bold' : 'normal',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                style={{ 
                  background: 'rgba(18, 16, 24, 0.75)', 
                  padding: '24px 28px', 
                  border: '1px solid var(--color-rule)',
                  borderLeft: '3px solid var(--color-gold)',
                  borderRadius: '4px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <IconComponent size={18} color="var(--color-gold)" />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      {item.year} ✦ {item.date}
                    </span>
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.68rem', 
                    color: '#00ffcc', 
                    background: 'rgba(0, 255, 204, 0.1)', 
                    border: '1px solid rgba(0, 255, 204, 0.25)', 
                    padding: '2px 8px', 
                    borderRadius: '2px',
                    letterSpacing: '0.5px'
                  }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', margin: '6px 0 4px 0', color: 'var(--color-white)', lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-plum, #A89FBF)', marginBottom: '14px', letterSpacing: '0.5px' }}>
                  {item.org}
                </h4>

                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-silver)', lineHeight: '1.6', fontSize: '0.92rem', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Timeline;
