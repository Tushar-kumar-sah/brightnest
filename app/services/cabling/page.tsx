import CablingClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Structured Cabling & Fiber | Brightnest Edutainment",
  description: "High-performance cabling infrastructure with Cat6/6A and fiber optic solutions.",
}

export default function CablingPage() {
  const service = getServiceByHref("/services/cabling")

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
            "serviceType": "Structured Cabling",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="cabling-schema"
        />
      )}
      <CablingClient />
    </>
  )
}
