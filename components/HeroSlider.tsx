"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
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
}

const slides: HeroSlide[] = [
  {
    id: "networking",
    headline: "Empowering\nCompanies To Scale\nEnterprise Networks\nAcross India",
    subhead1: "Network Deployment,",
    subhead2: "PAN-India",
    image: "/modern-tech-infrastructure-network.jpg",
    href: "/services/networking",
  },
  {
    id: "security",
    headline: "Build A Business\nThat Security Threats\nCan't Stop Or\nCompromise",
    subhead1: "AI CCTV & Biometrics,",
    subhead2: "Zero-Trust Security",
    image: "/security-infrastructure.jpg",
    href: "/services/security",
  },
  {
    id: "av",
    headline: "Transform Boardrooms\nInto Intelligent\nCollaboration Hubs\nAcross India",
    subhead1: "Smart AV Integration,",
    subhead2: "Teams & Zoom Rooms",
    image: "/modern-conference-room.jpg",
    href: "/services/av",
  },
  {
    id: "cabling",
    headline: "Future-Proofing\nData Centers With\nHigh-Density Fiber\nArchitecture",
    subhead1: "Structured Cabling,",
    subhead2: "Tier III/IV Standards",
    image: "/data-center-infrastructure.jpg",
    href: "/services/cabling",
  },
  {
    id: "managed",
    headline: "Powering Enterprises\nWith Complete IT\nExcellence &\n24/7 SLA Support",
    subhead1: "Proactive Operations,",
    subhead2: "Smarter Outcomes",
    image: "/gcc-enterprise-engineer.jpg",
    href: "/services/professional",
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
      className="relative w-full h-screen min-h-[640px] max-h-[960px] overflow-hidden bg-black select-none"
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
              className="object-cover object-center lg:object-right"
              priority
              sizes="100vw"
            />
          </div>

          {/* Gradients matching Team Computers Reference (Solid black on left fading to reveal image on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-[65%] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 z-10" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />

          {/* Slide Text Content Container */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center pt-24 sm:pt-28 pb-28 sm:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Left Column: Headline (slim, balanced, elegant size) */}
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  style={{ fontWeight: 300 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-light font-[300] !font-[300] text-white tracking-normal leading-[1.18] whitespace-pre-line"
                >
                  {activeSlide.headline}
                </motion.h1>
              </div>

              {/* Right / Center Column: Subhead with Vertical Cyan Line & Learn More Pill Button (Exact Reference Match) */}
              <div className="lg:col-span-5 pb-1 lg:pb-2">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="flex items-stretch gap-4 sm:gap-5"
                >
                  {/* Tall Vertical Cyan Line */}
                  <div className="w-[2.5px] bg-[#1ec9f2] rounded-full flex-shrink-0 shadow-[0_0_12px_#1ec9f2]" />

                  <div className="space-y-4 py-1">
                    {/* Subhead */}
                    <div
                      style={{ fontWeight: 300 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-light font-[300] !font-[300] text-white/95 leading-snug"
                    >
                      {activeSlide.subhead1} <br />
                      {activeSlide.subhead2}
                    </div>

                    {/* Learn More Pill Button (Cyan to Emerald Gradient) */}
                    <div>
                      <Link
                        href={activeSlide.href}
                        className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#1ec9f2] to-[#0db16a] hover:from-[#38d7f8] hover:to-[#10c477] shadow-[0_4px_20px_rgba(30,201,242,0.45)] hover:shadow-[0_4px_30px_rgba(30,201,242,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group whitespace-nowrap"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Left Circular Arrows aligned directly with content container */}
      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-black/30 hover:bg-white/20 backdrop-blur-sm active:scale-90"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/60 hover:border-white text-white flex items-center justify-center transition-all duration-200 bg-black/30 hover:bg-white/20 backdrop-blur-sm active:scale-90"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
