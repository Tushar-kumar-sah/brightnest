"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Factory, Shield, ArrowRight, CheckCircle, Globe, Sparkles } from "lucide-react"
import { getCaseStudiesData } from "@/lib/data"
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
                Real-World Impact.{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(37,99,235,0.35)]">
                  Delivered.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-blue-100/75 leading-relaxed mb-8">
                Explore how Brightnest architects resilient, standards-compliant, and high-performance infrastructure for leading enterprises, campuses, and mission-critical facilities across India.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-500 to-sky-400 text-[#020b1c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-[1.02] transition-all"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-blue-400/40 text-blue-200 font-semibold text-sm rounded-md hover:bg-blue-500/10 hover:border-blue-300 transition-all gap-2"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/data-center-infrastructure.jpg",
                    title: "High-Density Fiber Backbones",
                    caption: "Dual-core architectures delivering 99.99% operational uptime for finance."
                  },
                  {
                    image: "/security-infrastructure.jpg",
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
      <section className="section-padding relative z-10 py-16 border-t border-blue-500/15 bg-[#050f24]/50 backdrop-blur-sm">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Projects Delivered", value: "500+", icon: CheckCircle },
              { label: "Industries Served", value: "10+", icon: Globe },
              { label: "Deployment Regions", value: "15+", icon: Building2 },
              { label: "Avg SLA Response", value: "< 30 mins", icon: Shield },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md bg-[#091b40]/60 border border-blue-500/20 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] backdrop-blur-xl transition-all duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-400">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs uppercase font-medium tracking-wider text-blue-200/70">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-blue-400 tracking-tight">{stat.value}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="section-padding relative z-10 py-20 border-t border-blue-500/15">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-3">
              Deployments Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Featured Case Studies
            </h2>
            <p className="text-blue-100/70 text-base max-w-2xl mx-auto">
              Real engineering solutions delivered across enterprise networking, physical security, structured cabling, smart AV, and telecom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((item, idx) => (
              <article
                key={item.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-md overflow-hidden border border-blue-500/20 bg-[#091c44]/65 hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(37,99,235,0.22)] backdrop-blur-xl transition-all duration-300 flex flex-col group"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091c44] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-semibold bg-[#03091a]/85 border border-blue-400/40 text-blue-200 backdrop-blur-md">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-blue-200/70">
                    <Factory size={14} className="text-blue-400" />
                    <span>{item.client}</span>
                    <span className="text-blue-500">•</span>
                    <span>{item.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-blue-100/70 leading-relaxed flex-1">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#040e24] border border-blue-500/25 text-blue-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-3 border-t border-blue-500/15">
                    {item.results.map((result) => (
                      <div key={result} className="flex items-start gap-2.5 text-xs text-blue-100/80">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-blue-400 shadow-[0_0_6px_rgba(56,189,248,0.8)] flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className="rounded-md p-8 sm:p-12 md:p-14 text-center bg-gradient-to-r from-[#04122d] via-[#09255a] to-[#04122d] border border-blue-500/35 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/15 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-sky-500/15 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Ready for Your Own Success Story?
              </h2>
              <p className="text-base sm:text-lg text-blue-100/80 mb-8 leading-relaxed">
                Tell us about your networking, surveillance, AV, or cabling modernization goals. We will design an end-to-end blueprint tailored to your operational SLA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-500 to-sky-400 text-[#020b1c] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:scale-[1.02] transition-all"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-blue-400/40 text-blue-200 font-semibold text-sm rounded-md hover:bg-blue-500/10 hover:border-blue-300 transition-all gap-2"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
