import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Unlock, Lock, Zap, RefreshCw, Trophy, Sparkles, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import '../styles/scenes/editorial.css'; 

const Classified = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [decryptionProgress, setDecryptionProgress] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [glitchText, setGlitchText] = useState(false);
  const [firewallScore, setFirewallScore] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const [guiltyHovered, setGuiltyHovered] = useState(false);
  const [babySticker, setBabySticker] = useState('🕶️');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Baby Photo Decryption Sequence
  const handleDecryptPhoto = () => {
    if (isDecrypted || isDecrypting) return;
    setIsDecrypting(true);
    setDecryptionProgress(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setDecryptionProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsDecrypting(false);
        setIsDecrypted(true);
      }
    }, 120);
  };

  // Firewall Bypass Mini-Game
  useEffect(() => {
    if (gameWon) return;
    const timer = setInterval(() => {
      setActiveNode(Math.floor(Math.random() * 6));
    }, 900);
    return () => clearInterval(timer);
  }, [gameWon]);

  const handleNodeClick = (index) => {
    if (index === activeNode) {
      const nextScore = firewallScore + 1;
      setFirewallScore(nextScore);
      if (nextScore >= 5) {
        setGameWon(true);
      }
    }
  };

  const resetGame = () => {
    setFirewallScore(0);
    setGameWon(false);
  };

  return (
    <div className="blog-reader-scene" style={{ backgroundColor: '#050507', minHeight: '100vh', padding: '90px 24px 80px', color: '#E8D5B5' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Navigation Bar */}
        <div className="reader-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/" className="reader-back-btn" style={{ color: 'var(--color-gold, #C5A880)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            <ArrowLeft size={18} />
            ERASE AUDIT LOGS & RETURN
          </Link>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="reader-meta-tag" style={{ color: '#ff3333', border: '1px solid #ff3333', padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              [ CLEARANCE: LEVEL 6 CONFIDENTIAL ]
            </span>
            <span className="reader-meta-tag" style={{ color: '#00ff00', border: '1px solid #00ff00', padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              [ PROTOCOL: BABY_VAULT_ACTIVE ]
            </span>
          </div>
        </div>

        {/* Widescreen Header Banner */}
        <header style={{ borderBottom: '2px solid #ff3333', paddingBottom: '20px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ color: '#ff3333', fontFamily: 'var(--font-mono, monospace)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
              DECLASSIFIED: THE OPERATIVE
            </h1>
            <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', margin: '6px 0 0 0' }}>
              ACCESS LEVEL CONFIRMED // KONAMI CLEARANCE OVERRIDE ACCEPTED // PROTOTYPE DOSSIER UNLOCKED
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            <span style={{ padding: '6px 12px', background: 'rgba(255,51,51,0.1)', border: '1px solid #ff3333', color: '#ff3333' }}>
              STATUS: ARCHIVAL DATA
            </span>
            <span style={{ padding: '6px 12px', background: 'rgba(0,255,0,0.1)', border: '1px solid #00ff00', color: '#00ff00' }}>
              INTEGRITY: 100%
            </span>
          </div>
        </header>

        {/* 3-COLUMN FULL HORIZONTAL DASHBOARD */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', fontFamily: 'var(--font-mono)' }}>
          
          {/* COLUMN 1: OPERATIVE DOSSIER & REDACTED SECRETS */}
          <div style={{ border: '1px solid rgba(255,51,51,0.4)', backgroundColor: 'rgba(20, 10, 14, 0.6)', padding: '24px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,51,51,0.3)', paddingBottom: '10px', marginBottom: '16px' }}>
              <span style={{ color: '#ff5555', fontWeight: 'bold', fontSize: '0.9rem' }}>📁 SUBJECT PROFILE // FILE: 001</span>
              <span style={{ color: '#8E8D8A', fontSize: '0.75rem' }}>ID: DSOUZA-CJ</span>
            </div>

            <h2 style={{ color: '#FFF', fontSize: '1.3rem', margin: '0 0 16px 0' }}>CALVIN JUDE D'SOUZA</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem', lineHeight: '1.6' }}>
              <div>
                <strong style={{ color: 'var(--color-gold, #C5A880)' }}>KNOWN ALIASES:</strong>
                <div style={{ color: '#CCC', marginTop: '2px' }}>The Architect, "That guy who builds weird AI systems at 3 AM", F1 Data Junkie</div>
              </div>

              <div>
                <strong style={{ color: 'var(--color-gold, #C5A880)' }}>GUILTY PLEASURE: </strong>
                <span 
                  onMouseEnter={() => setGuiltyHovered(true)}
                  onMouseLeave={() => setGuiltyHovered(false)}
                  style={{
                    backgroundColor: guiltyHovered ? 'transparent' : '#333',
                    color: guiltyHovered ? '#00ff00' : '#333',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderBottom: '1px dotted #ff3333'
                  }}
                  title="Hover to decrypt!"
                >
                  {guiltyHovered ? 'Watching 4-hour YouTube video essays on defunct 90s theme parks' : '[ HOVER TO DECRYPT REDACTED CONTENT ]'}
                </span>
              </div>

              <div>
                <strong style={{ color: 'var(--color-gold, #C5A880)' }}>SYSTEM WEAKNESSES:</strong>
                <ul style={{ paddingLeft: '1.2rem', margin: '6px 0 0 0', color: '#BBB' }}>
                  <li>NPM peer dependency conflicts (Instant rage trigger)</li>
                  <li>Over-engineering simple static buttons with 3 GSAP timelines</li>
                  <li>Coffee (Critical dependence: 4+ cups estimated daily)</li>
                  <li>Inability to resist testing security on random IoT devices</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: 'var(--color-gold, #C5A880)' }}>UNVERIFIED RUMORS:</strong>
                <div style={{ color: '#BBB', marginTop: '2px' }}>
                  Reports suggest the subject once wrote a complex multi-group Regex on the first try without consulting StackOverflow or ChatGPT. The Bureau considers this statistically impossible.
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,51,51,0.2)', paddingTop: '12px', marginTop: '8px' }}>
                <strong style={{ color: 'var(--color-gold, #C5A880)' }}>DIRECTIVE:</strong>
                <div style={{ color: '#00ff00', marginTop: '2px' }}>
                  Build sovereign systems that bridge machine intelligence and human intuition, while avoiding the accidental creation of Skynet.
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: EXHIBIT A - THE BABY PHOTO DECRYPTION GAME */}
          <div style={{ border: '1px solid #ff3333', backgroundColor: 'rgba(25, 10, 15, 0.8)', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,51,51,0.3)', paddingBottom: '10px', marginBottom: '16px' }}>
              <span style={{ color: '#ff3333', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
                👶 EXHIBIT A: EARLY PROTOTYPE
              </span>
              <span style={{ color: isDecrypted ? '#00ff00' : '#ff5555', fontSize: '0.75rem', fontWeight: 'bold' }}>
                {isDecrypted ? '[ DECRYPTED 100% ]' : '[ ENCRYPTED AES-256 ]'}
              </span>
            </div>

            {/* Photo Container */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px', borderRadius: '4px', overflow: 'hidden', border: isDecrypted ? '2px solid #00ff00' : '2px dashed #ff3333', boxShadow: isDecrypted ? '0 0 25px rgba(0,255,0,0.3)' : 'none', transition: 'all 0.4s ease' }}>
              
              <img 
                src="/baby.png" 
                alt="Baby Calvin" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                  filter: isDecrypted ? 'none' : 'grayscale(100%) blur(12px) contrast(150%)',
                  transition: 'filter 0.5s ease'
                }}
              />

              {/* Decryption Progress Scanner Overlay */}
              {isDecrypting && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  <div style={{ color: '#00ff00', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    BRUTE FORCING CIPHER... {decryptionProgress}%
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#222', border: '1px solid #00ff00' }}>
                    <div style={{ width: `${decryptionProgress}%`, height: '100%', background: '#00ff00', transition: 'width 0.1s' }} />
                  </div>
                </div>
              )}

              {/* Locked State Redacted Overlay */}
              {!isDecrypted && !isDecrypting && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 0, 0, 0.4)' }}>
                  
                  {/* Redacted Bar */}
                  <div style={{ 
                    backgroundColor: '#111', 
                    border: '1px solid #ff3333',
                    padding: '8px 24px',
                    transform: 'rotate(-4deg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.8)'
                  }}>
                    <span style={{ color: '#ff3333', fontSize: '0.8rem', letterSpacing: '4px', fontWeight: 'bold' }}>
                      [ TOP SECRET PROTOTYPE ]
                    </span>
                  </div>

                  <button
                    onClick={handleDecryptPhoto}
                    style={{
                      marginTop: '20px',
                      background: '#ff3333',
                      border: 'none',
                      color: '#000',
                      fontWeight: 'bold',
                      padding: '10px 18px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 0 15px rgba(255, 51, 51, 0.6)',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Unlock size={16} /> [ DECRYPT OPERATIVE PHOTO ]
                  </button>
                </div>
              )}

              {/* Decrypted Badge Stamp & Sticker Overlay */}
              {isDecrypted && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.85)',
                    border: '1px solid #00ff00',
                    color: '#00ff00',
                    padding: '4px 8px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    boxShadow: '0 0 10px rgba(0,255,0,0.5)'
                  }}>
                    VERIFIED HUMAN ✦
                  </div>

                  {/* Customizable Sticker */}
                  <div style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '2.2rem', filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.8))', cursor: 'pointer' }} onClick={() => setBabySticker(babySticker === '🕶️' ? '👑' : babySticker === '👑' ? '🏎️' : '🕶️')} title="Click sticker to change!">
                    {babySticker}
                  </div>
                </>
              )}

            </div>

            {/* Prototype Specs */}
            <div style={{ marginTop: '16px', width: '100%', fontSize: '0.75rem', color: '#BBB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dotted rgba(255,255,255,0.1)' }}>
                <span>CODENAME:</span>
                <strong style={{ color: '#FFF' }}>Junior Architect 001</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dotted rgba(255,255,255,0.1)' }}>
                <span>PRIMARY DIET:</span>
                <strong style={{ color: '#FFF' }}>100% Milk / 0% Espresso</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dotted rgba(255,255,255,0.1)' }}>
                <span>OPERATIONAL HAZARD:</span>
                <strong style={{ color: '#ff5555' }}>High-Frequency Crying</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span>STATUS:</span>
                <strong style={{ color: '#00ff00' }}>Pre-IDE Era (Pure Organic Intelligence)</strong>
              </div>
            </div>

            {isDecrypted && (
              <button 
                onClick={() => setIsDecrypted(false)} 
                style={{ marginTop: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#8E8D8A', fontSize: '0.7rem', padding: '4px 10px', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
              >
                [ RE-LOCK ENCRYPTION ]
              </button>
            )}

          </div>

          {/* COLUMN 3: FIREWALL BREACH MINI-GAME */}
          <div style={{ border: '1px solid rgba(0,255,0,0.3)', backgroundColor: 'rgba(10, 20, 14, 0.6)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '10px', marginBottom: '16px' }}>
                <span style={{ color: '#00ff00', fontWeight: 'bold', fontSize: '0.9rem' }}>🎮 SECURITY CLEARANCE CHALLENGE</span>
                <span style={{ color: '#00ff00', fontSize: '0.75rem' }}>SCORE: {firewallScore}/5</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#BBB', margin: '0 0 16px 0' }}>
                Bypass the Bureau firewall nodes to unlock maximum root clearance. Click the active flashing green nodes before they relocate!
              </p>

              {/* Node Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                {[0, 1, 2, 3, 4, 5].map((idx) => {
                  const isActive = activeNode === idx && !gameWon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNodeClick(idx)}
                      style={{
                        height: '65px',
                        background: isActive ? '#00ff00' : 'rgba(0, 30, 10, 0.4)',
                        border: `1px solid ${isActive ? '#00ff00' : 'rgba(0, 255, 0, 0.2)'}`,
                        color: isActive ? '#000' : '#00ff00',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        cursor: isActive ? 'pointer' : 'default',
                        boxShadow: isActive ? '0 0 15px #00ff00' : 'none',
                        transition: 'all 0.15s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <Zap size={16} />
                      NODE 0{idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Victory State */}
              {gameWon && (
                <div style={{ background: 'rgba(0, 255, 0, 0.12)', border: '1px solid #00ff00', padding: '16px', borderRadius: '4px', textAlign: 'center', animation: 'vaultFadeIn 0.3s ease-out' }}>
                  <Trophy size={32} color="#00ff00" style={{ margin: '0 auto 8px' }} />
                  <div style={{ color: '#00ff00', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    CLEARANCE GRANTED // LEVEL 6 ROOT
                  </div>
                  <p style={{ color: '#FFF', fontSize: '0.75rem', margin: '4px 0 12px 0' }}>
                    You have successfully compromised the Bureau test mainframe!
                  </p>
                  <button 
                    onClick={resetGame}
                    style={{ background: '#00ff00', color: '#000', border: 'none', fontWeight: 'bold', padding: '6px 14px', fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                  >
                    PLAY AGAIN ↻
                  </button>
                </div>
              )}
            </div>

            {/* Terminal Quick Overrides */}
            <div style={{ borderTop: '1px solid rgba(0,255,0,0.2)', paddingTop: '16px', marginTop: '16px' }}>
              <div style={{ color: '#00ff00', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px' }}>
                ⌨️ COMMAND SHORTCUT OVERRIDE:
              </div>
              <div style={{ color: '#8E8D8A', fontSize: '0.7rem' }}>
                Open CLI with [ ` ] and execute `matrix`, `neofetch`, or `cat classified.txt` for live telemetry.
              </div>
            </div>

          </div>

        </div>

        {/* Footer Note */}
        <p style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.75rem', color: '#ff5555', fontFamily: 'var(--font-mono)' }}>
          END OF DOSSIER // THIS TRANSMISSION IS CLASSIFIED UNDER PROTOCOL 001 // SECURE SESSION ACTIVE
        </p>

      </div>
    </div>
  );
};

export default Classified;
