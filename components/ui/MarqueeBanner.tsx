"use client"

import { ReactNode } from "react"

interface MarqueeBannerProps {
    messages: string[]
    speed?: number // in seconds
    bgColor?: string
    textColor?: string
    className?: string
    rightContent?: ReactNode
}

/**
 * MarqueeBanner - Reusable scrolling banner component
 * Single Responsibility: Only handles marquee scrolling display
 * Open/Closed: Configurable via props without modifying component
 */
export function MarqueeBanner({
    messages,
    speed = 20,
    bgColor = "bg-navy-dark",
    textColor = "text-white",
    className = "",
    rightContent,
}: MarqueeBannerProps) {
    return (
        <div className={`${bgColor} ${textColor} py-2 px-4 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="marquee-container overflow-hidden whitespace-nowrap flex-1">
                    <div
                        className="marquee-content inline-block whitespace-nowrap"
                        style={{ animationDuration: `${speed}s` }}
                    >
                        {messages.map((message, index) => (
                            <span key={index} className="inline-block mx-8 text-sm">
                                {message}
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {messages.map((message, index) => (
                            <span key={`duplicate-${index}`} className="inline-block mx-8 text-sm">
                                {message}
                            </span>
                        ))}
                    </div>
                </div>
                {rightContent && (
                    <div className="hidden sm:flex items-center gap-4 sm:gap-6 shrink-0 relative z-10 bg-navy-dark pl-4">
                        {rightContent}
                    </div>
                )}
            </div>

            <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marqueeLR linear infinite;
          will-change: transform;
        }
        
        @keyframes marqueeLR {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    )
}
