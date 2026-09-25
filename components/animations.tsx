"use client"

import { useEffect, useState, useRef } from "react"

// Typing animation words
const heroWords = ["Simplified", "Secured", "Optimized", "Transformed"]

export function TypingAnimation() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = heroWords[currentWordIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < word.length) {
                    setDisplayText(word.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % heroWords.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentWordIndex])

    return (
        <span className="relative">
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse">|</span>
        </span>
    )
}

export function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0)
    const [inView, setInView] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!inView) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, inView])

    return <span ref={ref}>{count}</span>
}

export function RevealOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export function ParallaxHero({ children }: { children: React.ReactNode }) {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100
            const y = (e.clientY / window.innerHeight) * 100
            setMousePos({ x, y })
        }

        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{
                background: `
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(45, 212, 191, 0.12) 0%, transparent 50%),
          radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(30, 58, 138, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)
        `,
            }}
        >
            {children}
        </div>
    )
}
