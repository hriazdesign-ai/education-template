import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import ProgrammesHero from "@/components/ProgrammesHero";
import StickyNoteCard from "@/components/StickyNoteCard";
import { IconCheck } from "@/components/icons";
import { programmes } from "@/lib/content";
import {
  contentToCards,
  groupTop,
  sectionBottom,
  sectionIntroGap,
  sectionTop,
} from "@/lib/layout";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Structured learning programmes for primary, GCSE and A-Level students. Flexible support tailored to each learner's goals.",
};

const faqs = [
  {
    question: "Which programme is right for my child?",
    answer:
      "We'll recommend the best starting point after a free learning assessment.",
  },
  {
    question: "Can we change programme later?",
    answer:
      "Yes. Support can be adjusted as your child's needs change, including around exams or school transitions.",
  },
  {
    question: "Do you offer online and in-person tutoring?",
    answer:
      "Yes. We offer flexible online and in-person support depending on location and availability.",
  },
  {
    question: "Is the assessment free?",
    answer: "Yes. The initial learning assessment is free, with no obligation to continue.",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <ProgrammesHero
        image={{
          src: "/images/secondary.jpg",
          alt: "Tutor supporting a student with schoolwork",
        }}
      />

      <section className={`bg-[var(--figma-mint-bg)] ${sectionTop} ${sectionBottom}`}>
        <Container>
          <div className="grid gap-6 overflow-visible min-[768px]:grid-cols-3 min-[1060px]:gap-12">
            {programmes.map((programme) => (
              <article
                key={programme.name}
                className={`relative flex flex-col overflow-visible border p-6 min-[768px]:p-8 ${
                  programme.highlighted
                    ? "border-[var(--figma-hero-teal)] bg-[var(--figma-hero-teal)] text-white"
                    : "border-[var(--figma-hero-teal)]/40 bg-white"
                }`}
              >
                {programme.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-none bg-[var(--figma-coral)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--figma-ink)]">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-xl leading-[22px] tracking-[-0.01em] ${
                    programme.highlighted ? "text-white" : "text-[var(--figma-ink)]"
                  }`}
                >
                  {programme.name}
                </h3>
                <p
                  className={`mt-4 text-base leading-[22px] ${
                    programme.highlighted ? "text-white/90" : "text-[var(--figma-ink)]"
                  }`}
                >
                  {programme.description}
                </p>
                {programme.supportNote && (
                  <p
                    className={`mt-3 text-sm leading-[22px] ${
                      programme.highlighted ? "text-white/75" : "text-[var(--figma-ink)]/60"
                    }`}
                  >
                    {programme.supportNote}
                  </p>
                )}

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base leading-[22px]">
                      <IconCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          programme.highlighted
                            ? "text-[var(--figma-coral)]"
                            : "text-[var(--figma-hero-teal)]"
                        }`}
                      />
                      <span className={programme.highlighted ? "text-white/90" : "text-[var(--figma-ink)]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 flex w-full items-center justify-center rounded-[64px] px-5 py-5 text-sm font-semibold transition-opacity hover:opacity-90 min-[768px]:inline-flex min-[768px]:w-auto ${
                    programme.highlighted
                      ? "bg-white text-[var(--figma-ink)]"
                      : "bg-[var(--figma-hero-teal)] text-white"
                  }`}
                >
                  Book a Free Assessment
                </Link>
              </article>
            ))}
          </div>

          <p className={`text-center text-base leading-[22px] text-[var(--figma-ink)]/70 ${groupTop}`}>
            Need something more tailored?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--figma-hero-teal)] transition-opacity hover:opacity-70"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll recommend the right learning programme for your child.
          </p>
        </Container>
      </section>

      <section className={`bg-[var(--figma-navy)] ${sectionTop} ${sectionBottom}`}>
        <Container>
          <Container
            size="prose"
            pad={false}
            className={`mx-auto flex flex-col items-center text-center ${sectionIntroGap}`}
          >
            <EyebrowPill variant="dark" className="px-[18px] py-3 text-base leading-4">
              FAQ
            </EyebrowPill>
            <h2 className="text-[28px] font-normal leading-[38px] tracking-[-0.4px] text-white min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px]">
              Common questions
            </h2>
            <p className="text-base leading-[22px] text-white">
              Everything families often ask before choosing a programme.
            </p>
          </Container>

          <div
            className={`grid gap-6 overflow-visible min-[768px]:grid-cols-2 min-[768px]:gap-4 min-[1060px]:grid-cols-4 min-[1060px]:gap-4 ${contentToCards}`}
          >
            {faqs.map((faq, index) => (
              <StickyNoteCard
                key={faq.question}
                index={index as 0 | 1 | 2 | 3}
                title={faq.question}
                description={faq.answer}
                paddingClassName="px-6 py-8 min-[1060px]:px-6 min-[1060px]:py-10"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        variant="homepage"
        title="Ready to find the right programme?"
        description="Book a free learning assessment and we'll help you choose support that fits your child's goals — with honest advice and no pressure."
      />
    </>
  );
}
