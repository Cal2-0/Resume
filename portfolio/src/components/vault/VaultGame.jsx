import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Shield, Zap, Coffee, Award, AlertTriangle, Maximize2, Terminal } from 'lucide-react';

const GRID_SIZE = 19;
const CELL_SIZE = 42;

// 19x19 Cyber Maze Map (1 = Wall, 0 = Open path, 2 = Encrypted Data Packet, 3 = Coffee Boost, 4 = Root Access)
const BASE_MAZE = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 1, 2, 2, 2, 0, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1],
  [1, 3, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 3, 1],
  [1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 1],
  [1, 1, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1, 1, 1],
  [1, 4, 2, 2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 4, 1],
  [1, 1, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1, 1, 1],
  [1, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1],
  [1, 3, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 3, 1],
  [1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 0, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 1, 2, 2, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const UNLOCK_REWARDS = [
  { level: 1, title: 'CLASSIFIED MEMORY 01', desc: 'Subject once completed an entire production project in a 14-hour marathon at 3:17 AM on 4 cups of coffee.' },
  { level: 2, title: 'CLASSIFIED MEMORY 02', desc: 'Subject can watch The Godfather and White Chicks back-to-back without breaking a sweat.' },
  { level: 3, title: 'ROOT ACCESS GRANTED', desc: 'Secret Directive: "Retire parents early, build multi-billion startup, own Porsche 918 Spyder."' }
];

export const VaultGame = () => {
  const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING, WON, LOST, LEVEL_CLEARED
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [coffeeBoost, setCoffeeBoost] = useState(0);
  const [rootAccess, setRootAccess] = useState(0);
  const [unlockedFiles, setUnlockedFiles] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  
  // Game coordinates
  const [player, setPlayer] = useState({ x: 1, y: 1, dir: 'RIGHT' });
  const [enemies, setEnemies] = useState([
    { id: 'FIREWALL', x: 9, y: 9, color: '#ff3333', name: 'FIREWALL' },
    { id: 'MALWARE', x: 9, y: 8, color: '#bf5af2', name: 'MALWARE' },
    { id: 'DEADLINE', x: 9, y: 10, color: '#ff9500', name: 'DEADLINE' },
  ]);
  const [grid, setGrid] = useState(BASE_MAZE);

  const canvasRef = useRef(null);

  // Initialize Level
  const initLevel = useCallback((lvl = 1) => {
    const newGrid = BASE_MAZE.map(row => [...row]);
    setGrid(newGrid);
    setPlayer({ x: 1, y: 1, dir: 'RIGHT' });
    
    const baseEnemies = [
      { id: 'FIREWALL', x: 9, y: 9, color: '#ff3333', name: 'FIREWALL' },
      { id: 'MALWARE', x: 9, y: 8, color: '#bf5af2', name: 'MALWARE' },
    ];
    if (lvl >= 2) {
      baseEnemies.push({ id: 'DEADLINE', x: 9, y: 10, color: '#ff9500', name: 'DEADLINE' });
    }
    if (lvl >= 3) {
      baseEnemies.push({ id: 'BUG_EXCEPTION', x: 8, y: 9, color: '#ffd60a', name: 'MEMORY_LEAK' });
    }
    setEnemies(baseEnemies);
    setCoffeeBoost(0);
    setRootAccess(0);
  }, []);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setLevel(1);
    setUnlockedFiles([]);
    initLevel(1);
    setGameState('PLAYING');
  };

  const nextLevel = () => {
    const nxt = level + 1;
    setLevel(nxt);
    initLevel(nxt);
    setGameState('PLAYING');
  };

  // Player Move Handler
  const movePlayer = useCallback((dx, dy, dirName) => {
    if (gameState !== 'PLAYING') return;

    setPlayer(prev => {
      const nx = prev.x + dx;
      const ny = prev.y + dy;

      // Check wall collision
      if (grid[ny] && grid[ny][nx] === 1) {
        return prev;
      }

      // Check item collection
      const cell = grid[ny]?.[nx];
      if (cell === 2) { // Data Packet
        setScore(s => s + 10);
        setGrid(g => {
          const ng = g.map(r => [...r]);
          ng[ny][nx] = 0;
          return ng;
        });
      } else if (cell === 3) { // Coffee Power-up
        setScore(s => s + 50);
        setCoffeeBoost(30);
        setGrid(g => {
          const ng = g.map(r => [...r]);
          ng[ny][nx] = 0;
          return ng;
        });
      } else if (cell === 4) { // Root Access
        setScore(s => s + 100);
        setRootAccess(45);
        setGrid(g => {
          const ng = g.map(r => [...r]);
          ng[ny][nx] = 0;
          return ng;
        });
      }

      return { x: nx, y: ny, dir: dirName };
    });
  }, [gameState, grid]);

  // Keyboard Event Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        setActiveKey('UP');
        movePlayer(0, -1, 'UP');
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        setActiveKey('DOWN');
        movePlayer(0, 1, 'DOWN');
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        setActiveKey('LEFT');
        movePlayer(-1, 0, 'LEFT');
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        setActiveKey('RIGHT');
        movePlayer(1, 0, 'RIGHT');
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        setActiveKey(prev => prev === 'UP' ? null : prev);
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        setActiveKey(prev => prev === 'DOWN' ? null : prev);
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        setActiveKey(prev => prev === 'LEFT' ? null : prev);
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        setActiveKey(prev => prev === 'RIGHT' ? null : prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [movePlayer]);

  // Main Game Loop (Enemies AI + Timers)
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const interval = setInterval(() => {
      setCoffeeBoost(c => Math.max(0, c - 1));
      setRootAccess(r => Math.max(0, r - 1));

      // Move Enemies
      setEnemies(prevEnemies => {
        return prevEnemies.map(enemy => {
          const dirs = [
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 }
          ];

          const validMoves = dirs.filter(d => {
            const nx = enemy.x + d.x;
            const ny = enemy.y + d.y;
            return grid[ny] && grid[ny][nx] !== 1;
          });

          if (validMoves.length === 0) return enemy;

          let chosen = validMoves[Math.floor(Math.random() * validMoves.length)];
          if (rootAccess === 0 && Math.random() > 0.35) {
            // Smart tracking towards operative
            validMoves.sort((a, b) => {
              const distA = Math.hypot((enemy.x + a.x) - player.x, (enemy.y + a.y) - player.y);
              const distB = Math.hypot((enemy.x + b.x) - player.x, (enemy.y + b.y) - player.y);
              return distA - distB;
            });
            chosen = validMoves[0];
          }

          return { ...enemy, x: enemy.x + chosen.x, y: enemy.y + chosen.y };
        });
      });

      // Check Level Clear
      let remainingData = 0;
      grid.forEach(row => {
        row.forEach(cell => {
          if (cell === 2) remainingData++;
        });
      });

      if (remainingData === 0) {
        const reward = UNLOCK_REWARDS[level - 1];
        if (reward && !unlockedFiles.some(f => f.level === level)) {
          setUnlockedFiles(f => [...f, reward]);
        }
        if (level >= 3) {
          setGameState('WON');
        } else {
          setGameState('LEVEL_CLEARED');
        }
      }

    }, coffeeBoost > 0 ? 170 : 240);

    return () => clearInterval(interval);
  }, [gameState, grid, player, level, coffeeBoost, rootAccess, unlockedFiles]);

  // Collision Detection
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    enemies.forEach(enemy => {
      if (enemy.x === player.x && enemy.y === player.y) {
        if (rootAccess > 0) {
          setScore(s => s + 200);
          setEnemies(es => es.map(e => e.id === enemy.id ? { ...e, x: 9, y: 9 } : e));
        } else {
          if (lives > 1) {
            setLives(l => l - 1);
            setPlayer({ x: 1, y: 1, dir: 'RIGHT' });
          } else {
            setLives(0);
            setGameState('LOST');
          }
        }
      }
    });
  }, [enemies, player, rootAccess, lives, gameState]);

  // Draw Game onto Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid & Walls
    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        const px = x * CELL_SIZE;
        const py = y * CELL_SIZE;

        if (cell === 1) { // Wall
          ctx.fillStyle = '#161622';
          ctx.fillRect(px, py, CELL_SIZE, CELL_SIZE);
          ctx.strokeStyle = 'rgba(197, 168, 128, 0.35)';
          ctx.lineWidth = 1.2;
          ctx.strokeRect(px + 1, py + 1, CELL_SIZE - 2, CELL_SIZE - 2);
        } else if (cell === 2) { // Data Packet
          ctx.fillStyle = '#00ffcc';
          ctx.beginPath();
          ctx.arc(px + CELL_SIZE / 2, py + CELL_SIZE / 2, 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (cell === 3) { // Coffee Power-up
          ctx.font = '16px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('☕', px + CELL_SIZE / 2, py + CELL_SIZE / 2);
        } else if (cell === 4) { // Root Access
          ctx.font = '16px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⚡', px + CELL_SIZE / 2, py + CELL_SIZE / 2);
        }
      });
    });

    // Draw Player
    const pX = player.x * CELL_SIZE + CELL_SIZE / 2;
    const pY = player.y * CELL_SIZE + CELL_SIZE / 2;
    ctx.fillStyle = rootAccess > 0 ? '#ff3333' : coffeeBoost > 0 ? '#ff9500' : 'var(--color-gold, #C5A880)';
    ctx.beginPath();
    ctx.arc(pX, pY, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(pX + (player.dir === 'RIGHT' ? 4 : player.dir === 'LEFT' ? -4 : 0), pY + (player.dir === 'DOWN' ? 4 : player.dir === 'UP' ? -4 : 0), 3, 0, Math.PI * 2);
    ctx.fill();

    // Draw Enemies
    enemies.forEach(enemy => {
      const eX = enemy.x * CELL_SIZE + CELL_SIZE / 2;
      const eY = enemy.y * CELL_SIZE + CELL_SIZE / 2;
      ctx.fillStyle = rootAccess > 0 ? '#444466' : enemy.color;
      ctx.beginPath();
      ctx.arc(eX, eY, 10.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(enemy.name.substring(0, 1), eX, eY + 3.5);
    });

  }, [grid, player, enemies, coffeeBoost, rootAccess]);

  const arenaWidth = GRID_SIZE * CELL_SIZE; // 19 * 32 = 608px

  return (
    <div className="vault-panel">
      <div className="vault-panel-header">
        <div>
          <h3 className="vault-panel-title">
            <Zap size={20} color="var(--color-gold)" /> ESCAPE THE FIREWALL // DATA RUNNER (ARCADE EDITION)
          </h3>
          <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
            Large 19x19 mainframe arena. Collect all encrypted data nodes. Evade active hostiles.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="vault-panel-tag" style={{ background: 'rgba(0, 255, 204, 0.1)', color: '#00ffcc', border: '1px solid #00ffcc' }}>
            STAGE 0{level}
          </span>
          <span className="vault-panel-tag" style={{ background: 'rgba(197, 168, 128, 0.1)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }}>
            XP: {score}
          </span>
          <span className="vault-panel-tag" style={{ background: 'rgba(255, 51, 51, 0.1)', color: '#ff5555', border: '1px solid #ff5555' }}>
            HP: {'♥'.repeat(lives)}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        {/* Large Expanded Canvas Game Arena */}
        <div style={{ position: 'relative', width: '100%', maxWidth: `${arenaWidth}px`, height: 'auto', aspectRatio: '1/1', background: '#0a0a0f', border: '2px solid rgba(197, 168, 128, 0.35)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 30px rgba(0,0,0,0.8)' }}>
          <canvas
            ref={canvasRef}
            width={arenaWidth}
            height={arenaWidth}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />

          {/* Overlays */}
          {gameState === 'IDLE' && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 15, 0.88)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🕹️</div>
              <h4 style={{ color: '#FFF', fontFamily: 'var(--font-mono)', margin: 0, fontSize: '1.2rem', letterSpacing: '1px' }}>SECURITY BREACH SIMULATION</h4>
              <p style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', margin: '10px 0 20px', maxWidth: '340px', lineHeight: 1.4 }}>
                Use Arrow Keys / WASD. Grab ☕ for Speed Boost, ⚡ for Root Access. Avoid Firewalls.
              </p>
              <button 
                onClick={startGame}
                style={{ 
                  background: 'var(--color-gold, #C5A880)', 
                  color: '#070709', 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 'bold', 
                  padding: '12px 28px', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(197, 168, 128, 0.4)'
                }}
              >
                <Play size={18} /> INITIATE INTRUSION
              </button>
            </div>
          )}

          {gameState === 'LEVEL_CLEARED' && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 15, 0.92)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
              <Award size={48} color="#00ffcc" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#00ffcc', fontFamily: 'var(--font-mono)', fontSize: '1.3rem', margin: 0 }}>STAGE 0{level} DECRYPTED</h4>
              <p style={{ color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', margin: '10px 0 20px' }}>
                Unlocked File: {UNLOCK_REWARDS[level - 1]?.title}
              </p>
              <button 
                onClick={nextLevel}
                style={{ background: '#00ffcc', color: '#070709', fontFamily: 'var(--font-mono)', fontWeight: 'bold', padding: '12px 28px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                NEXT STAGE →
              </button>
            </div>
          )}

          {gameState === 'WON' && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 15, 0.94)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>🏆</div>
              <h4 style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '1.3rem', margin: 0 }}>MAINFRAME BYPASSED</h4>
              <p style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', margin: '10px 0 20px' }}>
                All 3 Classified Dossiers Unlocked. Final Clearance XP: {score}
              </p>
              <button 
                onClick={startGame}
                style={{ background: 'var(--color-gold)', color: '#070709', fontFamily: 'var(--font-mono)', fontWeight: 'bold', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                PLAY AGAIN
              </button>
            </div>
          )}

          {gameState === 'LOST' && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 10, 15, 0.94)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
              <AlertTriangle size={42} color="#ff3333" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#ff3333', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', margin: 0 }}>CONNECTION TERMINATED</h4>
              <p style={{ color: '#8E8D8A', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', margin: '10px 0 20px' }}>
                Caught by Hostile Security Protocols. Score: {score}
              </p>
              <button 
                onClick={startGame}
                style={{ background: '#ff3333', color: '#FFF', fontFamily: 'var(--font-mono)', fontWeight: 'bold', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                RETRY SIMULATION
              </button>
            </div>
          )}
        </div>

        {/* Sidebar: Status, Controls & Unlocks */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-mono)' }}>
          
          {/* Active Boost Indicators */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: coffeeBoost > 0 ? 'rgba(255,149,0,0.15)' : 'rgba(20,20,26,0.6)', border: `1px solid ${coffeeBoost > 0 ? '#ff9500' : 'rgba(197,168,128,0.2)'}`, padding: '12px', borderRadius: '4px' }}>
              <div style={{ color: coffeeBoost > 0 ? '#ff9500' : '#8E8D8A', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Coffee size={14} /> COFFEE OVERDRIVE
              </div>
              <div style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '4px' }}>
                {coffeeBoost > 0 ? `${Math.ceil(coffeeBoost / 4)}s ACTIVE` : 'INACTIVE'}
              </div>
            </div>

            <div style={{ background: rootAccess > 0 ? 'rgba(255,51,51,0.15)' : 'rgba(20,20,26,0.6)', border: `1px solid ${rootAccess > 0 ? '#ff3333' : 'rgba(197,168,128,0.2)'}`, padding: '12px', borderRadius: '4px' }}>
              <div style={{ color: rootAccess > 0 ? '#ff3333' : '#8E8D8A', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} /> ROOT OVERRIDE
              </div>
              <div style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '4px' }}>
                {rootAccess > 0 ? `${Math.ceil(rootAccess / 4)}s INVINCIBLE` : 'INACTIVE'}
              </div>
            </div>
          </div>

          {/* Unlocked Memory Files */}
          <div style={{ background: 'rgba(20, 20, 26, 0.6)', border: '1px solid rgba(197, 168, 128, 0.2)', padding: '16px', borderRadius: '6px' }}>
            <div style={{ color: 'var(--color-gold)', fontSize: '0.82rem', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={15} /> RECOVERED MEMORY DOSSIERS ({unlockedFiles.length}/3)
            </div>
            {unlockedFiles.length === 0 ? (
              <div style={{ color: '#8E8D8A', fontSize: '0.76rem', fontStyle: 'italic', padding: '8px 0' }}>
                No memory fragments decrypted yet. Clear Stage 01 to unlock.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {unlockedFiles.map((file, i) => (
                  <div key={i} style={{ background: 'rgba(10, 10, 15, 0.85)', borderLeft: '3px solid #00ffcc', padding: '10px 12px', fontSize: '0.76rem', borderRadius: '2px' }}>
                    <div style={{ color: '#00ffcc', fontWeight: 'bold' }}>🔓 {file.title}</div>
                    <div style={{ color: '#DDD', marginTop: '4px', lineHeight: 1.35 }}>{file.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reactive Virtual Controls */}
          <div style={{ background: 'rgba(20, 20, 26, 0.5)', border: '1px solid rgba(197, 168, 128, 0.15)', padding: '24px', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: '1', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#8E8D8A', marginBottom: '10px', letterSpacing: '2px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} color="var(--color-gold)" /> NEURAL LINK CONTROLS
            </div>
            <button 
              onPointerDown={() => { setActiveKey('UP'); movePlayer(0, -1, 'UP'); }}
              onPointerUp={() => setActiveKey(null)}
              onPointerLeave={() => setActiveKey(null)}
              style={{ width: '68px', height: '58px', background: activeKey === 'UP' ? 'rgba(0, 255, 204, 0.2)' : 'rgba(197,168,128,0.1)', border: `1px solid ${activeKey === 'UP' ? '#00ffcc' : 'rgba(197,168,128,0.3)'}`, color: activeKey === 'UP' ? '#00ffcc' : '#FFF', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', transition: 'all 0.1s', boxShadow: activeKey === 'UP' ? '0 0 15px rgba(0, 255, 204, 0.4)' : 'none', transform: activeKey === 'UP' ? 'scale(0.95)' : 'scale(1)' }}
            >
              <span style={{ width: '100%', fontSize: '0.65rem', color: activeKey === 'UP' ? '#00ffcc' : '#8E8D8A', marginBottom: '-4px' }}>W</span>
              <span style={{ fontSize: '1.2rem' }}>↑</span>
            </button>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onPointerDown={() => { setActiveKey('LEFT'); movePlayer(-1, 0, 'LEFT'); }}
                onPointerUp={() => setActiveKey(null)}
                onPointerLeave={() => setActiveKey(null)}
                style={{ width: '68px', height: '58px', background: activeKey === 'LEFT' ? 'rgba(0, 255, 204, 0.2)' : 'rgba(197,168,128,0.1)', border: `1px solid ${activeKey === 'LEFT' ? '#00ffcc' : 'rgba(197,168,128,0.3)'}`, color: activeKey === 'LEFT' ? '#00ffcc' : '#FFF', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', transition: 'all 0.1s', boxShadow: activeKey === 'LEFT' ? '0 0 15px rgba(0, 255, 204, 0.4)' : 'none', transform: activeKey === 'LEFT' ? 'scale(0.95)' : 'scale(1)' }}
              >
                <span style={{ width: '100%', fontSize: '0.65rem', color: activeKey === 'LEFT' ? '#00ffcc' : '#8E8D8A', marginBottom: '-4px' }}>A</span>
                <span style={{ fontSize: '1.2rem' }}>←</span>
              </button>
              <button 
                onPointerDown={() => { setActiveKey('DOWN'); movePlayer(0, 1, 'DOWN'); }}
                onPointerUp={() => setActiveKey(null)}
                onPointerLeave={() => setActiveKey(null)}
                style={{ width: '68px', height: '58px', background: activeKey === 'DOWN' ? 'rgba(0, 255, 204, 0.2)' : 'rgba(197,168,128,0.1)', border: `1px solid ${activeKey === 'DOWN' ? '#00ffcc' : 'rgba(197,168,128,0.3)'}`, color: activeKey === 'DOWN' ? '#00ffcc' : '#FFF', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', transition: 'all 0.1s', boxShadow: activeKey === 'DOWN' ? '0 0 15px rgba(0, 255, 204, 0.4)' : 'none', transform: activeKey === 'DOWN' ? 'scale(0.95)' : 'scale(1)' }}
              >
                <span style={{ width: '100%', fontSize: '0.65rem', color: activeKey === 'DOWN' ? '#00ffcc' : '#8E8D8A', marginBottom: '-4px' }}>S</span>
                <span style={{ fontSize: '1.2rem' }}>↓</span>
              </button>
              <button 
                onPointerDown={() => { setActiveKey('RIGHT'); movePlayer(1, 0, 'RIGHT'); }}
                onPointerUp={() => setActiveKey(null)}
                onPointerLeave={() => setActiveKey(null)}
                style={{ width: '68px', height: '58px', background: activeKey === 'RIGHT' ? 'rgba(0, 255, 204, 0.2)' : 'rgba(197,168,128,0.1)', border: `1px solid ${activeKey === 'RIGHT' ? '#00ffcc' : 'rgba(197,168,128,0.3)'}`, color: activeKey === 'RIGHT' ? '#00ffcc' : '#FFF', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', transition: 'all 0.1s', boxShadow: activeKey === 'RIGHT' ? '0 0 15px rgba(0, 255, 204, 0.4)' : 'none', transform: activeKey === 'RIGHT' ? 'scale(0.95)' : 'scale(1)' }}
              >
                <span style={{ width: '100%', fontSize: '0.65rem', color: activeKey === 'RIGHT' ? '#00ffcc' : '#8E8D8A', marginBottom: '-4px' }}>D</span>
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
