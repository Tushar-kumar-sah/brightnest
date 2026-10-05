"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, Building2, Factory, Server, Hotel, HeartPulse, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getNavigationData, getIndustriesData } from "@/lib/data"
import { getIcon } from "@/lib/icons"

interface MobileMenuProps {
    className?: string
    buttonClassName?: string
}

const iconMap: Record<string, React.ElementType> = {
    Building2,
    Factory,
    Server,
    Hotel,
    HeartPulse,
    GraduationCap,
}

export function MobileMenu({ className = "", buttonClassName = "" }: MobileMenuProps) {
    const { navLinks, serviceItems, contactInfo } = getNavigationData()
    const industries = getIndustriesData()
    const [isOpen, setIsOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)

    // Prevent body scroll and notify floating bar when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            document.body.setAttribute("data-mobile-menu-open", "true")
        } else {
            document.body.style.overflow = "unset"
            document.body.removeAttribute("data-mobile-menu-open")
        }
        return () => {
            document.body.style.overflow = "unset"
            document.body.removeAttribute("data-mobile-menu-open")
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
                className={`p-2.5 rounded-xl hover:bg-white/10 transition-colors ${buttonClassName}`}
                aria-label="Open mobile menu"
                aria-expanded={isOpen}
            >
                <Menu size={24} className="text-white" />
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-out Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-[100dvh] max-h-[100dvh] w-[88%] sm:w-[85%] max-w-sm bg-[#070c1e]/98 backdrop-blur-2xl text-white border-l border-white/15 z-[61] shadow-2xl overflow-y-auto overscroll-contain pb-[max(3.5rem,env(safe-area-inset-bottom,3.5rem))] pt-[max(0.5rem,env(safe-area-inset-top,0.5rem))]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <span className="text-xl font-bold text-white tracking-tight">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2.5 rounded-lg hover:bg-white/10 active:scale-90 transition-all text-white flex items-center justify-center min-w-[40px] min-h-[40px]"
                                    aria-label="Close mobile menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="p-4">
                                <ul className="space-y-1">
                                    {/* Home Link */}
                                    <li>
                                        <Link
                                            href="/"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    {/* Services Dropdown */}
                                    <li>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            <span>Services (What We Do)</span>
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
                                                    className="overflow-hidden bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-lg ml-2 mt-1"
                                                >
                                                    {serviceItems.map((service) => {
                                                        const Icon = getIcon(service.icon as unknown as string)
                                                        return (
                                                            <li key={service.href}>
                                                                <Link
                                                                    href={service.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        {Icon && (
                                                                            <Icon size={18} className="text-white" />
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
                                                            className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors border-t border-white/10"
                                                        >
                                                            View All Services →
                                                        </Link>
                                                    </li>
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </li>

                                    {/* Industries Dropdown */}
                                    <li>
                                        <button
                                            onClick={() => setIndustriesOpen(!industriesOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            <span>Industries</span>
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {industriesOpen && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-lg ml-2 mt-1"
                                                >
                                                    {industries.map((industry) => {
                                                        const Icon = iconMap[industry.icon] || Building2
                                                        return (
                                                             <li key={industry.slug}>
                                                                 <Link
                                                                     href={`/industries/${industry.slug}`}
                                                                     onClick={() => setIsOpen(false)}
                                                                     className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                                                                 >
                                                                     <div className="flex items-center gap-3">
                                                                         <Icon size={18} className="text-white" />
                                                                         <span>{industry.name}</span>
                                                                     </div>
                                                                 </Link>
                                                             </li>
                                                        )
                                                    })}
                                                    <li>
                                                        <Link
                                                             href="/industries"
                                                             onClick={() => setIsOpen(false)}
                                                             className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors border-t border-white/10"
                                                         >
                                                             View All Industries →
                                                         </Link>
                                                     </li>
                                                 </motion.ul>
                                             )}
                                         </AnimatePresence>
                                     </li>

                                     {/* About Link */}
                                     <li>
                                         <Link
                                             href="/about"
                                             onClick={() => setIsOpen(false)}
                                             className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                         >
                                             Who We Are
                                         </Link>
                                     </li>

                                     {/* Careers Link */}
                                     <li>
                                         <Link
                                             href="/careers"
                                             onClick={() => setIsOpen(false)}
                                             className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                         >
                                             Careers
                                         </Link>
                                     </li>

                                     {/* Case Studies Link */}
                                     <li>
                                         <Link
                                             href="/case-studies"
                                             onClick={() => setIsOpen(false)}
                                             className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                         >
                                             Case Studies
                                         </Link>
                                     </li>

                                     {/* Contact Link */}
                                     <li>
                                         <Link
                                             href="/contact"
                                             onClick={() => setIsOpen(false)}
                                             className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-colors"
                                         >
                                             Contact Us
                                         </Link>
                                     </li>
                                 </ul>

                                 {/* CTA Button */}
                                 <div className="mt-6">
                                     <Link
                                         href="/contact"
                                         onClick={() => setIsOpen(false)}
                                         className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#0067b8] via-[#1ec9f2] to-[#0067b8] bg-[length:200%_auto] hover:bg-right text-white font-bold rounded-lg shadow-[0_0_15px_rgba(30,201,242,0.4)] transition-all"
                                     >
                                         Book a Site Survey
                                     </Link>
                                 </div>

                                {/* Contact Info */}
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                                    >
                                        <Phone size={18} />
                                        <span className="font-medium">{contactInfo.phone}</span>
                                    </a>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
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

