"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Camera,
  Fingerprint,
  Wifi,
  Cable,
  Monitor,
  Flame,
  Cloud,
  ShieldCheck,
  Headphones,
  Phone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    description: 'IP cameras, video analytics, monitoring',
    icon: Camera
  },
  {
    id: 'access-control',
    title: 'Access Control',
    description: 'Biometrics, card readers, visitor management',
    icon: Fingerprint
  },
  {
    id: 'networking',
    title: 'Enterprise Networking',
    description: 'LAN, WAN, Wi-Fi, SD-WAN',
    icon: Wifi
  },
  {
    id: 'cabling',
    title: 'Structured Cabling',
    description: 'Copper, fiber, testing & certification',
    icon: Cable
  },
  {
    id: 'av',
    title: 'Audio-Visual Integration',
    description: 'Conference rooms, video walls, signage',
    icon: Monitor
  },
  {
    id: 'fire-safety',
    title: 'Fire & Life Safety',
    description: 'Fire alarms, VESDA, PA systems',
    icon: Flame
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'AWS, Azure, GCP, hybrid cloud',
    icon: Cloud
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Endpoint, network, perimeter security',
    icon: ShieldCheck
  },
  {
    id: 'amc',
    title: 'Managed Services & AMC',
    description: '24/7 support, SLA, maintenance',
    icon: Headphones
  },
  {
    id: 'telecom',
    title: 'Telecom & UC',
    description: 'IPPBX, VoIP, unified communications',
    icon: Phone
  }
];

