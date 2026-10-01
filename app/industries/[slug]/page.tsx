import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getIndustriesData, getIndustryBySlug } from "@/lib/data"
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate"
import StructuredData from "@/components/StructuredData"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const industries = getIndustriesData()
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return {
      title: "Industry Not Found | Brightnest Edutainment",
    }
  }

  return {
    title: `${industry.name} IT Infrastructure | Brightnest Edutainment`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": industry.name,
          "description": industry.description,
          "provider": {
            "@type": "Organization",
            "name": "Brightnest Edutainment Pvt Ltd",
            "url": "https://brightnestedu.com"
          },
          "areaServed": "IN"
        }}
        id={`industry-schema-${industry.slug}`}
      />
      <IndustryDetailTemplate
        slug={industry.slug}
        name={industry.name}
        tagline={industry.tagline}
        description={industry.description}
        stats={industry.stats}
        challenges={industry.challenges}
        solutions={industry.solutions}
        deliverables={industry.deliverables}
        theme={industry.theme}
      />
    </>
  )
}
