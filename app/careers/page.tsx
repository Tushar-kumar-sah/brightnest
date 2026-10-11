import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Coffee, GraduationCap, ArrowRight, Mail, Star, Sparkles } from "lucide-react"
import { getCareersData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"
import { StatsTelemetryStrip } from "@/components/ui"

export const metadata = {
    title: "Careers | Brightnest Edutainment",
    description: "Join our team of experts. Explore career opportunities at Brightnest Edutainment and be part of building turnkey IT solutions.",
}

export default function Careers() {
    const { openPositions, benefits, values } = getCareersData()

    const careersSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Careers at Brightnest Edutainment",
        "description": "Explore career opportunities, company benefits, and corporate values at Brightnest Edutainment.",
        "publisher": {
            "@type": "Organization",
            "name": "Brightnest Edutainment Pvt Ltd",
            "url": "https://brightnestedu.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Open Positions",
            "itemListElement": openPositions.map((position, index) => ({
                "@type": "JobPosting",
                "position": index + 1,
                "title": position.title,
                "description": position.description,
                "datePosted": "2026-06-01",
                "validThrough": "2026-12-31",
                "employmentType": position.type.toUpperCase().replace("-", "_"),
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Brightnest Edutainment Pvt Ltd",
                    "sameAs": "https://brightnestedu.com"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Kolkata",
                        "addressRegion": "West Bengal",
                        "addressCountry": "IN"
                    }
                }
            }))
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#090416] via-[#14082e] to-[#06020f] text-white relative overflow-hidden">
            {/* Violet ambient glow orbs */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Specular purple top border streak */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

            <StructuredData data={careersSchema} id="careers-schema" />

            {/* Hero */}
            <section className="section-padding relative z-10 pt-28 pb-16 sm:pb-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        <div className="lg:col-span-7 text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-purple-500/10 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                Join Our Engineering Team
                            </div>
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                                Build the Future of IT Infrastructure
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-purple-100/75 mb-6 sm:mb-8 leading-relaxed font-light">
                                Join a mission-driven team of network architects, security specialists, and systems engineers shaping enterprise technology ecosystems across India.
                            </p>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                <a
                                    href="#positions"
                                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-[1.02] transition-all gap-2 text-center w-full sm:w-auto"
                                >
                                    View Open Positions <ArrowRight size={16} />
                                </a>
                                <a
                                    href="mailto:careers@brightnestedu.com"
                                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border border-purple-400/40 text-purple-200 font-semibold text-sm rounded-md hover:bg-purple-500/10 hover:border-purple-300 transition-all gap-2 text-center w-full sm:w-auto"
                                >
                                    <Mail size={16} /> Email Talent Team
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <HeroImageSlider
                                slides={[
                                    {
                                        image: "/professional-man-with-glasses-analyzing-code-on-sc.jpg",
                                        title: "Collaborative Engineering",
                                        caption: "Architecting mission-critical enterprise tech ecosystems with OEM partners."
                                    },
                                    {
                                        image: "/female-business-consultant-smiling.jpg",
                                        title: "People-First Culture",
                                        caption: "Continuous OEM certifications, mentorship, and rapid leadership tracks."
                                    },
                                    {
                                        image: "/woman-engineer-reviewing-technical-drawings.jpg",
                                        title: "Hands-On Project Ownership",
                                        caption: "Lead end-to-end design, deployment, and commissioning nationwide."
                                    }
                                ]}
                                accentColor="#c084fc"
                                borderColor="border-purple-500/30"
                                glowShadow="shadow-[0_0_35px_rgba(168,85,247,0.25)]"
                                activeDotClass="bg-purple-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us — Open-Air Architectural Feature Matrix */}
            <section className="section-padding relative z-10 py-20 border-t border-purple-500/15 bg-[#0d0520]/40">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">
                                <Sparkles size={14} />
                                Culture & Benefits
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                Why Join Brightnest Edutainment?
                            </h2>
                        </div>
                        <p className="text-purple-100/70 text-sm sm:text-base max-w-md md:text-right font-light">
                            We invest directly in our people through continuous OEM certifications, complex real-world project ownership, and comprehensive wellness support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                        {benefits.map((benefit, idx) => {
                            const Icon = getIcon(benefit.icon) || Star
                            return (
                                <div
                                    key={idx}
                                    className="group relative pt-7 border-t border-purple-500/20 hover:border-purple-400 transition-colors duration-500"
                                >
                                    {/* Top Expanding Laser Bar */}
                                    <div className="absolute -top-[1px] left-0 w-10 h-[2px] bg-gradient-to-r from-purple-400 to-violet-300 group-hover:w-full transition-all duration-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/5 border border-purple-400/35 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:border-purple-300 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300">
                                            <Icon size={22} />
                                        </div>
                                        <span className="text-xs font-mono font-bold tracking-widest text-purple-400/50 group-hover:text-purple-300 transition-colors">
                                            0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-purple-100/70 text-sm leading-relaxed font-light">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Our Values — Open-Air Numbered Manifesto Strips */}
            <section className="section-padding relative z-10 py-20 border-t border-purple-500/15">
                <div className="section-container">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        <div className="lg:col-span-5">
                            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">
                                Guiding Principles
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
                                The Code We Live By
                            </h2>
                            <p className="text-sm sm:text-base text-purple-100/75 leading-relaxed font-light border-l-2 border-purple-400/50 pl-4">
                                At Brightnest, our core tenets govern how we collaborate, take accountability for client uptime, and continuously push technical boundaries.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
                            {values.map((value, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-5 border-l border-purple-500/25 hover:border-purple-400 transition-colors group"
                                >
                                    <div className="absolute -left-[1.5px] top-0 h-6 w-[3px] bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)] group-hover:h-full transition-all duration-500" />
                                    <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-purple-400/70 mb-1.5">
                                        Principle 0{idx + 1}
                                    </span>
                                    <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-purple-300 transition-colors">
                                        {value.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-purple-200/70 mt-1.5 leading-relaxed font-light">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <StatsTelemetryStrip
                        stats={[
                            {
                                label: "Team Members",
                                value: "100+",
                                subtext: "Certified Engineers & Architects",
                            },
                            {
                                label: "Avg Tenure",
                                value: "4.5 yrs",
                                subtext: "High Culture Retention",
                            },
                            {
                                label: "Deployment Regions",
                                value: "15+",
                                subtext: "Pan-India Field Operations",
                            },
                            {
                                label: "Certifications",
                                value: "200+",
                                subtext: "Tier-1 OEM Accreditations",
                            },
                        ]}
                        laserColorClass="via-purple-400/60"
                        className="mt-16"
                    />
                </div>
            </section>

            {/* Open Positions — Open-Air Executive Job Ledger */}
            <section id="positions" className="section-padding relative z-10 py-20 border-t border-purple-500/15 bg-[#0a0418]/40">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-300 mb-3">
                                <Briefcase size={14} className="text-purple-400" />
                                Opportunities Ledger
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                Current Open Positions
                            </h2>
                        </div>
                        <p className="text-purple-100/70 text-sm sm:text-base max-w-md md:text-right font-light">
                            Find your next career leap. We are actively hiring across network engineering, security systems, and enterprise project management.
                        </p>
                    </div>

                    <div className="divide-y divide-purple-500/20 border-t border-b border-purple-500/20">
                        {openPositions.map((position, idx) => (
                            <a
                                key={idx}
                                href={`mailto:careers@brightnestedu.com?subject=Application for ${position.title}`}
                                className="block py-8 sm:py-10 px-2 sm:px-4 hover:bg-purple-500/[0.04] transition-all duration-300 group relative"
                            >
                                {/* Bottom Hover Laser Sweep */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-transparent group-hover:w-full transition-all duration-700" />

                                <div className="grid lg:grid-cols-12 gap-6 items-start lg:items-center">
                                    {/* Role Number & Department */}
                                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-2">
                                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400/70">
                                            ROLE // 0{idx + 1}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 border-l-2 border-purple-400 pl-2.5">
                                            {position.department}
                                        </span>
                                    </div>

                                    {/* Title, Description & Meta */}
                                    <div className="lg:col-span-7 space-y-2.5">
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                                            {position.title}
                                        </h3>
                                        <p className="text-purple-100/70 text-sm leading-relaxed font-light">
                                            {position.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-purple-200/75 font-mono">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={13} className="text-purple-400" /> {position.location}
                                            </span>
                                            <span className="text-purple-500/40">•</span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={13} className="text-purple-400" /> {position.type}
                                            </span>
                                            <span className="text-purple-500/40">•</span>
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase size={13} className="text-purple-400" /> {position.experience}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Column */}
                                    <div className="lg:col-span-2 flex lg:justify-end pt-2 lg:pt-0">
                                        <span className="inline-flex items-center gap-2 text-purple-300 font-bold text-sm group-hover:text-white transition-colors">
                                            Apply Now
                                            <span className="w-8 h-8 rounded-full border border-purple-400/40 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-all">
                                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application — Open-Air Horizon CTA */}
            <section className="section-padding relative z-10 py-20 pb-28 border-t border-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xl h-[1px] bg-gradient-to-r from-transparent via-purple-400/70 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

                <div className="section-container relative z-10 text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-purple-300 mb-4">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                        Talent Network
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
                        Don't See the Right Role?
                    </h2>
                    <p className="text-base sm:text-lg text-purple-100/80 mb-10 leading-relaxed font-light">
                        We are constantly expanding into new enterprise verticals. Forward your resume to our talent acquisition team and we will reach out when a match opens.
                    </p>
                    <a
                        href="mailto:careers@brightnestedu.com?subject=General Application"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-400 text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-[1.02] transition-all text-center"
                    >
                        <Mail size={18} />
                        Send Your Resume
                    </a>
                </div>
            </section>
        </main>
    )
}
