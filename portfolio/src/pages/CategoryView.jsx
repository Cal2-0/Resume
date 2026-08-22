import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory } from '../utils/articles';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/editorial.css';

const CATEGORY_SUBTITLES = {
  'MACHINES': "THE THINGS THAT MAKE ME STOP AND ASK 'HOW THE HELL DID THEY BUILD THAT?'",
  'RESEARCH': "INVESTIGATIONS INTO SYSTEMS, SIGNALS, AND INTELLIGENCE",
  'BUILT': "PROJECTS, SYSTEMS, AND CODE",
  'CYBERSECURITY': "FORENSICS, CRYPTOGRAPHY, AND THREAT INTELLIGENCE",
  'AI': "MODELS, AGENTS, AND COGNITIVE ARCHITECTURES",
  'SYSTEMS': "INFRASTRUCTURE, LOGISTICS, AND NETWORKS",
  'RABBIT HOLES': "THE THINGS I COULDN'T STOP THINKING ABOUT"
};

const CategoryView = () => {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticlesByCategory(categoryId));
    window.scrollTo(0, 0);
  }, [categoryId]);

  // The featured article should ideally be a DEEP DIVE or PROJECT STORY
  const featured = articles.find(a => a.type === 'DEEP DIVE' || a.type === 'PROJECT STORY') || articles[0];
  const archive = articles.filter(a => a !== featured);

  return (
    <div className="magazine-container">
      <Link to="/field-notes" style={{ position: 'fixed', top: '100px', left: '2rem', color: 'var(--color-ink)', zIndex: 100 }}>
        <ArrowLeft size={24} />
      </Link>
      
      <div className="magazine-header" style={{ padding: '120px var(--grid-margin) 0', borderBottom: '1px solid var(--color-rule)', paddingBottom: '2rem', marginTop: '4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          {categoryId}
        </h1>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-plum)', maxWidth: '600px', letterSpacing: '0.05em' }}>
          {CATEGORY_SUBTITLES[categoryId] || "EDITORIAL ARCHIVE"}
        </div>
      </div>

      <div className="magazine-grid">
        {/* FEATURED */}
        {featured && (
          <div style={{ gridColumn: 'span 12', marginBottom: '4rem' }}>
            <h3 className="magazine-section-title">FEATURED</h3>
            <div className="editorial-feature" style={{ flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1, maxWidth: '800px', margin: '1rem auto' }}>
                  <Link to={`/field-notes/${featured.slug}`} style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>
                    {featured.title}
                  </Link>
                </h2>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-silver)', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <span>{featured.type}</span>
                  <span>{featured.readingTime}</span>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <Link to={`/field-notes/${featured.slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-bg-dark)', backgroundColor: 'var(--color-gold)', padding: '0.75rem 1.5rem', textDecoration: 'none', border: '1px solid var(--color-gold)' }}>
                    [ READ FULL DOSSIER ↗ ]
                  </Link>
                </div>
              </div>
              {featured.heroImage && featured.heroImage !== 'CINEMATIC' && featured.heroImage !== 'TECHNICAL_BLACK' && (
                <Link to={`/field-notes/${featured.slug}`}>
                  <div style={{ width: '100%', height: '60vh', backgroundColor: 'var(--color-graphite)', backgroundImage: `url(${featured.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} />
                </Link>
              )}
            </div>
          </div>
        )}

        {/* THE ARCHIVE */}
        {archive.length > 0 && (
          <div style={{ gridColumn: '2 / 12' }}>
            <h3 className="magazine-section-title">THE ARCHIVE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {archive.map((article, index) => (
                <div key={article.id} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'baseline', borderBottom: '1px solid var(--color-rule)', paddingBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-silver)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
                      <Link to={`/field-notes/${article.slug}`} style={{ color: 'var(--color-white)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-white)'}>
                        {article.title}
                      </Link>
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-graphite)', margin: '0 0 1rem 0' }}>
                      {article.subtitle}
                    </p>
                    <Link to={`/field-notes/${article.slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-gold)', textDecoration: 'none' }}>
                      READ FILE ↗
                    </Link>
                  </div>
                  <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-plum)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span>{article.type}</span>
                    <span style={{ color: 'var(--color-silver)' }}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
