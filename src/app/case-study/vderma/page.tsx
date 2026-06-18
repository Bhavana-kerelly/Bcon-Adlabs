'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VDermaCaseStudy() {
  const results = [
    '94% increase in customer leads through phone calls and website forms in the first 6 months.',
    '4,000+ leads generated in 2022 with an average of 880 customer leads per month.',
    '52.97% lower costs on Ad Budget.',
    'VDerma Skin and Hair Clinic is positioned in the 2nd place on Google Maps.',
  ];

  const benefits = [
    'Increased revenue with done-for-you marketing.',
    'Custom marketing strategy backed by data and results.',
    'Affordable marketing services with no long-term contract.',
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
            <span className="text-midnight-blue">VDerma Skin &amp; Hair Clinics</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h1 className="font-bold text-midnight-blue leading-tight mb-8"
                style={{ fontFamily: 'var(--font-helno)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Fuelling Growth Through<br />Full-Funnel Ad Strategy.
              </h1>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Healthcare</p>
                </div>
                <div className="w-px bg-midnight-blue/20" />
                <div>
                  <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-1">Services</p>
                  <p className="text-sm font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>Google, Social &amp; Paid Ads</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Vderma.png"
                alt="VDerma Skin and Hair Clinics case study"
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

              {/* Challenges */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">01</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Challenges</h2>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-4">
                  VDerma Skin and Hair Clinics has a global presence in Hyderabad. Their vision is to provide the most advanced and highest quality clinical, invasive and cosmetic dermatology services.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed">
                  Their clinics are equipped with cutting-edge Lasers and energy-based medical devices for multiple applications and treatments. The scientific team consists of highly experienced, rigorously trained and certified medical and nursing personnel that ensure a safe, successful and satisfying outcome.
                </p>
              </div>

              {/* Solutions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">02</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Solutions</h2>
                </div>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-6">
                  Bcon Adlabs used specific objective-oriented ad campaigns to fuel their marketing funnel. We ran a page-like ad campaign that drove Facebook page likes for less than a quarter per like. We also used the post engagement campaign to boost their posts and get over 300,000 engagements.
                </p>
                <p className="text-midnight-blue/70 text-base leading-relaxed mb-10">
                  Finally, we ran a conversion campaign to acquire over 1,700 leads. Campaign objective selection is critical because each objective is optimised by goal — and that difference drives the numbers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { icon: '⚡', title: 'Page-Like Campaigns', desc: 'Facebook page likes at &lt; ₹1/like via highly targeted audience sets.' },
                    { icon: '📣', title: 'Post Engagement', desc: '300,000+ engagements driving organic reach and brand recall.' },
                    { icon: '🎯', title: 'Conversion Campaigns', desc: '1,700+ leads acquired through conversion-optimised funnels.' },
                  ].map((c, i) => (
                    <div key={i} className="border border-midnight-blue/10 rounded-xl p-5 bg-white/40 hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl mb-3">{c.icon}</div>
                      <h3 className="font-bold text-midnight-blue text-sm mb-2" style={{ fontFamily: 'var(--font-helno)' }}>{c.title}</h3>
                      <p className="text-midnight-blue/60 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-midnight-blue/30 label-copy tracking-widest">03</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-helno)' }}>Benefits</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {benefits.map((item, i) => (
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
                  &ldquo;We manage all aspects of your Digital Marketing campaigns — Google, social and all paid ads — to get you leads and customers. Done-for-you marketing that delivers real results.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-hotred flex items-center justify-center">
                    <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>VD</span>
                  </div>
                  <div>
                    <p className="text-beige text-sm font-bold" style={{ fontFamily: 'var(--font-helno)' }}>VDerma Management</p>
                    <p className="text-beige/50 text-xs label-copy tracking-wider">Director, VDerma Skin &amp; Hair Clinics</p>
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
                    { label: 'Lead Increase', value: '94%', sub: 'In first 6 months', color: '#f64242' },
                    { label: 'Cost Reduction', value: '52.97%', sub: 'Lower Ad Budget Costs', color: '#186e7a' },
                    { label: 'Leads Generated', value: '4,000+', sub: 'In 2022 alone', color: '#1d283b' },
                    { label: 'Avg. Monthly Leads', value: '880', sub: 'Per month average', color: '#1d283b' },
                  ].map((m, i) => (
                    <div key={i} className="p-4 rounded-xl border border-midnight-blue/5 bg-midnight-blue/3">
                      <p className="text-xs text-midnight-blue/40 label-copy uppercase tracking-wide mb-1">{m.label}</p>
                      <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-helno)', color: m.color }}>{m.value}</p>
                      <p className="text-xs text-midnight-blue/50 mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps Achievement */}
              <div className="border border-midnight-blue/10 rounded-2xl p-6 bg-white/50">
                <p className="label-copy text-xs text-midnight-blue/40 uppercase tracking-widest mb-5">Google Maps Ranking</p>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📍</span>
                  <p className="text-lg font-bold text-midnight-blue" style={{ fontFamily: 'var(--font-helno)' }}>2nd Position</p>
                </div>
                <p className="text-xs text-midnight-blue/50 leading-relaxed">VDerma is now ranked 2nd on Google Maps for dermatology in Hyderabad.</p>
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
