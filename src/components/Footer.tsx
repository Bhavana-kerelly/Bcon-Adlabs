'use test';
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

export default function Footer() {
  const [showServices, setShowServices] = useState(false);

  const navLinks = [
    { label: "Home.", href: "/" },
    { label: "What we do.", href: "#services" },
    { label: "Our Work.", href: "#work" },
    { label: "Our Studio.", href: "#about" },
    { label: "Pricing.", href: "#pricing" },
    { label: "Let's talk.", href: "#contact" }
  ];

  const services = [
    "Branding & Identity",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Website Design",
    "Website Redesign",
    "Google Ads & PPC",
    "Content Marketing",
    "Corporate Website Design",
    "eCommerce Website Design",
    "Custom Logo Design",
    "Brand Style Guide Design",
    "Influencer Marketing",
    "Performance Marketing",
    "Local SEO",
    "Online Reputation Management",
    "Email Marketing",
    "Video & Reel Production",
    "360-Degree Digital Marketing"
  ];

  const socials = ["Facebook", "Instagram", "LinkedIn", "Twitter"];

  return (
    <footer id="contact" className="relative background-color-dark py-24 md:py-32 px-8 md:px-16 text-beige overflow-hidden z-20">
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5 flex justify-between px-16">
        <div className="w-[1px] h-full bg-beige" />
        <div className="w-[1px] h-full bg-beige hidden md:block" />
        <div className="w-[1px] h-full bg-beige" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Giant Let's Talk CTA */}
        <div className="flex flex-col items-start gap-4">
          <span className="label-copy text-sm text-beige/50 uppercase tracking-[0.2rem]">
            HAVE AN IDEA?
          </span>
          <Link
            href="#contact"
            className="group block relative mt-2 w-full max-w-xl"
          >
            <div className="overflow-hidden relative h-[10rem] md:h-[12rem] flex items-center">
              {/* Normal base text */}
              <h3 className="heading-style-h1-md text-beige group-hover:translate-y-[-100%] transition-transform duration-500 ease-out leading-none absolute inset-0 flex items-center">
                Let&apos;s Talk!
              </h3>
              {/* Colored reveal text */}
              <h3 className="heading-style-h1-md text-hotred translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out leading-none absolute inset-0 flex items-center">
                Let&apos;s Talk!
              </h3>
            </div>
          </Link>

          {/* Contact details — placeholders, update with Bcon Adlabs' real details */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 text-bluelight text-sm md:text-base">
            <a href="mailto:director@bconadlabs.com" className="hover:text-beige transition-colors duration-200">
              director@bconadlabs.com
            </a>
            <a href="tel:+910000000000" className="hover:text-beige transition-colors duration-200">
              +91 [phone number]
            </a>
            <span>surabhi complex, Madhapur, Hyderabad</span>
          </div>
        </div>

        {/* Navigation grid links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-beige/10 pt-12">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group overflow-hidden py-2">
              <Link
                href={link.href}
                className="font-helno text-lg md:text-xl font-bold text-beige hover:text-hotred transition-colors duration-300 relative z-10"
              >
                {link.label}
              </Link>
              {/* Sliding underline highlight */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-hotred transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Accordion Expandable Services List */}
        <div className="border-t border-beige/10 pt-8">
          <button
            onClick={() => setShowServices(!showServices)}
            className="flex items-center gap-3 text-lg font-helno font-bold hover:text-hotred transition-colors duration-300 focus:outline-none"
          >
            {showServices ? (
              <Minus className="h-5 w-5 text-hotred" />
            ) : (
              <Plus className="h-5 w-5 text-hotred" />
            )}
            <span>Show all services</span>
          </button>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden transition-all duration-700 ease-in-out ${
              showServices ? 'max-h-[1000px] mt-8 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {services.map((serv) => (
              <Link
                key={serv}
                href="#contact"
                className="text-bluelight hover:text-beige text-base py-1.5 transition-colors duration-200"
              >
                {serv}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-beige/10 pt-12 text-sm text-bluelight">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} Bcon Adlabs. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
            {socials.map((social) => {
              // Placeholder URLs — update with Bcon Adlabs' real social profiles
              const socialUrls: Record<string, string> = {
                Facebook: "#",
                Instagram: "#",
                LinkedIn: "#",
                Twitter: "#",
              };
              return (
                <a
                  key={social}
                  href={socialUrls[social] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-beige transition-colors duration-200"
                >
                  {social}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}