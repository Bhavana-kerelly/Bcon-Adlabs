'use test';
'use client';

export default function Testimonials() {
  // Real testimonials/quotes sourced from the Bcon Adlabs client case study deck
  const testimonials = [
    {
      logo: "",
      text: "I trust Bcon Adlabs to do their work like my patients trust me to do mine. We are seeing a lot of new patients!",
      photo: "",
      name: "Babu Reddy",
      role: "Founder, Diet Experts Solutions"
    },
    {
      logo: "",
      text: "Bcon Adlabs successfully came in to restructure our website, develop a strategy that included on and off-page optimization, and drive top search results.",
      photo: "",
      name: "V Sign Enterprises",
      role: "Signage & Manufacturing client"
    },
    {
      logo: "",
      text: "For over 3 years, we've been developing new technology to grow your brand faster and better — playing a crucial role in planning and implementing your digital marketing strategy.",
      photo: "",
      name: "Bcon Adlabs",
      role: "Client engagement philosophy"
    }
  ];

  return (
    <section className="relative background-color-beige py-24 md:py-36 z-20 border-b border-midnight-blue/5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side title block */}
        <div className="lg:col-span-4 flex flex-col items-start justify-start lg:sticky lg:top-32 h-fit">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-hotred" />
            <p className="label-copy text-sm text-midnight-blue/60 uppercase">TESTIMONIALS</p>
          </div>
          <h2 className="heading-style-italiclg text-midnight-blue italic font-light leading-none">
            The
          </h2>
          <h3 className="heading-style-h2 text-midnight-blue font-bold tracking-tight">
            Results &amp; Impacts<span className="text-hotred">.</span>
          </h3>
        </div>

        {/* Right Side video + grid block */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Video testimonial placeholder — add a client video embed here if available */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-midnight-blue flex items-center justify-center">
            <p className="text-beige/50 text-sm uppercase tracking-wide label-copy">
              Client video testimonial — add embed here
            </p>
          </div>

          {/* Testimonial Quote list */}
          <div className="flex flex-col gap-8">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-xl flex flex-col gap-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20"
              >
                {/* Logo wrapper */}
                {testi.logo && (
                  <div className="h-10 flex items-center justify-start opacity-70">
                    <img
                      src={testi.logo}
                      alt=""
                      className="max-h-full max-w-[150px] object-contain"
                    />
                  </div>
                )}

                {/* Quote */}
                <p className="text-lg text-midnight-blue leading-relaxed font-normal italic">
                  &ldquo;{testi.text}&rdquo;
                </p>

                {/* Client Profile details */}
                <div className="flex items-center gap-4 pt-4 border-t border-midnight-blue/5">
                  {testi.photo && (
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-inner">
                      <img
                        src={testi.photo}
                        alt={testi.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h6 className="font-helno font-bold text-base text-midnight-blue">
                      {testi.name}
                    </h6>
                    <p className="text-sm text-midnight-blue/60">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}