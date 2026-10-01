import Link from "next/link"
import type { Metadata } from "next"
import { Building2, Factory, Server, Hotel, HeartPulse, GraduationCap, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react"
import { getIndustriesData } from "@/lib/data"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"

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
    image: "/data-center-infrastructure.jpg",
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Tailored Sector Engineering
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Industry{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                  Verticals
                </span>
              </h1>
              <p className="text-base sm:text-lg text-sky-100/75 leading-relaxed mb-8">
                Every sector operates under distinct regulatory mandates, environmental demands, and user concurrency. Explore how our turnkey infrastructure architectures power modern Indian enterprise ecosystems.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-400 text-[#020b18] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-all gap-2"
                >
                  Schedule Site Audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-all"
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

      {/* Industries Grid */}
      <section className="section-padding relative z-10 py-16 border-t border-cyan-500/15">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Building2
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group p-6 sm:p-8 rounded-md bg-[#091c44]/65 border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] backdrop-blur-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ind.name}
                      </h2>
                      <div className="text-xs text-sky-200/60 line-clamp-1">{ind.tagline}</div>
                    </div>
                  </div>

                  <p className="text-sm text-sky-100/70 leading-relaxed mb-6 flex-1">
                    {ind.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-cyan-500/15 mb-6">
                    {ind.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="p-2.5 rounded-md bg-[#040e24] border border-cyan-500/15 text-center">
                        <div className="text-base font-extrabold text-cyan-300">{st.value}</div>
                        <div className="text-[10px] uppercase font-semibold text-slate-400">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-400 font-semibold text-xs tracking-wider uppercase group-hover:text-white transition-colors">
                    Explore Architecture <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section-padding relative z-10 py-16 pb-24">
        <div className="section-container">
          <div className="rounded-md p-8 sm:p-12 text-center bg-gradient-to-r from-[#03152c] via-[#07244a] to-[#03152c] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need an Industry-Specific Technology Audit?
            </h2>
            <p className="text-sm sm:text-base text-sky-200/80 max-w-xl mx-auto mb-6">
              Our principal solution architects will conduct an on-site infrastructure survey aligned with your sector's compliance and operational standards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-400 text-[#020b18] font-bold text-sm rounded-md shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-all"
            >
              Book an On-Site Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
