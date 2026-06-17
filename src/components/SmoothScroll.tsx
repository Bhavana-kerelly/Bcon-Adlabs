'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Sync ScrollTrigger updates with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate Lenis rendering loop into the GSAP ticker
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    // Turn off GSAP default lag smoothing to avoid snapping artifacts
    gsap.ticker.lagSmoothing(0);

    // Make lenis globally accessible for other animations if needed
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
