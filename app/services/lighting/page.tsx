import LightingClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "LED Lighting & Electrical Solutions | Brightnest Edutainment",
  description: "Commercial and industrial LED solutions with power infrastructure integration.",
}

export default function LightingPage() {
  const service = getServiceByHref("/services/lighting")

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
            "serviceType": "Lighting Solutions",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="lighting-schema"
        />
      )}
      <LightingClient />
    </>
  )
}
