"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  PenTool,
  FileText,
  Wrench,
  CheckCircle,
  Headphones,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Understanding your requirements, goals, and operational challenges through detailed discussions.",
  },
  {
    icon: MapPin,
    title: "Site Survey",
    description:
      "On-ground infrastructure assessment, measurements, and technical audit of your premises.",
  },
  {
    icon: PenTool,
    title: "Solution Design",
    description:
      "Custom IT and security architecture planning tailored to your specific environment.",
  },
  {
    icon: FileText,
    title: "BOQ & Proposal",
    description:
      "Detailed Bill of Quantities with transparent itemization and competitive pricing.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Professional deployment of hardware, cabling, and systems with minimal disruption.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Commissioning",
    description:
      "Rigorous quality assurance, safety verification, and SLA compliance testing.",
  },
  {
    icon: Headphones,
    title: "Handover & Support",
    description:
      "Comprehensive documentation, training, and ongoing 24/7 managed support.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HowWeOperate() {
  const [showAllSteps, setShowAllSteps] = useState(false);
  const displayedStepsMobile = showAllSteps ? steps : steps.slice(0, 2);

  return (
    <section className="bg-[#f8fafc] py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand-cyan font-semibold text-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4"
          >
            How We Operate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
          >
            End-to-end project execution from initial consultation to ongoing
            managed support.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Desktop: 7-column layout with connecting line */}
          <div className="hidden lg:block">
            {/* Connecting line */}
            <div className="absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-[2px] bg-gradient-to-r from-brand-cyan/30 via-brand-blue/40 to-brand-violet/30 z-0" />

            <div className="grid grid-cols-7 gap-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Step Number + Icon */}
                    <div className="relative z-10 mb-5">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/15 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-brand-cyan/25">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-navy-dark text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-bold text-navy-dark mb-1.5 leading-tight group-hover:text-brand-cyan transition-colors min-h-[2.5rem] flex items-center">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed px-1">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tablet: 4-column first row, 3-column second row */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-4 gap-4 mb-4">
              {steps.slice(0, 4).map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center bg-white rounded-2xl p-5 border border-brand-border/40 shadow-sm hover:shadow-lg hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-navy-dark text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-navy-dark mb-1 group-hover:text-brand-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-[75%] mx-auto">
              {steps.slice(4).map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center bg-white rounded-2xl p-5 border border-brand-border/40 shadow-sm hover:shadow-lg hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-navy-dark text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                        {index + 5}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-navy-dark mb-1 group-hover:text-brand-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden relative">
            {/* Timeline line */}
            <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan/30 via-brand-blue/30 to-brand-violet/30 rounded-full" />

            <div className="space-y-4">
              {displayedStepsMobile.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative flex items-start gap-4 pl-0"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white shadow-md shadow-brand-blue/15">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-navy-dark text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-4 border border-brand-border/40 shadow-sm">
                      <h3 className="text-base font-bold text-navy-dark mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {steps.length > 2 && (
              <div className="mt-6 text-center relative z-10">
                <button
                  type="button"
                  onClick={() => setShowAllSteps(!showAllSteps)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border bg-white text-primary text-sm font-semibold shadow-sm hover:border-brand-cyan hover:bg-brand-soft transition-all active:scale-95"
                >
                  {showAllSteps ? "Show Less" : `View More Steps (+${steps.length - 2})`}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllSteps ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
