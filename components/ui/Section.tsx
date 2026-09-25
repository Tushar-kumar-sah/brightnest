import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
    id?: string
}

/**
 * Section - Base section wrapper component
 * Single Responsibility: Provides consistent section layout
 */
export function Section({
    children,
    className = "",
    id,
}: SectionProps) {
    return (
        <section id={id} className={`section-padding ${className}`}>
            <div className="section-container">
                {children}
            </div>
        </section>
    )
}

interface SectionHeaderProps {
    badge?: string
    title: string
    subtitle?: string
    className?: string
    titleColor?: string
}

/**
 * SectionHeader - Reusable section header with badge, title, subtitle
 * Open/Closed: Extensible via optional props
 */
export function SectionHeader({
    badge,
    title,
    subtitle,
    className = "",
    titleColor = "var(--primary)",
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-8 md:mb-16 ${className}`}>
            {badge && <span className="badge mb-3 md:mb-4">{badge}</span>}
            <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
                style={{ color: titleColor }}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm md:text-base lg:text-lg text-muted max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

interface StatCardProps {
    value: string | number
    label: string
    suffix?: string
    className?: string
}

/**
 * StatCard - Reusable statistic display component
 * Single Responsibility: Displays a single stat
 */
export function StatCard({
    value,
    label,
    suffix = "",
    className = "",
}: StatCardProps) {
    return (
        <div className={`text-center ${className}`}>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-2">
                {value}{suffix}
            </div>
            <p className="text-muted text-xs sm:text-sm lg:text-base">
                {label}
            </p>
        </div>
    )
}

interface RatingBadgeProps {
    rating: number
    clientCount: string
    label?: string
    className?: string
}

/**
 * RatingBadge - Premium rating display badge
 * Interface Segregation: Focused interface for rating display
 */
export function RatingBadge({
    rating,
    clientCount,
    label = "Satisfied Clients",
    className = "",
}: RatingBadgeProps) {
    return (
        <div className={`flex justify-center items-center gap-3 mb-4 md:mb-6 ${className}`}>
            <div className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-300 text-gray-300'}`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">{rating.toFixed(1)}</span>
                <span className="text-gray-300 mx-0.5 sm:mx-1">|</span>
                <span className="text-xs sm:text-sm font-medium text-gray-600">{clientCount} {label}</span>
            </div>
        </div>
    )
}
