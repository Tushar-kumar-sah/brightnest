"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { getCaseStudiesData } from "@/lib/data";
import { motion } from "framer-motion";

const ambientParticles = [
  { left: 10, top: 80, size: "w-1.5 h-1.5", color: "bg-[#1ec9f2]", duration: 7, delay: 0 },
  { left: 22, top: 88, size: "w-1 h-1", color: "bg-[#38bdf8]", duration: 9, delay: 1.5 },
  { left: 36, top: 65, size: "w-2 h-2", color: "bg-[#0067b8]/80", duration: 8, delay: 3 },
  { left: 48, top: 82, size: "w-1.5 h-1.5", color: "bg-[#1ec9f2]", duration: 11, delay: 2 },
  { left: 64, top: 72, size: "w-1 h-1", color: "bg-[#38bdf8]", duration: 7.5, delay: 0.5 },
  { left: 78, top: 86, size: "w-2 h-2", color: "bg-[#60a5fa]", duration: 9.5, delay: 4 },
  { left: 90, top: 68, size: "w-1 h-1", color: "bg-[#38d7f8]", duration: 8.5, delay: 2.5 },
  { left: 16, top: 42, size: "w-1 h-1", color: "bg-[#1ec9f2]", duration: 10, delay: 1 },
  { left: 72, top: 38, size: "w-1.5 h-1.5", color: "bg-[#0067b8]", duration: 9, delay: 3.5 },
  { left: 42, top: 32, size: "w-1 h-1", color: "bg-[#38bdf8]", duration: 8, delay: 5 },
  { left: 84, top: 22, size: "w-1.5 h-1.5", color: "bg-[#60a5fa]", duration: 10.5, delay: 1.8 },
  { left: 28, top: 28, size: "w-1 h-1", color: "bg-[#1ec9f2]", duration: 9.2, delay: 4.2 },
];

export default function CaseStudiesSection() {
  const caseStudies = getCaseStudiesData().slice(0, 3);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#070c1e] via-[#0a1636] to-[#070c1e] text-white border-b border-white/10 overflow-hidden select-none">
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
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#0067b8]/35 via-[#1ec9f2]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#2563eb]/30 via-[#0284c7]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0369a1]/25 via-[#0067b8]/30 to-[#1ec9f2]/20 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(30,201,242,0.18),transparent)] pointer-events-none -z-0" />

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
          className={`absolute rounded-full pointer-events-none ${pt.size} ${pt.color} blur-[0.5px] shadow-[0_0_8px_#1ec9f2]`}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#1ec9f2]/40 text-[#38d7f8] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(30,201,242,0.25)] backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse shadow-[0_0_8px_#1ec9f2]" />
              <span>Customer Success Stories</span>
            </div>
            <h2
              style={{ fontWeight: 300 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight"
            >
              Proven Deployments &{" "}
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#1ec9f2] to-[#60a5fa] bg-clip-text text-transparent font-medium">
                Real Results
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              See how our engineered networking, security, and AV solutions enable enterprises to operate with speed, safety, and confidence.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white bg-white/[0.06] border border-[#1ec9f2]/40 hover:bg-white/[0.12] hover:border-[#1ec9f2] shadow-[0_0_20px_rgba(30,201,242,0.2)] transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#38d7f8]" />
          </Link>
        </div>

        {/* 3 Featured Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group rounded-3xl overflow-hidden bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#1ec9f2]/60 hover:shadow-[0_25px_60px_rgba(30,201,242,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Category Pill */}
              <div className="relative h-56 w-full overflow-hidden bg-[#070c1e]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-[#070c1e]/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070c1e]/85 backdrop-blur-xl text-xs font-semibold text-[#38d7f8] border border-[#1ec9f2]/40 shadow-sm">
                  {study.category}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-medium text-slate-300 flex items-center gap-1.5 bg-[#070c1e]/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
                  Client: {study.client}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#38d7f8] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                    {study.description}
                  </p>
                </div>

                {/* Key Outcome Highlights */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#38d7f8] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#38d7f8]" />
                    <span>Delivered Outcomes</span>
                  </div>
                  {study.results.slice(0, 2).map((res) => (
                    <div key={res} className="flex items-start gap-2 text-xs text-slate-200 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#1ec9f2] flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38d7f8] hover:text-white transition-colors group-hover:translate-x-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
