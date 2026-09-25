"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

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

export default function LightingClient() {
  useRevealOnScroll()

  return (
    <main >
      <section style={{ backgroundColor: "var(--primary)", color: "white" }} className="section-padding">
        <div className="section-container">
          <div className="reveal opacity-0 transition-opacity duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">LED Lighting & Electrical Solutions</h1>
            <p className="text-xl text-brand-on-dark mb-8 max-w-2xl">
              Commercial and industrial LED lighting with integrated power infrastructure and smart controls.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            Overview
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Modernize your facility with energy-efficient LED lighting solutions. We design and deploy commercial and
            industrial LED systems with integrated power infrastructure, smart controls, and automation that reduce
            energy consumption while improving visibility and safety.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            What We Deliver
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Commercial LED lighting design and installation",
              "Industrial area and flood lighting",
              "Road and perimeter lighting solutions",
              "Power infrastructure and distribution",
              "Smart lighting controls and automation",
              "Energy efficiency optimization",
              "Emergency and backup lighting systems",
              "Maintenance and upgrade services",
            ].map((item, idx) => (
              <div key={idx} className="reveal opacity-0 transition-opacity duration-700 flex gap-3">
                <CheckCircle size={24} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span className="text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
            Service Components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Commercial Lighting",
                description: "Office, retail, and facility LED solutions",
              },
              {
                name: "Industrial Lighting",
                description: "High-bay and manufacturing area lighting",
              },
              {
                name: "Outdoor Lighting",
                description: "Road, perimeter, and landscape lighting",
              },
              { name: "Power Distribution", description: "Panels, cabling, and safety systems" },
              { name: "Smart Controls", description: "Sensors, timers, and building automation" },
              { name: "Energy Audits", description: "Efficiency studies and retrofit planning" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="reveal opacity-0 transition-opacity duration-700 service-card"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  {service.name}
                </h3>
                <p className="text-muted text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Our Engagement Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Audit", description: "Lighting and power assessment with ROI modeling" },
              { phase: "Design", description: "Lux-level planning and control strategy" },
              { phase: "Deploy", description: "Installation, commissioning, and training" },
              { phase: "Support", description: "Maintenance, upgrades, and AMC" },
            ].map((model, idx) => (
              <div
                key={idx}
                className="reveal opacity-0 transition-opacity duration-700 p-6 rounded-lg bg-white border border-border"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                  {model.phase}
                </h3>
                <p className="text-muted text-sm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding rounded-3xl m-2 sm:m-4 md:m-8 lg:m-12" style={{ backgroundColor: "var(--primary)" }}>
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Illuminate Smarter</h2>
          <p className="text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
            Partner with us to design efficient, safe, and intelligent lighting and electrical systems.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Lighting Audit
          </Link>
        </div>
      </section>
    </main>
  )
}
