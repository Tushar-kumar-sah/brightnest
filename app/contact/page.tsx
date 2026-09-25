"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, Sparkles } from "lucide-react"
import StructuredData from "@/components/StructuredData"

function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [selectedStack, setSelectedStack] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Parse URL search params for prefilled services
  useEffect(() => {
    const rawServices = searchParams.get("services")
    if (rawServices) {
      const parsed = rawServices.split(",").map(s => s.trim()).filter(Boolean)
      setSelectedStack(parsed)
      setFormData(prev => ({
        ...prev,
        service: "Other / Multiple Services",
        message: prev.message || `I am requesting a Site Survey for the following selected stack:\n- ${parsed.join("\n- ")}`
      }))
    }
  }, [searchParams])

  // Reveal animation
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
      setSubmitted(false)
    }, 5000)
  }

  const services = [
    "Security & Low Voltage Systems",
    "Structured Cabling & Fiber",
    "Data Networking & IT Infrastructure",
    "Telecom & Unified Communication",
    "Audio Visual Integration",
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "End-User Computing",
    "Managed Services & AMC",
    "Printing Solutions",
    "LED Lighting & Electrical",
    "Professional Services",
    "Other / Multiple Services",
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@brightnestedu.com",
      href: "mailto:info@brightnestedu.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "(+91) 93663 55026 / (+91) 98319 11796 / (033)-48109275",
      href: "tel:+919366355026",
      description: "Mon-Sat, 9AM-7PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "7/1 Lord Sinha Road, Lords Building",
      href: "#map",
      description: "Kolkata, West Bengal 700071",
    },
  ]

  return (
    <main >
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Brightnest Edutainment Pvt Ltd",
            "contactPoint": [
              "+919366355026",
              "+919831911796",
              "+913348109275"
            ].map(telephone => ({
              "@type": "ContactPoint",
              telephone,
              "contactType": "customer service",
              "email": "info@brightnestedu.com"
            }))
          }
        }}
        id="contact-schema"
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-brand-soft via-white to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="badge mb-4">Get in Touch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-xl text-muted">
              Ready to discuss your IT infrastructure needs? Our team of experts is here to help you
              design and implement the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "var(--primary)" }}>
                        {contact.title}
                      </h3>
                      <p className="text-primary font-medium">{contact.value}</p>
                      <p className="text-sm text-muted mt-1">{contact.description}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-background to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: Info */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                How Can We Help You?
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Whether you need a complete security system, network infrastructure upgrade, or AV integration,
                our team is ready to deliver. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Quick Response</h4>
                    <p className="text-sm text-muted">Our team responds within 24 business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MessageCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Free Consultation</h4>
                    <p className="text-sm text-muted">Get expert advice on your infrastructure needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <CheckCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">No Obligation</h4>
                    <p className="text-sm text-muted">Explore options without any commitment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-border shadow-xl">
                {selectedStack.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-brand-soft border border-brand-cyan/30 text-navy-dark">
                    <div className="flex items-center gap-2 font-bold text-sm text-brand-cyan mb-1">
                      <Sparkles size={16} />
                      Selected Solution Stack ({selectedStack.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedStack.map(item => (
                        <span key={item} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-brand-border text-navy-dark shadow-xs">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--primary)" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent text-center">
                    <CheckCircle size={24} className="text-accent mx-auto mb-2" />
                    <p className="font-semibold text-primary">Thank you for reaching out!</p>
                    <p className="text-sm text-muted">We'll get back to you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              Visit Our Office
            </h2>
            <p className="text-muted">
              7/1 Lord Sinha Road, Lords Building, Kolkata, West Bengal 700071, India
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.948362993931!2d88.34875670000001!3d22.543607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277168feffca7%3A0x72d6aece8eb3165d!2sSilicon%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768208397969!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brightnest Edutainment Office Location"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-dark via-primary to-brand-blue">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Prefer to talk directly?
              </h3>
              <p className="text-brand-on-dark">
                Call us now for immediate assistance with your infrastructure needs.
              </p>
            </div>
            <a
              href="tel:+919366355026"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              <Phone size={20} />
              (+91) 93663 55026
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading Contact Form...</div>}>
      <ContactContent />
    </Suspense>
  )
}
