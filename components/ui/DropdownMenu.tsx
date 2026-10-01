"use client"

import { useState } from "react"
import { ChevronDown, LucideIcon } from "lucide-react"

export interface DropdownItem {
    name: string
    href: string
    icon: LucideIcon
    description: string
}

interface DropdownMenuProps {
    label: string
    items: DropdownItem[]
    viewAllHref?: string
    viewAllLabel?: string
    className?: string
}

/**
 * DropdownMenu - Reusable dropdown menu component
 * Single Responsibility: Only handles dropdown display and state
 * Dependency Inversion: Depends on abstract DropdownItem interface
 */
export function DropdownMenu({
    label,
    items,
    viewAllHref,
    viewAllLabel = "View All",
    className = "",
}: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 text-gray-800 hover:text-brand-blue font-medium text-sm transition-colors">
                {label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Panel */}
            <div
                className={`
          absolute top-full left-1/2 -translate-x-1/2 pt-4 
          transition-all duration-200 z-50
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
            >
                <div className="bg-[#070c1e]/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_0_20px_rgba(255,255,255,0.02)] border border-white/20 backdrop-blur-2xl backdrop-saturate-150 p-4 min-w-[440px] grid grid-cols-2 gap-2">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-white/15 hover:bg-white/10 transition-all duration-200 group"
                            >
                                <div className="p-2 rounded-lg bg-white/10 border border-white/15 text-[#1ec9f2] group-hover:scale-105 group-hover:bg-[#1ec9f2]/20 group-hover:border-[#1ec9f2]/40 transition-all">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-sm group-hover:text-[#1ec9f2] transition-colors">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-slate-300/80 mt-0.5">
                                        {item.description}
                                    </div>
                                </div>
                            </a>
                        )
                    })}

                    {viewAllHref && (
                        <div className="col-span-2 border-t border-white/15 mt-2 pt-3">
                            <a
                                href={viewAllHref}
                                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1ec9f2] hover:text-[#38d7f8] transition-colors"
                            >
                                {viewAllLabel}
                                <ChevronDown size={14} className="rotate-[-90deg]" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
