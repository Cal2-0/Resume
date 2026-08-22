import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initSmoothScroll, lenisInstance } from './utils/smoothScroll';
import { initScrollAnimations } from './utils/animations';

import Hero from './components/sections/Hero';
import Person from './components/sections/Person';
import AchievementsMarquee from './components/shared/AchievementsMarquee';
import GithubTelemetry from './components/sections/GithubTelemetry';
import ProjectsSection from './components/sections/ProjectsSection';
import LabBench from './components/sections/LabBench';
import FieldEvidence from './components/sections/FieldEvidence';
import Transmissions from './components/sections/Transmissions';
import FieldNotes from './components/sections/FieldNotes';
import ArticleView from './pages/ArticleView';
import CategoryView from './pages/CategoryView';
import Gallery from './components/sections/Gallery';
import Nav from './components/sections/Nav';
import Footer from './components/sections/Footer';
import Cursor from './components/shared/Cursor';

import './index.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Immediately reset standard window scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

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
      }, 150);
      return () => clearTimeout(timer);
    }

    // 4. Force GSAP ScrollTrigger to recalculate and refresh triggers
    const stTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (lenisInstance) lenisInstance.resize();
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(stTimer);
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <Person />
    <AchievementsMarquee />
    <GithubTelemetry />
    <ProjectsSection />
    <FieldEvidence />
  </>
);

function App() {
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

  return (
    <Router>
      <div className="app-wrapper">
        <ScrollToTop />
        <Cursor />
        <Nav />
        <main className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/field-notes" element={<FieldNotes />} />
            <Route path="/field-notes/category/:categoryId" element={<CategoryView />} />
            <Route path="/field-notes/:slug" element={<ArticleView />} />
            <Route path="/transmissions" element={<Transmissions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
