import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import { cardHoverClass } from "@/lib/card-styles";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personalised tutoring and education support including 1-to-1 tuition, GCSE preparation, A-Level support, homework help, online learning and study skills.",
};

const processSteps = [
  {
    step: "01",
    title: "Free learning assessment",
    description:
      "We discuss your child's current level, goals, confidence and any areas where they need support.",
  },
  {
    step: "02",
    title: "Personalised learning plan",
    description:
      "We recommend the right tutoring approach, subjects and session frequency based on your child's needs.",
  },
  {
    step: "03",
    title: "Matched with the right tutor",
    description:
      "Your child is paired with a supportive tutor who understands their stage, subject and learning style.",
  },
  {
    step: "04",
    title: "Ongoing progress support",
    description:
      "We provide regular feedback so parents can see progress and students stay motivated.",
  },
];

const familyChoiceCards = [
  {
    title: "Personalised Learning Plans",
    description:
      "Every student receives support tailored to their level, goals and learning style.",
  },
  {
    title: "Qualified Tutors",
    description:
      "Supportive educators who understand how to explain concepts clearly and build confidence.",
  },
  {
    title: "Progress Feedback",
    description:
      "Regular updates help parents understand what is improving and where support is still needed.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose online or in-person sessions that work around school and family life.",
  },
  {
    title: "Exam Preparation",
    description:
      "Structured support for GCSE, A-Level, SATs and entrance exam preparation.",
  },
  {
    title: "Confidence Building",
    description:
      "We focus on helping students feel more capable, motivated and independent.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our Services"
        title="Tutoring and learning support for every stage"
        description="From primary foundations to GCSE and A-Level preparation, we provide personalised support that helps students build confidence, improve skills and achieve better results."
        primaryCta={{ label: "Book a free assessment", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        highlights={[
          "1-to-1 personalised tuition",
          "Primary, GCSE and A-Level support",
          "Online and in-person learning",
        ]}
        image={{
          src: "/images/teaching-8.jpg",
          alt: "Tutor helping a student during a lesson",
          label: "Personalised learning support",
        }}
        showConsultationCard={false}
        padding="contact"
      />

      <ServicesGrid showHeading={false} tone="white" />

      <section className="bg-section-warm py-16 sm:py-24">
        <Container>
          <ImagePlaceholder
            src="/images/teaching-4.jpg"
            alt="Students engaged in a collaborative learning session"
            label="Supportive learning environment"
            aspectRatio="banner"
          />

          <Container size="prose" pad={false} className="mb-12 mt-16 text-center sm:mt-20">
            <SectionHeading
              eyebrow="Why Families Choose Us"
              title="Why families choose Bright Path"
              description="Our approach is designed to make tutoring clear, flexible and supportive for both students and parents."
            />
          </Container>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {familyChoiceCards.map((item) => (
              <div
                key={item.title}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <h3 className="font-serif text-xl font-medium text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <div className="border-t border-primary/10" />
      </Container>

      <section className="bg-section-white py-16 sm:py-24">
        <Container>
          <Container size="prose" pad={false} className="mb-12 text-center">
            <SectionHeading
              eyebrow="How It Works"
              title="Getting started is simple"
              description="We keep the process clear and supportive, from the first assessment through to regular tutoring sessions."
            />
          </Container>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`rounded-[8px] border border-primary/10 bg-white p-5 sm:p-6 ${cardHoverClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium ring-1 ${
                      index % 2 === 0
                        ? "bg-primary/12 text-primary ring-primary/15"
                        : "bg-accent/12 text-accent-text ring-accent/15"
                    }`}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <h3 className="min-w-0 font-serif text-lg font-medium leading-snug text-text">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build a learning plan together"
        description="Tell us about your child's goals and challenges, and we'll recommend the right support to help them move forward with confidence."
      />
    </>
  );
}
