import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    category: "HYPERCAR ENGINEERING",
    question: "Why does the Koenigsegg CC850's clutch pedal stall the engine if you lift off too quickly without throttle?",
    options: [
      { 
        text: "A direct mechanical cable pulls open the heavy triple-plate clutch assembly", 
        isCorrect: false,
        breakdown: "INCORRECT: There is zero mechanical linkage or cable. The clutch pedal is 100% fly-by-wire with hydraulic haptic resistance." 
      },
      { 
        text: "Christian von Koenigsegg wrote custom ECU code specifically simulating mechanical human stalling", 
        isCorrect: true,
        breakdown: "CORRECT: In an automated 9-speed transmission, computers usually prevent stalls. Koenigsegg intentionally coded stall logic to preserve the emotional romance and discipline of driving a manual." 
      },
      { 
        text: "The starter motor overheats and trips an analog thermal fuse", 
        isCorrect: false,
        breakdown: "INCORRECT: The starter generator is an integrated high-voltage unit that never trips during low-speed clutch modulation." 
      },
      { 
        text: "The 9-speed gearbox locks two clutches simultaneously as a mechanical brake", 
        isCorrect: false,
        breakdown: "INCORRECT: Locking two opposing gear clutches would shear the Light Speed Transmission gearset instantly." 
      }
    ],
    deepDive: "The CC850's Engage Shift System (ESS) is an engineering masterpiece: a simulated 6-speed gated manual controlling a 9-speed, 7-clutch automated transmission."
  },
  {
    id: 2,
    category: "THERMODYNAMICS & FUELS",
    question: "Why does the Koenigsegg Jesko produce 1,600 hp on E85 biofuel, but 'only' 1,280 hp on 95-octane pump gasoline?",
    options: [
      { 
        text: "Ethanol contains 50% more chemical energy density by mass than gasoline", 
        isCorrect: false,
        breakdown: "INCORRECT: Pure ethanol actually has 33% LESS energy density by mass (~27 MJ/kg) than standard gasoline (~43 MJ/kg)." 
      },
      { 
        text: "Ethanol has a latent heat of vaporization 2.4x higher than gas, cooling the intake charge and allowing higher anti-knock boost", 
        isCorrect: true,
        breakdown: "CORRECT: As E85 vaporizes, it acts as a liquid chemical intercooler, dropping intake temps by 30°C. Combined with 108 RON knock resistance, the ECU can push peak cylinder pressure past 250 bar." 
      },
      { 
        text: "The Jesko injects nitrous oxide whenever an ethanol sensor detects alcohol content", 
        isCorrect: false,
        breakdown: "INCORRECT: Zero nitrous. Pure twin-turbo thermodynamic air-fuel calibration." 
      },
      { 
        text: "The turbos spin 10,000 RPM faster due to lower exhaust gas molecular weight", 
        isCorrect: false,
        breakdown: "INCORRECT: Turbine rotational limits are bounded by compressor aerodynamics and thermal creep, not fuel exhaust mass." 
      }
    ],
    deepDive: "Latent heat of vaporization turns high-volume ethanol injection into a cryogenic charge cooler inside the intake port."
  },
  {
    id: 3,
    category: "AEROSPACE METALLURGY",
    question: "Why did the Lockheed SR-71 Blackbird leak JP-7 fuel continuously while sitting on the tarmac before takeoff?",
    options: [
      { 
        text: "Budget cuts forced Skunk Works to use low-grade rubber tank gaskets", 
        isCorrect: false,
        breakdown: "INCORRECT: Kelly Johnson never skimped on materials; rubber gaskets would vaporize at the 500°C skin temperatures generated at Mach 3." 
      },
      { 
        text: "The titanium panels were loosely fitted at room temperature so thermal expansion at Mach 3.2 would seal the seams", 
        isCorrect: true,
        breakdown: "CORRECT: At Mach 3.2, skin friction heats the titanium to 560°C, expanding the airframe by several inches. If sealed at room temperature, the panels would buckle and rip apart." 
      },
      { 
        text: "JP-7 fuel was designed to evaporate rapidly on the ground to reduce takeoff weight", 
        isCorrect: false,
        breakdown: "INCORRECT: JP-7 is so chemically stable it barely evaporates and will not ignite even if a burning match is dropped into an open puddle." 
      },
      { 
        text: "The fuel leaks were redirected to cool the landing gear brakes during taxiing", 
        isCorrect: false,
        breakdown: "INCORRECT: The tires were actually infused with metallic aluminum powder and pressurized with pure nitrogen to survive heat." 
      }
    ],
    deepDive: "Titanium procured covertly by the CIA from the Soviet Union was engineered with loose tolerances that only became airtight at Mach 3+."
  },
  {
    id: 4,
    category: "CRYPTOGRAPHY & ARCHAEOLOGY",
    question: "What distinguishes Door B of the subterranean Padmanabhaswamy Temple Vaults from Vault A's $22B discovery?",
    options: [
      { 
        text: "It was cracked open using diamond pneumatic drills in 2011 revealing $50B in silver", 
        isCorrect: false,
        breakdown: "INCORRECT: Door B has NEVER been breached in modern times; opening was permanently halted by royal edict and Supreme Court orders." 
      },
      { 
        text: "It features the carved Nagabandham serpent lock with zero keyholes, sealed by acoustic sound frequency lore", 
        isCorrect: true,
        breakdown: "CORRECT: The door has no mechanical bolts, hinges, or keyholes. Two coiled cobras guard the granite jambs, traditionally sealed via Vedic Garuda acoustic frequencies." 
      },
      { 
        text: "It is an underwater vault located 2 miles offshore beneath the Indian Ocean", 
        isCorrect: false,
        breakdown: "INCORRECT: It is situated directly beneath the granite sanctum sanctorum of the stone temple complex in Trivandrum." 
      },
      { 
        text: "It was constructed by Portuguese explorers in the 16th century to hide maritime spices", 
        isCorrect: false,
        breakdown: "INCORRECT: The temple vaults were accumulated by the Travancore Royal Dynasty over two millennia of global pepper trade." 
      }
    ],
    deepDive: "Door B represents one of the world's most enduring physical, acoustic, and cultural cryptographic locks."
  },
  {
    id: 5,
    category: "POST-QUANTUM SECURITY",
    question: "In post-quantum cryptography, why is ML-KEM-1024 safe against Shor's Algorithm while standard RSA-4096 breaks?",
    options: [
      { 
        text: "ML-KEM uses 100,000-bit prime numbers that quantum computers run out of RAM trying to factor", 
        isCorrect: false,
        breakdown: "INCORRECT: Increasing key size does not defeat Shor's algorithm, which solves prime factorization in polynomial time O((log N)³)." 
      },
      { 
        text: "Finding shortest vectors in high-dimensional lattices (Learning With Errors) lacks periodic abelian symmetry", 
        isCorrect: true,
        breakdown: "CORRECT: Shor's quantum speedup relies on Quantum Fourier Transforms detecting period lengths. Lattice geometries have no periodic structure for QFT to exploit." 
      },
      { 
        text: "Quantum computers cannot read encrypted data stored on solid-state drives", 
        isCorrect: false,
        breakdown: "INCORRECT: Quantum computers execute algorithms on memory buffers; physical drive media is irrelevant." 
      },
      { 
        text: "Lattice encryption requires an active internet connection to NIST key servers", 
        isCorrect: false,
        breakdown: "INCORRECT: PQC is fully mathematical, standalone, and executes offline in microsecond assembly." 
      }
    ],
    deepDive: "NIST's newly standardized ML-KEM (Module-Lattice-Based Key-Encapsulation) is the cryptographic armor Calvin investigated in Project KALERA."
  },
  {
    id: 6,
    category: "CALVIN'S BUILDS",
    question: "At the Innovex Hackathon, what did Calvin and his team build in 24 hours that earned a Special Commendation from Judges?",
    options: [
      { 
        text: "A crypto trading bot that lost ₹5,000 on testnet", 
        isCorrect: false,
        breakdown: "INCORRECT: Definitely not a financial disaster simulation." 
      },
      { 
        text: "MassEd.ex: Real-time crowd safety fusing YOLOv8 computer vision with raw-packet device discovery", 
        isCorrect: true,
        breakdown: "CORRECT: Built in 24 continuous hours under zero sleep, combining camera crowd-density alerts with Scapy raw packet sniffing to detect stampede precursors." 
      },
      { 
        text: "A recipe generator that only recommends pizza and Meghana biryani", 
        isCorrect: false,
        breakdown: "INCORRECT: While that matches Calvin's real-life diet, the judges commended an emergency crowd-density platform." 
      },
      { 
        text: "An autonomous drone navigation app built for farming", 
        isCorrect: false,
        breakdown: "INCORRECT: The system focused on crowd monitoring, computer vision, and network telemetry." 
      }
    ],
    deepDive: "MassEd.ex demonstrated that physical computer vision and network packet discovery can fuse into an early-warning life-safety engine."
  },
  {
    id: 7,
    category: "SECRET ARCHITECTURE",
    question: "What is the true operational purpose of the windowless 550-foot skyscraper at 33 Thomas Street in Lower Manhattan?",
    options: [
      { 
        text: "A luxury fallout bunker built for Wall Street hedge fund managers", 
        isCorrect: false,
        breakdown: "INCORRECT: It contains zero residential suites, windows, or amenities; it is an industrial machine fortress." 
      },
      { 
        text: "A nuclear-hardened AT&T telecommunications hub and alleged NSA surveillance fortress codenamed TITANPOINTE", 
        isCorrect: true,
        breakdown: "CORRECT: Engineered by John Carl Warnecke to survive a nuclear blast, housing international transatlantic telephone switches and covert NSA collection suites." 
      },
      { 
        text: "A decoy building constructed by Hollywood film studios for cyberpunk movie sets", 
        isCorrect: false,
        breakdown: "INCORRECT: It is a critical, heavily guarded telecommunications node routing millions of international calls daily." 
      },
      { 
        text: "The US Federal Reserve's primary gold bar smelting facility", 
        isCorrect: false,
        breakdown: "INCORRECT: The Federal Reserve Bank of New York vault is at 33 Liberty Street, 80 feet below street level." 
      }
    ],
    deepDive: "Leaked Snowden documents revealed TITANPOINTE as a primary NSA listening post tapping foreign communications inside domestic infrastructure."
  },
  {
    id: 8,
    category: "MILITARY AVIONICS",
    question: "Why did the US military cap F-22 Raptor production at 187 jets and invest $1.7T into the single-engine F-35?",
    options: [
      { 
        text: "The F-22's stealth paint dissolved whenever it flew through rain clouds", 
        isCorrect: false,
        breakdown: "INCORRECT: Early stealth coatings required climate-controlled maintenance hangars, but modern airframes fly through all weather." 
      },
      { 
        text: "Modern combat doctrine shifted from visual-range kinetic dogfights to distributed MADL sensor fusion and data networking", 
        isCorrect: true,
        breakdown: "CORRECT: An F-35 quarterback formation shares target coordinates silently over MADL, killing targets 40 miles away before the enemy's radar even detects an emission." 
      },
      { 
        text: "The F-35 is faster than the F-22 and features 3D thrust vectoring nozzles", 
        isCorrect: false,
        breakdown: "INCORRECT: F-35 is slower (Mach 1.6 vs Mach 2.25) and has zero thrust vectoring; F-22 is dynamically superior in pure dogfights." 
      },
      { 
        text: "The F-22 was secretly retired and replaced by hypersonic orbital gliders", 
        isCorrect: false,
        breakdown: "INCORRECT: F-22 remains in active front-line USAF service as the premier air dominance fighter." 
      }
    ],
    deepDive: "The F-22 is an analog kinetic masterpiece; the F-35 is a distributed Kubernetes cluster in the sky."
  }
];

