"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Star, ArrowRight, Shield, Cable, Wifi, Phone, Video, Printer, Wrench, Building2, Factory, Server, Hotel, HeartPulse, GraduationCap } from "lucide-react";
import { Logo, MobileMenu } from "@/components/ui";
import { getNavigationData } from "@/lib/data";

const servicesList = [
  { name: "Security & Low Voltage", href: "/services/security", icon: Shield, description: "AI CCTV, Access Control, Biometrics" },
  { name: "Structured Cabling", href: "/services/cabling", icon: Cable, description: "Cat6A/7, Fiber Optic Backbones, Fluke Certified" },
  { name: "Data Networking", href: "/services/networking", icon: Wifi, description: "Enterprise LAN/WAN, SD-WAN, Wi-Fi 6/7" },
  { name: "Audio-Visual & Boardrooms", href: "/services/av", icon: Video, description: "Teams/Zoom Rooms, Video Walls, 4K Displays" },
  { name: "Managed IT Services", href: "/services/professional", icon: Wrench, description: "24/7 SLA Support, AMC, Resident Engineers" },
  { name: "Telecom & Unified Comm", href: "/services/telecom", icon: Phone, description: "IP-PBX, SIP Trunking, Contact Center Tech" },
];

const industriesList = [
  { name: "GCCs & Tech Parks", href: "/#industries", icon: Building2, description: "Enterprise campus infrastructure" },
  { name: "Manufacturing & Warehouses", href: "/#industries", icon: Factory, description: "Ruggedized industrial Wi-Fi & CCTV" },
  { name: "Data Centers", href: "/#industries", icon: Server, description: "High-density fiber & rack containment" },
  { name: "Hospitality & Retail", href: "/#industries", icon: Hotel, description: "Multi-store centralized tech" },
  { name: "Healthcare & Hospitals", href: "/#industries", icon: HeartPulse, description: "Zero-downtime medical LAN networks" },
  { name: "Education Campuses", href: "/#industries", icon: GraduationCap, description: "Smart classrooms & auditorium AV" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070c1e]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3 sm:py-3.5"
          : "bg-transparent border-b border-white/10 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* LEFT: Logo (White Inverted like Team Computers) */}
        <div className="flex items-center">
          <Logo href="/" inverted={true} className="hover:opacity-90 transition-opacity" />
        </div>

        {/* Mobile Menu Button - visible on mobile only */}
        <MobileMenu className="lg:hidden" buttonClassName="text-white" />

        {/* RIGHT: Desktop Navigation Links (Team Computers Styling) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          <nav className="flex items-center gap-6 xl:gap-7 text-sm font-medium text-white">
            {/* 1. What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 text-white hover:text-[#1ec9f2] transition-colors focus:outline-none"
              >
                <span>What We Do</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${whatWeDoOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* What We Do Dropdown Menu */}
              <div
                className={`absolute top-full -left-20 pt-3 transition-all duration-200 ${
                  whatWeDoOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-[520px] rounded-2xl bg-[#070c1e]/95 border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-2xl backdrop-saturate-150 grid grid-cols-2 gap-2 text-left">
                  {servicesList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-white/15 hover:bg-white/10 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#1ec9f2] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#1ec9f2]/20 group-hover:border-[#1ec9f2]/40 transition-all mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#1ec9f2] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-300/80 leading-snug mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-2.5 mt-1 border-t border-white/15 text-center">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1ec9f2] hover:text-[#38d7f8] hover:underline"
                    >
                      <span>View All Services</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 text-white hover:text-[#1ec9f2] transition-colors focus:outline-none"
              >
                <span>Industries</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Industries Dropdown Menu */}
              <div
                className={`absolute top-full -left-20 pt-3 transition-all duration-200 ${
                  industriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-[500px] rounded-2xl bg-[#070c1e]/95 border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-2xl backdrop-saturate-150 grid grid-cols-2 gap-2 text-left">
                  {industriesList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-white/15 hover:bg-white/10 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#0db16a] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#0db16a]/20 group-hover:border-[#0db16a]/40 transition-all mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#1ec9f2] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-300/80 leading-snug mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Who We Are */}
            <Link
              href="/about"
              className="py-2 text-white hover:text-[#1ec9f2] transition-colors"
            >
              Who We Are
            </Link>

            {/* 4. Careers */}
            <Link
              href="/careers"
              className="py-2 text-white hover:text-[#1ec9f2] transition-colors"
            >
              Careers
            </Link>

            {/* 5. Case Studies */}
            <Link
              href="/case-studies"
              className="py-2 text-white hover:text-[#1ec9f2] transition-colors"
            >
              Case Studies
            </Link>

            {/* 6. Contact Us */}
            <Link
              href="/contact"
              className="py-2 text-white hover:text-[#1ec9f2] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button: Team Computers Cyan Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-[#070c1e] bg-[#1ec9f2] hover:bg-[#38d7f8] shadow-[0_0_15px_rgba(30,201,242,0.4)] hover:shadow-[0_0_25px_rgba(30,201,242,0.6)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Site Survey
          </Link>
        </div>
      </div>
    </header>
  );
}
