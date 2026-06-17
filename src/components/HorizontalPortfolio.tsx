'use test';
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HorizontalPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Calculate Scroll Width and translation amount
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      return trackWidth - window.innerWidth;
    };

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Real Bcon Adlabs case studies (sourced from client case study deck)
  const slides = [
    {
      id: "clr-academy",
      title: "See CLR Academy Case Study",
      image: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/6524cfec56e369dac8182413_visual-identity-vinesia%20copy.avif",
      alt: "CLR Academy lead generation campaign across Facebook, Instagram, Google & LinkedIn",
      ctaUrl: "#contact",
      hasButton: true
    },
    {
      id: "sree-navodaya-akademy",
      title: "Sree Navodaya Akademy",
      image: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/649c51c2c2196aa3aa259934_ai%20design.avif",
      alt: "Sree Navodaya Akademy digital marketing campaign generating 1,673 leads in 10 months",
      hasButton: false
    },
    {
      id: "dravin-holidays",
      title: "Dravin Holidays",
      image: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63ef10a6854a6393f236669e_News-media-.avif",
      alt: "Dravin Holidays travel brand campaign reaching 1.2M impressions",
      hasButton: false
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-beige overflow-hidden z-20">
      {/* Scrollable Track Element */}
      <div ref={trackRef} className="flex flex-row items-center h-screen pl-12 pr-24 gap-12 w-max">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-[85vw] md:w-[60vw] h-[75vh] flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden group select-none shadow-lg"
          >
            {/* Background project image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Visual gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

            {/* Case Study Button Overlay */}
            {slide.hasButton && (
              <div className="absolute bottom-12 left-12 z-30">
                <a
                  href={slide.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-beige text-midnight-blue hover:bg-hotred hover:text-white font-helno font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  <img
                    src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977535172624092_fwd_arrow_beige.svg"
                    alt=""
                    className="h-4 w-4 filter invert group-hover:invert-0 transition-all duration-300"
                  />
                  <span>{slide.title}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}