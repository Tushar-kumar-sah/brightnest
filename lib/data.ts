import heroData from "@/data/hero.json"
import navigationData from "@/data/navigation.json"
import servicesData from "@/data/services.json"
import footerData from "@/data/footer.json"
import aboutData from "@/data/about.json"
import careersData from "@/data/careers.json"
import caseStudiesData from "@/data/case-studies.json"
import industriesData from "@/data/industries.json"

export interface NavigationData {
    navLinks: { href: string; label: string }[]
    serviceItems: { name: string; href: string; icon: string; description: string }[]
    bannerMessages: string[]
    contactInfo: { phone: string; email: string }
    branding: { primaryName: string; secondaryName: string }
}

export type ServicesData = typeof servicesData
export type HeroData = typeof heroData
export type FooterData = typeof footerData
export type AboutData = typeof aboutData
export type CareersData = typeof careersData
export type CaseStudiesData = typeof caseStudiesData
export type IndustriesData = typeof industriesData

export const getHeroData = (): HeroData => heroData
export const getNavigationData = (): NavigationData => navigationData as unknown as NavigationData
export const getServicesData = (): ServicesData => servicesData
export const getFooterData = (): FooterData => footerData
export const getAboutData = (): AboutData => aboutData
export const getCareersData = (): CareersData => careersData
export const getCaseStudiesData = (): CaseStudiesData => caseStudiesData
export const getIndustriesData = (): IndustriesData => industriesData

// Helper to get a specific service by slug or ID if needed later
export const getServiceByHref = (href: string) => {
    return servicesData.find(service => service.href === href)
}

export const getIndustryBySlug = (slug: string) => {
    return industriesData.find(industry => industry.slug === slug)
}
