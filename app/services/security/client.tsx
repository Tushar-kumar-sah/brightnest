"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function SecurityClient() {
  return (
    <ServiceDetailTemplate
      title="Security & Low Voltage Systems"
      summary="Comprehensive security infrastructure solutions including CCTV, access control, biometric verification, and BMS integration."
      overview="Our Security & Low Voltage Systems service delivers complete infrastructure for enterprise security. From video surveillance and access control to fire alarm systems and building management, we provide turnkey solutions that protect your physical and digital assets. Our certified engineers design systems that integrate seamlessly with your existing IT infrastructure."
      deliverables={[
        "CCTV surveillance system design, deployment, and high-definition NVR/VMS setup",
        "AI video analytics, perimeter intrusion detection, and automatic license plate recognition",
        "Enterprise access control, turnstiles, and smart credential management",
        "Biometric attendance, facial recognition, and temperature scanning integration",
        "Addressable fire alarm, smoke detection, and suppression systems (NFPA-compliant)",
        "Public address and voice alarm (PA/VA) emergency notification systems",
        "Building Management System (BMS) integration and smart sensor networks",
        "Intrusion alarm, perimeter beam protection, and central monitoring station linkage",
      ]}
      subServices={[
        { name: "CCTV Surveillance", description: "High-definition IP cameras, thermal imaging, and cloud-assisted NVR storage architectures." },
        { name: "Access Control", description: "Electronic smart locks, RFID badges, turnstiles, and role-based credential security." },
        { name: "Biometric Systems", description: "Contactless 3D facial recognition and multi-spectral biometric attendance devices." },
        { name: "Fire Alarm Systems", description: "Addressable fire detection, early-warning aspirating smoke systems, and gas suppression." },
        { name: "Public Address (PA/VA)", description: "Zoned emergency evacuation paging and intelligible acoustic notification systems." },
        { name: "Building Management (BMS)", description: "Automated HVAC, lighting, energy metering, and unified facility management dashboards." },
      ]}
      useCases={[
        "Corporate headquarters and multi-floor IT parks requiring unified access governance",
        "Data centers and server rooms demanding multi-factor biometrics and mantraps",
        "Manufacturing plants and warehouses needing thermal perimeter intrusion protection",
        "Hospitals and healthcare campuses requiring contact-free patient and staff zone access",
        "Educational institutions seeking comprehensive student safety and emergency broadcasting",
        "Public transit hubs, airports, and smart commercial retail spaces",
      ]}
      engagementModel={[
        { phase: "Audit & Site Survey", description: "Physical risk assessment, blind spot mapping, and sensor coverage calculations." },
        { phase: "Engineering Architecture", description: "BOM generation, network bandwidth sizing, and regulatory NFPA/ISO compliance design." },
        { phase: "Turnkey Installation", description: "Certified low-voltage cabling, equipment mounting, IP configuration, and commissioning." },
        { phase: "Managed AMC & SLA", description: "24×7 preventive maintenance, camera recalibration, and guaranteed uptime response." },
      ]}
      theme={{
        bgGradient: "from-[#140409] via-[#220712] to-[#0a0205]",
        accentColor: "#f43f5e",
        accentGradient: "from-rose-400 via-pink-400 to-red-300",
        glowOrb1: "bg-rose-600/12",
        glowOrb2: "bg-red-600/10",
        cardBg: "bg-[#1d0710]/70",
        cardBorder: "border-rose-500/20",
        cardBorderHover: "hover:border-rose-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
        badgeBg: "bg-rose-500/15",
        badgeBorder: "border-rose-500/30",
        badgeText: "text-rose-300",
        buttonGradient: "bg-gradient-to-r from-rose-500 to-pink-500",
        buttonShadow: "shadow-[0_0_20px_rgba(244,63,94,0.4)]",
        textHighlight: "text-rose-400",
        subtextColor: "text-rose-100/75",
        laserStreak: "via-rose-500/50",
      }}
      slides={[
        {
          image: "/security-infrastructure.jpg",
          title: "AI Video Surveillance & VMS",
          caption: "High-definition IP cameras, thermal imaging, and intelligent perimeter protection."
        },
        {
          image: "/datacenter-infrastructure-engineer.jpg",
          title: "Enterprise Access Control",
          caption: "Biometric authentication, optical speed gates, and smart credential systems."
        },
        {
          image: "/modern-tech-infrastructure-network.jpg",
          title: "Unified BMS & Fire Alarms",
          caption: "NFPA addressable fire detection, gas suppression, and integrated facility monitoring."
        }
      ]}
    />
  )
}
