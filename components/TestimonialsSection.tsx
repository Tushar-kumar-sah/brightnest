"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { getHeroData } from "@/lib/data";
import { motion } from "framer-motion";

const ambientParticles = [
  { left: 8, top: 75, size: "w-1.5 h-1.5", color: "bg-[#22d3ee]", duration: 7, delay: 0 },
  { left: 20, top: 85, size: "w-1 h-1", color: "bg-[#67e8f9]", duration: 9, delay: 1.5 },
  { left: 34, top: 60, size: "w-2 h-2", color: "bg-[#0284c7]/80", duration: 8, delay: 3 },
  { left: 48, top: 80, size: "w-1.5 h-1.5", color: "bg-[#22d3ee]", duration: 11, delay: 2 },
  { left: 62, top: 70, size: "w-1 h-1", color: "bg-[#38bdf8]", duration: 7.5, delay: 0.5 },
  { left: 76, top: 84, size: "w-2 h-2", color: "bg-[#67e8f9]", duration: 9.5, delay: 4 },
  { left: 90, top: 65, size: "w-1 h-1", color: "bg-[#22d3ee]", duration: 8.5, delay: 2.5 },
  { left: 14, top: 38, size: "w-1 h-1", color: "bg-[#0ea5e9]", duration: 10, delay: 1 },
  { left: 70, top: 32, size: "w-1.5 h-1.5", color: "bg-[#0284c7]", duration: 9, delay: 3.5 },
  { left: 40, top: 28, size: "w-1 h-1", color: "bg-[#67e8f9]", duration: 8, delay: 5 },
  { left: 84, top: 20, size: "w-1.5 h-1.5", color: "bg-[#22d3ee]", duration: 10.5, delay: 1.8 },
  { left: 26, top: 24, size: "w-1 h-1", color: "bg-[#38bdf8]", duration: 9.2, delay: 4.2 },
];

export default function TestimonialsSection() {
  const { testimonials } = getHeroData();

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#050c1e] via-[#091b3e] to-[#040816] text-white border-b border-white/10 overflow-hidden select-none">
      {/* Animated Top Border Specular Streak in Arctic Ice Cyan */}
      <motion.div
        animate={{ x: ["-100%", "250%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent pointer-events-none z-20"
      />

      {/* Deep Cobalt & Electric Ice-Cyan Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#0284c7]/35 via-[#22d3ee]/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#1d4ed8]/30 via-[#06b6d4]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0369a1]/25 via-[#0284c7]/25 to-[#22d3ee]/20 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(34,211,238,0.2),transparent)] pointer-events-none -z-0" />

      {/* Floating Bokeh Particles */}
      {ambientParticles.map((pt, i) => (
        <motion.div
          key={`p-${i}`}
          style={{ left: `${pt.left}%`, top: `${pt.top}%` }}
          animate={{
            y: [0, -70, -140],
            opacity: [0, 0.75, 0],
            scale: [0.7, 1.25, 0.6],
          }}
          transition={{
            duration: pt.duration,
            repeat: Infinity,
            delay: pt.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full pointer-events-none ${pt.size} ${pt.color} blur-[0.5px] shadow-[0_0_8px_#22d3ee]`}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#22d3ee]/40 text-[#67e8f9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span>Customer Endorsements</span>
          </div>
          <h2
            style={{ fontWeight: 300 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#38bdf8] bg-clip-text text-transparent font-medium">
              Technology Leaders
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            What IT leaders and infrastructure heads say about our turnkey deployment and proactive SLA support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#22d3ee]/60 hover:bg-white/[0.08] hover:shadow-[0_25px_60px_rgba(34,211,238,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Ambient Flare */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#22d3ee]/15 to-transparent blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div>
                {/* 5 Golden Amber Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#22d3ee]/40 group-hover:text-[#22d3ee]/80 transition-colors mb-3" />

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-light group-hover:text-white transition-colors">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 mt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#22d3ee]/60 flex-shrink-0 bg-slate-800 shadow-[0_0_12px_rgba(34,211,238,0.35)] group-hover:border-[#22d3ee] transition-colors">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#67e8f9] transition-colors">{t.name}</div>
                  <div className="text-xs text-slate-400 font-light">{t.title}</div>
                  <div className="text-[11px] font-semibold text-[#22d3ee] tracking-wide mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
