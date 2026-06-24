import AllBlogs from '@/components/AllBlogs';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Case Studies | Souvenir IT',
  description: 'Explore all our case studies and success stories across various industries including healthcare, real estate, education, and more.',
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32">
        {/* Page Hero/Intro Section */}
        <section className="bg-gradient-to-b from-midnight-blue/5 to-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-midnight-blue font-bold mb-6">
                Case Studies & Success Stories
              </h1>
              <p className="text-lg text-midnight-blue/70 leading-relaxed">
                Discover how Souvenir IT has transformed businesses across multiple industries. 
                From healthcare to real estate, education to manufacturing, our strategic digital 
                marketing solutions have delivered measurable results and sustained growth.
              </p>
            </div>
          </div>
        </section>

        {/* All Blogs Grid */}
        <AllBlogs />

        {/* CTA Section */}
        <section className="bg-midnight-blue py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
            <h2 className="text-2xl md:text-3xl text-white mb-6 font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let our proven strategies and expertise help your business reach new heights.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-hotred text-white font-bold px-8 py-4 rounded-lg hover:bg-hotred/90 transition-colors duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}