"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function ProfessionalClient() {
  return (
    <ServiceDetailTemplate
      title="Professional & Managed IT Services"
      summary="Turnkey consulting, system integration, solution architecture, certified project management, AMC lifecycle support, and 24×7 NOC operations."
      overview="Brightnest supports the complete technology lifecycle for enterprise infrastructure. From requirement analysis, compliance discovery, and multi-vendor engineering to physical deployment, commissioning, documentation, annual maintenance contracts (AMC), and SLA-driven managed support, our dedicated team takes end-to-end accountability."
      deliverables={[
        "IT infrastructure consulting, technology roadmapping, and TCO optimization",
        "Multi-vendor solution architecture and standards-compliant engineering",
        "PMP-certified project management, site governance, and risk mitigation",
        "Commissioning verification, punch-list clearance, and client handover",
        "As-built documentation, network topology runbooks, and operational SOPs",
        "Disaster recovery (DR), failover testing, and business continuity architecture",
        "24×7 proactive NOC infrastructure monitoring and incident ticketing",
        "Comprehensive Annual Maintenance Contracts (AMC) with guaranteed response times",
      ]}
      subServices={[
        { name: "Strategic Consulting", description: "Audit of current architecture, technology gap analysis, and forward migration planning." },
        { name: "Solution Architecture", description: "High-level (HLD) and low-level (LLD) designs aligned with ISO, TIA, and NFPA standards." },
        { name: "Project Governance", description: "Disciplined milestone tracking, vendor coordination, and HSE compliance on-site." },
        { name: "System Commissioning", description: "Stringent acceptance testing, burn-in verification, and technical handover ceremonies." },
        { name: "Comprehensive AMC", description: "Preventative hardware servicing, firmware patches, and rapid spares replacement." },
        { name: "24×7 NOC Managed Support", description: "Round-the-clock telemetry, threshold monitoring, and SLA-backed problem resolution." },
      ]}
      useCases={[
        "Enterprises undergoing multi-site infrastructure consolidation or headquarter migrations",
        "Public sector and smart city projects requiring rigorous government-grade documentation",
        "Corporations requiring 24×7 outsourced NOC monitoring with strict 15-minute response SLAs",
        "Manufacturing and supply chain facilities needing zero unplanned IT downtime",
        "Healthcare and banking institutions demanding audited regulatory compliance",
      ]}
      engagementModel={[
        { phase: "Discover & Assess", description: "Comprehensive audit of existing infrastructure assets, risks, and stakeholder goals." },
        { phase: "Architect & Roadmap", description: "Detailed low-level engineering blueprints, BOM specification, and project schedules." },
        { phase: "Execute & Commission", description: "Disciplined physical rollout, quality assurance testing, and administrative handover." },
        { phase: "Manage & Optimize", description: "SLA-driven ongoing support, continuous capacity planning, and quarterly review cadences." },
      ]}
      theme={{
        bgGradient: "from-[#02120b] via-[#052115] to-[#010a06]",
        accentColor: "#34d399",
        accentGradient: "from-emerald-400 via-teal-300 to-green-200",
        glowOrb1: "bg-emerald-600/12",
        glowOrb2: "bg-teal-600/10",
        cardBg: "bg-[#052116]/70",
        cardBorder: "border-emerald-500/20",
        cardBorderHover: "hover:border-emerald-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
        badgeBg: "bg-emerald-500/15",
        badgeBorder: "border-emerald-500/30",
        badgeText: "text-emerald-300",
        buttonGradient: "bg-gradient-to-r from-emerald-500 to-teal-400",
        buttonText: "text-[#02110c]",
        buttonShadow: "shadow-[0_0_20px_rgba(52,211,153,0.4)]",
        textHighlight: "text-emerald-400",
        subtextColor: "text-emerald-100/75",
        laserStreak: "via-emerald-400/50",
      }}
      slides={[
        {
          image: "/gcc-enterprise-engineer.jpg",
          title: "Infrastructure Audits & Consulting",
          caption: "Comprehensive site surveys, active/passive RF analysis, and capacity planning."
        },
        {
          image: "/female-business-consultant-smiling.jpg",
          title: "Turnkey Project Management",
          caption: "Dedicated project managers, milestone-driven execution, and zero-defect handover."
        },
        {
          image: "/professional-man-with-glasses-analyzing-code-on-sc.jpg",
          title: "Managed IT Services & 24/7 AMC",
          caption: "Guaranteed SLA response times, proactive network monitoring, and resident engineers."
        }
      ]}
    />
  )
}
