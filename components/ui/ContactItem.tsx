import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface ContactItemProps {
    icon: LucideIcon
    href?: string
    children: ReactNode
    onClick?: () => void
    className?: string
    iconClassName?: string
    textClassName?: string
}

/**
 * ContactItem - Reusable contact info item component
 * Single Responsibility: Only handles contact item display
 * Interface Segregation: Simple props interface for specific use case
 */
export function ContactItem({
    icon: Icon,
    href,
    children,
    onClick,
    className = "",
    iconClassName = "text-gray-600",
    textClassName = "font-semibold text-gray-800 hover:text-brand-blue",
}: ContactItemProps) {
    const baseClasses = "flex items-center gap-2 text-sm transition-colors"
    const interactiveClasses = "hover:text-brand-blue"

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} ${interactiveClasses} ${className}`}
            >
                <Icon size={16} className={iconClassName} />
                <span className={textClassName}>
                    {children}
                </span>
            </a>
        )
    }

    if (onClick) {
        return (
            <button
                onClick={onClick}
                className={`${baseClasses} ${interactiveClasses} text-gray-700 px-2 py-1 rounded hover:bg-gray-50 ${className}`}
            >
                <Icon size={16} className={iconClassName} />
                <span className={`font-medium ${textClassName}`}>{children}</span>
            </button>
        )
    }

    return (
        <div className={`${baseClasses} text-gray-600 ${className}`}>
            <Icon size={16} className={iconClassName} />
            <span className={textClassName}>{children}</span>
        </div>
    )
}
