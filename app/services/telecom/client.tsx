"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function TelecomClient() {
  return (
    <ServiceDetailTemplate
      title="Telecom & Unified Communication"
      summary="Enterprise IP-PBX telephony, SIP trunking, omni-channel contact center platforms, and secure unified communications (UCaaS)."
      overview="Transform your enterprise voice and collaborative communications with our unified telecom solutions. We engineer and deploy on-premise and cloud IP-PBX systems, SIP trunks, call center ACD queues, and analog/digital voice gateways. Our solutions bridge mobile workforces, office deskphones, and CRM systems while drastically lowering telecom toll costs."
      deliverables={[
        "Enterprise IP-PBX system design, sizing, and multi-tenant deployment",
        "Carrier-grade SIP trunking, PRI integration, and least-cost routing (LCR)",
        "Omni-channel contact center setup with intelligent skill-based routing",
        "Multi-level interactive voice response (IVR) and automated attendant trees",
        "Full-duplex conference phone stations and executive deskphone deployment",
        "Call recording, quality monitoring, and PCI-DSS compliance storage",
        "Analog-to-IP voice gateways (FXS/FXO) for legacy elevator and PA connectivity",
        "Unified mobile softphones with presence, instant messaging, and directory sync",
      ]}
      subServices={[
        { name: "IP-PBX Platforms", description: "Resilient voice platforms supporting hundreds of concurrent calls and distributed extensions." },
        { name: "SIP Trunking", description: "High-capacity virtual voice trunks with dynamic failover and global DID numbers." },
        { name: "Call Center Solutions", description: "Agent dashboards, supervisor whisper/barge-in tools, and real-time SLA queues." },
        { name: "Voice Gateways", description: "Robust FXS/FXO/E1 media gateways for seamless legacy integration." },
        { name: "Smart Intercom", description: "Door station video intercoms linked directly to phone systems and mobile apps." },
        { name: "Call Analytics", description: "Detailed call records (CDR), hold-time heatmaps, and outbound traffic analytics." },
      ]}
      useCases={[
        "Multi-branch corporations requiring zero-cost inter-office voice dialing",
        "Customer support operations requiring automated ticket logging and call recording",
        "Hotels and hospitality resorts managing hundreds of guest rooms and billing PBX integration",
        "Hospitals requiring emergency priority override and paging integration",
        "Financial institutions requiring strict audit-logged phone conversations",
      ]}
      engagementModel={[
        { phase: "Traffic & Trunk Audit", description: "Concurrent call load analysis, PSTN billing assessment, and bandwidth calculations." },
        { phase: "Dial-Plan Engineering", description: "Extension mapping, IVR logic diagrams, and failover routing rule specification." },
        { phase: "Deployment & Number Porting", description: "Hardware deployment, SIP provisioning, and seamless zero-interruption number porting." },
        { phase: "Managed Voice SLA", description: "VoIP QoS monitoring, MOS score tracking, and 24×7 telecom helpdesk support." },
      ]}
      theme={{
        bgGradient: "from-[#040c1e] via-[#091b40] to-[#020612]",
        accentColor: "#38bdf8",
        accentGradient: "from-sky-400 via-blue-300 to-indigo-200",
        glowOrb1: "bg-sky-500/12",
        glowOrb2: "bg-blue-600/10",
        cardBg: "bg-[#091c44]/70",
        cardBorder: "border-sky-500/20",
        cardBorderHover: "hover:border-sky-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
        badgeBg: "bg-sky-500/15",
        badgeBorder: "border-sky-500/30",
        badgeText: "text-sky-300",
        buttonGradient: "bg-gradient-to-r from-sky-500 to-blue-500",
        buttonText: "text-[#020b1c]",
        buttonShadow: "shadow-[0_0_20px_rgba(56,189,248,0.4)]",
        textHighlight: "text-sky-400",
        subtextColor: "text-sky-100/75",
        laserStreak: "via-sky-400/50",
      }}
      slides={[
        {
          image: "/ai-technology-professional-with-digital-background.jpg",
          title: "Cloud IP-PBX & SIP Trunking",
          caption: "Scalable cloud telephony, unified messaging, and multi-tenant softphone integration."
        },
        {
          image: "/modern-conference-room.jpg",
          title: "Unified Collaboration Hubs",
          caption: "Integrated voice, video, and presence routing across distributed campus locations."
        },
        {
          image: "/hospitality-operations-manager.jpg",
          title: "Contact Center Solutions",
          caption: "Omnichannel routing, CRM integration, call recording, and real-time supervisor analytics."
        }
      ]}
    />
  )
}
