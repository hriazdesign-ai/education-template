import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import StudentSupportAreas from "@/components/StudentSupportAreas";
import StudentSupportHero from "@/components/StudentSupportHero";
import StudentSupportProcessSection from "@/components/StudentSupportProcessSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Student Support",
  description:
    "Beyond tutoring — confidence building, learning gaps, exam anxiety, study routines, parent communication and flexible support from Bright Path Learning.",
  path: "/student-support",
});

export default function StudentSupportPage() {
  return (
    <>
      <StudentSupportHero
        image={{
          src: "/images/teaching-4.jpg",
          alt: "Tutor supporting a student during a learning session",
        }}
      />

      <StudentSupportAreas />

      <StudentSupportProcessSection />

      <CTASection
        variant="homepage"
        title="Ready to find the right support for your child?"
        description="Book a free learning assessment and discover how personalised support can help your child grow in confidence and achieve their potential."
      />
    </>
  );
}
