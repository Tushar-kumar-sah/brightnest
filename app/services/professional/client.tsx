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

export default function ProfessionalClient() {
  useRevealOnScroll()

  return (
    <main >
      <section style={{ backgroundColor: "var(--primary)", color: "white" }} className="section-padding">
        <div className="section-container">
          <div className="reveal opacity-0 transition-opacity duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Professional Services</h1>
            <p className="text-xl text-brand-on-dark mb-8 max-w-2xl">
              End-to-end consulting, engineering, project management, commissioning, AMC, and SLA-driven managed services.
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
            Brightnest supports the complete project lifecycle, from requirement analysis and solution engineering to
            deployment, testing, commissioning, documentation, annual maintenance, and 24×7 infrastructure support.
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
              "IT infrastructure consulting and strategy",
              "Solution architecture and design",
              "Project management and governance",
              "Implementation and deployment services",
              "Testing, commissioning, and handover",
              "Documentation and runbooks",
              "Business continuity planning",
              "SLA-driven managed services and optimization",
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
              { name: "Consulting", description: "Strategic IT infrastructure advisory" },
              {
                name: "Solution Design",
                description: "Custom architecture tailored to requirements",
              },
              {
                name: "Project Management",
                description: "End-to-end project delivery oversight",
              },
              { name: "Training", description: "Team skills development and certification" },
              { name: "Documentation", description: "Runbooks, SOPs, and knowledge base" },
              { name: "Support", description: "AMC and SLA-backed maintenance" },
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
              { phase: "Discover", description: "Workshops, stakeholder interviews, and current-state assessment" },
              { phase: "Design", description: "Solution architecture, BOM, and implementation plan" },
              { phase: "Implement", description: "Project governance, delivery, and cutover" },
              { phase: "Optimize", description: "Training, documentation, and ongoing advisory" },
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Partner with Our Experts</h2>
          <p className="text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
            Engage our consultants for architecture reviews, project delivery, or training programs tailored to you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Speak with Consulting
          </Link>
        </div>
      </section>
    </main>
  )
}
