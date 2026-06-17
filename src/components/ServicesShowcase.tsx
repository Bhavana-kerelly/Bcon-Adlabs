'use test';
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const getScrollAmount = () =>
  track.scrollWidth - document.documentElement.clientWidth;

    // Desktop ScrollTrigger horizontal slide
    const ctx = gsap.context(() => {
  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": () => {
      const scrollAmount =
        track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
      });
    },
  });

  ScrollTrigger.refresh();
}, section);
    
    

    return () => ctx.revert();
  }, []);

  const services = [
    {
      num: "01",
      title: "Branding",
      label: "01. BRANDING & VISUAL IDENTITY",
      bgColor: "#dade91",
      bgImage: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977538893624085_branding-card-lines.svg",
      description: "We believe a solidly built brand can become a company's greatest asset. Our well-structured design approach helps you optimize and streamline how your brand is perceived.",
      bullets: ["Brand identity & logo", "Stand-out from crowd", "Earn customer trust", "Brand style guides"],
      btnText: "See our branding services",
      btnUrl: "#contact"
    },
    {
      num: "02",
      title: "Social Media",
      label: "02. SOCIAL MEDIA MARKETING",
      bgColor: "#deaf91",
      bgImage: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e97753f47462408d_website-card-lines.svg",
      description: "We choose the platforms that fit your brand and run advanced, data-driven campaigns optimized for the best return on ad spend.",
      bullets: ["Content strategy", "Paid social campaigns", "Community management", "Influencer marketing"],
      btnText: "See our social media services",
      btnUrl: "#contact"
    },
    {
      num: "03",
      title: "SEO",
      label: "03. SEARCH ENGINE OPTIMIZATION",
      bgColor: "#ded491",
      bgImage: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e9775313b8624088_product-card-lines.svg",
      description: "We research market trends and user behavior to help your website rank higher, drive qualified traffic, and convert visitors into leads.",
      bullets: ["On-page & technical SEO", "Keyword research", "Local SEO", "Content optimization"],
      btnText: "See our SEO services",
      btnUrl: "#contact"
    },
    {
      num: "04",
      title: "Web Design",
      label: "04. WEBSITE DESIGN & DEVELOPMENT",
      bgColor: "#91dedc",
      bgImage: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977530165624089_webflow-card-lines.svg",
      description: "The right website design strategy brings out the volume of transformation in results and revenue, built mobile-first and optimized for growth.",
      bullets: ["Corporate websites", "eCommerce", "Landing pages", "Website redesign"],
      btnText: "See our web design services",
      btnUrl: "#contact"
    },
    {
      num: "05",
      title: "Advertising",
      label: "05. ADVERTISEMENT & PAID MEDIA",
      bgColor: "#a7acee",
      bgImage: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977533d9362408b_craftemo-card-lines.svg",
      description: "We produce targeted, personalized advertising content and help businesses generate real sales and leads across digital channels.",
      bullets: ["Google Ads", "Performance marketing", "Display campaigns", "Lead generation"],
      btnText: "Get a free consultation",
      btnUrl: "#contact"
    }
  ];

  return (
    <div
  ref={sectionRef}
  className="relative bg-beige z-20 overflow-hidden"
  
>
      {/* Mobile Stack view (scrolls vertically on small screens) */}
      <div className="lg:hidden flex flex-col gap-12 py-16 px-8">
        {services.map((service) => (
          <div key={service.num} className="flex flex-col gap-6 items-center w-full max-w-md mx-auto">
            {/* Left Card Box (rendered top on mobile) */}
            <div
              className="w-full aspect-[4/5] rounded-xl relative p-8 flex flex-col justify-between overflow-hidden shadow-md"
              style={{
                backgroundColor: service.bgColor,
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="heading-style-h1-md text-midnight-blue leading-none">
                {service.title}
                <span className="text-hotred">.</span>
              </h3>
              <div>
                <p className="label-copy text-xs text-midnight-blue/60 mb-2">{service.label}</p>
                <div className="text-5xl font-helno font-bold text-midnight-blue/20">{service.num}</div>
              </div>
            </div>

            {/* Right details box */}
            <div className="w-full flex flex-col gap-6 justify-between py-2">
              <p className="text-lg text-midnight-blue leading-relaxed font-normal">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-4 my-2">
                {service.bullets.map((b) => (
                  <p key={b} className="text-base font-bold text-midnight-blue flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-hotred" />
                    {b}
                  </p>
                ))}
                </div>

              <a
                href={service.btnUrl}
                className="w-full py-4 text-center border-2 border-midnight-blue font-helno font-bold rounded-full hover:bg-midnight-blue hover:text-beige transition-colors duration-300"
              >
                {service.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Pin Track view */}
      <div
  ref={trackRef}
  className="hidden lg:flex flex-row items-center h-screen gap-0 w-max"
>
        {services.map((service) => (
          <div
  key={service.num}
  className="w-screen h-screen flex-shrink-0 flex items-center justify-center gap-20 px-20"
>
  
            {/* Left styled vector card */}
            <div
              className="w-[42vw] h-[80vh] max-w-[700px] rounded-xl relative p-12 flex flex-col justify-between overflow-hidden shadow-lg select-none"
              style={{
                backgroundColor: service.bgColor,
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="heading-style-h1-md text-midnight-blue leading-none">
                {service.title}
                <span className="text-hotred">.</span>
              </h3>
              
              <div>
                <p className="label-copy text-xs text-midnight-blue/60 mb-2">{service.label}</p>
                <div className="text-7xl font-helno font-bold text-midnight-blue/15">{service.num}</div>
              </div>
            </div>

            {/* Right text layout */}
            <div className="w-[35vw] max-w-[600px] flex flex-col justify-center gap-8">
              <p className="text-2xl text-midnight-blue leading-relaxed font-normal">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 my-4">
                {service.bullets.map((b) => (
                  <p key={b} className="text-lg font-bold text-midnight-blue flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-hotred" />
                    {b}
                  </p>
                ))}
                <div className="w-screen flex-shrink-0" />
              
                </div>

              <a
                href={service.btnUrl}
                className="inline-block w-fit px-8 py-4 border-2 border-midnight-blue hover:bg-midnight-blue hover:text-beige transition-colors duration-300 font-helno font-bold text-lg rounded-full shadow-sm"
              >
                {service.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}