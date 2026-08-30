import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Terminal, ShieldAlert, Key, Compass, Cpu, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/scenes/editorial.css';

const SecretProtocols = () => {
  const navigate = useNavigate();
  const [isAuditActive, setIsAuditActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsAuditActive(document.body.classList.contains('audit-mode'));
  }, []);

  const toggleAudit = () => {
    document.body.classList.toggle('audit-mode');
    setIsAuditActive(document.body.classList.contains('audit-mode'));
  };

  const openTerminal = () => {
    window.dispatchEvent(new CustomEvent('openTerminal'));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: '`' }));
  };

  return (
    <div className="blog-reader-scene" style={{ backgroundColor: '#070709', minHeight: '100vh', padding: '100px 20px 80px' }}>
      <div className="bureau-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Navigation / Header */}
        <div className="reader-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <Link to="/" className="reader-back-btn" style={{ color: 'var(--color-gold, #C5A880)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            <ArrowLeft size={18} />
            RETURN TO MAINFRAME
          </Link>
          <span className="reader-meta-tag" style={{ color: 'var(--color-gold, #C5A880)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', border: '1px solid rgba(197, 168, 128, 0.3)', padding: '4px 10px' }}>
            [ CLEARANCE LEVEL 5 // OVERRIDE VAULT ]
          </span>
        </div>

        {/* Title Header */}
        <header style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.3)', paddingBottom: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
            <span style={{ fontSize: '2.5rem' }}>🏎️</span>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FFF', margin: 0, letterSpacing: '1px' }}>
                BUREAU TELEMETRY & PROTOCOLS
              </h1>
              <p style={{ fontFamily: 'var(--font-mono, monospace)', color: 'var(--color-silver, #8E8D8A)', fontSize: '0.85rem', margin: '4px 0 0 0', letterSpacing: '1.5px' }}>
                CENTRAL DIRECTORY OF EASTER EGGS, SYSTEM CONTROLS & UNLISTED SUBSYSTEMS
              </p>
            </div>
          </div>
        </header>

        {/* SECTION 1: LIVE SYSTEM OVERRIDES */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.9rem', color: 'var(--color-gold, #C5A880)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={16} /> 01 // LIVE SYSTEM OVERRIDES
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            
            {/* Audit Mode Controller */}
            <div 
              onClick={toggleAudit}
              style={{
                border: `1px solid ${isAuditActive ? '#ff3333' : 'rgba(197, 168, 128, 0.3)'}`,
                backgroundColor: isAuditActive ? 'rgba(255, 51, 51, 0.08)' : 'rgba(20, 20, 26, 0.6)',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)'
              }}
              onMouseEnter={(e) => {
                if (!isAuditActive) e.currentTarget.style.borderColor = 'var(--color-gold, #C5A880)';
              }}
              onMouseLeave={(e) => {
                if (!isAuditActive) e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.3)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ShieldAlert size={26} color={isAuditActive ? '#ff3333' : '#C5A880'} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: isAuditActive ? '#ff3333' : '#FFF' }}>
                    RED TEAM AUDIT MODE
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E8D8A', marginTop: '3px' }}>
                    {isAuditActive ? 'Hacker schematic ACTIVE. Click to restore.' : 'Simulate system compromise & raw DOM inspect.'}
                  </div>
                </div>
              </div>
              <span style={{ 
                fontSize: '0.75rem', 
                padding: '6px 12px', 
                border: `1px solid ${isAuditActive ? '#ff3333' : '#C5A880'}`,
                color: isAuditActive ? '#ff3333' : '#C5A880',
                fontWeight: 'bold'
              }}>
                {isAuditActive ? 'RESTORE' : 'ENGAGE'}
              </span>
            </div>

            {/* Bureau Terminal Controller */}
            <div 
              onClick={openTerminal}
              style={{
                border: '1px solid rgba(197, 168, 128, 0.3)',
                backgroundColor: 'rgba(20, 20, 26, 0.6)',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00ff00'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.3)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Terminal size={26} color="#00ff00" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#FFF' }}>
                    BUREAU ROOT TERMINAL
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E8D8A', marginTop: '3px' }}>
                    Full interactive CLI shell (or press [ ` ] key).
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', padding: '6px 12px', border: '1px solid #00ff00', color: '#00ff00', fontWeight: 'bold' }}>
                LAUNCH
              </span>
            </div>

          </div>
        </section>

        {/* SECTION 2: CLASSIFIED & UNLISTED DIRECTORY */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.9rem', color: 'var(--color-gold, #C5A880)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={16} /> 02 // CLASSIFIED & UNLISTED SITES
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-mono)' }}>
            
            <Link 
              to="/classified"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                border: '1px solid rgba(255, 51, 51, 0.35)',
                backgroundColor: 'rgba(255, 51, 51, 0.04)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 51, 51, 0.12)'; e.currentTarget.style.borderColor = '#ff3333'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 51, 51, 0.04)'; e.currentTarget.style.borderColor = 'rgba(255, 51, 51, 0.35)'; }}
            >
              <div>
                <div style={{ color: '#ff5555', fontSize: '0.95rem', fontWeight: 'bold' }}>
                  /classified — DECLASSIFIED: THE OPERATIVE
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8E8D8A', marginTop: '4px' }}>
                  Top secret personnel file, unverified rumors, guilty pleasures & Exhibit A early baby prototype.
                </div>
              </div>
              <ArrowRight size={18} color="#ff5555" />
            </Link>

            <Link 
              to="/timeline"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                backgroundColor: 'rgba(20, 20, 26, 0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C5A880'; e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.25)'; e.currentTarget.style.backgroundColor = 'rgba(20, 20, 26, 0.5)'; }}
            >
              <div>
                <div style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 'bold' }}>
                  /timeline — MILESTONES & CAREER HISTORY
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8E8D8A', marginTop: '4px' }}>
                  A continuous, chronological visual timeline of hackathon victories, research publications, and career milestones.
                </div>
              </div>
              <ArrowRight size={18} color="#C5A880" />
            </Link>

            <Link 
              to="/uses"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                backgroundColor: 'rgba(20, 20, 26, 0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C5A880'; e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.25)'; e.currentTarget.style.backgroundColor = 'rgba(20, 20, 26, 0.5)'; }}
            >
              <div>
                <div style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 'bold' }}>
                  /uses — HARDWARE, WORKSTATION & DAILY CARRY
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8E8D8A', marginTop: '4px' }}>
                  The hardware, terminals, mechanical keyboards, software stack, and security tooling Calvin relies on.
                </div>
              </div>
              <ArrowRight size={18} color="#C5A880" />
            </Link>

            <Link 
              to="/404"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                backgroundColor: 'rgba(20, 20, 26, 0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C5A880'; e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.25)'; e.currentTarget.style.backgroundColor = 'rgba(20, 20, 26, 0.5)'; }}
            >
              <div>
                <div style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 'bold' }}>
                  /404 — INTRUSION DETECTION / SUB-SYSTEM ERROR
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8E8D8A', marginTop: '4px' }}>
                  Custom cyber-styled error terminal featuring system reboot mechanisms.
                </div>
              </div>
              <ArrowRight size={18} color="#C5A880" />
            </Link>

          </div>
        </section>

        {/* SECTION 3: CHEAT CODES & CLI MANUAL */}
        <section style={{ borderTop: '1px solid rgba(197, 168, 128, 0.25)', paddingTop: '28px' }}>
          <h2 style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.9rem', color: 'var(--color-gold, #C5A880)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Key size={16} /> 03 // CHEAT CODES & SHORTCUTS MANUAL
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', fontFamily: 'var(--font-mono)' }}>
            
            <div style={{ background: 'rgba(15, 15, 18, 0.8)', padding: '14px 16px', borderLeft: '3px solid #C5A880', border: '1px solid rgba(197,168,128,0.15)' }}>
              <div style={{ color: '#FFF', fontWeight: 'bold', fontSize: '0.85rem' }}>🎮 Konami Code</div>
              <div style={{ color: '#00ff00', marginTop: '6px', fontSize: '0.8rem' }}>↑ ↑ ↓ ↓ ← → ← → B A</div>
              <div style={{ color: '#8E8D8A', fontSize: '0.7rem', marginTop: '4px' }}>Triggers glitch sequence to /classified.</div>
            </div>

            <div style={{ background: 'rgba(15, 15, 18, 0.8)', padding: '14px 16px', borderLeft: '3px solid #C5A880', border: '1px solid rgba(197,168,128,0.15)' }}>
              <div style={{ color: '#FFF', fontWeight: 'bold', fontSize: '0.85rem' }}>💻 Terminal Overlay</div>
              <div style={{ color: '#00ff00', marginTop: '6px', fontSize: '0.8rem' }}>Backtick key [ ` ]</div>
              <div style={{ color: '#8E8D8A', fontSize: '0.7rem', marginTop: '4px' }}>Toggles interactive root shell anywhere.</div>
            </div>

            <div style={{ background: 'rgba(15, 15, 18, 0.8)', padding: '14px 16px', borderLeft: '3px solid #C5A880', border: '1px solid rgba(197,168,128,0.15)' }}>
              <div style={{ color: '#FFF', fontWeight: 'bold', fontSize: '0.85rem' }}>📱 Mobile Trigger</div>
              <div style={{ color: '#00ff00', marginTop: '6px', fontSize: '0.8rem' }}>Tap "001" in footer</div>
              <div style={{ color: '#8E8D8A', fontSize: '0.7rem', marginTop: '4px' }}>Secret mobile override to the classified dossier.</div>
            </div>

            <div style={{ background: 'rgba(15, 15, 18, 0.8)', padding: '14px 16px', borderLeft: '3px solid #C5A880', border: '1px solid rgba(197,168,128,0.15)' }}>
              <div style={{ color: '#FFF', fontWeight: 'bold', fontSize: '0.85rem' }}>⌨️ Secret CLI Commands</div>
              <div style={{ color: '#00ff00', marginTop: '6px', fontSize: '0.8rem' }}>nmap, neofetch, matrix</div>
              <div style={{ color: '#8E8D8A', fontSize: '0.7rem', marginTop: '4px' }}>Try: `do a barrel roll`, `cat .ghost_protocol`</div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default SecretProtocols;
