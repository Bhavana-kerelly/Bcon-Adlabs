'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RigvedLightingCaseStudy() {
  const results = [
    '209% increase in organic traffic in 1 year.',
    '49% increase in quote requests due to ads.',
    '163% increase in new users in 1 year.',
    '75% of users click on one of the first 3 results — and Rigved now occupies that prime position.',
  ];

  return (
    <div className="min-h-screen background-color-beige">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-midnight-blue/10">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-midnight-blue/50 mb-8 label-copy uppercase tracking-widest">
            <Link href="/" className="hover:text-hotred transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/#work" className="hover:text-hotred transition-colors duration-200">Case Study</Link>
            <span>/</span>
            <span className="text-midnight-blue">Rigved Lighting</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h1 className="font-bold text-midnight-blue leading-tight mb-8"
                style={{ fontFamily: 'var(--font-helno)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Peak Season Domination<br />Through Google Ads.
              </h1>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Manufacturing &amp; Retail</p>
                </div>
                <div className="w-px bg-midnight-blue/20" />
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Services</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Google Ads, SEO &amp; YouTube</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/rigved.png"
                alt="Rigved Lighting case study"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">

            {/* LEFT */}
            <div className="flex flex-col gap-20">

              {/* Objectives */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">01</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Objectives</h2>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  Backed by 10 years in the mission-critical lighting industry, Rigved Lighting delivers permanent, configurable LED lighting solutions. They offer two standout products — a color-changing holiday lighting system and a dimmable patio lighting system.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  Unlike other permanent holiday lights, Rigved Lighting is the only multi-color system that lets you mix and match infinite color options while adding movement to create your own custom lighting programs.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed">
                  Their LED color-changing system features paintable channel lighting available in nine different colors to blend in with any exterior — meaning customers can keep their lights up year-round for endless festivity.
                </p>
              </div>

              {/* Challenges */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">02</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Challenges</h2>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  Rigved Lighting was entering their busy season of November and October, and wanted to see if Google Ads could help maximise their potential for the 2022 holidays.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed">
                  While members of the Rigved Lighting team had some advertising experience, they wanted to be sure and maximise their results by working with a dedicated Search Engine Marketing Agency — someone who could take full ownership of the campaign.
                </p>
                <blockquote className="border-l-4 border-hotred pl-5 py-1 mt-8">
                  <p className="text-midnight-blue/60 italic text-base leading-relaxed">
                    &quot;75% of users click on one of the first 3 results. If you&apos;re not ranking first — or running Google Ads — you could be missing out on a lot of potential business.&quot;
                  </p>
                </blockquote>
              </div>

              {/* Solutions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">03</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Solutions</h2>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  Our first step was to deeply understand Rigved Lighting, their goals, and ensure we could properly track performance against those goals. We built out keyword lists iteratively over several weeks — going back and forth with the client to ensure accuracy and relevance.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  Since we would only be running ads for 3 months (October–December), everything had to be as close to perfect as possible at launch. The difference between &quot;color changing lights&quot; and &quot;permanent color changing christmas lights&quot; was a massive difference in user intent — and we got granular to capture the right audience.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-10">
                  Throughout the process, we removed underperforming keywords daily, adjusted campaigns based on competition, and reported results continuously. Additionally, we developed YouTube ads and GIFs showcasing the lights&apos; color-changing ability — driving organic and direct traffic to their highest levels ever.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { icon: '🔍', title: 'Keyword Research', desc: 'Granular intent-based keyword lists built iteratively over weeks.' },
                    { icon: '📺', title: 'YouTube Ads & GIFs', desc: 'Visual ads showcasing product capability to drive brand searches.' },
                    { icon: '📊', title: 'Daily Optimisation', desc: 'Continuous monitoring, removal of lagging keywords, competitive adjustments.' },
                  ].map((c, i) => (
                    <div key={i} className="border border-midnight-blue/10 rounded-xl p-5 bg-white/40 hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl mb-3">{c.icon}</div>
                      <h3 className="font-bold text-midnight-blue text-sm mb-2" style={{ fontFamily: 'var(--font-helno)' }}>{c.title}</h3>
                      <p className="text-midnight-blue/60 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-midnight-blue rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-6 right-8 text-white/5 text-[8rem] leading-none font-bold select-none"
                  style={{ fontFamily: 'var(--font-saol)' }}>&ldquo;</div>
                <p className="text-beige/80 text-base md:text-lg leading-relaxed relative z-10 mb-8">
                  &ldquo;Bcon Adlabs took full ownership of our holiday campaign and delivered results we couldn&apos;t have imagined on our own. The organic traffic growth has been sustained long after the campaign ended.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-hotred flex items-center justify-center">
                    <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>RL</span>
                  </div>
                  <div>
                    <p className="text-beige text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>Rigved Management</p>
                    <p className="text-beige/50 text-xs label-copy tracking-wider">Director, Rigved Lighting</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="flex flex-col gap-6">

              {/* Key Metrics */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-6">Key Metrics</p>
                <div className="flex flex-col gap-5">
                  {[
                    { label: 'Organic Traffic Growth', value: '209%', sub: 'In 1 year', color: '#f64242' },
                    { label: 'Quote Requests via Ads', value: '+49%', sub: 'From paid campaigns', color: '#186e7a' },
                    { label: 'New Users Increase', value: '163%', sub: 'In 1 year', color: '#1d283b' },
                  ].map((m, i) => (
                    <div key={i} className="p-4 rounded-xl border border-midnight-blue/5 bg-midnight-blue/3">
                      <p className="text-xs text-midnight-blue/40 label-copy uppercase tracking-wide mb-1">{m.label}</p>
                      <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-helno)', color: m.color }}>{m.value}</p>
                      <p className="text-xs text-midnight-blue/50 mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-5">Results</p>
                <ul className="flex flex-col gap-3">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-hotred flex-shrink-0" />
                      <p className="text-xs text-midnight-blue/70 leading-relaxed">{r}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Campaign Window */}
              <div className="border border-hotred/20 rounded-2xl p-6 bg-hotred/5">
                <p className="label-copy text-xs text-hotred/60 uppercase tracking-widest mb-2">Campaign Window</p>
                <p className="text-xl font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Oct – Dec 2022</p>
                <p className="text-xs text-midnight-blue/60 mt-1">3-month peak holiday season blitz</p>
              </div>

              {/* Strategic Roadmap */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-5">Strategic Roadmap</p>
                <div className="flex flex-col gap-4">
                  {[
                    { phase: 'PHASE 01: RESEARCH', desc: 'Deep keyword research, intent mapping &amp; audience analysis.' },
                    { phase: 'PHASE 02: LAUNCH', desc: 'Precision ad launch with YouTube &amp; GIF assets for peak season.' },
                    { phase: 'PHASE 03: OPTIMISE', desc: 'Daily performance tuning, competitive adjustments &amp; reporting.' },
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
            <Link href="/#contact"
              className="inline-flex items-center gap-2 bg-midnight-blue text-beige text-sm font-bold px-7 py-3 rounded-full hover:bg-hotred transition-colors duration-300"
              style={{ fontFamily: 'var(--font-helno)' }}>
              Start Discussion
            </Link>
            <Link href="/#work"
              className="inline-flex items-center gap-2 border border-midnight-blue/20 text-midnight-blue text-sm font-bold px-7 py-3 rounded-full hover:border-midnight-blue transition-colors duration-300"
              style={{ fontFamily: 'var(--font-helno)' }}>
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
