import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, Zap, Activity, Gamepad2, Monitor, Gauge } from 'lucide-react';

export const VaultHardware = () => {
  // Simulated dynamic telemetry based on screenshot
  const [cpuUsage, setCpuUsage] = useState(14);
  const [clockSpeed, setClockSpeed] = useState(4.35);
  const [memUsage, setMemUsage] = useState(12.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(65, Math.max(8, prev + (Math.random() * 8 - 4))));
      setClockSpeed(prev => +(Math.min(4.85, Math.max(3.8, prev + (Math.random() * 0.2 - 0.1))).toFixed(2)));
      setMemUsage(prev => +(Math.min(14.5, Math.max(11.8, prev + (Math.random() * 0.4 - 0.2))).toFixed(1)));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const games = [
    { title: "Valorant", tag: "RIOT PROTOCOL", desc: "Tactical FPS with questionable headshot accuracy.", icon: "🎯", color: "#ff4655" },
    { title: "Fortnite", tag: "BATTLE ROYALE", desc: "Cranking 90s and dropping into hotzones.", icon: "⚡", color: "#00d2ff" },
    { title: "Minecraft", tag: "SANDBOX OS", desc: "Building redstone machines and underground bunkers.", icon: "⛏️", color: "#4caf50" },
    { title: "FIFA / FC", tag: "EA TELEMETRY", desc: "Tiki-taka football and late 90th minute winners.", icon: "⚽", color: "#ffd700" },
  ];

  return (
    <div className="vault-panel">
      <div className="vault-panel-header">
        <div>
          <h3 className="vault-panel-title">
            <Cpu size={20} color="var(--color-gold)" /> HARDWARE DIAGNOSTICS // LIVE TELEMETRY
          </h3>
          <p style={{ color: 'var(--color-silver, #8E8D8A)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', margin: '4px 0 0 0' }}>
            Primary operative workstation specs, real-time clock monitoring & installed gaming protocols.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <span className="vault-panel-tag" style={{ background: 'rgba(0, 255, 0, 0.1)', color: '#00ff00', border: '1px solid #00ff00' }}>
            SYSTEM: NOMINAL
          </span>
          <span className="vault-panel-tag" style={{ background: 'rgba(197, 168, 128, 0.1)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }}>
            POWER: OVERCLOCKED
          </span>
        </div>
      </div>

      {/* Main Specs Dashboard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '24px', fontFamily: 'var(--font-mono)' }}>
        
        {/* CPU Panel */}
        <div style={{ background: 'rgba(20, 20, 26, 0.6)', border: '1px solid rgba(197, 168, 128, 0.25)', padding: '18px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: '#00ffcc', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Cpu size={16} /> 13TH GEN INTEL CORE
            </span>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>i7-13700H</span>
          </div>

          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#FFF', marginBottom: '4px' }}>
            {clockSpeed} GHz <span style={{ fontSize: '0.85rem', color: '#8E8D8A' }}>/ {cpuUsage.toFixed(0)}% LOAD</span>
          </div>

          {/* Dynamic Progress Bar */}
          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', margin: '8px 0 12px' }}>
            <div style={{ width: `${cpuUsage}%`, height: '100%', background: 'linear-gradient(90deg, #00ffcc, var(--color-gold))', transition: 'width 0.8s ease' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.72rem', color: '#8E8D8A' }}>
            <div>CORES: <span style={{ color: '#FFF' }}>14 (6P + 8E)</span></div>
            <div>THREADS: <span style={{ color: '#FFF' }}>20 LOGICAL</span></div>
            <div>BASE: <span style={{ color: '#FFF' }}>2.40 GHz</span></div>
            <div>L3 CACHE: <span style={{ color: '#FFF' }}>24 MB</span></div>
          </div>
        </div>

        {/* Memory Panel */}
        <div style={{ background: 'rgba(20, 20, 26, 0.6)', border: '1px solid rgba(197, 168, 128, 0.25)', padding: '18px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: '#ff9500', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Activity size={16} /> HIGH-SPEED RAM
            </span>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>5200 MHz DDR5</span>
          </div>

          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#FFF', marginBottom: '4px' }}>
            {memUsage} GB <span style={{ fontSize: '0.85rem', color: '#8E8D8A' }}>/ 16.0 GB ({(memUsage / 15.7 * 100).toFixed(0)}%)</span>
          </div>

          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', margin: '8px 0 12px' }}>
            <div style={{ width: `${(memUsage / 15.7 * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #ff9500, #ff3333)', transition: 'width 0.8s ease' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.72rem', color: '#8E8D8A' }}>
            <div>SPEED: <span style={{ color: '#FFF' }}>5200 MHz</span></div>
            <div>CHANNEL: <span style={{ color: '#FFF' }}>DUAL DDR5</span></div>
            <div>STATUS: <span style={{ color: '#FFF' }}>IN USE: 81%</span></div>
            <div>PAGE POOL: <span style={{ color: '#FFF' }}>5228 THREADS</span></div>
          </div>
        </div>

        {/* GPU Panel */}
        <div style={{ background: 'rgba(20, 20, 26, 0.6)', border: '1px solid rgba(197, 168, 128, 0.25)', padding: '18px', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: '#00ff66', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Gauge size={16} /> GRAPHICS ARRAY
            </span>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>DUAL ADAPTERS</span>
          </div>

          <div style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#00ff66', marginBottom: '4px' }}>
            RTX 4070 Laptop GPU
          </div>

          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', margin: '8px 0 12px' }}>
            <div style={{ width: '38%', height: '100%', background: '#00ff66' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.72rem', color: '#8E8D8A' }}>
            <div>VRAM: <span style={{ color: '#FFF' }}>8GB GDDR6</span></div>
            <div>THERMAL: <span style={{ color: '#00ff66' }}>44°C (COOL)</span></div>
            <div>SECONDARY: <span style={{ color: '#FFF' }}>Intel Iris Xe</span></div>
            <div>STORAGE: <span style={{ color: '#FFF' }}>NVMe M.2 SSD</span></div>
          </div>
        </div>

      </div>

      {/* Installed Gaming Protocols */}
      <div style={{ borderTop: '1px solid rgba(197, 168, 128, 0.2)', paddingTop: '18px' }}>
        <h4 style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '1px' }}>
          <Gamepad2 size={16} /> INSTALLED GAMING PROTOCOLS // ROTATION ACTIVE
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontFamily: 'var(--font-mono)' }}>
          {games.map((g, i) => (
            <div 
              key={i}
              style={{
                background: 'rgba(15, 15, 20, 0.8)',
                border: '1px solid rgba(197, 168, 128, 0.2)',
                borderLeft: `3px solid ${g.color}`,
                padding: '12px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = g.color}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.2)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{g.icon}</span> {g.title}
                </span>
                <span style={{ color: g.color, fontSize: '0.68rem', letterSpacing: '0.5px' }}>[{g.tag}]</span>
              </div>
              <p style={{ color: '#8E8D8A', fontSize: '0.74rem', margin: '4px 0 0 0', lineHeight: 1.3 }}>
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
