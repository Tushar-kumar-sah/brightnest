"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, Sparkles, ShieldCheck } from "lucide-react"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip } from "@/components/ui"

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Direct Enterprise Advisory
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                Let&apos;s Build Something Amazing
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-6 font-light">
                Ready to discuss your enterprise IT infrastructure needs? Our team of certified engineers is here to help you architect, deploy, and manage turnkey solutions with zero operational downtime.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white">
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white">✓ 24h Response SLA</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white">✓ Free Site Survey</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white">✓ Direct Principal Engineers</span>
              </div>
            </div>

            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={[
                  {
                    image: "/indian-smart-boardroom.jpg",
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

      {/* Open-Air 3-Column Communication Strip */}
      <section className="py-10 relative z-10">
        <div className="section-container">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cyan-500/15 border-y border-cyan-500/20">
            {contactInfo.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 group py-7 px-4 sm:px-8 first:md:pl-0 last:md:pr-0 hover:bg-cyan-500/[0.03] relative"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Top Laser Hover Accent */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-sky-400 group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/5 border border-cyan-400/35 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-300/70 mb-1">
                        CHANNEL // 0{idx + 1}
                      </span>
                      <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-white/95 font-medium text-xs sm:text-sm leading-snug break-words">
                        {contact.value}
                      </p>
                      <p className="text-[11px] sm:text-xs text-white/65 mt-1 font-light">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          <StatsTelemetryStrip
            stats={[
              {
                label: "Response SLA",
                value: "< 24 hrs",
                subtext: "Guaranteed Proposal Turnaround",
                icon: Clock,
              },
              {
                label: "Projects Delivered",
                value: "500+",
                subtext: "Enterprise & Campus Scale",
                icon: CheckCircle,
              },
              {
                label: "Guaranteed Uptime",
                value: "99.9%",
                subtext: "SLA-Backed Reliability",
                icon: ShieldCheck,
              },
              {
                label: "Engineering Support",
                value: "24/7",
                subtext: "NOC & Rapid Field Dispatch",
                icon: Phone,
              },
            ]}
            laserColorClass="via-cyan-400/60"
            className="mt-12"
          />
        </div>
      </section>

      {/* Open-Air Architectural Split Form Section */}
      <section className="section-padding relative z-10 py-14 sm:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Open-Air Vertical Laser-Connected Timeline */}
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-300 mb-3">
                <Clock size={14} className="text-cyan-400" />
                Rapid SLA Response
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                How Can We Help You?
              </h2>
              <p className="text-sm sm:text-base text-white/85 mb-8 sm:mb-10 leading-relaxed font-light border-l-2 border-cyan-400/50 pl-4">
                Whether you need a complete security system, turnkey network infrastructure upgrade, optical fiber cabling, or AV boardroom integration, our team is ready to deliver. Fill out the brief and we'll reply within 24 hours.
              </p>

              {/* Vertical Laser Spine Steps */}
              <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-[19px] sm:before:left-[23px] before:top-3 before:bottom-3 before:w-[1px] before:bg-gradient-to-b before:from-cyan-400 before:via-cyan-500/40 before:to-transparent">
                <div className="relative flex items-start gap-4 group">
                  <div className="-ml-6 sm:-ml-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#04152d] border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex-shrink-0 z-10">
                    <Clock size={18} />
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/70">STEP 01</span>
                    <h4 className="font-bold text-white text-sm sm:text-base">Quick Response</h4>
                    <p className="text-xs sm:text-sm text-white/75 mt-1 font-light">Dedicated engineering dispatch within 24 business hours</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4 group">
                  <div className="-ml-6 sm:-ml-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#04152d] border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex-shrink-0 z-10">
                    <MessageCircle size={18} />
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/70">STEP 02</span>
                    <h4 className="font-bold text-white text-sm sm:text-base">Free Site Survey & Consultation</h4>
                    <p className="text-xs sm:text-sm text-white/75 mt-1 font-light">Comprehensive audit and architectural sizing with no upfront costs</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4 group">
                  <div className="-ml-6 sm:-ml-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#04152d] border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex-shrink-0 z-10">
                    <CheckCircle size={18} />
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/70">STEP 03</span>
                    <h4 className="font-bold text-white text-sm sm:text-base">Zero Obligation Blueprint</h4>
                    <p className="text-xs sm:text-sm text-white/75 mt-1 font-light">Detailed BOM, design schematics, and timeline projections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Open-Air Minimal Architectural Form */}
            <div className="lg:col-span-7 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <form
                onSubmit={handleSubmit}
                className="relative pt-6 sm:pt-8 lg:pl-12 lg:border-l border-cyan-500/20"
              >
                {/* Top Laser Accent Line */}
                <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-transparent mb-6 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

                <div className="mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300 block mb-1">
                    Project Specification Brief
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Transmit Your Requirements
                  </h3>
                </div>

                {selectedStack.length > 0 && (
                  <div className="mb-8 pb-5 border-b border-cyan-500/25 text-white">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-cyan-300 mb-3">
                      <Sparkles size={14} className="text-cyan-400" />
                      Selected Solution Stack ({selectedStack.length})
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedStack.map(item => (
                        <span key={item} className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 border-l-2 border-cyan-400 text-white">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                      01 // Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b border-white/25 bg-white/[0.02] text-white placeholder-white/45 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.05] transition-all text-base sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                      02 // Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b border-white/25 bg-white/[0.02] text-white placeholder-white/45 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.05] transition-all text-base sm:text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                      03 // Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 border-0 border-b border-white/25 bg-white/[0.02] text-white placeholder-white/45 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.05] transition-all text-base sm:text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                      04 // Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border-0 border-b border-white/25 bg-white/[0.02] text-white placeholder-white/45 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.05] transition-all text-base sm:text-sm"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                    05 // Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border-0 border-b border-white/25 bg-[#04152d] text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer text-base sm:text-sm"
                  >
                    <option value="" className="bg-[#030f21] text-white">Select a primary service discipline</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#030f21] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-cyan-200/90 mb-2">
                    06 // Project Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-3 border-0 border-b border-white/25 bg-white/[0.02] text-white placeholder-white/45 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.05] transition-all resize-none text-base sm:text-sm"
                    placeholder="Tell us about your project requirements, location, estimated timelines, or current challenges..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[260px] py-4 px-8 rounded-md font-bold text-sm bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching Request...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="text-white" />
                      Send Project Inquiry
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="mt-6 pt-4 border-t border-cyan-400/40 flex items-center gap-3 text-left animate-fadeIn">
                    <CheckCircle size={22} className="text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white text-sm">Inquiry Successfully Transmitted</p>
                      <p className="text-xs text-white/80 mt-0.5">Our solutions architect will contact you within 24 hours.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section — Open-Air Architectural Frame */}
      <section id="map" className="section-padding relative z-10 py-16 border-t border-cyan-500/15">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-2">
                <MapPin size={14} className="text-cyan-400" />
                Corporate Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Visit Our Office
              </h2>
            </div>
            <p className="text-white/80 text-sm max-w-md md:text-right font-light">
              7/1 Lord Sinha Road, Lords Building, Kolkata, West Bengal 700071, India
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative border-y border-cyan-500/30">
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

      {/* Open-Air Horizon Direct Architect Line */}
      <section className="py-16 pb-24 relative z-10 border-t border-cyan-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none" />
        <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Direct Engineering Line
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Prefer to Speak Directly with an Architect?
            </h3>
            <p className="text-sm sm:text-base text-white/80 font-light">
              Call our direct engineering line for immediate assistance with active projects.
            </p>
          </div>
          <a
            href="tel:+919366355026"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-8 py-4 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02] transition-all flex-shrink-0 text-center"
          >
            <Phone size={18} className="text-white" />
            (+91) 93663 55026
          </a>
        </div>
      </section>
    </main>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-white">Loading Contact Form...</div>}>
      <ContactContent />
    </Suspense>
  )
}
