import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Unlock, Cpu, Radio
} from 'lucide-react';
import '../styles/scenes/editorial.css';
import '../styles/scenes/vault.css';
import { VaultSecrets, CONFESSIONS_DATA } from '../components/vault/VaultSecrets';
import { VaultRoulette } from '../components/vault/VaultRoulette';

export const Classified = () => {
  const [guiltyHovered, setGuiltyHovered] = useState(false);
  const [selectedDossier, setSelectedDossier] = useState(CONFESSIONS_DATA[0]);
  const [unlockedIds, setUnlockedIds] = useState(['ambition', 'yap-matrix']);
  const [activeQuickFact, setActiveQuickFact] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const QUICK_INTEL = [
    { label: 'EGO METRIC', value: '0.00%', note: 'ZERO EGO', color: '#00ffcc' },
    { label: 'JAKE PERALTA CLONE', value: '97.8%', note: 'VERIFIED', color: 'var(--color-gold, #E8D5B5)' },
    { label: 'FLOW STATE PEAK', value: '3:17 AM', note: 'CONSTANT', color: '#c084fc' },
    { label: 'F1 TELEMETRY OBSESSION', value: '99.4%', note: 'CRITICAL', color: '#38bdf8' },
    { label: 'DAY-ONE LOYALTY', value: '100%', note: 'LOCKED', color: '#ff3366' },
    { label: 'FILTER COFFEE DEPENDENCE', value: '4+ cups', note: 'DAILY', color: '#ff9500' },
  ];

  useEffect(() => {
    // We override body style for this specific layout to avoid nested scrollbars
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuickFact(prev => (prev + 1) % QUICK_INTEL.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleUnlockDossier = (id) => {
    if (!unlockedIds.includes(id)) {
      setUnlockedIds([...unlockedIds, id]);
    }
  };

  const currentIntel = QUICK_INTEL[activeQuickFact];

  return (
    <div style={{ 
      backgroundColor: '#09090C', 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory', 
      color: '#E8D5B5' 
    }}>
      
      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO (Strict 100vh, Snap to Start)
      ═══════════════════════════════════════════════════ */}
      <section style={{ 
        height: '100vh', 
        scrollSnapAlign: 'start', 
        padding: '24px 24px 0', 
        boxSizing: 'border-box', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
          
          {/* Navigation Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/" style={{ color: 'var(--color-gold, #E8D5B5)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '1px', opacity: 0.8, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
            >
              <ArrowLeft size={15} />
              RETURN TO THE BUREAU
            </Link>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
              <span style={{ color: 'var(--color-gold, #E8D5B5)', border: '1px solid rgba(232, 213, 181, 0.2)', padding: '3px 10px', background: 'rgba(232, 213, 181, 0.04)', letterSpacing: '1px' }}>
                CLEARANCE: LEVEL 6
              </span>
              <span style={{ color: '#8E8D8A', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '3px 10px' }}>
                VOL. 06 // VAULT
              </span>
            </div>
          </div>

          {/* Main Hero Container */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(14, 14, 18, 0.95) 0%, rgba(10, 10, 14, 0.98) 50%, rgba(16, 14, 20, 0.95) 100%)',
            border: '1px solid rgba(232, 213, 181, 0.15)',
            borderBottom: 'none',
            borderRadius: '10px 10px 0 0',
            padding: '20px 30px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', borderTop: '2px solid var(--color-gold, #E8D5B5)', borderLeft: '2px solid var(--color-gold, #E8D5B5)', borderRadius: '10px 0 0 0', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', borderTop: '2px solid var(--color-gold, #E8D5B5)', borderRight: '2px solid var(--color-gold, #E8D5B5)', borderRadius: '0 10px 0 0', opacity: 0.4 }} />

            {/* Header Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold, #E8D5B5)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.7 }}>
                  [ CLASSIFIED ARCHIVE // SUBJECT: CALVIN JUDE D'SOUZA ]
                </div>
                <h1 style={{ color: '#FFF', fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', margin: 0, letterSpacing: '1px', lineHeight: 1.1 }}>
                  The Black File
                </h1>
                <p style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0', maxWidth: '520px', lineHeight: 1.4 }}>
                  Spin the vault roulette to decrypt facts. (Scroll down for full archive)
                </p>
              </div>

              {/* Live Intel Ticker */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.45)', border: '1px solid rgba(232, 213, 181, 0.12)', borderRadius: '6px',
                padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', minWidth: '180px'
              }}>
                <div style={{ color: '#8E8D8A', marginBottom: '2px', letterSpacing: '1px', fontSize: '0.6rem' }}>
                  <Radio size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  LIVE INTEL FEED
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px' }}>
                  <span style={{ color: '#BBB' }}>{currentIntel.label}:</span>
                  <span style={{ color: currentIntel.color, fontWeight: 'bold' }}>{currentIntel.value}</span>
                </div>
              </div>
            </div>

            {/* TWO-COLUMN HERO: LEFT SHORTER PHOTO | RIGHT BIG WHEEL */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(400px, 1.6fr)',
              gap: 'clamp(20px, 3vw, 40px)',
              alignItems: 'center',
              flex: 1,
              position: 'relative',
              zIndex: 2
            }}
              className="vault-hero-grid"
            >
              {/* ─── LEFT COLUMN: SUBJECT DOSSIER PHOTO ─── */}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
                {/* Photo Exhibit (Hover to unblur) */}
                <div 
                  style={{
                    position: 'relative', borderRadius: '6px', overflow: 'hidden',
                    border: '1px solid rgba(232, 213, 181, 0.2)',
                    backgroundColor: '#0C0C10', transition: 'all 0.4s ease',
                    height: '100%', flex: 1, display: 'flex'
                  }}
                  onMouseEnter={() => setIsPhotoHovered(true)}
                  onMouseLeave={() => setIsPhotoHovered(false)}
                >
                  <img 
                    src="/baby.png" alt="Prototype" 
                    style={{ 
                      width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
                      filter: isPhotoHovered ? 'none' : 'grayscale(100%) blur(12px) contrast(130%)',
                      transition: 'filter 0.5s ease', display: 'block'
                    }}
                  />
                  {!isPhotoHovered && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                      <span style={{ 
                        background: 'rgba(0,0,0,0.6)', color: 'var(--color-gold, #E8D5B5)', 
                        padding: '6px 14px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '1px',
                        border: '1px solid rgba(232, 213, 181, 0.3)'
                      }}>
                        HOVER TO DECRYPT
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* ─── RIGHT COLUMN: BIG SPIN WHEEL ─── */}
              <VaultRoulette 
                onSelectDossier={(dossier) => setSelectedDossier(dossier)}
                selectedDossierId={selectedDossier?.id}
                unlockedIds={unlockedIds}
                onUnlock={handleUnlockDossier}
                embedded={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: ARCHIVE (Snap to Start)
      ═══════════════════════════════════════════════════ */}
      <section style={{ 
        minHeight: '100vh', 
        scrollSnapAlign: 'start', 
        padding: '40px 24px 80px', 
        boxSizing: 'border-box' 
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          {/* PSYCHOLOGICAL SUMMARY */}
          <div style={{
            background: 'rgba(14, 14, 18, 0.8)', border: '1px solid rgba(232, 213, 181, 0.15)',
            borderLeft: '3px solid var(--color-gold, #E8D5B5)', borderRadius: '8px',
            padding: '24px', marginBottom: '32px', display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', fontFamily: 'var(--font-mono)'
          }}>
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Cpu size={14} color="var(--color-gold, #E8D5B5)" />
                <span style={{ color: 'var(--color-gold, #E8D5B5)', fontWeight: 'bold', fontSize: '0.8rem' }}>PSYCHOLOGICAL SUMMARY</span>
                <span style={{ color: '#8E8D8A', fontSize: '0.68rem', marginLeft: 'auto' }}>ID: DSOUZA-001</span>
              </div>
              <div style={{ fontSize: '0.78rem', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <strong style={{ color: 'var(--color-gold, #E8D5B5)' }}>KNOWN ALIASES:</strong>
                  <div style={{ color: '#CCC', marginTop: '2px' }}>The Architect · F1 Telemetry Junkie</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-gold, #E8D5B5)' }}>GUILTY PASSION:</strong>
                  <div style={{ marginTop: '3px' }}>
                    <span 
                      onMouseEnter={() => setGuiltyHovered(true)} onMouseLeave={() => setGuiltyHovered(false)}
                      style={{
                        background: guiltyHovered ? 'rgba(232, 213, 181, 0.1)' : 'rgba(0,0,0,0.45)', color: guiltyHovered ? 'var(--color-gold, #E8D5B5)' : '#555',
                        padding: '3px 10px', borderRadius: '3px', cursor: 'pointer', display: 'inline-block', borderBottom: '1px dotted var(--color-gold, #E8D5B5)', transition: 'all 0.25s ease'
                      }}
                    >
                      {guiltyHovered ? '4-hour unfiltered yapping on Nolan sound design & F1 aero (97.8% Jake Peralta clone)' : '[ HOVER TO DECRYPT ]'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle */}
            <div>
              <div style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--color-gold, #E8D5B5)', fontSize: '0.78rem' }}>SYSTEM WEAKNESSES:</strong></div>
              <ul style={{ paddingLeft: '1.1rem', margin: 0, color: '#BBB', fontSize: '0.74rem', lineHeight: '1.55', listStyleType: 'none' }}>
                {[
                  { icon: '⚠️', text: 'NPM peer dependency conflicts' },
                  { icon: '🔧', text: 'Over-engineering simple UI buttons' },
                  { icon: '☕', text: 'South Indian filter coffee (4+ cups)' },
                  { icon: '🔐', text: 'Testing security on random IoT devices' },
                ].map((w, i) => (
                  <li key={i} style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                    <span>{w.icon}</span><span>{w.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--color-gold, #E8D5B5)', fontSize: '0.78rem' }}>CORE MISSION:</strong></div>
                <div style={{ background: 'rgba(0, 255, 204, 0.04)', border: '1px solid rgba(0, 255, 204, 0.15)', borderRadius: '4px', padding: '12px 14px', fontSize: '0.78rem', color: '#FFF', lineHeight: 1.5 }}>
                  <span style={{ color: '#00ffcc', fontWeight: 'bold' }}>✦ </span>Retire parents young, build deep-tech with day-one friends, never compromise craft.
                </div>
              </div>
            </div>
          </div>

          {/* FULL UNEDITED CLASSIFIED ARCHIVE */}
          <VaultSecrets />

          {/* Cross-Link Subsystem Directory */}
          <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', fontFamily: 'var(--font-mono)' }}>
            {[
              { to: '/vault', icon: '🏎️', title: '120+ CLASSIFIED GARAGE', desc: 'Pagani, Koenigsegg, Porsche 918 telemetry', color: 'var(--color-gold)' },
              { to: '/uses', icon: '💻', title: 'WORKSTATION & HARDWARE', desc: 'RTX GPUs, mech keyboards & Linux dotfiles', color: '#FFF' },
              { to: '/timeline', icon: '🎖️', title: 'CAREER & HACKATHONS', desc: 'CTF podiums, deployments & cyber ops', color: '#FFF' },
            ].map((link) => (
              <Link
                key={link.to} to={link.to}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'rgba(16, 16, 20, 0.6)',
                  border: '1px solid rgba(232, 213, 181, 0.14)', borderRadius: '6px', textDecoration: 'none', color: '#FFF', transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(232, 213, 181, 0.14)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 'bold', color: link.color }}>{link.icon} {link.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#8E8D8A', marginTop: '2px' }}>{link.desc}</div>
                </div>
                <span style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>↗</span>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: '36px', textAlign: 'center', fontSize: '0.72rem', color: '#555', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
            END OF DOSSIER // DECLASSIFIED UNDER BUREAU VAULT PROTOCOL // LEVEL 6 ARCHIVE
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .vault-hero-grid {
            grid-template-columns: 1fr !important;
            overflow-y: auto;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
};

export default Classified;
