import AudienceCards from "@/components/AudienceCards";
import BuildingConfidenceSection from "@/components/BuildingConfidenceSection";
import CTASection from "@/components/CTASection";
import HomeHero from "@/components/HomeHero";
import PathwayCircles from "@/components/PathwayCircles";
import ServiceCards from "@/components/ServiceCards";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PathwayCircles />
      <ServiceCards />
      <AudienceCards />
      <BuildingConfidenceSection />
      <TestimonialCards />
      <CTASection variant="homepage" />
    </>
  );
}
