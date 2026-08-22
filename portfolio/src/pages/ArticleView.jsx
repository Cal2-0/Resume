import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleBySlug, getAllArticles } from '../utils/articles';
import { HeroCinematic, HeroTechnical, HeroEditorial } from '../components/article/ArticleHeroes';
import MarkdownRenderer from '../components/article/MarkdownRenderer';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/editorial.css';

const ArticleView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticle, setRelatedArticle] = useState(null);
  const [randomArticle, setRandomArticle] = useState(null);

  useEffect(() => {
    const data = getArticleBySlug(slug);
    setArticle(data);
    
    // Pick related & random articles
    const all = getAllArticles();
    if (all.length > 1) {
      const others = all.filter(a => a.slug !== slug);
      // Basic related: just grab the next one, or one with same category
      let related = others.find(a => data?.categories?.some(c => a.categories?.includes(c)));
      if (!related) related = others[0];
      setRelatedArticle(related);
      
      const randIdx = Math.floor(Math.random() * others.length);
      setRandomArticle(others[randIdx]);
    }
    
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <div className="article-container" style={{ padding: '20vh' }}>Loading...</div>;

  const renderHero = () => {
    switch (article.heroType) {
      case 'CINEMATIC':
        return <HeroCinematic title={article.title} subtitle={article.subtitle} image={article.heroImage} />;
      case 'TECHNICAL_BLACK':
        return <HeroTechnical title={article.title} subtitle={article.subtitle} />;
      default:
        return <HeroEditorial title={article.title} subtitle={article.subtitle} />;
    }
  };

  return (
    <article className="article-container">
      <Link to="/field-notes" style={{ position: 'fixed', top: '100px', left: '2rem', color: 'var(--color-ink)', zIndex: 100 }}>
        <ArrowLeft size={24} />
      </Link>
      
      {renderHero()}
      
      <div className="article-content">
        <div style={{ gridColumn: '2 / 10', margin: '2rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-silver)' }}>
          <span style={{ color: 'var(--color-plum)', marginRight: '1rem' }}>[ {article.type || 'DEEP DIVE'} ]</span>
          {article.date} • {article.readingTime} • {(article.categories || []).join(', ')}
        </div>
        
        <MarkdownRenderer content={article.content} />
        
        <div className="article-footer-nav" style={{ flexDirection: 'column', gap: '3rem' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-silver)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>YOU FOUND THIS IN</span>
            <Link to={`/field-notes/category/${article.categories?.[0]}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textDecoration: 'none', color: 'var(--color-ink)' }}>{article.categories?.[0]}</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {relatedArticle && (
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-silver)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>RELATED CASE FILE</span>
                <Link to={`/field-notes/${relatedArticle.slug}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textDecoration: 'none', color: 'var(--color-ink)', display: 'block', marginBottom: '0.5rem' }}>
                  {relatedArticle.title.split(' ')[0]}
                </Link>
                <Link to={`/field-notes/${relatedArticle.slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textDecoration: 'none', color: 'var(--color-plum)' }}>↗ INVESTIGATE</Link>
              </div>
            )}
            
            {randomArticle && (
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-silver)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>NEXT RABBIT HOLE</span>
                <Link to={`/field-notes/${randomArticle.slug}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textDecoration: 'none', color: 'var(--color-ink)', display: 'block', marginBottom: '0.5rem' }}>Random Discovery</Link>
                <Link to={`/field-notes/${randomArticle.slug}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textDecoration: 'none', color: 'var(--color-plum)' }}>→ OPEN FILE</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleView;
