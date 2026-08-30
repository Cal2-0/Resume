import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Lock, Unlock, Play, RotateCw, CheckCircle2, 
  Heart, Compass, Flame, Coffee, Car, Film, UserCheck, Zap, ArrowRight
} from 'lucide-react';
import { CONFESSIONS_DATA } from './VaultSecrets';

export const VaultRoulette = ({ onSelectDossier, selectedDossierId, unlockedIds, onUnlock, embedded = false }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef(null);

  const numSlices = CONFESSIONS_DATA.length;
  const sliceAngle = 360 / numSlices;

  // Web Audio click synth
  const playClickSound = (pitch = 800) => {
    if (!audioEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  };

  const playWinSound = () => {
    if (!audioEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.3);
      });
    } catch (e) {}
  };

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowResult(false);

    const targetSlice = Math.floor(Math.random() * numSlices);
    const extraRotations = (5 + Math.floor(Math.random() * 3)) * 360;
    const targetSliceAngle = (targetSlice * sliceAngle) + (sliceAngle / 2);
    const currentRot = rotation;
    const baseRotation = Math.ceil(currentRot / 360) * 360;
    const finalRotation = baseRotation + extraRotations + (360 - targetSliceAngle);

    setRotation(finalRotation);

    let tickCount = 0;
    const tickInterval = setInterval(() => {
      tickCount++;
      playClickSound(500 + (tickCount % 5) * 60);
      if (tickCount > 28) clearInterval(tickInterval);
    }, 100);

    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);
      setActiveIndex(targetSlice);
      setShowResult(true);
      const chosenItem = CONFESSIONS_DATA[targetSlice];
      if (onSelectDossier) onSelectDossier(chosenItem);
      if (onUnlock) onUnlock(chosenItem.id);
      playWinSound();
    }, 3800);
  };

  useEffect(() => {
    if (selectedDossierId) {
      const idx = CONFESSIONS_DATA.findIndex(d => d.id === selectedDossierId);
      if (idx !== -1 && idx !== activeIndex && !isSpinning) {
        setActiveIndex(idx);
      }
    }
  }, [selectedDossierId, isSpinning]);

  const activeDossier = CONFESSIONS_DATA[activeIndex] || CONFESSIONS_DATA[0];

  // Slice color palette — elegant alternating
  const SLICE_COLORS = [
    '#0F0F14', '#171620', '#0F0F14', '#171620',
    '#0F0F14', '#171620', '#0F0F14', '#171620', '#0F0F14'
  ];

  const wheelContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      
      {/* THE WHEEL */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Wheel Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: embedded ? '420px' : '340px',
          aspectRatio: '1 / 1',
          margin: '0 auto',
          filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.8))'
        }}>

          {/* Top Pointer */}
          <div style={{
            position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
            zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <div style={{
              width: 0, height: 0,
              borderLeft: '11px solid transparent', borderRight: '11px solid transparent',
              borderTop: '22px solid var(--color-gold, #E8D5B5)',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))'
            }} />
          </div>

          {/* Outer Brass Ring */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid var(--color-gold, #E8D5B5)',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 0 30px rgba(232, 213, 181, 0.12)',
            pointerEvents: 'none', zIndex: 10
          }} />

          {/* Secondary Inner Ring */}
          <div style={{
            position: 'absolute', inset: '6px', borderRadius: '50%',
            border: '1px solid rgba(232, 213, 181, 0.15)',
            pointerEvents: 'none', zIndex: 10
          }} />

          {/* Spinning Wheel */}
          <div 
            ref={wheelRef}
            style={{
              width: '100%', height: '100%', borderRadius: '50%',
              transition: 'transform 3.8s cubic-bezier(0.12, 0.8, 0.15, 1.0)',
              transform: `rotate(${rotation}deg)`,
              cursor: isSpinning ? 'wait' : 'pointer'
            }}
            onClick={!isSpinning ? spinWheel : undefined}
          >
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', display: 'block' }}>
              <defs>
                <radialGradient id="hubGradRoulette" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2A2824" />
                  <stop offset="60%" stopColor="#141418" />
                  <stop offset="100%" stopColor="#08080A" />
                </radialGradient>
                <filter id="sliceGlow">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Slices */}
              {CONFESSIONS_DATA.map((dossier, i) => {
                const startAngle = i * sliceAngle;
                const endAngle = (i + 1) * sliceAngle;
                const rad1 = (startAngle - 90) * (Math.PI / 180);
                const rad2 = (endAngle - 90) * (Math.PI / 180);
                const x1 = 200 + 190 * Math.cos(rad1);
                const y1 = 200 + 190 * Math.sin(rad1);
                const x2 = 200 + 190 * Math.cos(rad2);
                const y2 = 200 + 190 * Math.sin(rad2);
                const pathData = `M 200 200 L ${x1} ${y1} A 190 190 0 0 1 ${x2} ${y2} Z`;
                
                const isUnlocked = unlockedIds.includes(dossier.id);
                const fill = SLICE_COLORS[i] || '#121217';
                
                // Text + icon position
                const textAngle = startAngle + sliceAngle / 2;
                const textRad = (textAngle - 90) * (Math.PI / 180);
                const iconX = 200 + 145 * Math.cos(textRad);
                const iconY = 200 + 145 * Math.sin(textRad);
                const labelX = 200 + 120 * Math.cos(textRad);
                const labelY = 200 + 120 * Math.sin(textRad);

                // Segment emoji
                const emojis = ['🎯', '🕶️', '☕', '🧭', '🏎️', '🎮', '🍳', '🎨', '⚡'];

                return (
                  <g key={dossier.id}>
                    <path 
                      d={pathData} fill={fill} 
                      stroke="rgba(232, 213, 181, 0.2)" strokeWidth="0.8"
                    />
                    {/* Segment divider accent */}
                    <line 
                      x1="200" y1="200" x2={x1} y2={y1} 
                      stroke="rgba(232, 213, 181, 0.12)" strokeWidth="0.5" 
                    />
                    
                    {/* Segment number */}
                    <text
                      x={iconX} y={iconY}
                      fill={isUnlocked ? '#E8D5B5' : '#666'}
                      fontSize="11" fontFamily="var(--font-mono, monospace)"
                      fontWeight="700" textAnchor="middle" dominantBaseline="central"
                      transform={`rotate(${textAngle + 90}, ${iconX}, ${iconY})`}
                      letterSpacing="1"
                    >
                      0{i + 1}
                    </text>
                    
                    {/* Category shortname */}
                    <text
                      x={labelX} y={labelY}
                      fill={isUnlocked ? 'rgba(232, 213, 181, 0.6)' : '#444'}
                      fontSize="7" fontFamily="var(--font-mono, monospace)"
                      textAnchor="middle" dominantBaseline="central"
                      transform={`rotate(${textAngle + 90}, ${labelX}, ${labelY})`}
                      letterSpacing="0.5"
                    >
                      {dossier.category.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Hub */}
              <circle cx="200" cy="200" r="50" fill="url(#hubGradRoulette)" stroke="var(--color-gold, #E8D5B5)" strokeWidth="2.5" />
              <circle cx="200" cy="200" r="42" fill="none" stroke="rgba(232, 213, 181, 0.2)" strokeDasharray="2 3" />
              <circle cx="200" cy="200" r="35" fill="none" stroke="rgba(232, 213, 181, 0.08)" />
              
              <text x="200" y="193" fill="var(--color-gold, #E8D5B5)" fontSize="9" fontFamily="var(--font-mono, monospace)" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                BUREAU
              </text>
              <text x="200" y="205" fill="#8E8D8A" fontSize="7.5" fontFamily="var(--font-mono, monospace)" textAnchor="middle" letterSpacing="1">
                VAULT
              </text>
              <text x="200" y="215" fill="rgba(232, 213, 181, 0.4)" fontSize="6" fontFamily="var(--font-mono, monospace)" textAnchor="middle">
                ✦
              </text>
            </svg>
          </div>
        </div>

        {/* Spin Button */}
        <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            style={{
              background: isSpinning ? 'rgba(232, 213, 181, 0.08)' : 'var(--color-gold, #E8D5B5)',
              color: isSpinning ? 'var(--color-gold, #E8D5B5)' : '#0A0A0B',
              border: '1px solid var(--color-gold, #E8D5B5)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              padding: '10px 24px',
              borderRadius: '4px',
              cursor: isSpinning ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: isSpinning ? 'none' : '0 0 18px rgba(232, 213, 181, 0.2)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => { if (!isSpinning) e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { if (!isSpinning) e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <RotateCw size={14} style={{ animation: isSpinning ? 'spin 1s linear infinite' : 'none' }} />
            {isSpinning ? 'DECRYPTING...' : '✦ SPIN ROULETTE'}
          </button>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#666' }}>
            {showResult ? `Decrypted: Case 0${activeIndex + 1}` : 'Click wheel or button to spin'}
          </span>
        </div>
      </div>

      {/* DECLASSIFIED RESULT CARD */}
      <div style={{
        background: 'rgba(16, 16, 20, 0.8)',
        border: '1px solid rgba(232, 213, 181, 0.18)',
        borderLeft: '3px solid var(--color-gold, #E8D5B5)',
        borderRadius: '6px',
        padding: '18px 20px',
        fontFamily: 'var(--font-mono)',
        position: 'relative',
        minHeight: embedded ? '180px' : '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease'
      }}>
        <div>
          {/* Dossier Meta */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ color: 'var(--color-gold, #E8D5B5)', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              CASE 0{activeIndex + 1} // {activeDossier.category}
            </span>
            <span style={{ 
              fontSize: '0.62rem', background: 'rgba(232, 213, 181, 0.06)', 
              color: 'var(--color-gold, #E8D5B5)', padding: '2px 7px', borderRadius: '2px',
              border: '1px solid rgba(232, 213, 181, 0.15)'
            }}>
              {activeDossier.tag}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: embedded ? '1.2rem' : '1.35rem',
            color: '#FFF', margin: '0 0 10px 0', lineHeight: 1.25
          }}>
            {activeDossier.title}
          </h3>

          {/* Confession */}
          <p style={{
            color: '#E8D5B5', fontSize: '0.84rem', lineHeight: 1.55, margin: 0,
            display: '-webkit-box', WebkitLineClamp: embedded ? 4 : 6, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>
            "{activeDossier.confession}"
          </p>

          {/* Field Note */}
          {activeDossier.redactedDetail && (
            <div style={{ 
              background: 'rgba(0,0,0,0.3)', border: '1px dashed rgba(232, 213, 181, 0.15)', 
              padding: '8px 12px', borderRadius: '3px', fontSize: '0.7rem',
              color: '#8E8D8A', marginTop: '10px'
            }}>
              <strong style={{ color: 'var(--color-gold, #E8D5B5)' }}>FIELD NOTE: </strong>
              {activeDossier.redactedDetail}
            </div>
          )}
        </div>

        {/* Bottom Verification */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(232, 213, 181, 0.1)', paddingTop: '10px', marginTop: '12px', fontSize: '0.68rem'
        }}>
          <span style={{ color: '#00ffcc', fontWeight: 'bold' }}>
            ✓ {activeDossier.truthRating}
          </span>
          <span style={{ color: '#666' }}>
            {activeDossier.securityLevel}
          </span>
        </div>
      </div>
    </div>
  );

  // If embedded (inside Classified hero), render without outer wrapper
  if (embedded) {
    return wheelContent;
  }

  // Standalone mode with full wrapper
  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(17, 17, 20, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%)',
      border: '1px solid rgba(232, 213, 181, 0.18)',
      borderRadius: '8px',
      padding: '28px',
      marginBottom: '36px',
      boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
      position: 'relative'
    }}>
      {/* Bureau Section Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid rgba(232, 213, 181, 0.15)',
        paddingBottom: '16px', marginBottom: '28px', flexWrap: 'wrap', gap: '12px'
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold, #E8D5B5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
            [ BUREAU INTERACTIVE MECHANISM // SEC-007 ]
          </div>
          <h2 style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#FFF', margin: 0 }}>
            The Vault Roulette
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
          <span style={{ color: '#8E8D8A' }}>
            DISCOVERED: <strong style={{ color: 'var(--color-gold, #E8D5B5)' }}>{unlockedIds.length} / {numSlices}</strong>
          </span>
        </div>
      </div>

      {wheelContent}
    </div>
  );
};

export default VaultRoulette;
