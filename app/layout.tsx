import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brightnest Edutainment | Intelligent IT Infrastructure & System Integration",
  description:
    "Globally aligned turnkey IT technology solutions, system integration, cloud, cybersecurity, AVSI, networking, security, and managed services across Pan-India and international markets.",
  metadataBase: new URL("https://brightnestedu.com"),
  alternates: {
    canonical: "https://brightnestedu.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brightnestedu.com",
    title: "Brightnest Edutainment | Intelligent IT Infrastructure & System Integration",
    description: "Engineering intelligent infrastructure through globally aligned turnkey IT solutions and managed services.",
    siteName: "Brightnest Edutainment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightnest Edutainment | Intelligent IT Infrastructure & System Integration",
    description: "Engineering intelligent infrastructure through globally aligned turnkey IT solutions and managed services.",
  },
}

import StructuredData from "@/components/StructuredData"
import JsonLdBreadcrumb from "@/components/JsonLdBreadcrumb"
import { getFooterData } from "@/lib/data"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const footerData = getFooterData()
  const { companyInfo, companyContact, socialLinks } = footerData

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brightnestedu.com/#organization",
    "name": companyInfo.name,
    "url": "https://brightnestedu.com",
    "logo": "https://brightnestedu.com/logo-1024.webp",
    "sameAs": socialLinks.map(link => link.href),
    "slogan": "Engineering Intelligent Infrastructure. Globally.",
    "contactPoint": [
      "+919366355026",
      "+919831911796",
      "+913348109275"
    ].map(telephone => ({
      "@type": "ContactPoint",
      telephone,
      "contactType": "customer service",
      "email": companyContact.email,
      "availableLanguage": ["English", "Hindi", "Bengali"]
    }))
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ITService", // More specific than LocalBusiness
    "@id": "https://brightnestedu.com/#localbusiness",
    "name": companyInfo.name,
    "image": "https://brightnestedu.com/og-image.jpg", // Placeholder
    "url": "https://brightnestedu.com",
    "telephone": "+919366355026",
    "email": companyContact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyContact.address.line1}, ${companyContact.address.line2}`,
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700071",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5448, // Coordinates for Lord Sinha Road, Kolkata (approx)
      "longitude": 88.3562
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "areaServed": ["IN", "International Markets"],
    "priceRange": "$$"
  }

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        <GoogleAnalytics />
        <StructuredData data={organizationSchema} id="org-schema" />
        <StructuredData data={localBusinessSchema} id="local-schema" />
        <JsonLdBreadcrumb />
        <Header />
        <main className="min-h-screen scroll-snap-container">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
