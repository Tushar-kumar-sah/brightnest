"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Phone, Sparkles, Layers, ShieldCheck, Clock } from "lucide-react"
import { getServicesData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip } from "@/components/ui"

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

export default function Services() {
  useRevealOnScroll()

  const services = getServicesData()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#08090d] via-[#12151c] to-[#06070a] text-white relative overflow-hidden">
      {/* Titanium slate ambient glow orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-slate-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-zinc-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Specular titanium top border streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent" />

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Our Services",
          "description": "Comprehensive IT infrastructure solutions including security, networking, and AV integration.",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://brightnestedu.com${service.href}`,
              "name": service.name
            }))
          }
        }}
        id="services-collection-schema"
      />

      {/* Hero */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-500/15 border border-slate-400/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
                <Layers size={14} className="text-white" />
                Turnkey Technology Disciplines
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Comprehensive IT Solutions Portfolio
              </h1>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-8 font-light">
                From enterprise physical security systems to multi-gigabit networking, structured fiber, and smart AV boardroom architectures, we deliver end-to-end integration across all digital layers.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all group text-center"
                >
                  Book Site Survey
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-slate-800/60 hover:border-slate-400 transition-all gap-2 text-center"
                >
                  <Phone size={16} />
                  Speak to Architect
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/indian-network-noc-engineer.jpg",
                    title: "Multi-Gigabit Campus Networking",
                    caption: "High-performance enterprise switching, dynamic routing, and Wi-Fi 6E/7."
                  },
                  {
                    image: "/indian-security-specialist.jpg",
                    title: "Physical Security & Low Voltage",
                    caption: "AI surveillance, access control, biometric verification, and BMS."
                  },
                  {
                    image: "/indian-smart-boardroom.jpg",
                    title: "Intelligent Boardroom AV",
                    caption: "Microsoft Teams and Zoom Rooms with 4K video walls and pro acoustics."
                  }
                ]}
                accentColor="#94a3b8"
                borderColor="border-slate-500/30"
                glowShadow="shadow-[0_0_35px_rgba(148,163,184,0.25)]"
                activeDotClass="bg-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Telemetry Strip */}
      <section className="section-padding relative z-10 py-14 bg-[#0a0c10]/60 backdrop-blur-sm">
        <div className="section-container">
          <StatsTelemetryStrip
            stats={[
              {
                label: "Core IT Disciplines",
                value: "12+",
                subtext: "End-to-End Turnkey Stack",
                icon: Layers,
              },
              {
                label: "Projects Delivered",
                value: "500+",
                subtext: "Enterprise & Campus Scale",
                icon: CheckCircle,
              },
              {
                label: "Guaranteed Uptime",
                value: "99.9%",
                subtext: "SLA-Backed Reliability",
                icon: ShieldCheck,
              },
              {
                label: "Managed Support",
                value: "24/7",
                subtext: "NOC & Rapid Field Dispatch",
                icon: Clock,
              },
            ]}
            laserColorClass="via-slate-300/60"
          />
        </div>
      </section>

      {/* Services — Open-Air Architectural Index Ledger */}
      <section className="section-padding relative z-10 py-16 border-t border-slate-700/40">
        <div className="section-container">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((service, idx) => {
              const Icon = getIcon(service.icon as unknown as string) || Star
              const num = String(idx + 1).padStart(2, "0")
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group relative block py-8 sm:py-10 px-2 sm:px-6 overflow-hidden"
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {/* Ambient radial hover bloom */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(255,255,255,0.04),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Bottom laser sweep on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1ec9f2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                    {/* Left: Number + Floating Sphere Icon + Name */}
                    <div className="lg:col-span-4 flex items-center gap-4 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-white/40 group-hover:text-[#1ec9f2] transition-colors w-6">
                        {num}
                      </span>
                      <div
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#1ec9f2] transition-colors leading-snug">
                        {service.name}
                      </h3>
                    </div>

                    {/* Center: Description + Open-Air Feature Stream */}
                    <div className="lg:col-span-6 space-y-3 lg:border-l lg:border-white/10 lg:pl-8">
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 text-xs text-white/90 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1ec9f2] shadow-[0_0_8px_#1ec9f2]" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Action Link */}
                    <div className="lg:col-span-2 flex lg:justify-end">
                      <span className="inline-flex items-center text-white font-semibold text-xs tracking-wider uppercase group-hover:text-[#1ec9f2] transition-colors">
                        Explore
                        <ArrowRight size={15} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview — Open-Air Laser Track & Floating Spheres */}
      <section className="section-padding relative z-10 py-20 border-t border-slate-700/40 bg-[#0a0c10]/60 backdrop-blur-sm">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-500/15 border border-slate-400/30 text-white mb-3">
              Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Engagement Process
            </h2>
            <p className="text-white text-base max-w-2xl mx-auto font-light">
              A structured lifecycle methodology ensuring rigorous compliance, zero operational downtime, and on-time commissioning.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal connecting laser line on desktop */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#1ec9f2]/60 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative">
              {[
                { step: "01", title: "Discover", description: "Comprehensive site survey, audit, and requirement gathering" },
                { step: "02", title: "Design", description: "Standards-aligned solution architecture and detailed BOM" },
                { step: "03", title: "Deploy", description: "Certified engineering deployment, testing, and system commissioning" },
                { step: "04", title: "Support", description: "SLA-driven maintenance, 24×7 NOC monitoring, and AMC lifecycle" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 relative flex flex-col items-center text-center group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative mb-5">
                    <div className="absolute -inset-2 rounded-full border border-dashed border-white/25 group-hover:border-[#1ec9f2] group-hover:rotate-45 transition-all duration-500" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0067b8] via-[#0b1b3d] to-[#1ec9f2] text-white font-mono font-extrabold text-xl flex items-center justify-center shadow-[0_0_30px_rgba(30,201,242,0.3)] group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#1ec9f2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light max-w-[220px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Open-Air Horizon Section */}
      <section className="section-padding relative z-10 py-20 border-t border-white/15 overflow-hidden">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#1ec9f2]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(30,201,242,0.10),transparent)] pointer-events-none" />

        <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#1ec9f2] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1ec9f2] animate-pulse" />
            Custom Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Need a Custom Infrastructure Sizing?
          </h2>
          <p className="text-base sm:text-lg text-white/85 mb-9 leading-relaxed font-light">
            Every enterprise ecosystem has distinct constraints. Schedule a consultation with our solutions architects to craft a tailored BOM and deployment roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm rounded-full shadow-[0_0_25px_rgba(30,201,242,0.35)] hover:shadow-[0_0_35px_rgba(30,201,242,0.6)] hover:scale-[1.02] transition-all group text-center"
            >
              Get a Free Consultation
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919366355026"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-white/25 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-all gap-2 text-center"
            >
              <Phone size={16} />
              Call Our Engineers
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
