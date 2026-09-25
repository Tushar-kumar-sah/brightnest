import PrintingClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Printing & Large Format Solutions | Brightnest Edutainment",
  description: "Printer sales, service, consumables, calibration, and annual maintenance contracts.",
}

export default function PrintingPage() {
  const service = getServiceByHref("/services/printing")

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
            "serviceType": "Printing Services",
            "offer": service.features.map(feature => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }}
          id="printing-schema"
        />
      )}
      <PrintingClient />
    </>
  )
}
