import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import SoftwareLogosSection from "@/components/SoftwareLogosSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Helping Students Build Confidence & Achieve Their Potential"
        description="Personalised tutoring and educational support for primary, secondary and college students. We help learners strengthen skills, improve results and enjoy learning."
        padding="contact"
      />
      <StatsSection />
      <SoftwareLogosSection />
      <ServicesGrid tone="white" compactBottom />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>
      <AudienceSection tone="white" compactTop />
      <WhyChooseUsSection tone="mint" />
      <TestimonialsSection tone="white" />
      <CTASection />
    </>
  );
}
