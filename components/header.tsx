"use client"

import {
  Logo,
  NavLink,
  NavButton,
  DropdownMenu,
  MobileMenu,
} from "@/components/ui"
import { getNavigationData } from "@/lib/data"
import { getIcon } from "@/lib/icons"
import { Star } from "lucide-react"

/**
 * Header Component - Refactored with SOLID Principles
 * 
 * Single Responsibility: Composes UI components, doesn't handle individual logic
 * Open/Closed: Easy to extend with new nav items via config
 * Dependency Inversion: Depends on abstractions (components & config)
 */
export default function Header() {
  const {
    navLinks,
    serviceItems,
    branding,
  } = getNavigationData()
  // Map string icons to components for DropdownMenu
  const mappedServiceItems = serviceItems.map(item => ({
    ...item,
    icon: getIcon(item.icon) || Star
  }))

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:py-0">
        {/* LEFT: Logo */}
        <div className="flex items-center lg:px-0 lg:py-4">
          <Logo
            primaryText={branding.primaryName}
            secondaryText={branding.secondaryName}
          />
        </div>

        {/* Mobile Menu Button - visible on mobile only */}
        <MobileMenu className="lg:hidden" />

        {/* RIGHT: Desktop Content - hidden on mobile */}
        <div className="hidden lg:flex lg:items-center">
            {/* Navigation */}
            <nav className="flex items-center lg:py-4">
              <div className="flex items-center gap-7">
                {/* Regular Nav Links (before Services) */}
                {navLinks.slice(0, 2).map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}

                {/* Services Dropdown */}
                <DropdownMenu
                  label="Services"
                  items={mappedServiceItems}
                  viewAllHref="/services"
                  viewAllLabel="View All Services"
                />

                {/* Regular Nav Links (after Services) */}
                {navLinks.slice(2).map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}

                {/* CTA Button */}
                <NavButton href="/contact" className="ml-5 rounded-lg border border-brand-blue bg-white px-4 py-2 text-brand-blue shadow-none hover:bg-brand-blue hover:text-white">
                  Book a Site Survey
                </NavButton>
              </div>
            </nav>
        </div>
      </div>
    </header>
  )
}
