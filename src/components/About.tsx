'use test';
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [experience, setExperience] = useState(0);
  const [stories, setStories] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // ScrollTrigger to trigger count-up on viewport entry
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 75%',
      onEnter: () => {
        // Experience counter (0 to 3)
        const expObj = { value: 0 };
        gsap.to(expObj, {
          value: 10,
          duration: 2.0,
          ease: 'power3.out',
          onUpdate: () => setExperience(Math.floor(expObj.value)),
        });

        // Stories counter (0 to 150)
        const storyObj = { value: 0 };
        gsap.to(storyObj, {
          value: 150,
          duration: 2.5,
          ease: 'power3.out',
          onUpdate: () => setStories(Math.floor(storyObj.value)),
        });
      },
      once: true, // Run only once
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative background-color-dark py-24 md:py-36 px-8 md:px-16 text-beige overflow-hidden z-20"
    >
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5 flex justify-between px-16">
        <div className="w-[1px] h-full bg-beige" />
        <div className="w-[1px] h-full bg-beige hidden md:block" />
        <div className="w-[1px] h-full bg-beige" />
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left side headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="heading-style-h2 text-beige leading-tight">
            Bcon Adlabs is a results-driven digital marketing agency for{' '}
            <span className="heading-style-italicsm text-brown block md:inline">startups</span>{' '}
            &amp;{' '}
            <span className="heading-style-italicsm text-brown block md:inline">growing</span>{' '}
            brands.
          </h2>
        </div>

        {/* Right side body paragraph and counters */}
        <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0">
          <p className="text-bluelight text-lg leading-relaxed mb-12">
            We help businesses of all sizes with 360-degree digital marketing, branding, social media, and custom website design — backed by research, strategy and data.
            <br />
            <br />
            We strongly believe data doesn&apos;t have to be dry and creativity can reap results, so we craft top-down digital strategies that engage, convert and perform.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-beige/10 pt-8">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <h3 className="text-5xl md:text-6xl font-helno font-bold text-brown leading-none mb-2">
                {experience}+
              </h3>
              <p className="text-bluelight text-sm">
                Years developing digital marketing strategies that grow brands
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <h3 className="text-5xl md:text-6xl font-helno font-bold text-brown leading-none mb-2">
                {stories}+
              </h3>
              <p className="text-bluelight text-sm">
                Brands grown across healthcare, real estate, education & more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}