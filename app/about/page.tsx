import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import { IconCheck } from "@/components/icons";
import { cardHoverClass } from "@/lib/card-styles";
import { team, whyChooseUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bright Path Learning — personalised tutoring and education support for primary, secondary and college students.",
};

const values = [
  {
    title: "Confidence",
    description:
      "Helping students believe in their ability and approach learning with a positive mindset.",
  },
  {
    title: "Clarity",
    description:
      "Clear explanations, structured lessons and regular progress updates for families.",
  },
  {
    title: "Growth",
    description:
      "Supporting every student to improve at their own pace and build long-term learning skills.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Us"
        title="Helping every student learn with confidence"
        description="Bright Path Learning provides personalised tutoring and educational support for students at every stage — from primary foundations to GCSE and A-Level preparation."
        primaryCta={{ label: "Meet the tutors", href: "#team" }}
        secondaryCta={{ label: "View our services", href: "/services" }}
        highlights={[
          "Primary, GCSE and A-Level support",
          "Personalised learning plans",
          "Online and in-person tuition",
        ]}
        image={{
          src: "/images/teaching-6.jpg",
          alt: "Tutor supporting a student during a lesson",
          label: "Personalised education support",
        }}
        padding="contact"
      />

      <StatsSection />

      <section className="bg-section-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built around the way students learn"
                description="We started Bright Path Learning to give families a more personal and supportive alternative to one-size-fits-all tuition."
                align="left"
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted">
                <p>
                  We work with primary, secondary and college students who need extra support,
                  exam preparation or a confidence boost in the classroom.
                </p>
                <p>
                  Our approach combines experienced tutors, structured learning plans and regular
                  feedback so parents always understand how their child is progressing.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              src="/images/teaching-3.jpg"
              alt="Students learning with support from a tutor"
              label="Personalised learning support"
              aspectRatio="editorial"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      <section className="bg-section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImagePlaceholder
              src="/images/teaching-5.jpg"
              alt="Tutor providing one-to-one educational support"
              label="Dedicated tutoring support"
              aspectRatio="editorial"
            />

            <div className="rounded-[8px] border border-primary/10 bg-primary p-8 text-white sm:p-10">
              <h3 className="font-serif text-2xl font-medium">Our mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                To help students build confidence, improve results and develop the skills they need
                to become independent learners.
              </p>
              <ul className="mt-6 space-y-3">
                {values.map((value) => (
                  <li key={value.title} className="flex gap-3">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark" />
                    <div>
                      <p className="text-sm font-semibold">{value.title}</p>
                      <p className="text-xs text-white/80">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      <section id="team" className="bg-section-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionHeading
              eyebrow="Our Tutors"
              title="The people behind the learning"
              description="Experienced, supportive and focused on helping every student reach their potential."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                {member.image ? (
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                    {member.initials}
                  </div>
                )}

                <h3 className="mt-5 font-serif text-xl font-medium text-text">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent-text">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ImagePlaceholder
            src="/images/teaching-4.jpg"
            alt="Students engaged in a collaborative learning session"
            label="Supportive learning environment"
            aspectRatio="banner"
          />

          <div className="mx-auto mb-12 mt-16 max-w-2xl text-center sm:mt-20">
            <SectionHeading
              eyebrow="Our Approach"
              title="What makes our support different"
              description="Four principles that guide every learning plan."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 sm:p-8 ${cardHoverClass}`}
              >
                <h3 className="font-serif text-lg font-medium text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Want to discuss your child&apos;s learning needs?{" "}
            <Link href="/contact" className="font-semibold text-accent-text hover:text-accent-button">
              Get in touch
            </Link>{" "}
            for a free assessment.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}