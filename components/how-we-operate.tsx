"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  PenTool,
  FileText,
  Wrench,
  CheckCircle,
  Headphones,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  ShieldCheck,
  Check,
  Sparkles,
  Layers,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";

interface StepData {
  id: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  phaseLabel: string;
  description: string;
  deliverables: string[];
  slaTag: string;
  highlightMetric: { label: string; value: string };
  terminalLogs: { tag: string; message: string; status: string }[];
}

const steps: StepData[] = [
  {
    id: "consultation",
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    phaseLabel: "Phase 01 // Intake & Strategy",
    description:
      "Understanding your requirements, goals, and operational challenges through detailed discovery discussions with senior enterprise architects.",
    deliverables: [
      "Stakeholder Requirements Audit",
      "Pain-Point & Risk Assessment",
      "Infrastructure Feasibility Scope",
    ],
    slaTag: "Turnaround: 24–48 Hours",
    highlightMetric: { label: "Feasibility Score", value: "99.8%" },
    terminalLogs: [
      { tag: "INTAKE", message: "Client enterprise network & security baseline captured", status: "OK" },
      { tag: "AUDIT", message: "Bandwidth, site topology & constraint matrix evaluated", status: "OK" },
      { tag: "STATUS", message: "Feasibility established • Project charter generated", status: "READY" },
    ],
  },
  {
    id: "site-survey",
    number: "02",
    icon: MapPin,
    title: "Site Survey",
    phaseLabel: "Phase 02 // Physical Audit & Mapping",
    description:
      "On-ground infrastructure assessment, precision laser measurements, and comprehensive technical audit of your physical premises across India.",
    deliverables: [
      "Premises Spatial & Cable Pathway Scan",
      "Power, Cooling & Rack Density Audit",
      "Optical Return & RF Signal Heatmaps",
    ],
    slaTag: "Coverage: PAN-India Physical Audit",
    highlightMetric: { label: "Survey Accuracy", value: "100%" },
    terminalLogs: [
      { tag: "SURVEY", message: "On-premise field audit initiated across server rooms", status: "OK" },
      { tag: "DIAGNOSTIC", message: "Fluke RF signal heatmap & optical loss audit complete", status: "PASS" },
      { tag: "PATHING", message: "Conduit, riser & cable tray clearance confirmed", status: "VALID" },
    ],
  },
  {
    id: "solution-design",
    number: "03",
    icon: PenTool,
    title: "Solution Design",
    phaseLabel: "Phase 03 // Architectural Engineering",
    description:
      "Custom IT, audiovisual, and security architecture planning tailored to your exact physical and cloud environment, engineered for 99.999% uptime.",
    deliverables: [
      "AutoCAD & BIM Schematics",
      "L2/L3 Network Topology Blueprints",
      "Zero-Trust Policy & Redundancy Matrix",
    ],
    slaTag: "Standard: TIA-942 Tier III/IV",
    highlightMetric: { label: "Redundancy Target", value: "N+1 Path" },
    terminalLogs: [
      { tag: "CAD", message: "High-density fiber & core switch topology drafted", status: "OK" },
      { tag: "SECURITY", message: "Firewall zone segmentation & VLAN mapping configured", status: "SECURE" },
      { tag: "FAILOVER", message: "Automated dual-route failover logic validated", status: "VERIFIED" },
    ],
  },
  {
    id: "boq-proposal",
    number: "04",
    icon: FileText,
    title: "BOQ & Proposal",
    phaseLabel: "Phase 04 // Transparent Specification",
    description:
      "Detailed Bill of Quantities with transparent itemization, OEM tier-1 partner pricing, and lifecycle CapEx/OpEx predictability.",
    deliverables: [
      "100% Itemized SKU Specification",
      "Tier-1 OEM Partner Volume Pricing",
      "Lifecycle Warranty & SLA Framework",
    ],
    slaTag: "Guarantee: Zero Hidden Costs",
    highlightMetric: { label: "Pricing Model", value: "Transparent" },
    terminalLogs: [
      { tag: "BOQ", message: "Bill of Quantities itemized with SKU-level granularity", status: "LOCKED" },
      { tag: "COMMERCIAL", message: "Enterprise volume pricing confirmed with OEM leaders", status: "SAVINGS" },
      { tag: "MILESTONES", message: "Delivery milestones & SLA terms formalized", status: "READY" },
    ],
  },
  {
    id: "installation",
    number: "05",
    icon: Wrench,
    title: "Installation",
    phaseLabel: "Phase 05 // Professional Deployment",
    description:
      "Professional deployment of enterprise hardware, structured fiber cabling, and security systems executed with zero disruption to daily business operations.",
    deliverables: [
      "Precision Rack Dressing & Cable Management",
      "Cat6A / Single-Mode Fiber Termination",
      "Zero-Downtime Cutover Execution",
    ],
    slaTag: "Execution: Off-Hours Window",
    highlightMetric: { label: "Downtime Disruption", value: "0%" },
    terminalLogs: [
      { tag: "DEPLOY", message: "Structured cabling & high-density patch panels installed", status: "ACTIVE" },
      { tag: "RACKING", message: "Servers, PDUs & SAN storage mounted and dressed", status: "MOUNTED" },
      { tag: "CUTOVER", message: "Scheduled maintenance window cutover executed flawlessly", status: "ONLINE" },
    ],
  },
  {
    id: "testing-commissioning",
    number: "06",
    icon: CheckCircle,
    title: "Testing & Commissioning",
    phaseLabel: "Phase 06 // Rigorous QA & Certification",
    description:
      "Rigorous quality assurance, safety verification, and SLA compliance testing ensuring every link, camera, and switch performs at peak factory specification.",
    deliverables: [
      "Fluke DSX-8000 Certification Reports",
      "Line-Rate Throughput & Stress Tests",
      "Zero-Trust Access & CCTV Verification",
    ],
    slaTag: "Quality: 100% Channel Link Pass",
    highlightMetric: { label: "Packet Loss Rate", value: "0.00%" },
    terminalLogs: [
      { tag: "FLUKE", message: "DSX-8000 OTDR optical return loss: 0.02 dB (PASS)", status: "CERTIFIED" },
      { tag: "STRESS", message: "Full 100Gbps line-rate load test: 0 packet loss", status: "PASS" },
      { tag: "SECURITY", message: "AI CCTV streams, biometrics & access control synced", status: "ONLINE" },
    ],
  },
  {
    id: "handover-support",
    number: "07",
    icon: Headphones,
    title: "Handover & Support",
    phaseLabel: "Phase 07 // Transition & 24/7 SLA",
    description:
      "Comprehensive as-built documentation, client engineering training sessions, and continuous 24/7 managed NOC operations with immediate response SLAs.",
    deliverables: [
      "As-Built CAD Schematics & Asset Registers",
      "Engineering Team Onboarding & Runbooks",
      "Dedicated 24/7/365 NOC Managed SLA",
    ],
    slaTag: "SLA: <15 Min Critical Response",
    highlightMetric: { label: "SLA Support", value: "24/7/365" },
    terminalLogs: [
      { tag: "HANDOVER", message: "As-built schematics, asset registers & licenses transferred", status: "COMPLETE" },
      { tag: "TRAINING", message: "Client IT engineering team operational onboarding concluded", status: "CERTIFIED" },
      { tag: "NOC LIVE", message: "Real-time telemetry streams active • 24/7 SLA engaged", status: "MONITORED" },
    ],
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per step

export default function HowWeOperate() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<"interactive" | "grid">("interactive");
  const [isHovered, setIsHovered] = useState(false);
  const activeStep = steps[activeIdx];

  const nextStep = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % steps.length);
  }, []);

  const prevStep = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + steps.length) % steps.length);
  }, []);

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying || isHovered || viewMode === "grid") return;
    const interval = setInterval(() => {
      nextStep();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, viewMode, nextStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextStep();
      if (e.key === "ArrowLeft") prevStep();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextStep, prevStep]);

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 bg-[#070c1e] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="How We Operate Section"
    >
      {/* Seamless Ambient Top & Bottom Fades */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070c1e] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#070c1e] to-transparent pointer-events-none z-10" />

      {/* Cyber Grid & Architectural Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

      {/* Atmospheric Luminous Nebulas matching Brand Cyan & Violet */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 -translate-x-1/2 w-[650px] h-[500px] bg-gradient-to-br from-[#1ec9f2]/20 via-[#2563eb]/15 to-transparent rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-1/4 translate-x-1/2 w-[650px] h-[550px] bg-gradient-to-tl from-[#9266fd]/20 via-[#c084fc]/15 to-transparent rounded-full blur-[170px] pointer-events-none"
      />

      <div className="section-container relative z-20">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-[#1ec9f2]/30 text-[#67e8f9] text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(30,201,242,0.15)] backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse shadow-[0_0_8px_#1ec9f2]" />
              <span>Our Process</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontWeight: 300 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight mb-3"
            >
              How We Operate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed"
            >
              End-to-end project execution from initial consultation to ongoing managed support.
            </motion.p>
          </div>

          {/* Interactive Controls & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => setViewMode("interactive")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  viewMode === "interactive"
                    ? "bg-gradient-to-r from-[#1ec9f2] to-[#2563eb] text-white shadow-[0_0_15px_rgba(30,201,242,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Tour</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-[#1ec9f2] to-[#2563eb] text-white shadow-[0_0_15px_rgba(30,201,242,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All 7 Steps</span>
              </button>
            </div>

            {viewMode === "interactive" && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause Tour" : "Play Tour"}
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all backdrop-blur-md active:scale-95"
                title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-[#1ec9f2]" /> : <Play className="w-4 h-4 text-white" />}
              </button>
            )}
          </div>
        </div>

        {/* ----------------- VIEW MODE 1: INTERACTIVE DEEP DIVE TOUR ----------------- */}
        {viewMode === "interactive" && (
          <div className="space-y-8">
            {/* Horizontal Interactive Milestone Stepper Rail */}
            <div className="relative py-4 px-2">
              {/* Desktop Stepper Track */}
              <div className="hidden lg:block relative">
                {/* Connecting Track Line */}
                <div className="absolute top-7 left-10 right-10 h-[2px] bg-white/10 z-0">
                  {/* Active Progress Fill Line */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1ec9f2] via-[#6366f1] to-[#c084fc] shadow-[0_0_12px_#1ec9f2]"
                    initial={false}
                    animate={{
                      width: `${(activeIdx / (steps.length - 1)) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {/* 7 Stepper Milestone Nodes */}
                <div className="relative z-10 grid grid-cols-7 gap-2">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = idx === activeIdx;
                    const isCompleted = idx < activeIdx;

                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveIdx(idx)}
                        className="group flex flex-col items-center focus:outline-none"
                      >
                        {/* Node Bubble */}
                        <div className="relative mb-3">
                          {/* Active Pulsing Ring */}
                          {isActive && (
                            <motion.div
                              layoutId="activeStepperRing"
                              className="absolute -inset-2.5 rounded-full border-2 border-[#1ec9f2] shadow-[0_0_20px_#1ec9f2]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                          )}

                          {/* Node Icon Circle */}
                          <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-br from-[#1ec9f2] via-[#2563eb] to-[#7c3aed] text-white shadow-[0_0_25px_rgba(30,201,242,0.6)] scale-110"
                                : isCompleted
                                ? "bg-white/[0.08] border border-[#1ec9f2]/60 text-[#1ec9f2] hover:bg-white/[0.15]"
                                : "bg-white/[0.03] border border-white/15 text-gray-400 group-hover:border-white/30 group-hover:text-white"
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-5 h-5 stroke-[2.5]" />
                            ) : (
                              <Icon className="w-5 h-5" />
                            )}
                          </div>

                          {/* Step Number Badge */}
                          <span
                            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border ${
                              isActive
                                ? "bg-[#070c1e] text-[#1ec9f2] border-[#1ec9f2]"
                                : isCompleted
                                ? "bg-[#070c1e] text-white border-white/40"
                                : "bg-[#070c1e] text-gray-400 border-white/20"
                            }`}
                          >
                            {idx + 1}
                          </span>
                        </div>

                        {/* Title Under Node */}
                        <span
                          className={`text-xs font-medium tracking-tight text-center transition-colors max-w-[110px] line-clamp-1 ${
                            isActive
                              ? "text-white font-semibold"
                              : "text-gray-400 group-hover:text-gray-200"
                          }`}
                        >
                          {step.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile & Tablet Horizontal Scroll Strip */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`flex-shrink-0 snap-start flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all text-xs font-medium ${
                        isActive
                          ? "bg-gradient-to-r from-[#1ec9f2] to-[#2563eb] border-[#1ec9f2] text-white shadow-[0_0_15px_rgba(30,201,242,0.4)]"
                          : "bg-white/[0.04] border-white/10 text-gray-300 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{step.number}. {step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stage Showcase: Bento Stage with Framer Motion AnimatePresence */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 18, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-2xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] border border-white/15 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden"
                >
                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#1ec9f2]/15 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Scope, Explanation & Deliverables (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Phase Micro Header */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1ec9f2]/10 border border-[#1ec9f2]/30 text-[#1ec9f2] text-xs font-mono font-medium tracking-wide">
                          <Activity className="w-3.5 h-3.5 animate-pulse" />
                          {activeStep.phaseLabel}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-gray-300 text-xs font-mono font-medium">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          {activeStep.slaTag}
                        </span>
                      </div>

                      {/* Main Title & Description */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 tracking-tight">
                          {activeStep.number}. {activeStep.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                          {activeStep.description}
                        </p>
                      </div>

                      {/* Key Deliverables Pill List */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#1ec9f2]" />
                          Key Phase Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {activeStep.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#1ec9f2]/40 transition-colors"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#1ec9f2]/20 text-[#1ec9f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <span className="text-xs text-gray-200 font-normal leading-tight">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Step Progress & Prev / Next Navigation Controls */}
                      <div className="pt-2 flex items-center justify-between border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-gray-400">
                            Milestone <span className="text-white font-bold">{activeStep.number}</span> of 07
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs font-mono text-[#1ec9f2]">
                            {Math.round(((activeIdx + 1) / 7) * 100)}% Execution
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={prevStep}
                            aria-label="Previous Phase"
                            className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/15 flex items-center justify-center text-white transition-all active:scale-95"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextStep}
                            aria-label="Next Phase"
                            className="w-9 h-9 rounded-full bg-gradient-to-r from-[#1ec9f2] to-[#2563eb] hover:opacity-90 flex items-center justify-center text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(30,201,242,0.4)]"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: High-Tech Telemetry & Terminal Console (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="rounded-xl bg-[#030612]/90 border border-white/15 p-5 shadow-2xl relative overflow-hidden font-mono">
                        {/* Terminal Window Header Bar */}
                        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="text-[11px] text-gray-400 font-mono ml-2 flex items-center gap-1.5">
                              <Terminal className="w-3.5 h-3.5 text-[#1ec9f2]" />
                              SYSTEM_TELEMETRY // {activeStep.id.toUpperCase()}
                            </span>
                          </div>
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>

                        {/* Benchmark Stat Card */}
                        <div className="mb-4 p-3 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                              Target Metric
                            </p>
                            <p className="text-xs text-gray-200 font-medium">
                              {activeStep.highlightMetric.label}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#1ec9f2] tracking-tight">
                              {activeStep.highlightMetric.value}
                            </p>
                          </div>
                        </div>

                        {/* Live Log Feeds */}
                        <div className="space-y-2.5 text-[11px]">
                          {activeStep.terminalLogs.map((log, lIdx) => (
                            <motion.div
                              key={lIdx}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lIdx * 0.1 }}
                              className="flex items-start gap-2 p-2 rounded bg-black/40 border border-white/5"
                            >
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-white/10 text-[#67e8f9] flex-shrink-0">
                                {log.tag}
                              </span>
                              <span className="text-gray-300 leading-snug flex-1">
                                {log.message}
                              </span>
                              <span className="text-[10px] font-bold text-emerald-400 flex-shrink-0">
                                [{log.status}]
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Terminal Footer Status */}
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            ISO / TIA-942 COMPLIANT
                          </span>
                          <span className="text-[#1ec9f2]">PAN-INDIA SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ----------------- VIEW MODE 2: FULL ROADMAP GRID ----------------- */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setViewMode("interactive");
                  }}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#1ec9f2]/60 transition-all duration-300 backdrop-blur-xl shadow-lg hover:-translate-y-1.5 cursor-pointer"
                >
                  <div>
                    {/* Top Icon & Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1ec9f2]/20 to-[#2563eb]/20 border border-[#1ec9f2]/30 flex items-center justify-center text-[#1ec9f2] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#1ec9f2] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Deliverables Tag */}
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-[#1ec9f2] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
