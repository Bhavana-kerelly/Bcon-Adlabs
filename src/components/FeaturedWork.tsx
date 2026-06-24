'use client';

import { useState } from 'react';

export default function FeaturedWork() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Real Bcon Adlabs case studies (sourced from client case study deck)
  const projects = [
    {
      id: 1,
      title: "V Sign Enterprises",
      tag: "SIGNAGE & MANUFACTURING",
      description: "On & off-page SEO restructuring took V Sign to 2nd place in search rankings in 5 months, with 75% of website visitors now arriving through search.",
      image: "/images/vsign.png",
      link: "/case-study/vsign"
    },
    {
      id: 2,
      title: "VDerma Skin & Hair Clinics",
      tag: "HEALTHCARE",
      description: "A full-funnel ad strategy across Google & Meta drove a 94% increase in customer leads and over 4,000 leads generated, while lowering ad costs by 53%.",
      image: "/images/Vderma.png",
      link: "/case-study/vderma"
    },
    {
      id: 3,
      title: "Mega Properties",
      tag: "REAL ESTATE",
      description: "A 360-degree SEO & content approach grew indexed pages by 175% and earned the #1 search ranking among regional real estate competitors.",
      image: "/images/mega.png",
      link: "/case-study/mega-properties"
    },
    {
      id: 4,
      title: "Rigved Lighting",
      tag: "MANUFACTURING & RETAIL",
      description: "A focused Google Ads push during peak season delivered a 209% increase in organic traffic and 49% more quote requests within the year.",
      image: "/images/rigved.png",
      link: "/case-study/rigved-lighting"
    }
  ];

  return (
    <section id="work" className="relative background-color-beige py-24 md:py-36 z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header Block: Huge "Work" and "Featured" */}
        <div className="relative flex flex-col items-start mb-24 md:mb-36">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-12 bg-midnight-blue rounded-full flex items-center justify-center animate-bounce">
              <img
                src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e97753eeed62408a_arrow_down.svg"
                alt=""
                className="h-4 w-4 invert"
              />
            </div>
            <p className="label-copy text-sm text-midnight-blue/60 uppercase">
              Browse some of our latest campaigns
            </p>
          </div>

          <div className="relative leading-none">
            {/* Massive Work background word */}
            <h1 className="heading-style-h1-lg text-midnight-blue select-none font-bold uppercase tracking-tighter">
              Work
            </h1>
            
            {/* Floating red circle markers */}
            <div className="absolute top-1/4 left-[35%] w-8 h-8 rounded-full bg-hotred animate-ping" />
            <div className="absolute bottom-1/4 left-[65%] w-5 h-5 rounded-full bg-hotred" />
          </div>

          <div className="mt-[-2rem] md:mt-[-4rem] ml-8">
            <h2 className="heading-style-italiclg text-midnight-blue italic font-light">
              Featured
            </h2>
          </div>
        </div>

        {/* 2x2 Grid Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col gap-6"
              onMouseEnter={() => setHoveredCard(proj.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card thumbnail container */}
              <a
                href={proj.link}
                className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                {/* Static base image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Dark reveal gradient */}
                <div className="absolute inset-0 bg-midnight-blue/10 group-hover:bg-midnight-blue/0 transition-colors duration-300" />
              </a>

              {/* Title & metadata */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center gap-4">
                  <h3 className="heading-style-h5 font-bold text-midnight-blue">
                    {proj.title}
                  </h3>
                  <span className="text-[0.7rem] font-bold text- bg-hotred/10 px-3 py-1 rounded-full tracking-wide">
                    {proj.tag}
                  </span>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a
            href="/blogs"
            className="inline-block px-8 py-3.5 bg-hotred text-white font-bold rounded-lg hover:bg-hotred/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}