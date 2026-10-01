"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Solution {
  number: string
  title: string
  description: string
  features: string[]
  href: string
  accent: string
}

interface SolutionsShowcaseProps {
  solutions: Solution[]
  heading: {
    eyebrow: string
    title: string
    subtitle: string
  }
}

export default function SolutionsShowcase({
  solutions,
  heading,
}: SolutionsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const navigationRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const activeSolution = solutions[activeIndex]

  useEffect(() => {
    let context: { revert: () => void } | undefined
    let cancelled = false

    const setupAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      if (cancelled || !sectionRef.current) return

      gsap.registerPlugin(ScrollTrigger)
      context = gsap.context(() => {
        const sectionIsAlreadyVisible =
          sectionRef.current!.getBoundingClientRect().top < window.innerHeight * 0.9
        const timeline = gsap.timeline(
          sectionIsAlreadyVisible
            ? {}
            : {
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 72%",
                  once: true,
                },
              },
        )

        timeline
          .from(headingRef.current, {
            autoAlpha: 0,
            y: 36,
            duration: 0.7,
            ease: "power3.out",
            immediateRender: false,
          })
          .from(
            navigationRef.current?.querySelectorAll("[data-solution-tab]") ?? [],
            {
              autoAlpha: 0,
              x: -24,
              stagger: 0.06,
              duration: 0.45,
              ease: "power2.out",
              immediateRender: false,
            },
            "-=0.35",
          )
          .from(
            panelRef.current,
            {
              autoAlpha: 0,
              x: 50,
              duration: 0.75,
              ease: "power3.out",
              immediateRender: false,
            },
            "-=0.55",
          )
      }, sectionRef)
    }

    setupAnimations()

    return () => {
      cancelled = true
      context?.revert()
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    const animateSelection = async () => {
      const { gsap } = await import("gsap")
      if (cancelled || !panelRef.current) return

      const elements = panelRef.current.querySelectorAll("[data-solution-content]")
      gsap.killTweensOf(elements)
      gsap.fromTo(
        elements,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
        },
      )
    }

    animateSelection()
    return () => {
      cancelled = true
    }
  }, [activeIndex])

  const selectPrevious = () => {
    setActiveIndex((current) => (current - 1 + solutions.length) % solutions.length)
  }

  const selectNext = () => {
    setActiveIndex((current) => (current + 1) % solutions.length)
  }

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#070c1e] via-[#09132e] to-[#070c1e] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden select-none"
    >
      {/* Animated Top Border Specular Streak */}
      <motion.div
        animate={{ x: ["-100%", "250%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#1ec9f2] to-transparent pointer-events-none z-20"
      />

      {/* Ambient Glow Orbs in Royal Blue, Electric Cyan & Violet */}
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
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#9266fd]/30 via-[#2563eb]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#0369a1]/25 via-[#1ec9f2]/20 to-[#9266fd]/20 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(30,201,242,0.18),transparent)] pointer-events-none -z-0" />

      <div className="section-container relative z-10">
        <div ref={headingRef} className="mb-10 lg:mb-14 text-center shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#1ec9f2]/40 text-[#38d7f8] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(30,201,242,0.25)] backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse shadow-[0_0_8px_#1ec9f2]" />
            <span>{heading.eyebrow}</span>
          </div>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#1ec9f2] to-[#9da8fb] bg-clip-text text-transparent font-medium">
              Solutions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-light">
            {heading.subtitle}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8 items-stretch flex-1 min-h-0">
          <div
            ref={navigationRef}
            data-lenis-prevent
            className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-y-auto lg:max-h-[500px] lg:gap-2.5 lg:pb-0 pr-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]"
            aria-label="Solution categories"
          >
            {solutions.map((solution, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={solution.number}
                  type="button"
                  data-solution-tab
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex min-w-[240px] items-center gap-3 rounded-2xl border p-2.5 lg:p-3 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? "border-[#1ec9f2]/70 bg-gradient-to-r from-[#1ec9f2]/20 via-[#0067b8]/20 to-white/[0.08] backdrop-blur-2xl shadow-[0_12px_30px_rgba(30,201,242,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)]"
                      : "border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-[#1ec9f2]/40 hover:bg-white/[0.08] text-slate-300"
                  }`}
                >
                  {/* Active Right Neon Indicator Bar */}
                  {isActive && (
                    <span className="absolute right-0 top-2 bottom-2 w-1 rounded-l-full bg-gradient-to-b from-[#1ec9f2] to-[#0067b8] shadow-[0_0_12px_#1ec9f2]" />
                  )}
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${solution.accent} text-white shadow-[0_0_15px_rgba(30,201,242,0.5)]`
                        : "bg-white/10 text-slate-300 border border-white/10 group-hover:bg-white/15 group-hover:text-white"
                    }`}
                  >
                    {solution.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-xs lg:text-sm font-medium leading-tight transition-colors duration-200 ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {solution.title}
                    </span>
                  </span>
                  <ChevronRight
                    size={16}
                    className={`flex-none transition-all duration-300 ${
                      isActive
                        ? "translate-x-0.5 text-[#38d7f8]"
                        : "text-slate-500 group-hover:translate-x-0.5 group-hover:text-slate-300"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div
            ref={panelRef}
            className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-[500px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col"
          >
            {/* Top Active Solution Accent Bar */}
            <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-[2rem] bg-gradient-to-r ${activeSolution.accent}`} />
            
            {/* Ambient card background glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[44px] border-[#1ec9f2]/10 blur-[2px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full border-[44px] border-[#9266fd]/10 blur-[2px]" />

            <div className="relative grid min-h-[440px] sm:min-h-[500px] lg:min-h-0 lg:h-full md:grid-cols-[220px_minmax(0,1fr)] flex-1 min-h-0">
              <div className="flex items-center justify-center bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 shrink-0 md:h-full relative overflow-hidden">
                {/* Ambient pulsing aura behind number */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-[#1ec9f2]/30 via-[#0067b8]/20 to-[#9266fd]/25 blur-2xl pointer-events-none" />
                <div
                  data-solution-content
                  className={`relative z-10 flex h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 items-center justify-center rounded-full bg-gradient-to-br ${activeSolution.accent} text-4xl sm:text-5xl font-light text-white shadow-[0_20px_50px_rgba(30,201,242,0.4),0_0_30px_rgba(146,102,253,0.3)] ring-8 ring-white/10 ring-offset-4 ring-offset-[#070c1e]/60`}
                >
                  {activeSolution.number}
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 pb-14 overflow-y-auto" data-lenis-prevent>
                <p
                  data-solution-content
                  className="text-xs font-bold uppercase tracking-[0.2em] text-[#38d7f8]"
                >
                  Solution {activeSolution.number} of {String(solutions.length).padStart(2, "0")}
                </p>
                <h3
                  data-solution-content
                  style={{ fontWeight: 300 }}
                  className="mt-2 max-w-2xl text-xl font-light font-[300] !font-[300] uppercase leading-tight text-white sm:text-2xl lg:text-[1.75rem] tracking-tight"
                >
                  {activeSolution.title}
                </h3>
                <p
                  data-solution-content
                  className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-light"
                >
                  {activeSolution.description}
                </p>

                <ul data-solution-content className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {activeSolution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-200 font-light">
                      <span className="mt-0.5 flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full bg-[#1ec9f2]/15 border border-[#1ec9f2]/30 text-[#38d7f8]">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div data-solution-content className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={activeSolution.href}
                    className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,201,242,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(30,201,242,0.5)] hover:-translate-y-0.5"
                  >
                    Explore this solution
                    <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={selectPrevious}
                      aria-label="Previous solution"
                      className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-slate-200 transition-colors hover:border-[#1ec9f2]/60 hover:bg-white/15 hover:text-white"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={selectNext}
                      aria-label="Next solution"
                      className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#0067b8] to-[#1ec9f2] text-white shadow-[0_10px_25px_rgba(30,201,242,0.35)] transition-transform hover:scale-105"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {solutions.map((solution, index) => (
                <button
                  key={solution.number}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#1ec9f2] shadow-[0_0_12px_#1ec9f2]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
