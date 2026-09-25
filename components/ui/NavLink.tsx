import { ReactNode } from "react"

interface NavLinkProps {
    href: string
    children: ReactNode
    className?: string
    isActive?: boolean
}

/**
 * NavLink - Reusable navigation link component
 * Single Responsibility: Only handles navigation link display
 * Liskov Substitution: Can be replaced with any component that accepts same props
 */
export function NavLink({
    href,
    children,
    className = "",
    isActive = false,
}: NavLinkProps) {
    return (
        <a
            href={href}
            className={`
        text-gray-800 hover:text-brand-blue font-medium text-sm transition-colors
        ${isActive ? "text-brand-blue" : ""}
        ${className}
      `}
        >
            {children}
        </a>
    )
}

interface NavButtonProps {
    href: string
    children: ReactNode
    variant?: "primary" | "secondary"
    className?: string
}

/**
 * NavButton - Reusable CTA button component for navigation
 * Open/Closed: Extensible via variant prop
 */
export function NavButton({
    href,
    children,
    variant = "primary",
    className = "",
}: NavButtonProps) {
    const variants = {
        primary: "bg-primary text-white hover:bg-brand-blue",
        secondary: "bg-brand-blue text-white hover:bg-primary",
    }

    return (
        <a
            href={href}
            className={`
        px-6 py-2 rounded-full font-medium text-sm transition-colors
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </a>
    )
}
