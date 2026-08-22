import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Reveal sections on scroll
  const sections = document.querySelectorAll('.section:not(.hero-section)');
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { opacity: 0, y: 100 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Stagger reveal polaroids in gallery
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

  // Awards stagger
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

  // Skills stagger
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
