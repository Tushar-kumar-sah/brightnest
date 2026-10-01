"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Factory, Server, Hotel, HeartPulse, GraduationCap } from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  icon: any;
  solutions: string[];
}

const industries: IndustryItem[] = [
  {
    id: "gcc",
    title: "Global Capability Centers (GCCs)",
    badge: "Enterprise IT & Campuses",
    description:
      "Turnkey IT infrastructure, hybrid meeting rooms, high-density structured cabling, and zero-trust biometric security for global GCC hubs.",
    image: "/gcc-enterprise-engineer.jpg",
    icon: Building2,
    solutions: ["Multi-Gigabit LAN", "Teams/Zoom Rooms", "Visitor Management"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Warehouses",
    badge: "Industrial IT & Logistics",
    description:
      "Ruggedized Wi-Fi coverage across assembly lines, automated perimeter CCTV, license-plate recognition, and plant-floor structured cabling.",
    image: "/manufacturing-industrial-engineer.jpg",
    icon: Factory,
    solutions: ["Ruggedized APs", "Perimeter AI CCTV", "Fiber Backbones"],
  },
  {
    id: "datacenters",
    title: "Data Centers & Tech Parks",
    badge: "Critical Infrastructure",
    description:
      "Hyperscale single-mode fiber trunking, MPO/MTP high-density patch panels, rack cable management, and dual-redundant server room containment.",
    image: "/datacenter-infrastructure-engineer.jpg",
    icon: Server,
    solutions: ["MPO/MTP Fiber", "Server Racks", "Fluke Certified"],
  },
  {
    id: "hospitality",
    title: "Hospitality & Retail Chains",
    badge: "Commercial & Retail",
    description:
      "Seamless guest captive portal Wi-Fi, centralized multi-store CCTV surveillance, distributed background audio, and POS network isolation.",
    image: "/hospitality-operations-manager.jpg",
    icon: Hotel,
    solutions: ["Guest Wi-Fi", "Multi-Zone Audio", "Cloud CCTV"],
  },
  {
    id: "healthcare",
    title: "Healthcare & Hospitals",
    badge: "Mission-Critical 24/7",
    description:
      "Zero-downtime medical LAN networks, clean-room certified antimicrobial cabling, IP access control, and telemedicine boardroom systems.",
    image: "/female-business-consultant-smiling.jpg",
    icon: HeartPulse,
    solutions: ["Medical Grade LAN", "Clean Room Cabling", "Tele-Health AV"],
  },
  {
    id: "education",
    title: "Education & Smart Campuses",
    badge: "Smart Learning",
    description:
      "Interactive 4K smart boards, auditorium projection systems, campus-wide secure Wi-Fi, and automated biometric student attendance systems.",
    image: "/woman-engineer-reviewing-technical-drawings.jpg",
    icon: GraduationCap,
    solutions: ["Smart Boards", "Campus Wi-Fi", "Auditorium AV"],
  },
];

export default function IndustryReach() {
  return (
    <section className="py-20 lg:py-28 bg-[#0b132b] text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#1ec9f2]/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0067b8]/15 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header (Team Computers Style) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#1ec9f2]/30 text-[#1ec9f2] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Industry Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered for High-Stakes{" "}
            <span className="bg-gradient-to-r from-[#1ec9f2] to-[#0db16a] bg-clip-text text-transparent">
              Industry Environments
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From hyper-growth tech parks to automated manufacturing plants, our solutions are purpose-built for the unique compliance and reliability standards of each sector.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative rounded-3xl overflow-hidden bg-[#111a33] border border-white/10 hover:border-[#1ec9f2]/50 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image Top Half with Gradient Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a33] via-[#111a33]/40 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#0b132b]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#1ec9f2] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Industry Category Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0b132b]/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-slate-300">
                    {ind.badge}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#1ec9f2] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  {/* Solution tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ind.solutions.map((sol) => (
                      <span
                        key={sol}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
                      >
                        {sol}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-2 border-t border-white/10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1ec9f2] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Consult with Sector Specialist</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Don&apos;t see your specific industry listed?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              We design custom enterprise solutions tailored to any complex operational requirement.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm text-[#070c1e] bg-[#1ec9f2] hover:bg-[#38d7f8] shadow-[0_0_20px_rgba(30,201,242,0.4)] transition-all"
          >
            Request Custom Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}
