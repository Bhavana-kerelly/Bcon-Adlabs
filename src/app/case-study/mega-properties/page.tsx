'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MegaPropertiesCaseStudy() {
  const challenges = [
    'Despite strong market value and consumer confidence, the brand was unable to raise adequate awareness about its projects online across various parts of India.',
    'The need of the hour was to raise brand recognition and establish a brand identity among the target demographic.',
    'Users couldn\'t locate the website online while searching on numerous browsers — due to a lack of organic search traffic and effective search ranking — resulting in insufficient inquiries and leads.',
  ];

  const results = [
    '175% increase in the number of indexed pages.',
    'Achieved the No. 1 search ranking position among all real estate competitors in the same vicinity/city/region.',
    'Content marketing activities and campaigns generated more than 3.50 million impressions.',
    'Recruited approximately 87,000 new members per quarter from the target market.',
  ];

  const services = [
    { label: 'SEO', pct: 90 },
    { label: 'Backlinking', pct: 75 },
    { label: 'Social Marketing', pct: 80 },
    { label: 'Blogs', pct: 65 },
    { label: 'PPC', pct: 70 },
    { label: 'Website Development', pct: 85 },
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
            <span className="text-midnight-blue">Mega Properties</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h1 className="font-bold text-midnight-blue leading-tight mb-8"
                style={{ fontFamily: 'var(--font-helno)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                360° SEO Strategy for<br />Real Estate Dominance.
              </h1>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Real Estate</p>
                </div>
                <div className="w-px bg-midnight-blue/20" />
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Services</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>SEO &amp; Content Marketing</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/mega.png"
                alt="Mega Properties case study"
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
                  Bcon Adlabs led a digital marketing strategy to outpace competing real estate projects. The goal was to identify underlying problems and boost the brand&apos;s visibility so that Mega Properties would rank at the top of its real estate competitors simultaneously.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed">
                  The focus was primarily on Farm Lands and Woodlands projects. After a thorough audit, we found customers were unable to identify Mega Properties when searching for similar categories online — the previous On-Page SEO techniques employed were not up to the mark.
                </p>
                <blockquote className="border-l-4 border-hotred pl-5 py-1 mt-8">
                  <p className="text-midnight-blue/60 italic text-base leading-relaxed">
                    &quot;The goal was to be a name you can trust — and the search results should reflect that trust.&quot;
                  </p>
                </blockquote>
              </div>

              {/* Challenges */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">02</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Challenges</h2>
                </div>
                <ul className="flex flex-col gap-5">
                  {challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-hotred flex-shrink-0" />
                      <p className="text-midnight-blue/70 text-base leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">03</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Benefits</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {[
                    'Increased revenue with done-for-you marketing.',
                    'Custom marketing strategy backed by data and results.',
                    'Affordable marketing services with no long-term contract.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-hotred flex-shrink-0" />
                      <p className="text-midnight-blue/70 text-base leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-midnight-blue rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-6 right-8 text-white/5 text-[8rem] leading-none font-bold select-none"
                  style={{ fontFamily: 'var(--font-saol)' }}>&ldquo;</div>
                <p className="text-beige/80 text-base md:text-lg leading-relaxed relative z-10 mb-8">
                  &ldquo;Souvenir IT helped us establish our brand where it matters most — on the first page of Google. The results have been beyond our expectations in terms of leads and brand visibility.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-hotred flex items-center justify-center">
                    <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>MP</span>
                  </div>
                  <div>
                    <p className="text-beige text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>Mega Properties Management</p>
                    <p className="text-beige/50 text-xs label-copy tracking-wider">Director, Mega Properties</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="flex flex-col gap-6">

              {/* Digital Marketing Summary */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-6">Digital Marketing Summary</p>
                <div className="flex flex-col gap-4">
                  {services.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-bold text-midnight-blue label-copy tracking-wide">{s.label}</span>
                        <span className="text-xs text-midnight-blue/40">{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-midnight-blue/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-midnight-blue"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
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

              {/* Highlight stat */}
              <div className="border border-hotred/20 rounded-2xl p-6 bg-hotred/5">
                <p className="label-copy text-xs text-hotred/60 uppercase tracking-widest mb-2">Top Achievement</p>
                <p className="text-3xl font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>175%</p>
                <p className="text-xs text-midnight-blue/60 mt-1">Increase in indexed pages</p>
              </div>

              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-2">Impressions Generated</p>
                <p className="text-3xl font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>3.5M+</p>
                <p className="text-xs text-midnight-blue/60 mt-1">Content marketing &amp; campaign reach</p>
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
