"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function CablingClient() {
  return (
    <ServiceDetailTemplate
      title="Structured Cabling & Fiber Solutions"
      summary="High-performance passive cabling infrastructure with certified Cat6/6A copper and multi-kilometer single-mode/multi-mode fiber optics."
      overview="Our structured cabling solutions provide the robust physical layer foundation for high-throughput enterprise networks. We engineer and implement Cat6/Cat6A twisted pair alongside OM3/OM4 and OS2 fiber optic backbones that withstand decades of operational expansion. Every single termination undergoes Fluke DTX/DSX certification to verify attenuation, NEXT, and return loss."
      deliverables={[
        "Cat6 and Cat6A 10GBASE-T twisted pair structured cabling",
        "Single-mode (OS2) and multi-mode (OM3/OM4) fiber backbone installation",
        "Data center server rack layout, horizontal cable managers, and high-density patch panels",
        "Fluke OTDR & channel certification testing with comprehensive warranty reports",
        "Campus-wide underground conduit, aerial fiber, and armored inter-building links",
        "Color-coded schematic labeling, patch schedule indexing, and CAD as-built drawings",
        "Power over Ethernet (PoE/PoE+/PoE++) thermal load and length planning",
        "Structured cable containment, wire mesh basket trays, and ladder rack pathways",
      ]}
      subServices={[
        { name: "Cat6 & Cat6A UTP/STP", description: "Certified twisted pair copper infrastructure supporting up to 10 Gbps transmission." },
        { name: "Single-Mode Fiber (OS2)", description: "Low-loss optical backbone for campus distributions and long-haul interconnects." },
        { name: "Multi-Mode Fiber (OM3/OM4)", description: "High-bandwidth modal dispersion optical links optimized for server room fabrics." },
        { name: "Server Racks & Containment", description: "Modular 42U/48U enclosures, vertical wire organizers, and cold/hot aisle containment." },
        { name: "Fluke Certification", description: "Tier-1 and Tier-2 optical and copper validation with full warranty documentation." },
        { name: "Moves, Adds & Changes (MAC)", description: "Orderly patching reconfiguration, rack consolidation, and legacy cable abatement." },
      ]}
      useCases={[
        "Corporate offices and high-density multi-tenant commercial towers",
        "Enterprise data centers and colocation server halls",
        "Industrial manufacturing plants requiring armored, noise-shielded cabling",
        "Educational universities and multi-building campus backbones",
        "Hospitals and diagnostic facilities requiring zero EMI interference",
      ]}
      engagementModel={[
        { phase: "Pathway Survey & Sizing", description: "Physical site survey, conduit pathway validation, and trunk cable length calculations." },
        { phase: "Certified Deployment", description: "Low-friction cable pulling, precision fusion splicing, and structured termination." },
        { phase: "Fluke Testing & Sign-off", description: "Individual port-level OTDR and copper testing with OEM 25-year component warranty." },
        { phase: "Lifecycle MAC Support", description: "Scheduled patching audits, port tagging, and expansion SLA support." },
      ]}
      theme={{
        bgGradient: "from-[#160c02] via-[#261505] to-[#0c0601]",
        accentColor: "#f59e0b",
        accentGradient: "from-amber-400 via-yellow-300 to-orange-300",
        glowOrb1: "bg-amber-600/12",
        glowOrb2: "bg-orange-600/10",
        cardBg: "bg-[#201104]/70",
        cardBorder: "border-amber-500/20",
        cardBorderHover: "hover:border-amber-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
        badgeBg: "bg-amber-500/15",
        badgeBorder: "border-amber-500/30",
        badgeText: "text-amber-300",
        buttonGradient: "bg-gradient-to-r from-amber-500 to-yellow-500",
        buttonText: "text-[#150a02]",
        buttonShadow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
        textHighlight: "text-amber-400",
        subtextColor: "text-amber-100/75",
        laserStreak: "via-amber-500/50",
      }}
      slides={[
        {
          image: "/data-center-infrastructure.jpg",
          title: "Structured Cabling & Containment",
          caption: "Cat6A copper, OM4/OS2 fiber backbones, and server rack cable pathways."
        },
        {
          image: "/datacenter-infrastructure-engineer.jpg",
          title: "Certified Fiber Termination",
          caption: "Fluke DSX-8000 calibrated testing with 25-year manufacturer system warranty."
        },
        {
          image: "/modern-tech-infrastructure-network.jpg",
          title: "High-Density Patching Systems",
          caption: "Color-coded modular patch fields and overhead raceway routing."
        }
      ]}
    />
  )
}
