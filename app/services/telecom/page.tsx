import TelecomClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Telecom & Unified Communication | Brightnest Edutainment",
  description: "IPPBX systems, SIP trunking, call centers, and unified communication solutions.",
}

export default function TelecomPage() {
  const service = getServiceByHref("/services/telecom")

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
            "serviceType": "Telecom",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="telecom-schema"
        />
      )}
      <TelecomClient />
    </>
  )
}
