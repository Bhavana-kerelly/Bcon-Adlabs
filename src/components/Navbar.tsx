'use test';
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control body overflow when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "What we do", href: "#services" },
    { label: "logos", href: "/logos" },
    { label: "Our Studio", href: "#about" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      {/* Desktop / Core Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-6 md:px-12 md:py-8 ${
          scrolled ? "bg-beige/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block relative z-50">
            <img
              src="/images/bcon-adlabs-logo.png"
              alt="Bcon Adlabs digital marketing agency"
              className="h-10 md:h-20 w-auto block"
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-helno text-[1rem] font-bold text-midnight-blue hover:text-hotred transition-colors duration-300 relative group py-2"
              >
                {item.label}
                <span className="text-hotred">.</span>
              </Link>
            ))}
            <div className="ml-4">
              <Link
                href="#contact"
                className="inline-block border-2 border-green text-green font-helno text-[1rem] font-bold px-6 py-2.5 rounded-full hover:bg-green hover:text-white transition-all duration-300"
              >
                Let&apos;s talk!
              </Link>
            </div>
          </nav>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-midnight-blue hover:text-hotred transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-midnight-blue z-40 flex flex-col justify-center px-12 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex flex-col space-y-8 max-w-lg">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-helno text-4xl md:text-5xl font-bold text-beige hover:text-hotred transition-colors duration-300"
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.label}
              <span className="text-hotred">.</span>
            </Link>
          ))}
          <div
            className="pt-6"
            style={{
              transitionDelay: isOpen ? `${navItems.length * 100}ms` : "0ms",
            }}
          >
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block border-2 border-green text-green font-helno text-2xl font-bold px-8 py-3.5 rounded-full hover:bg-green hover:text-beige transition-all duration-300"
            >
              Let&apos;s talk!
            </Link>
          </div>
        </div>

        {/* Dynamic Watermark in background */}
        <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none font-helno text-[12vw] font-bold text-beige leading-none">
          Bcon Adlabs
        </div>
      </div>
    </>
  );
}