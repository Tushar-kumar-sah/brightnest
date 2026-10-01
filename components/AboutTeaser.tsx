"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Users, ShieldCheck, Zap } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Enterprise Deployments",
    subtext: "Across India",
    icon: Users,
  },
  {
    value: "99.9%",
    label: "System Uptime SLA",
    subtext: "High-Availability Guarantee",
    icon: Zap,
  },
  {
    value: "10+",
    label: "Years of Excellence",
    subtext: "Trusted IT & Security Partner",
    icon: Award,
  },
  {
    value: "24/7",
    label: "Rapid Response Desk",
    subtext: "PAN-India Field Dispatch",
    icon: ShieldCheck,
  },
];

const highlights = [
  "OEM-certified engineers across Cisco, Hikvision, Aruba, Poly & Dell",
  "Transparent Bill of Quantities (BOQ) with zero hidden costs",
  "Fluke-certified testing with comprehensive warranty coverage",
  "Single-point-of-contact SLA support for peace of mind",
];

export default function AboutTeaser() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f9ff] border border-[#bae6fd] text-[#0067b8] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse" />
              <span>Who We Are</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b132b] tracking-tight leading-[1.15]">
              The Experts Behind Your{" "}
              <span className="bg-gradient-to-r from-[#0067b8] to-[#1ec9f2] bg-clip-text text-transparent">
                Digital & Physical Infrastructure
              </span>
            </h2>

            {/* Narrative text matching Team Computers tone */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We help growing businesses and large enterprises thrive through the power of engineered technology. Whether scaling an office network, deploying AI-driven CCTV surveillance, or integrating hybrid boardrooms, our certified team handles every detail from technical design to ongoing 24/7 managed support.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0db16a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#0067b8] hover:bg-[#005294] shadow-[0_4px_16px_rgba(0,103,184,0.25)] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#0067b8] hover:text-[#0b132b] bg-[#f0f9ff] hover:bg-[#e0f2fe] border border-[#bae6fd] transition-all duration-200"
              >
                <span>Schedule a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual with Engineer & Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1ec9f2]/20 to-[#0db16a]/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/gcc-enterprise-engineer.jpg"
                    alt="BrightNest enterprise infrastructure engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Card at bottom of photo */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg">
                    <p className="text-xs font-bold text-[#0067b8] uppercase tracking-wider mb-1">
                      Our Core Philosophy
                    </p>
                    <p className="text-sm font-semibold text-[#0b132b] leading-tight">
                      &ldquo;Actions beyond the hardware — engineering technology that works effortlessly every single day.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards Bar (Matching Team Computers clean metrics) */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#1ec9f2]/40 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1ec9f2]/15 to-[#0067b8]/15 text-[#0067b8] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0067b8]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0b132b] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {stat.subtext}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
