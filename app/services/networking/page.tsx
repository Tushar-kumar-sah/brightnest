import NetworkingClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Data Networking & IT Infrastructure | Brightnest Edutainment",
  description: "Enterprise-grade networking with LAN/WAN, switching, routing, Wi-Fi, and advanced security solutions.",
}

export default function NetworkingPage() {
  const service = getServiceByHref("/services/networking")

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
            "serviceType": "Networking",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="networking-schema"
        />
      )}
      <NetworkingClient />
    </>
  )
}
