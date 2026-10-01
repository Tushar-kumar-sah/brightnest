"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function PrintingClient() {
  return (
    <ServiceDetailTemplate
      title="Enterprise Printing & Managed Document Solutions"
      summary="Heavy-duty enterprise A3/A4 multifunction devices (MFDs), high-precision CAD plotters, managed print services (MPS), and certified consumables."
      overview="Brightnest provides end-to-end printing and document reproduction solutions tailored for high-volume enterprise and architectural workflows. From enterprise-class multifunction copiers to specialized wide-format CAD plotters, we supply, deploy, network, and maintain hardware fleets with secure follow-me badge printing, automated toner replenishment, and cost-per-page (CPP) AMC contracts."
      deliverables={[
        "Enterprise A3/A4 multifunction devices (print, scan, copy, secure OCR) deployment",
        "High-precision wide-format CAD/GIS plotters and graphics production printers",
        "Managed Print Services (MPS) with automated remote consumables replenishment",
        "Secure badge-authenticated follow-me release printing and user quota governance",
        "Genuine OEM toner, drum unit, printhead, and specialty media supply chain",
        "Color calibration, ICC profile generation, and print engine performance tuning",
        "Comprehensive Annual Maintenance Contracts (AMC) with guaranteed on-site SLA",
        "Print fleet audit, lifecycle consolidation, and total cost of ownership (TCO) reduction",
      ]}
      subServices={[
        { name: "Multifunction Copiers (MFD)", description: "High-speed network printers with duplex single-pass document feeders and booklet finishers." },
        { name: "Wide-Format CAD Plotters", description: "Precision 24-inch to 44-inch line drawing plotters for architecture and engineering drawings." },
        { name: "Follow-Me Pull Printing", description: "Zero-trust encrypted print queues released only after employee RFID badge or PIN tap." },
        { name: "Consumables Logistics", description: "Automated low-toner proactive dispatch with zero workplace downtime." },
        { name: "Fleet Management Software", description: "Centralized web console tracking page volumes, department chargebacks, and error alerts." },
        { name: "Hardware AMC & Spares", description: "Rapid-response technician dispatch, roller replacements, and preventive maintenance." },
      ]}
      useCases={[
        "Corporate offices wanting to curb unmonitored printing costs and confidential document leakage",
        "Architecture, engineering, and construction (AEC) firms needing rapid high-precision blueprints",
        "Legal and financial institutions requiring watermarking, audit logs, and secure Bates stamping",
        "Universities and examination centers handling massive volume printing under strict timelines",
        "Hospitality and healthcare records archiving with heavy-duty network scanning",
      ]}
      engagementModel={[
        { phase: "Print Fleet Audit", description: "Current printer count analysis, page-volume metering, and cost-per-copy baseline evaluation." },
        { phase: "Fleet Right-Sizing", description: "Strategic placement plan to eliminate desktop bottlenecks and optimize walking distances." },
        { phase: "Deployment & Driver Packaging", description: "Network IP setup, print server queue deployment, and user card reader configuration." },
        { phase: "MPS Lifecycle & Supplies", description: "Automated cloud billing, proactive toner shipments, and regular maintenance visits." },
      ]}
      theme={{
        bgGradient: "from-[#0a0c10] via-[#151922] to-[#07080b]",
        accentColor: "#94a3b8",
        accentGradient: "from-slate-200 via-slate-400 to-zinc-300",
        glowOrb1: "bg-slate-500/12",
        glowOrb2: "bg-zinc-600/10",
        cardBg: "bg-[#131720]/70",
        cardBorder: "border-slate-600/30",
        cardBorderHover: "hover:border-slate-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(148,163,184,0.2)]",
        badgeBg: "bg-slate-500/15",
        badgeBorder: "border-slate-500/30",
        badgeText: "text-slate-300",
        buttonGradient: "bg-gradient-to-r from-slate-200 to-white",
        buttonText: "text-[#0a0c10]",
        buttonShadow: "shadow-[0_0_20px_rgba(255,255,255,0.25)]",
        textHighlight: "text-slate-300",
        subtextColor: "text-slate-300/75",
        laserStreak: "via-slate-400/50",
      }}
      slides={[
        {
          image: "/male-finance-professional-in-office.jpg",
          title: "Managed Print Services (MPS)",
          caption: "Cost-optimized enterprise printer fleet leasing and automated toner replenishment."
        },
        {
          image: "/female-business-consultant-smiling.jpg",
          title: "Secure Pull-Printing & Badges",
          caption: "Follow-me printing with RFID badges, encrypted spooling, and zero-waste auditing."
        },
        {
          image: "/modern-tech-infrastructure-network.jpg",
          title: "Fleet Monitoring & Governance",
          caption: "Centralized printer diagnostics, rule-based quota controls, and compliance tracking."
        }
      ]}
    />
  )
}
