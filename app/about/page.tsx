"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Star, ArrowRight, ShieldCheck, Zap, Globe, Clock, Target, Users } from "lucide-react"
import { getAboutData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip } from "@/components/ui"

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

  const overviewStats = companyOverview.stats.map((stat, idx) => {
    const Icon = getIcon(stat.icon) || Star
    const themeMap = [
      {
        accentText: "text-emerald-400",
        accentBg: "bg-emerald-500/15",
        accentBorder: "border-emerald-500/30",
        glowHover: "from-emerald-500/15 via-emerald-500/5 to-transparent",
        dotColor: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
      },
      {
        accentText: "text-cyan-400",
        accentBg: "bg-cyan-500/15",
        accentBorder: "border-cyan-500/30",
        glowHover: "from-cyan-500/15 via-cyan-500/5 to-transparent",
        dotColor: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
      },
      {
        accentText: "text-teal-400",
        accentBg: "bg-teal-500/15",
        accentBorder: "border-teal-500/30",
        glowHover: "from-teal-500/15 via-teal-500/5 to-transparent",
        dotColor: "bg-teal-400 shadow-[0_0_10px_#2dd4bf]",
      },
      {
        accentText: "text-amber-400",
        accentBg: "bg-amber-500/15",
        accentBorder: "border-amber-500/30",
        glowHover: "from-amber-500/15 via-amber-500/5 to-transparent",
        dotColor: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
      },
    ]
    const t = themeMap[idx % themeMap.length]
    return {
      value: stat.value,
      label: stat.label,
      subtext: (stat as { subtext?: string }).subtext || "Verified Enterprise Metric",
      icon: Icon,
      ...t,
    }
  })

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
                {hero.title} {hero.titleHighlight}
              </h1>
              <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed mb-8">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#02110c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.7)] hover:scale-[1.02] transition-all group text-center"
                >
                  Connect With Us
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 border border-emerald-400/40 text-emerald-200 font-semibold text-sm rounded-md hover:bg-emerald-500/10 hover:border-emerald-300 transition-all text-center"
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
                    image: "/female-business-consultant-smiling.jpg",
                    title: "Executive Leadership & Standards",
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
          <div className="max-w-4xl reveal opacity-0 translate-y-8 transition-all duration-700">
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

            <div className="mt-8 pt-6 border-y border-emerald-500/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6">
              {companyOverview.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center gap-3 py-1 group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-emerald-100 text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                  {idx < companyOverview.highlights.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-emerald-500/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <StatsTelemetryStrip
            stats={overviewStats}
            laserColorClass="via-emerald-400/60"
            className="mt-14"
          />
        </div>
      </section>

      {/* Mission & Vision — Open-Air Split Editorial Manifesto */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15">
        <div className="section-container">
          <div className="relative grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Central vertical laser divider on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent -translate-x-1/2 pointer-events-none" />

            {/* Mission */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative group pl-5 sm:pl-8 border-l-2 border-emerald-400/50 hover:border-emerald-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-[#02110c] shadow-[0_0_25px_rgba(52,211,153,0.4)] group-hover:scale-110 transition-transform">
                  {(() => {
                    const Icon = getIcon(mission.icon) || Target
                    return <Icon size={22} />
                  })()}
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400">
                  01 / CORE PURPOSE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                {mission.title}
              </h3>
              <p className="text-emerald-100/80 leading-relaxed text-base sm:text-lg font-light">
                {mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 relative group pl-5 sm:pl-8 border-l-2 border-teal-400/50 hover:border-teal-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-teal-300 to-cyan-500 flex items-center justify-center text-[#02110c] shadow-[0_0_25px_rgba(45,212,191,0.4)] group-hover:scale-110 transition-transform">
                  {(() => {
                    const Icon = getIcon(vision.icon) || Globe
                    return <Icon size={22} />
                  })()}
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-teal-300">
                  02 / FUTURE HORIZON
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                {vision.title}
              </h3>
              <p className="text-emerald-100/80 leading-relaxed text-base sm:text-lg font-light">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle — Open-Air Laser Spine Stream */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15 bg-[#02140e]/60 backdrop-blur-sm">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-4">
              <Zap size={14} className="text-emerald-400" />
              End-to-End Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Complete Project Lifecycle
            </h2>
            <p className="text-emerald-100/70 text-base max-w-2xl mx-auto mt-3 font-light">
              Disciplined seven-stage execution model ensuring zero operational disruption from site survey to continuous optimization.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Vertical laser spine */}
            <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/20 via-emerald-400 to-teal-500/20 shadow-[0_0_12px_rgba(52,211,153,0.7)] md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`reveal opacity-0 translate-y-8 transition-all duration-700 relative flex items-start md:items-center gap-6 md:gap-12 pl-14 md:pl-0 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  {/* Open-Air Milestone Content */}
                  <div className={`flex-1 group ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`inline-flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs tracking-[0.2em] uppercase mb-1.5 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>PHASE {item.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className={`mt-4 h-px w-24 bg-gradient-to-r from-emerald-400/50 to-transparent group-hover:w-40 transition-all duration-500 ${idx % 2 === 0 ? "md:ml-auto md:bg-gradient-to-l" : ""}`} />
                  </div>

                  {/* Glowing Circular Node */}
                  <div className="absolute left-0 md:static flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#02110c] border border-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.5)] flex-shrink-0 items-center justify-center z-10 font-mono text-xs font-bold text-emerald-300">
                    {item.year}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values — Open-Air 4-Column Architectural Strip */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/15">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-4">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built for Reliable Execution
            </h2>
            <p className="text-emerald-100/70 text-base max-w-2xl mx-auto font-light">
              Our engineering philosophy is anchored in long-term reliability, zero compromise on security, and transparent client accountability.
            </p>
          </div>

          <div className="pt-12 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 relative">
              {values.map((value, idx) => {
                const Icon = getIcon(value.icon) || Star
                return (
                  <div
                    key={idx}
                    className="reveal opacity-0 translate-y-8 transition-all duration-700 relative px-2 sm:px-6 py-2 group flex flex-col items-start"
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                    <div className="flex items-center justify-between w-full mb-5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-400/30 text-emerald-300 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400/60 tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-emerald-100/75 text-sm leading-relaxed font-light">
                      {value.description}
                    </p>

                    {idx < values.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-emerald-500/25 to-transparent pointer-events-none" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Open-Air Horizon Section */}
      <section className="section-padding relative z-10 py-20 border-t border-emerald-500/20 overflow-hidden">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready to Transform
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-white tracking-tight">
            Partner With Us
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 mb-9 leading-relaxed font-light">
            Engineering intelligent infrastructure for secure, connected, and high-performance organizations across India and globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#02110c] font-bold text-sm rounded-full shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.7)] hover:scale-[1.02] transition-all group"
            >
              Start Your Journey
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-emerald-400/40 text-emerald-200 font-semibold text-sm rounded-full hover:bg-emerald-500/10 hover:border-emerald-300 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
