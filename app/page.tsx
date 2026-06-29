import type { Metadata } from "next";
import AudienceCards from "@/components/AudienceCards";
import BuildingConfidenceSection from "@/components/BuildingConfidenceSection";
import CTASection from "@/components/CTASection";
import HomeHero from "@/components/HomeHero";
import PathwayCircles from "@/components/PathwayCircles";
import ServiceCards from "@/components/ServiceCards";
import TestimonialCards from "@/components/TestimonialCards";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  description:
    "Personalised tutoring for primary, GCSE and A-Level students. Build confidence, improve results and enjoy learning with Bright Path Learning.",
  path: "/",
});

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
