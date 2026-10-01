import HeroSlider from "@/components/HeroSlider";
import AboutTeaser from "@/components/AboutTeaser";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import SolutionsShowcase from "@/components/solutions-showcase";
import IndustryReach from "@/components/IndustryReach";
import HowWeOperate from "@/components/how-we-operate";
import BuildYourSolution from "@/components/build-your-solution";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UnifiedContactSection from "@/components/UnifiedContactSection";
import { getHeroData } from "@/lib/data";
import { Mail, Calendar, MessageCircle } from "lucide-react";

export default function Home() {
  const { solutionHighlights, sectionHeadings } = getHeroData();

  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Hero Section: Creative What-We-Do Sliders (Team Computers Inspiration) */}
      <HeroSlider />

      {/* 2. Who We Are / About Us Section with Key Metrics */}
      <AboutTeaser />

      {/* 3. Partner Ecosystem: Global OEM Technology Leaders */}
      <PartnerEcosystem />

      {/* 4. Explore Our Tech Solutions: Interactive Category Tabs */}
      <SolutionsShowcase
        solutions={solutionHighlights}
        heading={sectionHeadings.solutions}
      />

      {/* 5. Industry Reach: Purpose-Built Sector Solutions */}
      <IndustryReach />

      {/* 6. How We Operate: 7-Step Turnkey Delivery Methodology */}
      <HowWeOperate />

      {/* 7. Build Your Solution: Interactive Tech Configurator */}
      <BuildYourSolution />

      {/* 8. Case Studies: Proven Enterprise Deployments & Real Results */}
      <CaseStudiesSection />

      {/* 9. Client Endorsements & Testimonials */}
      <TestimonialsSection />

      {/* 10. Let's Connect: Unified Contact & Site Survey Request */}
      <UnifiedContactSection />

      {/* Mobile Floating Action Bar */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-1.5 px-4">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          {/* Email */}
          <a
            href="mailto:info@brightnestedu.com"
            className="flex flex-col items-center justify-center gap-0.5 px-3 py-0.5 transition-transform active:scale-95"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-[#0b132b] border border-slate-200 hover:border-[#1ec9f2] transition-colors">
              <Mail size={18} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium text-slate-600">Email</span>
          </a>

          {/* Appointment CTA (Center Highlight) */}
          <a
            href="#contact"
            className="flex flex-col items-center justify-center gap-0.5 px-3 transition-transform active:scale-95 -mt-3"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1ec9f2] to-[#0067b8] text-white shadow-[0_4px_14px_rgba(30,201,242,0.4)] border-2 border-white">
              <Calendar size={20} strokeWidth={2.2} />
            </div>
            <span className="text-[10px] font-bold text-[#0067b8]">Site Survey</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919366355026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 px-3 py-0.5 transition-transform active:scale-95"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 transition-colors">
              <MessageCircle size={18} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium text-slate-600">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Spacer for mobile bottom bar */}
      <div className="h-14 md:h-0" />
    </div>
  );
}
