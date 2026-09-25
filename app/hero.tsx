"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight, ChevronDown, ArrowRight, Star, Mail, Calendar, Home, Phone, MessageCircle, MapPin, Clock, Cpu, Globe } from "lucide-react"
import ScrollStack, { ScrollStackItem } from "./ScrollStack"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedCounter, RevealOnScroll } from "@/components/animations"
import {
  SectionHeader,
  ServiceCard,
  CaseStudyCard,
  TestimonialCard,
  IndustryBadge,
  RatingBadge,
} from "@/components/ui"
import { getHeroData, getServicesData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import SolutionsShowcase from "@/components/solutions-showcase"
import HowWeOperate from "@/components/how-we-operate"
import BuildYourSolution from "@/components/build-your-solution"
import NetworkMesh from "@/components/network-mesh"

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -20 },
  show: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120 },
  },
}

const statsContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const statsItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showAllServices, setShowAllServices] = useState(false)
  const [showAllCapabilities, setShowAllCapabilities] = useState(false)

  const {
    heroContent,
    statsData,
    expertiseAreas,
    serviceAreas,
    solutionHighlights,
    coreCapabilities,
    processSteps,
    caseStudies,
    testimonials,
    partners,
    industries,
    sectionHeadings,
  } = getHeroData()

  const services = getServicesData()
  const capabilitySectionRef = useRef<HTMLElement>(null)
  const capabilityViewportRef = useRef<HTMLDivElement>(null)
  const capabilityTrackRef = useRef<HTMLDivElement>(null)
  const [capabilityTravel, setCapabilityTravel] = useState(0)
  const { scrollYProgress: capabilityScrollProgress } = useScroll({
    target: capabilitySectionRef,
    offset: ["start start", "end end"],
  })
  const capabilityX = useTransform(
    capabilityScrollProgress,
    (progress) => progress * -capabilityTravel,
  )

  useEffect(() => {
    const viewport = capabilityViewportRef.current
    const track = capabilityTrackRef.current

    if (!viewport || !track) return

    const measureTrack = () => {
      setCapabilityTravel(Math.max(0, track.scrollWidth - viewport.clientWidth))
    }

    measureTrack()

    const resizeObserver = new ResizeObserver(measureTrack)
    resizeObserver.observe(viewport)
    resizeObserver.observe(track)

    return () => resizeObserver.disconnect()
  }, [coreCapabilities.length])

  const partnerRows = [
    partners,
    [...partners.slice(Math.ceil(partners.length / 2)), ...partners.slice(0, Math.ceil(partners.length / 2))],
  ]

  return (
    <>
      {/* Reference-led hero */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_74%,#ffffff_100%)]">
        <div className="relative w-full">
          <section className="relative min-h-0 overflow-hidden px-4 pt-6 pb-4 sm:px-6 sm:pt-10 sm:pb-6 md:min-h-[calc(100dvh-73px)] md:pt-14 md:pb-0 lg:min-h-[760px] lg:px-10 lg:pt-20">
            <div className="pointer-events-none absolute bottom-[10%] left-1/2 z-0 h-[43%] w-[74%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(198,226,250,0.52),rgba(218,239,255,0.25)_55%,transparent_73%)]" />
            <NetworkMesh className="absolute inset-0 z-[1] h-full w-full opacity-100" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_50%_33%,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.78)_31%,rgba(247,252,255,0.26)_69%,rgba(235,247,255,0.04)_100%)]" />
            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <RatingBadge
                rating={heroContent.rating}
                clientCount={heroContent.clientCount}
                label={heroContent.clientLabel}
              />

              {/* Main Heading */}
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] text-navy-dark sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">{heroContent.title}</span>
                <span className="block text-brand-blue">{heroContent.titleAccent}</span>
              </h1>

              {/* Pillars Badge */}
              {(heroContent as any).pillars && (
                <div className="mt-5 flex max-w-full flex-nowrap items-center justify-center gap-1 overflow-x-auto no-scrollbar sm:gap-2">
                  {(heroContent as any).pillars.map((pillar: string, i: number) => (
                    <span key={pillar} className="flex items-center gap-1 sm:gap-2 shrink-0">
                      <span className="inline-block whitespace-nowrap rounded-full border border-brand-blue/15 bg-white/75 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-blue sm:px-3 sm:py-1 sm:text-xs">
                        {pillar}
                      </span>
                      {i < (heroContent as any).pillars.length - 1 && (
                        <span className="text-gray-300 text-[10px] sm:text-xs shrink-0">•</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* Sub text */}
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg">
                <span className="md:block">We design, deploy, secure, and manage scalable IT infrastructure and security solutions </span>
                <span className="md:block">for modern workplaces — from first consultation to ongoing 24/7 support.</span>
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href={heroContent.ctaHref}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-6 py-3 font-semibold text-white shadow-[0_12px_28px_-12px_rgba(23,111,229,0.65)] transition hover:-translate-y-0.5 hover:bg-[#0e5fcc] active:translate-y-0"
                >
                  {heroContent.ctaText}
                </Link>
                {(heroContent as any).secondaryCtaText && (
                  <Link
                    href={(heroContent as any).secondaryCtaHref || "/contact"}
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue/35 bg-white/85 px-6 py-3 font-semibold text-brand-blue transition hover:-translate-y-0.5 hover:border-brand-blue hover:bg-blue-50 active:translate-y-0"
                  >
                    <Phone size={16} />
                    {(heroContent as any).secondaryCtaText}
                  </Link>
                )}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-2 z-[-1] select-none overflow-hidden sm:bottom-5">
                <div className="text-center text-[4.5rem] font-black uppercase leading-none tracking-[-0.07em] text-brand-blue/[0.045] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]">
                  {heroContent.backgroundText}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 pt-2 pb-8 sm:pt-4 sm:pb-12 md:pt-7 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={statsContainerVariants}
            className="mx-auto max-w-6xl border-y border-blue-100 bg-white px-2 py-3 md:px-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {statsData.map((stat, idx) => {
                let Icon = Globe;
                if (stat.value.includes("Pan-India")) Icon = MapPin;
                if (stat.value.includes("24/7")) Icon = Clock;
                if (stat.value.includes("End-to-End")) Icon = Cpu;

                return (
                  <motion.div
                    key={idx}
                    variants={statsItemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-blue-50/45 sm:border-b lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-lg sm:text-xl font-extrabold text-navy-dark tracking-tight whitespace-nowrap">
                        {stat.value}
                      </div>
                      <p className="text-slate-500 text-xs sm:text-xs font-semibold tracking-wide uppercase mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">

          {/* ================= SERVICE AREAS ================= */}
          <section className="py-3 md:py-6">
            <div>

              {/* Heading */}
              <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
                <h2 className="mb-3 text-3xl font-extrabold tracking-[-0.04em] text-navy-dark sm:text-4xl md:text-5xl">
                  {sectionHeadings.serviceAreas.title}
                </h2>
                <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
                  {sectionHeadings.serviceAreas.subtitle}
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-blue-100 bg-blue-100 sm:grid-cols-2 lg:grid-cols-4">
                {serviceAreas.map((service) => (
                  <div
                    key={service.id}
                    className="group relative min-h-[245px] bg-white p-6 pb-14 transition-colors duration-300 hover:bg-blue-50/60 md:p-7 md:pb-14"
                  >
                    <h3 className="mb-3 text-lg font-bold leading-tight text-navy-dark md:text-xl">
                      {service.title}
                    </h3>

                    <p className="mb-8 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Explore CTA */}
                    <button className="absolute bottom-5 left-6 inline-flex items-center gap-2 font-semibold transition md:left-7">
                      <span className="text-brand-blue">
                        Explore
                      </span>
                      <ChevronRight
                        size={18}
                        className="text-brand-blue transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* View All */}
              <div className="text-center mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-brand-blue/30 bg-white px-6 py-3 font-semibold text-brand-blue transition hover:-translate-y-0.5 hover:border-brand-blue hover:bg-blue-50"
                >
                  View All Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* ================= EXPERTISE AREAS ================= */}
          <section className="mt-14 border-t border-blue-100 py-14 md:mt-20 md:py-20">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-4 text-center lg:col-span-1 lg:text-left">
                  <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-navy-dark sm:text-4xl md:text-5xl">
                    {sectionHeadings.expertiseAreas.title}
                  </h2>
                  <p className="mx-auto max-w-md text-sm text-slate-600 sm:text-base lg:mx-0">
                    {sectionHeadings.expertiseAreas.subtitle}
                  </p>
                </div>

                {/* Expertise Cards */}
                <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-3 md:gap-4 justify-center lg:justify-end">

                  {expertiseAreas.map((area, index) => (
                    <div
                      key={area.id}
                      className={`
                        transition-all duration-500 ease-out
                        w-full
                        lg:w-[170px] lg:hover:w-[230px]
                        ${hoveredExpertise !== null && hoveredExpertise !== index
                          ? 'lg:opacity-70'
                          : 'opacity-100'}
                      `}
                      onMouseEnter={() => setHoveredExpertise(index)}
                      onMouseLeave={() => setHoveredExpertise(null)}
                    >
                      <div className="relative h-40 cursor-pointer overflow-hidden border border-blue-100 bg-white sm:h-48 md:h-56 lg:h-80">

                        <Image
                          src={area.image || "/placeholder.svg"}
                          alt={area.title}
                          fill
                          className="object-cover transition-all duration-500"
                          style={{
                            filter:
                              hoveredExpertise === index
                                ? "brightness(1.08)"
                                : "brightness(0.95)",
                          }}
                          sizes="(max-width: 1024px) 50vw, 230px"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />

                        {/* Title */}
                        <div className="absolute bottom-0 w-full text-center p-3 sm:p-4">
                          <span className="inline-block px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2 sm:text-sm">
                            {area.title}
                          </span>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </section>


        </div>
      </section>

      <section className="border-y border-blue-100 bg-white py-14 md:py-16">
        <div className="section-container">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {sectionHeadings.partners.label}
            </p>
          </div>
          <div className="space-y-3">
            {partnerRows.map((rowPartners, rowIdx) => (
              <div
                key={rowIdx}
                className="group relative overflow-hidden border border-blue-100/80 bg-[linear-gradient(90deg,#f8fbff,white,#f8fbff)] px-4 py-3"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
                <div
                  className="flex items-center gap-10 min-w-max"
                  style={{
                    animation: `scrollHorizontal ${rowIdx === 0 ? 26 : 30}s linear infinite`,
                    animationDirection: rowIdx === 0 ? "reverse" : "normal",
                  }}
                >
                  {[...rowPartners, ...rowPartners].map((partner, idx) => (
                    <div
                      key={`${rowIdx}-${idx}-${partner.logo}`}
                      className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300"
                    >
                      <div className="relative h-12 w-32 sm:w-40 md:w-44">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px"
                          priority={rowIdx === 0 && idx === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionsShowcase
        solutions={solutionHighlights}
        heading={sectionHeadings.solutions}
      />

      {/* How We Operate - 7 Step Process */}
      <HowWeOperate />

      {/* Build Your Solution - Interactive Selector */}
      <BuildYourSolution />

      {/* Core Capabilities */}
      <section
        id="core-capabilities"
        ref={capabilitySectionRef}
        data-testid="capability-scroll-section"
        className="relative bg-white lg:h-[420vh]"
      >
        <div className="section-container py-16 md:py-24 lg:hidden">
          <RevealOnScroll className="mb-12 text-center lg:mb-20">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {sectionHeadings.capabilities.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              {sectionHeadings.capabilities.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {sectionHeadings.capabilities.subtitle}
            </p>
          </RevealOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {coreCapabilities.map((capability, idx) => (
              <div
                key={capability.number}
                className={idx >= 2 && !showAllCapabilities ? "hidden sm:block" : "block"}
              >
                <RevealOnScroll delay={idx * 70}>
                  <Link
                    href={capability.href}
                    className="group flex h-full gap-4 rounded-3xl border border-brand-border bg-brand-soft p-5 transition-all hover:-translate-y-1 hover:border-brand-cyan hover:bg-white hover:shadow-xl"
                  >
                    <div className={`flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gradient-to-br ${
                      idx % 2 === 0 ? "from-brand-violet via-brand-cyan to-brand-blue" : "from-brand-cyan to-brand-blue"
                    } text-xl font-light text-white shadow-lg ring-4 ring-white`}>
                      {capability.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">{capability.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {capability.description}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              </div>
            ))}
          </div>

          {coreCapabilities.length > 2 && (
            <div className="mt-6 text-center sm:hidden">
              <button
                type="button"
                onClick={() => setShowAllCapabilities(!showAllCapabilities)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border bg-white text-primary text-sm font-semibold shadow-sm hover:border-brand-cyan hover:bg-brand-soft transition-all active:scale-95"
              >
                {showAllCapabilities ? "Show Less" : `View More Capabilities (+${coreCapabilities.length - 2})`}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllCapabilities ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>

        <div className="sticky top-[120px] hidden h-[calc(100vh-120px)] overflow-hidden lg:flex lg:items-center">
          <div className="section-container w-full">
            <div className="mb-4 text-center xl:mb-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-primary">
                {sectionHeadings.capabilities.eyebrow}
              </p>
              <h2 className="text-4xl font-bold text-slate-950 xl:text-5xl">
                {sectionHeadings.capabilities.title}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted xl:text-base">
                {sectionHeadings.capabilities.subtitle}
              </p>
            </div>

            <div
              ref={capabilityViewportRef}
              data-testid="capability-viewport"
              className="overflow-hidden"
            >
              <motion.div
                ref={capabilityTrackRef}
                data-testid="capability-track"
                style={{ x: capabilityX }}
                className="relative flex h-[350px] w-max"
              >
                <div className="absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2 bg-primary/80" />
                <div className="absolute left-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[7px] border-r-[12px] border-y-transparent border-r-primary" />
                <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[7px] border-l-[12px] border-y-transparent border-l-primary" />

                {coreCapabilities.map((capability, idx) => {
                  const markerAbove = idx % 2 === 0

                  return (
                    <div
                      key={capability.number}
                      className="relative h-[350px] w-[280px] shrink-0 xl:w-[300px]"
                    >
                      <Link href={capability.href} className="group block h-full">
                        <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-white bg-brand-cyan shadow-[0_0_0_2px_#0b3f8f]" />
                        <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-primary ${
                          markerAbove ? "bottom-1/2 h-16" : "top-1/2 h-16"
                        }`} />

                        <div className={`absolute left-1/2 -translate-x-1/2 ${
                          markerAbove ? "bottom-[calc(50%+3.5rem)]" : "top-[calc(50%+3.5rem)]"
                        }`}>
                          <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${
                            markerAbove ? "from-brand-violet via-brand-cyan to-brand-blue" : "from-brand-cyan to-brand-blue"
                          } shadow-xl transition-transform duration-300 group-hover:scale-105`}>
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-light text-primary shadow-inner">
                              {capability.number}
                            </div>
                          </div>
                        </div>

                        <div className={`absolute left-1/2 w-[230px] -translate-x-1/2 text-center ${
                          markerAbove ? "top-[calc(50%+2rem)]" : "bottom-[calc(50%+2rem)]"
                        }`}>
                          <h3 className="text-base font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary">
                            {capability.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600">
                            {capability.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            <div className="mx-auto mt-6 flex max-w-[240px] items-center justify-center">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200/60 shadow-inner">
                <motion.div
                  style={{ scaleX: capabilityScrollProgress, transformOrigin: "left" }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-blue shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-navy-dark flex rounded-3xl overflow-hidden items-center justify-center mx-2 sm:mx-5 my-2 sm:my-5 px-3 sm:px-4 py-12 md:py-20">
        <div className="relative max-w-7xl mx-auto w-full z-10">

          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 mt-2 sm:mt-5 text-white">
              {sectionHeadings?.services?.title || "Our Services"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {sectionHeadings?.services?.subtitle || "Professional services tailored to your needs"}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services?.map((service, idx) => {
              const Icon = getIcon(service?.icon) || Star;

              return (
                <div
                  key={idx}
                  className={`group min-h-[13rem] h-auto sm:min-h-[18rem] md:min-h-[20rem] ${
                    idx >= 2 && !showAllServices ? "hidden sm:block" : "block"
                  }`}
                >
                  <Link
                    href={service?.href || "#"}
                    className="relative block w-full h-full px-3 sm:px-6 py-5 sm:py-8 rounded-2xl sm:rounded-3xl bg-transparent border border-gray-600 shadow-lg hover:border-brand-cyan hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* DEFAULT STATE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6 py-4 sm:py-8 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
                      <div
                        className="mb-3 sm:mb-6 inline-flex p-2.5 sm:p-4 rounded-xl shadow-lg"
                        style={{ backgroundColor: "var(--brand-cyan)" }}
                      >
                        <Icon size={24} className="text-white sm:size-[32px]" />
                      </div>

                      <h3 className="font-bold text-xs sm:text-lg md:text-xl text-center text-white leading-snug">
                        {service?.name || "Service Name"}
                      </h3>
                    </div>

                    {/* HOVER STATE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-2.5 sm:px-6 py-3 sm:py-8 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <div
                        className="mb-2 sm:mb-4 inline-flex p-1.5 sm:p-3 rounded-xl shadow-md"
                        style={{ backgroundColor: "var(--brand-cyan)" }}
                      >
                        <Icon size={18} className="text-white sm:size-[24px]" />
                      </div>

                      <h3 className="font-bold text-xs sm:text-lg md:text-xl text-center text-white mb-1.5 sm:mb-4 leading-snug">
                        {service?.name || "Service Name"}
                      </h3>

                      <p className="text-gray-100 text-[10px] sm:text-sm leading-snug sm:leading-relaxed text-center mb-2 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                        {service?.description || "Service description goes here"}
                      </p>

                      <div className="flex items-center text-brand-cyan font-semibold text-[11px] sm:text-sm">
                        <span>Explore</span>
                        <ArrowRight
                          size={12}
                          className="ml-1 sm:ml-2 sm:size-[14px] group-hover:translate-x-2 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile View More Services Button */}
          {services && services.length > 2 && (
            <div className="mt-6 text-center sm:hidden">
              <button
                type="button"
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all active:scale-95"
              >
                {showAllServices ? "Show Less" : `View More Services (+${services.length - 2})`}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllServices ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-navy-dark font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

        </div>
      </section>


      {/* ================= CASE STUDIES ================= */}
      <section className="section-padding pt-8 md:pt-12 bg-transparent">
        <div className="section-container">

          <RevealOnScroll className="text-center mb-8 md:mb-16">
            <SectionHeader
              title={sectionHeadings.caseStudies.title}
              subtitle={sectionHeadings.caseStudies.subtitle}
            />
          </RevealOnScroll>

          {/* Scroll Stack Wrapper */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <ScrollStack useWindowScroll={true}>
              {caseStudies.map((study, idx) => (
                <ScrollStackItem key={idx}>
                  <div className="w-full max-w-full mx-auto">
                    <CaseStudyCard
                      title={study.title}
                      client={study.client}
                      description={study.description}
                      image={study.image}
                      results={study.results}
                      category={study.category}
                      delay={idx * 100}
                    />
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding mt-0 bg-white">
        <div className="section-container">
          <RevealOnScroll className="text-center mb-8 md:mb-16">
            <SectionHeader
              title={sectionHeadings.testimonials.title}
              subtitle={sectionHeadings.testimonials.subtitle}
            />
          </RevealOnScroll>

          {/* Mobile: Manual horizontal scroll with snap */}
          <div
            className="
              flex gap-6 overflow-x-auto no-scrollbar pb-4
              snap-x snap-mandatory
              md:hidden
            "
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft
              const cardWidth = e.currentTarget.offsetWidth * 0.85
              const index = Math.round(scrollLeft / cardWidth)
              setActiveTestimonial(index)
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[85%] sm:min-w-[70%] snap-center"
              >
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  image={testimonial.image}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  company={testimonial.company}
                  delay={idx * 100}
                />
              </div>
            ))}
          </div>

          {/* Desktop: Auto-scrolling carousel */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex gap-6 animate-[scrollTestimonials_30s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First set */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-[calc(33.333%-1rem)]"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    company={testimonial.company}
                    delay={0}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-[calc(33.333%-1rem)]"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    company={testimonial.company}
                    delay={0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                animate={{
                  width: activeTestimonial === idx ? 24 : 8,
                  backgroundColor: activeTestimonial === idx ? "var(--primary)" : "#d1d5db",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
                onClick={() => setActiveTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <RevealOnScroll className="text-center mb-12">
            <SectionHeader
              badge={sectionHeadings.industries.badge}
              title={sectionHeadings.industries.title}
            />
          </RevealOnScroll>

          <div className="vertical-scroll mx-auto">
            <div className="scroll-content flex flex-row gap-4 md:gap-6">
              {industries.map((industry, idx) => (
                <div key={idx} className="inline-flex flex-shrink-0">
                  <IndustryBadge name={industry} delay={idx * 30} />
                </div>
              ))}
              {/* Duplicate content for seamless looping */}
              {industries.map((industry, idx) => (
                <div key={`dup-${idx}`} className="inline-flex flex-shrink-0">
                  <IndustryBadge name={industry} delay={idx * 30} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section id="cta" className="section-padding relative rounded-3xl justify-center mx-2 sm:mx-5 my-2 sm:my-5 px-4 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-primary to-brand-blue" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5" />
        </div>

        <div className="section-container relative z-10 text-center">
          <RevealOnScroll className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white">
              {sectionHeadings.cta.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-brand-on-dark mb-6 md:mb-8 leading-relaxed">
              {sectionHeadings.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-primary bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                {sectionHeadings.cta.primaryButton} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                {sectionHeadings.cta.secondaryButton}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/80 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] py-1.5 px-3">
        <div className="flex items-center justify-around max-w-sm mx-auto">

          {/* Email */}
          <a
            href="mailto:info@brightnestedu.com"
            className="flex flex-col items-center justify-center gap-0.5 px-3 py-0.5 transition-transform active:scale-95"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-navy-dark border border-gray-200 hover:border-brand-cyan transition-colors">
              <Mail size={18} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium text-gray-600">Email</span>
          </a>

          {/* Appointment (Primary/Center) */}
          <a
            href="/contact"
            className="flex flex-col items-center justify-center gap-0.5 px-3 transition-transform active:scale-95 -mt-3"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white shadow-[0_4px_14px_rgba(23,111,229,0.3)] border-2 border-white transition-shadow">
              <Calendar size={20} strokeWidth={2.2} />
            </div>
            <span className="text-[10px] font-bold text-primary">Appointment</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919366355026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 px-3 py-0.5 transition-transform active:scale-95"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25 transition-colors">
              <MessageCircle size={18} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium text-gray-600">WhatsApp</span>
          </a>

        </div>
      </nav>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-14 md:h-0" />
    </>
  )
}
