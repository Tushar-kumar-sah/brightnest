import AVClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Audio Visual Integration | Brightnest Edutainment",
  description: "Video conferencing, boardroom solutions, digital signage, video walls, and AV integration services.",
}

export default function AVPage() {
  const service = getServiceByHref("/services/av")

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
            "serviceType": "Audio Visual",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="av-schema"
        />
      )}
      <AVClient />
    </>
  )
}
