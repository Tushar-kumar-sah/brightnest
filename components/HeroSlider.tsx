"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
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

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
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
      className="relative w-full h-[100dvh] min-h-[560px] max-h-[960px] overflow-hidden bg-[#070c1e] select-none touch-pan-y"
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

          {/* Seamless Gradients blending with unified #070c1e theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070c1e] via-[#070c1e]/85 to-transparent w-full lg:w-[65%] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-transparent to-[#070c1e]/60 z-10" />
          <div className="absolute top-0 inset-x-0 h-24 lg:h-32 bg-gradient-to-b from-[#070c1e]/80 via-[#070c1e]/30 to-transparent z-10 pointer-events-none" />
          {/* Bottom Seamless Dissolve into next section */}
          <div className="absolute bottom-0 inset-x-0 h-40 sm:h-56 bg-gradient-to-t from-[#070c1e] via-[#070c1e]/75 to-transparent z-10 pointer-events-none" />

          {/* Slide Text Content Container */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 flex flex-col justify-center pt-24 sm:pt-28 pb-32 sm:pb-32">
            <div className="max-w-3xl">
              {/* Headline (slim, balanced, elegant size) */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{ fontWeight: 300 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-light font-[300] !font-[300] text-white tracking-normal leading-[1.2] whitespace-pre-line"
              >
                {activeSlide.headline}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Circular Arrows and Slide Dots aligned directly with content container, safely positioned above mobile bar */}
      <div className="absolute bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:bottom-10 inset-x-0 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-black/35 hover:bg-white/20 backdrop-blur-sm active:scale-90"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-black/35 hover:bg-white/20 backdrop-blur-sm active:scale-90"
            >
              <ArrowRight size={18} />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-1.5 ml-2 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-5 sm:w-6 bg-[#1ec9f2] shadow-[0_0_10px_#1ec9f2]"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
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
