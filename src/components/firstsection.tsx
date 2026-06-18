'use client';

export default function FirstSection() {
  return (
    <section className="bg-[#f3f2f0] min-h-screen flex items-center">
      <div className="w-full px-24">
        <div className="flex items-end justify-between">

          {/* VIDEO */}
          <div className="w-[730px] h-[440px] rounded-[24px] overflow-hidden flex-shrink-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/mark-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* TEXT */}
          <div className="ml-20 mb-4 max-w-[500px]">
            <h2 className="text-[34px] leading-[1.45] font-light text-[#666]">
              Welcome to MARK.
              <br />
              Where every brand gets its own
              <br />
              blueprint — and its own fingerprint.
            </h2>
          </div>

          {/* BUTTON */}
          <div className="mb-2">
            <button className="bg-black text-white px-14 py-7 rounded-full text-[24px] font-medium">
              Get In Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}