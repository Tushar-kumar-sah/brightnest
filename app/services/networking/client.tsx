"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function NetworkingClient() {
  return (
    <ServiceDetailTemplate
      title="Data Networking & IT Infrastructure"
      summary="Enterprise-grade networking solutions including high-density campus LAN/WAN, core L3 switching, SD-WAN routing, and Wi-Fi 6E/7 architectures."
      overview="Our networking solutions provide the high-availability backbone for modern digital enterprises. We architect and deploy resilient, multi-gigabit LAN/WAN fabrics with Layer 2/3 core switching, zero-trust network segmentation, and next-generation firewall protection. From dense wireless mesh deployments to redundant multi-ISP load balancing, we ensure deterministic performance, low latency, and continuous uptime."
      deliverables={[
        "Enterprise campus LAN and software-defined WAN (SD-WAN) architecture",
        "Layer 2/Layer 3 core, distribution, and access switching infrastructure",
        "Dynamic BGP/OSPF routing, traffic shaping, and QoS policy enforcement",
        "High-density Wi-Fi 6E / Wi-Fi 7 wireless network deployment and RF surveys",
        "Next-generation firewall (NGFW) appliances and intrusion prevention (IPS)",
        "Zero-trust network access (ZTNA), micro-segmentation, and dynamic VLANs",
        "Dual-WAN active-active link aggregation, load balancing, and failover",
        "Centralized SNMP network performance telemetry, flow monitoring, and alerting",
      ]}
      subServices={[
        { name: "LAN Architecture", description: "Multi-gigabit access and core backbones engineered for enterprise bandwidth demands." },
        { name: "SD-WAN & Routing", description: "Intelligent application-aware routing and resilient multi-branch cloud connectivity." },
        { name: "Enterprise Switching", description: "L2/L3 modular switches with wire-speed packet processing and stackable resiliency." },
        { name: "Wireless Mesh (Wi-Fi 6E/7)", description: "Predictive heatmap-driven Wi-Fi coverage with seamless 802.11r client roaming." },
        { name: "Next-Gen Firewall (NGFW)", description: "Deep packet inspection, gateway antivirus, and SSL/TLS decryption defense." },
        { name: "NOC & Telemetry", description: "Real-time network observability, interface utilization tracking, and latency auditing." },
      ]}
      useCases={[
        "Corporate headquarters requiring 10Gbps+ spine-leaf core switching",
        "Multi-branch retail and bank chains requiring secure, centralized SD-WAN orchestration",
        "High-density university campuses and lecture auditoriums with thousands of concurrent Wi-Fi devices",
        "Manufacturing and logistics hubs operating mission-critical automated guided vehicles (AGVs)",
        "Financial institutions requiring strict regulatory compliance and network micro-segmentation",
      ]}
      engagementModel={[
        { phase: "Traffic Assessment & RF Survey", description: "Bandwidth profiling, spectrum analysis, and physical network topology audit." },
        { phase: "Architecture & Low-Level Design", description: "IP addressing scheme, VLAN segregation matrix, and hardware redundancy design." },
        { phase: "Zero-Downtime Migration", description: "Staged cutover, config hardening, port verification, and failover stress testing." },
        { phase: "Proactive NOC Management", description: "24×7 link monitoring, firmware lifecycle patching, and SLA incident response." },
      ]}
      theme={{
        bgGradient: "from-[#040d1a] via-[#081b36] to-[#030914]",
        accentColor: "#00f0ff",
        accentGradient: "from-cyan-400 via-sky-300 to-blue-200",
        glowOrb1: "bg-cyan-500/12",
        glowOrb2: "bg-blue-600/10",
        cardBg: "bg-[#071d3d]/70",
        cardBorder: "border-cyan-500/20",
        cardBorderHover: "hover:border-cyan-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]",
        badgeBg: "bg-cyan-500/15",
        badgeBorder: "border-cyan-500/30",
        badgeText: "text-cyan-300",
        buttonGradient: "bg-gradient-to-r from-cyan-500 to-sky-400",
        buttonText: "text-[#030d1a]",
        buttonShadow: "shadow-[0_0_20px_rgba(0,240,255,0.4)]",
        textHighlight: "text-cyan-400",
        subtextColor: "text-sky-100/75",
        laserStreak: "via-cyan-400/50",
      }}
      slides={[
        {
          image: "/modern-tech-infrastructure-network.jpg",
          title: "Enterprise Core Switching",
          caption: "Multi-gigabit spine-leaf switching architectures and resilient routing fabrics."
        },
        {
          image: "/data-center-infrastructure.jpg",
          title: "Cloud SD-WAN & Zero-Trust",
          caption: "Dual-ISP automated failover, IPSec mesh, and granular micro-segmentation."
        },
        {
          image: "/gcc-enterprise-engineer.jpg",
          title: "Wi-Fi 7 Campus Wireless",
          caption: "High-density predictive RF design and automated dynamic channel optimization."
        }
      ]}
    />
  )
}
