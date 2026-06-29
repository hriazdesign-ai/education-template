import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ServicesHero from "@/components/ServicesHero";
import ServicesHowSupportWorks from "@/components/ServicesHowSupportWorks";
import ServicesPageCards from "@/components/ServicesPageCards";
import ServicesWhyChoose from "@/components/ServicesWhyChoose";
import TestimonialCards from "@/components/TestimonialCards";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personalised tutoring and education support including 1-to-1 tuition, GCSE preparation, A-Level support, homework help, online learning and study skills.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero
        image={{
          src: "/images/teaching-8.jpg",
          alt: "Tutor helping a student during a lesson",
        }}
      />

      <ServicesPageCards />

      <ServicesWhyChoose
        image={{
          src: "/images/teaching-4.jpg",
          alt: "Students engaged in a collaborative learning session",
        }}
      />

      <ServicesHowSupportWorks />

      <TestimonialCards />

      <CTASection
        variant="homepage"
        spacing="services"
        title="Ready to help your child thrive?"
        description="Tell us about your child's goals and challenges, and we'll recommend the right support to help them move forward with confidence."
      />
    </>
  );
}
