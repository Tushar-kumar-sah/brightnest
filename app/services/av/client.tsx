"use client"

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate"

export default function AVClient() {
  return (
    <ServiceDetailTemplate
      title="Audio Visual System Integration"
      summary="Intelligent meeting spaces, 4K video conferencing, ultra-fine pixel pitch LED video walls, and automated boardroom environments."
      overview="Elevate your enterprise communication and presentation experience with our turnkey AV integration solutions. We engineer and implement Microsoft Teams Rooms (MTR), Zoom Rooms, executive boardrooms, enterprise digital signage networks, and immersive command-center video walls. Our certified AV engineers calibrate acoustic beamforming, line-array audio, and smart display automation for friction-free collaboration."
      deliverables={[
        "Certified Microsoft Teams Rooms & Zoom Rooms native conferencing design",
        "Executive boardroom automation with one-touch touchpanel controllers",
        "Ultra-fine pixel pitch (COB/MicroLED) direct-view video walls",
        "Ceiling beamforming microphone arrays with DSP acoustic echo cancellation",
        "Enterprise-wide cloud digital signage network setup and content CMS",
        "Laser projection and motorized ambient light rejecting (ALR) screens",
        "Auditorium, town hall, and training room line-array acoustics",
        "Wireless content sharing, BYOM (Bring Your Own Meeting), and AV-over-IP fabrics",
      ]}
      subServices={[
        { name: "Video Conferencing", description: "All-in-one smart video bars, PTZ optical zoom cameras, and certified room compute systems." },
        { name: "Executive Boardrooms", description: "Automated lighting, motorized displays, table pop-up connectivity, and centralized controls." },
        { name: "Digital Signage Networks", description: "Commercial 24/7 high-nit displays with centralized cloud scheduling and analytics." },
        { name: "MicroLED Video Walls", description: "Seamless bezelless display matrices with multi-window video processor feeds." },
        { name: "Auditorium Acoustics", description: "Pro-grade digital mixing consoles, wireless UHF microphones, and acoustic line arrays." },
        { name: "AV-over-IP Control", description: "Ultra-low-latency 4K60 video streaming over standard 1GbE/10GbE network backbones." },
      ]}
      useCases={[
        "C-Suite boardrooms and executive decision rooms requiring one-touch meeting starts",
        "Multi-branch enterprise training centers and interactive hybrid classrooms",
        "Network Operations Centers (NOC) and Security Operations Centers (SOC) needing massive video walls",
        "Corporate lobbies and experience centers with dynamic interactive brand showcases",
        "Auditoriums and town hall gathering spaces with broadcast-grade audio capture",
      ]}
      engagementModel={[
        { phase: "Acoustic & Sightline Audit", description: "Room dimensions, ambient light levels, reverberation time (RT60), and viewing angle calculations." },
        { phase: "Schematic Engineering", description: "Single-line AV schematics, heat dissipation calculations, and cable pathway routing." },
        { phase: "Acoustic Tuning & Commissioning", description: "DSP echo suppression calibration, camera framing presets, and controller programming." },
        { phase: "AMC & Preventative Support", description: "Firmware updates, projector lamp/LED health auditing, and guaranteed on-site SLA response." },
      ]}
      theme={{
        bgGradient: "from-[#0b0416] via-[#1a0933] to-[#07020e]",
        accentColor: "#c084fc",
        accentGradient: "from-purple-400 via-fuchsia-300 to-indigo-200",
        glowOrb1: "bg-purple-600/12",
        glowOrb2: "bg-fuchsia-600/10",
        cardBg: "bg-[#170a2c]/70",
        cardBorder: "border-purple-500/20",
        cardBorderHover: "hover:border-purple-400/60",
        cardShadowHover: "hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]",
        badgeBg: "bg-purple-500/15",
        badgeBorder: "border-purple-500/30",
        badgeText: "text-purple-300",
        buttonGradient: "bg-gradient-to-r from-purple-500 to-violet-500",
        buttonShadow: "shadow-[0_0_20px_rgba(192,132,252,0.4)]",
        textHighlight: "text-purple-400",
        subtextColor: "text-purple-100/75",
        laserStreak: "via-purple-500/50",
      }}
      slides={[
        {
          image: "/modern-conference-room.jpg",
          title: "Smart Boardrooms & Hybrid AV",
          caption: "4K displays, ceiling beamforming microphone arrays, and one-touch join systems."
        },
        {
          image: "/ai-technology-professional-with-digital-background.jpg",
          title: "Auditorium Acoustics & Pro Sound",
          caption: "Line-array sound reinforcement, digital mixing consoles, and clear speech intelligibility."
        },
        {
          image: "/female-business-consultant-smiling.jpg",
          title: "Digital Signage & Video Walls",
          caption: "Centralized CMS-driven commercial displays with 24/7 continuous operation."
        }
      ]}
    />
  )
}
