"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Phone,
  Clock,
  Compass,
  Cpu,
  Wrench,
  Headphones,
  Target,
  Zap,
} from "lucide-react"
import HeroImageSlider, { SlideItem } from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip } from "@/components/ui"

export interface ServiceTheme {
  bgGradient: string
  accentColor: string
  accentGradient: string
  glowOrb1: string
  glowOrb2: string
  cardBg: string
  cardBorder: string
  cardBorderHover: string
  cardShadowHover: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  buttonGradient: string
  buttonText?: string
  buttonShadow: string
  textHighlight: string
  subtextColor: string
  laserStreak: string
}

export interface ServiceDetailProps {
  title: string
  summary: string
  overview: string
  deliverables: string[]
  subServices: { name: string; description: string }[]
  useCases?: string[]
  engagementModel: { phase: string; description: string }[]
  theme: ServiceTheme
  slides?: SlideItem[]
}

const phaseIcons = [Compass, Cpu, Wrench, Headphones]

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function ServiceDetailTemplate({
  title,
  summary,
  overview,
  deliverables,
  subServices,
  useCases,
  engagementModel,
  theme,
  slides,
}: ServiceDetailProps) {
  useRevealOnScroll()
  const [activeSubIdx, setActiveSubIdx] = useState(0)

  const heroSlides: SlideItem[] =
    slides && slides.length > 0
      ? slides
      : [
          {
            image: "/indian-network-noc-engineer.jpg",
            title: "Standards-Aligned Engineering",
            caption: "Enterprise-grade deployment with full compliance and SLA monitoring.",
          },
          {
            image: "/datacenter-infrastructure-engineer.jpg",
            title: "Mission-Critical Operations",
            caption: "High-density passive and active components built for maximum uptime.",
          },
          {
            image: "/gcc-enterprise-engineer.jpg",
            title: "Certified Project Delivery",
            caption: "Experienced engineers executing turnkey integration pan-India.",
          },
        ]

  const activeSubService = subServices[activeSubIdx] || subServices[0]
  const secondarySlide = heroSlides[1] || heroSlides[0]
  const tertiarySlide = heroSlides[2] || heroSlides[0]

  return (
    <main className={`min-h-screen bg-gradient-to-b ${theme.bgGradient} text-white relative overflow-hidden`}>
      {/* Themed ambient glow orbs */}
      <div className={`absolute top-0 right-1/4 w-[600px] h-[600px] ${theme.glowOrb1} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute top-1/3 -left-32 w-[550px] h-[550px] ${theme.glowOrb2} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-0 w-[500px] h-[500px] ${theme.glowOrb1} rounded-full blur-[150px] pointer-events-none`} />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Top hairline specular streak */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${theme.laserStreak} to-transparent`} />

      {/* 1. Hero Banner with 3-Image Slider */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase ${theme.textHighlight} mb-5`}>
                <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                What We Do // Enterprise Discipline
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 sm:mb-6 leading-[1.1]">
                {title}
              </h1>
              <p className={`text-sm sm:text-base lg:text-lg ${theme.subtextColor} leading-relaxed mb-8 font-light border-l-2 ${theme.cardBorder} pl-4 sm:pl-5`}>
                {summary}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all gap-2 text-center w-full sm:w-auto`}
                >
                  Schedule Site Survey <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-b border-white/30 text-white font-semibold text-sm hover:border-white transition-all text-center w-full sm:w-auto gap-2"
                >
                  Explore All What We Do <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: 3-Image Slider */}
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={heroSlides}
                accentColor={theme.accentColor}
                borderColor={theme.cardBorder}
                glowShadow={theme.cardShadowHover}
                activeDotClass={theme.buttonGradient}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section — Open-Air Editorial Split + Animated Telemetry Strip */}
      <section className={`section-padding relative z-10 py-16 sm:py-20 border-t ${theme.cardBorder} bg-black/20 backdrop-blur-sm`}>
        <div className="section-container">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] ${theme.textHighlight} mb-3`}>
                <ShieldCheck size={16} />
                Architecture Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Engineering Excellence & Strategic Integration
              </h2>
            </div>
            <div className={`lg:col-span-7 pl-5 sm:pl-8 border-l-2 ${theme.cardBorder}`}>
              <p className={`text-base sm:text-lg ${theme.subtextColor} leading-relaxed font-light`}>
                {overview}
              </p>
            </div>
          </div>

          <StatsTelemetryStrip
            stats={[
              {
                label: "Projects Delivered",
                value: "500+",
                subtext: "Turnkey Commissioning",
                icon: CheckCircle,
              },
              {
                label: "Operational Uptime",
                value: "99.9%",
                subtext: "SLA-Backed Reliability",
                icon: ShieldCheck,
              },
              {
                label: "Standards Compliance",
                value: "100%",
                subtext: "ISO & TIA Certified",
                icon: Layers,
              },
              {
                label: "NOC & Field Support",
                value: "24/7",
                subtext: "Rapid Engineering Dispatch",
                icon: Clock,
              },
            ]}
            laserColorClass={theme.laserStreak}
            className="mt-14"
          />
        </div>
      </section>

      {/* 3. Service Components — Interactive Open-Air Spotlight & Orbital Selector */}
      <section className={`section-padding relative z-10 py-20 sm:py-24 border-t ${theme.cardBorder}`}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div>
              <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase ${theme.textHighlight} mb-3`}>
                <Layers size={14} />
                Core Architecture Modules
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Specialized Service Components
              </h2>
            </div>
            <p className={`text-sm sm:text-base ${theme.subtextColor} max-w-md md:text-right font-light`}>
              Select any capability module below to inspect its architectural scope, or review the complete open-air specification stream.
            </p>
          </div>

          {/* Interactive Open-Air Split Spotlight */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 border-t border-white/10">
            {/* Left: Interactive Open-Air Tab Stream */}
            <div className="lg:col-span-5 divide-y divide-white/10 border-b border-white/10">
              {subServices.map((service, idx) => {
                const isSelected = idx === activeSubIdx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSubIdx(idx)}
                    onMouseEnter={() => setActiveSubIdx(idx)}
                    className={`w-full text-left py-4 sm:py-5 px-3 sm:px-4 transition-all duration-300 flex items-center justify-between gap-4 relative group cursor-pointer ${
                      isSelected ? "bg-white/[0.05]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Left Laser Indicator */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                        isSelected ? `${theme.buttonGradient} opacity-100` : "opacity-0 group-hover:opacity-40 bg-white"
                      }`}
                    />

                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest ${
                          isSelected ? theme.textHighlight : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-bold text-base sm:text-lg truncate transition-colors ${
                          isSelected ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {service.name}
                      </span>
                    </div>

                    <ArrowRight
                      size={16}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isSelected ? `${theme.textHighlight} translate-x-1` : "text-white/30 group-hover:text-white/60"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Right: Open-Air Active Module Spotlight Stage */}
            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-white/10 min-h-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full ${theme.buttonGradient} ${
                          theme.buttonText || "text-white"
                        } flex items-center justify-center font-mono font-extrabold text-sm ${theme.buttonShadow}`}
                      >
                        0{activeSubIdx + 1}
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono uppercase tracking-[0.25em] ${theme.textHighlight} block`}>
                          ACTIVE MODULE // 0{activeSubIdx + 1} OF 0{subServices.length}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {activeSubService?.name}
                        </h3>
                      </div>
                    </div>
                    <Zap size={22} className={`${theme.textHighlight} hidden sm:block animate-pulse`} />
                  </div>

                  <p className={`text-base sm:text-lg ${theme.subtextColor} leading-relaxed font-light pl-5 border-l-2 ${theme.cardBorder}`}>
                    {activeSubService?.description}
                  </p>

                  {/* Open-Air Architectural Highlights for this Module */}
                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="sm:border-l sm:first:border-l-0 border-white/10 sm:pl-4 sm:first:pl-0">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${theme.textHighlight} block mb-1`}>
                        ENGINEERING GRADE
                      </span>
                      <span className="text-xs sm:text-sm text-white/90 font-semibold">
                        Enterprise Carrier-Class
                      </span>
                    </div>
                    <div className="sm:border-l border-white/10 sm:pl-4">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${theme.textHighlight} block mb-1`}>
                        INTEGRATION
                      </span>
                      <span className="text-xs sm:text-sm text-white/90 font-semibold">
                        Turnkey HLD / LLD & Deployment
                      </span>
                    </div>
                    <div className="sm:border-l border-white/10 sm:pl-4">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${theme.textHighlight} block mb-1`}>
                        LIFECYCLE SLA
                      </span>
                      <span className="text-xs sm:text-sm text-white/90 font-semibold">
                        24×7 Proactive Support
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(title)}`}
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.textHighlight} hover:text-white transition-colors`}
                    >
                      Request Blueprint for {activeSubService?.name}
                      <ArrowRight size={15} />
                    </Link>

                    <div className="flex items-center gap-2">
                      {subServices.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          aria-label={`Select module ${dotIdx + 1}`}
                          onClick={() => setActiveSubIdx(dotIdx)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            dotIdx === activeSubIdx ? `w-7 ${theme.buttonGradient}` : "w-2 bg-white/25 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Deliver — Open-Air Visual Blueprint & Architectural Spec Ledger */}
      <section className={`section-padding relative z-10 py-20 sm:py-24 border-t ${theme.cardBorder} bg-black/25 backdrop-blur-sm`}>
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Corner-Bracketed Visual Showcase */}
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] ${theme.textHighlight} mb-3`}>
                <Sparkles size={14} />
                Turnkey Scope
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                What We Deliver
              </h2>
              <p className={`text-sm sm:text-base ${theme.subtextColor} mb-8 font-light leading-relaxed`}>
                Standards-compliant engineering scope and end-to-end commissioning deliverables tailored for mission-critical uptime.
              </p>

              {/* Open-Air Architectural Image Frame */}
              <div className="relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/60 z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/60 z-20 pointer-events-none" />
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={secondarySlide.image}
                    alt={secondarySlide.title || title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className={`text-[10px] font-mono uppercase tracking-[0.25em] ${theme.textHighlight} block mb-1`}>
                      FIELD EXECUTION
                    </span>
                    <p className="text-white font-bold text-base sm:text-lg leading-snug">
                      {secondarySlide.title}
                    </p>
                    <p className="text-white/75 text-xs mt-1 font-light">
                      {secondarySlide.caption}
                    </p>
                  </div>
                </div>
                <div className={`h-[2px] w-full ${theme.buttonGradient}`} />
              </div>
            </div>

            {/* Right Column: Open-Air Numbered Spec Ledger */}
            <div className="lg:col-span-7 border-t border-white/15">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 relative flex items-start sm:items-center gap-4 py-4 sm:py-5 border-b border-white/10 group"
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {/* Expanding bottom laser sweep */}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-[1.5px] ${theme.buttonGradient} group-hover:w-full transition-all duration-500`}
                  />
                  <span className={`font-mono text-xs font-bold ${theme.textHighlight} opacity-80 w-7 flex-shrink-0 pt-0.5 sm:pt-0`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle
                    size={18}
                    className={`${theme.textHighlight} flex-shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform`}
                  />
                  <span className={`text-sm sm:text-base font-normal ${theme.subtextColor} group-hover:text-white transition-colors leading-relaxed`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Typical Use Cases — Open-Air Editorial Split Stream */}
      {useCases && useCases.length > 0 && (
        <section className={`section-padding relative z-10 py-20 border-t ${theme.cardBorder}`}>
          <div className="section-container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Open-Air Scenario Stream */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] ${theme.textHighlight} mb-3`}>
                    <Target size={14} />
                    Where We Deploy
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                    Deployment Scenarios & Industry Use Cases
                  </h2>
                  <p className={`text-sm sm:text-base ${theme.subtextColor} font-light`}>
                    Engineered for complex enterprise, industrial, healthcare, and educational environments.
                  </p>
                </div>

                <div className="space-y-5 pt-4">
                  {useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="reveal opacity-0 translate-y-8 transition-all duration-700 relative pl-6 border-l-2 border-white/15 hover:border-white transition-colors group"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span className={`block text-[10px] font-mono uppercase tracking-[0.25em] ${theme.textHighlight} mb-1`}>
                        SCENARIO // 0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-white/90 group-hover:text-white font-light leading-relaxed">
                        {useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Floating Open-Air Visual Frame */}
              <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
                <div className="relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/60 z-20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/60 z-20 pointer-events-none" />
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <Image
                      src={tertiarySlide.image}
                      alt={tertiarySlide.title || title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className={`text-[10px] font-mono uppercase tracking-[0.25em] ${theme.textHighlight} block mb-1`}>
                        ENTERPRISE ENVIRONMENT
                      </span>
                      <p className="text-white font-bold text-base sm:text-lg leading-snug">
                        {tertiarySlide.title}
                      </p>
                      <p className="text-white/75 text-xs mt-1 font-light">
                        {tertiarySlide.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Engagement Model — Animated Laser Pulse & Floating Orbital Spheres (Home-Page Style) */}
      <section className={`section-padding relative z-10 py-20 sm:py-24 border-t ${theme.cardBorder} bg-black/25 backdrop-blur-sm`}>
        <div className="section-container">
          <div className="text-center mb-16 sm:mb-20 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase ${theme.textHighlight} mb-3`}>
              <span className="w-2 h-2 rounded-full bg-current animate-ping" />
              Lifecycle Execution Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Our Engagement Model
            </h2>
            <p className={`text-sm sm:text-base ${theme.subtextColor} max-w-2xl mx-auto mt-3 font-light`}>
              From initial site audit and low-level engineering to zero-downtime commissioning and 24×7 SLA support.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Horizontal Connecting Track & Traveling Laser Energy Pulse */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-white/15 z-0 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
                className={`w-48 h-full bg-gradient-to-r from-transparent ${theme.laserStreak} to-transparent`}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {engagementModel.map((model, idx) => {
                const PhaseIcon = phaseIcons[idx % phaseIcons.length]
                return (
                  <div
                    key={idx}
                    className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center text-center group"
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    {/* Undulating Floating Sphere Node */}
                    <motion.div
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.35,
                      }}
                      className="relative mb-6 flex-shrink-0"
                    >
                      {/* Rotating Dashed Outer Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className={`absolute -inset-2.5 rounded-full border border-dashed ${theme.cardBorder} pointer-events-none group-hover:scale-110 transition-transform duration-300`}
                      />

                      {/* Glowing Circular Sphere */}
                      <div
                        className={`relative w-20 h-20 rounded-full ${theme.buttonGradient} ${
                          theme.buttonText || "text-white"
                        } flex items-center justify-center ${theme.buttonShadow} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <PhaseIcon size={30} />
                      </div>

                      {/* Stage Number Pill */}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/90 border border-white/25 text-[10px] font-mono font-bold tracking-widest text-white">
                        0{idx + 1}
                      </span>
                    </motion.div>

                    <span className={`text-[10px] font-mono font-bold tracking-[0.25em] uppercase ${theme.textHighlight} mb-1.5`}>
                      PHASE 0{idx + 1}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-white transition-colors">
                      {model.phase}
                    </h3>
                    <p className={`text-xs sm:text-sm ${theme.subtextColor} leading-relaxed font-light max-w-xs`}>
                      {model.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA — Open-Air Horizon Section */}
      <section className={`section-padding relative z-10 py-20 pb-28 border-t ${theme.cardBorder} overflow-hidden`}>
        <div className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent ${theme.laserStreak} to-transparent pointer-events-none`} />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] ${theme.textHighlight} mb-4`}>
            <span className="w-2 h-2 rounded-full bg-current animate-ping" />
            Start Your Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Ready to Architect Your Solution?
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg ${theme.subtextColor} mb-10 leading-relaxed font-light`}>
            Connect with our certified systems engineers to evaluate your site, calculate capacity, and receive an itemized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-8 py-4 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all text-center w-full sm:w-auto`}
            >
              Schedule Site Survey
            </Link>
            <a
              href="tel:+919366355026"
              className="inline-flex items-center justify-center px-8 py-4 border-b border-white/30 text-white font-semibold text-sm hover:border-white transition-all gap-2 text-center w-full sm:w-auto"
            >
              <Phone size={16} />
              (+91) 93663 55026
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
