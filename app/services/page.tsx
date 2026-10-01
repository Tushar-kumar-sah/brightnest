"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Phone, Sparkles, Layers } from "lucide-react"
import { getServicesData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-500/15 border border-slate-400/30 text-slate-200 shadow-[0_0_15px_rgba(148,163,184,0.15)] mb-6">
                <Layers size={14} className="text-slate-300" />
                Turnkey Technology Disciplines
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Comprehensive IT{" "}
                <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(203,213,225,0.3)]">
                  Solutions Portfolio
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300/75 leading-relaxed mb-8">
                From enterprise physical security systems to multi-gigabit networking, structured fiber, and smart AV boardroom architectures, we deliver end-to-end integration across all digital layers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-slate-100 to-white text-[#0a0c10] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all group"
                >
                  Book Site Survey
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-500/50 text-slate-200 font-semibold text-sm rounded-md hover:bg-slate-800/60 hover:border-slate-400 transition-all gap-2"
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
                    image: "/modern-tech-infrastructure-network.jpg",
                    title: "Multi-Gigabit Campus Networking",
                    caption: "High-performance enterprise switching, dynamic routing, and Wi-Fi 6E/7."
                  },
                  {
                    image: "/security-infrastructure.jpg",
                    title: "Physical Security & Low Voltage",
                    caption: "AI surveillance, access control, biometric verification, and BMS."
                  },
                  {
                    image: "/modern-conference-room.jpg",
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

      {/* Services Grid */}
      <section className="section-padding relative z-10 py-16 border-t border-slate-700/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {services.map((service, idx) => {
              const Icon = getIcon(service.icon as unknown as string) || Star
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group relative overflow-hidden rounded-md bg-[#11141b]/70 border border-slate-700/50 hover:border-slate-400/70 hover:shadow-[0_0_35px_rgba(148,163,184,0.2)] backdrop-blur-xl p-6 sm:p-8"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-md bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-300/70 mb-4 text-sm leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#181c25] border border-slate-700/60 text-xs text-slate-200"
                          >
                            <CheckCircle size={12} className="text-slate-400" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-slate-300 font-semibold text-xs tracking-wider uppercase group-hover:text-white transition-colors">
                        Explore Architecture Details <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Metallic hover sheen */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/5 via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding relative z-10 py-20 border-t border-slate-700/40 bg-[#0a0c10]/60 backdrop-blur-sm">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-slate-500/15 border border-slate-400/30 text-slate-200 mb-3">
              Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Engagement Process
            </h2>
            <p className="text-slate-300/70 text-base max-w-2xl mx-auto">
              A structured lifecycle methodology ensuring rigorous compliance, zero operational downtime, and on-time commissioning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", description: "Comprehensive site survey, audit, and requirement gathering" },
              { step: "02", title: "Design", description: "Standards-aligned solution architecture and detailed BOM" },
              { step: "03", title: "Deploy", description: "Certified engineering deployment, testing, and system commissioning" },
              { step: "04", title: "Support", description: "SLA-driven maintenance, 24×7 NOC monitoring, and AMC lifecycle" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md bg-[#11141b]/60 border border-slate-700/50 text-center hover:border-slate-500/70 hover:shadow-[0_0_25px_rgba(148,163,184,0.15)] backdrop-blur-xl transition-all"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-md bg-slate-500/15 border border-slate-500/30 text-slate-200 font-mono font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-slate-300/70 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className="rounded-md p-8 sm:p-12 md:p-14 text-center bg-gradient-to-r from-[#0e1017] via-[#1a1e29] to-[#0e1017] border border-slate-600/40 shadow-[0_0_50px_rgba(148,163,184,0.18)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-slate-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-zinc-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Need a Custom Infrastructure Sizing?
              </h2>
              <p className="text-base sm:text-lg text-slate-300/80 mb-8 leading-relaxed">
                Every enterprise ecosystem has distinct constraints. Schedule a consultation with our solutions architects to craft a tailored BOM and deployment roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-slate-100 to-white text-[#0a0c10] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all group"
                >
                  Get a Free Consultation
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500/50 text-slate-200 font-semibold text-sm rounded-md hover:bg-slate-800/60 hover:border-slate-400 transition-all gap-2"
                >
                  <Phone size={16} />
                  Call Our Engineers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
