import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, Sparkles } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    question: "What is Calvin's primary daily survival fuel?",
    options: [
      { text: "Steamed kale & green detox juices", isCorrect: false },
      { text: "Pizza or Biryani (with endless variations)", isCorrect: true },
      { text: "Plain oatmeal and unseasoned chicken", isCorrect: false },
      { text: "Black coffee and photosynthesis", isCorrect: false }
    ],
    explanation: "Pizza (PizzaExpress) and Biryani (Meghana's & Hyderabadi) are non-negotiable staples in the operative diet."
  },
  {
    id: 2,
    question: "If ₹100 Crore were deposited into Calvin's account right now, what happens first?",
    options: [
      { text: "Invests in low-yield mutual funds", isCorrect: false },
      { text: "Buys a fleet of exotic hypercars (Porsche 918, Pagani, Ferrari FXX-K)", isCorrect: true },
      { text: "Buys a small farm in New Zealand", isCorrect: false },
      { text: "Deletes all social media and moves into the forest", isCorrect: false }
    ],
    explanation: "\"What would I buy? Cars. I would buy so many cars.\" The garage takes immediate priority."
  },
  {
    id: 3,
    question: "What is the single most spontaneous decision Calvin has made?",
    options: [
      { text: "Woke up and spontaneously traveled to another state (Kasaragod/Mysore) with no ticket booked 30 mins prior", isCorrect: true },
      { text: "Ordered extra cheese without consulting friends", isCorrect: false },
      { text: "Dyed his hair neon green for 24 hours", isCorrect: false },
      { text: "Switched code editors mid-project", isCorrect: false }
    ],
    explanation: "Literally woke up, decided to go 30 minutes prior, zero tickets booked, hopped on a train across states and returned."
  },
  {
    id: 4,
    question: "Who are the 3 dream guests invited to Calvin's ultimate dinner table?",
    options: [
      { text: "Steve Jobs, Elon Musk & Jeff Bezos", isCorrect: false },
      { text: "Lewis Hamilton, Lionel Messi & Max Verstappen", isCorrect: true },
      { text: "Gordon Ramsay, Jamie Oliver & Sanjeev Kapoor", isCorrect: false },
      { text: "Christopher Nolan, Quentin Tarantino & Al Pacino", isCorrect: false }
    ],
    explanation: "Two Formula 1 world champions and the football GOAT. The ultimate athletic royalty table."
  },
  {
    id: 5,
    question: "Which fictional character matches Calvin's energy at a 97.8% level?",
    options: [
      { text: "Sherlock Holmes (Cold, calculated deduction)", isCorrect: false },
      { text: "Jake Peralta from Brooklyn Nine-Nine (Chaotic, yapping, movie references, highly creative)", isCorrect: true },
      { text: "Thomas Shelby (Dark, brooding cigarette stares)", isCorrect: false },
      { text: "Goku (Loves fighting aliens)", isCorrect: false }
    ],
    explanation: "Jake Peralta is the exact soulmate. Uncontrolled humor, relentless energy, and zero hesitation to yap."
  },
  {
    id: 6,
    question: "Why does Calvin claim to be a qualified culinary expert?",
    options: [
      { text: "Graduated from Le Cordon Bleu Paris", isCorrect: false },
      { text: "Has watched 500+ hours of MasterChef and studied every pressure test", isCorrect: true },
      { text: "Once cooked instant noodles with high precision", isCorrect: false },
      { text: "Memorized Gordon Ramsay insults", isCorrect: false }
    ],
    explanation: "\"I watch so much MasterChef. I'm an expert.\" Self-issued credentials through sheer broadcast hours."
  },
  {
    id: 7,
    question: "What games are in Calvin's active rotation despite claiming to be 'terrible at gaming'?",
    options: [
      { text: "Valorant, Fortnite, Minecraft & FIFA", isCorrect: true },
      { text: "Candy Crush & Subway Surfers", isCorrect: false },
      { text: "Eldon Ring speedruns only", isCorrect: false },
      { text: "Chess at grandmaster rank", isCorrect: false }
    ],
    explanation: "The quad-threat of Valorant, Fortnite, Minecraft, and FIFA. Still keeps queuing up regardless of scoreboard."
  },
  {
    id: 8,
    question: "What is Calvin's ultimate definition of 'I have made it' in life?",
    options: [
      { text: "Getting 100,000 followers on LinkedIn", isCorrect: false },
      { text: "Retiring his parents young so they never have to look at a price tag again", isCorrect: true },
      { text: "Having a verified blue checkmark on every platform", isCorrect: false },
      { text: "Attending the Met Gala in a tuxedo", isCorrect: false }
    ],
    explanation: "True freedom: giving his parents complete peace of mind and never worrying about costs."
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
    if (score === 8) return { rank: "LEVEL 5 // INNER CIRCLE", color: "#00ffcc", msg: "You know Calvin better than he knows himself. Unlocked complete clearance." };
    if (score >= 6) return { rank: "LEVEL 4 // TRUSTED OPERATIVE", color: "var(--color-gold)", msg: "High synchronization with subject profile." };
    if (score >= 4) return { rank: "LEVEL 2 // CASUAL ACQUAINTANCE", color: "#ff9500", msg: "Decent intel, but missing key classified nuances." };
    return { rank: "LEVEL 0 // STRANGER DETECTED", color: "#ff3333", msg: "Immediate re-interrogation recommended." };
  };

  return (
    <div className="vault-panel">
      <div className="vault-panel-header">
        <div>
          <h3 className="vault-panel-title">
            <HelpCircle size={20} color="var(--color-gold)" /> SUBJECT INTERROGATION // HOW WELL DO YOU KNOW CALVIN?
          </h3>
          <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
            Interactive clearance examination testing your knowledge on real habits, dreams & hidden lore.
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
        <div style={{ background: 'rgba(20, 20, 26, 0.6)', border: '1px solid rgba(197, 168, 128, 0.25)', padding: '22px', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>
          
          <div style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '8px' }}>
            DOSSIER QUERY #{currentIdx + 1}
          </div>

          <h4 style={{ color: '#FFF', fontFamily: 'var(--font-display, serif)', fontSize: '1.2rem', margin: '0 0 18px 0', lineHeight: 1.3 }}>
            {currentQ.question}
          </h4>

          {/* Options Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
            {currentQ.options.map((opt, i) => {
              let bg = 'rgba(15, 15, 20, 0.8)';
              let border = 'rgba(197, 168, 128, 0.2)';
              let color = '#DDD';

              if (isAnswered) {
                if (opt.isCorrect) {
                  bg = 'rgba(0, 255, 204, 0.15)';
                  border = '#00ffcc';
                  color = '#00ffcc';
                } else if (selectedOpt === i) {
                  bg = 'rgba(255, 51, 51, 0.15)';
                  border = '#ff3333';
                  color = '#ff5555';
                }
              } else if (selectedOpt === i) {
                border = 'var(--color-gold)';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: color,
                    padding: '12px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    textAlign: 'left',
                    cursor: isAnswered ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{opt.text}</span>
                  {isAnswered && opt.isCorrect && <CheckCircle2 size={16} color="#00ffcc" />}
                  {isAnswered && !opt.isCorrect && selectedOpt === i && <XCircle size={16} color="#ff5555" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout */}
          {isAnswered && (
            <div style={{ background: 'rgba(10, 10, 15, 0.9)', borderLeft: '3px solid var(--color-gold)', padding: '12px 16px', borderRadius: '4px', marginBottom: '16px', animation: 'fadeIn 0.2s ease-out' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.72rem', fontWeight: 'bold' }}>OPERATIVE INTELLIGENCE NOTE:</div>
              <div style={{ color: '#EEE', fontSize: '0.8rem', marginTop: '4px', lineHeight: 1.3 }}>{currentQ.explanation}</div>
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
                  padding: '8px 20px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {currentIdx + 1 < QUESTIONS.length ? 'NEXT QUESTION →' : 'CALCULATE CLEARANCE →'}
              </button>
            </div>
          )}

        </div>
      ) : (
        <div style={{ background: 'rgba(20, 20, 26, 0.7)', border: '1px solid var(--color-gold)', padding: '30px 20px', borderRadius: '6px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          <Award size={48} color={getClearanceRank().color} style={{ margin: '0 auto 12px' }} />
          <h4 style={{ color: '#FFF', fontSize: '1.4rem', fontFamily: 'var(--font-display)', margin: 0 }}>
            INTERROGATION COMPLETE
          </h4>
          <div style={{ color: getClearanceRank().color, fontSize: '1.1rem', fontWeight: 'bold', margin: '8px 0' }}>
            [{getClearanceRank().rank}]
          </div>
          <p style={{ color: 'var(--color-silver)', fontSize: '0.85rem', maxWidth: '420px', margin: '0 auto 20px' }}>
            {getClearanceRank().msg}
          </p>

          <div style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '24px' }}>
            FINAL SCORE: <strong style={{ color: 'var(--color-gold)' }}>{score}</strong> / {QUESTIONS.length} ({(score / QUESTIONS.length * 100).toFixed(0)}%)
          </div>

          <button
            onClick={handleRestart}
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <RotateCcw size={16} /> RETAKE INTERROGATION
          </button>
        </div>
      )}

    </div>
  );
};
