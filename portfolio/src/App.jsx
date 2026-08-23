import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Nav from './components/sections/Nav';
import Footer from './components/sections/Footer';
import Cursor from './components/shared/Cursor';
import ScrollProgress from './components/shared/ScrollProgress';
import TransmitModal from './components/shared/TransmitModal';
import BootLoader from './components/shared/BootLoader';

import './index.css';

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

function App() {
  const [transmitOpen, setTransmitOpen] = useState(false);
  const [booting, setBooting] = useState(true);

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
    <Router>
      {booting && <BootLoader onComplete={() => setBooting(false)} />}
      <div className="app-wrapper" style={{ opacity: booting ? 0 : 1, transition: 'opacity 0.1s' }}>
        {/* Film Grain Overlay */}
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99997,
          pointerEvents: 'none',
          opacity: 0.04,
          background: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }} />

        <ScrollToTop />
        <PageTitle />
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
            {/* Legacy redirects */}
            <Route path="/archive" element={<ProjectArchive />} />
            <Route path="/blog" element={<FieldNotes />} />
            <Route path="/blog/:slug" element={<ArticleView />} />
            <Route path="/blog/category/:categoryId" element={<CategoryView />} />
          </Routes>
        </main>
        <Footer onTransmitClick={openTransmit} />
        <TransmitModal isOpen={transmitOpen} onClose={closeTransmit} />
      </div>
    </Router>
  );
}

export default App;
