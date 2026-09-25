"use client"

import { usePathname } from "next/navigation"
import StructuredData from "./StructuredData"

export default function JsonLdBreadcrumb() {
    const pathname = usePathname()

    // Don't show on home page
    if (pathname === "/") return null

    // Generate breadcrumbs
    const segments = pathname.split("/").filter(Boolean)
    const items = segments.map((segment, index) => {
        const url = `https://brightnestedu.com/${segments.slice(0, index + 1).join("/")}`

        // Capitalize and format name
        const name = segment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

        return {
            "@type": "ListItem",
            "position": index + 2, // 1 is Home
            "name": name,
            "item": url
        }
    })

    // Add Home as first item
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brightnestedu.com"
            },
            ...items
        ]
    }

    return <StructuredData data={breadcrumbList} id="breadcrumb-schema" />
}
