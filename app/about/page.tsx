"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Star, ArrowRight, ShieldCheck, Zap, Globe, Clock, Target, Users } from "lucide-react"
import { getAboutData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"

// Reveal hook
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

export default function About() {
  useRevealOnScroll()

  const {
    hero,
    companyOverview,
    mission,
    vision,
    timeline,
    values,
  } = getAboutData()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#02110c] via-[#051c14] to-[#010906] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Specular top border streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Brightnest Edutainment Pvt Ltd",
            "description": hero.description,
            "slogan": "Engineering Intelligent Infrastructure. Globally."
          }
        }}
        id="about-schema"
      />

      {/* Hero */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {hero.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.35)]">
                  {hero.titleHighlight}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed mb-8">
                {hero.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#02110c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.7)] hover:scale-[1.02] transition-all group"
                >
                  Connect With Us
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-emerald-400/40 text-emerald-200 font-semibold text-sm rounded-md hover:bg-emerald-500/10 hover:border-emerald-300 transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/gcc-enterprise-engineer.jpg",
                    title: "Enterprise Systems Engineering",
                    caption: "Pan-India turnkey solutions and mission-critical deployment standards."
                  },
                  {
                    image: "/modern-tech-infrastructure-network.jpg",
                    title: "Standards-Aligned Infrastructure",
                    caption: "ISO, TIA, and NFPA compliant passive and active digital architectures."
                  },
                  {
                    image: "/datacenter-infrastructure-engineer.jpg",
                    title: "Dedicated SLA Operations",
                    caption: "24×7 disciplined execution and rapid fault resolution."
                  }
                ]}
                accentColor="#34d399"
                borderColor="border-emerald-500/30"
                glowShadow="shadow-[0_0_35px_rgba(16,185,129,0.25)]"
                activeDotClass="bg-emerald-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding relative z-10 py-16 border-t border-emerald-500/15 bg-[#02140e]/50 backdrop-blur-sm">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                <ShieldCheck size={16} />
                Global Delivery Standards
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {companyOverview.title}
              </h2>
              <p className="text-base sm:text-lg text-emerald-100/80 mb-4 leading-relaxed">
                {companyOverview.description1}
              </p>
              <p className="text-base sm:text-lg text-emerald-100/70 mb-8 leading-relaxed">
                {companyOverview.description2}
              </p>

              <div className="flex flex-wrap gap-3">
                {companyOverview.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#052117]/80 border border-emerald-500/25 text-emerald-200 text-sm font-medium shadow-xs hover:border-emerald-400/50 transition-colors"
                  >
                    <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 grid grid-cols-2 gap-4">
              {companyOverview.stats.map((stat, idx) => {
                const Icon = getIcon(stat.icon) || Star
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-md bg-[#051f16]/70 border border-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/25 transition-all">
                      <Icon size={20} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 group-hover:text-emerald-300 tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs uppercase font-medium tracking-wider text-emerald-200/70">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 p-8 rounded-md bg-[#051f16]/60 border border-emerald-500/20 hover:border-emerald-400/50 backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
              <div className="p-3.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 inline-flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-105 transition-transform">
                {(() => {
                  const Icon = getIcon(mission.icon) || Target
                  return <Icon size={26} />
                })()}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {mission.title}
              </h3>
              <p className="text-emerald-100/75 leading-relaxed text-base">
                {mission.description}
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 p-8 rounded-md bg-[#051f16]/60 border border-teal-500/20 hover:border-teal-400/50 backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] group">
              <div className="p-3.5 rounded-md bg-teal-500/15 border border-teal-500/30 inline-flex items-center justify-center mb-5 text-teal-300 group-hover:scale-105 transition-transform">
                {(() => {
                  const Icon = getIcon(vision.icon) || Globe
                  return <Icon size={26} />
                })()}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {vision.title}
              </h3>
              <p className="text-emerald-100/75 leading-relaxed text-base">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15 bg-[#02140e]/60 backdrop-blur-sm">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-4">
              <Zap size={14} className="text-emerald-400" />
              End-to-End Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Complete Project Lifecycle
            </h2>
            <p className="text-emerald-100/70 text-base max-w-2xl mx-auto mt-3">
              Disciplined seven-stage execution model ensuring zero operational disruption from site survey to continuous optimization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline center laser line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 shadow-[0_0_12px_rgba(52,211,153,0.8)] -translate-x-1/2" />

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 relative flex items-center gap-8 mb-10 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 rounded-md bg-[#051f16]/70 border border-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] backdrop-blur-xl transition-all duration-300 group">
                    <div className="text-emerald-400 font-mono font-bold text-sm tracking-widest mb-1">
                      PHASE {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-100/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#02110c] border-2 border-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)] flex-shrink-0 items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-4">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built for Reliable Execution
            </h2>
            <p className="text-emerald-100/70 text-base max-w-2xl mx-auto">
              Our engineering philosophy is anchored in long-term reliability, zero compromise on security, and transparent client accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = getIcon(value.icon) || Star
              return (
                <div
                  key={idx}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md bg-[#051f16]/60 border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.18)] backdrop-blur-xl group text-center transition-all duration-300"
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div className="p-3.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/50 group-hover:scale-110 transition-all inline-flex items-center justify-center mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-emerald-100/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className="rounded-md p-8 sm:p-12 md:p-14 text-center bg-gradient-to-r from-[#031d13] via-[#073424] to-[#031d13] border border-emerald-500/35 shadow-[0_0_50px_rgba(16,185,129,0.18)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/15 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-teal-500/15 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
                Partner With Us
              </h2>
              <p className="text-base sm:text-lg text-emerald-100/80 mb-8 leading-relaxed">
                Engineering intelligent infrastructure for secure, connected, and high-performance organizations across India and globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#02110c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.7)] hover:scale-[1.02] transition-all group"
                >
                  Start Your Journey
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-emerald-400/40 text-emerald-200 font-semibold text-sm rounded-md hover:bg-emerald-500/10 hover:border-emerald-300 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
