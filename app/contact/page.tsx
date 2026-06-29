import type { Metadata } from "next";
import ContactDetailsSection from "@/components/ContactDetailsSection";
import ContactFaqSection from "@/components/ContactFaqSection";
import ContactHero from "@/components/ContactHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free learning assessment and discover how personalised tutoring can help your child build confidence and achieve their goals.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero
        image={{
          src: "/images/contact-1.jpg",
          alt: "Tutor helping a student during a lesson",
        }}
      />

      <ContactDetailsSection />

      <ContactFaqSection />

      <CTASection
        variant="homepage"
        primaryButtonLabel="Book your free assessment"
        title="Ready to unlock your child's potential?"
        description="Book a free learning assessment and discover how personalised tutoring can help build confidence, improve grades and develop lifelong learning skills."
      />
    </>
  );
}
