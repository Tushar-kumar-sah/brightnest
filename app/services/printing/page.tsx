import PrintingClient from "./client"
import StructuredData from "@/components/StructuredData"
import { getServiceByHref } from "@/lib/data"

export const metadata = {
  title: "Printing & Large Format Solutions | Brightnest Edutainment",
  description: "Enterprise multifunction devices (MFDs), wide-format CAD plotters, managed print services (MPS), and certified consumables.",
  openGraph: {
    title: "Printing & Large Format Solutions | Brightnest Edutainment",
    description: "Enterprise multifunction devices (MFDs), wide-format CAD plotters, managed print services (MPS), and certified consumables.",
    images: [
      {
        url: "/enterprise-mps-office-printer.jpg",
        width: 1920,
        height: 1280,
        alt: "Brightnest Enterprise Managed Print Services and MFD Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing & Large Format Solutions | Brightnest Edutainment",
    description: "Enterprise multifunction devices (MFDs), wide-format CAD plotters, managed print services (MPS), and certified consumables.",
    images: ["/enterprise-mps-office-printer.jpg"],
  },
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
