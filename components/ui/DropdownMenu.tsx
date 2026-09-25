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
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[420px] grid grid-cols-2 gap-2">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-brand-soft text-brand-blue group-hover:bg-brand-tint transition-colors">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 text-sm group-hover:text-brand-blue transition-colors">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                        {item.description}
                                    </div>
                                </div>
                            </a>
                        )
                    })}

                    {viewAllHref && (
                        <div className="col-span-2 border-t border-gray-100 mt-2 pt-3">
                            <a
                                href={viewAllHref}
                                className="flex items-center justify-center gap-2 text-sm font-medium text-brand-blue hover:text-primary transition-colors"
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
