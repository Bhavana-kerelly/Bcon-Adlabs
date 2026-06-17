'use test';
'use client';

import Link from 'next/link';

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative background-color-beige py-24 md:py-32 px-8 md:px-16 overflow-hidden z-20 border-b border-midnight-blue/5"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column heading */}
        <div className="lg:col-span-4 flex items-start gap-4">
          <div className="pt-2 flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977538e2b624087_fwd_arrow_sm.svg"
              alt=""
              className="h-4 w-4"
            />
          </div>
          <h2 className="heading-style-h5 uppercase tracking-wide text-midnight-blue">
            What we do
          </h2>
        </div>

        {/* Middle column body copy */}
        <div className="lg:col-span-5">
          <p className="text-2xl md:text-3xl text-midnight-blue leading-normal font-normal">
            We make your brand bold, visible, and impossible to ignore among your closest competitors!
          </p>
        </div>

        {/* Right column CTA Link */}
        <div className="lg:col-span-3 flex justify-start lg:justify-end">
          <Link
            href="#services"
            className="main-link group flex items-center gap-4 text-xl font-bold text-midnight-blue py-2"
          >
            <div className="w-10 h-10 bg-midnight-blue rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-hotred">
              <img
                src="https://cdn.prod.website-files.com/63e07929e9775354b962403e/63e07929e977535172624092_fwd_arrow_beige.svg"
                alt=""
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </div>
            <div className="underline-hover">
              <span>Our Services</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
