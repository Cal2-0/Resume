import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleBySlug, getAllArticles } from '../utils/articles';
import MarkdownRenderer from '../components/article/MarkdownRenderer';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/editorial.css';

const ArticleView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticle, setRelatedArticle] = useState(null);

  useEffect(() => {
    const data = getArticleBySlug(slug);
    setArticle(data);
    
    // Pick a related article
    const all = getAllArticles();
    if (all.length > 1) {
      const others = all.filter(a => a.slug !== slug);
      let related = others.find(a => data?.categories?.some(c => a.categories?.includes(c)));
      if (!related) related = others[0];
      setRelatedArticle(related);
    }
    
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <div className="bureau-container" style={{ padding: '20vh 0', color: 'var(--color-silver)', fontFamily: 'var(--font-mono)' }}>LOCATING FILE...</div>;

  return (
    <article className="blog-reader-scene">
      <div className="bureau-container">
        
        {/* Navigation Bar */}
        <div className="reader-nav">
          <Link to="/writing" className="reader-back-btn">
            <ArrowLeft size={18} />
            BACK TO WRITING
          </Link>
          <span className="reader-meta-tag">[ {article.type || 'DEEP DIVE'} ]</span>
        </div>

        {/* Reader Layout: Left Sidebar + Right Content */}
        <div className="reader-grid">
          
          {/* Left Sidebar (Sticky) */}
          <aside className="reader-sidebar">
            <div className="sidebar-sticky">
              <div className="sidebar-meta-block">
                <span className="sidebar-meta-label">DATE</span>
                <span className="sidebar-meta-value">{article.date}</span>
              </div>
              <div className="sidebar-meta-block">
                <span className="sidebar-meta-label">READ TIME</span>
                <span className="sidebar-meta-value">{article.readingTime}</span>
              </div>
              <div className="sidebar-meta-block">
                <span className="sidebar-meta-label">CATEGORIES</span>
                <div className="sidebar-categories">
                  {(article.categories || []).map(cat => (
                    <Link key={cat} to={`/writing/category/${cat}`} className="sidebar-category-link">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {relatedArticle && (
                <div className="sidebar-related">
                  <span className="sidebar-meta-label">RELATED CASE FILE</span>
                  <Link to={`/writing/${relatedArticle.slug}`} className="sidebar-related-link">
                    {relatedArticle.title}
                  </Link>
                </div>
              )}
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="reader-main">
            <header className="reader-header">
              <h1 className="reader-title">{article.title}</h1>
              {article.subtitle && <p className="reader-subtitle">{article.subtitle}</p>}
            </header>

            {article.heroImage && (
              <div className="reader-hero-img-wrapper">
                <img src={article.heroImage} alt={article.title} className="reader-hero-img" />
              </div>
            )}

            <div className="reader-content">
              <MarkdownRenderer content={article.content} />
            </div>

            <footer className="reader-footer">
              <div className="reader-footer-divider"></div>
              <div className="reader-footer-content">
                <div className="reader-footer-brand">
                  <span className="brand-name">THE BUREAU</span>
                  <span className="brand-est">EST. 2024</span>
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="reader-top-btn">
                  BACK TO TOP ↑
                </button>
              </div>
            </footer>
          </main>

        </div>
      </div>
    </article>
  );
};

export default ArticleView;
