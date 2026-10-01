"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { getHeroData } from "@/lib/data";

export default function TestimonialsSection() {
  const { testimonials } = getHeroData();

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f9ff] border border-[#bae6fd] text-[#0067b8] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Customer Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b132b] tracking-tight">
            Trusted by Technology Leaders
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            What IT leaders and infrastructure heads say about our turnkey deployment and proactive SLA support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#1ec9f2]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#fcb900] mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#1ec9f2]/40 mb-2" />

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200/70">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#1ec9f2]/40 flex-shrink-0 bg-slate-200">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0b132b]">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.title}</div>
                  <div className="text-[11px] font-semibold text-[#0067b8]">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
