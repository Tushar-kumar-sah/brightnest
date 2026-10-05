"use client";

import { usePathname } from "next/navigation";
import { Mail, Calendar, MessageCircle } from "lucide-react";

export function MobileActionBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="mobile-floating-bar fixed bottom-0 left-0 right-0 md:hidden bg-[#070c1e]/95 backdrop-blur-2xl border-t border-white/15 z-40 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0.5rem))] select-none transition-all duration-300"
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {/* Email Direct Action */}
        <a
          href="mailto:info@brightnestedu.com"
          className="flex flex-col items-center justify-center gap-1 px-3 py-1 transition-transform active:scale-90"
          aria-label="Send Email Inquiry"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.08] text-white border border-white/15 hover:border-white/30 transition-colors shadow-sm">
            <Mail size={18} strokeWidth={2} className="text-white" />
          </div>
          <span className="text-[10px] font-medium text-white tracking-wide">Email</span>
        </a>

        {/* Appointment CTA (Center Elevated Pill) */}
        <a
          href={isHomePage ? "#contact" : "/contact"}
          className="flex flex-col items-center justify-center gap-1 px-3 transition-transform active:scale-95 -mt-5"
          aria-label="Book a Site Survey"
        >
          <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1ec9f2] via-[#0067b8] to-[#9266fd] text-white shadow-[0_0_20px_rgba(30,201,242,0.65)] border-2 border-white/30 hover:scale-105 transition-transform">
            <Calendar size={22} strokeWidth={2.2} className="text-white" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-wider">Site Survey</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919366355026"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 px-3 py-1 transition-transform active:scale-90"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.08] text-white border border-white/15 hover:border-white/30 transition-colors shadow-sm">
            <MessageCircle size={18} strokeWidth={2} className="text-white" />
          </div>
          <span className="text-[10px] font-medium text-white tracking-wide">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}

export default MobileActionBar;
