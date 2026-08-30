import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/editorial.css'; // Reuse editorial styles

const Uses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-reader-scene">
      <div className="bureau-container">
        
        <div className="reader-nav">
          <Link to="/" className="reader-back-btn">
            <ArrowLeft size={18} />
            BACK TO HQ
          </Link>
          <span className="reader-meta-tag">[ THE SETUP ]</span>
        </div>

        <main className="reader-main">
          <header className="reader-header">
            <h1 className="reader-title">THE SETUP // USES</h1>
            <p className="reader-subtitle">An inventory of the hardware, software, and tools I use to build systems.</p>
          </header>

          <div className="reader-content" style={{ marginTop: '3rem' }}>
            <h2>HARDWARE</h2>
            <p><strong>Primary Workstation:</strong> Custom Desktop. Built for ML inference and heavy multitasking. Ryzen 9, 64GB RAM, RTX 4090.</p>
            <p><strong>Mobile Setup:</strong> 14" MacBook Pro (M2 Pro). Essential for portability, compiling iOS builds, and coffee shop productivity.</p>
            <p><strong>Peripherals:</strong> Keychron Q1 Pro (tactile switches) and a Logitech MX Master 3S. If you're going to click a million times a day, make it comfortable.</p>

            <h2>SOFTWARE & EDITOR</h2>
            <p><strong>VS Code / Cursor:</strong> I've transitioned heavily to Cursor for the AI integration, but my keybindings and extensions are decades of muscle memory ported from VS Code.</p>
            <p><strong>Theme:</strong> Tokyo Night or Vesper. High contrast, dark mode. Anything else is retina-burning.</p>
            <p><strong>Terminal:</strong> Warp. The block-based interface is a game changer for navigating massive log files.</p>

            <h2>SYSTEMS & DEVOPS</h2>
            <p><strong>OS:</strong> MacOS for daily driving, Ubuntu for servers. Windows only for gaming.</p>
            <p><strong>Cloud:</strong> AWS and Vercel. Vercel handles the frontend magic, AWS does the heavy lifting.</p>
            <p><strong>Database:</strong> PostgreSQL. Supabase when I want it fast. Raw Prisma + Postgres when I want absolute control.</p>

            <h2>DAILY CARRY</h2>
            <p>Sony WH-1000XM5 headphones (noise cancellation is a survival tool in open offices), a physical notebook (Moleskine grid), and a Lamy Safari fountain pen.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Uses;
