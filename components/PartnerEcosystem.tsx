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
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#070c1e] via-[#0b1a3a] to-[#070c1e] text-white border-b border-white/10 overflow-hidden select-none">
      {/* Animated Top Border Specular Streak */}
      <motion.div
        animate={{ x: ["-100%", "250%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#1ec9f2] to-transparent pointer-events-none z-20"
      />

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(30,201,242,0.18),transparent)] pointer-events-none -z-0" />

      {/* Content Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#1ec9f2]/40 text-[#38d7f8] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(30,201,242,0.25)] backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse shadow-[0_0_8px_#1ec9f2]" />
          <span>Our Partner Ecosystem</span>
        </div>
        <h2
          style={{ fontWeight: 300 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight"
        >
          Powered by{" "}
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#1ec9f2] to-[#60a5fa] bg-clip-text text-transparent font-medium">
            Global Technology Leaders
          </span>
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Delivering genuine enterprise-grade hardware, tier-1 vendor warranties, and factory-trained certified deployment.
        </p>
      </div>

      {/* Infinite scrolling marquee rows */}
      <div className="relative z-10 space-y-4">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden">
          {/* Side Fading Masks for deep blue background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />

          <div className="flex items-center gap-6 min-w-max animate-[scrollHorizontal_28s_linear_infinite] hover:[animation-play-state:paused]">
            {row1.map((p, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#1ec9f2]/60 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_rgba(30,201,242,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="relative h-10 w-24 sm:w-28 flex-shrink-0 bg-white/95 rounded-xl p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="120px"
                  />
                </div>
                <div className="border-l border-white/15 pl-3">
                  <div className="text-xs font-semibold text-white group-hover:text-[#38d7f8] transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-slate-300/80 font-normal mt-0.5">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#070c1e] via-[#070c1e]/85 to-transparent z-10" />

          <div className="flex items-center gap-6 min-w-max animate-[scrollHorizontal_32s_linear_infinite_reverse] hover:[animation-play-state:paused]">
            {row2.map((p, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#1ec9f2]/60 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_rgba(30,201,242,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="relative h-10 w-24 sm:w-28 flex-shrink-0 bg-white/95 rounded-xl p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="120px"
                  />
                </div>
                <div className="border-l border-white/15 pl-3">
                  <div className="text-xs font-semibold text-white group-hover:text-[#38d7f8] transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-slate-300/80 font-normal mt-0.5">
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
