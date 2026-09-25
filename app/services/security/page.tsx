import SecurityClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Security & Low Voltage Systems | Brightnest Edutainment",
  description:
    "Complete security infrastructure solutions including CCTV, access control, biometric systems, fire alarms, and BMS.",
}

export default function SecurityPage() {
  const service = getServiceByHref("/services/security")

  return (
    <>
      {service && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "provider": {
              "@type": "Organization",
              "name": "Brightnest Edutainment Pvt Ltd"
            },
            "serviceType": "Security Systems",
            "areaServed": "IN",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Security Services",
              "itemListElement": service.features.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feature
                }
              }))
            }
          }}
          id="security-schema"
        />
      )}
      <SecurityClient />
    </>
  )
}