export const VaultQuiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUESTIONS[currentIdx];

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    if (currentQ.options[idx].isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUESTIONS.length) {
      setCurrentIdx(c => c + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const getClearanceRank = () => {
    if (score === 8) return { rank: "LEVEL 5 // BLACK FILE CLEARANCE", color: "#00ffcc", msg: "Flawless technical intelligence. You understand machines and secrets at an elite level." };
    if (score >= 6) return { rank: "LEVEL 4 // SENIOR INVESTIGATOR", color: "var(--color-gold)", msg: "High operational mastery. You grasp the real engineering behind the mythology." };
    if (score >= 4) return { rank: "LEVEL 2 // TECHNICAL OPERATIVE", color: "#ff9500", msg: "Solid knowledge, but tripped up by thermodynamic and architectural nuances." };
    return { rank: "LEVEL 0 // RE-EXAMINATION REQUIRED", color: "#ff3333", msg: "Underestimated the engineering. Skim the field notes and re-engage." };
  };

  return (
    <div className="vault-panel">
      {/* Header */}
      <div className="vault-panel-header">
        <div>
          <h3 className="vault-panel-title">
            <HelpCircle size={20} color="var(--color-gold)" /> SUBJECT INTERROGATION // ADVANCED TECHNICAL DOSSIER
          </h3>
          <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
            High-difficulty clearance interrogation testing your knowledge on real hypercar engineering, Cold War aerospace, cryptography & secret architecture.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="vault-panel-tag" style={{ background: 'rgba(197, 168, 128, 0.1)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }}>
            QUESTION: {isFinished ? QUESTIONS.length : currentIdx + 1} / {QUESTIONS.length}
          </span>
          <span className="vault-panel-tag" style={{ background: 'rgba(0, 255, 204, 0.1)', color: '#00ffcc', border: '1px solid #00ffcc' }}>
            SCORE: {score}
          </span>
        </div>
      </div>

      {!isFinished ? (
        <div style={{ background: 'rgba(20, 20, 26, 0.65)', border: '1px solid rgba(197, 168, 128, 0.25)', padding: '22px', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>
          
          {/* Category Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.72rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              DOSSIER QUERY #{currentIdx + 1} // {currentQ.category}
            </span>
            <span style={{ color: 'var(--color-silver)', fontSize: '0.68rem' }}>
              DIFFICULTY: HIGH-OCTANE
            </span>
          </div>

          <h4 style={{ color: '#FFF', fontFamily: 'var(--font-display, serif)', fontSize: '1.25rem', margin: '0 0 20px 0', lineHeight: 1.35 }}>
            {currentQ.question}
          </h4>

          {/* Options Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {currentQ.options.map((opt, i) => {
              let bg = 'rgba(15, 14, 22, 0.8)';
              let border = 'rgba(197, 168, 128, 0.2)';
              let color = '#DDD';

              if (isAnswered) {
                if (opt.isCorrect) {
                  bg = 'rgba(0, 255, 204, 0.12)';
                  border = '#00ffcc';
                  color = '#00ffcc';
                } else if (selectedOpt === i) {
                  bg = 'rgba(255, 51, 51, 0.15)';
                  border = '#ff3333';
                  color = '#ff6666';
                }
              } else if (selectedOpt === i) {
                border = 'var(--color-gold)';
              }

              return (
                <div key={i}>
                  <button
                    onClick={() => handleSelect(i)}
                    style={{
                      width: '100%',
                      background: bg,
                      border: `1px solid ${border}`,
                      color: color,
                      padding: '14px 18px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      textAlign: 'left',
                      cursor: isAnswered ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                      lineHeight: 1.4
                    }}
                  >
                    <span><strong>{String.fromCharCode(65 + i)}.</strong> {opt.text}</span>
                    {isAnswered && opt.isCorrect && <CheckCircle2 size={18} color="#00ffcc" style={{ flexShrink: 0, marginLeft: 10 }} />}
                    {isAnswered && !opt.isCorrect && selectedOpt === i && <XCircle size={18} color="#ff5555" style={{ flexShrink: 0, marginLeft: 10 }} />}
                  </button>

                  {/* Complete Answer Breakdown for Every Option */}
                  {isAnswered && (
                    <div style={{
                      margin: '4px 0 8px 12px',
                      padding: '8px 12px',
                      background: opt.isCorrect ? 'rgba(0, 255, 204, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                      borderLeft: `2px solid ${opt.isCorrect ? '#00ffcc' : 'rgba(255, 255, 255, 0.15)'}`,
                      fontSize: '0.74rem',
                      color: opt.isCorrect ? '#00ffcc' : 'var(--color-silver)',
                      lineHeight: 1.35
                    }}>
                      {opt.breakdown}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Deep Dive Note */}
          {isAnswered && (
            <div style={{ background: 'rgba(10, 10, 16, 0.95)', border: '1px solid var(--color-gold)', padding: '14px 18px', borderRadius: '4px', marginBottom: '20px', animation: 'fadeIn 0.25s ease-out' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.74rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={14} /> TACTICAL DEBRIEF:
              </div>
              <div style={{ color: '#EEE', fontSize: '0.82rem', marginTop: '6px', lineHeight: 1.45 }}>
                {currentQ.deepDive}
              </div>
            </div>
          )}

          {isAnswered && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={handleNext}
                style={{
                  background: 'var(--color-gold)',
                  color: '#070709',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(197, 168, 128, 0.3)'
                }}
              >
                {currentIdx + 1 < QUESTIONS.length ? 'NEXT QUESTION →' : 'CALCULATE CLEARANCE →'}
              </button>
            </div>
          )}

        </div>
      ) : (
        <div style={{ background: 'rgba(20, 20, 26, 0.75)', border: '1px solid var(--color-gold)', padding: '36px 20px', borderRadius: '6px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          <Award size={52} color={getClearanceRank().color} style={{ margin: '0 auto 14px' }} />
          <h4 style={{ color: '#FFF', fontSize: '1.5rem', fontFamily: 'var(--font-display)', margin: 0 }}>
            INTERROGATION COMPLETE
          </h4>
          <div style={{ color: getClearanceRank().color, fontSize: '1.15rem', fontWeight: 'bold', margin: '10px 0' }}>
            [{getClearanceRank().rank}]
          </div>
          <p style={{ color: 'var(--color-silver)', fontSize: '0.88rem', maxWidth: '460px', margin: '0 auto 24px', lineHeight: 1.5 }}>
            {getClearanceRank().msg}
          </p>

          <div style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '28px' }}>
            FINAL SCORE: <strong style={{ color: 'var(--color-gold)' }}>{score}</strong> / {QUESTIONS.length} ({(score / QUESTIONS.length * 100).toFixed(0)}%)
          </div>

          <button
            onClick={handleRestart}
            style={{
              background: 'var(--color-gold)',
              color: '#070709',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(197, 168, 128, 0.3)'
            }}
          >
            <RotateCcw size={16} /> RETAKE INTERROGATION
          </button>
        </div>
      )}

    </div>
  );
};
