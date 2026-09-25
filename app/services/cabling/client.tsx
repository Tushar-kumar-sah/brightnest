"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

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

const ServiceDetailTemplate = ({
  title,
  summary,
  overview,
  deliverables,
  subServices,
  engagementModel,
}: {
  title: string
  summary: string
  overview: string
  deliverables: string[]
  subServices: { name: string; description: string }[]
  engagementModel: { phase: string; description: string }[]
}) => (
  <main className="pt-24 px-4 md:px-6 lg:px-8">
    {/* Hero Section */}
    <section style={{ backgroundColor: "var(--primary)", color: "white" }} className="section-padding rounded-2xl md:rounded-3xl mb-6">
      <div className="section-container">
        <div className="reveal opacity-0 transition-opacity duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-brand-on-dark mb-8 max-w-2xl">{summary}</p>
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-background rounded-2xl md:rounded-3xl mb-6">
      <div className="section-container max-w-4xl">
        <div className="reveal opacity-0 transition-opacity duration-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            Overview
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">{overview}</p>
        </div>
      </div>
    </section>

    {/* Deliverables Section */}
    <section className="section-padding bg-white rounded-2xl md:rounded-3xl mb-6 border border-border">
      <div className="section-container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
          What We Deliver
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {deliverables.map((item, idx) => (
            <div key={idx} className="reveal opacity-0 transition-opacity duration-700 flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle size={24} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Components Section */}
    <section className="section-padding bg-background rounded-2xl md:rounded-3xl mb-6">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
          Service Components
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((service, idx) => (
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

    {/* Engagement Model Section */}
    <section className="section-padding bg-white rounded-2xl md:rounded-3xl mb-6 border border-border">
      <div className="section-container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
          Our Engagement Model
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {engagementModel.map((model, idx) => (
            <div
              key={idx}
              className="reveal opacity-0 transition-opacity duration-700 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-border hover:shadow-md transition-shadow"
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

    {/* CTA Section */}
    <section className="section-padding rounded-3xl m-2 sm:m-4 md:m-8 lg:m-12" style={{ backgroundColor: "var(--primary)" }}>
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Build a Future-Ready Backbone</h2>
        <p className="text-lg md:text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
          Let us design, certify, and optimize your structured cabling and fiber network for growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg gap-2 whitespace-nowrap"
          >
            Schedule Site Survey
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all gap-2 whitespace-nowrap"
          >
            View Other Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default function CablingClient() {
  useRevealOnScroll()

  return (
    <ServiceDetailTemplate
      title="Structured Cabling & Fiber"
      summary="High-performance cabling infrastructure with Cat6/6A and fiber optic solutions designed for future growth."
      overview="Our structured cabling solutions provide the foundation for reliable, scalable network infrastructure. We design and implement Cat6/Cat6A twisted pair and single-mode/multi-mode fiber solutions that support current and future bandwidth requirements. Every installation includes comprehensive testing and certification to ensure performance standards."
      deliverables={[
        "Cat6 and Cat6A twisted pair cabling",
        "Single-mode and multi-mode fiber installation",
        "Rack and patch panel infrastructure",
        "Cable testing and certification",
        "Campus-wide cabling solutions",
        "Documentation and labeling",
        "Future expansion planning",
        "Performance optimization",
      ]}
      subServices={[
        { name: "Cat6 Cabling", description: "Gigabit ethernet with 100m range capacity" },
        { name: "Cat6A Cabling", description: "Enhanced performance up to 500 MHz" },
        { name: "Single-Mode Fiber", description: "Long-distance transmission up to 100km" },
        {
          name: "Multi-Mode Fiber",
          description: "Short-range high-capacity solutions",
        },
        {
          name: "Rack & Patch Panels",
          description: "Structured rack, patching, and labeling",
        },
        { name: "Testing & Certification", description: "Fluke testing and documentation" },
      ]}
      engagementModel={[
        { phase: "Design", description: "Site survey, pathway planning, and bill of materials" },
        { phase: "Deploy", description: "Installation, termination, and certification" },
        { phase: "Document", description: "Labeling, as-built drawings, and test reports" },
        { phase: "Support", description: "Moves/adds/changes and SLA-backed support" },
      ]}
    />
  )
}
