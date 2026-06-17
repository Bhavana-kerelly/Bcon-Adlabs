'use test';
'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HorizontalPortfolio from '@/components/HorizontalPortfolio';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import ServicesShowcase from '@/components/ServicesShowcase';
import Benefits from '@/components/Benefits';
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import Recognitions from '@/components/Recognitions';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replicate Webflow / Anime page entrance slide-up transition
    const introDurationMS = 1600;
    
    // Disable scrolling during intro load
    document.body.classList.add('overflow-hidden');

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        document.body.classList.remove('overflow-hidden');
      }
    });

    // Animate transition background slide up out of view
    tl.to('.transition-panel', {
      y: '-100%',
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 1.0
    });

    // Fade logo out slightly before slide
    tl.to('.transition-logo', {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
    }, '-=1.0');

  }, []);

  return (
    <>
      {/* Intro transition panel */}
      {loading && (
        <div className="transition-panel fixed inset-0 bg-midnight-blue z-[9999] flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/images/bcon-adlabs-logo.png"
              alt="Bcon Adlabs logo"
              className="transition-logo w-32 h-auto opacity-100 scale-100"
            />
            {/* Sliding loading indicator border line */}
            <div className="absolute bottom-[-20px] w-24 h-[2px] bg-hotred overflow-hidden rounded-full">
              <div className="w-full h-full bg-white animate-[pulse_1.5s_infinite]" />
            </div>
          </div>
        </div>
      )}

      {/* Main App content wrapped in Lenis scroll sync */}
      <SmoothScroll>
        <Navbar />
        <main className="relative flex-1 w-full flex flex-col">
          <Hero />
          <HorizontalPortfolio />
          <About />
          <WhatWeDo />
          <ServicesShowcase />
          <Benefits />
          <FeaturedWork />
          <Testimonials />
          <ClientLogos />
          <Recognitions />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}