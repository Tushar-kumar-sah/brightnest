"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react"
import { getServicesData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"

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
    <main >
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
      <section className="section-padding bg-gradient-to-b from-brand-soft via-white to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
              Comprehensive IT <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-muted">
              From security systems to networking infrastructure, we deliver end-to-end solutions
              that transform how enterprises operate. Explore our service portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = getIcon(service.icon as unknown as string) || Star
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group relative overflow-hidden rounded-2xl bg-white border border-border hover:border-accent hover:shadow-xl p-8"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={32} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: "var(--primary)" }}>
                        {service.name}
                      </h3>
                      <p className="text-muted mb-4 text-sm leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs text-secondary"
                          >
                            <CheckCircle size={12} className="text-accent" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-accent font-semibold text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-2">
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              Our Engagement Process
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", description: "Site survey and requirements gathering" },
              { step: "02", title: "Design", description: "Solution architecture and proposal" },
              { step: "03", title: "Deploy", description: "Professional installation and configuration" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden" style={{ background: "var(--brand-gradient-dark)" }}>
            {/* Decorative */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Need a Custom Solution?</h2>
              <p className="text-base sm:text-lg md:text-xl text-brand-on-dark mb-6 sm:mb-8 max-w-2xl mx-auto">
                Every business is unique. Let our experts design a tailored solution that meets your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg group"
                >
                  Get a Free Consultation
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  <Phone size={18} className="mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
