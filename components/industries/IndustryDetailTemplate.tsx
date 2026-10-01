"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Sparkles, Building2, Phone } from "lucide-react"

export interface IndustryTheme {
  bgGradient: string
  accentColor: string
  accentGradient: string
  glowOrb1: string
  glowOrb2: string
  cardBg: string
  cardBorder: string
  cardBorderHover: string
  cardShadowHover: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  buttonGradient: string
  buttonText?: string
  buttonShadow: string
  textHighlight: string
  subtextColor: string
  laserStreak: string
}

import HeroImageSlider, { SlideItem } from "@/components/ui/HeroImageSlider"

const sectorSlidesMap: Record<string, SlideItem[]> = {
  "gccs-tech-parks": [
    {
      image: "/gcc-enterprise-engineer.jpg",
      title: "Campus-Wide Wireless & LAN",
      caption: "Multi-gigabit Wi-Fi 7 and Cat6A 10G backbones for high-density tech parks."
    },
    {
      image: "/modern-conference-room.jpg",
      title: "Executive Hybrid Boardrooms",
      caption: "Acoustically treated conference rooms with beamforming mic arrays and 4K displays."
    },
    {
      image: "/datacenter-infrastructure-engineer.jpg",
      title: "Contactless Turnstiles & BMS",
      caption: "Speed-gate optical turnstiles with facial recognition and automated building controls."
    }
  ],
  "manufacturing-warehouses": [
    {
      image: "/manufacturing-industrial-engineer.jpg",
      title: "Ruggedized Industrial Wi-Fi",
      caption: "Directional APs designed to cut through dense metal racking and high-bay aisles."
    },
    {
      image: "/security-infrastructure.jpg",
      title: "Thermal CCTV & Hazard Defense",
      caption: "Bi-spectrum heat sensors for early fire and machinery overheating warning."
    },
    {
      image: "/data-center-infrastructure.jpg",
      title: "Armored Fiber Optic Backbone",
      caption: "Crush-resistant single-mode fiber in heavy-duty GI conduit for zero interference."
    }
  ],
  "data-centers": [
    {
      image: "/data-center-infrastructure.jpg",
      title: "Aisle Containment & Optical Fabric",
      caption: "Hot/cold aisle containment systems and MPO/MTP ultra-low loss trunking."
    },
    {
      image: "/datacenter-infrastructure-engineer.jpg",
      title: "Biometric Multi-Factor Mantraps",
      caption: "Dual-custody access cages with palm-vein readers and continuous audit logs."
    },
    {
      image: "/modern-tech-infrastructure-network.jpg",
      title: "VESDA Smoke & Clean-Agent Gas",
      caption: "Aspirating air sampling smoke detection and automated clean-agent fire safety."
    }
  ],
  "hospitality-retail": [
    {
      image: "/hospitality-operations-manager.jpg",
      title: "Seamless Guest Wi-Fi & POS",
      caption: "Zero-deadspot in-room wall-plate APs and high-priority POS transactions."
    },
    {
      image: "/modern-conference-room.jpg",
      title: "Interactive Digital Signage",
      caption: "High-impact video walls and cloud CMS-driven menu boards."
    },
    {
      image: "/security-infrastructure.jpg",
      title: "Loss-Prevention 4K Surveillance",
      caption: "WDR dome cameras and cashier register overlay protection."
    }
  ],
  "healthcare-hospitals": [
    {
      image: "/woman-engineer-reviewing-technical-drawings.jpg",
      title: "Medical-Grade Shielded LAN",
      caption: "Zero-EMI Cat6A SSTP cabling and dielectric fiber for MRI and ICU environments."
    },
    {
      image: "/ai-technology-professional-with-digital-background.jpg",
      title: "IP Nurse Call Systems",
      caption: "Instant two-way voice emergency communication and mobile nurse console alerts."
    },
    {
      image: "/datacenter-infrastructure-engineer.jpg",
      title: "Cleanroom Biometric Access",
      caption: "Contactless facial verification for pharma vaults and sterile operation suites."
    }
  ],
  "education-campuses": [
    {
      image: "/ai-technology-professional-with-digital-background.jpg",
      title: "Smart Hybrid Classrooms",
      caption: "Interactive 4K flat panels, wireless screen casting, and lecture capture."
    },
    {
      image: "/modern-tech-infrastructure-network.jpg",
      title: "Inter-Building Campus Fiber",
      caption: "Armored single-mode 24-core backbone connecting all university departments."
    },
    {
      image: "/modern-conference-room.jpg",
      title: "Auditorium Acoustics & Pro Sound",
      caption: "Line-array sound systems and digital mixing consoles for large-venue lectures."
    }
  ]
}

export interface IndustryDetailProps {
  name: string
  tagline: string
  description: string
  stats: { label: string; value: string }[]
  challenges: string[]
  solutions: string[]
  deliverables: string[]
  theme: IndustryTheme
  slides?: SlideItem[]
  slug?: string
}

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

