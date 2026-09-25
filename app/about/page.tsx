"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Star } from "lucide-react"
import { getAboutData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"

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
    <main >
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
      <section className="section-padding bg-gradient-to-b from-brand-soft via-white to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">{hero.badge}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
              {hero.title} <span className="gradient-text">{hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                {companyOverview.title}
              </h2>
              <p className="text-lg text-muted mb-4 leading-relaxed">
                {companyOverview.description1}
              </p>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                {companyOverview.description2}
              </p>

              <div className="flex flex-wrap gap-4">
                {companyOverview.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    <span className="text-secondary">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 grid grid-cols-2 gap-4">
              {companyOverview.stats.map((stat, idx) => {
                const Icon = getIcon(stat.icon) || Star
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg transition-all group">
                    <Icon size={24} className="text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 p-8 rounded-2xl bg-white border border-border hover:border-accent transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                {(() => {
                  const Icon = getIcon(mission.icon) || Star
                  return <Icon size={28} className="text-primary" />
                })()}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                {mission.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {mission.description}
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 p-8 rounded-2xl bg-white border border-border hover:border-accent transition-colors">
              <div className="p-3 rounded-xl bg-accent/10 inline-block mb-4">
                {(() => {
                  const Icon = getIcon(vision.icon) || Star
                  return <Icon size={28} className="text-accent" />
                })()}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--accent)" }}>
                {vision.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">End-to-End Execution</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--primary)" }}>
              Complete Project Lifecycle
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 relative flex items-center gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg transition-all">
                    <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-accent flex-shrink-0 items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">Why Choose Brightnest</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              Built for Reliable Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = getIcon(value.icon) || Star
              return (
                <div
                  key={idx}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg group text-center"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="p-4 rounded-2xl bg-accent/10 inline-block mb-4 group-hover:bg-accent transition-colors">
                    <Icon size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="rounded-3xl p-6 sm:p-8 md:p-12 text-center" style={{ background: "var(--brand-gradient-dark)" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Partner With Us</h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-on-dark mb-6 sm:mb-8 max-w-2xl mx-auto">
              Engineering intelligent infrastructure for secure, connected, and high-performance organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg group"
              >
                Start Your Journey
                {(() => {
                  const ArrowRightIcon = getIcon("ArrowRight") || Star
                  return <ArrowRightIcon size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                })()}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
