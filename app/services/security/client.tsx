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
  useCases,
  engagementModel,
}: {
  title: string
  summary: string
  overview: string
  deliverables: string[]
  subServices: { name: string; description: string }[]
  useCases: string[]
  engagementModel: { phase: string; description: string }[]
}) => (
  <main >
    {/* Hero Banner */}
    <section className="section-padding" style={{ backgroundColor: "var(--primary)", color: "white" }}>
      <div className="section-container">
        <div className="reveal opacity-0 transition-opacity duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-brand-on-dark mb-8 max-w-2xl">{summary}</p>
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl">
        <div className="reveal opacity-0 transition-opacity duration-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            Overview
          </h2>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </div>
      </div>
    </section>

    {/* What We Deliver */}
    <section className="section-padding bg-white">
      <div className="section-container max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
          What We Deliver
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="reveal opacity-0 transition-opacity duration-700 flex gap-3"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <CheckCircle size={24} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sub-services Grid */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
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

    {/* Typical Use Cases */}
    <section className="section-padding bg-white">
      <div className="section-container max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
          Typical Use Cases
        </h2>
        <ul className="space-y-3">
          {useCases.map((useCase, idx) => (
            <li key={idx} className="reveal opacity-0 transition-opacity duration-700 flex gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
              <span className="text-muted">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Engagement Model */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
          Our Engagement Model
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {engagementModel.map((model, idx) => (
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

    {/* CTA */}
    <section className="section-padding rounded-3xl m-2 sm:m-4 md:m-8 lg:m-12 bg-navy-dark">
      <div className="section-container text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
        <p className="text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
          Let our experts understand your requirements and propose the perfect solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors gap-2 whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors gap-2 whitespace-nowrap"
          >
            View Other Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default function SecurityClient() {
  useRevealOnScroll()

  return (
    <ServiceDetailTemplate
      title="Security & Low Voltage Systems"
      summary="Comprehensive security infrastructure solutions including CCTV, access control, biometric systems, and BMS."
      overview="Our Security & Low Voltage Systems service delivers complete infrastructure for enterprise security. From video surveillance and access control to fire alarm systems and building management, we provide turnkey solutions that protect your assets and optimize operations. Our certified engineers design systems that integrate seamlessly with your existing infrastructure."
      deliverables={[
        "CCTV surveillance system design and installation",
        "Video analytics and intelligent monitoring",
        "Access control and credential management",
        "Biometric attendance and verification systems",
        "Fire alarm and detection systems",
        "Public address and emergency communication",
        "Building Management System (BMS) integration",
        "Intrusion and perimeter protection systems",
      ]}
      subServices={[
        { name: "CCTV Surveillance", description: "High-definition monitoring and recording solutions" },
        {
          name: "Access Control",
          description: "Electronic locks and credential management systems",
        },
        { name: "Biometric Systems", description: "Face recognition and fingerprint authentication" },
        { name: "Fire Alarm", description: "Integrated fire detection and suppression systems" },
        { name: "Public Address", description: "Emergency notification and announcement systems" },
        { name: "Building Management", description: "Automated building control and monitoring" },
      ]}
      useCases={[
        "Corporate campuses requiring integrated security",
        "Data centers needing multi-layer protection",
        "Manufacturing facilities with safety compliance needs",
        "Retail environments with inventory protection",
        "Healthcare facilities with access control requirements",
        "Government and public institutions",
      ]}
      engagementModel={[
        { phase: "Design", description: "Site survey and custom solution architecture" },
        { phase: "Supply", description: "Sourcing certified components and equipment" },
        { phase: "Implement", description: "Professional installation and commissioning" },
        { phase: "Support", description: "AMC and SLA-backed maintenance" },
      ]}
    />
  )
}