const ambientParticles = [
  { left: 6, top: 78, size: "w-1.5 h-1.5", color: "bg-[#fb7185]", duration: 7, delay: 0 },
  { left: 18, top: 88, size: "w-1 h-1", color: "bg-[#f43f5e]", duration: 9, delay: 1.5 },
  { left: 32, top: 65, size: "w-2 h-2", color: "bg-[#e11d48]/80", duration: 8, delay: 3 },
  { left: 46, top: 82, size: "w-1.5 h-1.5", color: "bg-[#fda4af]", duration: 11, delay: 2 },
  { left: 60, top: 72, size: "w-1 h-1", color: "bg-[#fb7185]", duration: 7.5, delay: 0.5 },
  { left: 74, top: 86, size: "w-2 h-2", color: "bg-[#f43f5e]", duration: 9.5, delay: 4 },
  { left: 88, top: 68, size: "w-1 h-1", color: "bg-[#fda4af]", duration: 8.5, delay: 2.5 },
  { left: 12, top: 40, size: "w-1 h-1", color: "bg-[#fb7185]", duration: 10, delay: 1 },
  { left: 68, top: 35, size: "w-1.5 h-1.5", color: "bg-[#e11d48]", duration: 9, delay: 3.5 },
  { left: 38, top: 30, size: "w-1 h-1", color: "bg-[#fda4af]", duration: 8, delay: 5 },
  { left: 82, top: 22, size: "w-1.5 h-1.5", color: "bg-[#fb7185]", duration: 10.5, delay: 1.8 },
  { left: 24, top: 26, size: "w-1 h-1", color: "bg-[#f43f5e]", duration: 9.2, delay: 4.2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function BuildYourSolution() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#140408] via-[#240811] to-[#0d0205] text-white border-b border-white/10 overflow-hidden select-none">
      {/* Animated Top Border Specular Laser Beam in Ruby Maroon */}
      <motion.div
        animate={{ x: ["-100%", "250%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#f43f5e] to-transparent pointer-events-none z-20"
      />

      {/* Deep Maroon & Ruby Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#9f1239]/40 via-[#881337]/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#e11d48]/30 via-[#9f1239]/20 to-transparent rounded-full blur-[150px] pointer-events-none -z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#4c0519]/35 via-[#881337]/30 to-[#e11d48]/20 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Texture with Elliptical Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(225,29,72,0.22),transparent)] pointer-events-none -z-0" />

      {/* Floating Crimson Sparks / Bokeh Particles */}
      {ambientParticles.map((pt, i) => (
        <motion.div
          key={`p-${i}`}
          style={{ left: `${pt.left}%`, top: `${pt.top}%` }}
          animate={{
            y: [0, -70, -140],
            opacity: [0, 0.75, 0],
            scale: [0.7, 1.25, 0.6],
          }}
          transition={{
            duration: pt.duration,
            repeat: Infinity,
            delay: pt.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full pointer-events-none ${pt.size} ${pt.color} blur-[0.5px] shadow-[0_0_8px_#f43f5e]`}
        />
      ))}

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#f43f5e]/40 text-[#fecdd3] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.25)] backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse shadow-[0_0_8px_#f43f5e]" />
              <span>Custom Stack</span>
            </div>
            <h2
              style={{ fontWeight: 300 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light font-[300] !font-[300] text-white tracking-tight leading-tight mb-4"
            >
              Build Your{" "}
              <span className="bg-gradient-to-r from-[#fda4af] via-[#fb7185] to-[#e11d48] bg-clip-text text-transparent font-medium">
                Solution
              </span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Select the services you need and we&apos;ll tailor a comprehensive infrastructure solution for your organization.
            </p>
          </motion.div>
        </div>

        {/* Grid - 2 cols mobile, 3 tablet, 5 desktop for even rows of 10 */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ paddingBottom: selectedServices.length > 0 ? '6rem' : '0' }}
        >
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onClick={() => toggleService(service.id)}
                className={`
                  relative cursor-pointer rounded-2xl p-4 md:p-5 transition-all duration-300 group
                  ${isSelected
                    ? 'bg-gradient-to-br from-[#e11d48]/25 via-[#9f1239]/20 to-white/[0.06] border-2 border-[#f43f5e] backdrop-blur-2xl shadow-[0_0_25px_rgba(244,63,94,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] scale-[1.02]'
                    : 'bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:bg-white/[0.08] hover:border-[#fb7185]/50 hover:shadow-[0_15px_35px_rgba(225,29,72,0.25)] hover:-translate-y-1'
                  }
                `}
                whileHover={!isSelected ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.97 }}
              >
                {/* Selected Glow Aura / Crazy Halo Animation */}
                {isSelected && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.7, 0.35] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9f1239] blur-md -z-10 pointer-events-none"
                  />
                )}

                {/* Selection Badge with Pop Animation */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0, rotate: -45 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute top-3 right-3 text-[#fb7185]"
                    >
                      <CheckCircle2 className="w-5 h-5 fill-[#9f1239] text-[#fecdd3] drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`
                  w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300
                  ${isSelected
                    ? 'bg-gradient-to-br from-[#f43f5e] to-[#be123c] text-white shadow-[0_0_15px_rgba(244,63,94,0.6)] scale-110'
                    : 'bg-white/10 text-[#fda4af] border border-white/10 group-hover:bg-[#e11d48]/20 group-hover:text-white group-hover:scale-110'
                  }
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className={`text-sm md:text-base font-semibold mb-1 leading-tight transition-colors ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed hidden sm:block">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Summary Bar in Deep Maroon Frosted Glass */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
          >
            <div className="bg-[#18050c]/90 text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(225,29,72,0.3)] px-5 py-4 flex items-center justify-between gap-4 border border-[#fb7185]/30 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="bg-[#e11d48]/20 p-2.5 rounded-full flex-shrink-0 border border-[#f43f5e]/40 shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                  <CheckCircle2 className="w-5 h-5 text-[#fb7185]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold leading-tight text-white flex items-center gap-2">
                    <span>{selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'} Selected</span>
                    <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-ping" />
                  </h4>
                  <p className="text-xs text-slate-300 font-light hidden sm:block">
                    Ready to build your custom turnkey enterprise infrastructure
                  </p>
                </div>
              </div>
              
              {(() => {
                const selectedTitles = selectedServices
                  .map(id => services.find(s => s.id === id)?.title)
                  .filter(Boolean);
                const queryParam = encodeURIComponent(selectedTitles.join(','));
                return (
                  <Link href={`/contact?services=${queryParam}`} className="flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#e11d48] via-[#f43f5e] to-[#be123c] hover:opacity-95 text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all text-sm md:text-base whitespace-nowrap"
                    >
                      Book a Site Survey
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
