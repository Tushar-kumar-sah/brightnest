import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface FooterLinkProps {
    href: string
    children: React.ReactNode
    icon?: LucideIcon
    external?: boolean
    className?: string
}

/**
 * FooterLink - Reusable footer link component
 * Single Responsibility: Only handles footer link display
 */
export function FooterLink({
    href,
    children,
    icon: Icon,
    external = false,
    className = "",
}: FooterLinkProps) {
    const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}

    return (
        <Link
            href={href}
            className={`text-brand-muted hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 ${className}`}
            {...linkProps}
        >
            {Icon && <Icon size={14} className="text-accent flex-shrink-0" />}
            <span className="truncate">{children}</span>
        </Link>
    )
}

interface FooterSectionProps {
    title: string
    children: React.ReactNode
    className?: string
}

/**
 * FooterSection - Reusable footer section with title
 * Single Responsibility: Provides consistent section layout
 */
export function FooterSection({
    title,
    children,
    className = "",
}: FooterSectionProps) {
    return (
        <div className={className}>
            <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-6">{title}</h4>
            {children}
        </div>
    )
}

interface SocialLinkProps {
    href: string
    icon: LucideIcon
    label: string
    className?: string
}

/**
 * SocialLink - Reusable social media link component
 * Interface Segregation: Simple interface for social links
 */
export function SocialLink({
    href,
    icon: Icon,
    label,
    className = "",
}: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors ${className}`}
            aria-label={label}
        >
            <Icon size={18} />
        </a>
    )
}

interface ContactInfoItemProps {
    icon: LucideIcon
    children: React.ReactNode
    href?: string
    className?: string
}

/**
 * ContactInfoItem - Reusable contact info display for footer
 * Open/Closed: Can be link or static text based on href
 */
export function ContactInfoItem({
    icon: Icon,
    children,
    href,
    className = "",
}: ContactInfoItemProps) {
    const content = (
        <>
            <Icon size={16} className="mt-0.5 flex-shrink-0 text-accent sm:size-[18px]" />
            <span className="text-xs sm:text-sm">{children}</span>
        </>
    )

    if (href) {
        return (
            <a
                href={href}
                className={`flex items-start gap-2 sm:gap-3 text-brand-muted hover:text-white transition-colors ${className}`}
            >
                {content}
            </a>
        )
    }

    return (
        <div className={`flex items-start gap-3 text-brand-muted ${className}`}>
            {content}
        </div>
    )
}
