"use client";

import Image from "next/image";

interface Partner {
  name: string;
  category: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Cisco", category: "Enterprise Networking", logo: "/company/1.png" },
  { name: "Hikvision", category: "AI Video Surveillance", logo: "/company/2.png" },
  { name: "Aruba Networks", category: "Wi-Fi & Switching", logo: "/company/3.png" },
  { name: "Poly", category: "AV & Unified Comm", logo: "/company/4.png" },
  { name: "Dell Technologies", category: "Servers & Storage", logo: "/company/5.png" },
  { name: "Hewlett Packard", category: "Enterprise Hardware", logo: "/company/6.png" },
  { name: "CommScope", category: "Structured Cabling", logo: "/company/7.png" },
  { name: "Honeywell", category: "Access & Automation", logo: "/company/8.png" },
  { name: "Matrix Comsec", category: "Telecom & Biometrics", logo: "/company/9.png" },
];

export default function PartnerEcosystem() {
  const row1 = [...partners, ...partners];
  const row2 = [...partners.slice(4), ...partners.slice(0, 4), ...partners.slice(4), ...partners.slice(0, 4)];

  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0067b8] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <span>Our Partner Ecosystem</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b132b] tracking-tight">
          Powered by Global Technology Leaders
        </h2>
        <p className="mt-2 text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
          Delivering genuine enterprise-grade hardware, tier-1 vendor warranties, and factory-trained certified deployment.
        </p>
      </div>

      {/* Infinite scrolling marquee rows */}
      <div className="space-y-4">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          <div
            className="flex items-center gap-6 min-w-max animate-[scrollHorizontal_28s_linear_infinite] hover:[animation-play-state:paused]"
          >
            {row1.map((p, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1ec9f2] hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-9 w-24 sm:w-28 flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    sizes="120px"
                  />
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <div className="text-xs font-bold text-[#0b132b]">{p.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{p.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          <div
            className="flex items-center gap-6 min-w-max animate-[scrollHorizontal_32s_linear_infinite_reverse] hover:[animation-play-state:paused]"
          >
            {row2.map((p, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1ec9f2] hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-9 w-24 sm:w-28 flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    sizes="120px"
                  />
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <div className="text-xs font-bold text-[#0b132b]">{p.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{p.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
