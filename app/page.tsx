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

export default function Home() {
  const { solutionHighlights, sectionHeadings } = getHeroData();

  return (
    <div className="relative min-h-screen bg-[#070c1e]">
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
    </div>
  );
}
