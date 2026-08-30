import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initSmoothScroll, lenisInstance } from './utils/smoothScroll';
import { initScrollAnimations } from './utils/animations';

import Hero from './components/sections/Hero';
import Person from './components/sections/Person';
import AchievementsMarquee from './components/shared/AchievementsMarquee';
import GithubTelemetry from './components/sections/GithubTelemetry';
import ProjectsSection from './components/sections/ProjectsSection';
import FieldEvidence from './components/sections/FieldEvidence';
import Transmissions from './components/sections/Transmissions';
import FieldNotes from './components/sections/FieldNotes';
import ArticleView from './pages/ArticleView';
import CategoryView from './pages/CategoryView';
import Gallery from './components/sections/Gallery';
import ProjectArchive from './pages/ProjectArchive';
import NotFound from './pages/NotFound';
import Uses from './pages/Uses';
import Timeline from './pages/Timeline';
import Classified from './pages/Classified';
import SecretProtocols from './pages/SecretProtocols';
import Nav from './components/sections/Nav';
import Footer from './components/sections/Footer';
import Cursor from './components/shared/Cursor';
import ScrollProgress from './components/shared/ScrollProgress';
import TransmitModal from './components/shared/TransmitModal';
import TerminalOverlay from './components/shared/TerminalOverlay';

import './index.css';
import './styles/scenes/audit.css';

const KonamiListener = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let keys = [];
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    const handleKeyDown = (e) => {
      keys.push(e.key);
      keys = keys.slice(-10);
      if (keys.join('') === konami.join('')) {
        navigate('/classified');
        keys = [];
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
  return null;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Immediately reset standard window scroll
    window.scrollTo(0, 0);

    // 2. Immediately reset smooth-scroll Lenis instance
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      lenisInstance.resize();
    }

    // 3. If navigating to a specific hash on home page
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { offset: 0, immediate: false });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // 4. Force GSAP ScrollTrigger to recalculate and refresh triggers
    const stTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (lenisInstance) lenisInstance.resize();
      window.dispatchEvent(new Event('resize'));
    }, 50);

    return () => clearTimeout(stTimer);
  }, [pathname, hash]);

  return null;
};

// Page title updater
const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      '/': "Calvin D'Souza — Cybersecurity Engineer & AI Researcher",
      '/work': "Work — Calvin D'Souza",
      '/writing': "Writing — Calvin D'Souza",
      '/transmissions': "Updates — Calvin D'Souza",
      '/gallery': "Gallery — Calvin D'Souza",
    };

    // Check for dynamic routes
    if (pathname.startsWith('/writing/category/')) {
      const cat = pathname.split('/').pop();
      document.title = `${cat} — Writing — Calvin D'Souza`;
    } else if (pathname.startsWith('/writing/')) {
      document.title = "Article — Calvin D'Souza";
    } else {
      document.title = titles[pathname] || "Calvin D'Souza";
    }
  }, [pathname]);

  return null;
};

// Cinematic section transition divider
const SectionDivider = ({ label, variant = 'default' }) => (
  <div className={`section-divider section-divider--${variant}`}>
    <div className="section-divider__line" />
    {label && (
      <span className="section-divider__label">{label}</span>
    )}
    <div className="section-divider__line" />
  </div>
);

const Home = () => (
  <>
    <Hero />
    <SectionDivider label="DOSSIER" variant="gold" />
    <Person />
    <AchievementsMarquee />
    <SectionDivider label="LIVE FEED" variant="pulse" />
    <GithubTelemetry />
    <SectionDivider label="CASE FILES" variant="gold" />
    <ProjectsSection />
    <SectionDivider label="FIELD EVIDENCE" variant="pulse" />
    <FieldEvidence />
  </>
);

// ─── ERROR BOUNDARY ─────────────────────────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-bg-dark, #0A0A0B)',
          color: '#F3F4F6',
          fontFamily: 'monospace',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', color: '#E8D5B5' }}>SYSTEM FAILURE</h1>
          <p style={{ fontSize: '1rem', color: '#6B7280', marginBottom: '2rem', maxWidth: '500px' }}>
            A critical error has occurred in the Bureau's systems.<br/>
            Our engineers have been notified.
          </p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
            style={{
              padding: '12px 24px',
              border: '1px solid #E8D5B5',
              background: 'transparent',
              color: '#E8D5B5',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              cursor: 'pointer',
              letterSpacing: '0.1em'
            }}
          >
            [ REBOOT SYSTEM ]
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [transmitOpen, setTransmitOpen] = useState(false);

  useEffect(() => {
    const lenis = initSmoothScroll();
    
    // Give DOM a small tick to render before attaching triggers
    const timeout = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => {
      clearTimeout(timeout);
      lenis.destroy();
    };
  }, []);

  const openTransmit = () => setTransmitOpen(true);
  const closeTransmit = () => setTransmitOpen(false);

  return (
    <ErrorBoundary>
      <Router>
        <div className="app-wrapper">
          <div className="audit-status-overlay">
            <p>SYSTEM BREACH DETECTED</p>
            <p>SCANNING DOM NODES...</p>
            <p style={{ color: '#ffaaaa' }}>WARNING: Unsanitized input exposed.</p>
            <p>ROOT ACCESS GRANTED<span className="audit-cursor"></span></p>
          </div>
          <ScrollToTop />
          <PageTitle />
          <KonamiListener />
          <TerminalOverlay />
          <ScrollProgress />
          <Cursor />
          <Nav onTransmitClick={openTransmit} />
          <main className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/work" element={<ProjectArchive />} />
              <Route path="/writing" element={<FieldNotes />} />
              <Route path="/writing/category/:categoryId" element={<CategoryView />} />
              <Route path="/writing/:slug" element={<ArticleView />} />
              <Route path="/transmissions" element={<Transmissions />} />
              <Route path="/uses" element={<Uses />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/classified" element={<Classified />} />
              <Route path="/vault" element={<SecretProtocols />} />
              <Route path="/protocols" element={<SecretProtocols />} />
              {/* Legacy redirects */}
              <Route path="/archive" element={<ProjectArchive />} />
              <Route path="/blog" element={<FieldNotes />} />
              <Route path="/blog/:slug" element={<ArticleView />} />
              <Route path="/blog/category/:categoryId" element={<CategoryView />} />
              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer onTransmitClick={openTransmit} />
          <TransmitModal isOpen={transmitOpen} onClose={closeTransmit} />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
