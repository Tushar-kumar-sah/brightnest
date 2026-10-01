"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function LightingClient() {
  return (
    <ServiceDetailTemplate
      title="Commercial LED Lighting & Power Infrastructure"
      summary="High-efficiency architectural LED lighting, industrial high-bays, automated daylight harvesting, and certified electrical distribution."
      overview="Modernize your corporate, campus, or industrial facility with energy-efficient LED lighting systems and intelligent electrical infrastructure. We engineer and deploy turnkey commercial LED fixtures, smart DALI / 0-10V dimming controls, occupancy sensors, perimeter security floodlights, and integrated power distribution panels that dramatically reduce operational kWh consumption."
      deliverables={[
        "Commercial office architectural LED fixtures and tunable white ambient lighting",
        "Heavy-duty industrial high-bay lighting for manufacturing and logistics warehouses",
        "Intelligent DALI-2, Zigbee, and 0-10V networked lighting control automation",
        "Occupancy, vacancy, and ambient daylight harvesting photoelectric sensors",
        "Perimeter security illumination, high-mast floodlights, and roadway solar fixtures",
        "Emergency egress lighting, self-testing battery units, and illuminated exit signage",
        "Electrical distribution boards, MCB/MCCB power protection, and surge suppression",
        "Energy savings auditing, photometric lux mapping, and power factor correction",
      ]}
      subServices={[
        { name: "Commercial Office LED", description: "Glare-free UGR<19 architectural linear troffers and acoustic suspended LED fixtures." },
        { name: "Industrial High-Bay", description: "High-lumen IP66-rated fixtures with thermal heat dissipation for high ceilings." },
        { name: "Perimeter & Facade", description: "Architectural facade dynamic accent washes and heavy-duty perimeter security lights." },
        { name: "Smart Sensor Automation", description: "Automated PIR/microwave motion triggers and daylight-dependent dimming logic." },
        { name: "Power Distribution", description: "Sub-panels, cable trays, industrial busducts, and balanced phase distribution." },
        { name: "Emergency Egress", description: "Central battery systems and 3-hour backup emergency pathways compliant with NBC." },
      ]}
      useCases={[
        "Corporate offices and campuses targeting LEED green building certifications",
        "High-rack logistics distribution centers needing motion-triggered aisle lighting",
        "Manufacturing plants requiring rugged, vibration-resistant, and high-CRI lighting",
        "Commercial retail showrooms requiring color-rendering index (CRI > 90) display illumination",
        "Educational institutions, sports facilities, and parking structure networks",
      ]}
      engagementModel={[
        { phase: "Photometric Lux Audit", description: "Dialux 3D lighting simulation, lux level mapping, and energy baseline calculation." },
        { phase: "Electrical Engineering", description: "Load schedule balancing, cable gauge calculations, and control circuit design." },
        { phase: "Turnkey Installation", description: "Conduit layout, fixture suspension, electrical panel termination, and testing." },
        { phase: "Maintenance & AMC", description: "Driver replacement warranty, sensor recalibration, and periodic illumination audits." },
      ]}
      theme={{
        bgGradient: "from-[#140e02] via-[#241704] to-[#0a0701]",
        accentColor: "#fbbf24",
        accentGradient: "from-amber-300 via-yellow-200 to-amber-400",
        glowOrb1: "bg-amber-500/12",
        glowOrb2: "bg-yellow-600/10",
        cardBg: "bg-[#1e1305]/70",
        cardBorder: "border-amber-500/20",
        cardBorderHover: "hover:border-amber-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]",
        badgeBg: "bg-amber-500/15",
        badgeBorder: "border-amber-500/30",
        badgeText: "text-amber-300",
        buttonGradient: "bg-gradient-to-r from-amber-400 to-yellow-400",
        buttonText: "text-[#140e02]",
        buttonShadow: "shadow-[0_0_20px_rgba(251,191,36,0.4)]",
        textHighlight: "text-amber-400",
        subtextColor: "text-amber-100/75",
        laserStreak: "via-amber-400/50",
      }}
      slides={[
        {
          image: "/modern-tech-infrastructure-network.jpg",
          title: "DALI & Smart PoE Lighting",
          caption: "Network-powered, low-voltage LED luminaires with automated daylight harvesting."
        },
        {
          image: "/manufacturing-industrial-engineer.jpg",
          title: "Industrial High-Bay Automation",
          caption: "Ruggedized motion-sensing lighting fixtures for factory floors and logistics hubs."
        },
        {
          image: "/data-center-infrastructure.jpg",
          title: "Central BMS Lighting Dashboards",
          caption: "Unified schedule controls, occupancy analytics, and green building efficiency."
        }
      ]}
    />
  )
}
