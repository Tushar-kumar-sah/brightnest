"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  PenTool,
  FileText,
  Wrench,
  CheckCircle,
  Headphones,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Understanding your requirements, goals, and operational challenges through detailed discussions.",
  },
  {
    icon: MapPin,
    title: "Site Survey",
    description:
      "On-ground infrastructure assessment, measurements, and technical audit of your premises.",
  },
  {
    icon: PenTool,
    title: "Solution Design",
    description:
      "Custom IT and security architecture planning tailored to your specific environment.",
  },
  {
    icon: FileText,
    title: "BOQ & Proposal",
    description:
      "Detailed Bill of Quantities with transparent itemization and competitive pricing.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Professional deployment of hardware, cabling, and systems with minimal disruption.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Commissioning",
    description:
      "Rigorous quality assurance, safety verification, and SLA compliance testing.",
  },
  {
    icon: Headphones,
    title: "Handover & Support",
    description:
      "Comprehensive documentation, training, and ongoing 24/7 managed support.",
  },
];

const ambientParticles = [
  { left: 8, top: 75, size: "w-1.5 h-1.5", color: "bg-[#c084fc]", duration: 7, delay: 0 },
  { left: 20, top: 85, size: "w-1 h-1", color: "bg-[#e879f9]", duration: 9, delay: 1.5 },
  { left: 34, top: 60, size: "w-2 h-2", color: "bg-[#a855f7]/80", duration: 8, delay: 3 },
  { left: 48, top: 80, size: "w-1.5 h-1.5", color: "bg-[#9266fd]", duration: 11, delay: 2 },
  { left: 62, top: 70, size: "w-1 h-1", color: "bg-[#e879f9]", duration: 7.5, delay: 0.5 },
  { left: 76, top: 84, size: "w-2 h-2", color: "bg-[#c084fc]", duration: 9.5, delay: 4 },
  { left: 90, top: 65, size: "w-1 h-1", color: "bg-[#d8b4fe]", duration: 8.5, delay: 2.5 },
  { left: 14, top: 38, size: "w-1 h-1", color: "bg-[#c084fc]", duration: 10, delay: 1 },
  { left: 70, top: 32, size: "w-1.5 h-1.5", color: "bg-[#a855f7]", duration: 9, delay: 3.5 },
  { left: 40, top: 28, size: "w-1 h-1", color: "bg-[#e879f9]", duration: 8, delay: 5 },
  { left: 84, top: 20, size: "w-1.5 h-1.5", color: "bg-[#c084fc]", duration: 10.5, delay: 1.8 },
  { left: 26, top: 24, size: "w-1 h-1", color: "bg-[#9266fd]", duration: 9.2, delay: 4.2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HowWeOperate() {
  const [showAllSteps, setShowAllSteps] = useState(false);
  const displayedStepsMobile = showAllSteps ? steps : steps.slice(0, 2);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#090514] via-[#150a2a] to-[#070c1e] text-white border-b border-white/10 overflow-hidden select-none">
      {/* Animated Top Border Specular Laser Beam */}
      <motion.div
        animate={{ x: ["-100%", "250%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent pointer-events-none z-20"
      />

      {/* Deep Violet & Magenta Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#7c3aed]/35 via-[#9266fd]/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#c084fc]/30 via-[#a855f7]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#4c1d95]/30 via-[#7c3aed]/25 to-[#c084fc]/20 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(192,132,252,0.22),transparent)] pointer-events-none -z-0" />

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
          className={`absolute rounded-full pointer-events-none ${pt.size} ${pt.color} blur-[0.5px] shadow-[0_0_8px_#c084fc]`}
        />
      ))}

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#c084fc]/40 text-[#e9d5ff] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(192,132,252,0.25)] backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse shadow-[0_0_8px_#c084fc]" />
            <span>Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontWeight: 300 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight mb-4"
          >
            How We{" "}
            <span className="bg-gradient-to-r from-[#f0abfc] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent font-medium">
              Operate
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            End-to-end project execution from initial consultation to ongoing managed support.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Desktop: 7-column layout with connecting line */}
          <div className="hidden lg:block">
            {/* Connecting Track & Traveling Laser Energy Pulse */}
            <div className="absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-[3px] bg-gradient-to-r from-[#9266fd]/25 via-[#c084fc]/50 to-[#e879f9]/25 z-0 rounded-full overflow-hidden shadow-[0_0_10px_rgba(192,132,252,0.3)]">
              {/* High-speed glowing energy pulse traveling horizontally */}
              <motion.div
                animate={{ x: ["-100%", "500%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="w-48 h-full bg-gradient-to-r from-transparent via-[#f5d0fe] to-transparent shadow-[0_0_15px_#e879f9,0_0_30px_#c084fc]"
              />
            </div>

            <div className="grid grid-cols-7 gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Undulating floating bob animation for the icon */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }}
                      className="relative z-10 mb-4"
                    >
                      {/* Rotating Dashed Accent Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 rounded-full border border-dashed border-[#c084fc]/35 pointer-events-none group-hover:border-[#e879f9]/80 group-hover:scale-110 transition-all duration-300"
                      />

                      {/* Ambient Glowing Halo */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#c084fc]/30 to-[#7c3aed]/30 rounded-full blur-xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                      {/* Frosted Glass Gradient Sphere */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#c084fc] via-[#9266fd] to-[#6d28d9] flex items-center justify-center text-white shadow-[0_12px_30px_rgba(146,102,253,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_18px_45px_rgba(192,132,252,0.65)]">
                        <Icon className="w-8 h-8 drop-shadow-md" />
                      </div>

                      {/* Number Pill */}
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#090514] text-[#f5d0fe] text-xs font-bold flex items-center justify-center border-2 border-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.7)]">
                        {index + 1}
                      </span>
                    </motion.div>

                    {/* Content Glass Card Pod */}
                    <div className="w-full p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:border-[#c084fc]/50 group-hover:bg-white/[0.08] group-hover:shadow-[0_15px_35px_rgba(168,85,247,0.25)] group-hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start min-h-[155px]">
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 leading-tight group-hover:text-[#f0abfc] transition-colors min-h-[2.5rem] flex items-center justify-center">
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tablet: 4-column first row, 3-column second row */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-4 gap-4 mb-4">
              {steps.slice(0, 4).map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center bg-white/[0.05] rounded-2xl p-5 border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_45px_rgba(168,85,247,0.3)] hover:border-[#c084fc]/60 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c084fc] via-[#9266fd] to-[#6d28d9] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(146,102,253,0.4)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#090514] text-[#f5d0fe] text-[10px] font-bold flex items-center justify-center border-2 border-[#a855f7] shadow-[0_0_8px_#a855f7]">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#f0abfc] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-[75%] mx-auto">
              {steps.slice(4).map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center bg-white/[0.05] rounded-2xl p-5 border border-white/15 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_45px_rgba(168,85,247,0.3)] hover:border-[#c084fc]/60 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c084fc] via-[#9266fd] to-[#6d28d9] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(146,102,253,0.4)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#090514] text-[#f5d0fe] text-[10px] font-bold flex items-center justify-center border-2 border-[#a855f7] shadow-[0_0_8px_#a855f7]">
                        {index + 5}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#f0abfc] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden relative">
            {/* Timeline line with purple gradient */}
            <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#c084fc] via-[#9266fd] to-[#6d28d9] rounded-full shadow-[0_0_8px_#c084fc]" />

            <div className="space-y-4">
              {displayedStepsMobile.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex items-start gap-4 pl-0"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c084fc] via-[#9266fd] to-[#6d28d9] flex items-center justify-center text-white shadow-md shadow-[#9266fd]/30">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#090514] text-[#f5d0fe] text-[10px] font-bold flex items-center justify-center border-2 border-[#a855f7] shadow-[0_0_8px_#a855f7]">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/[0.05] rounded-2xl p-4 border border-white/15 backdrop-blur-2xl shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {steps.length > 2 && (
              <div className="mt-6 text-center relative z-10">
                <button
                  type="button"
                  onClick={() => setShowAllSteps(!showAllSteps)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.06] text-white text-sm font-semibold backdrop-blur-xl hover:border-[#c084fc]/60 hover:bg-white/15 shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all active:scale-95"
                >
                  {showAllSteps ? "Show Less" : `View More Steps (+${steps.length - 2})`}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllSteps ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
