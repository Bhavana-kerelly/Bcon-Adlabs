'use test';
'use client';

export default function ClientLogos() {
  const row1 = ["V Sign Enterprises", "VDerma Clinics", "Sadhu Physiotherapy", "Sport and Nix", "MK Enterprises"];
  const row2 = ["Dravin Holidays", "Mega Properties", "Abhijeeth Infra", "CLR Academy", "Graviity Junior College"];
  const row3 = ["Rigved Lighting", "Volteum Services", "Nyra Skin & Hair", "Diet Experts", "Magnifiq Properties"];
  const row4 = ["New Master Minds", "Sree Navodaya Akademy", "Hotel M Grand", "MK Precast Wooorld"];

  // Helper to double items for seamless marquee loop
  const duplicate = (arr: string[]) => [...arr, ...arr, ...arr];

  return (
    <section className="relative background-color-beige py-24 z-20 overflow-hidden border-b border-midnight-blue/5">
      
      {/* Inject local style sheet for the keyframe marquee animations */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-12">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-hotred" />
          <h2 className="heading-style-h5 uppercase tracking-wide text-midnight-blue">
            Collaborations &amp; Clients
          </h2>
        </div>
      </div>

      {/* Marquee Container Block */}
      <div className="flex flex-col gap-6 md:gap-8 w-full select-none">
        
        {/* Row 1 (Left scrolling) */}
        <div className="w-full overflow-hidden flex">
          <div className="marquee-track-left gap-8 md:gap-12">
            {duplicate(row1).map((item, idx) => (
              <div
                key={idx}
                className={`text-6xl md:text-8xl font-helno font-bold tracking-tighter px-8 py-3 rounded-xl ${
                  idx % 2 === 0
                    ? 'text-midnight-blue bg-white/35 border border-white/20'
                    : 'text-beige bg-midnight-blue'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Right scrolling) */}
        <div className="w-full overflow-hidden flex">
          <div className="marquee-track-right gap-8 md:gap-12">
            {duplicate(row2).map((item, idx) => (
              <div
                key={idx}
                className={`text-6xl md:text-8xl font-helno font-bold tracking-tighter px-8 py-3 rounded-xl ${
                  idx % 2 !== 0
                    ? 'text-midnight-blue bg-white/35 border border-white/20'
                    : 'text-beige bg-midnight-blue'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 (Left scrolling) */}
        <div className="w-full overflow-hidden flex">
          <div className="marquee-track-left gap-8 md:gap-12">
            {duplicate(row3).map((item, idx) => (
              <div
                key={idx}
                className={`text-6xl md:text-8xl font-helno font-bold tracking-tighter px-8 py-3 rounded-xl ${
                  idx % 2 === 0
                    ? 'text-midnight-blue bg-white/35 border border-white/20'
                    : 'text-beige bg-midnight-blue'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 (Right scrolling) */}
        <div className="w-full overflow-hidden flex">
          <div className="marquee-track-right gap-8 md:gap-12">
            {duplicate(row4).map((item, idx) => (
              <div
                key={idx}
                className={`text-6xl md:text-8xl font-helno font-bold tracking-tighter px-8 py-3 rounded-xl ${
                  idx % 2 !== 0
                    ? 'text-midnight-blue bg-white/35 border border-white/20'
                    : 'text-beige bg-midnight-blue'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}