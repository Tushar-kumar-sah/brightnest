"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Factory, Shield, ArrowRight, CheckCircle, Globe } from "lucide-react"
import { getCaseStudiesData } from "@/lib/data"
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
    <main >
      <StructuredData data={caseStudiesSchema} id="case-studies-schema" />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-brand-soft via-white to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">Case Studies</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
              Real-World Impact. Delivered.
            </h1>
            <p className="text-xl text-muted">
              Explore how Brightnest Edutainment architects secure, scalable, and high-performance infrastructure for
              enterprises across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Projects Delivered", value: "500+", icon: CheckCircle },
              { label: "Industries Served", value: "10+", icon: Globe },
              { label: "Countries", value: "15+", icon: Building2 },
              { label: "Avg SLA Response", value: "< 30 mins", icon: Shield },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">Highlights</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              Success Stories
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A snapshot of recent deployments across networking, security, AV, telecom, lighting, and managed services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((item, idx) => (
              <article
                key={item.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-2xl overflow-hidden border border-border bg-white hover:border-accent hover:shadow-xl"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Factory size={16} />
                    <span>{item.client}</span>
                    <span className="mx-2">•</span>
                    <span>{item.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <span key={service} className="badge">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    {item.results.map((result) => (
                      <div key={result} className="flex items-start gap-2 text-sm text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "var(--accent)" }} />
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
      <section
        className="section-padding rounded-3xl m-2 sm:m-4 md:m-8 lg:m-12"
        style={{ background: "var(--brand-gradient-dark)" }}
      >
        <div className="section-container text-center text-white">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Your Own Success Story?</h2>
            <p className="text-lg text-brand-on-dark mb-8 max-w-2xl mx-auto">
              Tell us about your security, networking, AV, or telecom project. We’ll design a solution that meets your
              goals and timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary hover:bg-gray-100 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
              >
                Explore Services <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
