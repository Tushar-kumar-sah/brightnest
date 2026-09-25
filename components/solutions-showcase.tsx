"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react"

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
      className="relative bg-[#f4f8fc] py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="section-container relative z-10">
        <div ref={headingRef} className="mb-6 lg:mb-8 text-center shrink-0">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-primary">
            {heading.eyebrow}
          </p>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            {heading.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {heading.subtitle}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8 items-stretch flex-1 min-h-0">
          <div
            ref={navigationRef}
            data-lenis-prevent
            className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-y-auto lg:max-h-[480px] lg:pb-0 pr-1"
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
                  className={`group flex min-w-[240px] items-center gap-3 rounded-xl border p-2 lg:p-2.5 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? "border-brand-cyan bg-white shadow-[0_18px_45px_-28px_rgba(3,105,161,0.65)]"
                      : "border-brand-border/80 bg-white/65 hover:border-brand-cyan/70 hover:bg-white"
                  }`}
                >
                  <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br ${solution.accent} text-xs font-bold text-white shadow-md`}>
                    {solution.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-xs lg:text-sm font-bold leading-tight ${
                      isActive ? "text-primary" : "text-slate-800"
                    }`}>
                      {solution.title}
                    </span>
                  </span>
                  <ChevronRight
                    size={16}
                    className={`flex-none transition-transform ${
                      isActive ? "translate-x-1 text-brand-cyan" : "text-slate-400 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div
            ref={panelRef}
            className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-0 lg:h-[480px] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_80px_-38px_rgba(15,23,42,0.48)] flex flex-col"
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-[2rem] bg-gradient-to-r ${activeSolution.accent}`} />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[44px] border-brand-cyan/10" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full border-[44px] border-brand-blue/10" />

            <div className="relative grid min-h-[420px] sm:min-h-[480px] lg:min-h-0 lg:h-full md:grid-cols-[200px_minmax(0,1fr)] flex-1 min-h-0">
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-brand-soft p-6 md:p-8 shrink-0 md:h-full">
                <div
                  data-solution-content
                  className={`flex h-20 w-20 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-br ${activeSolution.accent} text-4xl font-light text-white shadow-[0_24px_50px_-20px_rgba(2,132,199,0.65)] ring-8 ring-white md:h-36 md:w-36 md:text-5xl`}
                >
                  {activeSolution.number}
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 pb-14 overflow-y-auto" data-lenis-prevent>
                <p
                  data-solution-content
                  className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan"
                >
                  Solution {activeSolution.number} of {String(solutions.length).padStart(2, "0")}
                </p>
                <h3
                  data-solution-content
                  className="mt-2 max-w-2xl text-xl font-bold uppercase leading-tight text-slate-950 sm:text-2xl"
                >
                  {activeSolution.title}
                </h3>
                <p
                  data-solution-content
                  className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600"
                >
                  {activeSolution.description}
                </p>

                <ul data-solution-content className="mt-5 grid gap-2 sm:grid-cols-2">
                  {activeSolution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                      <span className="mt-0.5 flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full bg-brand-cyan/12 text-brand-cyan">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div data-solution-content className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={activeSolution.href}
                    className="group inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-blue"
                  >
                    Explore this solution
                    <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={selectPrevious}
                      aria-label="Previous solution"
                      className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-brand-border bg-white text-primary transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={selectNext}
                      aria-label="Next solution"
                      className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-brand-cyan text-white transition-transform hover:scale-105"
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
                    index === activeIndex ? "w-8 bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.5)]" : "w-2 bg-slate-200 hover:bg-slate-300"
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
