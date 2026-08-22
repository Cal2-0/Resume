import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
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
  const navType = useNavigationType();

  useEffect(() => {
    // If the user hit the back button, let the browser handle scroll restoration
    if (navType === 'POP') return;

    if (hash) {
      // Small timeout to allow DOM to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { offset: 0, immediate: false });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
    
    // Refresh ScrollTrigger and trigger a window resize event to allow Lenis to recalculate height
    const stTimer = setTimeout(() => {
      import('gsap/ScrollTrigger').then((st) => {
        st.default.refresh();
      });
      window.dispatchEvent(new Event('resize'));
    }, 200);

    return () => clearTimeout(stTimer);
  }, [pathname, hash, navType]);
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
