"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight, ShieldCheck, Sparkles, Layers, Phone } from "lucide-react"
import HeroImageSlider, { SlideItem } from "@/components/ui/HeroImageSlider"

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

  const heroSlides: SlideItem[] = slides && slides.length > 0 ? slides : [
    {
      image: "/modern-tech-infrastructure-network.jpg",
      title: "Standards-Aligned Engineering",
      caption: "Enterprise-grade deployment with full compliance and SLA monitoring."
    },
    {
      image: "/data-center-infrastructure.jpg",
      title: "Mission-Critical Operations",
      caption: "High-density passive and active components built for maximum uptime."
    },
    {
      image: "/gcc-enterprise-engineer.jpg",
      title: "Certified Project Delivery",
      caption: "Experienced engineers executing turnkey integration pan-India."
    }
  ]

  return (
    <main className={`min-h-screen bg-gradient-to-b ${theme.bgGradient} text-white relative overflow-hidden`}>
      {/* Themed ambient glow orbs */}
      <div className={`absolute top-0 right-1/4 w-[600px] h-[600px] ${theme.glowOrb1} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute top-1/3 -left-32 w-[550px] h-[550px] ${theme.glowOrb2} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-0 w-[500px] h-[500px] ${theme.glowOrb1} rounded-full blur-[150px] pointer-events-none`} />

      {/* Top hairline specular streak */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${theme.laserStreak} to-transparent`} />

      {/* Hero Banner with 3-Image Slider */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} shadow-xs mb-6`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Enterprise Service Discipline
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                <span className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]`}>
                  {title}
                </span>
              </h1>
              <p className={`text-base sm:text-lg ${theme.subtextColor} leading-relaxed mb-8`}>
                {summary}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-8 py-3.5 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all gap-2`}
                >
                  Schedule Site Survey <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all"
                >
                  All Services
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

      {/* Overview Section */}
      <section className={`section-padding relative z-10 py-16 border-t ${theme.cardBorder} bg-black/20 backdrop-blur-sm`}>
        <div className="section-container max-w-4xl">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 p-8 sm:p-10 rounded-md bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.textHighlight} mb-3`}>
              <ShieldCheck size={16} />
              Architecture Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Engineering Excellence & Strategic Integration
            </h2>
            <p className={`text-base sm:text-lg ${theme.subtextColor} leading-relaxed`}>
              {overview}
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className={`section-padding relative z-10 py-16 border-t ${theme.cardBorder}`}>
        <div className="section-container max-w-5xl">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} mb-3`}>
              <Sparkles size={14} />
              Project Scope
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              What We Deliver
            </h2>
            <p className={`text-sm ${theme.subtextColor} mt-2`}>
              Standards-compliant deliverables and turnkey commissioning deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-3.5 p-4 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardShadowHover} backdrop-blur-xl group`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className={`p-1.5 rounded-md ${theme.badgeBg} ${theme.textHighlight} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  <CheckCircle size={18} />
                </div>
                <span className={`text-sm font-medium ${theme.subtextColor} group-hover:text-white transition-colors`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className={`section-padding relative z-10 py-20 border-t ${theme.cardBorder} bg-black/25 backdrop-blur-sm`}>
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} mb-3`}>
              <Layers size={14} />
              Technical Disciplines
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Service Components
            </h2>
            <p className={`text-base ${theme.subtextColor} max-w-2xl mx-auto`}>
              Specialized component modules engineered for high availability and seamless interoperability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((service, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardShadowHover} backdrop-blur-xl transition-all duration-300 group`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className={`w-8 h-1 bg-current ${theme.textHighlight} rounded-full mb-4 opacity-80 group-hover:w-14 transition-all`} />
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
                  {service.name}
                </h3>
                <p className={`text-xs sm:text-sm ${theme.subtextColor} leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Use Cases (if provided) */}
      {useCases && useCases.length > 0 && (
        <section className={`section-padding relative z-10 py-16 border-t ${theme.cardBorder}`}>
          <div className="section-container max-w-4xl">
            <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Deployment Scenarios & Industry Use Cases
              </h2>
              <p className={`text-sm ${theme.subtextColor}`}>
                Engineered for complex enterprise, industrial, healthcare, and educational environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className={`reveal opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-3 p-4 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} backdrop-blur-xl`}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  <div className={`w-2 h-2 rounded-full ${theme.buttonGradient} shadow-xs mt-2 flex-shrink-0`} />
                  <span className={`text-sm ${theme.subtextColor}`}>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Engagement Model */}
      <section className={`section-padding relative z-10 py-20 border-t ${theme.cardBorder} bg-black/20 backdrop-blur-sm`}>
        <div className="section-container max-w-4xl">
          <div className="text-center mb-14 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} mb-3`}>
              Lifecycle Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Engagement Model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {engagementModel.map((model, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardShadowHover} backdrop-blur-xl transition-all group`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`text-xs font-mono font-bold tracking-widest uppercase ${theme.textHighlight} mb-1.5`}>
                  STAGE 0{idx + 1}
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
                  {model.phase}
                </h3>
                <p className={`text-xs sm:text-sm ${theme.subtextColor} leading-relaxed`}>
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className={`rounded-md p-8 sm:p-12 md:p-14 text-center bg-black/40 border ${theme.cardBorder} ${theme.cardShadowHover} relative overflow-hidden backdrop-blur-xl`}>
            <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full ${theme.glowOrb1} blur-[80px] pointer-events-none`} />
            <div className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full ${theme.glowOrb2} blur-[80px] pointer-events-none`} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Ready to Architect Your Solution?
              </h2>
              <p className={`text-base sm:text-lg ${theme.subtextColor} mb-8 leading-relaxed`}>
                Connect with our certified systems engineers to evaluate your site, calculate capacity, and receive an itemized proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-8 py-3.5 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all`}
                >
                  Schedule Site Survey
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/25 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all gap-2"
                >
                  <Phone size={16} />
                  (+91) 93663 55026
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
