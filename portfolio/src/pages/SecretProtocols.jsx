import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, ShieldAlert, Zap, Compass, Film, Cpu, Utensils, Gauge, HelpCircle, Image as ImageIcon, Volume2, Shield, Lock } from 'lucide-react';
import '../styles/scenes/vault.css';

import { VaultSecrets } from '../components/vault/VaultSecrets';
import { VaultGame } from '../components/vault/VaultGame';
import { VaultCinema } from '../components/vault/VaultCinema';
import { VaultHardware } from '../components/vault/VaultHardware';
import { VaultFood } from '../components/vault/VaultFood';
import { VaultGarage } from '../components/vault/VaultGarage';
import { VaultQuiz } from '../components/vault/VaultQuiz';

const TABS = [
  { id: 'GAME', label: '🕹️ MINI-GAME', icon: Zap },
  { id: 'GARAGE', label: '🏎️ 120+ GARAGE', icon: Gauge },
  { id: 'CINEMA', label: '🎬 CINEMA DB', icon: Film },
  { id: 'HARDWARE', label: '💻 HARDWARE', icon: Cpu },
  { id: 'FOOD', label: '🍕 CULINARY', icon: Utensils },
  { id: 'QUIZ', label: '🧠 QUIZ', icon: HelpCircle },
  { id: 'SYSTEM', label: '⚡ OVERRIDES', icon: Terminal },
];

const SecretProtocols = () => {
  const [activeTab, setActiveTab] = useState('GAME');
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
    <div className="blog-reader-scene" style={{ backgroundColor: '#070709', minHeight: '100vh', padding: '60px 20px 40px', color: '#E8D5B5' }}>
      <div className="vault-container">
        
        {/* Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-gold, #C5A880)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '1px' }}>
            <ArrowLeft size={16} />
            RETURN TO MAINFRAME
          </Link>
          <span style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '1px' }}>
            VAULT // LEVEL 5 ACCESS
          </span>
        </div>

        {/* Grand Header */}
        <header style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.3)', paddingBottom: '28px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ 
              fontSize: 'clamp(3.6rem, 8vw, 5rem)', 
              lineHeight: 1,
              filter: 'drop-shadow(0 0 24px rgba(197, 168, 128, 0.5))',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none'
            }}>
              🏎️
            </span>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8rem', color: 'var(--color-gold, #C5A880)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                [ HIDDEN VAULT // PERSONAL OPERATIVE ARCHIVE ]
              </div>
              <h1 style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', color: '#FFF', margin: 0, letterSpacing: '1px', lineHeight: 1.15 }}>
                BUREAU TELEMETRY & VAULT
              </h1>
              <p style={{ fontFamily: 'var(--font-mono, monospace)', color: 'var(--color-silver, #8E8D8A)', fontSize: '0.88rem', margin: '8px 0 0 0', letterSpacing: '1.2px', lineHeight: 1.4, maxWidth: '750px' }}>
                THE HUMAN BEHIND THE TERMINAL. HARDWARE DIAGNOSTICS, RETRO CYBER MAZE, CINEMA DATABASE, CULINARY ROADTRIPS & CALVIN'S CLASSIFIED GARAGE (120+ CARS).
              </p>
            </div>
          </div>
        </header>

        {/* Tab Navigation Controls */}
        <div className="vault-nav-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`vault-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: MINI GAME */}
        {activeTab === 'GAME' && <VaultGame />}

        {/* TAB 2: CINEMA DATABASE & RANDOMIZER */}
        {activeTab === 'CINEMA' && <VaultCinema />}

        {/* TAB 3: HARDWARE DIAGNOSTICS */}
        {activeTab === 'HARDWARE' && <VaultHardware />}

        {/* TAB 4: CULINARY DOSSIER & INDIA FOOD ROAD TRIP */}
        {activeTab === 'FOOD' && <VaultFood />}

        {/* TAB 5: ₹100CR DREAM GARAGE */}
        {activeTab === 'GARAGE' && <VaultGarage />}

        {/* TAB 6: SUBJECT INTERROGATION QUIZ */}
        {activeTab === 'QUIZ' && <VaultQuiz />}

        {/* TAB 7: LIVE SYSTEM OVERRIDES & UNLISTED SITES */}
        {activeTab === 'SYSTEM' && (
          <div>
            
            {/* System Controllers */}
            <div className="vault-panel">
              <div className="vault-panel-header">
                <div>
                  <h3 className="vault-panel-title">
                    <Zap size={20} color="var(--color-gold)" /> LIVE SYSTEM OVERRIDES
                  </h3>
                  <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
                    Interact directly with the browser DOM & launch low-level terminal diagnostics.
                  </p>
                </div>
              </div>

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
                    fontFamily: 'var(--font-mono)',
                    borderRadius: '6px'
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
                    fontFamily: 'var(--font-mono)',
                    borderRadius: '6px'
                  }}
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
            </div>

            {/* Unlisted Sites Directory */}
            <div className="vault-panel">
              <div className="vault-panel-header">
                <div>
                  <h3 className="vault-panel-title">
                    <Compass size={20} color="var(--color-gold)" /> UNLISTED SITE SUBSYSTEMS
                  </h3>
                  <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
                    Direct neural links to unindexed sections.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-mono)' }}>
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
                    borderRadius: '6px',
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
                      Chronological visual timeline of hackathon victories, research publications, and career milestones.
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-gold)' }}>↗ OPEN</span>
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
                    borderRadius: '6px',
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
                      Hardware, terminals, mechanical keyboards, software stack, and security tooling.
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-gold)' }}>↗ OPEN</span>
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
                    borderRadius: '6px',
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
                  <span style={{ color: 'var(--color-gold)' }}>↗ OPEN</span>
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default SecretProtocols;
