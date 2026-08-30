import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export let lenisInstance = null;

export const initSmoothScroll = () => {
  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.8,       // Slower = more luxurious
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothWheel: true,
    smoothTouch: false,   // Disable on touch for native feel
    touchMultiplier: 1.5,
  });

  lenisInstance.on('scroll', (e) => {
    ScrollTrigger.update();
    
    // Scroll Velocity Blur Effect
    // Only apply on non-touch devices for performance
    if (window.matchMedia("(hover: hover)").matches) {
      const velocity = Math.abs(e.velocity);
      const appContainer = document.querySelector('.app-container');
      if (appContainer) {
        if (velocity > 1.5) {
          // Cap the blur at 8px so it doesn't get completely unreadable
          const blurAmount = Math.min((velocity - 1.5) * 0.5, 8);
          // Also apply a slight vertical scale based on velocity for stretch effect
          const scaleY = 1 + Math.min(velocity * 0.005, 0.05);
          appContainer.style.filter = `blur(${blurAmount}px)`;
          appContainer.style.transform = `scaleY(${scaleY})`;
          appContainer.style.transition = 'none'; // React instantly
        } else {
          appContainer.style.filter = 'blur(0px)';
          appContainer.style.transform = 'scaleY(1)';
          appContainer.style.transition = 'filter 0.3s ease-out, transform 0.3s ease-out'; // Recover smoothly
        }
      }
    }
  });

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
};
