'use client';

export default function LegacySection() {
  return (
    <section className="relative bg-[#eeebe8] py-32 overflow-hidden">
      {/* Corner Borders */}
      <div className="absolute top-24 left-6 w-8 h-8 border-l border-t border-black" />
      <div className="absolute top-24 right-6 w-8 h-8 border-r border-t border-black" />
      <div className="absolute bottom-24 left-6 w-8 h-8 border-l border-b border-black" />
      <div className="absolute bottom-24 right-6 w-8 h-8 border-r border-b border-black" />

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h2 className="font-black text-black leading-none">
            <span className="block text-[180px] md:text-[220px] tracking-[-0.08em]">
              9+ Years
            </span>

            <span className="block text-[70px] md:text-[85px] font-medium tracking-[-0.05em] -mt-4">
              Of Legacy
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[980px] mt-10 text-[28px] md:text-[34px] leading-[1.45] text-[#222] font-light">
            We are an independent creative powerhouse with a mighty
            design skill & strategic depth. We build brands with purpose.
            Shape them with strategy. And make them unforgettable.
          </p>

          {/* CTA */}
          <button className="mt-14 bg-black text-white px-16 py-7 rounded-full text-[28px] font-medium transition-all duration-300 hover:scale-105">
            Let's Build Your Legacy
          </button>
        </div>
      </div>

      {/* Scroll Top Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12L12 5L19 12" />
        </svg>
      </button>
    </section>
  );
}