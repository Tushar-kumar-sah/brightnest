import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowRight, Star } from "lucide-react"
import {
  FooterLink,
  FooterSection,
  SocialLink,
  ContactInfoItem,
} from "@/components/ui"
import { getFooterData } from "@/lib/data"
import { getIcon } from "@/lib/icons"

/**
 * Footer Component - Refactored with SOLID Principles
 * 
 * Single Responsibility: Composes UI components, doesn't handle individual logic
 * Open/Closed: Easy to extend with new links via config
 * Dependency Inversion: Depends on abstractions (components & config)
 */
export default function Footer() {
  const {
    footerServices,
    quickLinks,
    legalLinks,
    socialLinks,
    companyContact,
    companyInfo,
    footerCTA,
    creditInfo,
  } = getFooterData()
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div style={{ background: "var(--brand-gradient-dark)" }} className="text-white relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5" />
        </div>

        <div className="section-container py-6 sm:py-10 md:py-16 relative z-10">
          {/* Top section with CTA - hidden on mobile view */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 pb-4 sm:pb-8 md:pb-12 border-b border-white/10 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{footerCTA.title}</h3>
              <p className="text-brand-muted text-xs sm:text-base">{footerCTA.subtitle}</p>
            </div>
            <Link
              href={footerCTA.buttonHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1ec9f2] text-[#070c1e] text-xs sm:text-sm font-bold rounded-xl hover:bg-[#38d7f8] shadow-[0_0_15px_rgba(30,201,242,0.3)] hover:-translate-y-0.5 transition-all group"
            >
              <span>{footerCTA.buttonText}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:size-[16px]" />
            </Link>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-12 pt-4 sm:pt-6 md:pt-12">
            {/* Company Info */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-6">
                <Image
                  src="/logo-256.webp"
                  alt="Brightnest Edutainment Logo"
                  width={150}
                  height={38}
                  className="h-auto w-[130px] sm:w-[150px] object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 130px, 150px"
                  loading="eager"
                />
              </div>
              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6">
                {companyInfo.tagline}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = getIcon(social.icon) || Star
                  return (
                    <SocialLink
                      key={social.href}
                      href={social.href}
                      icon={Icon}
                      label={social.label}
                      className="w-9 h-9 sm:w-10 sm:h-10"
                    />
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <FooterSection title="Services" className="col-span-1">
              <ul className="space-y-1.5 sm:space-y-3">
                {footerServices.slice(0, 4).map((service) => {
                  const Icon = getIcon(service.icon) || undefined
                  return (
                    <li key={service.name}>
                      <FooterLink href={service.href} icon={Icon}>
                        {service.name}
                      </FooterLink>
                    </li>
                  )
                })}
              </ul>
            </FooterSection>

            {/* More Services + Company */}
            <FooterSection title="More" className="col-span-1">
              <ul className="space-y-1.5 sm:space-y-3">
                {footerServices.slice(4).map((service) => {
                  const Icon = getIcon(service.icon) || undefined
                  return (
                    <li key={service.name}>
                      <FooterLink href={service.href} icon={Icon}>
                        {service.name}
                      </FooterLink>
                    </li>
                  )
                })}
                <li className="pt-2 sm:pt-3 border-t border-white/10">
                  {quickLinks.map((link) => (
                    <div key={link.href} className="mb-1.5 sm:mb-3 last:mb-0">
                      <FooterLink href={link.href}>
                        {link.label}
                      </FooterLink>
                    </div>
                  ))}
                </li>
              </ul>
            </FooterSection>

            {/* Contact */}
            <FooterSection title="Contact" className="col-span-2 sm:col-span-1">
              <ul className="space-y-2 sm:space-y-4">
                <li>
                  <ContactInfoItem
                    icon={Mail}
                    href={`mailto:${companyContact.email}`}
                  >
                    {companyContact.email}
                  </ContactInfoItem>
                </li>
                <li>
                  <ContactInfoItem
                    icon={Phone}
                    href={`tel:${companyContact.phoneHref}`}
                  >
                    {companyContact.phone}
                  </ContactInfoItem>
                </li>
                <li>
                  <ContactInfoItem icon={MapPin}>
                    {companyContact.address.line1}<br />
                    {companyContact.address.line2}<br />
                    {companyContact.address.line3}
                  </ContactInfoItem>
                </li>
              </ul>
            </FooterSection>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="section-container py-3 sm:py-4 md:py-6 pb-20 md:pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-sm text-brand-muted text-center sm:text-left">
              <p>
                © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <span className="text-brand-on-dark">
                  {creditInfo.text}{" "}
                  <a
                    href={creditInfo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors font-medium"
                  >
                    {creditInfo.name}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
