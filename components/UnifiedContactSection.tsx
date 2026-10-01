"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function UnifiedContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "networking",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#070c1e] text-white relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#1ec9f2]/15 blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#0db16a]/15 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#1ec9f2]/40 text-[#1ec9f2] text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(30,201,242,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#1ec9f2] animate-pulse" />
                <span>Let&apos;s Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Upgrade Your{" "}
                <span className="bg-gradient-to-r from-[#1ec9f2] to-[#0db16a] bg-clip-text text-transparent">
                  Enterprise Infrastructure?
                </span>
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Connect directly with our senior system architects. We provide comprehensive site audits, detailed BOQ proposals, and turnkey execution with guaranteed SLAs.
              </p>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:+919366355026"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1ec9f2]/40 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1ec9f2]/20 border border-[#1ec9f2]/40 flex items-center justify-center text-[#1ec9f2] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Telephone & WhatsApp</div>
                  <div className="text-base font-bold text-white group-hover:text-[#1ec9f2] transition-colors">
                    +91 93663 55026
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@brightnestedu.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1ec9f2]/40 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0db16a]/20 border border-[#0db16a]/40 flex items-center justify-center text-[#0db16a] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Email Inquiries</div>
                  <div className="text-base font-bold text-white group-hover:text-[#1ec9f2] transition-colors">
                    info@brightnestedu.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#9266fd]/20 border border-[#9266fd]/40 flex items-center justify-center text-[#9266fd] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Response SLA Guarantee</div>
                  <div className="text-base font-bold text-white">
                    24/7 Operations • Under 4-Hour Support SLA
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0db16a] flex-shrink-0" />
              <div className="text-xs text-slate-300 leading-snug">
                <strong>Zero Obligation Survey:</strong> Receive a comprehensive technical assessment and itemized BOQ before any commitment.
              </div>
            </div>
          </div>

          {/* Right Column: Site Survey & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b132b]/95 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0db16a]/20 border border-[#0db16a] text-[#0db16a] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Site Survey Request Received!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you. A senior systems engineer will review your project details and reach out within 2 hours to confirm your site audit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white border border-white/20 transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Request an Engineering Site Survey
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out the form below to connect with an infrastructure architect.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Primary Solution Needed *
                    </label>
                    <select
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b132b] border border-white/15 text-white text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all"
                    >
                      <option value="networking">Enterprise Networking & Wi-Fi</option>
                      <option value="security">CCTV Surveillance & AI Security</option>
                      <option value="av">Audio-Visual & Boardroom Automation</option>
                      <option value="cabling">Structured Cabling & Server Room</option>
                      <option value="managed">Managed IT Services & AMC</option>
                      <option value="turnkey">Turnkey Integrated Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Requirements & Location
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your campus size, number of locations, or expected timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1ec9f2] focus:ring-1 focus:ring-[#1ec9f2] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-[#070c1e] bg-[#1ec9f2] hover:bg-[#38d7f8] shadow-[0_0_25px_rgba(30,201,242,0.4)] hover:shadow-[0_0_35px_rgba(30,201,242,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Transmitting Request..." : "Submit Site Survey Request"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    We respect your privacy. No spam. You will be connected with a certified technical engineer.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
