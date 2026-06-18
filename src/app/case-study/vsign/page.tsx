'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VSignCaseStudy() {
  return (
    <div className="min-h-screen background-color-beige">
      <Navbar />

      {/* Hero / Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-midnight-blue/10">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-midnight-blue/50 mb-8 label-copy uppercase tracking-widest">
            <Link href="/" className="hover:text-hotred transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/#work" className="hover:text-hotred transition-colors duration-200">Case Study</Link>
            <span>/</span>
            <span className="text-midnight-blue">V Sign Enterprises</span>
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Title block */}
            <div>
              <h1 className="font-bold text-midnight-blue leading-tight mb-8" style={{ fontFamily: 'var(--font-helno)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Strategic Precision for<br />Market Dominance.
              </h1>

              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Signage &amp; Display</p>
                </div>
                <div className="w-px bg-midnight-blue/20" />
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Services</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>SEO &amp; Performance Ads</p>
                </div>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/vsign.png"
                alt="V Sign Enterprises billboard campaign"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">

          {/* Two-column layout: Content + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">

            {/* ── LEFT COLUMN ─────────────────────────────────── */}
            <div className="flex flex-col gap-20">

              {/* 01 Objectives */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">01</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight" style={{ fontFamily: 'var(--font-helno)' }}>
                    Objectives
                  </h2>
                </div>

                <p className="text-midnight-blue/70 text-base leading-relaxed mb-6">
                  SEO is traditionally a long-term play, often requiring 10+ months for stable results. Our primary challenge for V Sign Enterprises was to leverage their 5-year web history to bypass this lag. We identified that while authority existed, the structural execution was flawed. Our objective: restructure the site architecture to drive top search results immediately.
                </p>

                <blockquote className="border-l-4 border-hotred pl-5 py-1 my-8">
                  <p className="text-midnight-blue/60 italic text-base leading-relaxed">
                    &quot;The goal wasn&apos;t just traffic. It was high-intent visibility in a niche signage market.&quot;
                  </p>
                </blockquote>
              </div>

              {/* 02 Solutions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">02</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight" style={{ fontFamily: 'var(--font-helno)' }}>
                    Solutions
                  </h2>
                </div>

                <p className="text-midnight-blue/70 text-base leading-relaxed mb-10">
                  We deployed a multi-channel funnel designed for conversion rather than simple awareness.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Solution card 1 */}
                  <div className="border border-midnight-blue/10 rounded-xl p-6 bg-white/40 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-midnight-blue/5 rounded-lg flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-midnight-blue">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-midnight-blue mb-2" style={{ fontFamily: 'var(--font-helno)', fontSize: '1rem' }}>
                      Performance Ads
                    </h3>
                    <p className="text-midnight-blue/60 text-sm leading-relaxed">
                      Objective-driven campaigns fuelling the marketing funnel with precision targeting.
                    </p>
                  </div>

                  {/* Solution card 2 */}
                  <div className="border border-midnight-blue/10 rounded-xl p-6 bg-white/40 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-midnight-blue/5 rounded-lg flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-midnight-blue">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-midnight-blue mb-2" style={{ fontFamily: 'var(--font-helno)', fontSize: '1rem' }}>
                      Engagement Strategy
                    </h3>
                    <p className="text-midnight-blue/60 text-sm leading-relaxed">
                      Facebook engagement campaigns that generated over 300,000 interactions for brand authority.
                    </p>
                  </div>
                </div>
              </div>

              {/* 03 Strategic Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">03</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight" style={{ fontFamily: 'var(--font-helno)' }}>
                    Strategic Benefits
                  </h2>
                </div>

                <ul className="flex flex-col gap-4">
                  {[
                    'Increased revenue through high-conversion lead generation.',
                    'Data-backed strategies that eliminate marketing guesswork.',
                    'Affordable high-end services with no restrictive long-term contracts.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-hotred flex-shrink-0" />
                      <p className="text-midnight-blue/70 text-base leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-midnight-blue rounded-2xl p-8 md:p-10 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 right-8 text-white/5 text-[8rem] leading-none font-bold select-none" style={{ fontFamily: 'var(--font-saol)' }}>&ldquo;</div>

                <p className="text-beige/80 text-base md:text-lg leading-relaxed relative z-10 mb-8">
                  &ldquo;For over 3 years, we&apos;ve been developing new technology to grow your brand faster and better. We play a crucial role in planning with implementing the company&apos;s digital marketing strategies.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-hotred flex items-center justify-center">
                    <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>V</span>
                  </div>
                  <div>
                    <p className="text-beige text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>V Sign Management</p>
                    <p className="text-beige/50 text-xs label-copy tracking-wider">Director, V Sign Enterprises</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT SIDEBAR ──────────────────────────────── */}
            <div className="flex flex-col gap-6">

              {/* Performance Dashboard */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-6">Performance Dashboard</p>

                {/* Market Position */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-midnight-blue/50 label-copy uppercase tracking-wide">Market Position</span>
                    <span className="text-xs font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>APEX 2ND</span>
                  </div>
                  <div className="h-2 rounded-full bg-midnight-blue/10 overflow-hidden">
                    <div className="h-full bg-midnight-blue rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>

                {/* Search rate */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-midnight-blue/50 label-copy uppercase tracking-wide">Search Rate</span>
                    <span className="text-xs font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>75%</span>
                  </div>
                  <div className="h-2 rounded-full bg-midnight-blue/10 overflow-hidden">
                    <div className="h-full bg-hotred rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                {/* Donut stat: Business Growth */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-midnight-blue/3 rounded-xl border border-midnight-blue/5">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1d283b" strokeWidth="4"
                        strokeDasharray={`${75 * 0.879} 87.9`} strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>75%</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Business Growth</p>
                    <p className="text-xs text-midnight-blue/50">Search Engine Traffic Share</p>
                  </div>
                </div>

                {/* Conversion Volume */}
                <div className="mb-4 p-4 bg-midnight-blue/3 rounded-xl border border-midnight-blue/5">
                  <p className="text-xs text-midnight-blue/40 label-copy uppercase tracking-wide mb-1">Conversion Volume</p>
                  <p className="text-2xl font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>1.7Ox</p>
                  <p className="text-xs text-midnight-blue/50">~15k leads · 5,500 application cases</p>
                </div>

                {/* Project Velocity */}
                <div className="p-4 bg-hotred/5 rounded-xl border border-hotred/10">
                  <p className="text-xs text-midnight-blue/40 label-copy uppercase tracking-wide mb-1">Project Velocity</p>
                  <p className="text-xl font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>06 Months</p>
                </div>
              </div>

              {/* Strategic Roadmap */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-5">Strategic Roadmap</p>

                <div className="flex flex-col gap-4">
                  {[
                    { phase: 'PHASE 01: AUDIT', desc: 'Site structure, authority mapping &amp; gap analysis.' },
                    { phase: 'PHASE 02: DEPLOY', desc: 'On-page SEO, technical fixes &amp; content strategy.' },
                    { phase: 'PHASE 03: SCALE', desc: 'Link building, paid amplification &amp; reporting.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-hotred flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-xs font-bold text-midnight-blue label-copy tracking-wider" dangerouslySetInnerHTML={{ __html: item.phase }} />
                        <p className="text-xs text-midnight-blue/50 mt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 border-t border-midnight-blue/10 background-color-beige">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-midnight-blue/40 label-copy uppercase tracking-widest mb-1">Ready for Strategic Growth?</p>
            <p className="text-base text-midnight-blue/70">Start your project with Bcon Adlabs today.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-midnight-blue text-beige text-sm font-bold px-7 py-3 rounded-full hover:bg-hotred transition-colors duration-300"
              style={{ fontFamily: 'var(--font-helno)' }}
            >
              Start Discussion
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 border border-midnight-blue/20 text-midnight-blue text-sm font-bold px-7 py-3 rounded-full hover:border-midnight-blue transition-colors duration-300"
              style={{ fontFamily: 'var(--font-helno)' }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
