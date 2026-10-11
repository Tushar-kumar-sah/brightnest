"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Factory, Shield, ArrowRight, CheckCircle, Globe, Sparkles } from "lucide-react"
import { getCaseStudiesData } from "@/lib/data"
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
      { threshold: 0.15 },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function CaseStudies() {
  useRevealOnScroll()
  const caseStudies = getCaseStudiesData()

  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies | Brightnest Edutainment",
    "description": "Real-world impact and turnkey IT infrastructure success stories delivered by Brightnest Edutainment.",
    "publisher": {
      "@type": "Organization",
      "name": "Brightnest Edutainment Pvt Ltd",
      "url": "https://brightnestedu.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((study, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": study.title,
        "description": study.description,
        "headline": study.title,
        "alternativeHeadline": study.client,
        "about": study.category,
        "provider": {
          "@type": "Organization",
          "name": "Brightnest Edutainment Pvt Ltd"
        }
      }))
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#03091a] via-[#081738] to-[#02050f] text-white relative overflow-hidden">
      {/* Sapphire ambient glow orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Specular sapphire top border streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <StructuredData data={caseStudiesSchema} id="case-studies-schema" />

      {/* Hero */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.2)] mb-6">
                <Sparkles size={14} className="text-blue-400" />
                Proven Enterprise Track Record
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Real-World Impact. Delivered.
              </h1>
              <p className="text-base sm:text-lg text-blue-100/75 leading-relaxed mb-8">
                Explore how Brightnest architects resilient, standards-compliant, and high-performance infrastructure for leading enterprises, campuses, and mission-critical facilities across India.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-blue-500 to-sky-400 text-[#020b1c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-[1.02] transition-all text-center"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 border border-blue-400/40 text-blue-200 font-semibold text-sm rounded-md hover:bg-blue-500/10 hover:border-blue-300 transition-all gap-2 text-center"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/datacenter-infrastructure-engineer.jpg",
                    title: "High-Density Fiber Backbones",
                    caption: "Dual-core architectures delivering 99.99% operational uptime for finance."
                  },
                  {
                    image: "/indian-security-specialist.jpg",
                    title: "Campus Security Modernization",
                    caption: "Over 800 CCTV cameras and multi-door biometric access control."
                  },
                  {
                    image: "/manufacturing-industrial-engineer.jpg",
                    title: "Industrial Automation & Power",
                    caption: "Smart lighting, ruggedized Wi-Fi, and zero-downtime logistics connectivity."
                  }
                ]}
                accentColor="#38bdf8"
                borderColor="border-blue-500/30"
                glowShadow="shadow-[0_0_35px_rgba(37,99,235,0.25)]"
                activeDotClass="bg-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="section-padding relative z-10 py-14 bg-[#050f24]/50 backdrop-blur-sm">
        <div className="section-container">
          <StatsTelemetryStrip
            stats={[
              {
                label: "Projects Delivered",
                value: "500+",
                subtext: "Enterprise & Campus Scale",
                icon: CheckCircle,
              },
              {
                label: "Industries Served",
                value: "10+",
                subtext: "Mission-Critical Verticals",
                icon: Globe,
              },
              {
                label: "Deployment Regions",
                value: "15+",
                subtext: "Pan-India Field Presence",
                icon: Building2,
              },
              {
                label: "Avg SLA Response",
                value: "< 30 mins",
                subtext: "Rapid Engineering Dispatch",
                icon: Shield,
              },
            ]}
            laserColorClass="via-blue-400/60"
          />
        </div>
      </section>

      {/* Case Studies — Open-Air Alternating Editorial Ledger */}
      <section className="section-padding relative z-10 py-20 border-t border-blue-500/15">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-blue-300 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                Deployments Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Featured Case Studies
              </h2>
            </div>
            <p className="text-blue-100/70 text-sm sm:text-base max-w-md md:text-right font-light">
              Real engineering solutions delivered across enterprise networking, physical security, structured cabling, smart AV, and telecom.
            </p>
          </div>

          <div className="divide-y divide-blue-500/15 border-t border-b border-blue-500/15">
            {caseStudies.map((item, idx) => {
              const isEven = idx % 2 === 1
              return (
                <article
                  key={item.title}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 py-12 sm:py-16 group relative"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  {/* Hover ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-sky-400/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Showcase Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : ""}`}>
                      <div className="relative overflow-hidden">
                        {/* Architectural Corner Accents */}
                        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-sky-400 z-20 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-sky-400 z-20 pointer-events-none" />

                        <div className="relative h-56 sm:h-64 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#03091a] via-[#03091a]/25 to-transparent" />

                          {/* Floating Category & Index Tag */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-sky-300 bg-[#03091a]/85 backdrop-blur-md px-3 py-1 border-l-2 border-sky-400">
                              {item.category}
                            </span>
                            <span className="text-xs font-mono font-bold text-white/80 bg-[#03091a]/80 backdrop-blur-md px-2.5 py-1">
                              CASE {String(idx + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {/* Bottom laser sweep */}
                        <div className="h-[2px] w-full bg-blue-500/20 relative overflow-hidden">
                          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-400 to-sky-300 group-hover:w-full transition-all duration-700" />
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-blue-300/80">
                        <span className="inline-flex items-center gap-1.5 text-sky-300 font-semibold">
                          <Factory size={14} className="text-sky-400" />
                          {item.client}
                        </span>
                        <span className="text-blue-400/50">/</span>
                        <span>{item.industry}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-blue-100/75 leading-relaxed border-l-2 border-blue-400/40 pl-4 font-light">
                        {item.description}
                      </p>

                      {/* Inline Architectural Stack */}
                      <div className="flex flex-wrap items-center gap-y-2 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-300/60 mr-3">
                          Architecture:
                        </span>
                        {item.services.map((service, sIdx) => (
                          <span key={service} className="inline-flex items-center text-xs font-semibold text-blue-200">
                            {service}
                            {sIdx < item.services.length - 1 && (
                              <span className="mx-2.5 text-sky-400/60">•</span>
                            )}
                          </span>
                        ))}
                      </div>

                      {/* Open-Air Delivered Outcomes Strip */}
                      <div className="grid sm:grid-cols-3 gap-4 pt-5 border-t border-blue-500/15">
                        {item.results.map((result, rIdx) => (
                          <div
                            key={result}
                            className="flex items-start gap-2.5 text-xs text-blue-100/85 sm:border-l sm:first:border-l-0 border-blue-500/15 sm:pl-4 sm:first:pl-0"
                          >
                            <span className="text-[10px] font-mono font-bold text-sky-400 mt-0.5 flex-shrink-0">
                              0{rIdx + 1}
                            </span>
                            <span className="leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open-Air Horizon CTA */}
      <section className="section-padding relative z-10 py-20 pb-28 border-t border-blue-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.14),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-[1px] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.8)]" />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            Next Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 mb-10 leading-relaxed font-light">
            Tell us about your networking, surveillance, AV, or cabling modernization goals. We will design an end-to-end blueprint tailored to your operational SLA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-400 text-[#020b1c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-[1.02] transition-all text-center"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-b border-blue-400/50 text-blue-200 font-semibold text-sm hover:text-white hover:border-sky-300 transition-all gap-2 text-center"
            >
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
