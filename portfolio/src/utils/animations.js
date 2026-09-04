import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // ─── PARALLAX DEPTH LAYERS ───
  // Note: Dossier identity uses clean CSS sticky positioning; artificial translateY parallax removed to prevent header overlaps.


  // GitHub telemetry: the dashboard floats up slightly as you scroll
  const ghDashboard = document.querySelector('.gh-dashboard');
  if (ghDashboard && !isMobile) {
    gsap.to(ghDashboard, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.gh-scene',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      }
    });
  }
  
  // Heatmap parallax
  const ghHeatmap = document.querySelector('.gh-heatmap-container');
  if (ghHeatmap && !isMobile) {
    gsap.to(ghHeatmap, {
      y: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.gh-scene',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }
    });
  }

  // Archive items: stagger parallax — each row lags slightly behind
  const archiveItems = document.querySelectorAll('.archive-item');
  if (!isMobile) {
    archiveItems.forEach((item, i) => {
      gsap.to(item, {
        y: -(10 + i * 5),
        ease: 'none',
        scrollTrigger: {
          trigger: '.archive-scene',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5 + i * 0.1,
        }
      });
    });
  }

  // Evidence carousel: slower parallax for floating feel
  const evidenceCarousel = document.querySelector('.evidence-carousel-wrapper');
  if (evidenceCarousel && !isMobile) {
    gsap.to(evidenceCarousel, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.evidence-scene',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.8,
      }
    });
  }

  // ─── SECTION HEADER REVEALS ───
  // Each section header slides in from the left with a gold line growing
  const sectionHeaders = document.querySelectorAll('.archive-header, .gh-header, .evidence-header');
  sectionHeaders.forEach(header => {
    gsap.fromTo(header,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // ─── CONTENT BLOCK REVEALS ───
  // Stagger reveal archive items with a cinematic slide-up
  if (archiveItems.length) {
    gsap.fromTo(archiveItems,
      { y: 100, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.archive-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // GitHub stat boxes: pop in one by one
  const statBoxes = document.querySelectorAll('.gh-stat-box');
  if (statBoxes.length) {
    gsap.fromTo(statBoxes,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.gh-dashboard',
          start: 'top 85%',
        }
      }
    );
  }

  // Repo rows: slide in from left
  const repoRows = document.querySelectorAll('.gh-repo-row');
  if (repoRows.length) {
    gsap.fromTo(repoRows,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gh-repos',
          start: 'top 85%',
        }
      }
    );
  }

  // Evidence section: the whole carousel wrapper fades+scales up
  if (evidenceCarousel) {
    gsap.fromTo(evidenceCarousel,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.evidence-scene',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // ─── HORIZONTAL RULE GROW ANIMATIONS ───
  // Any .bureau-rule will grow from left to right as it enters view
  const rules = document.querySelectorAll('.bureau-rule');
  rules.forEach(rule => {
    gsap.fromTo(rule,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: rule,
          start: 'top 90%',
        }
      }
    );
  });

  // ─── GALLERY POLAROIDS ───
  const gallery = document.querySelector('.projects-gallery');
  if (gallery) {
    const polaroids = gallery.querySelectorAll('.polaroid');
    gsap.fromTo(polaroids,
      { opacity: 0, y: 100, rotation: 10 },
      {
        opacity: 1,
        y: 0,
        rotation: (i, el) => el.style.getPropertyValue('--rotation').replace('deg','') || 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: gallery,
          start: 'top 75%'
        }
      }
    );
  }

  // ─── AWARDS STAGGER ───
  const awardsGrid = document.querySelector('.awards-grid');
  if (awardsGrid) {
    const awards = awardsGrid.querySelectorAll('.award-certificate');
    gsap.fromTo(awards,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: awardsGrid,
          start: 'top 75%'
        }
      }
    );
  }

  // ─── SKILLS STAGGER ───
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    const skills = skillsGrid.querySelectorAll('.skill-category');
    gsap.fromTo(skills,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsGrid,
          start: 'top 80%'
        }
      }
    );
  }
};
