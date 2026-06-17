'use test';
'use client';

export default function Recognitions() {
  // PLACEHOLDER AWARD IMAGES — replace with Bcon Adlabs' actual award/badge graphics
  const awards = [
    {
      image: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/6718d340f7c692ea0f4fed33_clutch-17seven.png",
      label: "3+ YEARS OF DIGITAL MARKETING EXPERTISE"
    },
    {
      image: "https://cdn.prod.website-files.com/63e07929e9775354b962403e/6718d3400db273e2e9cf534f_design-awards.png",
      label: "20+ BRANDS GROWN ACROSS INDUSTRIES"
    }
  ];

  return (
    <section className="relative background-color-beige py-20 z-20 border-b border-midnight-blue/5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-[240px] group">
            <div className="h-28 flex items-center justify-center mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <img
                src={award.image}
                alt={award.label}
                className="max-h-full object-contain"
              />
            </div>
            <p className="label-copy text-[0.65rem] text-midnight-blue/60 leading-normal tracking-[0.15rem]">
              {award.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}