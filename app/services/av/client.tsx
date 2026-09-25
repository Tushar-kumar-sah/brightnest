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

export default function AVClient() {
  useRevealOnScroll()

  return (
    <main >
      <section style={{ backgroundColor: "var(--primary)", color: "white" }} className="section-padding">
        <div className="section-container">
          <div className="reveal opacity-0 transition-opacity duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Audio Visual Integration</h1>
            <p className="text-xl text-brand-on-dark mb-8 max-w-2xl">
              Video conferencing, boardroom solutions, digital signage, and immersive AV experiences.
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
            Elevate your presentation and communication experience with our AV integration solutions. We design and
            implement professional video conferencing systems, boardroom installations, digital signage networks, and
            immersive video wall solutions that enhance collaboration and engagement.
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
              "Video conferencing room design and deployment",
              "Boardroom and executive suite installation",
              "Digital signage network setup",
              "Video wall and large display systems",
              "Projection and display technology",
              "Audio system design and installation",
              "Content management systems",
              "Control system integration",
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
              { name: "Video Conferencing", description: "Room-based and cloud-connected solutions" },
              { name: "Boardroom Solutions", description: "Executive presentation and meeting rooms" },
              { name: "Digital Signage", description: "Enterprise-wide information display networks" },
              { name: "Video Walls", description: "Multi-display immersive systems" },
              { name: "Auditorium Systems", description: "Large-venue AV installations" },
              { name: "Control Systems", description: "Automated AV room control" },
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
            Typical Use Cases
          </h2>
          <ul className="space-y-3">
            {[
              "Corporate boardroom and executive suite upgrades",
              "Multi-site video conferencing infrastructure",
              "Campus-wide digital signage networks",
              "Command and control centers",
              "Educational institution AV systems",
              "Hospitality and retail digital displays",
            ].map((useCase, idx) => (
              <li key={idx} className="reveal opacity-0 transition-opacity duration-700 flex gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <span className="text-muted">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Our Engagement Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "Design",
                description: "Room design, technology selection, and integration planning",
              },
              {
                phase: "Supply",
                description: "Sourcing premium AV equipment and display technology",
              },
              {
                phase: "Install",
                description: "Professional installation with acoustic optimization",
              },
              { phase: "AMC", description: "Content management and system maintenance" },
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Create Immersive Experiences</h2>
          <p className="text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
            Discover how professional AV solutions can transform your spaces.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  )
}
