"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  category: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Cisco", category: "Enterprise Networking", logo: "/company/1.png" },
  { name: "Hikvision", category: "AI Video Surveillance", logo: "/company/2.png" },
  { name: "Honeywell", category: "Building Automation & Security", logo: "/company/3.png" },
  { name: "Fortinet", category: "Cybersecurity & Firewalls", logo: "/company/4.png" },
  { name: "Hewlett Packard Enterprise", category: "Enterprise Hardware & Servers", logo: "/company/5.png" },
  { name: "Poly", category: "AV & Unified Communications", logo: "/company/6.png" },
  { name: "Bosch", category: "Security & Sound Systems", logo: "/company/7.png" },
  { name: "CommScope", category: "Structured Cabling", logo: "/company/8.png" },
];

export default function PartnerEcosystem() {
  const row1 = [...partners, ...partners];
  const row2 = [...partners.slice(4), ...partners.slice(0, 4), ...partners.slice(4), ...partners.slice(0, 4)];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#070c1e] via-[#081530] to-[#070c1e] text-white overflow-hidden select-none">
      {/* Seamless Top & Bottom Transition Fades */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070c1e] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#070c1e] to-transparent pointer-events-none z-10" />

      {/* Deep Blue & Cyan Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#0067b8]/35 via-[#1ec9f2]/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#2563eb]/30 via-[#0284c7]/25 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0369a1]/25 via-[#0067b8]/30 to-[#1ec9f2]/20 rounded-full blur-[150px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(30,201,242,0.10),transparent)] pointer-events-none -z-0" />

      {/* Content Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
          <span>Our Partner Ecosystem</span>
        </div>
        <h2
          style={{ fontWeight: 300 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight"
        >
          Powered by Global Technology Leaders
        </h2>
        <p className="mt-2.5 sm:mt-3 text-white text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Delivering genuine enterprise-grade hardware, tier-1 vendor warranties, and factory-trained certified deployment.
        </p>
      </div>

      {/* Infinite scrolling marquee rows */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden">
          {/* Side Fading Masks for deep blue background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />

          <div className="flex items-center gap-3.5 sm:gap-6 min-w-max animate-[scrollHorizontal_70s_linear_infinite] hover:[animation-play-state:paused]">
            {row1.map((p, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#1ec9f2]/60 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_rgba(30,201,242,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="relative h-10 sm:h-12 w-28 sm:w-36 flex-shrink-0 bg-white rounded-lg px-2.5 sm:px-3 py-1 flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <div className="border-l border-white/15 pl-3 sm:pl-4">
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-white transition-colors whitespace-nowrap">
                    {p.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5 whitespace-nowrap">
                    {p.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          {/* Side Fading Masks for deep blue background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />

          <div className="flex items-center gap-3.5 sm:gap-6 min-w-max animate-[scrollHorizontal_78s_linear_infinite_reverse] hover:[animation-play-state:paused]">
            {row2.map((p, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#1ec9f2]/60 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_rgba(30,201,242,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="relative h-10 sm:h-12 w-28 sm:w-36 flex-shrink-0 bg-white rounded-lg px-2.5 sm:px-3 py-1 flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <div className="border-l border-white/15 pl-3 sm:pl-4">
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-white transition-colors whitespace-nowrap">
                    {p.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5 whitespace-nowrap">
                    {p.category}
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
