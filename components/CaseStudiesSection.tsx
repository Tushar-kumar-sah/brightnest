"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { getCaseStudiesData } from "@/lib/data";

export default function CaseStudiesSection() {
  const caseStudies = getCaseStudiesData().slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0067b8] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span>Customer Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b132b] tracking-tight">
              Proven Deployments & Real Results
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              See how our engineered networking, security, and AV solutions enable enterprises to operate with speed, safety, and confidence.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0067b8] bg-white border border-[#bae6fd] hover:bg-[#e0f2fe] hover:border-[#1ec9f2] shadow-sm transition-all flex-shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#1ec9f2]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Category Pill */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b132b]/80 backdrop-blur-md text-[11px] font-bold text-[#1ec9f2] border border-white/10">
                  {study.category}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-slate-200">
                  Client: {study.client}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0b132b] group-hover:text-[#0067b8] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {study.description}
                  </p>
                </div>

                {/* Key Outcome Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0db16a]" />
                    <span>Delivered Outcomes</span>
                  </div>
                  {study.results.slice(0, 2).map((res) => (
                    <div key={res} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0db16a] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{res}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0067b8] hover:text-[#1ec9f2] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
