import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { IconCheck } from "@/components/icons";
import { cardHoverClass, cardHoverClassDark } from "@/lib/card-styles";
import { pricingPlans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear tutoring packages for primary, secondary, GCSE and A-Level students. Flexible support with no long-term contracts.",
};

const faqs = [
  {
    question: "Are there any setup fees?",
    answer:
      "No. The initial learning assessment is free, and we'll recommend the right support before you commit to regular sessions.",
  },
  {
    question: "Can I change my child's plan later?",
    answer:
      "Yes. You can increase, reduce or change support as your child's needs change, including around exams or school transitions.",
  },
  {
    question: "Do you offer online and in-person tutoring?",
    answer:
      "Yes. We offer flexible online tutoring and in-person support depending on location, availability and the student's needs.",
  },
  {
    question: "What if I'm not sure what my child needs?",
    answer:
      "That's exactly what the free assessment is for. We'll discuss goals, confidence, current challenges and recommend the most suitable support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Pricing"
        title="Simple tutoring packages, built around your child"
        description="Choose flexible learning support that fits your child's goals, schedule and stage of education — with clear pricing and no long-term commitment."
        primaryCta={{ label: "Book a free assessment", href: "/contact" }}
        secondaryCta={{ label: "Compare services", href: "/services" }}
        highlights={[
          "No long-term contracts",
          "Flexible session options",
          "Support for primary to A-Level",
        ]}
        image={{
          src: "/images/teaching-1.jpg",
          alt: "Tutor supporting a student with schoolwork",
          label: "Flexible learning support",
        }}
        showConsultationCard={false}
        padding="contact"
      />

      <section className="bg-section-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[8px] border p-6 sm:p-8 ${
                  plan.highlighted
                    ? `border-accent bg-primary text-white shadow-xl shadow-primary/15 ${cardHoverClassDark}`
                    : `border-primary/10 bg-white ${cardHoverClass}`
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-none bg-accent-button px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-serif text-2xl font-medium ${
                    plan.highlighted ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-white/90" : "text-text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-4xl font-medium ${
                      plan.highlighted ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/85" : "text-text-muted"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <IconCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-accent-on-dark" : "text-accent-text"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-white/90" : "text-text"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-section-warm"
                      : "bg-primary text-white hover:bg-primary-light"
                  }`}
                >
                  Book assessment
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            Need something more tailored?{" "}
            <Link href="/contact" className="font-semibold text-accent-text hover:text-accent-button">
              Contact us
            </Link>{" "}
            and we&apos;ll recommend the right learning support for your child.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      <section className="bg-section-warm pt-12 pb-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Everything you need to know before getting started."
            />
          </div>

          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className={`rounded-[8px] border border-primary/10 bg-white p-6 ${cardHoverClass}`}
              >
                <dt className="font-serif text-lg font-medium text-text">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Still comparing options?"
        description="Book a free learning assessment and we'll help you choose the right support for your child — with honest advice and no pressure."
      />
    </>
  );
}
