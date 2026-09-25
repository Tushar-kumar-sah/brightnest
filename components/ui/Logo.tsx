interface LogoProps {
    primaryText?: string
    secondaryText?: string
    primaryColor?: string
    secondaryColor?: string
    href?: string
    className?: string
}

/**
 * Logo - Reusable logo component
 * Single Responsibility: Only handles logo display
 */
export function Logo({
    href = "/",
    className = "",
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
                className="h-auto w-[154px] object-contain sm:w-[230px] lg:w-[306px]"
                fetchPriority="high"
            />
        </a>
    )
}
