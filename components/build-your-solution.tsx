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
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-cyan font-bold tracking-wider uppercase text-sm mb-3 block">
              Custom Stack
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
              Build Your Solution
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
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
                  relative cursor-pointer rounded-2xl p-4 md:p-5 transition-all duration-300
                  ${isSelected
                    ? 'bg-white border-2 border-brand-cyan shadow-[0_0_16px_rgba(8,184,200,0.15)] scale-[1.02]'
                    : 'bg-[#f8fafc] border-2 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'
                  }
                `}
                whileHover={!isSelected ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.97 }}
              >
                {/* Selection Badge */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-3 right-3 text-brand-cyan"
                    >
                      <CheckCircle2 className="w-5 h-5 fill-brand-tint" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`
                  w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center mb-3 transition-colors
                  ${isSelected ? 'bg-brand-cyan text-white' : 'bg-white text-brand-cyan shadow-sm border border-slate-100'}
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-sm md:text-base font-semibold text-navy-dark mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed hidden sm:block">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Summary Bar */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
          >
            <div className="bg-navy-dark text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center justify-between gap-4 border border-slate-700/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="bg-brand-cyan/20 p-2.5 rounded-full flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold leading-tight">
                    {selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'} Selected
                  </h4>
                  <p className="text-xs text-slate-400 hidden sm:block">
                    Ready to build your custom solution
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
                      className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90 text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-full flex items-center gap-2 shadow-[0_0_12px_rgba(8,184,200,0.3)] transition-all text-sm md:text-base whitespace-nowrap"
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
