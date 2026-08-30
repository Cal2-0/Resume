import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllArticles, getCategoryStats } from '../../utils/articles';
import '../../styles/scenes/editorial.css';

const CATEGORIES = [
  { id: 'MACHINES', label: 'MACHINES', desc: 'Cars · Aircraft · Robotics · Engines' },
  { id: 'RESEARCH', label: 'RESEARCH', desc: 'Investigations & Deep Dives' },
  { id: 'BUILT', label: 'BUILT', desc: 'Projects & Systems' },
  { id: 'CYBERSECURITY', label: 'CYBERSECURITY', desc: 'Forensics · Intelligence' },
  { id: 'AI', label: 'AI', desc: 'Models · Agents · Vision' },
  { id: 'SYSTEMS', label: 'SYSTEMS', desc: 'Infrastructure · Networks' },
  { id: 'RABBIT HOLES', label: 'RABBIT HOLES', desc: 'Personal Obsessions' },
];

const FieldNotesMagazine = () => {
  const [articles, setArticles] = useState([]);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setArticles(getAllArticles());
    setStats(getCategoryStats());
  }, []);

  const latestArticles = articles.slice(0, 3);

  const handleRandomClick = () => {
    if (articles.length === 0) return;
    const randomIndex = Math.floor(Math.random() * articles.length);
    navigate(`/writing/${articles[randomIndex].slug}`);
  };

  const handleMoodSelect = (type) => {
    // Basic filter logic that redirects to a random article of that type or category
    const matches = articles.filter(a => (a.categories && a.categories.includes(type)) || a.type === type || (a.tags && a.tags.includes(type)));
    if (matches.length > 0) {
      const randomMatch = matches[Math.floor(Math.random() * matches.length)];
      navigate(`/writing/${randomMatch.slug}`);
    }
  };

  return (
    <section className="magazine-container">
      {/* HEADER */}
      <div className="magazine-header" style={{ padding: '120px var(--grid-margin) 0', borderBottom: '1px solid var(--color-rule)', paddingBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9, letterSpacing: '-0.02em', margin: 0 }}>
          WRITING
        </h1>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', color: 'var(--color-ink)', maxWidth: '600px', lineHeight: 1.4 }}>
          Things I build.<br/>
          Things I investigate.<br/>
          Things I can't stop thinking about.
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-silver)' }}>
          <div>CALVIN DSOUZA<br/>EST. 2024</div>
          <div>CURRENTLY INVESTIGATING: {(stats['RESEARCH'] || 0).toString().padStart(2, '0')}<br/>ARCHIVED NOTES: {articles.length.toString().padStart(2, '0')}</div>
        </div>
      </div>

      <div className="magazine-grid">
        
        {/* LEFT COLUMN: Categories & Mood */}
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* CATEGORIES */}
          <div>
            <h3 className="magazine-section-title">THE ARCHIVE</h3>
            <div className="category-panels-grid">
              {CATEGORIES.map(cat => (
                <Link to={`/writing/category/${cat.id}`} key={cat.id} className="category-panel">
                  <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', lineHeight: 1 }}>{cat.label}</h2>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-plum)' }}>
                    {stats[cat.id] || 0} ARTICLES
                  </span>
                  <p style={{ fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          
          {/* MOOD SELECTOR */}
          <div className="mood-selector-box">
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--color-silver)' }}>WHAT ARE YOU IN THE MOOD FOR?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button onClick={() => handleMoodSelect('RESEARCH')} className="mood-btn">Something technical</button>
              <button onClick={() => handleMoodSelect('RABBIT HOLES')} className="mood-btn">Something weird</button>
              <button onClick={() => handleMoodSelect('BUILT')} className="mood-btn">Something I built</button>
              <button onClick={() => handleMoodSelect('MACHINES')} className="mood-btn">Something about machines</button>
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* CURRENTLY OBSESSED WITH */}
          <div>
            <h3 className="magazine-section-title">CURRENTLY OBSESSED WITH</h3>
            <div style={{ borderBottom: '1px solid var(--color-rule)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-plum)', marginBottom: '0.5rem' }}>03 / 08 / 26</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ink)', lineHeight: 1.1, marginBottom: '1rem' }}>SR-71 BLACKBIRD</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-graphite)', marginBottom: '1rem' }}>Why does an aircraft designed in the 1960s still look like it came from another planet?</p>
              <Link to="/writing" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink)', textDecoration: 'none' }}>↗ READ THE RABBIT HOLE</Link>
            </div>
            <ol style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', lineHeight: 2.5, color: 'var(--color-silver)', listStylePosition: 'inside', padding: 0, margin: 0 }}>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span style={{ color: 'var(--color-plum)', marginRight: '1rem' }}>01</span>humanoid robots</li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span style={{ color: 'var(--color-plum)', marginRight: '1rem' }}>02</span>synthetic media forensics</li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span style={{ color: 'var(--color-plum)', marginRight: '1rem' }}>03</span>airport logistics</li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span style={{ color: 'var(--color-plum)', marginRight: '1rem' }}>04</span>ridiculous hypercars</li>
            </ol>
          </div>

          {/* LATEST STRIP */}
          <div>
            <h3 className="magazine-section-title">LATEST</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {latestArticles.map(article => (
                <div key={article.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-rule)', paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-silver)' }}>
                      {new Date(article.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
                    </span>
                    <Link to={`/writing/${article.slug}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-ink)', textDecoration: 'none' }}>
                      {article.title.substring(0, 40)}{article.title.length > 40 ? '...' : ''}
                    </Link>
                  </div>
                  <Link to={`/writing/${article.slug}`} style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>↗</Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* RANDOMIZER */}
          <div style={{ marginTop: 'auto' }}>
            <button onClick={handleRandomClick} style={{ 
              width: '100%', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, var(--color-ink) 0%, rgba(139, 92, 246, 0.8) 100%)', 
              color: 'var(--color-bg-dark)', 
              border: 'none', 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.8rem', 
              cursor: 'pointer', 
              textAlign: 'left', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              OPEN A RANDOM FILE <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>↗</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FieldNotesMagazine;
