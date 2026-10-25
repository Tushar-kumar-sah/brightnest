"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Users, ShieldCheck, Zap } from "lucide-react";
import { StatsTelemetryStrip } from "@/components/ui/StatsTelemetryStrip";

const stats = [
  {
    target: 500,
    suffix: "+",
    decimals: 0,
    label: "Enterprise Deployments",
    subtext: "Across India",
    icon: Users,
  },
  {
    target: 99.9,
    suffix: "%",
    decimals: 1,
    label: "System Uptime SLA",
    subtext: "High-Availability Guarantee",
    icon: Zap,
  },
  {
    target: 10,
    suffix: "+",
    decimals: 0,
    label: "Years of Excellence",
    subtext: "Trusted IT & Security Partner",
    icon: Award,
  },
  {
    target: 24,
    suffix: "/7",
    decimals: 0,
    label: "Rapid Response Desk",
    subtext: "PAN-India Field Dispatch",
    icon: ShieldCheck,
  },
];

const highlights = [
  "OEM-certified engineers across Cisco, Fortinet, HPE, Poly & Bosch",
  "Transparent Bill of Quantities (BOQ) with zero hidden costs",
  "Fluke-certified testing with comprehensive warranty coverage",
  "Single-point-of-contact SLA support for peace of mind",
];

const ambientParticles = [
  { left: 10, top: 80, size: "w-1.5 h-1.5", color: "bg-[#9266fd]", duration: 7, delay: 0 },
  { left: 22, top: 88, size: "w-1 h-1", color: "bg-[#1ec9f2]", duration: 9, delay: 1.5 },
  { left: 36, top: 65, size: "w-2 h-2", color: "bg-[#a855f7]/80", duration: 8, delay: 3 },
  { left: 48, top: 82, size: "w-1.5 h-1.5", color: "bg-[#9266fd]", duration: 11, delay: 2 },
  { left: 64, top: 72, size: "w-1 h-1", color: "bg-[#1ec9f2]", duration: 7.5, delay: 0.5 },
  { left: 78, top: 86, size: "w-2 h-2", color: "bg-[#c084fc]", duration: 9.5, delay: 4 },
  { left: 90, top: 68, size: "w-1 h-1", color: "bg-[#38d7f8]", duration: 8.5, delay: 2.5 },
  { left: 16, top: 42, size: "w-1 h-1", color: "bg-[#9266fd]", duration: 10, delay: 1 },
  { left: 72, top: 38, size: "w-1.5 h-1.5", color: "bg-[#a855f7]", duration: 9, delay: 3.5 },
  { left: 42, top: 32, size: "w-1 h-1", color: "bg-[#1ec9f2]", duration: 8, delay: 5 },
  { left: 84, top: 22, size: "w-1.5 h-1.5", color: "bg-[#c084fc]", duration: 10.5, delay: 1.8 },
  { left: 28, top: 28, size: "w-1 h-1", color: "bg-[#9266fd]", duration: 9.2, delay: 4.2 },
];

export default function AboutTeaser() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#070c1e] text-white overflow-hidden select-none">
      {/* Seamless Top & Bottom Transition Fades */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070c1e] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#070c1e] to-transparent pointer-events-none z-10" />

      {/* Digital Tech Grid Overlay with Soft Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />

      {/* Floating Animated Purple & Cyan Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-br from-[#9266fd]/35 via-[#7c3aed]/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-[#1ec9f2]/25 via-[#6366f1]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, 60, -70, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-1/4 w-[460px] h-[460px] bg-gradient-to-tr from-[#a855f7]/25 via-[#9266fd]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      {/* Ambient Soft Elliptical Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(146,102,253,0.12),transparent)] pointer-events-none -z-0" />

      {/* Drifting Light Particles / Bokeh Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {ambientParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -130, -260],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.4, 0.6],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            className={`absolute ${p.size} rounded-full ${p.color} shadow-[0_0_10px_currentColor]`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual with Ambient Purple Glow & Floating Glass Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Purple/Cyan Glow Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#9266fd]/35 via-[#6366f1]/25 to-[#1ec9f2]/30 rounded-xl blur-2xl -z-10 animate-pulse" />

              {/* Main Image Glass Frame */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/20 bg-white/[0.03] backdrop-blur-xl p-1.5">
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/gcc-enterprise-engineer.jpg"
                    alt="BrightNest enterprise infrastructure engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-[#070c1e]/40 to-transparent opacity-85" />

                  {/* Floating Glass Philosophy Card */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-5 rounded-lg bg-[#070c1e]/75 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(146,102,253,0.1)]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                      <p className="text-[10px] sm:text-[11px] font-bold text-white/80 uppercase tracking-wider">
                        Our Core Philosophy
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-white/95 leading-relaxed">
                      &ldquo;Actions beyond the hardware — engineering technology that works effortlessly every single day.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 order-1 lg:order-2">
            {/* Badge: Frosted Glass */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Who We Are</span>
            </div>

            {/* Headline: Slim Lato Typography */}
            <h2
              style={{ fontWeight: 300 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-[1.2]"
            >
              The Experts Behind Your Digital & Physical Infrastructure
            </h2>

            {/* Narrative text with high-contrast, relaxed reading */}
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              We help growing businesses and large enterprises thrive through the power of engineered technology. Whether scaling an office network, deploying AI-driven CCTV surveillance, or integrating hybrid boardrooms, our certified team handles every detail from technical design to ongoing 24/7 managed support.
            </p>

            {/* Bullet Highlights: Frosted Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] backdrop-blur-md transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <div className="p-1 rounded-md bg-white/[0.06] text-white border border-white/15 flex-shrink-0 mt-0.5 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-white leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Purple-to-Cyan Pill + Glass Button */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#9266fd] via-[#6366f1] to-[#1ec9f2] hover:from-[#a78bfa] hover:to-[#38d7f8] shadow-[0_4px_25px_rgba(146,102,253,0.45)] hover:shadow-[0_4px_35px_rgba(146,102,253,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group text-center"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-[#9266fd]/50 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center"
              >
                <span>Schedule a Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stats Metrics Bar: Open-Air Executive Telemetry Strip (No Boxed Cards) */}
        <StatsTelemetryStrip stats={stats} className="mt-20" />
      </div>
    </section>
  );
}
