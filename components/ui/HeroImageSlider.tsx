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
  const touchStartY = useRef<number | null>(null)

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

  // Touch swipe gesture handlers (with vertical page scroll protection)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const diffX = touchStartX.current - e.changedTouches[0].clientX
    const diffY = touchStartY.current - e.changedTouches[0].clientY
    // Only advance slide if horizontal movement is dominant over vertical scrolling
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 0) nextSlide()
      else prevSlide()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  if (!slides || slides.length === 0) return null

  const currentSlide = slides[current]

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border ${borderColor} ${resolvedGlowShadow} bg-black/40 backdrop-blur-xl group select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Responsive height container across mobile, tablet, and desktop */}
      <div className="relative w-full h-[250px] xs:h-[280px] sm:h-[330px] md:h-[390px] lg:h-[440px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Optional Badge top-left */}
        {badgeText && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-black/80 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            {badgeText}
          </div>
        )}

        {/* Counter Badge top-right */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wider bg-black/80 border border-white/20 text-white backdrop-blur-md shadow-md">
          <span style={{ color: accentColor }}>0{current + 1}</span> / 0{slides.length}
        </div>

        {/* Caption Overlay at bottom (with responsive text sizing and generous right padding to prevent collision with dots) */}
        {(currentSlide.title || currentSlide.caption) && (
          <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 z-20 bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-10 sm:pt-14">
            <div className="max-w-[76%] xs:max-w-[80%] sm:max-w-[84%]">
              {currentSlide.title && (
                <h4 className="text-white font-bold text-xs sm:text-sm md:text-base leading-snug drop-shadow-md mb-0.5 sm:mb-1 line-clamp-1">
                  {currentSlide.title}
                </h4>
              )}
              {currentSlide.caption && (
                <p className="text-slate-200/90 text-[10.5px] xs:text-[11px] sm:text-xs md:text-sm line-clamp-2 leading-relaxed drop-shadow font-light">
                  {currentSlide.caption}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Previous & Next Arrows (with ample tap targets for mobile & desktop) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/25 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-black/95 active:scale-90 transition-all cursor-pointer backdrop-blur-md shadow-lg"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/25 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-black/95 active:scale-90 transition-all cursor-pointer backdrop-blur-md shadow-lg"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots Indicator (encapsulated in a sleek frosted pill container) */}
        <div className="absolute bottom-2.5 sm:bottom-3.5 right-2.5 sm:right-4 z-30 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15 shadow-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? `w-5 sm:w-6 ${activeDotClass}` : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
