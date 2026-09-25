"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top fixed bottom-20 md:bottom-8 right-4 md:right-8 p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      style={{
        backgroundColor: "var(--accent)",
        color: "var(--primary)",
      }}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  )
}
