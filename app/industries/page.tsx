import Link from "next/link"
import type { Metadata } from "next"
import { Building2, Factory, Server, Hotel, HeartPulse, GraduationCap, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react"
import { getIndustriesData } from "@/lib/data"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip, AnimatedStatValue } from "@/components/ui"

export const metadata: Metadata = {
  title: "Industry Verticals | Brightnest Edutainment",
  description: "Specialized turnkey IT solutions for Tech Parks, Manufacturing, Data Centers, Hospitality, Healthcare, and Education.",
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Factory,
  Server,
  Hotel,
  HeartPulse,
  GraduationCap,
}

const heroSlides = [
  {
    image: "/gcc-enterprise-engineer.jpg",
    title: "Mission-Critical Campuses",
    caption: "Tailored digital backbones engineered for GCCs and high-density tech parks."
  },
  {
    image: "/manufacturing-industrial-engineer.jpg",
    title: "Industrial & Heavy Operations",
    caption: "Ruggedized wireless networks, thermal sensors, and automation for factories."
  },
  {
    image: "/datacenter-infrastructure-engineer.jpg",
    title: "Data Centers & Mission Critical",
    caption: "Zero-downtime optical fabrics, hot-aisle containment, and biometric mantraps."
  }
]

export default function IndustriesPage() {
  const industries = getIndustriesData()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050c1e] via-[#091b3e] to-[#030713] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Top specular hairline streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Industry Verticals",
          "description": "Specialized turnkey IT solutions for Tech Parks, Manufacturing, Data Centers, Hospitality, Healthcare, and Education.",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": industries.map((ind, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://brightnestedu.com/industries/${ind.slug}`,
              "name": ind.name
            }))
          }
        }}
        id="industries-collection-schema"
      />

      {/* Hero with 3-Image Slider */}
      <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Tailored Sector Engineering
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Industry Verticals
              </h1>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-8 font-light">
                Every sector operates under distinct regulatory mandates, environmental demands, and user concurrency. Explore how our turnkey infrastructure architectures power modern Indian enterprise ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-all gap-2 text-center"
                >
                  Schedule Site Audit <ArrowRight size={16} className="text-white" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right: 3-Image Slider */}
            <div className="lg:col-span-5">
              <HeroImageSlider
                slides={heroSlides}
                accentColor="#06b6d4"
                borderColor="border-cyan-500/30"
                glowColor="rgba(6,182,212,0.25)"
                badgeText="SECTOR SHOWCASE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sector Telemetry Strip */}
      <section className="section-padding relative z-10 py-14 bg-[#030a1c]/60 backdrop-blur-sm">
        <div className="section-container">
          <StatsTelemetryStrip
            stats={[
              {
                label: "Enterprise Verticals",
                value: "6+",
                subtext: "Specialized Sector Blueprints",
              },
              {
                label: "Projects Delivered",
                value: "500+",
                subtext: "Turnkey Deployments",
              },
              {
                label: "Core Network SLA",
                value: "99.999%",
                subtext: "Mission-Critical Uptime",
              },
              {
                label: "NOC & Field Support",
                value: "24/7",
                subtext: "Pan-India Engineering",
              },
            ]}
            laserColorClass="via-cyan-400/60"
          />
        </div>
      </section>

      {/* Industries — Open-Air Architectural Sector Ledger */}
      <section className="section-padding relative z-10 py-16 border-t border-cyan-500/15">
        <div className="section-container">
          <div className="divide-y divide-cyan-500/15 border-t border-b border-cyan-500/15">
            {industries.map((ind, idx) => {
              const Icon = iconMap[ind.icon] || Building2
              const num = String(idx + 1).padStart(2, "0")
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group relative block py-10 sm:py-12 px-2 sm:px-6 transition-all duration-300 overflow-hidden"
                >
                  {/* Ambient hover bloom */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(6,182,212,0.06),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Bottom laser sweep on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center">
                    {/* Left: Sector Number + Floating Sphere Icon + Name */}
                    <div className="lg:col-span-4 flex items-center gap-4 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400/50 group-hover:text-cyan-300 transition-colors w-6">
                        {num}
                      </span>
                      <div className="relative flex-shrink-0">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-600/20 border border-cyan-400/35 text-white flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {ind.name}
                        </h2>
                        <div className="text-xs text-cyan-200/80 font-light mt-0.5 line-clamp-1">
                          {ind.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Center: Open-Air Narrative */}
                    <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
                      <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
                        {ind.description}
                      </p>
                    </div>

                    {/* Right: Open-Air Animated Telemetry + Action Link */}
                    <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-center lg:items-end gap-4 lg:border-l lg:border-white/10 lg:pl-8 w-full">
                      <div className="flex items-center gap-6">
                        {ind.stats.slice(0, 2).map((st, i) => (
                          <div key={i} className="text-left lg:text-right">
                            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                              <AnimatedStatValue value={st.value} />
                            </div>
                            <div className="text-[10px] uppercase font-semibold tracking-wider text-cyan-200/75 mt-1">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center text-cyan-300 font-semibold text-xs tracking-wider uppercase group-hover:text-white transition-colors mt-1">
                        Explore Blueprint
                        <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation — Open-Air Horizon Section */}
      <section className="section-padding relative z-10 py-20 border-t border-cyan-500/20 overflow-hidden">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.12),transparent)] pointer-events-none" />

        <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Sector Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Need an Industry-Specific Technology Audit?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/85 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Our principal solution architects will conduct an on-site infrastructure survey aligned with your sector&apos;s compliance and operational standards.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3.5 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm rounded-full shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-all text-center"
          >
            Book an On-Site Audit
          </Link>
        </div>
      </section>
    </main>
  )
}