export default function IndustryDetailTemplate({
  name,
  tagline,
  description,
  stats,
  challenges,
  solutions,
  deliverables,
  theme,
  slides,
  slug,
}: IndustryDetailProps) {
  useRevealOnScroll()

  const heroSlides: SlideItem[] = slides && slides.length > 0
    ? slides
    : slug && sectorSlidesMap[slug]
    ? sectorSlidesMap[slug]
    : [
        {
          image: "/gcc-enterprise-engineer.jpg",
          title: "Engineered Sector Architecture",
          caption: "Bespoke digital and physical connectivity designed to regulatory standards."
        },
        {
          image: "/data-center-infrastructure.jpg",
          title: "Mission-Critical Resiliency",
          caption: "Tier-grade high-availability backbone and redundant power systems."
        },
        {
          image: "/manufacturing-industrial-engineer.jpg",
          title: "Operational Excellence",
          caption: "24/7 continuous SLA performance and certified engineering field delivery."
        }
      ]

  return (
    <main className={`min-h-screen bg-gradient-to-b ${theme.bgGradient} text-white relative overflow-hidden`}>
      {/* Themed ambient glow orbs */}
      <div className={`absolute top-0 right-1/4 w-[600px] h-[600px] ${theme.glowOrb1} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute top-1/3 -left-32 w-[550px] h-[550px] ${theme.glowOrb2} rounded-full blur-[140px] pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-0 w-[500px] h-[500px] ${theme.glowOrb1} rounded-full blur-[150px] pointer-events-none`} />

      {/* Top hairline specular streak */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${theme.laserStreak} to-transparent`} />

      {/* Hero Banner with 3-Image Slider */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} shadow-xs mb-6`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Specialized Industry Vertical
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                <span className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]`}>
                  {name}
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight`}>
                {tagline}
              </p>
              <p className={`text-base sm:text-lg ${theme.subtextColor} leading-relaxed mb-8`}>
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-8 py-3.5 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all gap-2`}
                >
                  Schedule Site Audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all"
                >
                  All Industries
                </Link>
              </div>
            </div>

            {/* Right: 3-Image Slider */}
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
              <HeroImageSlider
                slides={heroSlides}
                accentColor={theme.accentColor}
                borderColor={theme.cardBorder}
                glowShadow={`0_0_35px_${theme.accentColor}33`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section-padding relative z-10 py-14 border-t ${theme.cardBorder} bg-black/20 backdrop-blur-sm`}>
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardShadowHover} backdrop-blur-xl text-center`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`text-2xl sm:text-4xl font-extrabold ${theme.textHighlight} mb-1 tracking-tight`}>
                  {stat.value}
                </div>
                <div className={`text-xs uppercase font-semibold tracking-wider ${theme.subtextColor}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Engineered Solutions Grid */}
      <section className={`section-padding relative z-10 py-20 border-t ${theme.cardBorder}`}>
        <div className="section-container">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} mb-3`}>
              <ShieldCheck size={14} />
              Engineering Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Operational Challenges vs Our Solution Architecture
            </h2>
            <p className={`text-base ${theme.subtextColor} max-w-2xl mx-auto`}>
              We solve complex vertical-specific friction points with standards-aligned technology frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Challenges */}
            <div className={`reveal opacity-0 translate-y-8 transition-all duration-700 p-6 sm:p-8 rounded-md bg-red-950/20 border border-red-500/25 backdrop-blur-xl`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-6">
                <AlertTriangle size={18} />
                Critical Industry Challenges
              </div>
              <div className="space-y-4">
                {challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-md bg-white/[0.03] border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-200 leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solutions */}
            <div className={`reveal opacity-0 translate-y-8 transition-all duration-700 delay-150 p-6 sm:p-8 rounded-md ${theme.cardBg} border ${theme.cardBorder} backdrop-blur-xl`}>
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.textHighlight} mb-6`}>
                <Sparkles size={18} />
                Brightnest Turnkey Solutions
              </div>
              <div className="space-y-4">
                {solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-md bg-white/[0.04] border border-white/10">
                    <CheckCircle size={16} className={`${theme.textHighlight} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm text-white font-medium leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Scope */}
      <section className={`section-padding relative z-10 py-20 border-t ${theme.cardBorder} bg-black/25 backdrop-blur-sm`}>
        <div className="section-container max-w-5xl">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} mb-3`}>
              Scope of Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Turnkey Infrastructure Deliverables
            </h2>
            <p className={`text-sm ${theme.subtextColor} mt-2`}>
              Complete physical layer, active networking, security, and AMC deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-3.5 p-4 rounded-md ${theme.cardBg} border ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardShadowHover} backdrop-blur-xl group`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`p-1.5 rounded-md ${theme.badgeBg} ${theme.textHighlight} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  <CheckCircle size={18} />
                </div>
                <span className={`text-sm font-medium ${theme.subtextColor} group-hover:text-white transition-colors`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className={`rounded-md p-8 sm:p-12 md:p-14 text-center bg-black/40 border ${theme.cardBorder} ${theme.cardShadowHover} relative overflow-hidden backdrop-blur-xl`}>
            <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full ${theme.glowOrb1} blur-[80px] pointer-events-none`} />
            <div className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full ${theme.glowOrb2} blur-[80px] pointer-events-none`} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Modernize Your {name} Infrastructure
              </h2>
              <p className={`text-base sm:text-lg ${theme.subtextColor} mb-8 leading-relaxed`}>
                Connect with our certified enterprise engineers to arrange a comprehensive on-site survey and tailored technical proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-8 py-3.5 ${theme.buttonGradient} ${theme.buttonText || "text-white"} font-bold text-sm rounded-md ${theme.buttonShadow} hover:scale-[1.02] transition-all`}
                >
                  Book a Site Survey
                </Link>
                <a
                  href="tel:+919366355026"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/25 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all gap-2"
                >
                  <Phone size={16} />
                  (+91) 93663 55026
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
