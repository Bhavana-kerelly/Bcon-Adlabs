'use test';
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Fade in and slide up each benefits header item
      gsap.fromTo(
        '.benefits-head',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate decorative red bars
      gsap.fromTo(
        '.benefits-bar',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const benefitsList = [
    "Increase Conversions",
    "Build Brand Equity",
    "Increase ROI",
    "Grow with Confidence",
    "Connect with Customers",
  ];

  return (
    <section
      ref={containerRef}
      className="relative background-color-beige py-24 md:py-36 px-8 md:px-16 overflow-hidden z-20"
    >
      <div className="max-w-[1440px] mx-auto relative flex flex-col items-center">
        
        {/* Title subhead */}
        <div className="w-full flex items-center justify-between border-b border-midnight-blue/10 pb-8 mb-16">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977538e2b624087_fwd_arrow_sm.svg"
              alt=""
              className="h-4 w-4"
            />
            <h2 className="heading-style-h5 uppercase tracking-wide text-midnight-blue">
              Get the attention of your customers &amp; investors instantly.
            </h2>
          </div>
          <p className="hidden md:block text-midnight-blue/60 text-lg">
            Our 360-degree digital marketing agency serves the unique demands of SMEs and startups.
          </p>
        </div>

        {/* Benefits text list container */}
        <div className="relative flex flex-col items-center space-y-6 md:space-y-8 py-12 w-full">
          
          {/* Decorative red bars background lines */}
          <div className="benefits-bar absolute top-0 left-0 w-full h-[2px] bg-hotred/20 origin-left" />
          <div className="benefits-bar absolute bottom-0 left-0 w-full h-[2px] bg-hotred/20 origin-left" />
          <div className="benefits-bar absolute top-[30%] left-0 w-full h-[1px] bg-hotred/10 origin-left hidden md:block" />
          <div className="benefits-bar absolute top-[60%] left-0 w-full h-[1px] bg-hotred/10 origin-left hidden md:block" />

          {benefitsList.map((benefit, idx) => (
            <div key={idx} className="overflow-hidden py-2 text-center w-full">
              <h1 className="benefits-head heading-style-h1-md text-midnight-blue select-none font-bold hover:text-hotred hover:scale-[1.02] transition-all duration-300">
                {benefit}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
