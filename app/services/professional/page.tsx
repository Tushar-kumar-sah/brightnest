import ProfessionalClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Professional Services | Brightnest Edutainment",
  description: "Consulting, design, project management, training, and annual maintenance contracts.",
}

export default function ProfessionalPage() {
  const service = getServiceByHref("/services/professional")

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
            "serviceType": "Professional Services",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="professional-schema"
        />
      )}
      <ProfessionalClient />
    </>
  )
}
