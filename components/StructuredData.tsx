import script from "next/script"

type StructuredDataProps = {
    data: Record<string, any>
    id?: string
}

export default function StructuredData({ data, id = "structured-data" }: StructuredDataProps) {
    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
