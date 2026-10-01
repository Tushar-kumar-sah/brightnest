interface LogoProps {
    primaryText?: string
    secondaryText?: string
    primaryColor?: string
    secondaryColor?: string
    href?: string
    className?: string
    inverted?: boolean
}

/**
 * Logo - Reusable logo component
 * Single Responsibility: Only handles logo display
 */
export function Logo({
    href = "/",
    className = "",
    inverted = false,
}: LogoProps) {
    return (
        <a href={href} className={`flex items-center ${className}`}>
            <img
                src="/logo-256.webp"
                srcSet="/logo-128.webp 128w, /logo-256.webp 256w, /logo-512.webp 512w, /logo-1024.webp 1024w"
                sizes="(max-width: 639px) 154px, (max-width: 1023px) 230px, 306px"
                alt="Brightnest Edutainment Logo"
                width={1024}
                height={256}
                className={`h-auto w-[140px] sm:w-[170px] lg:w-[200px] object-contain transition-all ${
                    inverted ? "brightness-0 invert" : ""
                }`}
                fetchPriority="high"
            />
        </a>
    )
}
