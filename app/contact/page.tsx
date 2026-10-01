"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, Sparkles } from "lucide-react"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"

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
      description: "Direct enterprise inquiry response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "(+91) 93663 55026 / 98319 11796",
      href: "tel:+919366355026",
      description: "Mon-Sat, 9AM-7PM IST • Rapid Engineering Support",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "7/1 Lord Sinha Road, Lords Building",
      href: "#map",
      description: "Kolkata, West Bengal 700071, India",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030d1a] via-[#061833] to-[#02070f] text-white relative overflow-hidden">
      {/* Cyan & Ice-Blue ambient glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Specular cyan top border streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

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
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Direct Enterprise Advisory
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                  Amazing
                </span>
              </h1>
              <p className="text-base sm:text-lg text-sky-100/75 leading-relaxed mb-6">
                Ready to discuss your enterprise IT infrastructure needs? Our team of certified engineers is here to help you architect, deploy, and manage turnkey solutions with zero operational downtime.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-sky-200/80">
                <span className="px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30">✓ 24h Response SLA</span>
                <span className="px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30">✓ Free Site Survey</span>
                <span className="px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30">✓ Direct Principal Engineers</span>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/modern-conference-room.jpg",
                    title: "Direct Engineering Consultation",
                    caption: "Meet with certified systems architects to scope your requirements and plan your project."
                  },
                  {
                    image: "/ai-technology-professional-with-digital-background.jpg",
                    title: "Rapid Architecture Sizing",
                    caption: "Itemized BOM projections and SLA design delivered within 24 business hours."
                  },
                  {
                    image: "/gcc-enterprise-engineer.jpg",
                    title: "Pan-India On-Site Surveys",
                    caption: "Comprehensive site audits and physical layer discovery across India."
                  }
                ]}
                accentColor="#00f0ff"
                borderColor="border-cyan-500/30"
                glowShadow="shadow-[0_0_35px_rgba(6,182,212,0.25)]"
                activeDotClass="bg-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 relative z-10">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-md bg-[#071d3d]/50 border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-xl transition-all duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/25 transition-all flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-cyan-200 font-medium text-sm leading-snug">{contact.value}</p>
                      <p className="text-xs text-sky-200/60 mt-1.5">{contact.description}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding relative z-10 py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                <Clock size={16} />
                Rapid SLA Response
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                How Can We Help You?
              </h2>
              <p className="text-base text-sky-100/75 mb-8 leading-relaxed">
                Whether you need a complete security system, turnkey network infrastructure upgrade, optical fiber cabling, or AV boardroom integration, our team is ready to deliver. Fill out the brief and we'll reply within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-md bg-[#061a36]/50 border border-cyan-500/15">
                  <div className="p-2.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Quick Response</h4>
                    <p className="text-xs text-sky-200/70 mt-0.5">Dedicated engineering dispatch within 24 business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-md bg-[#061a36]/50 border border-cyan-500/15">
                  <div className="p-2.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Free Site Survey & Consultation</h4>
                    <p className="text-xs text-sky-200/70 mt-0.5">Comprehensive audit and architectural sizing with no upfront costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-md bg-[#061a36]/50 border border-cyan-500/15">
                  <div className="p-2.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Zero Obligation</h4>
                    <p className="text-xs text-sky-200/70 mt-0.5">Detailed BOM, design schematics, and timeline projections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <form onSubmit={handleSubmit} className="bg-[#061c3b]/80 p-6 sm:p-8 rounded-md border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-xl">
                {selectedStack.length > 0 && (
                  <div className="mb-6 p-4 rounded-md bg-cyan-950/60 border border-cyan-500/35 text-cyan-200">
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-cyan-400 mb-2">
                      <Sparkles size={14} />
                      Selected Solution Stack ({selectedStack.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedStack.map(item => (
                        <span key={item} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#031326] border border-cyan-500/40 text-cyan-200 shadow-xs">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21]/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21]/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21]/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21]/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21] text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all cursor-pointer text-sm"
                  >
                    <option value="" className="bg-[#030f21] text-slate-300">Select a primary service discipline</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#030f21] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 mb-2">
                    Project Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-cyan-500/25 bg-[#030f21]/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none text-sm"
                    placeholder="Tell us about your project requirements, location, estimated timelines, or current challenges..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-md font-bold text-sm bg-gradient-to-r from-cyan-500 to-sky-400 text-[#020b18] shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#020b18] border-t-transparent rounded-full animate-spin" />
                      Dispatching Request...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Project Inquiry
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="mt-4 p-4 rounded-md bg-cyan-950/70 border border-cyan-400 text-center animate-fadeIn">
                    <CheckCircle size={22} className="text-cyan-400 mx-auto mb-1.5" />
                    <p className="font-bold text-white text-sm">Inquiry Successfully Transmitted</p>
                    <p className="text-xs text-cyan-200/80 mt-0.5">Our solutions architect will contact you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section-padding relative z-10 py-16 border-t border-cyan-500/15">
        <div className="section-container">
          <div className="text-center mb-10 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mb-3">
              <MapPin size={14} />
              Corporate Headquarters
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
              Visit Our Office
            </h2>
            <p className="text-sky-200/70 text-sm max-w-xl mx-auto">
              7/1 Lord Sinha Road, Lords Building, Kolkata, West Bengal 700071, India
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-md overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.15)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.948362993931!2d88.34875670000001!3d22.543607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277168feffca7%3A0x72d6aece8eb3165d!2sSilicon%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768208397969!5m2!1sen!2sin"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brightnest Edutainment Office Location"
              className="w-full h-[280px] sm:h-[340px] md:h-[400px] grayscale-[25%] contrast-[110%]"
            />
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="py-14 relative z-10 border-t border-cyan-500/15">
        <div className="section-container">
          <div className="rounded-md p-8 sm:p-10 bg-gradient-to-r from-[#03152c] via-[#07244a] to-[#03152c] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2">
                Prefer to Speak Directly with an Architect?
              </h3>
              <p className="text-sm sm:text-base text-sky-200/80">
                Call our direct engineering line for immediate assistance with active projects.
              </p>
            </div>
            <a
              href="tel:+919366355026"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-400 text-[#020b18] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02] transition-all flex-shrink-0"
            >
              <Phone size={18} />
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
    <Suspense fallback={<div className="py-20 text-center text-cyan-400">Loading Contact Form...</div>}>
      <ContactContent />
    </Suspense>
  )
}
