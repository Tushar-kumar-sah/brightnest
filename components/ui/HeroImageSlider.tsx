"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface SlideItem {
  image: string
  title?: string
  caption?: string
}

interface HeroImageSliderProps {
  slides: SlideItem[]
  accentColor?: string
  borderColor?: string
  glowShadow?: string
  glowColor?: string
  badgeText?: string
  activeDotClass?: string
  className?: string
}

export default function HeroImageSlider({
  slides,
  accentColor = "#38bdf8",
  borderColor = "border-white/20",
  glowShadow,
  glowColor,
  badgeText,
  activeDotClass = "bg-white",
  className = "",
}: HeroImageSliderProps) {
  const resolvedGlowShadow = glowShadow || (glowColor ? `shadow-[0_0_35px_${glowColor}]` : "shadow-[0_0_30px_rgba(0,0,0,0.5)]")
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (isPaused || slides.length <= 1) return
    const interval = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide, slides.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
    touchStartX.current = null
  }

  if (!slides || slides.length === 0) return null

  const currentSlide = slides[current]

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md border ${borderColor} ${resolvedGlowShadow} bg-black/40 backdrop-blur-xl group select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 16:10 or responsive height container */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title || `Slide ${current + 1}`}
              fill
              priority={current === 0}
              className="object-cover object-center scale-[1.01]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />

            {/* Gradient Overlays for depth and contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Optional Badge top-left */}
        {badgeText && (
          <div className="absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-black/75 border border-white/20 text-slate-200 backdrop-blur-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            {badgeText}
          </div>
        )}

        {/* Counter Badge top-right */}
        <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-black/70 border border-white/20 text-white backdrop-blur-md">
          <span style={{ color: accentColor }}>0{current + 1}</span> / 0{slides.length}
        </div>

        {/* Caption Overlay at bottom */}
        {(currentSlide.title || currentSlide.caption) && (
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
            {currentSlide.title && (
              <h4 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-md mb-1">
                {currentSlide.title}
              </h4>
            )}
            {currentSlide.caption && (
              <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed drop-shadow-sm">
                {currentSlide.caption}
              </p>
            )}
          </div>
        )}

        {/* Previous & Next Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-black/90 hover:scale-105 transition-all cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-black/90 hover:scale-105 transition-all cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? `w-6 ${activeDotClass}` : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
