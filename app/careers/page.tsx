import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Coffee, GraduationCap, ArrowRight, Mail, Star, Sparkles } from "lucide-react"
import { getCareersData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"
import HeroImageSlider from "@/components/ui/HeroImageSlider"

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
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                                Build the Future of{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                                    IT Infrastructure
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-purple-100/75 mb-8 leading-relaxed">
                                Join a mission-driven team of network architects, security specialists, and systems engineers shaping enterprise technology ecosystems across India.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="#positions"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-[1.02] transition-all gap-2"
                                >
                                    View Open Positions <ArrowRight size={16} />
                                </a>
                                <a
                                    href="mailto:careers@brightnestedu.com"
                                    className="inline-flex items-center justify-center px-7 py-3.5 border border-purple-400/40 text-purple-200 font-semibold text-sm rounded-md hover:bg-purple-500/10 hover:border-purple-300 transition-all gap-2"
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

            {/* Why Join Us */}
            <section className="section-padding relative z-10 py-16 border-t border-purple-500/15 bg-[#0d0520]/50 backdrop-blur-sm">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                            <Sparkles size={14} />
                            Culture & Benefits
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                            Why Join Brightnest Edutainment?
                        </h2>
                        <p className="text-purple-100/70 text-base max-w-2xl mx-auto">
                            We invest directly in our people through continuous OEM certifications, complex real-world project ownership, and comprehensive wellness support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = getIcon(benefit.icon) || Star
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-md bg-[#160a33]/60 border border-purple-500/20 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-xl transition-all duration-300 group"
                                >
                                    <div className="p-3.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/25 transition-all inline-block mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-purple-100/70 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding relative z-10 py-20 border-t border-purple-500/15">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                                Guiding Principles
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                                The Code We Live By
                            </h2>
                            <p className="text-base text-purple-100/75 mb-8 leading-relaxed">
                                At Brightnest, our core tenets govern how we collaborate, take accountability for client uptime, and continuously push technical boundaries.
                            </p>
                            <div className="space-y-4">
                                {values.map((value, idx) => (
                                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-md bg-[#14082e]/50 border border-purple-500/15">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] mt-2 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{value.title}</h4>
                                            <p className="text-xs text-purple-200/70 mt-1 leading-relaxed">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Team Members", value: "100+" },
                                { label: "Avg Tenure", value: "4.5 yrs" },
                                { label: "Deployment Regions", value: "15+" },
                                { label: "Certifications", value: "200+" },
                            ].map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-md bg-[#160a33]/70 border border-purple-500/20 text-center hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] backdrop-blur-xl transition-all">
                                    <div className="text-3xl font-extrabold text-purple-400 mb-1">{stat.value}</div>
                                    <p className="text-xs uppercase font-medium tracking-wider text-purple-200/70">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="section-padding relative z-10 py-20 border-t border-purple-500/15 bg-[#0a0418]/60 backdrop-blur-sm">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-3">
                            <Briefcase size={14} />
                            Opportunities
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                            Current Open Positions
                        </h2>
                        <p className="text-purple-100/70 text-base max-w-2xl mx-auto">
                            Find your next career leap. We are actively hiring across network engineering, security systems, and enterprise project management.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openPositions.map((position, idx) => (
                            <a
                                key={idx}
                                href={`mailto:careers@brightnestedu.com?subject=Application for ${position.title}`}
                                className="block p-6 rounded-md bg-[#160a33]/65 border border-purple-500/25 hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-xl transition-all duration-300 group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {position.title}
                                            </h3>
                                            <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                                                {position.department}
                                            </span>
                                        </div>
                                        <p className="text-purple-100/70 text-sm mb-3 leading-relaxed">{position.description}</p>
                                        <div className="flex flex-wrap gap-4 text-xs text-purple-200/70">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={13} className="text-purple-400" /> {position.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={13} className="text-purple-400" /> {position.type}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase size={13} className="text-purple-400" /> {position.experience}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm group-hover:text-white transition-colors">
                                        Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application CTA */}
            <section className="section-padding relative z-10 py-16 pb-24">
                <div className="section-container">
                    <div className="rounded-md p-8 sm:p-12 text-center bg-gradient-to-r from-[#120626] via-[#240e4f] to-[#120626] border border-purple-500/35 shadow-[0_0_50px_rgba(168,85,247,0.2)] relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/15 blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-violet-500/15 blur-[80px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                                Don't See the Right Role?
                            </h2>
                            <p className="text-base sm:text-lg text-purple-100/80 mb-8 leading-relaxed">
                                We are constantly expanding into new enterprise verticals. Forward your resume to our talent acquisition team and we will reach out when a match opens.
                            </p>
                            <a
                                href="mailto:careers@brightnestedu.com?subject=General Application"
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-500 to-violet-400 text-white font-bold text-sm rounded-md shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-[1.02] transition-all"
                            >
                                <Mail size={18} />
                                Send Your Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
