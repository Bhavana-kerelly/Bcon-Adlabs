import Link from 'next/link';
import { blogsCaseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return blogsCaseStudies.map((cs) => ({
    slug: cs.link.replace('/blogs/', ''),
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  // Find the case study by slug
  const caseStudy = blogsCaseStudies.find(cs => 
    cs.link === `/blogs/${slug}`
  );

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white pt-32">
      {/* Back Navigation */}
      <div className="bg-midnight-blue/5">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 md:py-10">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-midnight-blue hover:text-hotred transition-colors text-sm font-semibold"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-midnight-blue/5 to-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-block bg-hotred/10 text-hotred px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {caseStudy.tag}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight-blue mb-4">
                  {caseStudy.title}
                </h1>
              </div>
              <p className="text-lg text-midnight-blue/70 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {caseStudy.results && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-midnight-blue mb-2">
                Key Results
              </h2>
              <div className="w-12 h-1 bg-hotred rounded" />
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(caseStudy.results).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gradient-to-br from-midnight-blue/5 to-hotred/5 p-6 rounded-lg border border-hotred/10 hover:border-hotred/30 transition-colors"
                >
                  <h3 className="text-sm font-bold text-hotred uppercase mb-3 tracking-wide">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-midnight-blue font-semibold text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-midnight-blue/5">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-midnight-blue mb-2">
              Our Approach
            </h2>
            <div className="w-12 h-1 bg-hotred rounded" />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-midnight-blue mb-4">
                  Digital Marketing Strategy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">✓</span>
                    <span className="text-midnight-blue/70">SEO Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">✓</span>
                    <span className="text-midnight-blue/70">Content Marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">✓</span>
                    <span className="text-midnight-blue/70">Social Media Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">✓</span>
                    <span className="text-midnight-blue/70">Paid Advertising</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-midnight-blue mb-4">
                  Why Souvenir IT?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">★</span>
                    <span className="text-midnight-blue/70">Data-driven strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">★</span>
                    <span className="text-midnight-blue/70">Proven track record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">★</span>
                    <span className="text-midnight-blue/70">Dedicated support team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-hotred font-bold mt-1">★</span>
                    <span className="text-midnight-blue/70">Continuous optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-midnight-blue to-midnight-blue/80">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us create a custom digital marketing strategy that works for you.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-hotred text-white font-bold px-8 py-4 rounded-lg hover:bg-hotred/90 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight-blue mb-12 text-center">
            Explore More Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsCaseStudies
              .filter(cs => cs.id !== caseStudy.id)
              .slice(0, 3)
              .map((study) => (
                <Link
                  key={study.id}
                  href={study.link}
                  className="group flex flex-col gap-3 cursor-pointer"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-midnight-blue group-hover:text-hotred transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <span className="text-xs font-bold bg-hotred/10 text-hotred px-2 py-1 rounded-full w-fit">
                    {study.tag}
                  </span>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-block border-2 border-hotred text-hotred font-bold px-8 py-3 rounded-lg hover:bg-hotred hover:text-white transition-colors duration-300"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

