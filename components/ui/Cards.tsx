import Link from "next/link"
import Image from "next/image"
import { ArrowRight, LucideIcon, CheckCircle, Star } from "lucide-react"
import { RevealOnScroll } from "@/components/animations"

interface ServiceCardProps {
    name: string
    description: string
    icon: LucideIcon
    href: string
    color: string
    delay?: number
}

/**
 * ServiceCard - Reusable service card with icon and link
 * Single Responsibility: Displays a single service
 */
export function ServiceCard({
    name,
    description,
    icon: Icon,
    href,
    color,
    delay = 0,
}: ServiceCardProps) {
    return (
        <RevealOnScroll delay={delay}>
            <Link
                href={href}
                className="group block p-6 rounded-2xl bg-white border border-border hover:shadow-xl hover:border-accent hover:-translate-y-2 transition-all duration-300"
            >
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--primary)" }}>
                    {name}
                </h3>
                <p className="text-sm text-muted mb-4">{description}</p>
                <div className="flex items-center text-accent font-semibold text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all">
                    Explore <ArrowRight size={16} className="ml-2" />
                </div>
            </Link>
        </RevealOnScroll>
    )
}

interface CaseStudyCardProps {
    title: string
    client: string
    description: string
    image: string
    results: string[]
    category: string
    delay?: number
}

/**
 * CaseStudyCard - Reusable case study display card
 * Open/Closed: Extensible via props without code modification
 */
export function CaseStudyCard({
    title,
    client,
    description,
    image,
    results,
    category,
    delay = 0,
}: CaseStudyCardProps) {
    return (
        <RevealOnScroll
            delay={delay}
            className="group rounded-2xl overflow-hidden bg-navy-dark border border-white/10 hover:shadow-xl hover:border-accent"
        >
            <div className="relative h-40 sm:h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                    <span className="badge">{category}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">{client}</p>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-white/80 mb-4 text-sm">{description}</p>
                <div className="space-y-2">
                    {results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle size={16} className="text-accent flex-shrink-0" />
                            <span className="text-white/80">{result}</span>
                        </div>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    )
}

interface TestimonialCardProps {
    name: string
    title: string
    image: string
    content: string
    rating: number
    company: string
    delay?: number
}

/**
 * TestimonialCard - Reusable testimonial display card
 * Interface Segregation: Focused interface for testimonial data
 */
export function TestimonialCard({
    name,
    title,
    image,
    content,
    rating,
    company,
    delay = 0,
}: TestimonialCardProps) {
    return (
        <RevealOnScroll
            delay={delay}
            className="h-full min-h-[280px] sm:min-h-[320px] flex flex-col p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-background to-white border border-border hover:shadow-lg hover:border-accent group"
        >
            <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-muted mb-6 italic leading-relaxed flex-1">"{content}"</p>
            <div className="flex items-center gap-4">
                <Image
                    src={image}
                    alt={name}
                    width={56}
                    height={56}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-accent/20"
                    style={{ width: 56, height: 56 }}
                    loading="lazy"
                />
                <div>
                    <p className="font-bold" style={{ color: "var(--primary)" }}>{name}</p>
                    <p className="text-sm text-muted">{title}</p>
                    <p className="text-xs text-accent">{company}</p>
                </div>
            </div>
        </RevealOnScroll>
    )
}

interface IndustryBadgeProps {
    name: string
    delay?: number
}

/**
 * IndustryBadge - Reusable industry tag/badge
 * Single Responsibility: Displays single industry
 */
export function IndustryBadge({ name, delay = 0 }: IndustryBadgeProps) {
    return (
        <RevealOnScroll
            delay={delay}
            className="px-6 py-3 rounded-full bg-white border border-border hover:border-accent hover:shadow-md cursor-default text-sm font-medium text-secondary hover:text-primary transition-all"
        >
            {name}
        </RevealOnScroll>
    )
}
