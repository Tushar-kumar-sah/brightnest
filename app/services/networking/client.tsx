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

export default function NetworkingClient() {
  useRevealOnScroll()

  return (
    <main >
      <section style={{ backgroundColor: "var(--primary)", color: "white" }} className="section-padding">
        <div className="section-container">
          <div className="reveal opacity-0 transition-opacity duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Data Networking & IT Infrastructure</h1>
            <p className="text-xl text-brand-on-dark mb-8 max-w-2xl">
              Enterprise-grade networking solutions including LAN/WAN, switching, routing, and advanced security.
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
            Our networking solutions provide the backbone for modern enterprise infrastructure. We design and deploy
            scalable LAN/WAN architectures with enterprise-class switching, routing, and advanced security. From
            wireless networks to firewall management, we ensure your network is secure, performant, and ready for
            growth.
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
              "LAN and WAN design and deployment",
              "Enterprise switching infrastructure",
              "Routing and traffic management",
              "Wireless network deployment (Wi-Fi 6 ready)",
              "Firewall and security appliances",
              "Network segmentation and VLAN management",
              "Load balancing and failover",
              "Network monitoring and analytics",
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
              { name: "LAN Design", description: "Local area network architecture and deployment" },
              { name: "WAN Solutions", description: "Wide area network connectivity and management" },
              { name: "Switching", description: "Layer 2 and 3 enterprise switching" },
              { name: "Routing", description: "Dynamic routing and traffic optimization" },
              { name: "Wireless Networks", description: "High-performance Wi-Fi infrastructure" },
              { name: "Network Security", description: "Firewall and intrusion prevention systems" },
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
              { phase: "Assess", description: "Network audit, capacity planning, and design" },
              { phase: "Deploy", description: "Implementation, cutover, and validation" },
              { phase: "Secure", description: "Policy enforcement, segmentation, and monitoring" },
              { phase: "Support", description: "SLA-backed operations and optimization" },
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Engineer a Faster, Safer Network</h2>
          <p className="text-lg sm:text-xl text-brand-on-dark mb-8 max-w-2xl mx-auto">
            Discuss your LAN/WAN, wireless, and security requirements with our networking specialists.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Design Workshop
          </Link>
        </div>
      </section>
    </main>
  )
}
