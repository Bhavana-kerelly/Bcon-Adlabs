'use test';
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const spinningBadgeRef = useRef<HTMLImageElement>(null);
  const hoverGridRef = useRef<HTMLDivElement>(null);
  const [activeColumn, setActiveColumn] = useState<number | null>(null);

  // Split text helper to match Webflow letter animations
  const splitText = (text: string, className = "letter") => {
    return text.split("").map((char, idx) => (
      <span key={idx} className={`${className} inline-block transform translate-y-[100%] opacity-0`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    // 1. Text entrance animations using GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } });
      
      // Animate "We design kick-ass"
      tl.to('.anim-title-1 .letter', {
        y: '0%',
        opacity: 1,
        stagger: 0.02,
      });

      // Animate "Re.vitalizing"
      tl.to('.anim-title-2 .letter', {
        y: '0%',
        opacity: 1,
        stagger: 0.03,
      }, '-=1.0');

      // Animate "brand perceptions"
      tl.to('.anim-title-3 .letter', {
        y: '0%',
        opacity: 1,
        stagger: 0.02,
      }, '-=1.0');

      // Animate bottom paragraph and label
      tl.to('.anim-sub', {
        opacity: 1,
        y: 0,
        duration: 1.2,
      }, '-=0.8');

      // Animate Red bar dividers
      tl.fromTo('.anim-bar', {
        scaleX: 0,
      }, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1.5,
        stagger: 0.2,
      }, '-=1.2');

      // 2. Slow rotation of circular text badge
      gsap.to(spinningBadgeRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Handle cursor tracking over the 5 column grid
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverGridRef.current) return;
    const rect = hoverGridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const colWidth = rect.width / 5;
    const colIndex = Math.floor(x / colWidth);
    
    if (colIndex >= 0 && colIndex < 5) {
      setActiveColumn(colIndex);
    }
  };

  const handleMouseLeave = () => {
    setActiveColumn(null);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full background-color-beige overflow-hidden flex flex-col justify-between pt-32 pb-16 px-8 md:px-16"
    >
      {/* Background illustration waves */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e97753ce656240cb_bg-home-hero.svg"
          alt=""
          className="absolute right-0 top-1/4 w-3/4 md:w-1/2 opacity-20"
        />
        <img
          src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e97753b1276240df_bg-home-hero-anim.svg"
          alt=""
          className="absolute right-0 top-1/4 w-3/4 md:w-1/2 opacity-25 animate-pulse"
        />
      </div>

      {/* Grid of 5 vertical mouse-hover zones */}
      <div
        ref={hoverGridRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0 z-10 flex cursor-default"
      >
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex-1 h-full relative transition-all duration-300 flex items-center justify-center"
          >
            {/* The hover image container */}
            <div
              className={`absolute w-48 h-64 md:w-60 md:h-80 overflow-hidden pointer-events-none transition-all duration-700 ease-out transform ${
                activeColumn === idx
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 translate-y-8'
              }`}
            >
              <img
                src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/652bd257f9121f403b0e7497_001.avif"
                alt="Souvenir-IT branding mockup"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Hero Header Typography */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto mt-auto flex-1 flex flex-col justify-center">
        {/* Label block */}
        <div className="anim-sub opacity-0 translate-y-4 mb-4">
          <p className="label-copy text-midnight-blue/60 uppercase">
            ADVERTISEMENT &amp; DIGITAL MARKETING AGENCY.
          </p>
        </div>

        {/* Content Top Header */}
        <div className="relative py-8">
          <div className="anim-bar absolute top-0 left-0 w-full h-[2px] bg-hotred" />
          
          <div className="flex flex-col space-y-2 md:space-y-4">
            {/* Kick-ass line */}
            <div className="anim-title-1 overflow-hidden">
              <h1 className="heading-style-italiclg text-midnight-blue italic font-light">
                {splitText("We build bold")}
              </h1>
            </div>

            {/* Sub-label banner */}
            <div className="anim-sub opacity-0 translate-y-4">
              <p className="label-copy text-[0.7rem] tracking-[0.2rem] text-midnight-blue/50 uppercase font-bold">
                TOP DIGITAL MARKETING & BRANDING AGENCY IN HYDERABAD
              </p>
            </div>

            {/* Revitalizing line */}
            <div className="anim-title-2 overflow-hidden py-1">
              <h2 className="heading-style-h1-md text-midnight-blue font-bold tracking-tight">
                {splitText("Bcon")}
                <span className="text-hotred">.</span>
                {splitText("Adlabs")}
              </h2>
            </div>

            {/* Brand perceptions line */}
            <div className="anim-title-3 overflow-hidden">
              <h2 className="heading-style-italiclg text-midnight-blue italic font-light">
                {splitText("digital experiences")}
              </h2>
            </div>
          </div>

          <div className="anim-bar absolute bottom-0 left-0 w-full h-[2px] bg-hotred" />
        </div>
      </div>

      {/* Bottom Hero Layout: Spinned button & Intro Paragraph */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Spinning Badge Button */}
        <div className="relative w-36 h-36 flex-shrink-0 group cursor-pointer">
          <img
            ref={spinningBadgeRef}
            src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977532b0162407d_circle-text.svg"
            alt="Click to see our work"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 m-auto w-16 h-16 bg-green hover:bg-hotred hover:scale-105 rounded-full flex items-center justify-center transition-all duration-300 shadow-md">
            <a href="#work" className="text-white text-[0.75rem] font-bold text-center leading-tight">
              See Work
            </a>
          </div>
        </div>

        {/* Intro copy */}
        <div className="max-w-2xl anim-sub opacity-0 translate-y-4">
          <p className="text-2xl text-midnight-blue font-normal leading-relaxed">
            Bcon Adlabs helps SMEs and startups convert curious visitors into loyal customers with strategic{' '}
            <a href="#services" className="main-text_link font-bold">
              branding
            </a>
            , high-performing{' '}
            <a href="#services" className="main-text_link font-bold">
              social media marketing
            </a>{' '}
            &amp; result-driven{' '}
            <a href="#services" className="main-text_link font-bold">
              website design
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}