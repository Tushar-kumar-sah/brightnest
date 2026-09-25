"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getNavigationData } from "@/lib/data"
import { getIcon } from "@/lib/icons"

interface MobileMenuProps {
    className?: string
}

export function MobileMenu({ className = "" }: MobileMenuProps) {
    const { navLinks, serviceItems, contactInfo } = getNavigationData()
    const [isOpen, setIsOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

    return (
        <div className={className}>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open mobile menu"
                aria-expanded={isOpen}
            >
                <Menu size={24} className="text-gray-800" />
            </button>

            {/* Overlay + Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-out Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <span className="text-xl font-bold text-navy-dark">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-label="Close mobile menu"
                                >
                                    <X size={24} className="text-gray-800" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="p-4">
                                <ul className="space-y-1">
                                    {/* First two nav links (before Services) */}
                                    {navLinks.slice(0, 2).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}

                                    {/* Services Dropdown */}
                                    <li>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition-colors"
                                        >
                                            <span>Services</span>
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden bg-gray-50 rounded-lg ml-2 mt-1"
                                                >
                                                    {serviceItems.map((service) => {
                                                        const Icon = getIcon(service.icon as unknown as string)
                                                        return (
                                                            <li key={service.href}>
                                                                <Link
                                                                    href={service.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        {Icon && (
                                                                            <Icon size={18} className="text-gray-500" />
                                                                        )}
                                                                        <span>{service.name}</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                    <li>
                                                        <Link
                                                            href="/services"
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-4 py-3 text-sm font-medium text-primary hover:bg-gray-100 transition-colors border-t border-gray-200"
                                                        >
                                                            View All Services →
                                                        </Link>
                                                    </li>
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </li>

                                    {/* Remaining nav links (after Services) */}
                                    {navLinks.slice(2).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-colors"
                                    >
                                        Book a Site Survey
                                    </Link>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Phone size={18} />
                                        <span className="font-medium">{contactInfo.phone}</span>
                                    </a>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <Mail size={18} />
                                        <span className="font-medium">{contactInfo.email}</span>
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu
