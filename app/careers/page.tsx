import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Coffee, GraduationCap, ArrowRight, Mail, Star } from "lucide-react"
import { getCareersData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import StructuredData from "@/components/StructuredData"

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
        <main >
            <StructuredData data={careersSchema} id="careers-schema" />
            {/* Hero */}
            <section className="section-padding bg-gradient-to-b from-brand-soft via-white to-white">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto text-center reveal">
                        <span className="badge mb-4">Join Our Team</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                            Build the Future of <span className="gradient-text">IT Infrastructure</span>
                        </h1>
                        <p className="text-xl text-muted mb-8">
                            Join a team of passionate experts working on cutting-edge enterprise solutions.
                            We're always looking for talented individuals who share our vision.
                        </p>
                        <a href="#positions" className="btn-primary">
                            View Open Positions <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                            Why Join Brightnest Edutainment?
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            We believe in investing in our people. Here's what makes us a great place to work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = getIcon(benefit.icon) || Star
                            return (
                                <div
                                    key={idx}
                                    className="reveal p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg transition-all group"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="p-3 rounded-xl bg-accent/10 inline-block mb-4 group-hover:bg-accent transition-colors">
                                        <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-gradient-to-b from-background to-white">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                                Our Values
                            </h2>
                            <p className="text-lg text-muted mb-8 leading-relaxed">
                                At Brightnest Edutainment, our values guide everything we do. They shape our culture,
                                drive our decisions, and define how we work together.
                            </p>
                            <div className="space-y-4">
                                {values.map((value, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-primary">{value.title}</h4>
                                            <p className="text-muted text-sm">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="reveal grid grid-cols-2 gap-4">
                            {[
                                { label: "Team Members", value: "100+" },
                                { label: "Avg Tenure", value: "4.5 yrs" },
                                { label: "Countries", value: "15+" },
                                { label: "Certifications", value: "200+" },
                            ].map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-xl bg-white border border-border text-center hover:border-accent transition-colors">
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <p className="text-sm text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="section-padding bg-white">
                <div className="section-container">
                    <div className="text-center mb-16 reveal">
                        <span className="badge mb-4">Open Positions</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                            Current Opportunities
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            Find your next challenge. We're looking for talented people to join our growing team.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openPositions.map((position, idx) => (
                            <a
                                key={idx}
                                href={`mailto:careers@brightnestedu.com?subject=Application for ${position.title}`}
                                className="reveal block p-6 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:border-accent hover:shadow-lg group"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors" style={{ color: "var(--primary)" }}>
                                                {position.title}
                                            </h3>
                                            <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                                                {position.department}
                                            </span>
                                        </div>
                                        <p className="text-muted mb-3">{position.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {position.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} /> {position.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={14} /> {position.experience}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-accent font-semibold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                        Apply Now <ArrowRight size={18} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application CTA */}
            <section className="section-padding bg-gradient-to-b from-background to-white">
                <div className="section-container">
                    <div className="reveal max-w-3xl mx-auto text-center p-6 sm:p-8 md:p-12 rounded-3xl" style={{ backgroundColor: "var(--primary)" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Don't See the Right Role?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-brand-on-dark mb-6 sm:mb-8">
                            We're always interested in meeting talented individuals. Send us your resume and we'll keep it on file for future opportunities.
                        </p>
                        <a
                            href="mailto:careers@brightnestedu.com?subject=General Application"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg"
                        >
                            <Mail size={20} />
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
