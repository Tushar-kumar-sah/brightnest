"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  headline: string;
  subhead1: string;
  subhead2: string;
  image: string;
  href: string;
  imageClass: string;
}

const slides: HeroSlide[] = [
  {
    id: "networking",
    headline: "Empowering\nCompanies To Scale\nEnterprise Networks\nGlobally",
    subhead1: "Enterprise Network,",
    subhead2: "Globally",
    image: "/indian-network-noc-engineer.jpg",
    href: "/services/networking",
    imageClass: "hero-img-networking",
  },
  {
    id: "security",
    headline: "Build A Business\nThat Security Threats\nCan't Stop Or\nCompromise",
    subhead1: "AI CCTV & Biometrics,",
    subhead2: "Zero-Trust Security",
    image: "/indian-security-specialist.jpg",
    href: "/services/security",
    imageClass: "hero-img-security",
  },
  {
    id: "av",
    headline: "Transform Boardrooms\nInto Intelligent\nCollaboration Hubs\nAcross India",
    subhead1: "Smart AV Integration,",
    subhead2: "Teams & Zoom Rooms",
    image: "/indian-smart-boardroom.jpg",
    href: "/services/av",
    imageClass: "hero-img-av",
  },
  {
    id: "cabling",
    headline: "Future-Proofing\nData Centers With\nHigh-Density Fiber\nArchitecture",
    subhead1: "Structured Cabling,",
    subhead2: "Tier III/IV Standards",
    image: "/datacenter-infrastructure-engineer.jpg",
    href: "/services/cabling",
    imageClass: "hero-img-cabling",
  },
  {
    id: "managed",
    headline: "Powering Enterprises\nWith Complete IT\nExcellence &\n24/7 SLA Support",
    subhead1: "Proactive Operations,",
    subhead2: "Smarter Outcomes",
    image: "/gcc-enterprise-engineer.jpg",
    href: "/services/professional",
    imageClass: "hero-img-managed",
  },
];

const AUTOPLAY_DELAY = 5000; // 5 seconds per slide automatic sliding

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile (with vertical scroll pass-through protection)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only advance slide if horizontal movement is dominant over vertical scrolling
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeSlide = slides[current];

  // Carousel slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween" as const, duration: 0.65, ease: "easeInOut" as const },
        opacity: { duration: 0.45 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0.85,
      transition: {
        x: { type: "tween" as const, duration: 0.65, ease: "easeInOut" as const },
        opacity: { duration: 0.45 },
      },
    }),
  };

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[620px] max-h-[960px] overflow-hidden bg-[#070c1e] select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="What We Do Hero Slider"
    >
      {/* Sliding Stages */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Full-Bleed Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={activeSlide.image}
              alt={activeSlide.headline.replace(/\n/g, " ")}
              fill
              className={`object-cover ${activeSlide.imageClass}`}
              priority
              sizes="100vw"
            />
          </div>

          {/* Gradients: Left-to-right on desktop, bottom-up on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070c1e]/95 via-[#070c1e]/75 to-transparent w-full sm:w-[85%] lg:w-[65%] z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-[#070c1e]/45 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-[#070c1e]/90 via-[#070c1e]/40 to-transparent z-10 pointer-events-none" />
          {/* Bottom Seamless Dissolve into next section */}
          <div className="absolute bottom-0 inset-x-0 h-36 sm:h-52 bg-gradient-to-t from-[#070c1e] via-[#070c1e]/80 to-transparent z-10 pointer-events-none" />

          {/* Slide Text Content Container */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 flex flex-col justify-center pt-20 sm:pt-28 pb-32 sm:pb-36">
            <div className="max-w-3xl">
              {/* Category Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-[#38bdf8] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-5 backdrop-blur-md shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse shadow-[0_0_8px_#1ec9f2]" />
                <span>{activeSlide.subhead1} {activeSlide.subhead2}</span>
              </motion.div>

              {/* Headline (slim, balanced, responsive size) */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontWeight: 300 }}
                className="text-[1.65rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-light font-[300] !font-[300] text-white tracking-normal leading-[1.25] sm:leading-[1.2] whitespace-pre-line"
              >
                {activeSlide.headline}
              </motion.h1>

              {/* Quick Action Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 sm:mt-7 flex items-center gap-3"
              >
                <Link
                  href={activeSlide.href}
                  className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/25 hover:border-white/50 text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all cursor-pointer"
                >
                  <span>Explore Solution</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-[#38bdf8]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Circular Arrows and Slide Dots (positioned safely above mobile bottom bar) */}
      <div className="absolute bottom-24 sm:bottom-24 md:bottom-10 lg:bottom-12 inset-x-0 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/50 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-[#070c1e]/75 hover:bg-white/20 backdrop-blur-md active:scale-90 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/50 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-[#070c1e]/75 hover:bg-white/20 backdrop-blur-md active:scale-90 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-1.5 ml-2 bg-[#070c1e]/75 backdrop-blur-md px-3 py-2 rounded-full border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "w-6 bg-[#1ec9f2] shadow-[0_0_10px_#1ec9f2]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
